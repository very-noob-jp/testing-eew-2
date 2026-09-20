/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { KNET_STATIONS } from '../data/knetStations';
import {
  EEWReport,
  JMAIntensityGrade,
  Scenario,
  ShindoFlashArea,
  ShindoFlashReport,
  SpecialAdvisory,
  Station,
  SubEvent,
  WaveFront,
} from '../types/earthquake';
import {
  calculateDistanceToFaultSegment,
  calculateGroundMotion,
  calculateHypocenterDistance,
  calculateInstantaneousMotion,
  calculateSurfaceDistance,
  gradeToNumericRank,
  intensityToGrade,
  VP_KM_S,
  VS_KM_S,
} from './seismicPhysics';

export interface EngineTickResult {
  stations: Station[];
  pWaveRadiusKm: number;
  sWaveRadiusKm: number;
  activeWaveFronts: WaveFront[];
  activeEvents: SubEvent[];
  newEEW: EEWReport | null;
  newShindoFlash: ShindoFlashReport | null;
  newSpecialAdvisory: SpecialAdvisory | null;
}

interface SubEventState {
  reportsIssued: number;
  lastReportTimeSec: number;
  firstTriggerSec: number | null;
  finalReportIssued: boolean;
}

interface StationEventCalc {
  pTimeSec: number;
  sTimeSec: number;
  targetPga: number;
  targetIntensity: number;
}

export class EEWSimulationEngine {
  private scenario: Scenario;
  private stations: Station[] = [];
  private subEvents: SubEvent[] = [];
  private subEventStates = new Map<string, SubEventState>();
  private stationEventParams = new Map<string, Map<string, StationEventCalc>>();

  private isCanceled = false;
  private shindoStage1Issued = false;
  private shindoStage2Issued = false;
  private specialAdvisoryIssued = false;
  private startTimeFormatted: string;
  private currentElapsedSec = 0;

  constructor(scenario: Scenario) {
    this.scenario = scenario;
    const now = new Date();
    this.startTimeFormatted = now.toISOString();
    this.initEventsAndStations();
  }

  private initEventsAndStations() {
    this.subEventStates.clear();
    this.stationEventParams.clear();

    if (this.scenario.events && this.scenario.events.length > 0) {
      this.subEvents = this.scenario.events.map((ev) => ({ ...ev }));
    } else {
      this.subEvents = [
        {
          id: 'main_event',
          name: this.scenario.name,
          type: 'mainshock',
          triggerTimeSec: 0,
          epicenterName: this.scenario.epicenterName,
          lat: this.scenario.lat,
          lon: this.scenario.lon,
          depthKm: this.scenario.depthKm,
          magnitude: this.scenario.magnitude,
          faultType: this.scenario.faultType || 'crustal',
          faultStart: this.scenario.faultStart,
          faultEnd: this.scenario.faultEnd,
        },
      ];
    }

    for (const ev of this.subEvents) {
      this.subEventStates.set(ev.id, {
        reportsIssued: 0,
        lastReportTimeSec: -10,
        firstTriggerSec: null,
        finalReportIssued: false,
      });
    }

    this.stations = KNET_STATIONS.map((base) => {
      const isNoiseStation = this.scenario.cancelConfig?.noiseStationCode === base.code;
      return {
        ...base,
        surfaceDist: 0,
        targetPga: 0,
        targetIntensity: 0,
        currentGal: 0.05,
        currentIntensity: -1.8,
        intensityGrade: '震度0未満' as const,
        pArrived: false,
        sArrived: false,
        pTimeSec: 999,
        sTimeSec: 999,
        isTriggered: false,
        isFaulty: isNoiseStation,
      };
    });

    for (const ev of this.subEvents) {
      this.precomputeForSubEvent(ev);
    }

    this.updateStationRepresentativeParams();
  }

