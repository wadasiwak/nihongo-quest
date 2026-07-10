/**
 * 場景練習——把 scene.drills 組成 SessionPlan（mode:'kaiwa'）丟給 QuizSession。
 * drills 空 → 空狀態。
 */
import { useMemo } from 'react'
import type { KaiwaScene } from '../../content/types'
import type { SessionPlan } from '../../lib/session'
import { QuizSession } from '../quiz/QuizSession'

interface Props {
  scene: KaiwaScene
  onExit: () => void
}

export function SceneDrill({ scene, onExit }: Props) {
  const plan = useMemo<SessionPlan>(
    () => ({
      mode: 'kaiwa',
      title: `${scene.title}練習`,
      items: scene.drills.map((q) => ({ unitId: scene.id, question: q })),
    }),
    [scene],
  )

  if (scene.drills.length === 0) {
    return <div className="kaiwa-empty">練習題建置中</div>
  }

  return <QuizSession plan={plan} level={scene.suggestedLevel} onExit={onExit} />
}

export default SceneDrill
