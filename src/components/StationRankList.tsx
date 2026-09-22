/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Station } from '../types/earthquake';
import { getKyoshinColor, gradeToNumericRank } from '../physics/seismicPhysics';
import { ListFilter, Search, MapPin, Activity } from 'lucide-react';

interface StationRankListProps {
  stations: Station[];
  selectedStationCode?: string | null;
  onSelectStation: (st: Station) => void;
  elapsedSec: number;
}

export const StationRankList: React.FC<StationRankListProps> = React.memo(({
  stations,
  selectedStationCode,
  onSelectStation,
  elapsedSec,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterMinShindo, setFilterMinShindo] = useState<'all' | '1' | '3' | '5'>('all');

  // 揺れが大きい順にソート & フィルタリング (描画負荷軽減のため上位表示)
  const { displayStations, totalCount } = useMemo(() => {
    let list = stations;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      list = list.filter((st) => {
        return (
          st.name.toLowerCase().includes(q) ||
          st.pref.toLowerCase().includes(q) ||
          st.code.toLowerCase().includes(q)
        );
      });
    }

    if (filterMinShindo !== 'all') {
      list = list.filter((st) => {
        const rank = gradeToNumericRank(st.intensityGrade);
        if (filterMinShindo === '1' && rank < 2) return false;
        if (filterMinShindo === '3' && rank < 4) return false;
        if (filterMinShindo === '5' && rank < 6) return false;
        return true;
      });
    }

    // 震度高い順、次に加速度順
    const sorted = [...list].sort((a, b) => {
      const rankA = gradeToNumericRank(a.intensityGrade);
      const rankB = gradeToNumericRank(b.intensityGrade);
      if (rankB !== rankA) return rankB - rankA;
      return (b.currentGal ?? 0) - (a.currentGal ?? 0);
    });

    const limit = searchQuery ? 100 : 60;
    return {
      displayStations: sorted.slice(0, limit),
      totalCount: sorted.length,
    };
  }, [stations, searchQuery, filterMinShindo]);

  return (
    <div className="rounded-xl border border-slate-700/80 bg-slate-950 p-3 shadow-xl space-y-3 flex flex-col h-full">
      {/* ヘッダー */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2">
        <div className="flex items-center gap-1.5">
          <Activity className="w-4 h-4 text-cyan-400" />
          <h3 className="text-xs md:text-sm font-bold text-white">観測点 震度ランキング</h3>
          <span className="text-[10px] text-slate-400 font-mono">
            ({displayStations.length < totalCount ? `上位${displayStations.length}件 / 全${totalCount}地点` : `${totalCount}地点`})
          </span>
        </div>

        {/* 震度フィルターボタン */}
        <div className="flex items-center gap-1 text-xs">
          <button
            onClick={() => setFilterMinShindo('all')}
            className={`px-2 py-0.5 rounded text-[10px] font-medium transition-colors ${
              filterMinShindo === 'all'
                ? 'bg-slate-700 text-white font-bold'
                : 'bg-slate-900 text-slate-400 hover:text-white'
            }`}
          >
            全観測点
          </button>
          <button
            onClick={() => setFilterMinShindo('1')}
            className={`px-2 py-0.5 rounded text-[10px] font-medium transition-colors ${
              filterMinShindo === '1'
                ? 'bg-cyan-700 text-white font-bold'
                : 'bg-slate-900 text-slate-400 hover:text-white'
            }`}
          >
            震度1以上
          </button>
          <button
            onClick={() => setFilterMinShindo('3')}
            className={`px-2 py-0.5 rounded text-[10px] font-medium transition-colors ${
              filterMinShindo === '3'
                ? 'bg-amber-700 text-white font-bold'
                : 'bg-slate-900 text-slate-400 hover:text-white'
            }`}
          >
            震度3以上
          </button>
          <button
            onClick={() => setFilterMinShindo('5')}
            className={`px-2 py-0.5 rounded text-[10px] font-medium transition-colors ${
              filterMinShindo === '5'
                ? 'bg-rose-700 text-white font-bold'
                : 'bg-slate-900 text-slate-400 hover:text-white'
            }`}
          >
            震度5弱以上
          </button>
        </div>
      </div>

      {/* 観測点検索入力 */}
      <div className="relative">
        <Search className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-2.5" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="都道府県名・観測点名・コード検索 (例: 輪島, 仙台, AICH04)..."
          className="w-full bg-slate-900 border border-slate-700/80 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-sans"
        />
      </div>

      {/* リストテーブル (上位件数をレンダリング) */}
      <div className="flex-1 overflow-y-auto max-h-[320px] space-y-1.5 pr-1 scrollbar-thin scrollbar-thumb-slate-700">
        {displayStations.length === 0 ? (
          <div className="text-center py-8 text-xs text-slate-500">
            該当する観測点はありません
          </div>
        ) : (
          <>
            {displayStations.map((st, idx) => {
              const isSelected = selectedStationCode === st.code;
              const color = getKyoshinColor(st.currentIntensity);

              return (
                <div
                  key={st.code}
                  onClick={() => onSelectStation(st)}
                  className={`flex items-center justify-between p-2 rounded-lg border text-xs cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-slate-800/90 border-cyan-500 shadow-md ring-1 ring-cyan-500/50'
                      : 'bg-slate-900/60 border-slate-800/80 hover:bg-slate-800/60 hover:border-slate-700'
                  }`}
                >
                  {/* 順位 & 震度バッジ */}
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-slate-500 w-4 text-center">
                      {idx + 1}
                    </span>
                    <span
                      className="px-2 py-0.5 rounded text-[11px] font-bold text-white min-w-[42px] text-center shadow"
                      style={{ backgroundColor: color }}
                    >
                      {st.currentIntensity >= 0.5 ? st.intensityGrade : '0未満'}
                    </span>
                    <div>
                      <div className="font-bold text-white flex items-center gap-1 text-[11px]">
                        <span>
                          {st.pref} {st.name}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500">({st.code})</span>
                      </div>
                      <div className="text-[10px] text-slate-400 flex items-center gap-1.5 flex-wrap">
                        <span>増幅率: <span className="text-emerald-400 font-mono">{st.siteAmp.toFixed(2)}x</span></span>
                        <span className="text-slate-600">|</span>
                        {st.lpgmGrade && (
                          <>
                            <span className="px-1 py-0.2 rounded bg-purple-900/80 text-purple-200 border border-purple-500/50 font-bold text-[9px]">
                              長周期 {st.lpgmGrade} ({st.lpgmSva?.toFixed(1) || 0}cm/s)
                            </span>
                            <span className="text-slate-600">|</span>
                          </>
                        )}
                        {st.sArrived ? (
                          <span className="text-rose-400 font-semibold">主要動到達</span>
                        ) : (
                          <span className="text-slate-500">
                            S波まで {Math.max(0, st.sTimeSec - elapsedSec).toFixed(1)}s
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* 加速度・震度数値 */}
                  <div className="text-right">
                    <div className="font-mono font-bold text-amber-400 text-xs">
                      {st.currentGal.toFixed(1)}{' '}
                      <span className="text-[9px] text-slate-500">gal</span>
                    </div>
                    <div className="text-[10px] font-mono text-slate-400">
                      I = {st.currentIntensity.toFixed(1)}
                    </div>
                  </div>
                </div>
              );
            })}
            {totalCount > displayStations.length && (
              <div className="text-center py-2 text-[11px] text-slate-500 font-sans border-t border-slate-800/80">
                他 {totalCount - displayStations.length} 地点の観測点（検索窓で絞り込み可能）
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
});
