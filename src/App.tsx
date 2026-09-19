/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Header } from './components/Header';
import { EEWBanner } from './components/EEWBanner';
import { KyoshinMap } from './components/KyoshinMap';
import { WaveformMonitor } from './components/WaveformMonitor';
import { StationRankList } from './components/StationRankList';
import { ShindoFlashPanel } from './components/ShindoFlashPanel';
import { WebSocketLab } from './components/WebSocketLab';
import { KyoshinImageAnalyzer } from './components/KyoshinImageAnalyzer';
import { ScenarioSelector } from './components/ScenarioSelector';
import { CsvImportModal } from './components/CsvImportModal';
import { PRESET_SCENARIOS } from './data/presetScenarios';
import { KNET_STATIONS, BaseStationInfo } from './data/knetStations';
import { EEWSimulationEngine } from './physics/eewEngine';
import { EEWReport, Scenario, ShindoFlashReport, Station } from './types/earthquake';
import {
  createWolfxFormat,
  createP2PEEWFormat,
  createP2PShindoFormat,
  createDmdssFormat,
} from './utils/formatConverters';

export default function App() {
  // シミュレーション状態
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [elapsedSec, setElapsedSec] = useState(0);
  const [speed, setSpeed] = useState(1.0);
  const [scenario, setScenario] = useState<Scenario>(PRESET_SCENARIOS[0]);
  const [connectedClients, setConnectedClients] = useState(1);
  const [totalBroadcasts, setTotalBroadcasts] = useState(0);

  // 物理走時・波動伝播
  const [pWaveRadiusKm, setPWaveRadiusKm] = useState(0);
  const [sWaveRadiusKm, setSWaveRadiusKm] = useState(0);

  // 観測点状態 (ユーザー提供の intensity-points-v1 (1).csv 全1749地点公式データ)
  const [stationBases, setStationBases] = useState<BaseStationInfo[]>(KNET_STATIONS);
  const [stations, setStations] = useState<Station[]>(() =>
    KNET_STATIONS.map((base) => ({
      ...base,
      currentGal: 0.05,
      currentIntensity: -1.8,
      intensityGrade: '震度0未満',
      pArrived: false,
      sArrived: false,
      pTimeSec: 0,
      sTimeSec: 0,
      isTriggered: false,
    }))
  );

  // ユーザー選択中の観測点コード (波形モニター・マップ連動)
  const [selectedStationCode, setSelectedStationCode] = useState<string | null>(null);

  // 選択された観測点オブジェクト (高速導出)
  const selectedStation = useMemo(() => {
    if (!selectedStationCode) return null;
    return stations.find((s) => s.code === selectedStationCode) || null;
  }, [stations, selectedStationCode]);

  // EEW & 震度速報
  const [currentEEW, setCurrentEEW] = useState<EEWReport | null>(null);
  const [eewHistory, setEewHistory] = useState<EEWReport[]>([]);
  const [currentShindoFlash, setCurrentShindoFlash] = useState<ShindoFlashReport | null>(null);
  const [shindoHistory, setShindoHistory] = useState<ShindoFlashReport[]>([]);

  // CSVモーダル管理
  const [isCsvModalOpen, setIsCsvModalOpen] = useState(false);

  // クライアント自立物理シミュレーションエンジン
  const clientEngineRef = useRef<EEWSimulationEngine>(new EEWSimulationEngine(scenario));

  // 実時間同期用 Refs (タイマードリフト・計算遅延の完全防止)
  const elapsedSecRef = useRef<number>(0);
  const startTimeRef = useRef<number | null>(null);
  const baseElapsedRef = useRef<number>(0);
  const isRunningRef = useRef<boolean>(isRunning);
  const isPausedRef = useRef<boolean>(isPaused);
  const speedRef = useRef<number>(speed);

  useEffect(() => {
    isRunningRef.current = isRunning;
    isPausedRef.current = isPaused;
    speedRef.current = speed;
  }, [isRunning, isPaused, speed]);

  // WebSocket 接続・ログ
  const [isWsConnected, setIsWsConnected] = useState(false);
  const [logs, setLogs] = useState<{ timestamp: string; type: string; payload: any }[]>([]);
  const wsRef = useRef<WebSocket | null>(null);

  // WebSocket 接続の初期化 & 自動リトライ
  useEffect(() => {
    let reconnectTimeout: NodeJS.Timeout;
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const wsUrl = `${protocol}//${window.location.host}/ws/all`;

    function connect() {
      try {
        const ws = new WebSocket(wsUrl);
        wsRef.current = ws;

        ws.onopen = () => {
          setIsWsConnected(true);
        };

        ws.onmessage = (event) => {
          try {
            const msg = JSON.parse(event.data);
            const now = new Date().toLocaleTimeString('ja-JP');

            // 強震モニタの生データ連続送信以外をログに追加（状態更新過多を防止）
            if (msg.type !== 'kyoshin_stations') {
              setLogs((prev) => [
                ...prev.slice(-80),
                { timestamp: now, type: msg.type || 'message', payload: msg },
              ]);
            }

            if (msg.type === 'system_welcome') {
              if (msg.currentStatus) {
                setConnectedClients(msg.currentStatus.connectedClients || 1);
              }
              if (msg.currentEEW) setCurrentEEW(msg.currentEEW);
              if (msg.currentShindoFlash) setCurrentShindoFlash(msg.currentShindoFlash);
            } else if (msg.type === 'eew') {
              setCurrentEEW(msg.data);
              setEewHistory((prev) => {
                if (prev.some((p) => p.reportNum === msg.data.reportNum)) return prev;
                return [...prev, msg.data];
              });
              setTotalBroadcasts((t) => t + 1);
            } else if (msg.type === 'shindo_flash') {
              setCurrentShindoFlash(msg.data);
              setShindoHistory((prev) => {
                if (prev.some((p) => p.stage === msg.data.stage)) return prev;
                return [...prev, msg.data];
              });
              setTotalBroadcasts((t) => t + 1);
            } else if (msg.type === 'simulation_reset') {
              handleLocalReset();
            }
          } catch (e) {
            // ignore
          }
        };

        ws.onclose = () => {
          setIsWsConnected(false);
          reconnectTimeout = setTimeout(connect, 3000);
        };

        ws.onerror = () => {
          ws.close();
        };
      } catch (e) {
        setIsWsConnected(false);
        reconnectTimeout = setTimeout(connect, 3000);
      }
    }

    connect();

    return () => {
      clearTimeout(reconnectTimeout);
      if (wsRef.current) wsRef.current.close();
    };
  }, []);

  // サーバー定期ステータスポーリング
  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const res = await fetch('/api/simulation/status');
        if (res.ok) {
          const data = await res.json();
          setConnectedClients(data.connectedClients || 1);
        }
      } catch (e) {
        // ignore
      }
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // クライアント自律シミュレーションループ (実時間同期・計算遅延ゼロの高速エンジン)
  useEffect(() => {
    if (!isRunning || isPaused) {
      startTimeRef.current = null;
      return;
    }

    startTimeRef.current = performance.now();
    let animId: number;
    let lastRenderTime = 0;

    const loop = (now: number) => {
      if (!startTimeRef.current) startTimeRef.current = now;

      // 実時間経過秒数をミリ秒精度で正確に計算 (タイマードリフト一切なし)
      const realElapsedMs = now - startTimeRef.current;
      const computedSec = baseElapsedRef.current + (realElapsedMs / 1000) * speedRef.current;
      const next = Math.min(90, Math.round(computedSec * 10) / 10);

      // 前フレームと秒数が変化した場合、または初回に計算・更新
      if (next !== elapsedSecRef.current || now - lastRenderTime >= 33) {
        lastRenderTime = now;
        elapsedSecRef.current = next;
        setElapsedSec(next);

        const result = clientEngineRef.current.tick(next);

        // 新しい配列参照で React に確実に伝える
        setStations([...result.stations]);
        setPWaveRadiusKm(result.pWaveRadiusKm);
        setSWaveRadiusKm(result.sWaveRadiusKm);

        if (result.newEEW) {
          const eew = result.newEEW;
          const nowStr = new Date().toLocaleTimeString('ja-JP');
          setCurrentEEW(eew);
          setEewHistory((h) => {
            if (h.some((p) => p.reportNum === eew.reportNum)) return h;
            return [...h, eew];
          });
          setTotalBroadcasts((t) => t + 1);

          // 全フォーマットの電文を生成してログに記録
          const wolfxMsg = createWolfxFormat(eew);
          const p2pEewMsg = createP2PEEWFormat(eew);
          const dmdssMsg = createDmdssFormat(eew);

          setLogs((prev) => [
            ...prev.slice(-80),
            { timestamp: nowStr, type: 'eew', payload: { type: 'eew', data: eew } },
            { timestamp: nowStr, type: 'wolfx_eew', payload: wolfxMsg },
            { timestamp: nowStr, type: 'p2p_eew', payload: p2pEewMsg },
            { timestamp: nowStr, type: 'dmdss_eew', payload: dmdssMsg },
          ]);
        }

        if (result.newShindoFlash) {
          const flash = result.newShindoFlash;
          const nowStr = new Date().toLocaleTimeString('ja-JP');
          setCurrentShindoFlash(flash);
          setShindoHistory((h) => {
            if (h.some((p) => p.stage === flash.stage)) return h;
            return [...h, flash];
          });
          setTotalBroadcasts((t) => t + 1);

          const p2pShindoMsg = createP2PShindoFormat(flash, scenario);

          setLogs((prev) => [
            ...prev.slice(-80),
            { timestamp: nowStr, type: 'shindo_flash', payload: { type: 'shindo_flash', data: flash } },
            { timestamp: nowStr, type: 'p2p_shindo', payload: p2pShindoMsg },
          ]);
        }

        if (next >= 90) {
          setIsRunning(false);
          return;
        }
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [isRunning, isPaused, speed]);

  // コントロールアクション送信 (サーバーへの非同期通知)
  const sendControl = useCallback(async (action: string, extra = {}) => {
    try {
      await fetch('/api/simulation/control', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action, ...extra }),
      });
    } catch (e) {
      console.warn('Backend control sync failed, continuing on client engine', e);
    }
  }, []);

  const handleStart = () => {
    baseElapsedRef.current = 0;
    elapsedSecRef.current = 0;
    startTimeRef.current = performance.now();
    setIsRunning(true);
    setIsPaused(false);
    sendControl('start');
  };

  const handlePause = () => {
    baseElapsedRef.current = elapsedSecRef.current;
    startTimeRef.current = null;
    setIsPaused(true);
    sendControl('pause');
  };

  const handleResume = () => {
    startTimeRef.current = performance.now();
    setIsPaused(false);
    sendControl('resume');
  };

  const handleLocalReset = (targetScenario?: Scenario) => {
    const sc = targetScenario || scenario;
    baseElapsedRef.current = 0;
    elapsedSecRef.current = 0;
    startTimeRef.current = null;
    setIsRunning(false);
    setIsPaused(false);
    setElapsedSec(0);
    setPWaveRadiusKm(0);
    setSWaveRadiusKm(0);
    setCurrentEEW(null);
    setEewHistory([]);
    setCurrentShindoFlash(null);
    setShindoHistory([]);
    clientEngineRef.current.reset(sc);
    setStations([...clientEngineRef.current.getStations()]);
  };

  const handleReset = () => {
    handleLocalReset();
    sendControl('reset');
  };

  const handleSetSpeed = (s: number) => {
    baseElapsedRef.current = elapsedSecRef.current;
    startTimeRef.current = performance.now();
    setSpeed(s);
    sendControl('setSpeed', { newSpeed: s });
  };

  const handleTriggerCancel = () => {
    // 手動で取消報を発令
    if (currentEEW && !currentEEW.isCancel) {
      const cancelEEW: EEWReport = {
        ...currentEEW,
        reportNum: currentEEW.reportNum + 1,
        reportTime: new Date().toLocaleTimeString('ja-JP'),
        isWarn: false,
        isFinal: true,
        isCancel: true,
        cancelReason: '落雷等による観測点ノイズ誤検知',
        warningAreas: [],
        forecastRegions: [],
      };
      setCurrentEEW(cancelEEW);
      setEewHistory((prev) => [...prev, cancelEEW]);
    }
    sendControl('triggerCancel', { cancelReason: '落雷等による観測点ノイズ誤検知' });
  };

  const handleSelectScenario = (scenarioId: string) => {
    const found = PRESET_SCENARIOS.find((s) => s.id === scenarioId);
    if (found) {
      setScenario(found);
      handleLocalReset(found);
      sendControl('setScenario', { scenarioId });
    }
  };

  const handleApplyCustomScenario = (custom: Scenario) => {
    setScenario(custom);
    handleLocalReset(custom);
    sendControl('setScenario', { customScenario: custom });
  };

  // 地図クリック等による震源位置の直接変更
  const handleChangeEpicenterLocation = (lat: number, lon: number, epicenterName?: string) => {
    const name = epicenterName || `${lat > 35 ? '東日本' : '西日本'}域 (${lat.toFixed(1)}°N, ${lon.toFixed(1)}°E)`;
    const updated: Scenario = {
      ...scenario,
      id: `picked_${Date.now()}`,
      name: `指定震源: ${name} (M${scenario.magnitude})`,
      epicenterName: name,
      lat: Math.round(lat * 100) / 100,
      lon: Math.round(lon * 100) / 100,
      description: `ユーザー指定震源: ${name} (北緯${lat.toFixed(2)}°, 東経${lon.toFixed(2)}°), 深さ${scenario.depthKm}km, M${scenario.magnitude}`,
    };
    setScenario(updated);
    handleLocalReset(updated);
    sendControl('setScenario', { customScenario: updated });
  };

  const handleSendCustomBroadcast = async (payload: any) => {
    try {
      await fetch('/api/broadcast-custom', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ payload }),
      });
    } catch (e) {
      // ignore
    }
  };

  // CSV動的インポートハンドラ
  const handleImportCsv = (csvText: string) => {
    try {
      const lines = csvText.split(/\r?\n/).filter((l) => l.trim().length > 0);
      const newBases: BaseStationInfo[] = [];

      for (const line of lines) {
        const parts = line.split(',');
        if (parts.length < 7) continue;

        const code = parts[1]?.trim();
        const isUnderground = parts[2]?.trim().toLowerCase() === 'true';
        const name = parts[3]?.trim();
        const pref = parts[4]?.trim();

        let lat = parseFloat(parts[5]?.trim());
        let lon = parseFloat(parts[6]?.trim());

        if (parts[11] && parts[12]) {
          const clat = parseFloat(parts[11].trim());
          const clon = parseFloat(parts[12].trim());
          if (!isNaN(clat) && !isNaN(clon) && clat > 20 && clon > 120) {
            lat = clat;
            lon = clon;
          }
        }

        if (!code || !name || !pref || isNaN(lat) || isNaN(lon)) continue;

        // 地方判別
        let region: BaseStationInfo['region'] = '関東';
        if (pref.includes('北海道')) region = '北海道';
        else if (['青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県'].includes(pref)) region = '東北';
        else if (['茨城県', '栃木県', '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県'].includes(pref)) region = '関東';
        else if (['新潟県', '富山県', '石川県', '福井県', '山梨県', '長野県', '岐阜県', '静岡県', '愛知県'].includes(pref)) region = '中部';
        else if (['三重県', '滋賀県', '京都府', '大阪府', '兵庫県', '奈良県', '和歌山県'].includes(pref)) region = '近畿';
        else if (['鳥取県', '島根県', '岡山県', '広島県', '山口県'].includes(pref)) region = '中国';
        else if (['徳島県', '香川県', '愛媛県', '高知県'].includes(pref)) region = '四国';
        else if (['福岡県', '佐賀県', '長崎県', '熊本県', '大分県', '宮崎県', '鹿児島県'].includes(pref)) region = '九州';
        else if (pref.includes('沖縄')) region = '沖縄';

        newBases.push({
          code,
          name,
          pref,
          region,
          lat: Math.round(lat * 10000) / 10000,
          lon: Math.round(lon * 10000) / 10000,
          siteAmp: 1.35,
          isUnderground,
        });
      }

      if (newBases.length === 0) {
        return { success: false, count: 0, error: '有効な観測点行が見つかりませんでした。' };
      }

      setStationBases(newBases);
      clientEngineRef.current = new EEWSimulationEngine(scenario);
      handleLocalReset();

      return { success: true, count: newBases.length };
    } catch (e: any) {
      return { success: false, count: 0, error: e?.message || 'CSV解析エラー' };
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* トップヘッダー */}
      <Header
        isRunning={isRunning}
        isPaused={isPaused}
        elapsedSec={elapsedSec}
        speed={speed}
        activeScenario={scenario}
        allScenarios={PRESET_SCENARIOS}
        connectedClients={connectedClients}
        isWsConnected={isWsConnected}
        stationCount={stations.length}
        onOpenCsvModal={() => setIsCsvModalOpen(true)}
        onSelectScenario={handleSelectScenario}
        onStart={handleStart}
        onPause={handlePause}
        onResume={handleResume}
        onReset={handleReset}
        onSetSpeed={handleSetSpeed}
        onTriggerCancel={handleTriggerCancel}
      />

      {/* メインワークスペース */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-3 md:p-5 space-y-4">
        {/* 最上部: 緊急地震速報 テレビ風警報バナー & 到達カウントダウン */}
        <EEWBanner
          currentEEW={currentEEW}
          eewHistory={eewHistory}
          elapsedSec={elapsedSec}
        />

        {/* メインセクション: 地図 + サイドパネル */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* 左側: 強震モニタ精密ベクターマップ (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <KyoshinMap
              stations={stations}
              scenario={scenario}
              pWaveRadiusKm={pWaveRadiusKm}
              sWaveRadiusKm={sWaveRadiusKm}
              elapsedSec={elapsedSec}
              currentShindoFlash={currentShindoFlash}
              selectedStationCode={selectedStationCode}
              onSelectStation={(st) => setSelectedStationCode(st ? st.code : null)}
              onChangeEpicenterLocation={handleChangeEpicenterLocation}
            />

            {/* 地図真下: リアルタイム地震波形スコープ (オシロスコープ) */}
            <WaveformMonitor
              stations={stations}
              selectedStation={selectedStation}
              elapsedSec={elapsedSec}
              onSelectStation={(st) => setSelectedStationCode(st.code)}
            />
          </div>

          {/* 右側: 震度速報電文 ＆ 観測点ランキング ＆ 強震モニタ画像解析 (5 cols) */}
          <div className="lg:col-span-5 space-y-4 flex flex-col">
            {/* 震度速報パネル (第1段階: 調査中速報 / 第2段階: 震源震度確定報) */}
            <ShindoFlashPanel
              currentFlash={currentShindoFlash}
              history={shindoHistory}
              elapsedSec={elapsedSec}
            />

            {/* 観測点震度ランキング・検索 */}
            <StationRankList
              stations={stations}
              selectedStationCode={selectedStationCode}
              onSelectStation={(st) => setSelectedStationCode(st.code)}
              elapsedSec={elapsedSec}
            />

            {/* 強震モニタ画像シミュレーション & RGBピクセル解析モジュール */}
            <KyoshinImageAnalyzer
              stations={stations}
              elapsedSec={elapsedSec}
            />
          </div>
        </div>

        {/* 下部セクション: シナリオセレクター & 外部WebSocket接続ラボ */}
        <div className="space-y-4 pt-2">
          <ScenarioSelector
            currentScenario={scenario}
            onSelectScenario={handleSelectScenario}
            onApplyCustomScenario={handleApplyCustomScenario}
          />

          <WebSocketLab
            logs={logs}
            connectedClients={connectedClients}
            totalBroadcasts={totalBroadcasts}
            onSendCustomBroadcast={handleSendCustomBroadcast}
          />
        </div>
      </main>

      {/* CSVインポート・管理モーダル */}
      <CsvImportModal
        isOpen={isCsvModalOpen}
        onClose={() => setIsCsvModalOpen(false)}
        stationCount={stations.length}
        onImportCsv={handleImportCsv}
      />

      {/* フッター */}
      <footer className="border-t border-slate-800 bg-slate-950/90 px-4 py-3 text-center text-xs text-slate-500">
        <p>
          緊急地震速報・強震モニタ 物理シミュレーション訓練プラットフォーム | 気象庁(JMA)電文規約 ＆ NIED 強震観測網モデル (K-NET / KiK-net 1,749地点)
        </p>
      </footer>
    </div>
  );
}
