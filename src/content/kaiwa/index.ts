/// <reference types="vite/client" />
/** 會話場景匯總——順序照 registry 的 KAIWA_SCENE_IDS，未收錄的自動缺席。 */
import type { KaiwaScene } from '../types'
import { KAIWA_SCENE_IDS } from '../registry'

const modules = import.meta.glob<{ scene: KaiwaScene }>('./*/*.ts', { eager: true })

export const sceneById: Record<string, KaiwaScene> = {}
for (const mod of Object.values(modules)) {
  if (mod.scene) sceneById[mod.scene.id] = mod.scene
}

export const scenes: KaiwaScene[] = [...KAIWA_SCENE_IDS.tourism, ...KAIWA_SCENE_IDS.business]
  .map((id) => sceneById[id])
  .filter(Boolean)
