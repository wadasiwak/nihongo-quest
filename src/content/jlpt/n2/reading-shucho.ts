import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    kind: 'passage',
    id: 'n2-reading-shucho-001',
    passageTitle: '失敗の価値',
    passage:
      '私たちの社会では、失敗はできるだけ避けるべきものだと考えられている。学校では正解を早く出す生徒が評価され、会社では計画どおりに進まなかった仕事の担当者が肩身の狭い思いをする。失敗を恐れるあまり、確実に成功しそうなことにしか手を出さない。そんな空気が、あらゆる場所に広がっているように思う。\nしかし、少し考えてみてほしい。私たちが本当に何かを学んだのは、どんなときだっただろうか。うまくいったときではなく、むしろ失敗したときではなかったか。成功は「このやり方でよい」という確認を与えてくれるだけだが、失敗は「どこが、なぜだめだったのか」という具体的な情報を与えてくれる。つまり、失敗とは単なる結果ではなく、次の挑戦のための貴重な材料なのである。\nもちろん、同じ失敗を何度も繰り返すのは問題だし、命や健康にかかわる失敗は避けなければならない。私は、失敗そのものをほめたいわけではない。問題なのは、失敗を恐れるあまり挑戦そのものをやめてしまうこと、そして失敗した人を責めるだけで、そこから何も学ぼうとしないことである。失敗を責める組織では、人は失敗を隠すようになる。隠された失敗は共有されず、やがて同じ失敗がもっと大きな形で繰り返される。失敗を認めない態度こそが、かえって大きな失敗を招きかねないのだ。\nでは、どうすればよいのか。大切なのは、失敗を「終わり」ではなく「途中」として扱う仕組みを作ることだろう。失敗の原因を本人だけの責任にせず、記録し、分析し、次の計画に生かす。挑戦した結果の失敗であれば、挑戦したこと自体を評価する。そうした環境があってはじめて、人は安心して新しいことに取り組めるのである。\n失敗しない人生は、一見理想的に見えるものの、それは挑戦しなかった人生と同じことかもしれない。私たちに必要なのは、失敗を避ける技術ではなく、失敗とうまく付き合い、そこから学び続ける姿勢なのである。',
    explanation: '',
    questions: [
      {
        id: 'n2-reading-shucho-001-q1',
        stem: '成功と失敗について、筆者はどのように述べているか。',
        options: [
          '成功はやり方の確認を与えるだけだが、失敗は次に生かせる具体的な情報を与えてくれる。',
          '成功からも失敗からも、学べることの量に大きな差はない。',
          '失敗は単なる結果にすぎないので、深く分析する必要はない。',
          '成功したときのほうが、人は多くのことを学ぶものである。',
        ],
        answerIndex: 0,
        explanation:
          '第二段明確對比：成功只給「このやり方でよい」的確認，失敗才提供「どこが、なぜだめだったのか」的具體情報，並稱失敗是「次の挑戦のための貴重な材料」。說「差別不大」或「成功學得更多」都與此對比相反；「単なる結果にすぎない」更是筆者以「〜ではなく」直接否定的講法。',
        explanationEn:
          'The second paragraph draws the contrast explicitly: success only gives the confirmation 「このやり方でよい」, while failure supplies concrete information about 「どこが、なぜだめだったのか」, making it 「次の挑戦のための貴重な材料」. Saying the two teach about equally much, or that success teaches more, contradicts this contrast; "failure is a mere result needing no deep analysis" is precisely the view the writer rejects with the phrasing 「単なる結果ではなく」.',
      },
      {
        id: 'n2-reading-shucho-001-q2',
        stem: '失敗を認めない態度こそが、かえって大きな失敗を招きかねないとあるが、なぜか。',
        options: [
          '失敗を責められると人は失敗を隠すようになり、共有されないまま同じ失敗がより大きな形で繰り返されるから。',
          '失敗を認めない人は自信を失い、新しい仕事を最後までやりとげられなくなるから。',
          '失敗を認めると責任を取らされるので、だれも記録を残さなくなるから。',
          '失敗を厳しく責めるほど、社員が会社を次々にやめてしまうから。',
        ],
        answerIndex: 0,
        explanation:
          '第三段的論理鏈是：責める組織→人は失敗を隠す→隠された失敗は共有されず→同じ失敗がもっと大きな形で繰り返される，因此正解完整重現這條因果。「自信を失う」「会社をやめる」文中皆未提及；「記録を残さなくなる」看似相近，但文中說的是「隱瞞失敗」而非「不留紀錄」，且把「認める」的因果方向弄反了。',
        explanationEn:
          'The third paragraph lays out the causal chain: in an organization that blames failure, people come to hide their failures; hidden failures are never shared, and so the same failure is eventually repeated in a larger form — the correct option reproduces this chain in full. Losing confidence and employees quitting are never mentioned; "no one keeps records" sounds close, but the text speaks of concealing failures, not of failing to record them, and it also reverses the causal role of 「認める」.',
      },
      {
        id: 'n2-reading-shucho-001-q3',
        stem: 'この文章で筆者が最も言いたいことは何か。',
        options: [
          '失敗を避けることよりも、失敗から学び続ける姿勢とそれを支える仕組みを持つことが大切だ。',
          '命や健康にかかわる失敗を防ぐために、挑戦は慎重に選ぶべきだ。',
          '失敗した人をほめることで、だれもが積極的に失敗するようになるべきだ。',
          '計画どおりに進まなかった仕事の担当者を、組織はもっと厳しく評価すべきだ。',
        ],
        answerIndex: 0,
        explanation:
          '末段總結「必要なのは、失敗を避ける技術ではなく、失敗とうまく付き合い、そこから学び続ける姿勢」，加上第四段主張建立「記録し、分析し、次に生かす」仕組み，正解涵蓋全文主張。筆者明言「失敗そのものをほめたいわけではない」，故「積極的に失敗するべき」錯；「避けるべき失敗」只是讓步的補足，非主旨；「厳しく評価すべき」與筆者立場相反。',
        explanationEn:
          'The final paragraph concludes that what we need is 「失敗を避ける技術ではなく、失敗とうまく付き合い、そこから学び続ける姿勢」, and the fourth paragraph urges building systems that record, analyze, and apply failures — the correct option covers both. The writer explicitly says 「失敗そのものをほめたいわけではない」, so "everyone should actively fail" is wrong; avoiding life-threatening failures is only a concessive aside, not the thesis; evaluating struggling staff more harshly is the opposite of the writer\'s stance.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n2-reading-shucho-002',
    passageTitle: '「わかりやすさ」という落とし穴',
    passage:
      'テレビでも本でもインターネットでも、「わかりやすさ」が何よりも重視される時代になった。難しい問題を三分の動画にまとめ、長い本の内容を数行の要約で済ませる。複雑な内容を誰にでも伝わる形に直す工夫そのものは、否定されるべきではない。専門家が専門用語を並べるだけで説明した気になるよりは、ずっと誠実な態度だと言えるだろう。\nしかし、「わかりやすいもの」だけを選び続けるうちに、私たちは何かを失ってはいないだろうか。世の中の問題の多くは、そもそも単純ではない。環境問題にしても働き方の問題にしても、立場によって見え方が異なり、簡単には答えの出ない要素が複雑にからみ合っている。それを無理に単純な図式にまとめれば、わかった気にはなれるものの、実際には大切な部分が切り捨てられてしまう。わかりやすさとは、多くの場合、何かを省略した結果なのである。\nさらに心配なのは、わかりやすい説明に慣れてしまうと、わかりにくいものに出会ったときに、考える前に拒否するようになることだ。「難しい」と感じた瞬間に読むのをやめ、すぐ理解できる別の情報へ移ってしまう。だが、本当に価値のある理解は、すぐには飲み込めないものを、時間をかけて自分の頭で整理する過程からしか生まれない。他人がまとめた要約を受け取るだけでは、知識は増えても、考える力は育たないのである。\n誤解しないでほしいが、私は難解な文章を書けと言っているのではない。伝える側がわかりやすく工夫する努力と、受け取る側が複雑さに耐える努力とは、両立するはずだ。問題は、受け取る側の努力だけが、いつの間にか不要なものとされつつあることだ。\nわからないことを、わからないまま抱えて考え続けるのは決して楽ではないが、その面倒な時間こそが人を成長させる。わかりやすさを入り口として利用しつつも、最後は自分の頭で複雑さと向き合うこと。それが、情報があふれる時代を生きる私たちに求められている態度ではないだろうか。',
    explanation: '',
    questions: [
      {
        id: 'n2-reading-shucho-002-q1',
        stem: 'わかりやすさとは、多くの場合、何かを省略した結果なのであるとあるが、どういうことか。',
        options: [
          '複雑な問題を単純な形にまとめるとき、大切な部分が切り捨てられているということ',
          '説明が短ければ短いほど、聞く人の理解は深くなるということ',
          '専門家は説明を省略するので、内容が正しく伝わらないということ',
          'わかりやすい説明を作るには、長い時間と手間がかかるということ',
        ],
        answerIndex: 0,
        explanation:
          '劃線句前面說：把複雜問題硬塞進單純圖式，「わかった気にはなれるものの、実際には大切な部分が切り捨てられてしまう」，正解即此換句話說。「短いほど理解が深くなる」與筆者的憂慮正好相反；「専門家は説明を省略する」混淆了第一段「專家只會堆專門用語」的批評；「時間と手間」文中並未討論。',
        explanationEn:
          'Just before the underlined sentence, the writer says that forcing complex problems into a simple scheme lets us feel we understand, while 「実際には大切な部分が切り捨てられてしまう」 — the correct option paraphrases exactly this. "The shorter the explanation, the deeper the understanding" is the reverse of the writer\'s worry; "experts omit their explanations" garbles the first paragraph\'s jab at experts who merely pile up jargon; the time and effort needed to make explanations is never discussed.',
      },
      {
        id: 'n2-reading-shucho-002-q2',
        stem: 'わかりやすい説明に慣れることについて、筆者が最も心配しているのはどんなことか。',
        options: [
          'わかりにくいものに出会ったとき、自分の頭で考える前に拒否するようになること',
          '三分の動画や短い要約を作れる人が、少なくなってしまうこと',
          '難しい専門用語を使った文章が、社会から完全になくなること',
          '情報の量が増えすぎて、何を選べばよいかわからなくなること',
        ],
        answerIndex: 0,
        explanation:
          '第三段開頭「さらに心配なのは」直接點名：習慣了易懂說明，遇到難懂事物就「考える前に拒否するようになる」，正解照應此句。「動画や要約を作れる人が減る」「専門用語の文章がなくなる」都是文中字眼的錯誤重組，筆者並無此憂；「情報量が多くて選べない」雖是常見議題，但本文完全沒有討論資訊篩選的問題。',
        explanationEn:
          'The third paragraph opens with 「さらに心配なのは」 and names the fear directly: once accustomed to easy explanations, people come to reject anything hard to understand 「考える前に」 — exactly what the correct option says. Fewer people able to make short videos or summaries, and jargon-filled writing vanishing from society, are jumbled recombinations of words from the text that the writer never worries about; information overload and how to choose sources is a familiar issue but simply is not discussed in this essay.',
      },
      {
        id: 'n2-reading-shucho-002-q3',
        stem: 'この文章で筆者が最も言いたいことは何か。',
        options: [
          'わかりやすさを入り口として利用しながらも、最後は自分の頭で複雑さと向き合う姿勢が必要だ。',
          '内容を正しく伝えるために、説明はできるだけ難しい言葉で書くべきだ。',
          '複雑な問題を短くまとめる技術を、すべての人が身につけるべきだ。',
          '要約や解説動画は害が大きいので、利用をやめたほうがよい。',
        ],
        answerIndex: 0,
        explanation:
          '末段明言「わかりやすさを入り口として利用しつつも、最後は自分の頭で複雑さと向き合うこと」是這個時代被要求的態度，正解即全文主張。筆者已聲明「難解な文章を書けと言っているのではない」，故「難しい言葉で書くべき」錯；「まとめる技術を身につけるべき」只談傳達方，漏掉筆者更強調的接收方努力；筆者肯定易懂化的工夫，並未主張停用要約與解說影片。',
        explanationEn:
          'The last paragraph states the thesis: use accessibility as an entry point, but in the end 「自分の頭で複雑さと向き合うこと」 — the attitude demanded of us in an age flooded with information. The writer has already disclaimed 「難解な文章を書けと言っているのではない」, so "write in difficult language" is wrong; "everyone should master summarizing skills" covers only the sender\'s side and drops the receiver\'s effort the writer stresses more; the writer affirms the craft of making things clear and never tells readers to stop using summaries or explainer videos.',
      },
    ],
  },
]
