import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    id: 'n3-listening-pointo-001',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '会社で女の人と男の人が話しています。' },
      { speaker: '女', text: '田中さん、会社を辞めるって聞いたんですけど、本当ですか。' },
      { speaker: '男', text: 'ええ、来月末で辞めることにしました。' },
      { speaker: '女', text: 'どうしてですか。通勤が大変だからですか。片道二時間でしたよね。' },
      { speaker: '男', text: '確かに遠いですけど、それはもう慣れましたよ。実は、父が体をこわして、実家の店を手伝うことになったんです。' },
      { speaker: '女', text: 'そうだったんですか。給料のことかと思っていました。' },
      { speaker: '男', text: 'いえいえ、給料には満足していましたよ。家族のことだから、しかたないんです。' },
    ],
    question: '男の人はどうして会社を辞めるのですか。',
    options: [
      '実家の店を手伝うことになったから',
      '通勤に時間がかかるから',
      '給料に不満があるから',
      '体をこわしてしまったから',
    ],
    answerIndex: 0,
    explanation:
      '男の人明說「父が体をこわして、実家の店を手伝うことになった」，這才是辭職主因。通勤雖然單程兩小時，但他說「もう慣れました」（已經習慣了），是提到但被排除的次要理由；薪水他表示「満足していました」；身體不好的是他父親，不是他本人。',
    explanationEn:
      'The man states clearly 「父が体をこわして、実家の店を手伝うことになった」 — his father fell ill, so he will help with the family shop, and that is why he is quitting. The two-hour commute is mentioned but dismissed with 「もう慣れました」 (he is used to it); he says he was satisfied with his salary (「満足していました」); and the person in poor health is his father, not the man himself.',
  },
  {
    id: 'n3-listening-pointo-002',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '大学で男の学生と女の学生が話しています。' },
      { speaker: '男', text: '山田さん、引っ越したんだって？前のアパート、駅から近くて便利だったのに。' },
      { speaker: '女', text: 'うん、便利だったんだけどね。家賃もちょっと高かったし。' },
      { speaker: '男', text: 'ああ、それで安いところに移ったんだ。' },
      { speaker: '女', text: '家賃は我慢できたんだけど、隣でビルの工事が始まって、朝から音がうるさくて全然眠れなくなったの。' },
      { speaker: '男', text: 'それはつらいね。夜勤のバイトをしてるんだったよね。' },
      { speaker: '女', text: 'そう。昼間に寝られないのは本当に困るから、決めたの。' },
    ],
    question: '女の学生はどうして引っ越しましたか。',
    options: [
      '工事の音がうるさくて眠れなかったから',
      '家賃が高かったから',
      '駅から遠くて不便だったから',
      '夜のアルバイトをやめたから',
    ],
    answerIndex: 0,
    explanation:
      '主因是「隣でビルの工事が始まって……全然眠れなくなった」，她因為上夜班需要白天睡覺，噪音讓她受不了。房租雖然被提到「ちょっと高かった」，但她接著說「家賃は我慢できた」，是典型「提到但非主因」的干擾項；前公寓其實離車站很近；打工並沒有辭掉。',
    explanationEn:
      'The real reason is 「隣でビルの工事が始まって……全然眠れなくなった」: construction noise next door kept her from sleeping, and since she works night shifts she must sleep during the day. The rent was mentioned as 「ちょっと高かった」, but she immediately adds 「家賃は我慢できた」, making it a classic mentioned-but-not-decisive distractor; the old apartment was actually close to the station; and she has not quit her night job.',
  },
  {
    id: 'n3-listening-pointo-003',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '会社で女の人と男の人が話しています。' },
      { speaker: '女', text: '佐藤さん、今朝は遅刻するなんて珍しいですね。寝坊ですか。' },
      { speaker: '男', text: 'いやあ、実は少し寝坊もしたんですけど、いつものバスには間に合ったんですよ。' },
      { speaker: '女', text: 'じゃあ、どうして遅れたんですか。' },
      { speaker: '男', text: '途中で事故があったみたいで、道がひどく込んでいて、バスが三十分も動かなかったんです。' },
      { speaker: '女', text: 'ええっ、それは大変でしたね。電車のほうが早かったかもしれませんね。' },
      { speaker: '男', text: 'ええ。明日から雨の日は電車にしようと思います。' },
    ],
    question: '男の人はどうして遅刻しましたか。',
    options: [
      '事故で道が込んでいたから',
      '朝寝坊をしたから',
      '電車が遅れたから',
      'バスに乗り遅れたから',
    ],
    answerIndex: 0,
    explanation:
      '主因是「事故があったみたいで、道がひどく込んでいて、バスが三十分も動かなかった」。「寝坊」雖有提到，但他說「いつものバスには間に合った」，可見睡過頭並沒有造成遲到，是次要干擾項；他搭的是公車不是電車，也沒有錯過公車。',
    explanationEn:
      'The real cause is 「事故があったみたいで、道がひどく込んでいて、バスが三十分も動かなかった」 — an accident jammed the road and his bus sat still for thirty minutes. Oversleeping is mentioned, but he says 「いつものバスには間に合った」, so it did not cause the lateness and works only as a distractor; he rides the bus, not the train, and he never missed the bus either.',
  },
  {
    id: 'n3-listening-pointo-004',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '電話で女の人と男の人が話しています。' },
      { speaker: '女', text: 'もしもし、今度の食事会のお店、駅前の「はなや」にしたんだけど、どうかな。' },
      { speaker: '男', text: 'ああ、あそこ、料理がおいしいって有名だよね。それで選んだの？' },
      { speaker: '女', text: '味もいいんだけど、それより、今回は小さい子どもを連れてくる人がいるでしょう。あの店は個室があるから、子どもが泣いても周りを気にしなくていいの。' },
      { speaker: '男', text: 'なるほど、それは助かるね。値段は高くないの？' },
      { speaker: '女', text: 'コースなら一人三千円だから、普通だと思うよ。' },
      { speaker: '男', text: 'じゃあ、そこで決まりだね。' },
    ],
    question: '女の人がこの店を選んだ一番の理由は何ですか。',
    options: [
      '個室があって子ども連れでも安心だから',
      '料理がおいしいと有名だから',
      '値段が安いから',
      '駅から近くて便利だから',
    ],
    answerIndex: 0,
    explanation:
      '女の人說「味もいいんだけど、それより……個室があるから、子どもが泣いても周りを気にしなくていい」，用「それより」把「料理おいしい」降為次要、點出包廂才是最大理由。「料理がおいしい」是提到但非主因的干擾項；價格她只說「普通だと思う」並非便宜；車站近只是店的位置描述，沒被當成選店理由。',
    explanationEn:
      'The woman says 「味もいいんだけど、それより……個室があるから、子どもが泣いても周りを気にしなくていい」, using 「それより」 to demote the food and highlight the private room as the main reason — with small children coming, no one has to worry if a child cries. The famous cooking is mentioned but not decisive; the price is only called 「普通だと思う」, not cheap; and being near the station is just part of the shop\'s description, never given as a reason.',
  },
  {
    id: 'n3-listening-pointo-005',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '会社で男の人と女の人が夏休みの旅行について話しています。' },
      { speaker: '男', text: '夏休みの旅行、北海道に行くことにしたよ。' },
      { speaker: '女', text: 'いいですね。やっぱり涼しいからですか。今年の夏は特に暑いですもんね。' },
      { speaker: '男', text: '涼しいのも魅力だけどね。実は、学生時代の親友が去年札幌に転勤して、ずっと会いに来いって言われてたんだ。' },
      { speaker: '女', text: 'へえ、久しぶりに会えるんですね。' },
      { speaker: '男', text: 'うん、五年ぶりだよ。それが一番の目的かな。海の幸もおいしいし、楽しみだよ。' },
      { speaker: '女', text: 'うらやましいです。お土産、待ってますね。' },
    ],
    question: '男の人が北海道に行くことにした一番の理由は何ですか。',
    options: [
      '札幌にいる親友に会うため',
      '夏でも涼しいから',
      '海の幸がおいしいから',
      '会社の転勤が決まったから',
    ],
    answerIndex: 0,
    explanation:
      '男の人說「学生時代の親友が去年札幌に転勤して……それが一番の目的かな」，明確指出見老友是首要目的。「涼しい」他只說「涼しいのも魅力だけどね」，承認有吸引力但非主因，是次要干擾項；「海の幸もおいしい」同樣只是附帶樂趣；轉調到札幌的是朋友，不是男の人自己。',
    explanationEn:
      'The man says his best friend from college transferred to Sapporo last year and has kept inviting him, and he explicitly marks it: 「それが一番の目的かな」 — seeing his friend after five years is the main purpose. The cool climate is acknowledged only as 「涼しいのも魅力だけどね」, an attraction but not the reason; the seafood is likewise just a bonus pleasure; and the person transferred to Sapporo is his friend, not the man himself.',
  },
  {
    id: 'n3-listening-pointo-006',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '会社で男の人と女の人が話しています。' },
      { speaker: '男', text: '鈴木さん、最近疲れているみたいだけど、大丈夫？仕事、忙しいの？' },
      { speaker: '女', text: '忙しいのは忙しいんですけど、それはいつものことですから。' },
      { speaker: '男', text: 'じゃあ、どうしたの？' },
      { speaker: '女', text: '先週引っ越したばかりで、荷物の片付けが全然終わらないんです。毎晩遅くまでやっているうちに、寝るのが二時ごろになってしまって。' },
      { speaker: '男', text: 'それは大変だね。週末にまとめてやったほうがいいんじゃない？' },
      { speaker: '女', text: 'そうですね。今週は早く寝るようにします。' },
    ],
    question: '女の人はどうして疲れているのですか。',
    options: [
      '引っ越しの片付けで寝るのが遅いから',
      '仕事がいつもより忙しいから',
      '週末に休めなかったから',
      '夜遅くまで残業しているから',
    ],
    answerIndex: 0,
    explanation:
      '主因是「荷物の片付けが全然終わらない……寝るのが二時ごろになってしまって」，搬家整理拖到深夜才睡。「仕事が忙しい」雖被提到，但她說「それはいつものことですから」（一直都這樣），暗示不是這次疲勞的原因，是次要干擾項；熬夜是在整理行李，不是加班；週末只是對方的建議，還沒發生。',
    explanationEn:
      'The cause is 「荷物の片付けが全然終わらない……寝るのが二時ごろになってしまって」: unpacking after her recent move drags on late every night, so she goes to bed around two. Work being busy is mentioned, but she brushes it off with 「それはいつものことですから」 — it is always like that — so it is not the reason this time; the late nights are spent unpacking, not doing overtime; and the weekend is merely the man\'s suggestion, something that has not happened yet.',
  },
  {
    id: 'n3-listening-pointo-007',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '市民センターで女の人と男の人が話しています。' },
      { speaker: '女', text: 'ねえ、聞いた？日曜日のマラソン大会、中止になったんだって。' },
      { speaker: '男', text: 'えっ、本当に？申し込んだ人が少なかったのかな。今年は去年より少ないって聞いたけど。' },
      { speaker: '女', text: '確かに参加者は減ったらしいけど、大会ができないほどじゃなかったみたいよ。' },
      { speaker: '男', text: 'じゃあ、どうして？' },
      { speaker: '女', text: '台風が近づいていて、日曜日は強い風と雨になるらしいの。走る人が危ないから、中止に決めたんだって。' },
      { speaker: '男', text: 'そうか。安全のためならしかたないね。' },
    ],
    question: 'マラソン大会はどうして中止になりましたか。',
    options: [
      '台風で天気が悪くなりそうだから',
      '申し込んだ人が少なかったから',
      '道路の工事が終わらないから',
      '会場が使えなくなったから',
    ],
    answerIndex: 0,
    explanation:
      '中止主因是「台風が近づいていて……走る人が危ないから」，因颱風帶來強風雨、顧慮跑者安全而停辦。「申し込んだ人が少なかった」是男の人的猜測，女の人隨即說「大会ができないほどじゃなかった」加以否定，屬於提到但被排除的次要理由；道路施工與場地問題在對話中完全沒出現。',
    explanationEn:
      'The cancellation is due to 「台風が近づいていて……走る人が危ないから」: an approaching typhoon will bring strong wind and rain on Sunday, making it dangerous for the runners. Low signups were only the man\'s guess, and the woman immediately counters with 「大会ができないほどじゃなかった」, so that reason is raised and then rejected; road construction and venue problems never come up in the conversation at all.',
  },
  {
    id: 'n3-listening-pointo-008',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '喫茶店で男の人と女の人が話しています。' },
      { speaker: '男', text: 'あれ、井上さん、駅前のスポーツジム、やめたの？よく行ってたのに。' },
      { speaker: '女', text: 'うん、先月やめちゃった。' },
      { speaker: '男', text: 'どうして？会費が高かったから？あそこ、月一万円もするんでしょう。' },
      { speaker: '女', text: '高いことは高いけど、払えないほどじゃなかったよ。それより、四月から仕事が夜のシフトに変わって、ジムが開いている時間に行けなくなっちゃったの。' },
      { speaker: '男', text: 'ああ、あそこは夜九時までだもんね。' },
      { speaker: '女', text: 'そうなの。だから今は朝、家の近くの公園を走ってるよ。' },
    ],
    question: '女の人はどうしてスポーツジムをやめたのですか。',
    options: [
      '仕事の時間が変わって行けなくなったから',
      '会費が高かったから',
      '家から遠かったから',
      '朝、公園を走りたかったから',
    ],
    answerIndex: 0,
    explanation:
      '主因是「仕事が夜のシフトに変わって、ジムが開いている時間に行けなくなった」，工作改成夜班後趕不上健身房營業時間。會費「高いことは高いけど、払えないほどじゃなかった」——有提到但被她自己排除，是次要干擾項；「それより」一詞正是重點轉換的信號。晨跑是退掉之後的替代方案，不是退會原因；距離問題沒被提到。',
    explanationEn:
      'The reason is 「仕事が夜のシフトに変わって、ジムが開いている時間に行けなくなった」: her job switched to night shifts in April, so she can no longer make it during the gym\'s opening hours. The fee is raised but she dismisses it herself — 「高いことは高いけど、払えないほどじゃなかった」 — and her 「それより」 signals the shift to the real point. Running in the park in the morning is her replacement routine after quitting, not the cause, and distance from home is never mentioned.',
  },
  {
    id: 'n3-listening-pointo-009',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '会社で女の人と男の人が話しています。' },
      { speaker: '女', text: 'あ、木村さん、携帯、新しくしたんですね。カメラがいいって話題の機種でしょう。' },
      { speaker: '男', text: 'そうそう。カメラもきれいだけど、それが理由で買い替えたわけじゃないんだ。' },
      { speaker: '女', text: 'じゃあ、画面が割れたとか？前の、少しひびが入ってましたよね。' },
      { speaker: '男', text: 'ひびはずっと前からで、あまり気にしてなかったよ。それより、電池が古くなって、昼までに切れちゃうんだ。仕事の電話が受けられなくて、本当に困ってね。' },
      { speaker: '女', text: 'それは仕事になりませんね。' },
      { speaker: '男', text: 'うん、だから思い切って替えたんだ。' },
    ],
    question: '男の人はどうして携帯電話を買い替えましたか。',
    options: [
      '電池がすぐ切れて仕事に困るから',
      'カメラの性能がいい機種が出たから',
      '画面にひびが入ったから',
      '会社に買うように言われたから',
    ],
    answerIndex: 0,
    explanation:
      '主因是「電池が古くなって、昼までに切れちゃう……仕事の電話が受けられなくて困って」。相機性能他自己說「それが理由で買い替えたわけじゃない」，直接否定，是提到但非主因的干擾項；螢幕裂痕「ずっと前からで、あまり気にしてなかった」同樣被排除；公司要求則完全沒出現在對話中。',
    explanationEn:
      'The reason is 「電池が古くなって、昼までに切れちゃう……仕事の電話が受けられなくて困って」: the old battery dies by noon and he misses work calls, which is a real problem. The camera is explicitly denied as the reason with 「それが理由で買い替えたわけじゃない」; the cracked screen is dismissed too, since 「ずっと前からで、あまり気にしてなかった」; and a company order never appears in the conversation.',
  },
  {
    id: 'n3-listening-pointo-010',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '会社の帰りに女の人と男の人が話しています。' },
      { speaker: '女', text: 'あれ、松本さん、今日は車じゃないんですね。いつも車で通勤してるのに。' },
      { speaker: '男', text: 'うん、今日は電車で来たんだ。' },
      { speaker: '女', text: 'この辺、駐車場が高いからですか。' },
      { speaker: '男', text: '駐車場代は会社が出してくれるから、それは問題ないんだよ。実は今夜、部長の送別会があって、お酒を飲む予定だからね。飲んだら運転できないでしょう。' },
      { speaker: '女', text: 'ああ、なるほど。そういうことですか。' },
      { speaker: '男', text: 'うん。終電までには帰るつもりだよ。' },
    ],
    question: '男の人はどうして今日は車で来なかったのですか。',
    options: [
      '夜にお酒を飲む予定があるから',
      '駐車場代が高いから',
      '車が故障しているから',
      '終電で帰りたいから',
    ],
    answerIndex: 0,
    explanation:
      '主因是「今夜、部長の送別会があって、お酒を飲む予定だから」——喝了酒不能開車，所以改搭電車。「駐車場が高い」是女の人的猜測，男の人回「会社が出してくれるから、それは問題ない」加以否定，是提到但被排除的干擾項；車子故障沒被提到；「終電までには帰る」只是今晚的打算，不是不開車的原因。',
    explanationEn:
      'The reason is 「今夜、部長の送別会があって、お酒を飲む予定だから」 — he plans to drink at the manager\'s farewell party tonight, and one cannot drive after drinking, so he took the train. Expensive parking is the woman\'s guess, rejected with 「会社が出してくれるから、それは問題ない」 since the company pays for it; a car breakdown is never mentioned; and 「終電までには帰る」 is just his plan for tonight, not why he left the car at home.',
  },
]
