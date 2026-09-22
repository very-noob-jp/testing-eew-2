/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { JMAIntensityGrade, LPGMGrade } from '../types/earthquake';

// 地球半径 (km)
const EARTH_RADIUS_KM = 6371.0;

// 地殻内標準走時 (P波: 6.0km/s, S波: 3.5km/s)
export const VP_KM_S = 6.0;
export const VS_KM_S = 3.5;

/**
 * 2地点間の地表大圏距離 (km) を計算 (Haversine法)
 */
export function calculateSurfaceDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const radLat1 = (lat1 * Math.PI) / 180;
  const radLon1 = (lon1 * Math.PI) / 180;
  const radLat2 = (lat2 * Math.PI) / 180;
  const radLon2 = (lon2 * Math.PI) / 180;

  const dLat = radLat2 - radLat1;
  const dLon = radLon2 - radLon1;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(radLat1) * Math.cos(radLat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return EARTH_RADIUS_KM * c;
}

/**
 * 有限断層線分に対する最短地表距離 (km) を計算
 */
export function calculateDistanceToFaultSegment(
  lat: number,
  lon: number,
  faultStart: { lat: number; lon: number },
  faultEnd: { lat: number; lon: number }
): number {
  // 局所平面直交座標系 (km) への射影
  const midLat = ((faultStart.lat + faultEnd.lat) / 2) * (Math.PI / 180);
  const kx = 111.32 * Math.cos(midLat);
  const ky = 110.574;

  const px = (lon - faultStart.lon) * kx;
  const py = (lat - faultStart.lat) * ky;

  const dx = (faultEnd.lon - faultStart.lon) * kx;
  const dy = (faultEnd.lat - faultStart.lat) * ky;

  const lenSq = dx * dx + dy * dy;
  if (lenSq < 0.001) {
    return calculateSurfaceDistance(lat, lon, faultStart.lat, faultStart.lon);
  }

  // 線分上への射影係数 t in [0, 1]
  const t = Math.max(0, Math.min(1, (px * dx + py * dy) / lenSq));
  const projX = t * dx;
  const projY = t * dy;

  const distSq = (px - projX) * (px - projX) + (py - projY) * (py - projY);
  return Math.sqrt(distSq);
}

/**
 * 震源距離 (km)
 */
export function calculateHypocenterDistance(surfaceDistKm: number, depthKm: number): number {
  return Math.sqrt(surfaceDistKm * surfaceDistKm + depthKm * depthKm);
}

/**
 * 司・翠川 (1999) および森川・藤原 (2013) に基づく高精度地震動予測式
 * - 工学的基盤面 PGV_600 / PGA_600 の減衰計算
 * - 表層地盤増幅率 (siteAmp: AVS30/Vs400換算) の乗算
 * - 気象庁計測震度算定アルゴリズム準拠の震度換算
 */
