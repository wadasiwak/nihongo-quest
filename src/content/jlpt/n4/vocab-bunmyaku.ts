import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  // ---------- 名詞（7 題） ----------
  {
    kind: 'choice',
    id: 'n4-vocab-bunmyaku-001',
    stem: 'あしたの パーティーの ために、飲み物や おかしを （　）します。',
    options: ['用意', '遠慮', '約束', '経験'],
    answerIndex: 0,
    explanation:
      '為了明天的派對要把飲料和點心「準備好」，正解是「用意（ようい）」（準備）。「遠慮（えんりょ）」是客氣、迴避，不能拿來準備東西；「約束」是約定、「経験」是經驗，都無法接「飲み物やおかしを〜する」，語意不通。',
    explanationEn:
      'You need to get drinks and snacks ready for tomorrow\'s party, so 「用意」 (ようい, preparation) is correct. 「遠慮」 (えんりょ) means holding back or refraining, so you can\'t use it for preparing things; 「約束」 (promise) and 「経験」 (experience) make no sense with 「飲み物やおかしを〜する」.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-bunmyaku-002',
    stem: '友だちと 三時に 駅で 会う （　）を しました。',
    options: ['約束', 'あいさつ', 'けんか', 'うそ'],
    answerIndex: 0,
    explanation:
      '和朋友「約好」三點在車站見面，正解是「約束（やくそく）」（約定），「会う約束をする」是固定說法。「あいさつ」（打招呼）不能說「会うあいさつをした」；「けんか」（吵架）和「うそ」（謊話）接在「会う」後面都語意不通。',
    explanationEn:
      'You made an arrangement to meet a friend at the station at three — 「約束」 (やくそく, promise/appointment) is correct, and 「会う約束をする」 is a set expression. 「あいさつ」 (greeting) can\'t be used as 「会うあいさつをした」; 「けんか」 (quarrel) and 「うそ」 (lie) make no sense after 「会う」.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-bunmyaku-003',
    stem: '雨が 降った （　）は、あしたの 試合は 中止です。',
    options: ['場合', '都合', '気分', '景色'],
    answerIndex: 0,
    explanation:
      '「〜た場合（ばあい）は」表示「在〜的情況下」，下雨的情況比賽就中止，正解是「場合」。「都合（つごう）」是（個人的）方便與否，不接在「雨が降った」後面；「気分」（心情）、「景色」（風景）放進句中都不合語境。',
    explanationEn:
      '「〜た場合は」 means "in the case that...", so if it rains, tomorrow\'s match is cancelled — 「場合」 (ばあい) is correct. 「都合」 (つごう) refers to one\'s personal convenience and doesn\'t follow 「雨が降った」; 「気分」 (mood) and 「景色」 (scenery) don\'t fit the sentence at all.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-bunmyaku-004',
    stem: 'その 日は （　）が 悪くて、パーティーに 行けません。',
    options: ['都合', 'けしき', 'あいさつ', 'おつり'],
    answerIndex: 0,
    explanation:
      '「都合（つごう）が悪い」是固定搭配，表示「時間上不方便」，所以那天去不了派對，正解是「都合」。「けしき」（風景）雖然也能說「が悪い」，但風景不好不會是去不了派對的理由；「あいさつ」（招呼）、「おつり」（找零）都不合語境。',
    explanationEn:
      '「都合が悪い」 is a set phrase meaning the timing doesn\'t work for you, which is why you can\'t attend the party that day — 「都合」 (つごう) is correct. 「けしき」 (scenery) can technically take 「が悪い」, but bad scenery is no reason to miss a party; 「あいさつ」 (greeting) and 「おつり」 (change) don\'t fit either.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-bunmyaku-005',
    stem: '私は 外国で 働いた （　）が あります。',
    options: ['経験', '習慣', '興味', '約束'],
    answerIndex: 0,
    explanation:
      '「〜た経験（けいけん）がある」表示「有做過〜的經驗」，正解是「経験」。「習慣（しゅうかん）」要接辭書形，說「働く習慣」才通，接過去形不對；「興味（きょうみ）」的用法是「〜に興味がある」；「約束」也不能接「働いた」，皆不合文法或語境。',
    explanationEn:
      '「〜た経験がある」 means "to have the experience of doing something", so 「経験」 (けいけん) is correct. 「習慣」 (habit) takes the dictionary form — 「働く習慣」, not the past form; 「興味」 (interest) is used as 「〜に興味がある」; 「約束」 (promise) can\'t follow 「働いた」 either.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-bunmyaku-006',
    stem: '店の 中では、たばこは ご（　）ください。',
    options: ['遠慮', '案内', '連絡', '招待'],
    answerIndex: 0,
    explanation:
      '「ご遠慮（えんりょ）ください」是委婉請對方不要做某事的固定說法，「請勿吸菸」正解是「遠慮」。「ご案内ください」「ご連絡ください」雖然是真實存在的敬語表達，但意思是「請引導」「請聯絡」，接在「たばこは」後面完全不通；「招待」（邀請）也不合語境。',
    explanationEn:
      '「ご遠慮ください」 is the polite set phrase for asking someone to refrain from doing something — here, "please refrain from smoking" — so 「遠慮」 (えんりょ) is correct. 「ご案内ください」 and 「ご連絡ください」 are real polite expressions, but they mean "please guide me" and "please contact me", which make no sense after 「たばこは」; 「招待」 (invitation) doesn\'t fit either.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-bunmyaku-007',
    stem: '旅行に 行った とき、家族に （　）を 買いました。',
    options: ['おみやげ', 'おつり', 'おしらせ', 'わすれもの'],
    answerIndex: 0,
    explanation:
      '去旅行時買給家人的東西是「おみやげ」（伴手禮、土產），正解。「おつり」是找零，是店家找給你的，不能「買」；「おしらせ」（通知）不是買來送人的東西；「わすれもの」（遺失物、忘記帶的東西）更不會特地買給家人，皆不合語境。',
    explanationEn:
      'What you buy for your family on a trip is 「おみやげ」 (a souvenir), so that is the answer. 「おつり」 is the change a shop hands back to you — you can\'t buy it; 「おしらせ」 (a notice) isn\'t something you buy as a gift; and nobody would buy their family a 「わすれもの」 (a forgotten or lost item).',
  },
  // ---------- 動詞（6 題） ----------
  {
    kind: 'choice',
    id: 'n4-vocab-bunmyaku-008',
    stem: '電車に （　）ないように、早く 家を 出ました。',
    options: ['おくれ', 'まちがえ', 'ぬれ', 'こわれ'],
    answerIndex: 0,
    explanation:
      '為了不「趕不上」電車而提早出門，正解是「おくれる」（遅れる，遲到、沒趕上），「電車に遅れる」是固定搭配。「まちがえる」（弄錯）要說「乗りまちがえる」才通；「ぬれる」（淋濕）、「こわれる」（壞掉）接「電車に」都語意不通。',
    explanationEn:
      'You left home early so as not to miss the train — 「おくれる」 (遅れる, to be late for) is correct, and 「電車に遅れる」 is a set collocation. 「まちがえる」 (to make a mistake) would need to be 「乗りまちがえる」 (take the wrong train); 「ぬれる」 (to get wet) and 「こわれる」 (to break) make no sense with 「電車に」.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-bunmyaku-009',
    stem: '新しい 学校の 生活にも、もう （　）ました。',
    options: ['なれ', 'おぼえ', 'ならび', 'さわり'],
    answerIndex: 0,
    explanation:
      '「〜になれる」（慣れる）表示「習慣了〜」，已經習慣新學校的生活，正解是「なれました」。「おぼえる」（記住）語意相近但助詞要用「を」，說「生活におぼえました」文法錯誤；「ならぶ」（排隊）、「さわる」（觸摸）接「生活に」都不合語境。',
    explanationEn:
      '「〜になれる」 (慣れる) means "to get used to", so having already adjusted to life at the new school, 「なれました」 is correct. 「おぼえる」 (to memorize) feels close in meaning but takes the particle 「を」, so 「生活におぼえました」 is ungrammatical; 「ならぶ」 (to line up) and 「さわる」 (to touch) don\'t work with 「生活に」.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-bunmyaku-010',
    stem: 'かぎが なくて、かばんの 中を （　）ました。',
    options: ['さがし', 'みつけ', 'ひろい', 'おとし'],
    answerIndex: 0,
    explanation:
      '鑰匙不見了，於是「翻找」包包裡面，正解是「さがす」（探す，尋找），「かばんの中をさがす」自然。「みつける」（找到）的受詞是找到的東西本身，不能說「かばんの中をみつけた」；「ひろう」（撿）、「おとす」（弄掉）也都不能接「かばんの中を」。',
    explanationEn:
      'The key was missing, so you searched inside the bag — 「さがす」 (探す, to search for) is correct, and 「かばんの中をさがす」 is natural. 「みつける」 (to find) takes the found item itself as its object, so 「かばんの中をみつけた」 is wrong; 「ひろう」 (to pick up) and 「おとす」 (to drop) can\'t take 「かばんの中を」 either.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-bunmyaku-011',
    stem: '道で さいふを 拾ったので、交番に （　）ました。',
    options: ['とどけ', 'うけとり', 'すて', 'ならべ'],
    answerIndex: 0,
    explanation:
      '在路上撿到錢包，送交派出所，正解是「とどける」（届ける，送交、送到），「交番にとどける」是處理失物的固定說法。「うけとる」（收下）方向相反，是收的人做的動作；「すてる」（丟掉）撿到後拿去派出所丟語意矛盾；「ならべる」（排列）不合語境。',
    explanationEn:
      'You found a wallet on the street and handed it in at the police box — 「とどける」 (届ける, to deliver/hand in) is correct, and 「交番にとどける」 is the standard phrase for lost property. 「うけとる」 (to receive) is the opposite direction — the recipient\'s action; 「すてる」 (to throw away) contradicts bringing it to the police; 「ならべる」 (to line up) doesn\'t fit.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-bunmyaku-012',
    stem: '友だちを 花見に （　）ましたが、用事が あって 来られませんでした。',
    options: ['さそい', 'むかえ', 'おくり', 'はこび'],
    answerIndex: 0,
    explanation:
      '「邀請」朋友去賞花但對方有事不能來，正解是「さそう」（誘う，邀約），「〜に誘う」是固定用法。「むかえる」（迎接）、「おくる」（送行）都是人已經要來或要走時的動作，和後句「不能來」矛盾；「はこぶ」（搬運）的受詞是物品，不合語境。',
    explanationEn:
      'You invited a friend to cherry-blossom viewing, but they had something on and couldn\'t come — 「さそう」 (誘う, to invite) is correct, in the pattern 「〜に誘う」. 「むかえる」 (to go meet someone) and 「おくる」 (to see someone off) both assume the person is already coming or leaving, contradicting "couldn\'t come"; 「はこぶ」 (to carry) takes objects, not people.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-bunmyaku-013',
    stem: '時計が （　）ので、新しいのを 買いました。',
    options: ['こわれた', 'なおった', 'やぶれた', 'おれた'],
    answerIndex: 0,
    explanation:
      '手錶「壞了」所以買新的，正解是「こわれる」（壊れる，故障、壞掉）。「なおる」（直る，修好）意思相反，修好了就不必買新的；「やぶれる」（破れる）用於紙、布等破裂，「おれる」（折れる）用於棒狀物折斷，都不能用在手錶故障上，搭配錯誤。',
    explanationEn:
      'The watch broke, so you bought a new one — 「こわれる」 (壊れる, to break down) is correct. 「なおる」 (直る, to get fixed) means the opposite — if it were fixed you wouldn\'t need a new one; 「やぶれる」 (破れる) is for paper or cloth tearing, and 「おれる」 (折れる) is for stick-like things snapping — neither collocates with a watch breaking down.',
  },
  // ---------- 形容詞（4 題） ----------
  {
    kind: 'choice',
    id: 'n4-vocab-bunmyaku-014',
    stem: 'この 鳥は 日本では とても （　）ので、見られたら うれしいです。',
    options: ['めずらしい', 'きびしい', 'まぶしい', 'おとなしい'],
    answerIndex: 0,
    explanation:
      '這種鳥在日本很「稀有」，所以看得到會很開心，正解是「めずらしい」（珍しい，罕見的）。「きびしい」（嚴格的）用於人或規定；「まぶしい」（刺眼的）用於光線；「おとなしい」（乖巧安靜的）雖可形容鳥的性格，但和「看到會開心」的因果不通。',
    explanationEn:
      'This bird is very rare in Japan, which is why spotting it would make you happy — 「めずらしい」 (珍しい, rare) is correct. 「きびしい」 (strict) describes people or rules; 「まぶしい」 (dazzling) describes light; 「おとなしい」 (quiet, docile) could describe a bird\'s temperament, but it doesn\'t explain why seeing one would be a delight.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-bunmyaku-015',
    stem: 'みんなの 前で 歌を まちがえて、とても （　）かったです。',
    options: ['はずかし', 'うれし', 'ただし', 'めずらし'],
    answerIndex: 0,
    explanation:
      '在大家面前唱錯歌，感到很「丟臉」，正解是「はずかしい」（恥ずかしい，害羞、難為情）。「うれしい」（高興的）和唱錯歌的情境矛盾；「ただしい」（正確的）用來形容答案或行為，不能表達心情；「めずらしい」（罕見的）也不是形容心情的詞。',
    explanationEn:
      'Getting the song wrong in front of everyone felt very embarrassing — 「はずかしい」 (恥ずかしい, embarrassed) is correct. 「うれしい」 (happy) contradicts the situation of messing up a song; 「ただしい」 (correct) describes answers or behavior, not feelings; 「めずらしい」 (rare) isn\'t a feeling word either.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-bunmyaku-016',
    stem: '弟は 毎日 （　）に サッカーの 練習を して います。',
    options: ['ねっしん', 'ざんねん', 'じゃま', 'きけん'],
    answerIndex: 0,
    explanation:
      '弟弟每天「認真、熱衷」地練足球，正解是「ねっしん」（熱心，熱衷、勤奮），「熱心に練習する」是常見搭配。「ざんねん」（残念，可惜）表達遺憾的心情，不能形容練習的態度；「じゃま」（礙事）、「きけん」（危險）接「〜に練習する」都語意不通。',
    explanationEn:
      'The younger brother practices soccer eagerly every day — 「ねっしん」 (熱心, enthusiastic, diligent) is correct, and 「熱心に練習する」 is a common pairing. 「ざんねん」 (残念, regrettable) expresses disappointment, not an attitude toward practice; 「じゃま」 (in the way) and 「きけん」 (dangerous) make no sense with 「〜に練習する」.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-bunmyaku-017',
    stem: 'この 道は 車が 少ないので、子どもでも （　）です。',
    options: ['あんぜん', 'きけん', 'むり', 'じゃま'],
    answerIndex: 0,
    explanation:
      '這條路車少，所以連小孩走也很「安全」，正解是「あんぜん」（安全）。「きけん」（危険，危險）意思正好相反，和「車が少ない」的理由矛盾；「むり」（無理，辦不到）同樣和前面「車少」的理由接不起來；「じゃま」（礙事）也不合語境。',
    explanationEn:
      'This road has little traffic, so it is safe even for children — 「あんぜん」 (安全, safe) is correct. 「きけん」 (危険, dangerous) is the exact opposite and contradicts the reason 「車が少ない」; 「むり」 (無理, impossible) doesn\'t follow from having few cars either; 「じゃま」 (in the way) doesn\'t fit the context.',
  },
  // ---------- 副詞（3 題） ----------
  {
    kind: 'choice',
    id: 'n4-vocab-bunmyaku-018',
    stem: '四月に なって、（　） あたたかく なって きました。',
    options: ['だんだん', 'はっきり', 'ぜんぜん', 'なかなか'],
    answerIndex: 0,
    explanation:
      '到了四月天氣「漸漸」變暖，正解是「だんだん」（逐漸），和表示變化的「〜なってきました」搭配自然。「はっきり」（清楚地）不能形容變暖的過程；「ぜんぜん」（完全〜）後面要接否定；「なかなか」表示「遲遲不〜」時也須接否定，皆不合。',
    explanationEn:
      'With April here, it has gradually been getting warmer — 「だんだん」 (gradually) is correct and pairs naturally with the change expression 「〜なってきました」. 「はっきり」 (clearly) can\'t describe a warming process; 「ぜんぜん」 (not at all) requires a negative; 「なかなか」 in its "not readily" sense also needs a negative.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-bunmyaku-019',
    stem: '電話の 声が 小さくて、（　） 聞こえませんでした。',
    options: ['はっきり', 'ゆっくり', 'そろそろ', 'にっこり'],
    answerIndex: 0,
    explanation:
      '電話的聲音太小，聽不「清楚」，正解是「はっきり」（清楚地），「はっきり聞こえない」是常見搭配。「ゆっくり」（慢慢地）形容速度，不能修飾「聽不見」；「そろそろ」（差不多該〜）用於時間點；「にっこり」（微笑貌）修飾笑容，皆不合語境。',
    explanationEn:
      'The voice on the phone was so quiet that you couldn\'t hear it clearly — 「はっきり」 (clearly) is correct, and 「はっきり聞こえない」 is a common pairing. 「ゆっくり」 (slowly) describes speed, not audibility; 「そろそろ」 (about time to...) is about timing; 「にっこり」 (with a smile) describes smiling — none fit.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-bunmyaku-020',
    stem: '一時間 待って、（　） バスが 来ました。',
    options: ['やっと', 'そろそろ', 'たとえば', 'けっして'],
    answerIndex: 0,
    explanation:
      '等了一小時，公車「終於」來了，正解是「やっと」（終於、好不容易），和「等了很久」的語境呼應。「そろそろ」是「差不多該〜了」，用在事情發生前的推測，不能接已經發生的「来ました」；「たとえば」（例如）、「けっして」（絕不，須接否定）皆不合。',
    explanationEn:
      'After waiting an hour, the bus finally came — 「やっと」 (finally, at long last) is correct, echoing the long wait. 「そろそろ」 means "it should be about time", used before something happens, so it can\'t go with the completed 「来ました」; 「たとえば」 (for example) doesn\'t fit, and 「けっして」 (never) requires a negative.',
  },
  // ---------- 追加：名詞（2 題） ----------
  {
    kind: 'choice',
    id: 'n4-vocab-bunmyaku-021',
    stem: 'わたしの （　）は、古い カメラを あつめる ことです。',
    options: ['しゅみ', 'やくそく', 'ようじ', 'けいけん'],
    answerIndex: 0,
    explanation:
      '「我的『興趣』是收集老相機」，正解是「しゅみ」（趣味，興趣、嗜好），「趣味は〜ことです」是介紹嗜好的固定句型。「やくそく」（約定）、「ようじ」（要辦的事）、「けいけん」（經驗）雖然都是名詞，但接「〜は…あつめる ことです」都語意不通。',
    explanationEn:
      '"My hobby is collecting old cameras" — 「しゅみ」 (趣味, hobby) is correct, and 「趣味は〜ことです」 is the set pattern for introducing hobbies. 「やくそく」 (promise), 「ようじ」 (errand), and 「けいけん」 (experience) are all nouns, but none of them makes sense in 「〜は…あつめる ことです」.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-bunmyaku-022',
    stem: 'なつやすみの （　）は、もう 決まりましたか。',
    options: ['よてい', 'おつり', 'おしらせ', 'あいさつ'],
    answerIndex: 0,
    explanation:
      '「暑假的『計畫』決定了嗎」，正解是「よてい」（予定，預定、計畫），「予定が決まる」是常見搭配。「おつり」（找零）、「あいさつ」（打招呼）接「なつやすみの」語意不通；「おしらせ」（通知）是發布出來的消息，不會用「もう決まりましたか」問對方。',
    explanationEn:
      '"Have you decided your plans for summer vacation?" — 「よてい」 (予定, plans) is correct, and 「予定が決まる」 is a common collocation. 「おつり」 (change) and 「あいさつ」 (greeting) make no sense after 「なつやすみの」; 「おしらせ」 (a notice) is information that gets announced, so you would not ask whether it has been "decided".',
  },
  // ---------- 追加：動詞（5 題） ----------
  {
    kind: 'choice',
    id: 'n4-vocab-bunmyaku-023',
    stem: '父の しごとで、来月 大阪へ （　）ことに なりました。',
    options: ['ひっこす', 'かたづける', 'うけとる', 'ならべる'],
    answerIndex: 0,
    explanation:
      '因為爸爸的工作，下個月要「搬家」到大阪，正解是「ひっこす」（引っ越す，搬家），「大阪へ引っ越す」搭配自然。「かたづける」（收拾）、「うけとる」（收下）、「ならべる」（排列）都是需要受詞的他動詞，而且接「大阪へ」語意都不通。',
    explanationEn:
      'Because of Dad\'s job, the family is moving to Osaka next month — 「ひっこす」 (引っ越す, to move house) is correct, and 「大阪へ引っ越す」 is a natural pairing. 「かたづける」 (to tidy up), 「うけとる」 (to receive), and 「ならべる」 (to line up) are all transitive verbs that need objects, and none of them works with 「大阪へ」.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-bunmyaku-024',
    stem: '家の かぎを （　）しまって、へやに 入れませんでした。',
    options: ['なくして', 'けして', 'ならべて', 'みがいて'],
    answerIndex: 0,
    explanation:
      '把家裡的鑰匙「弄丟」了，所以進不了房間，正解是「なくす」（無くす，遺失）。「けす」（消す）用於關燈、擦掉字，不能接鑰匙；「ならべる」（排列）、「みがく」（磨亮、刷）雖然文法上能接「かぎを」，但都不會造成「進不了房間」的結果，語境不合。',
    explanationEn:
      'You lost the house key and could not get into your room — 「なくす」 (to lose) is correct. 「けす」 (消す) is for turning off lights or erasing writing, not keys; 「ならべる」 (to line up) and 「みがく」 (to polish) can grammatically take 「かぎを」, but neither would leave you locked out, so they do not fit the context.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-bunmyaku-025',
    stem: '日曜日、弟を どうぶつえんへ （　） 行きました。',
    options: ['つれて', 'もって', 'おいて', 'かして'],
    answerIndex: 0,
    explanation:
      '帶弟弟去動物園，正解是「つれる」（連れる，帶〈人〉同行），「〜をつれて行く」是固定用法。「もって行く」的對象是物品，不能用在人身上；「おいて行く」是把人留下、自己走掉，和「帶去動物園」矛盾；「かして」（借出）接人完全不通。',
    explanationEn:
      'You took your little brother to the zoo — 「つれる」 (連れる, to take a person along) is correct, in the set pattern 「〜をつれて行く」. 「もって行く」 is for carrying things, not people; 「おいて行く」 means leaving someone behind, contradicting taking him to the zoo; 「かして」 (to lend) makes no sense with a person.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-bunmyaku-026',
    stem: 'からだに よくないので、父は たばこを （　）ました。',
    options: ['やめ', 'とめ', 'しめ', 'ひろい'],
    answerIndex: 0,
    explanation:
      '因為對身體不好，爸爸「戒掉」了菸，正解是「やめる」（停止、戒除），「たばこをやめる」是固定說法。「とめる」（止める）是使移動中的東西停下（如車子）；「しめる」（閉める）是關門窗；「ひろう」（撿）在這個語境更不合理，皆非正解。',
    explanationEn:
      'Because it was bad for his health, Dad quit smoking — 「やめる」 (to quit) is correct, and 「たばこをやめる」 is the set phrase. 「とめる」 (止める) means stopping something in motion, like a car; 「しめる」 (閉める) is for closing doors or windows; 「ひろう」 (to pick up) makes no sense at all in this context.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-bunmyaku-027',
    stem: 'あさ 七時に、まだ ねて いる 弟を （　）ました。',
    options: ['おこし', 'おき', 'さまし', 'あけ'],
    answerIndex: 0,
    explanation:
      '把還在睡的弟弟「叫醒」，正解是他動詞「おこす」（起こす，喚醒）。「おきる」（起きる）是自動詞「自己起床」，不能接「弟を」，是自他動詞混淆；「さます」（覚ます）要說「目をさます」，不能直接接人；「あける」（開ける）是開門窗，語意不通。',
    explanationEn:
      'You woke up your still-sleeping brother — the transitive 「おこす」 (起こす, to wake someone) is correct. 「おきる」 (起きる) is intransitive, "to get up by oneself", so it cannot take 「弟を」 — a transitivity mix-up; 「さます」 (覚ます) is used as 「目をさます」, not directly with a person; 「あける」 (to open) makes no sense here.',
  },
  // ---------- 追加：形容詞（3 題） ----------
  {
    kind: 'choice',
    id: 'n4-vocab-bunmyaku-028',
    stem: 'この 川は （　）ので、およいでは いけません。',
    options: ['ふかい', 'ながい', 'こい', 'まるい'],
    answerIndex: 0,
    explanation:
      '這條河很「深」所以禁止游泳，正解是「ふかい」（深い，深的），水深才會危險。「ながい」（長的）河很長和能不能游泳無關，因果接不起來；「こい」（濃い）形容味道、顏色濃；「まるい」（圓的）形容形狀，皆不合語境。',
    explanationEn:
      'This river is deep, so swimming is not allowed — 「ふかい」 (深い, deep) is correct, since depth is what makes it dangerous. 「ながい」 (long) has nothing to do with whether you can swim there; 「こい」 (濃い) describes strong flavors or colors; 「まるい」 (round) describes shape.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-bunmyaku-029',
    stem: 'ゆうべ おそくまで おきて いたので、きょうは とても （　）です。',
    options: ['ねむい', 'まぶしい', 'いそがしい', 'うるさい'],
    answerIndex: 0,
    explanation:
      '昨晚熬夜到很晚，今天很「睏」，正解是「ねむい」（眠い，想睡的），和「おそくまで おきて いた」因果相連。「まぶしい」（刺眼的）形容光線；「いそがしい」（忙碌）和熬夜沒有必然關係，因果不通；「うるさい」（吵鬧）形容聲音，皆不合。',
    explanationEn:
      'You stayed up late last night, so today you are very sleepy — 「ねむい」 (眠い) is correct, following logically from 「おそくまで おきて いた」. 「まぶしい」 (dazzling) describes light; 「いそがしい」 (busy) does not follow from staying up late; 「うるさい」 (noisy) describes sound.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-bunmyaku-030',
    stem: 'たのしみに して いた りょこうが 中止に なって、とても （　）です。',
    options: ['ざんねん', 'べんり', 'にぎやか', 'じょうぶ'],
    answerIndex: 0,
    explanation:
      '期待已久的旅行取消了，覺得很「可惜、遺憾」，正解是「ざんねん」（残念）。「べんり」（便利，方便）、「にぎやか」（熱鬧）、「じょうぶ」（丈夫，堅固結實）都是な形容詞，但沒有一個能表達「期待落空」的心情，語境完全不合。',
    explanationEn:
      'The trip you were looking forward to was cancelled, and you feel very disappointed — 「ざんねん」 (残念) is correct. 「べんり」 (convenient), 「にぎやか」 (lively), and 「じょうぶ」 (sturdy) are all na-adjectives, but none of them expresses the feeling of dashed hopes.',
  },
  // ---------- 追加：副詞（2 題） ----------
  {
    kind: 'choice',
    id: 'n4-vocab-bunmyaku-031',
    stem: 'こんど （　） わたしの うちへ あそびに 来て ください。',
    options: ['ぜひ', 'けっして', 'あまり', 'たぶん'],
    answerIndex: 0,
    explanation:
      '邀請對方「請務必」來家裡玩，正解是「ぜひ」（務必、一定），常和「〜てください」搭配表達誠摯邀請。「けっして」（絕不）和「あまり」（不太）後面都必須接否定；「たぶん」（大概）是推測用語，不能用來拜託別人，皆不合。',
    explanationEn:
      '"Please do come to my house next time" — 「ぜひ」 (by all means) is correct, often paired with 「〜てください」 for heartfelt invitations. 「けっして」 (never) and 「あまり」 (not very) both require negative endings; 「たぶん」 (probably) expresses conjecture and cannot be used in a request.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-bunmyaku-032',
    stem: 'バスが （　） 来ないので、タクシーで 行きました。',
    options: ['なかなか', 'そろそろ', 'さっき', 'だいたい'],
    answerIndex: 0,
    explanation:
      '公車「遲遲」不來所以改搭計程車，正解是「なかなか」，「なかなか〜ない」表示事情遲遲不發生。「そろそろ」（差不多該）用於肯定的推測，不接「来ない」；「さっき」（剛才）指過去的時間點；「だいたい」（大致）講程度或概數，皆與語境不合。',
    explanationEn:
      'The bus just would not come, so you took a taxi — 「なかなか」 is correct: 「なかなか〜ない」 means something takes forever to happen. 「そろそろ」 (about time to) goes with affirmative expectation, not 「来ない」; 「さっき」 (a moment ago) marks a past time point; 「だいたい」 (roughly) is about approximation.',
  },
]
