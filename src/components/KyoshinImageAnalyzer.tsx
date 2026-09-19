/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useEffect, useState, useMemo } from 'react';
import { Camera, Search, Sparkles, AlertCircle, Info, RefreshCw } from 'lucide-react';
import { Station } from '../types/earthquake';
import { getKyoshinRGB, reverseColorToIntensity, intensityToGrade } from '../physics/seismicPhysics';

interface KyoshinImageAnalyzerProps {
  stations: Station[];
  elapsedSec: number;
}

export const KyoshinImageAnalyzer: React.FC<KyoshinImageAnalyzerProps> = React.memo(({ stations, elapsedSec }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [inspectedPixel, setInspectedPixel] = useState<{
    x: number;
    y: number;
    rgb: [number, number, number];
    calculatedIntensity: number;
    nearestStation?: string;
  } | null>(null);

  // 観測点数
  const analyzedCount = stations.length;

  // 最も高い解析震度を計算 (setState不要・高速メモ化)
  const maxAnalyzedIntensity = useMemo(() => {
    let maxI = -2.0;
    for (let i = 0; i < stations.length; i++) {
      const intensity = stations[i].currentIntensity ?? -2;
      if (intensity > maxI) {
        maxI = intensity;
      }
    }
    return maxI;
  }, [stations]);

  // キャンバス解像度 (NIED 強震モニタ標準近似 352 x 400)
  const canvasWidth = 352;
  const canvasHeight = 400;

  // 投影座標の事前計算キャッシュ
  const stationRasterCoords = useMemo(() => {
    return stations.map((st) => ({
      ...st,
      rx: Math.floor(((st.lon - 127.0) / (146.5 - 127.0)) * (canvasWidth - 30) + 15),
      ry: Math.floor(canvasHeight - (((st.lat - 30.5) / (45.8 - 30.5)) * (canvasHeight - 30) + 15)),
    }));
  }, [stations.length]); // 駅数変化時のみ再計算

  const lastDrawSecRef = useRef<number>(-1);

  // キャンバスへのラスタ描画 & ピクセル震度解析 (0.2秒間隔のスロットル描画で負荷を大幅削減)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // 0.2秒以上の間隔でのみ描画更新 (初期状態・リセット時は即時)
    if (elapsedSec > 0 && Math.abs(elapsedSec - lastDrawSecRef.current) < 0.2) {
      return;
    }
    lastDrawSecRef.current = elapsedSec;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    // 背景（海）
    ctx.fillStyle = '#000814';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // 観測点をラスタピクセルとして描画
    const len = stations.length;

    for (let i = 0; i < len; i++) {
      const st = stations[i];
      const coords = stationRasterCoords[i];
      const intensity = st.currentIntensity ?? -2;

      const [r, g, b] = getKyoshinRGB(intensity);

      // 点の描画 (3x3 ピクセルの観測点塊)
      ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
      if (coords) {
        ctx.fillRect(coords.rx - 2, coords.ry - 2, 4, 4);
      }
    }
  }, [stations, stationRasterCoords, elapsedSec]);

  // クリックしてピクセル色をサンプリング & 震度逆算
  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const x = Math.floor((e.clientX - rect.left) * scaleX);
    const y = Math.floor((e.clientY - rect.top) * scaleY);

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const pixelData = ctx.getImageData(x, y, 1, 1).data;
    const rgb: [number, number, number] = [pixelData[0], pixelData[1], pixelData[2]];

    // RGBから色空間距離法で震度逆算
    const calculatedIntensity = reverseColorToIntensity(rgb[0], rgb[1], rgb[2]);

    // 最寄りの観測点を探す
    let nearest: Station | undefined;
    let minDist = Infinity;
    for (let i = 0; i < stations.length; i++) {
      const coords = stationRasterCoords[i];
      if (!coords) continue;
      const dist = (coords.rx - x) * (coords.rx - x) + (coords.ry - y) * (coords.ry - y);
      if (dist < minDist) {
        minDist = dist;
        nearest = stations[i];
      }
    }

    setInspectedPixel({
      x,
      y,
      rgb,
      calculatedIntensity,
      nearestStation: nearest ? `${nearest.pref} ${nearest.name} (${nearest.code})` : undefined,
    });
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-3.5 space-y-3 shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Camera className="w-4 h-4 text-cyan-400" />
          <h3 className="text-xs md:text-sm font-bold text-white">
            強震モニタ画像 ラスタ解析・震度逆算
          </h3>
        </div>
        <span className="text-[10px] text-slate-400 font-mono">
          {analyzedCount} 地点サンプリング中
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-start">
        {/* 左側: 生成されたラスタ強震画像 (クリック可能) */}
        <div className="sm:col-span-6 flex flex-col items-center">
          <div className="relative border border-slate-700 rounded-lg overflow-hidden bg-[#000814] shadow-inner cursor-crosshair">
            <canvas
              ref={canvasRef}
              width={canvasWidth}
              height={canvasHeight}
              onClick={handleCanvasClick}
              className="w-[180px] h-[205px] block"
              title="クリックしたピクセルのRGB値から震度を逆算します"
            />
            <div className="absolute bottom-1 right-1 bg-slate-950/80 px-1.5 py-0.5 rounded text-[9px] text-slate-400 font-mono">
              352×400 GIF再現
            </div>
          </div>
          <p className="text-[10px] text-slate-500 mt-1">※画像上の任意の地点をクリックで解析</p>
        </div>

        {/* 右側: ピクセル解析結果 */}
        <div className="sm:col-span-6 space-y-2 text-xs">
          <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800 space-y-1.5">
            <div className="text-[11px] text-slate-400 font-semibold flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>ピクセルRGB色空間 逆算ステータス</span>
            </div>

            {inspectedPixel ? (
              <div className="space-y-1.5 pt-1">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-[11px]">取得座標 (X, Y):</span>
                  <span className="font-mono text-cyan-300">
                    ({inspectedPixel.x}, {inspectedPixel.y})
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-[11px]">ピクセルRGB:</span>
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-3.5 h-3.5 rounded border border-slate-700 shadow"
                      style={{
                        backgroundColor: `rgb(${inspectedPixel.rgb[0]}, ${inspectedPixel.rgb[1]}, ${inspectedPixel.rgb[2]})`,
                      }}
                    />
                    <span className="font-mono text-slate-200 text-[11px]">
                      rgb({inspectedPixel.rgb.join(',')})
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-slate-800 pt-1">
                  <span className="text-slate-400 text-[11px]">推定計測震度:</span>
                  <span className="font-mono font-bold text-amber-400 text-sm">
                    {inspectedPixel.calculatedIntensity.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-[11px]">気象庁震度階級:</span>
                  <span className="font-bold text-white bg-cyan-700 px-2 py-0.5 rounded text-[11px]">
                    {intensityToGrade(inspectedPixel.calculatedIntensity)}
                  </span>
                </div>
                {inspectedPixel.nearestStation && (
                  <div className="border-t border-slate-800 pt-1 text-[10px] text-slate-400 truncate">
                    最寄観測点: <span className="text-slate-300">{inspectedPixel.nearestStation}</span>
                  </div>
                )}
              </div>
            ) : (
              <div className="py-5 text-center text-slate-500 text-[11px]">
                左の強震画像をクリックしてピクセル震度を逆算・検証できます
              </div>
            )}
          </div>

          <div className="bg-slate-950/40 p-2 rounded-lg border border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
            <span>最大解析震度:</span>
            <span className="font-mono font-bold text-rose-400">
              {maxAnalyzedIntensity > -1.5
                ? `${maxAnalyzedIntensity.toFixed(1)} (${intensityToGrade(maxAnalyzedIntensity)})`
                : '観測なし'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});