  private precomputeForSubEvent(ev: SubEvent) {
    const hasFault = Boolean(ev.faultStart && ev.faultEnd);

    for (const st of this.stations) {
      const surfaceDist = calculateSurfaceDistance(ev.lat, ev.lon, st.lat, st.lon);
      const effectiveDist = hasFault
        ? calculateDistanceToFaultSegment(st.lat, st.lon, ev.faultStart!, ev.faultEnd!)
        : surfaceDist;

      const hypocenterDist = calculateHypocenterDistance(surfaceDist, ev.depthKm);
      const tp = hypocenterDist / VP_KM_S;
      const ts = hypocenterDist / VS_KM_S;

      const isNoiseStation = Boolean(
        this.scenario.cancelConfig?.noiseStationCode === st.code && ev.triggerTimeSec === 0
      );

      const motion = isNoiseStation
        ? { pga: 1100, pgv: 85, intensity: 6.8 }
        : calculateGroundMotion(
            ev.magnitude,
            ev.depthKm,
            effectiveDist,
            st.siteAmp,
            ev.faultType || 'interplate'
          );

      if (!this.stationEventParams.has(st.code)) {
        this.stationEventParams.set(st.code, new Map());
      }
      this.stationEventParams.get(st.code)!.set(ev.id, {
        pTimeSec: tp,
        sTimeSec: ts,
        targetPga: motion.pga,
        targetIntensity: motion.intensity,
      });
    }
  }

  private updateStationRepresentativeParams() {
    const primaryEvent = this.subEvents[0];
    if (!primaryEvent) return;

    for (const st of this.stations) {
      const calc = this.stationEventParams.get(st.code)?.get(primaryEvent.id);
      if (calc) {
        st.surfaceDist = calculateSurfaceDistance(primaryEvent.lat, primaryEvent.lon, st.lat, st.lon);
        st.targetPga = calc.targetPga;
        st.targetIntensity = calc.targetIntensity;
        st.pTimeSec = Math.round(calc.pTimeSec * 10) / 10;
        st.sTimeSec = Math.round(calc.sTimeSec * 10) / 10;
      }
    }
  }

  /**
   * シミュレーション中に動的に余震を追加・発生させる
   */
  public triggerDynamicAftershock(
    params?:
      | number
      | {
          name?: string;
          magnitude?: number;
          depthKm?: number;
          lat?: number;
          lon?: number;
          epicenterName?: string;
        }
  ): SubEvent {
    const config = typeof params === 'number' ? { magnitude: params } : params;
    const aftershocksCount = this.subEvents.filter((e) => e.type === 'aftershock').length + 1;
    const mag =
      config?.magnitude ?? Math.max(5.2, Math.round((this.scenario.magnitude - 1.2) * 10) / 10);
    const depth = config?.depthKm ?? Math.max(8, this.scenario.depthKm);

    // 震央を少し分散させる (または指定座標)
    const latOffset = (Math.random() - 0.5) * 0.35;
    const lonOffset = (Math.random() - 0.5) * 0.35;
    const lat = config?.lat ?? Math.round((this.scenario.lat + latOffset) * 100) / 100;
    const lon = config?.lon ?? Math.round((this.scenario.lon + lonOffset) * 100) / 100;
    const epicenterName =
      config?.epicenterName ?? `${this.scenario.epicenterName}付近 (第${aftershocksCount}余震)`;

    const newEvent: SubEvent = {
      id: `aftershock_${Date.now()}`,
      name: config?.name ?? `【誘発余震】${epicenterName} (M${mag})`,
      type: 'aftershock',
      triggerTimeSec: Math.round(this.currentElapsedSec * 10) / 10,
      epicenterName,
      lat,
      lon,
      depthKm: depth,
      magnitude: mag,
      faultType: this.scenario.faultType || 'crustal',
      description: `シミュレーション実行中に誘発された突発的余震 (M${mag})`,
    };

    this.subEvents.push(newEvent);
    this.subEventStates.set(newEvent.id, {
      reportsIssued: 0,
      lastReportTimeSec: -10,
      firstTriggerSec: null,
      finalReportIssued: false,
    });

    this.precomputeForSubEvent(newEvent);
    return newEvent;
  }

  public reset(scenario?: Scenario) {
    if (scenario) {
      this.scenario = scenario;
    }
    this.currentElapsedSec = 0;
    this.isCanceled = false;
    this.shindoStage1Issued = false;
    this.shindoStage2Issued = false;
    this.specialAdvisoryIssued = false;
    const now = new Date();
    this.startTimeFormatted = now.toISOString();
    this.initEventsAndStations();
  }

  public getStations(): Station[] {
    return this.stations;
  }

  public getSubEvents(): SubEvent[] {
    return this.subEvents;
  }

