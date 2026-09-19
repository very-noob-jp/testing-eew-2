/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { EEWReport, ShindoFlashReport, JMAIntensityGrade } from '../types/earthquake';

// JMA震度表記からP2Pスケール数値への変換 (10=震度1, 45=5弱, 50=5強, 70=7)
export function jmaGradeToP2PScale(grade: JMAIntensityGrade | string): number {
  switch (grade) {
    case '1':
      return 10;
    case '2':
      return 20;
    case '3':
      return 30;
    case '4':
      return 40;
    case '5弱':
      return 45;
    case '5強':
      return 50;
    case '6弱':
      return 55;
    case '6強':
      return 60;
    case '7':
      return 70;
    case '0':
    case '0未満':
    case '震度0未満':
      return 0;
    default:
      return -1;
  }
}

// 震度文字列から概算計測震度Floatへの変換 (Wolfx MaxIntensity_Float互換)
export function jmaGradeToFloat(grade: JMAIntensityGrade | string): number {
  switch (grade) {
    case '1':
      return 1.2;
    case '2':
      return 2.1;
    case '3':
      return 3.2;
    case '4':
      return 4.1;
    case '5弱':
      return 4.8;
    case '5強':
      return 5.3;
    case '6弱':
      return 5.8;
    case '6強':
      return 6.3;
    case '7':
      return 6.8;
    case '0':
    case '0未満':
    case '震度0未満':
      return 0.4;
    default:
      return 0.0;
  }
}

/**
 * Wolfx (Project Wolfx) 緊急地震速報 JSON 形式への変換
 */
export function createWolfxFormat(eew: EEWReport) {
  const nowStr = new Date().toISOString().replace('T', ' ').substring(0, 19).replace(/-/g, '/');
  const arrivalBase = new Date(Date.now() + 15000)
    .toISOString()
    .replace('T', ' ')
    .substring(0, 19)
    .replace(/-/g, '/');

  const warnAreas = (eew.warningAreas || []).map((area) => ({
    Pref: area,
    Name: area,
    ScaleFrom: '4',
    ScaleTo: eew.maxIntensity,
    ArrivalTime: arrivalBase,
  }));

  const title = eew.isCancel
    ? '緊急地震速報（取消）'
    : eew.isWarn
    ? '緊急地震速報（警報）'
    : '緊急地震速報（予報）';

  const type = eew.isCancel ? '取消' : eew.isFinal ? '最終' : '通常';

  return {
    type: 'wolfx_eew',
    Title: title,
    CodeType: 'EEW',
    Issue: {
      Source: '気象庁',
      Time: nowStr,
      Type: type,
    },
    EventID: eew.eventId,
    Serial: eew.reportNum,
    Hypocenter: eew.hypocenterName,
    Latitude: eew.latitude,
    Longitude: eew.longitude,
    Depth: eew.depthKm,
    Magunitude: eew.magnitude,
    Magnitude: eew.magnitude,
    MaxIntensity: eew.maxIntensity,
    MaxIntensity_Float: jmaGradeToFloat(eew.maxIntensity),
    Accuracy: {
      Epicenter: eew.plumTriggered ? 'PLUM' : '1',
      Depth: '1',
      Magnitude: '1',
    },
    isWarn: eew.isWarn,
    isFinal: eew.isFinal,
    isCancel: eew.isCancel,
    isAssumption: false,
    WarnArea: warnAreas,
    OriginalText: eew.isCancel
      ? `緊急地震速報（取消）: 先ほどの緊急地震速報は取り消されました（${eew.cancelReason || '誤検知'}）`
      : `${title} 第${eew.reportNum}報: ${eew.hypocenterName}で地震。深さ${eew.depthKm}km、規模M${eew.magnitude}、最大震度${eew.maxIntensity}`,
    status: 0,
  };
}

/**
 * P2P地震情報 (P2PQuake v2) 緊急地震速報 (Code: 556) 形式への変換
 */
