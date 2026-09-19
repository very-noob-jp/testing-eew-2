/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Upload, FileText, Download, CheckCircle2, AlertTriangle, X, Database } from 'lucide-react';
import { Station } from '../types/earthquake';

interface CsvImportModalProps {
  isOpen: boolean;
  onClose: () => void;
  stationCount: number;
  onImportCsv: (csvText: string) => { success: boolean; count: number; error?: string };
}

export const CsvImportModal: React.FC<CsvImportModalProps> = ({
  isOpen,
  onClose,
  stationCount,
  onImportCsv,
}) => {
  const [dragOver, setDragOver] = useState(false);
  const [resultMessage, setResultMessage] = useState<{ text: string; isError: boolean } | null>(null);

  if (!isOpen) return null;

  const handleFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      if (text) {
        const res = onImportCsv(text);
        if (res.success) {
          setResultMessage({
            text: `CSVの読み込みに成功しました！ ${res.count}地点の観測点を反映しました。`,
            isError: false,
          });
        } else {
          setResultMessage({
            text: res.error || 'CSVの解析に失敗しました。フォーマットをご確認ください。',
            isError: true,
          });
        }
      }
    };
    reader.readAsText(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-xl w-full p-5 shadow-2xl space-y-4 text-slate-100">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Database className="w-5 h-5 text-cyan-400" />
            <h3 className="font-bold text-base text-white">観測点CSVデータの管理・インポート</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Current State */}
        <div className="bg-slate-800/80 rounded-xl p-3.5 border border-slate-700/60 flex items-center justify-between">
          <div>
            <div className="text-xs text-slate-400">現在ロード中の観測点</div>
            <div className="text-lg font-bold text-cyan-300 font-mono">
              {stationCount.toLocaleString()} <span className="text-xs text-slate-300">地点</span>
            </div>
            <div className="text-[11px] text-slate-400">
              NIED (防災科学技術研究所) K-NET / KiK-net 全国公式データベース
            </div>
          </div>
          <a
            href="/api/intensity-points.csv"
            download="intensity-points-v1.csv"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-xs text-slate-200 border border-slate-600 transition"
          >
            <Download className="w-3.5 h-3.5 text-cyan-400" />
            <span>CSVダウンロード</span>
          </a>
        </div>

        {/* Drag & Drop Box */}
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-xl p-6 text-center transition-colors ${
            dragOver
              ? 'border-cyan-400 bg-cyan-950/20'
              : 'border-slate-700 hover:border-slate-500 bg-slate-950/40'
          }`}
        >
          <Upload className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
          <p className="text-sm font-medium text-slate-200">
            ここに観測点CSVファイル（intensity-points-v1.csv 等）をドラッグ＆ドロップ
          </p>
          <p className="text-xs text-slate-400 mt-1">またはファイルを選択して読み込み</p>
          <label className="mt-3 inline-block cursor-pointer px-4 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold transition">
            ファイルを選択
            <input
              type="file"
              accept=".csv"
              className="hidden"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  handleFile(e.target.files[0]);
                }
              }}
            />
          </label>
        </div>

        {/* Result Message */}
        {resultMessage && (
          <div
            className={`p-3 rounded-lg text-xs flex items-center gap-2 ${
              resultMessage.isError
                ? 'bg-rose-950/80 border border-rose-800 text-rose-200'
                : 'bg-emerald-950/80 border border-emerald-800 text-emerald-200'
            }`}
          >
            {resultMessage.isError ? (
              <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
            ) : (
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            )}
            <span>{resultMessage.text}</span>
          </div>
        )}

        {/* Format Explanation */}
        <div className="text-[11px] text-slate-400 space-y-1 bg-slate-950/50 p-2.5 rounded-lg border border-slate-800">
          <div className="font-semibold text-slate-300">対応CSVカラム仕様:</div>
          <div className="font-mono text-[10px] text-slate-400">
            0,観測点コード,地中フラグ,観測点名,都道府県,緯度,経度,PixelX,PixelY...
          </div>
          <p className="text-slate-400">
            ※ ユーザー提供の <code className="text-cyan-300">intensity-points-v1 (1).csv</code> は初期状態で全地点が内蔵されています。
          </p>
        </div>

        <div className="flex justify-end pt-2">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition"
          >
            閉じる
          </button>
        </div>
      </div>
    </div>
  );
};
