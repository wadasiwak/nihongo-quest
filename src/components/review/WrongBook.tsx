/**
 * 錯題本——「今日到期」與「全部未克服」兩區＋已克服折疊區。
 * 「重刷到期錯題」以 reviewPlan 組卷交給 QuizSession。
 */
import { useMemo, useState } from 'react'
import type { SessionItem, SessionPlan } from '../../lib/session'
import { itemIndex, reviewPlan } from '../../lib/session'
import { questionsByUnit } from '../../content/jlpt'
import { LEVEL_LABEL, unitById } from '../../content/registry'
import type { WrongEntry } from '../../store/progress'
import { dueWrongIds, useProgress } from '../../store/progress'
import { useView } from '../../state'
import { QuizSession } from '../quiz/QuizSession'
import './review.css'

function previewText(item: SessionItem | undefined): string {
  if (!item) return '（題目已下架，找不到內容）'
  const q = item.question
  let text: string
  if (q.kind === 'choice') text = q.stem
  else if (q.kind === 'order') text = `${q.before}＿＿＿★＿＿＿${q.after}`
  else text = q.question || q.script[0]?.text || '（聽解題）'
  return text.length > 44 ? `${text.slice(0, 44)}…` : text
}

function unitLabel(item: SessionItem | undefined): string | null {
  if (!item) return null
  const u = unitById[item.unitId]
  return u ? `${LEVEL_LABEL[u.level]}・${u.title}` : item.unitId
}

function WrongRow({ id, entry, item, due }: {
  id: string
  entry: WrongEntry
  item: SessionItem | undefined
  due?: boolean
}) {
  const label = unitLabel(item)
  return (
    <li className="rv-item" key={id}>
      <div className="rv-item-stem">{previewText(item)}</div>
      <div className="rv-item-meta">
        {label && <span className="rv-badge">{label}</span>}
        {due && <span className="rv-badge rv-badge-due">今日到期</span>}
        <span>錯 {entry.count} 次</span>
        {entry.cleared
          ? <span>已克服 ✓</span>
          : <span>連對進度 {entry.streak}/2</span>}
        <span>下次複習 {entry.nextDue}</span>
      </div>
    </li>
  )
}

export function WrongBook() {
  const wrong = useProgress((s) => s.wrong)
  const setView = useView((s) => s.setView)
  const [plan, setPlan] = useState<SessionPlan | null>(null)

  const index = useMemo(() => itemIndex(questionsByUnit), [])
  const dueIds = useMemo(
    () => dueWrongIds(wrong).sort((a, b) => wrong[a].nextDue.localeCompare(wrong[b].nextDue)),
    [wrong],
  )
  const dueSet = useMemo(() => new Set(dueIds), [dueIds])
  const uncleared = useMemo(
    () => Object.entries(wrong)
      .filter(([, e]) => !e.cleared)
      .sort(([, a], [, b]) => a.nextDue.localeCompare(b.nextDue)),
    [wrong],
  )
  const cleared = useMemo(
    () => Object.entries(wrong)
      .filter(([, e]) => e.cleared)
      .sort(([, a], [, b]) => b.lastWrongAt.localeCompare(a.lastWrongAt)),
    [wrong],
  )

  if (plan) {
    return <QuizSession plan={plan} onExit={() => setPlan(null)} />
  }

  if (Object.keys(wrong).length === 0) {
    return (
      <div className="rv-view">
        <h2 className="rv-title">錯題本</h2>
        <div className="rv-empty">
          <p>還沒有錯題，去做題吧！</p>
          <p>做題時答錯的題目會自動收進來，隔 1／3／7 天提醒你重刷。</p>
          <button className="rv-btn" onClick={() => setView({ name: 'home' })}>去做題</button>
        </div>
      </div>
    )
  }

  const startReview = () => {
    const p = reviewPlan(dueIds, questionsByUnit)
    if (p) setPlan(p)
  }

  return (
    <div className="rv-view">
      <div className="rv-head">
        <h2 className="rv-title">錯題本</h2>
        <button className="rv-btn" onClick={startReview} disabled={dueIds.length === 0}>
          重刷到期錯題（{dueIds.length}）
        </button>
      </div>
      <p className="rv-sub">答錯後隔 1／3／7 天到期重現；連續答對 2 次即視為克服。</p>

      <h3 className="rv-section-h">今日到期（{dueIds.length}）</h3>
      {dueIds.length === 0
        ? <div className="rv-empty">今天沒有到期的錯題，太棒了！</div>
        : (
          <ul className="rv-list">
            {dueIds.map((id) => (
              <WrongRow key={id} id={id} entry={wrong[id]} item={index.get(id)} due />
            ))}
          </ul>
        )}

      <h3 className="rv-section-h">全部未克服（{uncleared.length}）</h3>
      {uncleared.length === 0
        ? <div className="rv-empty">所有錯題都克服了！</div>
        : (
          <ul className="rv-list">
            {uncleared.map(([id, entry]) => (
              <WrongRow key={id} id={id} entry={entry} item={index.get(id)} due={dueSet.has(id)} />
            ))}
          </ul>
        )}

      {cleared.length > 0 && (
        <details className="rv-details">
          <summary>已克服（{cleared.length}）</summary>
          <ul className="rv-list">
            {cleared.map(([id, entry]) => (
              <WrongRow key={id} id={id} entry={entry} item={index.get(id)} />
            ))}
          </ul>
        </details>
      )}
    </div>
  )
}
