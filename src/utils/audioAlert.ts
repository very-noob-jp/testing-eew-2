/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Web Audio API による緊急地震速報チャイム風アラート音
class AudioManager {
  private ctx: AudioContext | null = null;
  private soundEnabled = true;

  constructor() {
    // ユーザー操作時にコンテキスト初期化
  }

  public setSoundEnabled(enabled: boolean) {
    this.soundEnabled = enabled;
  }

  public isEnabled(): boolean {
    return this.soundEnabled;
  }

  private getContext(): AudioContext | null {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  // 緊急地震速報チャイム音 (2音の上昇和音チャイム)
  public playEEWChime() {
    if (!this.soundEnabled) return;
    try {
      const ctx = this.getContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      // 第1和音 (G4, C5)
      this.playTone(ctx, 392.0, now, 0.45);
      this.playTone(ctx, 523.25, now, 0.45);

      // 第2和音 (C5, E5) 0.35秒後
      this.playTone(ctx, 523.25, now + 0.35, 0.6);
      this.playTone(ctx, 659.25, now + 0.35, 0.6);
    } catch (e) {
      console.warn('Audio playback error', e);
    }
  }

  // キャンセル音 (低音のブザー音)
  public playCancelTone() {
    if (!this.soundEnabled) return;
    try {
      const ctx = this.getContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      this.playTone(ctx, 220.0, now, 0.4);
      this.playTone(ctx, 196.0, now + 0.35, 0.5);
    } catch (e) {
      // ignore
    }
  }

  private playTone(ctx: AudioContext, freq: number, startTime: number, duration: number) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, startTime);

    gain.gain.setValueAtTime(0, startTime);
    gain.gain.linearRampToValueAtTime(0.18, startTime + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(startTime);
    osc.stop(startTime + duration);
  }
}

export const audioAlert = new AudioManager();
