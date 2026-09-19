/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sliders, PlusCircle, AlertTriangle, Flame, ShieldAlert, Sparkles } from 'lucide-react';
import { PRESET_SCENARIOS } from '../data/presetScenarios';
import { CancelReason, Scenario } from '../types/earthquake';

interface ScenarioSelectorProps {
  currentScenario: Scenario;
  onSelectScenario: (scenarioId: string) => void;
  onApplyCustomScenario: (custom: Scenario) => void;
}

export const ScenarioSelector: React.FC<ScenarioSelectorProps> = ({
  currentScenario,
  onSelectScenario,
  onApplyCustomScenario,
}) => {
  const [showCustomModal, setShowCustomModal] = useState(false);

  // カスタムシナリオの入力ステート
  const [customName, setCustomName] = useState('カスタム地震訓練');
  const [customEpicenter, setCustomEpicenter] = useState('相模湾');
  const [customLat, setCustomLat] = useState(35.1);
  const [customLon, setCustomLon] = useState(139.4);
  const [customDepth, setCustomDepth] = useState(25);
  const [customMag, setCustomMag] = useState(7.0);
  const [enableCancel, setEnableCancel] = useState(false);
  const [cancelAfterSec, setCancelAfterSec] = useState(4.0);
  const [cancelReason, setCancelReason] = useState<CancelReason>('落雷等による観測点ノイズ誤検知');

  const handleCreateCustom = (e: React.FormEvent) => {
    e.preventDefault();
    const scenario: Scenario = {
      id: `custom_${Date.now()}`,
      name: customName,
      description: `震源: ${customEpicenter} (北緯${customLat}°, 東経${customLon}°), 深さ約${customDepth}km, M${customMag}${
        enableCancel ? ` [取消報設定: ${cancelReason}]` : ''
      }`,
      epicenterName: customEpicenter,
      lat: Number(customLat),
      lon: Number(customLon),
      depthKm: Number(customDepth),
      magnitude: Number(customMag),
      cancelConfig: enableCancel
        ? {
            triggerAfterSec: Number(cancelAfterSec),
            reason: cancelReason,
            noiseStationCode: 'KT001',
          }
        : undefined,
    };
    onApplyCustomScenario(scenario);
    setShowCustomModal(false);
  };

  return (
    <div className="rounded-xl border border-slate-700/80 bg-slate-900/90 p-4 shadow-xl text-slate-200">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
        <div className="flex items-center gap-2">
          <Sliders className="w-4 h-4 text-cyan-400" />
          <h3 className="text-sm font-bold text-white">
            訓練シナリオ選択 ＆ キャンセル報シミュレーター
          </h3>
        </div>
        <button
          onClick={() => setShowCustomModal(true)}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-cyan-600 hover:bg-cyan-500 text-white font-medium text-xs transition-colors shadow"
        >
          <PlusCircle className="w-3.5 h-3.5" />
          <span>カスタム震源作成</span>
        </button>
      </div>

      {/* Preset Scenarios Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
        {PRESET_SCENARIOS.map((sc) => {
          const isSelected = currentScenario.id === sc.id;
          const isCancelTest = !!sc.cancelConfig;

          return (
            <div
              key={sc.id}
              onClick={() => onSelectScenario(sc.id)}
              className={`p-3 rounded-lg border cursor-pointer transition-all ${
                isSelected
                  ? 'border-cyan-500 bg-cyan-950/40 shadow-md ring-1 ring-cyan-500/50'
                  : 'border-slate-800 bg-slate-950/60 hover:bg-slate-800/60 hover:border-slate-700'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <h4 className="text-xs font-bold text-slate-100 line-clamp-1">{sc.name}</h4>
                {isCancelTest ? (
                  <span className="shrink-0 text-[10px] font-bold px-1.5 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-800">
                    取消報
                  </span>
                ) : sc.magnitude >= 7.5 ? (
                  <span className="shrink-0 text-[10px] font-bold px-1.5 py-0.5 rounded bg-red-950 text-red-300 border border-red-800">
                    大警報
                  </span>
                ) : (
                  <span className="shrink-0 text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800">
                    警報
                  </span>
                )}
              </div>

              <p className="text-[11px] text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
                {sc.description}
              </p>

              <div className="flex items-center justify-between border-t border-slate-800/80 pt-2 mt-2 text-[10px] text-slate-400 font-mono">
                <span>{sc.epicenterName}</span>
                <span>
                  深さ {sc.depthKm}km / M{sc.magnitude}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Custom Scenario Builder Modal */}
      {showCustomModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-xl p-5 max-w-lg w-full shadow-2xl text-slate-200">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>カスタム地震・取消報シナリオの作成</span>
              </h3>
              <button
                onClick={() => setShowCustomModal(false)}
                className="text-slate-400 hover:text-white text-xs px-2 py-1"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateCustom} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-400 mb-1">シナリオ名称</label>
                <input
                  type="text"
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-1.5 text-white"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 mb-1">震源地名</label>
                  <input
                    type="text"
                    value={customEpicenter}
                    onChange={(e) => setCustomEpicenter(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-1.5 text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">マグニチュード (M)</label>
                  <input
                    type="number"
                    step="0.1"
                    min="3.0"
                    max="9.5"
                    value={customMag}
                    onChange={(e) => setCustomMag(Number(e.target.value))}
                    className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-1.5 text-white font-mono"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-slate-400 mb-1">北緯 (度)</label>
                  <input
                    type="number"
                    step="0.05"
                    min="24"
                    max="46"
                    value={customLat}
                    onChange={(e) => setCustomLat(Number(e.target.value))}
                    className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-1.5 text-white font-mono"
                    required
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">東経 (度)</label>
                  <input
                    type="number"
                    step="0.05"
                    min="123"
                    max="146"
                    value={customLon}
                    onChange={(e) => setCustomLon(Number(e.target.value))}
                    className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-1.5 text-white font-mono"
                    required
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">深さ (km)</label>
                  <input
                    type="number"
                    min="2"
                    max="600"
                    value={customDepth}
                    onChange={(e) => setCustomDepth(Number(e.target.value))}
                    className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-1.5 text-white font-mono"
                    required
                  />
                </div>
              </div>

              {/* Cancel Report Configuration */}
              <div className="pt-2 border-t border-slate-800">
                <label className="flex items-center gap-2 cursor-pointer mb-2">
                  <input
                    type="checkbox"
                    checked={enableCancel}
                    onChange={(e) => setEnableCancel(e.target.checked)}
                    className="rounded border-slate-700 text-cyan-600 focus:ring-cyan-500"
                  />
                  <span className="font-bold text-rose-300">
                    取消報（キャンセル報）訓練を組み込む
                  </span>
                </label>

                {enableCancel && (
                  <div className="bg-slate-950 p-3 rounded border border-rose-900/50 space-y-2 mt-2">
                    <div>
                      <label className="block text-slate-400 text-[11px] mb-1">取消理由</label>
                      <select
                        value={cancelReason}
                        onChange={(e) => setCancelReason(e.target.value as CancelReason)}
                        className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1.5 text-white text-xs"
                      >
                        <option value="落雷等による観測点ノイズ誤検知">
                          落雷等による観測点ノイズ誤検知
                        </option>
                        <option value="観測機器障害・ベースライン急変">
                          観測機器障害・ベースライン急変
                        </option>
                        <option value="深発地震による震源・規模の過大予測">
                          深発地震による震源・規模の過大予測
                        </option>
                        <option value="複数微小地震の誤結合">複数微小地震の誤結合</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-slate-400 text-[11px] mb-1">
                        取消報の発令タイミング (開始後 N 秒)
                      </label>
                      <input
                        type="number"
                        step="0.5"
                        min="1"
                        max="30"
                        value={cancelAfterSec}
                        onChange={(e) => setCancelAfterSec(Number(e.target.value))}
                        className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1 text-white font-mono text-xs"
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setShowCustomModal(false)}
                  className="px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300"
                >
                  キャンセル
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded bg-cyan-600 hover:bg-cyan-500 text-white font-bold"
                >
                  シナリオを反映して訓練準備
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
