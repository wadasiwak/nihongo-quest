/**
 * 題組文章面板——可折疊；文章本體以 memo 隔離，同一 passage 的連續小題間不重繪。
 * 引擎以 key={passage.id} 渲染：換新文章才重掛（折疊狀態重設），同文章小題間保留狀態。
 */
import { memo, useState } from 'react'
import type { PassageRef } from '../../lib/session'
import { useT } from '../../lib/i18n'

export interface PassagePanelProps {
  passage: PassageRef
  /** 本題組第幾小題（1 起） */
  index: number
  /** 本題組小題總數 */
  total: number
}

const PassageText = memo(function PassageText({ text }: { text: string }) {
  return (
    <div className="qz-passage-text" lang="ja">
      {text}
    </div>
  )
})

export function PassagePanel({ passage, index, total }: PassagePanelProps) {
  const [collapsed, setCollapsed] = useState(false)
  const T = useT()
  return (
    <section className="qz-passage">
      <button
        type="button"
        className="qz-passage-head"
        onClick={() => setCollapsed((c) => !c)}
        aria-expanded={!collapsed}
      >
        <span className="qz-passage-title" lang="ja">{passage.title || T.passageDefaultTitle}</span>
        <span className="qz-passage-count">{T.passageCount(index, total)}</span>
        <span className="qz-passage-toggle">{collapsed ? T.expand : T.collapse}</span>
      </button>
      {!collapsed && <PassageText text={passage.text} />}
    </section>
  )
}

export default PassagePanel
