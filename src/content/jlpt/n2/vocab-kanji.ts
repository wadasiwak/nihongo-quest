import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    kind: 'choice',
    id: 'n2-vocab-kanji-001',
    stem: '地球の【環境】を守るために、一人ひとりができることを考えよう。',
    options: ['かんきょう', 'かんきょ', 'がんきょう', 'かんこう'],
    answerIndex: 0,
    explanation:
      '「環境」（環境）讀「かんきょう」，「境」在此取音讀「きょう」。「かんきょ」漏掉字尾長音；「がんきょう」開頭誤加濁音，變成「頑強」的讀音；「かんこう」漏掉拗音「ょ」的位置且誤讀，是「観光」（觀光）的讀音，皆不正確。',
    explanationEn:
      '「環境」 (environment) is read 「かんきょう」, with 「境」 taking the on-reading 「きょう」 here. 「かんきょ」 drops the final long vowel; 「がんきょう」 wrongly voices the initial consonant, producing the reading of 「頑強」 (stubborn); 「かんこう」 misreads the second kanji and is actually the reading of 「観光」 (sightseeing).',
  },
  {
    kind: 'choice',
    id: 'n2-vocab-kanji-002',
    stem: '不要なデータをまとめて【削除】した。',
    options: ['さくじょ', 'さくじょう', 'せつじょ', 'しゃくじょ'],
    answerIndex: 0,
    explanation:
      '「削除」（刪除）讀「さくじょ」，字尾是短音「じょ」。「さくじょう」誤加長音；「せつじょ」把「削」誤讀成「切」的音讀「せつ」，變成「切除」（切除）的讀音；「しゃくじょ」誤加拗音，「削」的音讀是「さく」不是「しゃく」，皆為錯誤讀法。',
    explanationEn:
      '「削除」 (deletion) is read 「さくじょ」, ending in the short syllable 「じょ」. 「さくじょう」 wrongly lengthens the final vowel; 「せつじょ」 misreads 「削」 with the on-reading of 「切」, giving the reading of 「切除」 (excision); 「しゃくじょ」 adds a false palatalized sound — the on-reading of 「削」 is 「さく」, not 「しゃく」.',
  },
  {
    kind: 'choice',
    id: 'n2-vocab-kanji-003',
    stem: 'この件は影響が大きいので、【慎重】に判断すべきだ。',
    options: ['しんちょう', 'しんじゅう', 'しんちょ', 'じんちょう'],
    answerIndex: 0,
    explanation:
      '「慎重」（慎重、謹慎）讀「しんちょう」，「重」在此唸「ちょう」。「しんじゅう」把「重」誤讀成「じゅう」（如「体重」），且變成「心中」（殉情）的讀音；「しんちょ」漏掉字尾長音；「じんちょう」開頭誤加濁音，皆不是正確讀法。',
    explanationEn:
      '「慎重」 (careful, cautious) is read 「しんちょう」; 「重」 is read 「ちょう」 here. 「しんじゅう」 misreads 「重」 as 「じゅう」 (as in 「体重」) and happens to be the reading of 「心中」 (lovers\' suicide); 「しんちょ」 drops the final long vowel; 「じんちょう」 wrongly voices the initial consonant.',
  },
  {
    kind: 'choice',
    id: 'n2-vocab-kanji-004',
    stem: 'ここ数年、この地域の観光客は【著しい】増加を見せている。',
    options: ['いちじるしい', 'いちじろしい', 'ちょじるしい', 'おびただしい'],
    answerIndex: 0,
    explanation:
      '「著しい」（顯著的）讀「いちじるしい」，「著」取訓讀「いちじる（しい）」。「いちじろしい」第四拍讀錯；「ちょじるしい」把音讀「ちょ」（如「著者」）硬套進訓讀形容詞；「おびただしい」是「夥しい」（大量的）的讀法，是另一個詞，皆為錯誤選項。',
    explanationEn:
      '「著しい」 (remarkable, striking) is read 「いちじるしい」, using the kun-reading 「いちじる（しい）」. 「いちじろしい」 gets the fourth mora wrong; 「ちょじるしい」 forces the on-reading 「ちょ」 (as in 「著者」) into a kun-read adjective; 「おびただしい」 is the reading of 「夥しい」 (a huge amount of), a completely different word.',
  },
  {
    kind: 'choice',
    id: 'n2-vocab-kanji-005',
    stem: '輸出がこの会社の売り上げの大半を【占める】。',
    options: ['しめる', 'せめる', 'せんめる', 'とめる'],
    answerIndex: 0,
    explanation:
      '「占める」（占據、占有）讀「しめる」，「占」取訓讀「し（める）」。「せめる」是「攻める」（進攻）的讀法；「せんめる」是把音讀「せん」（如「占領」）硬套進訓讀動詞的錯誤；「とめる」是「止める」（停止）的讀法，皆與「占める」無關。',
    explanationEn:
      '「占める」 (to occupy, to account for) is read 「しめる」, using the kun-reading 「し（める）」. 「せめる」 is the reading of 「攻める」 (to attack); 「せんめる」 mistakenly forces the on-reading 「せん」 (as in 「占領」) into a kun-read verb; 「とめる」 is the reading of 「止める」 (to stop). None of them relate to 「占める」.',
  },
  {
    kind: 'choice',
    id: 'n2-vocab-kanji-006',
    stem: 'この価格には消費税を【含む】と書いてある。',
    options: ['ふくむ', 'ふぐむ', 'がんむ', 'つつむ'],
    answerIndex: 0,
    explanation:
      '「含む」（包含）讀「ふくむ」，兩拍皆為清音。「ふぐむ」第二拍誤加濁音；「がんむ」是把音讀「がん」（如「含有」）硬套進訓讀動詞；「つつむ」是「包む」（包裹）的讀法，語意相近但是另一個詞，皆不是「含む」的正確讀法。',
    explanationEn:
      '「含む」 (to include, to contain) is read 「ふくむ」, with every mora unvoiced. 「ふぐむ」 wrongly voices the second mora; 「がんむ」 forces the on-reading 「がん」 (as in 「含有」) into a kun-read verb; 「つつむ」 is the reading of 「包む」 (to wrap) — close in meaning, but a different word.',
  },
  {
    kind: 'choice',
    id: 'n2-vocab-kanji-007',
    stem: 'イベントの参加者を全国から【募る】ことになった。',
    options: ['つのる', 'つもる', 'ぼる', 'のぼる'],
    answerIndex: 0,
    explanation:
      '「募る」（募集、招募；也指情緒愈發強烈）讀「つのる」。「つもる」是「積もる」（堆積）的讀法，假名形近容易混淆；「ぼる」是把音讀「ぼ」（如「募集」）硬套進訓讀動詞；「のぼる」是「登る」（攀登）的讀法，皆為錯誤選項。',
    explanationEn:
      '「募る」 (to recruit, to solicit; also, of feelings, to grow stronger) is read 「つのる」. 「つもる」 is the reading of 「積もる」 (to pile up), deceptively similar in kana; 「ぼる」 forces the on-reading 「ぼ」 (as in 「募集」) into a kun-read verb; 「のぼる」 is the reading of 「登る」 (to climb).',
  },
  {
    kind: 'choice',
    id: 'n2-vocab-kanji-008',
    stem: '経験の不足は、日々の努力で【補う】しかない。',
    options: ['おぎなう', 'おきなう', 'ほなう', 'やしなう'],
    answerIndex: 0,
    explanation:
      '「補う」（彌補、補足）讀「おぎなう」，第二拍是濁音「ぎ」。「おきなう」誤作清音；「ほなう」是把音讀「ほ」（如「補充」）硬套進訓讀動詞；「やしなう」是「養う」（養育）的讀法，送り仮名同為「う」容易看錯，但是另一個詞。',
    explanationEn:
      '「補う」 (to make up for, to supplement) is read 「おぎなう」, with the voiced 「ぎ」 as the second mora. 「おきなう」 mistakenly leaves it unvoiced; 「ほなう」 forces the on-reading 「ほ」 (as in 「補充」) into a kun-read verb; 「やしなう」 is the reading of 「養う」 (to raise, to support) — the shared okurigana 「う」 makes it easy to misread, but it is a different word.',
  },
  {
    kind: 'choice',
    id: 'n2-vocab-kanji-009',
    stem: '台風によって農作物に大きな【損害】が出た。',
    options: ['そんがい', 'そんかい', 'ぞんがい', 'そこない'],
    answerIndex: 0,
    explanation:
      '「損害」（損害、損失）讀「そんがい」，「害」唸濁音「がい」。「そんかい」把「害」誤作清音；「ぞんがい」開頭誤加濁音，變成「存外」（意外地）的讀音；「そこない」是把「損なう」的訓讀「そこ（なう）」誤套進音讀複合詞，皆不正確。',
    explanationEn:
      '「損害」 (damage, loss) is read 「そんがい」, with 「害」 taking the voiced 「がい」. 「そんかい」 leaves 「害」 unvoiced; 「ぞんがい」 wrongly voices the initial and is actually the reading of 「存外」 (unexpectedly); 「そこない」 misapplies the kun-reading 「そこ（なう）」 of 「損なう」 to an on-read compound.',
  },
  {
    kind: 'choice',
    id: 'n2-vocab-kanji-010',
    stem: '売り上げの減少で、事業の【縮小】を迫られている。',
    options: ['しゅくしょう', 'しゅくしょ', 'しゅくじょう', 'ちぢしょう'],
    answerIndex: 0,
    explanation:
      '「縮小」（縮小）讀「しゅくしょう」。「しゅくしょ」漏掉字尾長音，變成「宿所」的讀音；「しゅくじょう」把「小」誤唸成濁音「じょう」；「ちぢしょう」是把「縮」的訓讀「ちぢ（む）」誤混進音讀複合詞，皆為錯誤讀法。',
    explanationEn:
      '「縮小」 (reduction, downsizing) is read 「しゅくしょう」. 「しゅくしょ」 drops the final long vowel and becomes the reading of 「宿所」 (lodging); 「しゅくじょう」 wrongly voices 「小」 as 「じょう」; 「ちぢしょう」 mixes the kun-reading 「ちぢ（む）」 of 「縮」 into an on-read compound.',
  },
  {
    kind: 'choice',
    id: 'n2-vocab-kanji-011',
    stem: '新しい制度に対して、社員から強い【抵抗】があった。',
    options: ['ていこう', 'ていごう', 'てこう', 'たいこう'],
    answerIndex: 0,
    explanation:
      '「抵抗」（抵抗、反抗）讀「ていこう」。「ていごう」把「抗」誤唸成濁音「ごう」；「てこう」漏掉「てい」的長音；「たいこう」是「対抗」（對抗）的讀音，「抵」與「対」語意相近且讀音接近，是典型的形近字陷阱，皆不是正解。',
    explanationEn:
      '「抵抗」 (resistance, opposition) is read 「ていこう」. 「ていごう」 wrongly voices 「抗」 as 「ごう」; 「てこう」 drops the long vowel of 「てい」; 「たいこう」 is the reading of 「対抗」 (rivalry) — 「抵」 and 「対」 are close in both meaning and sound, making this a classic look-alike trap.',
  },
  {
    kind: 'choice',
    id: 'n2-vocab-kanji-012',
    stem: '親の意見に【逆らって】、彼は留学を決めた。',
    options: ['さからって', 'ぎゃくらって', 'さかろって', 'したがって'],
    answerIndex: 0,
    explanation:
      '「逆らう」（違逆、違抗）讀「さからう」，題中活用形讀「さからって」。「ぎゃくらって」是把音讀「ぎゃく」（如「逆転」）硬套進訓讀動詞；「さかろって」第三拍讀錯；「したがって」是「従う」（服從）的活用形，語意正好相反，皆為錯誤選項。',
    explanationEn:
      '「逆らう」 (to go against, to defy) is read 「さからう」, so the inflected form in the sentence is 「さからって」. 「ぎゃくらって」 forces the on-reading 「ぎゃく」 (as in 「逆転」) into a kun-read verb; 「さかろって」 gets the third mora wrong; 「したがって」 is the -te form of 「従う」 (to obey), which means the exact opposite.',
  },
  {
    kind: 'choice',
    id: 'n2-vocab-kanji-013',
    stem: '何度失敗しても、夢を【諦める】つもりはない。',
    options: ['あきらめる', 'あきなめる', 'ていめる', 'やめる'],
    answerIndex: 0,
    explanation:
      '「諦める」（放棄、死心）讀「あきらめる」。「あきなめる」第三拍讀錯；「ていめる」是把音讀「てい」（如「諦観」）硬套進訓讀動詞；「やめる」是「辞める・止める」（辭掉、停止）的讀法，語意相近但並非「諦める」的唸法，皆不正確。',
    explanationEn:
      '「諦める」 (to give up) is read 「あきらめる」. 「あきなめる」 gets the third mora wrong; 「ていめる」 forces the on-reading 「てい」 (as in 「諦観」) into a kun-read verb; 「やめる」 is the reading of 「辞める・止める」 (to quit, to stop) — similar in meaning, but not how 「諦める」 is read.',
  },
  {
    kind: 'choice',
    id: 'n2-vocab-kanji-014',
    stem: '子どものころから都会の暮らしに【憧れて】いた。',
    options: ['あこがれて', 'あこかれて', 'しょうれて', 'おとずれて'],
    answerIndex: 0,
    explanation:
      '「憧れる」（憧憬、嚮往）讀「あこがれる」，題中活用形讀「あこがれて」，第三拍是濁音「が」。「あこかれて」誤作清音；「しょうれて」是把音讀「しょう」（如「憧憬」）硬套進訓讀動詞；「おとずれて」是「訪れる」（造訪）的活用形，皆為錯誤讀法。',
    explanationEn:
      '「憧れる」 (to yearn for, to admire) is read 「あこがれる」, so the form in the sentence is 「あこがれて」, with the voiced 「が」 as the third mora. 「あこかれて」 leaves it unvoiced; 「しょうれて」 forces the on-reading 「しょう」 (as in 「憧憬」) into a kun-read verb; 「おとずれて」 is the -te form of 「訪れる」 (to visit).',
  },
  {
    kind: 'choice',
    id: 'n2-vocab-kanji-015',
    stem: 'この博物館には【貴重】な資料が数多く保存されている。',
    options: ['きちょう', 'きじゅう', 'きちょ', 'ぎちょう'],
    answerIndex: 0,
    explanation:
      '「貴重」（貴重、寶貴）讀「きちょう」，「重」在此唸「ちょう」。「きじゅう」把「重」誤讀成「じゅう」（如「重量」）；「きちょ」漏掉字尾長音；「ぎちょう」開頭誤加濁音，變成「議長」（主席）的讀音，皆不是正確讀法。',
    explanationEn:
      '「貴重」 (precious, valuable) is read 「きちょう」; 「重」 is read 「ちょう」 here. 「きじゅう」 misreads 「重」 as 「じゅう」 (as in 「重量」); 「きちょ」 drops the final long vowel; 「ぎちょう」 wrongly voices the initial and is actually the reading of 「議長」 (chairperson).',
  },
  {
    kind: 'choice',
    id: 'n2-vocab-kanji-016',
    stem: '両者が少しずつ【妥協】して、ようやく合意に達した。',
    options: ['だきょう', 'たきょう', 'だきょ', 'だこう'],
    answerIndex: 0,
    explanation:
      '「妥協」（妥協、讓步）讀「だきょう」，開頭是濁音「だ」。「たきょう」誤作清音；「だきょ」漏掉字尾長音；「だこう」漏掉拗音「ょ」且誤讀，「協」的音讀是「きょう」不是「こう」，三個干擾項都是清濁與音節長短的常見陷阱。',
    explanationEn:
      '「妥協」 (compromise) is read 「だきょう」, starting with the voiced 「だ」. 「たきょう」 leaves the initial unvoiced; 「だきょ」 drops the final long vowel; 「だこう」 loses the palatalized 「ょ」 and misreads — the on-reading of 「協」 is 「きょう」, not 「こう」. All three distractors are classic voicing and vowel-length traps.',
  },
  {
    kind: 'choice',
    id: 'n2-vocab-kanji-017',
    stem: '出発の日が【迫って】きて、準備に追われている。',
    options: ['せまって', 'はくって', 'せばまって', 'しまって'],
    answerIndex: 0,
    explanation:
      '「迫る」（迫近、逼近）讀「せまる」，題中活用形讀「せまって」。「はくって」是把音讀「はく」（如「迫力」）硬套進訓讀動詞；「せばまって」是「狭まる」（變窄）的活用形，字形語感相近但是另一個詞；「しまって」是「閉まる」的活用形，皆不正確。',
    explanationEn:
      '「迫る」 (to draw near, to press) is read 「せまる」, so the form in the sentence is 「せまって」. 「はくって」 forces the on-reading 「はく」 (as in 「迫力」) into a kun-read verb; 「せばまって」 is the -te form of 「狭まる」 (to narrow), similar in look and feel but a different word; 「しまって」 is the -te form of 「閉まる」 (to close).',
  },
  {
    kind: 'choice',
    id: 'n2-vocab-kanji-018',
    stem: '政府は企業に対して賃上げを【促して】いる。',
    options: ['うながして', 'うなかして', 'そくして', 'ほどこして'],
    answerIndex: 0,
    explanation:
      '「促す」（催促、促使）讀「うながす」，題中活用形讀「うながして」，第三拍是濁音「が」。「うなかして」誤作清音；「そくして」是把音讀「そく」（如「促進」）硬套進訓讀動詞，變成「即して」的讀音；「ほどこして」是「施す」（施行）的活用形，皆為錯誤選項。',
    explanationEn:
      '「促す」 (to urge, to prompt) is read 「うながす」, so the form here is 「うながして」, with the voiced 「が」 as the third mora. 「うなかして」 leaves it unvoiced; 「そくして」 forces the on-reading 「そく」 (as in 「促進」) into a kun-read verb, producing the reading of 「即して」; 「ほどこして」 is the -te form of 「施す」 (to carry out, to give).',
  },
  {
    kind: 'choice',
    id: 'n2-vocab-kanji-019',
    stem: '海外でも日本のアニメへの【需要】が高まっている。',
    options: ['じゅよう', 'じゅうよう', 'しゅよう', 'じゅよ'],
    answerIndex: 0,
    explanation:
      '「需要」（需求）讀「じゅよう」，「需」是短音「じゅ」。「じゅうよう」誤加長音，變成「重要」（重要）的讀音，是最經典的混淆；「しゅよう」開頭清音錯誤，變成「主要」（主要）的讀音；「じゅよ」漏掉字尾長音，變成「授与」（授予）的讀音，皆不正確。',
    explanationEn:
      '「需要」 (demand) is read 「じゅよう」, with a short 「じゅ」. 「じゅうよう」 adds a long vowel and becomes the reading of 「重要」 (important) — the most classic mix-up; 「しゅよう」 has an unvoiced initial and is the reading of 「主要」 (main); 「じゅよ」 drops the final long vowel, becoming the reading of 「授与」 (conferment).',
  },
  {
    kind: 'choice',
    id: 'n2-vocab-kanji-020',
    stem: '若者の間では、車を持たない【傾向】が強まっている。',
    options: ['けいこう', 'けいごう', 'きょうこう', 'けいこ'],
    answerIndex: 0,
    explanation:
      '「傾向」（傾向、趨勢）讀「けいこう」。「けいごう」把「向」誤唸成濁音「ごう」；「きょうこう」誤用了「傾」不存在的拗音讀法，且變成「強行」的讀音；「けいこ」漏掉字尾長音，變成「稽古」（練習、學藝）的讀音，語意完全不同，皆為錯誤讀法。',
    explanationEn:
      '「傾向」 (tendency, trend) is read 「けいこう」. 「けいごう」 wrongly voices 「向」 as 「ごう」; 「きょうこう」 applies a palatalized reading that 「傾」 does not have and becomes the reading of 「強行」 (forcing through); 「けいこ」 drops the final long vowel and becomes the reading of 「稽古」 (practice, training), a completely different word.',
  },
]
