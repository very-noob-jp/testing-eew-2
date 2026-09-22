/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FileText, Clock, AlertTriangle, Check, Copy, Info } from 'lucide-react';
import { ShindoFlashReport } from '../types/earthquake';

interface ShindoFlashPanelProps {
  currentFlash: ShindoFlashReport | null;
  history: ShindoFlashReport[];
  elapsedSec: number;
}

export const ShindoFlashPanel: React.FC<ShindoFlashPanelProps> = ({
  currentFlash,
  history,
  elapsedSec,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!currentFlash) return;
    navigator.clipboard.writeText(currentFlash.textMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl border border-slate-700/80 bg-slate-900/90 p-4 shadow-xl text-slate-200">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-cyan-400" />
          <h3 className="text-sm font-bold text-white">
            気象庁 地震情報・震度速報 逐次発表システム
          </h3>
        </div>
        <div className="text-xs text-slate-400 font-mono">
          {currentFlash ? `${currentFlash.announcedTime} 発表` : '発表待機中'}
        </div>
      </div>

      {/* Real-world JMA announcement sequence workflow explanation */}
      <div className="mb-3 p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-[11px] text-slate-400">
        <div className="flex items-center gap-1.5 font-semibold text-slate-300 mb-1">
          <Info className="w-3.5 h-3.5 text-cyan-400" />
          <span>気象庁の実際の情報発表フロー（シミュレーション仕様）:</span>
        </div>
        <div className="flex flex-wrap items-center gap-1 text-[10px]">
          <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300">
            ① 揺れ検知 (EEW発報)
          </span>
          <span>→</span>
          <span
            className={`px-2 py-0.5 rounded border ${
              currentFlash?.stage === 1
                ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold'
                : 'bg-slate-800 border-slate-700 text-slate-400'
            }`}
          >
            ② 震度速報（震源・深さ調査中、震度3以上速報）
          </span>
          <span>→</span>
          <span
            className={`px-2 py-0.5 rounded border ${
              currentFlash?.stage === 2
                ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold'
                : 'bg-slate-800 border-slate-700 text-slate-400'
            }`}
          >
            ③ 震源・震度に関する情報（地盤・全観測点確定）
          </span>
        </div>
      </div>

      {!currentFlash ? (
        <div className="p-6 text-center text-xs text-slate-500 rounded-lg bg-slate-950/50 border border-dashed border-slate-800">
          <Clock className="w-6 h-6 mx-auto mb-2 text-slate-600" />
          <p>震度速報はまだ発表されていません。</p>
          <p className="text-[11px] mt-1 text-slate-500">
            地震発生から約20秒後に【震度速報 (調査中)】、約48秒後に【震源・詳細震度に関する情報】が自動計算・発表されます。
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {/* Stage Banner */}
          <div
            className={`p-3 rounded-lg border flex items-center justify-between ${
              currentFlash.stage === 1
                ? 'bg-amber-950/40 border-amber-500/40 text-amber-200'
                : 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
            }`}
          >
            <div className="flex items-center gap-2">
              <span
                className={`px-2 py-0.5 rounded text-xs font-bold ${
                  currentFlash.stage === 1
                    ? 'bg-amber-500 text-slate-950'
                    : 'bg-emerald-500 text-slate-950'
                }`}
              >
                {currentFlash.stage === 1 ? '第1段階: 震度速報' : '第2段階: 震源・震度確定報'}
              </span>
              <span className="text-xs font-semibold">{currentFlash.title}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold">
                最大震度: <strong className="text-white text-sm">{currentFlash.maxIntensity}</strong>
              </span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 border border-slate-700 text-[10px] text-slate-300 transition-colors"
                title="電文テキストをコピー"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'コピー完了' : '本文コピー'}</span>
              </button>
            </div>
          </div>

          {/* Detailed Info Cards */}
          {currentFlash.stage === 2 && currentFlash.hypocenterName && (
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-xs">
              <div className="bg-slate-950/80 p-2 rounded border border-slate-800">
                <span className="text-slate-400 text-[10px]">震源地</span>
                <div className="font-bold text-slate-100 truncate" title={currentFlash.hypocenterName}>{currentFlash.hypocenterName}</div>
              </div>
              <div className="bg-slate-950/80 p-2 rounded border border-slate-800">
                <span className="text-slate-400 text-[10px]">深さ / 規模</span>
                <div className="font-mono font-bold text-slate-100">約{currentFlash.depthKm}km / M{currentFlash.magnitude}</div>
              </div>
              <div className="bg-slate-950/80 p-2 rounded border border-slate-800">
                <span className="text-slate-400 text-[10px]">長周期地震動</span>
                <div className="font-bold text-purple-300 font-mono">
                  {currentFlash.maxLpgmGrade ? `最大 ${currentFlash.maxLpgmGrade}` : '階級1未満'}
                </div>
              </div>
              <div className="bg-slate-950/80 p-2 rounded border border-slate-800 col-span-2">
                <span className="text-slate-400 text-[10px]">津波の有無</span>
                <div className="font-bold text-slate-200 text-[11px] truncate" title={currentFlash.tsunamiStatus}>
                  {currentFlash.tsunamiStatus}
                </div>
              </div>
            </div>
          )}

          {/* Telegram-style Monospace Text Display */}
          <div className="bg-slate-950 border border-slate-800 rounded-lg p-3 font-mono text-xs text-slate-300 max-h-48 overflow-y-auto whitespace-pre-wrap leading-relaxed shadow-inner">
            {currentFlash.textMessage}
          </div>

          {/* Regional intensity distribution chips */}
          <div>
            <div className="text-[11px] text-slate-400 mb-1.5 font-semibold">
              各地の震度観測状況 ({currentFlash.areas.length} 地域):
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 max-h-36 overflow-y-auto pr-1">
              {currentFlash.areas.map((area, idx) => (
                <div
                  key={`shindo-area-${area.pref}-${area.intensity}-${idx}`}
                  className="flex items-center justify-between p-1.5 rounded bg-slate-950/60 border border-slate-800/80 text-[11px]"
                >
                  <span className="font-medium text-slate-300">{area.pref}</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] text-slate-400">
                      {area.stations.length}観測点
                    </span>
                    <span
                      className={`px-1.5 py-0.2 rounded font-bold font-mono text-xs ${
                        area.intensity === '7'
                          ? 'bg-purple-600 text-white'
                          : area.intensity.startsWith('6')
                          ? 'bg-red-600 text-white'
                          : area.intensity.startsWith('5')
                          ? 'bg-amber-500 text-slate-950'
                          : 'bg-yellow-400 text-slate-950'
                      }`}
                    >
                      震度{area.intensity}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
