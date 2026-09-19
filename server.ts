/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from 'express';
import http from 'http';
import path from 'path';
import { WebSocketServer, WebSocket } from 'ws';
import { createServer as createViteServer } from 'vite';
import { PRESET_SCENARIOS } from './src/data/presetScenarios';
import { EEWSimulationEngine } from './src/physics/eewEngine';
import { EEWReport, Scenario, ShindoFlashReport } from './src/types/earthquake';
import {
  createWolfxFormat,
  createP2PEEWFormat,
  createP2PShindoFormat,
  createDmdssFormat,
} from './src/utils/formatConverters';

async function startServer() {
  const app = express();
  const PORT = 3000;
  const server = http.createServer(app);

  app.use(express.json());

  // WebSocket Server 設定
  const wss = new WebSocketServer({ server });

  // 接続クライアント管理 (チャンネル: all, eew, wolfx, p2p, kyoshin, dmdss)
  const clients = new Set<{ ws: WebSocket; channel: string }>();

  // シミュレーション状態管理
  let currentScenario: Scenario = PRESET_SCENARIOS[0]; // 2024 能登半島地震
  let engine = new EEWSimulationEngine(currentScenario);
  let isRunning = false;
  let isPaused = false;
  let elapsedSec = 0;
  let speed = 1.0;
  let timer: NodeJS.Timeout | null = null;
  let totalBroadcasts = 0;
  let currentEEW: EEWReport | null = null;
  const eewHistory: EEWReport[] = [];
  let currentShindoFlash: ShindoFlashReport | null = null;
  const shindoHistory: ShindoFlashReport[] = [];

  // メッセージブロードキャスト関数 (チャンネル振り分け対応)
  function broadcast(payload: any, targetChannel = 'all') {
    totalBroadcasts++;
    const message = typeof payload === 'string' ? payload : JSON.stringify(payload);

    clients.forEach(({ ws, channel }) => {
      if (ws.readyState !== WebSocket.OPEN) return;

      // チャンネルマッチング
      if (
        channel === 'all' ||
        targetChannel === 'all' ||
        channel === targetChannel ||
        (targetChannel === 'eew' && (channel === 'wolfx' || channel === 'p2p' || channel === 'dmdss'))
      ) {
        ws.send(message);
      }
    });
  }

  // シミュレーションのステップ実行
  function stepSimulation(deltaSec = 0.5) {
    elapsedSec += deltaSec;
    const result = engine.tick(elapsedSec);

    // 新しいEEW報が出た場合
    if (result.newEEW) {
      currentEEW = result.newEEW;
      eewHistory.push(result.newEEW);

      // 1. 標準JSONメッセージ
      broadcast({
        type: 'eew',
        timestamp: new Date().toISOString(),
        elapsedSec: Math.round(elapsedSec * 10) / 10,
        data: result.newEEW,
      });

      // 2. Wolfx (Project Wolfx) 緊急地震速報形式
      broadcast(createWolfxFormat(result.newEEW), 'wolfx');

      // 3. P2P地震情報 (Code 556) 形式
      broadcast(createP2PEEWFormat(result.newEEW), 'p2p');

      // 4. DM-DSS互換メッセージ
      broadcast(createDmdssFormat(result.newEEW), 'dmdss');
    }

    // 新しい震度速報が出た場合
    if (result.newShindoFlash) {
      currentShindoFlash = result.newShindoFlash;
      shindoHistory.push(result.newShindoFlash);

      // 1. 標準震度速報
      broadcast({
        type: 'shindo_flash',
        timestamp: new Date().toISOString(),
        elapsedSec: Math.round(elapsedSec * 10) / 10,
        data: result.newShindoFlash,
      });

      // 2. P2P地震情報 (Code 551 各地の震度に関する情報) 形式
      broadcast(createP2PShindoFormat(result.newShindoFlash), 'p2p');
    }

    // 強震モニタ観測点データの定期ブロードキャスト (1秒ごと)
    if (Math.floor(elapsedSec * 2) % 2 === 0) {
      broadcast(
        {
          type: 'kyoshin_stations',
          timestamp: new Date().toISOString(),
          elapsedSec: Math.round(elapsedSec * 10) / 10,
          pWaveRadiusKm: Math.round(result.pWaveRadiusKm * 10) / 10,
          sWaveRadiusKm: Math.round(result.sWaveRadiusKm * 10) / 10,
          stations: result.stations.map((st) => ({
            ...st,
            gal: st.currentGal,
            intensity: st.currentIntensity,
            grade: st.intensityGrade,
          })),
        },
        'kyoshin'
      );
    }

    // 終了条件 (90秒経過で自動停止)
    if (elapsedSec >= 90) {
      isRunning = false;
      if (timer) clearInterval(timer);
      timer = null;
    }
  }

  function startLoop() {
    if (timer) clearInterval(timer);
    const intervalMs = Math.max(50, Math.floor(500 / speed));
    timer = setInterval(() => {
      if (isRunning && !isPaused) {
        stepSimulation(0.5);
      }
    }, intervalMs);
  }

  // WebSocket接続イベントハンドラ
  wss.on('connection', (ws, req) => {
    const channel = req.url?.replace('/ws/', '') || 'all';
    const clientRecord = { ws, channel };
    clients.add(clientRecord);

    // 接続時に現在のステータスとウェルカム情報を送信
    ws.send(
      JSON.stringify({
        type: 'system_welcome',
        message: '緊急地震速報 WebSocket訓練テストサーバーへ接続しました',
        serverTime: new Date().toISOString(),
        endpoints: {
          all: '/ws/all (全形式・全ストリームメッセージ)',
          wolfx: '/ws/wolfx (Wolfx互換 緊急地震速報 JSON)',
          p2p: '/ws/p2p (P2P地震情報 Code 556/551 JSON)',
          eew: '/ws/eew (緊急地震速報メッセージ)',
          dmdss: '/ws/dmdss (DM-DSS気象庁互換)',
          kyoshin: '/ws/kyoshin (強震モニタ観測点ストリーム)',
        },
        currentStatus: {
          isRunning,
          isPaused,
          elapsedSec,
          scenarioName: currentScenario.name,
        },
        currentEEW,
        currentShindoFlash,
      })
    );

    ws.on('close', () => {
      clients.delete(clientRecord);
    });

    ws.on('message', (msg) => {
      try {
        const data = JSON.parse(msg.toString());
        if (data.action === 'ping') {
          ws.send(JSON.stringify({ type: 'pong', timestamp: Date.now() }));
        }
      } catch (e) {
        // ignore non-json
      }
    });
  });

  // REST API: ステータス取得
  const handleStatus = (req: express.Request, res: express.Response) => {
    res.json({
      isRunning,
      isPaused,
      elapsedSec: Math.round(elapsedSec * 10) / 10,
      speed,
      scenario: currentScenario,
      activeScenario: currentScenario,
      connectedClients: wss.clients.size,
      totalBroadcasts,
      currentEEW,
      eewHistory,
      currentShindoFlash,
      shindoHistory,
    });
  };
  app.get('/api/status', handleStatus);
  app.get('/api/simulation/status', handleStatus);

  // REST API: プリセットシナリオ一覧
  app.get('/api/scenarios', (req, res) => {
    res.json(PRESET_SCENARIOS);
  });

  // REST API: 観測点一覧
  app.get('/api/stations', (req, res) => {
    res.json(engine.getStations());
  });

  // REST API: CSV生データ提供
  app.get('/api/intensity-points.csv', (req, res) => {
    const csvPath = path.resolve(process.cwd(), 'intensity-points-v1 (1).csv');
    res.sendFile(csvPath);
  });

  // REST API: 制御コマンド (start, pause, resume, reset, setSpeed, setScenario, cancel)
  const handleControl = (req: express.Request, res: express.Response) => {
    const { action, scenarioId, customScenario, newSpeed, cancelReason } = req.body;

    switch (action) {
      case 'start':
        isRunning = true;
        isPaused = false;
        startLoop();
        break;

      case 'pause':
        isPaused = true;
        break;

      case 'resume':
        isPaused = false;
        break;

      case 'step':
        stepSimulation(0.5);
        break;

      case 'reset':
        isRunning = false;
        isPaused = false;
        elapsedSec = 0;
        if (timer) clearInterval(timer);
        timer = null;
        engine.reset();
        currentEEW = null;
        eewHistory.length = 0;
        currentShindoFlash = null;
        shindoHistory.length = 0;
        broadcast({
          type: 'simulation_reset',
          timestamp: new Date().toISOString(),
        });
        break;

      case 'setSpeed':
        if (typeof newSpeed === 'number' && newSpeed > 0 && newSpeed <= 10) {
          speed = newSpeed;
          if (isRunning) startLoop();
        }
        break;

      case 'setScenario':
        if (scenarioId) {
          const found = PRESET_SCENARIOS.find((s) => s.id === scenarioId);
          if (found) {
            currentScenario = found;
            engine.reset(currentScenario);
            elapsedSec = 0;
            currentEEW = null;
            eewHistory.length = 0;
            currentShindoFlash = null;
            shindoHistory.length = 0;
          }
        } else if (customScenario) {
          currentScenario = customScenario;
          engine.reset(currentScenario);
          elapsedSec = 0;
          currentEEW = null;
          eewHistory.length = 0;
          currentShindoFlash = null;
          shindoHistory.length = 0;
        }
        break;

      case 'triggerCancel':
        // 手動で取消報を発令
        if (currentEEW && !currentEEW.isCancel) {
          const cancelEEW: EEWReport = {
            ...currentEEW,
            reportNum: currentEEW.reportNum + 1,
            reportTime: new Date().toLocaleTimeString('ja-JP'),
            isWarn: false,
            isFinal: true,
            isCancel: true,
            cancelReason: cancelReason || '落雷等による観測点ノイズ誤検知',
            warningAreas: [],
            forecastRegions: [],
          };
          currentEEW = cancelEEW;
          eewHistory.push(cancelEEW);
          broadcast({
            type: 'eew',
            timestamp: new Date().toISOString(),
            elapsedSec: Math.round(elapsedSec * 10) / 10,
            data: cancelEEW,
          });
          broadcast(createDmdssFormat(cancelEEW));
        }
        break;

      default:
        return res.status(400).json({ error: 'Unknown action' });
    }

    res.json({
      status: 'ok',
      isRunning,
      isPaused,
      elapsedSec: Math.round(elapsedSec * 10) / 10,
      currentScenario,
      connectedClients: wss.clients.size,
    });
  };
  app.post('/api/control', handleControl);
  app.post('/api/simulation/control', handleControl);

  // REST API: カスタムブロードキャスト送信テスト
  app.post('/api/broadcast-custom', (req, res) => {
    const { payload } = req.body;
    if (!payload) return res.status(400).json({ error: 'Missing payload' });
    broadcast(payload);
    res.json({ status: 'ok', recipients: wss.clients.size });
  });

  // Vite middleware setup
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  server.listen(PORT, '0.0.0.0', () => {
    console.log(`[EEW Simulator] Server running on http://0.0.0.0:${PORT}`);
    console.log(`[EEW Simulator] WebSocket listening on ws://0.0.0.0:${PORT}/ws/eew`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
