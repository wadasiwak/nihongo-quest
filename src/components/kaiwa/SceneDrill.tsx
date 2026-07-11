/**
 * 場景練習——把 scene.drills 組成 SessionPlan（mode:'kaiwa'）丟給 QuizSession。
 * drills 空 → 空狀態。
 */
import { useMemo } from 'react'
import type { KaiwaScene } from '../../content/types'
import { shuffleArray, type SessionPlan } from '../../lib/session'
import { QuizSession } from '../quiz/QuizSession'
import { sceneTitle, useT } from '../../lib/i18n'

interface Props {
  scene: KaiwaScene
  onExit: () => void
}

export function SceneDrill({ scene, onExit }: Props) {
  const T = useT()
  const plan = useMemo<SessionPlan>(
    () => ({
      mode: 'kaiwa',
      title: T.sceneDrillTitle(sceneTitle(scene.title, scene.titleJa)),
      items: shuffleArray(scene.drills).map((q) => ({ unitId: scene.id, question: q })),
    }),
    [scene, T],
  )

  if (scene.drills.length === 0) {
    return <div className="kaiwa-empty">{T.sceneDrillEmpty}</div>
  }

  return <QuizSession plan={plan} level={scene.suggestedLevel} onExit={onExit} />
}

export default SceneDrill
