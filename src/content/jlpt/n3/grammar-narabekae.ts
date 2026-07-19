import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    kind: 'order',
    id: 'n3-grammar-narabekae-001',
    before: '彼は、日本語',
    after: 'と聞いて驚いた。',
    segments: ['ばかりでなく', '英語や', '中国語も', '話せる'],
    starIndex: 0,
    explanation:
      '完整句：「彼は、日本語ばかりでなく英語や中国語も話せると聞いて驚いた。」「〜ばかりでなく」（不僅…連…也）直接接在名詞「日本語」後；「や」後面必須緊接名詞，故「英語や」只能放在「中国語も」前；句尾「話せる」接「と聞いて」構成引用內容，四段順序因此唯一。',
    explanationEn:
      'Complete sentence: 「彼は、日本語ばかりでなく英語や中国語も話せると聞いて驚いた。」 「〜ばかりでなく」 ("not only... but also") attaches directly to the noun 「日本語」; the listing particle 「や」 must be followed immediately by a noun, so 「英語や」 can only precede 「中国語も」; sentence-final 「話せる」 links to 「と聞いて」 as the quoted content, so the order of the four segments is uniquely determined.',
  },
  {
    kind: 'order',
    id: 'n3-grammar-narabekae-002',
    before: '外国語は、毎日',
    after: 'が早くなるものだ。',
    segments: ['練習すれば', 'する', 'ほど', '上達'],
    starIndex: 2,
    explanation:
      '完整句：「外国語は、毎日練習すれば練習するほど上達が早くなるものだ。」「〜ば〜ほど」（越…越…）是固定句型：ば形之後必須重複同一動詞的辭書形再接「ほど」，故「練習すれば→する→ほど」順序不可調換；「上達」是名詞，只能接在句尾助詞「が」前，語序唯一。',
    explanationEn:
      'Complete sentence: 「外国語は、毎日練習すれば練習するほど上達が早くなるものだ。」 「〜ば〜ほど」 ("the more..., the more...") is a fixed pattern: after the ba-form, the same verb must be repeated in the dictionary form and then take 「ほど」, so the order 「練習すれば」→「する」→「ほど」 cannot be rearranged; 「上達」 is a noun and can only stand before the particle 「が」, making the word order unique.',
  },
  {
    kind: 'order',
    id: 'n3-grammar-narabekae-003',
    before: 'この写真を',
    after: 'ことを思い出す。',
    segments: ['見る', 'たびに', '沖縄', '旅行の'],
    starIndex: 1,
    explanation:
      '完整句：「この写真を見るたびに沖縄旅行のことを思い出す。」「〜たびに」（每當…就…）須接動詞辭書形，只能跟在「見る」後；「沖縄」和「旅行の」組成複合詞「沖縄旅行」，「の」後又必須緊接名詞「こと」，故這兩段固定在句尾，整句只有一種排法。',
    explanationEn:
      'Complete sentence: 「この写真を見るたびに沖縄旅行のことを思い出す。」 「〜たびに」 ("every time...") must follow a dictionary-form verb, so it can only come after 「見る」; 「沖縄」 and 「旅行の」 form the compound 「沖縄旅行」, and the 「の」 must be followed directly by the noun 「こと」, so these two segments are locked at the end — only one arrangement works.',
  },
  {
    kind: 'order',
    id: 'n3-grammar-narabekae-004',
    before: '毎日ジョギングをしているが、',
    after: '健康のために続けているだけだ。',
    segments: ['走ることが', '好きな', 'わけでは', 'なく'],
    starIndex: 2,
    explanation:
      '完整句：「毎日ジョギングをしているが、走ることが好きなわけではなく、健康のために続けているだけだ。」「〜わけではない」（並非…）前面須接連體形，故「好きな」緊接「わけでは」；「なく」是中止形，用來連接後半句；「走ることが」是「好きな」的對象，只能放最前，語序唯一。',
    explanationEn:
      'Complete sentence: 「毎日ジョギングをしているが、走ることが好きなわけではなく、健康のために続けているだけだ。」 「〜わけではない」 ("it is not that...") must follow the attributive form, so 「好きな」 comes right before 「わけでは」; 「なく」 is the continuative form that links to the second half of the sentence; 「走ることが」 is the object of 「好きな」 and can only go first, so the word order is unique.',
  },
  {
    kind: 'order',
    id: 'n3-grammar-narabekae-005',
    before: '父は、医者に注意されて、',
    after: 'と母が言っていた。',
    segments: ['たばこを', 'やめる', 'ことに', 'した'],
    starIndex: 3,
    explanation:
      '完整句：「父は、医者に注意されて、たばこをやめることにしたと母が言っていた。」「〜ことにする」（決定…）表示自己下的決定：動詞辭書形「やめる」修飾「ことに」，再接「した」；「たばこを」是「やめる」的受詞須放最前；「した」後緊接引用的「と」，順序唯一。',
    explanationEn:
      'Complete sentence: 「父は、医者に注意されて、たばこをやめることにしたと母が言っていた。」 「〜ことにする」 ("decide to...") expresses a decision one makes oneself: the dictionary form 「やめる」 modifies 「ことに」, which is then followed by 「した」; 「たばこを」 is the object of 「やめる」 and must go first; 「した」 connects directly to the quotative 「と」, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n3-grammar-narabekae-006',
    before: '来月から、',
    after: 'ことになりました。',
    segments: ['大阪に', 'ある', '本社で', '働く'],
    starIndex: 3,
    explanation:
      '完整句：「来月から、大阪にある本社で働くことになりました。」「〜ことになる」（因外部決定而變成…）前須接連體形，故「働く」緊貼「ことになりました」；「大阪に」＋「ある」構成修飾「本社」的子句，「本社で」再接動詞「働く」，接續環環相扣，只有這一種排法。',
    explanationEn:
      'Complete sentence: 「来月から、大阪にある本社で働くことになりました。」 「〜ことになる」 ("it has been decided that...", by an external party) must follow the attributive form, so 「働く」 sits right before 「ことになりました」; 「大阪に」 plus 「ある」 forms the relative clause modifying 「本社」, and 「本社で」 then connects to the verb 「働く」 — each link constrains the next, allowing only this one arrangement.',
  },
  {
    kind: 'order',
    id: 'n3-grammar-narabekae-007',
    before: '初めて来る人でも',
    after: 'を送っておいた。',
    segments: ['迷わない', 'ように', '駅からの', '地図'],
    starIndex: 1,
    explanation:
      '完整句：「初めて来る人でも迷わないように、駅からの地図を送っておいた。」「〜ように」（為了能…）表目的，前接無意志動詞「迷わない」；「駅からの」的「の」後必須緊接名詞「地図」，而「地図」後緊貼助詞「を」，故後兩段固定在句尾，語序唯一。',
    explanationEn:
      'Complete sentence: 「初めて来る人でも迷わないように、駅からの地図を送っておいた。」 「〜ように」 expresses purpose ("so that...") and takes the non-volitional verb 「迷わない」 before it; the 「の」 of 「駅からの」 must be followed directly by the noun 「地図」, and 「地図」 sits right before the particle 「を」, so the last two segments are fixed at the end and the order is unique.',
  },
  {
    kind: 'order',
    id: 'n3-grammar-narabekae-008',
    before: '駅前に新しく',
    after: '、もう食べてみた？',
    segments: ['できた', 'ケーキ屋の', 'チーズケーキ', 'って'],
    starIndex: 2,
    explanation:
      '完整句：「駅前に新しくできたケーキ屋のチーズケーキって、もう食べてみた？」口語的「〜って」（說到…）用來提起話題，須接在名詞「チーズケーキ」後；副詞「新しく」只能修飾動詞「できた」，「できた」修飾「ケーキ屋」，「の」再連到「チーズケーキ」，一路接續固定，排法唯一。',
    explanationEn:
      'Complete sentence: 「駅前に新しくできたケーキ屋のチーズケーキって、もう食べてみた？」 The colloquial topic marker 「〜って」 ("speaking of...") must follow the noun 「チーズケーキ」; the adverb 「新しく」 can only modify the verb 「できた」, 「できた」 modifies 「ケーキ屋」, and 「の」 then links to 「チーズケーキ」 — the chain of connections is fixed, so only one arrangement is possible.',
  },
  {
    kind: 'order',
    id: 'n3-grammar-narabekae-009',
    before: '兄は、音楽を',
    after: '習慣になっている。',
    segments: ['聞き', 'ながら', '寝る', 'のが'],
    starIndex: 1,
    explanation:
      '完整句：「兄は、音楽を聞きながら寝るのが習慣になっている。」「〜ながら」（一邊…一邊…）須接動詞連用形，只能跟在「聞き」後；辭書形「寝る」修飾形式名詞「の」，「のが」再接「習慣になっている」作主語，四段接續環環相扣，語序唯一。',
    explanationEn:
      'Complete sentence: 「兄は、音楽を聞きながら寝るのが習慣になっている。」 「〜ながら」 ("while doing...") must attach to the masu-stem, so it can only follow 「聞き」; the dictionary form 「寝る」 modifies the nominalizer 「の」, and 「のが」 then serves as the subject of 「習慣になっている」 — each of the four segments constrains the next, making the order unique.',
  },
  {
    kind: 'order',
    id: 'n3-grammar-narabekae-010',
    before: '彼は、いかにも',
    after: '部屋を出て行った。',
    segments: ['残念', 'そうな', '顔を', 'して'],
    starIndex: 0,
    explanation:
      '完整句：「彼は、いかにも残念そうな顔をして部屋を出て行った。」樣態的「〜そうだ」（看起來…）接な形容詞語幹，故「残念」後必須是「そうな」；「そうな」是連體形，後面須接名詞「顔を」；「して」以て形連接後句。副詞「いかにも」慣與「〜そうだ」呼應，首段只能填「残念」。',
    explanationEn:
      'Complete sentence: 「彼は、いかにも残念そうな顔をして部屋を出て行った。」 The appearance 「〜そうだ」 ("looks...") attaches to the stem of a na-adjective, so 「残念」 must be followed by 「そうな」; 「そうな」 is the attributive form and must be followed by the noun phrase 「顔を」; 「して」 links to the rest with the te-form. The adverb 「いかにも」 idiomatically pairs with 「〜そうだ」, so only 「残念」 can fill the first slot.',
  },
  {
    kind: 'order',
    id: 'n3-grammar-narabekae-011',
    before: '天気予報によると、今年の',
    after: 'らしい。',
    segments: ['夏は', '例年', 'より', '暑い'],
    starIndex: 3,
    explanation:
      '完整句：「天気予報によると、今年の夏は例年より暑いらしい。」推量傳聞的「らしい」（聽說、似乎）接在い形容詞「暑い」後；比較的「より」必須緊跟名詞「例年」；開頭「今年の」的「の」後只能接名詞「夏は」。由「によると」帶出消息來源，整句排法唯一。',
    explanationEn:
      'Complete sentence: 「天気予報によると、今年の夏は例年より暑いらしい。」 The hearsay 「らしい」 ("apparently") attaches after the i-adjective 「暑い」; the comparative 「より」 must come right after the noun 「例年」; the opening 「今年の」 can only be followed by the noun phrase 「夏は」. With 「によると」 introducing the information source, the sentence has exactly one valid arrangement.',
  },
  {
    kind: 'order',
    id: 'n3-grammar-narabekae-012',
    before: 'この寺は、',
    after: '、週末は特に人が多い。',
    segments: ['多くの', '観光客に', '愛され', 'ており'],
    starIndex: 2,
    explanation:
      '完整句：「この寺は、多くの観光客に愛されており、週末は特に人が多い。」考受身「愛される」：動作主用「に」標示，故「観光客に」放在「愛され」前；「多くの」的「の」後須接名詞「観光客」；「ており」須接連用形「愛され」，用來中止接續後半句，語序唯一。',
    explanationEn:
      'Complete sentence: 「この寺は、多くの観光客に愛されており、週末は特に人が多い。」 This tests the passive 「愛される」: the agent is marked with 「に」, so 「観光客に」 goes before 「愛され」; the 「の」 of 「多くの」 must be followed by the noun 「観光客」; 「ており」 attaches to the masu-stem 「愛され」 and serves as the clause-linking pause before the second half, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n3-grammar-narabekae-013',
    before: '母は、弟に',
    after: 'として、毎日いろいろ工夫している。',
    segments: ['嫌いな', '野菜を', '食べ', 'させよう'],
    starIndex: 3,
    explanation:
      '完整句：「母は、弟に嫌いな野菜を食べさせようとして、毎日いろいろ工夫している。」考使役「食べさせる」：連用形「食べ」後必須緊接「させよう」，意向形再與後面的「として」組成「〜ようとする」（想辦法要…）；「嫌いな」修飾「野菜」、「野菜を」是受詞，順序固定不可換。',
    explanationEn:
      'Complete sentence: 「母は、弟に嫌いな野菜を食べさせようとして、毎日いろいろ工夫している。」 This tests the causative 「食べさせる」: the stem 「食べ」 must be followed directly by 「させよう」, and this volitional form combines with the following 「として」 to make 「〜ようとする」 ("try to..."); 「嫌いな」 modifies 「野菜」 and 「野菜を」 is the object, so the order is fixed and cannot be swapped.',
  },
  {
    kind: 'order',
    id: 'n3-grammar-narabekae-014',
    before: 'この本は難しくて、',
    after: 'が頭に入ってこない。',
    segments: ['何度', '読んで', 'も', '内容'],
    starIndex: 0,
    explanation:
      '完整句：「この本は難しくて、何度読んでも内容が頭に入ってこない。」「〜ても」（即使…也）在此拆成「読んで＋も」，「も」必須緊跟て形；疑問詞「何度」與「ても」呼應，須放在「読んで」前；「内容」是名詞，只能接在句尾助詞「が」前，四段語序唯一。',
    explanationEn:
      'Complete sentence: 「この本は難しくて、何度読んでも内容が頭に入ってこない。」 「〜ても」 ("no matter how / even if") is split here into 「読んで」 plus 「も」, and 「も」 must directly follow the te-form; the question word 「何度」 pairs with 「ても」 and must precede 「読んで」; 「内容」 is a noun that can only stand before the particle 「が」, so the order of the four segments is unique.',
  },
  {
    kind: 'order',
    id: 'n3-grammar-narabekae-015',
    before: '約束の時間を',
    after: '彼はまだ現れない。',
    segments: ['とっくに', '過ぎて', 'いる', 'のに'],
    starIndex: 1,
    explanation:
      '完整句：「約束の時間をとっくに過ぎているのに、彼はまだ現れない。」逆接的「〜のに」（明明…卻）接在「いる」後；「過ぎて＋いる」是「ている」的拆分，接續固定；副詞「とっくに」（早就）表完成，須修飾「過ぎている」、放在其前，與句尾「まだ現れない」形成對比，語序唯一。',
    explanationEn:
      'Complete sentence: 「約束の時間をとっくに過ぎているのに、彼はまだ現れない。」 The contrastive 「〜のに」 ("even though") attaches after 「いる」; 「過ぎて」 plus 「いる」 is the split-up 「ている」 construction, so that connection is fixed; the adverb 「とっくに」 ("long ago / already") modifies 「過ぎている」 and must precede it, contrasting with the sentence-final 「まだ現れない」 — the order is unique.',
  },
  {
    kind: 'order',
    id: 'n3-grammar-narabekae-016',
    before: '台風の',
    after: '、会議に間に合わなかった。',
    segments: ['ため', '電車が', '止まって', 'しまい'],
    starIndex: 0,
    explanation:
      '完整句：「台風のため電車が止まってしまい、会議に間に合わなかった。」表原因的「〜ため」（由於…）前須接「名詞＋の」，故「ため」必須緊跟開頭的「台風の」；「電車が」是「止まって」的主語；「しまい」是「てしまう」的連用中止形，須緊接て形「止まって」，語序唯一。',
    explanationEn:
      'Complete sentence: 「台風のため電車が止まってしまい、会議に間に合わなかった。」 The causal 「〜ため」 ("because of...") must follow "noun + の", so 「ため」 comes directly after the opening 「台風の」; 「電車が」 is the subject of 「止まって」; 「しまい」 is the clause-linking stem of 「てしまう」 and must attach directly to the te-form 「止まって」, making the order unique.',
  },
  {
    kind: 'order',
    id: 'n3-grammar-narabekae-017',
    before: '彼女は十年も日本に住んでいたのだから、',
    after: 'と思っていたが、そうでもなかった。',
    segments: ['日本語が', '上手な', 'はず', 'だ'],
    starIndex: 2,
    explanation:
      '完整句：「彼女は十年も日本に住んでいたのだから、日本語が上手なはずだと思っていたが、そうでもなかった。」「〜はずだ」（照理應該…）表有根據的推測：な形容詞以連體形「上手な」接「はず」，再接「だ」與引用的「と」相連；「日本語が」是「上手な」的對象，只能放最前，語序唯一。',
    explanationEn:
      'Complete sentence: 「彼女は十年も日本に住んでいたのだから、日本語が上手なはずだと思っていたが、そうでもなかった。」 「〜はずだ」 ("should be...") expresses a grounded expectation: the na-adjective takes its attributive form 「上手な」 before 「はず」, which is followed by 「だ」 connecting to the quotative 「と」; 「日本語が」 is the object of 「上手な」 and can only go first, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n3-grammar-narabekae-018',
    before: '姉は、聞いた話が',
    after: '気が済まない性格だ。',
    segments: ['本当', 'かどうか', '確かめ', 'ないと'],
    starIndex: 1,
    explanation:
      '完整句：「姉は、聞いた話が本当かどうか確かめないと気が済まない性格だ。」「〜かどうか」（是否…）接在名詞「本当」後，構成「話が本当かどうか」的疑問子句，作「確かめる」的對象；「ないと」須接動詞連用形「確かめ」，再連句尾「気が済まない」（不…就不痛快），語序唯一。',
    explanationEn:
      'Complete sentence: 「姉は、聞いた話が本当かどうか確かめないと気が済まない性格だ。」 「〜かどうか」 ("whether or not") attaches after the noun 「本当」, building the embedded question 「話が本当かどうか」 as the object of 「確かめる」; 「ないと」 must attach to the verb stem 「確かめ」 and then connects to the sentence-final 「気が済まない」 ("won\'t feel satisfied unless..."), so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n3-grammar-narabekae-019',
    before: 'この会社に',
    after: 'まだよく分かっていない。',
    segments: ['入った', 'ばかりで', '仕事の', '流れが'],
    starIndex: 3,
    explanation:
      '完整句：「この会社に入ったばかりで、仕事の流れがまだよく分かっていない。」「〜たばかり」（才剛…）須接た形，故「ばかりで」緊跟「入った」；開頭助詞「に」後只能接動詞「入った」；「仕事の」的「の」須緊接名詞「流れ」，「流れが」再連句尾述語，四段順序唯一。',
    explanationEn:
      'Complete sentence: 「この会社に入ったばかりで、仕事の流れがまだよく分かっていない。」 「〜たばかり」 ("just recently did...") requires the ta-form, so 「ばかりで」 comes right after 「入った」; the opening particle 「に」 can only be followed by the verb 「入った」; the 「の」 of 「仕事の」 must be followed directly by the noun 「流れ」, and 「流れが」 then links to the sentence-final predicate — the four segments have a unique order.',
  },
  {
    kind: 'order',
    id: 'n3-grammar-narabekae-020',
    before: '子どものころ、母に毎日',
    after: 'のを覚えている。',
    segments: ['ピアノの', 'レッスンに', '通わ', 'せられた'],
    starIndex: 0,
    explanation:
      '完整句：「子どものころ、母に毎日ピアノのレッスンに通わせられたのを覚えている。」考使役受身「通わせられる」（被迫去…）：未然形「通わ」後必須緊接「せられた」；「ピアノの」的「の」後須接名詞「レッスン」，「レッスンに」再接移動動詞「通う」，接續環環相扣，語序唯一。',
    explanationEn:
      'Complete sentence: 「子どものころ、母に毎日ピアノのレッスンに通わせられたのを覚えている。」 This tests the causative-passive 「通わせられる」 ("was made to attend..."): the irrealis stem 「通わ」 must be followed directly by 「せられた」; the 「の」 of 「ピアノの」 must be followed by the noun 「レッスン」, and 「レッスンに」 then connects to the motion verb 「通う」 — each link constrains the next, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n3-grammar-narabekae-021',
    before: '弟は母に呼ばれたのに、',
    after: '返事をしなかった。',
    segments: ['聞こえない', 'ふり', 'を', 'して'],
    starIndex: 1,
    explanation:
      '完整句：「弟は母に呼ばれたのに、聞こえないふりをして返事をしなかった。」「〜ふりをする」（假裝…）前接連體形，故「ふり」緊跟「聞こえない」；「を」必須接在名詞「ふり」後，「して」又必須接在「を」後連接後句，四段接續環環相扣，語序唯一。',
    explanationEn:
      'Complete sentence: 「弟は母に呼ばれたのに、聞こえないふりをして返事をしなかった。」 「〜ふりをする」 ("pretend to...") takes the attributive form before it, so 「ふり」 comes right after 「聞こえない」; the particle 「を」 must follow the noun 「ふり」, and 「して」 must follow 「を」 to link to the rest — each connection constrains the next, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n3-grammar-narabekae-022',
    before: '妹は前から、',
    after: 'いる。',
    segments: ['デパートで', '見た', '赤いかばんを', 'ほしがって'],
    starIndex: 2,
    explanation:
      '完整句：「妹は前から、デパートで見た赤いかばんをほしがっている。」第三人稱的願望須用「〜がる」：「ほしがって」接句尾「いる」構成「ほしがっている」；「見た」是連體修飾，必須緊接名詞「赤いかばんを」；「デパートで」修飾「見た」，只能放最前，語序唯一。',
    explanationEn:
      'Complete sentence: 「妹は前から、デパートで見た赤いかばんをほしがっている。」 A third person\'s desire requires 「〜がる」: 「ほしがって」 joins the sentence-final 「いる」 to form 「ほしがっている」; 「見た」 is an attributive modifier that must directly precede the noun phrase 「赤いかばんを」; 「デパートで」 modifies 「見た」 and can only go first, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n3-grammar-narabekae-023',
    before: '説明書に',
    after: '本棚を組み立てた。',
    segments: ['書いて', 'ある', 'とおり', 'に'],
    starIndex: 0,
    explanation:
      '完整句：「説明書に書いてあるとおりに、本棚を組み立てた。」「〜とおりに」（照著…）前接連體形：「書いて」＋「ある」構成表狀態的「書いてある」，「とおり」只能接在「ある」後，「に」再接在「とおり」後修飾「組み立てた」，四段接續固定，語序唯一。',
    explanationEn:
      'Complete sentence: 「説明書に書いてあるとおりに、本棚を組み立てた。」 「〜とおりに」 ("just as / following...") takes the attributive form: 「書いて」 plus 「ある」 forms the stative 「書いてある」, 「とおり」 can only follow 「ある」, and 「に」 attaches after 「とおり」 to modify 「組み立てた」 — every link is fixed, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n3-grammar-narabekae-024',
    before: '犬の散歩の',
    after: '寄って、朝食のパンを買った。',
    segments: ['ついで', 'に', '駅前の', 'パン屋に'],
    starIndex: 0,
    explanation:
      '完整句：「犬の散歩のついでに、駅前のパン屋に寄って、朝食のパンを買った。」「名詞＋の＋ついでに」（順便…）：「ついで」必須緊跟開頭的「の」，「に」接在「ついで」後；「駅前の」的「の」後須接名詞「パン屋に」，再連句尾「寄って」，語序唯一。',
    explanationEn:
      'Complete sentence: 「犬の散歩のついでに、駅前のパン屋に寄って、朝食のパンを買った。」 In "noun + の + ついでに" ("while at it / on the occasion of..."), 「ついで」 must directly follow the opening 「の」, and 「に」 follows 「ついで」; the 「の」 of 「駅前の」 must be followed by the noun 「パン屋に」, which then connects to 「寄って」 — the order is unique.',
  },
  {
    kind: 'order',
    id: 'n3-grammar-narabekae-025',
    before: '駅前に大きな',
    after: '聞いて、楽しみにしている。',
    segments: ['図書館が', 'できる', 'という', '話を'],
    starIndex: 2,
    explanation:
      '完整句：「駅前に大きな図書館ができるという話を聞いて、楽しみにしている。」「（句子）＋という＋名詞」用來引導傳聞內容：「という」前面必須是完整子句「図書館ができる」，後面必須緊接名詞「話を」；開頭「大きな」只能修飾名詞「図書館」，語序唯一。',
    explanationEn:
      'Complete sentence: 「駅前に大きな図書館ができるという話を聞いて、楽しみにしている。」 "Clause + という + noun" introduces reported content: 「という」 must be preceded by the complete clause 「図書館ができる」 and directly followed by the noun 「話を」; the opening 「大きな」 can only modify the noun 「図書館」, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n3-grammar-narabekae-026',
    before: 'その犬は、',
    after: 'だった。',
    segments: ['まるで', '子牛の', 'ような', '大きさ'],
    starIndex: 1,
    explanation:
      '完整句：「その犬は、まるで子牛のような大きさだった。」比喻的「〜のような」（像…一樣的）：「ような」須接在「子牛の」後，且後面必須接名詞「大きさ」；副詞「まるで」與「〜ような」前後呼應，只能放在比喻對象「子牛の」之前，語序唯一。',
    explanationEn:
      'Complete sentence: 「その犬は、まるで子牛のような大きさだった。」 The simile 「〜のような」 ("like a..."): 「ような」 must follow 「子牛の」 and be followed by the noun 「大きさ」; the adverb 「まるで」 idiomatically pairs with 「〜ような」 and can only precede the compared item 「子牛の」, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n3-grammar-narabekae-027',
    before: 'こちらは、社長が',
    after: '本です。',
    segments: ['留学中に', 'お書き', 'になった', '思い出の'],
    starIndex: 2,
    explanation:
      '完整句：「こちらは、社長が留学中にお書きになった思い出の本です。」考尊敬語構文「お＋ます形＋になる」：「お書き」後必須緊接「になった」；「留学中に」修飾寫書的時點，須放在「お書き」前；「思い出の」的「の」後必須緊接名詞「本」，故固定在句尾，語序唯一。',
    explanationEn:
      'Complete sentence: 「こちらは、社長が留学中にお書きになった思い出の本です。」 This tests the honorific construction "お + masu-stem + になる": 「お書き」 must be followed directly by 「になった」; 「留学中に」 states when the book was written and must precede 「お書き」; the 「の」 of 「思い出の」 must directly precede the noun 「本」, locking it at the end — the order is unique.',
  },
  {
    kind: 'order',
    id: 'n3-grammar-narabekae-028',
    before: '明日、こちらから',
    after: 'いたします。',
    segments: ['会議で', '使う', '資料を', 'お送り'],
    starIndex: 3,
    explanation:
      '完整句：「明日、こちらから会議で使う資料をお送りいたします。」考謙讓語構文「お＋ます形＋いたす」：「お送り」必須緊接句尾「いたします」；「会議で」修飾「使う」，「使う」是連體修飾形、必須緊接名詞「資料を」；三段修飾語環環相扣，語序唯一。',
    explanationEn:
      'Complete sentence: 「明日、こちらから会議で使う資料をお送りいたします。」 This tests the humble construction "お + masu-stem + いたす": 「お送り」 must sit directly before the sentence-final 「いたします」; 「会議で」 modifies 「使う」, and 「使う」 is an attributive modifier that must directly precede the noun 「資料を」 — the order is unique.',
  },
  {
    kind: 'order',
    id: 'n3-grammar-narabekae-029',
    before: '余裕を持って',
    after: '、道が込んでいて、待ち合わせに少し遅れてしまった。',
    segments: ['家を', '出た', 'つもり', 'だったが'],
    starIndex: 2,
    explanation:
      '完整句：「余裕を持って家を出たつもりだったが、道が込んでいて、待ち合わせに少し遅れてしまった。」「〜たつもりだった」表「自以為做到了…（實際卻不然）」：「つもり」必須接在た形「出た」後，「だったが」再接在「つもり」後表逆接；「家を」是「出た」的受詞，只能放最前，語序唯一。',
    explanationEn:
      'Complete sentence: 「余裕を持って家を出たつもりだったが、道が込んでいて、待ち合わせに少し遅れてしまった。」 「〜たつもりだった」 means "I thought I had... (but actually had not)": 「つもり」 must follow the ta-form 「出た」, and 「だったが」 follows 「つもり」 as the contrastive link; 「家を」 is the object of 「出た」 and can only go first, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n3-grammar-narabekae-030',
    before: 'このはさみは、',
    after: '使うものです。',
    segments: ['厚い', '布を', '切る', 'のに'],
    starIndex: 3,
    explanation:
      '完整句：「このはさみは、厚い布を切るのに使うものです。」表用途的「〜のに使う」（用來…）：「のに」必須接在動詞辭書形「切る」後、再連句尾「使う」；「厚い」是い形容詞連體形，必須緊接名詞「布を」，「布を」是「切る」的受詞，四段語序唯一。',
    explanationEn:
      'Complete sentence: 「このはさみは、厚い布を切るのに使うものです。」 The purpose pattern 「〜のに使う」 ("used for..."): 「のに」 must follow the dictionary form 「切る」 and then connect to 「使う」 in the closing text; 「厚い」 is an attributive i-adjective that must directly precede the noun 「布を」, which is the object of 「切る」 — the four segments have a unique order.',
  },
  {
    kind: 'order',
    id: 'n3-grammar-narabekae-031',
    before: '一日中歩き回って、',
    after: '疲れてしまった。',
    segments: ['もう', '一歩も', '歩けない', 'くらい'],
    starIndex: 3,
    explanation:
      '完整句：「一日中歩き回って、もう一歩も歩けないくらい疲れてしまった。」表程度的「〜くらい」（到…的程度）前接連體形，「くらい」必須緊跟「歩けない」再連句尾「疲れて」；「一歩も」與否定「歩けない」呼應、須放其前；「もう」修飾整個「一歩も歩けない」，只能放最前，語序唯一。',
    explanationEn:
      'Complete sentence: 「一日中歩き回って、もう一歩も歩けないくらい疲れてしまった。」 The degree marker 「〜くらい」 ("to the point of...") takes the attributive form, so 「くらい」 must follow 「歩けない」 and connect to 「疲れて」; 「一歩も」 pairs with the negative 「歩けない」 and must precede it; 「もう」 modifies the whole phrase 「一歩も歩けない」 and can only go first — the order is unique.',
  },
  {
    kind: 'order',
    id: 'n3-grammar-narabekae-032',
    before: '一度',
    after: 'ことも多いのだ。',
    segments: ['失敗した', 'から', 'こそ', '分かる'],
    starIndex: 1,
    explanation:
      '完整句：「一度失敗したからこそ、分かることも多いのだ。」「〜からこそ」（正因為…才…）用來強調理由：「から」必須接在た形「失敗した」後，「こそ」再緊接「から」加強語氣；「分かる」是連體修飾，必須緊接句尾名詞「こと」，四段語序唯一。',
    explanationEn:
      'Complete sentence: 「一度失敗したからこそ、分かることも多いのだ。」 「〜からこそ」 ("precisely because...") emphasizes the reason: 「から」 must follow the ta-form 「失敗した」, and 「こそ」 attaches directly after 「から」 for emphasis; 「分かる」 is an attributive modifier that must directly precede the sentence-final noun 「こと」 — the four segments have a unique order.',
  },
  {
    kind: 'order',
    id: 'n3-grammar-narabekae-033',
    before: '同じ兄弟でも、',
    after: '、弟はとても静かだ。',
    segments: ['よく', 'しゃべる', '兄とは', '違って'],
    starIndex: 3,
    explanation:
      '完整句：「同じ兄弟でも、よくしゃべる兄とは違って、弟はとても静かだ。」「〜とは違って」（和…不同）：「違って」必須接在「兄とは」後；「しゃべる」是連體修飾，必須緊接名詞「兄」；副詞「よく」只能修飾動詞「しゃべる」、放在其前，四段接續環環相扣，語序唯一。',
    explanationEn:
      'Complete sentence: 「同じ兄弟でも、よくしゃべる兄とは違って、弟はとても静かだ。」 「〜とは違って」 ("unlike..."): 「違って」 must follow 「兄とは」; 「しゃべる」 is an attributive modifier that must directly precede the noun 「兄」; the adverb 「よく」 can only modify the verb 「しゃべる」 and must precede it — each link constrains the next, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n3-grammar-narabekae-034',
    before: '当日の朝、雨が',
    after: '、運動会は中止になります。',
    segments: ['降って', 'いた', '場合', 'は'],
    starIndex: 0,
    explanation:
      '完整句：「当日の朝、雨が降っていた場合は、運動会は中止になります。」「〜場合は」（…的情況下）前接連體形：「降って」＋「いた」構成「降っていた」，「場合」只能接在「いた」後，「は」再接在名詞「場合」後提示條件，四段接續固定，語序唯一。',
    explanationEn:
      'Complete sentence: 「当日の朝、雨が降っていた場合は、運動会は中止になります。」 「〜場合は」 ("in the case that...") takes the attributive form: 「降って」 plus 「いた」 forms 「降っていた」, 「場合」 can only follow 「いた」, and 「は」 attaches after the noun 「場合」 to mark the condition — every connection is fixed, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n3-grammar-narabekae-035',
    before: '田中社長は来月、',
    after: 'と聞いた。',
    segments: ['海外の', '支社の', '視察に', '行かれる'],
    starIndex: 3,
    explanation:
      '完整句：「田中社長は来月、海外の支社の視察に行かれると聞いた。」考尊敬語的「れる」（社長「行く」的動作用「行かれる」抬高）：「行かれる」接句尾引用的「と」；「海外の」的「の」須緊接名詞「支社」，「支社の」的「の」須緊接「視察」，「視察に」再接「行かれる」，語序唯一。',
    explanationEn:
      'Complete sentence: 「田中社長は来月、海外の支社の視察に行かれると聞いた。」 This tests the honorific 「れる」 (the president\'s going is elevated as 「行かれる」): 「行かれる」 connects to the quotative 「と」 at the end; the 「の」 of 「海外の」 must directly precede the noun 「支社」, the 「の」 of 「支社の」 must precede 「視察」, and 「視察に」 then connects to 「行かれる」 — the order is unique.',
  },
  {
    kind: 'order',
    id: 'n3-grammar-narabekae-036',
    before: '明日の会議が',
    after: 'ので、夜の予定が立てられない。',
    segments: ['何時に', '終わる', 'か', '分からない'],
    starIndex: 1,
    explanation:
      '完整句：「明日の会議が何時に終わるか分からないので、夜の予定が立てられない。」「疑問詞＋〜か」構成間接疑問句：「か」必須接在辭書形「終わる」後，「分からない」再接在「か」後作述語；「何時に」是疑問詞、修飾「終わる」，只能放最前，語序唯一。',
    explanationEn:
      'Complete sentence: 「明日の会議が何時に終わるか分からないので、夜の予定が立てられない。」 "Question word + clause + か" forms an embedded question: 「か」 must follow the dictionary form 「終わる」, and 「分からない」 follows 「か」 as the main predicate; the question word 「何時に」 modifies 「終わる」 and can only go first — the order is unique.',
  },
  {
    kind: 'order',
    id: 'n3-grammar-narabekae-037',
    before: '市の話では、新しい体育館は',
    after: '予定だそうだ。',
    segments: ['来年の', '春の', '連休前に', '完成する'],
    starIndex: 0,
    explanation:
      '完整句：「市の話では、新しい体育館は来年の春の連休前に完成する予定だそうだ。」「〜予定だ」（預計…）前接動詞辭書形，故「完成する」緊貼句尾「予定」；「来年の」的「の」須緊接名詞「春」，「春の」的「の」須緊接「連休」，兩個「の」把時間詞鎖成一串，語序唯一。',
    explanationEn:
      'Complete sentence: 「市の話では、新しい体育館は来年の春の連休前に完成する予定だそうだ。」 「〜予定だ」 ("is scheduled to...") takes the dictionary form, so 「完成する」 sits right before the closing 「予定」; the 「の」 of 「来年の」 must directly precede the noun 「春」, and the 「の」 of 「春の」 must precede 「連休」 — the chained 「の」 phrases lock the time expression, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n3-grammar-narabekae-038',
    before: '夕方になると、隣の家から',
    after: 'してくる。',
    segments: ['夕飯の', '魚を', '焼く', 'においが'],
    starIndex: 2,
    explanation:
      '完整句：「夕方になると、隣の家から夕飯の魚を焼くにおいがしてくる。」「〜においがする」（傳來…的氣味）：「においが」必須緊接句尾「してくる」；「焼く」是連體修飾，必須緊接名詞「におい」；「夕飯の」的「の」須緊接名詞「魚」，「魚を」是「焼く」的受詞，語序唯一。',
    explanationEn:
      'Complete sentence: 「夕方になると、隣の家から夕飯の魚を焼くにおいがしてくる。」 「〜においがする」 ("a smell of... drifts over"): 「においが」 must sit right before the closing 「してくる」; 「焼く」 is an attributive modifier that must directly precede the noun 「におい」; the 「の」 of 「夕飯の」 must precede the noun 「魚」, and 「魚を」 is the object of 「焼く」 — the order is unique.',
  },
  {
    kind: 'order',
    id: 'n3-grammar-narabekae-039',
    before: '今朝、会社へ',
    after: '気がついて、家に戻った。',
    segments: ['向かう', '途中', 'で', '忘れ物に'],
    starIndex: 1,
    explanation:
      '完整句：「今朝、会社へ向かう途中で忘れ物に気がついて、家に戻った。」「〜途中で」（在往…的半路上）前接動詞辭書形：「途中」必須緊接「向かう」，「で」接在名詞「途中」後；「忘れ物に」與句尾「気がつく」是固定搭配（助詞用「に」），只能放最後，語序唯一。',
    explanationEn:
      'Complete sentence: 「今朝、会社へ向かう途中で忘れ物に気がついて、家に戻った。」 「〜途中で」 ("on the way to...") takes the dictionary form: 「途中」 must directly follow 「向かう」, and 「で」 attaches after the noun 「途中」; 「忘れ物に」 pairs with the closing 「気がつく」 as a fixed collocation (with the particle 「に」) and can only come last — the order is unique.',
  },
  {
    kind: 'order',
    id: 'n3-grammar-narabekae-040',
    before: '答案を',
    after: '提出してください。',
    segments: ['書き', '終わった', '人から', '順に'],
    starIndex: 0,
    explanation:
      '完整句：「答案を書き終わった人から順に提出してください。」考複合動詞「〜終わる」（做完…）：連用形「書き」後必須緊接「終わった」；「終わった」是連體修飾，必須緊接名詞「人」；「人から順に」（從…的人依序）是固定語順，「順に」再連句尾「提出して」，語序唯一。',
    explanationEn:
      'Complete sentence: 「答案を書き終わった人から順に提出してください。」 This tests the compound verb 「〜終わる」 ("finish doing..."): the masu-stem 「書き」 must be followed directly by 「終わった」; 「終わった」 is an attributive modifier that must precede the noun 「人」; 「人から順に」 ("in order, starting from those who...") is a fixed sequence, and 「順に」 connects to the closing 「提出して」 — the order is unique.',
  },
]
