/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useMemo, useEffect, useCallback } from 'react';
import { JAPAN_COASTLINES, TRENCH_LINES, PREFECTURE_CENTERS } from '../data/japanCoastlines';
import { getKyoshinColor, getKyoshinRGB, VP_KM_S, VS_KM_S } from '../physics/seismicPhysics';
import { Scenario, Station, ShindoFlashReport } from '../types/earthquake';
import { projectLatLonToCanvas, unprojectCanvasToLatLon } from '../utils/mapProjection';
import {
  Layers,
  Eye,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Activity,
  Compass,
  MapPin,
  Flame,
  Crosshair,
  Hash,
} from 'lucide-react';

interface KyoshinMapProps {
  stations: Station[];
  scenario: Scenario;
  pWaveRadiusKm: number;
  sWaveRadiusKm: number;
  elapsedSec: number;
  currentShindoFlash?: ShindoFlashReport | null;
  selectedStationCode?: string | null;
  onSelectStation?: (station: Station | null) => void;
  onChangeEpicenterLocation?: (lat: number, lon: number, epicenterName: string) => void;
}

// 地域別ズームプリセット
const REGION_PRESETS: { name: string; centerLat: number; centerLon: number; zoom: number }[] = [
  { name: '全国', centerLat: 37.5, centerLon: 137.5, zoom: 1.0 },
  { name: '北海道', centerLat: 43.5, centerLon: 142.8, zoom: 2.2 },
  { name: '東北', centerLat: 39.2, centerLon: 141.0, zoom: 2.4 },
  { name: '関東', centerLat: 35.8, centerLon: 139.8, zoom: 3.2 },
  { name: '中部', centerLat: 36.0, centerLon: 137.0, zoom: 2.8 },
  { name: '近畿', centerLat: 34.8, centerLon: 135.5, zoom: 3.0 },
  { name: '中四国', centerLat: 34.2, centerLon: 133.0, zoom: 2.6 },
  { name: '九州', centerLat: 32.5, centerLon: 131.0, zoom: 2.5 },
];

