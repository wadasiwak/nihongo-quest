# 內容生產指南（內容 agent 必讀）

出題流程：讀本檔 → 讀 `src/content/types.ts`（schema＋各型別完整範例）→ 讀 `src/content/registry.ts` 找到你的單元宣告（expectedCount／optionCount／passageChars／perSet）→ 寫內容檔 → 單檔自驗綠了才交付。

## 鐵則（違反任何一條即重做）

1. **全部原創自撰**。嚴禁抄 JLPT 真題、市售題庫、網路流傳題。題型「格式」照官方，題目「文字」必須新寫。
2. **正解唯一**：干擾項明確錯（文法錯/語意不通/不合語境），不可「也勉強說得通」。
   並べ替え特別要求：其他排列心算一遍，有第二種通順排列就重寫片段切法。
3. 解說繁體中文（台灣用語）40~200 字：正解理由＋至少點出 1 個干擾項為何錯。禁簡體字。
   另有選填 `explanationEn`（英文介面用）：explanation 的語意等值英譯，日文引文照抄、
   ≥20 字元；缺漏時前端 fallback 繁中。
4. 正解一律放 `options[0]`、`answerIndex: 0`（前端顯示時才 shuffle）。
5. id 照 registry：`${unitId}-NNN`（001 起）；小題 `-qN`；不可自創前綴。
6. 難度貼合級別（見下方範圍表）；N5/N4 題幹用分かち書き、少用未學漢字。
7. 檔案格式：只有 `import type { JlptQuestion } from '../../types'` ＋
   `export const questions: JlptQuestion[] = [...]` 的 plain literals。
   不可有 runtime import、函式呼叫、展開運算子。
8. 假名欄位全ひらがな（外來語保留カタカナ＋ー）、助詞照書寫形。

## 自驗（交付前必跑，必須 0 errors）

```
cd ~/nihongo-quest && node scripts/check-content.mjs src/content/jlpt/<level>/<section>-<slug>.ts
```

## 各級範圍提示

| 級 | 語彙量感 | 文型代表（不限於此） | 聽解/文章語感 |
|---|---|---|---|
| N5 | ~800 詞、漢字 ~100 | です・ます、て形、〜てください、〜てもいい、あります/います、〜たい、比較、基礎助詞 | 極短句、日常寒暄購物 |
| N4 | ~1500 詞、漢字 ~300 | 可能形、意向形、〜と/ば/たら、受身、使役、〜てあげる/もらう/くれる、〜ておく、〜てしまう、〜そうだ | 日常對話、簡單通知 |
| N3 | ~3700 詞 | 〜ばかり、〜はずだ、〜わけだ、〜せいで/おかげで、〜たびに、〜うちに、〜ところだ、使役受身、敬語基礎 | 職場生活混合、解說文 |
| N2 | ~6000 詞 | 〜ものの、〜つつ、〜にわたって、〜に際して、〜ざるを得ない、〜かねない、〜がたい、〜ようがない | 評論、報導、商務 |
| N1 | ~10000 詞 | 〜んばかりに、〜ともなると、〜をもって、〜ならでは、〜きらいがある、〜ずくめ、書面語・慣用句 | 社說、抽象論說文 |

## 題型格式速查（詳見 types.ts 註解）

- **kanji（漢字読み）**：stem 短句、目標詞【】、選項全假名；干擾項＝音訓混淆/濁清音/長短音/形近字。
- **hyoki（表記）**：stem 假名詞【】、選項漢字（N5 可含カタカナ）；干擾項＝形近漢字/同音異字。
- **gokeisei（語形成，N2）**：（　）挖空，考接頭接尾語（〜的/〜性/再〜/非〜）與複合語。
- **bunmyaku（文脈規定）**：（　）挖空選詞；干擾項同詞性近義但語境不合。
- **iikae（言い換え類義）**：stem 目標詞【】，選近義；干擾項語意相近但不等值。
- **yoho（用法）**：stem＝目標詞（不用【】記號也可，check 只驗 kanji/hyoki/iikae），4 選項為 4 個使用該詞的句子，僅 1 句用法正確。
- **keishiki（文法形式）**：（　）選文法形式；同一題 4 選項用同一動詞不同活用/類似文型。
- **narabekae（並べ替え★）**：segments 陣列序＝唯一正解；starIndex 分佈平均（0~3 各約 1/4）。
- **bunsho（文章の文法）**：passage 內【１】~【４】挖空、每空一小題（stem「【１】に入るのはどれか。」）。
- **讀解類**：passage 原創書き下ろし、字數照 registry 區間；干擾項＝「文中出現過的字眼但語意不符」。
- **togo（統合理解・讀解）**：passage 含「Ａ」「Ｂ」兩篇對照（check 強制）；小題問兩篇異同。
- **聽解類**：script 口語體（會被 TTS 唸）；干擾項＝「對話中出現但被否定/更正的資訊」；
  kadai/pointo＝男女對話 4~8 行（可開頭旁白一行給場景）；gaiyo＝單人獨白 3~6 行；
  hatsuwa＝旁白 1~2 行情境＋3 選項 spokenOptions:true；sokuji＝單句發話、question 空字串、3 選項 spokenOptions:true。

## 會話場景（kaiwa）與單字卡（cards）

- 場景檔：`src/content/kaiwa/<category>/<name>.ts`、`export const scene: KaiwaScene`；
  id 必須用 registry `KAIWA_SCENE_IDS` 宣告的；對話 2~4 段×6~12 行、常用句 8~15、drills 5~10（id `${sceneId}-001` 起）。
  對話自然口語、有來有往；zh 翻譯自然繁中；含漢字的 ja 行要給 reading（全假名）。
- 卡片檔：`src/content/cards/<level>.ts`、`export const cards: VocabCard[]`；
  id `${level}-card-NNN`；例句原創且含該詞；zh ≤20 字；每批交付以 registry `CARDS_EXPECTED`（80）為完成線。
- 自驗同樣用單檔 check。
