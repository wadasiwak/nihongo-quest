---
name: verify
description: Build, launch, and drive nihongo-quest end-to-end to verify changes at the real browser surface.
---

# Verify nihongo-quest

## Launch

- dev: `npm run dev` → http://localhost:5230（strictPort）
- 內容驗證: `npm run check`（全量）｜`npm run check -- src/content/jlpt/n5/vocab-kanji.ts`（單檔）
- build: `npm run build`（tsc -b && vite build；fail-fast，禁止 `build | grep`）
- e2e: `npm run e2e`（自 spawn `vite preview` :5231、finally kill；截圖 /tmp/nihongo-quest-e2e/）
- screenshot: `npm run shot`（:5232，輸出 scripts/shots/，含 iPhone 13 尺寸）

## Drive（Playwright + system Chrome）

- headless 無真實 TTS voice：載頁前 `window.__ttsForceNoVoice = true`（addInitScript）→
  聽解自動進「讀稿模式」，可驗降級 UI；`window.__tts.lastSpoken` 驗播放呼叫。
- view 路由走 hash：`#n5`、`#n5/vocab-kanji`、`#n3/mock`、`#kaiwa/tour-airport`、`#daily`。
  hashToView 嚴格驗證，亂 hash 一律回首頁。
- 進度存 localStorage key `nihongo-quest-save-v1`（zustand persist）；測前清掉可得乾淨狀態。

## 必驗斷言（釘住關鍵設計）

1. GoatCounter path 只回報 pathname（不含 hash/query）。
2. 每日一練：同一天兩次載入題序相同（seed 確定性）。
3. 答錯一題 → 錯題本出現該題（localStorage wrong 有 entry）。
4. 模擬考：Timer 存在；交卷回顧的正解高亮與作答時的選項排列一致（permutation 保存）。
5. 選項 shuffle：drill 同一題重進，正解文字不變（answerIndex 固定、僅顯示序變）。
6. TTS 降級：__ttsForceNoVoice 下聽解顯示 script 全文＋banner，播放鈕 disabled。

## Gotchas

- 內容檔只允許 `import type`（check 用剝型別 data:URL 載入）。
- `import.meta.glob` 收內容：新內容檔落地要重啟 dev server 才會被抓到。
- 截圖必須用 Read 親眼看，e2e 全綠不代表版面沒塌。
- 日文字型走 `.ja` / `:lang(ja)` 規則（Hiragino 系），中文介面字型是 PingFang TC。
