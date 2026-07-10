import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    kind: 'choice',
    id: 'n5-vocab-kanji-001',
    stem: 'わたしは まいにち 【学校】へ いきます。',
    options: ['がっこう', 'かっこう', 'がっこ', 'がくこう'],
    answerIndex: 0,
    explanation:
      '「学校」讀「がっこう」，注意促音「っ」與長音「こう」缺一不可。「かっこう」開頭清音錯誤；「がっこ」漏掉長音；「がくこう」是把「学」的音讀「がく」硬拼上去、沒有促音變化，都不對。',
    explanationEn:
      '「学校」 (school) is read 「がっこう」, and you need both the small っ (doubled consonant) and the long vowel こう. 「かっこう」 starts with the wrong unvoiced k sound; 「がっこ」 drops the long vowel; 「がくこう」 just glues the on-reading 「がく」 onto 「こう」 without the sound change to っ, so all three are wrong.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-kanji-002',
    stem: '【先生】は とても やさしいです。',
    options: ['せんせい', 'せんせ', 'せいせん', 'ぜんせい'],
    answerIndex: 0,
    explanation:
      '「先生」（老師）讀「せんせい」，字尾有長音「せい」。「せんせ」少了長音；「せいせん」是把兩個音節順序顛倒；「ぜんせい」開頭多了濁音，日常會話中開頭並不濁化，皆為錯誤讀法。',
    explanationEn:
      '「先生」 (teacher) is read 「せんせい」, ending in the long vowel せい. 「せんせ」 is missing that long vowel; 「せいせん」 swaps the order of the two syllables; 「ぜんせい」 wrongly voices the first consonant — in everyday speech the word never starts with a voiced sound.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-kanji-003',
    stem: 'なつやすみに かぞくと 【山】に のぼりました。',
    options: ['やま', 'さん', 'かわ', 'しま'],
    answerIndex: 0,
    explanation:
      '「山」單獨當名詞用時取訓讀「やま」（山）。「さん」是音讀，只出現在「富士山（ふじさん）」這類複合詞裡；「かわ」是「川」（河川）的讀法；「しま」是「島」（島嶼）的讀法，都不是「山」單獨使用時的唸法。',
    explanationEn:
      'When 「山」 (mountain) stands alone as a noun, it takes the kun-reading 「やま」. 「さん」 is the on-reading, which appears only in compounds like 「富士山（ふじさん）」; 「かわ」 is the reading of 「川」 (river) and 「しま」 of 「島」 (island), so none of them is how 「山」 is read by itself.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-kanji-004',
    stem: 'まいあさ 【九時】に かいしゃへ いきます。',
    options: ['くじ', 'きゅうじ', 'ここのじ', 'くうじ'],
    answerIndex: 0,
    explanation:
      '「九時」（九點）讀「くじ」。「九」有「きゅう」「く」兩種音讀，但接「時」的時候固定唸「く」，所以「きゅうじ」錯；「ここのじ」誤用了訓讀「ここの（つ）」；「くうじ」多了長音，也不對。',
    explanationEn:
      '「九時」 (nine o\'clock) is read 「くじ」. The numeral 「九」 has two on-readings, 「きゅう」 and 「く」, but before 「時」 it is always 「く」, so 「きゅうじ」 is wrong. 「ここのじ」 misuses the kun-reading 「ここの（つ）」, and 「くうじ」 adds a long vowel that does not exist.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-kanji-005',
    stem: 'りんごを 【半分】 たべました。',
    options: ['はんぶん', 'はんふん', 'はんぷん', 'ほんぶん'],
    answerIndex: 0,
    explanation:
      '「半分」（一半）讀「はんぶん」，「分」在這裡唸濁音「ぶん」。「はんふん」「はんぷん」是把講時間分鐘的「ふん／ぷん」誤用到這個詞上；「ほんぶん」開頭母音錯了，變成別的詞，皆非正解。',
    explanationEn:
      '「半分」 (half) is read 「はんぶん」; here 「分」 is voiced as 「ぶん」. 「はんふん」 and 「はんぷん」 borrow the 「ふん／ぷん」 used for counting minutes, which does not apply to this word; 「ほんぶん」 starts with the wrong vowel and turns into a different word, so none of them is correct.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-kanji-006',
    stem: '【母】は りょうりが じょうずです。',
    options: ['はは', 'ちち', 'はば', 'かあ'],
    answerIndex: 0,
    explanation:
      '對別人謙稱自己的媽媽時用「母（はは）」。「ちち」是「父」（爸爸）的讀法；「はば」第二拍多了濁音，是「幅」（寬度）的讀法；「かあ」是受「おかあさん」影響的誤讀，「母」單獨一個字不這樣唸。',
    explanationEn:
      '「母（はは）」 is the humble way to refer to your own mother when speaking to others. 「ちち」 is the reading of 「父」 (father); 「はば」 voices the second syllable and is actually 「幅」 (width); 「かあ」 is a false reading influenced by 「おかあさん」 — the single character 「母」 is never read that way.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-kanji-007',
    stem: '【毎日】 にほんごを べんきょうします。',
    options: ['まいにち', 'まいひ', 'めいにち', 'まいねん'],
    answerIndex: 0,
    explanation:
      '「毎日」（每天）讀「まいにち」，「日」在此取音讀「にち」。「まいひ」誤用了訓讀「ひ」；「めいにち」開頭讀錯，變成「命日」（忌日）的讀音；「まいねん」是「毎年」（每年）的讀法，字義不同。',
    explanationEn:
      '「毎日」 (every day) is read 「まいにち」, with 「日」 taking the on-reading 「にち」. 「まいひ」 wrongly uses the kun-reading 「ひ」; 「めいにち」 gets the first syllable wrong and is actually the reading of 「命日」 (death anniversary); 「まいねん」 is the reading of 「毎年」 (every year), a different word.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-kanji-008',
    stem: '【電車】で うみへ いきました。',
    options: ['でんしゃ', 'てんしゃ', 'じてんしゃ', 'でんぐるま'],
    answerIndex: 0,
    explanation:
      '「電車」（電車）讀「でんしゃ」，兩字皆取音讀。「てんしゃ」開頭清音錯誤；「じてんしゃ」是「自転車」（腳踏車）的讀法，多了一個字；「でんぐるま」誤把「車」唸成訓讀「くるま」，複合詞中應唸音讀「しゃ」。',
    explanationEn:
      '「電車」 (train) is read 「でんしゃ」, using the on-readings of both characters. 「てんしゃ」 loses the voiced initial d sound; 「じてんしゃ」 is 「自転車」 (bicycle), a word with an extra character; 「でんぐるま」 wrongly uses the kun-reading 「くるま」 — in this compound 「車」 must be read 「しゃ」.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-kanji-009',
    stem: '【駅】の まえに ゆうびんきょくが あります。',
    options: ['えき', 'えぎ', 'やく', 'みせ'],
    answerIndex: 0,
    explanation:
      '「駅」（車站）讀「えき」。「えぎ」字尾誤加濁音；「やく」是形近字「訳」「役」的讀法，容易和「駅」搞混；「みせ」是「店」（商店）的讀法，是完全不同的場所，皆為錯誤選項。',
    explanationEn:
      '「駅」 (station) is read 「えき」. 「えぎ」 wrongly voices the final syllable; 「やく」 is the reading of the look-alike characters 「訳」 and 「役」, which are easy to confuse with 「駅」; 「みせ」 is the reading of 「店」 (shop), a completely different kind of place, so all three options are wrong.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-kanji-010',
    stem: 'スーパーで パンを 【買います】。',
    options: ['かいます', 'かります', 'うります', 'がいます'],
    answerIndex: 0,
    explanation:
      '「買います」（買）讀「かいます」，「買」取訓讀「か（う）」。「かります」是「借ります」（借入）的讀法；「うります」是「売ります」（賣）的讀法，語意剛好相反；「がいます」開頭誤加濁音，日語沒有這種唸法。',
    explanationEn:
      '「買います」 (to buy) is read 「かいます」, with 「買」 taking the kun-reading 「か（う）」. 「かります」 is 「借ります」 (to borrow); 「うります」 is 「売ります」 (to sell), the exact opposite meaning; 「がいます」 adds a voiced initial sound that simply does not exist in Japanese.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-kanji-011',
    stem: 'あさごはんに たまごを 【食べます】。',
    options: ['たべます', 'しょくべます', 'たへます', 'のみます'],
    answerIndex: 0,
    explanation:
      '「食べます」（吃）讀「たべます」，「食」在此取訓讀「た（べる）」。「しょくべます」誤把音讀「しょく」套進動詞；「たへます」第二拍清音錯誤，應為濁音「べ」；「のみます」是「飲みます」（喝）的讀法，語意不同。',
    explanationEn:
      '「食べます」 (to eat) is read 「たべます」, with 「食」 taking the kun-reading 「た（べる）」. 「しょくべます」 wrongly forces the on-reading 「しょく」 into the verb; 「たへます」 uses the unvoiced へ where the voiced べ is needed; 「のみます」 is 「飲みます」 (to drink), a different action.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-kanji-012',
    stem: 'まいばん ラジオで ニュースを 【聞きます】。',
    options: ['ききます', 'きぎます', 'ぶんきます', 'みます'],
    answerIndex: 0,
    explanation:
      '「聞きます」（聽）讀「ききます」，「聞」取訓讀「き（く）」。「きぎます」第二拍誤加濁音；「ぶんきます」是把「聞」的音讀「ぶん」（如「新聞」）誤用在動詞上；「みます」是「見ます」（看）的讀法，動作不同。',
    explanationEn:
      '「聞きます」 (to listen) is read 「ききます」, with 「聞」 taking the kun-reading 「き（く）」. 「きぎます」 wrongly voices the second syllable; 「ぶんきます」 forces the on-reading 「ぶん」 (as in 「新聞」) into the verb; 「みます」 is 「見ます」 (to watch), a different action.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-kanji-013',
    stem: 'この とけいは 【高い】ですね。',
    options: ['たかい', 'たがい', 'こうい', 'やすい'],
    answerIndex: 0,
    explanation:
      '「高い」（貴、高）讀「たかい」。「たがい」第二拍誤加濁音；「こうい」是把「高」的音讀「こう」硬套上去，形容詞應取訓讀；「やすい」是「安い」（便宜）的讀法，語意剛好相反，都不是正解。',
    explanationEn:
      '「高い」 (expensive, high) is read 「たかい」. 「たがい」 wrongly voices the second syllable; 「こうい」 forces the on-reading 「こう」 onto the word, but adjectives take the kun-reading; 「やすい」 is the reading of 「安い」 (cheap), the exact opposite meaning, so none of these is correct.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-kanji-014',
    stem: '【新しい】 くつを はいて でかけます。',
    options: ['あたらしい', 'あらたしい', 'しんしい', 'ふるい'],
    answerIndex: 0,
    explanation:
      '「新しい」（新的）讀「あたらしい」，注意是「あたら」不是「あらた」。「あらたしい」把音節順序寫反，是很常見的錯誤；「しんしい」誤用音讀「しん」；「ふるい」是反義詞「古い」（舊的）的讀法。',
    explanationEn:
      '「新しい」 (new) is read 「あたらしい」 — note the order あたら, not あらた. 「あらたしい」 swaps those syllables and is a very common mistake; 「しんしい」 misuses the on-reading 「しん」; 「ふるい」 is the reading of the antonym 「古い」 (old), so it does not match this word at all.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-kanji-015',
    stem: '【白い】 ねこが にわに います。',
    options: ['しろい', 'はくい', 'しるい', 'くろい'],
    answerIndex: 0,
    explanation:
      '「白い」（白色的）讀「しろい」，「白」在形容詞中取訓讀「しろ」。「はくい」誤用了音讀「はく」（音讀只用於「白鳥（はくちょう）」這類複合詞）；「しるい」母音錯誤；「くろい」是「黒い」（黑色的）的讀法，顏色剛好相反。',
    explanationEn:
      '「白い」 (white) is read 「しろい」, with 「白」 taking the kun-reading しろ in the adjective. 「はくい」 misuses the on-reading 「はく」, which appears only in compounds like 「白鳥（はくちょう）」; 「しるい」 has the wrong vowel; 「くろい」 is 「黒い」 (black), the opposite color.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-kanji-016',
    stem: '【午後】から あめが ふりました。',
    options: ['ごご', 'ごぜん', 'ここ', 'ごごう'],
    answerIndex: 0,
    explanation:
      '「午後」（下午）讀「ごご」。「ごぜん」是「午前」（上午）的讀法，前後意思顛倒；「ここ」把兩拍都唸成清音，日語裡是「這裡」的意思；「ごごう」多了不必要的長音，這個詞並沒有長音。',
    explanationEn:
      '「午後」 (afternoon) is read 「ごご」. 「ごぜん」 is the reading of 「午前」 (morning), the opposite half of the day; 「ここ」 makes both syllables unvoiced and actually means \'here\' in Japanese; 「ごごう」 adds a long vowel, but this word has no long vowel at all.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-kanji-017',
    stem: 'こどもたちは 【外】で あそんで います。',
    options: ['そと', 'がい', 'うち', 'なか'],
    answerIndex: 0,
    explanation:
      '「外」單獨當名詞用時取訓讀「そと」（外面）。「がい」是音讀，只用於「外国（がいこく）」等複合詞；「うち」是「内・家」（裡面、家）的讀法，方向相反；「なか」是「中」（裡面）的讀法，皆不正確。',
    explanationEn:
      'When 「外」 (outside) stands alone as a noun, it takes the kun-reading 「そと」. 「がい」 is the on-reading, used only in compounds like 「外国（がいこく）」; 「うち」 is the reading of 「内・家」 (inside, home), the opposite direction; 「なか」 is the reading of 「中」 (inside), so all are wrong.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-kanji-018',
    stem: 'あなたの 【国】は どこですか。',
    options: ['くに', 'こく', 'ぐに', 'くみ'],
    answerIndex: 0,
    explanation:
      '「国」（國家）單獨使用時取訓讀「くに」。「こく」是音讀，出現在「外国」「中国」等複合詞裡，單獨不這樣唸；「ぐに」開頭誤加濁音，只在「島国（しまぐに）」這類連濁時才出現；「くみ」是「組」的讀法。',
    explanationEn:
      '「国」 (country) takes the kun-reading 「くに」 when it stands alone. 「こく」 is the on-reading, which appears in compounds like 「外国」 and 「中国」 but never by itself; 「ぐに」 has a voiced start that only occurs in rendaku compounds like 「島国（しまぐに）」; 「くみ」 is the reading of 「組」.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-kanji-019',
    stem: 'でんわで ともだちと 【話します】。',
    options: ['はなします', 'わします', 'ばなします', 'いいます'],
    answerIndex: 0,
    explanation:
      '「話します」（說話、交談）讀「はなします」，「話」取訓讀「はな（す）」。「わします」誤用音讀「わ」（如「電話」的「わ」）；「ばなします」開頭誤加濁音；「いいます」是「言います」（說）的讀法，是另一個動詞。',
    explanationEn:
      '「話します」 (to talk) is read 「はなします」, with 「話」 taking the kun-reading 「はな（す）」. 「わします」 misuses the on-reading 「わ」 (as in 「電話」); 「ばなします」 wrongly voices the first syllable; 「いいます」 is 「言います」 (to say), which is a different verb.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-kanji-020',
    stem: 'きのう 【友だち】と えいがを みました。',
    options: ['ともだち', 'ゆうだち', 'ともたち', 'とだち'],
    answerIndex: 0,
    explanation:
      '「友だち」（朋友）讀「ともだち」，「友」取訓讀「とも」。「ゆうだち」誤用音讀「ゆう」，而且「夕立（ゆうだち）」是「午後雷陣雨」的意思；「ともたち」漏了連濁的「だ」；「とだち」少唸一拍，皆為錯誤讀法。',
    explanationEn:
      '「友だち」 (friend) is read 「ともだち」, with 「友」 taking the kun-reading 「とも」. 「ゆうだち」 misuses the on-reading 「ゆう」 and is actually 「夕立（ゆうだち）」, an afternoon rain shower; 「ともたち」 misses the voiced だ (rendaku); 「とだち」 drops a whole syllable, so all are wrong.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-kanji-021',
    stem: '【火曜日】に としょかんへ いきます。',
    options: ['かようび', 'すいようび', 'かようひ', 'ひようび'],
    answerIndex: 0,
    explanation:
      '「火曜日」（星期二）讀「かようび」，「火」在曜日中取音讀「か」。「すいようび」是「水曜日」（星期三）的讀法，是別的日子；「かようひ」漏了「日」的連濁「び」；「ひようび」誤用訓讀「ひ」，曜日不這樣唸。',
    explanationEn:
      '「火曜日」 (Tuesday) is read 「かようび」, with 「火」 taking the on-reading 「か」 in weekday names. 「すいようび」 is 「水曜日」 (Wednesday), a different day; 「かようひ」 misses the voiced び of 「日」; 「ひようび」 wrongly uses the kun-reading 「ひ」, which weekday names never use.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-kanji-022',
    stem: 'きょうは 【天気】が いいですね。',
    options: ['てんき', 'でんき', 'てんぎ', 'てんきい'],
    answerIndex: 0,
    explanation:
      '「天気」（天氣）讀「てんき」，兩字皆取音讀。「でんき」開頭誤加濁音，變成「電気」（電燈、電力）的讀法；「てんぎ」字尾誤加濁音；「てんきい」多了不必要的長音，這個詞並沒有長音，皆為錯誤讀法。',
    explanationEn:
      '「天気」 (weather) is read 「てんき」, using the on-readings of both characters. 「でんき」 voices the first syllable and becomes 「電気」 (electricity, light), a different word; 「てんぎ」 wrongly voices the ending; 「てんきい」 adds a long vowel, but this word has no long vowel at all.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-kanji-023',
    stem: '【父】は ぎんこうで はたらいて います。',
    options: ['ちち', 'はは', 'とう', 'ちし'],
    answerIndex: 0,
    explanation:
      '對別人謙稱自己的爸爸時用「父（ちち）」。「はは」是「母」（媽媽）的讀法，家人搞錯了；「とう」是受「おとうさん」影響的誤讀，「父」單獨一個字不這樣唸；「ちし」第二拍清音錯誤，日語沒有這個唸法。',
    explanationEn:
      '「父（ちち）」 is the humble way to refer to your own father when speaking to others. 「はは」 is the reading of 「母」 (mother), the wrong family member; 「とう」 is a false reading influenced by 「おとうさん」 — the single character 「父」 is never read that way; 「ちし」 is not a real Japanese reading.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-kanji-024',
    stem: '【兄】は だいがくせいです。',
    options: ['あに', 'あね', 'おに', 'けい'],
    answerIndex: 0,
    explanation:
      '對別人謙稱自己的哥哥時用「兄（あに）」。「あね」是「姉」（姊姊）的讀法，性別不同；「おに」開頭母音錯誤，是「鬼」（鬼怪）的讀法；「けい」是「兄」的音讀，只用於「兄弟（きょうだい）」等複合詞，單獨不這樣唸。',
    explanationEn:
      '「兄（あに）」 is the humble word for your own older brother. 「あね」 is the reading of 「姉」 (older sister), the wrong sibling; 「おに」 has the wrong first vowel and means 「鬼」 (demon); 「けい」 is the on-reading of 「兄」, used only in compounds like 「兄弟（きょうだい）」, never alone.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-kanji-025',
    stem: '【姉】は とうきょうに すんで います。',
    options: ['あね', 'あに', 'いもうと', 'あねえ'],
    answerIndex: 0,
    explanation:
      '對別人謙稱自己的姊姊時用「姉（あね）」。「あに」是「兄」（哥哥）的讀法；「いもうと」是「妹」（妹妹）的讀法，長幼相反；「あねえ」是受「おねえさん」影響多加了長音，「姉」單獨一個字沒有長音。',
    explanationEn:
      '「姉（あね）」 is the humble word for your own older sister. 「あに」 is the reading of 「兄」 (older brother); 「いもうと」 is 「妹」 (younger sister), the wrong birth order; 「あねえ」 borrows the long vowel from 「おねえさん」, but the single character 「姉」 has no long vowel on its own.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-kanji-026',
    stem: 'あしたは 【雨】が ふるでしょう。',
    options: ['あめ', 'あま', 'ゆき', 'う'],
    answerIndex: 0,
    explanation:
      '「雨」單獨當名詞用時讀「あめ」。「あま」是出現在「雨戸（あまど）」等複合詞前項的變化形，單獨不這樣唸；「ゆき」是「雪」（雪）的讀法，天氣不同；「う」是音讀，只用於「梅雨（ばいう）」等複合詞。',
    explanationEn:
      '「雨」 (rain) is read 「あめ」 when it stands alone as a noun. 「あま」 is the changed form that appears only at the front of compounds like 「雨戸（あまど）」, never alone; 「ゆき」 is 「雪」 (snow), a different kind of weather; 「う」 is the on-reading, found only in compounds like 「梅雨（ばいう）」.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-kanji-027',
    stem: 'この まちの 【南】に おおきい こうえんが あります。',
    options: ['みなみ', 'きた', 'なん', 'みなん'],
    answerIndex: 0,
    explanation:
      '「南」單獨當名詞用時取訓讀「みなみ」（南邊）。「きた」是「北」（北邊）的讀法，方向剛好相反；「なん」是音讀，只用於「南北（なんぼく）」等複合詞；「みなん」是把訓讀和音讀混在一起的錯誤唸法。',
    explanationEn:
      'When 「南」 (south) stands alone, it takes the kun-reading 「みなみ」. 「きた」 is the reading of 「北」 (north), the exact opposite direction; 「なん」 is the on-reading, used only in compounds like 「南北（なんぼく）」; 「みなん」 mixes the kun- and on-readings together and is not a real reading.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-kanji-028',
    stem: 'ホテルの まどから 【東】の そらが みえます。',
    options: ['ひがし', 'にし', 'とう', 'ひかし'],
    answerIndex: 0,
    explanation:
      '「東」單獨當名詞用時取訓讀「ひがし」（東邊）。「にし」是「西」（西邊）的讀法，方向剛好相反；「とう」是音讀，只用於「東京（とうきょう）」等複合詞；「ひかし」第二拍漏了濁音「が」，皆為錯誤讀法。',
    explanationEn:
      'When 「東」 (east) stands alone, it takes the kun-reading 「ひがし」. 「にし」 is the reading of 「西」 (west), the exact opposite direction; 「とう」 is the on-reading, used only in compounds like 「東京（とうきょう）」; 「ひかし」 misses the voiced が in the middle, so all three are wrong.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-kanji-029',
    stem: 'つぎの かどを 【右】に まがって ください。',
    options: ['みぎ', 'ひだり', 'みき', 'ゆう'],
    answerIndex: 0,
    explanation:
      '「右」（右邊）讀「みぎ」。「ひだり」是「左」（左邊）的讀法，方向剛好相反，問路時搞錯會走錯路；「みき」字尾清音錯誤，應為濁音「ぎ」；「ゆう」是音讀，只用於「左右（さゆう）」等複合詞，單獨不這樣唸。',
    explanationEn:
      '「右」 (right) is read 「みぎ」. 「ひだり」 is the reading of 「左」 (left), the exact opposite direction — a costly mix-up when asking the way; 「みき」 ends in an unvoiced き where the voiced ぎ is needed; 「ゆう」 is the on-reading, used only in compounds like 「左右（さゆう）」, never alone.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-kanji-030',
    stem: 'ぎんこうの 【前】で まって います。',
    options: ['まえ', 'うしろ', 'ぜん', 'さき'],
    answerIndex: 0,
    explanation:
      '「前」單獨當名詞用時取訓讀「まえ」（前面）。「うしろ」是「後ろ」（後面）的讀法，位置剛好相反；「ぜん」是音讀，只用於「午前（ごぜん）」等複合詞；「さき」是「先」（前方、之前）的讀法，是另一個字。',
    explanationEn:
      'When 「前」 (front) stands alone as a noun, it takes the kun-reading 「まえ」. 「うしろ」 is the reading of 「後ろ」 (behind), the opposite position; 「ぜん」 is the on-reading, used only in compounds like 「午前（ごぜん）」; 「さき」 is the reading of 「先」 (ahead, before), a different character.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-kanji-031',
    stem: 'ここに 【名前】を かいて ください。',
    options: ['なまえ', 'めいまえ', 'なまい', 'なめえ'],
    answerIndex: 0,
    explanation:
      '「名前」（名字）讀「なまえ」，兩字皆取訓讀。「めいまえ」誤把「名」唸成音讀「めい」（音讀用於「有名」等複合詞）；「なまい」字尾母音錯誤；「なめえ」是把中間的音節唸錯，日語沒有這種讀法，皆非正解。',
    explanationEn:
      '「名前」 (name) is read 「なまえ」, using the kun-readings of both characters. 「めいまえ」 wrongly uses the on-reading 「めい」, which belongs in compounds like 「有名」; 「なまい」 ends in the wrong vowel; 「なめえ」 garbles the middle syllable — no such reading exists in Japanese.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-kanji-032',
    stem: 'えきの ちかくに 【大きい】 スーパーが あります。',
    options: ['おおきい', 'おうきい', 'だいきい', 'ちいさい'],
    answerIndex: 0,
    explanation:
      '「大きい」（大的）讀「おおきい」，注意長音寫作「おお」而非「おう」，這是和語假名遣的例外。「おうきい」正是這個假名遣錯誤；「だいきい」誤用音讀「だい」；「ちいさい」是反義詞「小さい」（小的）的讀法。',
    explanationEn:
      '「大きい」 (big) is read 「おおきい」 — the long vowel is spelled おお, not おう, an exception in native-word kana spelling. 「おうきい」 makes exactly that spelling mistake; 「だいきい」 misuses the on-reading 「だい」; 「ちいさい」 is the reading of the antonym 「小さい」 (small).',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-kanji-033',
    stem: 'この 【小さい】 かばんは かるいです。',
    options: ['ちいさい', 'ちさい', 'しょうさい', 'おおきい'],
    answerIndex: 0,
    explanation:
      '「小さい」（小的）讀「ちいさい」，開頭有長音「ちい」。「ちさい」漏掉了長音，少一拍；「しょうさい」誤用音讀「しょう」，形容詞應取訓讀；「おおきい」是反義詞「大きい」（大的）的讀法，語意剛好相反。',
    explanationEn:
      '「小さい」 (small) is read 「ちいさい」, starting with the long vowel ちい. 「ちさい」 drops the long vowel and loses a beat; 「しょうさい」 misuses the on-reading 「しょう」 — adjectives take the kun-reading; 「おおきい」 is the antonym 「大きい」 (big), the exact opposite meaning.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-kanji-034',
    stem: 'その 【古い】 じてんしゃは ちちのです。',
    options: ['ふるい', 'ふろい', 'こい', 'あたらしい'],
    answerIndex: 0,
    explanation:
      '「古い」（舊的）讀「ふるい」，「古」在形容詞中取訓讀「ふる」。「ふろい」第二拍母音錯誤，「ふろ」是「風呂」（浴室）的讀法；「こい」誤用音讀「こ」；「あたらしい」是反義詞「新しい」（新的）的讀法，語意剛好相反。',
    explanationEn:
      '「古い」 (old) is read 「ふるい」, with 「古」 taking the kun-reading ふる in the adjective. 「ふろい」 has the wrong vowel — 「ふろ」 is the reading of 「風呂」 (bath); 「こい」 misuses the on-reading 「こ」; 「あたらしい」 is the antonym 「新しい」 (new), the exact opposite meaning.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-kanji-035',
    stem: 'この みせの ラーメンは 【安い】です。',
    options: ['やすい', 'やずい', 'あんい', 'たかい'],
    answerIndex: 0,
    explanation:
      '「安い」（便宜）讀「やすい」。「やずい」第二拍誤加濁音，日語沒有這種唸法；「あんい」誤用音讀「あん」（音讀用於「安心」等複合詞），形容詞應取訓讀；「たかい」是反義詞「高い」（貴的）的讀法，語意剛好相反。',
    explanationEn:
      '「安い」 (cheap) is read 「やすい」. 「やずい」 wrongly voices the second syllable — no such reading exists; 「あんい」 misuses the on-reading 「あん」 (found in compounds like 「安心」), but adjectives take the kun-reading; 「たかい」 is the antonym 「高い」 (expensive), the opposite meaning.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-kanji-036',
    stem: 'この かわは とても 【長い】です。',
    options: ['ながい', 'なかい', 'ちょうい', 'みじかい'],
    answerIndex: 0,
    explanation:
      '「長い」（長的）讀「ながい」，「長」在形容詞中取訓讀「なが」。「なかい」第二拍漏了濁音，容易和「中（なか）」混淆；「ちょうい」誤用音讀「ちょう」（音讀用於「校長」等複合詞）；「みじかい」是反義詞「短い」（短的）的讀法。',
    explanationEn:
      '「長い」 (long) is read 「ながい」, with 「長」 taking the kun-reading なが in the adjective. 「なかい」 misses the voiced が and is easily confused with 「中（なか）」; 「ちょうい」 misuses the on-reading 「ちょう」 (as in 「校長」); 「みじかい」 is the antonym 「短い」 (short).',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-kanji-037',
    stem: 'この こうえんには きが 【多い】です。',
    options: ['おおい', 'おうい', 'たい', 'すくない'],
    answerIndex: 0,
    explanation:
      '「多い」（多的）讀「おおい」，和「大きい」一樣，長音寫作「おお」而非「おう」。「おうい」正是這個假名遣錯誤；「たい」誤用音讀「た」（音讀用於「多分」等複合詞）；「すくない」是反義詞「少ない」（少的）的讀法。',
    explanationEn:
      '「多い」 (many) is read 「おおい」 — just like 「大きい」, the long vowel is spelled おお, not おう. 「おうい」 makes exactly that spelling mistake; 「たい」 misuses the on-reading 「た」 (as in 「多分」); 「すくない」 is the reading of the antonym 「少ない」 (few), the opposite meaning.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-kanji-038',
    stem: 'にちようびに デパートへ 【行きます】。',
    options: ['いきます', 'きます', 'おこないます', 'あるきます'],
    answerIndex: 0,
    explanation:
      '「行きます」（去）讀「いきます」，「行」在此取訓讀「い（く）」。「きます」是「来ます」（來）的讀法，移動方向剛好相反；「おこないます」是「行います」（舉行、實施）的讀法，送假名不同；「あるきます」是「歩きます」（走路）的讀法。',
    explanationEn:
      '「行きます」 (to go) is read 「いきます」, with 「行」 taking the kun-reading 「い（く）」 here. 「きます」 is 「来ます」 (to come), movement in the opposite direction; 「おこないます」 is 「行います」 (to carry out), which uses different okurigana; 「あるきます」 is 「歩きます」 (to walk).',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-kanji-039',
    stem: 'ねる まえに ほんを 【読みます】。',
    options: ['よみます', 'よびます', 'どくみます', 'かきます'],
    answerIndex: 0,
    explanation:
      '「読みます」（讀、唸）讀「よみます」，「読」取訓讀「よ（む）」。「よびます」是「呼びます」（呼喚）的讀法，只差一拍卻是不同動詞；「どくみます」誤把音讀「どく」（如「読書」）套進動詞；「かきます」是「書きます」（寫）的讀法。',
    explanationEn:
      '「読みます」 (to read) is read 「よみます」, with 「読」 taking the kun-reading 「よ（む）」. 「よびます」 is 「呼びます」 (to call) — only one syllable apart, but a different verb; 「どくみます」 forces the on-reading 「どく」 (as in 「読書」) into the verb; 「かきます」 is 「書きます」 (to write).',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-kanji-040',
    stem: 'つかれたから、すこし 【休みます】。',
    options: ['やすみます', 'きゅうみます', 'やずみます', 'のみます'],
    answerIndex: 0,
    explanation:
      '「休みます」（休息）讀「やすみます」，「休」取訓讀「やす（む）」。「きゅうみます」誤把音讀「きゅう」（如「休日」）套進動詞；「やずみます」第二拍誤加濁音；「のみます」是「飲みます」（喝）的讀法，是完全不同的動作。',
    explanationEn:
      '「休みます」 (to rest) is read 「やすみます」, with 「休」 taking the kun-reading 「やす（む）」. 「きゅうみます」 forces the on-reading 「きゅう」 (as in 「休日」) into the verb; 「やずみます」 wrongly voices the second syllable; 「のみます」 is 「飲みます」 (to drink), a completely different action.',
  },
]
