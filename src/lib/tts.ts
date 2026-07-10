/**
 * Web Speech API 日文 TTS wrapper。
 * 雷點對策（全部實測過的已知行為）：
 * - getVoices() 首次常回空陣列 → 等 voiceschanged，3 秒 timeout。
 * - Chrome 長 utterance ~15 秒會靜默截斷 → 以句読点切塊逐段 queue（不用 resume() hack）。
 * - iOS 必須由 user gesture 觸發 → 所有 speak 都從 onClick 呼叫，絕不 autoplay。
 * - 無日文 voice（Linux 桌面、部分 WebView）→ jaVoiceAvailable()=false，UI 降級讀稿模式。
 * e2e hook：window.__ttsForceNoVoice = true 可模擬無 voice；dev 下 window.__tts 供斷言。
 */
import type { Level } from '../content/types'

declare global {
  interface Window {
    __ttsForceNoVoice?: boolean
    __tts?: { lastSpoken: string; jaVoiceFound: boolean }
  }
}

/** 各級預設語速（N5 慢速 → N1 常速），可被 settings.ttsRate 覆蓋 */
export const rateForLevel: Record<Level, number> = { n5: 0.75, n4: 0.85, n3: 0.95, n2: 1, n1: 1 }

/** 對話男女聲 pitch（單一 voice 也能區分角色）；旁白用 1 */
export const PITCH: Record<'男' | '女' | '旁白', number> = { 男: 0.85, 女: 1.2, 旁白: 1 }

let jaVoice: SpeechSynthesisVoice | null = null
let initDone = false

export function ttsSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window && !window.__ttsForceNoVoice
}

function pickJaVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  const ja = voices.filter((v) => v.lang.toLowerCase().startsWith('ja'))
  if (ja.length === 0) return null
  const score = (v: SpeechSynthesisVoice) =>
    (v.name.includes('Kyoko') ? 4 : 0) +
    (v.name.includes('Google') ? 3 : 0) +
    (v.localService ? 2 : 0) +
    (v.default ? 1 : 0)
  return [...ja].sort((a, b) => score(b) - score(a))[0]
}

/** 初始化（等 voiceschanged，3s timeout）。冪等；回傳是否找到日文 voice。 */
export async function ttsInit(): Promise<boolean> {
  if (!ttsSupported()) return false
  if (initDone) return jaVoice !== null
  const synth = window.speechSynthesis
  let voices = synth.getVoices()
  if (voices.length === 0) {
    voices = await new Promise<SpeechSynthesisVoice[]>((resolve) => {
      const timer = setTimeout(() => resolve(synth.getVoices()), 3000)
      synth.addEventListener(
        'voiceschanged',
        () => {
          clearTimeout(timer)
          resolve(synth.getVoices())
        },
        { once: true },
      )
    })
  }
  jaVoice = pickJaVoice(voices)
  initDone = true
  if (import.meta.env.DEV || window.__ttsForceNoVoice !== undefined) {
    window.__tts = { lastSpoken: '', jaVoiceFound: jaVoice !== null }
  }
  return jaVoice !== null
}

export function jaVoiceAvailable(): boolean {
  return ttsSupported() && jaVoice !== null
}

/** 句読点切塊（避 Chrome 長 utterance 截斷） */
function chunk(text: string): string[] {
  return text
    .split(/(?<=[。！？?!])/u)
    .map((s) => s.trim())
    .filter(Boolean)
}

function speakChunk(text: string, rate: number, pitch: number): Promise<void> {
  return new Promise((resolve) => {
    const u = new SpeechSynthesisUtterance(text)
    u.lang = 'ja-JP'
    if (jaVoice) u.voice = jaVoice
    u.rate = rate
    u.pitch = pitch
    u.onend = () => resolve()
    u.onerror = () => resolve() // interrupted/cancel 也要 resolve，不讓 UI 卡住
    window.speechSynthesis.speak(u)
  })
}

let speakSeq = 0

/** 唸一段文字（先 cancel 進行中的）。resolve = 唸完或被中斷。 */
export async function speak(text: string, opts: { rate?: number; pitch?: number } = {}): Promise<void> {
  if (!(await ttsInit())) return
  stopSpeaking()
  const seq = ++speakSeq
  if (window.__tts) window.__tts.lastSpoken = text
  for (const part of chunk(text)) {
    if (seq !== speakSeq) return // 被新的 speak 搶走
    await speakChunk(part, opts.rate ?? 1, opts.pitch ?? 1)
  }
}

/** 逐行唸（聽解 script／對話），男女以 pitch 區分，行間停 250ms。 */
export async function speakLines(
  lines: Array<{ text: string; speaker: '男' | '女' | '旁白' }>,
  rate: number,
): Promise<void> {
  if (!(await ttsInit())) return
  stopSpeaking()
  const seq = ++speakSeq
  for (const line of lines) {
    if (seq !== speakSeq) return
    if (window.__tts) window.__tts.lastSpoken = line.text
    for (const part of chunk(line.text)) {
      if (seq !== speakSeq) return
      await speakChunk(part, rate, PITCH[line.speaker])
    }
    await new Promise((r) => setTimeout(r, 250))
  }
}

export function stopSpeaking(): void {
  speakSeq++
  if (ttsSupported()) window.speechSynthesis.cancel()
}
