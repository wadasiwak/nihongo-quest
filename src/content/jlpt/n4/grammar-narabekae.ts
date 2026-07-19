import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    kind: 'order',
    id: 'n4-grammar-narabekae-001',
    before: 'まいにち れんしゅうして、',
    after: 'なりました。',
    segments: ['むずかしい', 'かんじが', 'よめる', 'ように'],
    starIndex: 0,
    explanation:
      '完整句：「まいにち れんしゅうして、むずかしい かんじが よめる ように なりました。」「〜ようになる」（變得能…）前接可能形，故「ように」必須緊跟「よめる」；「むずかしい」是い形容詞，只能修飾名詞「かんじ」，不能直接放在「ように」或動詞前，語序唯一。',
    explanationEn:
      'Complete sentence: 「まいにち れんしゅうして、むずかしい かんじが よめる ように なりました。」 「〜ようになる」 (come to be able to...) follows the potential form, so 「ように」 must come right after 「よめる」. 「むずかしい」 is an い-adjective that can only modify the noun 「かんじ」 — it can\'t sit directly before 「ように」 or the verb — so only one order works.',
  },
  {
    kind: 'order',
    id: 'n4-grammar-narabekae-002',
    before: 'あしたは えんそくなので、',
    after: 'おきます。',
    segments: ['子どもたちが', 'よろこぶ', 'おべんとうを', 'つくって'],
    starIndex: 1,
    explanation:
      '完整句：「あしたは えんそくなので、子どもたちが よろこぶ おべんとうを つくって おきます。」「〜ておく」（先做好準備）前須接て形，故「つくって」緊貼句尾「おきます」；「子どもたちが」是修飾「おべんとう」的子句主語，必須放在「よろこぶ」前。若讓「よろこぶ」直接開頭修飾便當，變成「便當會高興」，語意不通。',
    explanationEn:
      'Complete sentence: 「あしたは えんそくなので、子どもたちが よろこぶ おべんとうを つくって おきます。」 「〜ておく」 (do in advance as preparation) requires the て form, so 「つくって」 goes right before the final 「おきます」. 「子どもたちが」 is the subject of the clause modifying 「おべんとう」 and must come before 「よろこぶ」; if 「よろこぶ」 alone modified the lunch box, it would mean "a lunch box that is happy," which makes no sense.',
  },
  {
    kind: 'order',
    id: 'n4-grammar-narabekae-003',
    before: 'あさねぼうを して、',
    after: 'しまいました。',
    segments: ['いちばん', 'たいせつな', 'じゅぎょうに', 'ちこくして'],
    starIndex: 2,
    explanation:
      '完整句：「あさねぼうを して、いちばん たいせつな じゅぎょうに ちこくして しまいました。」「〜てしまう」（表懊悔）前接て形「ちこくして」；「いちばん」只能修飾形容詞「たいせつな」，「たいせつな」是連體形、後面必須接名詞「じゅぎょう」；若把「いちばん」放到動詞前則文法不通，語序唯一。',
    explanationEn:
      'Complete sentence: 「あさねぼうを して、いちばん たいせつな じゅぎょうに ちこくして しまいました。」 「〜てしまう」 (expressing regret) follows the て form 「ちこくして」. 「いちばん」 can only modify the adjective 「たいせつな」, and 「たいせつな」 is a prenominal form that must be followed by the noun 「じゅぎょう」. Placing 「いちばん」 before the verb would be ungrammatical, so only one order works.',
  },
  {
    kind: 'order',
    id: 'n4-grammar-narabekae-004',
    before: 'わからない ことばの いみを',
    after: 'もらいました。',
    segments: ['となりに', 'すわって いる', '人に', 'おしえて'],
    starIndex: 3,
    explanation:
      '完整句：「わからない ことばの いみを となりに すわって いる 人に おしえて もらいました。」「〜てもらう」（請人為我…）前接て形「おしえて」；「となりに」表位置、只能接「すわって いる」，這個子句再修飾「人」，「人に」標示動作者。若把「人に」移到「すわって いる」前，子句就沒有可修飾的名詞，語序唯一。',
    explanationEn:
      'Complete sentence: 「わからない ことばの いみを となりに すわって いる 人に おしえて もらいました。」 「〜てもらう」 (have someone do something for me) follows the て form 「おしえて」. 「となりに」 marks a location and can only connect to 「すわって いる」; that clause then modifies 「人」, and 「人に」 marks the person who does the favor. If 「人に」 moved before 「すわって いる」, the clause would have no noun to modify, so only one order works.',
  },
  {
    kind: 'order',
    id: 'n4-grammar-narabekae-005',
    before: 'たんじょうびに、あねが',
    after: 'くれました。',
    segments: ['ずっと', 'ほしかった', 'ゲームを', 'かって'],
    starIndex: 0,
    explanation:
      '完整句：「たんじょうびに、あねが ずっと ほしかった ゲームを かって くれました。」「〜てくれる」（別人為我…）前接て形「かって」，緊貼句尾；「ずっと ほしかった」（一直想要的）修飾「ゲーム」。若把「ずっと」移到「かって」前變成「一直買」，與生日單次送禮的語境矛盾，語序唯一。',
    explanationEn:
      'Complete sentence: 「たんじょうびに、あねが ずっと ほしかった ゲームを かって くれました。」 「〜てくれる」 (someone does something for me) follows the て form 「かって」, which sits right before the ending. 「ずっと ほしかった」 (had wanted for a long time) modifies 「ゲーム」. Moving 「ずっと」 before 「かって」 would mean "kept on buying," which contradicts a one-time birthday present, so only one order works.',
  },
  {
    kind: 'order',
    id: 'n4-grammar-narabekae-006',
    before: 'じゅぎょう中に ねて いて、先生に',
    after: 'しまいました。',
    segments: ['クラスの', 'みんなの', '前で', 'しかられて'],
    starIndex: 1,
    explanation:
      '完整句：「じゅぎょう中に ねて いて、先生に クラスの みんなの 前で しかられて しまいました。」考受身「しかられる」（被罵）：「クラスの みんな」（班上大家）是固定說法，「みんなの」的「の」後接名詞「前」，「前で」表場所、修飾「しかられて」。若排成「みんなの クラスの 前で」意思變成「大家的班級前面」，不自然。',
    explanationEn:
      'Complete sentence: 「じゅぎょう中に ねて いて、先生に クラスの みんなの 前で しかられて しまいました。」 This tests the passive 「しかられる」 (get scolded). 「クラスの みんな」 (everyone in the class) is a set phrase; the 「の」 of 「みんなの」 must be followed by the noun 「前」, and 「前で」 marks the place, modifying 「しかられて」. The order 「みんなの クラスの 前で」 would mean "in front of everyone\'s class," which sounds unnatural.',
  },
  {
    kind: 'order',
    id: 'n4-grammar-narabekae-007',
    before: '母は まいあさ、おとうとに',
    after: 'います。',
    segments: ['コップ', 'いっぱいの', 'ぎゅうにゅうを', 'のませて'],
    starIndex: 2,
    explanation:
      '完整句：「母は まいあさ、おとうとに コップ いっぱいの ぎゅうにゅうを のませて います。」考使役「のませる」（讓…喝）：句尾「います」前須接て形「のませて」；「コップいっぱいの〜」（滿滿一杯的…）是固定組合，「コップ」是單獨名詞、只能與「いっぱいの」相連再接「ぎゅうにゅう」，語序唯一。',
    explanationEn:
      'Complete sentence: 「母は まいあさ、おとうとに コップ いっぱいの ぎゅうにゅうを のませて います。」 This tests the causative 「のませる」 (make someone drink). The final 「います」 requires the て form 「のませて」 right before it. 「コップいっぱいの〜」 (a full glass of...) is a set combination: the bare noun 「コップ」 can only join with 「いっぱいの」, which then connects to 「ぎゅうにゅう」, so only one order works.',
  },
  {
    kind: 'order',
    id: 'n4-grammar-narabekae-008',
    before: 'らいねん、',
    after: 'べんきょうを はじめました。',
    segments: ['日本へ', 'りゅうがくしよう', 'と 思って', '日本語の'],
    starIndex: 3,
    explanation:
      '完整句：「らいねん、日本へ りゅうがくしよう と 思って、日本語の べんきょうを はじめました。」「〜ようと思う」（打算…）：意向形「りゅうがくしよう」後必須緊接「と 思って」，中間不能插入其他成分；「日本へ」表方向、須放在移動性的「りゅうがくする」前；「日本語の」的「の」後必須接名詞，只能緊貼句尾的「べんきょう」，語序唯一。',
    explanationEn:
      'Complete sentence: 「らいねん、日本へ りゅうがくしよう と 思って、日本語の べんきょうを はじめました。」 In 「〜ようと思う」 (plan to...), the volitional 「りゅうがくしよう」 must be followed immediately by 「と 思って」, with nothing in between. 「日本へ」 marks the destination and goes before the movement verb 「りゅうがくする」; the 「の」 of 「日本語の」 must be followed by a noun, so it can only sit right before 「べんきょう」 at the end — only one order works.',
  },
  {
    kind: 'order',
    id: 'n4-grammar-narabekae-009',
    before: 'ふじさんに',
    after: 'クラスで わたしだけでした。',
    segments: ['のぼった', 'ことが', 'ある', '人は'],
    starIndex: 0,
    explanation:
      '完整句：「ふじさんに のぼった ことが ある 人は、クラスで わたしだけでした。」「〜たことがある」（曾經…過）是固定句型：た形「のぼった」＋「ことが」＋「ある」順序不可調換；「ある」的連體形再修飾「人」作主題。開頭的「に」後只能接動詞「のぼった」，若把「人は」插進句型中間則文法錯誤，語序唯一。',
    explanationEn:
      'Complete sentence: 「ふじさんに のぼった ことが ある 人は、クラスで わたしだけでした。」 「〜たことがある」 (have done... before) is a fixed pattern: the た form 「のぼった」 + 「ことが」 + 「ある」 in that exact order. The clause ending in 「ある」 then modifies 「人」, the topic. The opening 「に」 can only be followed by the verb 「のぼった」, and inserting 「人は」 into the middle of the pattern would be ungrammatical, so only one order works.',
  },
  {
    kind: 'order',
    id: 'n4-grammar-narabekae-010',
    before: 'あしたは、あさ 六時の',
    after: 'はやく ねます。',
    segments: ['電車に', 'のらなければ', 'ならない', 'ので'],
    starIndex: 1,
    explanation:
      '完整句：「あしたは、あさ 六時の 電車に のらなければ ならない ので、はやく ねます。」「〜なければならない」（必須…）是固定組合，「のらなければ」後只能接「ならない」；「ので」表原因、接在常體「ならない」後帶出結果；開頭「六時の」的「の」後必須接名詞「電車」，語序唯一。',
    explanationEn:
      'Complete sentence: 「あしたは、あさ 六時の 電車に のらなければ ならない ので、はやく ねます。」 「〜なければならない」 (must do...) is a fixed combination, so 「のらなければ」 can only be followed by 「ならない」. 「ので」 gives the reason, attaching to the plain form 「ならない」 to lead into the result; the 「の」 of the opening 「六時の」 must be followed by the noun 「電車」, so only one order works.',
  },
  {
    kind: 'order',
    id: 'n4-grammar-narabekae-011',
    before: 'あの みせの ケーキは、',
    after: 'つい ぜんぶ かって しまいました。',
    segments: ['どれも', 'おいし', 'そうだった', 'ので'],
    starIndex: 2,
    explanation:
      '完整句：「あの みせの ケーキは、どれも おいし そうだった ので、つい ぜんぶ かって しまいました。」樣態「〜そうだ」（看起來…）接い形容詞語幹，故「おいし」後必須是「そうだった」，不能用辭書形直接相接；「ので」接在「そうだった」後表原因；「どれも」（每一個都）須放在述語前。若把「どれも」移到後半句，與「ぜんぶ」重複，語意不通。',
    explanationEn:
      'Complete sentence: 「あの みせの ケーキは、どれも おいし そうだった ので、つい ぜんぶ かって しまいました。」 The appearance 「〜そうだ」 (looks...) attaches to the い-adjective stem, so 「おいし」 must be followed by 「そうだった」 — the full dictionary form cannot connect directly. 「ので」 follows 「そうだった」 to give the reason, and 「どれも」 (every one of them) goes before the predicate; moving 「どれも」 to the second half would overlap with 「ぜんぶ」 and make no sense.',
  },
  {
    kind: 'order',
    id: 'n4-grammar-narabekae-012',
    before: 'そらが くらく なって きたので、',
    after: 'しれません。',
    segments: ['雨が', 'ふり', 'はじめる', 'かも'],
    starIndex: 3,
    explanation:
      '完整句：「そらが くらく なって きたので、雨が ふり はじめる かも しれません。」「〜かもしれない」（說不定…）接在常體後，「かも」必須緊貼句尾「しれません」；「〜はじめる」（開始…）接動詞連用形，故「ふり」後只能接「はじめる」；「雨が」是「ふる」的主語、放最前。若把「かも」移到句中則句子不成立，語序唯一。',
    explanationEn:
      'Complete sentence: 「そらが くらく なって きたので、雨が ふり はじめる かも しれません。」 「〜かもしれない」 (might...) follows the plain form, and 「かも」 must sit right before the final 「しれません」. 「〜はじめる」 (begin to...) attaches to the verb stem, so 「ふり」 can only be followed by 「はじめる」; 「雨が」 is the subject of the raining and goes first. Placing 「かも」 in the middle would break the sentence, so only one order works.',
  },
  {
    kind: 'order',
    id: 'n4-grammar-narabekae-013',
    before: 'そつぎょうしたら、くにへ',
    after: 'てつだう つもりです。',
    segments: ['かえって', 'ちちの', 'みせの', 'しごとを'],
    starIndex: 0,
    explanation:
      '完整句：「そつぎょうしたら、くにへ かえって、ちちの みせの しごとを てつだう つもりです。」「〜たら」（…之後）帶出後續打算：開頭「くにへ」後必須接移動動詞「かえって」；「ちちの」的「の」後接名詞「みせ」，「みせの」再接「しごと」，「を」的動詞是句尾的「てつだう」。若排成「みせの ちちの」變成「店的爸爸」，語意不通。',
    explanationEn:
      'Complete sentence: 「そつぎょうしたら、くにへ かえって、ちちの みせの しごとを てつだう つもりです。」 「〜たら」 (after...) leads into the plan that follows: the opening 「くにへ」 must be followed by the movement verb 「かえって」. The 「の」 of 「ちちの」 connects to the noun 「みせ」, then 「みせの」 to 「しごと」, and the verb taking 「を」 is the final 「てつだう」. The order 「みせの ちちの」 would mean "the shop\'s father," which makes no sense.',
  },
  {
    kind: 'order',
    id: 'n4-grammar-narabekae-014',
    before: 'この じしょは、じが 大きくて',
    after: 'おとしよりに にんきが あります。',
    segments: ['よみ', 'やすい', 'ので', 'まちの'],
    starIndex: 1,
    explanation:
      '完整句：「この じしょは、じが 大きくて よみ やすい ので、まちの おとしよりに にんきが あります。」「〜やすい」（容易…）接動詞連用形，故「よみ」後必須緊接「やすい」；「ので」接在「やすい」後表原因；「まちの」的「の」後必須接名詞，只能緊貼後句的「おとしより」。若把「よみ」和「やすい」拆開則文法錯誤，語序唯一。',
    explanationEn:
      'Complete sentence: 「この じしょは、じが 大きくて よみ やすい ので、まちの おとしよりに にんきが あります。」 「〜やすい」 (easy to...) attaches to the verb stem, so 「よみ」 must be immediately followed by 「やすい」. 「ので」 attaches after 「やすい」 to give the reason, and the 「の」 of 「まちの」 must be followed by a noun, so it sits right before 「おとしより」 in the next part. Splitting 「よみ」 and 「やすい」 would be ungrammatical, so only one order works.',
  },
  {
    kind: 'order',
    id: 'n4-grammar-narabekae-015',
    before: 'やすみの 日は、うちで 本を',
    after: 'ゆっくり すごして います。',
    segments: ['よんだり', 'おんがくを', 'きいたり', 'して'],
    starIndex: 2,
    explanation:
      '完整句：「やすみの 日は、うちで 本を よんだり おんがくを きいたり して、ゆっくり すごして います。」「〜たり〜たりする」（又…又…）：開頭「本を」後只能接「よんだり」，「おんがくを」後只能接「きいたり」，最後必須以「して」收尾連接後句。若把「して」插到兩個「たり」中間，句型不完整，語序唯一。',
    explanationEn:
      'Complete sentence: 「やすみの 日は、うちで 本を よんだり おんがくを きいたり して、ゆっくり すごして います。」 In 「〜たり〜たりする」 (doing things like... and...), the opening 「本を」 can only be followed by 「よんだり」, and 「おんがくを」 only by 「きいたり」; the pattern must close with 「して」 to link to the rest of the sentence. Inserting 「して」 between the two 「たり」 phrases would leave the pattern incomplete, so only one order works.',
  },
  {
    kind: 'order',
    id: 'n4-grammar-narabekae-016',
    before: 'ねつが ある ときは、',
    after: 'と 思います。',
    segments: ['おふろに', '入らない', 'ほうが', 'いい'],
    starIndex: 3,
    explanation:
      '完整句：「ねつが ある ときは、おふろに 入らない ほうが いい と 思います。」「〜ないほうがいい」（最好不要…）是固定句型：ない形「入らない」＋「ほうが」＋「いい」順序不可調換，句尾「いい」再接引用的「と」連到「思います」；「おふろに」是「入る」的補語、必須放在「入らない」前，語序唯一。',
    explanationEn:
      'Complete sentence: 「ねつが ある ときは、おふろに 入らない ほうが いい と 思います。」 「〜ないほうがいい」 (it\'s better not to...) is a fixed pattern: the ない form 「入らない」 + 「ほうが」 + 「いい」 in that exact order, with 「いい」 then linking to 「思います」 through the quotative 「と」. 「おふろに」 is the complement of 「入る」 and must come before 「入らない」, so only one order works.',
  },
  {
    kind: 'order',
    id: 'n4-grammar-narabekae-017',
    before: 'りゅうがくせいの リンさんに、',
    after: 'しました。',
    segments: ['まちを', 'あんないして', 'あげる', 'やくそくを'],
    starIndex: 0,
    explanation:
      '完整句：「りゅうがくせいの リンさんに、まちを あんないして あげる やくそくを しました。」「〜てあげる」（為別人做…）前接て形「あんないして」；「まちを」是「あんないする」的受詞、須放最前；「あげる」的連體形修飾名詞「やくそく」，「やくそくを」再接句尾「しました」。若兩個「を」接到同一個動詞上則文法錯誤，語序唯一。',
    explanationEn:
      'Complete sentence: 「りゅうがくせいの リンさんに、まちを あんないして あげる やくそくを しました。」 「〜てあげる」 (do something for someone) follows the て form 「あんないして」. 「まちを」 is the object of 「あんないする」 and goes first; the prenominal 「あげる」 modifies the noun 「やくそく」, and 「やくそくを」 then connects to the final 「しました」. Attaching both 「を」 phrases to the same verb would be ungrammatical, so only one order works.',
  },
  {
    kind: 'order',
    id: 'n4-grammar-narabekae-018',
    before: 'この ボタンを',
    after: 'から、やって みて ください。',
    segments: ['おせば', 'きっぷが', '出て', 'きます'],
    starIndex: 1,
    explanation:
      '完整句：「この ボタンを おせば、きっぷが 出て きますから、やって みて ください。」「〜ば」（一…就…）表條件：開頭「ボタンを」後必須接ば形「おせば」；「出て」＋「きます」是「〜てくる」的固定接續，中間不能插入其他成分；「きっぷが」是「出てくる」的主語、放在其前，語序唯一。',
    explanationEn:
      'Complete sentence: 「この ボタンを おせば、きっぷが 出て きますから、やって みて ください。」 The conditional 「〜ば」 (if/once you...) means the opening 「ボタンを」 must be followed by the ば form 「おせば」. 「出て」 + 「きます」 is the fixed 「〜てくる」 connection, with nothing allowed in between; 「きっぷが」 is the subject of 「出てくる」 and goes right before it, so only one order works.',
  },
  {
    kind: 'order',
    id: 'n4-grammar-narabekae-019',
    before: 'てんきよほうに よると、ごごから',
    after: 'うんてんに 気を つけて ください。',
    segments: ['風が', 'つよく', 'なる', 'そうですから'],
    starIndex: 2,
    explanation:
      '完整句：「てんきよほうに よると、ごごから 風が つよく なる そうですから、うんてんに 気を つけて ください。」傳聞「〜そうだ」（聽說…）接常體、與開頭「によると」呼應，故「そうですから」緊接辭書形「なる」後；「〜くなる」（變得…）：連用形「つよく」只能放在「なる」前；「風が」是主語、須放最前，語序唯一。',
    explanationEn:
      'Complete sentence: 「てんきよほうに よると、ごごから 風が つよく なる そうですから、うんてんに 気を つけて ください。」 The hearsay 「〜そうだ」 (I hear that...) follows the plain form and pairs with the opening 「によると」, so 「そうですから」 comes right after the dictionary form 「なる」. In 「〜くなる」 (become...), the adverbial 「つよく」 can only go before 「なる」, and the subject 「風が」 goes first, so only one order works.',
  },
  {
    kind: 'order',
    id: 'n4-grammar-narabekae-020',
    before: 'ゆうべ、',
    after: 'おなかが いたく なりました。',
    segments: ['あまい', 'おかしを', '食べ', 'すぎて'],
    starIndex: 3,
    explanation:
      '完整句：「ゆうべ、あまい おかしを 食べ すぎて、おなかが いたく なりました。」「〜すぎる」（…過頭）接動詞連用形，故「食べ」後必須緊接「すぎて」，不能用て形「食べて」相接；「あまい」是い形容詞、只能修飾名詞「おかし」；「おかしを」的受詞對象是「食べ」。若把「すぎて」和「食べ」拆開則文法錯誤，語序唯一。',
    explanationEn:
      'Complete sentence: 「ゆうべ、あまい おかしを 食べ すぎて、おなかが いたく なりました。」 「〜すぎる」 (do to excess) attaches to the verb stem, so 「食べ」 must be immediately followed by 「すぎて」 — the て form 「食べて」 cannot connect here. 「あまい」 is an い-adjective and can only modify the noun 「おかし」, and 「おかしを」 is the object of 「食べ」. Separating 「食べ」 and 「すぎて」 would be ungrammatical, so only one order works.',
  },
  {
    kind: 'order',
    id: 'n4-grammar-narabekae-021',
    before: 'テーブルの 上に、あしたの',
    after: 'あります。',
    segments: ['パーティーで', 'つかう', 'おさらが', 'ならべて'],
    starIndex: 2,
    explanation:
      '完整句：「テーブルの 上に、あしたの パーティーで つかう おさらが ならべて あります。」「〜てあります」（他動詞て形＋ある）表示預先做好的結果狀態，「ならべて」必須緊貼句尾「あります」；「あしたの」的「の」後接名詞「パーティー」，「パーティーで つかう」這個子句再修飾「おさら」。若把「おさらが」移到「つかう」前，子句就失去可修飾的名詞，語序唯一。',
    explanationEn:
      'Complete sentence: 「テーブルの 上に、あしたの パーティーで つかう おさらが ならべて あります。」 「〜てあります」 (transitive て form + ある) describes a prepared state, so 「ならべて」 must sit right before the final 「あります」. The 「の」 of 「あしたの」 connects to the noun 「パーティー」, and the clause 「パーティーで つかう」 modifies 「おさら」. Moving 「おさらが」 before 「つかう」 would leave the clause with no noun to modify, so only one order works.',
  },
  {
    kind: 'order',
    id: 'n4-grammar-narabekae-022',
    before: 'これは、そぼが',
    after: 'セーターです。',
    segments: ['わたしの', 'ために', 'あんで', 'くれた'],
    starIndex: 1,
    explanation:
      '完整句：「これは、そぼが わたしの ために あんで くれた セーターです。」「〜てくれる」表示別人為我做事，「あんで」後必須接「くれた」，「くれた」的連體形再修飾句尾的名詞「セーター」；「わたしの」的「の」後只能接形式名詞「ため」。若讓「わたしの」直接跳去接「セーター」，中間的「ために」就失去依附對象，語序唯一。',
    explanationEn:
      'Complete sentence: 「これは、そぼが わたしの ために あんで くれた セーターです。」 「〜てくれる」 marks something done for the speaker: 「あんで」 must be followed by 「くれた」, whose prenominal form then modifies the noun 「セーター」. The 「の」 of 「わたしの」 can only connect to 「ため」; if 「わたしの」 jumped to 「セーター」 instead, 「ために」 would have nothing to attach to, so only one order works.',
  },
  {
    kind: 'order',
    id: 'n4-grammar-narabekae-023',
    before: 'デザインが よくても、',
    after: 'おもいます。',
    segments: ['かかとが', 'たかい', 'くつは', 'あるきにくいと'],
    starIndex: 3,
    explanation:
      '完整句：「デザインが よくても、かかとが たかい くつは あるきにくいと おもいます。」「〜にくい」（難以…）接動詞連用形，「あるきにくいと」的「と」是引用助詞、必須緊貼句尾「おもいます」；「かかとが たかい」是修飾「くつ」的子句，要放在「くつは」前。若排成「くつは かかとが たかい あるきにくいと」，兩個述語相撞、文法不通，語序唯一。',
    explanationEn:
      'Complete sentence: 「デザインが よくても、かかとが たかい くつは あるきにくいと おもいます。」 「〜にくい」 (hard to do) attaches to the verb stem, and the quotative 「と」 of 「あるきにくいと」 must sit right before the final 「おもいます」. The clause 「かかとが たかい」 modifies 「くつ」 and precedes 「くつは」. The order 「くつは かかとが たかい あるきにくいと」 would pile two predicates together ungrammatically, so only one order works.',
  },
  {
    kind: 'order',
    id: 'n4-grammar-narabekae-024',
    before: 'ちずを',
    after: 'しまいました。',
    segments: ['もって いた', 'のに', 'みちに', 'まよって'],
    starIndex: 0,
    explanation:
      '完整句：「ちずを もって いた のに、みちに まよって しまいました。」「〜のに」表示逆接（明明…卻…），必須接在常體「もって いた」後；「まよって」和句尾「しまいました」組成表懊悔的「〜てしまう」，中間不能插入其他成分；「みちに」是「まよう」的補語，只能放在「まよって」前，語序唯一。',
    explanationEn:
      'Complete sentence: 「ちずを もって いた のに、みちに まよって しまいました。」 The contrastive 「〜のに」 (even though) must follow the plain form 「もって いた」; 「まよって」 pairs with the final 「しまいました」 to form the regretful 「〜てしまう」, with nothing allowed in between. 「みちに」 is the complement of 「まよう」 and can only go right before 「まよって」, so only one order works.',
  },
  {
    kind: 'order',
    id: 'n4-grammar-narabekae-025',
    before: 'デパートで、',
    after: 'みました。',
    segments: ['みせの 人に', 'すすめられた', 'ぼうしを', 'かぶって'],
    starIndex: 1,
    explanation:
      '完整句：「デパートで、みせの 人に すすめられた ぼうしを かぶって みました。」「〜てみる」（做做看）前接て形，「かぶって」必須緊貼句尾「みました」；「みせの 人に」標示受身「すすめられた」的動作者、必須放在其前，「すすめられた」的連體形再修飾「ぼうし」。若把「ぼうしを」移到「すすめられた」前，子句便失去修飾對象，語序唯一。',
    explanationEn:
      'Complete sentence: 「デパートで、みせの 人に すすめられた ぼうしを かぶって みました。」 「〜てみる」 (try doing) follows the て form, so 「かぶって」 sits right before the final 「みました」. 「みせの 人に」 marks the agent of the passive 「すすめられた」 and must precede it, and 「すすめられた」 then modifies 「ぼうし」. Moving 「ぼうしを」 before 「すすめられた」 would leave the clause nothing to modify, so only one order works.',
  },
  {
    kind: 'order',
    id: 'n4-grammar-narabekae-026',
    before: 'きのう、でんしゃの なかで となりの 人に',
    after: 'です。',
    segments: ['あしを', 'ふまれて', 'とても', 'いたかった'],
    starIndex: 3,
    explanation:
      '完整句：「きのう、でんしゃの なかで となりの 人に あしを ふまれて、とても いたかったです。」考受身「ふまれる」（被踩）：動作者「となりの 人に」已在前段給出，被踩的部位「あしを」必須放在「ふまれて」前；「とても」是程度副詞、只能修飾形容詞「いたかった」，不能修飾動詞「ふまれて」，位置唯一，語序唯一。',
    explanationEn:
      'Complete sentence: 「きのう、でんしゃの なかで となりの 人に あしを ふまれて、とても いたかったです。」 This tests the passive 「ふまれる」 (get stepped on): the agent 「となりの 人に」 is given before the blank, and 「あしを」, the body part, must precede 「ふまれて」. The degree adverb 「とても」 can only modify the adjective 「いたかった」, not the verb 「ふまれて」, so its position is fixed and only one order works.',
  },
  {
    kind: 'order',
    id: 'n4-grammar-narabekae-027',
    before: 'この アパートは、やちんも やすいし、',
    after: 'すぐに けいやくしました。',
    segments: ['えきにも', 'ちかいし', 'へやも', 'ひろいので'],
    starIndex: 2,
    explanation:
      '完整句：「この アパートは、やちんも やすいし、えきにも ちかいし、へやも ひろいので、すぐに けいやくしました。」「〜し、〜し」並列理由：「えきにも」只能接「ちかいし」、「へやも」只能接「ひろいので」；表原因的「ので」必須放在最後一個理由上、帶出後句「けいやくしました」。若把「ひろいので」移到句中，後面的「ちかいし」就懸空接不上結果，語序唯一。',
    explanationEn:
      'Complete sentence: 「この アパートは、やちんも やすいし、えきにも ちかいし、へやも ひろいので、すぐに けいやくしました。」 「〜し、〜し」 lists reasons: 「えきにも」 can only pair with 「ちかいし」, and 「へやも」 with 「ひろいので」. The causal 「ので」 must sit on the last reason to lead into 「けいやくしました」; moving 「ひろいので」 earlier would leave 「ちかいし」 dangling before the result, so only one order works.',
  },
  {
    kind: 'order',
    id: 'n4-grammar-narabekae-028',
    before: 'りょこうの 前に、',
    after: 'ので、あんしんです。',
    segments: ['えきから ちかい', 'ホテルを', 'よやくして', 'おいた'],
    starIndex: 0,
    explanation:
      '完整句：「りょこうの 前に、えきから ちかい ホテルを よやくして おいたので、あんしんです。」「〜ておく」（預先做好準備）前接て形，「よやくして」後必須接「おいた」，「おいた」再接表原因的「ので」連到後句；「えきから ちかい」是修飾「ホテル」的子句、必須放在「ホテルを」前。若把「ホテルを」移到子句前，「ちかい」便失去修飾對象，語序唯一。',
    explanationEn:
      'Complete sentence: 「りょこうの 前に、えきから ちかい ホテルを よやくして おいたので、あんしんです。」 「〜ておく」 (do in advance) follows the て form, so 「よやくして」 must be followed by 「おいた」, which then takes the causal 「ので」. The clause 「えきから ちかい」 modifies 「ホテル」 and must come before 「ホテルを」; moving 「ホテルを」 in front would leave 「ちかい」 nothing to modify, so only one order works.',
  },
  {
    kind: 'order',
    id: 'n4-grammar-narabekae-029',
    before: 'らいげつから、あさ はやく おきて、',
    after: 'います。',
    segments: ['いえの ちかくの', 'こうえんを', 'はしろう', 'と おもって'],
    starIndex: 3,
    explanation:
      '完整句：「らいげつから、あさ はやく おきて、いえの ちかくの こうえんを はしろうと おもって います。」「〜（よ）うと思っています」表示打算：意向形「はしろう」後必須緊接「と おもって」，中間不能插入其他成分；「いえの ちかくの」的「の」後接名詞「こうえん」，「こうえんを」是「はしる」的受詞、放在「はしろう」前，語序唯一。',
    explanationEn:
      'Complete sentence: 「らいげつから、あさ はやく おきて、いえの ちかくの こうえんを はしろうと おもって います。」 In 「〜（よ）うと思っています」 (planning to), the volitional 「はしろう」 must be immediately followed by 「と おもって」, with nothing in between. The 「の」 of 「いえの ちかくの」 connects to the noun 「こうえん」, and 「こうえんを」, the object, goes before 「はしろう」 — only one order works.',
  },
  {
    kind: 'order',
    id: 'n4-grammar-narabekae-030',
    before: 'かいだんで ころんで、',
    after: 'しまいました。',
    segments: ['ちちに かって', 'もらった', 'めがねを', 'こわして'],
    starIndex: 3,
    explanation:
      '完整句：「かいだんで ころんで、ちちに かって もらった めがねを こわして しまいました。」「〜てもらう」（請人為我…）：「ちちに かって」後必須接「もらった」，其連體形再修飾「めがね」；「めがねを」是「こわす」的受詞，「こわして」和句尾「しまいました」組成表懊悔的「〜てしまう」。若把「こわして」移到「もらった」前，兩個動詞的對象就亂掉，語序唯一。',
    explanationEn:
      'Complete sentence: 「かいだんで ころんで、ちちに かって もらった めがねを こわして しまいました。」 In 「〜てもらう」 (have someone do something for me), 「ちちに かって」 must be followed by 「もらった」, whose prenominal form modifies 「めがね」. 「めがねを」 is the object of 「こわす」, and 「こわして」 pairs with the final 「しまいました」 to express regret. Swapping 「こわして」 before 「もらった」 would scramble both verbs\' roles, so only one order works.',
  },
  {
    kind: 'order',
    id: 'n4-grammar-narabekae-031',
    before: 'あした あめが',
    after: 'なります。',
    segments: ['ふれば', 'サッカーの', 'しあいは', 'ちゅうしに'],
    starIndex: 0,
    explanation:
      '完整句：「あした あめが ふれば、サッカーの しあいは ちゅうしに なります。」考假定形「〜ば」：開頭的主語「あめが」後必須接ば形「ふれば」；「サッカーの」的「の」後接名詞「しあい」；「ちゅうしに」和句尾「なります」組成「〜になる」（變成…），中間不能插入其他成分。若把「しあいは」放到「サッカーの」前，「の」便無名詞可接，語序唯一。',
    explanationEn:
      'Complete sentence: 「あした あめが ふれば、サッカーの しあいは ちゅうしに なります。」 This tests the conditional 「〜ば」: the opening subject 「あめが」 must be followed by the ば form 「ふれば」. The 「の」 of 「サッカーの」 connects to the noun 「しあい」, and 「ちゅうしに」 pairs with the final 「なります」 in the pattern 「〜になる」 (become), with nothing allowed in between — only one order works.',
  },
  {
    kind: 'order',
    id: 'n4-grammar-narabekae-032',
    before: '川の そばの かんばんに、',
    after: 'あります。',
    segments: ['ここで', 'およいでは', 'いけない', 'と かいて'],
    starIndex: 1,
    explanation:
      '完整句：「川の そばの かんばんに、ここで およいでは いけないと かいて あります。」「〜てはいけない」（不准…）是固定句型，「およいでは」後只能接「いけない」；「ここで」表場所、修飾「およぐ」，必須放最前；「と かいて」的「と」引用告示的內容，後接句尾「あります」組成「〜てある」。若把「と かいて」插進句型中間，句子便不成立，語序唯一。',
    explanationEn:
      'Complete sentence: 「川の そばの かんばんに、ここで およいでは いけないと かいて あります。」 「〜てはいけない」 (must not) is a fixed pattern, so 「およいでは」 can only be followed by 「いけない」. 「ここで」 marks the place, modifies 「およぐ」, and goes first; the 「と」 of 「と かいて」 quotes the sign\'s text and joins the final 「あります」 to form 「〜てある」. Inserting 「と かいて」 into the middle would break the sentence, so only one order works.',
  },
  {
    kind: 'order',
    id: 'n4-grammar-narabekae-033',
    before: 'えきまえの カフェでは、日本の まんがを',
    after: 'ことが できます。',
    segments: ['えいごに', 'ほんやくした', 'ものも', 'よむ'],
    starIndex: 2,
    explanation:
      '完整句：「えきまえの カフェでは、日本の まんがを えいごに ほんやくした ものも よむ ことが できます。」「〜ことができる」（可以…）接動詞辭書形，「よむ」必須緊貼句尾「ことが できます」；「えいごに」是「ほんやくする」的補語、只能放在「ほんやくした」前，這個子句再修飾形式名詞「もの」。若把「ものも」移到子句前，「ほんやくした」便失去修飾對象，語序唯一。',
    explanationEn:
      'Complete sentence: 「えきまえの カフェでは、日本の まんがを えいごに ほんやくした ものも よむ ことが できます。」 「〜ことができる」 (can do) takes the dictionary form, so 「よむ」 sits right before the final 「ことが できます」. 「えいごに」 is the complement of 「ほんやくする」 and can only precede 「ほんやくした」, whose clause then modifies 「もの」. Moving 「ものも」 before the clause would leave 「ほんやくした」 nothing to modify, so only one order works.',
  },
  {
    kind: 'order',
    id: 'n4-grammar-narabekae-034',
    before: 'かいがいりょこうに 行く ときは、',
    after: 'して ください。',
    segments: ['ひこうきの', 'チケットと', 'パスポートを', 'わすれない ように'],
    starIndex: 3,
    explanation:
      '完整句：「かいがいりょこうに 行く ときは、ひこうきの チケットと パスポートを わすれない ように して ください。」「〜ないようにしてください」（請注意不要…）是固定句型，「わすれない ように」必須緊貼句尾「して ください」；「ひこうきの」的「の」後只能接名詞「チケット」（「飛機的護照」語意不通），「チケットと」再和「パスポートを」並列，語序唯一。',
    explanationEn:
      'Complete sentence: 「かいがいりょこうに 行く ときは、ひこうきの チケットと パスポートを わすれない ように して ください。」 「〜ないようにしてください」 (please make sure not to...) is a fixed pattern, so 「わすれない ように」 sits right before the final 「して ください」. The 「の」 of 「ひこうきの」 can only connect to 「チケット」 — an "airplane\'s passport" makes no sense — and 「チケットと」 then coordinates with 「パスポートを」, so only one order works.',
  },
  {
    kind: 'order',
    id: 'n4-grammar-narabekae-035',
    before: 'バスで 行くより、',
    after: 'と おもいます。',
    segments: ['でんしゃで', '行った', 'ほうが', 'はやく つく'],
    starIndex: 0,
    explanation:
      '完整句：「バスで 行くより、でんしゃで 行った ほうが はやく つくと おもいます。」「〜より〜たほうが…」表示比較後的建議，「行った」後必須緊接「ほうが」；「でんしゃで」表手段、修飾「行った」，正好和前句的「バスで」對比；「はやく つく」是述語、後接引用的「と」連到「おもいます」。若把「でんしゃで」移到「ほうが」後，句子便不成立，語序唯一。',
    explanationEn:
      'Complete sentence: 「バスで 行くより、でんしゃで 行った ほうが はやく つくと おもいます。」 In the comparison 「〜より〜たほうが」, 「行った」 must be immediately followed by 「ほうが」. 「でんしゃで」 marks the means, modifies 「行った」, and contrasts with 「バスで」; 「はやく つく」 is the predicate linking to 「おもいます」 through the quotative 「と」. Placing 「でんしゃで」 after 「ほうが」 would break the sentence, so only one order works.',
  },
  {
    kind: 'order',
    id: 'n4-grammar-narabekae-036',
    before: 'けいさつの 人に、',
    after: 'と 言われました。',
    segments: ['みせの 前に', 'とめて ある', '車を', 'うごかせ'],
    starIndex: 1,
    explanation:
      '完整句：「けいさつの 人に、みせの 前に とめて ある 車を うごかせと 言われました。」考命令形「うごかせ」（快移開）的引用：「〜てある」表示停放後的結果狀態，「みせの 前に」只能接「とめて ある」，這個子句再修飾「車」；「車を」是「うごかす」的受詞，「うごかせ」後接引用的「と」連到「言われました」。若把「車を」移到子句前，「とめて ある」便失去修飾對象，語序唯一。',
    explanationEn:
      'Complete sentence: 「けいさつの 人に、みせの 前に とめて ある 車を うごかせと 言われました。」 This quotes the imperative 「うごかせ」 (move it!). 「〜てある」 describes the parked state, so 「みせの 前に」 can only connect to 「とめて ある」, and that clause modifies 「車」. 「車を」 is the object of 「うごかす」, and 「うごかせ」 joins 「言われました」 through the quotative と. Moving 「車を」 before the clause would leave 「とめて ある」 nothing to modify, so only one order works.',
  },
  {
    kind: 'order',
    id: 'n4-grammar-narabekae-037',
    before: 'なつやすみには、',
    after: 'よていです。',
    segments: ['いなかに', 'すんで いる', 'そふの 家へ', 'あそびに 行く'],
    starIndex: 2,
    explanation:
      '完整句：「なつやすみには、いなかに すんで いる そふの 家へ あそびに 行く よていです。」「〜ている」的連體形「すんで いる」修飾「そふ」，表位置的「いなかに」必須放在「すんで いる」前；「そふの 家へ」表目的地、接移動句「あそびに 行く」，「行く」的連體形再修飾句尾的「よてい」。若把「そふの 家へ」移到子句前，「すんで いる」便失去修飾對象，語序唯一。',
    explanationEn:
      'Complete sentence: 「なつやすみには、いなかに すんで いる そふの 家へ あそびに 行く よていです。」 The prenominal 「すんで いる」 modifies 「そふ」, and the location 「いなかに」 must precede 「すんで いる」. 「そふの 家へ」 marks the destination of 「あそびに 行く」, whose prenominal form then modifies the final 「よてい」. Moving 「そふの 家へ」 before the clause would leave 「すんで いる」 nothing to modify — only one order works.',
  },
  {
    kind: 'order',
    id: 'n4-grammar-narabekae-038',
    before: 'コーチは、れんしゅうの まえに、いつも せんしゅに',
    after: 'います。',
    segments: ['ひろい', 'グラウンドを', '三しゅう', 'はしらせて'],
    starIndex: 2,
    explanation:
      '完整句：「コーチは、れんしゅうの まえに、いつも せんしゅに ひろい グラウンドを 三しゅう はしらせて います。」考使役「はしらせる」（叫…跑）：句尾「います」前必須接て形「はしらせて」；「ひろい」是い形容詞、只能修飾名詞「グラウンド」；數量詞「三しゅう」慣用上緊接在「〜を」之後、動詞之前。若把「三しゅう」移到「ひろい」前，句子便不自然，語序唯一。',
    explanationEn:
      'Complete sentence: 「コーチは、れんしゅうの まえに、いつも せんしゅに ひろい グラウンドを 三しゅう はしらせて います。」 This tests the causative 「はしらせる」 (make someone run): the final 「います」 requires the て form 「はしらせて」. The い-adjective 「ひろい」 can only modify the noun 「グラウンド」, and the counter 「三しゅう」 idiomatically sits between 「〜を」 and the verb. Placing 「三しゅう」 before 「ひろい」 would sound unnatural, so only one order works.',
  },
  {
    kind: 'order',
    id: 'n4-grammar-narabekae-039',
    before: 'ニュースに よると、らいねん、だいがくの 近くに',
    after: 'そうです。',
    segments: ['やさいから ふくまで', 'なんでも うって いる', '大きな スーパーが', 'できる'],
    starIndex: 0,
    explanation:
      '完整句：「ニュースに よると、らいねん、だいがくの 近くに やさいから ふくまで なんでも うって いる 大きな スーパーが できるそうです。」傳聞「〜そうだ」接常體、和開頭的「によると」呼應，「できる」必須緊貼句尾「そうです」；「やさいから ふくまで」（從蔬菜到衣服）是範圍、只能修飾「なんでも うって いる」，這個子句再修飾「スーパー」。範圍語移到別處便沒有動詞可依附，語序唯一。',
    explanationEn:
      'Complete sentence: 「ニュースに よると、らいねん、だいがくの 近くに やさいから ふくまで なんでも うって いる 大きな スーパーが できるそうです。」 The hearsay 「〜そうだ」 follows the plain form and pairs with 「によると」, so 「できる」 sits right before the final 「そうです」. The range 「やさいから ふくまで」 (from vegetables to clothes) can only modify 「なんでも うって いる」, which in turn modifies 「スーパー」. Moved elsewhere, the range phrase would have no verb to attach to — only one order works.',
  },
  {
    kind: 'order',
    id: 'n4-grammar-narabekae-040',
    before: '母に 「あそびに 行く まえに、',
    after: '」と 言われました。',
    segments: ['きょう ならった', 'かんじの', 'れんしゅうを', 'しなさい'],
    starIndex: 1,
    explanation:
      '完整句：「母に 「あそびに 行く まえに、きょう ならった かんじの れんしゅうを しなさい」と 言われました。」「〜なさい」是溫和的命令、放在引用的「と 言われました」前；「きょう ならった」（今天學的）是子句、修飾「かんじ」，「かんじの」的「の」後接名詞「れんしゅう」，「れんしゅうを」再接「しなさい」。若排成「かんじの きょう ならった」，子句便無法修飾名詞，語序唯一。',
    explanationEn:
      'Complete sentence: 「母に 「あそびに 行く まえに、きょう ならった かんじの れんしゅうを しなさい」と 言われました。」 「〜なさい」 is a gentle command quoted before 「と 言われました」. The clause 「きょう ならった」 (learned today) modifies 「かんじ」, the 「の」 of 「かんじの」 connects to the noun 「れんしゅう」, and 「れんしゅうを」 joins 「しなさい」. The order 「かんじの きょう ならった」 would leave the clause unable to modify the noun — only one order works.',
  },
]
