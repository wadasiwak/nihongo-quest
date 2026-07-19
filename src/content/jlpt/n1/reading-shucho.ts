import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    kind: 'passage',
    id: 'n1-reading-shucho-001',
    passageTitle: '効率という物差し',
    passage:
      '現代社会において、「効率」はほとんど疑われることのない価値となっている。会議は短く、報告は簡潔に、成果は数字で示せ——こうした要請はもはや職場の常識であり、それに異を唱えれば時代錯誤の烙印を押されかねない。私自身、効率化の恩恵を否定するつもりは毛頭ない。問題は、効率がひとつの「手段」であることを忘れ、それ自体を「目的」に据えてしまう転倒にある。\n効率とは本来、ある目的を達成するための時間や労力を最小化する考え方である。したがって、何のための効率かという問いを欠いた効率化は、論理的に言って空虚である。ところが現実には、目的の吟味を後回しにしたまま、とにかく速く、とにかく安く、という号令だけが独り歩きしている場面が少なくない。その結果、本来じっくり考えるべき問題までもが「時間の無駄」として切り捨てられ、短期的な数字に貢献しない営みは軒並み肩身の狭い思いをすることになる。\nここで見落とされがちなのは、人間の創造性や判断力が、一見無駄に見える時間の中で育まれるという事実である。回り道の読書、結論の出ない対話、目的のはっきりしない試行錯誤。これらは効率の物差しで測れば無価値に近いが、新しい発想はしばしばこうした「余白」から生まれる。実際、画期的な発見の多くが、当初は何の役に立つのか誰にも分からない道楽じみた探究から出発したことは、科学史が繰り返し教えるところである。逆に、あらゆる時間が成果へ直結するよう設計された環境では、人は与えられた課題を処理するのに忙しく、そもそも何を課題とすべきかを考える余裕を失う。効率化が徹底されるほど、効率化の対象を選ぶ知性そのものが痩せ細っていくという逆説がここにある。\n誤解のないように言えば、私は非効率を礼賛したいのではない。定型的な作業を効率化することは大いに結構であり、それによって生まれた時間をどう使うかこそが問われるべきなのだ。効率化で浮いた時間をさらなる効率化に注ぎ込むのであれば、我々は永遠に立ち止まる機会を持てない。効率を追求する営みの外側に、効率では測れない時間を意識的に確保すること。それこそが、効率という便利な道具に使われずに、道具として使いこなすための条件ではないだろうか。',
    explanation: '',
    questions: [
      {
        id: 'n1-reading-shucho-001-q1',
        stem: '筆者の言う「転倒」とはどのようなことか。',
        options: [
          '効率が目的達成のための手段であることを忘れ、効率そのものを目的に据えてしまうこと',
          '効率化の恩恵を否定して、あえて非効率な働き方に戻ろうとすること',
          '会議や報告を短くしすぎた結果、かえって本来の目的が達成できなくなること',
          '成果を数字で示すことを拒んだために、時代錯誤だと批判されてしまうこと',
        ],
        answerIndex: 0,
        explanation:
          '第一段末尾明言：「問題は、効率がひとつの『手段』であることを忘れ、それ自体を『目的』に据えてしまう転倒にある」，即手段與目的的顛倒。「非効率な働き方に戻る」與筆者「恩恵を否定するつもりは毛頭ない」的立場相反；「会議を短くしすぎて目的が達成できない」文中並未如此論述；「数字で示すことを拒む」只是挪用了首段的字眼，並非「転倒」的內容。',
        explanationEn:
          'The end of the first paragraph states it directly: 「問題は、効率がひとつの『手段』であることを忘れ、それ自体を『目的』に据えてしまう転倒にある」 — the inversion of means and end. Returning to inefficient ways of working contradicts the author\'s stance of 「恩恵を否定するつもりは毛頭ない」; the essay never argues that overly short meetings defeat their own purpose; and refusing to show results in numbers merely recycles wording from the opening paragraph and is not what 「転倒」 refers to.',
      },
      {
        id: 'n1-reading-shucho-001-q2',
        stem: '筆者の言う「逆説」とはどのようなことか。',
        options: [
          '効率化を徹底すればするほど、何を効率化すべきかを考える知性そのものが衰えていくこと',
          '無駄に見える時間を増やせば増やすほど、かえって仕事が速く片づくようになること',
          '効率を追求すればするほど、短期的な数字までも悪化してしまうこと',
          '創造性を重視する人ほど、定型的な作業を好むようになること',
        ],
        answerIndex: 0,
        explanation:
          '第三段結尾寫道：「効率化が徹底されるほど、効率化の対象を選ぶ知性そのものが痩せ細っていくという逆説」，即越徹底追求效率，選擇效率化對象的智性反而越萎縮。「無駄な時間を増やすほど仕事が速くなる」文中沒有這種因果主張；「短期的な数字も悪化する」相反地，文中說不貢獻於短期數字的活動遭到排擠；「創造性を重視する人ほど定型作業を好む」是無中生有的組合。',
        explanationEn:
          'The third paragraph closes with: 「効率化が徹底されるほど、効率化の対象を選ぶ知性そのものが痩せ細っていくという逆説」 — the more thoroughly efficiency is pursued, the more the very intelligence that chooses what to make efficient withers away. The claim that adding seemingly wasted time makes work go faster appears nowhere as a causal claim; the idea that short-term numbers also worsen is backwards — the text says activities that do not serve short-term numbers get squeezed out; and creativity-minded people preferring routine tasks is a fabricated pairing.',
      },
      {
        id: 'n1-reading-shucho-001-q3',
        stem: 'この文章で筆者が最も言いたいことは何か。',
        options: [
          '効率化自体は認めたうえで、効率では測れない時間を意識的に確保することこそ、効率を道具として使いこなす条件である。',
          '効率化は人間の創造性を破壊するものであるから、職場から効率という発想を排除すべきである。',
          '定型的な作業まで効率化すると余白が失われるので、あらゆる仕事はあえて非効率に行うべきである。',
          '効率化によって生まれた時間はさらなる効率化に投資し、成果を最大化していくべきである。',
        ],
        answerIndex: 0,
        explanation:
          '末段是全文主張所在：筆者肯定「定型的な作業を効率化することは大いに結構」，但強調要在效率的追求之外「効率では測れない時間を意識的に確保する」，這才是不被工具反過來役使的條件。「効率を排除すべき」過度極端，違背筆者「毛頭ない」的表態；「あえて非効率に行うべき」與「私は非効率を礼賛したいのではない」直接矛盾；「さらなる効率化に注ぎ込む」正是筆者批評「永遠に立ち止まる機会を持てない」的做法。',
        explanationEn:
          'The final paragraph carries the thesis: the author approves that 「定型的な作業を効率化することは大いに結構」, but insists on deliberately securing, outside the pursuit of efficiency, 「効率では測れない時間」 — that is the condition for wielding efficiency as a tool rather than being used by it. Banishing efficiency from the workplace is far too extreme and contradicts the author\'s 「毛頭ない」 disclaimer; doing everything inefficiently on purpose collides head-on with 「私は非効率を礼賛したいのではない」; and pouring saved time into further efficiency is exactly the practice criticized as leaving us 「永遠に立ち止まる機会を持てない」.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n1-reading-shucho-002',
    passageTitle: '教養は何の役に立つのか',
    passage:
      '「その勉強は何の役に立つのか」。文学や哲学、歴史といったいわゆる教養科目は、今日この問いの前で常に弁明を迫られている。すぐに収入や技能に結びつかない学びは贅沢品であり、限られた時間は実用的な知識に投資すべきだ——こうした考え方は一見合理的に響く。だが私は、この「役に立つか」という問いの立て方そのものに、落とし穴が潜んでいると考える。\nまず確認したいのは、「役に立つ」という判断が、常に特定の目的を前提としているということだ。資格試験に合格するという目的があるから参考書が役に立ち、商談をまとめるという目的があるから交渉術が役に立つ。つまり実用性とは、目的が定まって初めて測定可能になる相対的な尺度にすぎない。ならば、目的それ自体を問い直す学び、すなわち自分は何を望み、どう生きるべきかを考えるための学びは、この尺度では原理的に測れないことになる。教養が「役に立たない」ように見えるのは、それが無力だからではなく、実用性という物差しの外側で働く知だからである。\n教養の働きは、たとえば異質なものに出会ったときに現れる。歴史を学んだ者は、自分の常識が特定の時代の産物にすぎないと知っているから、異なる価値観を頭ごなしに退けない。文学に親しんだ者は、他人の内面を単純な型に押し込めることへのためらいを持つ。これらは資格のように証明書が出るわけではないが、他者と共に生きるうえでの土台を形づくる。一人の人間が直接経験できることは限られている以上、書物を通じて他人の目と過去の時代の目を借りることは、視野を広げる最も確実な方法だと言ってよい。教養とは知識の量ではなく、自分の見方を相対化し、世界を複数の角度から眺め直すための構えなのだ。\nもっとも、教養を身につければ人格が高まるといった安易な効能書きに、私は与しない。教養はしばしば他人を見下すための装飾品に堕落してきたし、その危険は今もある。だからこそ強調したいのは、教養の本領が「答えを増やす」ことではなく「問いを増やす」ことにある、という一点だ。即座に役立つ知識が、既にある問いに答える力だとすれば、教養は、まだ誰も問うていないことを問う力を養う。変化の激しい時代に本当に必要なのは、後者のほうではないだろうか。',
    explanation: '',
    questions: [
      {
        id: 'n1-reading-shucho-002-q1',
        stem: '筆者によると、教養が「役に立たない」ように見えるのはなぜか。',
        options: [
          '実用性は目的が定まって初めて測れる尺度であり、目的自体を問い直す教養はその尺度の外側で働く知だから',
          '教養が収入や技能に結びつくまでには、非常に長い時間がかかるから',
          '教養には資格試験のような、達成を証明する明確な基準が存在しないから',
          '教養は特定の時代の常識を教えるだけで、現代の社会では通用しないから',
        ],
        answerIndex: 0,
        explanation:
          '第二段結論：「教養が『役に立たない』ように見えるのは、それが無力だからではなく、実用性という物差しの外側で働く知だからである」——實用性是以特定目的為前提的相對尺度，而教養是重新質問目的本身的學問，原理上無法用該尺度衡量。「長い時間がかかる」文中未提，且筆者否定的是尺度本身而非時程；「証明書が出ない」只是第三段的附帶描述，不是看似無用的理由；「現代では通用しない」與筆者主張完全相反。',
        explanationEn:
          'The second paragraph concludes: 「教養が『役に立たない』ように見えるのは、それが無力だからではなく、実用性という物差しの外側で働く知だからである」 — usefulness is a relative measure that only becomes measurable once a goal is fixed, whereas liberal learning questions the goal itself, so in principle it cannot be measured by that yardstick. Taking a very long time to pay off is never mentioned, and the author\'s point is about the yardstick itself, not the timeline; the lack of certificates is only an incidental remark in paragraph three, not the stated reason; and the claim that such learning no longer works in modern society is the exact opposite of the author\'s position.',
      },
      {
        id: 'n1-reading-shucho-002-q2',
        stem: '筆者は、歴史や文学を学んだ者の例を通して、何を示そうとしているか。',
        options: [
          '教養が、自分の見方を相対化し、異質な他者を頭ごなしに退けないための構えとして働くこと',
          '教養のある者ほど知識の量が多く、証明書がなくても社会で高く評価されること',
          '歴史や文学の知識が、商談や交渉といった実務の場面でも実際に役立つこと',
          '教養を積んだ者は人格が自然に高まり、決して他人を見下さなくなること',
        ],
        answerIndex: 0,
        explanation:
          '第三段舉「歴史を学んだ者」不會斷然排斥異己的價值觀、「文学に親しんだ者」不輕易把他人內面套進單純的框架，最後總結「教養とは……自分の見方を相対化し、世界を複数の角度から眺め直すための構え」。「知識の量が多い」與「教養とは知識の量ではなく」直接矛盾；「商談や交渉で役立つ」是第二段用來說明實用性的例子，並非教養的功用；「決して他人を見下さなくなる」被末段「安易な効能書きに、私は与しない」明確否定。',
        explanationEn:
          'Paragraph three gives the examples — one who has studied history does not dismiss alien values out of hand, and one steeped in literature hesitates to force other people\'s inner lives into simple molds — then sums up: 「教養とは……自分の見方を相対化し、世界を複数の角度から眺め直すための構え」. Having a large stock of knowledge contradicts 「教養とは知識の量ではなく」; usefulness in business negotiations belongs to paragraph two\'s illustration of practicality, not to what culture does; and the claim that the cultured never look down on others is expressly rejected in the final paragraph, where the author refuses such 「安易な効能書き」.',
      },
      {
        id: 'n1-reading-shucho-002-q3',
        stem: 'この文章で筆者が最も言いたいことは何か。',
        options: [
          '教養の本領は既にある問いに答えることではなく、まだ問われていないことを問う力を養う点にあり、それこそ変化の激しい時代に必要である。',
          '実用的な知識は目的が変われば無価値になるのだから、学んでも意味がない。',
          '教養は他人を見下す装飾品に堕落しやすいので、身につけることは利益より害のほうが大きい。',
          '教養科目も実用科目と同じように、収入や技能に直結する形へ改革していくべきである。',
        ],
        answerIndex: 0,
        explanation:
          '末段筆者刻意先退一步（不附和「人格が高まる」的廉價功效論），再點出全文主張：「教養の本領が『答えを増やす』ことではなく『問いを増やす』ことにある」，並以「変化の激しい時代に本当に必要なのは、後者のほうではないだろうか」收束。「実用的な知識は学んでも意味がない」筆者從未否定實用知識本身；「害のほうが大きい」把筆者提及的墮落風險誇大成反對教養的結論；「収入に直結する形へ改革すべき」正是筆者質疑的「役に立つか」式思考。',
        explanationEn:
          'In the final paragraph the author first steps back — refusing the cheap claim that culture ennobles character — and then states the thesis: 「教養の本領が『答えを増やす』ことではなく『問いを増やす』ことにある」, closing with 「変化の激しい時代に本当に必要なのは、後者のほうではないだろうか」. The author never denies the worth of practical knowledge itself, so saying it is meaningless to learn is wrong; the harm-outweighs-benefit option inflates the mentioned risk of degeneration into a case against culture; and reforming liberal arts to link directly to income is precisely the 「役に立つか」 mode of thinking the essay calls into question.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n1-reading-shucho-003',
    passageTitle: '多数決という装置',
    passage:
      '「みんなで決めたのだから従うべきだ」。多数決は民主主義の代名詞のように扱われ、その結論には有無を言わせぬ正統性が与えられがちである。学級会から国政まで、意見が割れれば数を数える。この手続きの簡便さと分かりやすさは確かに捨てがたい。だが私は、多数決を万能の装置と見なす思考停止にこそ、民主主義を内側から蝕む危うさが潜んでいると考えている。\nまず思い出したいのは、多数決が「正しさ」を保証する仕組みではない、という当たり前の事実である。多数決が示すのは、その時点で多くの人がどう考えているかという意見の分布にすぎず、多くの人が支持したから正しいという保証はどこにもない。歴史を振り返れば、多数の熱狂が少数者への迫害を正当化した例は枚挙にいとまがないし、後から誤りだったと判明した決定の多くも、当時は堂々たる多数派の支持を得ていた。数の力と真理とは、本来別の秩序に属するのである。\nさらに見過ごせないのは、多数決が「決めた後」の態度に及ぼす影響だ。採決という儀式を通過した途端、議論は打ち切られ、異論は「負けた側の未練」として処理されやすくなる。しかし少数意見の中には、多数派がまだ気づいていない問題への警告が含まれていることが少なくない。少数意見の価値は、票数で負けた瞬間に消えるわけではないのだ。むしろ多数決とは、限られた時間の中でやむを得ず打つ「暫定的な句点」であり、決定の後も検証と修正に開かれていてこそ意味を持つ。それを「もう決まったことだ」の一言で封じるなら、多数決は熟慮のための装置ではなく、思考を打ち切るための道具に成り下がる。\n誤解のないように言えば、私は多数決に代わる魔法のような決定方法があると言いたいのではない。全員一致を待てば何も決められず、少数の賢者に委ねれば独善に陥る。多数決は欠陥を抱えつつも、なお手放すことのできない次善の知恵である。だからこそ問われるべきは、採決の前にどれだけ異論を尽くさせたか、そして採決の後にどれだけ結論を検証し直す回路を残したか、という運用の質なのだ。多数決を尊重するとは、その結論を絶対視することではなく、それが暫定的な合意にすぎないと自覚し続けることではないだろうか。',
    explanation: '',
    questions: [
      {
        id: 'n1-reading-shucho-003-q1',
        stem: '多数決が「正しさ」を保証する仕組みではないとは、どのようなことか。',
        options: [
          '多数決が示すのはその時点での意見の分布にすぎず、多数の支持を得たことが結論の正しさを保証するわけではないということ',
          '多数決の集計手続きには誤りがつきものであり、票数の結果自体が信用できないということ',
          '少数意見のほうが常に正しいのだから、多数決の結論は最初から疑ってかかるべきだということ',
          '歴史上の多数決による決定は、後からすべて誤りだったと判明しているということ',
        ],
        answerIndex: 0,
        explanation:
          '第二段明言：多數決所顯示的只是「その時点で多くの人がどう考えているかという意見の分布」，「多くの人が支持したから正しいという保証はどこにもない」，並以「数の力と真理とは、本来別の秩序に属する」總結。「集計の誤り」文中完全沒有談計票技術問題；「少数意見のほうが常に正しい」筆者只說少數意見「中には警告が含まれていることが少なくない」，並未主張少數恆對；「すべて誤りだった」誇大了「後から誤りと判明した決定の多く」這一敘述。',
        explanationEn:
          'The second paragraph is explicit: what a majority vote shows is only 「その時点で多くの人がどう考えているかという意見の分布」, and 「多くの人が支持したから正しいという保証はどこにもない」, summed up as 「数の力と真理とは、本来別の秩序に属する」. Errors in vote counting are never discussed — the text raises no technical tallying issue; the author never claims minorities are always right, only that minority opinions often contain warnings; and 「すべて誤りだった」 overstates the passage\'s 「後から誤りだったと判明した決定の多く」.',
      },
      {
        id: 'n1-reading-shucho-003-q2',
        stem: '筆者の言う「暫定的な句点」とはどのようなことか。',
        options: [
          '多数決による決定は限られた時間の中でやむを得ず打たれた区切りであり、決定の後も検証と修正に開かれているべきだということ',
          '採決という儀式を通過した以上、議論は終了し、異論を再び持ち出すべきではないということ',
          '多数決の結論はあくまで仮のものであるから、納得できない者は従わなくてもよいということ',
          '議論の時間が足りないときは、句点を打たずに採決を延期し、全員一致になるまで待つべきだということ',
        ],
        answerIndex: 0,
        explanation:
          '第三段寫道：多數決是「限られた時間の中でやむを得ず打つ『暫定的な句点』であり、決定の後も検証と修正に開かれていてこそ意味を持つ」——句點是暫時的，決定後仍須保持檢證修正的空間。「異論を再び持ち出すべきではない」正是筆者批判的「もう決まったことだ」式封殺；「従わなくてもよい」文中並未否定決定的拘束力，暫定不等於可不服從；「全員一致になるまで待つ」與末段「全員一致を待てば何も決められず」相悖。',
        explanationEn:
          'Paragraph three says a majority decision is 「限られた時間の中でやむを得ず打つ『暫定的な句点』であり、決定の後も検証と修正に開かれていてこそ意味を持つ」 — the period is provisional, and room for verification and revision must remain after the decision. Saying dissent should never be raised again is exactly the 「もう決まったことだ」 silencing the author criticizes; the text never denies the binding force of a decision, so provisional does not mean one may disobey; and waiting for unanimity contradicts the final paragraph\'s 「全員一致を待てば何も決められず」.',
      },
      {
        id: 'n1-reading-shucho-003-q3',
        stem: 'この文章で筆者が最も言いたいことは何か。',
        options: [
          '多数決は欠陥を抱えた次善の知恵だからこそ、結論を絶対視せず、採決前に異論を尽くし採決後も検証し直すという運用の質が問われるべきだ。',
          '多数決は民主主義を内側から蝕む危険な装置であるから、別の決定方法に置き換えるべきだ。',
          '全員一致による決定こそが理想であり、時間がかかっても異論がなくなるまで議論を続けるべきだ。',
          '多数決で決まった結論には正統性があるのだから、負けた側は未練を捨てて速やかに従うべきだ。',
        ],
        answerIndex: 0,
        explanation:
          '末段是主張所在：筆者承認多數決是「なお手放すことのできない次善の知恵」，因此該問的是「運用の質」——表決前是否窮盡異論、表決後是否保留檢證迴路，並以「結論を絶対視することではなく、暫定的な合意にすぎないと自覚し続けること」收束。「別の決定方法に置き換えるべき」與「代わる魔法のような決定方法があると言いたいのではない」矛盾；「全員一致こそ理想」被「何も決められず」否定；「速やかに従うべきだ」正是首段筆者質疑的思考停止。',
        explanationEn:
          'The final paragraph carries the thesis: the author accepts majority rule as 「なお手放すことのできない次善の知恵」, so what must be asked is the quality of its operation — whether dissent was exhausted before the vote and whether channels for re-examining the conclusion remain afterward — closing with the idea that respecting majority rule means 「結論を絶対視することではなく、暫定的な合意にすぎないと自覚し続けること」. Replacing it with another method contradicts 「代わる魔法のような決定方法があると言いたいのではない」; holding up unanimity as the ideal is refuted by 「何も決められず」; and demanding that the losing side promptly submit is precisely the thought-stopping attitude questioned in the opening paragraph.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n1-reading-shucho-004',
    passageTitle: '便利さの代償',
    passage:
      '検索すれば数秒で答えが出て、注文すれば翌日に品物が届き、道に迷えば地図が現在地から導いてくれる。便利さの追求はとどまるところを知らず、我々の生活は一世代前と比べても格段に快適になった。この恩恵を手放したいと思う人はまずいないだろうし、私も例外ではない。だが、便利さが常に「無料」で手に入るわけではないという点は、立ち止まって考えてみる価値がある。便利さは多くの場合、我々自身のある種の能力と引き換えに提供されているからである。\nたとえば地図アプリを考えてみよう。指示どおりに歩けば確実に目的地へ着くが、その間、我々は街の構造を頭に描くことをやめている。かつて人は、迷い、目印を探し、道を尋ねながら、自分なりの地図を頭の中に育てていた。遠回りの過程こそが、空間を把握する力を鍛えていたのである。便利な道具は、こうした「過程」を短絡させることで成立する。結果だけが即座に手に入る世界では、結果に至る筋道を自力でたどる機会そのものが失われていく。\nより深刻なのは、この交換が目に見えにくいことだ。便利さの利得は使ったその瞬間にはっきり実感できるのに対し、失われる能力は長い時間をかけて静かに衰えていくため、我々は取引が行われたことにすら気づかない。気づいたときには、道具なしでは何もできない自分が出来上がっている。しかも道具が高度になるほど、任せられる領域は移動や計算といった作業から、文章を書く、選択肢を比較して選ぶ、といった判断の領域へと広がりつつある。判断まで委ねてしまえば、後に残るのは、道具の提案にただ頷くだけの主体である。\n繰り返すが、私は便利な道具を捨てて不便な生活に戻れと説きたいのではない。そのような主張は非現実的であるばかりか、便利さの恩恵なしには暮らせない人々への想像力を欠いてもいる。私が言いたいのは、便利さを受け取るたびに、自分が何を差し出しているのかを一度は意識せよ、ということだ。何を道具に任せ、何を自分の手に残すか。この線引きを自覚的に行う者だけが、便利さに飲み込まれることなく、便利さを従える側に立てる。豊かさとは、あらゆる過程を省略することではなく、省略するかどうかを自分で選べることなのではないだろうか。',
    explanation: '',
    questions: [
      {
        id: 'n1-reading-shucho-004-q1',
        stem: '筆者が地図アプリの例を通して示そうとしているのはどのようなことか。',
        options: [
          '便利な道具は結果に至る過程を短絡させることで成り立っており、その過程で鍛えられていた能力を使う機会が失われるということ',
          '地図アプリの指示は必ずしも正確ではないので、頼りすぎると目的地にたどり着けないということ',
          '道に迷って人に尋ねるほうが、地図アプリを使うよりも早く目的地に着けるということ',
          '昔の人は現代人よりも記憶力が優れていたため、道具に頼る必要がなかったということ',
        ],
        answerIndex: 0,
        explanation:
          '第二段的論旨：過去人們在迷路、找地標、問路的「遠回りの過程」中鍛鍊了掌握空間的能力，而「便利な道具は、こうした『過程』を短絡させることで成立する」，於是自力走完結果之路的機會本身消失了。「指示は正確ではない」文中反而說「指示どおりに歩けば確実に目的地へ着く」；「尋ねるほうが早い」文中沒有比較速度；「昔の人は記憶力が優れていた」是無中生有，筆者談的是過程鍛鍊能力，不是先天優劣。',
        explanationEn:
          'The point of paragraph two: people used to build mental maps through the roundabout process of getting lost, hunting for landmarks, and asking directions, and 「便利な道具は、こうした『過程』を短絡させることで成立する」 — so the very chance to trace the path to a result on one\'s own disappears. Claiming the app\'s directions are inaccurate contradicts the text, which says 「指示どおりに歩けば確実に目的地へ着く」; no comparison of speed between asking people and using the app is made; and the idea that people in the past had better memory is invented — the author\'s point is that the process trains ability, not that anyone was innately superior.',
      },
      {
        id: 'n1-reading-shucho-004-q2',
        stem: '筆者が「この交換が目に見えにくい」と言うのはなぜか。',
        options: [
          '便利さの利得はその場で実感できる一方、失われる能力は長い時間をかけて静かに衰えるため、取引が行われたこと自体に気づきにくいから',
          '道具の価格には、失われる能力の対価がいくらなのか表示されていないから',
          '便利な道具の内部の仕組みが複雑で、利用者にはその動作原理が理解できないから',
          '能力の衰えは本人には分からず、周囲の人が先に気づくものだから',
        ],
        answerIndex: 0,
        explanation:
          '第三段直接說明理由：「便利さの利得は使ったその瞬間にはっきり実感できるのに対し、失われる能力は長い時間をかけて静かに衰えていくため、我々は取引が行われたことにすら気づかない」——利得即時可感、代價緩慢無形，這種時間差使交換難以察覺。「価格に表示されていない」把比喻性的「交換」曲解成金錢標價問題；「動作原理が理解できない」談的是技術黑箱，文中未提；「周囲の人が先に気づく」文中沒有本人與旁人的對比。',
        explanationEn:
          'Paragraph three states the reason directly: 「便利さの利得は使ったその瞬間にはっきり実感できるのに対し、失われる能力は長い時間をかけて静かに衰えていくため、我々は取引が行われたことにすら気づかない」 — the gain is felt at once while the cost erodes slowly and invisibly, and this time lag makes the exchange hard to notice. The price-tag option misreads the metaphorical 「交換」 as a matter of monetary labeling; the inner workings of devices being too complex is a black-box issue the text never raises; and no contrast between the person and bystanders noticing first appears anywhere.',
      },
      {
        id: 'n1-reading-shucho-004-q3',
        stem: 'この文章で筆者が最も言いたいことは何か。',
        options: [
          '便利さを受け取るたびに自分が何を差し出しているかを意識し、何を道具に任せ何を自分の手に残すかを自覚的に選ぶことが必要だ。',
          '便利な道具は人間の判断力を奪うものであるから、思い切って捨てて不便な生活に戻るべきだ。',
          '便利さの恩恵は圧倒的なのだから、失われる能力を惜しむのは時代錯誤な感傷にすぎない。',
          '道具に任せられる領域を判断の分野にまで広げ、あらゆる過程を省略できる社会を目指すべきだ。',
        ],
        answerIndex: 0,
        explanation:
          '末段為全文主張：「便利さを受け取るたびに、自分が何を差し出しているのかを一度は意識せよ」，並強調「何を道具に任せ、何を自分の手に残すか」的自覺劃線，結尾以「省略するかどうかを自分で選べること」定義真正的豐足。「不便な生活に戻るべきだ」與「戻れと説きたいのではない」直接矛盾；「惜しむのは時代錯誤」正是筆者要讀者停下來反省的態度的反面；「あらゆる過程を省略できる社会を目指す」則是筆者警告會淪為「道具の提案にただ頷くだけの主体」的方向。',
        explanationEn:
          'The final paragraph is the thesis: 「便利さを受け取るたびに、自分が何を差し出しているのかを一度は意識せよ」, with the deliberate line-drawing of 「何を道具に任せ、何を自分の手に残すか」, and the closing definition of true richness as being able to choose for oneself whether to skip the process. Urging a return to inconvenient living directly contradicts 「戻れと説きたいのではない」; dismissing regret over lost abilities as outdated sentimentality is the very attitude the author asks readers to pause and reconsider; and aiming for a society where every process can be skipped is the direction the author warns would leave only 「道具の提案にただ頷くだけの主体」.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n1-reading-shucho-005',
    passageTitle: '「自分らしさ」という呪縛',
    passage:
      '「自分らしく生きよう」。広告や自己啓発書、卒業式の祝辞に至るまで、この言葉は現代の合言葉のように反復されている。他人の期待や世間の型に縛られず、ありのままの自分を大切にせよという呼びかけ自体に、異を唱えるつもりはない。画一的な生き方を押しつけられてきた時代を思えば、それは確かに解放の言葉であった。だが私は、この言葉が今日、当初とは逆の働き、すなわち人を縛る新しい呪縛として機能し始めているのではないかと疑っている。\nまず、「自分らしさ」という言葉は、どこかに「本当の自分」という完成品が隠されており、それを探し当てさえすれば迷いが消える、という発想を前提にしている。就職や転職の場面で「自分に合った仕事」を探し続け、見つからないのは探し方が足りないからだと自分を責める若者は少なくない。だが、掘り出されるのを待つ宝物のような自己が、本当に存在するのだろうか。探しても見つからないのは、努力が足りないからではなく、そもそも探すべきものが最初から「ない」からではないか。\n私の考えでは、自己とは発見されるものではなく、形成されるものである。人は他者との関わりの中で、期待に応えたり反発したり、役割を引き受けたり降りたりしながら、少しずつ「自分」と呼べる輪郭を作り上げていく。つまり自分らしさとは出発点ではなく、関係の積み重ねの後に振り返って初めて見えてくる軌跡なのだ。それを出発点に置き換えてしまうと、奇妙な転倒が起こる。まだ形成の途上にある者が、先に「本当の自分」を確定せよと迫られ、確定できない自分を欠陥品のように感じてしまうのである。他人の影響を受けることは自分を見失うことだとされ、助言に従うことにさえ後ろめたさを覚える。解放のための言葉が、こうして新しい強迫観念へと姿を変える。\nだから私は、「自分探し」に疲れた人には、むしろこう言いたい。自分の内側を覗き込むのをいったんやめて、目の前の他者や仕事に応答してみてはどうか、と。自分らしさとは、内面を掘って取り出す鉱石ではなく、応答の積み重ねが残す足跡である。足跡は、歩いた後にしかできない。ならば、まだ自分が見つからないということは欠陥ではなく、これから歩くための余白なのだと考えるべきではないだろうか。',
    explanation: '',
    questions: [
      {
        id: 'n1-reading-shucho-005-q1',
        stem: '筆者の言う「奇妙な転倒」とはどのようなことか。',
        options: [
          '関係の積み重ねの後に初めて見えてくるはずの自分らしさを出発点に置き換え、形成の途上にある者に先に「本当の自分」を確定するよう迫ること',
          '自分らしさを求めて生きてきた若者が、結局は世間の型どおりの画一的な生き方を選んでしまうこと',
          '他人の助言に素直に従い続けた結果、本当の自分を完全に見失ってしまうこと',
          '解放の言葉だったはずの「自分らしさ」が、広告や祝辞の中で商業的に利用されるようになったこと',
        ],
        answerIndex: 0,
        explanation:
          '第三段說明：自分らしさ本是「関係の積み重ねの後に振り返って初めて見えてくる軌跡」，「それを出発点に置き換えてしまうと、奇妙な転倒が起こる」——尚在形成途中的人被迫先確定「本当の自分」，確定不了就自覺像瑕疵品。「世間の型どおりの生き方を選ぶ」文中沒有這種結局；「本当の自分を完全に見失う」誤用了「後ろめたさを覚える」一句，筆者本就否定有待發現的真我；「商業的に利用される」只是挪用首段的字眼，並非「転倒」的內容。',
        explanationEn:
          'Paragraph three explains it: one\'s individuality is 「関係の積み重ねの後に振り返って初めて見えてくる軌跡」, and 「それを出発点に置き換えてしまうと、奇妙な転倒が起こる」 — those still in formation are pressed to fix their 「本当の自分」 first, and feel defective when they cannot. The text never depicts youths ending up choosing conformist lives; completely losing one\'s true self by following advice misreads the line about feeling 「後ろめたさ」, since the author denies a true self waiting to be found; and commercial exploitation merely recycles wording from the opening paragraph and is not what 「転倒」 refers to.',
      },
      {
        id: 'n1-reading-shucho-005-q2',
        stem: '筆者は、自己についてどのように考えているか。',
        options: [
          '自己は発見されるのを待つ完成品として存在するのではなく、他者との関わりの中で少しずつ形成されていくものである。',
          '本当の自分は心の奥深くに隠されているので、根気よく探し続ければ必ず見つけることができる。',
          '自己は他者の期待に応え続けることによってのみ作られるので、期待に反発してはならない。',
          '自分という輪郭は生まれつき定まっており、他人の影響を受けても変わることはない。',
        ],
        answerIndex: 0,
        explanation:
          '第三段開頭即是筆者的定義：「自己とは発見されるものではなく、形成されるものである」，人在與他者的關係中「期待に応えたり反発したり」，逐步做出「自分」的輪廓。「探し続ければ必ず見つかる」正是筆者質疑的尋寶式前提，第二段反問「探すべきものが最初から『ない』からではないか」；「応え続けることによってのみ」漏掉了「反発したり」一半，與原文不符；「生まれつき定まっており変わらない」與形成論完全相反。',
        explanationEn:
          'The opening of paragraph three gives the author\'s definition: 「自己とは発見されるものではなく、形成されるものである」 — through relations with others, 「期待に応えたり反発したり」, one gradually shapes an outline called the self. The idea that persistent searching will surely find the true self is exactly the treasure-hunt premise the author doubts, asking in paragraph two whether 「探すべきものが最初から『ない』からではないか」; the claim that the self is built only by meeting others\' expectations drops the 「反発したり」 half of the sentence; and an inborn, unchangeable self is the complete opposite of the formation view.',
      },
      {
        id: 'n1-reading-shucho-005-q3',
        stem: 'この文章で筆者が最も言いたいことは何か。',
        options: [
          '自分らしさは内面を掘って取り出すものではなく他者への応答の積み重ねが残す足跡なのだから、自分がまだ見つからないことを欠陥と考える必要はない。',
          '「自分らしく生きよう」という呼びかけは人を縛る呪縛でしかないので、この言葉を社会から追放すべきである。',
          '自分に合った仕事が見つからないのは探し方が足りないからであり、若者はもっと粘り強く自分探しを続けるべきである。',
          '他人の期待や助言は自分を見失わせるものにすぎないのだから、内面の声だけに従って生きるべきである。',
        ],
        answerIndex: 0,
        explanation:
          '末段是全文主張：與其窺視內心，不如「目の前の他者や仕事に応答してみてはどうか」，因為自分らしさ是「応答の積み重ねが残す足跡」，足跡走過之後才會出現，找不到自己「欠陥ではなく、これから歩くための余白」。「社会から追放すべき」過度極端，筆者明言對呼籲本身「異を唱えるつもりはない」；「もっと粘り強く自分探しを続けるべき」正是筆者批判的自責邏輯；「内面の声だけに従う」與筆者「向外應答」的主張方向相反。',
        explanationEn:
          'The final paragraph carries the thesis: rather than peering inward, 「目の前の他者や仕事に応答してみてはどうか」 — individuality is 「応答の積み重ねが残す足跡」, footprints that appear only after walking, so not having found oneself is 「欠陥ではなく、これから歩くための余白」. Banishing the slogan from society is far too extreme, as the author states 「異を唱えるつもりはない」 toward the call itself; urging youths to keep hunting for themselves more persistently is precisely the self-blaming logic criticized in paragraph two; and following only one\'s inner voice points the opposite way from the author\'s outward-response proposal.',
      },
    ],
  },
  {
    kind: 'passage',
    id: 'n1-reading-shucho-006',
    passageTitle: '災害の記憶をどう継承するか',
    passage:
      '大きな災害の後には、「この経験を風化させてはならない」という言葉が必ず語られる。実際、被災の体験を語り継ぐ語り部の活動、壊れた建物をあえて取り壊さずに残す遺構の保存、学校での防災教育など、記憶を継承するための営みは各地で続けられてきた。その意義を疑う人は少ないだろう。だが、体験者が年を重ね、直接の記憶を持つ世代が確実に減っていく今、「忘れるな」と唱えるだけでは記憶は残らないという冷厳な事実に、我々は向き合わなければならない時期に来ている。\nそもそも、体験していない者が災害を「記憶する」とは、どういうことなのか。体験者の記憶をそのまま受け取ることは、原理的に不可能である。聞き手の中に残るのは、体験そのものではなく、語りを通して想像された災害の像にすぎない。この限界を直視せずに、体験の完全な伝達を継承の目標に掲げるなら、体験者の死とともに継承は必ず失敗する。むしろ問うべきは、不完全にしか伝わらないことを前提としたうえで、それでも何を、何のために伝えるのかである。\nここで手がかりになるのは、継承の目的を「過去の再現」から「未来への備え」へずらして考えることだ。遺構の前に立つ者は、往時の恐怖を体験者と同じ濃度で感じることはできない。しかし、日常の風景の中に破壊の痕跡が突然現れるとき、人は「ここまで水が来たのか」「自分の町でも起こりうる」という想像を強いられる。語り部の話に含まれる、あの日どの道を通って逃げたか、何を持ち出せずに後悔したかといった具体的な細部は、聞き手が自分の生活に引きつけて考えるための足場になる。つまり継承とは、過去の体験を缶詰のように保存することではなく、聞き手一人一人の中に「次の災害を生き延びるための想像力」を育てる営みなのだ。\nそう考えれば、体験者がいなくなることは、継承の終わりを意味しない。体験を持たない世代は、体験の迫力では語り部にかなわないが、同じく体験を持たない聞き手が何をどう受け取るのかを知っているという点で、むしろ橋渡しに適してさえいる。いま求められているのは、記憶の風化をただ嘆くことでも、体験を神聖化して手を触れさせないことでもなく、伝わらなさを引き受けたうえで伝え方を工夫し続ける、地道な知恵である。記憶の継承とは、過去を守る営みである以上に、未来の命を守る営みなのだから。',
    explanation: '',
    questions: [
      {
        id: 'n1-reading-shucho-006-q1',
        stem: '筆者が「この限界」と言っているのはどのようなことか。',
        options: [
          '体験していない聞き手の中に残るのは語りを通して想像された災害の像であり、体験者の記憶をそのまま受け取ることは原理的に不可能だということ',
          '語り部の高齢化が進み、体験を直接語れる人の数が年々減っていくということ',
          '遺構の保存には多額の費用がかかるため、すべての被災地で実施することはできないということ',
          '学校の防災教育に使える時間は限られており、災害の全体像までは教えられないということ',
        ],
        answerIndex: 0,
        explanation:
          '「この限界」指的是同段前文：「体験者の記憶をそのまま受け取ることは、原理的に不可能である。聞き手の中に残るのは……語りを通して想像された災害の像にすぎない」——即傳達在原理上必然不完全。「語れる人が減っていく」是首段提出的背景，並非第二段指示語所指的內容；「保存の費用」與「教育の時間」文中皆未提及，是無中生有的干擾項。',
        explanationEn:
          '「この限界」 points back to the same paragraph: 「体験者の記憶をそのまま受け取ることは、原理的に不可能である」, and what remains in the listener is only 「語りを通して想像された災害の像」 — transmission is inherently incomplete in principle. The dwindling number of people who can speak from experience is background given in the opening paragraph, not what this demonstrative in paragraph two refers to; the cost of preserving ruins and the limited hours for disaster education appear nowhere in the text and are fabricated distractors.',
      },
      {
        id: 'n1-reading-shucho-006-q2',
        stem: '継承の目的を「未来への備え」へずらして考えるとは、どのようなことか。',
        options: [
          '過去の体験をそのまま保存し再現することではなく、聞き手の中に次の災害を生き延びるための想像力を育てることを継承の目的とすること',
          '遺構の保存や語り部といった従来の方法をやめて、避難訓練など実践的な備えだけに力を注ぐこと',
          '過去の災害の記録を正確に整理し、将来の研究者がいつでも利用できるようにしておくこと',
          '往時の恐怖を体験者と同じ濃度で感じられるような、迫力のある展示技術を開発すること',
        ],
        answerIndex: 0,
        explanation:
          '第三段結論：「継承とは、過去の体験を缶詰のように保存することではなく、聞き手一人一人の中に『次の災害を生き延びるための想像力』を育てる営みなのだ」——遺構與語り部的細節正是培養這種想像力的踏腳石。「従来の方法をやめる」相反，筆者是替遺構、語り部賦予新的定位而非廢除；「研究者向けの記録整理」文中未提；「同じ濃度で感じられる展示」與「同じ濃度で感じることはできない」的前提直接矛盾。',
        explanationEn:
          'Paragraph three concludes: 「継承とは、過去の体験を缶詰のように保存することではなく、聞き手一人一人の中に『次の災害を生き延びるための想像力』を育てる営みなのだ」 — the concrete details of ruins and storytellers are footholds for cultivating that imagination. Abandoning the traditional methods is backwards: the author repositions ruins and storytellers rather than scrapping them; organizing records for future researchers is never mentioned; and developing exhibits that convey the fear 「同じ濃度で」 directly contradicts the stated premise that such intensity 「感じることはできない」.',
      },
      {
        id: 'n1-reading-shucho-006-q3',
        stem: 'この文章で筆者が最も言いたいことは何か。',
        options: [
          '記憶の継承は、完全には伝わらないことを引き受けたうえで伝え方を工夫し続ける営みであり、体験者がいなくなっても未来の命を守るために続けられる。',
          '体験者の記憶はそのまま伝えることができない以上、体験者の死とともに継承の営みは終わりを迎えるほかない。',
          '災害の記憶を確実に残すためには、体験を神聖なものとして扱い、一言一句変えずに語り継いでいくべきだ。',
          '体験を持たない世代は語り部の迫力にかなわないのだから、継承の担い手は体験者に限るべきだ。',
        ],
        answerIndex: 0,
        explanation:
          '末段收束全文主張：「体験者がいなくなることは、継承の終わりを意味しない」，需要的是「伝わらなさを引き受けたうえで伝え方を工夫し続ける、地道な知恵」，因為記憶的傳承「未来の命を守る営み」。「継承は終わりを迎えるほかない」只取第二段的前提卻推翻了筆者的結論；「一言一句変えずに」正是筆者否定的「体験を神聖化して手を触れさせない」態度；「担い手は体験者に限る」與「むしろ橋渡しに適してさえいる」的評價相反。',
        explanationEn:
          'The final paragraph delivers the thesis: 「体験者がいなくなることは、継承の終わりを意味しない」 — what is needed is 「伝わらなさを引き受けたうえで伝え方を工夫し続ける、地道な知恵」, because handing down memory is above all 「未来の命を守る営み」. Saying transmission must end with the survivors\' deaths takes paragraph two\'s premise but overturns the author\'s conclusion; passing stories on word-for-word is exactly the sanctifying attitude the author rejects as 「体験を神聖化して手を触れさせない」こと; and limiting the role to survivors contradicts the judgment that the non-experiencing generation is 「むしろ橋渡しに適してさえいる」.',
      },
    ],
  },
]