export function calculateGroundMotion(
  magnitude: number,
  depthKm: number,
  surfaceDistKm: number,
  siteAmp: number,
  faultType: 'crustal' | 'interplate' | 'intraplate' = 'crustal'
): { pga: number; pgv: number; intensity: number } {
  const Mw = magnitude;
  const X = calculateHypocenterDistance(surfaceDistKm, depthKm);
  // 近傍特異点回避 & 有限断層飽和半径
  const safeX = Math.max(X, 1.5);

  // 1. 断層タイプ別の補正パラメータ (司・翠川 1999)
  let d_pgv = -1.15; // 内陸地殻内基準
  let k_pgv = 0.0020;
  let d_pga = 0.95;

  if (faultType === 'interplate') {
    d_pgv = -1.25; // プレート境界
    k_pgv = 0.0020;
    d_pga = 0.88;
  } else if (faultType === 'intraplate') {
    d_pgv = -1.10; // プレート内深発
    k_pgv = 0.0015;
    d_pga = 1.02;
  }

  // 2. 工学的基盤面 (Vs = 600m/s) 最大速度 PGV_600 (cm/s)
  // log10(PGV_600) = 0.58*Mw + 0.0038*D + d - log10(X + 0.0028 * 10^(0.50*Mw)) - k*X
  const logPGV600 =
    0.58 * Mw +
    0.0038 * Math.min(depthKm, 60) +
    d_pgv -
    Math.log10(safeX + 0.0028 * Math.pow(10, 0.50 * Mw)) -
    k_pgv * safeX;
  const pgv600 = Math.max(0.0001, Math.pow(10, logPGV600));

  // 3. 地表最大速度 PGV (cm/s) - 表層地盤増幅
  const amp = Math.max(0.7, Math.min(3.5, siteAmp || 1.4));
  const pgvSurface = pgv600 * Math.pow(amp, 1.15);

  // 4. 工学的基盤面最大加速度 PGA_600 (gal = cm/s^2)
  // log10(PGA_600) = 0.54*Mw + 0.0025*D + d_pga - 1.10*log10(X + 0.0050 * 10^(0.50*Mw)) - 0.0020*X
  const logPGA600 =
    0.54 * Mw +
    0.0025 * Math.min(depthKm, 60) +
    d_pga -
    1.10 * Math.log10(safeX + 0.0050 * Math.pow(10, 0.50 * Mw)) -
    0.0020 * safeX;
  const pga600 = Math.max(0.01, Math.pow(10, logPGA600));

  // 5. 地表最大加速度 PGA (gal) - 地盤増幅と超大加速度での非線形飽和
  let pgaSurface = pga600 * Math.pow(amp, 0.90);
  if (pgaSurface > 1200) {
    // 軟弱地盤・超大加速度における土層の非線形減衰効果
    pgaSurface = pgaSurface / (1.0 + 0.00015 * (pgaSurface - 1200));
  }

  // 6. 気象庁 (JMA) 計測震度 I 算出式 (童・翠川 1996 / 藤本・翠川 1998 校正)
  // I_PGV = 2.85 + 1.95 * log10(PGV) (中〜大地震の主要動・被害と直結)
  // I_PGA = 2.01 * log10(PGA) - 0.60 (高周波・加速度主体)
  const iPGV = 2.85 + 1.95 * Math.log10(Math.max(0.005, pgvSurface));
  const iPGA = 2.01 * Math.log10(Math.max(0.05, pgaSurface)) - 0.60;

  let rawIntensity: number;
  if (iPGV >= 4.5) {
    // 強震動領域 (震度5弱以上) は速度応答 (PGV) を最重要指標とする
    rawIntensity = 0.85 * iPGV + 0.15 * iPGA;
  } else if (iPGV >= 2.5) {
    // 中震動領域 (震度3〜4)
    rawIntensity = 0.75 * iPGV + 0.25 * iPGA;
  } else {
    // 微小震動領域 (震度1〜2)
    rawIntensity = 0.65 * iPGV + 0.35 * iPGA;
  }

  // 極小・極大クランプ (-2.5 〜 7.3)
  rawIntensity = Math.max(-2.5, Math.min(7.3, rawIntensity));
  const intensity = Math.round(rawIntensity * 10) / 10;

  return {
    pga: Math.round(pgaSurface * 10) / 10,
    pgv: Math.round(pgvSurface * 100) / 100,
    intensity,
  };
}

/**
 * 計測震度 (連続値) から気象庁震度階級への変換
 */
export function intensityToGrade(rawIntensity: number): JMAIntensityGrade | '震度0未満' {
  if (rawIntensity < -0.5) return '震度0未満';
  if (rawIntensity < 0.5) return '0';
  if (rawIntensity < 1.5) return '1';
  if (rawIntensity < 2.5) return '2';
  if (rawIntensity < 3.5) return '3';
  if (rawIntensity < 4.5) return '4';
  if (rawIntensity < 5.0) return '5弱';
  if (rawIntensity < 5.5) return '5強';
  if (rawIntensity < 6.0) return '6弱';
  if (rawIntensity < 6.5) return '6強';
  return '7';
}

export function gradeToNumericRank(grade: JMAIntensityGrade | '震度0未満'): number {
  switch (grade) {
    case '7': return 10;
    case '6強': return 9;
    case '6弱': return 8;
    case '5強': return 7;
    case '5弱': return 6;
    case '4': return 5;
    case '3': return 4;
    case '2': return 3;
    case '1': return 2;
    case '0': return 1;
    default: return 0;
  }
}

