/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Waves, AlertTriangle, ShieldAlert, Clock, Copy, Check, Radio } from 'lucide-react';
import { P2PTsunamiReport, P2PTsunamiArea } from '../types/earthquake';

interface TsunamiPanelProps {
  currentTsunami: P2PTsunamiReport | null;
  history: P2PTsunamiReport[];
  elapsedSec: number;
}

export const TsunamiPanel: React.FC<TsunamiPanelProps> = ({
  currentTsunami,
  history,
  elapsedSec,
}) => {
  const [copied, setCopied] = useState(false);

  if (!currentTsunami || currentTsunami.cancelled) {
    return null;
  }

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(currentTsunami, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const majorWarningAreas = currentTsunami.areas.filter((a) => a.grade === 'MajorWarning');
  const warningAreas = currentTsunami.areas.filter((a) => a.grade === 'Warning');
  const watchAreas = currentTsunami.areas.filter((a) => a.grade === 'Watch');

  const maxGrade = majorWarningAreas.length > 0 ? 'MajorWarning' : warningAreas.length > 0 ? 'Warning' : 'Watch';

  return (
    <div
      className={`rounded-xl border-2 p-4 shadow-2xl relative overflow-hidden transition-all text-slate-100 mb-3 ${
        maxGrade === 'MajorWarning'
          ? 'border-purple-500 bg-gradient-to-r from-purple-950/95 via-slate-950 to-purple-950/95 shadow-purple-950/60 ring-2 ring-purple-500/50'
          : maxGrade === 'Warning'
          ? 'border-red-500 bg-gradient-to-r from-red-950/95 via-slate-950 to-red-950/95 shadow-red-950/50 ring-2 ring-red-500/50'
          : 'border-amber-500 bg-gradient-to-r from-amber-950/90 via-slate-950 to-amber-950/90 shadow-amber-950/40'
      }`}
    >
      {/* Top strobe animation bar */}
      <div
        className={`absolute top-0 left-0 right-0 h-2 ${
          maxGrade === 'MajorWarning'
            ? 'bg-purple-500 animate-pulse'
            : maxGrade === 'Warning'
            ? 'bg-red-500 animate-pulse'
            : 'bg-amber-400'
        }`}
      />

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2 mb-3">
        <div className="flex items-center gap-2">
          <span
            className={`px-3 py-0.5 rounded font-black text-xs md:text-sm tracking-wider uppercase shadow flex items-center gap-1.5 ${
              maxGrade === 'MajorWarning'
                ? 'bg-purple-600 text-white animate-pulse'
                : maxGrade === 'Warning'
                ? 'bg-red-600 text-white animate-pulse'
                : 'bg-amber-500 text-slate-950'
            }`}
          >
            <Waves className="w-4 h-4" />
            {maxGrade === 'MajorWarning'
              ? '【大津波警報】発表'
              : maxGrade === 'Warning'
              ? '【津波警報】発表'
              : '【津波注意報】発表'}
          </span>

          <span className="text-xs font-mono font-bold text-slate-200">
            P2P地震情報 Code 552 (津波予報)
          </span>

          <span className="text-xs text-slate-400 font-mono">
            {currentTsunami.time} 発表
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyJson}
            className="flex items-center gap-1 px-2.5 py-1 rounded bg-black/40 hover:bg-black/60 border border-white/10 text-xs text-slate-300 transition-colors"
            title="P2P津波予報JSON (Code 552) をコピー"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'P2P JSON コピー完了' : 'P2P (Code 552) JSON'}</span>
          </button>
        </div>
      </div>

      {/* Warning Alert Banner message */}
      <div className="flex items-start gap-3 mb-3">
        <div
          className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border ${
            maxGrade === 'MajorWarning'
              ? 'bg-purple-600/30 border-purple-400 text-purple-300 animate-bounce'
              : maxGrade === 'Warning'
              ? 'bg-red-600/30 border-red-400 text-red-300 animate-pulse'
              : 'bg-amber-600/20 border-amber-400 text-amber-300'
          }`}
        >
          <ShieldAlert className="w-7 h-7" />
        </div>
        <div>
          <h2 className="text-base md:text-lg font-black text-white">
            {maxGrade === 'MajorWarning'
              ? '大津波警報が発表されています！ただちに高台や避難ビルへ避難してください！'
              : maxGrade === 'Warning'
              ? '津波警報が発表されています。海岸や河口付近から直ちに離れてください。'
              : '津波注意報が発表されています。海の中にいる人はただちに海から上がってください。'}
          </h2>
          <p className="text-xs text-slate-300 mt-0.5">
            ※同一WebSocketストリーム (<code>/ws/p2p</code> および <code>/ws/all</code>) にて P2P地震情報フォーマット Code 552 (津波予報) として配信中
          </p>
        </div>
      </div>

      {/* Areas breakdown */}
      <div className="space-y-2 text-xs">
        {/* Major Warnings */}
        {majorWarningAreas.length > 0 && (
          <div className="p-2.5 rounded-lg bg-purple-950/70 border border-purple-500/60">
            <div className="font-black text-purple-200 text-xs flex items-center gap-1.5 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping inline-block" />
              <span>大津波警報 (巨大・10m超/5m予測):</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {majorWarningAreas.map((area, idx) => (
                <div
                  key={`tsu-maj-${area.name}-${idx}`}
                  className="bg-black/50 p-2 rounded border border-purple-400/50 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-sm">{area.name}</span>
                    <span className="px-1.5 py-0.5 rounded bg-purple-600 text-white font-mono font-bold text-[10px]">
                      {area.maxHeight?.description || `${area.maxHeight?.value}m`}
                    </span>
                  </div>
                  <div className="text-[11px] text-purple-300 mt-1 font-medium">
                    {area.immediate ? '🚨 ただちに津波来襲と予測' : area.firstHeight?.condition || '第1波到達中と推測'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Warnings */}
        {warningAreas.length > 0 && (
          <div className="p-2.5 rounded-lg bg-red-950/60 border border-red-500/50">
            <div className="font-bold text-red-200 text-xs flex items-center gap-1.5 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse inline-block" />
              <span>津波警報 (高い・3m予測):</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {warningAreas.map((area, idx) => (
                <div
                  key={`tsu-warn-${area.name}-${idx}`}
                  className="bg-black/40 p-2 rounded border border-red-400/40 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white">{area.name}</span>
                    <span className="px-1.5 py-0.5 rounded bg-red-600 text-white font-mono font-bold text-[10px]">
                      {area.maxHeight?.description || `${area.maxHeight?.value}m`}
                    </span>
                  </div>
                  <div className="text-[11px] text-red-300 mt-1">
                    {area.firstHeight?.condition || '第1波到達中と推測'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Watches */}
        {watchAreas.length > 0 && (
          <div className="p-2.5 rounded-lg bg-amber-950/50 border border-amber-500/40">
            <div className="font-bold text-amber-200 text-xs flex items-center gap-1.5 mb-1.5">
              <span>津波注意報 (1m予測):</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {watchAreas.map((area, idx) => (
                <div
                  key={`tsu-watch-${area.name}-${idx}`}
                  className="bg-black/30 px-2.5 py-1 rounded border border-amber-400/30 flex items-center gap-2"
                >
                  <span className="font-semibold text-slate-200">{area.name}</span>
                  <span className="text-[10px] text-amber-300 font-mono">1m</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
