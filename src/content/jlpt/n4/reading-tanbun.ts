import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    id: 'n4-reading-tanbun-001',
    kind: 'passage',
    passage:
      '田中さん\nあしたの午後、いっしょに図書館で勉強する約束でしたが、母が病気になったので、病院へ連れて行かなければなりません。すみませんが、あしたは行けません。あさっての午後なら大丈夫です。あさってがだめなら、電話でほかの日を決めましょう。\n山下',
    explanation: '',
    questions: [
      {
        id: 'n4-reading-tanbun-001-q1',
        stem: '山下さんは、どうしてあした図書館へ行けませんか。',
        options: [
          'お母さんを病院へ連れて行くから',
          '自分が病気になったから',
          '図書館が休みだから',
          'あさって約束があるから',
        ],
        answerIndex: 0,
        explanation:
          '依據「母が病気になったので、病院へ連れて行かなければなりません」，山下要帶媽媽去醫院，所以明天不能去。「自分が病気になったから」錯在生病的是媽媽，不是山下本人；「図書館が休みだから」文中完全沒提圖書館休館；「あさって約束があるから」正好相反，後天是山下說可以的日子。',
        explanationEn:
          'The note says 「母が病気になったので、病院へ連れて行かなければなりません」 — Yamashita has to take his mother to the hospital, so he can\'t go tomorrow. "Because he himself got sick" is wrong: it\'s his mother who is sick, not Yamashita; the passage never mentions the library being closed; and "because he has plans the day after tomorrow" is the opposite — that is the day Yamashita says he is available.',
      },
    ],
  },
  {
    id: 'n4-reading-tanbun-002',
    kind: 'passage',
    passageTitle: 'お知らせ',
    passage:
      'お知らせ\n市民プールは、来週の月曜日から金曜日まで、そうじのため休みます。土曜日からは、いつもどおり使えます。休みの間、プールの教室は、となり町のスポーツセンターで行いますから、教室に来ている人はそちらへ行ってください。質問がある人は、事務所に電話してください。',
    explanation: '',
    questions: [
      {
        id: 'n4-reading-tanbun-002-q1',
        stem: 'プールの教室に来ている人は、来週の水曜日、どうしますか。',
        options: [
          'となり町のスポーツセンターへ行く',
          '市民プールへ行く',
          '事務所に電話してから決める',
          '教室を休む',
        ],
        answerIndex: 0,
        explanation:
          '依據「休みの間、プールの教室は、となり町のスポーツセンターで行いますから…そちらへ行ってください」，下週三課程在鄰鎮的運動中心上。「市民プールへ行く」錯，下週一到五泳池因清掃休館；「事務所に電話してから決める」錯，打電話是「有問題的人」才做的事；「教室を休む」錯，課程沒有停，只是換了地點。',
        explanationEn:
          'The notice says 「休みの間、プールの教室は、となり町のスポーツセンターで行いますから…そちらへ行ってください」, so next Wednesday the class is held at the sports center in the neighboring town. Going to the city pool is wrong — it is closed Monday through Friday for cleaning; calling the office first is wrong — the phone call is only for people who have questions; and skipping the class is wrong — the class isn\'t canceled, only the location has changed.',
      },
    ],
  },
  {
    id: 'n4-reading-tanbun-003',
    kind: 'passage',
    passage:
      'アルバイトのみなさんへ\n店の前にとめる自転車が多くて、お客様が困っています。あしたから、自転車は店のうしろの駐車場にとめてください。店の前にとめてはいけません。駐車場のかぎは店長が持っていますから、自転車で来る人は、朝、店長にかりてください。',
    explanation: '',
    questions: [
      {
        id: 'n4-reading-tanbun-003-q1',
        stem: '自転車で店に来る人は、あしたの朝、まず何をしますか。',
        options: [
          '店長に駐車場のかぎをかりる',
          '自転車を店の前にとめる',
          '店長にかぎをかえす',
          'お客様に駐車場をあんないする',
        ],
        answerIndex: 0,
        explanation:
          '依據「駐車場のかぎは店長が持っていますから…朝、店長にかりてください」，早上要先向店長借停車場鑰匙。「自転車を店の前にとめる」正是被禁止的行為（店の前にとめてはいけません）；「かぎをかえす」錯，文中只說借，沒說早上要還；「お客様に駐車場をあんないする」錯，客人只是被腳踏車困擾的一方，帶位不是打工者要做的事。',
        explanationEn:
          'The notice says 「駐車場のかぎは店長が持っていますから…朝、店長にかりてください」, so the first thing to do in the morning is borrow the parking-lot key from the manager. Parking a bicycle in front of the shop is exactly what is forbidden (店の前にとめてはいけません); returning the key is wrong — the text only mentions borrowing it, not returning it in the morning; and guiding customers to the parking lot is wrong — customers are simply the ones bothered by the bicycles, and this isn\'t a task for the part-timers.',
      },
    ],
  },
  {
    id: 'n4-reading-tanbun-004',
    kind: 'passage',
    passage:
      'わたしは毎朝、駅まで歩いて行きます。前はバスに乗っていましたが、朝のバスは人が多くて、時間もかかります。歩くと三十分かかりますが、体にいいし、道の花や鳥を見るのも楽しいです。雨の日はバスに乗りますが、天気がいい日は、これからも歩くつもりです。',
    explanation: '',
    questions: [
      {
        id: 'n4-reading-tanbun-004-q1',
        stem: 'この人は、どうして駅まで歩いて行きますか。',
        options: [
          '体にいいし、道の花や鳥を見るのが楽しいから',
          '朝のバスがなくなったから',
          '歩くほうがバスより速いから',
          '雨の日が多いから',
        ],
        answerIndex: 0,
        explanation:
          '依據「体にいいし、道の花や鳥を見るのも楽しいです」，走路的理由是對身體好又能賞景。「朝のバスがなくなったから」錯，公車還在，雨天他照樣搭；「歩くほうがバスより速いから」是典型陷阱，文中說公車「時間もかかります」，但走路要三十分鐘，並沒有說走路比較快；「雨の日が多いから」相反，雨天他反而搭公車。',
        explanationEn:
          'The passage says 「体にいいし、道の花や鳥を見るのも楽しいです」 — the reasons for walking are that it\'s good for the body and enjoying the flowers and birds along the way is fun. "Because the morning bus was discontinued" is wrong: the bus still runs and the writer takes it on rainy days; "because walking is faster than the bus" is a classic trap — the text says the bus 「時間もかかります」, but walking takes thirty minutes and is never said to be faster; and "because there are many rainy days" is backwards — on rainy days the writer takes the bus instead.',
      },
    ],
  },
  {
    id: 'n4-reading-tanbun-005',
    kind: 'passage',
    passage:
      'みなさんへ\n来月の社員旅行についてお知らせします。旅行は十月十五日と十六日で、山の近くのホテルに泊まります。行きたい人は、今週の金曜日までに、名前を書いた紙を鈴木に出してください。お金は来週集めます。バスの席が四十しかないので、早く出してください。質問はメールでお願いします。\n鈴木',
    explanation: '',
    questions: [
      {
        id: 'n4-reading-tanbun-005-q1',
        stem: '旅行に行きたい人は、まず何をしますか。',
        options: [
          '金曜日までに名前を書いた紙を鈴木さんに出す',
          '来週、鈴木さんにお金をはらう',
          '鈴木さんに電話で質問する',
          'バスの席を予約する',
        ],
        answerIndex: 0,
        explanation:
          '依據「行きたい人は、今週の金曜日までに、名前を書いた紙を鈴木に出してください」，第一步是本週五前交出寫了名字的紙。「来週、鈴木さんにお金をはらう」錯在順序，錢是下週才收，不是先做的事；「電話で質問する」錯，文末說「質問はメールでお願いします」；「バスの席を予約する」錯，訂位不是個人要做的事。',
        explanationEn:
          'The notice says 「行きたい人は、今週の金曜日までに、名前を書いた紙を鈴木に出してください」, so the first step is to hand in a paper with your name to Suzuki by this Friday. Paying Suzuki next week gets the order wrong — the money is collected next week, so it isn\'t the first thing to do; asking questions by phone is wrong because the notice ends with 「質問はメールでお願いします」; and reserving a bus seat is wrong — booking seats isn\'t something individuals are asked to do.',
      },
      {
        id: 'n4-reading-tanbun-005-q2',
        stem: 'どうして早く紙を出さなければなりませんか。',
        options: [
          'バスの席が四十しかないから',
          '来週、お金を集めるから',
          'ホテルの部屋が少ないから',
          '旅行が来週だから',
        ],
        answerIndex: 0,
        explanation:
          '依據「バスの席が四十しかないので、早く出してください」，催大家早點交是因為巴士座位只有四十個。「来週、お金を集めるから」錯，收錢確實是下週的事，但那不是要「早く」的理由；「ホテルの部屋が少ないから」錯，文中只說住山邊的飯店，沒提房間數；「旅行が来週だから」錯，旅行是下個月的十月十五、十六日。',
        explanationEn:
          'The notice says 「バスの席が四十しかないので、早く出してください」 — people are urged to hand in the paper early because the bus has only forty seats. "Because money will be collected next week" is wrong: the collection is indeed next week, but that isn\'t the reason for hurrying; "because the hotel has few rooms" is wrong — the text only says they will stay at a hotel near the mountains and never mentions the number of rooms; and "because the trip is next week" is wrong — the trip is next month, on October 15 and 16.',
      },
    ],
  },
  {
    id: 'n4-reading-tanbun-006',
    kind: 'passage',
    passageTitle: 'アパートのみなさまへ',
    passage:
      'アパートのみなさまへ\n九月三日（木）の午前九時から十二時まで、水道の工事があります。その間、水が使えません。前の日に、飲む水をよういしておいてください。工事の音が少しうるさくなりますが、すみません。工事の時間が変わるときは、また紙をはってお知らせします。\n管理人',
    explanation: '',
    questions: [
      {
        id: 'n4-reading-tanbun-006-q1',
        stem: 'アパートの人は、工事の前に何をしておきますか。',
        options: [
          '飲む水をよういしておく',
          '管理人に電話しておく',
          '九時までに水道を直しておく',
          '紙をはっておく',
        ],
        answerIndex: 0,
        explanation:
          '依據「前の日に、飲む水をよういしておいてください」，住戶要在前一天先準備好飲用水。「管理人に電話しておく」錯，公告沒有要求住戶聯絡管理員；「水道を直しておく」錯，施工是工程方的事，住戶不用修水管；「紙をはっておく」錯，貼公告是管理員在時間變更時做的事，不是住戶要做的。',
        explanationEn:
          'The notice says 「前の日に、飲む水をよういしておいてください」 — residents should prepare drinking water the day before. Calling the building manager is wrong because the notice never asks residents to contact anyone; fixing the water pipes is wrong — the construction is the workers\' job, not the residents\'; and putting up a notice is wrong — posting paper notices is what the manager does if the schedule changes, not something for residents to do.',
      },
      {
        id: 'n4-reading-tanbun-006-q2',
        stem: 'この紙で一番言いたいことは何ですか。',
        options: [
          '九月三日の午前中は水が使えないこと',
          '工事の音がうるさいこと',
          '水道がこわれたこと',
          'アパートが休みになること',
        ],
        answerIndex: 0,
        explanation:
          '公告的核心是通知「九月三日…午前九時から十二時まで…水が使えません」，也就是三日上午不能用水，後面的準備飲用水都由此而來。「工事の音がうるさいこと」只是附帶的道歉，不是主要目的；「水道がこわれたこと」錯，這是預定的工事，文中沒說水管壞掉；「アパートが休みになること」文中完全沒提。',
        explanationEn:
          'The main point of the notice is that 「九月三日…午前九時から十二時まで…水が使えません」 — water will be unavailable on the morning of September 3, and the instruction to prepare drinking water follows from this. The construction noise is only a side apology, not the main purpose; "the water pipes broke" is wrong — this is scheduled construction and nothing in the text says the pipes are broken; and the apartment being closed is never mentioned at all.',
      },
    ],
  },
  {
    id: 'n4-reading-tanbun-007',
    kind: 'passage',
    passage:
      'わたしの国の学校では、そうじの人が教室をそうじします。日本の学校では、生徒が自分たちで教室をそうじすると聞いて、はじめはとてもびっくりしました。でも、今の日本語学校で毎日そうじをしてみると、自分たちでそうじした教室は、きれいに使おうという気持ちになります。今では、生徒がそうじをするのは、いいことだと思っています。',
    explanation: '',
    questions: [
      {
        id: 'n4-reading-tanbun-007-q1',
        stem: 'この人は、生徒が教室をそうじすることについて、今、どう思っていますか。',
        options: [
          'いいことだと思っている',
          '今もびっくりしている',
          'そうじの人がしたほうがいいと思っている',
          '国の学校のほうがきれいだと思っている',
        ],
        answerIndex: 0,
        explanation:
          '文末明說「今では、生徒がそうじをするのは、いいことだと思っています」，所以現在的想法是「好事」。「今もびっくりしている」錯，吃驚是「はじめは」的反應，已被「でも」之後的內容推翻；「そうじの人がしたほうがいい」錯，那只是他國家學校的做法，不是他的主張；「国の学校のほうがきれい」文中完全沒有比較哪邊乾淨。',
        explanationEn:
          'The last sentence says it directly: 「今では、生徒がそうじをするのは、いいことだと思っています」 — the writer now thinks it is a good thing. "Still surprised" is wrong: being surprised belongs to 「はじめは」 and is overturned by what follows 「でも」; "cleaning staff should do it" is merely how schools in the writer\'s country work, not the writer\'s opinion; and the passage never compares which country\'s schools are cleaner.',
      },
    ],
  },
  {
    id: 'n4-reading-tanbun-008',
    kind: 'passage',
    passage:
      'わたしはよく、インターネットで服を買います。店より安いし、家までとどけてくれるので、便利だからです。でも、くつだけは、いつも店で買います。くつは、はいてみないと、自分の足に合うかどうか分からないからです。前に一度、インターネットで買ったくつが小さくて、はけなかったことがあります。それから、くつは店ではいてみてから、買うことにしています。',
    explanation: '',
    questions: [
      {
        id: 'n4-reading-tanbun-008-q1',
        stem: 'この人は、どうしてくつは店で買いますか。',
        options: [
          'はいてみないと、足に合うかどうか分からないから',
          '店のほうがインターネットより安いから',
          '店の人がくつをえらんでくれるから',
          '家までとどけてくれるから',
        ],
        answerIndex: 0,
        explanation:
          '文中明說「くつは、はいてみないと、自分の足に合うかどうか分からないからです」，不試穿就不知道合不合腳，這才是在店裡買鞋的理由。「店のほうが安いから」正好相反，文中說網路「店より安い」；「店の人がえらんでくれる」文中沒提；「家までとどけてくれる」是網購的優點，不是在店裡買的理由。',
        explanationEn:
          'The passage states the reason: 「くつは、はいてみないと、自分の足に合うかどうか分からないからです」 — without trying shoes on, you can\'t tell whether they fit. "Stores are cheaper than the internet" is backwards: the text says online shopping is 「店より安い」; a clerk choosing shoes for the writer is never mentioned; and home delivery is an advantage of online shopping, not a reason to buy at a store.',
      },
    ],
  },
  {
    id: 'n4-reading-tanbun-009',
    kind: 'passage',
    passage:
      'お父さんへ\n今日の夜、姉さんの家族がうちに来ます。わたしは仕事で、帰りが七時になります。すみませんが、六時に駅へむかえに行ってください。それから、駅へ行く前に、スーパーでジュースとくだものを買っておいてください。お金はテーブルの上にあります。ばんごはんは、姉さんが作ってくれるそうです。\n京子',
    explanation: '',
    questions: [
      {
        id: 'n4-reading-tanbun-009-q1',
        stem: 'お父さんは、今日、何をしますか。',
        options: [
          'スーパーで買い物をしてから、駅へむかえに行く',
          '駅へ行ってから、スーパーで買い物をする',
          'ばんごはんを作ってから、駅へ行く',
          '七時に駅へむかえに行く',
        ],
        answerIndex: 0,
        explanation:
          '依據「駅へ行く前に、スーパーでジュースとくだものを買っておいてください」，順序是先買東西、再去車站接人。「駅へ行ってから買い物」順序相反；「ばんごはんを作って」錯，晚飯是姉さん要做的（作ってくれるそうです）；「七時に駅へ」錯，接人的時間是六點，七點是京子下班回家的時間。',
        explanationEn:
          'The memo says 「駅へ行く前に、スーパーでジュースとくだものを買っておいてください」, so the order is shopping first, then picking everyone up at the station. "Station first, then shopping" reverses the order; "make dinner" is wrong — dinner will be made by the older sister (作ってくれるそうです); and "go to the station at seven" is wrong, since pickup time is six and seven is when Kyoko gets home from work.',
      },
      {
        id: 'n4-reading-tanbun-009-q2',
        stem: '京子さんは、どうして駅へむかえに行けませんか。',
        options: [
          '仕事で、帰りが七時になるから',
          'ばんごはんを作らなければならないから',
          'スーパーで買い物をするから',
          '姉さんの家族と出かけるから',
        ],
        answerIndex: 0,
        explanation:
          '依據「わたしは仕事で、帰りが七時になります」，京子因為工作要七點才能回家，趕不上六點去車站接人。「ばんごはんを作らなければならない」錯，晚飯是姉さん做，不是京子；「スーパーで買い物をする」錯，買東西是拜託爸爸做的事；「姉さんの家族と出かける」文中完全沒提，姉さん一家是今晚要來家裡。',
        explanationEn:
          'The memo says 「わたしは仕事で、帰りが七時になります」 — Kyoko won\'t be home until seven because of work, so she can\'t be at the station at six. "She has to make dinner" is wrong: dinner is the older sister\'s job, not Kyoko\'s; "she is shopping at the supermarket" is wrong — the shopping is what she asks her father to do; and going out with the sister\'s family is never mentioned, since they are coming to the house tonight.',
      },
    ],
  },
  {
    id: 'n4-reading-tanbun-010',
    kind: 'passage',
    passage:
      'わたしのしゅみは、絵をかくことです。休みの日は、小さいスケッチブックとえんぴつを持って、近くの公園へ行きます。公園の木や花、ねこなどをかきます。じょうずではないので、はじめは人に見られるのがはずかしかったです。でも先週、わたしの絵を見ていた小さい女の子が「上手だね」と言ってくれて、とてもうれしくなりました。これからも、たくさんかきたいと思います。',
    explanation: '',
    questions: [
      {
        id: 'n4-reading-tanbun-010-q1',
        stem: 'この人は、先週、どうしてうれしくなりましたか。',
        options: [
          '女の子が絵を「上手だね」と言ってくれたから',
          '絵がじょうずにかけるようになったから',
          '公園でねこに会えたから',
          '新しいスケッチブックを買ったから',
        ],
        answerIndex: 0,
        explanation:
          '依據「小さい女の子が『上手だね』と言ってくれて、とてもうれしくなりました」，開心的原因是小女孩稱讚了他的畫。「じょうずにかけるようになった」錯，文中說自己「じょうずではない」，並沒有說畫變好了；「ねこに会えたから」錯，貓只是他平常畫的題材之一；「新しいスケッチブックを買った」文中完全沒提。',
        explanationEn:
          'The passage says 「小さい女の子が『上手だね』と言ってくれて、とてもうれしくなりました」 — the writer was happy because a little girl praised the drawing. "Because the writer became good at drawing" is wrong: the text says 「じょうずではない」 and never claims improvement; "because of meeting a cat" is wrong — cats are just one of the usual subjects to draw; and buying a new sketchbook is never mentioned.',
      },
    ],
  },
  {
    id: 'n4-reading-tanbun-011',
    kind: 'passage',
    passage:
      'リンさん\n日曜日のぎょうざパーティーのことですが、場所はわたしのアパートで、十二時からです。ざいりょうはわたしが買っておきますから、リンさんは飲み物を二本ぐらい持ってきてください。作り方は、りょうりが上手な王さんが教えてくれます。アパートの入口が分かりにくいので、着いたら電話してください。むかえに行きます。\n田中',
    explanation: '',
    questions: [
      {
        id: 'n4-reading-tanbun-011-q1',
        stem: 'リンさんは、日曜日、何を持って行きますか。',
        options: [
          '飲み物',
          'ぎょうざのざいりょう',
          'りょうりの本',
          '何も持って行かなくてもいい',
        ],
        answerIndex: 0,
        explanation:
          '依據「リンさんは飲み物を二本ぐらい持ってきてください」，林同學要帶的是飲料。「ぎょうざのざいりょう」錯，材料是田中「買っておきます」，由田中先準備；「りょうりの本」文中沒提，作法是由會做菜的王さん現場教；「何も持って行かなくてもいい」錯，田中明確拜託了帶飲料這件事。',
        explanationEn:
          'The message says 「リンさんは飲み物を二本ぐらい持ってきてください」 — Lin should bring drinks. "The gyoza ingredients" is wrong because Tanaka says 「買っておきます」, meaning Tanaka will buy them in advance; a cookbook is never mentioned — Wang, who is good at cooking, will teach everyone on the spot; and "doesn\'t need to bring anything" is wrong since Tanaka explicitly asks for drinks.',
      },
      {
        id: 'n4-reading-tanbun-011-q2',
        stem: 'リンさんは、アパートに着いたら、まず何をしますか。',
        options: [
          '田中さんに電話する',
          '一人で部屋をさがす',
          '王さんに作り方を教える',
          'ざいりょうを買いに行く',
        ],
        answerIndex: 0,
        explanation:
          '依據「着いたら電話してください。むかえに行きます」，到了公寓要先打電話給田中，田中會來接。「一人で部屋をさがす」錯，正因為「入口が分かりにくい」才要打電話等人來接；「王さんに作り方を教える」方向相反，是王さん教大家；「ざいりょうを買いに行く」錯，材料由田中事先買好。',
        explanationEn:
          'The message says 「着いたら電話してください。むかえに行きます」 — upon arriving, Lin should first call Tanaka, who will come to meet her. Looking for the room alone is wrong: the phone call is needed precisely because 「入口が分かりにくい」; "teaching Wang how to cook" reverses the roles — Wang is the one who teaches; and buying ingredients is wrong because Tanaka buys them beforehand.',
      },
    ],
  },
  {
    id: 'n4-reading-tanbun-012',
    kind: 'passage',
    passage:
      'わたしは去年から、そふに将棋を教えてもらっています。こまの動かし方がむずかしくて、はじめのころは、何度やってもまけていました。でも先週、はじめてそふに勝つことができました。そのとき、わたしよりも、そふのほうがうれしそうな顔をしていました。「教えた人が強くなるのは、うれしいものだよ」と、そふは笑いながら言いました。',
    explanation: '',
    questions: [
      {
        id: 'n4-reading-tanbun-012-q1',
        stem: 'そふは、どうしてうれしそうな顔をしていましたか。',
        options: [
          '教えた「わたし」が強くなって、勝ったから',
          'そふが将棋に勝ったから',
          '新しいこまをもらったから',
          '「わたし」がまけたから',
        ],
        answerIndex: 0,
        explanation:
          '依據「教えた人が強くなるのは、うれしいものだよ」，爺爺開心是因為自己教的「わたし」變強、贏了棋。「そふが勝ったから」正好相反，上週是「わたし」第一次贏了爺爺；「新しいこまをもらった」文中沒提，「こま」只出現在「動かし方がむずかしい」的說明裡；「わたしがまけたから」錯，輸棋是以前的事，而且那也不是爺爺開心的理由。',
        explanationEn:
          'Grandfather\'s own words explain it: 「教えた人が強くなるのは、うれしいものだよ」 — he was happy because the grandchild he taught grew stronger and won. "Because grandfather won" is the opposite: last week the writer beat him for the first time; receiving new pieces is never mentioned — 「こま」 only appears in the remark about how hard the moves are; and "because the writer lost" is wrong, since losing belongs to the earlier period and wasn\'t what pleased him.',
      },
    ],
  },
]
