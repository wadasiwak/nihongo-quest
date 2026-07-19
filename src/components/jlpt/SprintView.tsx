/**
 * 考前衝刺——按錯題本＋弱點單元自動組卷（30 題）。
 * 卷首顯示組卷來源明細（錯題／弱點單元／隨機保鮮）；全無紀錄退化為隨機卷並提示。
 * 走既有 QuizSession 引擎（sprint 模式＝逐題即時回饋）；
 * 中斷續做用自己的 pendingSprint 槽（不佔 drill 槽，衝刺與單元練習可同時掛著）。
 * 結束畫面：本次成績＋弱點單元「歷史答對率 → 本次」即時對比（基準在開卷當下快照，
 * 也存進 pendingSession，續做完成後對比仍準確）。
 */
import { useEffect, useState } from 'react'
import type { Level } from '../../content/types'
import { LEVEL_LABEL, SECTION_LABEL, unitById } from '../../content/registry'
import { questionsByUnit } from '../../content/jlpt'
import {
  rebuildPendingPlan,
  sprintPlan,
  type ItemRecord,
  type PendingSession,
  type SessionPlan,
  type SprintMakeup,
} from '../../lib/session'
import { todayKey } from '../../lib/rng'
import { useProgress } from '../../store/progress'
import { useView } from '../../state'
import { sectionLabel, unitTitle, useT } from '../../lib/i18n'
import { QuizSession, type SnapshotState } from '../quiz/QuizSession'
import { SessionResult } from '../quiz/SessionResult'

type WeakBaseline = { unitId: string; attempted: number; correct: number }[]

type PendingInit =
  | { kind: 'none' }
  | { kind: 'resume'; snap: PendingSession; plan: SessionPlan }
  | { kind: 'stale' }

const pct = (correct: number, attempted: number) =>
  attempted === 0 ? 0 : Math.round((correct / attempted) * 100)

/** 弱點單元顯示名：科別＋單元名（跨科組卷，光看單元名不夠定位） */
function weakLabel(unitId: string): string {
  const u = unitById[unitId]
  return u ? `${sectionLabel(u.section, SECTION_LABEL[u.section])}・${unitTitle(u)}` : unitId
}

