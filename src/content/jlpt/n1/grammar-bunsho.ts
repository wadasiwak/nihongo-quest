import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    id: 'n1-grammar-bunsho-001',
    kind: 'passage',
    passageTitle: '要約で本を「読んだ」ことになるのか',
    passage:
      '書籍の内容を十分ほどの動画や短い要約記事で済ませる人が増えているという。忙しい現代人にとって、限られた時間で多くの知識を得られるのだから、合理的な選択だと言えなくもない。【１】、それで本を「読んだ」ことになるのかと問われれば、私は首をかしげざるを得ない。\n要約が伝えるのは、あくまで結論である。著者がその結論に至るまでに重ねた迷いや、論理の隙間を埋めようとする苦闘は、すべて削ぎ落とされてしまう。読書の価値は結論を知ることにあるのではない。【２】、著者の思考の道筋を自分の頭でたどり直す過程にこそあるのだ。\nむろん、あらゆる本を精読せよと言いたいのではない。情報収集のための実用書であれば、要約で事足りる場合も多いだろう。問題は、【３】読み方こそが読書のすべてだと思い込み、一冊の本と時間をかけて向き合う経験を持たないまま大人になる人が増えることである。\n効率とは、目的が明確なときにのみ意味を持つ概念である。だが、読書が自分に何をもたらすかは、読み終えるまで当人にも分からない。一冊の本とじっくり向き合って【４】、自分が本当に求めていたものに気づく——読書とは本来、そういう営みなのではないだろうか。',
    explanation: '',
    questions: [
      {
        id: 'n1-grammar-bunsho-001-q1',
        stem: '【１】に入るのはどれか。',
        options: ['とはいえ', 'それゆえ', 'ようするに', 'あるいは'],
        answerIndex: 0,
        explanation:
          '前句先讓步承認「不能說不是合理的選擇」，後句隨即翻轉質疑「這樣算讀過書嗎」，讓步後轉折要用「とはいえ」（話雖如此）。「それゆえ」表因果順接、「ようするに」用於歸納總結、「あるいは」表選擇並列，皆無法承接「言えなくもない」之後的逆轉語勢。',
        explanationEn:
          'The previous sentence concedes that summaries 「言えなくもない」 (could arguably be called a rational choice), and the next sentence immediately reverses course, questioning whether that counts as having read the book — a concession followed by a turn calls for 「とはいえ」 (that said). 「それゆえ」 marks straightforward cause and effect, 「ようするに」 sums up, and 「あるいは」 lists alternatives; none can carry the reversal after the concession.',
      },
      {
        id: 'n1-grammar-bunsho-001-q2',
        stem: '【２】に入るのはどれか。',
        options: ['むしろ', 'なぜなら', 'したがって', 'ちなみに'],
        answerIndex: 0,
        explanation:
          '「〜にあるのではない。むしろ〜にこそあるのだ」是先否定再提出更貼切主張的典型論理標識，中文語感是「與其說…不如說…」。「なぜなら」必須與句尾「〜からだ」呼應，此處句尾是「のだ」，搭配不成立；「したがって」表結論、「ちなみに」是補充題外話，都不合否定後改述的脈絡。',
        explanationEn:
          'The pattern 「〜にあるのではない。むしろ〜にこそあるのだ」 — first denying one claim, then asserting a truer one — is a classic logical marker, roughly not so much X as rather Y. 「なぜなら」 must be answered by a sentence-final 「〜からだ」, but this sentence ends in 「のだ」, so the pairing fails; 「したがって」 draws a conclusion and 「ちなみに」 adds an aside, neither fitting the deny-then-restate flow.',
      },
      {
        id: 'n1-grammar-bunsho-001-q3',
        stem: '【３】に入るのはどれか。',
        options: ['そうした', 'ああした', 'どのような', 'なんらかの'],
        answerIndex: 0,
        explanation:
          '此處承接前文提過的「以要約打發的讀書方式」，文章中指涉前述內容要用「そ」系指示詞，「そうした読み方」＝那種讀法。「ああした」的「あ」系指說寫雙方共知的遙遠事物，不能回指文章前文；「どのような」是疑問詞，本句並非疑問；「なんらかの」（某種）語意含糊，與後文斷定「こそが読書のすべて」矛盾。',
        explanationEn:
          'The blank refers back to the reading style already described — getting by on summaries — and within a text, referring back to prior content takes a そ-series demonstrative: 「そうした読み方」 means that kind of reading. The あ-series 「ああした」 points to something distant that writer and reader know from shared experience, not to earlier text; 「どのような」 is interrogative, but this is not a question; and the vague 「なんらかの」 (some kind of) contradicts the definitive 「こそが読書のすべて」 that follows.',
      },
      {
        id: 'n1-grammar-bunsho-001-q4',
        stem: '【４】に入るのはどれか。',
        options: ['はじめて', 'ばかりに', '以来', 'からというもの'],
        answerIndex: 0,
        explanation:
          '「〜てはじめて」表示「唯有做了…之後才第一次…」：認真面對一本書之後，才會察覺自己真正追求的東西，與本句的一般論述吻合。「ばかりに」（就因為…才落得）須接た形「向き合ったばかりに」且帶負面結果；「以来」「からというもの」都要求接在實際發生過的特定事件之後、描述其後持續的狀態，用在此種通則性敘述皆不成立。',
        explanationEn:
          '「〜てはじめて」 means only after doing ... does one for the first time ...: only after truly engaging with a book do you notice what you were really seeking, which fits this general statement. 「ばかりに」 (precisely because ..., with a bad result) would require the ta-form 「向き合ったばかりに」 and a negative outcome; 「以来」 and 「からというもの」 must follow a specific event that actually occurred and describe the state continuing since, so neither works in a generalizing claim like this.',
      },
    ],
  },
  {
    id: 'n1-grammar-bunsho-002',
    kind: 'passage',
    passageTitle: '問いを立てる力',
    passage:
      '生成ＡＩの登場によって、知識をめぐる状況は一変した。かつて専門家の権威は、膨大な知識を頭の中に蓄えていることそのものにあった。【１】、いまや誰もが、端末に問いかけるだけで専門書数冊分の情報を瞬時に手にできる。知識を「持っている」ことの価値は、急速に目減りしつつあると言わざるを得ない。\nでは、専門家は不要になるのだろうか。私はそうは思わない。求められる役割が変わるのだ。【２】、答えを与える者から、問うに値する問いを立てる者への転換である。ＡＩは、与えられた問いには驚くほど流暢に答える。だが、そもそも何を問うべきか、どの問いがその分野の急所を突いているかを見極めることは、いまなお人間の仕事である。\n実際、優れた研究者を観察していると、その真価は答えの正しさよりも、問いの立て方に表れることが多い。誰も疑わなかった前提をあえて疑い、常識の裏側に光を当てる。【３】問いの立て方は、長年その分野の泥にまみれてきた者ならではのものであり、要約された知識をいくら積み上げたところで身につくものではない。\nＡＩの進化を恐れる声は多い。だが本当に恐れるべきは、機械が人間を超えることではなく、人間が問うことをやめてしまうことだろう。道具がどれほど【４】、それを何に使うかを決めるのは、結局のところ人間なのだから。',
    explanation: '',
    questions: [
      {
        id: 'n1-grammar-bunsho-002-q1',
        stem: '【１】に入るのはどれか。',
        options: ['ところが', 'したがって', 'そのうえ', 'ようするに'],
        answerIndex: 0,
        explanation:
          '前句說過去專家的權威在於腦中累積的龐大知識，後句說如今任何人都能瞬間取得等量資訊，情勢發生出乎意料的翻轉，用逆接的「ところが」最貼切。「したがって」表因果、「そのうえ」表累加，前後並非因果或並列關係；「ようするに」用於把前文歸納成一句話，此處後句是新的對立事實而非總結。',
        explanationEn:
          'The preceding sentence says experts\' authority once lay in the sheer knowledge stored in their heads; the next says that now anyone can obtain the same information instantly — an unexpected reversal of the situation, best marked by the adversative 「ところが」. 「したがって」 signals cause and effect and 「そのうえ」 signals accumulation, but the two sentences are neither; 「ようするに」 condenses what came before into a summary, whereas what follows is a new opposing fact, not a recap.',
      },
      {
        id: 'n1-grammar-bunsho-002-q2',
        stem: '【２】に入るのはどれか。',
        options: ['すなわち', 'とはいえ', 'むしろ', 'ならびに'],
        answerIndex: 0,
        explanation:
          '前句拋出「求められる役割が変わる」的抽象命題，後句以「從給答案的人轉為立問題的人」加以換言具體化，這種同義改述要用「すなわち」（也就是說）。「とはいえ」是讓步後逆接、「むしろ」須先否定一方再提出另一方，前文並無否定；「ならびに」是書面語的並列連詞，用來連接名詞，不能引導改述句。',
        explanationEn:
          'The previous sentence poses the abstract claim 「求められる役割が変わる」, and the next restates it concretely — from one who gives answers to one who poses questions worth asking. Such rephrasing takes 「すなわち」 (that is to say). 「とはいえ」 is a concessive turn; 「むしろ」 requires first denying one side before offering the other, and no denial precedes; and 「ならびに」 is a formal conjunction that joins nouns, so it cannot introduce a restating clause.',
      },
      {
        id: 'n1-grammar-bunsho-002-q3',
        stem: '【３】に入るのはどれか。',
        options: ['こうした', 'ああした', 'どういった', 'いわゆる'],
        answerIndex: 0,
        explanation:
          '前句剛具體描寫了「敢於懷疑無人質疑的前提、照亮常識背面」的提問方式，緊接著以「こうした問いの立て方」統括收束，是文章中「こ」系指示詞承接前述內容的標準用法。「ああした」的「あ」系不能回指文章前文；「どういった」是疑問詞；「いわゆる」（所謂的）須接一個世人慣用的既有名稱，此處並無此類固定稱呼。',
        explanationEn:
          'The previous sentence has just concretely described a way of questioning — daring to doubt unquestioned premises and shining light on the underside of common sense — and the passage now gathers it up with 「こうした問いの立て方」, the standard use of a こ-series demonstrative to receive what was just stated. The あ-series 「ああした」 cannot point back into the text; 「どういった」 is interrogative; and 「いわゆる」 (so-called) must precede an established, commonly used label, which does not exist here.',
      },
      {
        id: 'n1-grammar-bunsho-002-q4',
        stem: '【４】に入るのはどれか。',
        options: ['賢くなろうと', '賢くなるまいと', '賢くなったとたん', '賢くなるかたわら'],
        answerIndex: 0,
        explanation:
          '「どれほど〜（よ）うと」＝「無論變得多麼…」，逆接假定的書面表現，「道具がどれほど賢くなろうと」與後句「決めるのは人間だ」呼應，語意通順。「〜まいと」是否定意向「無論不…」，與程度副詞「どれほど」無法搭配；「〜たとたん」表「一…就…」的瞬間先後，「〜かたわら」表「一邊…同時兼做…」，皆與「どれほど」的讓步語境不合。',
        explanationEn:
          '「どれほど〜（よ）うと」 means no matter how ... something may become, a literary concessive, so 「道具がどれほど賢くなろうと」 flows into the conclusion that humans still decide what to use the tool for. 「〜まいと」 is the negative volitional (no matter if ... does not), incompatible with the degree adverb 「どれほど」; 「〜たとたん」 expresses the instant one thing happened, another followed, and 「〜かたわら」 means while also doing ... on the side — neither suits the concessive context set up by 「どれほど」.',
      },
    ],
  },
  {
    id: 'n1-grammar-bunsho-003',
    kind: 'passage',
    passageTitle: '方言の行方',
    passage:
      '方言が消えつつあるという。テレビやインターネットの普及により、若い世代の話す言葉は、全国どこへ行っても驚くほど均質になった。意思疎通の面だけを考えれば、共通語への統一は望ましいことかもしれない。【１】、言葉が均質になることは、単に語彙が減るという以上の損失を伴うのではないか。\n方言には、その土地の気候や暮らしの中で磨かれてきた独自の感覚が織り込まれている。雪国には雪の状態を細かく言い分ける言葉があり、漁師町には潮の変化を表す言い回しがある。【２】言葉は、共通語に置き換えたとたん、微妙な手触りを失ってしまう。翻訳しきれない部分にこそ、方言の価値が宿っているのだ。\nもっとも、方言を守れといくら唱えても、日常で使われなければ言葉は生き残れない。研究者が立派な記録集を【３】、話し手そのものがいなくなれば、方言は標本と化すほかないのである。\nでは、どうすればよいのか。私は、方言を「正しく保存する」ことよりも、若い世代が方言を面白がる状況を作ることが先決だと考える。実際、方言をあえて取り入れた歌や漫画が、その土地に縁のない若者の支持を集める例は少なくない。愛着は義務からは生まれない。方言は、博物館に収める文化財である前に、日々使って【４】生きる言葉なのだから。',
    explanation: '',
    questions: [
      {
        id: 'n1-grammar-bunsho-003-q1',
        stem: '【１】に入るのはどれか。',
        options: ['しかし', 'したがって', 'そのうえ', 'たとえば'],
        answerIndex: 0,
        explanation:
          '前句先讓步承認「統一為共通語或許是好事」，後句隨即提出「均質化帶來的損失恐怕不止於語彙減少」的反面疑慮，讓步後轉折用逆接的「しかし」。「したがって」表因果順接、「そのうえ」表累加，都無法承接語勢的翻轉；「たとえば」用來舉例，後句是新的主張而非前句的例子。',
        explanationEn:
          'The preceding sentence concedes that unification into the standard language may be desirable for communication; the next raises the opposing worry that homogenized language costs more than mere vocabulary. A turn after a concession takes the adversative 「しかし」. 「したがって」 marks cause and effect and 「そのうえ」 adds information, so neither can carry the reversal; 「たとえば」 introduces an example, but what follows is a new claim, not an illustration of the previous sentence.',
      },
      {
        id: 'n1-grammar-bunsho-003-q2',
        stem: '【２】に入るのはどれか。',
        options: ['そうした', 'ああした', 'いかなる', 'いわゆる'],
        answerIndex: 0,
        explanation:
          '此處承接前句剛舉出的「雪國細分雪況的詞、漁村描述潮汐的說法」，文章中回指前述內容用「そ」系指示詞，「そうした言葉」＝那類詞語。「ああした」的「あ」系指說寫雙方共知的遠處事物，不能回指文章前文；「いかなる」（無論何種）多與「〜ても」等呼應，此處是斷定句；「いわゆる」須接世人慣用的既有稱呼，前文並無此類固定名稱。',
        explanationEn:
          'The blank picks up the examples just given — snow-country words that finely distinguish snow conditions, fishing-town phrases for the changing tides — and referring back within a text takes a そ-series demonstrative: 「そうした言葉」 means words like those. The あ-series 「ああした」 points to distant things both parties know firsthand, not to earlier text; 「いかなる」 (no matter what kind) normally pairs with 「〜ても」, but this is a declarative sentence; and 「いわゆる」 requires an established common label, which the preceding text does not supply.',
      },
      {
        id: 'n1-grammar-bunsho-003-q3',
        stem: '【３】に入るのはどれか。',
        options: ['作ったところで', '作るにあたって', '作るやいなや', '作るかたわら'],
        answerIndex: 0,
        explanation:
          '「〜たところで」表示「即使做了…也（沒用）」，與後句「說話者消失的話方言只能淪為標本」的消極結論呼應：就算編出再好的記錄集也無濟於事。「〜にあたって」用於鄭重場合的「值此…之際」，語意不合；「〜やいなや」是「一…就…」的瞬間相繼；「〜かたわら」表「一邊…同時兼做…」，皆無法帶出讓步後的否定結果。',
        explanationEn:
          '「〜たところで」 means even if one did ..., it would be no use, matching the bleak conclusion that once the speakers themselves are gone, the dialect can only become a museum specimen: however fine a compilation the researchers produce, it will not help. 「〜にあたって」 is the ceremonial on the occasion of ..., the wrong meaning; 「〜やいなや」 is the instantaneous no sooner ... than ...; and 「〜かたわら」 means while also doing ... — none can introduce the negative outcome after a concession.',
      },
      {
        id: 'n1-grammar-bunsho-003-q4',
        stem: '【４】に入るのはどれか。',
        options: ['こそ', 'さえ', 'すら', 'やら'],
        answerIndex: 0,
        explanation:
          '「〜てこそ」表示「唯有…才…」：方言唯有天天被使用才是活的語言，強調前項是後項成立的必要條件，正呼應前文「不被日常使用就無法存活」的論旨。「さえ」「すら」是「連…都…」的極端例提示，接在て形後表條件的用法（〜てさえいれば）此處形式不合且語意不通；「やら」表列舉或不確定，完全不合語境。',
        explanationEn:
          '「〜てこそ」 means only by ... does something truly ..., stressing the preceding clause as the necessary condition: a dialect is a living language only when used daily, echoing the earlier point that words cannot survive unused. 「さえ」 and 「すら」 present extreme examples (even ...), and their conditional use after the te-form requires the shape 「〜てさえいれば」, which does not fit here in form or sense; 「やら」 marks listing or uncertainty and is entirely out of place.',
      },
    ],
  },
  {
    id: 'n1-grammar-bunsho-004',
    kind: 'passage',
    passageTitle: '余白の効用',
    passage:
      '効率化の波は、都市の風景をも変えつつある。再開発の計画書には決まって「土地の有効活用」という言葉が並び、用途の定まらない空き地や、ただ広いだけの原っぱは、次々と収益施設に姿を変えていく。無駄を省くこと自体に異を唱えるつもりはない。【１】、都市から「余白」が消えることの影響は、もう少し慎重に考えられてよいのではないか。\n子どもの頃を思い出してほしい。秘密基地を作ったり、虫を追いかけたりした場所は、遊具の整った公園よりも、用途の決まっていない空き地ではなかったか。何をしてもよい場所だから【２】、遊びは自由に生まれた。用途があらかじめ決められた空間では、人はその用途どおりにしか振る舞えなくなるのである。\n【３】余白の効用は、子どもの遊びに限った話ではない。ベンチしかない小さな広場が、勤め人の息抜きの場になり、見知らぬ者同士の会話を生むこともある。計画者が意図しなかった使われ方をされたとき、都市は初めて生きた場所になるのだ。\nむろん、都市の土地は有限であり、すべてを余白のまま残せというのは暴論だろう。だが、収益という物差しだけで土地の価値を測り続ければ、都市は便利で【４】息苦しい場所になりかねない。効率の追求が行き着く先を、私たちは一度立ち止まって想像してみるべきである。',
    explanation: '',
    questions: [
      {
        id: 'n1-grammar-bunsho-004-q1',
        stem: '【１】に入るのはどれか。',
        options: ['ただ', 'ゆえに', 'および', 'いわば'],
        answerIndex: 0,
        explanation:
          '前句先聲明「無意反對節省浪費本身」，後句補上保留條件「但余白消失的影響應更審慎考量」，這種「大方向認同、唯獨附加但書」的語勢用「ただ」（只是、不過）最貼切。「ゆえに」是書面語的因果順接；「および」是連接名詞的並列連詞，不能引導句子；「いわば」（可以說是）用於打比方，皆不合此處的轉折但書。',
        explanationEn:
          'The writer first declares no intention of opposing the elimination of waste itself, then attaches the reservation that the loss of urban margins deserves more careful thought. This stance — broad agreement with one caveat — is exactly what 「ただ」 (only, it\'s just that) conveys. 「ゆえに」 is literary cause and effect; 「および」 is a conjunction that joins nouns and cannot introduce a sentence; and 「いわば」 (so to speak) introduces a metaphor — none fits the qualifying turn here.',
      },
      {
        id: 'n1-grammar-bunsho-004-q2',
        stem: '【２】に入るのはどれか。',
        options: ['こそ', 'まで', 'ばかり', 'どころ'],
        answerIndex: 0,
        explanation:
          '「だからこそ」＝「正因為如此才…」，強調「正因為是什麼都能做的地方，遊戲才得以自由誕生」的因果強調，是論說文常見的論理標識。「まで」表範圍或程度的極端、「ばかり」表限定或「盡是」，接在「だから」之後皆不成句；「どころ」用於「〜どころか」「〜どころではない」等否定強調句型，此處形式與語意皆不合。',
        explanationEn:
          '「だからこそ」 means precisely because of that, an emphatic causal marker common in essays: precisely because it was a place where anything was allowed, play arose freely. 「まで」 marks extremes of range or degree and 「ばかり」 marks limitation or nothing but, and neither forms a sentence after 「だから」; 「どころ」 appears in negative-emphasis patterns like 「〜どころか」 and 「〜どころではない」, so both its form and meaning are wrong here.',
      },
      {
        id: 'n1-grammar-bunsho-004-q3',
        stem: '【３】に入るのはどれか。',
        options: ['このような', 'あのような', 'どのような', 'なんらの'],
        answerIndex: 0,
        explanation:
          '前段剛具體描寫了「空地讓孩子自由玩耍」的例子，此處以「このような余白の効用」統括收束並推展到大人的世界，是文章中「こ」系指示詞承接前述內容的標準用法。「あのような」的「あ」系不能回指文章前文；「どのような」是疑問詞，本句是直述句；「なんらの」（任何的）須與否定呼應（なんらの効用もない），與本句肯定的展開矛盾。',
        explanationEn:
          'The previous paragraph has just given the concrete example of empty lots letting children play freely, and the passage now sums it up with 「このような余白の効用」 before extending the point to adults — the standard use of a こ-series demonstrative to receive the preceding content. The あ-series 「あのような」 cannot refer back into the text; 「どのような」 is interrogative while this is a declarative sentence; and 「なんらの」 (any ... at all) must pair with a negative, as in 「なんらの効用もない」, contradicting the affirmative development here.',
      },
      {
        id: 'n1-grammar-bunsho-004-q4',
        stem: '【４】に入るのはどれか。',
        options: ['ありながら', 'ありしだい', 'あるにひきかえ', 'あってからというもの'],
        answerIndex: 0,
        explanation:
          '「〜でありながら」表示「雖然…卻…」的逆接：城市雖然便利卻可能令人窒息，「便利」與「息苦しい」的矛盾並存正需要此逆接。「〜しだい」是「一…就馬上…」，須接動作性語詞；「〜にひきかえ」是「與…相反」，用於對比兩個不同事物，不能連接同一主語的兩種性質；「〜てからというもの」表「自從…以來一直…」，須接實際發生的事件，皆不合。',
        explanationEn:
          '「〜でありながら」 expresses the concessive although ... it is ...: the city could become convenient and yet suffocating, and the coexistence of the contradictory 「便利」 and 「息苦しい」 demands exactly this. 「〜しだい」 means as soon as ... and must follow an action word; 「〜にひきかえ」 (in contrast to ...) contrasts two different things and cannot join two qualities of the same subject; and 「〜てからというもの」 (ever since ...) must follow an actual event — none fits.',
      },
    ],
  },
  {
    id: 'n1-grammar-bunsho-005',
    kind: 'passage',
    passageTitle: '介護現場のロボットと「人の手」',
    passage:
      '介護の現場で、ロボットの導入が進んでいる。入居者を抱え上げる装置、転倒を知らせる見守りセンサー、話し相手になる機械まで、その種類は年々増えるばかりだ。人手不足が深刻化するなか、機械に任せられる仕事は任せるべきだという主張は、一見もっともに聞こえる。【１】、介護は効率化になじまない営みだという反発も根強い。「人の手のぬくもり」こそが介護の本質であり、機械に置き換えれば介護は冷たいものになる、というのである。\nだが、現場を訪ねてみると、この対立の図式がいかに粗いものかに気づかされる。ある施設では、抱え上げの装置を導入したところ、職員の腰痛が減っただけでなく、夜勤の負担が軽くなり、日中に利用者とゆっくり向き合う余裕が生まれたという。【２】現場の声が示すのは、機械が人の手を奪ったのではなく、体を壊すほどの力仕事を機械が引き受けた結果、人にしかできない仕事に人の手が戻ってきた、ということである。\n【３】、導入しさえすれば万事うまくいくというわけでもない。操作に慣れるまでかえって手間が増えたという施設もあれば、高価な機器が倉庫で眠っているという話も聞く。問われているのは機器の性能そのものよりも、どの仕事を機械に任せ、どの仕事を人が担い続けるのかという線引きなのだ。\nぬくもりとは、手が触れることそのものではなく、相手に向き合う時間と注意から生まれるものだろう。その時間を取り戻す手段として機械を使うのなら、ロボットの導入は介護を冷たくする【４】、むしろ人間らしくするための選択でありうるのではないか。',
    explanation: '',
    questions: [
      {
        id: 'n1-grammar-bunsho-005-q1',
        stem: '【１】に入るのはどれか。',
        options: ['一方', 'それゆえ', 'すなわち', 'ちなみに'],
        answerIndex: 0,
        explanation:
          '前句陳述贊成導入的主張「機械に任せられる仕事は任せるべきだ」，後句列出「介護は効率化になじまない」的反彈，兩種立場並陳對比要用「一方」（另一方面），且與句尾「反発も根強い」的「も」相呼應。「それゆえ」表因果順接，前後並非因果；「すなわち」用於同義改述，反彈並不是前句主張的換句話說；「ちなみに」是補充題外話，無法引出分庭抗禮的對立意見。',
        explanationEn:
          'The first sentence presents the pro-adoption claim 「機械に任せられる仕事は任せるべきだ」, and the next lays out the opposing backlash that care work resists efficiency — juxtaposing two contrasting positions calls for 「一方」 (on the other hand), echoing the 「も」 in 「反発も根強い」. 「それゆえ」 marks cause and effect, which these sentences are not; 「すなわち」 restates in other words, but the backlash is no paraphrase of the claim; and 「ちなみに」 adds an aside, unable to introduce an opposing camp.',
      },
      {
        id: 'n1-grammar-bunsho-005-q2',
        stem: '【２】に入るのはどれか。',
        options: ['こうした', 'ああした', 'どういった', 'なんらかの'],
        answerIndex: 0,
        explanation:
          '前句剛具體引述某機構導入裝置後「腰痛減少、夜勤負擔變輕、白天有餘裕陪伴利用者」的實例，緊接著以「こうした現場の声」統括收束，是文章中「こ」系指示詞承接剛敘述內容的標準用法。「ああした」的「あ」系指說寫雙方共知的遙遠事物，不能回指文章前文；「どういった」是疑問詞，本句為直述句；「なんらかの」（某種）語意含糊，與後文明確歸納的斷定語氣不合。',
        explanationEn:
          'The previous sentence has just quoted a concrete example — after introducing the lifting device, back pain decreased, night shifts got lighter, and staff gained time to sit with residents — and the passage gathers it up as 「こうした現場の声」, the standard use of a こ-series demonstrative to receive what was just stated. The あ-series 「ああした」 points to distant things both parties know firsthand and cannot refer back into the text; 「どういった」 is interrogative while this sentence is declarative; and the vague 「なんらかの」 (some kind of) clashes with the definite summing-up that follows.',
      },
      {
        id: 'n1-grammar-bunsho-005-q3',
        stem: '【３】に入るのはどれか。',
        options: ['もっとも', 'なぜなら', 'それゆえ', 'おまけに'],
        answerIndex: 0,
        explanation:
          '第二段整段肯定導入帶來的正面效果，本句補上但書「並非導入就萬事順利」，這種「先大致肯定、再附加保留」的語勢用「もっとも」（話說回來、不過）最貼切。「なぜなら」必須與句尾「〜からだ」呼應，此處句尾是「わけでもない」，搭配不成立；「それゆえ」表因果順接，無法引出限制前文的但書；「おまけに」表累加，與翻轉語勢正好相反。',
        explanationEn:
          'The second paragraph wholly affirms the benefits of adoption, and this sentence adds the caveat that merely introducing robots does not make everything go well — the stance of broadly affirming and then qualifying is exactly what 「もっとも」 (that said, mind you) conveys. 「なぜなら」 must pair with a sentence-final 「〜からだ」, but this sentence ends in 「わけでもない」, so the pairing fails; 「それゆえ」 is a causal connective that cannot introduce a reservation; and 「おまけに」 piles on more of the same, the opposite of a qualifying turn.',
      },
      {
        id: 'n1-grammar-bunsho-005-q4',
        stem: '【４】に入るのはどれか。',
        options: ['どころか', 'ばかりか', 'のみならず', 'ばかりに'],
        answerIndex: 0,
        explanation:
          '「〜どころか、むしろ〜」表示「非但不是…反而是…」：導入非但不會讓照護變冷漠，反而可能使它更有人味，與後文的「むしろ」正好呼應。「ばかりか」「のみならず」都是「不僅…而且…」的累加，會變成「既變冷漠又變得有人味」的矛盾並立；「ばかりに」（就因為…才落得）須接た形且帶負面結果，形式與語意皆不合。',
        explanationEn:
          '「〜どころか、むしろ〜」 means far from being X, it is rather Y: far from making care cold, adopting robots can instead make it more humane, dovetailing with the following 「むしろ」. Both 「ばかりか」 and 「のみならず」 mean not only ... but also, which would absurdly stack making care cold and making it humane together; 「ばかりに」 (precisely because ..., with a bad result) requires the ta-form and a negative outcome, failing in both form and sense.',
      },
    ],
  },
  {
    id: 'n1-grammar-bunsho-006',
    kind: 'passage',
    passageTitle: '食品ロスは誰の問題か',
    passage:
      'まだ食べられる食品が、日本では年間数百万トンも捨てられているという。この食品ロスを減らそうと、期限の近い商品の値引きや、余った食品を必要な人に届ける活動が各地で広がりつつある。「もったいない」という感覚は日本人の美徳だとしばしば語られ、削減の呼びかけも多くはこの心情に訴えるものだ。【１】、美徳に訴えるだけで問題が片づくかといえば、事はそれほど単純ではない。\nというのも、食品ロスの少なからぬ部分は、個人の不注意ではなく、仕組みそのものから生まれているからである。小売店は欠品を恐れて多めに仕入れ、賞味期限まで十分な余裕のある商品しか納品させないという商慣行が、まだ食べられる食品を店に並ぶ前に廃棄へと追いやる。この流れの川上に手をつけないかぎり、一人ひとりが家庭での買い方を【２】、社会全体のロスが大きく減ることはないだろう。\nでは、個人にできることは何もないのだろうか。そうではあるまい。消費者が値引き商品を進んで選び、外食では食べきれる量だけを注文するようになれば、企業の側も過剰な仕入れを見直さざるを得なくなる。個人の行動は、それ自体でロスを消し去る力は持たない【３】、構造に圧力をかける一票にはなりうるのだ。\n「もったいない」という言葉には、食べ物の背後にある手間への敬意が込められている。その敬意を個人の心がけの中に閉じ込めず、商慣行や制度を見直す動きへとつなげていくこと。商慣行も制度も人間が作ったものである以上、人間の手で【４】。必要なのは嘆きではなく、仕組みを設計し直す意志なのである。',
    explanation: '',
    questions: [
      {
        id: 'n1-grammar-bunsho-006-q1',
        stem: '【１】に入るのはどれか。',
        options: ['しかしながら', 'それゆえ', 'いわば', 'および'],
        answerIndex: 0,
        explanation:
          '前句說削減的呼籲多半訴諸「もったいない」的美德心情，後句隨即質疑「光靠訴諸美德就能解決嗎，事情沒那麼單純」，語勢翻轉要用書面語的逆接「しかしながら」。「それゆえ」表因果順接，前後並非因果；「いわば」（可以說是）用於打比方，後句不是比喻；「および」是連接名詞的並列連詞，不能放在句首引導句子。',
        explanationEn:
          'The previous sentence notes that most appeals for reduction invoke the sentiment of 「もったいない」 as a Japanese virtue, and the next immediately questions whether appealing to virtue alone can settle the problem — a reversal that takes the literary adversative 「しかしながら」. 「それゆえ」 marks straightforward causation, which the sentences are not; 「いわば」 (so to speak) introduces a metaphor, but what follows is no analogy; and 「および」 is a conjunction that joins nouns and cannot stand at the head of a sentence.',
      },
      {
        id: 'n1-grammar-bunsho-006-q2',
        stem: '【２】に入るのはどれか。',
        options: ['見直したくらいでは', '見直したとたん', '見直すついでに', '見直すべく'],
        answerIndex: 0,
        explanation:
          '「〜たくらいでは〜ない」表示「光是做到…的程度是不會…的」：只靠個人在家檢討買法，不足以大幅減少整體食品ロス，與句尾「減ることはないだろう」的否定呼應，也扣合「不動上游就沒用」的段旨。「見直したとたん」是「一…就…」的瞬間相繼，後句並非緊接發生的事件；「見直すついでに」（順便）語意不合；「見直すべく」（為了…）表目的，無法連接否定的結論。',
        explanationEn:
          '「〜たくらいでは〜ない」 means merely doing ... to that extent will not ...: individuals rethinking household shopping alone is not enough to shrink society-wide food loss, matching the negative ending 「減ることはないだろう」 and the paragraph\'s point that nothing changes without touching the upstream. 「見直したとたん」 (the instant one did ...) requires an immediately ensuing event, which the clause is not; 「見直すついでに」 (while at it) is the wrong meaning; and the purposive 「見直すべく」 (in order to) cannot lead into a negative conclusion.',
      },
      {
        id: 'n1-grammar-bunsho-006-q3',
        stem: '【３】に入るのはどれか。',
        options: ['までも', 'かぎり', 'ばかりに', 'どころか'],
        answerIndex: 0,
        explanation:
          '「〜ないまでも」表示「即使達不到…的程度，至少也…」：個人行動雖沒有靠自身消滅食品ロス的力量，退一步說仍能成為對結構施壓的一票，先讓步再保住較低限度的主張。「かぎり」會變成「只要沒有力量就能成為一票」，邏輯不通；「ばかりに」須帶負面結果，後句卻是正面評價；「どころか」用於全盤翻轉前項，與「退而求其次」的語勢不合。',
        explanationEn:
          '「〜ないまでも」 means even if it does not go as far as ..., at least ...: individual action lacks the power to wipe out food loss by itself, yet can still serve as a vote pressuring the structure — conceding first, then securing the lesser claim. 「かぎり」 would absurdly mean as long as it lacks power, it can be a vote; 「ばかりに」 demands a negative outcome, but what follows is a positive appraisal; and 「どころか」 flatly overturns the preceding clause, not matching the settle-for-less tone.',
      },
      {
        id: 'n1-grammar-bunsho-006-q4',
        stem: '【４】に入るのはどれか。',
        options: ['変えられないはずはない', '変えられるはずがない', '変えるまでもない', '変えかねない'],
        answerIndex: 0,
        explanation:
          '「〜ないはずはない」是雙重否定的強烈肯定：「商慣行も制度も人間が作ったものである以上」（既然都是人造之物），推得「不可能改不了」，與後句「需要的是重新設計制度的意志」的積極語氣呼應。「変えられるはずがない」語意正好相反，與「以上」的推論及後文矛盾；「変えるまでもない」（用不著改）否定改變的必要，同樣牴觸文章主旨。',
        explanationEn:
          '「〜ないはずはない」 is a double negative amounting to strong affirmation: given 「商慣行も制度も人間が作ったものである以上」 (since both business practices and institutions were made by humans), it cannot be impossible to change them, matching the resolve in the next sentence that what is needed is the will to redesign the system. 「変えられるはずがない」 says the exact opposite, contradicting the inference from 「以上」 and what follows; 「変えるまでもない」 (no need to change) denies the very necessity of change, likewise clashing with the passage\'s point.',
      },
    ],
  },
]
