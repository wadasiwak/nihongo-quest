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
]
