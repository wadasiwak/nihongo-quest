import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    kind: 'order',
    id: 'n5-grammar-narabekae-001',
    before: 'すみませんが、この',
    after: 'ください。',
    segments: ['かんじの', 'よみかたが', 'わからないから', 'おしえて'],
    starIndex: 2,
    explanation:
      '完整句：「すみませんが、この かんじの よみかたが わからないから、おしえて ください。」「〜てください」（請…）前必須緊接て形「おしえて」；「この」後只能接名詞「かんじ」，「かんじの」的「の」後須接名詞「よみかた」；「が」的述語是「わからない」，再以「から」帶出請求的理由，四段接續環環相扣，語序唯一。',
    explanationEn:
      'Complete sentence: 「すみませんが、この かんじの よみかたが わからないから、おしえて ください。」 The request form 「〜てください」 (please do ...) must directly follow the te-form 「おしえて」. 「この」 can only be followed by a noun (「かんじ」), and the 「の」 in 「かんじの」 needs the noun 「よみかた」 after it. The subject marked by 「が」 belongs to 「わからない」, and 「から」 then gives the reason for the request, so the four pieces link up in only one order.',
  },
  {
    kind: 'order',
    id: 'n5-grammar-narabekae-002',
    before: 'つくえの',
    after: 'あります。',
    segments: ['うえに', 'ねこの', 'しゃしんが', 'さんまい'],
    starIndex: 3,
    explanation:
      '完整句：「つくえの うえに ねこの しゃしんが さんまい あります。」考存在句「〜に〜が あります」：開頭「つくえの」後須接方位名詞「うえに」；數量詞「さんまい」慣放在「が」之後、動詞之前，不能插到名詞前；「ねこの」的「の」後只能接名詞「しゃしん」。若排成「つくえの ねこの うえに」變成「桌子的貓」，語意不通。',
    explanationEn:
      'Complete sentence: 「つくえの うえに ねこの しゃしんが さんまい あります。」 This tests the existence pattern 「〜に〜が あります」. The opening 「つくえの」 must be followed by the location word 「うえに」. The counter 「さんまい」 goes after 「が」 and before the verb, never in front of the noun, and the 「の」 in 「ねこの」 must be followed by the noun 「しゃしん」. An order like 「つくえの ねこの うえに」 would mean "the desk\'s cat," which makes no sense.',
  },
  {
    kind: 'order',
    id: 'n5-grammar-narabekae-003',
    before: 'カタカナは、ひらがな',
    after: 'おもいます。',
    segments: ['より', 'おぼえるのが', 'むずかしい', 'と'],
    starIndex: 1,
    explanation:
      '完整句：「カタカナは、ひらがなより おぼえるのが むずかしいと おもいます。」考比較句「ＡはＢより〜」：「より」必須緊貼比較對象「ひらがな」，故只能放第一格；「おぼえるのが」用形式名詞「の」把動詞名詞化，作「むずかしい」的主語；引用助詞「と」須緊接「むずかしい」再連「おもいます」，語序唯一。',
    explanationEn:
      'Complete sentence: 「カタカナは、ひらがなより おぼえるのが むずかしいと おもいます。」 This tests the comparison 「ＡはＢより〜」: 「より」 must sit right after the item being compared, 「ひらがな」, so it can only go in the first slot. 「おぼえるのが」 uses the nominalizer 「の」 to turn the verb into the subject of 「むずかしい」, and the quotation particle 「と」 must follow 「むずかしい」 and connect to 「おもいます」, so the order is fixed.',
  },
  {
    kind: 'order',
    id: 'n5-grammar-narabekae-004',
    before: 'あした、デパートへ',
    after: 'いきます。',
    segments: ['ふゆの', 'コートを', 'かい', 'に'],
    starIndex: 0,
    explanation:
      '完整句：「あした、デパートへ ふゆの コートを かいに いきます。」考移動目的「〜に いきます」：動詞連用形「かい」後必須緊接目的助詞「に」，再連「いきます」；「ふゆの」的「の」後只能接名詞「コート」，「コートを」是「かう」的受詞須放在「かい」前。若把「に」放到別處，句子就無法成立，語序唯一。',
    explanationEn:
      'Complete sentence: 「あした、デパートへ ふゆの コートを かいに いきます。」 This tests the purpose-of-movement pattern 「〜に いきます」: the verb stem 「かい」 must be followed directly by the purpose particle 「に」 and then 「いきます」. The 「の」 in 「ふゆの」 can only take the noun 「コート」, and 「コートを」 is the object of buying, so it goes before 「かい」. Putting 「に」 anywhere else breaks the sentence, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n5-grammar-narabekae-005',
    before: 'せんせい、ちょっと あついですから、',
    after: 'いいですか。',
    segments: ['きょうしつの', 'まどを', 'あけて', 'も'],
    starIndex: 3,
    explanation:
      '完整句：「せんせい、ちょっと あついですから、きょうしつの まどを あけても いいですか。」考許可句型「〜てもいいですか」（可以…嗎）：「も」必須緊跟て形「あけて」，再連句尾「いいですか」；「きょうしつの」的「の」後只能接名詞「まど」，「まどを」是「あける」的受詞。若把「も」接在「まどを」後則文法錯誤，語序唯一。',
    explanationEn:
      'Complete sentence: 「せんせい、ちょっと あついですから、きょうしつの まどを あけても いいですか。」 This tests the permission pattern 「〜てもいいですか」 (may I ...?): 「も」 must come right after the te-form 「あけて」 and then connect to the final 「いいですか」. The 「の」 in 「きょうしつの」 can only be followed by the noun 「まど」, and 「まどを」 is the object of 「あける」. Attaching 「も」 to 「まどを」 would be ungrammatical, so the order is fixed.',
  },
  {
    kind: 'order',
    id: 'n5-grammar-narabekae-006',
    before: 'いまは テストですから、',
    after: 'ください。',
    segments: ['となりの', 'ひとの', 'こたえを', 'みないで'],
    starIndex: 1,
    explanation:
      '完整句：「いまは テストですから、となりの ひとの こたえを みないで ください。」考禁止請求「〜ないでください」（請不要…）：「みないで」必須緊接句尾「ください」；「となりの」的「の」後接名詞「ひと」，「ひとの」再接「こたえ」，兩個「の」一路串到受詞「こたえを」。若排成「ひとの となりの こたえ」則語意不通，語序唯一。',
    explanationEn:
      'Complete sentence: 「いまは テストですから、となりの ひとの こたえを みないで ください。」 This tests the negative request 「〜ないでください」 (please don\'t ...): 「みないで」 must come right before the final 「ください」. The 「の」 in 「となりの」 takes the noun 「ひと」, and 「ひとの」 then takes 「こたえ」, so the two 「の」 chain all the way down to the object 「こたえを」. An order like 「ひとの となりの こたえ」 makes no sense, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n5-grammar-narabekae-007',
    before: 'わたしの へやには、',
    after: 'あります。',
    segments: ['つくえや', 'ベッド', 'など', 'が'],
    starIndex: 2,
    explanation:
      '完整句：「わたしの へやには、つくえや ベッドなどが あります。」考列舉助詞「〜や〜など」（…和…等等）：「や」後必須緊接另一個名詞，故「つくえや」後只能是「ベッド」；「など」放在列舉的最後一個名詞之後，再接主格助詞「が」連到「あります」。若把「が」插到「など」前面則文法錯誤，四段語序唯一。',
    explanationEn:
      'Complete sentence: 「わたしの へやには、つくえや ベッドなどが あります。」 This tests the listing pattern 「〜や〜など」 (... and ..., and so on): 「や」 must be followed by another noun, so 「つくえや」 can only take 「ベッド」. 「など」 goes after the last listed noun, and the subject particle 「が」 then links to 「あります」. Putting 「が」 before 「など」 would be ungrammatical, so all four pieces have a unique order.',
  },
  {
    kind: 'order',
    id: 'n5-grammar-narabekae-008',
    before: 'こうえんの',
    after: 'います。',
    segments: ['きの', 'したに', 'こどもが', 'ふたり'],
    starIndex: 0,
    explanation:
      '完整句：「こうえんの きの したに こどもが ふたり います。」考存在句「〜に〜が います」與數量詞位置：開頭「こうえんの」後接名詞「き」，「きの」再接方位詞「した」，兩層「の」的順序不可對調（「きの こうえんの」語意不通）；人數「ふたり」慣放在「こどもが」之後、「います」之前，不能移到名詞前，語序唯一。',
    explanationEn:
      'Complete sentence: 「こうえんの きの したに こどもが ふたり います。」 This tests the existence pattern 「〜に〜が います」 plus counter position: the opening 「こうえんの」 takes the noun 「き」, and 「きの」 then takes the location word 「した」; these two 「の」 phrases cannot be swapped (「きの こうえんの」 makes no sense). The people counter 「ふたり」 goes after 「こどもが」 and before 「います」, never in front of the noun, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n5-grammar-narabekae-009',
    before: 'いま、',
    after: 'よんで います。',
    segments: ['としょかんで', 'かりた', 'りょこうの', 'ほんを'],
    starIndex: 1,
    explanation:
      '完整句：「いま、としょかんで かりた りょこうの ほんを よんで います。」考動詞た形修飾名詞：「かりた」作連體修飾，後面必須接名詞「りょこうの ほん」；場所的「としょかんで」屬於「かりた」的子句，須放其前；「りょこうの」的「の」後只能接「ほん」。若把「かりた」放到句尾，會和「よんで います」撞成兩個述語，文法錯誤。',
    explanationEn:
      'Complete sentence: 「いま、としょかんで かりた りょこうの ほんを よんで います。」 This tests a past-tense verb modifying a noun: 「かりた」 works as a modifier and must be followed by the noun phrase 「りょこうの ほん」. The place phrase 「としょかんで」 belongs to the 「かりた」 clause, so it goes before it, and the 「の」 in 「りょこうの」 can only take 「ほん」. Putting 「かりた」 at the end would clash with 「よんで います」 and create two predicates, which is ungrammatical.',
  },
  {
    kind: 'order',
    id: 'n5-grammar-narabekae-010',
    before: 'その',
    after: 'じしょで しらべて ください。',
    segments: ['ことばの', 'いみが', 'わからない', 'ときは'],
    starIndex: 3,
    explanation:
      '完整句：「その ことばの いみが わからない ときは、じしょで しらべて ください。」考「〜とき」（…的時候）：「とき」是名詞，前面須接連體形「わからない」；開頭「その」後只能接名詞「ことば」，「ことばの」再接「いみが」作「わからない」的主語。若先放「いみが」，「ことばの」就沒有名詞可接，文法錯誤，語序唯一。',
    explanationEn:
      'Complete sentence: 「その ことばの いみが わからない ときは、じしょで しらべて ください。」 This tests 「〜とき」 (when ...): 「とき」 is a noun, so it must follow the plain modifying form 「わからない」. The opening 「その」 can only take the noun 「ことば」, and 「ことばの」 then takes 「いみが」, the subject of 「わからない」. If 「いみが」 came first, 「ことばの」 would have no noun to attach to, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n5-grammar-narabekae-011',
    before: 'あしたは',
    after: 'ねます。',
    segments: ['テストが', 'あるから', 'こんばんは', 'はやく'],
    starIndex: 2,
    explanation:
      '完整句：「あしたは テストが あるから、こんばんは はやく ねます。」考理由的「〜から」（因為…所以…）：「あるから」須緊接主語「テストが」；「こんばんは」是後半句的時間主題，放在「から」之後開啟新子句；副詞「はやく」修飾「ねます」須緊貼其前。若排成「はやく こんばんは ねます」則語順不自然，語序唯一。',
    explanationEn:
      'Complete sentence: 「あしたは テストが あるから、こんばんは はやく ねます。」 This tests the reason pattern 「〜から」 (because ...): 「あるから」 must follow its subject 「テストが」. 「こんばんは」 is the time topic of the second half and opens the new clause after 「から」. The adverb 「はやく」 modifies 「ねます」 and must sit right before it; 「はやく こんばんは ねます」 would sound unnatural, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n5-grammar-narabekae-012',
    before: 'あそこで',
    after: 'やまだせんせいです。',
    segments: ['でんわを', 'かけて', 'いる', 'ひとは'],
    starIndex: 2,
    explanation:
      '完整句：「あそこで でんわを かけて いる ひとは やまだせんせいです。」考「〜ている」修飾名詞：て形「かけて」後必須緊接補助動詞「いる」，「いる」再以連體形修飾名詞「ひと」；「でんわを」是「かける」的受詞須放最前；「ひとは」作全句主題連到「です」。「いる」若放到別處就沒有可接續的て形，語序唯一。',
    explanationEn:
      'Complete sentence: 「あそこで でんわを かけて いる ひとは やまだせんせいです。」 This tests 「〜ている」 modifying a noun: the te-form 「かけて」 must be followed directly by the helper verb 「いる」, and 「いる」 then modifies the noun 「ひと」. The object 「でんわを」 goes first, and 「ひとは」 becomes the topic of the whole sentence, leading to 「です」. If 「いる」 went anywhere else it would have no te-form to attach to, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n5-grammar-narabekae-013',
    before: 'こんどの にちようび、いっしょに',
    after: 'いきませんか。',
    segments: ['あたらしい', 'えいがを', 'み', 'に'],
    starIndex: 1,
    explanation:
      '完整句：「こんどの にちようび、いっしょに あたらしい えいがを みに いきませんか。」考邀約「〜ませんか」與目的「〜に いく」：連用形「み」後必須緊接「に」再連「いきませんか」；い形容詞「あたらしい」只能修飾名詞「えいが」，「えいがを」是「みる」的受詞。若把「に」與「み」拆開放，句子無法成立，語序唯一。',
    explanationEn:
      'Complete sentence: 「こんどの にちようび、いっしょに あたらしい えいがを みに いきませんか。」 This tests the invitation 「〜ませんか」 together with the purpose pattern 「〜に いく」: the verb stem 「み」 must be followed directly by 「に」 and then 「いきませんか」. The i-adjective 「あたらしい」 can only modify the noun 「えいが」, and 「えいがを」 is the object of 「みる」. Separating 「に」 from 「み」 breaks the sentence, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n5-grammar-narabekae-014',
    before: 'たんじょうびに',
    after: 'います。',
    segments: ['ちちに', 'もらった', 'とけいを', 'つけて'],
    starIndex: 3,
    explanation:
      '完整句：「たんじょうびに ちちに もらった とけいを つけて います。」考授受動詞「もらう」與た形修飾名詞：「ちちに」標示給的人，須放在「もらった」前；「もらった」作連體修飾接名詞「とけい」；「とけいを」的受詞後接「つけて」，て形再連補助動詞「います」。若排成「もらった ちちに とけいを つけて」則語意不通。',
    explanationEn:
      'Complete sentence: 「たんじょうびに ちちに もらった とけいを つけて います。」 This tests the receiving verb 「もらう」 plus a past-tense modifier: 「ちちに」 marks the giver and goes before 「もらった」, which then modifies the noun 「とけい」. The object 「とけいを」 is followed by 「つけて」, whose te-form connects to 「います」. An order like 「もらった ちちに とけいを つけて」 makes no sense.',
  },
  {
    kind: 'order',
    id: 'n5-grammar-narabekae-015',
    before: 'にほんへ',
    after: 'なります。',
    segments: ['きて', 'から', 'もう', 'さんねんに'],
    starIndex: 0,
    explanation:
      '完整句：「にほんへ きてから もう さんねんに なります。」考順序句型「〜てから」（…之後）：「から」必須緊跟て形「きて」；開頭助詞「へ」後只能接移動動詞「きて」，故第一格固定；副詞「もう」（已經）修飾「さんねんに なります」，須放在「さんねんに」前。若排成「さんねんに もう なります」則語順不自然，語序唯一。',
    explanationEn:
      'Complete sentence: 「にほんへ きてから もう さんねんに なります。」 This tests the sequence pattern 「〜てから」 (after doing ...): 「から」 must directly follow the te-form 「きて」. The particle 「へ」 at the start can only be followed by the motion verb 「きて」, so the first slot is fixed. The adverb 「もう」 (already) modifies 「さんねんに なります」 and goes before 「さんねんに」; 「さんねんに もう なります」 would be unnatural, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n5-grammar-narabekae-016',
    before: 'わたしは、やきゅう',
    after: 'すきです。',
    segments: ['より', 'サッカーを', 'する', 'ほうが'],
    starIndex: 3,
    explanation:
      '完整句：「わたしは、やきゅうより サッカーを する ほうが すきです。」考比較句型「Ａより Ｂの/するほうが すきだ」：「より」必須緊貼比較對象「やきゅう」，只能放第一格；「ほう」是名詞，前面須接連體形「する」，「サッカーを」是「する」的受詞須放其前；「ほうが」再連句尾「すきです」，四段接續固定，語序唯一。',
    explanationEn:
      'Complete sentence: 「わたしは、やきゅうより サッカーを する ほうが すきです。」 This tests the comparison pattern where 「〜ほうが すきだ」 states the preferred side: 「より」 must sit right after the compared item 「やきゅう」, so it goes first. 「ほう」 is a noun and must follow the plain form 「する」, whose object 「サッカーを」 comes before it. 「ほうが」 then connects to the final 「すきです」, so all four pieces lock into one order.',
  },
  {
    kind: 'order',
    id: 'n5-grammar-narabekae-017',
    before: 'にほんの',
    after: 'べんきょうして います。',
    segments: ['だいがくに', 'はいりたい', 'から', 'まいにち'],
    starIndex: 0,
    explanation:
      '完整句：「にほんの だいがくに はいりたいから、まいにち べんきょうして います。」考願望「〜たい」＋理由「から」：開頭「にほんの」後只能接名詞「だいがく」；「はいりたい」承接「だいがくに」，「から」緊跟「はいりたい」帶出理由；「まいにち」修飾後句「べんきょうして います」。若把「まいにち」插進「はいりたい」前則語意不通，語序唯一。',
    explanationEn:
      'Complete sentence: 「にほんの だいがくに はいりたいから、まいにち べんきょうして います。」 This tests the desire form 「〜たい」 plus the reason particle 「から」: the opening 「にほんの」 can only take the noun 「だいがく」. 「はいりたい」 follows 「だいがくに」, and 「から」 attaches right after 「はいりたい」 to give the reason. 「まいにち」 modifies the second clause 「べんきょうして います」; putting it before 「はいりたい」 makes no sense, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n5-grammar-narabekae-018',
    before: 'えきから としょかんまで、',
    after: 'おもいます。',
    segments: ['あるいて', 'じゅっぷん', 'ぐらい', 'かかると'],
    starIndex: 1,
    explanation:
      '完整句：「えきから としょかんまで、あるいて じゅっぷんぐらい かかると おもいます。」考所需時間「（時間）ぐらい かかる」：「ぐらい」（大約）必須緊跟數量詞「じゅっぷん」，再接「かかると」；「と」是引用助詞，「かかると」須緊連「おもいます」；表手段的「あるいて」（走路）放在時間之前修飾整件事。若排成「かかると じゅっぷん」則文法錯誤，語序唯一。',
    explanationEn:
      'Complete sentence: 「えきから としょかんまで、あるいて じゅっぷんぐらい かかると おもいます。」 This tests the time-needed pattern with 「ぐらい かかる」: 「ぐらい」 (about) must directly follow the amount 「じゅっぷん」 and then take 「かかると」. The quotation particle 「と」 links 「かかる」 to 「おもいます」, and 「あるいて」 (on foot) states the means, going before the time expression. 「かかると じゅっぷん」 would be ungrammatical, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n5-grammar-narabekae-019',
    before: 'あねは、',
    after: 'とても じょうずです。',
    segments: ['ふるい', 'うたを', 'うたう', 'のが'],
    starIndex: 2,
    explanation:
      '完整句：「あねは、ふるい うたを うたうのが とても じょうずです。」考動詞名詞化「〜のが じょうずだ」（很會做…）：形式名詞「の」前須接辭書形「うたう」，「のが」再連「じょうずです」；い形容詞「ふるい」只能修飾名詞「うた」，「うたを」是「うたう」的受詞須緊接其前。若把「のが」放到名詞後則文法錯誤，語序唯一。',
    explanationEn:
      'Complete sentence: 「あねは、ふるい うたを うたうのが とても じょうずです。」 This tests nominalization with 「〜のが じょうずだ」 (to be good at doing ...): the nominalizer 「の」 must follow the dictionary form 「うたう」, and 「のが」 then connects to 「じょうずです」. The i-adjective 「ふるい」 can only modify the noun 「うた」, and the object 「うたを」 goes right before 「うたう」. Attaching 「のが」 to a plain noun would be ungrammatical, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n5-grammar-narabekae-020',
    before: 'ばんごはんを',
    after: 'しましょう。',
    segments: ['たべた', 'あと', 'で', 'さんぽを'],
    starIndex: 0,
    explanation:
      '完整句：「ばんごはんを たべた あとで、さんぽを しましょう。」考先後順序「〜たあとで」（…之後）：「あと」是名詞，前面必須接た形「たべた」，後面緊接助詞「で」；開頭「ばんごはんを」的受詞後只能接動詞「たべた」，故第一格固定；「さんぽを」須緊連句尾「しましょう」。若把「で」放到「さんぽを」後則文法錯誤，語序唯一。',
    explanationEn:
      'Complete sentence: 「ばんごはんを たべた あとで、さんぽを しましょう。」 This tests the sequence pattern 「〜たあとで」 (after doing ...): 「あと」 is a noun, so it must follow the ta-form 「たべた」 and be followed by the particle 「で」. The opening object 「ばんごはんを」 can only take the verb 「たべた」, fixing the first slot, and 「さんぽを」 must connect to the final 「しましょう」. Putting 「で」 after 「さんぽを」 would break the grammar, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n5-grammar-narabekae-021',
    before: 'ごはんを',
    after: 'あらいます。',
    segments: ['たべる', 'まえ', 'に', 'てを'],
    starIndex: 1,
    explanation:
      '完整句：「ごはんを たべる まえに、てを あらいます。」考「〜まえに」（做…之前）：「まえ」是名詞，前面必須接辭書形「たべる」，後面緊接助詞「に」；開頭「ごはんを」的受詞後只能接動詞「たべる」，故第一格固定；「てを」是「あらう」的受詞，須緊連句尾「あらいます」。若排成「てを たべる」變成「吃手」，語意不通，語序唯一。',
    explanationEn:
      'Complete sentence: 「ごはんを たべる まえに、てを あらいます。」 This tests 「〜まえに」 (before doing ...): 「まえ」 is a noun, so it must follow the dictionary form 「たべる」 and be followed by the particle 「に」. The opening object 「ごはんを」 can only take the verb 「たべる」, fixing the first slot. 「てを」 is the object of 「あらう」 and must connect to the final 「あらいます」. 「てを たべる」 would mean "eat your hands," which is nonsense, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n5-grammar-narabekae-022',
    before: 'にちようびは、そうじを したり',
    after: 'です。',
    segments: ['かいものに', 'いったり', 'して', 'いそがしい'],
    starIndex: 2,
    explanation:
      '完整句：「にちようびは、そうじを したり かいものに いったりして、いそがしいです。」考列舉句型「〜たり〜たりする」：前段已有「したり」，後面必須接第二個たり形「いったり」，而「かいものに」是移動目的地，須放「いったり」前；「して」把兩個たり收尾，連向述語；「いそがしい」只能放句尾「です」前。若把「して」放到「いったり」前則接續錯誤，語序唯一。',
    explanationEn:
      'Complete sentence: 「にちようびは、そうじを したり かいものに いったりして、いそがしいです。」 This tests the listing pattern 「〜たり〜たりする」: since 「したり」 already appears, the next piece must be the second tari-form 「いったり」, and the shopping destination 「かいものに」 goes before it. 「して」 wraps up the two tari-forms and leads toward the predicate, and 「いそがしい」 can only sit before the final 「です」. Placing 「して」 before 「いったり」 breaks the pattern, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n5-grammar-narabekae-023',
    before: 'かぞくの',
    after: 'おきますか。',
    segments: ['なかで', 'だれが', 'いちばん', 'はやく'],
    starIndex: 0,
    explanation:
      '完整句：「かぞくの なかで、だれが いちばん はやく おきますか。」考最高級疑問句「〜のなかで だれが いちばん〜」：開頭「かぞくの」的「の」後只能接方位名詞「なか」，故「なかで」固定第一格；疑問詞主語「だれが」接續其後；「いちばん」必須緊貼被修飾的「はやく」，「はやく」再修飾句尾「おきますか」。若排成「いちばん だれが」則語順錯誤，語序唯一。',
    explanationEn:
      'Complete sentence: 「かぞくの なかで、だれが いちばん はやく おきますか。」 This tests the superlative question 「〜のなかで だれが いちばん〜」: the opening 「かぞくの」 can only take the location noun 「なか」, so 「なかで」 is fixed in the first slot. The question-word subject 「だれが」 comes next, and 「いちばん」 must sit right before the word it modifies, 「はやく」, which in turn modifies 「おきますか」. 「いちばん だれが」 would be the wrong order, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n5-grammar-narabekae-024',
    before: 'びじゅつかんの',
    after: 'いけません。',
    segments: ['なかで', 'しゃしんを', 'とって', 'は'],
    starIndex: 3,
    explanation:
      '完整句：「びじゅつかんの なかで、しゃしんを とっては いけません。」考禁止句型「〜てはいけません」（不可以…）：「は」必須緊跟て形「とって」，再連句尾「いけません」；開頭「びじゅつかんの」後接方位名詞「なか」；「しゃしんを」是「とる」的受詞，須放「とって」前。若排成「びじゅつかんの しゃしんを」變成「美術館的照片」，「なかで」就沒有名詞可依附，語序唯一。',
    explanationEn:
      'Complete sentence: 「びじゅつかんの なかで、しゃしんを とっては いけません。」 This tests the prohibition pattern 「〜てはいけません」 (must not ...): 「は」 must directly follow the te-form 「とって」 and connect to the final 「いけません」. The opening 「びじゅつかんの」 takes the location noun 「なか」, and the object 「しゃしんを」 goes before 「とって」. 「びじゅつかんの しゃしんを」 would mean "the museum\'s photos" and leave 「なかで」 with no noun to attach to, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n5-grammar-narabekae-025',
    before: 'わたしは、',
    after: 'ほしいです。',
    segments: ['ひろくて', 'あかるい', 'へや', 'が'],
    starIndex: 1,
    explanation:
      '完整句：「わたしは、ひろくて あかるい へやが ほしいです。」考願望「〜が ほしい」與い形容詞て形並列：「ほしい」的對象用「が」標示，「が」須緊接名詞「へや」；「あかるい」是連體形，只能直接修飾「へや」；「ひろくて」是て形，後面必須再接形容詞「あかるい」，不能直接接名詞。若排成「あかるい ひろくて へや」則接續錯誤，語序唯一。',
    explanationEn:
      'Complete sentence: 「わたしは、ひろくて あかるい へやが ほしいです。」 This tests the desire pattern 「〜が ほしい」 with two linked i-adjectives: the wanted thing is marked by 「が」, which must follow the noun 「へや」. 「あかるい」 is the plain modifying form and attaches directly to 「へや」, while the te-form 「ひろくて」 must be followed by another adjective, never directly by a noun. 「あかるい ひろくて へや」 would be the wrong linkage, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n5-grammar-narabekae-026',
    before: 'この まちは、',
    after: 'なりました。',
    segments: ['えきが', 'できて', 'とても', 'にぎやかに'],
    starIndex: 2,
    explanation:
      '完整句：「この まちは、えきが できて とても にぎやかに なりました。」考變化句型「〜に なります」：な形容詞「にぎやか」加「に」後必須緊連句尾「なりました」；程度副詞「とても」只能修飾「にぎやかに」，不能修飾動詞「できて」；「えきが」是「できる」（建成）的主語，須放「できて」前，用て形帶出變化的原因。若排成「えきが とても できて」則文法錯誤，語序唯一。',
    explanationEn:
      'Complete sentence: 「この まちは、えきが できて とても にぎやかに なりました。」 This tests the change pattern 「〜に なります」: the na-adjective 「にぎやか」 plus 「に」 must connect directly to 「なりました」. The degree adverb 「とても」 can only modify 「にぎやかに」, not the verb 「できて」. 「えきが」 is the subject of 「できる」 (to be built) and goes before 「できて」, whose te-form gives the cause of the change. 「えきが とても できて」 is ungrammatical, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n5-grammar-narabekae-027',
    before: 'すみません、',
    after: 'ください。',
    segments: ['その', 'あかい', 'りんごを', 'みっつ'],
    starIndex: 0,
    explanation:
      '完整句：「すみません、その あかい りんごを みっつ ください。」考購物句型「〜を（數量詞）ください」：數量詞「みっつ」慣放在「を」之後、「ください」之前，不能直接插到名詞前（「みっつ りんご」須加「の」才成立）；指示詞「その」放名詞組最前，依序接「あかい」「りんご」。若排成「あかい その りんご」則語順錯誤，語序唯一。',
    explanationEn:
      'Complete sentence: 「すみません、その あかい りんごを みっつ ください。」 This tests the shopping pattern of noun + 「を」 + counter + 「ください」: the counter 「みっつ」 goes after 「を」 and before 「ください」; it cannot sit directly in front of the noun (「みっつ りんご」 would need 「の」 to work). The demonstrative 「その」 opens the noun phrase, followed by 「あかい」 and then 「りんご」 in that order. 「あかい その りんご」 would be the wrong order, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n5-grammar-narabekae-028',
    before: 'ゆうびんきょくは、',
    after: 'あります。',
    segments: ['ぎんこうと', 'スーパー', 'の', 'あいだに'],
    starIndex: 3,
    explanation:
      '完整句：「ゆうびんきょくは、ぎんこうと スーパーの あいだに あります。」考位置句型「Ａと Ｂの あいだに」（在Ａ和Ｂ之間）：並列助詞「と」後必須接另一個名詞「スーパー」，「の」再接方位名詞「あいだ」，「あいだに」連到「あります」，四段成一條固定的名詞鏈。若排成「スーパーの ぎんこうと あいだに」，「の」後接不到方位詞，文法錯誤，語序唯一。',
    explanationEn:
      'Complete sentence: 「ゆうびんきょくは、ぎんこうと スーパーの あいだに あります。」 This tests the location pattern 「Ａと Ｂの あいだに」 (between A and B): the particle 「と」 must be followed by the second noun 「スーパー」, 「の」 then takes the location noun 「あいだ」, and 「あいだに」 connects to 「あります」, forming one fixed noun chain. In 「スーパーの ぎんこうと あいだに」, the 「の」 has no location word to attach to, so that order fails and the correct order is unique.',
  },
  {
    kind: 'order',
    id: 'n5-grammar-narabekae-029',
    before: 'この みせの りょうりは、',
    after: 'ないです。',
    segments: ['やすいです', 'が', 'あまり', 'おいしく'],
    starIndex: 1,
    explanation:
      '完整句：「この みせの りょうりは、やすいですが あまり おいしくないです。」考逆接「〜が」與「あまり〜ない」：接續助詞「が」須緊跟前句述語「やすいです」；副詞「あまり」只能搭配否定，必須放在「おいしくない」前，不能放到肯定的「やすいです」前；「おいしく」是否定活用形，須緊連句尾「ないです」。若排成「あまり やすいですが」則文法錯誤，語序唯一。',
    explanationEn:
      'Complete sentence: 「この みせの りょうりは、やすいですが あまり おいしくないです。」 This tests the contrast particle 「〜が」 (but) together with 「あまり〜ない」: the connective 「が」 must follow the first predicate 「やすいです」. The adverb 「あまり」 only works with negatives, so it must go before 「おいしくない」, never before the positive 「やすいです」. 「おいしく」 is the negative stem and must connect to the final 「ないです」. 「あまり やすいですが」 would be ungrammatical, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n5-grammar-narabekae-030',
    before: 'ぎんこうは、',
    after: 'さんじまでです。',
    segments: ['あさ', 'くじ', 'から', 'ごご'],
    starIndex: 2,
    explanation:
      '完整句：「ぎんこうは、あさ くじから ごご さんじまでです。」考時間範圍「〜から〜まで」：「から」必須緊跟起點時刻「くじ」，「あさ」修飾「くじ」須放其前；「ごご」修飾終點時刻，緊接句尾的「さんじまで」。若排成「ごご くじから あさ さんじまで」變成「晚上九點開到凌晨三點」，不合銀行營業的常識，明確錯誤，語序唯一。',
    explanationEn:
      'Complete sentence: 「ぎんこうは、あさ くじから ごご さんじまでです。」 This tests the time range 「〜から〜まで」 (from ... to ...): 「から」 must follow the starting time 「くじ」, and 「あさ」 modifies 「くじ」, so it goes right before it. 「ごご」 modifies the closing time and sits right before the final 「さんじまで」. An order like 「ごご くじから あさ さんじまで」 would mean the bank is open from 9 p.m. to 3 a.m., which defies common sense for a bank, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n5-grammar-narabekae-031',
    before: 'キリンは、',
    after: 'どうぶつです。',
    segments: ['くびが', 'ながくて', 'せが', 'たかい'],
    starIndex: 0,
    explanation:
      '完整句：「キリンは、くびが ながくて せが たかい どうぶつです。」考い形容詞て形並列修飾名詞：「ながくて」是て形須放前項，「たかい」是連體形放後項、直接修飾「どうぶつ」；「くびが ながい」（脖子長）與「せが たかい」（個子高）是固定搭配，若交叉排成「せが ながくて くびが たかい」則搭配錯誤、語意不通，語序唯一。',
    explanationEn:
      'Complete sentence: 「キリンは、くびが ながくて せが たかい どうぶつです。」 This tests linking two i-adjective clauses with the te-form to modify a noun: the te-form 「ながくて」 must come first, and the plain form 「たかい」 comes second, directly modifying 「どうぶつ」. Also, 「くびが ながい」 (a long neck) and 「せが たかい」 (tall) are fixed pairings; crossing them into 「せが ながくて くびが たかい」 would be a mismatched, nonsensical combination, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n5-grammar-narabekae-032',
    before: 'あしたの ごごから、',
    after: 'なるでしょう。',
    segments: ['あめが', 'ふって', 'かぜも', 'つよく'],
    starIndex: 3,
    explanation:
      '完整句：「あしたの ごごから、あめが ふって かぜも つよく なるでしょう。」考推測句尾「〜でしょう」與變化「〜く なります」：「あめが」是「ふる」的主語，須緊接「ふって」前；「かぜも」的「も」表「風也」，只能作「つよく なる」的主語；い形容詞連用形「つよく」必須緊連句尾「なるでしょう」。若排成「かぜも ふって」（風也下了）則搭配錯誤、語意不通，語序唯一。',
    explanationEn:
      'Complete sentence: 「あしたの ごごから、あめが ふって かぜも つよく なるでしょう。」 This tests the conjecture ending 「〜でしょう」 and the change pattern 「〜く なります」: 「あめが」 is the subject of 「ふる」 and must go right before 「ふって」. The 「も」 in 「かぜも」 means "the wind too," so it can only be the subject of 「つよく なる」, and the adverbial form 「つよく」 must connect directly to the final 「なるでしょう」. 「かぜも ふって」 would pair the wrong subject and verb, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n5-grammar-narabekae-033',
    before: 'へやが くらいですね。',
    after: 'ましょうか。',
    segments: ['まどの', 'そばの', 'でんきを', 'つけ'],
    starIndex: 1,
    explanation:
      '完整句：「へやが くらいですね。まどの そばの でんきを つけましょうか。」考提議句型「〜ましょうか」（我來…吧？）：動詞連用形「つけ」必須緊接句尾「ましょうか」；「まどの」的「の」後接方位名詞「そば」，「そばの」再接「でんき」，兩層「の」順序不可對調——「そばの まど」缺少基準點，語意不通；「でんきを」是「つける」的受詞須放「つけ」前，語序唯一。',
    explanationEn:
      'Complete sentence: 「へやが くらいですね。まどの そばの でんきを つけましょうか。」 This tests the offer pattern 「〜ましょうか」 (shall I ...?): the verb stem 「つけ」 must connect directly to the final 「ましょうか」. The 「の」 in 「まどの」 takes the location noun 「そば」, and 「そばの」 then takes 「でんき」; these two 「の」 phrases cannot be swapped, because 「そばの まど」 would have no reference point and make no sense. The object 「でんきを」 goes before 「つけ」, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n5-grammar-narabekae-034',
    before: 'やまださんは、',
    after: 'もって います。',
    segments: ['わたしの', 'と', 'おなじ', 'かばんを'],
    starIndex: 2,
    explanation:
      '完整句：「やまださんは、わたしのと おなじ かばんを もって います。」考「〜と おなじ」（和…一樣）：「と」前必須接名詞性成分，這裡是準體助詞「の」構成的「わたしの」（我的那個）；「おなじ」直接修飾名詞「かばん」，須緊貼其前；「かばんを」再連句尾「もって います」。若把「おなじ」放到「わたしの」前則接續錯誤，語序唯一。',
    explanationEn:
      'Complete sentence: 「やまださんは、わたしのと おなじ かばんを もって います。」 This tests 「〜と おなじ」 (the same as ...): 「と」 must follow something that works as a noun — here 「わたしの」 (mine), formed with the stand-in particle 「の」. 「おなじ」 directly modifies the noun 「かばん」 and must sit right before it, and 「かばんを」 then connects to the final 「もって います」. Putting 「おなじ」 before 「わたしの」 would be the wrong linkage, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n5-grammar-narabekae-035',
    before: 'ゆうべは、',
    after: 'できませんでした。',
    segments: ['あたまが', 'いたくて', 'しゅくだいが', 'ぜんぜん'],
    starIndex: 3,
    explanation:
      '完整句：「ゆうべは、あたまが いたくて しゅくだいが ぜんぜん できませんでした。」考い形容詞て形表原因與「ぜんぜん〜ない」：「あたまが」是「いたい」的主語，須緊接「いたくて」前；副詞「ぜんぜん」只能搭配否定，必須緊貼「できませんでした」；「しゅくだいが」是「できる」的對象。若排成「しゅくだいが いたくて」（作業很痛）則語意不通，語序唯一。',
    explanationEn:
      'Complete sentence: 「ゆうべは、あたまが いたくて しゅくだいが ぜんぜん できませんでした。」 This tests the te-form of an i-adjective expressing a cause, plus 「ぜんぜん〜ない」: 「あたまが」 is the subject of 「いたい」 and goes right before 「いたくて」. The adverb 「ぜんぜん」 only works with negatives, so it must sit right before 「できませんでした」, and 「しゅくだいが」 marks what could not be done. 「しゅくだいが いたくて」 (my homework hurt) would be nonsense, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n5-grammar-narabekae-036',
    before: 'たなかさんは',
    after: 'です。',
    segments: ['かいしゃいんで', 'おくさんは', 'びょういんの', 'いしゃ'],
    starIndex: 0,
    explanation:
      '完整句：「たなかさんは かいしゃいんで、おくさんは びょういんの いしゃです。」考名詞句的並列「〜で、〜です」：「かいしゃいんで」用「で」（です的て形）連接前後兩句，必須緊接主題「たなかさんは」之後；「おくさんは」開啟後句，「びょういんの」的「の」後接名詞「いしゃ」連到句尾「です」。若排成「びょういんの かいしゃいん」（醫院的公司職員）則語意不通，語序唯一。',
    explanationEn:
      'Complete sentence: 「たなかさんは かいしゃいんで、おくさんは びょういんの いしゃです。」 This tests joining two noun sentences with 「〜で、〜です」: 「かいしゃいんで」 uses 「で」 (the te-form of です) to link the two clauses, so it must come right after the topic 「たなかさんは」. 「おくさんは」 opens the second clause, and the 「の」 in 「びょういんの」 takes the noun 「いしゃ」, leading to the final 「です」. 「びょういんの かいしゃいん」 (a hospital\'s company employee) makes no sense, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n5-grammar-narabekae-037',
    before: 'この くつは ちょっと ちいさいですから、もっと',
    after: 'ください。',
    segments: ['おおきい', 'の', 'を', 'みせて'],
    starIndex: 1,
    explanation:
      '完整句：「この くつは ちょっと ちいさいですから、もっと おおきいのを みせて ください。」考準體助詞「の」（…的那個）：「の」代替名詞「くつ」，前面須接連體形「おおきい」，而「もっと」只能修飾「おおきい」，故第一格固定；「を」緊跟「の」之後，「みせて」再連句尾「ください」。若把「を」直接接在「おおきい」後則文法錯誤，語序唯一。',
    explanationEn:
      'Complete sentence: 「この くつは ちょっと ちいさいですから、もっと おおきいのを みせて ください。」 This tests the stand-in particle 「の」 (the ... one): 「の」 replaces the noun 「くつ」 and must follow the plain form 「おおきい」, while 「もっと」 can only modify 「おおきい」, fixing the first slot. 「を」 comes right after 「の」, and 「みせて」 connects to the final 「ください」. Attaching 「を」 directly to 「おおきい」 would be ungrammatical, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n5-grammar-narabekae-038',
    before: 'はさみは、つくえの',
    after: 'います。',
    segments: ['うえから', 'にばんめの', 'ひきだしに', 'はいって'],
    starIndex: 3,
    explanation:
      '完整句：「はさみは、つくえの うえから にばんめの ひきだしに はいって います。」考順序詞「〜から 〜ばんめ」（從…數來第…個）：開頭「つくえの」後接方位名詞「うえ」，「うえから」再接「にばんめの」，「の」後只能接名詞「ひきだし」；て形「はいって」必須緊連補助動詞「います」表狀態。若排成「にばんめの うえから」則基準錯亂、語意不通，語序唯一。',
    explanationEn:
      'Complete sentence: 「はさみは、つくえの うえから にばんめの ひきだしに はいって います。」 This tests the ordinal pattern 「〜から 〜ばんめ」 (the nth counting from ...): the opening 「つくえの」 takes the location noun 「うえ」, 「うえから」 then takes 「にばんめの」, whose 「の」 can only be followed by the noun 「ひきだし」. The te-form 「はいって」 must connect directly to 「います」 to express a state. 「にばんめの うえから」 would scramble the reference point and make no sense, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n5-grammar-narabekae-039',
    before: 'いもうとは まだ ごさいですから、',
    after: 'よんで います。',
    segments: ['ひらがな', 'だけ', 'の', 'ほんを'],
    starIndex: 0,
    explanation:
      '完整句：「いもうとは まだ ごさいですから、ひらがなだけの ほんを よんで います。」考限定「〜だけ」：「だけ」緊跟名詞「ひらがな」表「只有…」，「の」再把「ひらがなだけ」整組接到名詞「ほん」上；「ほんを」是受詞，緊連句尾「よんで います」。若排成「ひらがなの だけ」則助詞順序錯誤、文法不成立，語序唯一。',
    explanationEn:
      'Complete sentence: 「いもうとは まだ ごさいですから、ひらがなだけの ほんを よんで います。」 This tests the limiting particle 「だけ」 (only): 「だけ」 attaches right after the noun 「ひらがな」 to mean "only hiragana," and 「の」 then links the whole phrase 「ひらがなだけ」 to the noun 「ほん」. The object 「ほんを」 connects to the final 「よんで います」. 「ひらがなの だけ」 puts the particles in the wrong order and is ungrammatical, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n5-grammar-narabekae-040',
    before: 'すみません、この',
    after: 'ですか。',
    segments: ['おおきい', 'メロンは', 'ひとつ', 'いくら'],
    starIndex: 2,
    explanation:
      '完整句：「すみません、この おおきい メロンは ひとつ いくらですか。」考問價錢「（數量詞）いくらですか」：疑問詞「いくら」必須緊連句尾「ですか」；數量詞「ひとつ」放在主題「メロンは」之後、「いくら」之前，表「一個多少錢」；開頭「この」加連體形「おおきい」只能依序修飾名詞「メロン」。若排成「ひとつ おおきい メロンは」則語順錯誤，語序唯一。',
    explanationEn:
      'Complete sentence: 「すみません、この おおきい メロンは ひとつ いくらですか。」 This tests asking prices with a counter plus 「いくらですか」: the question word 「いくら」 must connect directly to the final 「ですか」. The counter 「ひとつ」 goes after the topic 「メロンは」 and before 「いくら」, meaning "how much for one." The opening 「この」 plus the adjective 「おおきい」 must modify the noun 「メロン」 in that order. 「ひとつ おおきい メロンは」 would be the wrong order, so the order is unique.',
  },
]