/**
 * 絶対速度応答スペクトル Sva (cm/s, 周期1.6〜7.8秒) から気象庁長周期地震動階級への変換
 * - 階級1: 5 cm/s 以上 15 cm/s 未満 (室内のほとんどの人が揺れを感じる)
 * - 階級2: 15 cm/s 以上 50 cm/s 未満 (室内で大きな揺れ、物につかまりたい)
 * - 階級3: 50 cm/s 以上 100 cm/s 未満 (立っていることが困難、什器が大きく動く)
 * - 階級4: 100 cm/s 以上 (立っていられず、はいつくばらないと動けない)
 */
export function svaToLpgmGrade(sva: number): LPGMGrade {
  if (sva < 5.0) return '階級0';
  if (sva < 15.0) return '階級1';
  if (sva < 50.0) return '階級2';
  if (sva < 100.0) return '階級3';
  return '階級4';
}

export function lpgmGradeToRank(grade?: LPGMGrade | string): number {
  switch (grade) {
    case '階級4': return 4;
    case '階級3': return 3;
    case '階級2': return 2;
    case '階級1': return 1;
    default: return 0;
  }
}

/**
 * 森川・藤原 (2013) および片岡 (2006) に基づく長周期地震動 (周期1.6〜7.8秒) 速度応答スペクトル Sva (cm/s) 計算
 * - 規模 (Mw >= 6.5) と巨大断層破断で長周期波が強く励起
 * - 堆積盆地 (関東平野・濃尾平野・大阪平野・新潟平野等) での深部堆積層共振増幅を反映
 */
export function calculateLPGM(
  magnitude: number,
  depthKm: number,
  surfaceDistKm: number,
  sedimentBasinAmp = 1.0,
  faultType: 'crustal' | 'interplate' | 'intraplate' = 'interplate'
): { sva: number; grade: LPGMGrade } {
  // 小規模地震 (M < 5.5) では長周期成分は極めて小さい
  if (magnitude < 5.5) {
    return { sva: 0.5, grade: '階級0' };
  }

  const Mw = magnitude;
  const X = calculateHypocenterDistance(surfaceDistKm, depthKm);
  const safeX = Math.max(X, 10.0);

  // 工学的基盤面 (Vs=600m/s) における周期約3〜5秒の平均速度応答スペクトル (cm/s)
  // log10(Sva_600) = 0.65*Mw - 0.90*log10(X + 0.003*10^(0.5*Mw)) - 0.0012*X - 2.15
  let cFault = 0.0;
  if (faultType === 'interplate') cFault = 0.15; // プレート境界巨大地震は長周期卓越
  else if (faultType === 'intraplate') cFault = -0.10;

  const logSva600 =
    0.68 * Mw -
    0.92 * Math.log10(safeX + 0.0035 * Math.pow(10, 0.50 * Mw)) -
    0.0010 * safeX -
    2.15 +
    cFault;

  const baseSva = Math.max(0.01, Math.pow(10, logSva600));

  // 深部堆積平野（関東平野、濃尾平野、大阪平野等）の共振増幅
  // 堆積盆地では長周期波（表面波・ラブ波・レイリー波）がトラップされて2〜4倍に増幅
  const effectiveAmp = Math.max(0.8, Math.min(4.5, sedimentBasinAmp));
  const svaSurface = baseSva * effectiveAmp;

  const sva = Math.round(svaSurface * 10) / 10;
  return {
    sva,
    grade: svaToLpgmGrade(sva),
  };
}

/**
 * 長周期地震動階級カラー
 */
export function getLPGMColor(grade?: LPGMGrade | string): string {
  switch (grade) {
    case '階級4':
      return '#ef4444'; // 赤 (立っていられない)
    case '階級3':
      return '#f97316'; // 橙 (立っていることが困難)
    case '階級2':
      return '#10b981'; // エメラルド緑 (大きな揺れ)
    case '階級1':
      return '#3b82f6'; // 青 (ほとんどの人が感じる)
    default:
      return '#64748b'; // スレートグレー (階級0)
  }
}

/**
 * 疑似乱数ジェネレータ（決定論的ノイズ用）
 */
function pseudoNoise(seed: number): number {
  const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
}

