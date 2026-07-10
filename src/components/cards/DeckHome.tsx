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
import { FlashcardSession } from './FlashcardSession'
import './cards.css'

export function DeckHome({ level }: { level?: Level }) {
  const srs = useProgress((s) => s.srs)
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
        <h2 className="dk-title">單字卡</h2>
        <div className="dk-empty">
          <p>單字卡建置中，敬請期待！</p>
          <p>之後會有 N5～N1 各級單字卡，用間隔複習幫你記牢。</p>
        </div>
      </div>
    )
  }

  return (
    <div className="dk-view">
      <h2 className="dk-title">單字卡</h2>
      <p className="dk-sub">間隔複習（SRS）：到期的卡優先，每次最多帶 10 張新卡。</p>
      <div className="dk-grid">
        {available.map((l) => {
          const cards = cardsByLevel[l] ?? []
          const due = cards.filter((c) => srs[c.id] && srs[c.id].due <= today).length
          const fresh = cards.filter((c) => !srs[c.id]).length
          return (
            <div className="dk-card" key={l}>
              <div className="dk-level">{LEVEL_LABEL[l]}</div>
              <div className="dk-stats">
                <span>共 <strong>{cards.length}</strong>張</span>
                <span className="dk-due">今日到期 <strong>{due}</strong>張</span>
                <span>新卡 <strong>{fresh}</strong>張</span>
              </div>
              <button className="fc-flip-btn" onClick={() => setActive(l)}>
                開始複習
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
