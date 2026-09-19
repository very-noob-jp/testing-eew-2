/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Station } from '../types/earthquake';
import { Activity, Gauge, Radio, Volume2, Zap } from 'lucide-react';
import { getKyoshinColor } from '../physics/seismicPhysics';

interface WaveformMonitorProps {
  stations: Station[];
  selectedStation: Station | null;
  elapsedSec: number;
  onSelectStation: (st: Station) => void;
}

export const WaveformMonitor: React.FC<WaveformMonitorProps> = React.memo(({
  stations,
  selectedStation,
  elapsedSec,
  onSelectStation,
}) => {
  // 選択観測点がなければ、現在最も揺れている観測点を自動選択 (O(N)で高速検索)
  const activeStation = useMemo(() => {
    if (selectedStation) return selectedStation;
    if (stations.length === 0) return null;
    let maxStation = stations[0];
    let maxGal = maxStation.currentGal ?? 0;
    for (let i = 1; i < stations.length; i++) {
      const g = stations[i].currentGal ?? 0;
      if (g > maxGal) {
        maxGal = g;
        maxStation = stations[i];
      }
    }
    return maxStation;
  }, [selectedStation, stations]);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  // 波形ヒストリーバッファ (最新150サンプル)
  const historyRef = useRef<{ gal: number; time: number }[]>([]);
  const peakGalRef = useRef<number>(0);
  const [peakGal, setPeakGal] = useState(0);

  // 波形データ蓄積 & ピーク値更新
  useEffect(() => {
    // シミュレーションリセット時
    if (elapsedSec <= 0.2) {
      if (peakGalRef.current !== 0) {
        peakGalRef.current = 0;
        setPeakGal(0);
      }
      historyRef.current = [];
      return;
    }

    if (!activeStation) return;
    const curGal = activeStation.currentGal ?? 0;

    historyRef.current.push({ gal: curGal, time: elapsedSec });
    if (historyRef.current.length > 150) {
      historyRef.current.shift();
    }

    if (curGal > peakGalRef.current) {
      peakGalRef.current = curGal;
      setPeakGal(curGal);
    }
  }, [elapsedSec, activeStation?.code, activeStation?.currentGal]);

  // Canvas リアルタイム描画
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const midY = height / 2;

    // 背景クリア
    ctx.fillStyle = '#020617';
    ctx.fillRect(0, 0, width, height);

    // グリッド線
    ctx.strokeStyle = '#0f172a';
    ctx.lineWidth = 1;
    for (let x = 0; x < width; x += 30) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += 25) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // ゼロライン
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, midY);
    ctx.lineTo(width, midY);
    ctx.stroke();

    const history = historyRef.current;
    if (history.length < 2) return;

    // スケール決定 (最大加速度に応じてオートレンジ)
    const currentMax = Math.max(10, peakGal * 1.2);
    const yScale = (height / 2 - 10) / currentMax;

    // 地震動波形描画 (上下両振幅のリアルな地震計波形)
    ctx.strokeStyle = activeStation && (activeStation.currentIntensity ?? -2) >= 4.5 ? '#ef4444' : '#38bdf8';
    ctx.lineWidth = 1.8;
    ctx.beginPath();

    const stepX = width / 140;
    const startX = width - history.length * stepX;

    for (let idx = 0; idx < history.length; idx++) {
      const pt = history[idx];
      const x = startX + idx * stepX;
      // 振動の交互振幅
      const sign = idx % 2 === 0 ? 1 : -1;
      const y = midY - pt.gal * yScale * sign;

      if (idx === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();

    // 最新値スキャンバー
    const lastX = width - 2;
    ctx.fillStyle = '#22d3ee';
    ctx.fillRect(lastX, 0, 2, height);
  }, [elapsedSec, peakGal, activeStation]);

  if (!activeStation) return null;

  const color = getKyoshinColor(activeStation.currentIntensity);

  return (
    <div className="rounded-xl border border-slate-700/80 bg-slate-950 p-3 shadow-xl space-y-3">
      {/* ヘッダー */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-cyan-400" />
          <div>
            <h4 className="text-xs md:text-sm font-bold text-white flex items-center gap-2">
              <span>リアルタイム観測点波形モニター (3成分合成加速度)</span>
              {selectedStation && (
                <span className="text-[10px] px-1.5 py-0.5 bg-cyan-950 border border-cyan-700 text-cyan-300 rounded">
                  ユーザー選択固定中
                </span>
              )}
            </h4>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <div className="flex items-center gap-1 font-mono text-slate-400">
            <span>PEAK:</span>
            <span className="text-amber-400 font-bold">{peakGal.toFixed(1)} gal</span>
          </div>
        </div>
      </div>

      {/* 観測点情報カード */}
      <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-900/80 rounded-lg p-2.5 border border-slate-800">
        <div className="flex items-center gap-2.5">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-white shadow"
            style={{ backgroundColor: color }}
          >
            <span className="text-xs font-mono">
              {(activeStation.currentIntensity ?? -2) >= 0.5 ? activeStation.intensityGrade : '0未満'}
            </span>
          </div>
          <div>
            <div className="font-bold text-white flex items-center gap-1.5 text-xs md:text-sm">
              <span>
                {activeStation.pref} {activeStation.name}
              </span>
              <span className="text-slate-500 font-mono text-xs">({activeStation.code})</span>
            </div>
            <div className="text-[11px] text-slate-400 flex items-center gap-2">
              <span>
                緯度: <span className="font-mono text-slate-300">{activeStation.lat.toFixed(2)}°</span>
              </span>
              <span>
                経度: <span className="font-mono text-slate-300">{activeStation.lon.toFixed(2)}°</span>
              </span>
              <span>
                地盤増幅: <span className="font-mono text-emerald-400">{activeStation.siteAmp.toFixed(2)}x</span>
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 text-right">
          <div>
            <div className="text-[10px] text-slate-400">瞬時加速度 (Gal)</div>
            <div className="font-mono text-lg font-bold text-amber-400">
              {(activeStation.currentGal ?? 0).toFixed(1)}{' '}
              <span className="text-xs text-slate-500 font-normal">cm/s²</span>
            </div>
          </div>
          <div>
            <div className="text-[10px] text-slate-400">計測震度 (リアルタイム)</div>
            <div className="font-mono text-lg font-bold text-cyan-300">
              {(activeStation.currentIntensity ?? -2).toFixed(2)}
            </div>
          </div>
        </div>
      </div>

      {/* オシロスコープ波形キャンバス */}
      <div className="relative border border-slate-800 rounded-lg overflow-hidden bg-[#020617]">
        <canvas
          ref={canvasRef}
          width={800}
          height={120}
          className="w-full h-[110px] block"
        />

        {/* 状態ラベル */}
        <div className="absolute top-2 left-2 flex items-center gap-2 pointer-events-none">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">
            LIVE 100Hz TELEMETRY
          </span>
        </div>

        <div className="absolute bottom-1 right-2 text-[10px] font-mono text-slate-500 pointer-events-none">
          SAMPLING WINDOW: 15.0s
        </div>
      </div>
    </div>
  );
});
