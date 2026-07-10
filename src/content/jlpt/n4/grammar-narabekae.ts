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
]