  public tick(elapsedSec: number): EngineTickResult {
    this.currentElapsedSec = elapsedSec;

    // 現在活動中（triggerTimeSecに達した）サブイベントを抽出
    const activeEvents = this.subEvents.filter((ev) => elapsedSec >= ev.triggerTimeSec);

    // 各アクティブイベントの波面計算
    const activeWaveFronts: WaveFront[] = activeEvents.map((ev) => {
      const elapsedSinceTrigger = Math.max(0, elapsedSec - ev.triggerTimeSec);
      return {
        eventId: ev.id,
        name: ev.name,
        type: ev.type,
        lat: ev.lat,
        lon: ev.lon,
        depthKm: ev.depthKm,
        magnitude: ev.magnitude,
        epicenterName: ev.epicenterName,
        triggerTimeSec: ev.triggerTimeSec,
        elapsedSinceTrigger,
        pWaveRadiusKm: Math.round(VP_KM_S * elapsedSinceTrigger * 10) / 10,
        sWaveRadiusKm: Math.round(VS_KM_S * elapsedSinceTrigger * 10) / 10,
      };
    });

    // 代表の波面 (最新または主要波面)
    const latestWave = activeWaveFronts[activeWaveFronts.length - 1];
    const pWaveRadiusKm = latestWave ? latestWave.pWaveRadiusKm : 0;
    const sWaveRadiusKm = latestWave ? latestWave.sWaveRadiusKm : 0;

    // 観測点の動的物理計算 (複数地震波のエネルギー・加速度合成)
    const count = this.stations.length;
    let anyPArrivedCount = 0;

    for (let i = 0; i < count; i++) {
      const st = this.stations[i];
      const isNoise = Boolean(st.isFaulty && elapsedSec >= 0.5 && !this.isCanceled);

      let totalGalSquare = 0.0025;
      let maxIntensity = -1.8;
      let pArrivedAny = false;
      let sArrivedAny = false;
      let triggeredAny = false;

      const stationCalcs = this.stationEventParams.get(st.code);

      for (const ev of activeEvents) {
        const calc = stationCalcs?.get(ev.id);
        if (!calc) continue;

        const relSec = elapsedSec - ev.triggerTimeSec;
        if (relSec < calc.pTimeSec && !isNoise) {
          continue;
        }

        const motion = calculateInstantaneousMotion(
          relSec,
          calc.pTimeSec,
          calc.sTimeSec,
          calc.targetPga,
          calc.targetIntensity,
          st.lat,
          st.lon,
          isNoise
        );

        totalGalSquare += Math.pow(motion.currentGal, 2);
        if (motion.currentIntensity > maxIntensity) {
          maxIntensity = motion.currentIntensity;
        }

        if (relSec >= calc.pTimeSec || isNoise) pArrivedAny = true;
        if (relSec >= calc.sTimeSec) sArrivedAny = true;
        if ((relSec >= calc.pTimeSec && motion.currentGal >= 4.0) || isNoise) {
          triggeredAny = true;
        }
      }

      const compositeGal = Math.round(Math.sqrt(totalGalSquare) * 100) / 100;
      const calcIntensityFromGal =
        compositeGal > 0.1 ? 2.0 * Math.log10(compositeGal) + 0.94 : -1.8;
      const finalIntensity = Math.max(maxIntensity, calcIntensityFromGal);
      const grade = intensityToGrade(finalIntensity);

      st.currentGal = Math.max(0.04, compositeGal);
      st.currentIntensity = finalIntensity;
      st.intensityGrade = grade;
      st.pArrived = pArrivedAny;
      st.sArrived = sArrivedAny;
      st.isTriggered = triggeredAny;

      if (triggeredAny) {
        anyPArrivedCount++;
      }
    }

    // キャンセル報判定
    let newEEW: EEWReport | null = null;
    let newShindoFlash: ShindoFlashReport | null = null;
    let newSpecialAdvisory: SpecialAdvisory | null = null;

    if (
      this.scenario.cancelConfig &&
      elapsedSec >= this.scenario.cancelConfig.triggerAfterSec &&
      !this.isCanceled
    ) {
      this.isCanceled = true;
      const primaryState = this.subEventStates.get(this.subEvents[0]?.id || '');
      const reportNum = (primaryState ? primaryState.reportsIssued : 1) + 1;
      const now = new Date();

      newEEW = {
        eventId: this.startTimeFormatted.replace(/[-:T.Z]/g, '').slice(0, 14),
        reportNum,
        reportTime: now.toLocaleTimeString('ja-JP'),
        originTime: now.toLocaleTimeString('ja-JP'),
        hypocenterName: this.scenario.epicenterName,
        latitude: this.scenario.lat,
        longitude: this.scenario.lon,
        depthKm: this.scenario.depthKm,
        magnitude: this.scenario.magnitude,
        maxIntensity: '0' as JMAIntensityGrade,
        isWarn: false,
        isFinal: true,
        isCancel: true,
        cancelReason: this.scenario.cancelConfig.reason,
        warningAreas: [],
        forecastRegions: [],
      };

      return {
        stations: this.stations,
        pWaveRadiusKm,
        sWaveRadiusKm,
        activeWaveFronts,
        activeEvents,
        newEEW,
        newShindoFlash: null,
        newSpecialAdvisory: null,
      };
    }

    // 南海トラフ地震臨時情報 (巨大地震警戒等) の判定
    if (
      this.scenario.specialAdvisoryConfig &&
      elapsedSec >= this.scenario.specialAdvisoryConfig.triggerAfterSec &&
      !this.specialAdvisoryIssued &&
      !this.isCanceled
    ) {
      this.specialAdvisoryIssued = true;
      const cfg = this.scenario.specialAdvisoryConfig;
      newSpecialAdvisory = {
        type: cfg.type,
        announcedTime: new Date().toLocaleTimeString('ja-JP'),
        headline: cfg.headline,
        targetArea: cfg.targetArea,
        description: cfg.description,
      };
    }

    // 各サブイベントごとのEEW発報判定
    if (!this.isCanceled) {
      for (let idx = activeEvents.length - 1; idx >= 0; idx--) {
        const ev = activeEvents[idx];
        const state = this.subEventStates.get(ev.id);
        if (!state || state.finalReportIssued) continue;

        const relSec = elapsedSec - ev.triggerTimeSec;

        let evTriggeredCount = 0;
        const stationCalcs = this.stationEventParams;
        for (const st of this.stations) {
          const c = stationCalcs.get(st.code)?.get(ev.id);
          if (c && relSec >= c.pTimeSec && c.targetPga >= 4.0) {
            evTriggeredCount++;
          }
        }

        if (evTriggeredCount > 0 && state.firstTriggerSec === null) {
          state.firstTriggerSec = relSec;
        }

        const shouldTriggerReport1 =
          state.reportsIssued === 0 &&
          state.firstTriggerSec !== null &&
          relSec - state.firstTriggerSec >= 0.5;

        const shouldTriggerUpdate =
          state.reportsIssued > 0 &&
          state.reportsIssued < 12 &&
          relSec - state.lastReportTimeSec >= 2.0 &&
          relSec < 45;

        const isStableForFinal =
          state.reportsIssued >= 5 && (state.reportsIssued >= 8 || relSec >= 25);
        const shouldTriggerFinal =
          state.reportsIssued > 0 &&
          isStableForFinal &&
          relSec - state.lastReportTimeSec >= 2.5;

        if (shouldTriggerFinal) {
          state.reportsIssued++;
          state.lastReportTimeSec = relSec;
          state.finalReportIssued = true;
          newEEW = this.generateEEWReportForEvent(
            ev,
            state.reportsIssued,
            relSec,
            true,
            evTriggeredCount,
            idx
          );
          break;
        } else if (shouldTriggerReport1 || shouldTriggerUpdate) {
          state.reportsIssued++;
          state.lastReportTimeSec = relSec;
          newEEW = this.generateEEWReportForEvent(
            ev,
            state.reportsIssued,
            relSec,
            false,
            evTriggeredCount,
            idx
          );
          break;
        }
      }
    }

    // 震度速報の判定 (発生から58秒・90秒)
    if (!this.isCanceled && this.scenario.magnitude >= 4.0) {
      if (!this.shindoStage1Issued && elapsedSec >= 58) {
        this.shindoStage1Issued = true;
        newShindoFlash = this.generateShindoFlashStage1(elapsedSec);
      } else if (this.shindoStage1Issued && !this.shindoStage2Issued && elapsedSec >= 90) {
        this.shindoStage2Issued = true;
        newShindoFlash = this.generateShindoFlashStage2(elapsedSec);
      }
    }

    return {
      stations: this.stations,
      pWaveRadiusKm,
      sWaveRadiusKm,
      activeWaveFronts,
      activeEvents,
      newEEW,
      newShindoFlash,
      newSpecialAdvisory,
    };
  }

