/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Scenario } from '../types/earthquake';

export const PRESET_SCENARIOS: Scenario[] = [
  {
    id: 'noto_2024',
    name: '2024年 能登半島地震 (M7.6 / 最大震度7)',
    description: '石川県能登地方を震源とする極めて浅い内陸地殻内地震。震央付近で震度7を観測し、北陸全域に即時警報が発表された大規模地震。',
    epicenterName: '石川県能登地方',
    lat: 37.50,
    lon: 137.24,
    depthKm: 16,
    magnitude: 7.6,
    faultType: 'crustal',
    faultStart: { lat: 37.58, lon: 137.40 }, // 珠洲沖
    faultEnd: { lat: 36.95, lon: 136.65 }, // 志賀沖 (150km 逆断層破壊域)
  },
  {
    id: 'tokyo_direct',
    name: '首都直下地震 想定 (M7.3 / 最大震度6強)',
    description: '東京湾北部を震源とするプレート境界・フィリピン海プレート内地震。首都圏直下で急激にS波が襲来し、東京・神奈川・千葉・埼玉に広域警報。',
    epicenterName: '東京湾',
    lat: 35.60,
    lon: 139.85,
    depthKm: 30,
    magnitude: 7.3,
    faultType: 'interplate',
    faultStart: { lat: 35.75, lon: 139.75 },
    faultEnd: { lat: 35.45, lon: 139.95 },
  },
  {
    id: 'nankai_trough',
    name: '南海トラフ巨大地震 想定 (M8.7 / 最大震度7)',
    description: '遠州灘から四国沖にかけてのプレート沈み込み帯プレート間地震。高知・徳島・和歌山・静岡・愛知・三重など太平洋側広域に壊滅的震度7〜6強。',
    epicenterName: '潮岬沖',
    lat: 33.20,
    lon: 136.00,
    depthKm: 20,
    magnitude: 8.7,
    faultType: 'interplate',
    faultStart: { lat: 34.60, lon: 138.30 }, // 駿河湾・遠州灘
    faultEnd: { lat: 32.40, lon: 132.60 }, // 土佐湾・足摺岬沖 (600km 破壊域)
  },
  {
    id: 'chiba_east',
    name: '千葉県東方沖地震 (M6.2 / 最大震度5弱)',
    description: '千葉県東方沖の海溝付近地震。千葉県北東部・南部、茨城県南部に緊急地震速報（警報）が発表される標準的な中規模発報パターン。',
    epicenterName: '千葉県東方沖',
    lat: 35.55,
    lon: 140.75,
    depthKm: 35,
    magnitude: 6.2,
    faultType: 'interplate',
    faultStart: { lat: 35.70, lon: 140.85 },
    faultEnd: { lat: 35.40, lon: 140.65 },
  },
  {
    id: 'miyagi_offshore',
    name: '宮城県沖地震 (M7.2 / 最大震度6弱)',
    description: '太平洋プレート沈み込み帯のプレート境界地震。宮城・岩手・福島・山形など東北全域で強い揺れ。',
    epicenterName: '宮城県沖',
    lat: 38.30,
    lon: 141.80,
    depthKm: 50,
    magnitude: 7.2,
    faultType: 'interplate',
    faultStart: { lat: 38.65, lon: 142.00 },
    faultEnd: { lat: 37.95, lon: 141.60 },
  },
  {
    id: 'cancel_lightning',
    name: '【取消報】落雷ノイズ誤検知 (単一観測点)',
    description: '長野県内の山間部観測点に直撃した落雷による約1000galの突発電気ノイズにより、システムがM7.1の巨大地震と誤認して第1報を発令。その後、周囲観測点に波形伝播がないことから「取消報」を発表する実際の気象庁誤発報・キャンセル訓練シナリオ。',
    epicenterName: '長野県北部 (誤認)',
    lat: 36.65,
    lon: 138.18,
    depthKm: 10,
    magnitude: 7.1,
    faultType: 'crustal',
    cancelConfig: {
      triggerAfterSec: 4.0,
      reason: '落雷等による観測点ノイズ誤検知',
      noiseStationCode: 'CB012'
    }
  },
  {
    id: 'cancel_sensor_fault',
    name: '【取消報】機器障害・ベースライン急変',
    description: '観測点機器の電源サージ・加速度計センサーのベースライン急変による偽パルス。第1報発報後にセンサーデータの整合性チェックで異常値判定され即座に取消報を発報。',
    epicenterName: '鳥取県東部 (誤認)',
    lat: 35.50,
    lon: 134.24,
    depthKm: 12,
    magnitude: 6.5,
    faultType: 'crustal',
    cancelConfig: {
      triggerAfterSec: 3.5,
      reason: '観測機器障害・ベースライン急変',
      noiseStationCode: 'CG001'
    }
  }
];
