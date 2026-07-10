/**
 * 對話播放器——每段 Dialogue 一節，整段連播逐行高亮（行間 250ms），
 * 每行有小播放鈕（男/女用 PITCH 區分）。
 * 無日文 voice → 播放鈕全 disabled＋tooltip，文字照常可讀。
 * 播放一律由點擊觸發（iOS gesture 限制），首次播放前 await ttsInit()。
 */
import { useEffect, useRef, useState } from 'react'
import type { Dialogue } from '../../content/types'
import { PITCH, speak, stopSpeaking, ttsInit } from '../../lib/tts'
import { useProgress } from '../../store/progress'

const NO_VOICE_TIP = '此裝置沒有日文語音，無法播放'

interface Props {
  dialogues: Dialogue[]
  rate: number
  /** false = 確定無日文 voice（播放鈕 disabled） */
  canPlay: boolean
}

export function DialoguePlayer({ dialogues, rate, canPlay }: Props) {
  const settings = useProgress((s) => s.settings)
  const updateSettings = useProgress((s) => s.updateSettings)
  /** 目前高亮：{ 段 id, 行 index }；null = 沒在播 */
  const [playing, setPlaying] = useState<{ dialogueId: string; line: number } | null>(null)
  const playSeq = useRef(0)

  useEffect(() => () => stopSpeaking(), [])

  function stop() {
    playSeq.current++
    stopSpeaking()
    setPlaying(null)
  }

  async function playAll(d: Dialogue) {
    await ttsInit()
    const seq = ++playSeq.current
    for (let i = 0; i < d.lines.length; i++) {
      if (playSeq.current !== seq) return
      setPlaying({ dialogueId: d.id, line: i })
      const line = d.lines[i]
      await speak(line.ja, { rate, pitch: PITCH[line.gender] })
      if (playSeq.current !== seq) return
      await new Promise((r) => setTimeout(r, 250))
    }
    if (playSeq.current === seq) setPlaying(null)
  }

  async function playLine(d: Dialogue, i: number) {
    await ttsInit()
    const seq = ++playSeq.current
    setPlaying({ dialogueId: d.id, line: i })
    const line = d.lines[i]
    await speak(line.ja, { rate, pitch: PITCH[line.gender] })
    if (playSeq.current === seq) setPlaying(null)
  }

  return (
    <div>
      <div className="kaiwa-toolbar" style={{ marginBottom: 10 }}>
        <button
          type="button"
          className={`kaiwa-toggle${settings.showFurigana ? ' on' : ''}`}
          onClick={() => updateSettings({ showFurigana: !settings.showFurigana })}
        >
          假名 {settings.showFurigana ? 'ON' : 'OFF'}
        </button>
        <button
          type="button"
          className={`kaiwa-toggle${settings.showTranslation ? ' on' : ''}`}
          onClick={() => updateSettings({ showTranslation: !settings.showTranslation })}
        >
          {settings.showTranslation ? '中文 ON' : '隱藏中文（練聽力）'}
        </button>
      </div>

      {dialogues.map((d) => {
        const isPlayingThis = playing?.dialogueId === d.id
        return (
          <section key={d.id} className="dialogue-section">
            <div className="dialogue-head">
              <h3 className="dialogue-title">{d.title}</h3>
              <div className="dialogue-head-actions">
                <button
                  type="button"
                  className="kaiwa-play-btn"
                  disabled={!canPlay}
                  title={canPlay ? undefined : NO_VOICE_TIP}
                  onClick={() => void playAll(d)}
                >
                  ▶ 整段連播
                </button>
                {isPlayingThis && (
                  <button type="button" className="kaiwa-play-btn" onClick={stop}>
                    ■ 停止
                  </button>
                )}
              </div>
            </div>
            <div className="dialogue-lines">
              {d.lines.map((line, i) => {
                const side = line.gender === '男' ? 'side-left' : 'side-right'
                const speaking = isPlayingThis && playing?.line === i
                return (
                  <div
                    key={i}
                    className={`dialogue-line ${side}${speaking ? ' speaking' : ''}`}
                  >
                    <span className="dialogue-speaker">{line.speaker}</span>
                    <div className="dialogue-bubble">
                      <div className="dialogue-ja">
                        <span>{line.ja}</span>
                        <button
                          type="button"
                          className="kaiwa-line-play"
                          disabled={!canPlay}
                          title={canPlay ? '唸這一行' : NO_VOICE_TIP}
                          aria-label="唸這一行"
                          onClick={() => void playLine(d, i)}
                        >
                          ▶
                        </button>
                      </div>
                      {settings.showFurigana && line.reading && (
                        <div className="dialogue-reading">{line.reading}</div>
                      )}
                      {settings.showTranslation && (
                        <div className="dialogue-zh">{line.zh}</div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        )
      })}
    </div>
  )
}

export default DialoguePlayer
