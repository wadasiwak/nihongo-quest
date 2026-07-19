import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    kind: 'passage',
    id: 'n1-reading-tanbun-001',
    passage:
      '「無駄を省く」という言葉ほど、疑われずに流通している標語も珍しい。だが、組織から無駄とされるものを徹底的に取り除いた先に残るのは、目的の定まった作業だけである。新しい発想というのは、多くの場合、目的から外れた寄り道や、一見無意味な試行の中から生まれる。つまり効率化の追求は、短期の成果を確実にする一方で、長期の創造性を静かに削っていく営みでもあるのだ。無駄の全否定は、未来の可能性の切り捨てと紙一重である。',
    explanation: '',
    questions: [
      {
        id: 'n1-reading-tanbun-001-q1',
        stem: '筆者の考えに合うものはどれか。',
        options: [
          '無駄に見える行為の中にこそ、新しい発想が生まれる余地がある。',
          '効率化の追求をやめさえすれば、組織の創造性はおのずと回復する。',
          '短期の成果を求める姿勢は誤りであり、組織は成果主義を捨てるべきだ。',
          '無駄な作業を意図的に増やすほど、新しい発想は生まれやすくなる。',
        ],
        answerIndex: 0,
        explanation:
          '筆者說「新しい発想は…寄り道や一見無意味な試行の中から生まれる」，並警告全盤否定無駄形同切除未來的可能性，故正解是「看似無用之處藏有新發想的空間」。「やめさえすれば回復する」是文中沒有的過度推論；筆者也承認效率化能確保短期成果，並未主張拋棄成果主義；「刻意增加無用工作」更是把「不要全盤否定」曲解成反向操作。',
        explanationEn:
          'The author states 「新しい発想は…寄り道や一見無意味な試行の中から生まれる」 and warns that rejecting all waste borders on cutting off future possibilities, so the correct option — seemingly useless activity is precisely where new ideas can arise — matches. The claim that creativity recovers on its own 「やめさえすれば」 is an over-inference absent from the text; the author concedes that efficiency secures short-term results and never argues for abandoning results-oriented management; and deliberately increasing useless work twists the point (do not reject waste wholesale) into its opposite.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n1-reading-tanbun-002',
    passageTitle: '価格改定のお願い',
    passage:
      '拝啓　時下ますますご清栄のこととお慶び申し上げます。さて、原材料価格の高騰が長期化しており、弊社では生産工程の見直しをはじめ自助努力を重ねてまいりましたが、現行価格の維持は困難な状況に至りました。つきましては誠に不本意ながら、十月一日受注分より製品価格を平均五パーセント改定させていただきたく、ご案内申し上げます。何とぞ事情をご賢察のうえ、ご了承賜りますようお願い申し上げます。まずは書中にてお願いまで。敬具',
    explanation: '',
    questions: [
      {
        id: 'n1-reading-tanbun-002-q1',
        stem: 'この文書で最も伝えたいことは何か。',
        options: [
          '値上げせざるを得ない事情を説明し、取引先に理解を求めること。',
          '原材料の高騰に対する自社の経営努力の成果を示すこと。',
          '十月一日以降の取引条件に応じない場合は取引を見直すと伝えること。',
          '取引先に対しても生産工程の見直しを実施するよう依頼すること。',
        ],
        answerIndex: 0,
        explanation:
          '文書主旨在「製品価格を…改定させていただきたく」與「ご了承賜りますよう」，即告知漲價並請求諒解。「経営努力の成果を示す」錯在文中提到自助努力是為了鋪陳不得已，而非宣傳成果；「取引を見直す」是文中完全沒有的威脅性過度推論；「生産工程の見直し」是弊社自己做的事，選項偷換成要求對方去做。',
        explanationEn:
          'The letter\'s point lies in 「製品価格を…改定させていただきたく」 and 「ご了承賜りますよう」: announcing a price increase and asking the client for understanding. The option about showing 「経営努力の成果」 is wrong because the self-help efforts are mentioned only to show the increase is unavoidable, not to advertise achievements; 「取引を見直す」 is a threatening over-inference found nowhere in the letter; and 「生産工程の見直し」 is something the writer\'s own company did — the option flips it into a request toward the client.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n1-reading-tanbun-003',
    passage:
      '情報が誰にでも手に入る時代、専門家の存在意義を疑う声がある。検索すれば答えらしきものが即座に得られる以上、知識の独占はもはや成立しないというのだ。しかし専門性の核心は、個々の知識を所有していることではなく、その真偽や重みを見極め、文脈の中に位置づける判断力にある。情報の入手が容易になるほど、玉石混交の中から信頼に足るものを選び出す力の価値は、むしろ高まっていく。専門家が不要になったのではなく、その役割の重心が移ったのである。',
    explanation: '',
    questions: [
      {
        id: 'n1-reading-tanbun-003-q1',
        stem: '筆者によると、今の時代における専門家の存在意義はどこにあるか。',
        options: [
          '情報の確かさや重要性を見極め、文脈の中に位置づける判断力にある。',
          '一般の人には手に入らない情報を独占的に所有していることにある。',
          '検索よりも速く、求められた答えをその場で示せることにある。',
          '誤った情報を人々の目に触れる前に排除し、管理することにある。',
        ],
        answerIndex: 0,
        explanation:
          '關鍵句是「専門性の核心は…真偽や重みを見極め、文脈の中に位置づける判断力にある」，正解即其換句話說。「情報の独占」正是文中被否定的舊有形象（知識の独占はもはや成立しない）；「檢索より速く答えを示す」把文中「検索すれば即座に得られる」的敘述張冠李戴到專家身上；「排除し管理する」則是文中未提及的過度引申，筆者談的是判斷與選別，不是資訊管制。',
        explanationEn:
          'The key sentence is 「専門性の核心は…真偽や重みを見極め、文脈の中に位置づける判断力にある」, and the correct option is its paraphrase. 「情報の独占」 is precisely the old image the text rejects (「知識の独占はもはや成立しない」); the option about giving answers faster than a search misattributes to experts what the text says about searching (「検索すれば即座に得られる」); and 「排除し管理する」 is an over-extension never mentioned — the author speaks of judgment and selection, not information control.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n1-reading-tanbun-004',
    passage:
      '近年、あらゆる説明に「わかりやすさ」が求められる。それ自体は結構なことだが、わかりやすい説明とは多くの場合、複雑な現実から例外や留保を削ぎ落としたものである。受け手がその単純化に自覚的であるなら、問題はない。危ういのは、削られた部分の存在を忘れ、単純な図式こそが現実そのものだと思い込むときだ。わかりやすさは理解への入口ではあっても、理解そのものではない。入口にとどまり続けることを、我々は理解と呼び違えてはいないだろうか。',
    explanation: '',
    questions: [
      {
        id: 'n1-reading-tanbun-004-q1',
        stem: '筆者が最も危ぶんでいるのはどのようなことか。',
        options: [
          '単純化された説明を、現実の全体像そのものだと思い込んでしまうこと。',
          '説明からわかりやすさが失われ、誰にも理解されなくなること。',
          'わかりやすさを求めること自体が、受け手の怠慢の表れであること。',
          '例外や留保を含んだ複雑な説明が、世の中から完全に消えてしまうこと。',
        ],
        answerIndex: 0,
        explanation:
          '筆者明言「危ういのは…単純な図式こそが現実そのものだと思い込むとき」，故正解是把單純化的說明誤當成現實全貌。筆者說追求易懂「それ自体は結構なこと」，可知他並不反對易懂本身，「怠慢の表れ」是過度推論；「わかりやすさが失われる」方向完全相反；「複雑な説明が消える」則是文中沒有的擔憂，筆者擔心的是接收端的誤認，不是說明的消失。',
        explanationEn:
          'The author says outright 「危ういのは…単純な図式こそが現実そのものだと思い込むとき」, so the answer is mistaking a simplified explanation for the whole of reality. Since he calls the pursuit of clarity 「それ自体は結構なこと」, he does not oppose clarity itself, and 「怠慢の表れ」 is an over-inference; the option about clarity being lost points in the exact opposite direction; and worrying that 「複雑な説明が消える」 appears nowhere — the concern is the receiver\'s misperception, not the disappearance of explanations.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n1-reading-tanbun-005',
    passage:
      '予定も連絡先も、いまや機械が覚えていてくれる。記憶という仕事を外部に預けたぶん、頭は他のことに使えるはずだった。ところが実際には、空いた容量は次々と流れ込む新しい情報に占められ、じっくり考える時間はかえって減ったように思える。道具は人間を楽にするが、楽になった分をどう使うかまでは決めてくれない。技術の進歩を実りにするか浪費にするかは、結局のところ、預けた側の設計にかかっているのである。',
    explanation: '',
    questions: [
      {
        id: 'n1-reading-tanbun-005-q1',
        stem: '「預けた側の設計」とあるが、どういうことか。',
        options: [
          '道具のおかげで生まれた余裕を何に使うか、人間の側が自分で決めるということ。',
          '機械に預ける情報の量を、人間ができるだけ減らすということ。',
          '記憶の外部化をやめて、自分の頭で覚える習慣に戻るということ。',
          'より高性能な機械を選び、時間の使い方の判断も機械に任せるということ。',
        ],
        answerIndex: 0,
        explanation:
          '前句說「道具は…楽になった分をどう使うかまでは決めてくれない」，因此「預けた側の設計」指的是人自己規劃如何運用多出來的餘裕。「頭で覚える習慣に戻る」是把筆者的問題意識曲解成否定外部化本身的過度推論；「預ける量を減らす」文中未提；「判断も機械に任せる」則與「道具は決めてくれない」的主張正面牴觸。',
        explanationEn:
          'The preceding sentence says 「道具は…楽になった分をどう使うかまでは決めてくれない」, so 「預けた側の設計」 means that humans themselves must decide how to use the leeway the tools create. 「頭で覚える習慣に戻る」 over-reads the author\'s concern as a rejection of outsourcing memory itself; reducing the amount entrusted to machines is never mentioned; and 「判断も機械に任せる」 directly contradicts the claim that 「道具は決めてくれない」.',
      },
      {
        id: 'n1-reading-tanbun-005-q2',
        stem: '本文の内容と合っているものはどれか。',
        options: [
          '記憶を機械に任せても、じっくり考える時間が増えるとは限らない。',
          '記憶を機械に預けたことで、人間の思考力そのものが失われてしまった。',
          '技術の進歩は、人間の時間を必ず浪費へと変えてしまうものである。',
          '新しい情報を遮断しさえすれば、技術の恩恵を最大限に受けられる。',
        ],
        answerIndex: 0,
        explanation:
          '文中說空出的容量被新資訊佔據，「じっくり考える時間はかえって減ったように思える」，可見交給機器不保證思考時間增加，正解與此相符。「思考力そのものが失われた」把「時間減少的印象」誇大成能力喪失；「必ず浪費へ変える」與「実りにするか浪費にするかは設計次第」矛盾；「遮断しさえすれば」是文中沒有的條件式過度推論。',
        explanationEn:
          'The passage says the freed-up capacity is taken over by incoming information and 「じっくり考える時間はかえって減ったように思える」, so entrusting memory to machines does not guarantee more time for careful thought — exactly what the correct option says. 「思考力そのものが失われた」 inflates an impression about time into a loss of ability; 「必ず浪費へ変える」 contradicts the idea that whether progress becomes fruit or waste depends on our own design; and the conditional 「遮断しさえすれば」 is an over-inference the text never makes.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n1-reading-tanbun-006',
    passageTitle: '在宅勤務制度の運用見直しについて',
    passage:
      '社員各位\n現行の在宅勤務制度は導入から三年が経過し、通勤負担の軽減など一定の成果があった一方、部署間の連携の遅れや、新入社員の育成機会の不足といった課題も報告されています。つきましては、十一月より週二日を全員出社日とする運用に変更します。本見直しは在宅勤務の縮小を目的とするものではなく、対面と在宅それぞれの利点を生かす体制づくりの一環です。各部署は出社日の業務計画を十月末日までに総務部へ提出してください。',
    explanation: '',
    questions: [
      {
        id: 'n1-reading-tanbun-006-q1',
        stem: 'この通知によると、運用を見直す理由は何か。',
        options: [
          '在宅勤務によって、部署間の連携や新人育成に課題が生じているから。',
          '在宅勤務では、通勤負担の軽減という成果が得られなかったから。',
          '在宅勤務制度そのものを段階的に廃止する方針が決まったから。',
          '全員が出社できる日を設けてほしいという要望が社員から出たから。',
        ],
        answerIndex: 0,
        explanation:
          '通知指出「部署間の連携の遅れや、新入社員の育成機会の不足といった課題も報告されています」，接著以「つきましては」導出變更，故理由是連攜與育成上的課題。「軽減という成果が得られなかった」與「一定の成果があった」相反；「段階的に廃止」被「縮小を目的とするものではなく」明確否定，是典型的過度推論；「社員からの要望」文中完全沒有提及。',
        explanationEn:
          'The notice reports 「部署間の連携の遅れや、新入社員の育成機会の不足といった課題も報告されています」 and then introduces the change with 「つきましては」, so the reason is these problems with coordination and training. Saying the commuting-burden benefit 「得られなかった」 contradicts 「一定の成果があった」; 「段階的に廃止」 is explicitly denied by 「縮小を目的とするものではなく」, a classic over-inference; and a request from employees is never mentioned anywhere.',
      },
      {
        id: 'n1-reading-tanbun-006-q2',
        stem: 'この通知を受けて、各部署がしなければならないことは何か。',
        options: [
          '出社日の業務計画を、十月末日までに総務部に提出する。',
          '十一月までに、在宅勤務の日数を週二日以内に減らす。',
          '新入社員の育成計画を作成し、総務部と協議する。',
          '通勤負担の実態についての報告書を提出する。',
        ],
        answerIndex: 0,
        explanation:
          '通知末尾明確指示「各部署は出社日の業務計画を十月末日までに総務部へ提出してください」，正解照此。「在宅勤務を週二日以内に減らす」偷換了數字的對象——週二日是「全員出社日」，不是在宅上限；「育成計画を協議する」把課題描述誤讀成指示事項；「通勤負担の報告書」則是借用文中字眼拼湊出的不存在要求。',
        explanationEn:
          'The notice ends with the explicit instruction 「各部署は出社日の業務計画を十月末日までに総務部へ提出してください」, which the correct option restates. Cutting telework to two days or fewer swaps what the number applies to — the two days are 「全員出社日」, mandatory office days, not a telework cap; drafting and discussing a training plan misreads the description of problems as an instruction; and a report on commuting burdens is a nonexistent requirement stitched together from words in the text.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n1-reading-tanbun-007',
    passage:
      '会議で評価されるのは、たいてい気の利いた答えを出す人である。だが議論の質を実際に左右しているのは、しばしば最初の問いの立て方のほうだ。問いが浅ければ、どれほど優れた答えを重ねても、浅い場所を掘り続けることにしかならない。答える力は既にある枠の中で競われるが、問う力はその枠自体を引き直す。にもかかわらず、我々は答えを訓練する機会に比べて、問いを立てる訓練をほとんど受けてこなかった。答えの巧拙を論じる前に、そもそも何に答えようとしているのかを疑う習慣こそ、身につけるべきではないか。',
    explanation: '',
    questions: [
      {
        id: 'n1-reading-tanbun-007-q1',
        stem: '筆者の考えに合うものはどれか。',
        options: [
          '優れた答えを出すこと以上に、問いの立て方そのものを吟味することが重要だ。',
          '浅い問いから出発しても、優れた答えを重ねていけば議論は自然に深まっていく。',
          '答える訓練はもう十分に行われてきたのだから、これ以上続ける必要はない。',
          '会議では、答えを出した人ではなく問いを出した人を評価するよう制度を改めるべきだ。',
        ],
        answerIndex: 0,
        explanation:
          '筆者主張「議論の質を左右しているのは…問いの立て方のほう」，結尾並呼籲養成懷疑「何に答えようとしているのか」的習慣，正解即此意。「優れた答えを重ねれば議論は深まる」與「浅い場所を掘り続けることにしかならない」正面牴觸；「答える訓練は必要ない」把「相較之下缺乏問的訓練」誇大成否定答的訓練，是過度推論；「制度を改めるべきだ」則是文中沒有的具體處方，筆者談的是思考習慣而非評價制度。',
        explanationEn:
          'The author argues 「議論の質を左右しているのは…問いの立て方のほう」 and closes by urging the habit of doubting 「何に答えようとしているのか」, which is exactly what the correct option says. Claiming that piling up good answers will deepen the discussion collides head-on with 「浅い場所を掘り続けることにしかならない」; saying answer training is no longer needed inflates the point that we lack training in questioning by comparison; and 「制度を改めるべきだ」 is a concrete prescription the text never makes — the author discusses habits of thought, not evaluation systems.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n1-reading-tanbun-008',
    passageTitle: '納期延期のお詫びとお願い',
    passage:
      '拝啓　平素は格別のお引き立てを賜り、厚く御礼申し上げます。さて、ご注文いただいております部品Ａ－１０につきまして、製造設備の故障により、納期を十日程度延期させていただきたく、お詫びかたがたお願い申し上げます。現在、設備の復旧と並行して他工場での代替生産を進めており、来週半ばには確定納期をご連絡できる見込みでございます。ご迷惑をおかけしますことを深くお詫び申し上げますとともに、何とぞご理解賜りますようお願い申し上げます。まずは書中にてお詫びまで。敬具',
    explanation: '',
    questions: [
      {
        id: 'n1-reading-tanbun-008-q1',
        stem: 'この文書の主な目的は何か。',
        options: [
          '製造上の問題による納期の延期を詫び、取引先に理解を求めること。',
          '確定した新しい納期を伝え、受け入れの可否を確認すること。',
          '設備の故障が自社の責任ではないことを説明すること。',
          '代替生産への切り替えに伴う費用の負担を依頼すること。',
        ],
        answerIndex: 0,
        explanation:
          '主旨在「納期を十日程度延期させていただきたく、お詫びかたがたお願い申し上げます」，即為延期道歉並請求諒解。「確定した新しい納期を伝える」錯在文中明說確定納期要「来週半ばには…ご連絡できる見込み」，尚未確定；「自社の責任ではない」是文中沒有的卸責說法，全文反而一再致歉；「費用の負担を依頼」則是借「代替生産」字眼拼湊的過度推論，文中未提任何費用。',
        explanationEn:
          'The point is 「納期を十日程度延期させていただきたく、お詫びかたがたお願い申し上げます」: apologizing for the delay and asking for understanding. Conveying a confirmed new date is wrong because the letter says the firm date is still only 「来週半ばには…ご連絡できる見込み」 — not yet fixed; 「自社の責任ではない」 is a deflection found nowhere in the text, which instead apologizes repeatedly; and asking the client to bear costs is an over-inference built from the phrase 「代替生産」 — no costs are mentioned at all.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n1-reading-tanbun-009',
    passage:
      '経験を言葉にするたびに、何かがこぼれ落ちる。あの旅の空気も、あの日の心細さも、語られた途端に手垢のついた表現へと収まってしまう。ならば語らないほうが誠実なのかといえば、そうでもない。言葉にする過程で、経験は初めて輪郭を持ち、他人と共有できるものになり、自分自身にとっても振り返り可能なものになる。言語化とは経験を損なう行為であると同時に、経験を所有し直す行為でもあるのだ。こぼれ落ちるものを惜しみながら、それでも語る。その往復にしか、経験を深める道はないように思う。',
    explanation: '',
    questions: [
      {
        id: 'n1-reading-tanbun-009-q1',
        stem: '経験を言葉にすることについて、筆者はどのように考えているか。',
        options: [
          '経験の一部を損なう面はあるが、経験を捉え直し深めるためには語ることが必要だ。',
          '経験の繊細さを守るためには、安易に言葉にしないほうが誠実である。',
          '言葉の技術を磨きさえすれば、経験を少しも損なわずに伝えることができる。',
          '他人と共有できないような経験は、経験としての価値を持たない。',
        ],
        answerIndex: 0,
        explanation:
          '筆者說言語化「経験を損なう行為であると同時に、経験を所有し直す行為でもある」，並以「それでも語る」「その往復にしか…道はない」作結，正解完整對應這個兩面性。「語らないほうが誠実」正是文中被「そうでもない」否定的立場；「技術を磨けば少しも損なわず伝えられる」與開頭「何かがこぼれ落ちる」的前提矛盾；「共有できない経験は価値を持たない」則是把共有的效用誇大成價值判準的過度推論。',
        explanationEn:
          'The author calls verbalization 「経験を損なう行為であると同時に、経験を所有し直す行為でもある」 and concludes with 「それでも語る」 and 「その往復にしか…道はない」 — the correct option captures both sides of this. 「語らないほうが誠実」 is precisely the position the text rejects with 「そうでもない」; the idea that polishing technique lets you convey experience without any loss contradicts the opening premise 「何かがこぼれ落ちる」; and 「共有できない経験は価値を持たない」 over-extends the usefulness of sharing into a criterion of worth.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n1-reading-tanbun-010',
    passage:
      '測れるものだけが評価される、という嘆きをよく聞く。だが問題の根は、測ること自体にはない。厄介なのは、指標がひとたび目標になると、人々の行動が指標を上げること自体に向かい、指標が本来映すはずだった実質から離れていくことである。閲覧数を追えば中身より見出しが磨かれ、テストの点を追えば理解より解法の暗記が進む。数値は現実を映す窓であって、現実そのものではない。窓を磨くことに熱中して、窓の外を見なくなったとき、評価はその目的を失うのである。',
    explanation: '',
    questions: [
      {
        id: 'n1-reading-tanbun-010-q1',
        stem: '筆者が問題にしているのはどのようなことか。',
        options: [
          '指標を上げること自体が目標となり、行動が本来の実質から離れていくこと。',
          '数値で測るという行為そのものが、物事の評価をゆがめてしまうこと。',
          '閲覧数やテストの点のように、実質を映さない指標が使われ続けていること。',
          '指標の種類が少なすぎて、現実の全体を映しきれていないこと。',
        ],
        answerIndex: 0,
        explanation:
          '關鍵句是「厄介なのは、指標がひとたび目標になると…実質から離れていくことである」，正解即其換句話說。「測ること自体が評価をゆがめる」被「問題の根は、測ること自体にはない」明確否定；「実質を映さない指標」誤讀了例子——閱覽數與分數本來是能映照實質的窗，是追逐行為使其失真；「指標を増やせば現実を映せる」則是文中完全沒有的解方，屬過度推論。',
        explanationEn:
          'The key sentence is 「厄介なのは、指標がひとたび目標になると…実質から離れていくことである」, and the correct option paraphrases it. The claim that measuring itself distorts evaluation is flatly denied by 「問題の根は、測ること自体にはない」; 「実質を映さない指標」 misreads the examples — view counts and test scores are windows that can reflect substance, and it is the chasing of them that corrupts behavior; and adding more indicators to capture reality is a remedy the text never proposes, a pure over-inference.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n1-reading-tanbun-011',
    passage:
      '独創性を重んじる教育現場では、模倣はしばしば安易な行為として退けられる。しかし芸事の世界では、型を徹底して写すことこそが修業の出発点とされてきた。手本をなぞるうちに、なぞりきれない部分が必ず残る。その残余こそが、その人固有のものの芽である。つまり独創とは、模倣の放棄からではなく、模倣の果てに現れる。最初から誰にも似るなと求めるのは、芽が出る前の畑を耕すのをやめさせるのに等しい。似ることを恐れる必要はない。恐れるべきは、似ようとする努力を早々に手放すことのほうである。',
    explanation: '',
    questions: [
      {
        id: 'n1-reading-tanbun-011-q1',
        stem: '「その残余」とは何を指すか。',
        options: [
          '手本を徹底して写そうとしても、どうしても写しきれずに残る部分。',
          '手本の中で、まだ誰にも模倣されたことのない部分。',
          '模倣をやめた後まで、記憶の中に残っている手本の印象。',
          '型を写す修業のうち、時間が足りずに省略された練習。',
        ],
        answerIndex: 0,
        explanation:
          '前句是「手本をなぞるうちに、なぞりきれない部分が必ず残る」，「その残余」即指這個怎麼描也描不全的部分，筆者稱之為個人固有之物的芽。「誰にも模倣されたことのない部分」把主語從學習者偷換成手本本身；「模倣をやめた後の印象」與文意相反——殘餘是在持續模仿中浮現的，不是放棄模仿後的殘像；「省略された練習」則是借「修業」字眼虛構的內容。',
        explanationEn:
          'The preceding sentence reads 「手本をなぞるうちに、なぞりきれない部分が必ず残る」, so 「その残余」 refers to the part that cannot be fully traced no matter how faithfully one copies the model — what the author calls the seed of one\'s own uniqueness. 「誰にも模倣されたことのない部分」 swaps the subject from the learner to the model itself; an impression lingering after one stops imitating reverses the logic, since the residue emerges through continued imitation, not after abandoning it; and 「省略された練習」 is content invented from the word 「修業」.',
      },
      {
        id: 'n1-reading-tanbun-011-q2',
        stem: '筆者の考えに合うものはどれか。',
        options: [
          '独創は模倣を徹底した先に現れるものであり、手本に似ることを恐れる必要はない。',
          '独創性を伸ばすには、手本を見せずに最初から自分の型を作らせるべきだ。',
          '模倣を続けている限り、その人固有のものが生まれることはない。',
          '教育現場は芸事の世界にならい、独創性を求めること自体をやめるべきだ。',
        ],
        answerIndex: 0,
        explanation:
          '「独創とは、模倣の放棄からではなく、模倣の果てに現れる」「似ることを恐れる必要はない」二句直接支持正解。「最初から自分の型を作らせるべき」正是被畑の比喩批判的做法；「模倣を続ける限り固有のものは生まれない」與主旨完全相反；「独創性を求めること自体をやめるべき」是過度推論——筆者批判的是排斥模仿的教法，並未否定追求獨創這個目標。',
        explanationEn:
          'The sentences 「独創とは、模倣の放棄からではなく、模倣の果てに現れる」 and 「似ることを恐れる必要はない」 directly support the correct option. Making students build their own style from the start is exactly what the field metaphor criticizes; the claim that nothing of one\'s own can emerge as long as one keeps imitating is the exact opposite of the thesis; and saying schools should stop demanding originality altogether is an over-inference — the author criticizes teaching that rejects imitation, not the goal of originality itself.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n1-reading-tanbun-012',
    passageTitle: '旧型機器の修理受付終了のお知らせ',
    passage:
      'お客様各位\n平素より弊社製品をご愛顧いただき、誠にありがとうございます。二〇一五年以前に販売いたしました加湿器Ｈシリーズにつきまして、補修部品の在庫が尽きたため、来年三月末日をもちまして修理の受付を終了させていただきます。四月以降も製品の使用自体を妨げるものではございませんが、安全のため、十年以上ご使用の機器につきましては買い替えをご検討くださいますようお願い申し上げます。なお、終了日までにお申し込みいただいた修理につきましては、従来どおり承ります。',
    explanation: '',
    questions: [
      {
        id: 'n1-reading-tanbun-012-q1',
        stem: 'このお知らせで最も伝えたいことは何か。',
        options: [
          '旧型加湿器の修理の受付を、来年三月末日で終了するということ。',
          '加湿器Ｈシリーズの製造と販売を、来年三月末日で終了するということ。',
          '旧型加湿器は、来年四月以降使用してはならないということ。',
          '十年以上使用した機器は、無償で新型と交換するということ。',
        ],
        answerIndex: 0,
        explanation:
          '核心句是「来年三月末日をもちまして修理の受付を終了させていただきます」，通知的主旨即修理受理的終止。「製造と販売を終了」偷換了終止的對象——Ｈ系列本來就是二〇一五年以前販售的舊產品，文中談的只有修理；「使用してはならない」被「使用自体を妨げるものではございません」明確否定；「無償で新型と交換」則是把「買い替えをご検討ください」的建議誇大成不存在的優惠。',
        explanationEn:
          'The core sentence is 「来年三月末日をもちまして修理の受付を終了させていただきます」 — what the notice announces is the end of repair acceptance. Ending 「製造と販売」 swaps the object: the H series consists of models sold before 2015 anyway, and the text speaks only of repairs; 「使用してはならない」 is explicitly denied by 「使用自体を妨げるものではございません」; and a free exchange for a new model inflates the mere suggestion 「買い替えをご検討ください」 into a nonexistent offer.',
      },
      {
        id: 'n1-reading-tanbun-012-q2',
        stem: 'このお知らせの内容と合っているものはどれか。',
        options: [
          '終了日までに申し込んだ修理は、これまでどおり受け付けてもらえる。',
          '使用年数が十年未満の機器であれば、四月以降も修理を受け付けてもらえる。',
          '来年四月以降、Ｈシリーズの機器は安全のため使用が禁止される。',
          '買い替えを申し込んだ場合、旧型の機器は無料で引き取ってもらえる。',
        ],
        answerIndex: 0,
        explanation:
          '末句「終了日までにお申し込みいただいた修理につきましては、従来どおり承ります」與正解一致。「十年未満なら四月以降も修理可」是似是而非的過度推論——「十年以上」只是建議買い替え的對象，修理受理是全面終止，與使用年數無關；「使用が禁止される」與「使用自体を妨げるものではございません」矛盾；「無料で引き取り」是文中完全沒有的服務。',
        explanationEn:
          'The final sentence 「終了日までにお申し込みいただいた修理につきましては、従来どおり承ります」 matches the correct option. The idea that units under ten years old can still be repaired after April is a plausible-sounding over-inference — 「十年以上」 only marks which units are advised for replacement, while repair acceptance ends across the board regardless of age; a ban on use contradicts 「使用自体を妨げるものではございません」; and free pickup of old units is a service the notice never mentions.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n1-reading-tanbun-013',
    passage:
      '「ほめて伸ばす」ことが推奨されて久しい。だが、ほめ言葉は常に無害だとは限らない。賞賛とは本来、評価の一形態だからである。「君は発想が豊かだね」と言われ続けた人は、豊かな発想を示せそうにない仕事を、いつしか避けるようになるかもしれない。ほめ言葉が周囲の期待として固定されるとき、それは相手を励ますどころか、失敗できない縛りとして働き始めるのだ。とはいえ、ほめることを控えよと言いたいのではない。相手を型にはめる評価としてではなく、行為の過程に目を向けた言葉を選ぶ工夫が要る、ということである。',
    explanation: '',
    questions: [
      {
        id: 'n1-reading-tanbun-013-q1',
        stem: '「失敗できない縛り」とあるが、どういうことか。',
        options: [
          'ほめ言葉が期待として固定され、それを裏切る失敗が許されない重圧になるということ。',
          'ほめられた人が自信を失い、どんな仕事にも挑戦できなくなるということ。',
          'ほめた側が、相手を評価し続けなければならなくなるということ。',
          'ほめ言葉が本心からのものではないと、相手に見抜かれてしまうということ。',
        ],
        answerIndex: 0,
        explanation:
          '前句說「ほめ言葉が周囲の期待として固定されるとき」，讚美就從鼓勵變質為束縛，如文中被誇「発想が豊かだね」的人會迴避展現不出豐富發想的工作，故正解是讚美固定成期待、化為不容失敗的重壓。「自信を失い、どんな仕事にも挑戦できなくなる」把「避ける」的可能性誇大成全面喪失自信；「ほめた側が評価し続けなければならない」偷換了受束縛的主體；「本心ではないと見抜かれる」則是文中沒有的內容。',
        explanationEn:
          'The preceding sentence says 「ほめ言葉が周囲の期待として固定されるとき」 praise turns from encouragement into a bind — like the person repeatedly told 「発想が豊かだね」 who comes to avoid work where rich ideas cannot be shown. So the answer is that praise hardens into expectation and becomes pressure under which failure that betrays it is not allowed. Losing confidence and becoming unable to attempt any work inflates the possibility of 「避ける」 into total loss of confidence; the option about the praiser having to keep evaluating swaps who is bound; and being seen through as insincere appears nowhere in the text.',
      },
      {
        id: 'n1-reading-tanbun-013-q2',
        stem: '筆者の考えに合うものはどれか。',
        options: [
          '相手を型にはめる評価ではなく、行為の過程に目を向けた言葉でほめる工夫が必要だ。',
          '賞賛は相手を縛るものである以上、ほめること自体を控えるべきだ。',
          'ほめて伸ばすより、厳しく指導するほうが人は伸びるものだ。',
          '発想の豊かさをほめられた人は、例外なく難しい仕事を避けるようになる。',
        ],
        answerIndex: 0,
        explanation:
          '結尾明言「ほめることを控えよと言いたいのではない」，並主張需要「行為の過程に目を向けた言葉を選ぶ工夫」，正解即此。「ほめること自体を控えるべきだ」正是被筆者親口否定的立場；「厳しく指導するほうが伸びる」是文中完全沒有的主張；「例外なく難しい仕事を避けるようになる」則把文中帶保留的「かもしれない」誇大成必然，屬過度推論。',
        explanationEn:
          'The ending states 「ほめることを控えよと言いたいのではない」 and calls for 「行為の過程に目を向けた言葉を選ぶ工夫」, which the correct option restates. Refraining from praise altogether is the very position the author explicitly denies; the claim that strict instruction makes people grow better appears nowhere in the text; and saying praised people avoid difficult work 「例外なく」 inflates the hedged 「かもしれない」 into a certainty — an over-inference.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n1-reading-tanbun-014',
    passage:
      '会議で沈黙が続くと、司会者は慌てて口を開き、誰かが急いで場をつなぐ。沈黙は議論の停滞の印だと見なされているからだ。しかし発言が途切れた時間は、必ずしも空白ではない。人は問いを受け取ってから考えを組み立てるまでに時間を要するものであり、即座に出てくる意見は、往々にして手持ちの考えの繰り返しにすぎない。沈黙を埋めることを急ぐ会議は、実は考える時間を全員から奪っているのである。実りある議論に必要なのは、途切れなく続く発言ではなく、沈黙を気まずさではなく思考の時間として遇する余裕であろう。',
    explanation: '',
    questions: [
      {
        id: 'n1-reading-tanbun-014-q1',
        stem: '筆者によると、発言が途切れた時間はどのような時間か。',
        options: [
          '参加者が問いを受け止め、自分の考えを組み立てるのに必要な時間。',
          '議論が停滞し、司会者が急いで埋めなければならない空白の時間。',
          '参加者が手持ちの考えを繰り返し確認するための時間。',
          '発言する意欲のない参加者が、気まずさに耐えている時間。',
        ],
        answerIndex: 0,
        explanation:
          '筆者說「人は問いを受け取ってから考えを組み立てるまでに時間を要する」，因此發言中斷的時間「必ずしも空白ではない」，而是組織想法所需的時間，正解與此相符。「急いで埋めなければならない空白」正是文中被質疑的通俗看法；「手持ちの考えを繰り返し確認する」誤用了文中字眼——「手持ちの考えの繰り返し」是形容倉促意見的貧乏，不是沉默的功能；「気まずさに耐えている」也不是筆者對沉默的定位。',
        explanationEn:
          'The author says 「人は問いを受け取ってから考えを組み立てるまでに時間を要する」, so a pause in speech is 「必ずしも空白ではない」 — it is the time needed to build one\'s thoughts, which the correct option matches. A blank that the chair must hurry to fill is precisely the conventional view the text questions; the option about reviewing existing ideas misuses the text\'s words, since 「手持ちの考えの繰り返し」 describes the poverty of instant opinions, not the function of silence; and enduring awkwardness is not how the author characterizes silence either.',
      },
      {
        id: 'n1-reading-tanbun-014-q2',
        stem: '筆者の考えに合うものはどれか。',
        options: [
          '実りある議論には、沈黙を思考の時間として受け止める余裕が必要だ。',
          '即座に意見が出てくる会議ほど、参加者は深く考えているといえる。',
          '沈黙が生じたら、司会者はすぐに話題を変えて場をつなぐべきだ。',
          '発言の回数を減らして沈黙を長くするほど、会議の質は高まる。',
        ],
        answerIndex: 0,
        explanation:
          '結尾點明「実りある議論に必要なのは…沈黙を気まずさではなく思考の時間として遇する余裕」，正解即其換句話說。「即座に意見が出てくる会議ほど深く考えている」與「即座に出てくる意見は…繰り返しにすぎない」正面牴觸；「すぐに話題を変えて場をつなぐべきだ」正是開頭司会者慌忙填補沉默的被批判行為；「沈黙を長くするほど質が高まる」則把珍惜沉默曲解成機械式的反向操作，是過度推論。',
        explanationEn:
          'The conclusion states 「実りある議論に必要なのは…沈黙を気まずさではなく思考の時間として遇する余裕」, which the correct option paraphrases. Claiming that meetings where opinions come out instantly show deeper thinking collides head-on with 「即座に出てくる意見は…繰り返しにすぎない」; a chair quickly changing the topic to fill the gap is exactly the behavior criticized at the opening; and saying meeting quality rises the longer you stretch the silence twists valuing silence into a mechanical reversal — an over-inference.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n1-reading-tanbun-015',
    passage:
      '朝早く出社する社員は勤勉で、始業ぎりぎりに現れる社員はやる気に欠ける——そうした見方は今なお根強い。だが、頭が最もよく働く時間帯には、生まれつきの個人差があることが知られている。朝に冴える人もいれば、夕方以降に本領を発揮する人もいるのだ。それにもかかわらず全員に一律の早朝出社を課すのは、夜型の人にとって不利な土俵の上で勤勉さを測るようなものだろう。問われるべきは出社の早さではなく、各自が最も力を出せる時間帯を、仕事の中でどう生かすかなのである。',
    explanation: '',
    questions: [
      {
        id: 'n1-reading-tanbun-015-q1',
        stem: '筆者の考えに合うものはどれか。',
        options: [
          '重視すべきは出社時刻の早さではなく、各自が力を発揮できる時間帯の生かし方だ。',
          '朝早く出社する社員は、それだけで勤勉だと評価してよい。',
          '夜型の人も、努力しだいで朝型に変われるのだから、早朝出社に慣れるべきだ。',
          '全員の始業時刻を夕方以降に移せば、どの社員も本領を発揮できる。',
        ],
        answerIndex: 0,
        explanation:
          '結尾明言「問われるべきは出社の早さではなく、各自が最も力を出せる時間帯を、仕事の中でどう生かすか」，正解即此。「朝早く出社する社員は勤勉」正是開頭被質疑的根深柢固之見；「努力しだいで朝型に変われる」與「生まれつきの個人差」的前提矛盾；「始業を夕方以降に移せばよい」則是借用文中「夕方以降に本領を発揮する人もいる」的字眼，把個人差異曲解成對全員一律的另一種安排，屬過度推論。',
        explanationEn:
          'The ending says plainly 「問われるべきは出社の早さではなく、各自が最も力を出せる時間帯を、仕事の中でどう生かすか」, which the correct option restates. Judging early arrivers as diligent on that basis alone is the entrenched view questioned at the opening; saying night owls can become morning people with effort contradicts the premise of 「生まれつきの個人差」; and moving everyone\'s start time to the evening borrows the phrase 「夕方以降に本領を発揮する人もいる」 but turns individual differences into another uniform arrangement for all — an over-inference.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n1-reading-tanbun-016',
    passageTitle: '電気ケトル自主回収のお知らせ',
    passage:
      'お客様各位\n弊社が本年四月から六月に販売いたしました電気ケトルＫ－２０のうち、製造番号がＡ２４で始まる製品において、まれに取っ手の付け根が破損し、湯がこぼれるおそれのあることが判明いたしました。つきましては、該当製品の自主回収を実施いたします。製品底面の製造番号をご確認のうえ、該当する場合は直ちに使用を中止し、フリーダイヤルまでご連絡ください。製品は着払いにてお送りいただき、弊社にて確認後、購入代金を返金いたします。なお、製造番号がＡ２４以外の製品は、安心してご使用いただけます。',
    explanation: '',
    questions: [
      {
        id: 'n1-reading-tanbun-016-q1',
        stem: 'このお知らせの内容と合っているものはどれか。',
        options: [
          '該当する製品は、使用をやめて連絡し、送料を負担せずに送れば代金が返金される。',
          '製造番号にかかわらず、四月から六月に販売されたＫ－２０はすべて回収の対象となる。',
          '該当する製品は、店舗に持ち込めばその場で新品と交換してもらえる。',
          '該当する製品でも、取っ手が破損していなければそのまま使い続けてよい。',
        ],
        answerIndex: 0,
        explanation:
          '通知指示該当者「直ちに使用を中止し、フリーダイヤルまでご連絡ください」，並說明「着払いにてお送りいただき…購入代金を返金いたします」，着払い即運費由廠商負擔，故正解為停用、聯絡、免付運費寄回後退款。「すべて回収の対象」錯在對象僅限「製造番号がＡ２４で始まる製品」；「その場で新品と交換」文中沒有，處理方式是寄回退款；「使い続けてよい」則與「使用を中止し」的指示牴觸。',
        explanationEn:
          'The notice instructs affected customers 「直ちに使用を中止し、フリーダイヤルまでご連絡ください」 and explains 「着払いにてお送りいただき…購入代金を返金いたします」 — 着払い means the maker bears the shipping cost, so the correct option (stop using it, call, send it back without paying postage, and get refunded) matches. Saying all K-20 units are recalled is wrong because only 「製造番号がＡ２４で始まる製品」 are covered; an on-the-spot exchange for a new unit appears nowhere — the remedy is return and refund; and continuing to use an undamaged unit contradicts the instruction 「使用を中止し」.',
      },
    ],
  },
]
