import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    kind: 'passage',
    id: 'n1-reading-togo-001',
    passage:
      'Ａ\n生成ＡＩによる創作を「まがいもの」と切り捨てる声は根強いが、私はそこに新しい表現の可能性を見出したい。写真が登場した当初、絵画の敵とみなされながら、やがて独自の芸術として認められていった歴史を思い起こすべきだろう。ＡＩが無数の候補を瞬時に生み出すとしても、そこから何を選び、どう磨き上げるかを最終的に決めるのは人間である。道具がどれほど変わっても、価値を生む中心に人間の判断があるという構図は揺らがない。恐れるべきは新しい道具ではなく、それを前にした思考の停止のほうである。いま問われているのは技術そのものの是非ではなく、それを使いこなす側の構想力なのだ。\nＢ\n創作の価値は、完成した表現の巧みさだけでなく、作り手が固有の経験と格闘した過程にこそ宿ると私は考える。生成ＡＩの出力は、既存の膨大な作品を統計的に組み合わせたものにすぎず、そこに「誰かが生きた証」を読み取ることはできない。もっとも、資料の整理や下書きの作成といった補助的な作業にＡＩを使うことまで否定するつもりはない。最終的な表現の核心に、人間の経験が刻まれているかどうか。作品の価値を分けるのは、結局のところそこではないだろうか。',
    explanation: '',
    questions: [
      {
        id: 'n1-reading-togo-001-q1',
        stem: 'ＡとＢの筆者に共通する認識はどれか。',
        options: [
          '作品の価値を最終的に左右するのは、人間がどう関わるかである',
          '生成ＡＩの出力は既存の作品の組み合わせにすぎず、創作に用いる意味はない',
          '新しい技術は、時間がたてば必ず独自の芸術として認められるようになる',
          '創作におけるＡＩの利用は、下書きなどの補助的な作業に限定すべきである',
        ],
        answerIndex: 0,
        explanation:
          'Ａ說「価値を生む中心に人間の判断がある」，Ｂ說作品價值取決於「人間の経験が刻まれているかどうか」——兩者都把價值的關鍵放在「人如何參與」上。選項2 只是Ｂ對 AI 輸出的評價，且Ｂ也承認補助性使用有意義，說「沒有意義」過頭；選項3 是Ａ舉攝影史的類比，「必ず」太絕對且Ｂ未提；選項4 只是Ｂ的讓步，Ａ反而積極肯定 AI 參與創作。',
        explanationEn:
          'A says 「価値を生む中心に人間の判断がある」 and B says a work\'s value turns on 「人間の経験が刻まれているかどうか」 — both locate the decisive factor in how humans are involved. Option 2 is only B\'s assessment of AI output, and since B accepts auxiliary uses, saying AI has no place in creation overshoots; option 3 comes from A\'s photography analogy, but 「必ず」 is too absolute and B never says it; option 4 is merely B\'s concession, while A positively welcomes AI in creation.',
      },
      {
        id: 'n1-reading-togo-001-q2',
        stem: '生成ＡＩと創作について、ＡとＢはそれぞれどのように述べているか。',
        options: [
          'Ａは候補から選び磨き上げる人間の構想力に価値を見出し、Ｂは作り手の経験が表現の核心に刻まれているかどうかを重視している',
          'Ａは技術そのものの是非をまず論じるべきだと主張し、Ｂは補助的な作業へのＡＩの利用も認めるべきではないと述べている',
          'ＡもＢも、生成ＡＩによる作品は写真と同じように、やがて独自の芸術として認められると予測している',
          'Ａは人間の判断はもはや不要になると述べ、Ｂは統計的な組み合わせにも「生きた証」が宿ると述べている',
        ],
        answerIndex: 0,
        explanation:
          'Ａ的重心在「何を選び、どう磨き上げるかを決めるのは人間」的構想力；Ｂ的重心在創作者的親身經驗是否刻在作品核心。選項2 兩邊都說反了：Ａ明言「問われているのは技術そのものの是非ではなく」，Ｂ明言不否定補助性使用；選項3 攝影類比只有Ａ提出，Ｂ並無此預測；選項4 與兩篇主張完全相反，Ａ強調人的判斷不可或缺，Ｂ說 AI 輸出讀不出生きた証。',
        explanationEn:
          'A\'s emphasis lies in the human power of conception — 「何を選び、どう磨き上げるかを決めるのは人間」 — while B\'s lies in whether the maker\'s lived experience is engraved in the core of the expression. Option 2 gets both writers backwards: A explicitly says 「問われているのは技術そのものの是非ではなく」, and B explicitly does not reject auxiliary uses; option 3 fails because the photography analogy is A\'s alone and B makes no such prediction; option 4 contradicts both essays — A insists human judgment is indispensable, and B says no 「誰かが生きた証」 can be read in AI output.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n1-reading-togo-002',
    passage:
      'Ａ\n年功序列に代わって、成果主義を導入する企業が増えている。働いた年数ではなく、実際に生み出した成果に応じて処遇を決める仕組みは、努力が正当に報われるという点で、とりわけ若手にとって公平だと言える。頑張っても頑張らなくても処遇が変わらない環境では、意欲のある人材ほど組織を去っていくだろう。ただし、この制度が機能するためには、何をどのように評価するのかという基準が明確で、社員に納得できる形で示されていることが不可欠である。基準の曖昧な成果主義は、単なる人件費削減の口実に堕しかねない。\nＢ\n成果主義の導入には慎重であるべきだと私は考える。数字に表れる成果だけが評価されるなら、社員は確実に達成できる目標しか掲げなくなり、失敗の危険を伴う挑戦や、同僚への協力は後回しにされてしまう。組織の力は、短期の数字には表れない支え合いの上に成り立っているのだ。その土台を軽視すれば、組織は内側から静かに崩れていく。とはいえ、年功序列に戻ればよいという話でもない。成果に至るまでの過程や、他者への貢献をどう評価に組み込むのか。その設計を欠いたまま制度だけを入れ替えても、職場は疲弊するだけである。',
    explanation: '',
    questions: [
      {
        id: 'n1-reading-togo-002-q1',
        stem: '成果主義の導入について、ＡとＢの立場はどのようなものか。',
        options: [
          'Ａは努力が正当に報われる公平な仕組みだとして肯定的だが、Ｂは挑戦や協力が失われかねないとして慎重である',
          'Ａは人件費を削減する手段として有効だと評価し、Ｂは年功序列に戻すべきだと主張している',
          'ＡもＢも、成果主義は若手の意欲を高める最良の制度であり、早急に導入すべきだと考えている',
          'Ａは評価基準が曖昧なままでも導入する価値があるとし、Ｂは数字に表れる成果だけを評価すべきだとしている',
        ],
        answerIndex: 0,
        explanation:
          'Ａ從「努力が正当に報われる」「若手にとって公平」肯定成果主義；Ｂ開頭即說「導入には慎重であるべきだ」，理由是挑戰與協力會被犧牲。選項2 兩邊都錯：Ａ把人事費刪減視為制度墮落的結果而非優點，Ｂ也明言「年功序列に戻ればよいという話でもない」；選項3 Ｂ並不贊成急著導入；選項4 與Ａ「基準明確が不可欠」、Ｂ批判只看數字的立場正好相反。',
        explanationEn:
          'A endorses performance-based pay as fair, citing 「努力が正当に報われる」 and calling it 「若手にとって公平」; B opens with 「導入には慎重であるべきだ」 because risky challenges and cooperation with colleagues would be pushed aside. Option 2 is wrong on both sides: A treats payroll cutting as what the system degenerates into, not a virtue, and B explicitly says 「年功序列に戻ればよいという話でもない」; option 3 fails since B hardly urges rapid adoption; option 4 directly contradicts A\'s insistence that clear criteria are indispensable and B\'s criticism of judging by numbers alone.',
      },
      {
        id: 'n1-reading-togo-002-q2',
        stem: 'ＡとＢで共通して述べられていることは何か。',
        options: [
          '評価の基準や方法をどう設計するかによって、制度がうまく機能するかどうかが決まる',
          '成果主義を導入しさえすれば、意欲のある人材の流出は確実に防ぐことができる',
          '短期の数字に表れない同僚への協力は、評価の対象から外したほうがよい',
          '年功序列は努力が報われる公平な制度なので、できるだけ維持したほうがよい',
        ],
        answerIndex: 0,
        explanation:
          'Ａ說制度要能運作，前提是評價基準明確且讓員工信服；Ｂ說缺了「過程や貢献をどう評価に組み込むか」的設計，換制度只會讓職場疲弊——兩者共通點是「評價的設計決定制度成敗」。選項2 是把Ａ的論點誇大成「確実に防げる」，且Ｂ未提；選項3 與Ｂ主張把協力納入評價正好相反；選項4 兩篇都不主張維持年功序列，Ａ視其為被取代的對象，Ｂ也明言不是走回頭路。',
        explanationEn:
          'A says the system can only function if the evaluation criteria are clear and presented in a way employees can accept; B says that without designing 「過程や、他者への貢献をどう評価に組み込むのか」, swapping systems will only exhaust the workplace — the shared point is that the design of evaluation decides whether the system succeeds. Option 2 inflates A\'s argument into a guarantee (「確実に」), which B never discusses; option 3 is the opposite of B\'s call to build cooperation into evaluation; option 4 fails because neither writer defends keeping seniority-based pay — A treats it as the thing being replaced, and B explicitly rejects going back to it.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n1-reading-togo-003',
    passage:
      'Ａ\n感染症の流行を機に広がった在宅勤務を、非常時のその場しのぎとして捉えるのは誤りである。通勤に費やされてきた膨大な時間が生活へと戻り、育児や介護を抱える人、地方に暮らす人にも働く道が開かれた。これは多様な人材の力を引き出す得がたい好機でもある。この変化をいまさら手放すべきではない。「オフィスにいる時間の長さ」ではなく「生み出した成果」で仕事を測る管理へと発想を切り替えれば、働く場所はもはや本質的な問題ではなくなる。少なくとも、全員が毎日出社する働き方を当然の前提とする時代には、もう戻れないのである。\nＢ\n在宅勤務の利点は認めるが、職場という場を失うことの代償も直視すべきだ。廊下での立ち話や何気ない雑談といった偶然のやりとりから新しい発想が生まれ、新人は先輩の仕事ぶりを間近に見ながら育っていく。画面越しの連絡は用件を済ませるには十分でも、こうした目に見えない機能までは代替できない。失われたものの大きさは、あとになってじわじわと効いてくるのだ。かつてのように毎日全員が出社する必要はないにせよ、対面と在宅それぞれの長所を生かした組み合わせを、仕事の性質ごとに設計していくことが現実的だろう。',
    explanation: '',
    questions: [
      {
        id: 'n1-reading-togo-003-q1',
        stem: 'ＡとＢの筆者に共通する認識はどれか。',
        options: [
          '全員が毎日出社するかつての働き方を、当然の前提とすることはできない',
          '在宅勤務では、新人の育成や偶然のやりとりから生まれる発想が期待できない',
          '成果で仕事を測る管理に切り替えれば、働く場所は本質的な問題ではなくなる',
          '在宅勤務は非常時に限って認められるべき、一時的な措置である',
        ],
        answerIndex: 0,
        explanation:
          'Ａ結尾說「全員が毎日出社する働き方を当然の前提とする時代には、もう戻れない」，Ｂ也讓步承認「毎日全員が出社する必要はない」——這是兩篇唯一明文重疊的認識。選項2 是Ｂ單方面對在宅勤務代價的指摘，Ａ未提；選項3 是Ａ單方面的主張，Ｂ反而認為有螢幕無法替代的機能；選項4 恰好是Ａ開頭批判的「その場しのぎ」觀點，兩篇都不採取此立場。',
        explanationEn:
          'A closes with 「全員が毎日出社する働き方を当然の前提とする時代には、もう戻れない」, and B likewise concedes 「毎日全員が出社する必要はない」 — this is the only understanding the two passages explicitly share. Option 2 is B\'s one-sided complaint about the costs of remote work, which A never raises; option 3 is A\'s one-sided claim, whereas B holds that some functions cannot be replaced through a screen; option 4 is precisely the stopgap (「その場しのぎ」) view that A attacks at the outset, and neither writer takes that position.',
      },
      {
        id: 'n1-reading-togo-003-q2',
        stem: '今後の働き方について、ＡとＢの主張はどのように異なるか。',
        options: [
          'Ａは成果による管理を前提に在宅勤務を続けるべきだとし、Ｂは対面の長所も生かした組み合わせを仕事の性質ごとに設計すべきだとしている',
          'Ａは仕事の性質ごとの設計が必要だと述べ、Ｂは全員が在宅で働くべきだと述べている',
          'Ａは通勤時間が減っても生活は変わらないと述べ、Ｂは画面越しの連絡で職場の機能はすべて代替できると述べている',
          'ＡもＢも、オフィスにいる時間の長さで仕事を評価する管理に戻すべきだと考えている',
        ],
        answerIndex: 0,
        explanation:
          'Ａ主張改成以成果衡量工作，讓在宅勤務延續下去；Ｂ則主張正視面對面的無形機能，按工作性質設計對面與在宅的併用——一個往「場所不重要」推進，一個往「兩者組合」收斂。選項2 把兩篇的主張互換了，「仕事の性質ごとに設計」是Ｂ的說法；選項3 與兩篇內容相反，Ａ正是肯定通勤時間回歸生活，Ｂ明言無形機能「代替できない」；選項4 兩篇都沒有回到以在辦公室時間長短評價的主張。',
        explanationEn:
          'A argues for switching to management that measures 「生み出した成果」 so remote work can continue, pushing toward the idea that location no longer matters; B argues for facing the invisible functions of the office and designing a blend of in-person and remote work by the nature of each task. Option 2 swaps the two positions — 「仕事の性質ごとに設計」 is B\'s phrase; option 3 contradicts both texts, since A celebrates commuting time returning to daily life and B says the intangible functions 「代替できない」; option 4 fails because neither writer wants to go back to evaluating work by hours spent in the office.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n1-reading-togo-004',
    passage:
      'Ａ\n東京への一極集中が長く続いた結果、地方では人口減少と担い手不足が深刻化し、大災害の際に国全体の機能が麻痺しかねない危うさも増している。地方の衰退をこのまま放置してよいはずがない。幸い、在宅勤務の普及により、都市の企業に籍を置いたまま地方で暮らすという選択が現実味を帯びてきた。国や自治体は移住や拠点の分散を後押しする制度を整え、人の流れを地方へ向け直すべきである。人が動けば仕事が生まれ、仕事があればさらに人が集まる。この循環を取り戻すことこそ、国土全体の安全と活力を高める道だと私は考える。\nＢ\n地方の活力の低下が放置できない問題であることは論をまたない。だが、都市への集中を悪と決めつけ、人や企業を無理に散らばらせる政策には賛成できない。人が密に集まるからこそ知識が交わり、新しい産業が生まれるのであり、その利点を自ら手放すのは賢明ではない。実際、補助金で移住を促しても、仕事や教育の受け皿がなければ人は定着しないだろう。目指すべきは全国に薄く人を配ることではなく、各地方の中核となる都市に機能を集め、そこにしかない産業や文化を磨くことである。小さな集中を各地に育てることが、結果として国全体の分散につながるのだ。',
    explanation: '',
    questions: [
      {
        id: 'n1-reading-togo-004-q1',
        stem: 'ＡとＢの筆者に共通する認識はどれか。',
        options: [
          '地方の活力が低下している現状を、このまま放置すべきではない',
          '補助金による移住の促進こそが、地方の衰退を止める最も有効な手段である',
          '都市に人が集まることの利点は大きいので、分散を論じる必要はない',
          '在宅勤務の普及によって、人の流れはすでに地方へ大きく向かい始めている',
        ],
        answerIndex: 0,
        explanation:
          'Ａ說「地方の衰退をこのまま放置してよいはずがない」，Ｂ開頭也說地方活力低下是「放置できない問題」，這是兩篇明文重疊的認識。選項2 恰是Ｂ批判的做法（補助金促移住也難讓人定居），Ａ也未說是「最も有効」；選項3 只是Ｂ對集中利點的評價，且Ｂ仍主張培育地方的核心都市，並非不必談分散；選項4 誇大了Ａ的「現実味を帯びてきた」，Ａ只說可能性出現，Ｂ更未提及。',
        explanationEn:
          'A says 「地方の衰退をこのまま放置してよいはずがない」, and B opens by calling regional decline a 「放置できない問題」 — this is the recognition the two passages explicitly share. Option 2 is exactly the approach B criticizes (subsidized relocation will not make people settle without jobs and schools), and A never calls it the most effective means; option 3 reflects only B\'s view of the benefits of concentration, and even B still argues for nurturing regional core cities, so dispersal remains worth discussing; option 4 overstates A\'s 「現実味を帯びてきた」 — A only says the option has become realistic, and B does not mention it at all.',
      },
      {
        id: 'n1-reading-togo-004-q2',
        stem: '地方の衰退への対策について、ＡとＢの主張はどのように異なるか。',
        options: [
          'Ａは人の流れを都市から地方へ向け直す政策を進めるべきだとし、Ｂは各地方の中核都市に機能を集めて独自の強みを磨くべきだとしている',
          'Ａは各地の中核都市への集約を主張し、Ｂは全国に薄く人を配る政策を進めるべきだと主張している',
          'Ａは災害の危うさを理由に集中の維持を求め、Ｂは在宅勤務を前提とした移住の促進を求めている',
          'ＡもＢも、人や企業の移動には効果がないので、現状の一極集中を受け入れるほかないと考えている',
        ],
        answerIndex: 0,
        explanation:
          'Ａ的對策是政府整備制度、把人流導回地方；Ｂ則反對硬性分散，主張把機能集中到各地方的核心都市、打磨在地產業文化——「小さな集中」才能帶來全國的分散。選項2 把兩篇的主張互換，且「全国に薄く人を配る」正是Ｂ否定的做法；選項3 歸屬顛倒，災害風險是Ａ主張分散的理由而非維持集中的理由；選項4 兩篇都積極提出對策，沒有「只能接受現狀」的論調。',
        explanationEn:
          'A\'s remedy is for the state and municipalities to build supporting institutions and redirect the flow of people back to the regions; B opposes forced dispersal and instead proposes concentrating functions in each region\'s core city and polishing industries and culture found nowhere else — 「小さな集中」 in many places is what ultimately yields nationwide dispersal. Option 2 swaps the two positions, and spreading people thinly across the country is precisely what B rejects; option 3 reverses the attribution — disaster risk is A\'s reason for dispersal, not for maintaining concentration; option 4 fails because both writers actively propose countermeasures rather than resigning themselves to the status quo.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n1-reading-togo-005',
    passage:
      'Ａ\n教材のデジタル化に対しては、いまだに「学びは紙でなければ身につかない」という声が聞かれる。しかし、デジタル教材には紙にない利点が多い。一人ひとりの理解度に合わせて問題の難しさを変えられるし、誤答の傾向もその場で記録され、つまずきに応じた復習へすぐつなげられる。動画や音声を組み合わせれば、文字だけでは伝わりにくい内容も直感的に理解できる。紙が長年果たしてきた役割を否定するつもりはない。だが、紙の再現をデジタルで目指すのではなく、デジタルを前提に学び方そのものを設計し直すこと。それが、これからの教育に求められる発想の転換である。\nＢ\nデジタル教材の検索のしやすさや、繰り返しの練習に強いという利点は、私も認めている。それでも、学びの中心にはなお紙を置くべきだと考える。画面で読むと、通知や別の画面についつい注意を奪われ、読みが浅くなりがちだ。紙の本であれば、書き込みやページをめくる感覚とともに内容が記憶に残り、全体のどのあたりを読んでいるのかも身体で把握できる。じっくり考えながら読む学習は紙で、調べものや反復の練習はデジタルで。教材の性質に応じて両者を使い分け、深く理解する経験の土台を紙で築くことが、遠回りに見えて確かな学びへの近道ではないだろうか。',
    explanation: '',
    questions: [
      {
        id: 'n1-reading-togo-005-q1',
        stem: 'ＡとＢで共通して述べられていることは何か。',
        options: [
          '紙とデジタルには、それぞれに認めるべき利点や役割がある',
          '学びの中心には紙を置き、デジタルは補助的な練習にとどめるべきである',
          '画面で読むと理解が浅くなるため、デジタル教材は学習に使わないほうがよい',
          'デジタルを前提に学び方を設計し直すことが、教育に求められる発想の転換である',
        ],
        answerIndex: 0,
        explanation:
          'Ａ雖力推數位教材，仍明言「紙が長年果たしてきた役割を否定するつもりはない」；Ｂ雖以紙為中心，也承認數位「検索のしやすさ」「繰り返しの練習に強い」的利點——兩篇共通處是承認雙方各有優點與角色。選項2 只是Ｂ的主張，Ａ反而要以數位為前提重新設計學習；選項4 只是Ａ的主張，Ｂ並不同意；選項3 把Ｂ「読みが浅くなりがち」的顧慮誇大成全面禁用，連Ｂ都主張按性質併用數位。',
        explanationEn:
          'Even while championing digital materials, A states 「紙が長年果たしてきた役割を否定するつもりはない」; and B, while keeping paper at the center, acknowledges digital\'s strengths in 「検索のしやすさ」 and repeated practice — so the common ground is that each medium has merits and a role worth recognizing. Option 2 is B\'s position alone, while A wants learning redesigned on a digital premise; option 4 is A\'s position alone, which B does not accept; option 3 inflates B\'s worry that on-screen reading 「読みが浅くなりがち」 into a total ban, even though B himself advocates using digital according to the material\'s nature.',
      },
      {
        id: 'n1-reading-togo-005-q2',
        stem: '学習における紙とデジタルについて、ＡとＢはそれぞれどのように述べているか。',
        options: [
          'Ａはデジタルを前提に学び方を設計し直すべきだとし、Ｂは深く読む学習は紙を軸に、教材の性質に応じて両者を使い分けるべきだとしている',
          'Ａは教材の性質に応じた使い分けを提案し、Ｂは紙の再現をデジタルで目指すべきだと述べている',
          'Ａは紙が果たしてきた役割を完全に否定し、Ｂはデジタル教材の利点を一切認めていない',
          'ＡもＢも、動画や音声を組み合わせた教材が今後の学びの中心になると予測している',
        ],
        answerIndex: 0,
        explanation:
          'Ａ的核心是「デジタルを前提に学び方そのものを設計し直す」的發想轉換；Ｂ的核心是深度閱讀用紙、查找與反覆練習用數位的分工，並以紙築起深入理解的基礎。選項2 把兩篇說法互換，且「紙の再現をデジタルで目指す」正是Ａ否定的方向；選項3 與兩篇的讓步語句相反，Ａ明言不否定紙的角色、Ｂ明言認同數位的利點；選項4 動画・音声只是Ａ舉的一項利點，兩篇都沒有做此預測。',
        explanationEn:
          'A\'s core is the shift in thinking: 「デジタルを前提に学び方そのものを設計し直す」. B\'s core is a division of labor — thoughtful, deep reading on paper, lookup and repeated drills on digital — with paper laying the foundation for deep understanding. Option 2 swaps the two positions, and 「紙の再現をデジタルで目指す」 is exactly the direction A rejects; option 3 contradicts both writers\' concessions — A explicitly does not deny paper\'s role and B explicitly grants digital\'s advantages; option 4 fails because video and audio are just one benefit A lists, and neither writer makes such a prediction.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n1-reading-togo-006',
    passage:
      'Ａ\n一つの会社に定年まで勤め上げる終身雇用は、経済が拡大を続けた時代の産物である。事業の入れ替わりが速くなった現在、企業がすべての社員の雇用を最後まで抱えきるという前提は、すでに崩れていると言わざるを得ない。守るべきは「会社にいられること」ではなく、「どこでも働けること」だろう。人が産業を越えて動きやすくなれば、衰えていく分野から伸びる分野へと働き手が移り、経済全体の新陳代謝も進む。もちろん、転職を個人の自己責任に丸投げしてよいわけではない。学び直しの支援や、会社を移っても不利にならない制度を社会の側に整えたうえで、雇用の流動化を進めていくべきである。\nＢ\n終身雇用をかつてのままの形で維持するのが難しいことは、私も認める。だが、流動化を急ぐ議論には危うさを感じる。長く勤めることが前提だからこそ、企業は時間と費用のかかる人材育成に本腰を入れ、働く側も目先の損得を離れて技能を磨いてきた。雇用が細切れになれば、企業はどうせ辞めていく人間を育てようとはしなくなる。育成の担い手を失った社会では、働き手の技能そのものが痩せ細っていくだろう。問われているのは、終身雇用を捨てるかどうかではなく、長期雇用が担ってきた育成の機能をどう残すかである。制度の中身を改めながらも、腰を据えて人を育てる仕組みは守るべきだと私は考える。',
    explanation: '',
    questions: [
      {
        id: 'n1-reading-togo-006-q1',
        stem: 'ＡとＢの筆者に共通する認識はどれか。',
        options: [
          '終身雇用をこれまでと同じ形のまま続けていくことは難しい',
          '雇用の流動化が進めば、働き手の技能は自然に高まっていく',
          '転職にともなう学び直しは、個人の自己責任に任せるべきである',
          '企業は今後も、すべての社員の雇用を定年まで抱え続けるべきである',
        ],
        answerIndex: 0,
        explanation:
          'Ａ說企業抱住所有員工到最後的前提「すでに崩れている」，Ｂ也讓步承認終身雇用「かつてのままの形で維持するのが難しい」——舊形態難以為繼是兩篇明文重疊的認識。選項2 與Ｂ的憂慮相反，Ｂ認為雇用零碎化會讓技能萎縮；選項3 恰是Ａ否定的「自己責任に丸投げ」；選項4 與兩篇一致的前提相反，連主張守住育成機能的Ｂ也說要「制度の中身を改めながら」。',
        explanationEn:
          'A says the premise that companies can hold on to every employee to the end has 「すでに崩れている」, and B concedes that maintaining lifetime employment 「かつてのままの形で維持するのが難しい」 — the shared recognition is that the old form cannot continue unchanged. Option 2 is the opposite of B\'s fear that fragmented employment would make workers\' skills wither; option 3 is precisely the 「自己責任に丸投げ」 that A rejects; option 4 contradicts the premise both writers accept — even B, who wants the training function preserved, says the system\'s content must be reformed (「制度の中身を改めながら」).',
      },
      {
        id: 'n1-reading-togo-006-q2',
        stem: 'これからの雇用について、ＡとＢの主張はどのように異なるか。',
        options: [
          'Ａは社会の側の支援を整えたうえで雇用の流動化を進めるべきだとし、Ｂは長期雇用が担ってきた人材育成の機能を守るべきだとしている',
          'Ａは腰を据えて人を育てる仕組みを守るべきだとし、Ｂは産業を越えた人の移動を積極的に促すべきだとしている',
          'ＡもＢも、終身雇用を直ちに廃止し、すべての雇用を短期の契約に切り替えるべきだと主張している',
          'Ａは学び直しの支援は不要だと述べ、Ｂは企業による人材育成はもはや意味を持たないと述べている',
        ],
        answerIndex: 0,
        explanation:
          'Ａ主張以「どこでも働けること」為軸，先由社會整備學習支援等制度、再推進雇用流動化；Ｂ則把焦點放在長期雇用支撐的人材育成機能，主張邊改制度內容邊守住沉住氣育人的機制。選項2 把兩篇的主張互換了；選項3 兩篇都沒有「直ちに廃止」「短期契約に切り替え」的激進主張，Ｂ更是反對急於流動化；選項4 與兩篇內容相反，Ａ明言需要學習支援，Ｂ正是要守住企業育成的價值。',
        explanationEn:
          'A takes 「どこでも働けること」 as the axis: society should first put retraining support and portability protections in place, then push employment fluidity forward. B focuses on the talent-development function that long-term employment has carried, arguing to preserve a system that patiently develops people while reforming its content. Option 2 swaps the two positions; option 3 fails because neither writer makes the radical claim of abolishing lifetime employment at once or converting all jobs to short-term contracts — B in fact warns against rushing fluidity; option 4 contradicts both texts, since A explicitly calls for retraining support and B\'s whole point is to defend corporate talent development.',
      },
    ],
  },
]
