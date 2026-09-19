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
  Station,
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
  newEEW: EEWReport | null;
  newShindoFlash: ShindoFlashReport | null;
}

export class EEWSimulationEngine {
  private scenario: Scenario;
  private stations: Station[] = [];
  private reportsIssued = 0;
  private lastReportTimeSec = -10;
  private isCanceled = false;
  private finalReportIssued = false;
  private shindoStage1Issued = false;
  private shindoStage2Issued = false;
  private firstTriggerSec: number | null = null;
  private startTimeFormatted: string;

  constructor(scenario: Scenario) {
    this.scenario = scenario;
    const now = new Date();
    this.startTimeFormatted = now.toISOString();
    this.initStations();
  }

  private initStations() {
    const hasFault = Boolean(this.scenario.faultStart && this.scenario.faultEnd);

    this.stations = KNET_STATIONS.map((base) => {
      const surfaceDist = calculateSurfaceDistance(
        this.scenario.lat,
        this.scenario.lon,
        base.lat,
        base.lon
      );

      // 有限断層モデルが存在する場合は最短断層距離 (R_rup) を算定
      const effectiveDist = hasFault
        ? calculateDistanceToFaultSegment(
            base.lat,
            base.lon,
            this.scenario.faultStart!,
            this.scenario.faultEnd!
          )
        : surfaceDist;

      const hypocenterDist = calculateHypocenterDistance(surfaceDist, this.scenario.depthKm);

      const tp = hypocenterDist / VP_KM_S;
      const ts = hypocenterDist / VS_KM_S;

      const isNoiseStation = this.scenario.cancelConfig?.noiseStationCode === base.code;

      const motion = isNoiseStation
        ? { pga: 1100, pgv: 85, intensity: 6.8 }
        : calculateGroundMotion(
            this.scenario.magnitude,
            this.scenario.depthKm,
            effectiveDist,
            base.siteAmp,
            this.scenario.faultType || 'crustal'
          );

      return {
        ...base,
        surfaceDist,
        targetPga: motion.pga,
        targetIntensity: motion.intensity,
        currentGal: 0.05,
        currentIntensity: -1.8,
        intensityGrade: '震度0未満' as const,
        pArrived: false,
        sArrived: false,
        pTimeSec: Math.round(tp * 10) / 10,
        sTimeSec: Math.round(ts * 10) / 10,
        isTriggered: false,
        isFaulty: isNoiseStation,
      };
    });
  }

  public reset(scenario?: Scenario) {
    if (scenario) {
      this.scenario = scenario;
    }
    this.reportsIssued = 0;
    this.lastReportTimeSec = -10;
    this.isCanceled = false;
    this.finalReportIssued = false;
    this.shindoStage1Issued = false;
    this.shindoStage2Issued = false;
    this.firstTriggerSec = null;
    const now = new Date();
    this.startTimeFormatted = now.toISOString();
    this.initStations();
  }

  public getStations(): Station[] {
    return this.stations;
  }

