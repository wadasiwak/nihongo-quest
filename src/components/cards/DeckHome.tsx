/**
 * 單字卡牌組首頁——各級（有內容才顯示）總卡數／今日到期／新卡數。
 * 「開始複習」直接在本元件內開 FlashcardSession（可用 level prop 直接進指定級別）。
 */
import { useState } from 'react'
import type { Level } from '../../content/types'
import { cardsByLevel } from '../../content/cards'
import { LEVELS, LEVEL_LABEL } from '../../content/registry'
import { todayKey } from '../../lib/rng'
import { useProgress } from '../../store/progress'
import { useT } from '../../lib/i18n'
import { FlashcardSession } from './FlashcardSession'
import './cards.css'

export function DeckHome({ level }: { level?: Level }) {
  const srs = useProgress((s) => s.srs)
  const T = useT()
  const [active, setActive] = useState<Level | null>(
    level && cardsByLevel[level]?.length ? level : null,
  )

  if (active) {
    return <FlashcardSession level={active} onExit={() => setActive(null)} />
  }

  const today = todayKey()
  const available = LEVELS.filter((l) => (cardsByLevel[l]?.length ?? 0) > 0)

  if (available.length === 0) {
    return (
      <div className="dk-view">
        <h2 className="dk-title">{T.cardsTitle}</h2>
        <div className="dk-empty">
          <p>{T.cardsEmpty1}</p>
          <p>{T.cardsEmpty2}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="dk-view">
      <h2 className="dk-title">{T.cardsTitle}</h2>
      <p className="dk-sub">{T.srsNote}</p>
      <div className="dk-grid">
        {available.map((l) => {
          const cards = cardsByLevel[l] ?? []
          const due = cards.filter((c) => srs[c.id] && srs[c.id].due <= today).length
          const fresh = cards.filter((c) => !srs[c.id]).length
          return (
            <div className="dk-card" key={l}>
              <div className="dk-level">{LEVEL_LABEL[l]}</div>
              <div className="dk-stats">
                <span>{T.totalCards(cards.length)}</span>
                <span className="dk-due">{T.dueCards(due)}</span>
                <span>{T.newCards(fresh)}</span>
              </div>
              <button className="fc-flip-btn" onClick={() => setActive(l)}>
                {T.startReview}
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