  private generateEEWReportForEvent(
    ev: SubEvent,
    reportNum: number,
    relSec: number,
    isFinal: boolean,
    triggeredCount: number,
    eventIndex: number
  ): EEWReport {
    const now = new Date();
    const noiseMagnitude = isFinal ? 0 : Math.max(0, (5 - reportNum) * 0.06);
    const estMag = isFinal
      ? ev.magnitude
      : Math.round((ev.magnitude + Math.sin(reportNum * 2.5) * noiseMagnitude) * 10) / 10;
    const estDepth = isFinal
      ? ev.depthKm
      : Math.max(5, Math.round(ev.depthKm + Math.cos(reportNum * 2.0) * noiseMagnitude * 10));

    let maxPredictedRank = 0;
    let maxPredictedGrade: JMAIntensityGrade = '1';
    const warningAreaSet = new Set<string>();
    const forecastRegions: {
      regionName: string;
      forecastIntensity: JMAIntensityGrade;
      arrivalTimeSec: number;
    }[] = [];

    for (const st of this.stations) {
      const calc = this.stationEventParams.get(st.code)?.get(ev.id);
      if (!calc) continue;

      const adjustedIntensity = calc.targetIntensity + (estMag - ev.magnitude) * 1.1;
      const grade = intensityToGrade(adjustedIntensity);
      const rank = gradeToNumericRank(grade);

      if (rank > maxPredictedRank && grade !== '震度0未満') {
        maxPredictedRank = rank;
        maxPredictedGrade = grade;
      }

      if (rank >= 5) {
        warningAreaSet.add(st.pref);
      }

      if (rank >= 4 && forecastRegions.length < 15) {
        forecastRegions.push({
          regionName: `${st.pref} (${st.name})`,
          forecastIntensity: grade === '震度0未満' ? ('0' as JMAIntensityGrade) : grade,
          arrivalTimeSec: Math.max(0, Math.round((calc.sTimeSec - relSec) * 10) / 10),
        });
      }
    }

    const isWarn = (maxPredictedRank >= 6 || estMag >= 6.5) && triggeredCount >= 2;

    const baseId = this.startTimeFormatted.replace(/[-:T.Z]/g, '').slice(0, 14);
    const eventId = eventIndex === 0 ? baseId : `${baseId}_${eventIndex + 1}`;

    return {
      eventId,
      reportNum,
      reportTime: now.toLocaleTimeString('ja-JP'),
      originTime: new Date(Date.now() - relSec * 1000).toLocaleTimeString('ja-JP'),
      hypocenterName: ev.epicenterName,
      latitude: ev.lat,
      longitude: ev.lon,
      depthKm: estDepth,
      magnitude: estMag,
      maxIntensity: maxPredictedGrade,
      isWarn,
      isFinal,
      isCancel: false,
      warningAreas: Array.from(warningAreaSet),
      forecastRegions: forecastRegions.sort(
        (a, b) =>
          gradeToNumericRank(b.forecastIntensity) - gradeToNumericRank(a.forecastIntensity)
      ),
    };
  }

