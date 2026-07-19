import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    kind: 'passage',
    id: 'n4-grammar-bunsho-001',
    passageTitle: '日本に 来て 半年',
    passage:
      '私は ベトナムから 来た 留学生です。日本に 来て、もう 半年に なりました。来た ばかりの ころは、日本語が ぜんぜん 話せませんでした。【１】、今は 店の 人と 少し 話せるように なりました。\n先週、学校で スピーチ大会が ありました。私は 前の 日に 何度も れんしゅうして おきました。でも、みんなの 前に 立った とき、きんちょうして ことばを わすれて しまいました。【２】 とき、友だちが 大きな 声で 私の 名前を よんで くれました。それで 元気が 出て、さいごまで 話す ことが できました。\n来年、私は 大学の 試験【３】 受ける つもりです。もし 合格【４】、りょうしんを 日本に よんで、いっしょに 京都へ 行きたいです。その 日まで、毎日 がんばろうと 思います。',
    explanation: '',
    questions: [
      {
        id: 'n4-grammar-bunsho-001-q1',
        stem: '【１】に 入るのは どれですか。',
        options: ['でも', 'だから', 'それに', 'たとえば'],
        answerIndex: 0,
        explanation:
          '前句說「完全不會說日語」，後句說「現在能和店員說一點了」，前後語意相反，要用逆接接續詞「でも」（可是）。「だから」（所以）是順接因果，接在這裡前後矛盾；「それに」（而且）用於追加同方向的內容；「たとえば」（例如）用來舉例，都不合這裡的文脈。',
        explanationEn:
          'The previous sentence says the writer couldn\'t speak Japanese at all, while the next says they can now talk a little with shop staff — opposite ideas, so the contrastive conjunction 「でも」 (but) is needed. 「だから」 (so/therefore) marks a cause-and-result link and would be contradictory here; 「それに」 (moreover) adds information in the same direction; 「たとえば」 (for example) introduces examples — none of them fit this context.',
      },
      {
        id: 'n4-grammar-bunsho-001-q2',
        stem: '【２】に 入るのは どれですか。',
        options: ['その', 'これ', 'どの', 'あそこ'],
        answerIndex: 0,
        explanation:
          '這裡指回前一句剛描述的「忘詞的那個時刻」，承接上文用指示詞「その」，「そのとき」＝「就在那時」。「これ」是代名詞，不能直接修飾名詞「とき」；「どの」是疑問詞，這裡不是疑問句；「あそこ」指遠處的場所，也不能接「とき」。',
        explanationEn:
          'This points back to the moment just described — freezing up and forgetting the words — so the demonstrative 「その」, which refers to what was just mentioned, is used: 「そのとき」 means "at that moment." 「これ」 is a pronoun and cannot directly modify the noun 「とき」; 「どの」 is a question word, but this isn\'t a question; 「あそこ」 refers to a faraway place and can\'t attach to 「とき」 either.',
      },
      {
        id: 'n4-grammar-bunsho-001-q3',
        stem: '【３】に 入るのは どれですか。',
        options: ['を', 'が', 'に', 'で'],
        answerIndex: 0,
        explanation:
          '「受けます」（報考、參加考試）是他動詞，受詞「試験」要用「を」標示：「試験を受ける」。「が」是主格助詞，會讓「試験」變成主語；「に」用於「試験に合格する」「試験に受かる」等句型，和他動詞「受ける」不搭；「で」表場所或手段，語意不通。',
        explanationEn:
          '「受けます」 (take an exam) is a transitive verb, so its object 「試験」 is marked with 「を」: 「試験を受ける」. 「が」 is the subject marker and would turn 「試験」 into the subject; 「に」 belongs to patterns like 「試験に合格する」 and 「試験に受かる」, not to the transitive 「受ける」; 「で」 marks a place or a means, which makes no sense here.',
      },
      {
        id: 'n4-grammar-bunsho-001-q4',
        stem: '【４】に 入るのは どれですか。',
        options: ['したら', 'しては', 'されたら', 'させたら'],
        answerIndex: 0,
        explanation:
          '表示假定條件用「〜たら」：「合格したら」＝「如果考上的話」，正好和句首的「もし」呼應。「しては」多用於「〜てはいけない」等禁止句型，不能接在「もし」後面表條件；「されたら」是受身形，「合格」不是被別人做的動作；「させたら」是使役形，這裡沒有「讓誰合格」的意思。',
        explanationEn:
          'A hypothetical condition uses 「〜たら」: 「合格したら」 means "if I pass," matching the 「もし」 at the start of the sentence. 「しては」 mostly appears in prohibition patterns like 「〜てはいけない」 and can\'t follow 「もし」 to express a condition; 「されたら」 is passive, but passing isn\'t something done to you by someone else; 「させたら」 is causative, and there is no sense of making anyone pass here.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n4-grammar-bunsho-002',
    passageTitle: '田中さんへの 手紙',
    passage:
      '田中さん、お元気ですか。東京は 少しずつ すずしく なって きました。\n私は 先月、学校の 近くに 引っこしを しました。新しい へやは 前の へや【１】 広くて、駅にも 近いので、とても 便利です。こんど ぜひ あそびに 来て ください。\n学校の 生活にも なれました。先週は 先生に 作文を 【２】、とても うれしかったです。これからも 日本語の 勉強を がんばろうと 思って います。\n【３】、田中さんが 貸して くれた 本は、もうすぐ 読み終わります。とても おもしろいので、来週、ゆうびんきょくから 送りますね。\n来月の 連休には、北海道へ あそびに 行く つもりです。田中さんは 前に「北海道は とても 寒い」と 言って いましたね。【４】 聞いて、あたたかい コートを 買って おきました。会える 日を たのしみに して います。\nでは、へんじを 待って います。\nリン',
    explanation: '',
    questions: [
      {
        id: 'n4-grammar-bunsho-002-q1',
        stem: '【１】に 入るのは どれですか。',
        options: ['より', 'ほど', 'でも', 'まで'],
        answerIndex: 0,
        explanation:
          '這裡在比較新房間和以前的房間，比較的基準用「より」：「前のへやより広い」＝「比以前的房間大」。「ほど」要用在否定句「〜ほど…ない」（沒有～那麼…），後面接肯定的「広くて」不成立；「でも」表「連～也」或舉例；「まで」表範圍終點，都不能表示比較基準。',
        explanationEn:
          'The new room is being compared with the old one, and the standard of comparison takes 「より」: 「前のへやより広い」 means "bigger than the old room." 「ほど」 must appear in the negative pattern 「〜ほど…ない」 (not as... as), so it can\'t be followed by the affirmative 「広くて」; 「でも」 means "even" or gives an example; 「まで」 marks the end of a range — neither can mark a standard of comparison.',
      },
      {
        id: 'n4-grammar-bunsho-002-q2',
        stem: '【２】に 入るのは どれですか。',
        options: ['ほめられて', 'ほめて', 'ほめさせて', 'ほめたくて'],
        answerIndex: 0,
        explanation:
          '主語是「我」，動作者用「先生に」標示，是受身句：「先生に作文をほめられて」＝「作文被老師稱讚了」。「ほめて」是主動形，變成我去稱讚，和「先生に」矛盾；「ほめさせて」是使役形（讓人稱讚）；「ほめたくて」表示自己想稱讚別人，接在這裡語意都不通。',
        explanationEn:
          'The subject is the writer and the doer is marked with 「先生に」, so this is a passive sentence: 「先生に作文をほめられて」 means "my essay was praised by the teacher." 「ほめて」 is the active form and would mean I did the praising, contradicting 「先生に」; 「ほめさせて」 is causative (make someone praise); 「ほめたくて」 means wanting to praise someone yourself — neither makes sense here.',
      },
      {
        id: 'n4-grammar-bunsho-002-q3',
        stem: '【３】に 入るのは どれですか。',
        options: ['それから', 'けれども', 'つまり', 'それとも'],
        answerIndex: 0,
        explanation:
          '前面在報告學校生活，這裡要追加另一件事（借的書快看完了），用表示追加、轉入下一個話題的「それから」（還有）最自然。「けれども」（不過）是逆接，前後沒有相反的內容；「つまり」（也就是說）用於換句話說；「それとも」（還是）用於疑問句的二選一，都不合文脈。',
        explanationEn:
          'The letter has been reporting on school life and now adds a separate item (the borrowed book is almost finished), so 「それから」 (also/and then), which adds information and moves to the next topic, is the most natural. 「けれども」 (however) is contrastive, but there is no opposition here; 「つまり」 (in other words) rephrases something; 「それとも」 (or) presents a choice in questions — none fit the context.',
      },
      {
        id: 'n4-grammar-bunsho-002-q4',
        stem: '【４】に 入るのは どれですか。',
        options: ['そう', 'こう', 'ああ', 'どう'],
        answerIndex: 0,
        explanation:
          '指前一句引用的田中さん說過的話（北海道很冷），承接對方剛說的內容用「そう」：「そう聞いて」＝「聽說是那樣」。「こう」指自己接下來要說或眼前的內容；「ああ」指說話雙方都遠離的事物，多用於感嘆或回憶；「どう」是疑問詞，這裡不是疑問句，都不對。',
        explanationEn:
          'This refers to what 田中さん was quoted as saying in the previous sentence (Hokkaido is very cold); for something the other person said, 「そう」 is used: 「そう聞いて」 means "hearing that." 「こう」 points to what the speaker is about to say or something right at hand; 「ああ」 points to something distant from both people, often in exclamations or memories; 「どう」 is a question word, but this isn\'t a question — all three are wrong.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n4-grammar-bunsho-003',
    passageTitle: 'うちの 犬',
    passage:
      '私の うちには、モモという 犬が います。五年前、ちちが 友だちの 家から 小さな 子犬を もらって きました。【１】が モモです。\nモモは さんぽが 大すきで、あめの 日【２】 行きたがります。私が げんかんで くつを はくと、すぐに 走って きて、しっぽを ふります。\n先月、モモが きゅうに ごはんを 食べなく なりました。家族 みんなが しんぱいして、母が びょういんに つれて 【３】、おいしゃさんに 見て もらいました。「もう 年ですから、やわらかい ごはんを あげて ください」と 言われて、すこし あんしんしました。\n犬との 生活は、たいへんな ことも あります。それでも、たのしい ことの 【４】が ずっと 多いです。モモは 私の 大切な 家族です。これからも ずっと いっしょに いたいです。',
    explanation: '',
    questions: [
      {
        id: 'n4-grammar-bunsho-003-q1',
        stem: '【１】に入るのはどれか。',
        options: ['それ', 'これ', 'あれ', 'どれ'],
        answerIndex: 0,
        explanation:
          '指示詞「それ」用來承接前文剛提到的事物：前句說爸爸從朋友家帶回了一隻小狗，「それがモモです」＝「那隻小狗就是モモ」。「これ」指眼前的東西，但這裡是回述五年前的事；「あれ」指說話雙方都遠離的事物，多用於共同的記憶；「どれ」是疑問詞，這裡不是疑問句，都不合文脈。',
        explanationEn:
          'The demonstrative 「それ」 refers back to what was just mentioned: the previous sentence says father brought home a puppy, and 「それがモモです」 means "that puppy is Momo." 「これ」 points to something right at hand, but this recalls an event five years ago; 「あれ」 refers to something distant from both speaker and listener, usually a shared memory; 「どれ」 is a question word, but this isn\'t a question.',
      },
      {
        id: 'n4-grammar-bunsho-003-q2',
        stem: '【２】に入るのはどれか。',
        options: ['でも', 'しか', 'だけ', 'までに'],
        answerIndex: 0,
        explanation:
          '「名詞＋でも」表示「連…也」：「あめの日でも 行きたがります」＝「連下雨天也想去散步」，強調モモ有多喜歡散步。「しか」後面必須接否定形，這裡是肯定句；「だけ」會變成「只有雨天才想去」，和前面「さんぽが大すき」矛盾；「までに」表期限（在…之前），接在這裡語意不通。',
        explanationEn:
          '「noun + でも」 means "even": 「あめの日でも 行きたがります」 says Momo wants a walk even on rainy days, stressing how much she loves walks. 「しか」 requires a negative predicate, but this sentence is affirmative; 「だけ」 would mean she wants to go only on rainy days, contradicting 「さんぽが大すき」; 「までに」 marks a deadline and makes no sense here.',
      },
      {
        id: 'n4-grammar-bunsho-003-q3',
        stem: '【３】に入るのはどれか。',
        options: ['いって', 'きて', 'かえって', 'おりて'],
        answerIndex: 0,
        explanation:
          '從家裡把モモ帶到醫院，是離開說話者所在處的移動，用「つれていく」（帶去）：「びょういんに つれて いって」。「きて」是「つれてくる」（帶來），方向和敘述者在家的視角相反；「かえって」（帶回家）和後面「請醫生看診」的內容矛盾；「おりて」（下來）與帶寵物就醫的語境完全不合。',
        explanationEn:
          'Taking Momo from home to the vet is movement away from the narrator\'s base, so 「つれていく」 (take along) is used: 「びょういんに つれて いって」. 「きて」 would be 「つれてくる」 (bring here), the opposite direction from the home-based viewpoint; 「かえって」 (take back home) contradicts having the vet examine her; 「おりて」 (go down) doesn\'t fit the context at all.',
      },
      {
        id: 'n4-grammar-bunsho-003-q4',
        stem: '【４】に入るのはどれか。',
        options: ['ほう', 'もの', 'こと', 'とき'],
        answerIndex: 0,
        explanation:
          '比較句型「〜のほうが多い」表示「…比較多」：「たのしいことのほうがずっと多いです」＝「開心的事遠比辛苦的事多」，正好和前句「たいへんなこともあります」形成對比。「もの」「こと」「とき」接在「ことの」後面都無法構成比較句型，「楽しいことのことが」這類說法文法不通。',
        explanationEn:
          'The comparison 「〜のほうが多い」 means "there are more of...": 「たのしいことのほうがずっと多いです」 says the happy moments far outnumber the hard ones, contrasting with 「たいへんなこともあります」. 「もの」, 「こと」, and 「とき」 cannot follow 「ことの」 to form a comparison — phrases like 「楽しいことのことが」 are simply ungrammatical.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n4-grammar-bunsho-004',
    passageTitle: 'はじめての 夏祭り',
    passage:
      '先週の 土曜日、りゅうがくせいの 私は、りょうの 友だちと はじめて 日本の 夏祭りに 行きました。\n会場には、やきそばや かきごおりの 屋台が たくさん ならんで いました。【１】、どこからか たいこの 音も 聞こえて きました。私たちは 屋台で 買った 食べものを、木の 下の ベンチで 食べました。\nでも、こまった ことも ありました。人が とても 多くて、とちゅうで 友だちと はぐれて しまったのです。【２】、けいたいでんわで れんらくして、入り口の 大きな 木の 前で もういちど 会う ことが できました。\n夜に なると、空に 大きな はなびが 上がりました。おなかに ひびく 音と きれいな 光に、私は ことばが 出ませんでした。\n国に 帰った 今でも、目を つむると、【３】 夜の はなびを 思い出します。らいねんの 夏も、祭りには たくさんの 人が あつまる【４】。もし もういちど 日本へ 行けたら、こんどは 私が 家族を あんないしたいです。',
    explanation: '',
    questions: [
      {
        id: 'n4-grammar-bunsho-004-q1',
        stem: '【１】に入るのはどれか。',
        options: ['そして', 'しかし', 'ところで', 'または'],
        answerIndex: 0,
        explanation:
          '前句描述會場排滿了攤販，後句追加「還聽得到太鼓的聲音」，是同方向的資訊追加，用「そして」（然後、而且）最自然。「しかし」是逆接，前後並沒有相反的內容；「ところで」用於轉換話題，但這裡仍在描述會場的樣子；「または」（或者）表二選一，都不合文脈。',
        explanationEn:
          'The previous sentence describes stalls lining the venue, and the next adds that drum sounds could also be heard — information in the same direction, so 「そして」 (and/also) is the natural choice. 「しかし」 is contrastive, but nothing here is opposed; 「ところで」 changes the topic, yet the text is still describing the venue; 「または」 (or) presents alternatives — none of them fit.',
      },
      {
        id: 'n4-grammar-bunsho-004-q2',
        stem: '【２】に入るのはどれか。',
        options: ['それで', 'ところが', 'それとも', 'なぜなら'],
        answerIndex: 0,
        explanation:
          '前句說和朋友走散了，後句說用手機聯絡、重新會合，是「因為那樣，所以…」的順接因果，用「それで」。「ところが」表出乎意料的轉折，但用手機聯絡是走散後自然的處理方式，並非意外；「それとも」用於疑問句的二選一；「なぜなら」用來補述理由、句尾要呼應「〜からです」，都不合。',
        explanationEn:
          'The previous sentence says the writer got separated from the friend, and the next says they phoned each other and met up again — a cause-and-result link, so 「それで」 (so) is correct. 「ところが」 marks an unexpected turn, but phoning is the natural response to getting separated, not a surprise; 「それとも」 offers a choice in questions; 「なぜなら」 introduces a reason and needs 「〜からです」 at the end — none fit.',
      },
      {
        id: 'n4-grammar-bunsho-004-q3',
        stem: '【３】に入るのはどれか。',
        options: ['あの', 'この', 'どの', 'あれ'],
        answerIndex: 0,
        explanation:
          '說話者已經回國，回想的是離現在時空都很遠的過去體驗，回憶中的事物用「あの」：「あの夜のはなび」＝「那晚的煙火」。「この」指眼前或身邊的事物，和已回國的設定矛盾；「どの」是疑問詞，這裡不是疑問句；「あれ」是代名詞，不能直接修飾名詞「夜」。',
        explanationEn:
          'The writer is back in their home country recalling an experience now far away in time and place; for things in one\'s memories 「あの」 is used: 「あの夜のはなび」 means "the fireworks of that night." 「この」 points to something at hand, contradicting being back home; 「どの」 is a question word, but this isn\'t a question; 「あれ」 is a pronoun and cannot directly modify the noun 「夜」.',
      },
      {
        id: 'n4-grammar-bunsho-004-q4',
        stem: '【４】に入るのはどれか。',
        options: ['でしょう', 'ましょう', 'ですか', 'でした'],
        answerIndex: 0,
        explanation:
          '「〜でしょう」接在常體後，表示對未來的推測：「らいねんの夏も、たくさんの人があつまるでしょう」＝「明年夏天應該也會聚集很多人吧」。「ましょう」表提議或邀請，而且不能接在辭書形「あつまる」後；「ですか」「でした」直接接辭書形都不合文法，語意上也和推測不符。',
        explanationEn:
          '「〜でしょう」 follows the plain form and expresses a conjecture about the future: 「たくさんの人があつまるでしょう」 means "many people will probably gather again next summer." 「ましょう」 makes a proposal and cannot follow the dictionary form 「あつまる」; 「ですか」 and 「でした」 also cannot attach directly to the dictionary form, and neither expresses conjecture.',
      },
    ],
  },
]