  public tick(elapsedSec: number): EngineTickResult {
    const pWaveRadiusKm = Math.max(0, VP_KM_S * elapsedSec);
    const sWaveRadiusKm = Math.max(0, VS_KM_S * elapsedSec);

    let triggeredCount = 0;
    const count = this.stations.length;

    // 観測点の動的物理計算 (高速インプレース更新)
    for (let i = 0; i < count; i++) {
      const st = this.stations[i];
      const isNoise = Boolean(st.isFaulty && elapsedSec >= 0.5 && !this.isCanceled);
      const targetPga = st.targetPga ?? 5;
      const targetIntensity = st.targetIntensity ?? 1.0;

      // 早期バイパス: 地震波未到達かつノイズなしの場合は最速計算
      if (!isNoise && elapsedSec < st.pTimeSec) {
        st.currentGal = 0.04;
        st.currentIntensity = -1.8;
        st.intensityGrade = '震度0未満';
        st.pArrived = false;
        st.sArrived = false;
        st.isTriggered = false;
        continue;
      }

      const motion = calculateInstantaneousMotion(
        elapsedSec,
        st.pTimeSec,
        st.sTimeSec,
        targetPga,
        targetIntensity,
        st.lat,
        st.lon,
        isNoise
      );

      const pArrived = Boolean(elapsedSec >= st.pTimeSec || isNoise);
      const sArrived = Boolean(elapsedSec >= st.sTimeSec);
      const isTriggered = Boolean((pArrived && motion.currentGal >= 4.0) || isNoise);

      if (isTriggered) {
        triggeredCount++;
      }

      st.currentGal = motion.currentGal;
      st.currentIntensity = motion.currentIntensity;
      st.intensityGrade = motion.grade;
      st.pArrived = pArrived;
      st.sArrived = sArrived;
      st.isTriggered = isTriggered;
    }

    if (triggeredCount > 0 && this.firstTriggerSec === null) {
      this.firstTriggerSec = elapsedSec;
    }

    let newEEW: EEWReport | null = null;
    let newShindoFlash: ShindoFlashReport | null = null;

    // キャンセル報判定
    if (
      this.scenario.cancelConfig &&
      elapsedSec >= this.scenario.cancelConfig.triggerAfterSec &&
      !this.isCanceled
    ) {
      this.isCanceled = true;
      this.reportsIssued++;
      newEEW = this.generateCancelReport(elapsedSec);
      return {
        stations: this.stations,
        pWaveRadiusKm,
        sWaveRadiusKm,
        newEEW,
        newShindoFlash: null,
      };
    }

    // 通常のEEW発報判定 (キャンセル発生後または最終報後は発報停止)
    if (!this.isCanceled && !this.finalReportIssued) {
      // 第1報発報条件: 最初の検知から約0.8秒後
      const shouldTriggerReport1 =
        this.reportsIssued === 0 &&
        this.firstTriggerSec !== null &&
        elapsedSec - this.firstTriggerSec >= 0.8;

      // 続報発報条件: 前回発報から約2.2秒以上経過、かつ伝播中
      const shouldTriggerUpdate =
        this.reportsIssued > 0 &&
        this.reportsIssued < 10 &&
        elapsedSec - this.lastReportTimeSec >= 2.2 &&
        elapsedSec < 60;

      // 最終報条件:
      // 1. 報数が進み (4報以上)、観測点数または時間が進んで推定が安定
      const isStableForFinal =
        this.reportsIssued >= 4 &&
        (this.reportsIssued >= 7 || triggeredCount >= 18 || elapsedSec >= 30);

      const shouldTriggerFinal =
        this.reportsIssued > 0 &&
        isStableForFinal &&
        elapsedSec - this.lastReportTimeSec >= 2.5;

      if (shouldTriggerFinal) {
        this.reportsIssued++;
        this.lastReportTimeSec = elapsedSec;
        this.finalReportIssued = true;
        newEEW = this.generateEEWReport(elapsedSec, true, triggeredCount);
      } else if (shouldTriggerReport1 || shouldTriggerUpdate) {
        this.reportsIssued++;
        this.lastReportTimeSec = elapsedSec;
        newEEW = this.generateEEWReport(elapsedSec, false, triggeredCount);
      }
    }

    // 震度速報の判定 (キャンセル報でない場合)
    if (!this.isCanceled && this.scenario.magnitude >= 4.0) {
      // 第1段階: 震度速報 (発生から約1分 = 58秒、震源・深さ調査中、震度3以上観測地域を発表)
      if (!this.shindoStage1Issued && elapsedSec >= 58) {
        this.shindoStage1Issued = true;
        newShindoFlash = this.generateShindoFlashStage1(elapsedSec);
      }
      // 第2段階: 震源・震度に関する情報 (発生から約1分30秒 = 90秒、地盤増幅・詳細観測点確定)
      else if (this.shindoStage1Issued && !this.shindoStage2Issued && elapsedSec >= 90) {
        this.shindoStage2Issued = true;
        newShindoFlash = this.generateShindoFlashStage2(elapsedSec);
      }
    }

    return {
      stations: this.stations,
      pWaveRadiusKm,
      sWaveRadiusKm,
      newEEW,
      newShindoFlash,
    };
  }

  private generateEEWReport(elapsedSec: number, isFinal: boolean, triggeredCount = 1): EEWReport {
    const reportNum = this.reportsIssued;
    const now = new Date();

    // 観測点が増えるにつれ、推定精度が向上し最終報で完全収束する物理モデル
    const noiseMagnitude = isFinal ? 0 : Math.max(0, (6 - reportNum) * 0.05);
    const estMag = isFinal
      ? this.scenario.magnitude
      : Math.round((this.scenario.magnitude + (Math.sin(reportNum * 2.5) * noiseMagnitude)) * 10) / 10;

    const estDepth = isFinal
      ? this.scenario.depthKm
      : Math.max(5, Math.round(this.scenario.depthKm + Math.cos(reportNum * 2.0) * noiseMagnitude * 10));

    // 各地域における予測震度の高速算出
    let maxPredictedRank = 0;
    let maxPredictedGrade: JMAIntensityGrade = '1';
    const warningAreaSet = new Set<string>();
    const forecastRegions: { regionName: string; forecastIntensity: JMAIntensityGrade; arrivalTimeSec: number }[] = [];

    const count = this.stations.length;
    for (let i = 0; i < count; i++) {
      const st = this.stations[i];
      const targetIntensity = st.targetIntensity ?? 1.0;
      // 簡易マグニチュード補正
      const adjustedIntensity = targetIntensity + (estMag - this.scenario.magnitude) * 1.1;
      const grade = intensityToGrade(adjustedIntensity);
      const rank = gradeToNumericRank(grade);

      if (rank > maxPredictedRank && grade !== '震度0未満') {
        maxPredictedRank = rank;
        maxPredictedGrade = grade;
      }

      // 警報対象地域判定: 予測震度4以上の地域
      if (rank >= 5) {
        warningAreaSet.add(st.pref);
      }

      if (rank >= 4 && forecastRegions.length < 15) {
        forecastRegions.push({
          regionName: `${st.pref} (${st.name})`,
          forecastIntensity: grade === '震度0未満' ? ('0' as JMAIntensityGrade) : grade,
          arrivalTimeSec: Math.max(0, Math.round((st.sTimeSec - elapsedSec) * 10) / 10),
        });
      }
    }

    // 気象庁警報発令基準:
    // 1. 2観測点以上で検知
    // 2. 最大予測震度が5弱以上 (maxPredictedRank >= 6) または M6.5以上
    // ⇒ 震度4以下の場合は「緊急地震速報（予報）」(isWarn = false)
    const isWarn = (maxPredictedRank >= 6 || estMag >= 6.5) && triggeredCount >= 2;
    const eventId = `EEW_${this.startTimeFormatted.replace(/[-:T.Z]/g, '').slice(0, 14)}`;

    return {
      eventId,
      reportNum,
      reportTime: now.toLocaleTimeString('ja-JP'),
      originTime: new Date(Date.now() - elapsedSec * 1000).toLocaleTimeString('ja-JP'),
      hypocenterName: this.scenario.epicenterName,
      latitude: this.scenario.lat,
      longitude: this.scenario.lon,
      depthKm: estDepth,
      magnitude: estMag,
      maxIntensity: maxPredictedGrade,
      isWarn,
      isFinal,
      isCancel: false,
      warningAreas: isWarn ? Array.from(warningAreaSet) : [],
      forecastRegions: forecastRegions.slice(0, 10),
      plumTriggered: reportNum >= 3,
    };
  }

