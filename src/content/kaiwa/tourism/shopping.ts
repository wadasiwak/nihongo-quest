import type { KaiwaScene } from '../../types'

export const scene: KaiwaScene = {
  id: 'tour-shopping',
  category: 'tourism',
  title: '購物',
  titleJa: '買い物',
  icon: '🛍️',
  suggestedLevel: 'n5',
  dialogues: [
    {
      id: 'tour-shopping-d1',
      title: '藥妝店找商品與詢價',
      lines: [
        {
          speaker: '客人',
          gender: '女',
          ja: 'すみません、目薬は どこに ありますか。',
          reading: 'すみません、めぐすりは どこに ありますか。',
          zh: '不好意思，眼藥水在哪裡？',
        },
        {
          speaker: '店員',
          gender: '男',
          ja: '目薬ですね。あちらの 二番の 棚に あります。',
          reading: 'めぐすりですね。あちらの にばんの たなに あります。',
          zh: '眼藥水嗎？在那邊二號貨架上。',
        },
        {
          speaker: '客人',
          gender: '女',
          ja: 'ありがとうございます。それから、この クリームは いくらですか。',
          zh: '謝謝。另外，這罐乳霜多少錢？',
        },
        {
          speaker: '店員',
          gender: '男',
          ja: 'それは 千二百円です。今 セール中で、二つで 二千円ですよ。',
          reading: 'それは せんにひゃくえんです。いま セールちゅうで、ふたつで にせんえんですよ。',
          zh: '那個是一千兩百日圓。現在特價中，兩罐兩千日圓喔。',
        },
        {
          speaker: '客人',
          gender: '女',
          ja: 'じゃあ、二つ ください。',
          reading: 'じゃあ、ふたつ ください。',
          zh: '那請給我兩罐。',
        },
        {
          speaker: '店員',
          gender: '男',
          ja: 'はい、かしこまりました。ほかに 何か お探しですか。',
          reading: 'はい、かしこまりました。ほかに なにか おさがしですか。',
          zh: '好的。還有其他要找的商品嗎？',
        },
        {
          speaker: '客人',
          gender: '女',
          ja: 'いえ、これで 大丈夫です。',
          reading: 'いえ、これで だいじょうぶです。',
          zh: '沒有了，這樣就好。',
        },
        {
          speaker: '店員',
          gender: '男',
          ja: 'では、レジへ どうぞ。',
          zh: '那麼請到收銀台。',
        },
      ],
    },
    {
      id: 'tour-shopping-d2',
      title: '試穿衣服與尺寸',
      lines: [
        {
          speaker: '客人',
          gender: '男',
          ja: 'すみません、この シャツを 着て みても いいですか。',
          reading: 'すみません、この シャツを きて みても いいですか。',
          zh: '不好意思，這件襯衫可以試穿嗎？',
        },
        {
          speaker: '店員',
          gender: '女',
          ja: 'はい、どうぞ。試着室は こちらです。',
          reading: 'はい、どうぞ。しちゃくしつは こちらです。',
          zh: '可以的，請。試衣間在這邊。',
        },
        {
          speaker: '客人',
          gender: '男',
          ja: 'ちょっと 小さいですね。もう 少し 大きい サイズは ありますか。',
          reading: 'ちょっと ちいさいですね。もう すこし おおきい サイズは ありますか。',
          zh: '有點小耶。有再大一點的尺寸嗎？',
        },
        {
          speaker: '店員',
          gender: '女',
          ja: 'Ｍサイズですね。少々 お待ちください。',
          reading: 'エムサイズですね。しょうしょう おまちください。',
          zh: 'M號對吧，請稍等一下。',
        },
        {
          speaker: '店員',
          gender: '女',
          ja: 'お待たせしました。こちらが Ｍサイズです。',
          reading: 'おまたせしました。こちらが エムサイズです。',
          zh: '讓您久等了，這是M號。',
        },
        {
          speaker: '客人',
          gender: '男',
          ja: 'ちょうど いいです。色違いは ありますか。',
          reading: 'ちょうど いいです。いろちがいは ありますか。',
          zh: '剛剛好。有其他顏色嗎？',
        },
        {
          speaker: '店員',
          gender: '女',
          ja: '白と 紺が ございます。',
          reading: 'しろと こんが ございます。',
          zh: '有白色和深藍色。',
        },
        {
          speaker: '客人',
          gender: '男',
          ja: 'じゃあ、紺の Ｍサイズを ください。',
          reading: 'じゃあ、こんの エムサイズを ください。',
          zh: '那請給我深藍色的M號。',
        },
      ],
    },
    {
      id: 'tour-shopping-d3',
      title: '免稅手續與付款',
      lines: [
        {
          speaker: '客人',
          gender: '女',
          ja: 'すみません、免税に できますか。',
          reading: 'すみません、めんぜいに できますか。',
          zh: '不好意思，可以辦免稅嗎？',
        },
        {
          speaker: '店員',
          gender: '男',
          ja: 'はい、五千円以上の お買い物で 免税に なります。パスポートは お持ちですか。',
          reading: 'はい、ごせんえんいじょうの おかいもので めんぜいに なります。パスポートは おもちですか。',
          zh: '可以，消費滿五千日圓即可免稅。請問有帶護照嗎？',
        },
        {
          speaker: '客人',
          gender: '女',
          ja: 'はい、これです。',
          zh: '有，在這裡。',
        },
        {
          speaker: '店員',
          gender: '男',
          ja: 'ありがとうございます。お会計は 八千八百円です。',
          reading: 'ありがとうございます。おかいけいは はっせんはっぴゃくえんです。',
          zh: '謝謝。總共是八千八百日圓。',
        },
        {
          speaker: '客人',
          gender: '女',
          ja: 'カードで 払っても いいですか。',
          reading: 'カードで はらっても いいですか。',
          zh: '可以刷卡嗎？',
        },
        {
          speaker: '店員',
          gender: '男',
          ja: 'はい、大丈夫です。こちらに カードを どうぞ。',
          reading: 'はい、だいじょうぶです。こちらに カードを どうぞ。',
          zh: '可以的，請把卡片放在這邊。',
        },
        {
          speaker: '店員',
          gender: '男',
          ja: 'レシートと 免税の 袋です。出国まで 開けないで くださいね。',
          reading: 'レシートと めんぜいの ふくろです。しゅっこくまで あけないで くださいね。',
          zh: '這是收據和免稅袋。出境前請不要拆封喔。',
        },
        {
          speaker: '客人',
          gender: '女',
          ja: '分かりました。ありがとうございました。',
          reading: 'わかりました。ありがとうございました。',
          zh: '我知道了，謝謝。',
        },
      ],
    },
  ],
  phrases: [
    {
      ja: 'カードで 払えますか。',
      reading: 'カードで はらえますか。',
      zh: '可以刷卡嗎？',
      note: '也可以說「カード、使えますか」，一樣通用。',
    },
    {
      ja: 'ほかの 色は ありますか。',
      reading: 'ほかの いろは ありますか。',
      zh: '有別的顏色嗎？',
    },
    {
      ja: '高すぎます。',
      reading: 'たかすぎます。',
      zh: '太貴了。',
      note: '直說可能失禮，通常改說「ちょっと高いですね」較委婉。',
    },
    {
      ja: 'レシートを ください。',
      zh: '請給我收據。',
    },
    {
      ja: '免税で お願いします。',
      reading: 'めんぜいで おねがいします。',
      zh: '麻煩幫我辦免稅。',
      note: '需出示護照，多數店家消費滿五千日圓可辦。',
    },
    {
      ja: 'これは いくらですか。',
      zh: '這個多少錢？',
    },
    {
      ja: '試着しても いいですか。',
      reading: 'しちゃくしても いいですか。',
      zh: '可以試穿嗎？',
    },
    {
      ja: 'もう 少し 安いのは ありますか。',
      reading: 'もう すこし やすいのは ありますか。',
      zh: '有便宜一點的嗎？',
    },
    {
      ja: 'これを ください。',
      zh: '請給我這個。',
    },
    {
      ja: '袋を もう 一枚 もらえますか。',
      reading: 'ふくろを もう いちまい もらえますか。',
      zh: '可以再給我一個袋子嗎？',
      note: '日本的購物袋多半要收費，加購時可以這樣說。',
    },
    {
      ja: 'プレゼント用に 包んで もらえますか。',
      reading: 'プレゼントように つつんで もらえますか。',
      zh: '可以幫我包裝成禮物嗎？',
    },
    {
      ja: '見て いるだけです。',
      reading: 'みて いるだけです。',
      zh: '我只是看看。',
      note: '店員問「何かお探しですか」時，可以這樣回答。',
    },
  ],
  drills: [
    {
      id: 'tour-shopping-001',
      kind: 'choice',
      stem: 'カードで （　） いいですか。',
      options: ['払っても', '払いても', '払うでも', '払ったも'],
      answerIndex: 0,
      explanation:
        '「〜てもいいですか」用動詞て形加「も」來請求許可。「払う」是五段動詞，て形是「払って」，所以正解是「払っても」。「払いても」活用錯誤（う結尾的動詞て形要促音便成って）；「払うでも」「払ったも」都不是正確的活用形，無法成句。',
      explanationEn:
        '「〜てもいいですか」 asks permission using the te-form plus 「も」. 「払う」 is a godan verb whose te-form is 「払って」, so the answer is 「払っても」. 「払いても」 is a misconjugation — verbs ending in う take the double-consonant change to って; 「払うでも」 and 「払ったも」 are not valid conjugated forms and cannot build this sentence.',
    },
    {
      id: 'tour-shopping-002',
      kind: 'choice',
      stem: 'ほかの 色（　） ありますか。',
      options: ['は', 'を', 'に', 'で'],
      answerIndex: 0,
      explanation:
        '「あります」是自動詞，詢問「有沒有其他顏色」時，主題用助詞「は」提示：「ほかの色はありますか」。「を」用來標示他動詞的受詞，不能接自動詞「あります」；「に」表示存在的場所而非存在的主體；「で」表示手段或範圍，放這裡語意不通。',
      explanationEn:
        '「あります」 is intransitive, so when asking whether other colors are available, the thing you are asking about is presented as the topic with 「は」: 「ほかの色はありますか」. 「を」 marks the object of a transitive verb and cannot go with 「あります」; 「に」 marks the place where something exists, not the thing that exists; 「で」 marks a means or scope and makes no sense here.',
    },
    {
      id: 'tour-shopping-003',
      kind: 'choice',
      stem: 'すみません、目薬は （　）に ありますか。',
      options: ['どこ', 'どれ', 'だれ', 'いつ'],
      answerIndex: 0,
      explanation:
        '詢問物品放在什麼地方要用疑問詞「どこ」（哪裡），「どこにありますか」是問位置的固定說法。「どれ」是問「哪一個」，指從數個選項中挑選，不能表示場所；「だれ」問人、「いつ」問時間，放進句子裡都語意不通。',
      explanationEn:
        'To ask where an item is located, use the question word 「どこ」 (where); 「どこにありますか」 is the standard way to ask about a location. 「どれ」 means "which one," used for picking among several items, and cannot indicate a place; 「だれ」 asks about a person and 「いつ」 asks about time, so neither makes sense in this sentence.',
    },
    {
      id: 'tour-shopping-004',
      kind: 'choice',
      stem: 'ちょっと 小さいです。もう 少し （　） サイズは ありますか。',
      options: ['大きい', '大きく', '大きさ', '大きければ'],
      answerIndex: 0,
      explanation:
        'い形容詞修飾名詞時直接用辭書形，「大きいサイズ」就是「大的尺寸」，正解是「大きい」。「大きく」是連用形，用來修飾動詞而非名詞；「大きさ」是名詞「大小」，後面不能再接「サイズ」；「大きければ」是條件形，放在名詞前不成立。',
      explanationEn:
        'An i-adjective modifies a noun in its plain form, so 「大きいサイズ」 means "a bigger size" and the answer is 「大きい」. 「大きく」 is the adverbial form, which modifies verbs rather than nouns; 「大きさ」 is the noun "size/magnitude" and cannot be followed by another noun like 「サイズ」; 「大きければ」 is the conditional form and cannot sit before a noun.',
    },
    {
      id: 'tour-shopping-005',
      kind: 'order',
      before: '',
      after: 'ありますか。',
      segments: ['もう', '少し', '大きい', 'サイズは'],
      starIndex: 2,
      explanation:
        '正解語序是「もう 少し 大きい サイズは ありますか」。「もう少し」（再稍微）是固定搭配的副詞，必須放在被修飾的形容詞「大きい」前面；「サイズは」是主題，緊接在述語「ありますか」之前。若把「大きい」移到「もう少し」前面，副詞就沒有修飾對象，語序不通。★在第三格，即「大きい」。',
      explanationEn:
        'The correct order is 「もう 少し 大きい サイズは ありますか」 (do you have a slightly bigger size?). 「もう少し」 (a little more) is a fixed adverbial that must come before the adjective it modifies, 「大きい」; 「サイズは」 is the topic and sits right before the predicate 「ありますか」. Moving 「大きい」 in front of 「もう少し」 would leave the adverb with nothing to modify. The starred third slot is 「大きい」.',
    },
    {
      id: 'tour-shopping-006',
      kind: 'order',
      before: 'この',
      after: 'か。',
      segments: ['シャツを', '着て', 'みても', 'いいです'],
      starIndex: 3,
      explanation:
        '正解語序是「この シャツを 着て みても いいです か」。連體詞「この」直接接名詞「シャツ」，受詞「シャツを」必須放在動詞「着て」前面；「〜てみる」（試著做）接在て形之後，再以「〜てもいいですか」請求許可，所以「みても」之後接「いいです」。若把「着て」放到「みても」後面，句型就拆散不成句。★在第四格，即「いいです」。',
      explanationEn:
        'The correct order is 「この シャツを 着て みても いいです か」 (may I try this shirt on?). The demonstrative 「この」 attaches to 「シャツ」, and the object 「シャツを」 must precede the verb 「着て」; 「〜てみる」 (try doing) follows the te-form, and 「〜てもいいですか」 then asks permission, so 「みても」 is followed by 「いいです」. Placing 「着て」 after 「みても」 would tear the pattern apart. The starred fourth slot is 「いいです」.',
    },
  ],
}
