/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Play, Pause, RotateCcw, AlertTriangle, Radio, Activity, Database } from 'lucide-react';
import { Scenario } from '../types/earthquake';

interface HeaderProps {
  isRunning: boolean;
  isPaused: boolean;
  elapsedSec: number;
  speed: number;
  activeScenario: Scenario;
  allScenarios?: Scenario[];
  connectedClients: number;
  isWsConnected: boolean;
  stationCount: number;
  onOpenCsvModal: () => void;
  onSelectScenario?: (scenarioId: string) => void;
  onStart: () => void;
  onPause: () => void;
  onResume: () => void;
  onReset: () => void;
  onSetSpeed: (speed: number) => void;
  onTriggerCancel: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  isRunning,
  isPaused,
  elapsedSec,
  speed,
  activeScenario,
  allScenarios = [],
  connectedClients,
  isWsConnected,
  stationCount,
  onOpenCsvModal,
  onSelectScenario,
  onStart,
  onPause,
  onResume,
  onReset,
  onSetSpeed,
  onTriggerCancel,
}) => {
  return (
    <header className="border-b border-slate-700/80 bg-slate-900/90 backdrop-blur px-4 py-3 sticky top-0 z-50 text-slate-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Title & Connection Status */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400">
            <Activity className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base md:text-lg font-bold tracking-tight text-white">
                緊急地震速報 WebSocket 訓練配信システム
              </h1>
              <span className="text-xs px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300 font-mono">
                JMA / NIED 物理準拠
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-400 mt-0.5">
              <span className="flex items-center gap-1.5">
                <span
                  className={`w-2 h-2 rounded-full ${
                    isWsConnected ? 'bg-emerald-400 animate-ping' : 'bg-rose-500'
                  }`}
                />
                <span className="font-mono">{isWsConnected ? 'WebSocket稼働中' : '再接続待機中'}</span>
              </span>
              <span className="flex items-center gap-1 font-mono text-slate-400">
                <Radio className="w-3.5 h-3.5 text-cyan-400" />
                <span>外部接続クライアント:</span>
                <strong className="text-cyan-300">{connectedClients}</strong> 台
              </span>
            </div>
          </div>
        </div>

        {/* Simulation Time & Current Scenario & Station count */}
        <div className="flex flex-wrap items-center gap-2.5 bg-slate-800/80 border border-slate-700/70 rounded-lg px-3 py-1.5">
          <div className="text-right">
            <div className="text-[10px] text-slate-400">経過時間</div>
            <div className="font-mono text-base md:text-lg font-bold text-amber-400 tracking-wider">
              T+{elapsedSec.toFixed(1)}s
            </div>
          </div>
          <div className="h-7 w-[1px] bg-slate-700" />
          <div className="text-left">
            <div className="text-[10px] text-slate-400">シナリオ・震源地</div>
            {onSelectScenario && allScenarios.length > 0 ? (
              <select
                value={activeScenario.id}
                onChange={(e) => onSelectScenario(e.target.value)}
                className="text-xs font-semibold bg-slate-900 border border-slate-700 text-cyan-300 rounded px-1.5 py-0.5 max-w-[170px] truncate cursor-pointer hover:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                title="シナリオ・震源地を変更"
              >
                {allScenarios.map((sc) => (
                  <option key={`hdr-sc-${sc.id}`} value={sc.id} className="bg-slate-900 text-white">
                    {sc.name}
                  </option>
                ))}
                {!allScenarios.some((s) => s.id === activeScenario.id) && (
                  <option value={activeScenario.id} className="bg-slate-900 text-amber-300">
                    {activeScenario.name} (カスタム)
                  </option>
                )}
              </select>
            ) : (
              <div className="text-xs font-semibold text-slate-200 truncate max-w-[170px]" title={activeScenario.name}>
                {activeScenario.name}
              </div>
            )}
          </div>
          <div className="h-7 w-[1px] bg-slate-700" />
          <button
            onClick={onOpenCsvModal}
            title="観測点CSVデータの確認・インポート"
            className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-700/80 hover:bg-slate-600 border border-slate-600/80 text-[11px] text-slate-200 transition"
          >
            <Database className="w-3.5 h-3.5 text-cyan-400" />
            <span>観測点: <strong className="text-cyan-300 font-mono">{stationCount}</strong>地点</span>
          </button>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          {/* Speed selector */}
          <div className="flex items-center border border-slate-700 rounded-md overflow-hidden bg-slate-800 text-xs">
            {[1.0, 2.0, 5.0].map((s) => (
              <button
                key={`speed-opt-${s}`}
                onClick={() => onSetSpeed(s)}
                className={`px-2 py-1 font-mono transition-colors ${
                  speed === s
                    ? 'bg-cyan-600 text-white font-bold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/50'
                }`}
              >
                {s}x
              </button>
            ))}
          </div>

          {/* Action buttons */}
          {!isRunning ? (
            <button
              onClick={onStart}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs shadow-sm transition-colors"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>訓練開始</span>
            </button>
          ) : isPaused ? (
            <button
              onClick={onResume}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-amber-600 hover:bg-amber-500 text-white font-medium text-xs shadow-sm transition-colors"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>再開</span>
            </button>
          ) : (
            <button
              onClick={onPause}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-slate-700 hover:bg-slate-600 text-white font-medium text-xs shadow-sm transition-colors"
            >
              <Pause className="w-3.5 h-3.5 fill-current" />
              <span>一時停止</span>
            </button>
          )}

          <button
            onClick={onReset}
            className="flex items-center gap-1 px-3 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white text-xs transition-colors"
            title="初期化"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>リセット</span>
          </button>

          {/* Manual cancel trigger button */}
          <button
            onClick={onTriggerCancel}
            className="flex items-center gap-1 px-3 py-1.5 rounded-md bg-rose-950/70 hover:bg-rose-900 border border-rose-800/80 text-rose-300 text-xs transition-colors"
            title="気象庁の取消報（キャンセル報）を発信"
          >
            <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
            <span>取消報発令</span>
          </button>
        </div>
      </div>
    </header>
  );
};
