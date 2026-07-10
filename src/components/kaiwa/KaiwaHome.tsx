/**
 * 情境會話首頁——「觀光日語」「商務・專業」兩區，scenes 依 category 分組成卡片。
 * scenes 為空 → 「內容建置中」空狀態（骨架先行、內容漸進）。
 */
import { scenes } from '../../content/kaiwa'
import { LEVEL_LABEL } from '../../content/registry'
import type { KaiwaScene } from '../../content/types'
import { useView } from '../../state'
import './kaiwa.css'

const CATEGORIES: Array<{ key: KaiwaScene['category']; label: string }> = [
  { key: 'tourism', label: '觀光日語' },
  { key: 'business', label: '商務・專業' },
]

function SceneCard({ scene }: { scene: KaiwaScene }) {
  const setView = useView((s) => s.setView)
  return (
    <button
      type="button"
      className="kaiwa-card"
      onClick={() => setView({ name: 'scene', sceneId: scene.id })}
    >
      <span className="kaiwa-card-icon" aria-hidden="true">{scene.icon}</span>
      <span className="kaiwa-card-body">
        <span className="kaiwa-card-title">{scene.title}</span>
        <span className="kaiwa-card-title-ja">{scene.titleJa}</span>
        <span className="kaiwa-card-meta">
          <span className="kaiwa-badge">建議 {LEVEL_LABEL[scene.suggestedLevel]}</span>
          <span>{scene.dialogues.length} 段對話・{scene.phrases.length} 常用句</span>
        </span>
      </span>
    </button>
  )
}

export function KaiwaHome() {
  if (scenes.length === 0) {
    return (
      <div className="kaiwa-home">
        <div className="kaiwa-empty">情境會話內容建置中，敬請期待。</div>
      </div>
    )
  }
  return (
    <div className="kaiwa-home">
      {CATEGORIES.map(({ key, label }) => {
        const group = scenes.filter((s) => s.category === key)
        return (
          <section key={key}>
            <h2 className="kaiwa-section-title">{label}</h2>
            {group.length === 0 ? (
              <div className="kaiwa-empty">內容建置中</div>
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
