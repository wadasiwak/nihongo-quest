import { useMemo } from 'react'
import { useView } from './state'
import { unitById } from './content/registry'
import { questionsByUnit } from './content/jlpt'
import { dailyPlan, drillPlan } from './lib/session'
import { todayKey } from './lib/rng'
import { Home } from './components/Home'
import { LevelHome } from './components/jlpt/LevelHome'
import { MockExam } from './components/jlpt/MockExam'
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

function Drill({ unitId }: { unitId: string }) {
  const setView = useView((s) => s.setView)
  const plan = useMemo(() => drillPlan(unitId, questionsByUnit), [unitId])
  const unit = unitById[unitId]
  if (!plan || !unit) return <Home />
  return (
    <QuizSession
      plan={plan}
      level={unit.level}
      onExit={() => setView({ name: 'level', level: unit.level })}
    />
  )
}

export default function App() {
  const view = useView((s) => s.view)
  return (
    <div className="app">
      {view.name === 'home' && <Home />}
      {view.name === 'level' && <LevelHome level={view.level} />}
      {view.name === 'drill' && <Drill unitId={view.unitId} />}
      {view.name === 'mock' && <MockExam level={view.level} />}
      {view.name === 'kaiwa' && <KaiwaHome />}
      {view.name === 'scene' && <SceneView sceneId={view.sceneId} />}
      {view.name === 'cards' && <DeckHome />}
      {view.name === 'wrong' && <WrongBook />}
      {view.name === 'stats' && <StatsView />}
      {view.name === 'daily' && <DailyChallenge />}
    </div>
  )
}