  private generateShindoFlashStage1(elapsedSec: number): ShindoFlashReport {
    const now = new Date();
    const originTime = new Date(Date.now() - elapsedSec * 1000).toLocaleTimeString('ja-JP');

    let maxIntensity: JMAIntensityGrade = '1';
    let maxRank = 1;
    const areaMap = new Map<string, ShindoFlashArea>();

    for (const st of this.stations) {
      const rawGrade =
        st.intensityGrade !== '震度0未満'
          ? st.intensityGrade
          : intensityToGrade(st.targetIntensity ?? 1.0);
      const effectiveRank = gradeToNumericRank(rawGrade);

      if (effectiveRank >= 3) {
        const effectiveGrade = rawGrade as JMAIntensityGrade;
        if (effectiveRank > maxRank) {
          maxRank = effectiveRank;
          maxIntensity = effectiveGrade;
        }

        if (!areaMap.has(st.pref)) {
          areaMap.set(st.pref, {
            pref: st.pref,
            regionName: st.pref,
            intensity: effectiveGrade,
            stations: [],
          });
        }

        const area = areaMap.get(st.pref)!;
        if (effectiveRank > gradeToNumericRank(area.intensity)) {
          area.intensity = effectiveGrade;
        }
        if (area.stations.length < 6) {
          area.stations.push({
            name: st.name,
            intensity: effectiveGrade,
            gal: Math.max(st.currentGal ?? 0, Math.round((st.targetPga ?? 10) * 0.9)),
          });
        }
      }
    }

    const areas = Array.from(areaMap.values()).sort(
      (a, b) => gradeToNumericRank(b.intensity) - gradeToNumericRank(a.intensity)
    );

    const text = `【震度速報】
${originTime}頃、地震による強い揺れを観測しました。
震度３以上が観測された地域をお知らせします。（震源地・深さは気象庁で現在調査中）

最大震度: 震度${maxIntensity}

各地の震度は以下の通りです:
${areas.map((a) => `■ 震度${a.intensity}: ${a.pref}`).join('\n')}

今後の情報にご注意ください。`;

    return {
      stage: 1,
      title: '震度速報 (震度3以上・大まかな地域)',
      announcedTime: now.toLocaleTimeString('ja-JP'),
      originTime,
      maxIntensity,
      tsunamiStatus:
        '現在、津波の影響を気象庁で調査中です。念のため海岸や河口付近から離れてください。',
      textMessage: text,
      areas,
    };
  }