/** 結束畫面：弱點單元「歷史 → 本次」對比＋標準結果列表；掛載時記下本次衝刺成績 */
function SprintResult({
  level,
  plan,
  records,
  baseline,
  onExit,
}: {
  level: Level
  plan: SessionPlan
  records: (ItemRecord | null)[]
  baseline: WeakBaseline
  onExit: () => void
}) {
  const recordSprint = useProgress((s) => s.recordSprint)
  const T = useT()
  const correct = records.filter((r) => r?.correct).length
  useEffect(() => {
    recordSprint(level, correct, plan.items.length)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const rows = baseline.flatMap((b) => {
    if (b.attempted === 0) return []
    const inSession = plan.items
      .map((it, i) => ({ it, rec: records[i] }))
      .filter((x) => x.it.unitId === b.unitId)
    if (inSession.length === 0) return []
    const now = pct(inSession.filter((x) => x.rec?.correct).length, inSession.length)
    const before = pct(b.correct, b.attempted)
    return [{ unitId: b.unitId, label: weakLabel(b.unitId), before, now, n: inSession.length }]
  })

  return (
    <div>
      {rows.length > 0 && (
        <div className="qz sprint-compare">
          <h3>{T.sprintCompareTitle}</h3>
          <p className="sprint-compare-note">{T.sprintCompareNote}</p>
          {rows.map((r) => (
            <div key={r.unitId} className="sprint-cmp-row">
              <span className="sprint-cmp-name">{r.label}</span>
              <span className="sprint-cmp-nums">
                {r.before}% →{' '}
                <strong className={r.now > r.before ? 'sprint-cmp-up' : r.now < r.before ? 'sprint-cmp-down' : ''}>
                  {r.now}%
                </strong>
                <small>（{T.sprintCompareCount(r.n)}）</small>
              </span>
            </div>
          ))}
        </div>
      )}
      <SessionResult plan={plan} records={records} onExit={onExit} />
    </div>
  )
}

export function SprintView({ level }: { level: Level }) {
  const setView = useView((s) => s.setView)
  const savePendingSprint = useProgress((s) => s.savePendingSprint)
  const clearPendingSprint = useProgress((s) => s.clearPendingSprint)
  const T = useT()
  const [started, setStarted] = useState(false)
  const [resuming, setResuming] = useState(false)

  // 中斷續做快照——掛載時讀一次；重建失敗（內容改版）作廢
  const [pending] = useState<PendingInit>(() => {
    const snap = useProgress.getState().pendingSprint
    if (!snap || snap.kind !== 'sprint' || snap.level !== level) return { kind: 'none' }
    const rebuilt = rebuildPendingPlan(snap, questionsByUnit)
    return rebuilt ? { kind: 'resume', snap, plan: rebuilt } : { kind: 'stale' }
  })
  useEffect(() => {
    if (pending.kind === 'stale') clearPendingSprint()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // 新卷：掛載時組一次（seed 帶時間戳＝每次衝刺一張新卷；同 seed 同卷的確定性給測試釘）
  const [fresh] = useState<{
    plan: SessionPlan
    makeup: SprintMakeup
    baseline: WeakBaseline
  } | null>(() => {
    const { wrong, unitStats } = useProgress.getState()
    const built = sprintPlan(level, questionsByUnit, wrong, unitStats, `sprint-${level}-${Date.now()}`, todayKey())
    if (!built) return null
    // 弱點單元的歷史基準在「開卷當下」快照——之後 recordAnswer 即時累計不影響對比
    const baseline: WeakBaseline = built.makeup.weakUnitIds.map((unitId) => ({
      unitId,
      ...(unitStats[unitId] ?? { attempted: 0, correct: 0 }),
    }))
    return { ...built, baseline }
  })

  const exit = () => setView({ name: 'level', level })
  const canResume = pending.kind === 'resume'
  const activePlan = resuming && pending.kind === 'resume' ? pending.plan : fresh?.plan
  const activeBaseline: WeakBaseline =
    resuming && pending.kind === 'resume' ? pending.snap.sprintWeak ?? [] : fresh?.baseline ?? []

  if (!activePlan || !fresh) {
    return (
      <div className="qz qz-mock-intro">
        <h2>{T.sprintTitle(LEVEL_LABEL[level])}</h2>
        <p className="qz-empty">{T.levelEmpty}</p>
        <div className="qz-actions">
          <button type="button" className="qz-btn qz-btn--primary" onClick={exit}>{T.ret}</button>
        </div>
      </div>
    )
  }

  if (started) {
    const handleSnapshot = (s: SnapshotState) => {
      savePendingSprint({
        kind: 'sprint',
        level,
        questionIds: activePlan.items.map((i) => i.question.id),
        records: s.records,
        idx: s.idx,
        sprintWeak: activeBaseline,
        savedAt: new Date().toISOString(),
      })
    }
    return (
      <QuizSession
        plan={activePlan}
        level={level}
        onExit={exit}
        resume={
          resuming && pending.kind === 'resume'
            ? { idx: pending.snap.idx, records: pending.snap.records }
            : undefined
        }
        onSnapshot={handleSnapshot}
        onClearSnapshot={clearPendingSprint}
        renderResult={(records) => (
          <SprintResult level={level} plan={activePlan} records={records} baseline={activeBaseline} onExit={exit} />
        )}
      />
    )
  }

  const { makeup } = fresh
  return (
    <div className="qz qz-mock-intro">
      <h2>🔥 {T.sprintTitle(LEVEL_LABEL[level])}</h2>
      <ul className="qz-mock-meta">
        <li>{T.sprintIntroCount(fresh.plan.items.length)}</li>
        {makeup.fromWrong > 0 && <li>{T.sprintIntroWrong(makeup.fromWrong)}</li>}
        {makeup.fromWeak > 0 && (
          <li>{T.sprintIntroWeak(makeup.fromWeak, makeup.weakUnitIds.map(weakLabel).join('、'))}</li>
        )}
        {makeup.fromFresh > 0 && <li>{T.sprintIntroFresh(makeup.fromFresh)}</li>}
      </ul>
      {makeup.coldStart && <p className="qz-disclaimer">{T.sprintColdNotice}</p>}
      {canResume && (
        <p className="qz-resume-note">
          ⏸ {T.mockResumeNotice(pending.snap.idx + 1, pending.snap.questionIds.length)}
        </p>
      )}
      <div className="qz-actions">
        {canResume ? (
          <>
            <button
              type="button"
              className="qz-btn qz-btn--primary"
              onClick={() => {
                setResuming(true)
                setStarted(true)
              }}
            >
              {T.continueExam}
            </button>
            <button
              type="button"
              className="qz-btn"
              onClick={() => {
                if (!window.confirm(T.resumeDiscardConfirm)) return
                clearPendingSprint()
                setResuming(false)
                setStarted(true)
              }}
            >
              {T.restartExam}
            </button>
          </>
        ) : (
          <button type="button" className="qz-btn qz-btn--primary" onClick={() => setStarted(true)}>
            {T.startSprint}
          </button>
        )}
        <button type="button" className="qz-btn" onClick={exit}>{T.ret}</button>
      </div>
    </div>
  )
}

export default SprintView
