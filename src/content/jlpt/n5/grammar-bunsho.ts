import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    kind: 'passage',
    id: 'n5-grammar-bunsho-001',
    passageTitle: 'じこしょうかい',
    passage:
      'わたしの なまえは リンです。たいわん【１】 きました。いま、とうきょうの にほんごがっこうで にほんごを べんきょうして います。かんじは むずかしいです。【２】、べんきょうは とても たのしいです。わたしの しゅみは りょうりです。やすみの ひは ともだちと いっしょに りょうりを 【３】。やまも すきです。なつやすみに ともだちと ふじさんに 【４】です。どうぞ よろしく おねがいします。',
    explanation: '',
    questions: [
      {
        id: 'n5-grammar-bunsho-001-q1',
        stem: '【１】に入るのはどれですか。',
        options: ['から', 'まで', 'を', 'で'],
        answerIndex: 0,
        explanation:
          '表示移動的起點用助詞「から」，「たいわんから きました」是「從台灣來」。「まで」表示終點（到～為止），方向相反；「を」接他動詞的受詞，不能接「きます」；「で」表手段或地點，「たいわんで きました」語意不通。',
        explanationEn:
          'The starting point of movement is marked with 「から」: 「たいわんから きました」 means "I came from Taiwan." 「まで」 marks the end point (as far as ~) — the opposite direction; 「を」 marks a transitive verb\'s object and cannot go with 「きます」; 「で」 marks a means or place, so 「たいわんで きました」 makes no sense.',
      },
      {
        id: 'n5-grammar-bunsho-001-q2',
        stem: '【２】に入るのはどれですか。',
        options: ['でも', 'だから', 'それから', 'たとえば'],
        answerIndex: 0,
        explanation:
          '前句「漢字很難」與後句「學習很快樂」語意相反，要用逆接的接續詞「でも」（可是）。「だから」（所以）是順接因果，前後矛盾；「それから」（接著）表先後順序；「たとえば」（例如）用來舉例，都不合此處文脈。',
        explanationEn:
          'The previous sentence says kanji are difficult, but the next says studying is great fun — a contrast, so the connector must be 「でも」 (but). 「だから」 (so) expresses cause and result, which contradicts the flow; 「それから」 (and then) shows a sequence of events; 「たとえば」 (for example) introduces examples — none fit this context.',
      },
      {
        id: 'n5-grammar-bunsho-001-q3',
        stem: '【３】に入るのはどれですか。',
        options: ['つくります', 'つくって', 'つくり', 'つくりに'],
        answerIndex: 0,
        explanation:
          '句尾要用ます形結句，「りょうりを つくります」（做菜）才是完整的一句話。「つくって」是て形，用來連接後面的句子，不能直接以「。」結尾；「つくり」是ます形去掉ます的中止形；「つくりに」後面必須接「いきます」等移動動詞，單獨放句尾都不成立。',
        explanationEn:
          'The sentence must end with the polite masu-form: 「りょうりを つくります」 (I cook) is a complete sentence. 「つくって」 is the te-form, which links to a following clause and cannot end with 「。」; 「つくり」 is only the masu-stem; 「つくりに」 must be followed by a motion verb such as 「いきます」 — none of them can stand at the end of a sentence.',
      },
      {
        id: 'n5-grammar-bunsho-001-q4',
        stem: '【４】に入るのはどれですか。',
        options: ['のぼりたい', 'のぼりほしい', 'のぼるたい', 'のぼって'],
        answerIndex: 0,
        explanation:
          '希望做某事用「動詞ます形去ます＋たい」，「のぼります」→「のぼりたい」（想爬）。「ほしい」只能接在名詞＋が後面表示想要東西，不能直接接動詞ます形；「のぼるたい」誤用辭書形接たい；「のぼって」是て形，接「です」結尾不成句。',
        explanationEn:
          'To say you want to do something, use the masu-stem plus 「たい」: 「のぼります」 becomes 「のぼりたい」 (want to climb). 「ほしい」 can only follow "noun + が" to express wanting a thing, never a verb stem; 「のぼるたい」 wrongly attaches たい to the dictionary form; 「のぼって」 is the te-form and cannot end the sentence with 「です」.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n5-grammar-bunsho-002',
    passageTitle: 'わたしの かぞく',
    passage:
      'わたしの かぞくは 四人です。ちちと ははと あにが います。ちちは ぎんこう【１】 はたらいて います。まいにち いそがしいですが、にちようびは うちに います。ははは りょうりが じょうずです。まいばん おいしい ばんごはんを つくります。あには だいがくせいです。サッカー【２】 じょうずです。わたしは あに【３】 よく サッカーを します。にちようびは かぞくで こうえんへ 行きます。こうえんで おべんとうを 【４】、それから みんなで あそびます。わたしは かぞくが だいすきです。',
    explanation: '',
    questions: [
      {
        id: 'n5-grammar-bunsho-002-q1',
        stem: '【１】に入るのはどれですか。',
        options: ['で', 'に', 'を', 'へ'],
        answerIndex: 0,
        explanation:
          '「はたらきます」是在某地點進行的動作，動作發生的場所用「で」，「ぎんこうで はたらいて います」（在銀行工作）。「に」表存在場所或到達點，和「はたらく」搭配是常見誤用；「を」表受詞或通過點；「へ」表移動方向，後面要接「いきます」等移動動詞，都不對。',
        explanationEn:
          '「はたらきます」 is an action carried out at a place, and the place of an action is marked with 「で」: 「ぎんこうで はたらいて います」 means "works at a bank." Using 「に」 with 「はたらく」 is a common mistake — 「に」 marks existence or a destination; 「を」 marks an object; 「へ」 shows direction and needs a motion verb like 「いきます」.',
      },
      {
        id: 'n5-grammar-bunsho-002-q2',
        stem: '【２】に入るのはどれですか。',
        options: ['が', 'を', 'に', 'へ'],
        answerIndex: 0,
        explanation:
          '「じょうずです」（擅長）是な形容詞，擅長的對象要用「が」標示，固定句型是「～が じょうずです」。「を」接的是他動詞的受詞，「じょうず」不是動詞，不能用「を」；「に」「へ」分別表對象點與方向，也都不能和「じょうず」搭配。',
        explanationEn:
          '「じょうずです」 (to be good at) is a na-adjective, and what you are good at is marked with 「が」 — the set pattern is 「～が じょうずです」. 「を」 attaches to the object of a transitive verb, but 「じょうず」 is not a verb, so 「を」 is impossible; 「に」 and 「へ」 mark a target point and a direction, and neither can combine with 「じょうず」.',
      },
      {
        id: 'n5-grammar-bunsho-002-q3',
        stem: '【３】に入るのはどれですか。',
        options: ['と', 'を', 'が', 'へ'],
        answerIndex: 0,
        explanation:
          '表示「和某人一起做動作」的對象用「と」，「あにと サッカーを します」是「和哥哥踢足球」。「を」在同一句已經用在「サッカーを」，而且人不是受詞；「が」是主格助詞，放這裡會變成兩個主語；「へ」表移動方向，接人不合理，皆錯。',
        explanationEn:
          'The person you do an action together with is marked with 「と」: 「あにと サッカーを します」 means "plays soccer with my older brother." 「を」 is already used in 「サッカーを」, and a person is not the object here; 「が」 is the subject particle and would create a second subject; 「へ」 shows direction and cannot attach to a person — all wrong.',
      },
      {
        id: 'n5-grammar-bunsho-002-q4',
        stem: '【４】に入るのはどれですか。',
        options: ['たべて', 'たべます', 'たべた', 'たべたい'],
        answerIndex: 0,
        explanation:
          '句子後面還有「それから みんなで あそびます」，前後兩個動作相連要用て形「たべて」（吃完便當，然後大家一起玩）。「たべます」是結句的形，不能用「、」直接連下一句；「たべた」是常體過去形，和全文です・ます體不合，也不能這樣連接；「たべたい」表願望，接續與語意都不通。',
        explanationEn:
          'The sentence continues with 「それから みんなで あそびます」, so the two actions must be linked by the te-form 「たべて」 (eat the boxed lunch, and then everyone plays). 「たべます」 is a sentence-ending form and cannot connect with 「、」; 「たべた」 is the plain past, which breaks the polite です・ます style and cannot link this way; 「たべたい」 expresses a wish and fits neither the grammar nor the meaning.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n5-grammar-bunsho-003',
    passageTitle: 'わたしの いちにち',
    passage:
      'わたしは まいあさ 六じに おきます。かおを あらってから、あさごはんを たべます。それから、でんしゃ【１】 がっこうへ いきます。がっこうは 九じから 三じまでです。じゅぎょうの あと、うちへ かえって、おんがくを 【２】 しゅくだいを します。しゅくだいは まいにち 一じかん【３】 かかります。ばんごはんの あとで、かぞくと テレビを 見ます。それから、おふろに はいります。よるは 十じに ねます。ねる【４】、はを みがきます。あしたも がんばります。',
    explanation: '',
    questions: [
      {
        id: 'n5-grammar-bunsho-003-q1',
        stem: '【１】に入るのはどれですか。',
        options: ['で', 'に', 'を', 'と'],
        answerIndex: 0,
        explanation:
          '表示交通工具、手段的助詞用「で」，「でんしゃで がっこうへ いきます」是「搭電車去學校」。「に」表到達點或存在場所，句中到達點已由「がっこうへ」表示，「でんしゃに いきます」語意不通；「を」表受詞或通過點；「と」表一起行動的對象（人），電車不是人，皆錯。',
        explanationEn:
          'The means of transportation is marked with 「で」: 「でんしゃで がっこうへ いきます」 means "goes to school by train." 「に」 marks a destination or a place of existence, but the destination is already expressed by 「がっこうへ」, and 「でんしゃに いきます」 makes no sense; 「を」 marks an object or a path; 「と」 marks a person you act with, and a train is not a person.',
      },
      {
        id: 'n5-grammar-bunsho-003-q2',
        stem: '【２】に入るのはどれですか。',
        options: ['ききながら', 'きくながら', 'きいてながら', 'きいたながら'],
        answerIndex: 0,
        explanation:
          '「〜ながら」表示兩個動作同時進行，接續是「動詞ます形去ます＋ながら」，「ききます」→「ききながら」（一邊聽音樂一邊寫作業）。「きくながら」誤用辭書形接續；「きいてながら」誤用て形；「きいたながら」誤用た形，接續全都不成立。',
        explanationEn:
          '「〜ながら」 expresses two actions happening at the same time and attaches to the masu-stem: 「ききます」 becomes 「ききながら」 (doing homework while listening to music). 「きくながら」 wrongly uses the dictionary form; 「きいてながら」 wrongly uses the te-form; 「きいたながら」 wrongly uses the ta-form — none of those connections exist.',
      },
      {
        id: 'n5-grammar-bunsho-003-q3',
        stem: '【３】に入るのはどれですか。',
        options: ['ぐらい', 'ごろ', 'しか', 'までに'],
        answerIndex: 0,
        explanation:
          '表示大約的「時間長度」用「ぐらい」，「一じかんぐらい かかります」是「大約要花一小時」。「ごろ」只能接時刻等時間點（如「七じごろ」），不能接「一じかん」這種時間量；「しか」後面必須接否定形，「かかります」是肯定形；「までに」表期限，接時間量也不通。',
        explanationEn:
          'An approximate length of time takes 「ぐらい」: 「一じかんぐらい かかります」 means "it takes about one hour." 「ごろ」 attaches only to points in time such as 「七じごろ」, never to an amount of time like 「一じかん」; 「しか」 must be followed by a negative, but 「かかります」 is affirmative; 「までに」 expresses a deadline and cannot follow a duration either.',
      },
      {
        id: 'n5-grammar-bunsho-003-q4',
        stem: '【４】に入るのはどれですか。',
        options: ['まえに', 'あとで', 'てから', 'ながら'],
        answerIndex: 0,
        explanation:
          '「動詞辞書形＋まえに」表示「做～之前」，「ねるまえに、はを みがきます」是「睡覺前刷牙」，接續正確且合乎生活常理。「あとで」要接た形或「名詞の」（如「ねたあとで」），不能接辞書形；「てから」要接て形（「ねてから」）；「ながら」要接ます形去ます（「ねながら」），接在「ねる」後面都不成立。',
        explanationEn:
          '"Dictionary form + まえに" means "before doing ~": 「ねるまえに、はを みがきます」 means "I brush my teeth before going to bed," which is both grammatical and natural. 「あとで」 needs the ta-form or "noun + の" (as in 「ねたあとで」), not the dictionary form; 「てから」 needs the te-form (「ねてから」); 「ながら」 needs the masu-stem (「ねながら」) — none of them can follow 「ねる」.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n5-grammar-bunsho-004',
    passageTitle: 'すきな たべもの',
    passage:
      'わたしの いちばん すきな たべものは カレーです。わたしは カレーが ラーメン【１】 すきです。ははの カレーは やさいが たくさん はいって いて、とても おいしいです。せんしゅうの にちようび、はじめて ひとりで カレーを 【２】。すこし からかったですが、ちちは 「おいしいよ」と 言いました。とても うれしかったです。らいしゅう、ともだちと いっしょに カレーを つくる【３】です。でも、ともだちは からい たべものが 【４】。だから、あまい カレーを つくります。',
    explanation: '',
    questions: [
      {
        id: 'n5-grammar-bunsho-004-q1',
        stem: '【１】に入るのはどれですか。',
        options: ['より', 'ほど', 'だけ', 'とか'],
        answerIndex: 0,
        explanation:
          '比較句「ＡはＢより すきです」表示「比起Ｂ更喜歡Ａ」，「カレーが ラーメンより すきです」是「比起拉麵更喜歡咖哩」。「ほど」要和句尾否定搭配（「〜ほど…ない」），這裡句尾是肯定；「だけ」（只有）放在這裡語意不通；「とか」用來舉例並列，不能表比較。',
        explanationEn:
          'The comparison 「ＡはＢより すきです」 means liking A more than B: 「カレーが ラーメンより すきです」 means "I like curry more than ramen." 「ほど」 must pair with a negative ending (「〜ほど…ない」), but this sentence ends in the affirmative; 「だけ」 (only) makes no sense in this position; 「とか」 lists examples and cannot express a comparison.',
      },
      {
        id: 'n5-grammar-bunsho-004-q2',
        stem: '【２】に入るのはどれですか。',
        options: ['つくりました', 'つくります', 'つくって', 'つくるでした'],
        answerIndex: 0,
        explanation:
          '句首有「せんしゅうの にちようび」（上週日），是過去的事，句尾要用ます形的過去式「つくりました」。「つくります」是非過去形，和「せんしゅう」矛盾；「つくって」是て形，不能直接以「。」結句；「つくるでした」把辞書形直接接「でした」，是不存在的活用，皆錯。',
        explanationEn:
          'The sentence begins with 「せんしゅうの にちようび」 (last Sunday), a past event, so the verb must be the polite past 「つくりました」 (made). 「つくります」 is non-past and contradicts 「せんしゅう」; 「つくって」 is the te-form and cannot end a sentence with 「。」; 「つくるでした」 attaches 「でした」 to the dictionary form — a conjugation that does not exist.',
      },
      {
        id: 'n5-grammar-bunsho-004-q3',
        stem: '【３】に入るのはどれですか。',
        options: ['つもり', 'たい', 'ほしい', 'まえ'],
        answerIndex: 0,
        explanation:
          '「動詞辞書形＋つもりです」表示打算做某事，「つくるつもりです」是「打算（和朋友）一起做咖哩」，和句首的「らいしゅう」（下週）相合。「たい」要接ます形去ます（「つくりたい」），不能接辞書形；「ほしい」表想要東西，接「名詞＋が」，不能接動詞辞書形；「つくるまえです」（在做之前）語意不通。',
        explanationEn:
          '"Dictionary form + つもりです" expresses a plan or intention: 「つくるつもりです」 means "I plan to make curry (with my friend)," which matches 「らいしゅう」 (next week). 「たい」 must attach to the masu-stem (「つくりたい」), not the dictionary form; 「ほしい」 is for wanting things and follows "noun + が", never a verb; 「つくるまえです」 (it is before making) makes no sense here.',
      },
      {
        id: 'n5-grammar-bunsho-004-q4',
        stem: '【４】に入るのはどれですか。',
        options: ['すきじゃありません', 'すきくないです', 'すきないです', 'すきじゃありますん'],
        answerIndex: 0,
        explanation:
          '「すき」是な形容詞，否定形是「すきじゃありません」（或「すきではありません」），後句「だから、あまい カレーを つくります」（所以做甜咖哩）也印證朋友「不喜歡辣的食物」。「すきくないです」誤把な形容詞當い形容詞變化；「すきないです」接續不成立；「すきじゃありますん」是不存在的形，皆錯。',
        explanationEn:
          '「すき」 is a na-adjective, so its negative is 「すきじゃありません」 (or 「すきではありません」); the following line 「だから、あまい カレーを つくります」 (so I will make a sweet curry) confirms the friend does not like spicy food. 「すきくないです」 wrongly conjugates it as an i-adjective; 「すきないです」 is not a valid connection; 「すきじゃありますん」 is not a real form at all.',
      },
    ],
  },
]
