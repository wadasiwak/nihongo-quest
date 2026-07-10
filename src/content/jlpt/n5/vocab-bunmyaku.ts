import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  // ---------- 名詞（7 題） ----------
  {
    kind: 'choice',
    id: 'n5-vocab-bunmyaku-001',
    stem: 'えきで でんしゃの （　）を かいました。',
    options: ['きっぷ', 'さいふ', 'でんわ', 'くつ'],
    answerIndex: 0,
    explanation:
      '在車站買「電車的～」，合理的只有「きっぷ」（車票）。「さいふ」是錢包，說「電車的錢包」語意不通；「でんわ」（電話）和「くつ」（鞋子）也都不會冠上「でんしゃの」來買，皆不合語境。',
    explanationEn:
      'The only thing you would buy at a station that fits 「でんしゃの」 (for the train) is 「きっぷ」 (ticket). 「さいふ」 is a wallet — \'a train\'s wallet\' makes no sense; 「でんわ」 (telephone) and 「くつ」 (shoes) would never be described with 「でんしゃの」 either, so they do not fit the context.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-bunmyaku-002',
    stem: 'あついですから、つめたい （　）を のみます。',
    options: ['みず', 'ごはん', 'パン', 'りんご'],
    answerIndex: 0,
    explanation:
      '動詞是「のみます」（喝），能喝的只有「みず」（水），前面接「つめたい」（冰涼的）也自然。「ごはん」（飯）、「パン」（麵包）、「りんご」（蘋果）都是用「たべます」（吃）的東西，不能搭配「のみます」。',
    explanationEn:
      'The verb is 「のみます」 (to drink), so the answer must be something drinkable: 「みず」 (water), which also pairs naturally with 「つめたい」 (cold). 「ごはん」 (rice), 「パン」 (bread), and 「りんご」 (apple) are all things you eat with 「たべます」, so none of them can go with 「のみます」.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-bunmyaku-003',
    stem: 'あたまが いたいですから、（　）を のみました。',
    options: ['くすり', 'ざっし', 'てがみ', 'えいが'],
    answerIndex: 0,
    explanation:
      '頭痛時要「吃藥」，日文慣用「くすりを のみます」（字面是「喝藥」）。「ざっし」（雜誌）和「てがみ」（信）是用來讀的，「えいが」（電影）是用來看的，都不能接「のみました」，語意不通。',
    explanationEn:
      'When your head hurts, you take medicine — the Japanese set phrase is 「くすりを のみます」 (literally \'drink medicine\'). 「ざっし」 (magazine) and 「てがみ」 (letter) are things you read, and 「えいが」 (movie) is something you watch, so none of them can follow 「のみました」.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-bunmyaku-004',
    stem: 'ゆうびんきょくで （　）を かって、ふうとうに はりました。',
    options: ['きって', 'はがき', 'きっぷ', 'しんぶん'],
    answerIndex: 0,
    explanation:
      '能「貼在信封上」的只有「きって」（郵票）。「はがき」（明信片）雖然也在郵局買，但不會貼到信封上；「きっぷ」（車票）是坐車用的，發音跟「きって」相近但意思不同；「しんぶん」（報紙）更與寄信無關。',
    explanationEn:
      'The only thing you can stick on an envelope is 「きって」 (stamp). 「はがき」 (postcard) is also bought at the post office, but you do not stick it onto envelopes; 「きっぷ」 (train ticket) sounds similar to 「きって」 but is for riding trains; 「しんぶん」 (newspaper) has nothing to do with mailing a letter.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-bunmyaku-005',
    stem: 'まいあさ ごはんを たべた あとで、（　）を みがきます。',
    options: ['は', 'て', 'あし', 'かお'],
    answerIndex: 0,
    explanation:
      '「みがきます」（刷、磨亮）慣用搭配是「はを みがきます」（刷牙）。「て」（手）和「かお」（臉）要用「あらいます」（洗）；「あし」（腳）也不用「みがきます」。此題考身體部位名詞與動詞的固定搭配。',
    explanationEn:
      'The set phrase with 「みがきます」 (to brush, to polish) is 「はを みがきます」 (brush your teeth). 「て」 (hands) and 「かお」 (face) take the verb 「あらいます」 (to wash), and 「あし」 (feet) is not used with 「みがきます」 either. This question tests fixed pairings of body parts and verbs.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-bunmyaku-006',
    stem: 'そとは さむいですから、（　）を きて ください。',
    options: ['コート', 'くつ', 'ぼうし', 'めがね'],
    answerIndex: 0,
    explanation:
      '動詞「きます」（穿）用於上半身衣物，只有「コート」（大衣）正確，也呼應「外面很冷」。「くつ」（鞋）要用「はきます」、「ぼうし」（帽子）用「かぶります」、「めがね」（眼鏡）用「かけます」，穿戴動詞各有固定搭配。',
    explanationEn:
      'The verb 「きます」 (to wear) is used for clothing on the upper body, so only 「コート」 (coat) works — and it matches the cold weather outside. 「くつ」 (shoes) takes 「はきます」, 「ぼうし」 (hat) takes 「かぶります」, and 「めがね」 (glasses) takes 「かけます」 — each wearing verb has its own fixed partner.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-bunmyaku-007',
    stem: 'としょかんで （　）を にさつ かりました。',
    options: ['ほん', 'えんぴつ', 'ねこ', 'みず'],
    answerIndex: 0,
    explanation:
      '在圖書館借、又用量詞「さつ」（冊，數書本用）來數的，只能是「ほん」（書）。「えんぴつ」（鉛筆）要用「ほん（本）」數，且圖書館不外借鉛筆；「ねこ」（貓）用「ひき」數；「みず」（水）不可數也借不到。',
    explanationEn:
      'Something you borrow at a library and count with 「さつ」 (the counter for books) can only be 「ほん」 (books). 「えんぴつ」 (pencil) is counted with 「ほん（本）」, and libraries do not lend pencils anyway; 「ねこ」 (cat) is counted with 「ひき」; 「みず」 (water) can be neither counted this way nor borrowed.',
  },

  // ---------- 動詞（6 題） ----------
  {
    kind: 'choice',
    id: 'n5-vocab-bunmyaku-008',
    stem: 'ばんごはんの あとで、おふろに （　）。',
    options: ['はいります', 'のぼります', 'すわります', 'ならびます'],
    answerIndex: 0,
    explanation:
      '「泡澡」的固定說法是「おふろに はいります」（進浴缸）。「のぼります」（爬、登）用於山或樓梯；「すわります」（坐）搭配椅子；「ならびます」（排隊）搭配隊伍，接在「おふろに」後面都不合語境。',
    explanationEn:
      'The set phrase for taking a bath is 「おふろに はいります」 (get into the bath). 「のぼります」 (to climb) is used for mountains or stairs; 「すわります」 (to sit) goes with chairs; 「ならびます」 (to line up) goes with queues — none of them makes sense after 「おふろに」.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-bunmyaku-009',
    stem: 'ここに ペンで なまえを （　） ください。',
    options: ['かいて', 'よんで', 'きいて', 'たべて'],
    answerIndex: 0,
    explanation:
      '句中有「ペンで」（用筆），所以動作是「かいて ください」（請寫）。「よんで」（讀）不需要用筆，和「ペンで」矛盾；「きいて」（聽）、「たべて」（吃）更不能拿名字當受詞用筆進行，皆不合語境。',
    explanationEn:
      'The sentence says 「ペンで」 (with a pen), so the action must be 「かいて ください」 (please write). 「よんで」 (read) does not require a pen, which contradicts 「ペンで」; 「きいて」 (listen) and 「たべて」 (eat) are things you cannot do to a name with a pen at all, so they do not fit.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-bunmyaku-010',
    stem: 'へやが くらかったですから、でんきを （　）。',
    options: ['つけました', 'けしました', 'しめました', 'あらいました'],
    answerIndex: 0,
    explanation:
      '因為房間很暗，所以「でんきを つけました」（開了燈）。「けしました」（關掉）跟前句「暗所以～」的因果相反；「しめました」（關上）用於門窗；「あらいました」（洗了）不能搭配電燈，都是錯的。',
    explanationEn:
      'The room was dark, so you turned the light on: 「でんきを つけました」. 「けしました」 (turned off) is the opposite of what the \'because it was dark\' clause calls for; 「しめました」 (closed) is used for doors and windows; 「あらいました」 (washed) cannot pair with a light — all three are wrong.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-bunmyaku-011',
    stem: 'あした えきで ともだちに （　）。',
    options: ['あいます', 'みます', 'ききます', 'いいます'],
    answerIndex: 0,
    explanation:
      '「和朋友見面」是「ともだちに あいます」，助詞用「に」。「みます」（看）的對象要用「を」，「ともだちに みます」文法錯誤；「ききます」（問）雖可接「に」，但沒有問的內容，句子不完整；「いいます」（說）也一樣缺受詞，不合語境。',
    explanationEn:
      '\'To meet a friend\' is 「ともだちに あいます」, using the particle 「に」. 「みます」 (to see) takes 「を」, so 「ともだちに みます」 is ungrammatical; 「ききます」 (to ask) can take 「に」, but the sentence has nothing being asked, so it is incomplete; 「いいます」 (to say) likewise lacks an object and does not fit.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-bunmyaku-012',
    stem: 'かばんに きょうかしょと ノートを （　）。',
    options: ['いれます', 'のみます', 'ききます', 'およぎます'],
    answerIndex: 0,
    explanation:
      '「把課本和筆記本放進書包」用「いれます」（放入），與「かばんに」（往書包裡）搭配自然。「のみます」（喝）和「ききます」（聽）的受詞不會是課本；「およぎます」（游泳）是自動詞，不能接受詞「を」，皆不成立。',
    explanationEn:
      'Putting textbooks and notebooks into a bag uses 「いれます」 (to put in), which fits naturally with 「かばんに」 (into the bag). Textbooks cannot be the object of 「のみます」 (to drink) or 「ききます」 (to listen), and 「およぎます」 (to swim) is intransitive, so it cannot take the object particle 「を」.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-bunmyaku-013',
    stem: 'たくさん あるいて つかれましたから、すこし （　）。',
    options: ['やすみます', 'はたらきます', 'はしります', 'うたいます'],
    answerIndex: 0,
    explanation:
      '走很多路累了，所以要「やすみます」（休息），因果通順。「はたらきます」（工作）和「はしります」（跑步）會更累，與「つかれましたから」矛盾；「うたいます」（唱歌）跟疲勞沒有因果關係，不合語境。',
    explanationEn:
      'You walked a lot and got tired, so you will 「やすみます」 (rest) — the cause and effect line up. 「はたらきます」 (to work) and 「はしります」 (to run) would make you even more tired, contradicting 「つかれましたから」; 「うたいます」 (to sing) has no logical connection to being tired.',
  },

  // ---------- 形容詞（4 題） ----------
  {
    kind: 'choice',
    id: 'n5-vocab-bunmyaku-014',
    stem: 'この コーヒーは （　）ですから、さとうを いれます。',
    options: ['にがい', 'あまい', 'ひろい', 'せまい'],
    answerIndex: 0,
    explanation:
      '因為咖啡「にがい」（苦），所以要加糖，因果自然。「あまい」（甜）的話就不需要再加糖，與後句矛盾；「ひろい」（寬敞）和「せまい」（狹窄）是形容空間的詞，不能拿來形容咖啡的味道。',
    explanationEn:
      'The coffee is 「にがい」 (bitter), so you add sugar — a natural cause and effect. If it were 「あまい」 (sweet), there would be no reason to add more sugar, which contradicts the second clause; 「ひろい」 (spacious) and 「せまい」 (cramped) describe space and cannot describe the taste of coffee.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-bunmyaku-015',
    stem: 'ことしの なつは とても （　）ですから、まいにち プールで およぎます。',
    options: ['あつい', 'さむい', 'くらい', 'ちかい'],
    answerIndex: 0,
    explanation:
      '夏天很「あつい」（熱），所以每天去游泳池游泳，語意通順。「さむい」（冷）與夏天游泳的情境相反；「くらい」（暗）形容亮度，「ちかい」（近）形容距離，都不是描述夏天氣溫的詞，不合語境。',
    explanationEn:
      'Summer is very 「あつい」 (hot), so swimming in the pool every day makes sense. 「さむい」 (cold) contradicts the situation of swimming in summer; 「くらい」 (dark) describes brightness and 「ちかい」 (near) describes distance — neither can describe the temperature of summer, so they do not fit.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-bunmyaku-016',
    stem: 'この もんだいは とても （　）ですから、すぐ できました。',
    options: ['やさしい', 'むずかしい', 'おもい', 'とおい'],
    answerIndex: 0,
    explanation:
      '「やさしい」在這裡是「簡單」的意思，因為題目簡單所以馬上就做完了。「むずかしい」（難）和「すぐ できました」（馬上就會了）互相矛盾；「おもい」（重）形容重量、「とおい」（遠）形容距離，都不能形容題目難易。',
    explanationEn:
      'Here 「やさしい」 means \'easy\' — the problem was easy, so it was finished right away. 「むずかしい」 (difficult) contradicts 「すぐ できました」 (finished it right away); 「おもい」 (heavy) describes weight and 「とおい」 (far) describes distance, so neither can describe how hard a problem is.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-bunmyaku-017',
    stem: 'へやが （　）ですから、これから そうじを します。',
    options: ['きたない', 'きれい', 'あかるい', 'あまい'],
    answerIndex: 0,
    explanation:
      '因為房間「きたない」（髒），所以接下來要打掃，因果通順。「きれい」（乾淨、漂亮）的房間不需要打掃，與後句矛盾；「あかるい」（明亮）跟打掃沒有因果關係；「あまい」（甜）是味覺形容詞，不能形容房間。',
    explanationEn:
      'The room is 「きたない」 (dirty), so you are about to clean it — the logic flows naturally. A 「きれい」 (clean, pretty) room would not need cleaning, contradicting the second clause; 「あかるい」 (bright) has no causal link to cleaning; 「あまい」 (sweet) is a taste word and cannot describe a room.',
  },

  // ---------- 副詞・量詞（3 題） ----------
  {
    kind: 'choice',
    id: 'n5-vocab-bunmyaku-018',
    stem: 'スーパーで りんごを （　） かいました。',
    options: ['みっつ', 'さんぼん', 'さんまい', 'さんびき'],
    answerIndex: 0,
    explanation:
      '數蘋果這類圓形小東西用和語數法「みっつ」（三個）。「さんぼん」（三本）數細長物如鉛筆、香蕉；「さんまい」（三枚）數薄平物如紙張、盤子；「さんびき」（三匹）數小動物，都不能拿來數蘋果。',
    explanationEn:
      'Round objects like apples are counted with the native Japanese numbers, so 「みっつ」 (three) is correct. 「さんぼん」 counts long thin objects such as pencils and bananas; 「さんまい」 counts flat objects such as paper and plates; 「さんびき」 counts small animals — none of them can count apples.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-bunmyaku-019',
    stem: 'あまい のみものは すきじゃ ありませんから、さとうは （　） いれて ください。',
    options: ['すこし', 'たくさん', 'いつも', 'まだ'],
    answerIndex: 0,
    explanation:
      '因為不喜歡甜的飲料，所以請「すこし」（少量地）放糖，語意通順。「たくさん」（大量地）會讓飲料更甜，與前句矛盾；「いつも」（總是）答非所問，沒有回應甜度；「まだ」（還、尚未）多與否定或未完成連用，放在這裡不通。',
    explanationEn:
      'You do not like sweet drinks, so you ask for only 「すこし」 (a little) sugar — the meaning flows. 「たくさん」 (a lot) would make the drink even sweeter, contradicting the first clause; 「いつも」 (always) fails to answer the question of amount; 「まだ」 (still, not yet) pairs with negatives or unfinished states and does not fit here.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-bunmyaku-020',
    stem: 'きのうの よるは いそがしかったですから、（　） ねませんでした。',
    options: ['あまり', 'とても', 'たいへん', 'いちばん'],
    answerIndex: 0,
    explanation:
      '「あまり」與否定形連用，表示「不太～」，「あまり ねませんでした」＝沒睡多少，和「昨晚很忙」因果通順。「とても」和「たいへん」（非常）要接肯定句，不能直接修飾否定的「ねませんでした」；「いちばん」（最）用於比較，也不合此句。',
    explanationEn:
      '「あまり」 pairs with a negative verb to mean \'not much\': 「あまり ねませんでした」 means \'did not sleep much,\' which follows naturally from being busy last night. 「とても」 and 「たいへん」 (very) need affirmative sentences and cannot directly modify the negative 「ねませんでした」; 「いちばん」 (the most) is for comparisons and does not fit.',
  },

  // ---------- 名詞（7 題：021~027） ----------
  {
    kind: 'choice',
    id: 'n5-vocab-bunmyaku-021',
    stem: 'あめが ふって いますから、（　）を さして いきます。',
    options: ['かさ', 'ぼうし', 'めがね', 'かばん'],
    answerIndex: 0,
    explanation:
      '下雨時「かさを さします」（撐傘）是固定搭配，只有「かさ」（傘）正確。「ぼうし」（帽子）要用「かぶります」、「めがね」（眼鏡）雖然用「かけます」但也有人誤記成「さします」，實際不能搭配；「かばん」（包包）用「もちます」，皆不合「さして」。',
    explanationEn:
      'When it rains, the set phrase is 「かさを さします」 (put up an umbrella), so only 「かさ」 (umbrella) is correct. 「ぼうし」 (hat) takes 「かぶります」; 「めがね」 (glasses) takes 「かけます」, and even though some learners misremember it as 「さします」, it does not actually work; 「かばん」 (bag) takes 「もちます」 — none fit 「さして」.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-bunmyaku-022',
    stem: 'りょこうの とき、（　）で しゃしんを たくさん とりました。',
    options: ['カメラ', 'テレビ', 'れいぞうこ', 'とけい'],
    answerIndex: 0,
    explanation:
      '拍照的工具是「カメラ」（相機），「カメラで しゃしんを とります」是標準搭配。「テレビ」（電視）是用來看的、「れいぞうこ」（冰箱）是放食物的、「とけい」（時鐘）是看時間的，都不能當拍照的工具，接在「で」（表手段）後面語意不通。',
    explanationEn:
      'The tool for taking photos is 「カメラ」 (camera): 「カメラで しゃしんを とります」 is the standard pattern. 「テレビ」 (TV) is for watching, 「れいぞうこ」 (refrigerator) stores food, and 「とけい」 (clock) tells the time — none of them can follow the means particle 「で」 as a tool for taking pictures.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-bunmyaku-023',
    stem: 'へやが あついですから、（　）を あけて ください。',
    options: ['まど', 'でんき', 'いす', 'つくえ'],
    answerIndex: 0,
    explanation:
      '房間熱時打開「まど」（窗戶）通風，因果自然，「まどを あけます」也是常見搭配。「でんき」（電燈）要用「つけます」（開燈），不能用「あけます」；「いす」（椅子）和「つくえ」（桌子）都不是能「打開」的東西，語意不通。',
    explanationEn:
      'When the room is hot, you open the 「まど」 (window) to let air in — a natural cause and effect, and 「まどを あけます」 is a common pairing. 「でんき」 (light) takes 「つけます」 (to turn on), not 「あけます」; 「いす」 (chair) and 「つくえ」 (desk) are not things that can be opened, so they make no sense.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-bunmyaku-024',
    stem: 'きのう くにの ちちに （　）を かきました。',
    options: ['てがみ', 'でんわ', 'しゃしん', 'おんがく'],
    answerIndex: 0,
    explanation:
      '能「寫」給家鄉父親的是「てがみ」（信），「てがみを かきます」是固定搭配。「でんわ」（電話）要用「かけます」（打電話），不能用「かきました」；「しゃしん」（照片）用「とります」（拍）；「おんがく」（音樂）用「ききます」（聽），皆不合語境。',
    explanationEn:
      'Something you can write to your father back home is a 「てがみ」 (letter) — 「てがみを かきます」 is a set phrase. 「でんわ」 (telephone) takes 「かけます」 (to make a call), not 「かきました」; 「しゃしん」 (photo) takes 「とります」 (to take); 「おんがく」 (music) takes 「ききます」 (to listen) — none fit the context.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-bunmyaku-025',
    stem: 'まいばん ねる まえに （　）を あびます。',
    options: ['シャワー', 'おふろ', 'プール', 'せっけん'],
    answerIndex: 0,
    explanation:
      '「シャワーを あびます」（沖澡）是固定搭配，每晚睡前沖澡語意通順。「おふろ」（澡盆）要說「おふろに はいります」，不能用「あびます」；「プール」（游泳池）是游泳的地方；「せっけん」（肥皂）是洗澡用品，也不能「あびます」，皆錯。',
    explanationEn:
      '「シャワーを あびます」 (take a shower) is a set phrase, and showering before bed every night makes sense. 「おふろ」 (bath) requires 「おふろに はいります」 and cannot take 「あびます」; 「プール」 (pool) is a place for swimming; 「せっけん」 (soap) is a bathing item and cannot take 「あびます」 either — all wrong.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-bunmyaku-026',
    stem: '（　）が ありませんから、タクシーで いきます。',
    options: ['じかん', 'おかね', 'しゅくだい', 'てんき'],
    answerIndex: 0,
    explanation:
      '因為沒有「じかん」（時間），所以搭計程車趕路，因果通順。「おかね」（錢）如果沒有，就付不起計程車費，與後句矛盾；「しゅくだい」（作業）沒了跟搭車無關；「てんき」（天氣）不能說「ありません」，語意不通，皆不合語境。',
    explanationEn:
      'Having no 「じかん」 (time) is a natural reason to take a taxi to hurry. Having no 「おかね」 (money) would mean you could not pay the taxi fare, contradicting the second clause; having no 「しゅくだい」 (homework) is unrelated to transport; and 「てんき」 (weather) cannot be used with 「ありません」, so the sentence would make no sense.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-bunmyaku-027',
    stem: 'からだの ぐあいが わるいですから、（　）へ いきます。',
    options: ['びょういん', 'えいがかん', 'ゆうびんきょく', 'デパート'],
    answerIndex: 0,
    explanation:
      '身體狀況不好時要去「びょういん」（醫院）看病，因果自然。「えいがかん」（電影院）是看電影的地方、「ゆうびんきょく」（郵局）是寄信的地方、「デパート」（百貨公司）是購物的地方，都跟身體不舒服沒有因果關係，不合語境。',
    explanationEn:
      'When your body feels unwell, you go to the 「びょういん」 (hospital) — a natural cause and effect. 「えいがかん」 (movie theater) is for watching films, 「ゆうびんきょく」 (post office) is for mailing, and 「デパート」 (department store) is for shopping — none of them has any causal link to feeling sick.',
  },

  // ---------- 動詞（6 題：028~033） ----------
  {
    kind: 'choice',
    id: 'n5-vocab-bunmyaku-028',
    stem: 'にちようびに こうえんで ともだちと テニスを （　）。',
    options: ['します', 'あそびます', 'いきます', 'のぼります'],
    answerIndex: 0,
    explanation:
      '球類運動用「〜を します」，「テニスを します」（打網球）正確。「あそびます」（玩）不能接受詞「を」，要說「こうえんで あそびます」；「いきます」（去）的對象用「へ/に」，「テニスを いきます」文法錯誤；「のぼります」（爬）搭配山或樓梯，皆不合。',
    explanationEn:
      'Ball games and sports take 「〜を します」, so 「テニスを します」 (play tennis) is correct. 「あそびます」 (to play around) cannot take the object particle 「を」 like this — you say 「こうえんで あそびます」; 「いきます」 (to go) takes 「へ/に」, so 「テニスを いきます」 is ungrammatical; 「のぼります」 (to climb) goes with mountains or stairs.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-bunmyaku-029',
    stem: 'まいあさ えきで でんしゃに （　）。',
    options: ['のります', 'おります', 'あるきます', 'かえります'],
    answerIndex: 0,
    explanation:
      '「搭電車」是「でんしゃに のります」，助詞用「に」。「おります」（下車）要用助詞「を」說「でんしゃを おります」，接「に」文法錯誤；「あるきます」（走路）和「かえります」（回家）都不能接「でんしゃに」表示搭乘，語意不通。',
    explanationEn:
      '\'To take the train\' is 「でんしゃに のります」, using the particle 「に」. 「おります」 (to get off) requires the particle 「を」, as in 「でんしゃを おります」, so it is ungrammatical after 「に」 here; 「あるきます」 (to walk) and 「かえります」 (to go home) cannot attach to 「でんしゃに」 to express riding, so they do not fit.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-bunmyaku-030',
    stem: 'ゆうべ くにの ともだちに でんわを （　）。',
    options: ['かけました', 'はなしました', 'あるきました', 'のぼりました'],
    answerIndex: 0,
    explanation:
      '「打電話」是「でんわを かけます」的固定搭配。「はなしました」（說話）要說「でんわで はなしました」（用電話講），把電話當受詞「でんわを はなします」文法不通；「あるきました」（走）和「のぼりました」（爬）跟電話完全搭不上，皆錯。',
    explanationEn:
      '\'To make a phone call\' is the set phrase 「でんわを かけます」. 「はなしました」 (talked) would need 「でんわで はなしました」 (talked on the phone) — with the phone as a direct object, 「でんわを はなします」 is ungrammatical; 「あるきました」 (walked) and 「のぼりました」 (climbed) have nothing to do with a telephone at all.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-bunmyaku-031',
    stem: 'せんせいの はなしを よく （　） ください。',
    options: ['きいて', 'いって', 'たって', 'かって'],
    answerIndex: 0,
    explanation:
      '「聽老師說話」用「はなしを ききます」，命令請求形是「きいて ください」（請聽）。「いって」（說）的內容要用引用的「と」，「はなしを いいます」不自然；「たって」（站）是自動詞，不能接受詞「を」；「かって」（買）不能買「話」，語意不通。',
    explanationEn:
      '\'Listen to the teacher\' uses 「はなしを ききます」, so the request form is 「きいて ください」 (please listen). 「いって」 (say) would need the quoting particle 「と」 for its content — 「はなしを いいます」 is unnatural; 「たって」 (stand) is intransitive and cannot take 「を」; 「かって」 (buy) makes no sense with talk as its object.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-bunmyaku-032',
    stem: 'えきの まえで さんじゅっぷん ともだちを （　）。',
    options: ['まちました', 'もちました', 'うりました', 'きりました'],
    answerIndex: 0,
    explanation:
      '在車站前等了朋友三十分鐘，「ともだちを まちます」（等朋友）語意通順。「もちました」（拿、持有）的受詞是物品，不能「拿朋友」；「うりました」（賣）和「きりました」（切）接「ともだちを」語意不通，也不合等人的場景，皆錯。',
    explanationEn:
      'Waiting for a friend for thirty minutes in front of the station is 「ともだちを まちます」 (wait for a friend), so 「まちました」 fits perfectly. 「もちました」 (held) takes objects, not people — you cannot \'hold a friend\' this way; 「うりました」 (sold) and 「きりました」 (cut) make no sense with 「ともだちを」 and do not match the scene.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-bunmyaku-033',
    stem: 'ねる まえに、へやの でんきを （　）。',
    options: ['けします', 'しめます', 'あらいます', 'すてます'],
    answerIndex: 0,
    explanation:
      '睡前把房間的燈「けします」（關掉），「でんきを けします」是固定搭配，語意也通順。「しめます」（關上）用於門窗，不能搭配電燈；「あらいます」（洗）和「すてます」（丟掉）接「でんきを」語意不通，都不是睡前對燈做的動作。',
    explanationEn:
      'Before going to sleep, you turn the room light off: 「でんきを けします」 is the set pairing, and the meaning flows naturally. 「しめます」 (to close) is used for doors and windows, not lights; 「あらいます」 (to wash) and 「すてます」 (to throw away) make no sense with 「でんきを」 — none are things you do to a light before bed.',
  },

  // ---------- 形容詞（4 題：034~037） ----------
  {
    kind: 'choice',
    id: 'n5-vocab-bunmyaku-034',
    stem: 'この にもつは とても （　）ですから、ちょっと てつだって ください。',
    options: ['おもい', 'かるい', 'やすい', 'くらい'],
    answerIndex: 0,
    explanation:
      '因為行李很「おもい」（重），所以請人幫忙，因果通順。「かるい」（輕）的行李不需要幫忙，與後句矛盾；「やすい」（便宜）形容價格，「くらい」（暗）形容亮度，都不能當成請人幫忙搬行李的理由，不合語境。',
    explanationEn:
      'The luggage is very 「おもい」 (heavy), which is exactly why you ask someone for help. 「かるい」 (light) luggage would not need any help, contradicting the request; 「やすい」 (cheap) describes price and 「くらい」 (dark) describes brightness — neither is a reason to ask someone to help carry luggage.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-bunmyaku-035',
    stem: 'えきから うちまで （　）ですから、いつも あるいて かえります。',
    options: ['ちかい', 'とおい', 'たかい', 'わかい'],
    answerIndex: 0,
    explanation:
      '因為從車站到家很「ちかい」（近），所以總是走路回家，因果自然。「とおい」（遠）的話走路回家很辛苦，通常會搭車，與後句矛盾；「たかい」（高、貴）和「わかい」（年輕）都不是形容距離的詞，不能說明走路回家的理由。',
    explanationEn:
      'The house is 「ちかい」 (near) the station, so always walking home makes sense. If it were 「とおい」 (far), walking home would be tiring and you would probably ride instead, contradicting the second clause; 「たかい」 (high, expensive) and 「わかい」 (young) do not describe distance and give no reason for walking home.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-bunmyaku-036',
    stem: 'あの みせの ラーメンは （　）ですから、まいしゅう たべに いきます。',
    options: ['おいしい', 'まずい', 'うるさい', 'せまい'],
    answerIndex: 0,
    explanation:
      '因為那家店的拉麵很「おいしい」（好吃），所以每週去吃，因果通順。「まずい」（難吃）的話不會每週去吃，與後句矛盾；「うるさい」（吵）和「せまい」（窄）是形容環境的詞，不能形容拉麵的味道，皆不合語境。',
    explanationEn:
      'That shop\'s ramen is 「おいしい」 (delicious), so going to eat it every week makes sense. If it were 「まずい」 (bad-tasting), nobody would go every week — a contradiction; 「うるさい」 (noisy) and 「せまい」 (cramped) describe the environment of the shop, not the taste of the ramen, so they do not fit.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-bunmyaku-037',
    stem: 'この みちは くるまが おおくて （　）ですから、ひとりで いかないで ください。',
    options: ['あぶない', 'たのしい', 'あたらしい', 'ひろい'],
    answerIndex: 0,
    explanation:
      '車多所以「あぶない」（危險），因此叫人不要一個人去，因果通順。「たのしい」（開心）的地方沒有理由禁止前往，與後句矛盾；「あたらしい」（新）和「ひろい」（寬敞）都不是車多造成的結果，也不構成不能去的理由，皆錯。',
    explanationEn:
      'The street has many cars, so it is 「あぶない」 (dangerous), which is why you tell someone not to go alone — the logic holds. A 「たのしい」 (fun) place gives no reason to stay away, contradicting the warning; 「あたらしい」 (new) and 「ひろい」 (wide) are not results of heavy traffic and are no reason to avoid the street.',
  },

  // ---------- 副詞・量詞（3 題：038~040） ----------
  {
    kind: 'choice',
    id: 'n5-vocab-bunmyaku-038',
    stem: 'うちに ねこが （　） います。',
    options: ['にひき', 'ふたつ', 'ふたり', 'にほん'],
    answerIndex: 0,
    explanation:
      '數貓、狗等小動物用量詞「ひき」，兩隻是「にひき」。「ふたつ」是數一般小東西的和語數法，不用於動物；「ふたり」（兩人）專門數人；「にほん」（兩根）數鉛筆、香蕉等細長物，都不能拿來數貓。',
    explanationEn:
      'Small animals such as cats are counted with 「ひき」, so two cats is 「にひき」. 「ふたつ」 is the native counter for general small objects and is not used for animals; 「ふたり」 (two people) counts only humans; 「にほん」 (two long objects) counts things like pencils and bananas — none of them can count cats.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-bunmyaku-039',
    stem: 'じかんが ありませんから、（　） あるいて ください。',
    options: ['はやく', 'ゆっくり', 'しずかに', 'だんだん'],
    answerIndex: 0,
    explanation:
      '沒時間了，所以請「はやく」（快點）走，因果通順。「ゆっくり」（慢慢地）會更花時間，與前句矛盾；「しずかに」（安靜地）回應的是音量不是速度，答非所問；「だんだん」（漸漸地）表示逐步變化，後面要接變化性的內容，放在這裡不通。',
    explanationEn:
      'There is no time, so please walk 「はやく」 (quickly) — the cause and effect line up. 「ゆっくり」 (slowly) would take even more time, a contradiction; 「しずかに」 (quietly) answers a question about volume, not speed; 「だんだん」 (gradually) needs some ongoing change to describe and does not work in this sentence.',
  },
  {
    kind: 'choice',
    id: 'n5-vocab-bunmyaku-040',
    stem: 'ひるごはんは （　） たべましたか。',
    options: ['もう', 'まだ', 'あまり', 'ぜんぜん'],
    answerIndex: 0,
    explanation:
      '「もう」（已經）搭配過去式問「已經吃過午餐了嗎」，語意通順。「まだ」（還沒）要接否定或「〜て いません」，直接接肯定過去式「たべましたか」文法不通；「あまり」（不太）和「ぜんぜん」（完全不）都要與否定形連用，不能修飾肯定句，皆錯。',
    explanationEn:
      '「もう」 (already) with the past tense asks \'Have you already eaten lunch?\' — natural and correct. 「まだ」 (not yet) must pair with a negative or 「〜て いません」, so it cannot come before the affirmative past 「たべましたか」; 「あまり」 (not much) and 「ぜんぜん」 (not at all) also require negative verbs, so they do not fit.',
  },
]