/**
 * 高精度地震動時系列波形シミュレーション
 * P波初動・S波主要動・Boore型エンベロープ・地盤卓越周期・気象庁フィルター特性
 */
export function calculateInstantaneousMotion(
  t: number,
  tp: number,
  ts: number,
  targetPga: number,
  targetIntensity: number,
  stationLat: number,
  stationLon: number,
  isFaulty = false,
  noiseAmp = 0
): { currentGal: number; currentIntensity: number; grade: JMAIntensityGrade | '震度0未満' } {
  // 観測点固有シード
  const seed = stationLat * 100 + stationLon;

  // 1. 機器異常・落雷パルス
  if (isFaulty) {
    const pulse = 900 + pseudoNoise(t * 10 + seed) * 350;
    const instI = Math.min(7.0, Math.round((2.01 * Math.log10(pulse) - 0.60) * 10) / 10);
    return {
      currentGal: Math.round(pulse * 10) / 10,
      currentIntensity: instI,
      grade: intensityToGrade(instI),
    };
  }

  // 常時微動 (0.01〜0.08 gal)
  const ambientNoise = 0.03 + pseudoNoise(t * 5 + seed) * 0.05 + noiseAmp;

  // 2. 地震波未到達フェーズ
  if (t < tp) {
    const instI = -2.0 + ambientNoise * 5;
    return {
      currentGal: Math.round(ambientNoise * 100) / 100,
      currentIntensity: Math.round(instI * 10) / 10,
      grade: intensityToGrade(instI),
    };
  }

  // 3. P波初期微動フェーズ (tp <= t < ts)
  if (t >= tp && t < ts) {
    const pElapsed = t - tp;
    // P波振幅: S波の約15〜22%
    const pRatio = 0.18;
    const pPeak = targetPga * pRatio;
    
    // P波立上りエンベロープ (指数急峻立ち上がり)
    const riseEnv = 1.0 - Math.exp(-pElapsed / 0.8);

    // 高周波主体のP波振動 (3Hz〜8Hzの重畳)
    const w1 = Math.sin(pElapsed * 2 * Math.PI * 4.2 + seed);
    const w2 = Math.sin(pElapsed * 2 * Math.PI * 7.5 + seed * 2);
    const wave = (w1 * 0.6 + w2 * 0.4);

    const currentGal = Math.max(ambientNoise, Math.abs(pPeak * riseEnv * wave) + ambientNoise);
    // P波時のリアルタイム震度
    const instI = Math.max(-1.5, targetIntensity - 2.2 + Math.log10(Math.max(0.01, riseEnv)) * 1.5);

    return {
      currentGal: Math.round(currentGal * 10) / 10,
      currentIntensity: Math.round(instI * 10) / 10,
      grade: intensityToGrade(instI),
    };
  }

  // 4. S波主要動フェーズ (t >= ts)
  const sElapsed = t - ts;

  // 地震動の規模・震度に応じた主要動継続時間 (Boore 1983 / 気象庁強震動モデル)
  const tr = 1.2; // 鋭い立ち上がり (主要動初動)
  const strongDuration = Math.max(8.0, 4.0 + Math.max(0, targetIntensity) * 3.0); // 震度7なら約25秒間強い揺れが持続
  const codaTau = 18.0; // コーダ波減衰時定数

  let sEnvelope = 0;
  if (sElapsed < tr) {
    // 鋭い立ち上がり (主要動の到達ショック)
    sEnvelope = Math.pow(Math.max(0.01, sElapsed / tr), 1.2);
  } else if (sElapsed < strongDuration) {
    // 主要動持続フェーズ (強い揺れを維持)
    const plateauProgress = (sElapsed - tr) / (strongDuration - tr);
    sEnvelope = 1.0 - plateauProgress * 0.15;
  } else {
    // コーダ波指数減衰フェーズ
    const decT = sElapsed - strongDuration;
    sEnvelope = 0.85 * Math.exp(-decT / codaTau);
  }

  // 地盤の卓越周波数 (1.4Hz, 2.8Hz, 0.7Hz) と多波連動の重畳
  const freq1 = Math.sin(sElapsed * 2 * Math.PI * 1.45 + seed);
  const freq2 = Math.sin(sElapsed * 2 * Math.PI * 2.85 + seed * 1.6);
  const freq3 = Math.cos(sElapsed * 2 * Math.PI * 0.75 + seed * 0.8);
  const rawWave = 0.45 * freq1 + 0.35 * freq2 + 0.20 * freq3;
  // 3軸合成加速度エンベロープ (ピーク時に100%に達するように正規化)
  const dynamicFactor = 0.65 + 0.35 * Math.abs(rawWave);

  const currentGal = Math.max(ambientNoise, targetPga * sEnvelope * dynamicFactor + ambientNoise);

  // リアルタイム計測震度推移:
  // 主要動到達後に一気に目標震度に達し、強震動持続時間中はピークを保持
  let currentIntensity: number;
  if (sElapsed < tr) {
    currentIntensity = targetIntensity - (tr - sElapsed) * 1.0;
  } else if (sElapsed < strongDuration) {
    // 主要動持続中はピーク震度を安定して記録 (微小な実動揺らぎ ±0.1)
    const fluctuation = (rawWave * 0.1);
    currentIntensity = targetIntensity + fluctuation;
  } else {
    // コーダ波による緩やかな震度低下
    const decT = sElapsed - strongDuration;
    const decI = (decT / codaTau) * 2.2;
    currentIntensity = Math.max(-1.8, targetIntensity - 0.2 - decI);
  }

  return {
    currentGal: Math.round(currentGal * 10) / 10,
    currentIntensity: Math.round(currentIntensity * 10) / 10,
    grade: intensityToGrade(currentIntensity),
  };
}

