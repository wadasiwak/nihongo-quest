import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    kind: 'choice',
    id: 'n3-vocab-kanji-001',
    stem: '会議の【準備】をしておいてください。',
    options: ['じゅんび', 'じゅんぴ', 'しゅんび', 'じゅうび'],
    answerIndex: 0,
    explanation:
      '「準備」（準備）讀「じゅんび」，「備」在此唸濁音「び」。「じゅんぴ」誤作半濁音「ぴ」；「しゅんび」開頭清音錯誤，應為濁音「じゅ」；「じゅうび」把撥音「ん」誤唸成長音「う」，皆為錯誤讀法。',
    explanationEn:
      '「準備」 (preparation) is read 「じゅんび」, with 「備」 taking the voiced sound 「び」 here. 「じゅんぴ」 wrongly uses the semi-voiced 「ぴ」; 「しゅんび」 starts with an unvoiced syllable where the voiced 「じゅ」 is required; 「じゅうび」 replaces the moraic nasal 「ん」 with the long vowel 「う」. All three are incorrect readings.',
  },
  {
    kind: 'choice',
    id: 'n3-vocab-kanji-002',
    stem: '彼は海外で働いた【経験】があります。',
    options: ['けいけん', 'けいげん', 'きょうけん', 'けけん'],
    answerIndex: 0,
    explanation:
      '「経験」（經驗）讀「けいけん」。「けいげん」把「験」誤唸成濁音「げん」（那是「軽減」的讀法）；「きょうけん」誤用了「経」的另一個音讀「きょう」（如「お経」），此詞不適用；「けけん」漏掉長音「い」，皆不正確。',
    explanationEn:
      '「経験」 (experience) is read 「けいけん」. 「けいげん」 wrongly voices 「験」 as 「げん」 — that is actually the reading of 「軽減」; 「きょうけん」 misapplies the alternative on-reading 「きょう」 of 「経」 (as in 「お経」), which does not fit this word; 「けけん」 drops the long vowel 「い」. None of these are correct.',
  },
  {
    kind: 'choice',
    id: 'n3-vocab-kanji-003',
    stem: '友人の結婚式に【招待】されました。',
    options: ['しょうたい', 'しょたい', 'しょうだい', 'そうたい'],
    answerIndex: 0,
    explanation:
      '「招待」（邀請）讀「しょうたい」。「しょたい」漏了長音「う」，變成「所帯」（家計、家庭）的讀音；「しょうだい」把「待」誤唸成濁音「だい」；「そうたい」開頭少了拗音，是「早退」（早退）的讀音，語意完全不同。',
    explanationEn:
      '「招待」 (invitation) is read 「しょうたい」. 「しょたい」 drops the long vowel 「う」 and becomes the reading of 「所帯」 (household); 「しょうだい」 wrongly voices 「待」 as 「だい」; 「そうたい」 lacks the initial glide and is the reading of 「早退」 (leaving early), a word with a completely different meaning.',
  },
  {
    kind: 'choice',
    id: 'n3-vocab-kanji-004',
    stem: '電車が止まって、会議に【遅刻】してしまった。',
    options: ['ちこく', 'ちごく', 'ちこう', 'おそこく'],
    answerIndex: 0,
    explanation:
      '「遅刻」（遲到）讀「ちこく」，兩字皆取音讀。「ちごく」把「刻」誤唸成濁音「ごく」（那是「地獄（じごく）」給人的錯誤聯想）；「ちこう」字尾誤作長音；「おそこく」誤把「遅」的訓讀「おそ（い）」混進音讀複合詞，皆為錯誤讀法。',
    explanationEn:
      '「遅刻」 (being late) is read 「ちこく」, with both characters taking their on-readings. 「ちごく」 wrongly voices 「刻」 as 「ごく」 — a false association with 「地獄（じごく）」; 「ちこう」 wrongly ends in a long vowel; 「おそこく」 mixes the kun-reading 「おそ（い）」 of 「遅」 into an on-reading compound. All are incorrect.',
  },
  {
    kind: 'choice',
    id: 'n3-vocab-kanji-005',
    stem: '最近、この町の人口が【増える】一方だ。',
    options: ['ふえる', 'ぶえる', 'ぞうえる', 'こえる'],
    answerIndex: 0,
    explanation:
      '「増える」（增加）讀「ふえる」，「増」取訓讀「ふ（える）」。「ぶえる」開頭誤加濁音；「ぞうえる」是把音讀「ぞう」（如「増加」）硬套進訓讀動詞；「こえる」是「超える」（超過）的讀法，語意相近但並非「増える」的唸法。',
    explanationEn:
      '「増える」 (to increase) is read 「ふえる」, with 「増」 taking the kun-reading 「ふ（える）」. 「ぶえる」 wrongly voices the first mora; 「ぞうえる」 forces the on-reading 「ぞう」 (as in 「増加」) into a kun-reading verb; 「こえる」 is the reading of 「超える」 (to exceed) — similar in meaning but not how 「増える」 is read.',
  },
  {
    kind: 'choice',
    id: 'n3-vocab-kanji-006',
    stem: '昨日注文した荷物が今朝【届く】はずです。',
    options: ['とどく', 'とどぐ', 'どどく', 'とずく'],
    answerIndex: 0,
    explanation:
      '「届く」（送達、寄到）讀「とどく」。「とどぐ」字尾誤加濁音；「どどく」開頭誤加濁音，日語和語詞開頭原則上不會無故濁化；「とずく」第二拍讀錯，是不存在的唸法。此動詞為五段活用，字尾清音「く」。',
    explanationEn:
      '「届く」 (to be delivered, to arrive) is read 「とどく」. 「とどぐ」 wrongly voices the final mora; 「どどく」 wrongly voices the initial one — native Japanese words do not normally start with an unmotivated voiced consonant; 「とずく」 misreads the second mora and does not exist. This godan verb ends in the plain 「く」.',
  },
  {
    kind: 'choice',
    id: 'n3-vocab-kanji-007',
    stem: 'プレゼントをきれいな紙で【包む】。',
    options: ['つつむ', 'つづむ', 'ほうむ', 'たたむ'],
    answerIndex: 0,
    explanation:
      '「包む」（包、包裝）讀「つつむ」，兩拍皆為清音。「つづむ」第二拍誤加濁音；「ほうむ」是把音讀「ほう」（如「包装」）硬套進訓讀動詞；「たたむ」是「畳む」（摺疊）的讀法，動作相近但是另一個詞，皆非正解。',
    explanationEn:
      '「包む」 (to wrap) is read 「つつむ」, with both morae unvoiced. 「つづむ」 wrongly voices the second mora; 「ほうむ」 forces the on-reading 「ほう」 (as in 「包装」) into a kun-reading verb; 「たたむ」 is the reading of 「畳む」 (to fold) — a related action but a different word. None of these are correct.',
  },
  {
    kind: 'choice',
    id: 'n3-vocab-kanji-008',
    stem: 'この会社は外国と【貿易】を行っている。',
    options: ['ぼうえき', 'ほうえき', 'ぼえき', 'ぼうえい'],
    answerIndex: 0,
    explanation:
      '「貿易」（貿易）讀「ぼうえき」。「ほうえき」開頭清音錯誤，應為濁音「ぼ」；「ぼえき」漏掉長音「う」；「ぼうえい」是「防衛」（防衛）的讀音，字形發音都相近、很容易混淆，但語意完全不同，皆為錯誤選項。',
    explanationEn:
      '「貿易」 (trade) is read 「ぼうえき」. 「ほうえき」 starts with an unvoiced syllable where the voiced 「ぼ」 is required; 「ぼえき」 drops the long vowel 「う」; 「ぼうえい」 is the reading of 「防衛」 (defense) — close in both form and sound and easy to confuse, but a completely different word. All three options are wrong.',
  },
  {
    kind: 'choice',
    id: 'n3-vocab-kanji-009',
    stem: '進路について先生に【相談】した。',
    options: ['そうだん', 'そうたん', 'しょうだん', 'そだん'],
    answerIndex: 0,
    explanation:
      '「相談」（商量、諮詢）讀「そうだん」，「談」唸濁音「だん」。「そうたん」把「談」誤作清音；「しょうだん」開頭誤加拗音，變成「商談」（商業洽談）的讀音；「そだん」漏掉長音「う」，皆不是正確讀法。',
    explanationEn:
      '「相談」 (consultation, asking for advice) is read 「そうだん」, with 「談」 voiced as 「だん」. 「そうたん」 wrongly leaves 「談」 unvoiced; 「しょうだん」 adds a glide at the start and becomes the reading of 「商談」 (business negotiation); 「そだん」 drops the long vowel 「う」. None are correct readings.',
  },
  {
    kind: 'choice',
    id: 'n3-vocab-kanji-010',
    stem: 'どうぞ【遠慮】しないで食べてください。',
    options: ['えんりょ', 'えんりょう', 'えんり', 'えんじょ'],
    answerIndex: 0,
    explanation:
      '「遠慮」（客氣、顧慮）讀「えんりょ」，字尾是短音「りょ」。「えんりょう」多了長音，是最常見的誤讀；「えんり」漏掉拗音「ょ」；「えんじょ」是「援助」（援助）的讀音，發音相近但為另一個詞，皆為錯誤讀法。',
    explanationEn:
      '「遠慮」 (holding back, reserve) is read 「えんりょ」, ending in the short 「りょ」. 「えんりょう」 adds a long vowel and is the most common misreading; 「えんり」 drops the glide 「ょ」; 「えんじょ」 is the reading of 「援助」 (assistance) — similar in sound but a different word. All are incorrect.',
  },
  {
    kind: 'choice',
    id: 'n3-vocab-kanji-011',
    stem: '引っ越しの手伝いを友達に【頼む】つもりだ。',
    options: ['たのむ', 'たよむ', 'らいむ', 'だのむ'],
    answerIndex: 0,
    explanation:
      '「頼む」（拜託、請託）讀「たのむ」。「たよむ」是和「頼る（たよる）」（依靠）混淆造成的誤讀，送り仮名「む」對應的是「たの（む）」；「らいむ」誤用了音讀「らい」（如「依頼」）；「だのむ」開頭誤加濁音，皆不正確。',
    explanationEn:
      '「頼む」 (to ask, to request) is read 「たのむ」. 「たよむ」 comes from confusing it with 「頼る（たよる）」 (to rely on) — the okurigana 「む」 corresponds to 「たの（む）」; 「らいむ」 misuses the on-reading 「らい」 (as in 「依頼」); 「だのむ」 wrongly voices the first mora. None are correct.',
  },
  {
    kind: 'choice',
    id: 'n3-vocab-kanji-012',
    stem: '週末は家族とゆっくり【過ごす】ことにしている。',
    options: ['すごす', 'すこす', 'かごす', 'とおす'],
    answerIndex: 0,
    explanation:
      '「過ごす」（度過）讀「すごす」，第二拍是濁音「ご」。「すこす」誤作清音；「かごす」是把音讀「か」（如「過去」）硬套進訓讀動詞；「とおす」是「通す」（使通過）的讀法，是另一個詞，皆為錯誤選項。',
    explanationEn:
      '「過ごす」 (to spend time) is read 「すごす」, with the voiced 「ご」 as the second mora. 「すこす」 wrongly leaves it unvoiced; 「かごす」 forces the on-reading 「か」 (as in 「過去」) into a kun-reading verb; 「とおす」 is the reading of 「通す」 (to let through), a different verb. All are wrong options.',
  },
  {
    kind: 'choice',
    id: 'n3-vocab-kanji-013',
    stem: '明日の会議には必ず【出席】してください。',
    options: ['しゅっせき', 'しゅうせき', 'しゅっせい', 'しゅせき'],
    answerIndex: 0,
    explanation:
      '「出席」（出席）讀「しゅっせき」，「出」在此發生促音變化唸「しゅっ」。「しゅうせき」把促音誤唸成長音；「しゅっせい」字尾錯誤，變成「出世」（發跡、升遷）的讀音；「しゅせき」漏掉促音，是「主席」的讀音，皆不正確。',
    explanationEn:
      '「出席」 (attendance) is read 「しゅっせき」; 「出」 undergoes gemination here and becomes 「しゅっ」. 「しゅうせき」 turns the geminate into a long vowel; 「しゅっせい」 has the wrong ending, becoming the reading of 「出世」 (rising in the world, promotion); 「しゅせき」 drops the geminate and is the reading of 「主席」. None are correct.',
  },
  {
    kind: 'choice',
    id: 'n3-vocab-kanji-014',
    stem: '旅行のために毎月【貯金】している。',
    options: ['ちょきん', 'ちょうきん', 'ちょっきん', 'しょきん'],
    answerIndex: 0,
    explanation:
      '「貯金」（存錢、存款）讀「ちょきん」，「貯」是短音「ちょ」。「ちょうきん」誤加長音；「ちょっきん」誤加促音；「しょきん」開頭清音錯誤，應為濁音系的「ちょ」而非「しょ」，三個干擾項都是音節長短與清濁的常見陷阱。',
    explanationEn:
      '「貯金」 (savings, saving money) is read 「ちょきん」, with 「貯」 as the short 「ちょ」. 「ちょうきん」 wrongly adds a long vowel; 「ちょっきん」 wrongly adds a geminate; 「しょきん」 has the wrong initial consonant — it should be 「ちょ」, not 「しょ」. All three distractors are classic traps involving vowel length and consonant quality.',
  },
  {
    kind: 'choice',
    id: 'n3-vocab-kanji-015',
    stem: '事故のせいで道路が【渋滞】している。',
    options: ['じゅうたい', 'じゅたい', 'しゅうたい', 'じゅうだい'],
    answerIndex: 0,
    explanation:
      '「渋滞」（塞車、壅塞）讀「じゅうたい」。「じゅたい」漏掉長音「う」；「しゅうたい」開頭清音錯誤，應為濁音「じゅ」；「じゅうだい」把「滞」誤唸成濁音，變成「重大」（重大）的讀音，語意完全不同，皆為錯誤讀法。',
    explanationEn:
      '「渋滞」 (traffic jam, congestion) is read 「じゅうたい」. 「じゅたい」 drops the long vowel 「う」; 「しゅうたい」 starts with an unvoiced syllable where the voiced 「じゅ」 is required; 「じゅうだい」 wrongly voices 「滞」, becoming the reading of 「重大」 (serious, grave) — a completely different meaning. All are incorrect.',
  },
  {
    kind: 'choice',
    id: 'n3-vocab-kanji-016',
    stem: '来週、入りたい会社の【面接】を受けます。',
    options: ['めんせつ', 'めんぜつ', 'めんせち', 'めいせつ'],
    answerIndex: 0,
    explanation:
      '「面接」（面試）讀「めんせつ」。「めんぜつ」把「接」誤唸成濁音「ぜつ」（那是「絶」的讀音）；「めんせち」字尾錯誤，「接」的音讀是「せつ」不是「せち」；「めいせつ」把撥音「ん」誤唸成長音「い」，皆不是正確讀法。',
    explanationEn:
      '「面接」 (job interview) is read 「めんせつ」. 「めんぜつ」 wrongly voices 「接」 as 「ぜつ」, which is the reading of 「絶」; 「めんせち」 has the wrong ending — the on-reading of 「接」 is 「せつ」, not 「せち」; 「めいせつ」 replaces the moraic nasal 「ん」 with the long vowel 「い」. None are correct readings.',
  },
  {
    kind: 'choice',
    id: 'n3-vocab-kanji-017',
    stem: '地震で窓ガラスが【割れる】かもしれない。',
    options: ['われる', 'わられる', 'かつれる', 'きれる'],
    answerIndex: 0,
    explanation:
      '「割れる」（破裂、碎掉）讀「われる」，「割」取訓讀「わ（れる）」。「わられる」多了一拍，是把「割る」的受身形「割られる」搞混了；「かつれる」誤用音讀「かつ」（如「分割」）；「きれる」是「切れる」（斷掉）的讀法，是另一個動詞。',
    explanationEn:
      '「割れる」 (to break, to shatter) is read 「われる」, with 「割」 taking the kun-reading 「わ（れる）」. 「わられる」 has an extra mora — a confusion with 「割られる」, the passive form of 「割る」; 「かつれる」 misuses the on-reading 「かつ」 (as in 「分割」); 「きれる」 is the reading of 「切れる」 (to snap), a different verb.',
  },
  {
    kind: 'choice',
    id: 'n3-vocab-kanji-018',
    stem: '忘れ物に気づいて、家に【戻る】ことにした。',
    options: ['もどる', 'もとる', 'もどおる', 'かえる'],
    answerIndex: 0,
    explanation:
      '「戻る」（返回、折回）讀「もどる」，第二拍是濁音「ど」。「もとる」誤作清音（受名詞「元（もと）」影響的常見錯誤）；「もどおる」多了不必要的長音；「かえる」是「帰る」（回家）的讀法，語意相近但不是「戻る」的唸法。',
    explanationEn:
      '「戻る」 (to return, to go back) is read 「もどる」, with the voiced 「ど」 as the second mora. 「もとる」 wrongly leaves it unvoiced — a common error influenced by the noun 「元（もと）」; 「もどおる」 adds an unnecessary long vowel; 「かえる」 is the reading of 「帰る」 (to go home) — similar in meaning, but not how 「戻る」 is read.',
  },
  {
    kind: 'choice',
    id: 'n3-vocab-kanji-019',
    stem: '運動したので、【汗】をたくさんかいた。',
    options: ['あせ', 'かん', 'あぜ', 'あし'],
    answerIndex: 0,
    explanation:
      '「汗」（汗水）單獨當名詞時取訓讀「あせ」。「かん」是音讀，只用於「発汗（はっかん）」等複合詞，單獨使用不這樣唸；「あぜ」字尾誤加濁音，是「畦」（田埂）的讀法；「あし」是「足」（腳）的讀法，皆為錯誤選項。',
    explanationEn:
      '「汗」 (sweat) takes the kun-reading 「あせ」 when used as a standalone noun. 「かん」 is the on-reading, used only in compounds such as 「発汗（はっかん）」 — never on its own; 「あぜ」 wrongly voices the final mora and is the reading of 「畦」 (a ridge between rice fields); 「あし」 is the reading of 「足」 (foot). All are wrong options.',
  },
  {
    kind: 'choice',
    id: 'n3-vocab-kanji-020',
    stem: 'この【湖】は日本で一番深いそうだ。',
    options: ['みずうみ', 'こ', 'いずみ', 'みなと'],
    answerIndex: 0,
    explanation:
      '「湖」（湖泊）單獨當名詞時取訓讀「みずうみ」，源自「水の海」。「こ」是音讀，只出現在「湖水（こすい）」「琵琶湖（びわこ）」等複合詞裡；「いずみ」是「泉」（泉水）的讀法；「みなと」是「港」（港口）的讀法，皆不正確。',
    explanationEn:
      '「湖」 (lake) takes the kun-reading 「みずうみ」 as a standalone noun, derived from 「水の海」. 「こ」 is the on-reading, appearing only in compounds like 「湖水（こすい）」 and 「琵琶湖（びわこ）」; 「いずみ」 is the reading of 「泉」 (spring); 「みなと」 is the reading of 「港」 (harbor). None are correct.',
  },
]
