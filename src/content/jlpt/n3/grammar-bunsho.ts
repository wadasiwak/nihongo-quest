import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    id: 'n3-grammar-bunsho-001',
    kind: 'passage',
    passageTitle: '手書きの手紙',
    passage:
      '私は年に何度か、手書きの手紙を書くようにしている。メールなら数分で送れるのに、なぜわざわざ手紙なのかと、友人に不思議がられることもある。【１】、手書きの文字には、その人らしさが表れると思うからだ。\n先月、田舎に住む祖母から手紙が届いた。少し震えた字で、庭の花が咲いたことや、私の体を心配する言葉が書いてあった。読んでいる【２】、祖母の声が聞こえてくるような気がした。短いメールの文字では、きっとこうはいかないだろう。\n確かに、手紙を書くのは時間がかかる。だが、書く前に相手の顔を思い浮かべ、言葉をひとつひとつ選ぶ。【３】時間こそが、相手への気持ちなのだと思う。\n便利さばかりが求められる時代だからこそ、たまには時間をかけて、大切な人に手紙を書いて【４】。',
    explanation: '',
    questions: [
      {
        id: 'n3-grammar-bunsho-001-q1',
        stem: '【１】に入るのはどれか。',
        options: ['なぜなら', 'それなのに', 'そのうえ', 'ところで'],
        answerIndex: 0,
        explanation:
          '「なぜなら」與句尾的「〜からだ」前後呼應，用來說明前句「為什麼特地寫信」的理由，是唯一正解。「それなのに」是逆接、「そのうえ」是累加、「ところで」是轉換話題，三者都無法和「からだ」搭配構成說明理由的句型。',
        explanationEn:
          '「なぜなら」 ("the reason is that...") pairs with the sentence-final 「〜からだ」 to explain why the writer bothers with handwritten letters, making it the only correct choice. 「それなのに」 is contrastive, 「そのうえ」 adds information, and 「ところで」 changes the topic — none of the three can combine with 「からだ」 to form a reason-giving construction.',
      },
      {
        id: 'n3-grammar-bunsho-001-q2',
        stem: '【２】に入るのはどれか。',
        options: ['うちに', 'とたんに', 'うえに', 'たびに'],
        answerIndex: 0,
        explanation:
          '「〜うちに」接動詞ている形，表示「在做…的過程中不知不覺地」，「読んでいるうちに、声が聞こえてくるような気がした」語意通順。「とたんに」接續錯誤，必須接た形（読んだとたんに）；「うえに」表累加、「たびに」表「每次」，都不合此處描述單一次閱讀經驗的語境。',
        explanationEn:
          '「〜うちに」 after the ている form means "while doing something, before one realizes it", so 「読んでいるうちに」 — feeling as if the grandmother\'s voice could be heard while reading — flows naturally. 「とたんに」 is a connection error here because it must follow the ta-form (読んだとたんに); 「うえに」 ("on top of that") and 「たびに」 ("every time") both clash with this description of a single reading experience.',
      },
      {
        id: 'n3-grammar-bunsho-001-q3',
        stem: '【３】に入るのはどれか。',
        options: ['その', 'あの', 'どの', 'どんな'],
        answerIndex: 0,
        explanation:
          '文章中承接前一句剛提到的內容，指示詞要用「そ」系：「その時間」指前句「思い浮かべ、言葉を選ぶ」所花的時間。「あの」用於說話者和對方都知道的遙遠事物，不能指文章前文；「どの」「どんな」是疑問詞，此處並非疑問句。',
        explanationEn:
          'To refer back to something just mentioned in a text, the so-series demonstrative is required: 「その時間」 points to the time spent picturing the recipient and choosing words in the previous sentence. 「あの」 refers to something distant that both speaker and listener already know, so it cannot point to earlier text; 「どの」 and 「どんな」 are question words, and this is not a question.',
      },
      {
        id: 'n3-grammar-bunsho-001-q4',
        stem: '【４】に入るのはどれか。',
        options: ['みてはどうだろうか', 'みてはいかがでしょうか', 'みてください', 'みましょうか'],
        answerIndex: 0,
        explanation:
          '本文通篇是だ・である常體隨筆，結尾的委婉建議也必須維持常體，「〜てみてはどうだろうか」正確。「いかがでしょうか」「〜てください」「〜ましょうか」都是敬體表現，和全文文體不一致，在文章文法題中屬於文體錯誤。',
        explanationEn:
          'The essay is written throughout in the plain da/dearu style, so the gentle closing suggestion must stay in plain style too — 「みてはどうだろうか」 is correct. 「いかがでしょうか」, 「〜てください」, and 「〜ましょうか」 are all polite-style expressions that break the register of the passage, which counts as a style error in text grammar questions.',
      },
    ],
  },
  {
    id: 'n3-grammar-bunsho-002',
    kind: 'passage',
    passageTitle: '電車の中の音楽（投書）',
    passage:
      '先日、電車の中で気になることがありました。隣に座っていた若い男性が、イヤホンから大きな音で音楽を聞いていたのです。音は周りにまで聞こえていて、近くの人たちは迷惑そうな顔をしていました。【１】、男性は駅に着くまで、まったく気づかない様子でした。\nもちろん、電車の中で音楽を楽しむこと自体は、悪いことではありません。問題なのは音の大きさです。イヤホンをつけていると、音がどれだけ外に漏れているか、自分ではなかなか分からないものです。実は私も学生のころ、友人に「音が漏れているよ」と注意された【２】があります。それ以来、電車に乗る前には必ず音量を確かめるようにしています。\n電車に乗っていると、同じような場面をよく見かけます。【３】たびに、少し残念な気持ちになります。公共の場所は、みんなが気持ちよく使うものです。ほんの少し周りに気を配るだけで、お互いに嫌な思いをせずにすむのではない【４】。\n（会社員・３５歳）',
    explanation: '',
    questions: [
      {
        id: 'n3-grammar-bunsho-002-q1',
        stem: '【１】に入るのはどれか。',
        options: ['しかし', 'だから', 'たとえば', 'それとも'],
        answerIndex: 0,
        explanation:
          '前句說「周圍的人露出困擾的表情」，後句卻說「男性完全沒有察覺」，兩句是對比關係，要用逆接接續詞「しかし」。「だから」表因果、「たとえば」用於舉例、「それとも」用於疑問句的二選一，都不符合此處的邏輯關係。',
        explanationEn:
          'The previous sentence says the people nearby looked annoyed, while the next says the man never noticed — a contrast that calls for the adversative conjunction 「しかし」 ("however"). 「だから」 marks cause and effect, 「たとえば」 introduces an example, and 「それとも」 offers an either-or choice in questions; none matches the logical relation here.',
      },
      {
        id: 'n3-grammar-bunsho-002-q2',
        stem: '【２】に入るのはどれか。',
        options: ['こと', 'もの', 'ところ', 'ため'],
        answerIndex: 0,
        explanation:
          '「動詞た形＋ことがある」表示過去的經驗：「注意されたことがあります」＝曾經被提醒過。「たところ」表「剛做完」時要說「〜たところです」，「〜たところがあります」不成立；「もの」「ため」接在這裡既不合文法也不表經驗，句子無法成立。',
        explanationEn:
          'The pattern "ta-form + ことがある" expresses past experience: 「注意されたことがあります」 means "I have been warned before". For "just finished doing", 「たところ」 must appear as 「〜たところです」 — 「〜たところがあります」 is not a valid construction; 「もの」 and 「ため」 are both ungrammatical here and do not express experience, so the sentence would fall apart.',
      },
      {
        id: 'n3-grammar-bunsho-002-q3',
        stem: '【３】に入るのはどれか。',
        options: ['その', 'この', 'あの', 'どの'],
        answerIndex: 0,
        explanation:
          '「そのたびに」＝「每逢那種時候」，「そ」系指示詞承接前句「同じような場面をよく見かけます」提到的場面，是文章中指前述內容的標準用法。「このたび」是「這一次」的鄭重說法，不表反覆；「あの」指共同記憶中的遙遠事物；「どの」是疑問詞，皆不合。',
        explanationEn:
          '「そのたびに」 means "each time that happens": the so-series demonstrative refers back to the scenes mentioned in 「同じような場面をよく見かけます」, the standard way to point to preceding text. 「このたび」 is a formal expression for "this time / on this occasion" and does not express repetition; 「あの」 points to something distant in shared memory; 「どの」 is a question word — none of them fits.',
      },
      {
        id: 'n3-grammar-bunsho-002-q4',
        stem: '【４】に入るのはどれか。',
        options: ['でしょうか', 'だろうか', 'まいか', 'ものか'],
        answerIndex: 0,
        explanation:
          '這篇投書全文使用です・ます敬體，結尾委婉表達主張要用「〜のではないでしょうか」。「だろうか」是常體，與全文文體不一致；「まいか」要用「〜ではあるまいか」的形式，接在「ない」之後不成立；「ものか」表強烈否定「絕不…」，語意相反。',
        explanationEn:
          'This reader\'s letter is written entirely in the polite desu/masu style, so the softened closing claim must take 「〜のではないでしょうか」. 「だろうか」 is plain style and inconsistent with the rest of the text; 「まいか」 would require the form 「〜ではあるまいか」 and cannot attach after 「ない」; 「ものか」 is an emphatic denial ("absolutely not"), the opposite of the intended meaning.',
      },
    ],
  },
]
