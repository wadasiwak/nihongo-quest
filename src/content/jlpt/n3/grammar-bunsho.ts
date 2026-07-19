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
  {
    id: 'n3-grammar-bunsho-003',
    kind: 'passage',
    passageTitle: '初めての料理教室',
    passage:
      '今年の春から、月に二回、駅前の料理教室に通っている。\nきっかけは健康診断の結果だった。ここ数年、夕食はほとんど外食で、医者に食生活を注意されてしまったのだ。健康のためには、自分で作る【１】ないと思った。しかし、包丁もほとんど握ったことのない私に、いきなり毎日の自炊は難しい。【２】、まずは基本から学ぼうと、思い切って教室に申し込んだ。\n教室では、先生が目の前で手本を見せてくれる。私も先生と同じ手順で切っているつもりだ。【３】、私が切ると、野菜の大きさがどうしてもばらばらになってしまう。長年の経験というのは、簡単にまねできるものではないらしい。\nそれでも、三か月も続けると、少しずつ形になってきた。先週は、初めて家族に肉じゃがを作った。弟に「店の味みたいだ」と言われたときは、うれしくて思わず笑ってしまった。\n次の目標は魚料理だ。これからも、作れる料理を少しずつ増やして【４】と思っている。焦らず、自分のペースで続けていくのが、長続きのこつだろう。',
    explanation: '',
    questions: [
      {
        id: 'n3-grammar-bunsho-003-q1',
        stem: '【１】に入るのはどれか。',
        options: ['しか', 'だけ', 'ばかり', 'こそ'],
        answerIndex: 0,
        explanation:
          '「〜しかない」表「只能…、除此之外別無他法」，「しか」必須與否定形「ない」搭配，「為了健康只能自己做飯」語意通順，故正確。「だけ」「こそ」都不能與「ない」構成這種「別無選擇」的句型；「ばかりない」在文法上不成立。與否定呼應是「しか」的最大特徵。',
        explanationEn:
          '「〜しかない」 means "have no choice but to..."; 「しか」 must pair with the negative 「ない」, so "for my health, the only option is to cook for myself" reads naturally and is correct. 「だけ」 and 「こそ」 cannot combine with 「ない」 to express "no other choice"; 「ばかりない」 is simply ungrammatical. Pairing with a negative is the defining feature of 「しか」.',
      },
      {
        id: 'n3-grammar-bunsho-003-q2',
        stem: '【２】に入るのはどれか。',
        options: ['そこで', 'ところで', 'それとも', 'なぜなら'],
        answerIndex: 0,
        explanation:
          '前句提出問題「馬上每天自炊太難」，後句是針對這個狀況採取的行動「先從基礎學起、報名教室」，要用表「於是、因此（採取行動）」的接續詞「そこで」。「ところで」用於轉換話題；「それとも」用於疑問句的二選一；「なぜなら」須與句尾「〜からだ」搭配說明理由，皆不合。',
        explanationEn:
          'The previous sentence poses a problem — cooking every day right away is too hard — and the next describes the action taken in response: starting from the basics and signing up for the class. This calls for 「そこで」 ("so / thereupon", introducing an action). 「ところで」 changes the topic; 「それとも」 offers an either-or choice in questions; 「なぜなら」 must pair with a sentence-final 「〜からだ」 to give a reason — none fits.',
      },
      {
        id: 'n3-grammar-bunsho-003-q3',
        stem: '【３】に入るのはどれか。',
        options: ['ところが', 'そのうえ', 'つまり', 'すると'],
        answerIndex: 0,
        explanation:
          '前句說「我以為自己照著同樣的步驟切」，後句卻是「切出來大小不一」的意外結果，要用表「可是、沒想到」的逆接接續詞「ところが」。「そのうえ」表累加（而且）；「つまり」用於換句話說；「すると」表「於是接著發生…」的順接，都不合前後句的對比關係。',
        explanationEn:
          'The preceding sentence says "I think I am cutting with the same steps as the teacher", but what follows is the unexpected result that the pieces come out uneven, so the adversative 「ところが」 ("however, contrary to expectation") is required. 「そのうえ」 adds information ("moreover"); 「つまり」 rephrases ("in other words"); 「すると」 marks a sequential development — none expresses this contrast.',
      },
      {
        id: 'n3-grammar-bunsho-003-q4',
        stem: '【４】に入るのはどれか。',
        options: ['いきたい', 'きたい', 'おきたい', 'あげたい'],
        answerIndex: 0,
        explanation:
          '「〜ていく」表從現在朝未來持續發展的變化，與「これからも」呼應，「今後也想把會做的菜逐漸增加下去」故「増やしていきたい」正確。「〜てくる」是朝說話時點靠近的變化，與「これからも」方向相反；「〜ておきたい」表事先準備，語意不合；「増やしてあげたい」的受惠對象不明，語意不通。',
        explanationEn:
          '「〜ていく」 expresses a change continuing from now into the future and echoes 「これからも」 ("from now on as well"), so 「増やしていきたい」 ("want to keep expanding my repertoire") is correct. 「〜てくる」 marks a change moving toward the present, the opposite direction of 「これからも」; 「〜ておきたい」 means doing something in advance, which does not fit; 「増やしてあげたい」 implies doing a favor for some unnamed person and makes no sense.',
      },
    ],
  },
  {
    id: 'n3-grammar-bunsho-004',
    kind: 'passage',
    passageTitle: '各駅停車の窓から',
    passage:
      '毎朝、七時半の急行で会社へ通っている。同じ時間に同じ車両に乗り、会社の最寄り駅に着くまで、ずっとスマホの画面を見ている。通勤の四十分は、ただ我慢するだけの時間だと思っていた。\nある朝、事故で急行が止まってしまった。【１】、私は隣のホームから、普段は乗らない各駅停車に乗ることにした。初めて座る各駅停車の窓からは、いつもと違う景色が見えた。川沿いの桜並木、開店の準備を始めた商店街、校庭に集まる子どもたち。どれも毎日通っている町のはずなのに、初めて見るものばかりだった。\nそれ以来、時間に余裕のある朝は、急行【２】各駅停車に乗ることが増えた。窓の外を眺めていると、季節が少しずつ動いていくのが分かる。桜が散り、あじさいが咲き、いつの間にか商店街の店先に秋の果物が並ぶ。\n風景というのは、ただそこにあるだけでは目に入らない【３】らしい。こちらが見ようとしたとき、初めて見えてくるのだ。変わったのは町ではなく、窓の外に目を向けるようになった私のほうなの【４】。',
    explanation: '',
    questions: [
      {
        id: 'n3-grammar-bunsho-004-q1',
        stem: '【１】に入るのはどれか。',
        options: ['それで', 'それとも', 'ところで', 'ただし'],
        answerIndex: 0,
        explanation:
          '前句「急行因事故停駛」是原因，後句「改搭各站停車的電車」是順勢採取的行動，要用表因果的接續詞「それで」（因此、於是）。「それとも」用於疑問句的二選一；「ところで」用來轉換話題；「ただし」表補充條件或但書，三者都不能連接這種因果關係。',
        explanationEn:
          'The previous sentence — the express train stopped because of an accident — is the cause, and the next sentence — taking the local train instead — is the resulting action, so the causal connective 「それで」 ("and so / therefore") is required. 「それとも」 presents an either-or choice in questions; 「ところで」 changes the topic; 「ただし」 adds a proviso — none of them can link this cause and effect.',
      },
      {
        id: 'n3-grammar-bunsho-004-q2',
        stem: '【２】に入るのはどれか。',
        options: ['ではなく', 'ながら', 'ばかりに', 'どころか'],
        answerIndex: 0,
        explanation:
          '「ＡではなくＢ」表「不是Ａ而是Ｂ」的取捨，「不搭急行、改搭各站停車」語意正確。「ながら」須接動詞ます形或名詞表同時、逆接，「急行ながら」語意不通；「ばかりに」表「就因為…導致壞結果」；「どころか」表「別說…甚至…」的遞進，與單純二選一的語境不合。',
        explanationEn:
          '"A ではなく B" expresses replacement — "not A but B" — so "taking the local train rather than the express" is correct. 「ながら」 attaches to a masu-stem or noun for simultaneity or concession, and 「急行ながら」 makes no sense; 「ばかりに」 means "just because..., a bad result followed"; 「どころか」 escalates ("far from A, even B"), which does not fit this simple either-or choice.',
      },
      {
        id: 'n3-grammar-bunsho-004-q3',
        stem: '【３】に入るのはどれか。',
        options: ['もの', 'こと', 'ところ', 'はず'],
        answerIndex: 0,
        explanation:
          '「〜ものだ」用來敘述事物的一般性質或真理，「風景這種東西，光是存在還進不了眼裡」是筆者領悟到的一般道理，故「もの」正確。「こと」不能用來表這種本質論的斷定；「ところ」表場所或動作階段；「はず」表推測「照理應該」，後面再接「らしい」也不成立。',
        explanationEn:
          '「〜ものだ」 states the general nature of things — "scenery, by its nature, does not register just by being there" is the general truth the writer has realized, so 「もの」 is correct. 「こと」 cannot express this kind of assertion about inherent nature; 「ところ」 denotes a place or the stage of an action; 「はず」 expresses expectation ("should be"), and stacking 「らしい」 after it does not work either.',
      },
      {
        id: 'n3-grammar-bunsho-004-q4',
        stem: '【４】に入るのはどれか。',
        options: ['ではないか', 'ではないでしょうか', 'ものか', 'かしら'],
        answerIndex: 0,
        explanation:
          '這篇隨筆通篇使用だ・である常體，結尾委婉表達自己的結論要用常體的「〜のではないか」。「ではないでしょうか」是敬體，與全文文體不一致，在文章文法題中屬於文體錯誤；「ものか」表「絕不…」的強烈否定，語意相反；「かしら」是口語女性語，與書面隨筆的文體不合。',
        explanationEn:
          'This essay is written throughout in the plain da/dearu style, so the softened closing conclusion must use the plain 「〜のではないか」. 「ではないでしょうか」 is polite style and breaks the register of the passage — a style error in text-grammar questions; 「ものか」 is an emphatic denial ("absolutely not"), the opposite meaning; 「かしら」 is colloquial feminine speech, unsuited to a written essay.',
      },
    ],
  },
]