export function createP2PEEWFormat(eew: EEWReport) {
  const timeStr = new Date().toISOString().replace('T', ' ').substring(0, 19).replace(/-/g, '/');
  const originStr = eew.originTime || timeStr;
  const maxScale = jmaGradeToP2PScale(eew.maxIntensity);

  const areas = (eew.warningAreas || []).map((area) => ({
    pref: area,
    name: area,
    scaleFrom: 40,
    scaleTo: maxScale >= 40 ? maxScale : 40,
    kindCode: '11',
    arrivalTime: timeStr,
  }));

  return {
    id: `p2p_eew_${eew.eventId}_${eew.reportNum}`,
    code: 556,
    time: timeStr,
    test: true,
    earthquake: {
      originTime: originStr,
      hypocenter: {
        name: eew.hypocenterName,
        reduceName: eew.hypocenterName,
        latitude: eew.latitude,
        longitude: eew.longitude,
        depth: eew.depthKm,
        magnitude: eew.magnitude,
      },
    },
    issue: {
      time: timeStr,
      eventId: eew.eventId,
      serial: String(eew.reportNum),
    },
    cancelled: eew.isCancel,
    isWarning: eew.isWarn,
    isFinal: eew.isFinal,
    maxScale: eew.isCancel ? 0 : maxScale,
    areas: eew.isCancel ? [] : areas,
  };
}

/**
 * P2P地震情報 (P2PQuake v2) 震度速報・各地の震度情報 (Code: 551) 形式への変換
 */
export function createP2PShindoFormat(flash: ShindoFlashReport, _scenario?: any) {
  const timeStr = new Date().toISOString().replace('T', ' ').substring(0, 19).replace(/-/g, '/');
  const maxScale = jmaGradeToP2PScale(flash.maxIntensity);

  // 観測点ポイント配列
  const points = flash.areas.flatMap((area) => {
    return area.stations.map((st) => ({
      pref: area.pref,
      addr: `${area.regionName} ${st.name}`,
      isArea: false,
      scale: jmaGradeToP2PScale(st.intensity),
    }));
  });

  return {
    id: `p2p_shindo_${Date.now()}_stage${flash.stage}`,
    code: 551,
    time: timeStr,
    issue: {
      source: '気象庁',
      time: timeStr,
      type: flash.stage === 1 ? 'ScalePrompt' : 'DetailScale',
      correct: 'None',
    },
    earthquake: {
      time: flash.originTime || timeStr,
      hypocenter: flash.stage === 2 && flash.latitude && flash.longitude
        ? {
            name: flash.hypocenterName || '調査中',
            latitude: flash.latitude,
            longitude: flash.longitude,
            depth: flash.depthKm || 10,
            magnitude: flash.magnitude || 5.0,
          }
        : undefined,
      maxScale: maxScale,
      domesticTsunami: flash.tsunamiStatus.includes('大津波警報')
        ? 'MajorWarning'
        : flash.tsunamiStatus.includes('警報')
        ? 'Warning'
        : flash.tsunamiStatus.includes('注意報')
        ? 'Watch'
        : 'None',
    },
    points: points,
  };
}

/**
 * DM-DSS (気象庁配信互換) 形式への変換
 */
export function createDmdssFormat(eew: EEWReport) {
  return {
    type: 'dmdss_eew',
    Control: {
      Title: eew.isCancel
        ? '緊急地震速報（取消報）'
        : eew.isWarn
        ? '緊急地震速報（警報）'
        : '緊急地震速報（予報）',
      DateTime: new Date().toISOString(),
      Status: '訓練',
      EditorialOffice: '気象庁',
      PublishingOffice: '気象庁',
    },
    Head: {
      Title: eew.isCancel ? '緊急地震速報（取消）' : '緊急地震速報（地震動予報）',
      ReportDateTime: eew.reportTime,
      TargetDateTime: eew.reportTime,
      EventID: eew.eventId,
      Serial: String(eew.reportNum),
      InfoType: eew.isCancel ? '取消' : eew.isFinal ? '最終' : '通常',
      InfoKind: '緊急地震速報',
    },
    Body: {
      Earthquake: {
        OriginTime: eew.originTime,
        Hypocenter: {
          Area: {
            Name: eew.hypocenterName,
            Code: '000',
            Coordinate: `+${eew.latitude}+${eew.longitude}-${eew.depthKm * 1000}/`,
          },
        },
        Magnitude: eew.magnitude,
      },
      Intensity: {
        Forecast: {
          ForecastInt: {
            From: eew.maxIntensity,
            To: eew.maxIntensity,
          },
          Appendix: {
            MaxIntChange: '0',
          },
        },
      },
      Comments: {
        WarningAreas: eew.warningAreas,
        CancelReason: eew.cancelReason,
      },
    },
  };
}