  private generateCancelReport(elapsedSec: number): EEWReport {
    const now = new Date();
    const eventId = `EEW_${this.startTimeFormatted.replace(/[-:T.Z]/g, '').slice(0, 14)}`;
    const reason = this.scenario.cancelConfig?.reason || '落雷等による観測点ノイズ誤検知';

    return {
      eventId,
      reportNum: this.reportsIssued,
      reportTime: now.toLocaleTimeString('ja-JP'),
      originTime: new Date(Date.now() - elapsedSec * 1000).toLocaleTimeString('ja-JP'),
      hypocenterName: this.scenario.epicenterName,
      latitude: this.scenario.lat,
      longitude: this.scenario.lon,
      depthKm: this.scenario.depthKm,
      magnitude: this.scenario.magnitude,
      maxIntensity: '0',
      isWarn: false,
      isFinal: true,
      isCancel: true,
      cancelReason: reason,
      warningAreas: [],
      forecastRegions: [],
    };
  }

  /**
   * 震度速報 (第1段階): 地震発生から約1分 (58秒)。震源・深さは調査中、震度3以上が観測された大まかな地域を発表
   */
  private generateShindoFlashStage1(elapsedSec: number): ShindoFlashReport {
    const now = new Date();
    const originTime = new Date(Date.now() - elapsedSec * 1000).toLocaleTimeString('ja-JP');

    let maxIntensity: JMAIntensityGrade = '3';
    let maxRank = 4;

    const areaMap = new Map<string, ShindoFlashArea>();

    for (let i = 0; i < this.stations.length; i++) {
      const st = this.stations[i];
      const obsRank = gradeToNumericRank(st.intensityGrade);
      const targetRank = gradeToNumericRank(intensityToGrade(st.targetIntensity ?? 0));
      const effectiveRank = Math.max(obsRank, st.sArrived ? targetRank : 0);

      // 震度3以上 (rank >= 4) の地域を抽出
      if (effectiveRank < 4) continue;

      const effectiveGrade = obsRank >= 4 ? (st.intensityGrade as JMAIntensityGrade) : (intensityToGrade(st.targetIntensity ?? 0) as JMAIntensityGrade);

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
      tsunamiStatus: '現在、津波の影響を気象庁で調査中です。念のため海岸や河口付近から離れてください。',
      textMessage: text,
      areas,
    };
  }

  /**
   * 震源・震度に関する情報 (第2段階): 発生から約1分30秒。震源、深さ、マグニチュード、詳細観測点震度を発表
   */
  private generateShindoFlashStage2(elapsedSec: number): ShindoFlashReport {
    const now = new Date();
    const originTime = new Date(Date.now() - elapsedSec * 1000).toLocaleTimeString('ja-JP');

    let maxIntensity: JMAIntensityGrade = '1';
    let maxRank = 1;

    const areaMap = new Map<string, ShindoFlashArea>();

    for (let i = 0; i < this.stations.length; i++) {
      const st = this.stations[i];
      const targetIntensity = st.targetIntensity ?? 1.0;
      const finalGrade = intensityToGrade(targetIntensity);
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
            gal: Math.round((st.targetPga ?? 10) * 10) / 10,
          });
        }
      }
    }

    const areas = Array.from(areaMap.values()).sort(
      (a, b) => gradeToNumericRank(b.intensity) - gradeToNumericRank(a.intensity)
    );

    const tsunamiStatus =
      this.scenario.magnitude >= 7.0 && this.scenario.depthKm <= 40
        ? 'この地震により、津波警報・注意報が発表されています。ただちに高台へ避難してください。'
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

