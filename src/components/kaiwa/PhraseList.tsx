/**
 * 常用句列表——ja＋reading＋zh＋note（有才顯示）＋播放鈕；一鍵全部連播（逐句高亮）。
 * 無日文 voice → 播放鈕 disabled＋tooltip，文字照常可讀。
 */
import { useEffect, useRef, useState } from 'react'
import type { Phrase } from '../../content/types'
import { speak, stopSpeaking, ttsInit } from '../../lib/tts'

const NO_VOICE_TIP = '此裝置沒有日文語音，無法播放'

interface Props {
  phrases: Phrase[]
  rate: number
  canPlay: boolean
}

export function PhraseList({ phrases, rate, canPlay }: Props) {
  const [playingIdx, setPlayingIdx] = useState<number | null>(null)
  const [playingAll, setPlayingAll] = useState(false)
  const playSeq = useRef(0)

  useEffect(() => () => stopSpeaking(), [])

  function stop() {
    playSeq.current++
    stopSpeaking()
    setPlayingIdx(null)
    setPlayingAll(false)
  }

  async function playAll() {
    await ttsInit()
    const seq = ++playSeq.current
    setPlayingAll(true)
    for (let i = 0; i < phrases.length; i++) {
      if (playSeq.current !== seq) return
      setPlayingIdx(i)
      await speak(phrases[i].ja, { rate })
      if (playSeq.current !== seq) return
      await new Promise((r) => setTimeout(r, 250))
    }
    if (playSeq.current === seq) {
      setPlayingIdx(null)
      setPlayingAll(false)
    }
  }

  async function playOne(i: number) {
    await ttsInit()
    const seq = ++playSeq.current
    setPlayingAll(false)
    setPlayingIdx(i)
    await speak(phrases[i].ja, { rate })
    if (playSeq.current === seq) setPlayingIdx(null)
  }

  if (phrases.length === 0) {
    return <div className="kaiwa-empty">常用句內容建置中</div>
  }

  return (
    <div>
      <div className="kaiwa-toolbar" style={{ marginBottom: 10 }}>
        <button
          type="button"
          className="kaiwa-play-btn"
          disabled={!canPlay}
          title={canPlay ? undefined : NO_VOICE_TIP}
          onClick={() => void playAll()}
        >
          ▶ 全部連播
        </button>
        {(playingAll || playingIdx !== null) && (
          <button type="button" className="kaiwa-play-btn" onClick={stop}>
            ■ 停止
          </button>
        )}
      </div>
      <div className="phrase-list">
        {phrases.map((p, i) => (
          <div key={i} className={`phrase-row${playingIdx === i ? ' speaking' : ''}`}>
            <button
              type="button"
              className="kaiwa-line-play"
              disabled={!canPlay}
              title={canPlay ? '唸這一句' : NO_VOICE_TIP}
              aria-label="唸這一句"
              onClick={() => void playOne(i)}
            >
              ▶
            </button>
            <div className="phrase-body">
              <div className="phrase-ja">{p.ja}</div>
              {p.reading && <div className="phrase-reading">{p.reading}</div>}
              <div className="phrase-zh">{p.zh}</div>
              {p.note && <div className="phrase-note">💡 {p.note}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PhraseList
