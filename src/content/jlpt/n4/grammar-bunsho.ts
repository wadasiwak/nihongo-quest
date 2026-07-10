import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    kind: 'passage',
    id: 'n4-grammar-bunsho-001',
    passageTitle: '日本に 来て 半年',
    passage:
      '私は ベトナムから 来た 留学生です。日本に 来て、もう 半年に なりました。来た ばかりの ころは、日本語が ぜんぜん 話せませんでした。【１】、今は 店の 人と 少し 話せるように なりました。\n先週、学校で スピーチ大会が ありました。私は 前の 日に 何度も れんしゅうして おきました。でも、みんなの 前に 立った とき、きんちょうして ことばを わすれて しまいました。【２】 とき、友だちが 大きな 声で 私の 名前を よんで くれました。それで 元気が 出て、さいごまで 話す ことが できました。\n来年、私は 大学の 試験【３】 受ける つもりです。もし 合格【４】、りょうしんを 日本に よんで、いっしょに 京都へ 行きたいです。その 日まで、毎日 がんばろうと 思います。',
    explanation: '',
    questions: [
      {
        id: 'n4-grammar-bunsho-001-q1',
        stem: '【１】に 入るのは どれですか。',
        options: ['でも', 'だから', 'それに', 'たとえば'],
        answerIndex: 0,
        explanation:
          '前句說「完全不會說日語」，後句說「現在能和店員說一點了」，前後語意相反，要用逆接接續詞「でも」（可是）。「だから」（所以）是順接因果，接在這裡前後矛盾；「それに」（而且）用於追加同方向的內容；「たとえば」（例如）用來舉例，都不合這裡的文脈。',
        explanationEn:
          'The previous sentence says the writer couldn\'t speak Japanese at all, while the next says they can now talk a little with shop staff — opposite ideas, so the contrastive conjunction 「でも」 (but) is needed. 「だから」 (so/therefore) marks a cause-and-result link and would be contradictory here; 「それに」 (moreover) adds information in the same direction; 「たとえば」 (for example) introduces examples — none of them fit this context.',
      },
      {
        id: 'n4-grammar-bunsho-001-q2',
        stem: '【２】に 入るのは どれですか。',
        options: ['その', 'これ', 'どの', 'あそこ'],
        answerIndex: 0,
        explanation:
          '這裡指回前一句剛描述的「忘詞的那個時刻」，承接上文用指示詞「その」，「そのとき」＝「就在那時」。「これ」是代名詞，不能直接修飾名詞「とき」；「どの」是疑問詞，這裡不是疑問句；「あそこ」指遠處的場所，也不能接「とき」。',
        explanationEn:
          'This points back to the moment just described — freezing up and forgetting the words — so the demonstrative 「その」, which refers to what was just mentioned, is used: 「そのとき」 means "at that moment." 「これ」 is a pronoun and cannot directly modify the noun 「とき」; 「どの」 is a question word, but this isn\'t a question; 「あそこ」 refers to a faraway place and can\'t attach to 「とき」 either.',
      },
      {
        id: 'n4-grammar-bunsho-001-q3',
        stem: '【３】に 入るのは どれですか。',
        options: ['を', 'が', 'に', 'で'],
        answerIndex: 0,
        explanation:
          '「受けます」（報考、參加考試）是他動詞，受詞「試験」要用「を」標示：「試験を受ける」。「が」是主格助詞，會讓「試験」變成主語；「に」用於「試験に合格する」「試験に受かる」等句型，和他動詞「受ける」不搭；「で」表場所或手段，語意不通。',
        explanationEn:
          '「受けます」 (take an exam) is a transitive verb, so its object 「試験」 is marked with 「を」: 「試験を受ける」. 「が」 is the subject marker and would turn 「試験」 into the subject; 「に」 belongs to patterns like 「試験に合格する」 and 「試験に受かる」, not to the transitive 「受ける」; 「で」 marks a place or a means, which makes no sense here.',
      },
      {
        id: 'n4-grammar-bunsho-001-q4',
        stem: '【４】に 入るのは どれですか。',
        options: ['したら', 'しては', 'されたら', 'させたら'],
        answerIndex: 0,
        explanation:
          '表示假定條件用「〜たら」：「合格したら」＝「如果考上的話」，正好和句首的「もし」呼應。「しては」多用於「〜てはいけない」等禁止句型，不能接在「もし」後面表條件；「されたら」是受身形，「合格」不是被別人做的動作；「させたら」是使役形，這裡沒有「讓誰合格」的意思。',
        explanationEn:
          'A hypothetical condition uses 「〜たら」: 「合格したら」 means "if I pass," matching the 「もし」 at the start of the sentence. 「しては」 mostly appears in prohibition patterns like 「〜てはいけない」 and can\'t follow 「もし」 to express a condition; 「されたら」 is passive, but passing isn\'t something done to you by someone else; 「させたら」 is causative, and there is no sense of making anyone pass here.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n4-grammar-bunsho-002',
    passageTitle: '田中さんへの 手紙',
    passage:
      '田中さん、お元気ですか。東京は 少しずつ すずしく なって きました。\n私は 先月、学校の 近くに 引っこしを しました。新しい へやは 前の へや【１】 広くて、駅にも 近いので、とても 便利です。こんど ぜひ あそびに 来て ください。\n学校の 生活にも なれました。先週は 先生に 作文を 【２】、とても うれしかったです。これからも 日本語の 勉強を がんばろうと 思って います。\n【３】、田中さんが 貸して くれた 本は、もうすぐ 読み終わります。とても おもしろいので、来週、ゆうびんきょくから 送りますね。\n来月の 連休には、北海道へ あそびに 行く つもりです。田中さんは 前に「北海道は とても 寒い」と 言って いましたね。【４】 聞いて、あたたかい コートを 買って おきました。会える 日を たのしみに して います。\nでは、へんじを 待って います。\nリン',
    explanation: '',
    questions: [
      {
        id: 'n4-grammar-bunsho-002-q1',
        stem: '【１】に 入るのは どれですか。',
        options: ['より', 'ほど', 'でも', 'まで'],
        answerIndex: 0,
        explanation:
          '這裡在比較新房間和以前的房間，比較的基準用「より」：「前のへやより広い」＝「比以前的房間大」。「ほど」要用在否定句「〜ほど…ない」（沒有～那麼…），後面接肯定的「広くて」不成立；「でも」表「連～也」或舉例；「まで」表範圍終點，都不能表示比較基準。',
        explanationEn:
          'The new room is being compared with the old one, and the standard of comparison takes 「より」: 「前のへやより広い」 means "bigger than the old room." 「ほど」 must appear in the negative pattern 「〜ほど…ない」 (not as... as), so it can\'t be followed by the affirmative 「広くて」; 「でも」 means "even" or gives an example; 「まで」 marks the end of a range — neither can mark a standard of comparison.',
      },
      {
        id: 'n4-grammar-bunsho-002-q2',
        stem: '【２】に 入るのは どれですか。',
        options: ['ほめられて', 'ほめて', 'ほめさせて', 'ほめたくて'],
        answerIndex: 0,
        explanation:
          '主語是「我」，動作者用「先生に」標示，是受身句：「先生に作文をほめられて」＝「作文被老師稱讚了」。「ほめて」是主動形，變成我去稱讚，和「先生に」矛盾；「ほめさせて」是使役形（讓人稱讚）；「ほめたくて」表示自己想稱讚別人，接在這裡語意都不通。',
        explanationEn:
          'The subject is the writer and the doer is marked with 「先生に」, so this is a passive sentence: 「先生に作文をほめられて」 means "my essay was praised by the teacher." 「ほめて」 is the active form and would mean I did the praising, contradicting 「先生に」; 「ほめさせて」 is causative (make someone praise); 「ほめたくて」 means wanting to praise someone yourself — neither makes sense here.',
      },
      {
        id: 'n4-grammar-bunsho-002-q3',
        stem: '【３】に 入るのは どれですか。',
        options: ['それから', 'けれども', 'つまり', 'それとも'],
        answerIndex: 0,
        explanation:
          '前面在報告學校生活，這裡要追加另一件事（借的書快看完了），用表示追加、轉入下一個話題的「それから」（還有）最自然。「けれども」（不過）是逆接，前後沒有相反的內容；「つまり」（也就是說）用於換句話說；「それとも」（還是）用於疑問句的二選一，都不合文脈。',
        explanationEn:
          'The letter has been reporting on school life and now adds a separate item (the borrowed book is almost finished), so 「それから」 (also/and then), which adds information and moves to the next topic, is the most natural. 「けれども」 (however) is contrastive, but there is no opposition here; 「つまり」 (in other words) rephrases something; 「それとも」 (or) presents a choice in questions — none fit the context.',
      },
      {
        id: 'n4-grammar-bunsho-002-q4',
        stem: '【４】に 入るのは どれですか。',
        options: ['そう', 'こう', 'ああ', 'どう'],
        answerIndex: 0,
        explanation:
          '指前一句引用的田中さん說過的話（北海道很冷），承接對方剛說的內容用「そう」：「そう聞いて」＝「聽說是那樣」。「こう」指自己接下來要說或眼前的內容；「ああ」指說話雙方都遠離的事物，多用於感嘆或回憶；「どう」是疑問詞，這裡不是疑問句，都不對。',
        explanationEn:
          'This refers to what 田中さん was quoted as saying in the previous sentence (Hokkaido is very cold); for something the other person said, 「そう」 is used: 「そう聞いて」 means "hearing that." 「こう」 points to what the speaker is about to say or something right at hand; 「ああ」 points to something distant from both people, often in exclamations or memories; 「どう」 is a question word, but this isn\'t a question — all three are wrong.',
      },
    ],
  },
]
