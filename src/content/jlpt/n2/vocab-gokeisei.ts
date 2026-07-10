import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  // ===== 接頭語 8 題（001~008）=====
  {
    kind: 'choice',
    id: 'n2-vocab-gokeisei-001',
    stem: '彼の発言はあまりに（　）常識で、会議室にいた全員があきれてしまった。',
    options: ['非', '無', '不', '未'],
    answerIndex: 0,
    explanation:
      '「非〜」接在名詞前表「違反、不合」，「非常識」（沒常識、不合常理）是固定派生語。中文說「沒常識」，但日文不用「無常識」，「不常識」「未常識」也都不成詞——「無」表「沒有某物」（無責任）、「不」多接形容動詞語幹（不自由）、「未」表「尚未」（未完成），皆與「常識」不搭配。',
    explanationEn:
      'The prefix 「非〜」 attaches to nouns to mean contrary to or against, and 「非常識」 (lacking common sense) is a fixed derived word. 「無常識」「不常識」「未常識」 are all non-words: 「無」 means lacking something one could possess (as in 「無責任」), 「不」 mostly attaches to na-adjective stems (as in 「不自由」), and 「未」 means not yet (as in 「未完成」) — none of them combine with 「常識」.',
  },
  {
    kind: 'choice',
    id: 'n2-vocab-gokeisei-002',
    stem: 'あの政治家は（　）責任な発言ばかりして、国民の信頼を失った。',
    options: ['無', '非', '不', '未'],
    answerIndex: 0,
    explanation:
      '「無〜」表「沒有〜」，「無責任」（不負責任）是固定派生語，指缺乏責任感。「非責任」「不責任」「未責任」都不成詞：「非」表「違反」（非常識）、「不」接形容動詞語幹（不便利）、「未」表「還沒發生」（未解決），與「責任」都無法組合。同組否定接頭語各有分工，是語形成的常考點。',
    explanationEn:
      'The prefix 「無〜」 means without, and 「無責任」 (irresponsible) is a fixed derived word describing a lack of a sense of responsibility. 「非責任」「不責任」「未責任」 are all non-words: 「非」 means contrary to (as in 「非常識」), 「不」 attaches to na-adjective stems (as in 「不便利」), and 「未」 means not yet happened (as in 「未解決」) — none combine with 「責任」. The division of labor among these negative prefixes is a favorite word-formation test point.',
  },
  {
    kind: 'choice',
    id: 'n2-vocab-gokeisei-003',
    stem: 'この事件は十年たった今も（　）解決のままになっている。',
    options: ['未', '無', '非', '不'],
    answerIndex: 0,
    explanation:
      '「未〜」表「尚未〜」，接動作性漢語名詞，「未解決」（尚未解決）正合「十年後仍然如此」的語境。「無解決」「非解決」「不解決」皆不成詞：「無」接的是可擁有的東西（無関心）、「非」表性質上的否定（非公式）、「不」接狀態性語幹（不完全），都不能接「解決」這種動作名詞。',
    explanationEn:
      'The prefix 「未〜」 means not yet and attaches to action nouns of Chinese origin; 「未解決」 (still unsolved) perfectly fits a case that remains open after ten years. 「無解決」「非解決」「不解決」 are all non-words: 「無」 attaches to things one can possess (as in 「無関心」), 「非」 negates a quality (as in 「非公式」), and 「不」 attaches to stative stems (as in 「不完全」) — none can take an action noun like 「解決」.',
  },
  {
    kind: 'choice',
    id: 'n2-vocab-gokeisei-004',
    stem: 'パソコンの動きが遅くなったので、一度（　）起動してみた。',
    options: ['再', '最', '無', '非'],
    answerIndex: 0,
    explanation:
      '「再〜」表「再次、重新」，「再起動」（重新開機）是電腦用語的固定說法，與「動作變慢所以重開一次」語境相合。「最起動」「無起動」「非起動」都不成詞：「最」接程度性語彙（最先端）、「無」「非」是否定接頭語，接「起動」這種動作名詞既不成詞也不合「試著重開」的句意。',
    explanationEn:
      'The prefix 「再〜」 means again or anew, and 「再起動」 (reboot, restart) is the standard computing term — a perfect fit for restarting a sluggish PC. 「最起動」「無起動」「非起動」 are all non-words: 「最」 attaches to degree words (as in 「最先端」), while 「無」 and 「非」 are negative prefixes that neither form a word with the action noun 「起動」 nor fit the sense of trying a restart.',
  },
  {
    kind: 'choice',
    id: 'n2-vocab-gokeisei-005',
    stem: 'この研究所では、（　）先端の医療技術の開発が進められている。',
    options: ['最', '高', '再', '低'],
    answerIndex: 0,
    explanation:
      '「最〜」表「最〜、頂尖」，「最先端」（最尖端）是固定派生語，常修飾技術、流行。「高先端」「再先端」「低先端」都不成詞：「高」「低」接可量化的性質（高性能、低価格），「先端」本身已是「尖端」，不能再論高低；「再」表重複動作，不能接方位性名詞。',
    explanationEn:
      'The prefix 「最〜」 means the most or top-level, and 「最先端」 (cutting-edge) is a fixed derived word that typically modifies technology or trends. 「高先端」「再先端」「低先端」 are all non-words: 「高」 and 「低」 attach to quantifiable qualities (as in 「高性能」「低価格」), but 「先端」 already means the leading edge and cannot be graded high or low; 「再」 marks a repeated action and cannot attach to a positional noun.',
  },
  {
    kind: 'choice',
    id: 'n2-vocab-gokeisei-006',
    stem: 'この掃除機は小型なのに（　）性能で、発売以来よく売れている。',
    options: ['高', '最', '大', '重'],
    answerIndex: 0,
    explanation:
      '「高〜」接可量化的性質名詞表「程度高」，「高性能」（高性能）是固定派生語，與「雖小卻好賣」的語境相合。「最性能」「大性能」「重性能」皆不成詞：「最」須接已含程度義的詞（最先端），要說最高等級得用「最高性能」；「大」「重」不與「性能」組合。',
    explanationEn:
      'The prefix 「高〜」 attaches to quantifiable quality nouns to mean a high degree, and 「高性能」 (high-performance) is a fixed derived word that fits a small vacuum that sells well. 「最性能」「大性能」「重性能」 are all non-words: 「最」 must attach to a word that already expresses degree (as in 「最先端」) — for the top grade you would say 「最高性能」; 「大」 and 「重」 simply do not combine with 「性能」.',
  },
  {
    kind: 'choice',
    id: 'n2-vocab-gokeisei-007',
    stem: 'ダイエット中なので、なるべく（　）カロリーの食品を選ぶようにしている。',
    options: ['低', '小', '軽', '短'],
    answerIndex: 0,
    explanation:
      '「低〜」接數值性名詞表「數值低」，「低カロリー」（低熱量）是固定說法，與「高〜」成對（高カロリー）。「小カロリー」「軽カロリー」「短カロリー」都不成詞：「小」「軽」「短」雖也是表「少、輕、短」的接頭要素，但熱量在日文慣用「高低」衡量，不用大小、輕重、長短。',
    explanationEn:
      'The prefix 「低〜」 attaches to numerical nouns to mean a low value, and 「低カロリー」 (low-calorie) is the fixed expression, paired with 「高カロリー」. 「小カロリー」「軽カロリー」「短カロリー」 are all non-words: although 「小」「軽」「短」 are prefix elements meaning small, light, and short, calories in Japanese are conventionally measured as high or low, not by size, weight, or length.',
  },
  {
    kind: 'choice',
    id: 'n2-vocab-gokeisei-008',
    stem: '予算の問題が指摘されたため、計画を最初から（　）検討することになった。',
    options: ['再', '復', '重', '逆'],
    answerIndex: 0,
    explanation:
      '「再〜」接動作性漢語表「再次進行」，「再検討」（重新檢討）是公務、商務常用派生語，正合「被指出問題後從頭來過」的語境。「復検討」「重検討」「逆検討」皆不成詞：「復」多用於既成詞（復習、復活）不能自由造詞；「重」「逆」也沒有接「検討」的用法。',
    explanationEn:
      'The prefix 「再〜」 attaches to Sino-Japanese action nouns to mean doing something over again, and 「再検討」 (re-examination) is a common derived word in official and business contexts — exactly right for redoing a plan after budget problems were pointed out. 「復検討」「重検討」「逆検討」 are all non-words: 「復」 appears only in established words like 「復習」「復活」 and cannot form new ones freely; 「重」 and 「逆」 likewise never attach to 「検討」.',
  },
  // ===== 接尾語 8 題（009~016）=====
  {
    kind: 'choice',
    id: 'n2-vocab-gokeisei-009',
    stem: '彼女のスピーチはとても魅力（　）で、聴衆を最後まで引きつけた。',
    options: ['的', '性', '風', '感'],
    answerIndex: 0,
    explanation:
      '「〜的」接漢語名詞構成形容動詞，表「具有〜性質的」，「魅力的」（有魅力的）後接「で」作述語正合文法。「魅力性」「魅力風」「魅力感」都不成詞：「〜性」接的是抽象性質（安全性）、「〜風」表樣式（和風）、「〜感」表感受（違和感），皆不與「魅力」組合，也接不了「で、聴衆を…」的句型。',
    explanationEn:
      'The suffix 「〜的」 attaches to Sino-Japanese nouns to form na-adjectives meaning having that quality; 「魅力的」 (captivating) followed by 「で」 works perfectly as the predicate here. 「魅力性」「魅力風」「魅力感」 are all non-words: 「〜性」 attaches to abstract properties (as in 「安全性」), 「〜風」 expresses a style (as in 「和風」), and 「〜感」 expresses a feeling (as in 「違和感」) — none combine with 「魅力」, nor would they fit the 「で、聴衆を…」 sentence pattern.',
  },
  {
    kind: 'choice',
    id: 'n2-vocab-gokeisei-010',
    stem: 'この薬は長年の研究により、安全（　）が高いことが証明されている。',
    options: ['性', '的', '感', '風'],
    answerIndex: 0,
    explanation:
      '「〜性」接漢語構成表「〜的性質、程度」的名詞，「安全性」（安全性）可作「が高い」的主語。「安全的」在日文不成詞（中文才說「安全的」）；「安全感」也是中文說法，日文用「安心感」；「安全風」不成詞，「〜風」表風格樣式（洋風）。此題考中日詞彙的「同形不同用」，是台灣考生易錯點。',
    explanationEn:
      'The suffix 「〜性」 forms nouns expressing the degree or property of something, and 「安全性」 (safety, degree of safety) can serve as the subject of 「が高い」. 「安全的」 is not a Japanese word (it exists only in Chinese); 「安全感」 is likewise a Chinese expression — Japanese uses 「安心感」 instead; 「安全風」 is a non-word, since 「〜風」 expresses a style (as in 「洋風」). This question targets false friends between Chinese and Japanese vocabulary.',
  },
  {
    kind: 'choice',
    id: 'n2-vocab-gokeisei-011',
    stem: 'この町では若者の流出が続き、高齢（　）が急速に進んでいる。',
    options: ['化', '的', '性', '感'],
    answerIndex: 0,
    explanation:
      '「〜化」接名詞表「變成〜的過程」，「高齢化」（高齡化）是社會議題的固定派生語，慣與「が進む」搭配。「高齢的」「高齢性」「高齢感」皆不成詞：「〜的」構成修飾語不能當變化過程講，「〜性」表性質、「〜感」表感受，都無法與「進む」（進展）搭配，語意也不通。',
    explanationEn:
      'The suffix 「〜化」 attaches to nouns to express the process of becoming something, and 「高齢化」 (population aging) is a fixed derived word in social issues, conventionally collocating with 「が進む」. 「高齢的」「高齢性」「高齢感」 are all non-words here: 「〜的」 forms modifiers and cannot describe a process of change, while 「〜性」 (property) and 「〜感」 (feeling) neither collocate with 「進む」 nor make sense in this context.',
  },
  {
    kind: 'choice',
    id: 'n2-vocab-gokeisei-012',
    stem: 'この美術館の入場（　）は大人千円、子供五百円だ。',
    options: ['料', '費', '代', '賃'],
    answerIndex: 0,
    explanation:
      '表金錢的接尾語各有分工：「〜料」是為接受服務而付的定價費用（入場料、手数料），「入場料」（門票費）是唯一成詞。「〜費」指某目的所需的整體開銷（交通費），「〜代」是換取物品或服務的對價（電気代），「〜賃」限勞務與租借（家賃、運賃），「入場費」「入場代」「入場賃」在日文都不成詞。',
    explanationEn:
      'The money suffixes each have their own role: 「〜料」 is a set fee paid to receive a service (as in 「入場料」「手数料」), and 「入場料」 (admission fee) is the only real word among the options. 「〜費」 covers total expenses for a purpose (as in 「交通費」); 「〜代」 is payment in exchange for goods or services (as in 「電気代」); 「〜賃」 is limited to labor and rental (as in 「家賃」「運賃」). 「入場費」「入場代」「入場賃」 do not exist in Japanese.',
  },
  {
    kind: 'choice',
    id: 'n2-vocab-gokeisei-013',
    stem: '今月は飲み会が多くて交際（　）がかさみ、貯金がほとんどできなかった。',
    options: ['費', '料', '代', '賃'],
    answerIndex: 0,
    explanation:
      '「〜費」表「為某目的支出的費用總稱」，「交際費」（交際應酬費）是家計、會計的固定分類詞，慣與「がかさむ」（不斷增加）搭配。「交際料」「交際代」「交際賃」皆不成詞：「〜料」是單次服務的定價（使用料）、「〜代」是具體消費的對價（タクシー代）、「〜賃」限勞務租借（家賃），都不能表「一類開銷的總和」。',
    explanationEn:
      'The suffix 「〜費」 denotes the overall expenses for a purpose, and 「交際費」 (socializing expenses) is a fixed category in household and corporate accounting, typically collocating with 「がかさむ」 (to pile up). 「交際料」「交際代」「交際賃」 are all non-words: 「〜料」 is a set price for a single service (as in 「使用料」), 「〜代」 is payment for a specific purchase (as in 「タクシー代」), and 「〜賃」 is limited to labor and rental (as in 「家賃」) — none can express a whole category of spending.',
  },
  {
    kind: 'choice',
    id: 'n2-vocab-gokeisei-014',
    stem: '終電を逃してしまい、タクシー（　）に五千円もかかった。',
    options: ['代', '料', '費', '賃'],
    answerIndex: 0,
    explanation:
      '「〜代」表「換取具體物品或服務所付的錢」，「タクシー代」（計程車錢）是日常固定說法。「タクシー料」不成詞（要說「タクシー料金」，「〜料」單獨接在外來語後不自然）；「タクシー費」不成詞，「〜費」接的是目的分類（交通費）；「タクシー賃」也不成詞，「〜賃」限「家賃、運賃」等固定詞，不能自由造詞。',
    explanationEn:
      'The suffix 「〜代」 denotes money paid in exchange for a specific item or service, and 「タクシー代」 (taxi fare) is the everyday fixed expression. 「タクシー料」 is not a word — you would say 「タクシー料金」, since bare 「〜料」 sounds unnatural after a loanword; 「タクシー費」 is not a word either, as 「〜費」 attaches to purpose categories (as in 「交通費」); 「タクシー賃」 also fails, because 「〜賃」 is limited to fixed words like 「家賃」「運賃」 and cannot form new compounds freely.',
  },
  {
    kind: 'choice',
    id: 'n2-vocab-gokeisei-015',
    stem: 'この書類はすでに確認（　）ですから、そのまま部長に提出してください。',
    options: ['済み', 'だらけ', '気味', 'っぽい'],
    answerIndex: 0,
    explanation:
      '「〜済み」接動作名詞表「已完成該動作」，「確認済み」（已確認完畢）是公文常用派生語，正合「可直接提交」的語境。「確認だらけ」「確認気味」「確認っぽい」皆不成詞：「〜だらけ」接的是大量存在的負面事物（ごみだらけ）、「〜気味」表輕微傾向（風邪気味）、「〜っぽい」表帶有某種感覺（子供っぽい），都不能接「確認」這種動作名詞。',
    explanationEn:
      'The suffix 「〜済み」 attaches to action nouns to mean the action is already completed; 「確認済み」 (already confirmed) is common in paperwork and fits a document that can be submitted as is. 「確認だらけ」「確認気味」「確認っぽい」 are all non-words: 「〜だらけ」 attaches to undesirable things present in large quantities (as in 「ごみだらけ」), 「〜気味」 expresses a slight tendency (as in 「風邪気味」), and 「〜っぽい」 expresses having a certain quality (as in 「子供っぽい」) — none can take an action noun like 「確認」.',
  },
  {
    kind: 'choice',
    id: 'n2-vocab-gokeisei-016',
    stem: '最近残業が続いていて、少し疲れ（　）なので、週末はゆっくり休むつもりだ。',
    options: ['気味', 'だらけ', '済み', 'っぽい'],
    answerIndex: 0,
    explanation:
      '「〜気味」接動詞ます形或名詞，表「稍微有〜的傾向」，「疲れ気味」（有點累）正合「加班持續、想休息」的語境。「疲れだらけ」「疲れ済み」不成詞：「〜だらけ」接具體事物（傷だらけ）、「〜済み」接可完成的動作（支払い済み）。「疲れっぽい」表「容易疲勞的體質」，是常態性質，且為い形容詞、後面不能接「な」，文法語意皆不合。',
    explanationEn:
      'The suffix 「〜気味」 attaches to a verb stem or noun to mean having a slight tendency toward something; 「疲れ気味」 (feeling a bit worn out) fits the context of ongoing overtime and wanting rest. 「疲れだらけ」 and 「疲れ済み」 are non-words: 「〜だらけ」 attaches to concrete things (as in 「傷だらけ」) and 「〜済み」 to completable actions (as in 「支払い済み」). 「疲れっぽい」 means constitutionally prone to fatigue — a permanent trait — and as an i-adjective it cannot be followed by 「な」, failing both grammatically and semantically.',
  },
  // ===== 複合動詞後項 4 題（017~020）=====
  {
    kind: 'choice',
    id: 'n2-vocab-gokeisei-017',
    stem: '映画のラストシーンで、隣の席の人が突然泣き（　）のでびっくりした。',
    options: ['出した', '込んだ', '切った', '直した'],
    answerIndex: 0,
    explanation:
      '複合動詞後項「〜出す」表「突然開始〜」，「泣き出す」（突然哭起來）與「突然」「びっくりした」的語境相合。「泣き込む」「泣き切る」「泣き直す」皆不成詞：「〜込む」表深入或進入（駆け込む）、「〜切る」表徹底做完（使い切る）、「〜直す」表重做一次（書き直す），都沒有與「泣く」組成的複合動詞。',
    explanationEn:
      'As the second element of a compound verb, 「〜出す」 means to suddenly start doing something; 「泣き出す」 (to burst into tears) matches the cues 「突然」 and 「びっくりした」. 「泣き込む」「泣き切る」「泣き直す」 are all non-words: 「〜込む」 expresses going deep into or entering (as in 「駆け込む」), 「〜切る」 doing something completely (as in 「使い切る」), and 「〜直す」 redoing something (as in 「書き直す」) — none of them form a compound with 「泣く」.',
  },
  {
    kind: 'choice',
    id: 'n2-vocab-gokeisei-018',
    stem: '参加費は今月末までに、こちらの口座に振り（　）ください。',
    options: ['込んで', '出して', '切って', '直して'],
    answerIndex: 0,
    explanation:
      '「〜込む」表「進入內部」，「振り込む」（匯款入帳）是銀行匯款的固定複合動詞，「口座に振り込む」為慣用搭配。「振り出す」雖成詞但指開立票據（手形を振り出す），不能用於把錢匯「進」帳戶；「振り切る」是甩開（誘いを振り切る），語境完全不合；「振り直す」不是慣用複合動詞，也講不通。',
    explanationEn:
      'The element 「〜込む」 expresses movement into something, and 「振り込む」 (to transfer money into an account) is the fixed compound verb for bank transfers; 「口座に振り込む」 is the standard collocation. 「振り出す」 is a real word but means to issue a bill or draft (as in 「手形を振り出す」), not to pay money into an account; 「振り切る」 means to shake off (as in 「誘いを振り切る」), which does not fit at all; 「振り直す」 is not an established compound verb and makes no sense here.',
  },
  {
    kind: 'choice',
    id: 'n2-vocab-gokeisei-019',
    stem: '初めてのフルマラソンを最後まで走り（　）ことができて、大きな自信になった。',
    options: ['切る', '出す', '込む', '直す'],
    answerIndex: 0,
    explanation:
      '「〜切る」表「徹底做到最後」，「走り切る」（跑完全程）與「最後まで」「自信になった」的語境相合。「走り出す」雖成詞但表「突然開始跑」，與「最後まで」矛盾；「走り込む」是「反覆跑步鍛鍊」的訓練用語，不能接「最後まで」；「走り直す」（重跑一次）不是慣用複合動詞，語意也不合初次完賽的情境。',
    explanationEn:
      'The element 「〜切る」 means to carry something through to the very end; 「走り切る」 (to run the whole distance) matches 「最後まで」 and the resulting confidence. 「走り出す」 is a real word but means to suddenly start running, contradicting 「最後まで」; 「走り込む」 is a training term for putting in repeated running practice and cannot follow 「最後まで」; 「走り直す」 (to run again) is not an established compound verb and does not suit finishing a first marathon.',
  },
  {
    kind: 'choice',
    id: 'n2-vocab-gokeisei-020',
    stem: '電話が途中で切れてしまったので、すぐにこちらから掛け（　）。',
    options: ['直した', '出した', '込んだ', '切った'],
    answerIndex: 0,
    explanation:
      '「〜直す」表「重新做一次」，「掛け直す」（重打電話）與「電話中斷所以再打」的語境相合。「掛け出す」「掛け込む」「掛け切る」皆不成詞：「〜出す」表突然開始（泣き出す）、「〜込む」表進入（飛び込む，「駆け込む」是「駆け」不是「掛け」）、「〜切る」表做完（読み切る），都沒有與「掛ける」組成的慣用複合動詞。',
    explanationEn:
      'The element 「〜直す」 means to do something over again; 「掛け直す」 (to call back) fits the situation where the call got cut off and you dial again. 「掛け出す」「掛け込む」「掛け切る」 are all non-words: 「〜出す」 means to suddenly start (as in 「泣き出す」), 「〜込む」 means to go into (as in 「飛び込む」 — note that 「駆け込む」 uses 「駆け」, not 「掛け」), and 「〜切る」 means to finish completely (as in 「読み切る」) — none form an established compound with 「掛ける」.',
  },
]