  private generateShindoFlashStage2(elapsedSec: number): ShindoFlashReport {
    const now = new Date();
    const originTime = new Date(Date.now() - elapsedSec * 1000).toLocaleTimeString('ja-JP');

    let maxIntensity: JMAIntensityGrade = '1';
    let maxRank = 1;
    const areaMap = new Map<string, ShindoFlashArea>();

    for (const st of this.stations) {
      const finalGrade = intensityToGrade(st.currentIntensity);
      const rank = gradeToNumericRank(finalGrade);

      if (rank >= 2) {
        if (rank > maxRank) {
          maxRank = rank;
          maxIntensity = finalGrade as JMAIntensityGrade;
        }

        if (!areaMap.has(st.pref)) {
          areaMap.set(st.pref, {
            pref: st.pref,
            regionName: st.pref,
            intensity: finalGrade as JMAIntensityGrade,
            stations: [],
          });
        }

        const area = areaMap.get(st.pref)!;
        if (rank > gradeToNumericRank(area.intensity)) {
          area.intensity = finalGrade as JMAIntensityGrade;
        }
        if (area.stations.length < 6) {
          area.stations.push({
            name: st.name,
            intensity: finalGrade as JMAIntensityGrade,
            gal: Math.round((st.currentGal ?? 10) * 10) / 10,
          });
        }
      }
    }

    const areas = Array.from(areaMap.values()).sort(
      (a, b) => gradeToNumericRank(b.intensity) - gradeToNumericRank(a.intensity)
    );

    const tsunamiStatus =
      this.scenario.magnitude >= 7.0 && this.scenario.depthKm <= 40
        ? 'この地震により、大津波警報・津波警報が発表されています。ただちに命を守るため高台へ避難してください。'
        : 'この地震による津波の心配はありません。';

    const text = `【震源・震度に関する情報】
${originTime}頃、地震がありました。
震源地: ${this.scenario.epicenterName} (北緯${this.scenario.lat}度, 東経${this.scenario.lon}度)
震源の深さ: 約${this.scenario.depthKm}km
地震の規模: M${this.scenario.magnitude}
最大震度: 震度${maxIntensity}

${tsunamiStatus}

[各地の震度 (詳細観測点)]
${areas
  .map(
    (a) =>
      `■ 震度${a.intensity}: ${a.pref}\n  ${a.stations
        .map((s) => `${s.name}(${s.intensity})`)
        .join(', ')}`
  )
  .join('\n')}`;

    return {
      stage: 2,
      title: '震源・震度に関する情報 (確定報)',
      announcedTime: now.toLocaleTimeString('ja-JP'),
      originTime,
      hypocenterName: this.scenario.epicenterName,
      latitude: this.scenario.lat,
      longitude: this.scenario.lon,
      depthKm: this.scenario.depthKm,
      magnitude: this.scenario.magnitude,
      maxIntensity,
      tsunamiStatus,
      textMessage: text,
      areas,
    };
  }
}
