import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    kind: 'choice',
    id: 'n1-vocab-kanji-001',
    stem: '新薬の効果は高齢層で特に【顕著】に現れた。',
    options: ['けんちょ', 'けんちょう', 'げんちょ', 'けんじょ'],
    answerIndex: 0,
    explanation:
      '「顕著」（顯著）讀「けんちょ」，字尾是短音「ちょ」。「けんちょう」誤加長音，變成「県庁」（縣政府）的讀音；「げんちょ」開頭誤加濁音；「けんじょ」把「著」誤讀成「じょ」，皆為錯誤讀法。',
    explanationEn:
      '「顕著」 (striking, marked) is read 「けんちょ」, ending in the short syllable 「ちょ」. 「けんちょう」 adds an unwarranted long vowel and is actually the reading of 「県庁」 (prefectural office); 「げんちょ」 wrongly voices the first syllable; 「けんじょ」 misreads 「著」 as 「じょ」.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-kanji-002',
    stem: '一日中パソコンに向かっていたので、肩が【凝って】しまった。',
    options: ['こって', 'こごって', 'こおって', 'にごって'],
    answerIndex: 0,
    explanation:
      '「凝る」表示肌肉痠痛僵硬時訓讀「こる」，故為「こって」。「こごる」是指湯汁凝結成凍，用於「肩が」的語境不通；「こおって」是「凍る」（結冰）的讀音；「にごって」是「濁る」（混濁），皆不合本句。',
    explanationEn:
      '「凝る」 read 「こる」 describes muscles becoming stiff and sore, so 「こって」 is correct. 「こごる」 refers to broth congealing into jelly and does not fit the context 「肩が」; 「こおって」 is the reading of 「凍る」 (to freeze); 「にごって」 is 「濁る」 (to become murky).',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-kanji-003',
    stem: '部品の供給が【滞り】、生産ラインが一時停止した。',
    options: ['とどこおり', 'とどこり', 'とどまり', 'とだえり'],
    answerIndex: 0,
    explanation:
      '「滞る」（停滯、延宕）訓讀「とどこおる」，中間有長音「こお」。「とどこり」漏掉長音；「とどまり」是「留まる」（停留）的讀音；「とだえり」是把「途絶える」誤作五段活用的錯誤形，皆不正確。',
    explanationEn:
      '「滞る」 (to stagnate, be delayed) is read 「とどこおる」, with the long vowel 「こお」 in the middle. 「とどこり」 drops that long vowel; 「とどまり」 is the reading of 「留まる」 (to stay); 「とだえり」 is a malformed conjugation that treats 「途絶える」 as a godan verb.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-kanji-004',
    stem: '彼女はアルバイトで学費と生活費を【賄って】いる。',
    options: ['まかなって', 'おぎなって', 'うけおって', 'ともなって'],
    answerIndex: 0,
    explanation:
      '「賄う」（籌措、支應開銷）訓讀「まかなう」。「おぎなって」是「補う」（補足）的讀音；「うけおって」是「請け負う」（承包）；「ともなって」是「伴う」（伴隨），皆是形義相近動詞的讀音混淆，不是「賄う」的讀法。',
    explanationEn:
      '「賄う」 (to cover expenses, provide for) is read 「まかなう」. 「おぎなって」 is the reading of 「補う」 (to supplement); 「うけおって」 is 「請け負う」 (to contract for work); 「ともなって」 is 「伴う」 (to accompany) — all are confusions with verbs of similar form or meaning, not readings of 「賄う」.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-kanji-005',
    stem: '新たな証拠が、これまでの定説を根本から【覆した】。',
    options: ['くつがえした', 'ひるがえした', 'くつかえした', 'むしかえした'],
    answerIndex: 0,
    explanation:
      '「覆す」（推翻、顛覆）訓讀「くつがえす」，第三拍是濁音「が」。「くつかえした」把濁音誤作清音；「ひるがえした」是「翻す」（翻轉、改變態度）的讀音；「むしかえした」是「蒸し返す」（舊事重提），皆不正確。',
    explanationEn:
      '「覆す」 (to overturn, overthrow) is read 「くつがえす」, with the voiced 「が」 as the third mora. 「くつかえした」 wrongly uses the unvoiced 「か」; 「ひるがえした」 is the reading of 「翻す」 (to flip over, reverse one\'s attitude); 「むしかえした」 is 「蒸し返す」 (to rehash an old issue).',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-kanji-006',
    stem: '別れを【惜しむ】人々が、駅のホームに集まっていた。',
    options: ['おしむ', 'せきむ', 'いつくしむ', 'くやむ'],
    answerIndex: 0,
    explanation:
      '「惜しむ」（惋惜、捨不得）訓讀「おしむ」。「せきむ」是把「惜」的音讀「せき」（如「惜別」）硬套進訓讀動詞的音訓混淆；「いつくしむ」是「慈しむ」（疼愛）；「くやむ」是「悔やむ」（懊悔），皆非本詞讀法。',
    explanationEn:
      '「惜しむ」 (to regret losing, be reluctant to part with) is read 「おしむ」. 「せきむ」 wrongly forces the on-reading 「せき」 (as in 「惜別」) onto a kun-reading verb; 「いつくしむ」 is the reading of 「慈しむ」 (to cherish); 「くやむ」 is 「悔やむ」 (to rue) — none is correct.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-kanji-007',
    stem: '正式な予算が決まるまで、【暫定】的な措置を取ることになった。',
    options: ['ざんてい', 'さんてい', 'ぜんてい', 'ざんじょう'],
    answerIndex: 0,
    explanation:
      '「暫定」（暫定）讀「ざんてい」，開頭是濁音「ざ」。「さんてい」誤作清音，變成「算定」（估算）的讀音；「ぜんてい」是形近字誤讀，為「前提」的讀音；「ざんじょう」把「定」誤讀，皆不正確。',
    explanationEn:
      '「暫定」 (provisional) is read 「ざんてい」, beginning with the voiced 「ざ」. 「さんてい」 uses an unvoiced initial and is actually the reading of 「算定」 (calculation); 「ぜんてい」 is the reading of the look-alike word 「前提」 (premise); 「ざんじょう」 misreads 「定」.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-kanji-008',
    stem: '急激な円安が輸入企業の経営に与える影響が【懸念】されている。',
    options: ['けねん', 'けんねん', 'きねん', 'けんえん'],
    answerIndex: 0,
    explanation:
      '「懸念」（擔憂、掛慮）讀「けねん」，「懸」在此唸「け」，是慣用音。「けんねん」誤加撥音，把「懸」讀成「けん」（如「懸賞」）套在本詞是常見錯誤；「きねん」是「祈念・記念」的讀音；「けんえん」是「犬猿・嫌煙」的讀音，皆不正確。',
    explanationEn:
      '「懸念」 (concern, apprehension) is read 「けねん」; here 「懸」 takes the customary reading 「け」. 「けんねん」 wrongly adds the moraic nasal by applying the reading 「けん」 (as in 「懸賞」), a very common mistake; 「きねん」 is the reading of 「祈念・記念」; 「けんえん」 corresponds to 「犬猿・嫌煙」.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-kanji-009',
    stem: '彼は知識に対して【貪欲】で、休日も勉強を欠かさない。',
    options: ['どんよく', 'とんよく', 'びんよく', 'どんよう'],
    answerIndex: 0,
    explanation:
      '「貪欲」（貪婪、求知若渴）讀「どんよく」，開頭是濁音「ど」。「とんよく」誤作清音；「びんよく」是把「貪」誤認成形近字「貧」（びん）的誤讀；「どんよう」把「欲」誤讀成「よう」，皆為錯誤讀法。',
    explanationEn:
      '「貪欲」 (greedy, voracious) is read 「どんよく」, starting with the voiced 「ど」. 「とんよく」 wrongly uses an unvoiced initial; 「びんよく」 mistakes 「貪」 for the look-alike character 「貧」 (びん); 「どんよう」 misreads 「欲」 as 「よう」 — all are incorrect.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-kanji-010',
    stem: '彼の姿は、あっという間に人ごみに【紛れて】見えなくなった。',
    options: ['まぎれて', 'まぬがれて', 'みだれて', 'ねじれて'],
    answerIndex: 0,
    explanation:
      '「紛れる」（混入、混雜其中）訓讀「まぎれる」。「まぬがれて」是「免れる」（倖免）的讀音；「みだれて」是「乱れる」（紊亂）；「ねじれて」是「捻じれる」（扭曲），皆是形義相近動詞的混淆，不是「紛れる」的讀法。',
    explanationEn:
      '「紛れる」 (to slip into, get lost in a crowd) is read 「まぎれる」. 「まぬがれて」 is the reading of 「免れる」 (to escape, be spared); 「みだれて」 is 「乱れる」 (to fall into disorder); 「ねじれて」 is 「捻じれる」 (to get twisted) — all similar-looking verbs with different readings.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-kanji-011',
    stem: '与えられた任務を最後まで【遂行】する責任がある。',
    options: ['すいこう', 'ついこう', 'ずいこう', 'すいぎょう'],
    answerIndex: 0,
    explanation:
      '「遂行」（執行、完成任務）讀「すいこう」。「ついこう」是受訓讀「遂に（ついに）」影響的誤讀，「遂」的音讀是「すい」；「ずいこう」開頭誤加濁音，是「随行」（隨行）的讀音；「すいぎょう」把「行」誤讀成「ぎょう」，皆不正確。',
    explanationEn:
      '「遂行」 (execution, carrying out) is read 「すいこう」. 「ついこう」 is a misreading influenced by 「遂に（ついに）」, but the on-reading of 「遂」 is 「すい」; 「ずいこう」 wrongly voices the initial and is the reading of 「随行」 (accompanying); 「すいぎょう」 misreads 「行」 as 「ぎょう」.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-kanji-012',
    stem: 'その映画は、【陳腐】な台詞ばかりで少しも心に響かなかった。',
    options: ['ちんぷ', 'ちんふ', 'ちんぶ', 'じんぷ'],
    answerIndex: 0,
    explanation:
      '「陳腐」（陳腐、老套）讀「ちんぷ」，「腐」接在撥音「ん」後半濁音化唸「ぷ」。「ちんふ」未半濁音化；「ちんぶ」誤作濁音；「じんぷ」開頭誤加濁音，皆為清濁・半濁判斷錯誤的讀法。',
    explanationEn:
      '「陳腐」 (trite, hackneyed) is read 「ちんぷ」; after the moraic nasal 「ん」, 「腐」 takes the semi-voiced 「ぷ」. 「ちんふ」 fails to apply this sound change; 「ちんぶ」 wrongly uses the fully voiced 「ぶ」; 「じんぷ」 wrongly voices the first syllable.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-kanji-013',
    stem: '彼は出世したとたん、【露骨】に態度を変えた。',
    options: ['ろこつ', 'ろうこつ', 'ろっこつ', 'ろこう'],
    answerIndex: 0,
    explanation:
      '「露骨」（露骨、毫不掩飾）讀「ろこつ」，「露」在此唸短音「ろ」。「ろうこつ」誤加長音；「ろっこつ」誤加促音，變成「肋骨」的讀音；「ろこう」把「骨」誤讀成「こう」，皆不正確。',
    explanationEn:
      '「露骨」 (blatant, undisguised) is read 「ろこつ」, with a short 「ろ」 for 「露」. 「ろうこつ」 adds an unwarranted long vowel; 「ろっこつ」 inserts a geminate and becomes the reading of 「肋骨」 (ribs); 「ろこう」 misreads 「骨」 as 「こう」 — all are incorrect.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-kanji-014',
    stem: '資金不足が、この計画の実現を【阻んで】いる。',
    options: ['はばんで', 'こばんで', 'いどんで', 'そばんで'],
    answerIndex: 0,
    explanation:
      '「阻む」（阻礙、阻擋）訓讀「はばむ」。「こばんで」是「拒む」（拒絕）的讀音，兩字形近義近最易混淆；「いどんで」是「挑む」（挑戰）；「そばんで」是把「阻」的音讀「そ」硬套進訓讀的音訓混淆，皆不正確。',
    explanationEn:
      '「阻む」 (to block, hinder) is read 「はばむ」. 「こばんで」 is the reading of 「拒む」 (to refuse), the most easily confused choice since the two characters look and mean somewhat alike; 「いどんで」 is 「挑む」 (to challenge); 「そばんで」 wrongly forces the on-reading 「そ」 onto a kun-reading verb.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-kanji-015',
    stem: '観光客が戻り、町の経済もようやく【潤って】きた。',
    options: ['うるおって', 'ととのって', 'つくろって', 'じゅんって'],
    answerIndex: 0,
    explanation:
      '「潤う」（滋潤、受惠而富裕）訓讀「うるおう」。「ととのって」是「整う」（齊備）的讀音；「つくろって」是「繕う」（修補）；「じゅんって」是把「潤」的音讀「じゅん」硬套進訓讀動詞的音訓混淆，皆為錯誤讀法。',
    explanationEn:
      '「潤う」 (to be moistened; to benefit financially) is read 「うるおう」. 「ととのって」 is the reading of 「整う」 (to be in order); 「つくろって」 is 「繕う」 (to mend); 「じゅんって」 wrongly forces the on-reading 「じゅん」 of 「潤」 onto a kun-reading verb — all are incorrect.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-kanji-016',
    stem: '幼いころの読書体験が、彼の豊かな想像力を【培った】。',
    options: ['つちかった', 'やしなった', 'たがやした', 'ばいった'],
    answerIndex: 0,
    explanation:
      '「培う」（培養、培植）訓讀「つちかう」。「やしなった」是「養う」（養育）的讀音，語意相近最易誤選；「たがやした」是「耕す」（耕作）；「ばいった」是把「培」的音讀「ばい」（如「栽培」）硬套進訓讀的音訓混淆，皆不正確。',
    explanationEn:
      '「培う」 (to cultivate, nurture) is read 「つちかう」. 「やしなった」 is the reading of 「養う」 (to raise, support), the most tempting distractor because of its similar meaning; 「たがやした」 is 「耕す」 (to till); 「ばいった」 wrongly forces the on-reading 「ばい」 (as in 「栽培」) onto a kun-reading verb.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-kanji-017',
    stem: '彼は真面目だが、【融通】がきかないところがある。',
    options: ['ゆうずう', 'ゆうつう', 'ゆずう', 'ゆうとう'],
    answerIndex: 0,
    explanation:
      '「融通」（融通、變通）讀「ゆうずう」，「通」在此連濁唸「ずう」，是特殊慣用讀法。「ゆうつう」未連濁，把「通」照一般音讀唸成「つう」是最常見錯誤；「ゆずう」漏掉「融」的長音；「ゆうとう」是「優等」的讀音，皆不正確。',
    explanationEn:
      '「融通」 (flexibility, accommodation) is read 「ゆうずう」, where 「通」 exceptionally takes the voiced 「ずう」. 「ゆうつう」, using the ordinary on-reading 「つう」, is the most common mistake; 「ゆずう」 drops the long vowel of 「融」; 「ゆうとう」 is the reading of 「優等」 (honors).',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-kanji-018',
    stem: '廊下で部長とすれ違ったとき、軽く【会釈】をした。',
    options: ['えしゃく', 'かいしゃく', 'えせき', 'あいしゃく'],
    answerIndex: 0,
    explanation:
      '「会釈」（點頭致意）讀「えしゃく」，「会」在此取吳音「え」（如「会得」）。「かいしゃく」把「会」讀成常見的「かい」，變成「解釈」（解釋）的讀音；「えせき」把「釈」誤讀成「せき」；「あいしゃく」開頭誤讀，皆不正確。',
    explanationEn:
      '「会釈」 (a slight bow of greeting) is read 「えしゃく」; here 「会」 takes the go-on reading 「え」 (as in 「会得」). 「かいしゃく」 uses the common reading 「かい」 and becomes the reading of 「解釈」 (interpretation); 「えせき」 misreads 「釈」 as 「せき」; 「あいしゃく」 misreads the first character.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-kanji-019',
    stem: 'スマートフォンの普及で、公衆電話はすっかり【廃れて】しまった。',
    options: ['すたれて', 'さびれて', 'しおれて', 'はいれて'],
    answerIndex: 0,
    explanation:
      '「廃れる」（沒落、不再流行）訓讀「すたれる」。「さびれて」是「寂れる」（蕭條冷清）的讀音，語意相近但不是本字的讀法；「しおれて」是「萎れる」（枯萎）；「はいれて」是把「廃」的音讀「はい」（如「廃止」）硬套進訓讀的音訓混淆，皆不正確。',
    explanationEn:
      '「廃れる」 (to fall out of use, go out of fashion) is read 「すたれる」. 「さびれて」 is the reading of 「寂れる」 (to become desolate), close in meaning but not this kanji\'s reading; 「しおれて」 is 「萎れる」 (to wilt); 「はいれて」 wrongly forces the on-reading 「はい」 (as in 「廃止」) onto a kun-reading verb.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-kanji-020',
    stem: '安全確認を【怠った】ことが、今回の事故の原因だとされた。',
    options: ['おこたった', 'なまけった', 'あなどった', 'おとった'],
    answerIndex: 0,
    explanation:
      '「怠る」（疏忽、怠忽職守）訓讀「おこたる」。「なまけった」是把「怠ける（なまける）」誤作五段活用的錯誤形，且送假名不合「怠った」；「あなどった」是「侮る」（輕視）的讀音；「おとった」是「劣る」（遜色），皆不正確。',
    explanationEn:
      '「怠る」 (to neglect a duty) is read 「おこたる」. 「なまけった」 is a malformed conjugation of 「怠ける（なまける）」 and also clashes with the okurigana of 「怠った」; 「あなどった」 is the reading of 「侮る」 (to look down on); 「おとった」 is 「劣る」 (to be inferior) — all are incorrect.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-kanji-021',
    stem: '政府は企業に対し、賃上げを【促す】方針を示した。',
    options: ['うながす', 'せかす', 'そくす', 'ほどこす'],
    answerIndex: 0,
    explanation:
      '「促す」（促使、催促）訓讀「うながす」。「せかす」是「急かす」（催促）的讀音，語意相近但非本字讀法；「そくす」是把「促」的音讀「そく」（如「促進」）硬套進訓讀的音訓混淆；「ほどこす」是「施す」（施予）的讀音，皆不正確。',
    explanationEn:
      '「促す」 (to urge, encourage) is read 「うながす」. 「せかす」 is the reading of 「急かす」 (to hurry someone), similar in meaning but not this kanji\'s reading; 「そくす」 wrongly forces the on-reading 「そく」 (as in 「促進」) onto a kun-reading verb; 「ほどこす」 is the reading of 「施す」 (to give, administer).',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-kanji-022',
    stem: '関係者の協力のおかげで、交渉は【円滑】に進んだ。',
    options: ['えんかつ', 'えんがつ', 'えんこつ', 'かんかつ'],
    answerIndex: 0,
    explanation:
      '「円滑」（順利、圓滑）讀「えんかつ」，「滑」音讀是清音「かつ」。「えんがつ」誤加濁音；「えんこつ」是把「滑」誤認成形近字「骨（こつ）」的誤讀；「かんかつ」是「管轄」（管轄）的讀音，皆不正確。',
    explanationEn:
      '「円滑」 (smooth, without friction) is read 「えんかつ」, with the unvoiced 「かつ」 for 「滑」. 「えんがつ」 wrongly voices it; 「えんこつ」 mistakes 「滑」 for the look-alike character 「骨」 (こつ); 「かんかつ」 is the reading of 「管轄」 (jurisdiction) — all are incorrect.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-kanji-023',
    stem: '彼は長い年月をかけて、自らの過ちを【償おう】とした。',
    options: ['つぐなおう', 'つくなおう', 'おぎなおう', 'あがなおう'],
    answerIndex: 0,
    explanation:
      '「償う」（賠償、贖罪）訓讀「つぐなう」，第二拍是濁音「ぐ」。「つくなおう」誤作清音；「おぎなおう」是「補う」（補足）的讀音；「あがなおう」是「贖う」（贖）的讀音，語意相近但漢字不同，皆非「償う」的讀法。',
    explanationEn:
      '「償う」 (to compensate, atone for) is read 「つぐなう」, with the voiced 「ぐ」 as the second mora. 「つくなおう」 wrongly uses the unvoiced 「く」; 「おぎなおう」 is the reading of 「補う」 (to supplement); 「あがなおう」 is the reading of 「贖う」, a near-synonym written with a different kanji — none is the reading of 「償う」.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-kanji-024',
    stem: '彼女は経理部で、現金の【出納】を管理している。',
    options: ['すいとう', 'しゅつのう', 'でのう', 'すいのう'],
    answerIndex: 0,
    explanation:
      '「出納」（出納、收支管理）讀「すいとう」，是特殊慣用讀法：「出」唸「すい」、「納」唸「とう」。「しゅつのう」把兩字照常見音讀直唸，是最典型的誤讀；「でのう」誤用「出」的訓讀「で」；「すいのう」把「納」誤讀成「のう」，皆不正確。',
    explanationEn:
      '「出納」 (receipts and disbursements) has the exceptional reading 「すいとう」: 「出」 is read 「すい」 and 「納」 is read 「とう」. 「しゅつのう」, reading both characters with their ordinary on-readings, is the classic mistake; 「でのう」 wrongly uses the kun-reading 「で」; 「すいのう」 misreads 「納」 as 「のう」.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-kanji-025',
    stem: '部屋には、コーヒーの香りがほのかに【漂って】いた。',
    options: ['ただよって', 'さまよって', 'におって', 'ひょうって'],
    answerIndex: 0,
    explanation:
      '「漂う」（飄盪、瀰漫）訓讀「ただよう」。「さまよって」是「彷徨う」（徘徊）的讀音；「におって」是「匂う」（散發氣味），語意相關但非本字讀法；「ひょうって」是把「漂」的音讀「ひょう」（如「漂流」）硬套進訓讀的音訓混淆，皆不正確。',
    explanationEn:
      '「漂う」 (to drift, waft) is read 「ただよう」. 「さまよって」 is the reading of 「彷徨う」 (to wander); 「におって」 is 「匂う」 (to give off a scent), related to this context but not this kanji\'s reading; 「ひょうって」 wrongly forces the on-reading 「ひょう」 (as in 「漂流」) onto a kun-reading verb.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-kanji-026',
    stem: 'このあたりでは、最近小さな地震が【頻繁】に起きている。',
    options: ['ひんぱん', 'ひんばん', 'びんぱん', 'ひんはん'],
    answerIndex: 0,
    explanation:
      '「頻繁」（頻繁）讀「ひんぱん」，「繁」接在撥音「ん」後半濁音化唸「ぱん」。「ひんばん」誤作濁音；「びんぱん」把「頻」誤加濁音；「ひんはん」未半濁音化，皆為清濁・半濁判斷錯誤的讀法。',
    explanationEn:
      '「頻繁」 (frequent) is read 「ひんぱん」; after the moraic nasal 「ん」, 「繁」 takes the semi-voiced 「ぱん」. 「ひんばん」 wrongly uses the fully voiced 「ばん」; 「びんぱん」 wrongly voices 「頻」; 「ひんはん」 fails to apply the sound change at all — all show faulty voicing judgments.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-kanji-027',
    stem: 'その記事は、【匿名】の関係者への取材に基づいて書かれた。',
    options: ['とくめい', 'どくめい', 'じゃくめい', 'とくみょう'],
    answerIndex: 0,
    explanation:
      '「匿名」（匿名）讀「とくめい」。「どくめい」開頭誤加濁音；「じゃくめい」是把「匿」誤認成形近部件「若（じゃく）」的誤讀；「とくみょう」把「名」誤讀成「みょう」，是受「本名（ほんみょう）」等詞類推的錯誤，皆不正確。',
    explanationEn:
      '「匿名」 (anonymity) is read 「とくめい」. 「どくめい」 wrongly voices the initial; 「じゃくめい」 mistakes 「匿」 for the look-alike component 「若」 (じゃく); 「とくみょう」 misreads 「名」 as 「みょう」 by false analogy with words like 「本名（ほんみょう）」 — all are incorrect.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-kanji-028',
    stem: '彼女はいつも【朗らか】で、周囲を明るくしてくれる。',
    options: ['ほがらか', 'ろうらか', 'ほこらか', 'なめらか'],
    answerIndex: 0,
    explanation:
      '「朗らか」（開朗、爽朗）訓讀「ほがらか」，第二拍是濁音「が」。「ろうらか」是把「朗」的音讀「ろう」（如「朗読」）硬套進訓讀的音訓混淆；「ほこらか」是受「誇らしい」影響的錯誤形；「なめらか」是「滑らか」（光滑）的讀音，皆不正確。',
    explanationEn:
      '「朗らか」 (cheerful, sunny) is read 「ほがらか」, with the voiced 「が」 as the second mora. 「ろうらか」 wrongly forces the on-reading 「ろう」 (as in 「朗読」) onto a kun-reading word; 「ほこらか」 is a malformed coinage influenced by 「誇らしい」; 「なめらか」 is the reading of 「滑らか」 (smooth).',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-kanji-029',
    stem: '当社は来年、アジアに新たな営業【拠点】を設ける予定だ。',
    options: ['きょてん', 'きょうてん', 'こてん', 'きょでん'],
    answerIndex: 0,
    explanation:
      '「拠点」（據點）讀「きょてん」，「拠」是短音「きょ」。「きょうてん」誤加長音，變成「経典」的讀音；「こてん」是「古典」的讀音，屬形近誤讀；「きょでん」把「点」誤加濁音，皆不正確。',
    explanationEn:
      '「拠点」 (base, foothold) is read 「きょてん」, with a short 「きょ」 for 「拠」. 「きょうてん」 adds an unwarranted long vowel and becomes the reading of 「経典」 (scriptures); 「こてん」 is the reading of the look-alike word 「古典」 (classics); 「きょでん」 wrongly voices 「点」.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-kanji-030',
    stem: '高いビルが建ち、庭の日差しが【遮られる】ようになった。',
    options: ['さえぎられる', 'さえきられる', 'しゃぎられる', 'へだてられる'],
    answerIndex: 0,
    explanation:
      '「遮る」（遮蔽、阻擋）訓讀「さえぎる」，第三拍是濁音「ぎ」。「さえきられる」誤作清音；「しゃぎられる」是把「遮」的音讀「しゃ」（如「遮断」）硬套進訓讀的音訓混淆；「へだてられる」是「隔てる」（隔開）的讀音，皆不正確。',
    explanationEn:
      '「遮る」 (to block, obstruct) is read 「さえぎる」, with the voiced 「ぎ」 as the third mora. 「さえきられる」 wrongly uses the unvoiced 「き」; 「しゃぎられる」 wrongly forces the on-reading 「しゃ」 (as in 「遮断」) onto a kun-reading verb; 「へだてられる」 is the reading of 「隔てる」 (to separate).',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-kanji-031',
    stem: '大事な試合に大差で負け、【惨め】な気持ちで帰宅した。',
    options: ['みじめ', 'みしめ', 'さんめ', 'むごめ'],
    answerIndex: 0,
    explanation:
      '「惨め」（悽慘、狼狽）訓讀「みじめ」，第二拍是濁音「じ」。「みしめ」誤作清音；「さんめ」是把「惨」的音讀「さん」（如「悲惨」）硬套進訓讀的音訓混淆；「むごめ」是受「惨い（むごい）」影響的錯誤形，皆不正確。',
    explanationEn:
      '「惨め」 (miserable, wretched) is read 「みじめ」, with the voiced 「じ」 as the second mora. 「みしめ」 wrongly uses the unvoiced 「し」; 「さんめ」 wrongly forces the on-reading 「さん」 (as in 「悲惨」) onto a kun-reading word; 「むごめ」 is a malformed coinage influenced by 「惨い（むごい）」.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-kanji-032',
    stem: '両案の長所を取り入れた【折衷】案が採用された。',
    options: ['せっちゅう', 'せっちょう', 'おりちゅう', 'せつじゅう'],
    answerIndex: 0,
    explanation:
      '「折衷」（折衷）讀「せっちゅう」，「折」促音化唸「せっ」。「せっちょう」把「衷」誤讀成「ちょう」；「おりちゅう」誤用「折」的訓讀「おり」，是音訓混淆；「せつじゅう」促音脫落又誤加濁音，皆不正確。',
    explanationEn:
      '「折衷」 (compromise, blending two proposals) is read 「せっちゅう」, with 「折」 geminating to 「せっ」. 「せっちょう」 misreads 「衷」 as 「ちょう」; 「おりちゅう」 wrongly mixes in the kun-reading 「おり」 of 「折」; 「せつじゅう」 drops the gemination and adds a wrong voiced sound.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-kanji-033',
    stem: '彼は自分の非を認め、【潔く】謝罪した。',
    options: ['いさぎよく', 'きよく', 'いさましく', 'けつよく'],
    answerIndex: 0,
    explanation:
      '「潔い」（乾脆、光明磊落）訓讀「いさぎよい」，故為「いさぎよく」。「きよく」是「清い」的讀音，因「清潔」一詞而最易混淆；「いさましく」是「勇ましい」（勇敢）的讀音；「けつよく」是把「潔」的音讀「けつ」硬套進訓讀的音訓混淆，皆不正確。',
    explanationEn:
      '「潔い」 (graceful in admitting fault, sporting) is read 「いさぎよい」, so the adverbial form is 「いさぎよく」. 「きよく」 is the reading of 「清い」, the most tempting confusion because of the word 「清潔」; 「いさましく」 is 「勇ましい」 (brave); 「けつよく」 wrongly forces the on-reading 「けつ」 onto a kun-reading adjective.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-kanji-034',
    stem: 'この辞典は、分野の専門用語をほぼ【網羅】している。',
    options: ['もうら', 'もら', 'あみら', 'もうろう'],
    answerIndex: 0,
    explanation:
      '「網羅」（網羅、涵蓋）讀「もうら」，「網」音讀是長音「もう」。「もら」漏掉長音；「あみら」誤用「網」的訓讀「あみ」，是音訓混淆；「もうろう」是「朦朧」（朦朧）的讀音，皆不正確。',
    explanationEn:
      '「網羅」 (to cover comprehensively) is read 「もうら」, with the long on-reading 「もう」 for 「網」. 「もら」 drops the long vowel; 「あみら」 wrongly mixes in the kun-reading 「あみ」 of 「網」; 「もうろう」 is the reading of 「朦朧」 (hazy) — all are incorrect.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-kanji-035',
    stem: '今期は、円安による損失を輸出の増加で【相殺】した。',
    options: ['そうさい', 'そうさつ', 'そうせつ', 'しょうさい'],
    answerIndex: 0,
    explanation:
      '「相殺」（相抵、抵銷）讀「そうさい」，「殺」在此取特殊音讀「さい」。「そうさつ」把「殺」照常見音讀唸成「さつ」（如「殺人」），是最典型的誤讀；「そうせつ」是「創設」的讀音；「しょうさい」是「詳細」的讀音，皆不正確。',
    explanationEn:
      '「相殺」 (offsetting, canceling out) is read 「そうさい」; here 「殺」 takes the special on-reading 「さい」. 「そうさつ」, using the common reading 「さつ」 (as in 「殺人」), is the classic mistake; 「そうせつ」 is the reading of 「創設」 (founding); 「しょうさい」 is 「詳細」 (details).',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-kanji-036',
    stem: '当店では、素材を一つ一つ【吟味】して料理を作っている。',
    options: ['ぎんみ', 'きんみ', 'ごんみ', 'ぎんあじ'],
    answerIndex: 0,
    explanation:
      '「吟味」（斟酌、精選）讀「ぎんみ」，開頭是濁音「ぎ」。「きんみ」誤作清音；「ごんみ」把「吟」誤讀成「ごん」；「ぎんあじ」誤用「味」的訓讀「あじ」，是音訓混淆，皆不正確。',
    explanationEn:
      '「吟味」 (careful selection, close scrutiny) is read 「ぎんみ」, beginning with the voiced 「ぎ」. 「きんみ」 wrongly uses an unvoiced initial; 「ごんみ」 misreads 「吟」 as 「ごん」; 「ぎんあじ」 wrongly mixes in the kun-reading 「あじ」 of 「味」 — all are incorrect.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-kanji-037',
    stem: '夕方になり、西の空が赤みを【帯びて】きた。',
    options: ['おびて', 'あびて', 'のびて', 'たいびて'],
    answerIndex: 0,
    explanation:
      '「帯びる」（帶有、呈現）訓讀「おびる」。「あびて」是「浴びる」（沐浴、蒙受）的讀音，字形相近最易混淆；「のびて」是「伸びる」（延伸）；「たいびて」是把「帯」的音讀「たい」（如「携帯」）硬套進訓讀的音訓混淆，皆不正確。',
    explanationEn:
      '「帯びる」 (to carry, take on a tinge of) is read 「おびる」. 「あびて」 is the reading of 「浴びる」 (to bathe in, be showered with), the most easily confused look-alike; 「のびて」 is 「伸びる」 (to stretch, grow); 「たいびて」 wrongly forces the on-reading 「たい」 (as in 「携帯」) onto a kun-reading verb.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-kanji-038',
    stem: '需要と供給の【均衡】が崩れ、価格が急騰した。',
    options: ['きんこう', 'きんごう', 'ぐんこう', 'きんしょう'],
    answerIndex: 0,
    explanation:
      '「均衡」（均衡、平衡）讀「きんこう」，「衡」音讀是清音「こう」。「きんごう」誤加濁音；「ぐんこう」把「均」誤認成形近字「軍（ぐん）」；「きんしょう」把「衡」誤認成形近字「衝（しょう）」，皆為錯誤讀法。',
    explanationEn:
      '「均衡」 (balance, equilibrium) is read 「きんこう」, with the unvoiced 「こう」 for 「衡」. 「きんごう」 wrongly voices it; 「ぐんこう」 mistakes 「均」 for the look-alike character 「軍」 (ぐん); 「きんしょう」 mistakes 「衡」 for the look-alike 「衝」 (しょう) — all are incorrect.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-kanji-039',
    stem: '被災地の住民に、応急の手当てを【施した】。',
    options: ['ほどこした', 'せこした', 'もよおした', 'ほどいた'],
    answerIndex: 0,
    explanation:
      '「施す」（施行、施予）訓讀「ほどこす」。「せこした」是把「施」的音讀「せ」（如「施行（せこう）」）硬套進訓讀的音訓混淆；「もよおした」是「催す」（舉辦）的讀音；「ほどいた」是「解いた」（解開），皆不正確。',
    explanationEn:
      '「施す」 (to administer, give) is read 「ほどこす」. 「せこした」 wrongly forces the on-reading 「せ」 (as in 「施行（せこう）」) onto a kun-reading verb; 「もよおした」 is the reading of 「催す」 (to hold an event); 「ほどいた」 is 「解いた」 (untied) — all are incorrect.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-kanji-040',
    stem: '町のあちこちに、城下町だったころの【名残】が感じられる。',
    options: ['なごり', 'なのこり', 'めいざん', 'なごろ'],
    answerIndex: 0,
    explanation:
      '「名残」（餘韻、遺跡）讀「なごり」，是特殊慣用讀法。「なのこり」把「残」照訓讀「のこり」直讀，是最常見的誤讀；「めいざん」是照兩字音讀硬唸的音訓混淆；「なごろ」字尾誤讀，皆不正確。',
    explanationEn:
      '「名残」 (lingering traces, vestiges) has the exceptional customary reading 「なごり」. 「なのこり」, which reads 「残」 with its plain kun-reading 「のこり」, is the most common mistake; 「めいざん」 forces on-readings onto both characters; 「なごろ」 garbles the final syllable.',
  },
]
