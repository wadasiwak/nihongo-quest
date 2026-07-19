import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    kind: 'choice',
    id: 'n4-vocab-kanji-001',
    stem: 'この きかいは ふるいですが、まだ よく 【動く】。',
    options: ['うごく', 'どうく', 'うこく', 'はたらく'],
    answerIndex: 0,
    explanation:
      '「動く」（動、運轉）讀「うごく」，取訓讀。「どうく」是把音讀「どう」（如「運動」）硬套進訓讀動詞；「うこく」第二拍漏了濁音；「はたらく」是「働く」（工作）的讀法，字形相近但是另一個詞，皆非正解。',
    explanationEn:
      '「動く」 (to move, to run) uses the kun-reading うごく. 「どうく」 wrongly forces the on-reading どう (as in 「運動」) onto a kun-reading verb; 「うこく」 drops the voiced sound in the second syllable; 「はたらく」 is the reading of 「働く」 (to work), a similar-looking but different word.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-kanji-002',
    stem: 'ともだちに かさを 【貸して】 あげました。',
    options: ['かして', 'かりて', 'たいして', 'かえして'],
    answerIndex: 0,
    explanation:
      '「貸す」（借出）讀「かす」，「貸して」唸「かして」。「かりて」是「借りて」（借入）的讀法，意思正好相反，最容易混淆；「たいして」是把音讀「たい」硬套進訓讀動詞；「かえして」是「返して」（歸還）的讀法，皆不正確。',
    explanationEn:
      '「貸す」 (to lend) is read かす, so 「貸して」 is かして. 「かりて」 is the reading of 「借りて」 (to borrow) — the exact opposite direction and the most tempting trap; 「たいして」 forces the on-reading たい onto a kun-reading verb; 「かえして」 is 「返して」 (to give back), a different word.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-kanji-003',
    stem: 'じかんが ないので、【急いで】 えきへ いきました。',
    options: ['いそいで', 'きゅういで', 'いそいて', 'さわいで'],
    answerIndex: 0,
    explanation:
      '「急ぐ」（趕快、急忙）讀「いそぐ」，「急いで」唸「いそいで」。「きゅういで」是把音讀「きゅう」（如「特急」）硬套進訓讀動詞；「いそいて」字尾漏了濁音；「さわいで」是「騒いで」（吵鬧）的讀法，皆為錯誤選項。',
    explanationEn:
      '「急ぐ」 (to hurry) is read いそぐ, so 「急いで」 is いそいで. 「きゅういで」 forces the on-reading きゅう (as in 「特急」) onto a kun-reading verb; 「いそいて」 is missing the voiced で at the end; 「さわいで」 is the reading of 「騒いで」 (to make noise), a different verb.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-kanji-004',
    stem: '【世界】には いろいろな くにが あります。',
    options: ['せかい', 'せいかい', 'せがい', 'せっかい'],
    answerIndex: 0,
    explanation:
      '「世界」（世界）讀「せかい」，「世」在此唸短音「せ」。「せいかい」多了長音，變成「正解」（正確答案）的讀音；「せがい」把「かい」誤唸成濁音；「せっかい」誤加促音，皆不是正確讀法。',
    explanationEn:
      '「世界」 (the world) is read せかい, with a short せ. 「せいかい」 adds a long vowel and becomes the reading of 「正解」 (correct answer); 「せがい」 wrongly voices かい into がい; 「せっかい」 wrongly inserts a small っ. Only せかい is correct.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-kanji-005',
    stem: 'ちちは 【料理】が とても じょうずです。',
    options: ['りょうり', 'りょり', 'りゅうり', 'ちょうり'],
    answerIndex: 0,
    explanation:
      '「料理」（料理、做菜）讀「りょうり」。「りょり」漏掉長音「う」；「りゅうり」把拗音「りょ」誤唸成「りゅ」；「ちょうり」是「調理」的讀音，「調」與「料」字形容易看混，但不是「料理」的唸法，皆為錯誤選項。',
    explanationEn:
      '「料理」 (cooking) is read りょうり. 「りょり」 drops the long vowel う; 「りゅうり」 confuses the glide りょ with りゅ; 「ちょうり」 is the reading of 「調理」 — the kanji 「調」 is easy to mistake for 「料」, but that is a different word.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-kanji-006',
    stem: 'なつやすみに かぞくと 【旅行】に いきます。',
    options: ['りょこう', 'りょうこう', 'りよこう', 'たびこう'],
    answerIndex: 0,
    explanation:
      '「旅行」（旅行）讀「りょこう」，「旅」是短音「りょ」。「りょうこう」誤加長音，變成「良好」的讀音；「りよこう」把拗音「りょ」誤唸成直音「りよ」；「たびこう」誤把「旅」的訓讀「たび」混進音讀複合詞，皆不正確。',
    explanationEn:
      '「旅行」 (trip, travel) is read りょこう, with a short りょ. 「りょうこう」 adds a long vowel and becomes the reading of 「良好」 (good, favorable); 「りよこう」 splits the glide りょ into two full syllables; 「たびこう」 wrongly mixes the kun-reading たび into an on-reading compound.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-kanji-007',
    stem: 'ホテルの ひとは とても 【親切】でした。',
    options: ['しんせつ', 'しんぜつ', 'しんせち', 'おやせつ'],
    answerIndex: 0,
    explanation:
      '「親切」（親切）讀「しんせつ」。「しんぜつ」把「切」誤唸成濁音「ぜつ」；「しんせち」字尾錯誤，「切」的音讀在此是「せつ」不是「せち」；「おやせつ」誤把「親」的訓讀「おや」混進音讀複合詞，皆為錯誤讀法。',
    explanationEn:
      '「親切」 (kind, helpful) is read しんせつ. 「しんぜつ」 wrongly voices 「切」 into ぜつ; 「しんせち」 has the wrong ending — the on-reading of 「切」 here is せつ, not せち; 「おやせつ」 wrongly mixes the kun-reading おや of 「親」 into an on-reading compound.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-kanji-008',
    stem: '【特急】に のれば、１じかんで つきます。',
    options: ['とっきゅう', 'とくきゅう', 'とっきゅ', 'とっきょ'],
    answerIndex: 0,
    explanation:
      '「特急」（特快車）讀「とっきゅう」，「特」在此發生促音變化唸「とっ」。「とくきゅう」沒有促音化，直接唸「とく」是錯的；「とっきゅ」漏掉字尾長音「う」；「とっきょ」是「特許」（專利）的讀音，字形相近但語意不同。',
    explanationEn:
      '「特急」 (limited express train) is read とっきゅう — 「特」 changes to とっ with a doubled consonant here. 「とくきゅう」 misses that sound change and keeps plain とく; 「とっきゅ」 drops the final long vowel う; 「とっきょ」 is the reading of 「特許」 (patent), a similar-looking but different word.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-kanji-009',
    stem: 'あには くるまの 【運転】が じょうずです。',
    options: ['うんてん', 'うんでん', 'うてん', 'うんてい'],
    answerIndex: 0,
    explanation:
      '「運転」（駕駛、開車）讀「うんてん」。「うんでん」把「転」誤唸成濁音「でん」（那是「電」的讀音）；「うてん」漏掉撥音「ん」，變成「雨天」的讀音；「うんてい」把字尾撥音誤作長音，皆不是正確讀法。',
    explanationEn:
      '「運転」 (driving) is read うんてん. 「うんでん」 wrongly voices 「転」 into でん (that is the reading of 「電」); 「うてん」 drops the first ん and becomes the reading of 「雨天」 (rainy weather); 「うんてい」 turns the final ん into a long vowel, which is also wrong.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-kanji-010',
    stem: 'きのう こきょうの ははに にもつを 【送りました】。',
    options: ['おくりました', 'そうりました', 'おぐりました', 'おこりました'],
    answerIndex: 0,
    explanation:
      '「送る」（寄送、送行）讀「おくる」，「送りました」唸「おくりました」。「そうりました」是把音讀「そう」（如「放送」）硬套進訓讀動詞；「おぐりました」第二拍誤加濁音；「おこりました」是「怒りました」（生氣了）的讀法，是另一個詞。',
    explanationEn:
      '「送る」 (to send) is read おくる, so 「送りました」 is おくりました. 「そうりました」 forces the on-reading そう (as in 「放送」) onto a kun-reading verb; 「おぐりました」 wrongly voices the second syllable; 「おこりました」 is the reading of 「怒りました」 (got angry), a completely different word.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-kanji-011',
    stem: 'なつは うみで 【泳ぐ】のが すきです。',
    options: ['およぐ', 'えいぐ', 'およく', 'おおぐ'],
    answerIndex: 0,
    explanation:
      '「泳ぐ」（游泳）讀「およぐ」。「えいぐ」是把音讀「えい」（如「水泳」）硬套進訓讀動詞；「およく」字尾漏了濁音；「おおぐ」第二拍誤唸成長音，是不存在的唸法，皆非正解。',
    explanationEn:
      '「泳ぐ」 (to swim) is read およぐ. 「えいぐ」 forces the on-reading えい (as in 「水泳」) onto a kun-reading verb; 「およく」 is missing the voiced ぐ at the end; 「おおぐ」 turns the second syllable into a long vowel, a reading that does not exist.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-kanji-012',
    stem: 'えきの まえに たかい 【建物】が あります。',
    options: ['たてもの', 'けんぶつ', 'たてぶつ', 'たちもの'],
    answerIndex: 0,
    explanation:
      '「建物」（建築物）讀「たてもの」，兩字皆取訓讀。「けんぶつ」誤用音讀，變成「見物」（參觀）的讀音；「たてぶつ」前訓後音、訓音混雜；「たちもの」誤用了「立つ」的讀法，「建」在此唸「たて」，皆為錯誤選項。',
    explanationEn:
      '「建物」 (building) is read たてもの, using kun-readings for both kanji. 「けんぶつ」 uses on-readings instead and is actually the reading of 「見物」 (sightseeing); 「たてぶつ」 mixes a kun-reading with an on-reading; 「たちもの」 wrongly borrows the reading of 「立つ」 — 「建」 here is read たて.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-kanji-013',
    stem: '【台風】で でんしゃが とまって しまいました。',
    options: ['たいふう', 'たいふ', 'だいふう', 'たいかぜ'],
    answerIndex: 0,
    explanation:
      '「台風」（颱風）讀「たいふう」。「たいふ」漏掉字尾長音「う」；「だいふう」誤用了「台」的另一個音讀「だい」（如「台所」），此詞不適用；「たいかぜ」誤把「風」的訓讀「かぜ」混進音讀複合詞，皆不正確。',
    explanationEn:
      '「台風」 (typhoon) is read たいふう. 「たいふ」 drops the final long vowel う; 「だいふう」 uses the other on-reading だい of 「台」 (as in 「台所」), which does not apply to this word; 「たいかぜ」 wrongly mixes the kun-reading かぜ of 「風」 into an on-reading compound.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-kanji-014',
    stem: 'デパートの 【屋上】から まちが よく みえます。',
    options: ['おくじょう', 'おくじょ', 'やうえ', 'おくうえ'],
    answerIndex: 0,
    explanation:
      '「屋上」（屋頂、頂樓）讀「おくじょう」，兩字皆取音讀。「おくじょ」漏掉字尾長音「う」；「やうえ」誤把兩字都唸成訓讀（「屋根」的「や」、「上」的「うえ」）；「おくうえ」前音後訓、訓音混雜，皆為錯誤讀法。',
    explanationEn:
      '「屋上」 (rooftop) is read おくじょう, using on-readings for both kanji. 「おくじょ」 drops the final long vowel う; 「やうえ」 wrongly reads both kanji with kun-readings (や as in 「屋根」, うえ for 「上」); 「おくうえ」 mixes an on-reading with a kun-reading.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-kanji-015',
    stem: 'この へやは 【暗い】ので、でんきを つけましょう。',
    options: ['くらい', 'あんい', 'ぐらい', 'くろい'],
    answerIndex: 0,
    explanation:
      '「暗い」（昏暗）讀「くらい」。「あんい」是把音讀「あん」（如「暗記」）硬套進訓讀形容詞；「ぐらい」開頭誤加濁音；「くろい」是「黒い」（黑色）的讀法，字形與語意都容易聯想，但是另一個詞，皆非正解。',
    explanationEn:
      '「暗い」 (dark, dim) is read くらい. 「あんい」 forces the on-reading あん (as in 「暗記」) onto a kun-reading adjective; 「ぐらい」 wrongly voices the first syllable; 「くろい」 is the reading of 「黒い」 (black) — easy to associate in both shape and meaning, but a different word.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-kanji-016',
    stem: 'わたしは からだが 【弱い】ので、よく かぜを ひきます。',
    options: ['よわい', 'じゃくい', 'わかい', 'つよい'],
    answerIndex: 0,
    explanation:
      '「弱い」（虛弱、弱）讀「よわい」。「じゃくい」是把音讀「じゃく」硬套進訓讀形容詞；「わかい」是「若い」（年輕）的讀法，「弱」與「若」字形相近、最容易看錯；「つよい」是「強い」（強壯）的讀法，語意正好相反。',
    explanationEn:
      '「弱い」 (weak, frail) is read よわい. 「じゃくい」 forces the on-reading じゃく onto a kun-reading adjective; 「わかい」 is the reading of 「若い」 (young) — 「弱」 and 「若」 look very similar and are the easiest to mix up; 「つよい」 is 「強い」 (strong), the exact opposite in meaning.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-kanji-017',
    stem: 'もっと 【力】を いれて ドアを おして ください。',
    options: ['ちから', 'りょく', 'りき', 'ちがら'],
    answerIndex: 0,
    explanation:
      '「力」（力氣）單獨當名詞時取訓讀「ちから」。「りょく」是音讀，只用於「体力」等複合詞；「りき」也是音讀（如「力士」），單獨使用不這樣唸；「ちがら」第二拍誤加濁音，皆為錯誤選項。',
    explanationEn:
      '「力」 (strength) as a standalone noun takes the kun-reading ちから. 「りょく」 is an on-reading used only in compounds like 「体力」; 「りき」 is also an on-reading (as in 「力士」) and is never used for the word on its own; 「ちがら」 wrongly voices the second syllable.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-kanji-018',
    stem: 'この スープは 【味】が すこし うすいです。',
    options: ['あじ', 'み', 'あず', 'におい'],
    answerIndex: 0,
    explanation:
      '「味」（味道）單獨當名詞時取訓讀「あじ」。「み」是音讀，只用於「趣味」「意味」等複合詞，單獨使用不這樣唸；「あず」字尾假名讀錯；「におい」是「匂い」（氣味）的讀法，意思相近但是另一個詞，皆不正確。',
    explanationEn:
      '「味」 (taste, flavor) as a standalone noun takes the kun-reading あじ. 「み」 is the on-reading, used only in compounds like 「趣味」 and 「意味」, never on its own; 「あず」 gets the final kana wrong; 「におい」 is the reading of 「匂い」 (smell) — close in meaning but a different word.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-kanji-019',
    stem: 'おとうとは がいこくの きってを 【集めて】 います。',
    options: ['あつめて', 'しゅうめて', 'あづめて', 'あつまって'],
    answerIndex: 0,
    explanation:
      '「集める」（收集）讀「あつめる」，「集めて」唸「あつめて」。「しゅうめて」是把音讀「しゅう」（如「集合」）硬套進訓讀動詞；「あづめて」第二拍誤用濁音假名「づ」；「あつまって」是自動詞「集まる」的て形，接在「きってを」後面不合文法。',
    explanationEn:
      '「集める」 (to collect) is read あつめる, so 「集めて」 is あつめて. 「しゅうめて」 forces the on-reading しゅう (as in 「集合」) onto a kun-reading verb; 「あづめて」 uses the wrong voiced kana づ in the second syllable; 「あつまって」 is the te-form of the intransitive 「集まる」, which is ungrammatical after 「きってを」.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-kanji-020',
    stem: 'えきで ともだちと 【別れて】、うちへ かえりました。',
    options: ['わかれて', 'べつれて', 'わがれて', 'はなれて'],
    answerIndex: 0,
    explanation:
      '「別れる」（分別、道別）讀「わかれる」，「別れて」唸「わかれて」。「べつれて」是把音讀「べつ」（如「特別」）硬套進訓讀動詞；「わがれて」第二拍誤加濁音；「はなれて」是「離れて」（離開）的讀法，意思相近但是另一個詞。',
    explanationEn:
      '「別れる」 (to part, to say goodbye) is read わかれる, so 「別れて」 is わかれて. 「べつれて」 forces the on-reading べつ (as in 「特別」) onto a kun-reading verb; 「わがれて」 wrongly voices the second syllable; 「はなれて」 is the reading of 「離れて」 (to move away) — similar in meaning but a different word.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-kanji-021',
    stem: 'わたしは 三人 【兄弟】の いちばん 上です。',
    options: ['きょうだい', 'きょだい', 'けいだい', 'あにおとうと'],
    answerIndex: 0,
    explanation:
      '「兄弟」（兄弟姊妹）讀「きょうだい」。「きょだい」漏了長音「う」，變成「巨大」的讀音；「けいだい」誤用「兄」的另一個音讀「けい」（如「父兄」），此詞不適用；「あにおとうと」誤把兩字拆成各自的訓讀，複合詞「兄弟」不這樣唸。',
    explanationEn:
      '「兄弟」 (siblings) is read きょうだい. 「きょだい」 drops the long vowel and becomes the reading of 「巨大」 (huge); 「けいだい」 misuses the other on-reading けい of 「兄」 (as in 「父兄」); 「あにおとうと」 wrongly splits the compound into two kun-readings.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-kanji-022',
    stem: 'もう すこし 大きい 【声】で 話して ください。',
    options: ['こえ', 'せい', 'ごえ', 'おと'],
    answerIndex: 0,
    explanation:
      '「声」（聲音、嗓音）單獨當名詞時取訓讀「こえ」。「せい」是音讀，用於「音声」等複合詞，單獨使用不這樣唸；「ごえ」是連濁後的形（如「歌声」），單獨一詞開頭不加濁音；「おと」是「音」（物體的聲響）的讀法，是另一個詞。',
    explanationEn:
      '「声」 (voice) as a standalone noun takes the kun-reading こえ. 「せい」 is the on-reading used in compounds like 「音声」; 「ごえ」 is the voiced form that appears only inside compounds like 「歌声」, never at the start of the word; 「おと」 is the reading of 「音」 (sound), a different word.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-kanji-023',
    stem: 'あの みせは やすくて いい 【品物】を うって います。',
    options: ['しなもの', 'ひんもの', 'しなぶつ', 'しなもん'],
    answerIndex: 0,
    explanation:
      '「品物」（商品、物品）讀「しなもの」，兩字皆取訓讀。「ひんもの」前音後訓、訓音混雜（「ひん」是「品」的音讀，如「作品」）；「しなぶつ」前訓後音（「ぶつ」是「物」的音讀，如「動物」）；「しなもん」字尾假名錯誤，皆非正解。',
    explanationEn:
      '「品物」 (goods, article) is read しなもの, with kun-readings for both kanji. 「ひんもの」 mixes the on-reading ひん (as in 「作品」) with a kun-reading; 「しなぶつ」 mixes a kun-reading with the on-reading ぶつ (as in 「動物」); 「しなもん」 gets the final kana wrong.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-kanji-024',
    stem: 'つきの 【光】が とても きれいな よるでした。',
    options: ['ひかり', 'こう', 'ひがり', 'ひかる'],
    answerIndex: 0,
    explanation:
      '「光」（光、光線）單獨當名詞時取訓讀「ひかり」。「こう」是音讀，用於「観光」「日光」等複合詞，單獨使用不這樣唸；「ひがり」第二拍誤加濁音；「ひかる」是動詞「光る」的讀法，名詞「光」後面不加「る」，皆為錯誤選項。',
    explanationEn:
      '「光」 (light) as a standalone noun takes the kun-reading ひかり. 「こう」 is the on-reading used in compounds like 「観光」 and 「日光」; 「ひがり」 wrongly voices the second syllable; 「ひかる」 is the reading of the verb 「光る」, not the noun.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-kanji-025',
    stem: 'やまの 上は 【空気】が きれいで、きもちが いいです。',
    options: ['くうき', 'くき', 'そらき', 'くうぎ'],
    answerIndex: 0,
    explanation:
      '「空気」（空氣）讀「くうき」。「くき」漏掉長音「う」，變成「茎」（莖）的讀音；「そらき」誤把「空」的訓讀「そら」混進音讀複合詞；「くうぎ」把「気」誤唸成濁音「ぎ」，皆為錯誤讀法。',
    explanationEn:
      '「空気」 (air) is read くうき. 「くき」 drops the long vowel and becomes the reading of 「茎」 (plant stem); 「そらき」 wrongly mixes the kun-reading そら of 「空」 into an on-reading compound; 「くうぎ」 wrongly voices 「気」 into ぎ.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-kanji-026',
    stem: 'あしたは クラスの みんなと 【遠足】に 行きます。',
    options: ['えんそく', 'えんぞく', 'とおあし', 'えんそこ'],
    answerIndex: 0,
    explanation:
      '「遠足」（遠足、郊遊）讀「えんそく」。「えんぞく」把「足」誤唸成濁音「ぞく」；「とおあし」誤把兩字都唸成訓讀（「遠い」的「とお」、「足」的「あし」），這個複合詞要取音讀；「えんそこ」字尾錯誤，「足」的音讀是「そく」不是「そこ」。',
    explanationEn:
      '「遠足」 (school excursion) is read えんそく. 「えんぞく」 wrongly voices 「足」 into ぞく; 「とおあし」 wrongly reads both kanji with kun-readings (とお as in 「遠い」, あし for 「足」) although this compound takes on-readings; 「えんそこ」 gets the ending wrong — the on-reading of 「足」 is そく.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-kanji-027',
    stem: 'すずきさんが おいしい みせを 【教えて】 くれました。',
    options: ['おしえて', 'きょうえて', 'おそえて', 'おぼえて'],
    answerIndex: 0,
    explanation:
      '「教える」（教、告訴）讀「おしえる」，「教えて」唸「おしえて」。「きょうえて」是把音讀「きょう」（如「教室」）硬套進訓讀動詞；「おそえて」是和「教わる（おそわる）」（受教、跟人學）混淆的錯誤形；「おぼえて」是「覚えて」（記住）的讀法，是另一個詞。',
    explanationEn:
      '「教える」 (to teach, to tell) is read おしえる, so 「教えて」 is おしえて. 「きょうえて」 forces the on-reading きょう (as in 「教室」) onto a kun-reading verb; 「おそえて」 confuses it with 「教わる」 (おそわる, to be taught); 「おぼえて」 is the reading of 「覚えて」 (to memorize), a different word.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-kanji-028',
    stem: 'じゅぎょうは 九時に 【始まります】。',
    options: ['はじまります', 'しまります', 'はしまります', 'はじめます'],
    answerIndex: 0,
    explanation:
      '「始まる」（開始）是自動詞，讀「はじまる」。「しまります」是「閉まる」（關上）的讀法，是另一個詞；「はしまります」第二拍假名錯誤；「はじめます」是他動詞「始める」的讀法，送假名不同，「始まります」不能這樣唸，皆非正解。',
    explanationEn:
      '「始まる」 (to begin, intransitive) is read はじまる. 「しまります」 is the reading of 「閉まる」 (to close), a different verb; 「はしまります」 has the wrong second kana; 「はじめます」 is the reading of the transitive 「始める」, whose okurigana differs, so it cannot be the reading of 「始まります」.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-kanji-029',
    stem: 'じかんが なかったので、えきまで 【走って】 行きました。',
    options: ['はしって', 'そうって', 'あるいて', 'はしいって'],
    answerIndex: 0,
    explanation:
      '「走る」（跑）讀「はしる」，「走って」唸「はしって」。「そうって」是把音讀「そう」（如「走行」）硬套進訓讀動詞；「あるいて」是「歩いて」（走路）的讀法，語意相關但是另一個詞；「はしいって」多了一拍假名，皆非正解。',
    explanationEn:
      '「走る」 (to run) is read はしる, so 「走って」 is はしって. 「そうって」 forces the on-reading そう (as in 「走行」) onto a kun-reading verb; 「あるいて」 is the reading of 「歩いて」 (to walk), a related but different verb; 「はしいって」 inserts an extra kana.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-kanji-030',
    stem: '【春】に なると、この こうえんは さくらが きれいです。',
    options: ['はる', 'しゅん', 'はり', 'なつ'],
    answerIndex: 0,
    explanation:
      '「春」（春天）單獨當名詞時取訓讀「はる」。「しゅん」是音讀，用於「春分」等複合詞，單獨使用不這樣唸；「はり」字尾假名錯誤，是「針」的讀法；「なつ」是「夏」（夏天）的讀法，季節弄錯了，皆不正確。',
    explanationEn:
      '「春」 (spring) as a standalone noun takes the kun-reading はる. 「しゅん」 is the on-reading used in compounds like 「春分」; 「はり」 has the wrong final kana and is actually the reading of 「針」 (needle); 「なつ」 is the reading of 「夏」 (summer), the wrong season.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-kanji-031',
    stem: 'ねつが さがらないので、【医者】に みて もらいました。',
    options: ['いしゃ', 'いしや', 'いじゃ', 'いっしゃ'],
    answerIndex: 0,
    explanation:
      '「医者」（醫生）讀「いしゃ」，「者」在「医者」「学者」等複合詞中讀「しゃ」。「いしや」把拗音「しゃ」誤唸成兩拍的「しや」；「いじゃ」誤加濁音；「いっしゃ」誤加促音，皆是不存在的讀法。',
    explanationEn:
      '「医者」 (doctor) is read いしゃ — in compounds like 「医者」 and 「学者」, 「者」 is read しゃ. 「いしや」 splits the glide しゃ into two full syllables; 「いじゃ」 wrongly adds voicing; 「いっしゃ」 wrongly inserts a small っ.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-kanji-032',
    stem: 'からだの ために、まいにち 【野菜】を たくさん 食べます。',
    options: ['やさい', 'のさい', 'やせい', 'やざい'],
    answerIndex: 0,
    explanation:
      '「野菜」（蔬菜）讀「やさい」。「のさい」誤把「野」的訓讀「の」（如「野原」）混進音讀複合詞；「やせい」是「野生」的讀音，字形相近但是另一個詞；「やざい」把「さい」誤唸成濁音，皆為錯誤選項。',
    explanationEn:
      '「野菜」 (vegetables) is read やさい. 「のさい」 wrongly mixes the kun-reading の of 「野」 (as in 「野原」) into an on-reading compound; 「やせい」 is the reading of 「野生」 (wild), a similar-looking but different word; 「やざい」 wrongly voices さい into ざい.',
  },
]
