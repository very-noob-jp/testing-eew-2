/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// 日本列島の地図座標変換 (Mercator / Equirectangular 簡易投影)
// 経度: 122.0 〜 146.5
// 緯度: 24.0 〜 46.0

export interface MapPoint {
  x: number;
  y: number;
}

export function projectLatLonToCanvas(
  lat: number,
  lon: number,
  width: number,
  height: number
): MapPoint {
  // パディングと表示範囲
  const minLon = 127.0;
  const maxLon = 146.5;
  const minLat = 30.5;
  const maxLat = 45.8;

  // 沖縄など南西諸島はインセット表示するか、全体を収める
  // 経度X変換
  const x = ((lon - minLon) / (maxLon - minLon)) * (width - 60) + 30;

  // 緯度Y変換 (北が上なので反転)
  const y = height - (((lat - minLat) / (maxLat - minLat)) * (height - 60) + 30);

  return { x, y };
}

export function unprojectCanvasToLatLon(
  x: number,
  y: number,
  width: number,
  height: number
): { lat: number; lon: number } {
  const minLon = 127.0;
  const maxLon = 146.5;
  const minLat = 30.5;
  const maxLat = 45.8;

  const lon = minLon + ((x - 30) / (width - 60)) * (maxLon - minLon);
  const lat = minLat + ((height - y - 30) / (height - 60)) * (maxLat - minLat);

  return {
    lat: Math.round(Math.max(24.0, Math.min(46.0, lat)) * 100) / 100,
    lon: Math.round(Math.max(122.0, Math.min(148.0, lon)) * 100) / 100,
  };
}

// 簡易沖縄インセット用変換
export function projectOkinawaPoint(
  lat: number,
  lon: number,
  insetX: number,
  insetY: number,
  insetWidth: number,
  insetHeight: number
): MapPoint {
  const minLon = 123.5;
  const maxLon = 129.5;
  const minLat = 24.0;
  const maxLat = 27.5;

  const x = insetX + ((lon - minLon) / (maxLon - minLon)) * (insetWidth - 10) + 5;
  const y = insetY + insetHeight - (((lat - minLat) / (maxLat - minLat)) * (insetHeight - 10) + 5);

  return { x, y };
}
