import type { KaiwaScene } from '../../types'

export const scene: KaiwaScene = {
  id: 'biz-visit',
  category: 'business',
  title: '拜訪客戶',
  titleJa: '取引先への訪問',
  icon: '🏢',
  suggestedLevel: 'n2',
  dialogues: [
    {
      id: 'biz-visit-d1',
      title: '櫃檯報到與遞名片',
      lines: [
        {
          speaker: '林',
          gender: '男',
          ja: 'ごめんください。三時に営業部の田中様とお約束をいただいております、東亜商事の林と申します。',
          reading: 'ごめんください。さんじに えいぎょうぶの たなかさまと おやくそくを いただいております、とうあしょうじの りんと もうします。',
          zh: '打擾了。我是東亞商事的林，與貴公司營業部的田中女士約好三點見面。',
        },
        {
          speaker: '受付',
          gender: '女',
          ja: '東亜商事の林様でいらっしゃいますね。お待ちしておりました。恐れ入りますが、お名刺を一枚頂戴できますでしょうか。',
          reading: 'とうあしょうじの りんさまで いらっしゃいますね。おまちしておりました。おそれいりますが、おめいしを いちまい ちょうだいできますでしょうか。',
          zh: '是東亞商事的林先生吧，恭候多時了。不好意思，方便給我一張名片嗎？',
        },
        {
          speaker: '林',
          gender: '男',
          ja: 'はい、こちらでございます。',
          reading: 'はい、こちらで ございます。',
          zh: '好的，這是我的名片。',
        },
        {
          speaker: '受付',
          gender: '女',
          ja: 'ありがとうございます。ただいま田中に取り次ぎますので、少々お待ちくださいませ。',
          reading: 'ありがとうございます。ただいま たなかに とりつぎますので、しょうしょう おまちくださいませ。',
          zh: '謝謝您。我馬上為您通報田中，請稍候。',
        },
        {
          speaker: '林',
          gender: '男',
          ja: 'よろしくお願いいたします。',
          reading: 'よろしく おねがいいたします。',
          zh: '麻煩您了。',
        },
        {
          speaker: '受付',
          gender: '女',
          ja: 'お待たせいたしました。二階の応接室にご案内いたします。どうぞこちらへ。',
          reading: 'おまたせいたしました。にかいの おうせつしつに ごあんないいたします。どうぞ こちらへ。',
          zh: '讓您久等了。我帶您到二樓的會客室，這邊請。',
        },
        {
          speaker: '林',
          gender: '男',
          ja: 'ありがとうございます。',
          zh: '謝謝您。',
        },
        {
          speaker: '受付',
          gender: '女',
          ja: '田中はすぐに参りますので、おかけになってお待ちください。',
          reading: 'たなかは すぐに まいりますので、おかけになって おまちください。',
          zh: '田中馬上就來，請坐著稍等一下。',
        },
      ],
    },
    {
      id: 'biz-visit-d2',
      title: '會客室寒暄與切入正題',
      lines: [
        {
          speaker: '田中',
          gender: '女',
          ja: 'お待たせいたしました。営業部課長の田中でございます。',
          reading: 'おまたせいたしました。えいぎょうぶ かちょうの たなかで ございます。',
          zh: '讓您久等了。我是營業部課長田中。',
        },
        {
          speaker: '林',
          gender: '男',
          ja: '初めてお目にかかります。東亜商事海外事業部の林と申します。どうぞよろしくお願いいたします。',
          reading: 'はじめて おめに かかります。とうあしょうじ かいがいじぎょうぶの りんと もうします。どうぞ よろしく おねがいいたします。',
          zh: '初次見面，我是東亞商事海外事業部的林，請多多指教。',
        },
        {
          speaker: '田中',
          gender: '女',
          ja: '頂戴いたします。こちらこそ、よろしくお願いいたします。どうぞおかけください。',
          reading: 'ちょうだいいたします。こちらこそ、よろしく おねがいいたします。どうぞ おかけください。',
          zh: '名片我收下了。彼此彼此，請多指教。請坐。',
        },
        {
          speaker: '林',
          gender: '男',
          ja: '本日はお忙しいところお時間をいただき、誠にありがとうございます。',
          reading: 'ほんじつは おいそがしいところ おじかんを いただき、まことに ありがとうございます。',
          zh: '今天承蒙您百忙之中撥冗接見，非常感謝。',
        },
        {
          speaker: '田中',
          gender: '女',
          ja: 'いえいえ、遠いところをわざわざお越しいただきまして。台北からいらっしゃったんですか。',
          reading: 'いえいえ、とおいところを わざわざ おこしいただきまして。タイペイから いらっしゃったんですか。',
          zh: '哪裡哪裡，還讓您大老遠跑一趟。您是從台北過來的嗎？',
        },
        {
          speaker: '林',
          gender: '男',
          ja: 'はい、昨日の便で参りました。東京は台北より涼しくて助かります。',
          reading: 'はい、きのうの びんで まいりました。とうきょうは タイペイより すずしくて たすかります。',
          zh: '是的，我搭昨天的班機過來。東京比台北涼快，舒服多了。',
        },
        {
          speaker: '田中',
          gender: '女',
          ja: '今年は梅雨が長いですからね。では、早速ですが、本題に入らせていただいてもよろしいでしょうか。',
          reading: 'ことしは つゆが ながいですからね。では、さっそくですが、ほんだいに はいらせて いただいても よろしいでしょうか。',
          zh: '今年梅雨季比較長呢。那麼恕我直接切入正題，可以嗎？',
        },
        {
          speaker: '林',
          gender: '男',
          ja: 'はい、お願いいたします。本日は弊社の新製品のお取り扱いについて、ご提案に伺いました。',
          reading: 'はい、おねがいいたします。ほんじつは へいしゃの しんせいひんの おとりあつかいについて、ごていあんに うかがいました。',
          zh: '好的，麻煩您了。今天是想針對敝公司新產品的經銷合作，向您提案。',
        },
        {
          speaker: '田中',
          gender: '女',
          ja: 'それは楽しみですね。資料を拝見できますか。',
          reading: 'それは たのしみですね。しりょうを はいけんできますか。',
          zh: '那真令人期待。可以讓我看看資料嗎？',
        },
      ],
    },
    {
      id: 'biz-visit-d3',
      title: '告辭與後續約定',
      lines: [
        {
          speaker: '林',
          gender: '男',
          ja: '本日は貴重なお時間をいただき、ありがとうございました。そろそろ失礼いたします。',
          reading: 'ほんじつは きちょうな おじかんを いただき、ありがとうございました。そろそろ しつれいいたします。',
          zh: '今天佔用您寶貴的時間，非常感謝。我差不多該告辭了。',
        },
        {
          speaker: '田中',
          gender: '女',
          ja: 'こちらこそ、有意義なお話を伺えてよかったです。',
          reading: 'こちらこそ、ゆういぎな おはなしを うかがえて よかったです。',
          zh: '我才要謝謝您，能聽到這麼有意義的內容真是太好了。',
        },
        {
          speaker: '林',
          gender: '男',
          ja: 'ご提案の件、ぜひ前向きにご検討いただければ幸いです。',
          reading: 'ごていあんの けん、ぜひ まえむきに ごけんとう いただければ さいわいです。',
          zh: '提案的事，若能獲得積極考慮就太好了。',
        },
        {
          speaker: '田中',
          gender: '女',
          ja: '社内で検討いたしまして、来週中にはご連絡いたします。',
          reading: 'しゃないで けんとういたしまして、らいしゅうちゅうには ごれんらくいたします。',
          zh: '我們會在公司內部討論，下週之內回覆您。',
        },
        {
          speaker: '林',
          gender: '男',
          ja: 'ありがとうございます。お見積もりの詳細は、明日までにメールでお送りいたします。',
          reading: 'ありがとうございます。おみつもりの しょうさいは、あすまでに メールで おおくりいたします。',
          zh: '謝謝您。報價的細節我明天之前用電子郵件寄給您。',
        },
        {
          speaker: '田中',
          gender: '女',
          ja: '助かります。次回は弊社の技術担当も同席させますので、再来週あたりはいかがでしょうか。',
          reading: 'たすかります。じかいは へいしゃの ぎじゅつたんとうも どうせきさせますので、さらいしゅうあたりは いかがでしょうか。',
          zh: '那就幫大忙了。下次我們的技術負責人也會一起出席，再下週左右方便嗎？',
        },
        {
          speaker: '林',
          gender: '男',
          ja: 'ぜひお願いいたします。日程は改めてメールでご相談させてください。',
          reading: 'ぜひ おねがいいたします。にっていは あらためて メールで ごそうだんさせてください。',
          zh: '非常樂意。日期容我再用郵件與您商量。',
        },
        {
          speaker: '田中',
          gender: '女',
          ja: 'では、下までお送りいたします。',
          reading: 'では、したまで おおくりいたします。',
          zh: '那我送您到樓下吧。',
        },
        {
          speaker: '林',
          gender: '男',
          ja: 'いえ、こちらで結構です。本日は誠にありがとうございました。失礼いたします。',
          reading: 'いえ、こちらで けっこうです。ほんじつは まことに ありがとうございました。しつれいいたします。',
          zh: '不用了，送到這裡就好。今天真的非常感謝，告辭了。',
        },
      ],
    },
  ],
  phrases: [
    {
      ja: '三時にお約束をいただいております。',
      reading: 'さんじに おやくそくを いただいております。',
      zh: '我與對方約好三點見面。',
      note: '到櫃檯報到時的固定說法，比「約束しています」更謙恭。',
    },
    {
      ja: '名刺を頂戴いたします。',
      reading: 'めいしを ちょうだいいたします。',
      zh: '您的名片我收下了。',
      note: '雙手接過名片時說；收下後先放名片夾上，勿立刻收進口袋。',
    },
    {
      ja: '初めてお目にかかります。',
      reading: 'はじめて おめに かかります。',
      zh: '初次見面（謙讓語）。',
      note: '「会う」的謙讓語，比「初めまして」更正式。',
    },
    {
      ja: '本日はお忙しいところ、お時間をいただきありがとうございます。',
      reading: 'ほんじつは おいそがしいところ、おじかんを いただき ありがとうございます。',
      zh: '感謝您百忙之中撥冗接見。',
    },
    {
      ja: 'いつもお世話になっております。',
      reading: 'いつも おせわに なっております。',
      zh: '平日承蒙關照了。',
      note: '商務寒暄萬用句，即使初次聯絡也常照說。',
    },
    {
      ja: '早速ですが、本題に入らせていただきます。',
      reading: 'さっそくですが、ほんだいに はいらせて いただきます。',
      zh: '恕我直接進入正題。',
    },
    {
      ja: '前向きにご検討いただければ幸いです。',
      reading: 'まえむきに ごけんとう いただければ さいわいです。',
      zh: '若蒙積極考慮，不勝感激。',
    },
    {
      ja: '改めてご連絡いたします。',
      reading: 'あらためて ごれんらくいたします。',
      zh: '我會再另行與您聯絡。',
    },
    {
      ja: 'こちらが弊社の資料でございます。',
      reading: 'こちらが へいしゃの しりょうで ございます。',
      zh: '這是敝公司的資料。',
      note: '「弊社」是稱自己公司的謙稱；稱對方公司用「御社」。',
    },
    {
      ja: '恐れ入りますが、営業部の田中様はいらっしゃいますか。',
      reading: 'おそれいりますが、えいぎょうぶの たなかさまは いらっしゃいますか。',
      zh: '不好意思，請問營業部的田中女士在嗎？',
    },
    {
      ja: 'そろそろ失礼いたします。',
      reading: 'そろそろ しつれいいたします。',
      zh: '我差不多該告辭了。',
      note: '告辭前的緩衝句；直接說「帰ります」會顯得失禮。',
    },
    {
      ja: '今後ともよろしくお願いいたします。',
      reading: 'こんごとも よろしく おねがいいたします。',
      zh: '今後也請多多關照。',
    },
  ],
  drills: [
    {
      kind: 'choice',
      id: 'biz-visit-001',
      stem: '受付で：「三時に田中様と（　）をいただいております、東亜商事の林と申します。」',
      options: ['お約束', 'ご遠慮', 'お世辞', 'ご馳走'],
      answerIndex: 0,
      explanation:
        '拜訪客戶到櫃檯報到時，固定說法是「お約束をいただいております」（我與對方有約），把「約束」加上「お」並用「いただく」表謙恭。「ご遠慮」是客氣推辭、「お世辞」是恭維話、「ご馳走」是款待，放進句中語意都不通。',
      explanationEn:
        'When checking in at a client\'s reception desk, the set phrase is 「お約束をいただいております」 (I have an appointment), dressing 「約束」 with the polite お and the humble 「いただく」. 「ご遠慮」 means politely declining, 「お世辞」 means flattery, and 「ご馳走」 means a treat or feast — none of them makes sense in this sentence.',
    },
    {
      kind: 'choice',
      id: 'biz-visit-002',
      stem: '名刺交換で相手の名刺を受け取るとき：「（　）いたします。」',
      options: ['頂戴', '返却', '拝借', '遠慮'],
      answerIndex: 0,
      explanation:
        '收下對方名片時說「頂戴いたします」，「頂戴する」是「もらう」的謙讓語，表示恭敬地收下。「返却」是歸還、「拝借」是暫借（謙讓語），名片是收下而非借用；「遠慮」是客氣推辭，都不合名片交換的語境。',
      explanationEn:
        'When receiving someone\'s business card you say 「頂戴いたします」; 「頂戴する」 is the humble form of 「もらう」, expressing respectful acceptance. 「返却」 means returning something, 「拝借」 is the humble word for borrowing — but a business card is received, not borrowed; and 「遠慮」 means politely declining. None fits the card-exchange situation.',
    },
    {
      kind: 'choice',
      id: 'biz-visit-003',
      stem: '「本日は新製品のご提案に（　）ました。」',
      options: ['伺い', '参られ', 'お聞きし', 'いらっしゃい'],
      answerIndex: 0,
      explanation:
        '「伺う」是「行く・訪ねる」的謙讓語，拜訪客戶說明來意時用「〜に伺いました」（我為此前來拜訪）。「参られる」把謙讓語「参る」硬接尊敬助動詞，屬錯誤混用；「いらっしゃいました」是尊敬語，不能用在自己的動作上；「お聞きしました」是「請教了」，與「ご提案に」語意不合。',
      explanationEn:
        '「伺う」 is the humble form of 「行く・訪ねる」, so stating the purpose of your visit is 「〜に伺いました」 (I have come to …). 「参られ」 wrongly attaches an honorific auxiliary to the humble 「参る」— a broken mixture; 「いらっしゃい」 is honorific and cannot describe your own movement; 「お聞きし」 means "I asked/heard," which does not fit with 「ご提案に」 (for a proposal).',
    },
    {
      kind: 'choice',
      id: 'biz-visit-004',
      stem: '「社内で検討いたしまして、来週中には（　）いたします。」',
      options: ['ご連絡', 'ご覧', 'お越し', 'お見え'],
      answerIndex: 0,
      explanation:
        '「ご連絡いたします」是「ご＋漢語名詞＋いたす」的謙讓句型，表示「由我方主動聯絡您」，接在「社內討論後」語意通順。「ご覧」「お越し」「お見え」都是尊敬語成分，只能用於對方的動作（如ご覧になる、お越しになる），接在謙讓的「いたす」後面是錯誤搭配。',
      explanationEn:
        '「ご連絡いたします」 follows the humble pattern ご + Sino-Japanese noun + いたす, meaning "we will contact you," which flows naturally after "once we discuss it internally." 「ご覧」, 「お越し」, and 「お見え」 are all honorific elements reserved for the other person\'s actions (as in ご覧になる, お越しになる), so pairing them with the humble 「いたす」 is an invalid combination.',
    },
    {
      kind: 'order',
      id: 'biz-visit-005',
      before: '本日は',
      after: '誠にありがとうございます。',
      segments: ['お忙しい', 'ところ', 'お時間を', 'いただき'],
      starIndex: 2,
      explanation:
        '正解語序是「本日は お忙しい ところ お時間を いただき 誠にありがとうございます」。「お忙しいところ」（您百忙之中）是固定接續，後面才接「お時間をいただき」說明感謝的內容；若把「お時間を」移到「お忙しい」前面，形容詞「お忙しい」便失去被修飾語，句子不通。★ 位於第三格「お時間を」。',
      explanationEn:
        'The correct order is 「本日は お忙しい ところ お時間を いただき 誠にありがとうございます」 (thank you very much for taking the time despite being busy). 「お忙しいところ」 is a fixed sequence — the adjective must lead into 「ところ」— and only then comes 「お時間をいただき」, the thing being thanked for. If 「お時間を」 moved before 「お忙しい」, the adjective would lose the noun it modifies and the sentence would collapse. The starred third slot is 「お時間を」.',
    },
    {
      kind: 'order',
      id: 'biz-visit-006',
      before: 'そろそろ',
      after: 'でしょうか。',
      segments: ['本題に', '入らせて', 'いただいても', 'よろしい'],
      starIndex: 1,
      explanation:
        '正解語序是「そろそろ 本題に 入らせて いただいても よろしい でしょうか」。「〜（さ）せていただく」是請求許可的謙讓句型，動詞「入らせて」必須緊接在補語「本題に」之後，再以「いただいても＋よろしいでしょうか」徵求對方同意；「よろしい」若不放在「でしょうか」之前，句子無法收尾。★ 位於第二格「入らせて」。',
      explanationEn:
        'The correct order is 「そろそろ 本題に 入らせて いただいても よろしい でしょうか」 (may I move on to the main topic now?). 「〜（さ）せていただく」 is the humble permission-seeking pattern: the causative 「入らせて」 must directly follow its complement 「本題に」, and 「いただいても」 plus 「よろしいでしょうか」 then asks for consent; 「よろしい」 has to sit right before 「でしょうか」 or the sentence cannot close. The starred second slot is 「入らせて」.',
    },
  ],
}
