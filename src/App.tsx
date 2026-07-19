import { useMemo, useState, type ReactNode } from 'react'
import { useView } from './state'
import { useT } from './lib/i18n'
import { unitById } from './content/registry'
import { questionsByUnit } from './content/jlpt'
import { dailyPlan, drillPlan, rebuildPendingPlan, sprintPlan } from './lib/session'
import type { Level } from './content/types'
import { todayKey } from './lib/rng'
import { useProgress } from './store/progress'
import { Home } from './components/Home'
import { LevelHome } from './components/jlpt/LevelHome'
import { MockExam } from './components/jlpt/MockExam'
import { SprintView } from './components/jlpt/SprintView'
import { QuizSession } from './components/quiz/QuizSession'
import { KaiwaHome } from './components/kaiwa/KaiwaHome'
import { SceneView } from './components/kaiwa/SceneView'
import { WrongBook } from './components/review/WrongBook'
import { StatsView } from './components/review/StatsView'
import { DailyChallenge } from './components/review/DailyChallenge'
import { DeckHome } from './components/cards/DeckHome'

// e2e hook：驗每日一練 seed 確定性（題目 id 序列，與選項顯示 shuffle 無關）
;(window as unknown as { __nqDailyIds?: () => string[] }).__nqDailyIds = () =>
  dailyPlan(questionsByUnit, todayKey())?.items.map((i) => i.question.id) ?? []

// e2e hook：驗考前衝刺組卷（同 seed 同卷、來源比例）——讀當前 persist 的錯題/單元統計
;(window as unknown as {
  __nqSprintIds?: (level: Level, seed: string) => { ids: string[]; makeup: unknown } | null
}).__nqSprintIds = (level, seed) => {
  const { wrong, unitStats } = useProgress.getState()
  const built = sprintPlan(level, questionsByUnit, wrong, unitStats, seed, todayKey())
  return built ? { ids: built.plan.items.map((i) => i.question.id), makeup: built.makeup } : null
}

function Drill({ unitId }: { unitId: string }) {
  const setView = useView((s) => s.setView)
  const savePendingDrill = useProgress((s) => s.savePendingDrill)
  const clearPendingDrill = useProgress((s) => s.clearPendingDrill)
  /** +1 重產 plan（drillPlan 每次洗牌）並以 key 重掛 session */
  const [shuffleSeed, setShuffleSeed] = useState(0)
  // 本單元的中斷續做快照——掛載時讀一次；重建失敗（內容改版）就當沒有
  const [resumeInit] = useState(() => {
    const snap = useProgress.getState().pendingDrill
    if (!snap || snap.unitId !== unitId) return null
    const rebuilt = rebuildPendingPlan(snap, questionsByUnit)
    return rebuilt ? { snap, plan: rebuilt } : null
  })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const plan = useMemo(
    () => (shuffleSeed === 0 && resumeInit ? resumeInit.plan : drillPlan(unitId, questionsByUnit)),
    [unitId, shuffleSeed],
  )
  const unit = unitById[unitId]
  if (!plan || !unit) return <Home />
  return (
    <QuizSession
      key={shuffleSeed}
      plan={plan}
      level={unit.level}
      onExit={() => setView({ name: 'level', level: unit.level })}
      onReshuffle={() => setShuffleSeed((n) => n + 1)}
      resume={
        shuffleSeed === 0 && resumeInit
          ? { idx: resumeInit.snap.idx, records: resumeInit.snap.records }
          : undefined
      }
      onSnapshot={(s) =>
        savePendingDrill({
          kind: 'drill',
          level: unit.level,
          unitId,
          questionIds: plan.items.map((i) => i.question.id),
          records: s.records,
          idx: s.idx,
          savedAt: new Date().toISOString(),
        })
      }
      onClearSnapshot={clearPendingDrill}
    />
  )
}

/** 沒有自帶返回鈕的頁面，統一加一條「← 首頁」列 */
function WithHomeBar({ children }: { children: ReactNode }) {
  const setView = useView((s) => s.setView)
  const T = useT()
  return (
    <div>
      <button
        className="back-btn"
        style={{ marginBottom: 12 }}
        onClick={() => setView({ name: 'home' })}
      >
        {T.backHome}
      </button>
      {children}
    </div>
  )
}

export default function App() {
  const view = useView((s) => s.view)
  return (
    <div className="app">
      {view.name === 'home' && <Home />}
      {view.name === 'level' && <LevelHome level={view.level} />}
      {view.name === 'drill' && <Drill key={view.unitId} unitId={view.unitId} />}
      {view.name === 'mock' && <MockExam key={view.level} level={view.level} />}
      {view.name === 'sprint' && <SprintView key={view.level} level={view.level} />}
      {view.name === 'kaiwa' && <WithHomeBar><KaiwaHome /></WithHomeBar>}
      {view.name === 'scene' && <SceneView sceneId={view.sceneId} />}
      {view.name === 'cards' && <WithHomeBar><DeckHome /></WithHomeBar>}
      {view.name === 'wrong' && <WithHomeBar><WrongBook /></WithHomeBar>}
      {view.name === 'stats' && <WithHomeBar><StatsView /></WithHomeBar>}
      {view.name === 'daily' && <WithHomeBar><DailyChallenge /></WithHomeBar>}
    </div>
  )
}
