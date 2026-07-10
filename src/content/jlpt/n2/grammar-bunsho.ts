import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    id: 'n2-grammar-bunsho-001',
    kind: 'passage',
    passageTitle: '星の数と自分の舌',
    passage:
      '飲食店を選ぶとき、まずレビューサイトの点数を確かめるという人は多いだろう。私自身、初めての町では点数の高い店を探してしまう。数字は分かりやすく、失敗したくないという心理にこたえてくれるからである。【１】、その便利な数字が、私たちから何かを奪ってはいないだろうか。\nそもそも点数とは、他人の感想の平均にすぎない。それなのに、失敗を避けたいと思う【２】、私たちは平均点の高い店ばかりを選び、自分の好みと向き合う機会を手放しているのではないか。先日、点数の低い小さな食堂に偶然入ったところ、忘れられないほどうまい定食に出会った。聞けば、客の大半が常連の年配客で、ネットに感想を書く人がほとんどいないのだという。数字に表れない価値は、確かに存在するのである。\n友人にこの話をすると、「それでも知らない店に入るのは勇気がいる」と言われた。【３】気持ちは分からなくもない。限られた時間と金で外食する以上、確実な店を選びたくなるのは当然だ。だが、他人の評価をなぞるだけの食事を重ねるうちに、自分の舌で判断する力は少しずつ衰えていくだろう。\n点数は参考にとどめ、最後は自分で決める。当たり前のようで難しいこの姿勢を、【４】。',
    explanation: '',
    questions: [
      {
        id: 'n2-grammar-bunsho-001-q1',
        stem: '【１】に入るのはどれか。',
        options: ['しかし', 'したがって', 'つまり', 'なぜなら'],
        answerIndex: 0,
        explanation:
          '前句肯定數字的便利（回應了不想失敗的心理），後句筆鋒一轉，質疑「這便利的數字是否正從我們身上奪走什麼」，前後是逆接關係，用「しかし」。「したがって」表因果、「つまり」表換言；「なぜなら」用於補述理由，且須與句尾「〜からだ」呼應，皆不合此處的轉折語境。',
        explanationEn:
          'The preceding sentence affirms how convenient scores are (they answer our wish not to fail), while the next sentence pivots to question whether those convenient numbers are robbing us of something — a contrastive relation, so 「しかし」 fits. 「したがって」 marks consequence and 「つまり」 rephrasing; 「なぜなら」 introduces a reason and must pair with a sentence-final 「〜からだ」 — none suits this turn in the argument.',
      },
      {
        id: 'n2-grammar-bunsho-001-q2',
        stem: '【２】に入るのはどれか。',
        options: ['あまり', 'あげく', 'くせに', 'どころか'],
        answerIndex: 0,
        explanation:
          '「動詞辭書形＋あまり」表「因為過度…而導致（不理想的結果）」：因為太想避免失敗，結果淨挑平均分數高的店、放棄面對自己喜好的機會。「あげく」須接た形（考えたあげく），此處接續錯誤；「くせに」表「明明…卻」，前後句並無矛盾關係；「どころか」表「別說…甚至」，語意不通。',
        explanationEn:
          'Dictionary form + 「あまり」 means "out of an excess of..., (with an undesirable result)": wanting so badly to avoid failure, we pick only high-scoring restaurants and give up the chance to face our own tastes. 「あげく」 must follow the ta-form (as in 「考えたあげく」), so the connection is wrong here; 「くせに」 ("even though") requires a contradiction between the clauses, which there is not; 「どころか」 ("far from...") makes no sense in this context.',
      },
      {
        id: 'n2-grammar-bunsho-001-q3',
        stem: '【３】に入るのはどれか。',
        options: ['その', 'この', 'あの', 'どの'],
        answerIndex: 0,
        explanation:
          '「その気持ち」承接前句友人所說「進不認識的店需要勇氣」——指剛引用的「對方發言內容」，用「そ」系指示詞是文章中的標準用法。「この」用於筆者自身正在論述、展開的事物；「あの」指說寫雙方共同記憶中的遙遠事物，不能指前文；「どの」是疑問詞，此處並非疑問句。',
        explanationEn:
          '「その気持ち」 picks up what the friend has just said — that walking into an unknown restaurant takes courage. Referring to content just quoted from the other person calls for the そ-series demonstrative, the standard usage in written Japanese. 「この」 is for something the writer is currently developing; 「あの」 points to something distant that both parties share in memory and cannot refer back to the previous sentence; 「どの」 is interrogative, but this is not a question.',
      },
      {
        id: 'n2-grammar-bunsho-001-q4',
        stem: '【４】に入るのはどれか。',
        options: ['忘れずにいたいものだ', '忘れずにいたいものです', '忘れないでください', '忘れずにいましょう'],
        answerIndex: 0,
        explanation:
          '本文通篇是だ・である體的評論文，結尾表達心願的「〜たいものだ」（真希望能…）也必須維持常體。「ものです」「〜ないでください」「〜ましょう」都是敬體表現，與全文文體不一致；文章文法題中，文體不統一即屬錯誤選項。',
        explanationEn:
          'The essay is written throughout in the plain だ・である style, so the closing wish 「〜たいものだ」 ("I do hope to keep...") must also stay in plain style. 「ものです」, 「〜ないでください」, and 「〜ましょう」 are all polite-style expressions that clash with the register of the whole text; in text-grammar questions, a break in register is what marks an option as wrong.',
      },
    ],
  },
  {
    id: 'n2-grammar-bunsho-002',
    kind: 'passage',
    passageTitle: '「大丈夫です」の落とし穴',
    passage:
      '先日、後輩に急ぎの仕事を頼んだところ、「大丈夫です」という返事が返ってきました。てっきり引き受けてくれたものと思い、私は安心して任せていました。【１】、締め切りの前日になって、後輩は「あのとき、お断りしたつもりでした」と言うのです。彼の「大丈夫です」は、「私がやらなくても大丈夫」という、遠慮を含んだ断りの言葉だったのでした。\n「大丈夫」は本来、「問題がない」という意味です。それが近ごろでは、承諾にも断りにも使われるようになりました。言葉そのものは同じですから、受け取る側は、前後の文脈や声の調子から意味を推測【２】を得ません。顔の見えないメールでのやりとりなら、なおさらです。\n友人からの誘いに対する「大丈夫です」も同じです。行けるのか、行けないのか、【３】の意味なのか分からず、返事に困った経験は、誰にでもあるのではないでしょうか。あいまいな言い方は相手への気づかいでもありますが、仕事の場では、小さな行き違いが大きなトラブルを招きかねません。\n言葉が時代とともに変わっていくのは自然なことです。それでも、言葉は相手に伝わってこそ意味があります。誤解を防ぐために、まずは自分から、あいまいな「大丈夫です」を【４】。',
    explanation: '',
    questions: [
      {
        id: 'n2-grammar-bunsho-002-q1',
        stem: '【１】に入るのはどれか。',
        options: ['ところが', 'ですから', 'そのうえ', 'つまり'],
        answerIndex: 0,
        explanation:
          '前句說「我放心地把工作交給他」，後句卻是出乎意料的發展——截止前一天對方才說「當時是想拒絕」。表示與預期相反的意外轉折，用「ところが」最恰當。「ですから」表因果、「そのうえ」表累加、「つまり」表換言，都無法銜接這種出乎意料的逆轉。',
        explanationEn:
          'The previous sentence says the writer entrusted the work with peace of mind, but what follows is an unexpected turn — only the day before the deadline does the junior colleague reveal he had meant to decline. 「ところが」 is precisely the connective for such a contrary-to-expectation development. 「ですから」 marks consequence, 「そのうえ」 addition, and 「つまり」 rephrasing — none can introduce this surprising reversal.',
      },
      {
        id: 'n2-grammar-bunsho-002-q2',
        stem: '【２】に入るのはどれか。',
        options: ['せざる', 'しざる', 'するざる', 'させざる'],
        answerIndex: 0,
        explanation:
          '「〜ざるを得ない」表「不得不…」，接動詞ない形語幹；「する」的文語否定形是「せず」，故正確接續為「せざるを得ない」→「推測せざるを得ません」。「しざる」「するざる」接續錯誤，日文中不存在這種形；「させざる」是使役形，語意變成「不得不讓人推測」，不合文意。',
        explanationEn:
          '「ざるを得ない」 ("cannot help but...") attaches to the negative stem, and the classical negative stem of 「する」 is 「せ」, so the correct connection is 「せざるを得ない」 → 「推測せざるを得ません」. 「しざる」 and 「するざる」 are conjugations that simply do not exist in Japanese; 「させざる」 is causative and would mean "cannot help but make someone guess," which does not fit the passage.',
      },
      {
        id: 'n2-grammar-bunsho-002-q3',
        stem: '【３】に入るのはどれか。',
        options: ['どちら', 'こちら', 'そちら', 'あちら'],
        answerIndex: 0,
        explanation:
          '前句並列了「行けるのか、行けないのか」兩種可能，問「是兩者之中哪一個意思」要用表二選一疑問的「どちら」。「こちら」「そちら」「あちら」是指示特定方向或事物的指示詞，沒有「兩者擇一」的疑問功能，代入後句意不通。',
        explanationEn:
          'The previous sentence lines up two possibilities, 「行けるのか、行けないのか」, so asking "which of the two meanings is it?" requires 「どちら」, the either-or interrogative. 「こちら」, 「そちら」, and 「あちら」 are demonstratives pointing to specific directions or things and have no "choose between two" function; inserted here they make the sentence incoherent.',
      },
      {
        id: 'n2-grammar-bunsho-002-q4',
        stem: '【４】に入るのはどれか。',
        options: ['やめてみませんか', 'やめてみてはどうだろうか', 'やめてみよう', 'やめるべきだ'],
        answerIndex: 0,
        explanation:
          '本文通篇是です・ます體的隨筆，結尾向讀者提出建議時也必須維持敬體，「〜てみませんか」（要不要試著…）正確。「〜てはどうだろうか」「〜てみよう」「〜べきだ」都是常體表現，與全文敬體不一致，在文章文法題中屬於文體錯誤。',
        explanationEn:
          'The piece is a personal essay written throughout in the polite です・ます style, so the closing suggestion to readers must also stay polite: 「やめてみませんか」 ("why not try giving it up?") is correct. 「〜てはどうだろうか」, 「〜てみよう」, and 「〜べきだ」 are all plain-style endings that break the register of the text — in text-grammar questions, inconsistent style makes an option wrong.',
      },
    ],
  },
]
