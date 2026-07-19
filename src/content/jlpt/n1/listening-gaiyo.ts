import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    id: 'n1-listening-gaiyo-001',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '経営セミナーで講師が話しています。' },
      { speaker: '男', text: '組織の生産性を高めるには何が必要か。優秀な人材を集めることだと考える経営者は少なくありません。' },
      { speaker: '男', text: 'しかし、近年の調査で明らかになったのは、成果を左右するのは個人の能力よりも、チームの空気だということです。' },
      { speaker: '男', text: '具体的には、失敗やミスを恐れずに報告できる雰囲気があるかどうか。これが決定的なんです。' },
      { speaker: '男', text: 'ミスの報告が早ければ、傷が浅いうちに手が打てます。逆に、叱責を恐れて部下が口をつぐむ組織では、問題は水面下で膨らむ一方です。' },
      { speaker: '男', text: '管理職の仕事は部下を厳しく監視することではなく、悪い知らせほど歓迎される場をつくることだと、私は考えています。' },
    ],
    question: '講師が一番言いたいことは何ですか。',
    options: [
      '失敗を報告しやすい雰囲気づくりが組織の成果を左右する',
      '優秀な人材を集めることが生産性向上の近道だ',
      'ミスをした部下は厳しく叱責して監視すべきだ',
      '報告が早ければ傷が浅いうちに対処できる',
    ],
    answerIndex: 0,
    explanation:
      '講師先舉出「找優秀人才」這個常見想法，再用「しかし」推翻，指出決定成果的是「失敗やミスを恐れずに報告できる雰囲気」，結尾更說管理職的工作就是打造歡迎壞消息的場域，主旨是報告文化決定組織成果。「報告が早ければ傷が浅い」只是支持主旨的細節理由；「優秀な人材を集める」是被推翻的說法；「厳しく叱責して監視」與講師的主張正好相反。',
    explanationEn:
      'The lecturer first raises the common belief that gathering talented people is the key, then overturns it with 「しかし」: what decides outcomes is 「失敗やミスを恐れずに報告できる雰囲気」, and he closes by saying a manager\'s job is to create a place where bad news is welcomed — so the main point is that a reporting culture determines organizational results. 「報告が早ければ傷が浅い」 is only a supporting detail; gathering top talent is the view he rejects; and strict scolding and surveillance is the exact opposite of his position.',
  },
  {
    id: 'n1-listening-gaiyo-002',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: 'ラジオで大学教授が話しています。' },
      { speaker: '女', text: 'すぐに役立つ知識を求める風潮は、年々強まっているように感じます。資格や実務スキルの講座には人が集まる一方で、哲学や歴史はどうも敬遠されがちです。' },
      { speaker: '女', text: '確かに、実務的な知識は即戦力になります。それ自体を否定するつもりは毛頭ありません。' },
      { speaker: '女', text: 'ただ、すぐに役立つ知識というのは、状況が変われば、すぐに役立たなくなるものでもあるんですね。' },
      { speaker: '女', text: '一方、一見遠回りに見える教養は、答えのない問題に直面したとき、自分の頭で考えるための土台になってくれます。' },
      { speaker: '女', text: '変化の激しい時代だからこそ、あえて遠回りの学びに時間を割く価値があるのではないでしょうか。' },
    ],
    question: '教授が一番言いたいことは何ですか。',
    options: [
      '変化の激しい時代こそ、遠回りに見える教養を学ぶ価値がある',
      '実務的な知識は即戦力になるので、優先して学ぶべきだ',
      '哲学や歴史の講座は、人が集まらず敬遠されている',
      '資格の勉強は時間の無駄なので、やめたほうがいい',
    ],
    answerIndex: 0,
    explanation:
      '教授先承認實務知識能成為即戰力，再以「ただ」轉折指出這類知識在情勢改變後很快失效，並對比「教養」是面對沒有答案的問題時思考的基礎，結尾用「だからこそ〜価値があるのではないでしょうか」點明主旨：越是變動的時代越值得投資看似繞遠路的學問。「実務的な知識は即戦力になる」只是讓步段的細節；「哲学や歴史は敬遠されがち」是開頭描述的現象；教授明言不否定實務學習，故「資格の勉強はやめたほうがいい」過度解讀。',
    explanationEn:
      'The professor first concedes that practical knowledge is immediately useful, then pivots with 「ただ」: knowledge that is useful right away quickly stops being useful once circumstances change, whereas liberal learning becomes a foundation for thinking through problems that have no answer. She closes with 「だからこそ〜価値があるのではないでしょうか」, making the point that in a fast-changing era, seemingly roundabout learning is worth the time. The line about practical knowledge being 「即戦力」 belongs to the concession; philosophy and history being shunned is just the opening observation; and telling people to quit studying for qualifications over-reads her, since she explicitly does not deny practical study.',
  },
  {
    id: 'n1-listening-gaiyo-003',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '講演会で専門家が人工知能について話しています。' },
      { speaker: '男', text: '人工知能の進歩には目を見張るものがあります。文章の作成から医療の診断まで、人間より速く、時に正確にこなすようになりました。' },
      { speaker: '男', text: '私が懸念しているのは、技術の精度そのものではありません。むしろ、私たち人間のほうが考えることをやめてしまうことです。' },
      { speaker: '男', text: '機械の答えを検証もせずに受け入れる習慣がつくと、判断力は確実に衰えていきます。使わない筋肉が細っていくのと同じです。' },
      { speaker: '男', text: '道具として使いこなすのか、それとも判断を丸ごと預けてしまうのか。この両者の間には大きな隔たりがあります。' },
      { speaker: '男', text: '技術を拒む必要はありません。ただ、最終的な判断だけは手放すな。これが今日、皆さんに一番伝えたいことです。' },
    ],
    question: '専門家が一番言いたいことは何ですか。',
    options: [
      '人工知能を使っても、最終的な判断は自分で下すべきだ',
      '人工知能は診断などを人間より正確にこなすようになった',
      '判断力の衰えを防ぐため、人工知能の使用はやめるべきだ',
      '人工知能の精度には、まだ大きな問題が残っている',
    ],
    answerIndex: 0,
    explanation:
      '專家自己在結尾明說「最終的な判断だけは手放すな。これが〜一番伝えたいことです」，主旨即：可以善用 AI，但最終判斷必須留在自己手上。「診断を人間より正確にこなす」只是開頭鋪陳的細節；「使用はやめるべきだ」與「技術を拒む必要はありません」直接矛盾；「精度に問題が残っている」也被「懸念しているのは技術の精度そのものではない」否定，都不是主張。',
    explanationEn:
      'The expert states his own conclusion outright at the end: 「最終的な判断だけは手放すな。これが〜一番伝えたいことです」 — use AI freely, but the final judgment must stay in your own hands. AI performing diagnoses more accurately than humans is only scene-setting detail from the opening; quitting AI use contradicts 「技術を拒む必要はありません」; and remaining accuracy problems are ruled out by 「懸念しているのは技術の精度そのものではない」, so none of those are his claim.',
  },
  {
    id: 'n1-listening-gaiyo-004',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '企業の研修で講師が会議について話しています。' },
      { speaker: '女', text: '皆さんの会社の会議を思い浮かべてください。発言するのはいつも同じ数人で、あとはうなずくだけ、ということはありませんか。' },
      { speaker: '女', text: '全員がすぐに賛成してくれる会議は、一見スムーズで、理想的にさえ見えます。' },
      { speaker: '女', text: 'でも、本当にそうでしょうか。反対意見が一つも出ないのは、全員が心から納得しているからではなく、言っても無駄だと諦めているからかもしれません。' },
      { speaker: '女', text: '異論を経ていない結論は、検討されていない結論と紙一重です。' },
      { speaker: '女', text: '会議の目的は早く合意することではなく、決める前にあえて異論をぶつけ合うことにある。私はそう考えています。' },
    ],
    question: '講師が一番言いたいことは何ですか。',
    options: [
      '会議では合意を急がず、異論を出し合うことこそが重要だ',
      '全員がすぐに賛成する会議は理想的でスムーズだ',
      '会議で発言するのは、いつも決まった数人だけだ',
      '会議の回数を減らして、仕事の効率を上げるべきだ',
    ],
    answerIndex: 0,
    explanation:
      '講師以「でも、本当にそうでしょうか」推翻「全員馬上贊成＝理想會議」的表面印象，指出沒有反對意見可能只是大家已放棄發言，最後直接總結「会議の目的は〜異論をぶつけ合うことにある」，主旨是開會重在交鋒異見而非快速合意。「全員がすぐ賛成する会議は理想的」正是被推翻的說法；「発言するのはいつも同じ数人」只是開頭引起共鳴的觀察；「会議の回数を減らす」則從頭到尾沒有提到。',
    explanationEn:
      'The lecturer uses 「でも、本当にそうでしょうか」 to overturn the surface impression that a meeting where everyone instantly agrees is ideal, pointing out that the absence of dissent may just mean people have given up speaking, and she concludes directly: 「会議の目的は〜異論をぶつけ合うことにある」. The main point is that meetings exist to clash opinions, not to reach agreement quickly. The claim that instant unanimous approval is ideal is precisely what she rejects; only a few people ever speaking is just the relatable opening observation; and reducing the number of meetings is never mentioned at all.',
  },
  {
    id: 'n1-listening-gaiyo-005',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: 'ラジオで随筆が朗読されています。' },
      { speaker: '女', text: '「わかった」と口にした瞬間、人は考えるのをやめてしまう。そんな気がしてならない。' },
      { speaker: '女', text: '若いころの私は、本を一度読めば、その内容を理解したつもりになっていた。' },
      { speaker: '女', text: 'だが、年を重ねて読み返すたびに、同じ本がまるで違う顔を見せることに驚かされる。' },
      { speaker: '女', text: 'わかったつもりというのは、実のところ、問いの入り口に立ったにすぎないのだろう。' },
      { speaker: '女', text: '理解とは到達点ではなく、問い続ける過程そのものなのかもしれない。そう思えるようになってから、学ぶことがずっと楽しくなった。' },
    ],
    question: '筆者が一番言いたいことは何ですか。',
    options: [
      '理解とは到達点ではなく、問い続ける過程である',
      '本は若いうちに一度読んでおけば十分だ',
      '同じ本でも、読み返すと違う印象を受けることがある',
      '年を取ると、本の内容を理解するのが難しくなる',
    ],
    answerIndex: 0,
    explanation:
      '這篇隨筆從「說出わかった的瞬間就停止思考」談起，以重讀舊書的經驗為例，最後歸結出「理解とは到達点ではなく、問い続ける過程そのもの」，這句正是筆者的核心主張。「読み返すと違う印象を受ける」只是用來支撐主張的個人經驗，屬於細節；「一度読めば十分」是筆者年輕時的想法，後來已被自己否定；「年を取ると理解が難しくなる」則是對「違う顔を見せる」的誤讀，文中並無此意。',
    explanationEn:
      'The essay opens with the thought that the moment one says 「わかった」, one stops thinking, uses the experience of rereading old books as its example, and arrives at 「理解とは到達点ではなく、問い続ける過程そのもの」 — that final line is the author\'s central claim. Rereading a book and finding a different impression is merely the personal experience that supports the claim; reading a book once being enough is the author\'s youthful assumption, which she herself later rejects; and comprehension becoming harder with age misreads 「違う顔を見せる」, an idea nowhere in the text.',
  },
  {
    id: 'n1-listening-gaiyo-006',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: 'テレビで社会学者が話しています。' },
      { speaker: '男', text: 'インターネット上では、極端な意見ばかりが目立つ。そう感じたことはないでしょうか。' },
      { speaker: '男', text: '実は、投稿を頻繁に行うのはごく一部の利用者で、大多数の人は読むだけで、ほとんど発信しないことがわかっています。' },
      { speaker: '男', text: 'つまり、ネット上に見える「世論」は、声の大きい少数派の意見が拡大されて映し出されたものにすぎない可能性があるんです。' },
      { speaker: '男', text: 'それを社会全体の声だと思い込んでしまうと、世の中の実像を見誤ることになります。' },
      { speaker: '男', text: 'ネットの声に触れるときは、そこに映っていない多数の沈黙がある。このことを常に意識していただきたいと思います。' },
    ],
    question: '社会学者が一番言いたいことは何ですか。',
    options: [
      'ネット上の意見を社会全体の声だと思い込んではいけない',
      '投稿を頻繁に行うのは、ごく一部の利用者だけだ',
      '世の中の実像を知るために、ネットの利用は控えるべきだ',
      'ネット上の意見は、社会の実像を正確に映している',
    ],
    answerIndex: 0,
    explanation:
      '社會學者說明網路上顯眼的「世論」可能只是少數大聲者被放大的意見，並警告「社会全体の声だと思い込むと実像を見誤る」，結尾呼籲要意識到沉默的多數，主旨是不可把網路聲量當成整體民意。「投稿するのはごく一部」是支撐論點的資料細節，不是結論本身；「ネットの利用は控えるべきだ」文中並未主張，他只要求解讀時保持警覺；「実像を正確に映している」與整段論旨完全相反。',
    explanationEn:
      'The sociologist explains that the visible online 「世論」 may be nothing more than the amplified opinions of a loud minority, warns that mistaking it for society\'s voice means misjudging reality, and closes by urging listeners to stay aware of the silent majority not reflected there — the main point is not to equate online volume with overall public opinion. Only a small fraction of users posting frequently is the data detail that supports the argument, not the conclusion; he never argues for avoiding the internet, only for cautious interpretation; and saying the internet accurately mirrors society contradicts the entire argument.',
  },
  {
    id: 'n1-listening-gaiyo-007',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '講演会で人事の専門家が話しています。' },
      { speaker: '女', text: '若手社員の離職が止まらない。給料を上げても、休みを増やしても辞めていく。そんな相談を数多く受けます。' },
      { speaker: '女', text: 'もちろん、待遇の改善は必要です。しかし、それだけでは若手は定着しません。' },
      { speaker: '女', text: '退職者への調査で最も多かった理由は、待遇への不満ではなく、「ここにいても成長できない」という感覚でした。' },
      { speaker: '女', text: '単純な作業を延々と任せて、その仕事の意味も説明しない。それでは、この会社で将来を思い描けと言うほうが無理でしょう。' },
      { speaker: '女', text: '若手をつなぎとめたいなら、給料の前に、成長を実感できる仕事の任せ方を見直すべきです。' },
    ],
    question: '専門家が一番言いたいことは何ですか。',
    options: [
      '若手の定着には、成長を実感できる仕事の任せ方が欠かせない',
      '待遇を改善すれば、若手の離職は食い止められる',
      '退職の理由で最も多いのは、給料への不満だ',
      '若手には、難しい仕事を任せないほうがいい',
    ],
    answerIndex: 0,
    explanation:
      '專家指出調查中離職最大主因是「ここにいても成長できない」的感受，最後明言「給料の前に、成長を実感できる仕事の任せ方を見直すべき」，主旨是讓年輕員工有成長實感才留得住人。「待遇を改善すれば食い止められる」被「それだけでは定着しません」直接否定；「最も多いのは給料への不満」與調查結果相反；「難しい仕事を任せないほうがいい」方向完全顛倒，講者批評的正是只讓新人做單純作業。',
    explanationEn:
      'The expert reports that the most common reason for quitting in exit surveys was the feeling of 「ここにいても成長できない」, not dissatisfaction with pay, and she concludes: 「給料の前に、成長を実感できる仕事の任せ方を見直すべき」 — young employees stay when they can feel themselves growing. The claim that better treatment alone can stop attrition is directly denied by 「それだけでは定着しません」; pay complaints being the top reason contradicts the survey result; and avoiding giving young people difficult work points the wrong way entirely — what she criticizes is assigning only simple tasks without explaining their meaning.',
  },
  {
    id: 'n1-listening-gaiyo-008',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: 'ラジオで作家が学び方について話しています。' },
      { speaker: '男', text: '大人になってから学び直しを始める人が増えています。大変結構なことだと思います。' },
      { speaker: '男', text: 'ただ、講座を聴いて、本を読んで、それで満足してしまう人が実に多いんですね。' },
      { speaker: '男', text: '入れるだけの学びというのは、ざるで水をすくうようなもので、右から左へ流れていってしまいます。' },
      { speaker: '男', text: '私自身、本当に理解できたと思えるのは、人に説明したり、文章にまとめたりしたときです。' },
      { speaker: '男', text: 'うまく言葉にできない部分こそ、実は自分がわかっていなかった部分なんです。' },
      { speaker: '男', text: '学んだら、必ず外に出す。この一手間を、ぜひ習慣にしていただきたいと思います。' },
    ],
    question: '作家が一番言いたいことは何ですか。',
    options: [
      '学んだことは、人に説明するなど外に出すことが大切だ',
      '大人になってから学び直しを始める人が増えている',
      '講座を聴いたり本を読んだりするだけでも学びは十分だ',
      '難しい内容は、無理に文章にまとめないほうがいい',
    ],
    answerIndex: 0,
    explanation:
      '作家批評只有輸入的學習像「ざるで水をすくう」一樣留不住，並以自身經驗說明向人說明、寫成文章時才算真正理解，結尾直接呼籲「学んだら、必ず外に出す」，主旨是輸出才是學習的關鍵。「学び直しを始める人が増えている」只是開頭的背景描述；「聴いて読むだけでも十分」正是被他批評的態度；「無理にまとめないほうがいい」與其主張相反，他認為說不清楚的地方正是尚未理解之處。',
    explanationEn:
      'The writer criticizes input-only learning as being like 「ざるで水をすくう」 — it all drains away — and explains from his own experience that real understanding comes when he explains things to others or writes them down, ending with the direct appeal 「学んだら、必ず外に出す」. The main point is that output is the key to learning. The rise in adult re-learners is just background; being satisfied with listening and reading is exactly the attitude he criticizes; and avoiding writing difficult content up runs against his claim that what you cannot put into words is precisely what you have not yet understood.',
  },
  {
    id: 'n1-listening-gaiyo-009',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: 'テレビで町工場の経営者が話しています。' },
      { speaker: '男', text: 'うちの工場にも、ようやく自動化の波がやってきました。機械の導入で、生産量はほぼ倍になりました。' },
      { speaker: '男', text: 'では、職人はもう要らないのかというと、私はむしろ逆だと考えています。' },
      { speaker: '男', text: '機械は決められた作業を正確にこなしますが、金属のわずかな歪みや音の変化から不調を察知するのは、長年の勘を持つ職人にしかできません。' },
      { speaker: '男', text: '実際、機械任せにして職人を減らした同業者は、不良品の増加に頭を抱えています。' },
      { speaker: '男', text: '自動化を進めれば進めるほど、それを見極める職人の目が要る。技術と経験は対立するものではなく、支え合うものなんです。' },
    ],
    question: '経営者が一番言いたいことは何ですか。',
    options: [
      '自動化が進むほど、職人の経験がいっそう必要になる',
      '機械の導入によって、生産量がほぼ倍になった',
      '自動化が進めば、職人はもう必要なくなる',
      '自動化の導入をやめて、手作業に戻すべきだ',
    ],
    answerIndex: 0,
    explanation:
      '經營者以「私はむしろ逆だと考えています」否定「自動化後職人就不需要了」的想法，舉出機器無法察覺金屬歪斜與異音、減少職人的同業反而不良品增加，最後總結「自動化を進めるほど職人の目が要る」，主旨是自動化與職人經驗相輔相成。「生産量がほぼ倍になった」只是開頭的細節；「職人はもう必要なくなる」正是被推翻的立場；「手作業に戻すべきだ」他也從未主張，他本人就是自動化的受益者。',
    explanationEn:
      'The owner rejects the idea that artisans become unnecessary after automation with 「私はむしろ逆だと考えています」, noting that only a seasoned craftsman can sense trouble from slight warping or changes in sound, and that competitors who cut artisans are now plagued by defects. He concludes 「自動化を進めるほど職人の目が要る」 — automation and artisan experience support each other. Production nearly doubling is just an opening detail; artisans becoming unnecessary is the position he overturns; and he never advocates returning to manual work — he himself benefits from automation.',
  },
  {
    id: 'n1-listening-gaiyo-010',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '文化講演会で建築家が話しています。' },
      { speaker: '女', text: '効率という言葉が、これほどもてはやされる時代はないでしょう。移動は最短で、時間は無駄なく。都市もまた、その思想で設計されてきました。' },
      { speaker: '女', text: 'けれども、設計の仕事を長く続けてきて思うのは、人が街を愛するのは、効率のよさゆえではないということです。' },
      { speaker: '女', text: '用もないのに立ち寄りたくなる広場、あえて遠回りしたくなる路地。数字の上では無駄でしかない空間が、街の記憶をつくっているんです。' },
      { speaker: '女', text: '無駄を削ぎ落とした街は、便利ではあっても、どこか息苦しい。' },
      { speaker: '女', text: 'これからの都市に必要なのは、さらなる効率化ではなく、あえて無駄を残す勇気ではないか。私はそう考えています。' },
    ],
    question: '建築家が一番言いたいことは何ですか。',
    options: [
      '都市には、あえて無駄な空間を残すことが必要だ',
      '都市は効率を最優先にして設計されるべきだ',
      '広場や路地は、数字の上では無駄な空間だ',
      '便利な街ほど、人々に愛されるものだ',
    ],
    answerIndex: 0,
    explanation:
      '建築家指出人們愛一座城市並非因為效率，廣場、巷弄這些帳面上的「無駄」才構成街道的記憶，結尾明言「必要なのは、さらなる効率化ではなく、あえて無駄を残す勇気」，主旨是城市應保留看似無用的空間。「数字の上では無駄だ」雖是文中字句，但只是鋪陳，並非她最想說的話；「効率を最優先にすべきだ」與結論相反；「便利な街ほど愛される」也被「便利ではあっても、どこか息苦しい」否定。',
    explanationEn:
      'The architect argues that people do not love a city for its efficiency: plazas you drop into for no reason and alleys worth a detour — spaces that are pure waste on paper — are what create a city\'s memory. She states plainly at the end that 「必要なのは、さらなる効率化ではなく、あえて無駄を残す勇気」, so the main point is that cities should keep seemingly useless space. Calling such spaces wasteful on paper is her own wording but only part of the setup; putting efficiency first contradicts her conclusion; and the idea that convenient cities are the most loved is refuted by 「便利ではあっても、どこか息苦しい」.',
  },
  {
    id: 'n1-listening-gaiyo-011',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: 'ラジオで産業医が話しています。' },
      { speaker: '男', text: '睡眠時間を削って働くことを、いまだに美徳のように語る人がいます。' },
      { speaker: '男', text: 'しかし、睡眠が足りない状態では、注意力や判断力は本人が思う以上に低下しています。厄介なのは、その低下を自分では自覚できないことなんです。' },
      { speaker: '男', text: '徹夜明けの脳の働きは、酒に酔ったときと同じ程度まで鈍るという研究もあるほどです。' },
      { speaker: '男', text: '長く働いたのに成果が上がらない。そういうとき、足りないのは努力ではなく、休息なのかもしれません。' },
      { speaker: '男', text: '睡眠は削るべきコストではなく、仕事の質を支える投資である。この発想の転換を、ぜひお願いしたいと思います。' },
    ],
    question: '産業医が一番言いたいことは何ですか。',
    options: [
      '睡眠は削るコストではなく、仕事の質を支える投資だ',
      '徹夜明けの脳は、酒に酔ったときと同じくらい鈍る',
      '成果が上がらないのは、本人の努力が足りないからだ',
      '仕事の成果を上げるには、労働時間を延ばすべきだ',
    ],
    answerIndex: 0,
    explanation:
      '產業醫先反駁「削減睡眠是美德」的舊觀念，指出睡眠不足時注意力與判斷力下降且本人無法自覺，結尾明言「睡眠は削るべきコストではなく、仕事の質を支える投資」，主旨是把睡眠視為投資而非成本。「徹夜明けの脳は酒に酔ったときと同じ」只是佐證用的研究細節；「努力が足りない」被「足りないのは努力ではなく休息」直接否定；「労働時間を延ばすべきだ」與整段主張方向相反。',
    explanationEn:
      'The occupational physician first pushes back on the old notion that cutting sleep to work is a virtue, noting that sleep deprivation degrades attention and judgment more than one realizes — and that the decline cannot be self-detected. He concludes: 「睡眠は削るべきコストではなく、仕事の質を支える投資」, which is the main point — treat sleep as an investment, not a cost. The comparison of an all-nighter brain to being drunk is merely the supporting research detail; insufficient effort is directly denied by 「足りないのは努力ではなく休息」; and extending working hours runs opposite to the whole argument.',
  },
  {
    id: 'n1-listening-gaiyo-012',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: 'テレビで食品問題の研究者が話しています。' },
      { speaker: '女', text: 'まだ食べられる食品が、家庭で大量に捨てられています。その一因が、賞味期限への誤解です。' },
      { speaker: '女', text: '賞味期限というのは「おいしく食べられる目安」であって、過ぎた途端に食べられなくなる期限ではありません。安全に関わる消費期限とは、性質がまったく違うんです。' },
      { speaker: '女', text: 'ところが、日付が一日過ぎただけで、中身を確かめもせずに捨ててしまう。そんな行動が広く見られます。' },
      { speaker: '女', text: '見た目やにおいを確かめて自分で判断する。かつては当たり前だったこの習慣が、数字への依存で失われつつあるのではないでしょうか。' },
      { speaker: '女', text: '日付だけをうのみにせず、まず五感で確かめる。食品ロスを減らす第一歩は、そこにあると私は考えています。' },
    ],
    question: '研究者が一番言いたいことは何ですか。',
    options: [
      '賞味期限の日付だけに頼らず、自分の五感で確かめて判断すべきだ',
      '賞味期限を過ぎた食品は、安全のためすぐに捨てるべきだ',
      '賞味期限と消費期限は、性質のまったく違う表示だ',
      '家庭から出る食品ロスは、以前より減ってきている',
    ],
    answerIndex: 0,
    explanation:
      '研究者說明賞味期限只是「好吃的參考基準」，批評只看日期、不確認內容物就丟棄的行為，結尾點明「日付だけをうのみにせず、まず五感で確かめる」才是減少食物浪費的第一步，此即主旨。「賞味期限と消費期限は性質が違う」雖是文中內容，但只是支撐主旨的背景知識細節；「過ぎたらすぐ捨てるべきだ」正是講者批評的行為；「食品ロスは減ってきている」與開頭「大量に捨てられています」相反。',
    explanationEn:
      'The researcher explains that 賞味期限 is only a guideline for tasting good — quite different in nature from the safety-related 消費期限 — and criticizes throwing food away over a one-day-old date without even checking it. She closes with 「日付だけをうのみにせず、まず五感で確かめる」 as the first step to reducing food waste, which is the main point. The difference between the two date labels is in the talk but serves as background knowledge supporting the point; discarding food as soon as the date passes is the very behavior she criticizes; and food waste declining contradicts the opening 「大量に捨てられています」.',
  },
  {
    id: 'n1-listening-gaiyo-013',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: 'ラジオで言語学者が話しています。' },
      { speaker: '男', text: '「最近の若者の言葉は乱れている」。こうした嘆きは、いつの時代にも聞かれます。' },
      { speaker: '男', text: 'しかし、言葉の歴史をたどってみると、かつて乱れだと非難された言い方が、いまでは標準になっている例がいくらでも見つかるんです。' },
      { speaker: '男', text: '敬語の形も、単語の意味も、時代とともに移り変わってきました。言葉とは本来、そういうものなんですね。' },
      { speaker: '男', text: 'もちろん、場面に応じた言葉遣いを学ぶことは大切です。それを否定するつもりはありません。' },
      { speaker: '男', text: 'ただ、変化そのものを乱れと決めつけて嘆くのではなく、言葉が生きて動いている証しとして眺めてみる。そのほうが、ずっと豊かな言葉との付き合い方ではないでしょうか。' },
    ],
    question: '言語学者が一番言いたいことは何ですか。',
    options: [
      '言葉の変化は乱れではなく、言葉が生きている証しと捉えるべきだ',
      '若者の言葉の乱れは、正しい形に直していくべきだ',
      'かつて乱れとされた言い方が、標準になった例もある',
      '場面に応じた言葉遣いは、学ぶ必要のないものだ',
    ],
    answerIndex: 0,
    explanation:
      '語言學者舉出歷史上被罵「乱れ」的說法後來成為標準的事實，主張語言本來就會隨時代變化，結尾說與其嘆息，不如把變化視為「言葉が生きて動いている証し」，這正是他最想傳達的主張。「標準になった例もある」只是論證過程中的細節；「正しい形に直していくべきだ」與主張方向相反；講者明言不否定學習合宜的言葉遣い，故「学ぶ必要のない」與其立場矛盾。',
    explanationEn:
      'The linguist points out that expressions once condemned as corrupted have become today\'s standard, argues that language by nature shifts with the times, and concludes that rather than lamenting, we should view change as 「言葉が生きて動いている証し」 — that is the claim he most wants to convey. Old "corrupt" forms becoming standard is a detail within the argument; correcting young people\'s speech back to proper forms runs opposite to his position; and since he explicitly does not deny the importance of learning situation-appropriate language, saying it need not be learned contradicts him.',
  },
  {
    id: 'n1-listening-gaiyo-014',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '講演会で地域振興の専門家が話しています。' },
      { speaker: '女', text: '観光で町を元気にしたい。そう考える自治体は、まず観光客の数を増やそうとします。' },
      { speaker: '女', text: 'しかし、数だけを追った結果、ごみや騒音に住民が疲れ果て、かえって町の魅力が損なわれてしまった例を、私はいくつも見てきました。' },
      { speaker: '女', text: '考えてみれば当然のことです。旅人が惹かれるのは、そこに暮らす人々が生き生きとしている町なんですから。' },
      { speaker: '女', text: '住民自身が愛着を持てない町に、外から人を呼び込もうとしても、長続きはしません。' },
      { speaker: '女', text: '観光振興の出発点は、客の数ではなく、まず住民が誇りを持って暮らせる町をつくること。この順番を間違えてはいけないと思うんです。' },
    ],
    question: '専門家が一番言いたいことは何ですか。',
    options: [
      '観光振興は客数より先に、住民が誇りを持てる町づくりから始めるべきだ',
      '町を元気にするには、まず観光客の数を増やすべきだ',
      '観光客が増えると、ごみや騒音の問題が起こることがある',
      '外から人を呼び込むのをやめて、静かな町を守るべきだ',
    ],
    answerIndex: 0,
    explanation:
      '專家舉出只追求觀光客數量、反而讓居民疲憊不堪而損及城市魅力的實例，指出旅人受吸引的是居民活得有生氣的城市，結尾明言「出発点は、客の数ではなく、まず住民が誇りを持って暮らせる町をつくること」，主旨是別弄錯先後順序。「まず観光客の数を増やすべきだ」正是被批評的做法；「ごみや騒音の問題が起こる」只是舉例中的細節；「呼び込むのをやめるべきだ」過度解讀，講者並未反對觀光本身。',
    explanationEn:
      'The expert cites cases where chasing visitor numbers alone exhausted residents with garbage and noise and ended up damaging the town\'s appeal, observes that travelers are drawn to towns where residents live vibrantly, and concludes: 「出発点は、客の数ではなく、まず住民が誇りを持って暮らせる町をつくること」 — do not get the order wrong. Increasing tourist numbers first is precisely the approach she criticizes; garbage and noise problems are details within her examples; and giving up on attracting outside visitors over-reads her, since she never opposes tourism itself.',
  },
  {
    id: 'n1-listening-gaiyo-015',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '防災フォーラムで専門家が話しています。' },
      { speaker: '男', text: '災害への備えというと、水や食料の備蓄を思い浮かべる方が多いでしょう。もちろん、それは大切です。' },
      { speaker: '男', text: 'ですが、実際の被災地で明暗を分けたのは、備蓄の量よりも、日頃から災害を自分の身に起こることとして想像していたかどうかでした。' },
      { speaker: '男', text: 'ハザードマップを配っても、多くの人は眺めるだけで終わってしまいます。自宅から避難所までの道を、雨の夜を想定して実際に歩いてみた人は、ごくわずかです。' },
      { speaker: '男', text: '知識として知っていることと、いざというとき体が動くことの間には、大きな溝があるんです。' },
      { speaker: '男', text: '備えとは、物をそろえることに加えて、災害を我が事として想像し、一度体を動かしてみること。今日はそれをお伝えしたくて参りました。' },
    ],
    question: '専門家が一番言いたいことは何ですか。',
    options: [
      '災害を我が事として想像し、実際に体を動かして備えることが大切だ',
      '水や食料を十分に備蓄しておけば、災害への備えは万全だ',
      '避難所までの道を実際に歩いてみた人は、ごくわずかだ',
      'ハザードマップを全世帯に配れば、災害の被害は防げる',
    ],
    answerIndex: 0,
    explanation:
      '專家先承認備蓄重要，再用「ですが」轉折指出災區成敗的關鍵在於平時是否把災害想像成發生在自己身上的事，並點出「知道」與「身體能動」之間的鴻溝，結尾總結備え＝物資之外還要「我が事として想像し、一度体を動かしてみること」，此即主旨。「備蓄しておけば万全だ」是被轉折否定的想法；「歩いてみた人はごくわずか」只是描述現狀的細節；「配れば被害は防げる」與「眺めるだけで終わる」的批評矛盾。',
    explanationEn:
      'The expert first grants that stockpiling matters, then pivots with 「ですが」: what separated outcomes in actual disaster areas was whether people had imagined disaster happening to themselves, and he highlights the gulf between knowing something and being able to move when it counts. He sums up that preparedness means, beyond supplies, imagining disaster as one\'s own affair and physically walking through it once — that is the main point. Stockpiles making preparation complete is the idea his pivot rejects; only a handful of people having walked their evacuation route is a detail describing the status quo; and distributing hazard maps preventing damage contradicts his criticism that most people 「眺めるだけで終わってしまいます」.',
  },
  {
    id: 'n1-listening-gaiyo-016',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '企業向けの研修会で危機管理の専門家が話しています。' },
      { speaker: '女', text: '企業の不祥事が起きるたびに、謝罪会見の巧拙が話題になります。頭を下げる角度がどうだとか、言葉の選び方がどうだとか。' },
      { speaker: '女', text: 'しかし、長年この仕事をしてきて断言できるのは、会見の技術によって信頼を取り戻せた例は一つもない、ということです。' },
      { speaker: '女', text: '世間が見ているのは、謝り方のうまさではありません。何が起きたのかを隠さずに明らかにし、二度と繰り返さない仕組みをつくるかどうか。そこなんです。' },
      { speaker: '女', text: '立派な謝罪の言葉を並べながら、原因の調査をあいまいにすれば、かえって不信は深まります。' },
      { speaker: '女', text: '謝罪とは頭を下げる儀式ではなく、事実を明らかにして再発を防ぐ行動そのもの。それを抜きにした会見は、何度開いても意味がないんです。' },
    ],
    question: '専門家が一番言いたいことは何ですか。',
    options: [
      '謝罪で大切なのは会見の技術ではなく、事実の解明と再発の防止だ',
      '謝罪会見では、頭を下げる角度や言葉の選び方が重要だ',
      '立派な謝罪の言葉を並べれば、世間の不信は解消できる',
      '不祥事が起きても、謝罪会見は開かないほうがいい',
    ],
    answerIndex: 0,
    explanation:
      '專家斷言「会見の技術によって信頼を取り戻せた例は一つもない」，指出世人看的是能否公開事實並建立防止再犯的機制，結尾把謝罪定義為「事実を明らかにして再発を防ぐ行動そのもの」，主旨即：重點是行動而非儀式技巧。「頭を下げる角度や言葉の選び方が重要」正是被否定的表面功夫；「立派な言葉を並べれば不信は解消できる」被「かえって不信は深まります」直接推翻；「会見は開かないほうがいい」文中並無此主張。',
    explanationEn:
      'The expert declares that 「会見の技術によって信頼を取り戻せた例は一つもない」: what the public watches is whether a company discloses what happened and builds a mechanism to prevent recurrence. She ends by defining apology as 「事実を明らかにして再発を防ぐ行動そのもの」 — action, not the technique of a ritual, is the point. The angle of the bow and choice of words being important is exactly the surface skill she dismisses; lining up fine words of apology is overturned by 「かえって不信は深まります」; and never holding a press conference is a claim found nowhere in the talk.',
  },
  {
    id: 'n1-listening-gaiyo-017',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: 'スポーツ指導者の研修会で講師が話しています。' },
      { speaker: '男', text: '私が現役の選手だったころは、練習は長ければ長いほどいい、練習中に水を飲むのは根性が足りない証拠だ、そんな指導が当たり前でした。' },
      { speaker: '男', text: 'しかし、スポーツ科学の研究が進んだ今では、疲れ切った体で練習を重ねても技術は伸びず、けがの危険だけが高まることがはっきりしています。' },
      { speaker: '男', text: '実際、練習時間を思い切って減らし、休養や睡眠の管理を取り入れたチームが、全国大会で結果を出し始めています。' },
      { speaker: '男', text: 'それでもなお、自分が受けた指導をそのまま繰り返してしまう指導者が、残念ながら少なくありません。' },
      { speaker: '男', text: '選手を伸ばしたいのなら、自分の経験ではなく、科学の知見に基づいて練習を組み立てる。指導者は、その勇気を持つべきだと思います。' },
    ],
    question: '講師が一番言いたいことは何ですか。',
    options: [
      '指導者は自分の経験ではなく、科学的な知見に基づいて指導すべきだ',
      '練習は長ければ長いほど、技術の向上につながるものだ',
      '練習時間を減らして、全国大会で結果を出したチームもある',
      '自分が受けた指導は、そのまま次の世代に伝えていくべきだ',
    ],
    answerIndex: 0,
    explanation:
      '講師以自己當選手時代的「根性論」開場，再用運動科學的結論與實例推翻它，最後直接呼籲「自分の経験ではなく、科学の知見に基づいて練習を組み立てる」，主旨是指導應依科學知見而非個人經驗。「長ければ長いほどいい」是被科學否定的舊觀念；「結果を出したチームもある」只是支撐主旨的實例細節，並非結論本身；「そのまま伝えていくべきだ」正是講者惋惜批評的惡性循環，方向完全相反。',
    explanationEn:
      'The lecturer opens with the grit-based coaching of his playing days, overturns it with the findings of sports science and a real example, and closes with the direct appeal to build training 「自分の経験ではなく、科学の知見に基づいて」 — coaching should rest on scientific findings, not personal experience. Longer practice being always better is the old belief science has refuted; teams succeeding after cutting practice time is only the supporting example, not the conclusion itself; and passing one\'s own coaching on unchanged is precisely the vicious cycle he laments, the exact opposite direction.',
  },
  {
    id: 'n1-listening-gaiyo-018',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '環境問題の講演会で研究者が話しています。' },
      { speaker: '女', text: 'ごみの分別に熱心に取り組む方が増えました。資源を循環させようという意識が広がるのは、喜ばしいことです。' },
      { speaker: '女', text: 'ただ、気になるのは、きちんと分別してリサイクルに出せば、それで環境への責任は果たした、という空気です。' },
      { speaker: '女', text: '実は、リサイクルには回収や再処理のために多くのエネルギーがかかります。再利用できるのは一部で、結局燃やされてしまうものも少なくありません。' },
      { speaker: '女', text: 'つまり、出してしまったごみを後からどう処理するかよりも、そもそもごみになる物を家に持ち込まないことのほうが、はるかに効果が大きいんです。' },
      { speaker: '女', text: '分別はもちろん続けてください。ですがその前に、買う段階で一度立ち止まる。環境のためにできる最大のことは、そこにあると私は思います。' },
    ],
    question: '研究者が一番言いたいことは何ですか。',
    options: [
      'リサイクルより、そもそもごみになる物を減らすほうが効果的だ',
      'きちんと分別してリサイクルに出せば、環境への責任は果たせる',
      'リサイクルの回収や再処理には、多くのエネルギーがかかる',
      'ごみの分別には効果がないので、やめてしまってかまわない',
    ],
    answerIndex: 0,
    explanation:
      '研究者先肯定分類回收的風氣，再用「ただ」點出「分別すれば責任を果たした」這種心態的盲點：回收本身耗能且只有一部分能再利用，因此「そもそもごみになる物を持ち込まない」效果遠大於事後處理，結尾把重點放在購買前先停下來想一想，此即主旨。「分別すれば責任は果たせる」正是被質疑的心態；「多くのエネルギーがかかる」只是論證用的細節；講者明言分類要繼續，故「やめてかまわない」與其立場相反。',
    explanationEn:
      'The researcher first welcomes the sorting-and-recycling ethos, then uses 「ただ」 to expose the blind spot in the feeling that sorting alone fulfills one\'s environmental duty: recycling itself consumes much energy and only part of the material is reused, so not bringing home things that will become garbage is far more effective than processing waste afterward. She ends by placing the emphasis on pausing at the moment of purchase — that is the main point. Sorting fulfilling one\'s duty is the mindset she questions; the energy cost of recycling is a detail used in the argument; and since she explicitly says to keep sorting, quitting it contradicts her position.',
  },
  {
    id: 'n1-listening-gaiyo-019',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '美術館の講演会で学芸員が話しています。' },
      { speaker: '男', text: '展覧会にいらっしゃるお客様の多くは、絵の前に立つと、まず横の解説文を読み始めます。作品そのものより、解説を読む時間のほうが長い方も珍しくありません。' },
      { speaker: '男', text: '正しい知識を得てから見たい。その気持ちは、よくわかります。' },
      { speaker: '男', text: 'でも、解説を先に読んでしまうと、私たちはどうしても、そこに書かれたとおりに絵を見てしまうんですね。自分の目で発見する楽しみが、最初から奪われてしまう。' },
      { speaker: '男', text: '絵の見方に正解はありません。何だか不思議だ、妙に落ち着く、そんな素朴な感想こそが、鑑賞の入り口なんです。' },
      { speaker: '男', text: 'ですからどうか、まず絵とじっくり向き合って、それから解説を読んでみてください。順番を変えるだけで、美術館は何倍も面白くなりますよ。' },
    ],
    question: '学芸員が一番言いたいことは何ですか。',
    options: [
      '解説を読む前に、まず自分の目で作品と向き合ってほしい',
      '作品を深く理解するには、先に解説文を読んでおくべきだ',
      '作品より解説を読む時間のほうが長い来館者も珍しくない',
      '正しい知識がなければ、絵を楽しむことはできない',
    ],
    answerIndex: 0,
    explanation:
      '學藝員指出先讀解說會讓人照著文字的框架看畫，奪走自己發現的樂趣，並強調「絵の見方に正解はありません」，結尾具體呼籲「まず絵とじっくり向き合って、それから解説を読んでみてください」，主旨就是調換鑑賞的順序。「先に解説文を読んでおくべきだ」與主張正好相反；「解説を読む時間のほうが長い来館者もいる」只是開頭引入話題的觀察細節；「知識がなければ楽しめない」與「素朴な感想こそが鑑賞の入り口」矛盾。',
    explanationEn:
      'The curator explains that reading the caption first makes us see the painting exactly as the text dictates, robbing us of the joy of discovering with our own eyes, and stresses that 「絵の見方に正解はありません」. His concrete closing appeal — 「まず絵とじっくり向き合って、それから解説を読んでみてください」 — is the main point: simply reverse the order. Reading the caption first for deeper understanding is the exact opposite of his advice; visitors spending longer on captions than on artworks is just the opening observation; and needing correct knowledge to enjoy art contradicts 「素朴な感想こそが、鑑賞の入り口」.',
  },
  {
    id: 'n1-listening-gaiyo-020',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: 'ラジオで心理学者が話しています。' },
      { speaker: '女', text: '孤独は健康に悪い。そんな研究結果が紹介されて以来、一人でいることを必要以上に恐れる風潮を感じます。' },
      { speaker: '女', text: 'ですが、注意していただきたいのは、そこで問題とされている孤独は、望まないのに孤立してしまう状態だということです。' },
      { speaker: '女', text: '自分で選んで持つ一人の時間は、むしろ心の健康に欠かせません。誰にも邪魔されずに考えを整理し、感情を落ち着かせる働きがあることもわかってきています。' },
      { speaker: '女', text: '常に誰かとつながっていないと不安だ、という状態のほうが、よほど心をすり減らします。' },
      { speaker: '女', text: '大切なのは、一人でいるかどうかではなく、その時間を自分で選んでいるかどうか。孤独という言葉に振り回されないでいただきたいと思います。' },
    ],
    question: '心理学者が一番言いたいことは何ですか。',
    options: [
      '自分で選んだ一人の時間は、心の健康にむしろ必要なものだ',
      '孤独は健康に悪いので、一人でいる時間は減らすべきだ',
      '望まないのに孤立してしまう状態は、健康によくない',
      '常に誰かとつながっていれば、心は安定するものだ',
    ],
    answerIndex: 0,
    explanation:
      '心理學者區分「不情願的孤立」與「自己選擇的獨處」，指出後者有整理思緒、安定情緒的功能而「心の健康に欠かせません」，結尾說關鍵在於「その時間を自分で選んでいるかどうか」，主旨是自選的獨處反而是心理健康所必需。「一人でいる時間は減らすべきだ」正是講者批評的過度恐慌；「望まない孤立は健康によくない」雖為文中承認的內容，但只是鋪陳的前提細節，不是最想說的話；「常につながっていれば安定する」被「よほど心をすり減らします」否定。',
    explanationEn:
      'The psychologist distinguishes unwanted isolation from solitude chosen for oneself, explaining that the latter helps organize thoughts and settle emotions and is 「心の健康に欠かせません」. She concludes that what matters is 「その時間を自分で選んでいるかどうか」 — chosen solitude is in fact necessary for mental health, which is the main point. Reducing time alone is the very over-anxiety she criticizes; unwanted isolation being unhealthy is acknowledged in the talk but only as a premise-level detail; and constant connection bringing stability is refuted by 「よほど心をすり減らします」.',
  },
  {
    id: 'n1-listening-gaiyo-021',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: 'ラジオで経済学者が話しています。' },
      { speaker: '男', text: 'キャッシュレス決済の普及が、ここ数年で一気に進みました。レジの待ち時間が減り、店側も現金を数える手間から解放される。利点は確かに多いんです。' },
      { speaker: '男', text: '政府も普及率の目標を掲げ、決済会社はポイント還元を競っています。' },
      { speaker: '男', text: 'しかし、私が本当の課題だと考えているのは、技術でも普及率でもありません。現金でしか暮らせない人たちが、静かに取り残されていくことです。' },
      { speaker: '男', text: 'スマートフォンを持たない高齢者もいれば、停電すれば決済端末は動かなくなります。現金にしかない強みは、いまも厳然としてあるんです。' },
      { speaker: '男', text: 'キャッシュレス化の成否は、普及率の数字ではなく、移行の過程で誰一人置き去りにしない設計ができるかどうかで測られるべきだと思います。' },
    ],
    question: '経済学者が一番言いたいことは何ですか。',
    options: [
      'キャッシュレス化では、誰も取り残さない移行の設計こそが問われている',
      'キャッシュレス決済には、レジの効率化など多くの利点がある',
      '普及率の目標を達成すれば、キャッシュレス化は成功と言える',
      '現金の使用を早くやめて、決済をキャッシュレスに統一すべきだ',
    ],
    answerIndex: 0,
    explanation:
      '經濟學者先承認無現金支付「利点は確かに多い」，再以「しかし」轉折，指出真正的課題不在技術或普及率，而是「現金でしか暮らせない人たちが取り残されていく」，結尾明言成敗應以「誰一人置き去りにしない設計」來衡量，此即主旨。「利点が多い」只是讓步段的鋪陳細節；「普及率の目標を達成すれば成功」被「普及率の数字ではなく」直接否定；「統一すべきだ」文中從未主張，他反而強調現金仍有不可取代的強項。',
    explanationEn:
      'The economist first concedes that cashless payment has many merits — 「利点は確かに多い」 — then pivots with 「しかし」: the real issue is neither technology nor adoption rates, but that people who can only live on cash are quietly left behind, 「現金でしか暮らせない人たちが取り残されていく」. He closes by saying success should be measured by whether the transition is designed 「誰一人置き去りにしない」, which is the main point. The many merits belong to the concession; judging success by adoption-rate targets is denied by 「普及率の数字ではなく」; and unifying everything into cashless payment is never claimed — he stresses that cash still has irreplaceable strengths.',
  },
  {
    id: 'n1-listening-gaiyo-022',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '講演会で歴史学者が話しています。' },
      { speaker: '女', text: '歴史と聞くと、多くの方は有名な武将や大きな戦を思い浮かべるでしょう。教科書もドラマも、そうした英雄たちを中心に描いてきました。' },
      { speaker: '女', text: 'たしかに、英雄の物語は華やかで、人の心を引きつけます。' },
      { speaker: '女', text: 'しかし、当時の人口の大部分を占めていたのは、名前も残らない庶民です。彼らがどう暮らしていたかを抜きにして、その時代を理解したとは言えません。' },
      { speaker: '女', text: '幸い、商家の帳簿や村の記録、何気ない手紙といった古文書には、庶民の暮らしぶりが驚くほど生々しく残っています。米の値段への嘆き、子の成長を喜ぶ言葉。そこにあるのは、私たちと変わらない人間の姿です。' },
      { speaker: '女', text: '歴史の主役は一握りの英雄だけではない。無名の人々が残した記録にこそ、時代の実像を知る手がかりがある。私はそうお伝えしたいんです。' },
    ],
    question: '歴史学者が一番言いたいことは何ですか。',
    options: [
      '無名の庶民が残した記録にこそ、時代の実像を知る手がかりがある',
      '英雄の物語は華やかで、人の心を引きつけるものだ',
      '古文書には、米の値段や子どもの成長のことが書かれている',
      '教科書は今後、英雄について教えるのをやめるべきだ',
    ],
    answerIndex: 0,
    explanation:
      '歷史學者先承認英雄故事華麗動人，再以「しかし」轉折，指出佔當時人口大多數的是無名庶民，不了解他們的生活就談不上理解時代，結尾明言「無名の人々が残した記録にこそ、時代の実像を知る手がかりがある」，此即主旨。「英雄の物語は華やか」只是讓步段的內容；「米の値段や子の成長が書かれている」是支撐主旨的古文書內容細節，不是結論；「英雄について教えるのをやめるべきだ」則屬過度解讀，講者只說主角「不只」是英雄，並未否定英雄史。',
    explanationEn:
      'The historian first grants that tales of heroes are dazzling and captivating, then pivots with 「しかし」: the vast majority of the population were nameless commoners, and without knowing how they lived one cannot claim to understand the era. She states her point plainly at the end: 「無名の人々が残した記録にこそ、時代の実像を知る手がかりがある」. The appeal of hero stories belongs to the concession; laments about rice prices and joy over children growing up are the supporting details of what old documents contain, not the conclusion; and abolishing heroes from textbooks over-reads her — she says heroes are not the 「only」 protagonists, never that hero history should go.',
  },
  {
    id: 'n1-listening-gaiyo-023',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: 'テレビで脳科学者が話しています。' },
      { speaker: '男', text: '試験の前の晩、眠る時間を惜しんで徹夜で覚え込む。学生時代、そんな経験をお持ちの方は多いのではないでしょうか。' },
      { speaker: '男', text: '一分でも長く机に向かったほうが得だ、という気持ちはよくわかります。' },
      { speaker: '男', text: 'ですが、研究が進んだ今では、眠っている間の脳は決して休んでいるわけではないことがわかっています。日中に取り込んだ情報を整理し、必要なものを長期の記憶として定着させる。その作業は、主に眠っている間に行われるんです。' },
      { speaker: '男', text: '実験でも、覚えたあとにきちんと眠った人のほうが、徹夜した人より成績がよいという結果が繰り返し報告されています。' },
      { speaker: '男', text: '睡眠は学習を中断する時間ではなく、学習を仕上げる時間です。覚えたければ、まず眠る。発想をそう切り替えていただきたいと思います。' },
    ],
    question: '脳科学者が一番言いたいことは何ですか。',
    options: [
      '睡眠は学習を仕上げる時間であり、記憶の定着には眠ることが欠かせない',
      '試験の前の晩は、眠る時間を惜しんで覚え込んだほうがいい',
      '覚えたあとに眠った人のほうが成績がよいという実験結果がある',
      '眠っている間の脳は、活動を止めて完全に休んでいる',
    ],
    answerIndex: 0,
    explanation:
      '腦科學者先體諒「多讀一分鐘也划算」的心情，再以「ですが」轉折，說明大腦在睡眠中整理資訊、把必要內容固定為長期記憶，結尾明言「睡眠は学習を中断する時間ではなく、学習を仕上げる時間」，主旨是想記住就先睡覺、把睡眠視為學習的一部分。「徹夜で覚え込んだほうがいい」正是被推翻的舊做法；「眠った人のほうが成績がよい」只是支撐主旨的實驗細節；「脳は完全に休んでいる」與「決して休んでいるわけではない」直接矛盾。',
    explanationEn:
      'The neuroscientist first sympathizes with the feeling that every extra minute at the desk pays off, then pivots with 「ですが」: during sleep the brain sorts the day\'s information and consolidates what matters into long-term memory. He concludes 「睡眠は学習を中断する時間ではなく、学習を仕上げる時間」 — if you want to remember, sleep first; treat sleep as part of learning. Cramming all night is the old habit he overturns; sleepers outscoring all-nighters is merely the supporting experimental detail; and the brain resting completely during sleep directly contradicts 「決して休んでいるわけではない」.',
  },
  {
    id: 'n1-listening-gaiyo-024',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: 'ラジオで栄養学の専門家が話しています。' },
      { speaker: '女', text: 'テレビである食品が体にいいと紹介されると、翌日にはスーパーの棚からその食品が消える。そんな光景が、これまで何度も繰り返されてきました。' },
      { speaker: '女', text: '健康によいものを取り入れたい。その意欲自体は、とても大切なものです。' },
      { speaker: '女', text: 'ただ、忘れてはならないのは、どんなに優れた食品でも、それ一つで健康になれるものは存在しない、ということです。' },
      { speaker: '女', text: '紹介される研究の多くはまだ条件の限られた段階のものですし、同じ物ばかり毎日大量に食べれば、かえって栄養が偏ってしまいます。' },
      { speaker: '女', text: '一つの食品に期待を集中させるのではなく、日々の食事全体のバランスを整える。地味に聞こえますが、それこそが栄養学の変わらない結論なんです。' },
    ],
    question: '専門家が一番言いたいことは何ですか。',
    options: [
      '特定の食品に頼らず、食事全体のバランスを整えることが大切だ',
      '健康によいものを取り入れようとする意欲は大切なものだ',
      '体にいいと紹介された食品は、毎日多めに食べるといい',
      'テレビで紹介される食品の効果は、すべて証明されている',
    ],
    answerIndex: 0,
    explanation:
      '專家先肯定想攝取健康食物的心意，再以「ただ」轉折指出「それ一つで健康になれるものは存在しない」，同一種食物吃太多反而造成營養偏差，結尾點明與其把期待集中在單一食品，不如「日々の食事全体のバランスを整える」，這才是營養學不變的結論，即本題主旨。「意欲は大切」只是讓步段的鋪陳；「毎日多めに食べるといい」與「栄養が偏ってしまいます」的警告相反；「効果はすべて証明されている」也被「条件の限られた段階のもの」否定。',
    explanationEn:
      'The nutrition expert first affirms the desire to eat healthily, then pivots with 「ただ」: 「それ一つで健康になれるものは存在しない」 — no single food can make you healthy, and eating large amounts of the same thing daily actually unbalances your nutrition. She concludes that rather than pinning hopes on one food, 「日々の食事全体のバランスを整える」 is the unchanging conclusion of nutrition science — the main point. The value of health-minded enthusiasm belongs to the concession; eating a featured food in large daily amounts contradicts her warning that 「栄養が偏ってしまいます」; and all televised claims being proven is denied by 「条件の限られた段階のもの」.',
  },
  {
    id: 'n1-listening-gaiyo-025',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: 'ラジオで旅行作家が話しています。' },
      { speaker: '男', text: '今は便利な時代で、出発前に名所も店も調べ尽くし、分刻みの計画を立てて旅に出る方が増えました。' },
      { speaker: '男', text: '限られた休みを無駄にしたくない。その気持ちは、私にもよくわかります。' },
      { speaker: '男', text: 'ただ、計画どおりの旅というのは、言ってみれば、答え合わせなんですね。事前に見た写真と同じ景色を確認して、帰ってくる。' },
      { speaker: '男', text: '私が長年の旅で心に残っているのは、道に迷って入り込んだ路地や、雨宿りで居合わせた人との会話。つまり、予定になかった時間ばかりなんです。' },
      { speaker: '男', text: '旅程をすべて埋めてしまわずに、何も決めない半日を残しておく。その余白こそが、旅を旅にしてくれるのだと思います。' },
    ],
    question: '旅行作家が一番言いたいことは何ですか。',
    options: [
      '旅程を予定で埋め尽くさず、偶然と出会うための余白を残すべきだ',
      '限られた休みを無駄にしたくないという気持ちはよくわかる',
      '事前によく調べて計画を立てれば、旅で失敗することはない',
      '道に迷わないように、旅先では地図をこまめに確認すべきだ',
    ],
    answerIndex: 0,
    explanation:
      '旅行作家先體諒不想浪費假期的心情，再以「ただ」轉折，把照計畫走的旅行比喻為「答え合わせ」——只是去確認看過的照片，並舉出自己難忘的都是「予定になかった時間」，結尾明言留下什麼都不安排的半天，「その余白こそが、旅を旅にしてくれる」，此即主旨。「気持ちはよくわかる」只是讓步段的鋪陳；「計画を立てれば失敗しない」是被「答え合わせ」比喻質疑的態度；「地図をこまめに確認すべきだ」方向相反，他珍惜的正是迷路帶來的偶遇。',
    explanationEn:
      'The travel writer first sympathizes with not wanting to waste precious holidays, then pivots with 「ただ」, likening a trip that goes exactly to plan to 「答え合わせ」 — merely confirming photos you have already seen. What stayed with him over years of travel was always 「予定になかった時間」: alleys entered by getting lost, conversations while sheltering from rain. He concludes that leaving an unplanned half day is essential — 「その余白こそが、旅を旅にしてくれる」, the main point. Understanding the desire not to waste time off is only the concession; thorough planning preventing failure is the attitude his 「答え合わせ」 metaphor questions; and checking maps constantly to avoid getting lost points the opposite way, since getting lost is exactly what he treasures.',
  },
  {
    id: 'n1-listening-gaiyo-026',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '講演会で音楽評論家が話しています。' },
      { speaker: '女', text: '今や、世界中の名演奏が、スマートフォン一つでいつでも聴ける時代になりました。' },
      { speaker: '女', text: '録音の技術も進歩して、音質だけを取れば、客席で聴くより鮮明なことさえあります。それでも私は、機会を見つけては演奏会に足を運びます。' },
      { speaker: '女', text: '録音というのは、何度も録り直した末に完成された、いわば整えられた音です。一方、生の演奏は一度きりで、やり直しがきかない。その緊張感が、音に宿るんです。' },
      { speaker: '女', text: '演奏家の息づかい、客席の静けさ、音が消えたあとの余韻。あの場の空気だけは、どんなに優れた再生機器でも運べません。' },
      { speaker: '女', text: '音楽の核心は、演奏家と同じ時間を分かち合う一回きりの体験にある。何でも手元で聴ける便利な時代だからこそ、それを申し上げたいんです。' },
    ],
    question: '評論家が一番言いたいことは何ですか。',
    options: [
      '音楽の核心は、演奏家と時間を分かち合う一回きりの体験にある',
      '録音の音質は、客席で聴くより鮮明なことさえある',
      '優れた再生機器があれば、演奏会に行く必要はない',
      '録音された音楽には、聴く価値がほとんどない',
    ],
    answerIndex: 0,
    explanation:
      '評論家先承認錄音音質甚至可能比現場清晰，再指出錄音是反覆重錄後「整えられた音」，而現場演奏一次定勝負的緊張感、演奏家的呼吸與餘韻是任何播放器材都無法搬運的，結尾明言「音楽の核心は〜一回きりの体験にある」，此即主旨。「音質は鮮明なことさえある」只是讓步段的細節；「演奏会に行く必要はない」與她「機会を見つけては足を運ぶ」的態度相反；「聴く価値がほとんどない」則屬過度解讀，她並未否定錄音本身的價值。',
    explanationEn:
      'The critic first concedes that recordings can sound even clearer than a concert seat, then explains that a recording is 「整えられた音」 perfected through retakes, whereas a live performance happens once with no second chance — that tension lives in the sound, and the air of the hall 「どんなに優れた再生機器でも運べません」. She concludes that 「音楽の核心は〜一回きりの体験にある」 — sharing time with the performers — which is the main point. Recordings sometimes sounding clearer is a concession detail; not needing to attend concerts contradicts her own habit of going whenever she can; and recorded music having almost no value over-reads her, as she never denies recordings their worth.',
  },
  {
    id: 'n1-listening-gaiyo-027',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: 'テレビで農業経済の研究者が話しています。' },
      { speaker: '男', text: '農家の高齢化で、耕す人のいなくなった農地、いわゆる耕作放棄地が全国で増え続けています。' },
      { speaker: '男', text: '荒れた農地は景観を損ない、害虫や獣の住みかにもなる。厄介な負の遺産だ、というのが一般的な見方でしょう。' },
      { speaker: '男', text: 'たしかに、放置すれば問題は深刻です。しかし、私は耕作放棄地を、使い道の決まっていない土地、つまり地域に残された数少ない資源だと捉えています。' },
      { speaker: '男', text: '実際、放棄地に羊を放して観光の呼び物にした村もあれば、市民農園として都市の住民に開放し、交流を生み出した町もあります。' },
      { speaker: '男', text: '元の田畑に戻すことだけが解決ではありません。その土地に合った新しい使い道を地域ぐるみで考えること。それが放棄地問題の出発点だと思うんです。' },
    ],
    question: '研究者が一番言いたいことは何ですか。',
    options: [
      '耕作放棄地は、農地に戻す以外の活用も含めて使い道を考えるべき資源だ',
      '荒れた農地は景観を損ない、害虫や獣の住みかにもなる',
      '耕作放棄地は、すべて元の田畑に戻していくべきだ',
      '農家の高齢化は、今後しだいに解消へ向かっていく',
    ],
    answerIndex: 0,
    explanation:
      '研究者先交代「厄介な負の遺産」這個一般看法，再以「しかし」轉折，主張耕作放棄地是「地域に残された数少ない資源」，並舉放牧觀光、市民農園等實例，結尾明言「元の田畑に戻すことだけが解決ではありません」，要因地制宜想出新用途，此即主旨。「景観を損ない、住みかにもなる」只是鋪陳一般看法的細節；「すべて元の田畑に戻すべきだ」正是被結尾否定的想法；「高齢化は解消へ向かう」文中完全沒有提到，開頭反而說放棄地持續增加。',
    explanationEn:
      'The researcher first presents the common view of abandoned farmland as 「厄介な負の遺産」, then pivots with 「しかし」: he sees it as land whose use is simply undecided — 「地域に残された数少ない資源」 — citing villages that graze sheep as a tourist draw and towns that opened community gardens. He concludes 「元の田畑に戻すことだけが解決ではありません」: communities should devise new uses suited to each plot, which is the main point. Ruined fields harming scenery and harboring pests is a detail of the common view he sets up; returning all land to cultivation is exactly what his conclusion denies; and rural aging easing off is never mentioned — the talk opens by saying abandonment keeps increasing.',
  },
  {
    id: 'n1-listening-gaiyo-028',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '講演会で都市計画家が話しています。' },
      { speaker: '女', text: 'これまでの街路づくりは、いかに車をスムーズに通すか、という発想が中心でした。道は広く、まっすぐに。それが近代的な都市の姿だとされてきたんです。' },
      { speaker: '女', text: 'もちろん、物流や暮らしを支えるうえで、車の通りやすさは無視できません。' },
      { speaker: '女', text: 'ですが、歩く人の目線に立つと、景色はまったく違って見えます。広くて単調な道は、同じ距離でも、歩くと長く退屈に感じられるんです。' },
      { speaker: '女', text: '逆に、店先の飾りや街路樹、ちょっと腰かけられるベンチ。そうした小さな変化が連なる道では、人は自然と歩きたくなり、立ち止まり、店に入る。まちのにぎわいは、そこから生まれます。' },
      { speaker: '女', text: '街路は車を通すための管ではなく、人が歩いて楽しむための舞台です。これからの設計は、歩く人の目線から始めるべきだと考えています。' },
    ],
    question: '都市計画家が一番言いたいことは何ですか。',
    options: [
      'これからの街路は、車中心ではなく歩く人の目線から設計すべきだ',
      '物流や暮らしを支えるうえで、車の通りやすさは無視できない',
      '道は広くまっすぐであるほど、歩いていて楽しく感じられる',
      '街路樹やベンチは、車の通行の妨げになるので減らすべきだ',
    ],
    answerIndex: 0,
    explanation:
      '都市計畫家先承認車輛通行對物流與生活不可忽視，再以「ですが」轉折，指出從行人視角看，寬而單調的路走起來又長又無聊，反而是店面擺飾、行道樹、長椅這些小變化會讓人想走、想停留，帶來街區的熱鬧，結尾明言「街路は車を通すための管ではなく〜舞台」「歩く人の目線から始めるべき」，此即主旨。「車の通りやすさは無視できない」只是讓步段的內容；「広くまっすぐなほど楽しい」與「長く退屈に感じられる」直接矛盾；「減らすべきだ」則與她讚許這些元素的立場相反。',
    explanationEn:
      'The urban planner first concedes that ease of car traffic cannot be ignored for logistics and daily life, then pivots with 「ですが」: from a pedestrian\'s eye level, wide monotonous roads feel long and boring, while streets lined with small variations — shopfront displays, street trees, benches to rest on — make people want to walk, stop, and enter shops, which is where a town\'s liveliness is born. She concludes that a street is 「車を通すための管ではなく」 a stage for walking, and design 「歩く人の目線から始めるべき」 — the main point. Car accessibility mattering is the concession; wide straight roads being enjoyable contradicts 「長く退屈に感じられる」; and removing trees and benches opposes the very elements she praises.',
  },
  {
    id: 'n1-listening-gaiyo-029',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: 'ラジオで児童文学作家が話しています。' },
      { speaker: '男', text: '子ども向けの本を書いていると、この言葉は難しすぎませんか、と指摘されることがよくあります。' },
      { speaker: '男', text: 'たしかに、知らない言葉だらけでは、子どもは本を閉じてしまうでしょう。わかりやすさへの配慮は欠かせません。' },
      { speaker: '男', text: 'それでも私は、物語のいちばん大事な場面では、あえて子どもがまだ知らないだろう言葉を使うことにしています。' },
      { speaker: '男', text: '子どもは、前後の場面から意味を懸命に想像します。その背伸びの瞬間にこそ、言葉は体温を持って心に残るんです。' },
      { speaker: '男', text: '知っている言葉だけで書かれた本は、子どもをいまいる場所にとどめてしまう。まだ知らない言葉との出会いこそ、読書が子どもに贈れる最良のものだと、私は信じています。' },
    ],
    question: '作家が一番言いたいことは何ですか。',
    options: [
      '未知の言葉との出会いが子どもを成長させるので、あえて難しい言葉も使う',
      '知らない言葉だらけの本では、子どもは読むのをやめてしまう',
      '子ども向けの本は、子どもが知っている言葉だけで書くべきだ',
      '難しい言葉には、必ず注をつけて意味を説明すべきだ',
    ],
    answerIndex: 0,
    explanation:
      '作家先承認滿是生詞會讓孩子闔上書、易讀性的顧慮不可少，再以「それでも」轉折，說明自己在故事最關鍵處刻意使用孩子還不認識的詞，因為孩子從前後文拚命想像意義的「背伸びの瞬間」才能讓語言留在心裡，結尾明言「まだ知らない言葉との出会いこそ、読書が子どもに贈れる最良のもの」，此即主旨。「読むのをやめてしまう」只是讓步段的鋪陳；「知っている言葉だけで書くべきだ」正是被「いまいる場所にとどめてしまう」否定的做法；「必ず注をつけるべきだ」文中從未提及。',
    explanationEn:
      'The author first concedes that a book full of unknown words would make a child close it — readability matters — then pivots with 「それでも」: at the most important moments of a story he deliberately uses words the child likely does not know yet, because in the 「背伸びの瞬間」 of straining to guess meaning from context, words take on warmth and stay in the heart. He concludes that 「まだ知らない言葉との出会いこそ、読書が子どもに贈れる最良のもの」, which is the main point. Children abandoning books full of unknown words is the concession; writing only with words children already know is the approach refuted by 「いまいる場所にとどめてしまう」; and always adding explanatory notes is never mentioned.',
  },
  {
    id: 'n1-listening-gaiyo-030',
    kind: 'listening',
    script: [
      { speaker: '旁白', text: '講演会で天文学者が話しています。' },
      { speaker: '女', text: '日本の夜空から、星が急速に消えています。街の明かりが夜空を照らしてしまう、いわゆる光害のためです。都市部では、天の川を一度も見たことがない子どもも珍しくありません。' },
      { speaker: '女', text: '夜道の明るさが人々の安全を支えていることは、もちろん否定しません。' },
      { speaker: '女', text: 'ですが、必要なのは闇をなくすことではなく、光の向きと量を整えることなんです。実際、照明を下向きに変えるだけで、足元の明るさを保ったまま、夜空は驚くほど暗さを取り戻します。' },
      { speaker: '女', text: '満天の星を村の宝として売り出し、多くの旅行者を集めている地域もあります。' },
      { speaker: '女', text: '星空は、特別な人のものではなく、誰もが頭上に持っている財産です。照明を工夫して夜の暗さを守ることは、安全と十分に両立できる。そのことを知っていただきたいんです。' },
    ],
    question: '天文学者が一番言いたいことは何ですか。',
    options: [
      '照明を工夫すれば、安全を保ちながら星空という財産を守ることができる',
      '夜道の明るさが人々の安全を支えていることは否定できない',
      '安全のためには、夜の街をできるだけ明るくしておくべきだ',
      '星空を楽しみたければ、都市を離れて暮らすしかない',
    ],
    answerIndex: 0,
    explanation:
      '天文學者先承認夜間照明支撐著人們的安全，再以「ですが」轉折，指出需要的不是消滅黑暗，而是「光の向きと量を整えること」——光是把照明改為向下，就能保住腳邊亮度又讓夜空恢復黑暗，結尾明言星空是人人頭上共有的財產，「夜の暗さを守ることは、安全と十分に両立できる」，此即主旨。「安全を支えていることは否定できない」只是讓步段的內容；「できるだけ明るくすべきだ」與「闇をなくすことではなく」的主張相反；「都市を離れるしかない」文中並無此意，她強調的正是靠照明設計在原地找回星空。',
    explanationEn:
      'The astronomer first concedes that streetlight brightness supports people\'s safety, then pivots with 「ですが」: what is needed is not eliminating darkness but 「光の向きと量を整えること」 — simply pointing lights downward keeps the ground lit while the night sky regains its darkness remarkably. She closes by calling the starry sky a shared asset above everyone\'s head and stating that protecting the darkness of night 「安全と十分に両立できる」, which is the main point. Lighting supporting safety is the concession; making the night as bright as possible contradicts 「闇をなくすことではなく」; and having to move away from cities to enjoy stars appears nowhere — her whole argument is that lighting design can bring the stars back where people live.',
  },
]
