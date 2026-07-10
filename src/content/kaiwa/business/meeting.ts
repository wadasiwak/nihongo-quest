import type { KaiwaScene } from '../../types'

export const scene: KaiwaScene = {
  id: 'biz-meeting',
  category: 'business',
  title: '商務會議',
  titleJa: '会議で',
  icon: '💼',
  suggestedLevel: 'n3',
  dialogues: [
    {
      id: 'biz-meeting-d1',
      title: '開會開場與議程確認',
      lines: [
        {
          speaker: '部長',
          gender: '男',
          ja: 'それでは、時間になりましたので、会議を始めさせていただきます。',
          reading: 'それでは、じかんに なりましたので、かいぎを はじめさせて いただきます。',
          zh: '那麼，時間到了，請容我開始今天的會議。',
        },
        {
          speaker: '田中',
          gender: '女',
          ja: '本日の議題は、新商品の販売計画についてです。資料はお手元にありますか。',
          reading: 'ほんじつの ぎだいは、しんしょうひんの はんばいけいかくに ついてです。しりょうは おてもとに ありますか。',
          zh: '今天的議題是關於新商品的銷售計畫。資料都在各位手邊嗎？',
        },
        {
          speaker: '佐藤',
          gender: '男',
          ja: 'すみません、私の分が一部足りないようですが。',
          reading: 'すみません、わたしの ぶんが いちぶ たりない ようですが。',
          zh: '不好意思，我的資料好像少了一部分。',
        },
        {
          speaker: '田中',
          gender: '女',
          ja: '失礼いたしました。すぐにお持ちします。',
          reading: 'しつれい いたしました。すぐに おもちします。',
          zh: '非常抱歉，我馬上拿過來。',
        },
        {
          speaker: '部長',
          gender: '男',
          ja: 'では、まず田中さんから進捗を説明してもらえますか。',
          reading: 'では、まず たなかさんから しんちょくを せつめいして もらえますか。',
          zh: '那麼，先請田中小姐說明一下進度好嗎？',
        },
        {
          speaker: '田中',
          gender: '女',
          ja: 'はい。先月の調査結果から順にご報告いたします。',
          reading: 'はい。せんげつの ちょうさけっかから じゅんに ごほうこく いたします。',
          zh: '好的。我從上個月的調查結果開始依序報告。',
        },
        {
          speaker: '部長',
          gender: '男',
          ja: 'お願いします。質問があれば、その都度どうぞ。',
          reading: 'おねがいします。しつもんが あれば、そのつど どうぞ。',
          zh: '麻煩妳了。有問題的話，隨時都可以提出。',
        },
      ],
    },
    {
      id: 'biz-meeting-d2',
      title: '提出意見與委婉反對',
      lines: [
        {
          speaker: '田中',
          gender: '女',
          ja: '私としては、発売日を十月に早めたほうがいいと思います。',
          reading: 'わたしとしては、はつばいびを じゅうがつに はやめた ほうが いいと おもいます。',
          zh: '就我的看法，我認為把發售日提前到十月比較好。',
        },
        {
          speaker: '佐藤',
          gender: '男',
          ja: 'おっしゃるとおり、早いほうが有利ですね。ただ、品質チェックの時間が足りなくなる恐れがあります。',
          reading: 'おっしゃるとおり、はやい ほうが ゆうりですね。ただ、ひんしつチェックの じかんが たりなく なる おそれが あります。',
          zh: '正如您所說，越早越有利。只是，品質檢查的時間恐怕會不夠。',
        },
        {
          speaker: '田中',
          gender: '女',
          ja: 'なるほど。では、どのくらい必要でしょうか。',
          reading: 'なるほど。では、どのくらい ひつようでしょうか。',
          zh: '原來如此。那麼，需要多少時間呢？',
        },
        {
          speaker: '佐藤',
          gender: '男',
          ja: '恐れ入りますが、最低でもあと三週間はいただきたいのですが。',
          reading: 'おそれいりますが、さいていでも あと さんしゅうかんは いただきたいのですが。',
          zh: '不好意思，我希望至少再給我們三個星期。',
        },
        {
          speaker: '部長',
          gender: '男',
          ja: 'うーん、十一月では遅すぎませんか。',
          reading: 'うーん、じゅういちがつでは おそすぎませんか。',
          zh: '嗯……十一月的話會不會太晚了？',
        },
        {
          speaker: '佐藤',
          gender: '男',
          ja: '申し訳ありませんが、品質を考えると、無理なスケジュールは避けたいと思います。',
          reading: 'もうしわけ ありませんが、ひんしつを かんがえると、むりな スケジュールは さけたいと おもいます。',
          zh: '非常抱歉，考量到品質，我想避免太勉強的時程。',
        },
        {
          speaker: '田中',
          gender: '女',
          ja: 'それでは、十月の末ではいかがでしょうか。',
          reading: 'それでは、じゅうがつの すえでは いかがでしょうか。',
          zh: '那麼，十月底如何呢？',
        },
        {
          speaker: '部長',
          gender: '男',
          ja: 'そうですね。その方向で検討しましょう。',
          reading: 'そうですね。その ほうこうで けんとうしましょう。',
          zh: '好，就朝那個方向來研議吧。',
        },
      ],
    },
    {
      id: 'biz-meeting-d3',
      title: '總結與分派工作',
      lines: [
        {
          speaker: '部長',
          gender: '男',
          ja: 'そろそろ時間ですので、本日の内容をまとめます。',
          reading: 'そろそろ じかんですので、ほんじつの ないようを まとめます。',
          zh: '時間差不多了，我來總結一下今天的內容。',
        },
        {
          speaker: '田中',
          gender: '女',
          ja: '発売日は十月末を目標に、来週までに計画を修正します。',
          reading: 'はつばいびは じゅうがつまつを もくひょうに、らいしゅうまでに けいかくを しゅうせいします。',
          zh: '發售日以十月底為目標，我會在下週前修正計畫。',
        },
        {
          speaker: '部長',
          gender: '男',
          ja: '佐藤さんは品質チェックのスケジュールを作ってください。',
          reading: 'さとうさんは ひんしつチェックの スケジュールを つくって ください。',
          zh: '佐藤先生請你排出品質檢查的時程表。',
        },
        {
          speaker: '佐藤',
          gender: '男',
          ja: 'かしこまりました。金曜日までに提出します。',
          reading: 'かしこまりました。きんようびまでに ていしゅつします。',
          zh: '了解了。我會在星期五前提交。',
        },
        {
          speaker: '田中',
          gender: '女',
          ja: '費用の件は、一度持ち帰って検討してもよろしいでしょうか。',
          reading: 'ひようの けんは、いちど もちかえって けんとうしても よろしいでしょうか。',
          zh: '費用的部分，我可以先帶回去研究一下嗎？',
        },
        {
          speaker: '部長',
          gender: '男',
          ja: 'ええ、構いません。次回の会議で報告してください。では、本日はこれで終わります。お疲れさまでした。',
          reading: 'ええ、かまいません。じかいの かいぎで ほうこくして ください。では、ほんじつは これで おわります。おつかれさまでした。',
          zh: '嗯，沒問題。請在下次會議上報告。那麼，今天就到這裡結束。辛苦大家了。',
        },
        {
          speaker: '佐藤',
          gender: '男',
          ja: 'お疲れさまでした。',
          reading: 'おつかれさまでした。',
          zh: '辛苦了。',
        },
      ],
    },
  ],
  phrases: [
    {
      ja: '恐れ入りますが',
      reading: 'おそれいりますが',
      zh: '不好意思、恕我冒昧',
      note: '拜託對方或提出異議前的緩衝語，比「すみませんが」更鄭重。',
    },
    {
      ja: 'おっしゃるとおりです',
      zh: '正如您所說',
      note: '先表示同意再接「ただ…」，是委婉反對的常見起手式。',
    },
    {
      ja: '確認させてください',
      reading: 'かくにんさせて ください',
      zh: '請讓我確認一下',
      note: '對聽到的內容不確定時使用，避免誤解的必備句。',
    },
    {
      ja: '持ち帰って検討します',
      reading: 'もちかえって けんとうします',
      zh: '我帶回去研究一下',
      note: '不當場承諾的標準說法；日商文化中不算敷衍，是慎重。',
    },
    {
      ja: 'それでは、始めましょう',
      reading: 'それでは、はじめましょう',
      zh: '那麼，我們開始吧',
    },
    {
      ja: 'ご意見をお聞かせください',
      reading: 'ごいけんを おきかせください',
      zh: '請讓我們聽聽您的意見',
    },
    {
      ja: 'その点については賛成です',
      reading: 'そのてんに ついては さんせいです',
      zh: '關於那一點我贊成',
    },
    {
      ja: 'お言葉ですが',
      reading: 'おことばですが',
      zh: '恕我直言',
      note: '正面反駁前的鄭重開場白，語氣比「でも」客氣得多。',
    },
    {
      ja: '念のため、もう一度説明していただけますか',
      reading: 'ねんの ため、もういちど せつめいして いただけますか',
      zh: '為求慎重，能請您再說明一次嗎',
    },
    {
      ja: '資料をご覧ください',
      reading: 'しりょうを ごらんください',
      zh: '請看資料',
      note: '「ご覧になる」是「見る」的尊敬語，簡報時常用。',
    },
    {
      ja: '本日はお集まりいただき、ありがとうございます',
      reading: 'ほんじつは おあつまり いただき、ありがとうございます',
      zh: '感謝各位今天撥冗出席',
    },
  ],
  drills: [
    {
      kind: 'choice',
      id: 'biz-meeting-001',
      stem: '時間になりましたので、会議を（　）いただきます。',
      options: ['始めさせて', '始められて', '始めて', '始まって'],
      answerIndex: 0,
      explanation:
        '「〜させていただきます」是謙讓句型，表示「請容我做～」，會議開場的固定說法是「始めさせていただきます」。「始められて」是被動或尊敬形，不能用在自己的動作上；「始まって」是自動詞，無法表達「由我來開始」的意思。',
      explanationEn:
        '「〜させていただきます」 is the humble pattern "allow me to do …," and the set phrase for opening a meeting is 「始めさせていただきます」. 「始められて」 is passive or honorific, neither of which can describe your own action; 「始まって」 is the intransitive verb, so it cannot express "I will start it."',
    },
    {
      kind: 'choice',
      id: 'biz-meeting-002',
      stem: '恐れ入りますが、もう少しお時間を（　）ませんか。',
      options: ['いただけ', 'いただか', 'いただこう', 'いただいて'],
      answerIndex: 0,
      explanation:
        '「お時間をいただけませんか」用「いただく」的可能形「いただける」加「ませんか」，是委婉請求對方給時間的謙讓說法。「いただか」「いただこう」接「ませんか」都是不成立的活用；「いただいてませんか」意思變成「還沒收到嗎」，不符合請求的語境。',
      explanationEn:
        '「お時間をいただけませんか」 uses 「いただける」, the potential form of the humble 「いただく」, plus 「ませんか」— a soft, humble way of asking for more of the other person\'s time. 「いただか」 and 「いただこう」 cannot combine with 「ませんか」 at all; 「いただいてませんか」 would mean "haven\'t you received it?", which does not fit a request.',
    },
    {
      kind: 'choice',
      id: 'biz-meeting-003',
      stem: '費用の件は、一度持ち帰って（　）します。',
      options: ['検討', '遠慮', '拝見', '出席'],
      answerIndex: 0,
      explanation:
        '「持ち帰って検討します」是商務場合不當場下結論時的固定說法，意思是「帶回去研究再回覆」。「遠慮」是客氣推辭、「拝見」是「看」的謙讓語、「出席」是參加會議，接在「持ち帰って」後面語意都不通。',
      explanationEn:
        '「持ち帰って検討します」 is the standard business phrase for not deciding on the spot — take the matter back to the office, study it, and reply later. 「遠慮」 means politely declining, 「拝見」 is the humble verb for "to look at," and 「出席」 means attending a meeting — none of them makes sense after 「持ち帰って」.',
    },
    {
      kind: 'choice',
      id: 'biz-meeting-004',
      stem: '（相手の意見に同意して）はい、（　）とおりです。私も賛成です。',
      options: ['おっしゃる', '申し上げる', '伺う', '承る'],
      answerIndex: 0,
      explanation:
        '「おっしゃる」是「言う」的尊敬語，引用對方的話表示同意要說「おっしゃるとおりです」。「申し上げる」是謙讓語，只能用於自己說的話；「伺う」「承る」也都是謙讓語，套在對方的動作上是敬語誤用。',
      explanationEn:
        '「おっしゃる」 is the respectful (honorific) form of 「言う」, so agreeing with what the other person said is 「おっしゃるとおりです」— "it is exactly as you say." 「申し上げる」 is humble and can only describe your own speech; 「伺う」 and 「承る」 are likewise humble verbs, so applying any of them to the other person\'s action is a keigo misuse.',
    },
    {
      kind: 'order',
      id: 'biz-meeting-005',
      before: '品質を',
      after: 'と思います。',
      segments: ['考えると', '無理な', 'スケジュールは', '避けたい'],
      starIndex: 2,
      explanation:
        '正解語序為「品質を 考えると 無理な スケジュールは 避けたい と思います」。「品質を」後面只能接他動詞「考えると」構成條件句；「無理な」是な形容詞連體形，必須直接修飾名詞「スケジュール」；「避けたい」接句尾「と思います」表達委婉的主張。★ 在第三格「スケジュールは」。',
      explanationEn:
        'The correct order is 「品質を 考えると 無理な スケジュールは 避けたい と思います」 (considering quality, I would like to avoid an unreasonable schedule). 「品質を」 can only be followed by the transitive 「考えると」, forming the conditional clause; 「無理な」 is a na-adjective in prenominal form and must directly modify 「スケジュール」; 「避けたい」 connects to the final 「と思います」 to soften the claim. The starred third slot is 「スケジュールは」.',
    },
    {
      kind: 'order',
      id: 'biz-meeting-006',
      before: 'この件は、一度',
      after: 'でしょうか。',
      segments: ['持ち帰って', '検討させて', 'いただいても', 'よろしい'],
      starIndex: 1,
      explanation:
        '正解語序為「この件は、一度 持ち帰って 検討させて いただいても よろしい でしょうか」。動作順序上要先「持ち帰って」才能「検討する」；「いただいても」必須緊接使役て形「検討させて」構成「〜させていただいても」的請求許可句型；「よろしい」固定接「でしょうか」。★ 在第二格「検討させて」。',
      explanationEn:
        'The correct order is 「この件は、一度 持ち帰って 検討させて いただいても よろしい でしょうか」. Logically you must first 「持ち帰って」 (take it back) before you can 「検討する」 (consider it); 「いただいても」 must directly follow the causative te-form 「検討させて」 to build the permission-seeking pattern 「〜させていただいても」; and 「よろしい」 is always followed by 「でしょうか」. The starred second slot is 「検討させて」.',
    },
  ],
}
