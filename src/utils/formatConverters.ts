/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  EEWReport,
  ShindoFlashReport,
  JMAIntensityGrade,
  LPGMGrade,
  P2PTsunamiReport,
} from '../types/earthquake';

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

// 長周期地震動階級からP2Pスケール数値への変換 (10=階級1, 20=階級2, 30=階級3, 40=階級4)
export function lpgmGradeToP2PScale(grade?: LPGMGrade | string): number {
  switch (grade) {
    case '階級1':
      return 10;
    case '階級2':
      return 20;
    case '階級3':
      return 30;
    case '階級4':
      return 40;
    default:
      return 0;
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

// 日本標準時 (JST, UTC+9) の "YYYY/MM/DD HH:mm:ss" 形式文字列を生成
export function formatJSTDateTime(d: Date | number = new Date()): string {
  const date = typeof d === 'number' ? new Date(d) : d;
  const jst = new Intl.DateTimeFormat('ja-JP', {
    timeZone: 'Asia/Tokyo',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).formatToParts(date);

  const m: Record<string, string> = {};
  for (const part of jst) {
    m[part.type] = part.value;
  }
  return `${m.year}/${m.month}/${m.day} ${m.hour}:${m.minute}:${m.second}`;
}

// 14桁の数字形式 EventID (例: "20260919130015") を生成
export function formatJSTEventId(eventIdStr: string, date: Date = new Date()): string {
  const digits = (eventIdStr || '').replace(/\D/g, '');
  if (digits.length >= 14) {
    return digits.slice(0, 14);
  }
  const jst = new Intl.DateTimeFormat('ja-JP', {
    timeZone: 'Asia/Tokyo',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).formatToParts(date);

  const m: Record<string, string> = {};
  for (const part of jst) {
    m[part.type] = part.value;
  }
  return `${m.year}${m.month}${m.day}${m.hour}${m.minute}${m.second}`;
}

// 気象庁 緊急地震速報 電文生コードの生成
function generateJmaRawTelegram(eew: EEWReport, eventId: string): string {
  if (eew.isCancel) {
    const yymmdd = eventId.slice(2);
    return `39 03 10 ${yymmdd} C11 ${yymmdd} ND${eventId} NCN701 9999=`;
  }

  const yymmdd = eventId.slice(2);
  const statusFlag = eew.isFinal ? '9' : '0';
  const serial2 = String(Math.min(99, eew.reportNum)).padStart(2, '0');
  const latStr = `N${Math.round(eew.latitude * 10)}`;
  const lonStr = `E${Math.round(eew.longitude * 10)}`;
  const depthStr = String(Math.round(eew.depthKm)).padStart(3, '0');
  const magStr = String(Math.round(eew.magnitude * 10)).padStart(2, '0');

  let intCode = '04';
  if (eew.maxIntensity === '7') intCode = '07';
  else if (eew.maxIntensity === '6強') intCode = '6+';
  else if (eew.maxIntensity === '6弱') intCode = '6-';
  else if (eew.maxIntensity === '5強') intCode = '5+';
  else if (eew.maxIntensity === '5弱') intCode = '5-';
  else if (eew.maxIntensity === '4') intCode = '04';
  else if (eew.maxIntensity === '3') intCode = '03';
  else if (eew.maxIntensity === '2') intCode = '02';
  else if (eew.maxIntensity === '1') intCode = '01';

  return `37 03 00 ${yymmdd} C11 ${yymmdd} ND${eventId} NCN${statusFlag}${serial2} JD////////////// JN/// 999 ${latStr} ${lonStr} ${depthStr} ${magStr} ${intCode} RK44519 RT10/// RC0//// 9999=`;
}

/**
 * Wolfx (Project Wolfx) 緊急地震速報 JSON 形式への変換
 * Wolfx Open API / jma_eew 公式スキーマ仕様に完全準拠
 */
export function createWolfxFormat(eew: EEWReport) {
  const announcedJST = formatJSTDateTime(new Date());
  
  // 地震発生時刻 (originTime)
  let originJST = announcedJST;
  if (eew.originTime) {
    if (eew.originTime.includes('/')) {
      originJST = eew.originTime;
    } else {
      // 発生から数秒〜数十秒前の時刻
      originJST = formatJSTDateTime(new Date(Date.now() - 15000));
    }
  }

  const arrivalBaseJST = formatJSTDateTime(new Date(Date.now() + 15000));
  const eventId = formatJSTEventId(eew.eventId);

  // 1. 発表区分 (CodeType)
  // Wolfx仕様: 予報/警報時は「Ｍ、最大予測震度及び主要動到達予測時刻の緊急地震速報」、取消時は「緊急地震速報の取消し」
  const codeType = eew.isCancel
    ? '緊急地震速報の取消し'
    : 'Ｍ、最大予測震度及び主要動到達予測時刻の緊急地震速報';

  // 2. タイトル
  const title = eew.isCancel
    ? '緊急地震速報（取消）'
    : eew.isWarn
    ? '緊急地震速報（警報）'
    : '緊急地震速報（予報）';

  // 3. 発表ステータス
  const statusType = eew.isCancel ? '取消' : eew.isFinal ? '最終' : '通常';

  // 4. 警報対象地域 (WarnArea)
  // Wolfx仕様: Chiiki (地域名), Shindo1 (最大震度), Shindo2 (最小震度), Time (予想到達時刻), Type (警報/予報), Arrive (到達可否)
  const warnAreas = (eew.warningAreas || []).map((area) => ({
    Chiiki: area,
    Shindo1: eew.maxIntensity,
    Shindo2: '4',
    Time: arrivalBaseJST,
    Type: eew.isWarn ? '警報' : '予報',
    Arrive: false,
    // 旧仕様・外部ツール互換用フィールドも併載
    Pref: area,
    Name: area,
    ScaleFrom: '4',
    ScaleTo: eew.maxIntensity,
    ArrivalTime: arrivalBaseJST,
  }));

  // 5. 精度情報 (Accuracy)
  // Wolfx仕様: "IPF法（5点以上）", "P相／全相混在" 等の気象庁規定文字列
  const epicenterAcc = eew.plumTriggered
    ? 'PLUM法'
    : eew.reportNum >= 3
    ? 'IPF法（5点以上）'
    : 'IPF法（1点）';

  const depthAcc = eew.plumTriggered
    ? 'PLUM法'
    : eew.reportNum >= 3
    ? 'IPF法（5点以上）'
    : 'IPF法（1点）';

  const magAcc = eew.plumTriggered
    ? 'PLUM法'
    : eew.reportNum >= 3
    ? 'P相／全相混在'
    : 'P相（1点）';

  // 6. 電文生テキスト (OriginalText)
  const jmaRawText = generateJmaRawTelegram(eew, eventId);

  return {
    // WebSocket規格: "jma_eew" (Wolfx公式仕様)
    type: 'jma_eew',
    Title: title,
    CodeType: codeType,
    Issue: {
      Source: '気象庁',
      Status: statusType,
      Time: announcedJST,
      Type: statusType,
    },
    EventID: eventId,
    Serial: Number(eew.reportNum),
    AnnouncedTime: announcedJST,
    OriginTime: originJST,
    Hypocenter: eew.hypocenterName,
    Latitude: Number(eew.latitude),
    Longitude: Number(eew.longitude),
    Depth: Math.round(Number(eew.depthKm)),
    Magnitude: Number(eew.magnitude),
    Magunitude: Number(eew.magnitude), // Wolfxの公式誤記互換フィールド (Magnitudeと同一値)
    MaxIntensity: eew.maxIntensity,
    MaxIntensity_Float: jmaGradeToFloat(eew.maxIntensity),
    Accuracy: {
      Epicenter: epicenterAcc,
      Depth: depthAcc,
      Magnitude: magAcc,
    },
    isWarn: Boolean(eew.isWarn),
    isFinal: Boolean(eew.isFinal),
    isCancel: Boolean(eew.isCancel),
    isAssumption: false,
    WarnArea: warnAreas,
    // 長周期地震動予測 (Wolfx拡張仕様)
    ForecastLpgm: eew.forecastLpgmIntensity
      ? {
          MaxLpgmIntensity: eew.forecastLpgmIntensity,
          MaxLpgmIntensity_Scale: lpgmGradeToP2PScale(eew.forecastLpgmIntensity),
          LpgmWarnArea: eew.lpgmWarningAreas || [],
        }
      : undefined,
    OriginalText: jmaRawText,
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
    // 長周期地震動階級予測情報
    lpgm: eew.forecastLpgmIntensity
      ? {
          maxScale: lpgmGradeToP2PScale(eew.forecastLpgmIntensity),
          warningAreas: eew.lpgmWarningAreas || [],
        }
      : undefined,
  };
}

/**
 * P2P地震情報 (P2PQuake v2) 震度速報・各地の震度情報 (Code: 551) 形式への変換
 */
export function createP2PShindoFormat(flash: ShindoFlashReport, _scenario?: any) {
  const timeStr = new Date().toISOString().replace('T', ' ').substring(0, 19).replace(/-/g, '/');
  const maxScale = jmaGradeToP2PScale(flash.maxIntensity);

  // 観測点ポイント配列 (震度および長周期地震動階級)
  const points = flash.areas.flatMap((area) => {
    return area.stations.map((st) => ({
      pref: area.pref,
      addr: `${area.regionName} ${st.name}`,
      isArea: false,
      scale: jmaGradeToP2PScale(st.intensity),
      lpgmScale: st.lpgmGrade ? lpgmGradeToP2PScale(st.lpgmGrade) : undefined,
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
    // 長周期地震動に関する観測情報
    lpgm: flash.maxLpgmGrade
      ? {
          maxScale: lpgmGradeToP2PScale(flash.maxLpgmGrade),
          areas: (flash.lpgmAreas || []).map((a) => ({
            pref: a.pref,
            name: a.regionName,
            scale: lpgmGradeToP2PScale(a.grade),
            maxSva: a.maxSva,
          })),
        }
      : undefined,
  };
}

/**
 * P2P地震情報 (P2PQuake v2) 津波予報 (Code: 552) 形式への変換
 */
export function createP2PTsunamiFormat(tsunami: P2PTsunamiReport) {
  const timeStr = tsunami.time || new Date().toISOString().replace('T', ' ').substring(0, 19).replace(/-/g, '/');
  return {
    id: tsunami.id || `p2p_tsunami_${Date.now()}`,
    code: 552,
    time: timeStr,
    cancelled: Boolean(tsunami.cancelled),
    test: tsunami.test ?? true,
    issue: {
      source: tsunami.issue?.source || '気象庁',
      time: tsunami.issue?.time || timeStr,
      type: 'Focus' as const,
    },
    areas: tsunami.areas || [],
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
          ForecastLpgmInt: eew.forecastLpgmIntensity,
          Appendix: {
            MaxIntChange: '0',
          },
        },
      },
      Comments: {
        WarningAreas: eew.warningAreas,
        LpgmWarningAreas: eew.lpgmWarningAreas,
        CancelReason: eew.cancelReason,
      },
    },
  };
}
