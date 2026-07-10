/**
 * 情境會話首頁——「觀光日語」「商務・專業」兩區，scenes 依 category 分組成卡片。
 * scenes 為空 → 「內容建置中」空狀態（骨架先行、內容漸進）。
 */
import { scenes } from '../../content/kaiwa'
import { LEVEL_LABEL } from '../../content/registry'
import type { KaiwaScene } from '../../content/types'
import { useView } from '../../state'
import { sceneTitle, useT } from '../../lib/i18n'
import './kaiwa.css'

const CATEGORIES: Array<{ key: KaiwaScene['category']; labelKey: 'catTourism' | 'catBusiness' }> = [
  { key: 'tourism', labelKey: 'catTourism' },
  { key: 'business', labelKey: 'catBusiness' },
]

function SceneCard({ scene }: { scene: KaiwaScene }) {
  const setView = useView((s) => s.setView)
  const T = useT()
  return (
    <button
      type="button"
      className="kaiwa-card"
      onClick={() => setView({ name: 'scene', sceneId: scene.id })}
    >
      <span className="kaiwa-card-icon" aria-hidden="true">{scene.icon}</span>
      <span className="kaiwa-card-body">
        <span className="kaiwa-card-title">{sceneTitle(scene.title, scene.titleJa)}</span>
        <span className="kaiwa-card-title-ja">{scene.titleJa}</span>
        <span className="kaiwa-card-meta">
          <span className="kaiwa-badge">{T.suggested(LEVEL_LABEL[scene.suggestedLevel])}</span>
          <span>{T.sceneMeta(scene.dialogues.length, scene.phrases.length)}</span>
        </span>
      </span>
    </button>
  )
}

export function KaiwaHome() {
  const T = useT()
  if (scenes.length === 0) {
    return (
      <div className="kaiwa-home">
        <div className="kaiwa-empty">{T.kaiwaEmpty}</div>
      </div>
    )
  }
  return (
    <div className="kaiwa-home">
      {CATEGORIES.map(({ key, labelKey }) => {
        const group = scenes.filter((s) => s.category === key)
        return (
          <section key={key}>
            <h2 className="kaiwa-section-title">{T[labelKey]}</h2>
            {group.length === 0 ? (
              <div className="kaiwa-empty">{T.building}</div>
            ) : (
              <div className="kaiwa-grid">
                {group.map((scene) => (
                  <SceneCard key={scene.id} scene={scene} />
                ))}
              </div>
            )}
          </section>
        )
      })}
    </div>
  )
}

export default KaiwaHome
