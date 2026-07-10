import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    id: 'n5-reading-tanbun-001',
    kind: 'passage',
    passage:
      'リンさん\nきのう かりた 本を もって きました。リンさんが いなかったので、つくえの 上に おきました。とても おもしろかったです。ありがとう。\nマイク',
    explanation: '',
    questions: [
      {
        id: 'n5-reading-tanbun-001-q1',
        stem: 'マイクさんは、どうして 本を つくえの 上に おきましたか。',
        options: [
          'リンさんが いなかったから',
          '本が おもしろかったから',
          'きのう 本を かりたから',
          'リンさんが 「おいて ください」と 言ったから',
        ],
        answerIndex: 0,
        explanation:
          '依據「リンさんが いなかったので、つくえの 上に おきました」，因為林同學不在，麥克才把書放在桌上。「本が おもしろかったから」文中確實說書很有趣，但那是感想，不是放桌上的理由；「きのう 本を かりたから」是還書的背景，不是放桌上的原因；「おいて ください」這句話文中根本沒有出現。',
        explanationEn:
          'The note says 「リンさんが いなかったので、つくえの 上に おきました」, so Mike put the book on the desk because Lin was not there. The book being interesting (「本が おもしろかった」) is just his impression, not the reason for putting it on the desk; borrowing the book yesterday is only the background for returning it; and the phrase 「おいて ください」 never appears in the note at all.',
      },
    ],
  },
  {
    id: 'n5-reading-tanbun-002',
    kind: 'passage',
    passageTitle: 'クラスの みなさんへ',
    passage:
      'クラスの みなさんへ\nあしたの 日本語の じゅぎょうは、九時からでは なくて、十時からです。へやも かわります。あしたは 二かいの 五ばんの へやに 来て ください。\n先生',
    explanation: '',
    questions: [
      {
        id: 'n5-reading-tanbun-002-q1',
        stem: '学生は あした、どう しますか。',
        options: [
          '十時に 二かいの 五ばんの へやへ 行く',
          '九時に 二かいの 五ばんの へやへ 行く',
          '十時に いつもの へやへ 行く',
          '九時に 先生の へやへ 行く',
        ],
        answerIndex: 0,
        explanation:
          '通知說課程「九時からでは なくて、十時からです」，而且「二かいの 五ばんの へやに 来て ください」，所以正確做法是十點到二樓五號教室。「九時に…」錯，九點是被「〜では なくて」否定掉的原時間；「いつもの へやへ 行く」錯，通知明說「へやも かわります」（教室也改了）；「先生の へや」文中沒有提到。',
        explanationEn:
          'The notice says the class starts 「九時からでは なくて、十時からです」 and tells students 「二かいの 五ばんの へやに 来て ください」, so the right action is to go to room 5 on the second floor at ten. Nine o\'clock is the old time canceled by 「〜では なくて」; the usual room is wrong because the notice says 「へやも かわります」 (the room changes too); and the teacher\'s room is never mentioned.',
      },
    ],
  },
  {
    id: 'n5-reading-tanbun-003',
    kind: 'passage',
    passage:
      'たろうへ\nおかあさんは 買いものに 行きます。六時までに かえります。れいぞうこの 中に ケーキが ありますから、おやつに 食べて ください。ジュースは テーブルの 上に あります。\n母',
    explanation: '',
    questions: [
      {
        id: 'n5-reading-tanbun-003-q1',
        stem: 'ケーキは どこに ありますか。',
        options: [
          'れいぞうこの 中',
          'テーブルの 上',
          '買いものの ふくろの 中',
          'おかあさんの へや',
        ],
        answerIndex: 0,
        explanation:
          '依據「れいぞうこの 中に ケーキが あります」，蛋糕在冰箱裡。「テーブルの 上」是文中出現過的地點，但放在那裡的是果汁（ジュース），不是蛋糕，是典型的張冠李戴陷阱；「買いものの ふくろ」錯，媽媽是現在才要出門買東西；「おかあさんの へや」文中完全沒有提到。',
        explanationEn:
          'The note says 「れいぞうこの 中に ケーキが あります」, so the cake is in the refrigerator. The table does appear in the note, but what is on the table is the juice, not the cake — a classic mix-and-match trap. The shopping bag is wrong because Mom is only now heading out to shop, and Mom\'s room is never mentioned at all.',
      },
    ],
  },
  {
    id: 'n5-reading-tanbun-004',
    kind: 'passage',
    passage:
      'わたしは 毎朝 六時に おきます。おきてから、いぬと さんぽを します。それから、パンを 食べて、ぎゅうにゅうを のみます。ごはんは あまり 食べません。学校へは 自てん車で 行きます。',
    explanation: '',
    questions: [
      {
        id: 'n5-reading-tanbun-004-q1',
        stem: 'この 人は、おきてから はじめに 何を しますか。',
        options: [
          'いぬと さんぽを します',
          'パンを 食べます',
          'ぎゅうにゅうを のみます',
          '自てん車で 学校へ 行きます',
        ],
        answerIndex: 0,
        explanation:
          '文章順序是「おきてから、いぬと さんぽを します。それから、パンを 食べて…」，起床後第一件事是和狗散步，吃麵包、喝牛奶都是「それから」（然後）之後的事。「パンを 食べます」「ぎゅうにゅうを のみます」都在散步之後；「自てん車で 学校へ 行きます」是最後才做的事，順序全都不對。',
        explanationEn:
          'The passage runs 「おきてから、いぬと さんぽを します。それから、パンを 食べて…」, so the first thing after getting up is taking a walk with the dog. Eating bread and drinking milk both come after 「それから」 (after that), and going to school by bicycle is the very last thing, so every other option has the wrong order.',
      },
    ],
  },
  {
    id: 'n5-reading-tanbun-005',
    kind: 'passage',
    passageTitle: 'お知らせ',
    passage:
      'お知らせ\nとしょしつは、こんしゅうの 金曜日、そうじの ため 休みます。本を かえす 人は、木曜日までに 来て ください。木曜日に 来られない 人は、としょしつの 前の はこに 本を 入れて ください。',
    explanation: '',
    questions: [
      {
        id: 'n5-reading-tanbun-005-q1',
        stem: 'としょしつは、どうして 金曜日に 休みますか。',
        options: [
          'そうじを するから',
          '本を かえす 人が 多いから',
          '木曜日が 休みだから',
          'はこが ないから',
        ],
        answerIndex: 0,
        explanation:
          '依據「こんしゅうの 金曜日、そうじの ため 休みます」，週五休息的原因是打掃。「本を かえす 人が 多いから」錯，還書只是通知裡提醒大家要做的事，不是休息的理由；「木曜日が 休みだから」錯，週四反而是可以來還書的日子；「はこが ないから」錯，箱子確實存在，是給週四來不了的人放書用的。',
        explanationEn:
          'The notice says 「こんしゅうの 金曜日、そうじの ため 休みます」, so the library room is closed on Friday for cleaning. Returning books is just what the notice asks people to do, not the reason for closing; Thursday is actually a day you can still come to return books; and the box does exist — it is there for people who cannot come on Thursday.',
      },
      {
        id: 'n5-reading-tanbun-005-q2',
        stem: '木曜日に 来られない 人は、どう しますか。',
        options: [
          'としょしつの 前の はこに 本を 入れる',
          '金曜日に としょしつへ 行く',
          'としょしつの そうじを する',
          '本を かえさなくても いい',
        ],
        answerIndex: 0,
        explanation:
          '依據「木曜日に 来られない 人は、としょしつの 前の はこに 本を 入れて ください」，週四來不了的人要把書放進圖書室前的箱子。「金曜日に としょしつへ 行く」錯，週五圖書室休息，去了也沒開；「そうじを する」是圖書室休息的原因，不是學生要做的事；「かえさなくても いい」錯，通知並沒有說可以不還書。',
        explanationEn:
          'The notice says 「木曜日に 来られない 人は、としょしつの 前の はこに 本を 入れて ください」, so people who cannot come on Thursday should put their books in the box in front of the library room. Going on Friday is wrong because the room is closed that day; cleaning is the reason for the closure, not something students must do; and the notice never says you may skip returning the book.',
      },
    ],
  },
  {
    id: 'n5-reading-tanbun-006',
    kind: 'passage',
    passage:
      'ゆきさん\nあしたの えいがは、三時からでは なくて、四時からに かわりました。ですから、三時半に 駅で 会いましょう。えいがの あとで、いっしょに ばんごはんを 食べませんか。\nはな',
    explanation: '',
    questions: [
      {
        id: 'n5-reading-tanbun-006-q1',
        stem: 'ふたりは あした、何時に 駅で 会いますか。',
        options: ['三時半', '三時', '四時', '四時半'],
        answerIndex: 0,
        explanation:
          '依據「三時半に 駅で 会いましょう」，兩人約三點半在車站見面。「三時」是電影原本的開始時間，已經被「〜では なくて」否定；「四時」是改過之後電影開始的時間，不是見面時間；「四時半」文中完全沒有出現。這題要分清「電影時間」和「見面時間」兩個數字。',
        explanationEn:
          'The message says 「三時半に 駅で 会いましょう」, so the two will meet at the station at 3:30. Three o\'clock is the movie\'s original start time, already canceled by 「〜では なくて」; four o\'clock is the movie\'s new start time, not the meeting time; and 4:30 never appears in the text. The key is keeping the movie time and the meeting time apart.',
      },
      {
        id: 'n5-reading-tanbun-006-q2',
        stem: 'はなさんは、えいがの あとで 何を したいですか。',
        options: [
          'ゆきさんと ばんごはんを 食べたい',
          'ゆきさんと 駅で 会いたい',
          'もう いちど えいがを 見たい',
          'すぐ うちへ かえりたい',
        ],
        answerIndex: 0,
        explanation:
          '依據「えいがの あとで、いっしょに ばんごはんを 食べませんか」，花用「〜ませんか」邀約雪一起吃晚餐，這就是她電影後想做的事。「駅で 会いたい」錯，在車站見面是看電影「之前」的事，不是之後；「もう いちど えいがを 見たい」錯，文中沒說要再看一次；「すぐ うちへ かえりたい」與邀約吃晚餐正好相反。',
        explanationEn:
          'The message says 「えいがの あとで、いっしょに ばんごはんを 食べませんか」, an invitation using 「〜ませんか」, so what Hana wants to do after the movie is have dinner together with Yuki. Meeting at the station happens before the movie, not after; nothing in the text says she wants to watch the movie again; and going straight home is the exact opposite of her dinner invitation.',
      },
    ],
  },
  {
    id: 'n5-reading-tanbun-007',
    kind: 'passage',
    passage:
      '山田先生\nわたしは いま きょうとに います。きのうは おてらを 見ました。きょうは あさから 雨ですから、ホテルで 手がみを 書いて います。あした 東京に かえります。\nアンナ',
    explanation: '',
    questions: [
      {
        id: 'n5-reading-tanbun-007-q1',
        stem: 'アンナさんは きょう、何を して いますか。',
        options: [
          'ホテルで 手がみを 書いて います',
          'おてらを 見て います',
          '東京へ かえって います',
          '雨の 中を さんぽして います',
        ],
        answerIndex: 0,
        explanation:
          '明信片說「きょうは あさから 雨ですから、ホテルで 手がみを 書いて います」，安娜今天正在飯店寫信。「おてらを 見て います」錯，看寺廟是「きのう」（昨天）的事；「東京へ かえって います」錯，回東京是「あした」（明天）才做的事；「さんぽして います」文中沒有出現，而且正因為下雨她才待在飯店。這題要抓住 きのう／きょう／あした 三個時間詞。',
        explanationEn:
          'The postcard says 「きょうは あさから 雨ですから、ホテルで 手がみを 書いて います」, so Anna is writing letters at the hotel today. Seeing temples was 「きのう」 (yesterday); going back to Tokyo is 「あした」 (tomorrow); and taking a walk never appears — the rain is exactly why she is staying at the hotel. The key is tracking the three time words きのう, きょう, and あした.',
      },
    ],
  },
  {
    id: 'n5-reading-tanbun-008',
    kind: 'passage',
    passageTitle: 'お知らせ',
    passage:
      'お知らせ\nこの みせは、毎週 月曜日は 休みです。あさは 八時から あいて います。土曜日は、あさ 十時まで パンが ぜんぶ 百円です。',
    explanation: '',
    questions: [
      {
        id: 'n5-reading-tanbun-008-q1',
        stem: 'パンが 百円なのは いつですか。',
        options: [
          '土曜日の あさ 十時まで',
          '月曜日の あさ',
          '毎日 あさ 八時から',
          '土曜日の ごご',
        ],
        answerIndex: 0,
        explanation:
          '依據「土曜日は、あさ 十時まで パンが ぜんぶ 百円です」，麵包一百圓的時段是週六早上十點以前。「月曜日の あさ」錯，週一是公休日，店根本沒開；「毎日 あさ 八時から」錯，八點只是每天開店的時間，跟特價無關；「土曜日の ごご」錯，特價只到早上十點，下午已經結束了。',
        explanationEn:
          'The notice says 「土曜日は、あさ 十時まで パンが ぜんぶ 百円です」, so bread costs 100 yen until 10 a.m. on Saturday. Monday morning is wrong because Monday is the shop\'s day off, so it is not even open; eight o\'clock is just the daily opening time and has nothing to do with the sale; and Saturday afternoon is wrong because the sale ends at 10 in the morning.',
      },
    ],
  },
  {
    id: 'n5-reading-tanbun-009',
    kind: 'passage',
    passage:
      '田中さん\n日曜日に こうえんで テニスを しませんか。あさ 九時に こうえんの 入口で 会いましょう。雨の ときは、テニスは しないで、わたしの うちで ゲームを します。\n木村',
    explanation: '',
    questions: [
      {
        id: 'n5-reading-tanbun-009-q1',
        stem: '日曜日が 雨の とき、ふたりは 何を しますか。',
        options: [
          '木村さんの うちで ゲームを します',
          'こうえんで テニスを します',
          '田中さんの うちで ゲームを します',
          'こうえんの 入口で 待ちます',
        ],
        answerIndex: 0,
        explanation:
          '寫信的人是木村，他說「雨の ときは…わたしの うちで ゲームを します」，「わたし」＝木村，所以下雨時要在木村家玩遊戲。「こうえんで テニスを します」錯，那是晴天的計畫，下雨時明說「テニスは しないで」；「田中さんの うちで」錯，是寫信人（木村）的家，不是收信人田中的家；「入口で 待ちます」是晴天九點見面的地點，下雨時沒有這個安排。',
        explanationEn:
          'The writer is Kimura, who says 「雨の ときは…わたしの うちで ゲームを します」 — 「わたし」 means Kimura, so if it rains they will play games at Kimura\'s house. Tennis in the park is the fair-weather plan, and he clearly says 「テニスは しないで」 for rain; Tanaka\'s house is wrong because 「わたし」 is the writer, not the receiver; and waiting at the park entrance is only part of the sunny-day 9 a.m. plan.',
      },
    ],
  },
  {
    id: 'n5-reading-tanbun-010',
    kind: 'passage',
    passage:
      'わたしの かぞくは 四人です。父は りょうりが じょうずで、日曜日に ばんごはんを 作ります。母は 毎晩 本を 読みます。兄は うたが すきですが、あまり じょうずでは ありません。',
    explanation: '',
    questions: [
      {
        id: 'n5-reading-tanbun-010-q1',
        stem: '日曜日に ばんごはんを 作るのは だれですか。',
        options: ['父', '母', '兄', 'わたし'],
        answerIndex: 0,
        explanation:
          '依據「父は りょうりが じょうずで、日曜日に ばんごはんを 作ります」，週日做晚餐的人是爸爸。「母」錯，文中媽媽做的事是每天晚上看書；「兄」錯，哥哥的描述是喜歡唱歌但不太拿手，跟做飯無關；「わたし」錯，文章沒有提到「我」做晚餐。這題考的是把每個家人和各自的行為正確配對。',
        explanationEn:
          'The passage says 「父は りょうりが じょうずで、日曜日に ばんごはんを 作ります」, so the father is the one who makes dinner on Sundays. The mother is described as reading books every evening; the older brother likes singing but is not very good at it, which has nothing to do with cooking; and the passage never says 「わたし」 makes dinner. The point is matching each family member with the right activity.',
      },
    ],
  },
  {
    id: 'n5-reading-tanbun-011',
    kind: 'passage',
    passageTitle: 'クラスの みなさんへ',
    passage:
      'クラスの みなさんへ\n来週の 水曜日に、バスで どうぶつえんへ 行きます。あさ 八時半に 学校に 来て ください。おべんとうと のみものを もって きて ください。雨の 日は 行きません。学校で じゅぎょうを します。\n先生',
    explanation: '',
    questions: [
      {
        id: 'n5-reading-tanbun-011-q1',
        stem: '学生は 何を もって いきますか。',
        options: [
          'おべんとうと のみもの',
          'おかしと ジュース',
          '本と ノート',
          '何も もって いかない',
        ],
        answerIndex: 0,
        explanation:
          '通知說「おべんとうと のみものを もって きて ください」，要帶的是便當和飲料。「おかしと ジュース」錯，通知裡完全沒提到零食，ジュース也只是「のみもの」的其中一種，不能代表指示內容；「本と ノート」是上課用品，遠足通知沒有要求；「何も もって いかない」與「もって きて ください」的指示正好相反。',
        explanationEn:
          'The notice says 「おべんとうと のみものを もって きて ください」, so students should bring a boxed lunch and a drink. Snacks are never mentioned, and juice is only one kind of 「のみもの」, so it cannot stand for the instruction; books and notebooks are regular class items the outing notice never asks for; and bringing nothing directly contradicts 「もって きて ください」.',
      },
      {
        id: 'n5-reading-tanbun-011-q2',
        stem: '雨の 日は、どう しますか。',
        options: [
          '学校で じゅぎょうを します',
          'バスで どうぶつえんへ 行きます',
          '学校は 休みに なります',
          'うちで べんきょうします',
        ],
        answerIndex: 0,
        explanation:
          '通知末尾說「雨の 日は 行きません。学校で じゅぎょうを します」，下雨天不去動物園，改在學校上課。「どうぶつえんへ 行きます」錯，那是晴天的計畫，雨天明說「行きません」；「学校は 休みに なります」錯，不是放假，而是照常在學校上課；「うちで べんきょうします」錯，文中要學生到學校，不是留在家裡。',
        explanationEn:
          'The notice ends with 「雨の 日は 行きません。学校で じゅぎょうを します」, so on a rainy day they do not go to the zoo and instead have class at school. Going to the zoo is the fair-weather plan, explicitly denied by 「行きません」; the school is not closed — lessons happen as usual; and students are told to come to school, not to study at home.',
      },
    ],
  },
  {
    id: 'n5-reading-tanbun-012',
    kind: 'passage',
    passage:
      'きのうは 日曜日でした。あさは 雨でしたから、うちで 音楽を 聞きました。ごご、雨が やみましたから、姉と デパートへ 行きました。姉は くつを 買いましたが、わたしは 何も 買いませんでした。',
    explanation: '',
    questions: [
      {
        id: 'n5-reading-tanbun-012-q1',
        stem: 'この 人は、きのうの あさ 何を しましたか。',
        options: [
          'うちで 音楽を 聞きました',
          'デパートへ 行きました',
          'くつを 買いました',
          '姉と さんぽを しました',
        ],
        answerIndex: 0,
        explanation:
          '依據「あさは 雨でしたから、うちで 音楽を 聞きました」，昨天早上因為下雨，這個人在家聽音樂。「デパートへ 行きました」錯，去百貨公司是「ごご」（下午）雨停之後的事；「くつを 買いました」錯，買鞋的是姊姊，而且也是下午的事；「姉と さんぽを しました」文中完全沒有出現。這題要分清 あさ 和 ごご 各做了什麼。',
        explanationEn:
          'The passage says 「あさは 雨でしたから、うちで 音楽を 聞きました」, so yesterday morning this person listened to music at home because of the rain. Going to the department store happened in the afternoon (「ごご」), after the rain stopped; buying shoes was the older sister\'s afternoon purchase; and taking a walk never appears. The key is separating what happened in the morning from the afternoon.',
      },
      {
        id: 'n5-reading-tanbun-012-q2',
        stem: 'くつを 買ったのは だれですか。',
        options: [
          '姉',
          'この 人（わたし）',
          'この 人と 姉の ふたり',
          'だれも 買いませんでした',
        ],
        answerIndex: 0,
        explanation:
          '依據「姉は くつを 買いましたが、わたしは 何も 買いませんでした」，買鞋的人是姊姊。「この 人（わたし）」錯，「わたし」明說「何も 買いませんでした」（什麼都沒買）；「ふたり」錯，只有姊姊一個人買了；「だれも 買いませんでした」錯，姊姊確實買了鞋。這題考「〜が、〜」前後對比：姊姊買了、我沒買。',
        explanationEn:
          'The passage says 「姉は くつを 買いましたが、わたしは 何も 買いませんでした」, so the one who bought shoes is the older sister. 「わたし」 clearly bought nothing at all; "both of them" is wrong because only the sister bought something; and "nobody bought anything" is wrong because the sister really did buy shoes. The contrast pattern 「〜が、〜」 sets the sister against 「わたし」.',
      },
    ],
  },
]
