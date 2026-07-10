/**
 * 翻卡複習——佇列＝到期卡（due 早→晚）＋新卡（本 session 上限 10 張）。
 * 點卡翻面；四鈕評分（rateCard），again 回佇列尾。鍵盤 1~4 評分、空白鍵翻面。
 */
import { useEffect, useState } from 'react'
import type { Level, VocabCard } from '../../content/types'
import { cardsByLevel } from '../../content/cards'
import { LEVEL_LABEL } from '../../content/registry'
import { todayKey } from '../../lib/rng'
import type { Rating } from '../../lib/srs'
import { rateForLevel, speak, stopSpeaking } from '../../lib/tts'
import { useProgress } from '../../store/progress'
import './cards.css'

const NEW_CARD_LIMIT = 10
const RATINGS: Rating[] = ['again', 'hard', 'good', 'easy']
const RATING_LABEL: Record<Rating, string> = {
  again: '再來一次', hard: '困難', good: '良好', easy: '簡單',
}

interface QueueInit {
  queue: VocabCard[]
  newIds: Set<string>
}

function buildQueue(level: Level): QueueInit {
  const cards = cardsByLevel[level] ?? []
  const srs = useProgress.getState().srs
  const today = todayKey()
  const due = cards
    .filter((c) => srs[c.id] && srs[c.id].due <= today)
    .sort((a, b) => srs[a.id].due.localeCompare(srs[b.id].due))
  const fresh = cards.filter((c) => !srs[c.id]).slice(0, NEW_CARD_LIMIT)
  return { queue: [...due, ...fresh], newIds: new Set(fresh.map((c) => c.id)) }
}

export function FlashcardSession({ level, onExit }: { level: Level; onExit: () => void }) {
  const rateCard = useProgress((s) => s.rateCard)
  const ttsRate = useProgress((s) => s.settings.ttsRate)
  const rate = ttsRate ?? rateForLevel[level]

  const [init] = useState(() => buildQueue(level))
  const [queue, setQueue] = useState(init.queue)
  const [flipped, setFlipped] = useState(false)
  const [doneCount, setDoneCount] = useState({ review: 0, fresh: 0 })

  // 離開時停掉 TTS
  useEffect(() => () => stopSpeaking(), [])

  const card = queue[0]

  const handleRate = (rating: Rating) => {
    if (!card) return
    rateCard(card.id, rating)
    stopSpeaking()
    setFlipped(false)
    if (rating === 'again') {
      setQueue((q) => [...q.slice(1), q[0]])
    } else {
      setQueue((q) => q.slice(1))
      setDoneCount((d) =>
        init.newIds.has(card.id)
          ? { ...d, fresh: d.fresh + 1 }
          : { ...d, review: d.review + 1 },
      )
    }
  }

  // 鍵盤：空白／Enter 翻面，1~4 評分（高頻操作給快捷鍵）
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!card) return
      if (!flipped && (e.key === ' ' || e.key === 'Enter')) {
        e.preventDefault()
        setFlipped(true)
        return
      }
      if (flipped) {
        const i = ['1', '2', '3', '4'].indexOf(e.key)
        if (i >= 0) handleRate(RATINGS[i])
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  if (init.queue.length === 0) {
    return (
      <div className="fc-view">
        <div className="fc-done">
          <p>今天沒有到期或新的卡片，明天再來吧！</p>
          <button className="fc-flip-btn" onClick={onExit}>返回</button>
        </div>
      </div>
    )
  }

  if (!card) {
    return (
      <div className="fc-view">
        <div className="fc-done">
          <p>本次複習完成 🎉</p>
          <div className="fc-done-num">
            {doneCount.review}<small> 張複習</small>　{doneCount.fresh}<small> 張新學</small>
          </div>
          <p>評「再來一次」的卡已排回今天，之後還會出現。</p>
          <button className="fc-flip-btn" onClick={onExit}>返回</button>
        </div>
      </div>
    )
  }

  const speakTerm = (e: React.MouseEvent) => {
    e.stopPropagation()
    void speak(card.term, { rate })
  }
  const speakExample = (e: React.MouseEvent) => {
    e.stopPropagation()
    void speak(card.example, { rate })
  }

  return (
    <div className="fc-view">
      <div className="fc-top">
        <button className="fc-tts" onClick={onExit}>← 離開</button>
        <span>{LEVEL_LABEL[level]} 單字卡・剩 {queue.length} 張</span>
      </div>

      <div className="fc-stage">
        <div
          className={`fc-card${flipped ? ' fc-flipped' : ''}`}
          onClick={() => setFlipped((f) => !f)}
          role="button"
          aria-label={flipped ? '翻回正面' : '翻到背面'}
        >
          <div className="fc-face fc-front">
            <div className="fc-term" lang="ja">{card.term}</div>
            <button className="fc-tts" onClick={speakTerm}>🔊 發音</button>
            <div className="fc-flip-hint">點卡片翻面（空白鍵）</div>
          </div>
          <div className="fc-face fc-back">
            <div className="fc-reading" lang="ja">{card.reading}</div>
            <span className="fc-pos">{card.pos}</span>
            <div className="fc-zh">{card.zh}</div>
            <div className="fc-example" lang="ja">{card.example}</div>
            <div className="fc-example-zh">{card.exampleZh}</div>
            <button className="fc-tts" onClick={speakExample}>🔊 唸例句</button>
          </div>
        </div>
      </div>

      {flipped
        ? (
          <div className="fc-rates">
            {RATINGS.map((r, i) => (
              <button
                key={r}
                className={`fc-rate${r === 'good' ? ' fc-rate-good' : ''}`}
                onClick={() => handleRate(r)}
              >
                {RATING_LABEL[r]}
                <small>{i + 1}</small>
              </button>
            ))}
          </div>
        )
        : (
          <button className="fc-flip-btn" onClick={() => setFlipped(true)}>
            翻面看答案
          </button>
        )}
    </div>
  )
}
