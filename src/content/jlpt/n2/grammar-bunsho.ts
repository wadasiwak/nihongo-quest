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
  {
    id: 'n2-grammar-bunsho-003',
    kind: 'passage',
    passageTitle: 'つながりすぎる時代の孤独',
    passage:
      'スマートフォンを開けば、友人たちの近況が次々と流れてくる。旅行の写真、昼食の一皿、子どもの運動会。SNSのおかげで、私たちはかつてないほど多くの人と「つながって」いる。【１】、孤独を感じる人はむしろ増えているという調査結果がある。つながる手段はこれほど増えたのに、である。\nなぜだろうか。画面の向こうの友人たちは、いつも楽しそうに見える。それに比べて自分の毎日は平凡でつまらない——そう感じた経験は誰にでもあるだろう。だが、人がSNSに載せるのは、生活の中の特別な一瞬だけである。他人の「選ばれた場面」と自分の日常を並べて落ち込んでしまうのは、比べる相手を間違えている証拠【２】。\nまた、SNS上のやりとりは手軽である【３】、どうしても一つ一つの関係は浅くなりがちだ。「いいね」を押すだけのつながりは、数百人分集めても、深夜に悩みを打ち明けられる一人の友人には及ばない。\n道具が悪いのではない。要は使い方である。表面的なつながりの数を追うのをやめ、大切にしたい相手と時間をかけて向き合う。孤独から抜け出す糸口は、案外そんなところにある【４】。',
    explanation: '',
    questions: [
      {
        id: 'n2-grammar-bunsho-003-q1',
        stem: '【１】に入るのはどれか。',
        options: ['それにもかかわらず', 'それゆえ', 'すなわち', 'ただし'],
        answerIndex: 0,
        explanation:
          '前句說「我們與空前多的人相連」，後句卻是「感到孤獨的人反而增加」——與前句預期完全相反的事實，用表強烈逆接的「それにもかかわらず」（儘管如此）。「それゆえ」表因果順接；「すなわち」是換言之；「ただし」用於補充但書、限制條件，都接不起這種出乎意料的反轉。',
        explanationEn:
          'The first sentence says we are connected with more people than ever, yet the next reports that people feeling lonely are actually increasing — a fact that defies the expectation, so the strong concessive 「それにもかかわらず」 ("despite that") fits. 「それゆえ」 marks a logical consequence; 「すなわち」 means "in other words"; 「ただし」 adds a proviso or restriction — none can introduce this unexpected reversal.',
      },
      {
        id: 'n2-grammar-bunsho-003-q2',
        stem: '【２】に入るのはどれか。',
        options: ['にほかならない', 'にかぎらない', 'にたえない', 'にあたらない'],
        answerIndex: 0,
        explanation:
          '「名詞＋にほかならない」表「正是…、無非是…」的強斷定：拿別人「精選的瞬間」對比自己的日常而沮喪，這正是比較對象搞錯了的證據。「にかぎらない」是「不限於…」；「にたえない」接「証拠」不成句；「にあたらない」是「不足以稱為…」，代入後變成「不算是搞錯的證據」，與整段主張相反。',
        explanationEn:
          'Noun + 「にほかならない」 makes a strong assertion ("is nothing other than..."): feeling down after comparing others\' hand-picked moments with your own everyday life is precisely proof that you are comparing against the wrong thing. 「にかぎらない」 means "not limited to..."; 「にたえない」 cannot attach to 「証拠」; 「にあたらない」 means "does not amount to...," which would deny the very claim the passage is making.',
      },
      {
        id: 'n2-grammar-bunsho-003-q3',
        stem: '【３】に入るのはどれか。',
        options: ['だけに', 'ものの', 'どころか', 'うちに'],
        answerIndex: 0,
        explanation:
          '「〜だけに」表「正因為…，（後果）更是…」：正因為 SNS 上的往來輕鬆便利，每段關係也就容易流於淺薄，前後是因果強調關係。「ものの」是逆接「雖然…卻」，但「輕鬆」與「變淺」並非對立；「どころか」表「別說…反而」；「うちに」是「趁著…之間」，語意皆不通。',
        explanationEn:
          '「だけに」 means "precisely because..., all the more...": precisely because exchanges on social media are so easy and casual, each individual relationship tends to stay shallow — an emphasized cause and effect. 「ものの」 is concessive ("although"), but ease and shallowness are not in opposition; 「どころか」 means "far from..."; 「うちに」 means "while..." — none of these fits.',
      },
      {
        id: 'n2-grammar-bunsho-003-q4',
        stem: '【４】に入るのはどれか。',
        options: ['のではないだろうか', 'のではないでしょうか', 'と思います', 'かもしれませんね'],
        answerIndex: 0,
        explanation:
          '本文通篇是だ・である體的評論文，結尾委婉提出主張的「〜のではないだろうか」（不正是…嗎）也必須維持常體。「のではないでしょうか」「と思います」「かもしれませんね」都是敬體表現，與全文文體不一致；文章文法題中，文體不統一即屬錯誤選項。',
        explanationEn:
          'The essay is written throughout in the plain だ・である style, so the closing rhetorical suggestion 「のではないだろうか」 ("might it not be that...?") must also stay in plain style. 「のではないでしょうか」, 「と思います」, and 「かもしれませんね」 are all polite-style endings that clash with the register of the text — in text-grammar questions, a break in register marks an option as wrong.',
      },
    ],
  },
  {
    id: 'n2-grammar-bunsho-004',
    kind: 'passage',
    passageTitle: '「手作り」でなければだめですか',
    passage:
      '仕事帰りにスーパーへ寄ると、総菜売り場はいつも混み合っています。揚げ物や煮物をかごに入れながら、どこか後ろめたさを感じる——そんな経験はないでしょうか。私たちの中には、「家庭の食事は手作りであるべきだ」という考えが、いまだに根強く残っているようです。\n【１】、その「当たり前」は、実はそれほど古いものではないそうです。ある食文化の研究者の本によれば、母親が毎食手の込んだ料理を作るという家庭像が広まったのは、せいぜいここ数十年のこと。それ以前の庶民の食卓はずっと質素で、外で買ったものも【２】当たり前に並んでいたといいます。\n共働きの家庭が増えた現在、「毎食手作り」を自分に課すのは現実的ではありません。無理を重ねれば、食事の支度そのものが苦痛になり【３】。総菜や冷凍食品を上手に取り入れて時間の余裕を作り、そのぶん家族とゆっくり食卓を囲む。それも立派な「家庭の味」の形だと私は思います。\n大切なのは、誰が作ったかではなく、どんな気持ちで食卓を囲むかです。「手作りでなければ」という思い込みから、そろそろ自由になっても【４】。',
    explanation: '',
    questions: [
      {
        id: 'n2-grammar-bunsho-004-q1',
        stem: '【１】に入るのはどれか。',
        options: ['ところが', 'ですから', 'あるいは', '要するに'],
        answerIndex: 0,
        explanation:
          '前段說「飯菜應該親手做」的觀念至今根深蒂固，後句卻指出這個「理所當然」其實沒那麼古老——是顛覆讀者預期的意外事實，用「ところが」（然而、沒想到）最恰當。「ですから」是順接因果；「あるいは」表選擇；「要するに」是總結換言，都無法引出這種出人意料的轉折。',
        explanationEn:
          'The first paragraph says the belief that home meals should be handmade remains deep-rooted, but the next sentence reveals that this "common sense" is actually not so old — a fact that upsets the reader\'s expectation, so 「ところが」 ("and yet, surprisingly") fits best. 「ですから」 marks a straightforward consequence, 「あるいは」 an alternative, and 「要するに」 a summing-up — none can introduce this unexpected turn.',
      },
      {
        id: 'n2-grammar-bunsho-004-q2',
        stem: '【２】に入るのはどれか。',
        options: ['ごく', 'まるで', 'いっそ', 'あえて'],
        answerIndex: 0,
        explanation:
          '「ごく」修飾「当たり前」構成「ごく当たり前に」（極其自然地、再平常不過地）：從前的餐桌上擺著外面買的東西是稀鬆平常的事。「まるで」須與「ようだ」等比況表現呼應；「いっそ」表「乾脆…」的決斷；「あえて」是「特意、硬要」，代入後都與「並んでいた」的客觀敘述不合。',
        explanationEn:
          '「ごく」 modifies 「当たり前」 to form 「ごく当たり前に」 ("as a matter of complete course"): store-bought food appearing on the table was utterly ordinary in those days. 「まるで」 must pair with a comparison ending like 「ようだ」; 「いっそ」 expresses a bold resolution ("might as well"); 「あえて」 means "deliberately, daringly" — none matches the neutral description 「並んでいた」.',
      },
      {
        id: 'n2-grammar-bunsho-004-q3',
        stem: '【３】に入るのはどれか。',
        options: ['かねません', 'かねます', 'きれません', 'ぬけません'],
        answerIndex: 0,
        explanation:
          '「〜かねない」表「恐怕會（發生壞事）」，敬體為「かねません」：勉強硬撐的話，做飯這件事本身恐怕會變成痛苦，正確。「かねます」語意相反，是「礙難…」的婉拒說法；「きれません」是「〜きれない」（…不完），「苦痛になりきれない」語意不通；「ぬけません」接「なり」不成複合動詞。',
        explanationEn:
          '「かねない」 warns that something bad could well happen, and its polite form is 「かねません」: if you keep forcing yourself, preparing meals itself could well turn into a torment, so it is correct. 「かねます」 means the opposite — a polite "we are unable to..."; 「きれません」 is 「〜きれない」 ("cannot finish"), and 「苦痛になりきれない」 makes no sense; 「ぬけません」 does not form a compound with 「なり」.',
      },
      {
        id: 'n2-grammar-bunsho-004-q4',
        stem: '【４】に入るのはどれか。',
        options: ['いいのではないでしょうか', 'いいのではないだろうか', 'いいというものだ', 'いいはずだ'],
        answerIndex: 0,
        explanation:
          '本文通篇是です・ます體的隨筆，結尾向讀者提出委婉建議也必須維持敬體，「いいのではないでしょうか」（不是也很好嗎）正確。「いいのではないだろうか」「いいというものだ」「いいはずだ」都是常體表現，與全文敬體不一致，在文章文法題中屬於文體錯誤。',
        explanationEn:
          'The piece is a personal essay in the polite です・ます style throughout, so the gentle closing suggestion must also stay polite: 「いいのではないでしょうか」 ("wouldn\'t it be fine to...?") is correct. 「いいのではないだろうか」, 「いいというものだ」, and 「いいはずだ」 are all plain-style endings that break the register of the text, which makes them wrong in a text-grammar question.',
      },
    ],
  },
]
