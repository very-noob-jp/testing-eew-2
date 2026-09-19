/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  AlertCircle,
  AlertOctagon,
  CheckCircle2,
  History,
  XCircle,
  Volume2,
  VolumeX,
  Clock,
  Radio,
} from 'lucide-react';
import { EEWReport } from '../types/earthquake';
import { audioAlert } from '../utils/audioAlert';

interface EEWBannerProps {
  currentEEW: EEWReport | null;
  eewHistory: EEWReport[];
  elapsedSec: number;
}

export const EEWBanner: React.FC<EEWBannerProps> = ({
  currentEEW,
  eewHistory,
  elapsedSec,
}) => {
  const [soundEnabled, setSoundEnabled] = useState(true);

  // 発報時にチャイム再生
  useEffect(() => {
    if (!currentEEW) return;
    if (currentEEW.isCancel) {
      audioAlert.playCancelTone();
    } else {
      audioAlert.playEEWChime();
    }
  }, [currentEEW?.reportNum, currentEEW?.isCancel]);

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    audioAlert.setSoundEnabled(next);
  };

  if (!currentEEW) {
    return (
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-slate-400 backdrop-blur flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-500">
            <Radio className="w-5 h-5 animate-pulse text-cyan-400" />
          </div>
          <div>
            <h3 className="text-xs md:text-sm font-bold text-slate-200">
              緊急地震速報 (予報・警報) 待機中
            </h3>
            <p className="text-[11px] text-slate-500">
              観測点が閾値（加速度4gal以上）を検知すると直ちに第1報をWebSocket配信します。
            </p>
          </div>
        </div>

        <button
          onClick={toggleSound}
          title={soundEnabled ? '音声をミュート' : '音声を有効化'}
          className={`p-2 rounded-lg border text-xs transition-colors flex items-center gap-1.5 ${
            soundEnabled
              ? 'bg-slate-800 border-slate-700 text-cyan-400 hover:text-white'
              : 'bg-slate-900 border-slate-800 text-slate-500'
          }`}
        >
          {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          <span className="hidden sm:inline">{soundEnabled ? '警報音: ON' : '警報音: OFF'}</span>
        </button>
      </div>
    );
  }

  // キャンセル報 (取消報)
  if (currentEEW.isCancel) {
    return (
      <div className="rounded-xl border-2 border-red-500/90 bg-slate-950 p-4 shadow-2xl relative overflow-hidden text-slate-100">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-red-600 animate-pulse" />
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-red-900/60 pb-3 mb-3">
          <div className="flex items-center gap-2.5">
            <span className="px-3 py-1 rounded bg-red-600 text-white font-black text-xs md:text-sm uppercase tracking-wider animate-pulse">
              緊急地震速報（取消）
            </span>
            <span className="text-xs font-mono text-red-300 font-bold">
              第{currentEEW.reportNum}報（最終）
            </span>
            <span className="text-xs text-slate-400 font-mono">
              {currentEEW.reportTime} 発表
            </span>
          </div>

          <button
            onClick={toggleSound}
            className="p-1.5 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-cyan-400" /> : <VolumeX className="w-4 h-4" />}
          </button>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-red-950 border border-red-600 flex items-center justify-center text-red-400 shrink-0">
            <XCircle className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-base md:text-lg font-black text-red-400 line-through decoration-red-600 decoration-2">
              先ほどの緊急地震速報（{currentEEW.hypocenterName}）は取り消されました
            </h2>
            <div className="mt-2 text-xs text-slate-300 bg-red-950/40 p-2.5 rounded border border-red-900/50">
              <span className="font-bold text-amber-300">【取消理由】: </span>
              <span>{currentEEW.cancelReason || '落雷等による観測点ノイズ誤検知'}</span>
              <p className="text-[11px] text-slate-400 mt-1">
                単一観測点のみの突発パルスが検知されたため発令されましたが、周辺観測点へのS波伝播が確認されなかったため、気象庁実運用規定に基づき速やかに取消報が発信されました。
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 警報 (Warning) または 予報 (Forecast)
  const isWarn = currentEEW.isWarn;

  return (
    <div
      className={`rounded-xl border-2 p-4 shadow-2xl relative overflow-hidden transition-all text-slate-100 ${
        isWarn
          ? 'border-red-500 bg-gradient-to-r from-red-950/95 via-slate-950 to-red-950/95 shadow-red-950/60'
          : 'border-amber-500/90 bg-gradient-to-r from-amber-950/90 via-slate-950 to-amber-950/90 shadow-amber-950/50'
      }`}
    >
      {/* テレビ画面風の赤・黄フラッシュバー */}
      <div
        className={`absolute top-0 left-0 right-0 h-2 ${
          isWarn ? 'bg-red-500 animate-pulse' : 'bg-amber-400'
        }`}
      />

      {/* トップヘッダーライン */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2 mb-3">
        <div className="flex items-center gap-2">
          <span
            className={`px-3 py-0.5 rounded font-black text-xs md:text-sm tracking-wider uppercase shadow ${
              isWarn ? 'bg-red-600 text-white animate-pulse' : 'bg-amber-500 text-slate-950'
            }`}
          >
            {isWarn ? '緊急地震速報（警報）' : '緊急地震速報（予報）'}
          </span>

          <span className="text-xs font-mono font-bold text-slate-200">
            {currentEEW.isFinal ? '【最終報】' : `第 ${currentEEW.reportNum} 報`}
          </span>

          <span className="text-xs text-slate-400 font-mono">
            {currentEEW.reportTime} 発表 (T+{elapsedSec.toFixed(1)}s)
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleSound}
            title={soundEnabled ? '音声をミュート' : '音声を有効化'}
            className="p-1.5 rounded bg-black/40 border border-white/10 text-slate-300 hover:text-white transition-colors"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-cyan-400" /> : <VolumeX className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* メイン速報情報 */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        {/* 左: 震源地・規模・警戒メッセージ */}
        <div className="flex items-start gap-3.5">
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${
              isWarn
                ? 'bg-red-600/30 border-red-400 text-red-400 animate-bounce'
                : 'bg-amber-600/20 border-amber-400 text-amber-400'
            }`}
          >
            {isWarn ? <AlertOctagon className="w-8 h-8" /> : <AlertCircle className="w-7 h-7" />}
          </div>

          <div>
            <div className="flex items-baseline gap-2.5 flex-wrap">
              <h2 className="text-xl md:text-2xl font-black text-white tracking-tight">
                {currentEEW.hypocenterName}
              </h2>
              <span className="text-sm font-semibold text-slate-300 font-mono">
                深さ {currentEEW.depthKm}km / M{currentEEW.magnitude.toFixed(1)}
              </span>
            </div>

            {isWarn ? (
              <div className="mt-1 text-xs md:text-sm font-bold text-red-300 tracking-wide flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-400 animate-ping inline-block" />
                <span>強い揺れに警戒してください（身の安全を確保してください）</span>
              </div>
            ) : (
              <div className="mt-1 text-xs text-amber-300 font-medium">
                各地の揺れの到達にご注意ください
              </div>
            )}
          </div>
        </div>

        {/* 右: 最大予測震度バッジ */}
        <div className="flex items-center gap-3 bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 shrink-0">
          <div className="text-right">
            <div className="text-[10px] font-semibold text-slate-300">最大予測震度</div>
            <div className="text-[11px] text-slate-400 font-mono">FORECAST</div>
          </div>
          <div
            className={`w-13 h-13 min-w-[50px] min-h-[50px] rounded-lg flex items-center justify-center font-black text-2xl shadow-inner ${
              currentEEW.maxIntensity === '7'
                ? 'bg-purple-600 text-white border-2 border-purple-300'
                : currentEEW.maxIntensity.startsWith('6')
                ? 'bg-red-600 text-white border-2 border-red-300'
                : currentEEW.maxIntensity.startsWith('5')
                ? 'bg-amber-500 text-slate-950 border-2 border-amber-300'
                : 'bg-yellow-400 text-slate-950 border-2 border-yellow-200'
            }`}
          >
            {currentEEW.maxIntensity}
          </div>
        </div>
      </div>

      {/* 警報対象地域バッジ */}
      {currentEEW.warningAreas.length > 0 && (
        <div className="mt-3 pt-2.5 border-t border-white/10">
          <div className="text-[11px] font-bold text-red-200 flex items-center gap-1.5 mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
            <span>警報対象地域 (震度4以上予測):</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {currentEEW.warningAreas.map((area, i) => (
              <span
                key={`warn-area-${area}-${i}`}
                className="text-xs font-bold px-2.5 py-0.5 rounded bg-red-600/70 border border-red-400/80 text-white shadow-sm"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* 主要地域 S波到達予測カウントダウンバー */}
      {currentEEW.forecastRegions.length > 0 && (
        <div className="mt-3 pt-2.5 border-t border-white/10">
          <div className="text-[11px] font-bold text-slate-300 flex items-center gap-1.5 mb-1.5">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span>主要観測点 主要動 (S波) 到達予想時間:</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-1.5">
            {currentEEW.forecastRegions.slice(0, 5).map((r, i) => {
              const remain = Math.max(0, r.arrivalTimeSec);
              const arrived = remain <= 0;

              return (
                <div
                  key={`forecast-region-${r.regionName}-${i}`}
                  className={`p-1.5 rounded border text-xs flex items-center justify-between ${
                    arrived
                      ? 'bg-slate-900/80 border-slate-800 text-slate-400'
                      : 'bg-black/40 border-cyan-500/40 text-white'
                  }`}
                >
                  <span className="font-medium truncate mr-1 text-[11px]">{r.regionName}</span>
                  <span
                    className={`font-mono font-bold text-xs shrink-0 ${
                      arrived ? 'text-slate-500' : remain < 5 ? 'text-rose-400 animate-pulse' : 'text-cyan-300'
                    }`}
                  >
                    {arrived ? '到達済' : `${remain.toFixed(1)}s`}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 逐次更新ログ */}
      <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
        <div className="flex items-center gap-2">
          <History className="w-3 h-3 text-cyan-400" />
          <span>発報履歴:</span>
          <div className="flex items-center gap-1 overflow-x-auto max-w-[400px]">
            {eewHistory.map((h, i) => (
              <span
                key={`eew-history-${h.eventId || 'eew'}-${h.reportNum}-${i}`}
                className={`px-1.5 py-0.2 rounded font-mono text-[10px] ${
                  h.reportNum === currentEEW.reportNum
                    ? 'bg-cyan-500 text-white font-bold'
                    : 'bg-slate-800 text-slate-400'
                }`}
                title={`第${h.reportNum}報: M${h.magnitude} 最大${h.maxIntensity}`}
              >
                #{h.reportNum}
              </span>
            ))}
          </div>
        </div>
        <span className="font-mono text-slate-400">
          PLUM/物理減衰式: 適用済
        </span>
      </div>
    </div>
  );
};
