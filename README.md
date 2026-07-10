# 日語道場 nihongo-quest

JLPT N5～N1 原創練習題（單字・文法・讀解・聽解）＋日本觀光/商務情境會話。
免費、免註冊、無廣告、純靜態網站（GitHub Pages），資料只存在你的瀏覽器。

🔗 https://wadasiwak.github.io/nihongo-quest/

## 功能

- **JLPT 題庫**：照官方「大問のねらい」題型構成（jlpt.jp 覆核）出的原創題，每題附繁中詳解；正解固定存於 `answerIndex`，選項顯示時才隨機排序。
- **聽解**：瀏覽器 Web Speech API 日文 TTS 即時唸題，語速可調（N5 慢速→N1 常速）；無日文語音的環境自動降級為「讀稿模式」，內容照常可用。
- **情境會話**：觀光 7 景＋商務 6 景，對話範本＋常用句＋TTS 朗讀＋練習題。
- **複習工具**：錯題本（1/3/7 天到期重現）、單字卡簡化 SM-2 間隔複習、弱點統計、迷你模擬考（官方配分縮編、估分僅供參考）、每日一練（日期 seed，全球同天同題）。

## 開發

```
npm install
npm run dev        # http://localhost:5230
npm run check      # 內容驗證（CI gate）；單檔：npm run check -- src/content/jlpt/n5/vocab-kanji.ts
npm run build      # tsc -b && vite build
npm run e2e        # 自起 vite preview :5231，Playwright 驗關鍵行為
npm run shot       # :5232 截圖到 scripts/shots/
```

## 內容管線

`src/content/types.ts` 是 schema 兼內容生產規格（每欄位中文註解＋範例）；
`src/content/registry.ts` 宣告全部單元矩陣（83 單元）與 id 治理規則。
內容檔是 plain literals、單檔自包含，`import.meta.glob` 自動收錄——
新內容落地即出現在站上，未收錄的單元自動隱藏（骨架先行、內容漸進）。

### Gotchas

- 內容檔內**只允許 `import type`**：check 用「剝型別→data:URL import」載入，runtime import 會炸。
- 題目 id 前綴必須等於 registry 的 unitId（`n3-vocab-kanji-001`）；全站唯一，check 強制。
- 聽解 `script` 是給 TTS 唸的口語體；Chrome 長句 ~15s 會截斷，`lib/tts.ts` 已按句読点切塊。
- 模擬考選項顯示排列（permutation）存在 session 紀錄裡，交卷回顧才對得上——別改成重新 shuffle。
- 每日一練的 pool 先按 id 排序再 seeded shuffle，別依賴 import 順序。

## 版權

- **程式碼**：© 2026 wadasiwak. All rights reserved.
- **題目與解說文字**：全部原創自撰（JLPT 真題受著作權保護，本站不收錄任何真題）；題型名稱與試題構成屬事實資訊，依 jlpt.jp 公開資料整理。
- **會話與例句**：原創撰寫。
- 本站為個人學習輔助工具，與日本國際交流基金會及 JLPT 主辦單位無關。