export const KyoshinMap: React.FC<KyoshinMapProps> = React.memo(({
  stations,
  scenario,
  pWaveRadiusKm,
  sWaveRadiusKm,
  elapsedSec,
  currentShindoFlash,
  selectedStationCode,
  onSelectStation,
  onChangeEpicenterLocation,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [hoveredStation, setHoveredStation] = useState<Station | null>(null);
  const [showLabels, setShowLabels] = useState(false);
  const [showPrefNames, setShowPrefNames] = useState(true);
  const [showTrenches, setShowTrenches] = useState(true);
  const [showContours, setShowContours] = useState(true);
  const [showShindoNumbers, setShowShindoNumbers] = useState(true);
  const [displayMode, setDisplayMode] = useState<'shindo' | 'gal'>('shindo');
  const [isEpicenterPickMode, setIsEpicenterPickMode] = useState(false);
  const [cursorLatLon, setCursorLatLon] = useState<{ lat: number; lon: number } | null>(null);

  // ズーム・パン状態
  const [zoom, setZoom] = useState(1.0);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef<{ x: number; y: number; panX: number; panY: number }>({
    x: 0,
    y: 0,
    panX: 0,
    panY: 0,
  });

  const svgWidth = 960;
  const svgHeight = 700;

  // 観測点の投影座標キャッシュ (再計算を防ぐ)
  const stationCoordsCache = useMemo(() => {
    return stations.map((st) => {
      const pt = projectLatLonToCanvas(st.lat, st.lon, svgWidth, svgHeight);
      return {
        ...st,
        px: pt.x,
        py: pt.y,
      };
    });
  }, [stations]);

  // 震央のキャンバス座標
  const epicenterPoint = useMemo(() => {
    return projectLatLonToCanvas(scenario.lat, scenario.lon, svgWidth, svgHeight);
  }, [scenario.lat, scenario.lon]);

  // 地図上の1kmあたりのピクセル換算比率 (緯度1度 ≈ 111km)
  const kmToPixel = useMemo(() => {
    const p1 = projectLatLonToCanvas(35.0, 135.0, svgWidth, svgHeight);
    const p2 = projectLatLonToCanvas(36.0, 135.0, svgWidth, svgHeight);
    return Math.abs(p1.y - p2.y) / 111.0;
  }, []);

  const pRadiusPx = Math.max(0, pWaveRadiusKm * kmToPixel);
  const sRadiusPx = Math.max(0, sWaveRadiusKm * kmToPixel);

  // マウスドラッグ・パン
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      panX: pan.x,
      panY: pan.y,
    };
  };

  // マウス座標から最寄りの観測点を高速検索 (ヒットテスト)
  const getStationAtScreenPos = useCallback(
    (clientX: number, clientY: number): Station | null => {
      const canvas = canvasRef.current;
      if (!canvas) return null;
      const rect = canvas.getBoundingClientRect();

      // キャンバス上のSVG論理座標系へ逆変換
      const scaleX = svgWidth / rect.width;
      const scaleY = svgHeight / rect.height;

      const clickCanvasX = (clientX - rect.left) * scaleX;
      const clickCanvasY = (clientY - rect.top) * scaleY;

      // pan, zoom を考慮した論理座標
      const worldX = (clickCanvasX - pan.x) / zoom;
      const worldY = (clickCanvasY - pan.y) / zoom;

      const hitRadius = 14 / zoom; // クリック判定半径
      let closest: Station | null = null;
      let minDistanceSq = hitRadius * hitRadius;

      for (let i = 0; i < stationCoordsCache.length; i++) {
        const st = stationCoordsCache[i];
        const dx = st.px - worldX;
        const dy = st.py - worldY;
        const distSq = dx * dx + dy * dy;
        if (distSq < minDistanceSq) {
          minDistanceSq = distSq;
          closest = st;
        }
      }

      return closest;
    },
    [stationCoordsCache, pan, zoom]
  );

  const handleMouseMove = (e: React.MouseEvent) => {
    // マウスカーソル位置の緯度経度を逆算
    const canvas = canvasRef.current;
    if (canvas) {
      const rect = canvas.getBoundingClientRect();
      const scaleX = svgWidth / rect.width;
      const scaleY = svgHeight / rect.height;
      const clickCanvasX = (e.clientX - rect.left) * scaleX;
      const clickCanvasY = (e.clientY - rect.top) * scaleY;
      const worldX = (clickCanvasX - pan.x) / zoom;
      const worldY = (clickCanvasY - pan.y) / zoom;
      const latLon = unprojectCanvasToLatLon(worldX, worldY, svgWidth, svgHeight);
      setCursorLatLon(latLon);
    }

    if (isDragging) {
      const dx = e.clientX - dragStartRef.current.x;
      const dy = e.clientY - dragStartRef.current.y;
      setPan({
        x: dragStartRef.current.panX + dx,
        y: dragStartRef.current.panY + dy,
      });
    } else {
      // ホバー判定 (毎フレーム高速処理)
      const st = getStationAtScreenPos(e.clientX, e.clientY);
      setHoveredStation(st);
    }
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (isDragging) {
      const dx = Math.abs(e.clientX - dragStartRef.current.x);
      const dy = Math.abs(e.clientY - dragStartRef.current.y);
      setIsDragging(false);

      // ドラッグ移動が小さければクリックと判定
      if (dx < 5 && dy < 5) {
        if (isEpicenterPickMode && onChangeEpicenterLocation) {
          const canvas = canvasRef.current;
          if (canvas) {
            const rect = canvas.getBoundingClientRect();
            const scaleX = svgWidth / rect.width;
            const scaleY = svgHeight / rect.height;
            const clickCanvasX = (e.clientX - rect.left) * scaleX;
            const clickCanvasY = (e.clientY - rect.top) * scaleY;
            const worldX = (clickCanvasX - pan.x) / zoom;
            const worldY = (clickCanvasY - pan.y) / zoom;
            const { lat, lon } = unprojectCanvasToLatLon(worldX, worldY, svgWidth, svgHeight);

            // 最寄りの地域名を推定
            let closestPref = '日本近海';
            let minDistSq = 9999;
            for (const pref of PREFECTURE_CENTERS) {
              const dlat = pref.lat - lat;
              const dlon = pref.lon - lon;
              const distSq = dlat * dlat + dlon * dlon;
              if (distSq < minDistSq) {
                minDistSq = distSq;
                closestPref = pref.name;
              }
            }
            const name = minDistSq > 1.8 ? `${closestPref}沖` : `${closestPref}付近`;
            onChangeEpicenterLocation(lat, lon, name);
          }
        } else if (onSelectStation) {
          const clicked = getStationAtScreenPos(e.clientX, e.clientY);
          onSelectStation(clicked);
        }
      }
    }
  };

  // ホイールズーム
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const cursorX = ((e.clientX - rect.left) / rect.width) * svgWidth;
    const cursorY = ((e.clientY - rect.top) / rect.height) * svgHeight;

    const zoomFactor = e.deltaY < 0 ? 1.18 : 0.85;
    const nextZoom = Math.min(6.0, Math.max(0.75, zoom * zoomFactor));

    // カーソル位置を中心にズーム
    const newPanX = cursorX - ((cursorX - pan.x) / zoom) * nextZoom;
    const newPanY = cursorY - ((cursorY - pan.y) / zoom) * nextZoom;

    setZoom(nextZoom);
    setPan({ x: newPanX, y: newPanY });
  };

  // 地域プリセットフォーカス
  const handleFocusRegion = (preset: (typeof REGION_PRESETS)[0]) => {
    if (preset.name === '全国') {
      setZoom(1.0);
      setPan({ x: 0, y: 0 });
      return;
    }
    const targetPt = projectLatLonToCanvas(preset.centerLat, preset.centerLon, svgWidth, svgHeight);
    const targetZoom = preset.zoom;
    const centerX = svgWidth / 2;
    const centerY = svgHeight / 2;
    const newPanX = centerX - targetPt.x * targetZoom;
    const newPanY = centerY - targetPt.y * targetZoom;
    setZoom(targetZoom);
    setPan({ x: newPanX, y: newPanY });
  };

  // 震央へフォーカス
  const handleFocusEpicenter = () => {
    const centerX = svgWidth / 2;
    const centerY = svgHeight / 2;
    const targetZoom = 2.4;
    setZoom(targetZoom);
    setPan({
      x: centerX - epicenterPoint.x * targetZoom,
      y: centerY - epicenterPoint.y * targetZoom,
    });
  };

  // 揺れが大きい上位観測点のサマリー
  const activeStations = useMemo(() => {
    return stations.filter((s) => (s.currentIntensity ?? -2) >= 0.5);
  }, [stations]);

  // 高速 Canvas 2D レンダリングループ (1,749地点を60fpsで描画)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    // Retina / 高DPI対応
    const dpr = window.devicePixelRatio || 1;
    if (canvas.width !== svgWidth * dpr || canvas.height !== svgHeight * dpr) {
      canvas.width = svgWidth * dpr;
      canvas.height = svgHeight * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);

    // 1. 背景描画 (暗夜の海洋)
    ctx.fillStyle = '#020617';
    ctx.fillRect(0, 0, svgWidth, svgHeight);

    // パン・ズーム変換の適用
    ctx.save();
    ctx.translate(pan.x, pan.y);
    ctx.scale(zoom, zoom);

    // 2. 海洋グリッド
    ctx.strokeStyle = '#0f172a';
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    for (let x = -500; x <= svgWidth + 500; x += 40) {
      ctx.moveTo(x, -500);
      ctx.lineTo(x, svgHeight + 500);
    }
    for (let y = -500; y <= svgHeight + 500; y += 40) {
      ctx.moveTo(-500, y);
      ctx.lineTo(svgWidth + 500, y);
    }
    ctx.stroke();

    // 海洋テキスト
    ctx.fillStyle = '#1e293b';
    ctx.font = 'bold 20px sans-serif';
    ctx.fillText('PACIFIC OCEAN (太平洋)', 740, 240);
    ctx.fillText('SEA OF JAPAN (日本海)', 200, 320);
    ctx.font = 'bold 15px sans-serif';
    ctx.fillText('SEA OF OKHOTSK (オホーツク海)', 660, 70);

    // 3. プレート境界・海溝
    if (showTrenches) {
      ctx.save();
      ctx.strokeStyle = '#1e3a8a';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 4]);
      for (const line of TRENCH_LINES) {
        ctx.beginPath();
        for (let i = 0; i < line.length; i++) {
          const pt = projectLatLonToCanvas(line[i][0], line[i][1], svgWidth, svgHeight);
          if (i === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        }
        ctx.stroke();
      }
      ctx.restore();
    }

    // 4. 日本列島陸地ポリゴン
    ctx.fillStyle = '#0b1329';
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 1.0;
    for (const polygon of JAPAN_COASTLINES) {
      ctx.beginPath();
      for (let i = 0; i < polygon.length; i++) {
        const pt = projectLatLonToCanvas(polygon[i][0], polygon[i][1], svgWidth, svgHeight);
        if (i === 0) ctx.moveTo(pt.x, pt.y);
        else ctx.lineTo(pt.x, pt.y);
      }
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }

    // 5. 都道府県名ラベル
    if (showPrefNames) {
      ctx.fillStyle = '#334155';
      ctx.font = zoom > 1.8 ? '10px sans-serif' : '8px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      for (const pref of PREFECTURE_CENTERS) {
        const pt = projectLatLonToCanvas(pref.lat, pref.lon, svgWidth, svgHeight);
        ctx.fillText(pref.name, pt.x, pt.y);
      }
    }

    // 6. 推計震度分布コンター
    if (showContours && sRadiusPx > 0) {
      ctx.save();
      // 震度6強〜7エリア
      const r7 = Math.min(sRadiusPx, Math.max(0, (scenario.magnitude - 5.0) * 22 * kmToPixel));
      if (r7 > 0) {
        ctx.fillStyle = 'rgba(155, 0, 95, 0.35)';
        ctx.beginPath();
        ctx.arc(epicenterPoint.x, epicenterPoint.y, r7, 0, Math.PI * 2);
        ctx.fill();
      }
      // 震度5弱〜6弱エリア
      const r5 = Math.min(sRadiusPx, Math.max(0, (scenario.magnitude - 4.2) * 36 * kmToPixel));
      if (r5 > 0) {
        ctx.fillStyle = 'rgba(234, 85, 4, 0.22)';
        ctx.beginPath();
        ctx.arc(epicenterPoint.x, epicenterPoint.y, r5, 0, Math.PI * 2);
        ctx.fill();
      }
      // 震度3〜4エリア
      const r3 = Math.min(sRadiusPx, Math.max(0, (scenario.magnitude - 3.5) * 58 * kmToPixel));
      if (r3 > 0) {
        ctx.fillStyle = 'rgba(248, 181, 0, 0.12)';
        ctx.beginPath();
        ctx.arc(epicenterPoint.x, epicenterPoint.y, r3, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }

    // 7. P波伝播円 (シアン破線)
    if (pRadiusPx > 0) {
      ctx.save();
      ctx.fillStyle = 'rgba(2, 132, 199, 0.08)';
      ctx.beginPath();
      ctx.arc(epicenterPoint.x, epicenterPoint.y, pRadiusPx, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 1.8;
      ctx.setLineDash([6, 4]);
      ctx.stroke();

      // P波ラベル
      ctx.fillStyle = '#38bdf8';
      ctx.font = 'bold 9px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(
        `P波 (${VP_KM_S * elapsedSec < 1000 ? Math.round(pWaveRadiusKm) : '1000+'}km)`,
        epicenterPoint.x,
        epicenterPoint.y - pRadiusPx - 4
      );
      ctx.restore();
    }

    // 8. S波伝播円 (赤・実線)
    if (sRadiusPx > 0) {
      ctx.save();
      ctx.fillStyle = 'rgba(239, 68, 68, 0.15)';
      ctx.beginPath();
      ctx.arc(epicenterPoint.x, epicenterPoint.y, sRadiusPx, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 2.4;
      ctx.stroke();

      // S波ラベル
      ctx.fillStyle = '#ef4444';
      ctx.font = 'bold 10px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(
        `S波 (${VS_KM_S * elapsedSec < 1000 ? Math.round(sWaveRadiusKm) : '1000+'}km)`,
        epicenterPoint.x,
        epicenterPoint.y - sRadiusPx - 4
      );
      ctx.restore();
    }

    // 9. 断層破壊域 (破線)
    if (scenario.faultStart && scenario.faultEnd) {
      const fStart = projectLatLonToCanvas(
        scenario.faultStart.lat,
        scenario.faultStart.lon,
        svgWidth,
        svgHeight
      );
      const fEnd = projectLatLonToCanvas(
        scenario.faultEnd.lat,
        scenario.faultEnd.lon,
        svgWidth,
        svgHeight
      );
      ctx.save();
      ctx.strokeStyle = 'rgba(244, 63, 94, 0.75)';
      ctx.lineWidth = 3.5;
      ctx.setLineDash([6, 4]);
      ctx.beginPath();
      ctx.moveTo(fStart.x, fStart.y);
      ctx.lineTo(fEnd.x, fEnd.y);
      ctx.stroke();
      ctx.restore();
    }

    // 10. 震央マーカー (×印)
    ctx.save();
    ctx.translate(epicenterPoint.x, epicenterPoint.y);
    ctx.strokeStyle = '#dc2626';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(-10, -10);
    ctx.lineTo(10, 10);
    ctx.moveTo(10, -10);
    ctx.lineTo(-10, 10);
    ctx.stroke();

    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(-10, -10);
    ctx.lineTo(10, 10);
    ctx.moveTo(10, -10);
    ctx.lineTo(-10, 10);
    ctx.stroke();

    // 震央パルスリング
    ctx.strokeStyle = 'rgba(239, 68, 68, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(0, 0, 16 + (Math.sin(elapsedSec * 4) * 4), 0, Math.PI * 2);
    ctx.stroke();

    // 震央ラベル
    ctx.fillStyle = '#fecaca';
    ctx.font = 'bold 11px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`${scenario.epicenterName} (M${scenario.magnitude.toFixed(1)})`, 0, -16);
    ctx.restore();

    // 10. 全1,749観測点の一括高速バッチ描画
    const hoverCode = hoveredStation?.code;
    const selectedCode = selectedStationCode;

    for (let i = 0; i < stationCoordsCache.length; i++) {
      const st = stationCoordsCache[i];
      const intensityVal = st.currentIntensity ?? -2;
      const color = getKyoshinColor(intensityVal);
      const isSelected = selectedCode === st.code;
      const isHovered = hoverCode === st.code;
      const isShaking = intensityVal >= 0.5;
      const isStrong = intensityVal >= 4.5;

      const r = isSelected ? 6.5 : isHovered ? 5.5 : isShaking ? 4.0 : 2.0;

      // 揺れ検知時のパルスリング
      if (isShaking) {
        ctx.strokeStyle = color;
        ctx.lineWidth = 1.0;
        ctx.globalAlpha = 0.6;
        ctx.beginPath();
        ctx.arc(st.px, st.py, Math.min(14, 4.0 + Math.max(0, intensityVal) * 1.5), 0, Math.PI * 2);
        ctx.stroke();
        ctx.globalAlpha = 1.0;
      }

      // ドット本体
      ctx.fillStyle = color;
      ctx.strokeStyle = isSelected ? '#38bdf8' : isHovered ? '#ffffff' : '#030816';
      ctx.lineWidth = isSelected ? 2.0 : isHovered ? 1.5 : 0.6;
      ctx.beginPath();
      ctx.arc(st.px, st.py, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // 観測点ごとの震度数字描画 (震度数字ON時、震度3以上またはズーム時震度1以上)
      if (showShindoNumbers && (intensityVal >= 2.5 || (zoom >= 1.6 && intensityVal >= 0.5))) {
        const badgeText =
          intensityVal >= 6.5
            ? '7'
            : intensityVal >= 6.0
            ? '6+'
            : intensityVal >= 5.5
            ? '6-'
            : intensityVal >= 5.0
            ? '5+'
            : intensityVal >= 4.5
            ? '5-'
            : intensityVal >= 3.5
            ? '4'
            : intensityVal >= 2.5
            ? '3'
            : intensityVal >= 1.5
            ? '2'
            : '1';

        const badgeRadius = intensityVal >= 4.5 ? 6.5 : 5.5;
        ctx.fillStyle = color;
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.0;
        ctx.beginPath();
        ctx.arc(st.px, st.py, badgeRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = intensityVal >= 3.5 && intensityVal < 4.5 ? '#020617' : '#ffffff';
        ctx.font = 'bold 8px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(badgeText, st.px, st.py + 0.5);
      }

      // ラベル描画 (選択時、ホバー時、あるいは強震時かつズーム時)
      if (showLabels || isHovered || isSelected || (isStrong && zoom >= 2.0)) {
        ctx.fillStyle = isHovered || isSelected ? '#ffffff' : '#cbd5e1';
        ctx.font = isHovered || isSelected ? 'bold 10px monospace' : '7.5px monospace';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        const labelText = `${st.name} ${displayMode === 'gal' ? `${st.currentGal ?? 0}G` : `[${st.intensityGrade}]`}`;
        ctx.fillText(labelText, st.px + 7, st.py);
      }
    }

    // 11. 震度速報の地域別震度数字バッジ (第1段階・第2段階発表時)
    if (showShindoNumbers && currentShindoFlash && currentShindoFlash.areas.length > 0) {
      currentShindoFlash.areas.forEach((area) => {
        const prefPos = PREFECTURE_CENTERS.find(
          (p) => area.pref.includes(p.name) || p.name.includes(area.pref)
        );
        if (!prefPos) return;

        const pt = projectLatLonToCanvas(prefPos.lat, prefPos.lon, svgWidth, svgHeight);
        const gradeStr = area.intensity;
        const numVal =
          gradeStr === '7'
            ? 7.0
            : gradeStr === '6強'
            ? 6.3
            : gradeStr === '6弱'
            ? 5.8
            : gradeStr === '5強'
            ? 5.3
            : gradeStr === '5弱'
            ? 4.8
            : gradeStr === '4'
            ? 4.0
            : gradeStr === '3'
            ? 3.0
            : 2.0;

        const badgeColor = getKyoshinColor(numVal);
        const bw = 30;
        const bh = 24;

        ctx.save();
        ctx.translate(pt.x, pt.y);

        // バッジ背景 (角丸四角形)
        ctx.fillStyle = badgeColor;
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        const r = 4;
        ctx.roundRect(-bw / 2, -bh / 2, bw, bh, r);
        ctx.fill();
        ctx.stroke();

        // 震度数字テキスト
        ctx.fillStyle = gradeStr === '4' ? '#0f172a' : '#ffffff';
        ctx.font = 'bold 12px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(gradeStr, 0, 0.5);

        // 都道府県名テキスト (影付き)
        ctx.fillStyle = '#ffffff';
        ctx.strokeStyle = '#020617';
        ctx.lineWidth = 2.5;
        ctx.font = 'bold 9.5px sans-serif';
        ctx.strokeText(area.pref, 0, bh / 2 + 8);
        ctx.fillText(area.pref, 0, bh / 2 + 8);

        ctx.restore();
      });
    }

    ctx.restore(); // ポップアップ復元
    ctx.restore(); // DPI復元
  }, [
    stationCoordsCache,
    scenario,
    pRadiusPx,
    sRadiusPx,
    pWaveRadiusKm,
    sWaveRadiusKm,
    elapsedSec,
    pan,
    zoom,
    showContours,
    showTrenches,
    showPrefNames,
    showLabels,
    showShindoNumbers,
    currentShindoFlash,
    displayMode,
    hoveredStation?.code,
    selectedStationCode,
    epicenterPoint,
    kmToPixel,
  ]);

  return (
    <div className="relative rounded-xl border border-slate-700/80 bg-slate-950 overflow-hidden shadow-2xl flex flex-col">
      {/* ツールバー & コントロール */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-3 py-2 bg-slate-900/95 border-b border-slate-800 text-slate-200">
        <div className="flex items-center gap-2">
          <div className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
          </div>
          <h3 className="text-xs md:text-sm font-bold tracking-tight text-white flex items-center gap-1.5">
            <span>強震モニタ高速ベクターマップ</span>
            <span className="text-[10px] px-1.5 py-0.2 bg-slate-800 text-cyan-400 rounded border border-cyan-900/50">
              K-NET / KiK-net {stations.length}地点 (60fps Canvas)
            </span>
          </h3>
        </div>

        {/* 画面切り替え・レイヤーボタン */}
        <div className="flex flex-wrap items-center gap-1.5 text-xs">
          {/* 表示値切り替え */}
          <div className="flex items-center bg-slate-800 rounded p-0.5 border border-slate-700">
            <button
              onClick={() => setDisplayMode('shindo')}
              className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                displayMode === 'shindo'
                  ? 'bg-cyan-600 text-white font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              リアルタイム震度
            </button>
            <button
              onClick={() => setDisplayMode('gal')}
              className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                displayMode === 'gal'
                  ? 'bg-cyan-600 text-white font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              加速度 (Gal)
            </button>
          </div>

          {/* 各種レイヤートグル */}
          <button
            onClick={() => setShowShindoNumbers(!showShindoNumbers)}
            title="マップ上の震度数字（観測点・地域）の表示切替"
            className={`flex items-center gap-1 px-2 py-1 rounded border text-[11px] transition-colors ${
              showShindoNumbers
                ? 'bg-cyan-950/70 border-cyan-500/70 text-cyan-300 font-bold'
                : 'border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <Hash className="w-3 h-3" />
            <span className="hidden sm:inline">震度数字</span>
          </button>

          <button
            onClick={() => setShowContours(!showContours)}
            title="推計震度分布コンターの表示切替"
            className={`flex items-center gap-1 px-2 py-1 rounded border text-[11px] transition-colors ${
              showContours
                ? 'bg-rose-950/60 border-rose-600/70 text-rose-300'
                : 'border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <Flame className="w-3 h-3" />
            <span className="hidden sm:inline">震度推計域</span>
          </button>

          <button
            onClick={() => setShowLabels(!showLabels)}
            title="観測点名の表示切替"
            className={`flex items-center gap-1 px-2 py-1 rounded border text-[11px] transition-colors ${
              showLabels
                ? 'bg-slate-700 border-slate-600 text-white'
                : 'border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <Eye className="w-3 h-3" />
            <span className="hidden sm:inline">観測点名</span>
          </button>

          <button
            onClick={() => setShowPrefNames(!showPrefNames)}
            title="都道府県名の表示切替"
            className={`flex items-center gap-1 px-2 py-1 rounded border text-[11px] transition-colors ${
              showPrefNames
                ? 'bg-slate-700 border-slate-600 text-white'
                : 'border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <Compass className="w-3 h-3" />
            <span className="hidden sm:inline">県名</span>
          </button>

          {/* 震源地変更モードトグル */}
          {onChangeEpicenterLocation && (
            <button
              onClick={() => setIsEpicenterPickMode(!isEpicenterPickMode)}
              title="地図上の任意の場所をクリックして震源地を変更"
              className={`flex items-center gap-1 px-2.5 py-1 rounded border text-[11px] font-bold transition-all shadow-sm ${
                isEpicenterPickMode
                  ? 'bg-red-600 border-red-400 text-white animate-pulse ring-2 ring-red-400/50'
                  : 'bg-slate-800 border-slate-700 text-red-300 hover:bg-slate-700 hover:text-red-200'
              }`}
            >
              <Crosshair className="w-3.5 h-3.5 text-red-400" />
              <span>{isEpicenterPickMode ? '地図をクリックで震源指定中...' : '震源地を変更'}</span>
            </button>
          )}
        </div>
      </div>

      {/* 地域クイックフォーカスバー */}
      <div className="flex items-center gap-1 px-3 py-1 bg-slate-950/90 border-b border-slate-800/80 overflow-x-auto text-[11px] scrollbar-none">
        <span className="text-slate-500 shrink-0 text-[10px] font-mono mr-1">REGION:</span>
        {REGION_PRESETS.map((p) => (
          <button
            key={`region-focus-${p.name}`}
            onClick={() => handleFocusRegion(p)}
            className="px-2 py-0.5 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 shrink-0 transition-colors"
          >
            {p.name}
          </button>
        ))}
        <button
          onClick={handleFocusEpicenter}
          className="ml-auto px-2 py-0.5 rounded bg-red-950/60 hover:bg-red-900/60 border border-red-800 text-red-300 shrink-0 transition-colors flex items-center gap-1 font-bold"
        >
          <MapPin className="w-2.5 h-2.5" />
          震央追従
        </button>
      </div>

      {/* メイン高速 Canvas キャンバス */}
      <div
        ref={containerRef}
        className={`relative w-full aspect-[16/11] max-h-[580px] bg-[#020617] select-none overflow-hidden ${
          isEpicenterPickMode ? 'cursor-crosshair' : 'cursor-grab active:cursor-grabbing'
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
      >
        <canvas
          ref={canvasRef}
          className="w-full h-full block"
          style={{ touchAction: 'none' }}
        />

        {/* 震源地指定モードのフローティングヘルパー */}
        {isEpicenterPickMode && (
          <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-red-950/90 border border-red-500 text-red-100 text-xs px-3.5 py-1.5 rounded-full shadow-2xl flex items-center gap-2 font-medium pointer-events-none backdrop-blur animate-bounce">
            <Crosshair className="w-4 h-4 text-red-400" />
            <span>地図上の希望の場所をクリックして新しい震源地に決定</span>
            {cursorLatLon && (
              <span className="font-mono text-cyan-300 bg-black/50 px-1.5 py-0.5 rounded text-[11px]">
                北緯{cursorLatLon.lat.toFixed(2)}° 東経{cursorLatLon.lon.toFixed(2)}°
              </span>
            )}
          </div>
        )}

        {/* ズーム & パン コントローラー (左下) */}
        <div className="absolute bottom-3 left-3 flex items-center bg-slate-900/90 rounded-lg p-1 border border-slate-700/80 shadow-lg text-slate-300 gap-1">
          <button
            onClick={() => setZoom((z) => Math.min(6.0, z * 1.3))}
            title="拡大"
            className="p-1.5 hover:bg-slate-800 rounded hover:text-white transition-colors"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            onClick={() => setZoom((z) => Math.max(0.75, z / 1.3))}
            title="縮小"
            className="p-1.5 hover:bg-slate-800 rounded hover:text-white transition-colors"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <button
            onClick={() => {
              setZoom(1.0);
              setPan({ x: 0, y: 0 });
            }}
            title="全体表示リセット"
            className="p-1.5 hover:bg-slate-800 rounded hover:text-white transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
          <span className="text-[10px] font-mono px-1 text-slate-400">
            {Math.round(zoom * 100)}%
          </span>
        </div>

        {/* 揺れ検知サマリーバッジ (右下) */}
        <div className="absolute bottom-3 right-3 bg-slate-900/90 border border-slate-800 rounded-lg px-3 py-1.5 shadow-lg flex items-center gap-3 text-xs">
          <div className="flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-slate-400">揺れ検知中:</span>
            <span className="font-bold font-mono text-cyan-300">{activeStations.length}地点</span>
          </div>
          <div className="text-slate-500 font-mono text-[11px]">
            T+{elapsedSec.toFixed(1)}s
          </div>
        </div>

        {/* ホバーまたは選択中の観測点インスペクター (左上オーバーレイ) */}
        {hoveredStation && (
          <div className="absolute top-3 left-3 bg-slate-900/95 border border-cyan-500/50 rounded-lg p-3 shadow-2xl text-xs max-w-xs backdrop-blur pointer-events-none animate-in fade-in duration-150">
            <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-1.5 mb-2">
              <div className="font-bold text-white flex items-center gap-1.5">
                <span
                  className="w-3 h-3 rounded-full inline-block"
                  style={{ backgroundColor: getKyoshinColor(hoveredStation.currentIntensity) }}
                />
                <span>
                  {hoveredStation.pref} {hoveredStation.name}
                </span>
                <span className="text-[10px] text-slate-400 font-mono">({hoveredStation.code})</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-3 gap-y-1 font-mono text-[11px]">
              <div>
                <span className="text-slate-400">リアルタイム震度: </span>
                <span className="font-bold text-cyan-300">
                  {hoveredStation.currentIntensity >= 0.5 ? hoveredStation.intensityGrade : '0未満'}
                  <span className="text-[9px] text-slate-400 ml-1">({hoveredStation.currentIntensity.toFixed(1)})</span>
                </span>
              </div>
              <div>
                <span className="text-slate-400">瞬時加速度: </span>
                <span className="font-bold text-amber-300">{hoveredStation.currentGal.toFixed(1)} gal</span>
              </div>
              <div>
                <span className="text-slate-400">表層地盤増幅: </span>
                <span className="text-emerald-400 font-bold">{hoveredStation.siteAmp.toFixed(2)}倍</span>
              </div>
              <div>
                <span className="text-slate-400">S波到達状況: </span>
                <span className={hoveredStation.sArrived ? 'text-red-400 font-bold' : 'text-slate-400'}>
                  {hoveredStation.sArrived
                    ? '到達済'
                    : `約${Math.max(0, hoveredStation.sTimeSec - elapsedSec).toFixed(1)}秒後`}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 気象庁・NIED 強震モニタ公式震度カラー凡例バー */}
      <div className="bg-slate-900 border-t border-slate-800 px-3 py-2 flex flex-col md:flex-row items-center justify-between gap-2 text-xs">
        <div className="text-slate-400 text-[11px] font-medium shrink-0 flex items-center gap-1.5">
          <span>強震モニタ震度階級:</span>
        </div>

        <div className="flex items-center gap-1 w-full max-w-xl overflow-x-auto text-[10px] font-bold text-center">
          <div className="flex-1 py-0.5 rounded text-white bg-[#001040]">0未満</div>
          <div className="flex-1 py-0.5 rounded text-white bg-[#0050c0]">震度0</div>
          <div className="flex-1 py-0.5 rounded text-slate-900 bg-[#00a0e9]">震度1</div>
          <div className="flex-1 py-0.5 rounded text-white bg-[#009944]">震度2</div>
          <div className="flex-1 py-0.5 rounded text-slate-900 bg-[#a4c639]">震度3</div>
          <div className="flex-1 py-0.5 rounded text-slate-900 bg-[#f8b500]">震度4</div>
          <div className="flex-1 py-0.5 rounded text-white bg-[#ea5504]">5弱</div>
          <div className="flex-1 py-0.5 rounded text-white bg-[#e60012]">5強</div>
          <div className="flex-1 py-0.5 rounded text-white bg-[#b80018]">6弱</div>
          <div className="flex-1 py-0.5 rounded text-white bg-[#860014]">6強</div>
          <div className="flex-1 py-0.5 rounded text-white bg-[#9b005f]">震度7</div>
        </div>
      </div>
    </div>
  );
});