/**
 * 強震モニタのリアルタイム震度カラーパレット (NIED K-NET/KiK-net公式準拠)
 */
export function getKyoshinColor(intensity: number): string {
  if (intensity < -1.5) return '#001040'; // 濃紺
  if (intensity < -0.5) return '#002080'; // 深青
  if (intensity < 0.5) return '#0050c0'; // 青 (震度0)
  if (intensity < 1.5) return '#00a0e9'; // 水色 (震度1)
  if (intensity < 2.5) return '#009944'; // 緑 (震度2)
  if (intensity < 3.5) return '#a4c639'; // 黄緑 (震度3)
  if (intensity < 4.5) return '#f8b500'; // 黄 (震度4)
  if (intensity < 5.0) return '#ea5504'; // 橙 (震度5弱)
  if (intensity < 5.5) return '#e60012'; // 濃橙/朱 (震度5強)
  if (intensity < 6.0) return '#b80018'; // 赤 (震度6弱)
  if (intensity < 6.5) return '#860014'; // 深紅 (震度6強)
  return '#9b005f'; // 紫 (震度7)
}

export function getKyoshinRGB(intensity: number): [number, number, number] {
  const hex = getKyoshinColor(intensity);
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return [r, g, b];
}

export function reverseColorToIntensity(r: number, g: number, b: number): number {
  const samples: { intensity: number; rgb: [number, number, number] }[] = [
    { intensity: -2.0, rgb: [0, 16, 64] },
    { intensity: -1.0, rgb: [0, 32, 128] },
    { intensity: 0.0, rgb: [0, 80, 192] },
    { intensity: 1.0, rgb: [0, 160, 233] },
    { intensity: 2.0, rgb: [0, 153, 68] },
    { intensity: 3.0, rgb: [164, 198, 57] },
    { intensity: 4.0, rgb: [248, 181, 0] },
    { intensity: 4.8, rgb: [234, 85, 4] },
    { intensity: 5.3, rgb: [230, 0, 18] },
    { intensity: 5.8, rgb: [184, 0, 24] },
    { intensity: 6.3, rgb: [134, 0, 20] },
    { intensity: 7.0, rgb: [155, 0, 95] }
  ];

  let closestDist = Infinity;
  let estimatedIntensity = -2.0;

  for (const s of samples) {
    const dr = r - s.rgb[0];
    const dg = g - s.rgb[1];
    const db = b - s.rgb[2];
    const dist = dr * dr + dg * dg + db * db;
    if (dist < closestDist) {
      closestDist = dist;
      estimatedIntensity = s.intensity;
    }
  }

  return estimatedIntensity;
}
