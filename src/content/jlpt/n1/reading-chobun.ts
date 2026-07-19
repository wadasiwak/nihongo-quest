import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    kind: 'passage',
    id: 'n1-reading-chobun-001',
    passageTitle: '父の道具箱',
    passage:
      '父が亡くなって半年が過ぎた頃、実家の物置を片付けることになった。母から「あなたが見てやってくれないか」と電話をもらったとき、正直に言えば気が重かった。仕事は立て込んでいたし、あの薄暗い物置には、手先の器用だった父の道具や木材が足の踏み場もないほど詰め込まれているのを知っていたからだ。週末をまるごと潰す覚悟で、私は新幹線に乗った。\n物置の戸を開けると、かんなくずの匂いがかすかに残っていた。棚には大小の道具箱が整然と並び、引き出しには釘やねじが太さごとに分けて収められている。乱雑だとばかり思い込んでいた物置は、実のところ父なりの秩序に隅々まで貫かれていた。処分するつもりで持ってきたごみ袋が急に無遠慮なものに思えて、私はしばらく袋の口を開けられずにいた。\n一番古い道具箱の底からは、小さな木の椅子が出てきた。座面の裏に、拙い字で私の名前が彫ってある。幼い日の私が彫ったのだろうが、その記憶はもうない。隣には作りかけの、同じ形の椅子があった。孫のために作っていたのだと、後になって母から聞いた。仕上げを待つばかりの椅子はかんなの跡も生々しく、まるで父がちょっと席を外しているだけであるかのように見えた。\n結局その日、私はほとんど何も捨てられなかった。代わりに、使えそうなかんなとのみを一式、自分の車に積み込んだ。使い方もろくに知らないくせにと、我ながら呆れつつ。それでも、道具を一つずつ布で包んでいるあいだに、あれほど重かったはずの気持ちがいつのまにか凪いでいることに気づいた。父を失った悲しみが消えたわけではない。ただ、削りかけの木や丁寧に手入れされた刃物に触れているうちに、父の時間は唐突に断ち切られたのではなく、形を変えて私の手元に残ったのだと、そう思えるようになっていたのである。\n帰り際、母が「どうせ捨てられなかったんでしょう」と笑った。見透かされていたことが悔しくもあり、どこかありがたくもあった。片付けの続きは次の休みにやる。おそらく、そのまた次の休みにも。そうやって少しずつ物置に通ううちに、私は父ともう一度、ゆっくり話をすることになるのかもしれない。',
    explanation: '',
    questions: [
      {
        id: 'n1-reading-chobun-001-q1',
        stem: '母から電話をもらったとき、「私」はどのような気持ちだったか。',
        options: [
          '仕事が忙しいうえ、物が詰まった物置の片付けは大変そうで、気が進まなかった。',
          '父の思い出の品に触れるのがつらく、できれば断りたいと思った。',
          '父の道具を早く処分してしまいたくて、片付けが待ち遠しかった。',
          '母に頼りにされたことがうれしくて、すぐに引き受けたいと思った。',
        ],
        answerIndex: 0,
        explanation:
          '第一段寫「正直に言えば気が重かった」，理由緊接著交代：工作忙（仕事は立て込んでいた）、加上物置塞滿父親的工具木材，收拾起來必然費力。「思い出がつらい」是常見的誤導方向，但文中沉重的原因是勞務負擔，不是觸景傷情；「待ち遠しかった」「うれしくて」都與「気が重い」相反。',
        explanationEn:
          'The first paragraph states plainly 「正直に言えば気が重かった」, and the reasons follow at once: work was piling up (「仕事は立て込んでいた」) and the narrator knew the shed was crammed with the father\'s tools and lumber, so the cleanup was bound to be a major chore. The idea that touching the mementos would be too painful is a classic decoy, but the heaviness comes from the burden of labor, not from grief; 「待ち遠しかった」 and 「うれしくて」 both contradict 「気が重い」.',
      },
      {
        id: 'n1-reading-chobun-001-q2',
        stem: '「ごみ袋が急に無遠慮なものに思えて」とあるが、それはなぜか。',
        options: [
          '物置が父なりの秩序で隅々まで整えられていると知り、それを一方的に処分することがためらわれたから。',
          '持ってきたごみ袋が小さすぎて、物置の道具をとても入れきれないと気づいたから。',
          '勝手に物を捨てれば、あとで母に厳しくとがめられると思ったから。',
          'かんなくずの匂いで気分が悪くなり、作業を続けられなくなったから。',
        ],
        answerIndex: 0,
        explanation:
          '前一句是關鍵：原以為雜亂的物置「実のところ父なりの秩序に隅々まで貫かれていた」。發現這份秩序後，帶來準備丟東西的垃圾袋就顯得「無遠慮」（冒失無禮），所以遲遲打不開袋口。「袋が小さい」文中未提；母親後來只是笑著說破，並無責備之意；「匂いで気分が悪い」是挪用文中字眼的錯誤選項。',
        explanationEn:
          'The preceding sentence is the key: the shed the narrator had assumed was a mess was 「実のところ父なりの秩序に隅々まで貫かれていた」. Once that order came into view, the garbage bags brought for disposal suddenly felt 「無遠慮」 — rude and intrusive — which is why the narrator could not bring himself to open them. Nothing says the bag was too small; the mother later only laughs knowingly, with no hint of scolding; the option about feeling sick from the smell merely recycles words lifted from the passage.',
      },
      {
        id: 'n1-reading-chobun-001-q3',
        stem: '道具を布で包んでいるあいだに、「私」の気持ちはどのように変わったか。',
        options: [
          '重かった気持ちが静まり、父の時間が形を変えて自分の手元に残ったのだと思えるようになった。',
          '父を失った悲しみがすっかり消えて、晴れやかな気持ちになった。',
          '道具の使い方も知らない自分が情けなくなり、持ち帰るのをやめようと思った。',
          '片付けが思うように進まず、早く終わらせたいと焦るようになった。',
        ],
        answerIndex: 0,
        explanation:
          '第四段寫得很清楚：包工具時發現「重かったはずの気持ちがいつのまにか凪いでいる」，並體會到父親的時間「形を変えて私の手元に残った」。注意文中明言「悲しみが消えたわけではない」，所以「すっかり消えて」是錯的；「情けなくなり持ち帰るのをやめた」與實際把工具搬上車的行動矛盾；「焦る」在文中毫無根據。',
        explanationEn:
          'The fourth paragraph spells it out: while wrapping the tools the narrator notices 「重かったはずの気持ちがいつのまにか凪いでいる」 and comes to feel that the father\'s time 「形を変えて私の手元に残った」. Note the text says 「悲しみが消えたわけではない」, so claiming the sorrow completely vanished is wrong; deciding not to take the tools home contradicts the fact that the narrator actually loads them into the car; feeling rushed (「焦る」) has no basis anywhere in the text.',
      },
      {
        id: 'n1-reading-chobun-001-q4',
        stem: 'この文章全体から見て、「私」にとって物置の片付けはどのようなものになったと言えるか。',
        options: [
          '亡き父ともう一度向き合い、時間をかけて対話を続けていくような営みになった。',
          '週末が潰れるだけの、気の重い義務であることに変わりはなかった。',
          '木工を新しい趣味として始めるための、道具集めの機会になった。',
          '疎遠だった母との関係を修復するための、大切なきっかけになった。',
        ],
        answerIndex: 0,
        explanation:
          '結尾「そうやって少しずつ物置に通ううちに、私は父ともう一度、ゆっくり話をすることになるのかもしれない」點出整篇的落點：收拾物置從苦差事轉為與亡父對話的過程。「義務のまま」只符合開頭、忽略了心境的推移；帶回刨刀是出於對父親的眷戀，「趣味の道具集め」曲解動機；文中母子關係本就融洽，「修復」無從談起。',
        explanationEn:
          'The closing line gives the whole piece its landing point: 「そうやって少しずつ物置に通ううちに、私は父ともう一度、ゆっくり話をすることになるのかもしれない」 — the cleanup has turned from a dreaded chore into an ongoing, unhurried conversation with the late father. Saying it remained a mere burdensome duty fits only the opening and ignores the shift in feeling; the plane and chisels were taken home out of attachment to the father, so reading it as gathering tools for a new hobby distorts the motive; the mother-son relationship was warm all along, so there was nothing to repair.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n1-reading-chobun-002',
    passageTitle: '「わかりやすさ」の落とし穴',
    passage:
      '近年、あらゆる分野で「わかりやすさ」が重視されるようになった。ニュースは一分の動画に要約され、書店には図解付きの入門書が並び、専門家には「中学生にもわかる説明」が求められる。複雑な情報が氾濫する時代にあって、わかりやすさが一種の親切であることは間違いない。難解な言葉を並べて聞き手を置き去りにする説明より、かみくだいた説明のほうが望ましいのは当然だろう。\nしかし、わかりやすさには見過ごせない副作用がある。物事をわかりやすくするとは、多くの場合、単純化することだからである。例外を切り捨て、前提となる条件を省き、結論だけを取り出す。その過程で、本来「場合による」としか言えないはずの問題が、「要するにこうだ」という断言へと姿を変える。受け手は理解した気になるが、実際に手にしているのは、現実の複雑さを削ぎ落とした模型にすぎない。\nより深刻なのは、わかりやすさに慣れきった受け手の側に、「わかりにくいものは価値がない」という感覚が育ってしまうことだ。少し込み入った説明に出会うと、内容を吟味する前に「説明が下手だ」と判断して離れていく。かくして発信する側は一層の単純化を迫られ、単純化された情報がまた受け手の忍耐力を削るという悪循環が生まれる。専門家が慎重に「一概には言えない」と述べれば頼りないと見なされ、根拠の怪しい断言を繰り返す者ばかりが信頼を集めるのだとすれば、それは本末転倒と言うほかない。\n誤解のないように言えば、私は難解であることそのものに価値があると言いたいのではない。必要もなく難しい言葉を振り回す説明は、単なる怠慢である。問題なのは、わかりやすさを「入口」ではなく「終点」にしてしまう態度のほうだ。入門書や要約は、複雑な現実へ分け入っていくための地図としてなら大いに役立つ。だが、地図を眺めただけで土地を歩いた気になってはならない。\n結局のところ、わかったつもりの先へもう一歩踏み込み、切り捨てられた例外や条件を拾い直す手間を惜しまないこと。受け手に求められているのは、その小さな忍耐である。わかりやすさがあふれる時代だからこそ、「すぐにはわからないもの」と根気よく付き合う力が、これまで以上に問われているのではないだろうか。',
    explanation: '',
    questions: [
      {
        id: 'n1-reading-chobun-002-q1',
        stem: '第一段落で、筆者は「わかりやすさ」についてどう述べているか。',
        options: [
          '情報が氾濫する時代の一種の親切であり、それ自体は望ましいものだ。',
          '専門家が説明の手間を省くために生み出した、怠慢の産物だ。',
          '聞き手を置き去りにする、避けるべき説明の仕方だ。',
          '中学生向けの教育の場でだけ必要とされるものだ。',
        ],
        answerIndex: 0,
        explanation:
          '第一段明言「わかりやすさが一種の親切であることは間違いない」，並肯定淺白說明勝過拋下聽者的艱澀說明，所以起筆是正面評價。「怠慢」在文中指的是「必要もなく難しい言葉を振り回す説明」，方向剛好相反；「聞き手を置き去りにする」形容的是難解的說明而非わかりやすさ；「中学生にもわかる説明」只是舉例，並非限定用途。',
        explanationEn:
          'The first paragraph states outright 「わかりやすさが一種の親切であることは間違いない」 and affirms that a plain, digestible explanation beats one that leaves the listener behind, so the opening assessment is positive. In this essay 「怠慢」 refers to explanations that brandish needlessly difficult language — the opposite direction; 「聞き手を置き去りにする」 describes hard-to-follow explanations, not clarity itself; 「中学生にもわかる説明」 is merely an example, not a claim that clarity belongs only in education.',
      },
      {
        id: 'n1-reading-chobun-002-q2',
        stem: '「現実の複雑さを削ぎ落とした模型」とは、どのようなものを指すか。',
        options: [
          '例外や前提条件が省かれ、断言の形に単純化された情報のこと',
          '図解や動画を使って、現実を立体的に再現した教材のこと',
          '専門家だけが理解できる、難解な専門用語の体系のこと',
          '受け手が自分の経験をもとに組み立てた、独自の理解のこと',
        ],
        answerIndex: 0,
        explanation:
          '第二段的脈絡：把事情變得易懂往往就是單純化——「例外を切り捨て、前提となる条件を省き、結論だけを取り出す」，讓「場合による」的問題變成「要するにこうだ」的斷言。「模型」正是比喻這種被削去複雜性的資訊。「立体的に再現した教材」把比喻當實物解；「難解な専門用語の体系」與單純化背道而馳；「独自の理解」文中並未提及。',
        explanationEn:
          'Follow the second paragraph\'s logic: making things easy to grasp usually means simplifying — 「例外を切り捨て、前提となる条件を省き、結論だけを取り出す」 — so that questions which should be answered 「場合による」 turn into assertions of 「要するにこうだ」. The 「模型」 is a metaphor for precisely this kind of information stripped of real-world complexity. The teaching-material option takes the metaphor literally; a system of arcane jargon runs counter to simplification; a reader\'s self-built personal understanding is never mentioned.',
      },
      {
        id: 'n1-reading-chobun-002-q3',
        stem: '筆者が「本末転倒」と言うのは、どのような状況か。',
        options: [
          '慎重に断言を避ける専門家が頼りないと見なされ、根拠の怪しい断言をする者ばかりが信頼される状況',
          '入門書や要約ばかりが売れて、専門書がまったく読まれなくなる状況',
          '発信する側が説明を単純化することを拒み、受け手が離れていく状況',
          '受け手が忍耐力をつけすぎて、わかりやすい説明を軽視するようになる状況',
        ],
        answerIndex: 0,
        explanation:
          '「本末転倒」緊接在第三段末尾的假設之後：專家謹慎地說「一概には言えない」反被嫌不可靠，而反覆做出可疑斷言的人卻贏得信賴——該被信任的與實際被信任的顛倒了。「専門書が読まれない」文中沒有這樣的對比；第三段說的是發信方「単純化を迫られ」而非拒絕單純化；「忍耐力をつけすぎる」與文中「忍耐力を削る」正好相反。',
        explanationEn:
          '「本末転倒」 follows directly from the hypothetical at the end of the third paragraph: experts who carefully say 「一概には言えない」 are dismissed as unreliable, while people who keep repeating poorly grounded assertions attract all the trust — who deserves trust and who actually receives it have been inverted. The text draws no contrast about specialist books going unread; the third paragraph says senders are 「一層の単純化を迫られ」, not that they refuse to simplify; audiences building up too much patience is the exact opposite of the stated 「忍耐力を削る」.',
      },
      {
        id: 'n1-reading-chobun-002-q4',
        stem: 'この文章で筆者が最も言いたいことは何か。',
        options: [
          'わかりやすい要約を入口として、その先の複雑な現実に踏み込む忍耐が受け手には必要だ。',
          '難解であることにこそ価値があるのだから、説明を安易にかみくだくべきではない。',
          '悪循環を断つために、専門家は説明をこれまで以上に単純化する努力をすべきだ。',
          '入門書や要約は現実を歪めるだけなので、初めから手に取らないほうがよい。',
        ],
        answerIndex: 0,
        explanation:
          '末兩段收束全文：入門書與要約作為「地図」大有用處，但不能「地図を眺めただけで土地を歩いた気に」，接受方要「わかったつもりの先へもう一歩踏み込」、撿回被捨去的例外與條件——即以易懂為入口而非終點。筆者明言「難解であることそのものに価値があると言いたいのではない」，第二個選項恰好踩中這個否定；要求專家「更加單純化」會加深文中的惡性循環；全盤否定入門書則與「地図としてなら大いに役立つ」矛盾。',
        explanationEn:
          'The final two paragraphs gather the argument: primers and summaries are genuinely useful as a 「地図」, but you must not feel you have walked the land just by studying the map — the reader should 「わかったつもりの先へもう一歩踏み込」 and pick back up the exceptions and conditions that were cut away. In short, treat clarity as an entrance, not an endpoint. The author explicitly says 「難解であることそのものに価値があると言いたいのではない」, which is exactly what the second option violates; demanding that experts simplify even further would deepen the vicious circle described; rejecting primers outright contradicts 「地図としてなら大いに役立つ」.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n1-reading-chobun-003',
    passageTitle: '赤鉛筆の一行',
    passage:
      '入社二年目の春、私は初めて一人で新商品の企画を任された。声をかけてくれたのは課長の島田さんで、「そろそろやってみるか」という軽い調子だったが、私は舞い上がった。同期の誰よりも早い抜擢だと思うと、通勤電車の中でさえ企画のことばかり考えていた。資料を集め、深夜まで数字をそろえ、我ながらよくできたと思える企画書を締め切りの三日前に仕上げた。会議の前夜には、想定される質問への答えを何通りも用意して、ほとんど眠れなかったほどである。\nところが会議は、私の想像とはまるで違う形で進んだ。冒頭の説明こそ滑らかに終えたものの、営業部の部長が発した「で、これは誰が買うの」という一言に、私はうまく答えられなかった。用意していたのは数字の裏付けであって、その数字の向こうにいる一人の客の顔ではなかったのだ。しどろもどろになる私を見かねてか、議論はいつのまにか他の議題へ移り、企画は「継続検討」という名の棚上げになった。会議室を出るとき、頬が熱かった。恥ずかしさよりも先に、あれだけ準備したのに、という理不尽さへの怒りが込み上げてきて、その晩は誰とも口をきかずに帰った。\nそれからの数日は、島田さんの顔をまともに見られなかった。抜擢などしてくれなければ、こんな思いをせずに済んだのに——八つ当たりだと分かっていながら、そんな考えが頭をよぎることさえあった。その週の金曜、島田さんが私の机に企画書の写しを黙って置いていった。余白は赤い書き込みで埋まっていた。誤りの指摘だろうと身構えて読み始めた私は、途中で手が止まった。赤字の大半は「ここは面白い」「この視点は営業に刺さる」という走り書きで、最後の頁にはただ一行、「惜しいのは中身ではなく、届け方」とあった。\nその一行を、私は何度も読み返した。部長の問いに答えられなかったのは、準備が足りなかったからではない。この企画を誰に届けたいのかを、自分自身が一度も問わなかったからだ。そう思い至ったとき、数日間くすぶっていた怒りが、不思議なほど静かに形を変えていくのが分かった。悔しさは消えていない。ただそれは、誰かに向けた怒りではなく、次は届く形で出したいという、前向きな飢えのようなものになっていた。\n翌週の月曜、私は島田さんに頭を下げて、企画の練り直しを願い出た。「時間はかかるぞ」と言いながら、島田さんは少し笑っていた。あの赤鉛筆の一行がなければ、私はあの失敗を「運が悪かった話」として片付け、同じ場所で立ち止まり続けていたにちがいない。',
    explanation: '',
    questions: [
      {
        id: 'n1-reading-chobun-003-q1',
        stem: '企画を任されたとき、「私」はどのような気持ちだったか。',
        options: [
          '同期より早い抜擢だと誇らしく、企画のことで頭がいっぱいになるほど張り切っていた。',
          '経験の浅い自分には荷が重く、できれば断りたいと思っていた。',
          '課長の軽い調子が引っかかり、期待されていないのではないかと不安だった。',
          '大きな仕事を任されたことを、同期には知られたくないと思っていた。',
        ],
        answerIndex: 0,
        explanation:
          '第一段寫「私は舞い上がった」，並說想到這是比任何同期都早的提拔，「通勤電車の中でさえ企画のことばかり考えていた」，可見是興奮投入。「荷が重い」與雀躍的描寫相反；課長「軽い調子」只是說話方式，文中沒有因此不安的描述；「同期に知られたくない」更是無中生有。',
        explanationEn:
          'The first paragraph says 「私は舞い上がった」, and thinking this was a promotion earlier than any peer\'s, the narrator 「通勤電車の中でさえ企画のことばかり考えていた」 — clearly proud, thrilled, and fully absorbed. Feeling the job was too much to handle contradicts this elation; the section chief\'s 「軽い調子」 is simply his manner of speaking, and no anxiety about being underestimated is described; not wanting coworkers to know is pure invention.',
      },
      {
        id: 'n1-reading-chobun-003-q2',
        stem: '会議のあと、「私」に「理不尽さへの怒り」が込み上げてきたのはなぜか。',
        options: [
          'あれほど懸命に準備したにもかかわらず、企画がろくに議論されないまま棚上げにされたから。',
          '数字の裏付けに誤りがあると、部長から厳しく指摘されたから。',
          '島田さんが会議の場で、一度もかばってくれなかったから。',
          '同期たちの目の前で説明に失敗し、恥をかかされたから。',
        ],
        answerIndex: 0,
        explanation:
          '文中順序是關鍵：「恥ずかしさよりも先に、あれだけ準備したのに、という理不尽さへの怒り」——熬夜準備卻換來「継続検討」的擱置，付出沒有得到相應對待才是怒氣來源。部長只問「誰が買うの」，並未指摘數字有誤；對島田的不滿是「それからの数日」才出現的遷怒；文中沒有同期在場的描寫。',
        explanationEn:
          'The stated order matters: 「恥ずかしさよりも先に、あれだけ準備したのに、という理不尽さへの怒り」 — after all those late nights of preparation, the proposal was shelved as 「継続検討」 without a real hearing, and that mismatch between effort and treatment is what fuels the anger. The department head only asked 「で、これは誰が買うの」 and never faulted the figures; resentment toward Shimada surfaces only 「それからの数日」, as displaced frustration; no coworkers from the narrator\'s cohort are described as present.',
      },
      {
        id: 'n1-reading-chobun-003-q3',
        stem: '赤い書き込みを読んだあと、「私」の気持ちはどのように変わったか。',
        options: [
          '誰かに向けていた怒りが、次は届く形で出したいという前向きな意欲に変わった。',
          '悔しさがすっかり消えて、失敗を忘れて出直そうという晴れやかな気持ちになった。',
          '誤りを細かく指摘されたことで自信を失い、企画の仕事から離れたくなった。',
          '島田さんへの八つ当たりの気持ちがかえって強まり、顔を合わせづらくなった。',
        ],
        answerIndex: 0,
        explanation:
          '第四段明寫：鬱積數日的怒氣「静かに形を変え」，成為「次は届く形で出したいという、前向きな飢えのようなもの」。注意文中說「悔しさは消えていない」，所以「すっかり消えて」是錯的；紅字大半是「ここは面白い」等肯定，並非細數錯誤，「自信を失い」不成立；讀後隔週便低頭請求重做，可見對島田的遷怒已化解而非加深。',
        explanationEn:
          'The fourth paragraph states it plainly: the anger that had smoldered for days 「静かに形を変え」, becoming 「次は届く形で出したいという、前向きな飢えのようなもの」. Note that 「悔しさは消えていない」, so claiming the frustration completely disappeared is wrong; the red notes were mostly encouragement such as 「ここは面白い」, not an itemized list of errors, so losing confidence does not hold; and the narrator bows and asks to rework the proposal the following Monday, showing the resentment toward Shimada dissolved rather than deepened.',
      },
      {
        id: 'n1-reading-chobun-003-q4',
        stem: 'この文章全体から見て、「私」にとってこの失敗はどのようなものになったと言えるか。',
        options: [
          '失敗を運のせいにして片付けず、「誰に届けるか」を問い直して前へ進むきっかけになった。',
          '抜擢が早すぎたことを思い知らされ、以後は大きな仕事を避けるようになる苦い経験になった。',
          '数字の裏付けこそが企画の命だと学ぶ、実務上の教訓になった。',
          '信頼していた課長との関係に、埋めがたい溝を残す出来事になった。',
        ],
        answerIndex: 0,
        explanation:
          '結尾點明全文落點：若沒有那一行紅字，「私はあの失敗を『運が悪かった話』として片付け、同じ場所で立ち止まり続けていた」——失敗因此成為重新出發的契機。「大きな仕事を避ける」與主動請求練り直し的行動相反；文章的領悟是「惜しいのは中身ではなく、届け方」，把教訓歸結為數字裏付け正好弄反；島田最後「少し笑っていた」，兩人關係並無裂痕。',
        explanationEn:
          'The ending pins down the point of the whole piece: without that single line in red pencil, 「私はあの失敗を『運が悪かった話』として片付け、同じ場所で立ち止まり続けていた」 — the failure instead became a spur to re-ask who the proposal should reach and to move forward. Avoiding big assignments afterward contradicts the narrator volunteering to rework the plan; the essay\'s insight is 「惜しいのは中身ではなく、届け方」, so concluding that numerical backing is what matters gets it exactly backwards; Shimada 「少し笑っていた」 at the end, so no rift remains between them.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n1-reading-chobun-004',
    passageTitle: '渋滞はなぜ生まれるのか',
    passage:
      '高速道路を走っていて、事故も工事も見当たらないのに、突然のろのろ運転に巻き込まれた経験は誰にでもあるだろう。しばらく我慢して進むと、何事もなかったかのように流れが戻る。このように、はっきりした原因が見つからないまま発生し、いつのまにか消えていく渋滞は「自然渋滞」と呼ばれ、高速道路で起こる渋滞のかなりの部分を占めるとされる。\n自然渋滞の仕組みは、意外なほど単純な連鎖で説明できる。道路が混んでくると、まず車間距離が縮まる。車間が詰まった状態では、前の車がわずかに減速しただけで、後ろの車はぶつからないように、前の車より少し強くブレーキを踏まざるを得ない。するとそのまた後ろの車は、さらに強く減速することになる。一台一台の減速はごく小さくても、それが後方へ伝わるたびに増幅され、数十台後ろでは完全な停止に至る。つまり自然渋滞とは、先頭の誰かが引き起こした「事件」ではなく、小さな減速の波が車列を伝わりながら育っていく現象なのである。実際、上り坂の手前やトンネルの入口など、運転者が無意識に速度を落としやすい場所は、この波の発生地点になりやすいことが知られている。\n興味深いのは、この減速の波が車の流れとは逆向きに、つまり後方へ向かって時速二十キロほどで移動していくことだ。渋滞の中にいる運転者には、自分が渋滞という場所を通り抜けているように感じられる。しかし見方を変えれば、渋滞という波のほうが車列をさかのぼっているのである。だとすれば、渋滞は特定の場所に発生して居座るものではなく、「波」として道路の上を動き回っているものだということになる。\nこの仕組みが分かると、対策の考え方も変わってくる。渋滞の芽が車間距離の詰まりにある以上、有効なのは、一台一台が十分な車間を保ち、前の車の減速を急ブレーキではなく緩やかな減速で吸収してやることだ。車間を空ける行為は、一見すると道路を無駄に使っているようで、割り込まれて損をするだけだと感じる人も多いだろう。しかし実際には、十分な車間は減速の波を受け止める緩衝材として働き、波が増幅していく連鎖を断ち切る。ごく少数の車が意識して車間を保つだけでも渋滞の発生が抑えられることは、実際の道路を使った実験でも確かめられている。\n渋滞は、一人一人がそれぞれに合理的なつもりで振る舞った結果、全体としては誰も望まない状態が生まれてしまうという現象の、ごく身近な見本だと言える。前へ前へと詰める「熱心さ」がかえって全体を遅らせ、一歩引く「ゆとり」が全体を速くする。ハンドルを握るとき、私たちは知らぬ間に、そんな逆説を試されているのかもしれない。',
    explanation: '',
    questions: [
      {
        id: 'n1-reading-chobun-004-q1',
        stem: '「自然渋滞」とは、どのような渋滞のことか。',
        options: [
          '事故や工事のようなはっきりした原因が見当たらないまま発生し、いつのまにか消えていく渋滞',
          '事故の処理が長引くことによって、いつまでも解消されない渋滞',
          '上り坂やトンネルの中だけで起こる、地形が原因の渋滞',
          '行楽シーズンの休日にだけ発生する、季節的な渋滞',
        ],
        answerIndex: 0,
        explanation:
          '第一段的定義句：「はっきりした原因が見つからないまま発生し、いつのまにか消えていく渋滞は『自然渋滞』と呼ばれ」。事故處理拖長正是「有明確原因」的塞車，方向相反；上坡與隧道口只是「波の発生地点になりやすい」場所，並非只在該處發生，也不是地形直接造成；「休日にだけ」文中完全沒有提及。',
        explanationEn:
          'The defining sentence in the first paragraph reads: 「はっきりした原因が見つからないまま発生し、いつのまにか消えていく渋滞は『自然渋滞』と呼ばれ」. A jam that drags on because of accident cleanup is precisely one with a clear cause — the opposite case; uphill approaches and tunnel entrances are only spots that 「波の発生地点になりやすい」, not the sole places jams occur, nor is terrain named as the direct cause; jams occurring only on holidays is never mentioned.',
      },
      {
        id: 'n1-reading-chobun-004-q2',
        stem: '第二段落によると、自然渋滞はどのようにして生まれるか。',
        options: [
          '車間が詰まった状態で、小さな減速が後方へ伝わるたびに増幅され、やがて停止にまで育つ。',
          '先頭の一台が急停止するという「事件」を起こし、それが全体を止めてしまう。',
          'すべての運転者が同じ場所でいっせいに速度を落とすため、流れ全体が止まる。',
          '後方の車の加速が前方へ波のように伝わり、車間距離を押しつぶしてしまう。',
        ],
        answerIndex: 0,
        explanation:
          '第二段的連鎖：車間縮短後，前車稍一減速，後車只能踩得更重，「一台一台の減速はごく小さくても、それが後方へ伝わるたびに増幅され、数十台後ろでは完全な停止に至る」。文中明言渋滞「先頭の誰かが引き起こした『事件』ではなく」，第二個選項恰好踩中這個否定；「いっせいに」不符合逐台傳遞放大的描述；波是減速由前往後傳，「加速が前方へ」方向與內容都錯。',
        explanationEn:
          'The chain in the second paragraph: once following distances shrink, a slight slowdown by the car in front forces the next car to brake a little harder, and 「一台一台の減速はごく小さくても、それが後方へ伝わるたびに増幅され、数十台後ろでは完全な停止に至る」. The text explicitly denies that a jam is 「先頭の誰かが引き起こした『事件』」, which is exactly the claim of the second option; 「いっせいに」 contradicts the car-by-car transmission and amplification; and the wave is deceleration traveling backward, so acceleration moving forward is wrong in both direction and substance.',
      },
      {
        id: 'n1-reading-chobun-004-q3',
        stem: '「渋滞という波のほうが車列をさかのぼっている」とは、どういうことか。',
        options: [
          '渋滞は特定の場所にとどまるのではなく、車の流れと逆向きに後方へ移動していくということ',
          '渋滞の中の車は前進しているように感じるだけで、実際にはまったく動いていないということ',
          '渋滞の波は車の流れと同じ向きに、時速二十キロで先頭へ進んでいくということ',
          '渋滞を抜けた車が速度を上げ、次の渋滞の先頭に追いついてしまうということ',
        ],
        answerIndex: 0,
        explanation:
          '第三段：減速の波「車の流れとは逆向きに、つまり後方へ向かって時速二十キロほどで移動していく」，所以塞車不是釘在一個地點，而是像波一樣在路上逆行——「特定の場所に発生して居座るものではなく」。駕駛「通り抜けているように感じられる」並非錯覺說車子沒動，車列確實在前進；「同じ向きに先頭へ」把方向弄反；最後一個選項是文中沒有的情節。',
        explanationEn:
          'The third paragraph says the deceleration wave moves 「車の流れとは逆向きに、つまり後方へ向かって時速二十キロほどで移動していく」, so a jam is not something that settles at one spot — 「特定の場所に発生して居座るものではなく」 — but travels back up the line of cars as a wave. Drivers only feel they are passing through it; the cars really are inching forward, so claiming they do not move at all is wrong; saying the wave heads forward in the same direction reverses it; the final option describes a scenario nowhere in the passage.',
      },
      {
        id: 'n1-reading-chobun-004-q4',
        stem: 'この文章で筆者が最も言いたいことは何か。',
        options: [
          '一台一台が車間にゆとりを持って減速の波を吸収することが、結果として全体の流れを速くする。',
          '自然渋滞を根本的になくすには、道路の車線を増やすしか方法がない。',
          '渋滞の主な原因は割り込みであり、それを厳しく取り締まることが最も有効な対策だ。',
          '道路を無駄なく使うために、各車はできるだけ車間を詰めて走行すべきだ。',
        ],
        answerIndex: 0,
        explanation:
          '第四、五段收束全文：足夠的車間是吸收減速波的「緩衝材」，少數車保持車距就能抑制塞車，最後歸結為「一歩引く『ゆとり』が全体を速くする」的逆說。增加車道文中隻字未提；割り込み只是說明許多人「覺得吃虧」的心理，並非塞車主因；「車間を詰めて走行すべき」正是文中要打破的直覺，與主旨完全相反。',
        explanationEn:
          'The last two paragraphs tie it together: an ample following distance acts as a 「緩衝材」 that absorbs the deceleration wave, even a small number of cars keeping their distance can suppress jams, and the essay closes with the paradox that 「一歩引く『ゆとり』が全体を速くする」. Adding lanes is never raised; cutting in appears only to explain why many drivers feel that leaving space is a losing move, not as the main cause of congestion; and urging cars to close up tight is precisely the intuition the essay sets out to overturn.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n1-reading-chobun-005',
    passageTitle: '下手でいられる場所',
    passage:
      '五十歳の誕生日を過ぎた頃、私はピアノを習い始めた。きっかけは大したものではない。娘が使わなくなった電子ピアノが部屋の隅で埃をかぶっているのを見て、ふと鍵盤に触れてみたくなった、それだけのことである。会社では部下に教える立場になって久しく、「わからない」と口にする機会など、もう何年もなかった。\n体験レッスンの日、私は自分の指がここまで言うことを聞かないものかと愕然とした。右手と左手を別々に動かすという、子どもなら数週間で越えるらしい壁の前で、五十男の指は面白いほどもつれた。先生は二十代の女性で、「大丈夫ですよ、皆さん最初はそうです」と笑ったが、その「皆さん」の中に自分より年下の小学生が大勢含まれているのだと思うと、帰り道は少しばかり惨めだった。\n正直に言えば、始めて半年ほどは、やめる口実ばかり探していた。仕事が忙しい、指が痛い、そもそも今さら上達したところで何になる——。発表会で、私の前に弾いた小学生が難しい曲を軽々と仕上げたときには、順番を待つ舞台袖で本気で帰りたくなった。人前で堂々と下手でいることが、これほど体力の要ることだとは知らなかった。\n潮目が変わったのは、二年目の冬である。仕事で大きな失敗をして、数日間、何も手につかなかった週があった。その週のある夜、気がつくと私はピアノの前に座っていた。うまく弾こうという気持ちはどこにもなく、ただ同じ小節を何度も繰り返していた。弾けない箇所を弾けないまま、何度もなぞる。その単純な繰り返しの中で、会社での自分の肩書きも失敗も、しばらくのあいだ、どこかへ消えていた。\nそのとき、ようやく気がついたのである。私がこの歳でピアノに向かう理由は、上達ではなかった。評価も比較もされずに、堂々と下手でいられる場所。間違えても誰の迷惑にもならず、間違えた分だけ明日やることがはっきりする場所。大人になってからの私は、そういう場所をひとつも持っていなかったのだ。\nいまも私の腕前は、お世辞にも人に聴かせられるようなものではない。それでも週に一度のレッスンは、もう三年続いている。先日、先生に「最近、音が変わりましたね」と言われた。技術のことではないだろう。たぶん、鍵盤の前での私の座り方が変わったのだと思う。うまくなるためではなく、下手な自分と付き合うために弾く。五十の手習いが私に教えてくれたのは、皮肉なことに、ピアノそのものよりずっと大きなことだった。',
    explanation: '',
    questions: [
      {
        id: 'n1-reading-chobun-005-q1',
        stem: '体験レッスンの帰り道、「私」が「少しばかり惨め」だったのはなぜか。',
        options: [
          '先生の言う「皆さん」には自分より年下の小学生も大勢含まれていると思うと、指がもつれる自分が情けなく感じられたから。',
          '若い先生に子ども扱いされて、ばかにされたように感じたから。',
          '指が痛くなり、レッスンを続けるのは無理だと分かったから。',
          '娘の電子ピアノを勝手に使ったことを、あとから後悔したから。',
        ],
        answerIndex: 0,
        explanation:
          '第二段的脈絡：五十歲的手指在孩子幾週就能跨過的關卡前「面白いほどもつれた」，先生安慰說「皆さん最初はそうです」，但一想到那些「皆さん」多是比自己年幼的小學生，便覺得難堪。先生只是笑著鼓勵，「子ども扱いされた」是過度推論；「指が痛い」是後文找藉口時才出現的字眼，並非此時的事實；後悔用女兒的琴更是文中沒有的內容。',
        explanationEn:
          'Follow the second paragraph: before a hurdle children reportedly clear in a few weeks, the fifty-year-old\'s fingers 「面白いほどもつれた」, and though the teacher reassured him with 「大丈夫ですよ、皆さん最初はそうです」, realizing that those 「皆さん」 largely meant elementary schoolers younger than himself made the walk home feel miserable. The teacher only smiled encouragingly, so being treated like a child is an over-reading; sore fingers appear later only as one of his excuses, not as a fact here; regretting using his daughter\'s piano is nowhere in the text.',
      },
      {
        id: 'n1-reading-chobun-005-q2',
        stem: '習い始めて半年ほどの「私」は、どのような様子だったか。',
        options: [
          '思うように上達せず、仕事の忙しさなどを挙げては、やめるための口実ばかり探していた。',
          '発表会で難しい曲を弾き切り、少しずつ自信をつけ始めていた。',
          '小学生に負けまいと、練習時間を大幅に増やしていた。',
          '仕事が忙しくなり、実際にレッスンを何度も休んでいた。',
        ],
        answerIndex: 0,
        explanation:
          '第三段開頭直言「始めて半年ほどは、やめる口実ばかり探していた」，並列舉「仕事が忙しい、指が痛い、今さら上達したところで何になる」等藉口。發表會上輕鬆彈完難曲的是排在前面的小學生，不是「私」，第二個選項挪用了文中字眼；「練習時間を増やした」「レッスンを休んだ」文中都沒有寫，忙碌只是藉口而非實際缺課。',
        explanationEn:
          'The third paragraph opens bluntly: 「始めて半年ほどは、やめる口実ばかり探していた」, listing excuses such as 「仕事が忙しい、指が痛い、そもそも今さら上達したところで何になる」. It was the elementary schooler performing before him — not the narrator — who breezed through a difficult piece at the recital, so the second option merely recycles words from the passage; increasing practice time and actually skipping lessons are both unmentioned, as busyness was an excuse, not real absence.',
      },
      {
        id: 'n1-reading-chobun-005-q3',
        stem: '二年目の冬、ピアノの前に座っていた時間は、「私」にとってどのようなものだったか。',
        options: [
          'うまく弾こうとせず同じ小節を繰り返すうちに、会社での肩書きや失敗をしばらく忘れられる時間だった。',
          '弾けなかった箇所がついに弾けるようになり、上達の手応えを得た時間だった。',
          '仕事の失敗を取り返そうと、発表会に向けて猛練習をした時間だった。',
          '先生に「音が変わった」と褒められて、練習が急に楽しくなった時間だった。',
        ],
        answerIndex: 0,
        explanation:
          '第四段寫得很清楚：「うまく弾こうという気持ちはどこにもなく」，只是反覆彈同一小節，在單純的重複中「会社での自分の肩書きも失敗も、しばらくのあいだ、どこかへ消えていた」。文中明言「弾けない箇所を弾けないまま」，所以「ついに弾けるようになった」是錯的；此時毫無為發表會苦練的描寫；「音が変わりましたね」是三年後最近的事，時間點對不上。',
        explanationEn:
          'The fourth paragraph is explicit: 「うまく弾こうという気持ちはどこにもなく」, he simply repeated the same bars, and within that plain repetition 「会社での自分の肩書きも失敗も、しばらくのあいだ、どこかへ消えていた」. Since the text says 「弾けない箇所を弾けないまま」, claiming he finally mastered the passage is wrong; there is no description of cramming for a recital here; and the teacher\'s remark 「最近、音が変わりましたね」 comes three years later, so the timing does not fit.',
      },
      {
        id: 'n1-reading-chobun-005-q4',
        stem: 'この文章全体から見て、「私」がピアノを続けている理由として最も合っているものはどれか。',
        options: [
          '上達のためではなく、評価も比較もされずに堂々と下手でいられる場所を持つためである。',
          '三年続けた成果が現れ、人に聴かせられる腕前になってきたからである。',
          '先生の期待に応えて、いつか難しい曲を仕上げたいからである。',
          '娘が使わなくなった電子ピアノを、無駄にしたくないからである。',
        ],
        answerIndex: 0,
        explanation:
          '第五段點出全文核心：「私がこの歳でピアノに向かう理由は、上達ではなかった」，要的是「評価も比較もされずに、堂々と下手でいられる場所」，結尾也呼應「うまくなるためではなく、下手な自分と付き合うために弾く」。文中明言琴藝「お世辞にも人に聴かせられるようなものではない」，第二個選項與此矛盾；「先生の期待」文中沒有著墨；電子琴只是起頭的契機，不是持續三年的理由。',
        explanationEn:
          'The fifth paragraph names the heart of the essay: 「私がこの歳でピアノに向かう理由は、上達ではなかった」 — what he wanted was a place where he could be 「評価も比較もされずに、堂々と下手でいられる」, echoed by the closing line 「うまくなるためではなく、下手な自分と付き合うために弾く」. The text plainly says his playing is 「お世辞にも人に聴かせられるようなものではない」, contradicting the second option; the teacher\'s expectations are never dwelt on; and the idle electric piano was merely the initial trigger, not the reason he has continued for three years.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n1-reading-chobun-006',
    passageTitle: '大人の一年はなぜ速いのか',
    passage:
      '「ついこの間、年が明けたと思ったら、もう年末だ」。ある年齢を過ぎた人が集まると、決まってこんな話になる。子どもの頃の一年はあれほど長かったのに、大人の一年はなぜこうも速く過ぎるのか。昔からよく知られた説明に、年齢が上がるほど一年が人生全体に占める割合が小さくなるから、というものがある。五歳の子どもにとっての一年は人生の五分の一だが、五十歳にとっては五十分の一にすぎない、というわけだ。一見もっともらしいが、この説明には弱点がある。私たちは一年を人生全体と見比べながら生きているわけではないし、同じ大人でも、旅行や転職のあった年は長く感じられるという事実をうまく説明できないのである。\nそこで手がかりになるのが、時間の感じ方には二種類あるという区別だ。一つは、いままさに過ごしている最中の感覚である。退屈な会議は長く、夢中で遊ぶ休日は短い。もう一つは、あとから振り返ったときの感覚である。こちらは奇妙なことに、しばしば前者と逆転する。あっという間に過ぎたはずの充実した旅行が、振り返ると長い時間だったように思え、だらだらと長かったはずの平凡な一週間が、記憶の中ではほとんど厚みを持たないのだ。\nなぜ逆転が起こるのか。振り返ったときの時間の長さは、時計が刻んだ長さではなく、その期間に残った記憶の量、いわば記憶の密度によって見積もられるからだと考えられている。初めての経験は細部まで記憶に刻まれるが、繰り返しの日々は「いつもどおり」として一括りにされ、ほとんど痕跡を残さない。子どもの毎日は初めてだらけであり、一年分の記憶は膨大になる。一方、大人の生活は通い慣れた道と決まった手順で組み立てられており、一年たっても取り出せる記憶が乏しい。振り返るたびに「何もないうちに過ぎた」と感じられ、それが「一年が速い」という実感になるのである。\nこの見方に立てば、大人の一年が速いのは、加齢そのものというより、生活から新しさが減っていくことの結果だということになる。だとすれば、打つ手はある。時間の流れ自体は変えられなくても、記憶の密度なら増やせるからだ。通勤の道順を変えてみる、行ったことのない土地を歩く、慣れない分野を学んでみる。大げさな冒険でなくてよい。「初めて」を意識的に生活へ混ぜ込むことが、振り返ったときの一年に厚みを与えるのである。\n念のために言えば、予定を詰め込んで忙しくすることと、記憶の密度を上げることとは別物である。どれほど忙しくても、それが同じ作業の繰り返しであるなら、記憶にはほとんど残らない。年月の速さを嘆く暇があったら、来週ひとつ、やったことのないことを試してみる。一年の長さを決めるのは、案外そんな小さな選択の積み重ねなのかもしれない。',
    explanation: '',
    questions: [
      {
        id: 'n1-reading-chobun-006-q1',
        stem: '一年が人生全体に占める割合で説明する説について、筆者はどう考えているか。',
        options: [
          '一見もっともらしいが、経験の中身によって同じ大人でも一年の感じ方が変わる事実を説明できないという弱点がある。',
          '昔からよく知られているだけあって、最も説得力のある説明である。',
          '子どもの時間感覚は説明できるが、大人にはまったく当てはまらない。',
          '割合の計算そのものが誤っているため、成り立たない説である。',
        ],
        answerIndex: 0,
        explanation:
          '第一段先介紹比例說，隨即評為「一見もっともらしいが、この説明には弱点がある」：人不會邊活邊拿一年跟一生比，而且「旅行や転職のあった年は長く感じられるという事実をうまく説明できない」。筆者並未推崇它最有說服力，第二個選項方向相反；文中的弱點是對經驗差異無力，不是只對大人不適用；「五分の一」「五十分の一」的計算本身沒有被說是錯的。',
        explanationEn:
          'The first paragraph introduces the proportion theory and immediately judges it: 「一見もっともらしいが、この説明には弱点がある」 — we do not live while comparing each year to our whole life, and it 「旅行や転職のあった年は長く感じられるという事実をうまく説明できない」. The author never calls it the most persuasive account, so the second option points the wrong way; the stated weakness is its inability to handle differences in experience, not that it fails only for adults; and the arithmetic of 「五分の一」 and 「五十分の一」 is never said to be mistaken.',
      },
      {
        id: 'n1-reading-chobun-006-q2',
        stem: '第二段落の「逆転」とは、どのようなことか。',
        options: [
          '過ごしている最中には短く感じた充実した時間が振り返ると長く思え、長く感じた平凡な時間が記憶の中では厚みを持たないこと',
          '退屈だった会議が、終わってみると楽しい思い出に変わること',
          '子どもの一年と大人の一年の実際の長さが、入れ替わってしまうこと',
          '時計の進み方そのものが、年齢によって速くなったり遅くなったりすること',
        ],
        answerIndex: 0,
        explanation:
          '第二段區分「過ごしている最中の感覚」與「振り返ったときの感覚」，並說後者「しばしば前者と逆転する」：轉眼即逝的充實旅行回頭看反而顯得長，「だらだらと長かったはずの平凡な一週間」在記憶中卻「ほとんど厚みを持たない」。無聊會議變成快樂回憶是文中沒有的說法；一年的「実際の長さ」與時鐘走速都沒有改變，文章談的始終是感覺，後兩個選項把主觀感受誤讀成客觀事實。',
        explanationEn:
          'The second paragraph distinguishes the feel of time while it passes from the feel in retrospect, noting the latter 「しばしば前者と逆転する」: a fulfilling trip that flew by seems long when looked back on, while 「だらだらと長かったはずの平凡な一週間」 ends up with 「ほとんど厚みを持たない」 in memory. A boring meeting turning into a fond memory appears nowhere; and neither the actual length of a year nor the clock\'s pace ever changes — the essay is about perception throughout, so the last two options mistake subjective feeling for objective fact.',
      },
      {
        id: 'n1-reading-chobun-006-q3',
        stem: '筆者によると、大人の一年が「速い」と感じられるのはなぜか。',
        options: [
          '繰り返しの日々は「いつもどおり」として一括りにされ、振り返ったときに取り出せる記憶が乏しいから。',
          '加齢によって脳の働きが衰え、時間を測る力そのものが落ちるから。',
          '大人は子どもより予定が多く、常に忙しさに追われているから。',
          '通い慣れた道を使うことで、実際の移動時間が短くなるから。',
        ],
        answerIndex: 0,
        explanation:
          '第三段給出機制：回顧時的時間長度取決於「記憶の密度」，重複的日子被當作「いつもどおり」打包、「ほとんど痕跡を残さない」，於是大人「一年たっても取り出せる記憶が乏しい」，才有一年飛快之感。第四段明言原因「加齢そのものというより、生活から新しさが減っていくこと」，排除腦力衰退說；末段又強調忙碌與記憶密度是「別物」；「実際の移動時間が短くなる」混淆了客觀時間與主觀感受。',
        explanationEn:
          'The third paragraph supplies the mechanism: retrospective length is estimated by 「記憶の密度」, and repetitive days get bundled up as 「いつもどおり」, leaving 「ほとんど痕跡を残さない」, so an adult finds 「一年たっても取り出せる記憶が乏しい」 — hence the year feels fast. The fourth paragraph states the cause is 「加齢そのものというより、生活から新しさが減っていくこと」, ruling out cognitive decline; the final paragraph stresses that busyness and memory density are 「別物」; and shorter actual travel time confuses objective time with subjective feeling.',
      },
      {
        id: 'n1-reading-chobun-006-q4',
        stem: 'この文章で筆者が最も言いたいことは何か。',
        options: [
          '「初めて」の経験を意識的に生活へ混ぜ込んで記憶の密度を増やせば、振り返ったときの一年に厚みを取り戻せる。',
          '一年を長く感じるためには、予定をできるだけ詰め込んで忙しく過ごすべきだ。',
          '時間が速く感じられるのは加齢のせいなので、嘆かずに受け入れるしかない。',
          '時間の感覚を変えるには、大げさな冒険に出かけることが欠かせない。',
        ],
        answerIndex: 0,
        explanation:
          '第四段轉入對策：時間流速改不了，但「記憶の密度なら増やせる」——換通勤路線、走陌生土地、學不熟悉的領域，把「初めて」有意識地摻進生活，就能給回顧中的一年「厚みを与える」。末段明言塞滿行程的忙碌與提高記憶密度是「別物」，第二個選項正踩中這個否定；文中說原因「加齢そのものというより」新鮮感減少，且「打つ手はある」，並非只能認命；「大げさな冒険でなくてよい」直接否定了第四個選項。',
        explanationEn:
          'The fourth paragraph turns to remedies: the flow of time cannot be changed, but 「記憶の密度なら増やせる」 — vary the commute, walk unfamiliar places, study an unfamiliar field; deliberately mixing 「初めて」 into daily life gives the remembered year 「厚み」. The last paragraph declares that cramming one\'s schedule and raising memory density are 「別物」, which is exactly what the second option violates; the cause is 「加齢そのものというより」 a loss of novelty and the author insists 「打つ手はある」, so resignation is not the message; and 「大げさな冒険でなくてよい」 directly rules out the fourth option.',
      },
    ],
  },
]
