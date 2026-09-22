/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type JMAIntensityGrade = 
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5弱'
  | '5強'
  | '6弱'
  | '6強'
  | '7';

export type LPGMGrade = '階級1' | '階級2' | '階級3' | '階級4' | '階級0';

export interface Station {
  code: string;
  name: string;
  pref: string;
  region: '北海道' | '東北' | '関東' | '中部' | '近畿' | '中国' | '四国' | '九州' | '沖縄';
  lat: number;
  lon: number;
  siteAmp: number; // 表層地盤増幅率 (AVS30 based) 0.8 - 2.5
  sedimentBasinAmp?: number; // 堆積盆地深部増幅係数 (長周期共振用)
  targetPga?: number; // 予測最大加速度 (事前計算キャッシュ)
  targetIntensity?: number; // 予測最大計測震度 (事前計算キャッシュ)
  surfaceDist?: number; // 震央距離 km (事前計算キャッシュ)
  currentGal: number; // 加速度 (cm/s^2)
  currentIntensity: number; // リアルタイム計測震度 (連続値, 例: 4.2)
  intensityGrade: JMAIntensityGrade | '震度0未満';
  lpgmGrade?: LPGMGrade; // 長周期地震動階級 (階級1〜4)
  lpgmSva?: number; // 長周期絶対速度応答スペクトル Sva (cm/s)
  pArrived: boolean;
  sArrived: boolean;
  pTimeSec: number;
  sTimeSec: number;
  isTriggered: boolean;
  isFaulty?: boolean; // 機器故障・落雷シミュレーション用
}

export type CancelReason = 
  | '落雷等による観測点ノイズ誤検知'
  | '観測機器障害・ベースライン急変'
  | '深発地震による震源・規模の過大予測'
  | '複数微小地震の誤結合'
  | 'その他データ処理異常';

export interface EEWReport {
  eventId: string;
  reportNum: number;
  reportTime: string; // ISO or formatted
  originTime: string;
  hypocenterName: string;
  latitude: number;
  longitude: number;
  depthKm: number;
  magnitude: number;
  maxIntensity: JMAIntensityGrade;
  forecastLpgmIntensity?: LPGMGrade; // 長周期地震動階級予測 (階級1〜4)
  isWarn: boolean; // 警報か予報か (true = 警報, false = 予報)
  isFinal: boolean;
  isCancel: boolean;
  cancelReason?: CancelReason;
  warningAreas: string[]; // 警報対象地域 (予測震度4以上の地域)
  lpgmWarningAreas?: string[]; // 長周期地震動警報対象地域 (予測階級3以上の地域)
  forecastRegions: {
    regionName: string;
    forecastIntensity: JMAIntensityGrade;
    forecastLpgmIntensity?: LPGMGrade;
    arrivalTimeSec: number;
  }[];
  plumTriggered?: boolean;
}

export interface ShindoFlashArea {
  pref: string;
  regionName: string;
  intensity: JMAIntensityGrade;
  lpgmGrade?: LPGMGrade;
  stations: { name: string; intensity: JMAIntensityGrade; gal: number; lpgmGrade?: LPGMGrade }[];
}

export interface ShindoFlashReport {
  stage: 1 | 2; // 1: 震度速報 (調査中), 2: 震源・震度に関する情報 (確定)
  title: string;
  announcedTime: string;
  originTime: string;
  hypocenterName?: string;
  latitude?: number;
  longitude?: number;
  depthKm?: number;
  magnitude?: number;
  maxIntensity: JMAIntensityGrade;
  maxLpgmGrade?: LPGMGrade; // 最大長周期地震動階級 (階級1〜4)
  tsunamiStatus: string;
  textMessage: string;
  areas: ShindoFlashArea[];
  lpgmAreas?: {
    pref: string;
    regionName: string;
    grade: LPGMGrade;
    maxSva?: number;
  }[];
}

export interface P2PTsunamiArea {
  grade: 'MajorWarning' | 'Warning' | 'Watch' | 'Unknown';
  name: string;
  immediate: boolean;
  firstHeight?: {
    arrivalTime?: string;
    condition?: string;
  };
  maxHeight?: {
    value?: number;
    unit?: string;
    description?: string;
  };
}

export interface P2PTsunamiReport {
  id: string;
  code: 552;
  time: string;
  cancelled: boolean;
  test?: boolean;
  issue: {
    source: string;
    time: string;
    type: 'Focus';
  };
  areas: P2PTsunamiArea[];
}

export interface SubEvent {
  id: string;
  name: string;
  type: 'foreshock' | 'mainshock' | 'aftershock' | 'secondary_rupture';
  triggerTimeSec: number;
  epicenterName: string;
  lat: number;
  lon: number;
  depthKm: number;
  magnitude: number;
  faultType?: 'crustal' | 'interplate' | 'intraplate';
  faultStart?: { lat: number; lon: number };
  faultEnd?: { lat: number; lon: number };
  description?: string;
}

export interface SpecialAdvisory {
  type: '巨大地震警戒' | '巨大地震注意' | '調査終了';
  announcedTime: string;
  headline: string;
  targetArea: string;
  description: string;
}

export interface WaveFront {
  eventId: string;
  name: string;
  type: 'foreshock' | 'mainshock' | 'aftershock' | 'secondary_rupture';
  lat: number;
  lon: number;
  depthKm: number;
  magnitude: number;
  epicenterName: string;
  triggerTimeSec: number;
  elapsedSinceTrigger: number;
  pWaveRadiusKm: number;
  sWaveRadiusKm: number;
}

export interface Scenario {
  id: string;
  name: string;
  description: string;
  epicenterName: string;
  lat: number;
  lon: number;
  depthKm: number;
  magnitude: number;
  faultType?: 'crustal' | 'interplate' | 'intraplate';
  faultStart?: { lat: number; lon: number };
  faultEnd?: { lat: number; lon: number };
  cancelConfig?: {
    triggerAfterSec: number;
    reason: CancelReason;
    noiseStationCode?: string;
  };
  events?: SubEvent[];
  specialAdvisoryConfig?: {
    type: '巨大地震警戒' | '巨大地震注意' | '調査終了';
    triggerAfterSec: number;
    headline: string;
    targetArea: string;
    description: string;
  };
  ruptureStyle?: 'single' | 'sequence' | 'megathrust_full' | 'megathrust_half';
  tsunamiConfig?: {
    triggerAfterSec: number;
    headline: string;
    areas: P2PTsunamiArea[];
  };
}

export interface SimulationState {
  isRunning: boolean;
  isPaused: boolean;
  elapsedSec: number;
  speed: number;
  scenario: Scenario;
  pWaveRadiusKm: number;
  sWaveRadiusKm: number;
  activeWaveFronts?: WaveFront[];
  activeEvents?: SubEvent[];
  currentEEW: EEWReport | null;
  eewHistory: EEWReport[];
  shindoFlash: ShindoFlashReport | null;
  shindoHistory: ShindoFlashReport[];
  currentTsunami?: P2PTsunamiReport | null;
  tsunamiHistory?: P2PTsunamiReport[];
  specialAdvisory?: SpecialAdvisory | null;
  connectedClients: number;
  totalBroadcasts: number;
  stations: Station[];
}
