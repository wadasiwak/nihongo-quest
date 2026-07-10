import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    kind: 'passage',
    id: 'n5-reading-chubun-001',
    passageTitle: 'わたしの 週末',
    passage:
      'わたしは 毎週 土よう日に かぞくと 出かけます。でも、先週の 土よう日は 雨でしたから、出かけませんでした。うちで 母と ケーキを 作りました。はじめて 作りましたから、少し むずかしかったです。でも、とても おいしい ケーキが できました。\n日よう日は いい 天気でした。それで、かぞくで 川へ 行きました。父と 弟は 川で さかなを つりました。わたしは 母と 川の そばを さんぽしました。とても たのしい 週末でした。',
    explanation: '',
    questions: [
      {
        id: 'n5-reading-chubun-001-q1',
        stem: 'どうして 先週の 土よう日に 出かけませんでしたか。',
        options: [
          '雨でしたから',
          'ケーキを 作りたかったですから',
          '天気が よかったですから',
          '母が いそがしかったですから',
        ],
        answerIndex: 0,
        explanation:
          '文中明說「先週の 土よう日は 雨でしたから、出かけませんでした」，理由是下雨。「ケーキを 作りたかった」是沒出門之後在家做的事，不是不出門的原因；「天気が よかった」是文中形容星期日的字眼，套到星期六就錯了；「母が いそがしかった」文中完全沒有提到。',
        explanationEn:
          'The passage states 「先週の 土よう日は 雨でしたから、出かけませんでした」, so the reason for not going out was the rain. Making a cake is what they did at home after staying in, not the reason for staying in; the good weather describes Sunday, so applying it to Saturday is wrong; and a busy mother is never mentioned anywhere in the passage.',
      },
      {
        id: 'n5-reading-chubun-001-q2',
        stem: '日よう日に 「わたし」は 何を しましたか。',
        options: [
          '母と 川の そばを さんぽしました',
          '父と 弟と 川で さかなを つりました',
          '母と うちで ケーキを 作りました',
          'ひとりで 川へ 行きました',
        ],
        answerIndex: 0,
        explanation:
          '文末寫「わたしは 母と 川の そばを さんぽしました」，所以正解是和媽媽在河邊散步。釣魚的是「父と 弟」，不是「わたし」；做蛋糕是星期六在家做的事，不是星期日；去河邊是「かぞくで」（全家一起）去的，不是一個人去。',
        explanationEn:
          'The passage ends with 「わたしは 母と 川の そばを さんぽしました」, so on Sunday the writer took a walk along the river with her mother. Fishing was done by 「父と 弟」, not by the writer; making the cake happened at home on Saturday, not Sunday; and they went to the river 「かぞくで」 (as a whole family), not alone.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n5-reading-chubun-002',
    passageTitle: '友だちからの 手紙',
    passage:
      'タンさんへ\nお元気ですか。わたしは 元気です。\n先週、くにの 母から にもつが とどきました。中に くにの おかしが たくさん ありました。わたしは それを 学校へ 持って行って、クラスの 友だちに あげました。みんな「おいしいですね」と 言いました。わたしは うれしかったです。\nタンさんは 来月 日本へ 来ますね。わたしの まちは 海が 近くて、さかなが とても おいしいです。いっしょに 食べに 行きましょう。えきまで むかえに 行きますから、着く 時間を 教えて ください。\nマリアより',
    explanation: '',
    questions: [
      {
        id: 'n5-reading-chubun-002-q1',
        stem: '「それ」は 何ですか。',
        options: [
          'くにの おかし',
          '母からの にもつ',
          '友だちの おかし',
          '日本の おかし',
        ],
        answerIndex: 0,
        explanation:
          '「それ」指前一句「中に くにの おかしが たくさん ありました」的「くにの おかし」，帶去學校分給朋友的就是這些點心。「母からの にもつ」是裝點心的包裹本身，帶去送人的不是整個包裹；點心是媽媽從家鄉寄來的，所以「友だちの おかし」「日本の おかし」都與文意不符。',
        explanationEn:
          '「それ」 points back to the previous sentence, 「中に くにの おかしが たくさん ありました」 — the sweets from her home country are what she took to school and gave to her classmates. The package from her mother is only the container the sweets arrived in, not what she handed out; and since the sweets came from her home country, both "the friends\' sweets" and "Japanese sweets" contradict the letter.',
      },
      {
        id: 'n5-reading-chubun-002-q2',
        stem: 'マリアさんは タンさんに 何を たのみましたか。',
        options: [
          '着く 時間を 教えること',
          'えきへ むかえに 行くこと',
          'くにの おかしを 持って来ること',
          'さかなを 買うこと',
        ],
        answerIndex: 0,
        explanation:
          '信末寫「着く 時間を 教えて ください」，瑪麗亞拜託的是告知抵達時間。「えきへ むかえに 行く」是瑪麗亞自己要做的事（むかえに 行きますから），不是拜託對方做的；「おかし」「さかな」都是文中出現過的字眼，但瑪麗亞並沒有拜託湯先生帶點心或買魚。',
        explanationEn:
          'The letter ends with 「着く 時間を 教えて ください」, so what Maria asks Tan to do is tell her his arrival time. Going to the station to meet him is what Maria herself will do (「むかえに 行きますから」), not a request to Tan; and although sweets and fish both appear in the letter, Maria never asks Tan to bring sweets or to buy fish.',
      },
      {
        id: 'n5-reading-chubun-002-q3',
        stem: 'マリアさんの まちに ついて、正しいのは どれですか。',
        options: [
          '海が 近いです',
          'えきが ありません',
          'さかなが 高いです',
          'マリアさんの 母が すんで います',
        ],
        answerIndex: 0,
        explanation:
          '文中寫「わたしの まちは 海が 近くて、さかなが とても おいしいです」，所以「海が 近いです」正確。瑪麗亞說要到車站接人，可見鎮上有車站，「えきが ありません」錯；文中說魚「おいしい」（好吃），不是「高い」（貴）；媽媽是從家鄉（くに）寄包裹來的，並不住在這個鎮上。',
        explanationEn:
          'The letter says 「わたしの まちは 海が 近くて、さかなが とても おいしいです」, so "the sea is near" is correct. Maria offers to meet Tan at the station, which shows the town clearly has one; the fish is described as 「おいしい」 (delicious), not expensive; and her mother sent the package from her home country, so she does not live in this town.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n5-reading-chubun-003',
    passageTitle: 'スピーチ大会',
    passage:
      '先週の 金よう日、わたしの 日本語学校で スピーチ大会が ありました。学生は みんな 日本語で 話しました。わたしは「わたしの ゆめ」に ついて 話しました。\n大会の 前に、わたしは 毎日 うちで れんしゅうしました。でも、大会の 日は とても きんちょうしましたから、少し まちがえました。ざんねんでしたが、あとで 先生が「よかったですよ」と 言いました。それを 聞いて、わたしは うれしく なりました。\n来年も スピーチ大会に 出たいです。今度は まちがえないで、じょうずに 話したいです。',
    explanation: '',
    questions: [
      {
        id: 'n5-reading-chubun-003-q1',
        stem: 'どうして 「わたし」は 少し まちがえましたか。',
        options: [
          'とても きんちょうしましたから',
          '毎日 れんしゅうしませんでしたから',
          '日本語で 話しましたから',
          'ゆめが ありませんでしたから',
        ],
        answerIndex: 0,
        explanation:
          '文中寫「大会の 日は とても きんちょうしましたから、少し まちがえました」，理由是太緊張。文中明說「毎日 うちで れんしゅうしました」，所以「れんしゅうしませんでした」與文意相反；「日本語で 話す」是大會的規定，不是說錯的原因；「ゆめ」只是演講的題目，文中沒說沒有夢想。',
        explanationEn:
          'The passage says 「大会の 日は とても きんちょうしましたから、少し まちがえました」, so the mistakes came from being very nervous. The writer clearly practiced every day (「毎日 うちで れんしゅうしました」), so the "did not practice" option says the opposite of the text; speaking in Japanese was simply the contest\'s rule, not a cause of mistakes; and the dream was only the topic of the speech.',
      },
      {
        id: 'n5-reading-chubun-003-q2',
        stem: '「それ」は 何ですか。',
        options: [
          '先生の「よかったですよ」という ことば',
          'じぶんの スピーチ',
          '毎日の れんしゅう',
          '来年の 大会',
        ],
        answerIndex: 0,
        explanation:
          '「それを 聞いて、うれしく なりました」的「それ」指前一句老師說的「よかったですよ」這句話，聽到稱讚才變開心。「じぶんの スピーチ」是自己說的，不是「聞いて」（聽到）的對象；「毎日の れんしゅう」「来年の 大会」都是文中出現的字眼，但都不是讓人變開心的那句話。',
        explanationEn:
          'In 「それを 聞いて、うれしく なりました」, 「それ」 refers to the teacher\'s words 「よかったですよ」 in the previous sentence — hearing that praise is what made the writer happy. The writer\'s own speech is something spoken, not something 「聞いて」 (heard); and the daily practice and next year\'s contest do appear in the passage, but neither is the remark that brought the happiness.',
      },
      {
        id: 'n5-reading-chubun-003-q3',
        stem: '「わたし」は 来年 何を したいですか。',
        options: [
          '大会に 出て、じょうずに 話したいです',
          'うちで 毎日 れんしゅうしたいです',
          'スピーチ大会を 見たいです',
          '先生と 日本語で 話したいです',
        ],
        answerIndex: 0,
        explanation:
          '文末寫「来年も スピーチ大会に 出たいです。今度は まちがえないで、じょうずに 話したいです」，所以正解是明年也要參賽並好好發表。「毎日 れんしゅう」是今年大會前做過的事，不是明年的願望；想做的是「出たい」（參加），不是「見たい」（觀看）；「先生と 話したい」文中沒有提到。',
        explanationEn:
          'The passage ends with 「来年も スピーチ大会に 出たいです。今度は まちがえないで、じょうずに 話したいです」, so the writer wants to enter the contest again next year and speak well. Daily practice is what was done before this year\'s contest, not a wish for next year; the wish is 「出たい」 (to take part), not merely to watch; and talking with the teacher is never mentioned.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n5-reading-chubun-004',
    passageTitle: 'わたしの ペット',
    passage:
      'わたしの うちには 犬が います。名前は シロです。白くて、小さい 犬です。三年前に 父が 友だちから もらいました。\nわたしは 毎朝 シロと こうえんを さんぽします。シロは さんぽが 大すきです。でも、雨の 日は さんぽに 行きません。うちで いっしょに あそびます。\n先月、シロは びょうきに なりました。何も 食べませんでしたから、母と どうぶつの びょういんへ つれて 行きました。シロは くすりを 飲んで、一週間で 元気に なりました。今は また たくさん 食べます。わたしは シロが いちばん 大切です。',
    explanation: '',
    questions: [
      {
        id: 'n5-reading-chubun-004-q1',
        stem: 'シロは どんな 犬ですか。',
        options: [
          '白くて 小さい 犬です',
          '白くて 大きい 犬です',
          '友だちの うちに いる 犬です',
          '三さいの 犬です',
        ],
        answerIndex: 0,
        explanation:
          '文中寫「白くて、小さい 犬です」，所以正解是白色的小狗。「大きい」與文意相反；小白狗是三年前爸爸「友だちから もらいました」（從朋友那裡得到的），現在住在「わたしの うち」，所以「友だちの うちに いる」錯；「三年前」是得到小狗的時間，文中並沒有說小狗三歲。',
        explanationEn:
          'The passage says 「白くて、小さい 犬です」, so Shiro is a small white dog. "Big" says the opposite of the text; the father received the dog from a friend three years ago (「友だちから もらいました」) and it now lives at the writer\'s house, so it is not at the friend\'s house; and "three years ago" is when they got the dog — the passage never says the dog is three years old.',
      },
      {
        id: 'n5-reading-chubun-004-q2',
        stem: '雨の 日に 「わたし」は シロと 何を しますか。',
        options: [
          'うちで あそびます',
          'こうえんを さんぽします',
          'びょういんへ 行きます',
          '何も しません',
        ],
        answerIndex: 0,
        explanation:
          '文中寫「雨の 日は さんぽに 行きません。うちで いっしょに あそびます」，所以下雨天是在家一起玩。「こうえんを さんぽします」是每天早上平常做的事，下雨天不做；「びょういん」是上個月小狗生病時才去的地方，跟下雨天無關；文中明說會在家玩，「何も しません」與文意不符。',
        explanationEn:
          'The passage says 「雨の 日は さんぽに 行きません。うちで いっしょに あそびます」, so on rainy days they play together at home. Walking in the park is the usual every-morning routine, which is skipped when it rains; the animal hospital was only for last month\'s illness and has nothing to do with rainy days; and "does nothing" contradicts the clear statement that they play at home.',
      },
      {
        id: 'n5-reading-chubun-004-q3',
        stem: 'どうして シロを びょういんへ つれて 行きましたか。',
        options: [
          'びょうきで、何も 食べませんでしたから',
          'たくさん 食べましたから',
          'さんぽが 大すきですから',
          'くすりが すきですから',
        ],
        answerIndex: 0,
        explanation:
          '文中寫「シロは びょうきに なりました。何も 食べませんでしたから、…びょういんへ つれて 行きました」，理由是生病不吃東西。「たくさん 食べます」是吃藥康復之後現在的樣子，不是去醫院的原因；「さんぽが 大すき」是說散步、跟看病無關；「くすり」是到醫院之後才吃的，不是去醫院的理由。',
        explanationEn:
          'The passage says 「シロは びょうきに なりました。何も 食べませんでしたから、…びょういんへ つれて 行きました」, so the reason is that Shiro got sick and would not eat anything. Eating a lot describes Shiro now, after recovering; loving walks is about the daily routine, not the hospital visit; and the medicine came only after arriving at the hospital, so it cannot be the reason for going.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n5-reading-chubun-005',
    passageTitle: 'たんじょう日の プレゼント',
    passage:
      'きのうは 母の たんじょう日でした。わたしは 兄と いっしょに プレゼントを 買いに デパートへ 行きました。\nはじめ、わたしは 花を 買いたかったです。でも、兄が「お母さんは りょうりが すきだから、エプロンが いいよ」と 言いました。それで、青い エプロンを 買いました。花は 小さいのを 一本だけ 買いました。\n夜、かぞくで ばんごはんを 食べました。それから、母に プレゼントを あげました。母は「うれしい。ありがとう」と 言って、すぐ エプロンを つけました。わたしも とても うれしかったです。',
    explanation: '',
    questions: [
      {
        id: 'n5-reading-chubun-005-q1',
        stem: 'どうして エプロンを 買いましたか。',
        options: [
          '母は りょうりが すきですから',
          '花が 高かったですから',
          '母が エプロンを 買って くださいと 言いましたから',
          '兄は エプロンが すきですから',
        ],
        answerIndex: 0,
        explanation:
          '哥哥說「お母さんは りょうりが すきだから、エプロンが いいよ」，「わたし」聽了才買圍裙，所以理由是媽媽喜歡做菜。「花が 高かった」文中沒有提到，花最後也買了一朵；提議買圍裙的是哥哥，不是媽媽自己開口要的；喜歡做菜的是媽媽，不是哥哥喜歡圍裙。',
        explanationEn:
          'The older brother said 「お母さんは りょうりが すきだから、エプロンが いいよ」, and the writer bought the apron after hearing this — so the reason is that their mother loves cooking. Nothing says the flowers were expensive, and one flower was in fact bought; the apron was the brother\'s suggestion, not something the mother asked for; and the one who likes cooking is the mother, not the brother liking aprons.',
      },
      {
        id: 'n5-reading-chubun-005-q2',
        stem: '「わたし」は 花を どう しましたか。',
        options: [
          '小さい 花を 一本だけ 買いました',
          '買いませんでした',
          'たくさん 買いました',
          '兄に あげました',
        ],
        answerIndex: 0,
        explanation:
          '文中寫「花は 小さいのを 一本だけ 買いました」，所以花還是買了，只買一朵小的。因此「買いませんでした」錯；「一本だけ」（只有一朵）跟「たくさん」相反；花和圍裙都是送給媽媽的生日禮物，「兄に あげました」文中沒有提到。',
        explanationEn:
          'The passage says 「花は 小さいのを 一本だけ 買いました」, so the writer did buy a flower — just one small one. "Did not buy any" is therefore wrong; 「一本だけ」 (only one) is the opposite of buying a lot; and both the flower and the apron were birthday presents for the mother, so giving the flower to the brother never happens in the passage.',
      },
      {
        id: 'n5-reading-chubun-005-q3',
        stem: 'プレゼントを もらって、母は 何を しましたか。',
        options: [
          'すぐ エプロンを つけました',
          'すぐ りょうりを 作りました',
          'デパートへ 行きました',
          '花を 兄に あげました',
        ],
        answerIndex: 0,
        explanation:
          '文末寫「母は うれしいと 言って、すぐ エプロンを つけました」，所以正解是馬上戴上圍裙。「りょうり」是媽媽喜歡的事，但文中沒說她當場做菜；「デパート」是「わたし」和哥哥白天去買禮物的地方，媽媽沒有去；「花を 兄に あげました」文中完全沒有提到。',
        explanationEn:
          'The passage ends by saying the mother was happy and 「すぐ エプロンを つけました」, so what she did was put the apron on right away. Cooking is what she likes, but the text never says she cooked on the spot; the department store is where the writer and the brother went shopping during the day, not the mother; and giving the flower to the brother appears nowhere in the passage.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n5-reading-chubun-006',
    passageTitle: 'はじめての おべんとう',
    passage:
      'わたしは 毎日 会社の 近くの 店で ひるごはんを 買います。でも、その 店は いつも 人が 多くて、時間が かかります。それで、きのうの 夜、はじめて おべんとうを 作りました。たまごの りょうりと やさいを 入れました。作るのに 一時間ぐらい かかりましたから、少し つかれました。\nきょうの ひる、会社で おべんとうを 食べました。じぶんで 作った りょうりは とても おいしかったです。会社の 人も「じょうずですね」と 言いました。これからも 週に 三回ぐらい 作りたいです。',
    explanation: '',
    questions: [
      {
        id: 'n5-reading-chubun-006-q1',
        stem: 'どうして おべんとうを 作りましたか。',
        options: [
          '店は 人が 多くて、時間が かかりますから',
          'りょうりが じょうずですから',
          '会社の 近くに 店が ありませんから',
          '会社の 人が 作って くださいと 言いましたから',
        ],
        answerIndex: 0,
        explanation:
          '文中寫「その 店は いつも 人が 多くて、時間が かかります。それで、…おべんとうを 作りました」，「それで」點出原因是店裡人多花時間。「じょうずですね」是吃便當之後同事說的話，不是做便當的原因；文中明說「会社の 近くの 店」，所以「店が ありません」錯；同事也沒有拜託「わたし」做便當。',
        explanationEn:
          'The passage says 「その 店は いつも 人が 多くて、時間が かかります。それで、…おべんとうを 作りました」 — the word 「それで」 marks the reason: the shop is always crowded and takes time. 「じょうずですね」 is what a coworker said after eating the lunch, not the reason for making it; the text clearly mentions a shop near the office, so "no shop" is wrong; and no coworker ever asked the writer to make lunch.',
      },
      {
        id: 'n5-reading-chubun-006-q2',
        stem: 'この 文と 合って いるのは どれですか。',
        options: [
          '「わたし」は これからも おべんとうを 作りたいです',
          '「わたし」は 毎日 おべんとうを 作ります',
          'おべんとうを 作るのは かんたんでした',
          '会社の 人が おべんとうを 作りました',
        ],
        answerIndex: 0,
        explanation:
          '文末寫「これからも 週に 三回ぐらい 作りたいです」，所以「これからも 作りたい」正確。想做的是「週に 三回ぐらい」，不是「毎日」；做便當「一時間ぐらい かかりましたから、少し つかれました」，可見並不「かんたん」；便當是「わたし」自己做的，同事只是稱讚，並沒有做便當。',
        explanationEn:
          'The passage ends with 「これからも 週に 三回ぐらい 作りたいです」, so "wants to keep making boxed lunches" matches the text. The plan is about three times a week, not every day; making the lunch took about an hour and left the writer a little tired, so it was hardly simple; and the lunch was made by the writer — the coworkers only praised it, they did not make it.',
      },
    ],
  },
]
