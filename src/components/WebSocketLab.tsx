/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Terminal,
  Copy,
  Check,
  Code2,
  Send,
  Wifi,
  ExternalLink,
  Layers,
  ChevronDown,
  ChevronUp,
  Activity,
  AlertTriangle,
  AlertCircle,
  Globe,
} from 'lucide-react';

interface WebSocketLabProps {
  logs: { timestamp: string; type: string; payload: any }[];
  connectedClients: number;
  totalBroadcasts: number;
  onSendCustomBroadcast: (payload: any) => Promise<void>;
}

export const WebSocketLab: React.FC<WebSocketLabProps> = ({
  logs,
  connectedClients,
  totalBroadcasts,
  onSendCustomBroadcast,
}) => {
  const [activeTab, setActiveTab] = useState<'logs' | 'code' | 'diagnostics' | 'inject'>('logs');
  const [selectedLanguage, setSelectedLanguage] = useState<'wolfx_python' | 'p2p_node' | 'csharp' | 'viewer'>('wolfx_python');
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const [testResult, setTestResult] = useState<{
    status: 'idle' | 'testing' | 'success' | 'error';
    latencyMs?: number;
    closeCode?: number;
    message?: string;
    details?: string;
  }>({ status: 'idle' });

  // WebSocket接続テスト実行
  const runConnectionTest = (targetUrl = allWsUrl) => {
    setTestResult({ status: 'testing' });
    const startTime = performance.now();
    let socketOpened = false;

    try {
      const testWs = new WebSocket(targetUrl);
      const timeoutTimer = setTimeout(() => {
        if (!socketOpened) {
          try {
            testWs.close();
          } catch (e) {}
          setTestResult({
            status: 'error',
            message: '接続タイムアウト（5秒以内に応答がありませんでした）',
            details: 'URLまたはポート番号、ファイアウォール設定を確認してください。',
          });
        }
      }, 5000);

      testWs.onopen = () => {
        socketOpened = true;
        clearTimeout(timeoutTimer);
        const elapsed = Math.round(performance.now() - startTime);
        setTestResult({
          status: 'success',
          latencyMs: elapsed,
          message: `WebSocket接続成功！正常にハンドシェイクを完了しました（応答速度: ${elapsed}ms）`,
          details: 'サーバーからメッセージを受信待機中...',
        });

        // 正常にメッセージを受信できたらクローズ
        testWs.onmessage = (event) => {
          try {
            const data = JSON.parse(event.data);
            setTestResult((prev) => ({
              ...prev,
              status: 'success',
              details: `電文受信確認: ${data.type || 'データ受信完了'} (${event.data.length} bytes)`,
            }));
          } catch (e) {}

          setTimeout(() => {
            try {
              testWs.close(1000, 'Test completed normally');
            } catch (e) {}
          }, 600);
        };
      };

      testWs.onerror = () => {
        clearTimeout(timeoutTimer);
        // onerror will be immediately followed by onclose with code 1006
      };

      testWs.onclose = (event) => {
        clearTimeout(timeoutTimer);
        if (event.code === 1000 || event.code === 1005) {
          // 正常終了
          return;
        }

        if (event.code === 1006) {
          setTestResult({
            status: 'error',
            closeCode: 1006,
            message: 'エラー: コード 1006 (異常切断 / Abnormal Closure)',
            details:
              'TCP接続またはSSL/TLSハンドシェイクが確立前に中断されました。下記「コード 1006 の原因と解決策」をご確認ください。',
          });
        } else {
          setTestResult({
            status: 'error',
            closeCode: event.code,
            message: `切断されました (Code: ${event.code})`,
            details: event.reason || '通信が終了しました',
          });
        }
      };
    } catch (e: any) {
      setTestResult({
        status: 'error',
        message: e.message || '接続エラー',
        details: 'プロトコル (wss:// または ws://) を確認してください。',
      });
    }
  };
  
  // 注入テンプレートプリセット
  const injectionPresets = {
    wolfx: JSON.stringify(
      {
        type: 'jma_eew',
        Title: '緊急地震速報（警報）',
        CodeType: 'Ｍ、最大予測震度及び主要動到達予測時刻の緊急地震速報',
        Issue: {
          Source: '気象庁',
          Status: '通常',
          Time: '2026/09/19 13:45:00',
          Type: '通常',
        },
        EventID: '20260919134500',
        Serial: 3,
        AnnouncedTime: '2026/09/19 13:45:00',
        OriginTime: '2026/09/19 13:44:45',
        Hypocenter: '石川県能登地方',
        Latitude: 37.5,
        Longitude: 137.2,
        Depth: 10,
        Magunitude: 7.6,
        Magnitude: 7.6,
        MaxIntensity: '7',
        MaxIntensity_Float: 6.8,
        Accuracy: {
          Epicenter: 'IPF法（5点以上）',
          Depth: 'IPF法（5点以上）',
          Magnitude: 'P相／全相混在',
        },
        isWarn: true,
        isFinal: false,
        isCancel: false,
        isAssumption: false,
        WarnArea: [
          {
            Chiiki: '石川県能登',
            Shindo1: '7',
            Shindo2: '4',
            Time: '2026/09/19 13:45:15',
            Type: '警報',
            Arrive: false,
            Pref: '石川県',
            Name: '石川県能登',
            ScaleFrom: '4',
            ScaleTo: '7',
            ArrivalTime: '2026/09/19 13:45:15',
          },
        ],
        OriginalText: '37 03 00 260919134500 C11 260919134445 ND20260919134500 NCN003 JD////////////// JN/// 999 N375 E1372 010 76 07 RK44519 RT10/// RC0//// 9999=',
        status: 0,
      },
      null,
      2
    ),
    p2p_556: JSON.stringify(
      {
        id: 'p2p_drill_556_01',
        code: 556,
        time: new Date().toISOString().replace('T', ' ').substring(0, 19).replace(/-/g, '/'),
        test: true,
        earthquake: {
          originTime: new Date().toISOString().replace('T', ' ').substring(0, 19).replace(/-/g, '/'),
          hypocenter: {
            name: '南海トラフ（三重県南東沖）',
            reduceName: '三重県南東沖',
            latitude: 33.8,
            longitude: 136.8,
            depth: 30,
            magnitude: 8.7,
          },
        },
        issue: {
          time: new Date().toISOString().replace('T', ' ').substring(0, 19).replace(/-/g, '/'),
          eventId: '20260919134500',
          serial: '4',
        },
        cancelled: false,
        isWarning: true,
        isFinal: false,
        maxScale: 70,
        areas: [
          {
            pref: '三重県',
            name: '三重県南部',
            scaleFrom: 45,
            scaleTo: 70,
            kindCode: '11',
            arrivalTime: '2026/09/19 13:45:15',
          },
        ],
      },
      null,
      2
    ),
    p2p_551: JSON.stringify(
      {
        id: 'p2p_drill_551_01',
        code: 551,
        time: new Date().toISOString().replace('T', ' ').substring(0, 19).replace(/-/g, '/'),
        issue: {
          source: '気象庁',
          time: new Date().toISOString().replace('T', ' ').substring(0, 19).replace(/-/g, '/'),
          type: 'DetailScale',
          correct: 'None',
        },
        earthquake: {
          time: new Date().toISOString().replace('T', ' ').substring(0, 19).replace(/-/g, '/'),
          hypocenter: {
            name: '能登半島沖',
            latitude: 37.5,
            longitude: 137.2,
            depth: 16,
            magnitude: 7.6,
          },
          maxScale: 70,
          domesticTsunami: 'MajorWarning',
        },
        points: [
          { pref: '石川県', addr: '輪島市', isArea: false, scale: 70 },
          { pref: '石川県', addr: '志賀町', isArea: false, scale: 70 },
          { pref: '富山県', addr: '富山市', isArea: false, scale: 50 },
        ],
      },
      null,
      2
    ),
    p2p_552: JSON.stringify(
      {
        id: 'p2p_drill_552_01',
        code: 552,
        time: new Date().toISOString().replace('T', ' ').substring(0, 19).replace(/-/g, '/'),
        cancelled: false,
        test: true,
        issue: {
          source: '気象庁',
          time: new Date().toISOString().replace('T', ' ').substring(0, 19).replace(/-/g, '/'),
          type: 'Focus',
        },
        areas: [
          {
            grade: 'MajorWarning',
            name: '石川県能登',
            immediate: true,
            firstHeight: { condition: 'ただちに津波来襲と予測' },
            maxHeight: { value: 5, unit: 'm', description: '巨大 (5m)' },
          },
          {
            grade: 'Warning',
            name: '山形県',
            immediate: false,
            firstHeight: { condition: '第1波到達中と推測' },
            maxHeight: { value: 3, unit: 'm', description: '高い (3m)' },
          },
          {
            grade: 'Watch',
            name: '京都府',
            immediate: false,
            firstHeight: { condition: '第1波到達中と推測' },
            maxHeight: { value: 1, unit: 'm', description: '1m' },
          },
        ],
      },
      null,
      2
    ),
  };

  const [customJson, setCustomJson] = useState(injectionPresets.wolfx);
  const [isInjecting, setIsInjecting] = useState(false);
  const [filterType, setFilterType] = useState<string>('all');
  const [expandedLogIdx, setExpandedLogIdx] = useState<number | null>(null);

  // 現在のホストからWebSocket URLを生成
  const host = typeof window !== 'undefined' ? window.location.host : 'localhost:3000';
  const protocol = typeof window !== 'undefined' && window.location.protocol === 'https:' ? 'wss:' : 'ws:';
  
  const wolfxWsUrl = `${protocol}//${host}/ws/wolfx`;
  const jmaEewWsUrl = `${protocol}//${host}/ws/jma_eew`;
  const p2pWsUrl = `${protocol}//${host}/ws/p2p`;
  const eewWsUrl = `${protocol}//${host}/ws/eew`;
  const dmdssWsUrl = `${protocol}//${host}/ws/dmdss`;
  const allWsUrl = `${protocol}//${host}/ws/all`;
  const kyoshinWsUrl = `${protocol}//${host}/ws/kyoshin`;

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedUrl(key);
    setTimeout(() => setCopiedUrl(null), 2000);
  };

  const handleInject = async () => {
    try {
      const parsed = JSON.parse(customJson);
      setIsInjecting(true);
      await onSendCustomBroadcast(parsed);
      setIsInjecting(false);
    } catch (e: any) {
      alert('無効なJSONフォーマットです: ' + e.message);
      setIsInjecting(false);
    }
  };

  const filteredLogs = logs.filter((l) => {
    if (filterType === 'all') return true;
    if (filterType === 'wolfx_eew') return l.type === 'wolfx_eew' || l.type === 'jma_eew' || l.payload?.type === 'wolfx_eew' || l.payload?.type === 'jma_eew';
    if (filterType === 'p2p_eew') return l.type === 'p2p_eew' || l.payload?.code === 556;
    if (filterType === 'p2p_shindo') return l.type === 'p2p_shindo' || l.payload?.code === 551;
    if (filterType === 'p2p_tsunami') return l.type === 'p2p_tsunami' || l.type === 'tsunami' || l.payload?.code === 552;
    return l.type === filterType;
  });

  // 言語別クライアント接続サンプルコード (Wolfx / P2P Quake 形式特化)
  const codeSnippets = {
    wolfx_python: `# Python (Wolfx EEW / jma_eew 形式 WebSocket 受信クライアント)
# pip install websockets
import asyncio
import json
import websockets

# Wolfx公式形式エンドポイント (/ws/jma_eew または /ws/wolfx)
WOLFX_WS_URL = "${wolfxWsUrl}"

async def receive_wolfx_eew():
    print(f"Wolfx EEW WebSocket に接続中: {WOLFX_WS_URL} ...")
    async with websockets.connect(WOLFX_WS_URL) as ws:
        print("接続成功！ Wolfx (jma_eew) 形式の緊急地震速報を受信中...")
        async for message in ws:
            data = json.loads(message)
            
            # Wolfx EEW 判定 (type: "jma_eew" または CodeType)
            if data.get("type") in ("jma_eew", "wolfx_eew") or "緊急地震速報" in str(data.get("CodeType", "")):
                title = data.get("Title", "緊急地震速報")
                serial = data.get("Serial", 1)
                hypo = data.get("Hypocenter", "不明")
                mag = data.get("Magnitude", 0.0)
                max_int = data.get("MaxIntensity", "不明")
                is_warn = data.get("isWarn", False)
                is_cancel = data.get("isCancel", False)
                
                if is_cancel:
                    print(f"【取消報】{hypo} - {data.get('OriginalText')}")
                else:
                    warn_tag = "【警報】" if is_warn else "【予報】"
                    print(f"{warn_tag} 第{serial}報: {hypo} M{mag} 最大震度{max_int}")
                    if is_warn:
                        areas = [a.get("Chiiki") or a.get("Name") for a in data.get("WarnArea", [])]
                        print(f"  ▶ 警報発令地域: {', '.join(areas)}")

if __name__ == "__main__":
    asyncio.run(receive_wolfx_eew())
`,
    p2p_node: `// Node.js (P2P地震情報 Code 556/551 形式 WebSocket 受信クライアント)
// npm install ws
import WebSocket from 'ws';

const P2P_WS_URL = '${p2pWsUrl}';
const ws = new WebSocket(P2P_WS_URL);

ws.on('open', () => {
  console.log('P2P地震情報ストリームに接続しました:', P2P_WS_URL);
});

ws.on('message', (raw) => {
  const msg = JSON.parse(raw.toString());
  
  // Code 556: 緊急地震速報
  if (msg.code === 556) {
    const eq = msg.earthquake?.hypocenter;
    const issue = msg.issue;
    const isWarn = msg.isWarning;
    const maxScale = msg.maxScale; // 70=震度7, 45=5弱 など
    
    if (msg.cancelled) {
      console.warn(\`[P2P 556 取消] \${eq?.name} の緊急地震速報は取り消されました\`);
    } else {
      console.log(\`[P2P 556 \${isWarn ? '警報' : '予報'}] 第\${issue?.serial}報: \${eq?.name} M\${eq?.magnitude} (Scale: \${maxScale})\`);
    }
  }
  
  // Code 551: 地震情報 (震度速報・各地の震度)
  else if (msg.code === 551) {
    const eq = msg.earthquake;
    console.log(\`[P2P 551 震度情報] \${msg.issue?.type}: 最大震度スケール \${eq?.maxScale} (津波: \${eq?.domesticTsunami})\`);
    console.log(\`  観測地点数: \${msg.points?.length || 0}点\`);
  }
});
`,
    csharp: `// C# (.NET 8+ ClientWebSocket: Wolfx & P2P 汎用受信)
using System;
using System.Net.WebSockets;
using System.Text;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;

using var ws = new ClientWebSocket();
var uri = new Uri("${allWsUrl}");
Console.WriteLine($"Connecting to {uri}...");
await ws.ConnectAsync(uri, CancellationToken.None);
Console.WriteLine("Connected! Listening to Wolfx, P2P, and DM-DSS streams...");

var buffer = new byte[16384];
while (ws.State == WebSocketState.Open)
{
    var result = await ws.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);
    var json = Encoding.UTF8.GetString(buffer, 0, result.Count);
    using var doc = JsonDocument.Parse(json);
    var root = doc.RootElement;
    
    // P2P 地震情報 (code プロパティ)
    if (root.TryGetProperty("code", out var codeProp))
    {
        int code = codeProp.GetInt32();
        if (code == 556)
            Console.WriteLine($"[P2P EEW 556] {root.GetProperty("earthquake").GetProperty("hypocenter").GetProperty("name")}");
        else if (code == 551)
            Console.WriteLine($"[P2P Shindo 551] MaxScale: {root.GetProperty("earthquake").GetProperty("maxScale")}");
    }
    // Wolfx EEW (type: "jma_eew")
    else if (root.TryGetProperty("type", out var typeProp) && (typeProp.GetString() == "jma_eew" || typeProp.GetString() == "wolfx_eew"))
    {
        var title = root.GetProperty("Title").GetString();
        var hypo = root.GetProperty("Hypocenter").GetString();
        var maxInt = root.GetProperty("MaxIntensity").GetString();
        Console.WriteLine($"[Wolfx EEW] {title} {hypo} MaxIntensity: {maxInt}");
    }
}
`,
    viewer: `# 外部地震ビューア・ボットソフト設定ガイド

本訓練サーバーは以下のオープンプロトコル形式を同時に送出しています:

1. 【Wolfx 緊急地震速報 (Project Wolfx / jma_eew 互換)】
   - URL: ${jmaEewWsUrl} または ${wolfxWsUrl}
   - 特徴: type: "jma_eew", Title, CodeType, Issue(Status), Hypocenter, Magnitude, WarnArea(Chiiki, Shindo1, Time, Type, Arrive)
   - 用途: Zero Quake, Discord BOT, Twitter/X 自動投稿BOT, 外部地震モニター

2. 【P2P地震情報 (P2PQuake v2 互換)】
   - URL: ${p2pWsUrl}
   - 特徴: Code 556 (緊急地震速報), Code 551 (各地の震度情報), maxScale (10~70数値)
   - 用途: P2P地震情報対応ソフト, 震度地図マッピング, EEW通知プログラム

3. 【DM-DSS 気象庁互換 / 標準JSON】
   - DM-DSS URL: ${dmdssWsUrl}
   - 全形式統合ストリーム: ${allWsUrl}
`,
  };

  return (
    <div className="rounded-xl border border-slate-700/80 bg-slate-900/90 shadow-xl overflow-hidden text-slate-200">
      {/* Header with connection badges */}
      <div className="p-4 bg-slate-900 border-b border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400">
            <Wifi className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <span>外部ソフト連携 WebSocket 送信ステーション</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                ACTIVE
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800">
                Wolfx / P2P地震情報 配信対応
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              Wolfx緊急地震速報・P2P地震情報(Code 556/551)・DM-DSS・標準JSON形式をリアルタイム同時配信中
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <div className="bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 flex items-center gap-2 font-mono">
            <span className="text-slate-400">接続クライアント数:</span>
            <strong className="text-cyan-300">{connectedClients}</strong>
          </div>
          <div className="bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 flex items-center gap-2 font-mono">
            <span className="text-slate-400">累計配信電文:</span>
            <strong className="text-amber-300">{totalBroadcasts}</strong>
          </div>
        </div>
      </div>

      {/* Endpoints Quick Copy Bar */}
      <div className="px-4 py-3 bg-slate-950/80 border-b border-slate-800/80 flex flex-wrap items-center gap-2 text-xs">
        <span className="text-slate-400 font-semibold text-[11px]">配信エンドポイント (形式別):</span>
        
        {/* Wolfx Endpoint */}
        <div className="flex items-center gap-1.5 bg-slate-900 px-2.5 py-1 rounded border border-purple-800/80 font-mono text-purple-300 text-[11px]">
          <span className="text-[10px] font-bold text-purple-400 bg-purple-950 px-1 rounded">Wolfx / jma_eew</span>
          <span>{jmaEewWsUrl}</span>
          <button
            onClick={() => copyToClipboard(jmaEewWsUrl, 'jma_eew')}
            className="text-slate-400 hover:text-white transition-colors ml-1"
            title="Wolfx jma_eew URLをコピー"
          >
            {copiedUrl === 'jma_eew' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* P2P Quake Endpoint */}
        <div className="flex items-center gap-1.5 bg-slate-900 px-2.5 py-1 rounded border border-cyan-800/80 font-mono text-cyan-300 text-[11px]">
          <span className="text-[10px] font-bold text-cyan-400 bg-cyan-950 px-1 rounded">P2P地震情報</span>
          <span>{p2pWsUrl}</span>
          <button
            onClick={() => copyToClipboard(p2pWsUrl, 'p2p')}
            className="text-slate-400 hover:text-white transition-colors ml-1"
            title="P2P地震情報 URLをコピー"
          >
            {copiedUrl === 'p2p' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* All Stream Endpoint */}
        <div className="flex items-center gap-1.5 bg-slate-900 px-2.5 py-1 rounded border border-slate-700 font-mono text-slate-300 text-[11px]">
          <span className="text-[10px] font-bold text-slate-400 bg-slate-800 px-1 rounded">全形式統合</span>
          <span>{allWsUrl}</span>
          <button
            onClick={() => copyToClipboard(allWsUrl, 'all')}
            className="text-slate-400 hover:text-white transition-colors ml-1"
            title="全電文ストリーム URLをコピー"
          >
            {copiedUrl === 'all' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex items-center border-b border-slate-800 bg-slate-950/40 px-4 text-xs">
        <button
          onClick={() => setActiveTab('logs')}
          className={`flex items-center gap-1.5 py-2.5 px-3 border-b-2 font-medium transition-colors ${
            activeTab === 'logs'
              ? 'border-cyan-400 text-cyan-300 font-bold'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Terminal className="w-3.5 h-3.5" />
          <span>送信電文ライブコンソール ({logs.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('code')}
          className={`flex items-center gap-1.5 py-2.5 px-3 border-b-2 font-medium transition-colors ${
            activeTab === 'code'
              ? 'border-cyan-400 text-cyan-300 font-bold'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Code2 className="w-3.5 h-3.5" />
          <span>Wolfx / P2P 受信コードガイド (Python / Node / C#)</span>
        </button>

        <button
          onClick={() => setActiveTab('diagnostics')}
          className={`flex items-center gap-1.5 py-2.5 px-3 border-b-2 font-medium transition-colors ${
            activeTab === 'diagnostics'
              ? 'border-cyan-400 text-cyan-300 font-bold'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Wifi className="w-3.5 h-3.5" />
          <span>接続診断 & ローカルIPガイド</span>
        </button>

        <button
          onClick={() => setActiveTab('inject')}
          className={`flex items-center gap-1.5 py-2.5 px-3 border-b-2 font-medium transition-colors ${
            activeTab === 'inject'
              ? 'border-cyan-400 text-cyan-300 font-bold'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Send className="w-3.5 h-3.5" />
          <span>Wolfx / P2P 電文手動テスト注入</span>
        </button>
      </div>

      {/* Tab Contents */}
      <div className="p-4">
        {activeTab === 'logs' && (
          <div>
            {/* Filter controls */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2 text-xs">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-slate-400 text-[11px]">形式フィルター:</span>
                {[
                  { id: 'all', label: 'すべて' },
                  { id: 'wolfx_eew', label: 'Wolfx EEW' },
                  { id: 'p2p_eew', label: 'P2P EEW (556)' },
                  { id: 'p2p_shindo', label: 'P2P 震度 (551)' },
                  { id: 'p2p_tsunami', label: 'P2P 津波 (552)' },
                  { id: 'eew', label: '標準 EEW' },
                  { id: 'dmdss_eew', label: 'DM-DSS' },
                  { id: 'shindo_flash', label: '標準震度速報' },
                  { id: 'kyoshin_stations', label: '強震モニタ' },
                ].map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => setFilterType(id)}
                    className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                      filterType === id
                        ? 'bg-cyan-600 text-white font-bold shadow'
                        : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <span className="text-[11px] text-slate-500 font-mono">
                {filteredLogs.length} 件表示中
              </span>
            </div>

            {/* Terminal log window */}
            <div className="bg-slate-950 border border-slate-800 rounded-lg p-2.5 font-mono text-xs max-h-64 overflow-y-auto space-y-1.5 shadow-inner">
              {filteredLogs.length === 0 ? (
                <div className="text-center py-8 text-slate-600">
                  <Terminal className="w-5 h-5 mx-auto mb-1 opacity-50" />
                  <span>訓練を開始すると、送信されたWolfx・P2P・DM-DSS等のWebSocket電文がここにリアルタイム表示されます</span>
                </div>
              ) : (
                filteredLogs.slice(-50).reverse().map((log, idx) => {
                  const isExpanded = expandedLogIdx === idx;
                  const isWolfx =
                    log.type === 'wolfx_eew' ||
                    log.type === 'jma_eew' ||
                    log.payload?.type === 'wolfx_eew' ||
                    log.payload?.type === 'jma_eew' ||
                    log.payload?.CodeType === 'EEW' ||
                    Boolean(log.payload?.CodeType?.includes('緊急地震速報'));
                  const isP2P556 = log.type === 'p2p_eew' || log.payload?.code === 556;
                  const isP2P551 = log.type === 'p2p_shindo' || log.payload?.code === 551;
                  const isP2P552 = log.type === 'p2p_tsunami' || log.type === 'tsunami' || log.payload?.code === 552;
                  const isEEW = log.type === 'eew';
                  const isCancel = (isEEW && log.payload?.data?.isCancel) || (isWolfx && log.payload?.isCancel) || (isP2P556 && log.payload?.cancelled);
                  const isWarn = (isEEW && log.payload?.data?.isWarn) || (isWolfx && log.payload?.isWarn) || (isP2P556 && log.payload?.isWarning);

                  let badgeLabel = log.type;
                  let badgeColor = 'bg-slate-800 text-cyan-300';
                  let summaryText = '';

                  if (isWolfx) {
                    badgeLabel = 'Wolfx EEW';
                    badgeColor = isCancel ? 'bg-red-950 text-red-400 border border-red-800' : isWarn ? 'bg-red-600 text-white' : 'bg-purple-600 text-white';
                    summaryText = `${log.payload?.Title || '緊急地震速報'} 第${log.payload?.Serial}報: ${log.payload?.Hypocenter} M${log.payload?.Magnitude} 最大${log.payload?.MaxIntensity}`;
                  } else if (isP2P556) {
                    badgeLabel = 'P2P EEW (556)';
                    badgeColor = isCancel ? 'bg-red-950 text-red-400 border border-red-800' : isWarn ? 'bg-red-600 text-white' : 'bg-cyan-600 text-white';
                    summaryText = `[P2P 556] 第${log.payload?.issue?.serial}報: ${log.payload?.earthquake?.hypocenter?.name} M${log.payload?.earthquake?.hypocenter?.magnitude} Scale:${log.payload?.maxScale}`;
                  } else if (isP2P551) {
                    badgeLabel = 'P2P 震度 (551)';
                    badgeColor = 'bg-emerald-600 text-white';
                    summaryText = `[P2P 551] ${log.payload?.issue?.type}: 最大スケール ${log.payload?.earthquake?.maxScale} (${log.payload?.points?.length || 0}観測点)`;
                  } else if (isP2P552) {
                    const areas = log.payload?.areas || log.payload?.data?.areas || [];
                    const hasMajor = areas.some((a: any) => a.grade === 'MajorWarning');
                    badgeLabel = 'P2P 津波 (552)';
                    badgeColor = hasMajor ? 'bg-purple-600 text-white animate-pulse' : 'bg-red-600 text-white';
                    summaryText = `[P2P 552 津波予報] ${hasMajor ? '【大津波警報】' : '【津波警報/注意報】'} 対象沿岸: ${areas.map((a: any) => a.name).slice(0, 3).join('・')}${areas.length > 3 ? ` 等${areas.length}地域` : ''}`;
                  } else if (isEEW) {
                    badgeLabel = '標準 EEW';
                    badgeColor = isCancel ? 'bg-red-950 text-red-400 border border-red-800' : isWarn ? 'bg-red-600 text-white' : 'bg-amber-600 text-white';
                    summaryText = isCancel
                      ? `【取消報】理由: ${log.payload?.data?.cancelReason}`
                      : `第${log.payload?.data?.reportNum}報 ${log.payload?.data?.hypocenterName} M${log.payload?.data?.magnitude} 最大${log.payload?.data?.maxIntensity}`;
                  } else if (log.type === 'shindo_flash') {
                    badgeLabel = '震度速報';
                    badgeColor = 'bg-emerald-600 text-white';
                    summaryText = `${log.payload?.data?.title} 最大震度${log.payload?.data?.maxIntensity}`;
                  } else if (log.type === 'dmdss_eew') {
                    badgeLabel = 'DM-DSS';
                    badgeColor = 'bg-indigo-700 text-white';
                    summaryText = `DM-DSS電文: ${log.payload?.Control?.Title || '緊急地震速報'}`;
                  } else {
                    summaryText = `観測点ストリーム (${log.payload?.stations?.length || 0}点)`;
                  }

                  return (
                    <div
                      key={`ws-log-${log.timestamp}-${log.type}-${idx}`}
                      className="border border-slate-800/80 rounded bg-slate-900/60 p-2 hover:bg-slate-900 transition-colors"
                    >
                      <div
                        className="flex items-center justify-between cursor-pointer select-none"
                        onClick={() => setExpandedLogIdx(isExpanded ? null : idx)}
                      >
                        <div className="flex items-center gap-2 truncate">
                          <span className="text-slate-500 text-[10px] shrink-0">{log.timestamp}</span>
                          <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold shrink-0 ${badgeColor}`}>
                            {badgeLabel}
                          </span>
                          <span className="text-slate-300 text-[11px] truncate">
                            {summaryText}
                          </span>
                        </div>
                        <button className="text-slate-400 hover:text-slate-200 shrink-0 ml-2">
                          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </button>
                      </div>

                      {isExpanded && (
                        <div className="mt-2 pt-2 border-t border-slate-800 text-[10px] text-slate-300 overflow-x-auto bg-slate-950 p-2 rounded">
                          <pre>{JSON.stringify(log.payload, null, 2)}</pre>
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </div>
        )}

        {activeTab === 'code' && (
          <div>
            {/* Language selector */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              {(
                [
                  { key: 'wolfx_python', label: 'Python (Wolfx EEW)' },
                  { key: 'p2p_node', label: 'Node.js (P2P地震情報 556/551)' },
                  { key: 'csharp', label: 'C# / .NET (全形式統合)' },
                  { key: 'viewer', label: '外部ビューア接続ガイド' },
                ] as const
              ).map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setSelectedLanguage(key)}
                  className={`px-3 py-1.5 rounded text-xs font-semibold transition-colors ${
                    selectedLanguage === key
                      ? 'bg-cyan-600 text-white shadow'
                      : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Code Box */}
            <div className="relative">
              <pre className="bg-slate-950 border border-slate-800 rounded-lg p-3 font-mono text-xs text-slate-300 max-h-72 overflow-y-auto leading-relaxed shadow-inner">
                <code>{codeSnippets[selectedLanguage]}</code>
              </pre>
              <button
                onClick={() => copyToClipboard(codeSnippets[selectedLanguage], 'snippet')}
                className="absolute top-2 right-2 flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-[11px] text-slate-200 border border-slate-700 shadow"
              >
                {copiedUrl === 'snippet' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>コードをコピー</span>
              </button>
            </div>
          </div>
        )}

        {activeTab === 'diagnostics' && (
          <div className="space-y-4">
            {/* Live Connection Test Card */}
            <div className="p-4 rounded-lg bg-slate-950 border border-slate-800">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3">
                <div>
                  <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Wifi className="w-4 h-4 text-cyan-400" />
                    <span>リアルタイム WebSocket 疎通テスト</span>
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    ブラウザから直接WebSocketハンドシェイクを実行し、Ping応答時間や切断コードを診断します。
                  </p>
                </div>
                <button
                  onClick={() => runConnectionTest(allWsUrl)}
                  disabled={testResult.status === 'testing'}
                  className="px-3 py-1.5 rounded bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs flex items-center gap-1.5 shadow transition-colors shrink-0"
                >
                  <Activity className="w-3.5 h-3.5" />
                  <span>{testResult.status === 'testing' ? 'テスト実行中...' : '標準URLで接続テスト'}</span>
                </button>
              </div>

              {testResult.status !== 'idle' && (
                <div
                  className={`p-3 rounded border text-xs font-mono flex items-start gap-2.5 ${
                    testResult.status === 'testing'
                      ? 'bg-blue-950/40 border-blue-800 text-blue-300'
                      : testResult.status === 'success'
                      ? 'bg-emerald-950/40 border-emerald-800 text-emerald-300'
                      : 'bg-rose-950/40 border-rose-800 text-rose-300'
                  }`}
                >
                  {testResult.status === 'testing' && <Activity className="w-4 h-4 animate-spin shrink-0 mt-0.5" />}
                  {testResult.status === 'success' && <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />}
                  {testResult.status === 'error' && <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />}
                  <div className="space-y-1">
                    <div className="font-bold">{testResult.message}</div>
                    {testResult.details && <div className="text-[11px] opacity-90">{testResult.details}</div>}
                    {testResult.latencyMs !== undefined && (
                      <div className="text-[10px] text-emerald-400">
                        Round-Trip Latency: {testResult.latencyMs}ms
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Code 1006 In-Depth Diagnostic Box */}
            <div className="p-4 rounded-lg bg-rose-950/30 border border-rose-800/80 space-y-3 text-xs">
              <div className="font-bold text-rose-300 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-400" />
                <span className="text-sm">コード 1006 (異常切断 / Abnormal Closure) の完全解説と解決策</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                <strong>コード 1006</strong> は、サーバー側から正常な切断電文が届く前に、<strong>TCP接続やSSL暗号化通信がOS/ブラウザ/プロキシによって強制中断された</strong>場合にクライアントが記録するエラーです。以下のいずれかが原因です：
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11px]">
                <div className="p-3 rounded bg-slate-900/90 border border-slate-800 space-y-1.5">
                  <span className="font-bold text-amber-300 flex items-center gap-1">
                    ① クラウドURLへのプロトコル・ポート誤り
                  </span>
                  <p className="text-slate-300 leading-relaxed">
                    ・<strong className="text-white">NG:</strong> <code className="text-rose-300">ws://ais-...:3000</code> (ポート3000指定やws://は拒否されます)<br />
                    ・<strong className="text-emerald-400">OK:</strong> <code className="text-cyan-300 font-bold">{allWsUrl}</code> (必ず <span className="underline">wss://</span> かつポート番号なし)
                  </p>
                </div>

                <div className="p-3 rounded bg-slate-900/90 border border-slate-800 space-y-1.5">
                  <span className="font-bold text-amber-300 flex items-center gap-1">
                    ② ブラウザの Mixed Content / PNA 制限
                  </span>
                  <p className="text-slate-300 leading-relaxed">
                    HTTPSで開いているWebページからローカルIP（<code className="text-slate-400">ws://192.168.x.x</code>）へ接続しようとすると、Chromeのセキュリティ制約（Private Network Access）で自動遮断され <strong>1006</strong> になります。<br />
                    👉 PythonやC#等の外部ネイティブソフトから接続してください。
                  </p>
                </div>

                <div className="p-3 rounded bg-slate-900/90 border border-slate-800 space-y-1.5">
                  <span className="font-bold text-amber-300 flex items-center gap-1">
                    ③ 自宅PCでサーバーが未起動
                  </span>
                  <p className="text-slate-300 leading-relaxed">
                    ローカルIP（<code className="text-slate-400">ws://127.0.0.1:3000</code>）へ外部ソフトから接続する場合、PCのターミナルで <code className="text-cyan-300 font-bold">npm run dev</code> が起動している必要があります。（クラウド上で動いている本アプリとは別物です）
                  </p>
                </div>

                <div className="p-3 rounded bg-slate-900/90 border border-slate-800 space-y-1.5">
                  <span className="font-bold text-amber-300 flex items-center gap-1">
                    ④ パス指定とキープアライブ（対策済）
                  </span>
                  <p className="text-slate-300 leading-relaxed">
                    パスなし（<code className="text-cyan-300">/</code>）や <code className="text-cyan-300">/ws/all</code>、<code className="text-cyan-300">/ws/wolfx</code> のすべてを柔軟に受領し、15秒ごとのPingハートビートでタイムアウト切断を防ぐようサーバーを強化しました。
                  </p>
                </div>
              </div>
            </div>

            {/* Connection Refused & Local IP Guide */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {/* Cloud vs Local Guide */}
              <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 space-y-2">
                <div className="font-bold text-amber-300 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4" />
                  <span>接続先URLの選び方</span>
                </div>
                <div className="text-slate-300 space-y-1.5 text-[11px] leading-relaxed">
                  <p>
                    <strong className="text-white">A. クラウド上の本シミュレータに外部ソフトから繋ぐ場合:</strong>
                    <br />
                    プロトコルは <code className="text-cyan-300 bg-slate-900 px-1 py-0.5 rounded">wss://</code> を指定し、ポート番号（:3000）は<strong>付けない</strong>でください。
                    <br />
                    例: <code className="text-cyan-300">{allWsUrl}</code>
                  </p>
                  <p>
                    <strong className="text-white">B. ご自身のPC（ローカル環境）で実行して繋ぐ場合:</strong>
                    <br />
                    プロジェクトをダウンロードしてターミナルで <code className="text-cyan-300 bg-slate-900 px-1 py-0.5 rounded">npm run dev</code> を起動した状態にしてから、
                    <code className="text-cyan-300 bg-slate-900 px-1 py-0.5 rounded">ws://127.0.0.1:3000/ws/all</code> または
                    <code className="text-cyan-300 bg-slate-900 px-1 py-0.5 rounded">ws://192.168.x.x:3000/ws/all</code> に接続します。
                  </p>
                </div>
              </div>

              {/* Endpoints Summary */}
              <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 space-y-2">
                <div className="font-bold text-cyan-300 flex items-center gap-1.5">
                  <Globe className="w-4 h-4" />
                  <span>形式別 接続URL一覧</span>
                </div>
                <div className="space-y-1.5 text-[11px] font-mono">
                  <div className="p-1.5 rounded bg-slate-900 border border-slate-800">
                    <div className="text-purple-400 font-bold">Wolfx EEW:</div>
                    <div className="text-slate-300 truncate">{wolfxWsUrl}</div>
                  </div>
                  <div className="p-1.5 rounded bg-slate-900 border border-slate-800">
                    <div className="text-cyan-400 font-bold">P2P地震情報 (Code 556/551):</div>
                    <div className="text-slate-300 truncate">{p2pWsUrl}</div>
                  </div>
                  <div className="p-1.5 rounded bg-slate-900 border border-slate-800">
                    <div className="text-slate-400 font-bold">全形式ストリーム:</div>
                    <div className="text-slate-300 truncate">{allWsUrl}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'inject' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-xs text-slate-400">
                形式を選択してカスタムJSON電文を接続クライアント全員へ即座に手動配信テストできます。
              </p>
              <div className="flex items-center gap-1.5 text-xs">
                <span className="text-slate-500 text-[11px]">プリセット読込:</span>
                <button
                  onClick={() => setCustomJson(injectionPresets.wolfx)}
                  className="px-2 py-0.5 rounded bg-purple-950 border border-purple-800 text-purple-300 text-[11px] hover:bg-purple-900"
                >
                  Wolfx EEW
                </button>
                <button
                  onClick={() => setCustomJson(injectionPresets.p2p_556)}
                  className="px-2 py-0.5 rounded bg-cyan-950 border border-cyan-800 text-cyan-300 text-[11px] hover:bg-cyan-900"
                >
                  P2P EEW (556)
                </button>
                <button
                  onClick={() => setCustomJson(injectionPresets.p2p_551)}
                  className="px-2 py-0.5 rounded bg-emerald-950 border border-emerald-800 text-emerald-300 text-[11px] hover:bg-emerald-900"
                >
                  P2P 震度 (551)
                </button>
                <button
                  onClick={() => setCustomJson(injectionPresets.p2p_552)}
                  className="px-2 py-0.5 rounded bg-rose-950 border border-rose-800 text-rose-300 text-[11px] hover:bg-rose-900"
                >
                  P2P 津波 (552)
                </button>
              </div>
            </div>

            <textarea
              value={customJson}
              onChange={(e) => setCustomJson(e.target.value)}
              rows={8}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 font-mono text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
            />
            <div className="flex justify-end">
              <button
                onClick={handleInject}
                disabled={isInjecting}
                className="flex items-center gap-1.5 px-4 py-1.5 rounded bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs transition-colors shadow"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isInjecting ? '送信中...' : '接続クライアントへ送信'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
