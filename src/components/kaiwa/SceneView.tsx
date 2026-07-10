/**
 * 場景頁——頂部場景名＋返回，三個 tab：「對話」「常用句」「練習」。
 * 語速：settings.ttsRate ?? rateForLevel[scene.suggestedLevel]。
 * 掛載時 ttsInit()（只查 voice，不發聲）決定播放鈕降級；離開頁面 stopSpeaking()。
 */
import { useEffect, useState } from 'react'
import { sceneById } from '../../content/kaiwa'
import { LEVEL_LABEL } from '../../content/registry'
import { rateForLevel, stopSpeaking, ttsInit } from '../../lib/tts'
import { useProgress } from '../../store/progress'
import { useView } from '../../state'
import { DialoguePlayer } from './DialoguePlayer'
import { PhraseList } from './PhraseList'
import { SceneDrill } from './SceneDrill'
import './kaiwa.css'

type Tab = 'dialogue' | 'phrases' | 'drill'

const TABS: Array<{ key: Tab; label: string }> = [
  { key: 'dialogue', label: '對話' },
  { key: 'phrases', label: '常用句' },
  { key: 'drill', label: '練習' },
]

export function SceneView({ sceneId }: { sceneId: string }) {
  const setView = useView((s) => s.setView)
  const ttsRate = useProgress((s) => s.settings.ttsRate)
  const [tab, setTab] = useState<Tab>('dialogue')
  /** null = 檢查中；false = 確定無日文 voice（播放鈕降級） */
  const [voiceOk, setVoiceOk] = useState<boolean | null>(null)

  useEffect(() => {
    let live = true
    void ttsInit().then((ok) => {
      if (live) setVoiceOk(ok)
    })
    return () => {
      live = false
      stopSpeaking()
    }
  }, [])

  const scene = sceneById[sceneId]
  if (!scene) {
    return (
      <div className="scene-view">
        <div className="scene-head">
          <button type="button" className="scene-back" onClick={() => setView({ name: 'kaiwa' })}>
            ← 返回
          </button>
        </div>
        <div className="kaiwa-empty">找不到這個場景，內容可能還在建置中。</div>
      </div>
    )
  }

  const rate = ttsRate ?? rateForLevel[scene.suggestedLevel]
  const canPlay = voiceOk !== false

  return (
    <div className="scene-view">
      <div className="scene-head">
        <button type="button" className="scene-back" onClick={() => setView({ name: 'kaiwa' })}>
          ← 返回
        </button>
        <div className="scene-head-titles">
          <div className="scene-head-title">
            <span aria-hidden="true">{scene.icon}</span>
            <span>{scene.title}</span>
            <span className="kaiwa-badge">建議 {LEVEL_LABEL[scene.suggestedLevel]}</span>
          </div>
          <div className="scene-head-title-ja">{scene.titleJa}</div>
        </div>
      </div>

      {voiceOk === false && (
        <div className="scene-tts-note">
          此裝置沒有日文語音，播放功能停用——文字內容仍可正常閱讀。
        </div>
      )}

      <div className="scene-tabs" role="tablist">
        {TABS.map(({ key, label }) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={tab === key}
            className={`scene-tab${tab === key ? ' active' : ''}`}
            onClick={() => {
              stopSpeaking()
              setTab(key)
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === 'dialogue' &&
        (scene.dialogues.length === 0 ? (
          <div className="kaiwa-empty">對話內容建置中</div>
        ) : (
          <DialoguePlayer dialogues={scene.dialogues} rate={rate} canPlay={canPlay} />
        ))}
      {tab === 'phrases' && <PhraseList phrases={scene.phrases} rate={rate} canPlay={canPlay} />}
      {tab === 'drill' && <SceneDrill scene={scene} onExit={() => setTab('dialogue')} />}
    </div>
  )
}

export default SceneView
