import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    id: 'n4-reading-chubun-001',
    kind: 'passage',
    passage:
      'わたしは先月から、日曜日の朝、近所の公園で開かれる朝市に行っています。はじめは、母に「野菜を買ってきて」と頼まれて、一度だけ行くつもりでした。でも、店の人と話しながら買い物をするのが楽しくて、今では毎週行くのが楽しみになりました。\n朝市の野菜は、スーパーの野菜より少し高いです。それでもわたしが朝市で買うのは、野菜を作った人から、おいしい食べ方を聞くことができるからです。先週は、トマトを売っているおばあさんが、トマトのスープの作り方を教えてくれました。家に帰って作ってみたら、母が「おいしい」と言って、とても喜んでくれました。\n朝市は朝六時から九時までです。人気がある野菜は、すぐに売れてしまいます。それで、わたしはいつも七時ごろまでに行くようにしています。これから寒くなると、朝早く起きるのは大変そうですが、体にいい野菜をたくさん食べたいので、続けようと思っています。',
    explanation: '',
    questions: [
      {
        id: 'n4-reading-chubun-001-q1',
        stem: '「わたし」は、どうしてスーパーではなく朝市で野菜を買いますか。',
        options: [
          '野菜を作った人においしい食べ方を聞けるから',
          '朝市の野菜はスーパーより安いから',
          '母に毎週頼まれているから',
          '朝早く起きるのが好きだから',
        ],
        answerIndex: 0,
        explanation:
          '文中明說「わたしが朝市で買うのは、野菜を作った人から、おいしい食べ方を聞くことができるからです」，能向種菜的人請教吃法才是理由。「スーパーより安いから」正好相反，文中說朝市的菜「スーパーの野菜より少し高い」；「母に毎週頼まれているから」錯，媽媽只拜託過一次，之後是自己想去；「朝早く起きるのが好き」也不對，文末說早起「大変そう」。',
        explanationEn:
          'The passage states it directly: 「わたしが朝市で買うのは、野菜を作った人から、おいしい食べ方を聞くことができるからです」 — the reason is being able to ask the growers about tasty ways to eat the vegetables. "Because it\'s cheaper than the supermarket" is the opposite: the text says the market vegetables are 「スーパーの野菜より少し高い」; "because her mother asks her every week" is wrong — the mother asked only once, and after that the writer went because she wanted to; and "because she likes getting up early" doesn\'t fit either, since the ending says getting up early looks 「大変そう」.',
      },
      {
        id: 'n4-reading-chubun-001-q2',
        stem: '先週、朝市でどんなことがありましたか。',
        options: [
          'おばあさんがスープの作り方を教えてくれた',
          '母がトマトのスープを作ってくれた',
          '「わたし」がおばあさんにトマトをあげた',
          '母といっしょに朝市へ行った',
        ],
        answerIndex: 0,
        explanation:
          '文中說上週「トマトを売っているおばあさんが、トマトのスープの作り方を教えてくれました」，是賣番茄的奶奶教了湯的作法。「母が…作ってくれた」錯，湯是「わたし」回家做的，媽媽只是說好喝；「おばあさんにトマトをあげた」方向相反，番茄是奶奶賣的；「母といっしょに行った」文中完全沒提媽媽去朝市。',
        explanationEn:
          'The passage says that last week 「トマトを売っているおばあさんが、トマトのスープの作り方を教えてくれました」 — the old woman selling tomatoes taught the writer how to make tomato soup. "The mother made the soup" is wrong: the writer made it at home, and the mother only said it was delicious; "the writer gave the old woman tomatoes" reverses the direction — the tomatoes are what the old woman sells; and the mother going along to the market is never mentioned at all.',
      },
      {
        id: 'n4-reading-chubun-001-q3',
        stem: '朝市について、文章の内容と合っているものはどれですか。',
        options: [
          '人気がある野菜は早い時間に売れてしまう',
          '朝九時から始まる',
          '毎日開かれている',
          '寒くなると休みになる',
        ],
        answerIndex: 0,
        explanation:
          '文中說「人気がある野菜は、すぐに売れてしまいます」，所以「わたし」才會七點左右就到，選項一正確。「朝九時から始まる」錯，朝市是「朝六時から九時まで」，九點是結束不是開始；「毎日開かれている」錯，文章開頭說是「日曜日の朝」；「寒くなると休みになる」文中沒說，只說天冷後早起會很辛苦，但「わたし」打算繼續去。',
        explanationEn:
          'The passage says 「人気がある野菜は、すぐに売れてしまいます」 — popular vegetables sell out quickly, which is why the writer tries to arrive by around seven; option 1 matches. "It starts at nine" is wrong: the market runs 「朝六時から九時まで」, so nine is when it ends, not begins; "it is held every day" is wrong — the opening says it takes place on Sunday mornings; and "it closes when it gets cold" is never stated — the text only says getting up early will be hard in the cold, yet the writer plans to keep going.',
      },
    ],
  },
  {
    id: 'n4-reading-chubun-002',
    kind: 'passage',
    passage:
      'わたしは子どものとき、水泳が苦手で、ぜんぜん泳げませんでした。大人になってからも、プールや海にはあまり行きませんでした。\n去年の夏、会社の友だちに「いっしょにプールへ行きませんか」と誘われました。泳げないので断ろうと思いましたが、友だちが「泳ぎ方を教えてあげますよ」と言ってくれたので、行くことにしました。それが、わたしが水泳を始めたきっかけです。\nはじめは、顔を水につけることもこわかったです。でも、友だちがゆっくり教えてくれたので、三か月後には二十五メートル泳げるようになりました。泳げるようになると、水泳がどんどん楽しくなりました。今は、仕事のあとで、週に二回プールに通っています。夜のプールは人が少ないので、静かに泳ぐことができます。\n来年の夏は、家族と海へ行くつもりです。泳いでいるところを子どもに見せたら、きっとびっくりするだろうと思います。',
    explanation: '',
    questions: [
      {
        id: 'n4-reading-chubun-002-q1',
        stem: '「それ」とは、どんなことですか。',
        options: [
          '友だちに誘われて、プールへ行くことにしたこと',
          '子どものとき、ぜんぜん泳げなかったこと',
          '友だちに泳ぎ方を教えてあげたこと',
          '二十五メートル泳げるようになったこと',
        ],
        answerIndex: 0,
        explanation:
          '「それ」指的是前一句的內容：被朋友邀約、決定去游泳池這件事，成了開始游泳的契機（きっかけ）。「泳げなかったこと」是更早的背景，不是契機；「教えてあげたこと」授受方向相反，是朋友教「わたし」（教えてくれた），不是「わたし」教朋友；「二十五メートル泳げるようになった」是開始游泳三個月後的結果，發生在「それ」之後。',
        explanationEn:
          '「それ」 refers to the content of the previous sentence: being invited by a friend and deciding to go to the pool, which became the trigger (きっかけ) for taking up swimming. Not being able to swim as a child is earlier background, not the trigger; "teaching the friend how to swim" reverses the giving-receiving direction — the friend taught the writer (教えてくれた), not the other way around; and being able to swim twenty-five meters is the result three months after starting, which happened after 「それ」.',
      },
      {
        id: 'n4-reading-chubun-002-q2',
        stem: 'この人は、どうして断らないでプールへ行くことにしましたか。',
        options: [
          '友だちが泳ぎ方を教えてくれると言ったから',
          '二十五メートル泳げるようになったから',
          '夜のプールは人が少ないから',
          '子どもに泳いでいるところを見せたかったから',
        ],
        answerIndex: 0,
        explanation:
          '文中說「友だちが『泳ぎ方を教えてあげますよ』と言ってくれたので、行くことにしました」，因為朋友說會教，才沒有拒絕。「二十五メートル泳げるように…」是去了之後三個月的成果，時間順序不對；「夜のプールは人が少ない」是現在持續去游泳的好處，不是當初答應的理由；「子どもに見せたかった」是明年夏天的打算，也是之後的事。',
        explanationEn:
          'The passage says 「友だちが『泳ぎ方を教えてあげますよ』と言ってくれたので、行くことにしました」 — the writer didn\'t refuse because the friend offered to teach him how to swim. Being able to swim twenty-five meters is a result from three months after he started, so the timing is wrong; the night pool being uncrowded is a benefit of his current routine, not the reason he originally agreed; and wanting to show his children is a plan for next summer, which also comes later.',
      },
      {
        id: 'n4-reading-chubun-002-q3',
        stem: '今のこの人について、文章の内容と合っているものはどれですか。',
        options: [
          '仕事のあとで、週に二回プールに通っている',
          '会社の友だちに泳ぎ方を教えている',
          '今も顔を水につけるのがこわい',
          '週末に家族と海へ行っている',
        ],
        answerIndex: 0,
        explanation:
          '文中明說「今は、仕事のあとで、週に二回プールに通っています」，選項一正確。「友だちに泳ぎ方を教えている」方向相反，教人的是朋友；「今も顔を水につけるのがこわい」錯，怕把臉泡進水裡是「はじめは」的事，現在已經能游二十五公尺；「家族と海へ行っている」錯，和家人去海邊是「来年の夏」的計畫，還沒發生。',
        explanationEn:
          'The passage states it directly: 「今は、仕事のあとで、週に二回プールに通っています」 — he now goes to the pool twice a week after work, so option 1 is correct. "He teaches his friend how to swim" reverses the roles — the friend was the teacher; "he is still afraid to put his face in the water" is wrong, since that fear belongs to 「はじめは」 and he can now swim twenty-five meters; and "he goes to the sea with his family on weekends" is wrong — the beach trip is a plan for 「来年の夏」 and hasn\'t happened yet.',
      },
    ],
  },
  {
    id: 'n4-reading-chubun-003',
    kind: 'passage',
    passage:
      '先月、わたしは仕事のために、知らない町へ引っ越しました。はじめは友だちもいなくて、休みの日は一人で部屋にいることが多かったです。\nある日、アパートの前をそうじしていると、となりの部屋のおばあさんが「いつもきれいにしてくれて、ありがとう」と話しかけてくれました。おばあさんは庭で野菜を作っていて、「たくさんできたから」と言って、なすやトマトをくれました。わたしはお礼に、国の母が送ってくれたお菓子を持って行きました。それから、おばあさんとよく話すようになりました。\nおばあさんの話はおもしろくて、この町のこともたくさん教えてくれます。安くておいしい魚の店や、夏に花火がよく見える公園も、おばあさんに教えてもらいました。\n引っ越す前は、知らない町での生活はさびしくなりそうだと思っていました。でも今は、この町に引っ越してきて、本当によかったと思っています。',
    explanation: '',
    questions: [
      {
        id: 'n4-reading-chubun-003-q1',
        stem: 'この人がおばあさんと話すようになったのは、どうしてですか。',
        options: [
          'アパートの前をそうじしていたとき、おばあさんが話しかけてくれたから',
          'この人がおばあさんに野菜をあげたから',
          'おばあさんと同じ会社で働いているから',
          'いっしょに公園へ花火を見に行ったから',
        ],
        answerIndex: 0,
        explanation:
          '文中說某天在公寓前打掃時，隔壁的奶奶主動搭話道謝，之後又送了茄子和番茄，兩人才開始常聊天。「野菜をあげたから」方向相反，蔬菜是奶奶給「わたし」的，「わたし」回禮的是點心；「同じ会社」錯，「仕事のために」只是搬家的原因，和奶奶無關；「花火を見に行った」錯，文中只說奶奶告訴他看得到煙火的公園，沒說一起去看。',
        explanationEn:
          'The passage says that one day, while the writer was cleaning in front of the apartment, the old woman next door spoke to him to say thank you, and later gave him eggplants and tomatoes — that is how they started talking regularly. "Because the writer gave her vegetables" reverses the direction: the vegetables came from the old woman, and the writer\'s return gift was sweets; "working at the same company" is wrong — 「仕事のために」 is only the reason for moving and has nothing to do with her; and "going to see fireworks together" is wrong — she only told him about a park where fireworks can be seen.',
      },
      {
        id: 'n4-reading-chubun-003-q2',
        stem: 'この人は、今、どう思っていますか。',
        options: [
          'この町に引っ越してきてよかった',
          '知らない町での生活はさびしい',
          '国へ帰って母と住みたい',
          '休みの日は一人で部屋にいるほうがいい',
        ],
        answerIndex: 0,
        explanation:
          '文末說「でも今は、この町に引っ越してきて、本当によかったと思っています」，選項一正確。「さびしい」是搬家前的擔心（さびしくなりそうだと思っていました），被「でも今は」推翻；「国へ帰りたい」文中沒提，媽媽只是寄點心來；「一人で部屋にいるほうがいい」錯，一個人待在房間是剛搬來、還沒有朋友時的狀況，不是現在的想法。',
        explanationEn:
          'The ending says 「でも今は、この町に引っ越してきて、本当によかったと思っています」, so option 1 is correct. Feeling lonely was a worry from before the move (さびしくなりそうだと思っていました), overturned by 「でも今は」; wanting to return to his home country and live with his mother is never mentioned — she only sent sweets; and "preferring to stay alone in his room on days off" is wrong, as that was the situation right after moving in, before he had friends, not how he feels now.',
      },
    ],
  },
  {
    id: 'n4-reading-chubun-004',
    kind: 'passage',
    passage:
      '先月、わたしの日本語学校で文化祭がありました。わたしのクラスには五つの国から来た学生がいるので、話し合って、いろいろな国のりょうりを売る店を出すことにしました。\n準備はたいへんでした。学校の近くの店を回って、安いざいりょうをさがしたり、前の日の夜おそくまで、教室のかざりを作ったりしました。りょうりの作り方をわすれてしまって、国の母に電話で何度も聞いた学生もいました。\n文化祭の日は、たくさんの人が来てくれました。りょうりは二時間で全部売れてしまいました。「おいしかったから、作り方を教えて」と言ってくれた近所のおばあさんもいました。ただ、店がいそがしくて、ほかのクラスの店を見に行けなかったのは、ざんねんでした。\n準備はたいへんでしたが、クラスのみんなと前より仲よくなることができたので、店を出して本当によかったと思います。来年は、もっとたくさん作るつもりです。',
    explanation: '',
    questions: [
      {
        id: 'n4-reading-chubun-004-q1',
        stem: 'このクラスは、どうしていろいろな国のりょうりの店を出すことにしましたか。',
        options: [
          'クラスに五つの国から来た学生がいるから',
          '近所のおばあさんにたのまれたから',
          '学校の近くに安い店があるから',
          'ほかのクラスの店を見たかったから',
        ],
        answerIndex: 0,
        explanation:
          '文中說「わたしのクラスには五つの国から来た学生がいるので…いろいろな国のりょうりを売る店を出すことにしました」，因為班上有來自五個國家的學生才決定開這種店。「おばあさんにたのまれた」錯，鄰居奶奶是文化祭當天來稱讚料理的客人；「近くに安い店がある」只是準備時找便宜食材去的地方，不是開店的理由；「ほかのクラスの店を見たかった」錯，那是當天太忙而沒做到的事。',
        explanationEn:
          'The passage says 「わたしのクラスには五つの国から来た学生がいるので…いろいろな国のりょうりを売る店を出すことにしました」 — the class chose this shop because its students come from five countries. "Asked by the old woman" is wrong: she was a visitor who praised the food on the day itself; nearby cheap shops are merely where they hunted for ingredients, not the reason for the shop; and wanting to see other classes\' stalls is what they failed to do because they were too busy.',
      },
      {
        id: 'n4-reading-chubun-004-q2',
        stem: '文化祭の日、どんなことがありましたか。',
        options: [
          'りょうりが二時間で全部売れてしまった',
          'りょうりがあまり売れなかった',
          'ほかのクラスの店を見に行った',
          '夜おそくまで教室のかざりを作った',
        ],
        answerIndex: 0,
        explanation:
          '文中說「りょうりは二時間で全部売れてしまいました」，當天料理兩小時就全部賣完，選項一正確。「あまり売れなかった」正好相反；「ほかのクラスの店を見に行った」錯，文中說因為店太忙「見に行けなかった」；「かざりを作った」錯，做裝飾是「前の日の夜」的準備工作，不是文化祭當天的事。',
        explanationEn:
          'The passage says 「りょうりは二時間で全部売れてしまいました」 — the food sold out in two hours that day, so option 1 is correct. "It didn\'t sell well" is the opposite; "went to see other classes\' stalls" is wrong because the text says they 「見に行けなかった」 due to being busy; and making decorations is wrong — that happened 「前の日の夜」 as preparation, not on the festival day.',
      },
      {
        id: 'n4-reading-chubun-004-q3',
        stem: 'この人は、文化祭についてどう思っていますか。',
        options: [
          'たいへんだったが、店を出してよかった',
          '準備がたいへんだったので、来年は出したくない',
          'ざんねんなことばかりだった',
          '準備はかんたんだった',
        ],
        answerIndex: 0,
        explanation:
          '文末說「準備はたいへんでしたが…店を出して本当によかったと思います」，雖然辛苦但很值得，選項一正確。「来年は出したくない」正好相反，最後一句說「来年は、もっとたくさん作るつもりです」；「ざんねんなことばかり」錯，遺憾只有沒能去看別班的店這一件；「準備はかんたん」與文中「準備はたいへんでした」矛盾。',
        explanationEn:
          'The ending says 「準備はたいへんでしたが…店を出して本当によかったと思います」 — it was hard work but truly worth it, so option 1 is correct. "Doesn\'t want to do it next year" is the opposite of the final line 「来年は、もっとたくさん作るつもりです」; "nothing but regrets" is wrong — the only regret was not seeing the other stalls; and "preparation was easy" contradicts 「準備はたいへんでした」.',
      },
    ],
  },
  {
    id: 'n4-reading-chubun-005',
    kind: 'passage',
    passage:
      '去年の秋、テレビで山の番組を見ました。わたしの町から電車で一時間の所にある山で、山の木が赤や黄色になっていて、とてもきれいでした。それで、次の日曜日に、一人で登ってみることにしました。\nはじめての山登りは、たいへんでした。ふつうのくつで行ったので、足がいたくなりました。とちゅうで道をまちがえて、こまっていると、山をよく知っているおじさんが、正しい道を教えてくれました。おじさんは「山では、地図をよく見て、山のくつをはいたほうがいいですよ」と言いました。\n山の上に着いたのは昼すぎでしたが、上から見た秋の山は、テレビで見るよりずっときれいで、つかれをわすれてしまいました。\n今は、月に一度、山に登っています。おじさんに言われたとおり、山のくつを買って、地図もかならず持って行きます。今度は、会社の友だちもさそって、いっしょに登るつもりです。',
    explanation: '',
    questions: [
      {
        id: 'n4-reading-chubun-005-q1',
        stem: 'この人は、どうして山に登ってみることにしましたか。',
        options: [
          'テレビで見た秋の山がきれいだったから',
          '山のおじさんにさそわれたから',
          '会社の友だちと約束したから',
          '山のくつを買ったから',
        ],
        answerIndex: 0,
        explanation:
          '文中說在電視上看到「山の木が赤や黄色になっていて、とてもきれいでした。それで…登ってみることにしました」，「それで」點明了因果。「おじさんにさそわれた」錯，大叔是爬山途中才遇到、幫忙指路的人；「友だちと約束した」錯，約朋友一起爬是「今度」的打算；「山のくつを買った」順序相反，買登山鞋是第一次爬完之後聽了建議才做的事。',
        explanationEn:
          'The passage says the mountain on TV was beautiful — 「山の木が赤や黄色になっていて、とてもきれいでした。それで…登ってみることにしました」 — with 「それで」 marking the cause. "Invited by the man" is wrong: the man was someone met on the trail who showed the way; "promised friends" is wrong — inviting coworkers is a plan for 「今度」; and buying mountain shoes reverses the order, since that happened after the first climb, following the man\'s advice.',
      },
      {
        id: 'n4-reading-chubun-005-q2',
        stem: 'はじめての山登りのとき、どんなことがありましたか。',
        options: [
          '道をまちがえたが、おじさんが正しい道を教えてくれた',
          '地図を見て、正しい道を見つけた',
          '山のくつをはいて登った',
          '会社の友だちといっしょに登った',
        ],
        answerIndex: 0,
        explanation:
          '文中說「とちゅうで道をまちがえて、こまっていると…おじさんが、正しい道を教えてくれました」，選項一正確。「地図を見て見つけた」錯，當時他沒帶地圖，帶地圖是之後才養成的習慣；「山のくつをはいて」錯，第一次穿的是「ふつうのくつ」，所以腳才會痛；「友だちといっしょに」錯，第一次是「一人で」去的。',
        explanationEn:
          'The passage says 「とちゅうで道をまちがえて、こまっていると…おじさんが、正しい道を教えてくれました」 — he got lost and the man showed him the right path, so option 1 is correct. "Found the way with a map" is wrong: he had no map then, and always carrying one is a later habit; "wore mountain shoes" is wrong — he wore 「ふつうのくつ」, which is why his feet hurt; and "climbed with coworkers" is wrong because the first climb was 「一人で」.',
      },
      {
        id: 'n4-reading-chubun-005-q3',
        stem: '今のこの人について、文章の内容と合っているものはどれですか。',
        options: [
          '地図をかならず持って、月に一度、山に登っている',
          'ふつうのくつで山に登っている',
          'テレビで山の番組を見るだけだ',
          '一年に一度だけ山に登っている',
        ],
        answerIndex: 0,
        explanation:
          '文中說「今は、月に一度、山に登っています…地図もかならず持って行きます」，選項一正確。「ふつうのくつで」錯，現在已照大叔的建議買了登山鞋；「テレビで見るだけ」錯，電視節目只是最初的契機，現在是實際去爬山；「一年に一度」錯，頻率是「月に一度」，每月一次。',
        explanationEn:
          'The passage says 「今は、月に一度、山に登っています…地図もかならず持って行きます」 — he climbs once a month and always carries a map, so option 1 is correct. "In ordinary shoes" is wrong: he has since bought mountain shoes as the man advised; "only watches TV programs" is wrong — the TV show was merely the initial trigger and he now actually climbs; and "once a year" is wrong because the stated frequency is 「月に一度」, once a month.',
      },
    ],
  },
  {
    id: 'n4-reading-chubun-006',
    kind: 'passage',
    passage:
      '今年の四月から、わたしは一人でくらしています。りょうりをしたことがなかったので、ばんごはんは毎日、コンビニで買っていました。\n先月、電話でそのことを話すと、母は「体にわるいから、少しは自分で作りなさい」と言って、かんたんなりょうりの作り方を教えてくれました。次の日、教えてもらったスープを作ってみたら、小さいときから知っている母の味がして、なつかしくなりました。\nそれから、わたしは週末に一週間分のりょうりを作って、冷蔵庫に入れておきます。仕事の日は、それをあたためるだけなので、夜おそく帰っても大丈夫です。コンビニで買うより、お金もかかりません。野菜をたくさん使うので、前より体の調子もいいです。\n今も週に一度、母に電話をかけて、新しいりょうりの作り方を聞いています。前は母に電話するのがめんどうだと思っていましたが、今は母と話すのが楽しみになりました。',
    explanation: '',
    questions: [
      {
        id: 'n4-reading-chubun-006-q1',
        stem: 'この人は、どうしてりょうりを作るようになりましたか。',
        options: [
          '母が電話でりょうりの作り方を教えてくれたから',
          'コンビニのばんごはんがおいしくないから',
          '新しい冷蔵庫を買ったから',
          '会社の近くにコンビニがないから',
        ],
        answerIndex: 0,
        explanation:
          '文中說媽媽講了「少しは自分で作りなさい」，並且「かんたんなりょうりの作り方を教えてくれました」，之後他才開始自己做菜。「おいしくないから」錯，文中沒說便利商店的東西難吃，媽媽說的是「体にわるい」；「冷蔵庫を買った」錯，冰箱只是保存做好料理的地方；「コンビニがない」錯，他之前每天都在便利商店買晚餐。',
        explanationEn:
          'The passage says the mother told him 「少しは自分で作りなさい」 and 「かんたんなりょうりの作り方を教えてくれました」 — he began cooking because she taught him over the phone. "Because convenience-store food tastes bad" is wrong: the text never says that, and what the mother said was 「体にわるい」; "bought a new refrigerator" is wrong — the fridge is just where he stores the food he cooks; and "no convenience store nearby" is wrong because he used to buy dinner there every day.',
      },
      {
        id: 'n4-reading-chubun-006-q2',
        stem: '今のこの人について、文章の内容と合っているものはどれですか。',
        options: [
          '週末にりょうりを作って、冷蔵庫に入れておく',
          '毎日、コンビニでばんごはんを買っている',
          '母に電話するのがめんどうだと思っている',
          '週末に母がりょうりを作りに来てくれる',
        ],
        answerIndex: 0,
        explanation:
          '文中說「わたしは週末に一週間分のりょうりを作って、冷蔵庫に入れておきます」，選項一正確。「毎日コンビニで買っている」是開始做菜之前的事；「めんどうだと思っている」錯，覺得麻煩是「前は」的想法，現在和媽媽通話變成一種樂趣；「母が作りに来てくれる」錯，媽媽只是用電話教作法，沒有來家裡。',
        explanationEn:
          'The passage says 「わたしは週末に一週間分のりょうりを作って、冷蔵庫に入れておきます」 — he cooks a week\'s worth of food on weekends and stores it in the fridge, so option 1 is correct. Buying dinner at the convenience store every day belongs to the time before he started cooking; finding the phone calls a bother is marked by 「前は」 and has changed into something he looks forward to; and the mother coming over to cook is wrong — she only teaches recipes by phone.',
      },
    ],
  },
]
