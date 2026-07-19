import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    kind: 'order',
    id: 'n2-grammar-narabekae-001',
    before: '上司の直々の頼みなので、',
    after: 'を得ない。',
    segments: ['気が', '進まない', '仕事でも', '引き受けざる'],
    starIndex: 2,
    explanation:
      '完整句：「上司の直々の頼みなので、気が進まない仕事でも引き受けざるを得ない。」「〜ざるを得ない」（不得不…）的「ざる」接未然形，「引き受けざる」必須緊貼句尾的「を得ない」；「気が進まない」（提不起勁）是固定搭配，整段作連體修飾接名詞「仕事でも」。若把「仕事でも」提前，「進まない」之後直接接動詞「引き受けざる」則不成句，語序唯一。',
    explanationEn:
      'Complete sentence: 「上司の直々の頼みなので、気が進まない仕事でも引き受けざるを得ない。」 In 「ざるを得ない」 ("have no choice but to..."), 「ざる」 attaches to the negative stem, so 「引き受けざる」 must sit directly before the sentence-final 「を得ない」. 「気が進まない」 ("not feeling up to it") is a set phrase that works as a modifier for the noun in 「仕事でも」. If 「仕事でも」 were moved earlier, 「進まない」 would run straight into 「引き受けざる」 and the sentence would break, so the order is fixed.',
  },
  {
    kind: 'order',
    id: 'n2-grammar-narabekae-002',
    before: '彼は、医者になろう',
    after: '仕事が忙しくて、なかなか勉強が進まないらしい。',
    segments: ['と', '決心した', 'ものの', '現実は'],
    starIndex: 2,
    explanation:
      '完整句：「彼は、医者になろうと決心したものの、現実は仕事が忙しくて、なかなか勉強が進まないらしい。」意向形「なろう」後只能接引用助詞「と」，再接「決心した」；逆接的「〜ものの」（雖然…卻）須接た形，故緊跟「決心した」。「現実は」若放「ものの」前會變成「は＋ものの」的錯誤接續，只能放最後帶出後半句，語序唯一。',
    explanationEn:
      'Complete sentence: 「彼は、医者になろうと決心したものの、現実は仕事が忙しくて、なかなか勉強が進まないらしい。」 The volitional 「なろう」 can only be followed by the quotative 「と」, then 「決心した」; the concessive 「ものの」 ("although") must attach to the ta-form, so it follows 「決心した」. Placing 「現実は」 before 「ものの」 would create the impossible sequence 「は＋ものの」, so it can only come last to introduce the second half — the order is unique.',
  },
  {
    kind: 'order',
    id: 'n2-grammar-narabekae-003',
    before: 'そんなにスピードを出したら、',
    after: 'よ。',
    segments: ['大きな', '事故を', '起こし', 'かねない'],
    starIndex: 3,
    explanation:
      '完整句：「そんなにスピードを出したら、大きな事故を起こしかねないよ。」「〜かねない」（很可能…、難保不…）表負面事態的可能性，須接動詞連用形，故「起こし」必須緊貼「かねない」；連體詞「大きな」後面只能接名詞「事故」，「事故を」再作「起こし」的受詞，四段接續環環相扣，排法唯一。',
    explanationEn:
      'Complete sentence: 「そんなにスピードを出したら、大きな事故を起こしかねないよ。」 「かねない」 ("could well...") expresses the possibility of a bad outcome and attaches to the masu-stem, so 「起こし」 must sit directly before 「かねない」. The prenominal adjective 「大きな」 can only be followed by the noun 「事故」, and 「事故を」 in turn serves as the object of 「起こし」 — every link in the chain is forced, so the arrangement is unique.',
  },
  {
    kind: 'order',
    id: 'n2-grammar-narabekae-004',
    before: 'あの真面目な彼が会社のお金を横領したなんて、',
    after: 'ことだ。',
    segments: ['にわかに', 'は', '信じ', 'がたい'],
    starIndex: 2,
    explanation:
      '完整句：「あの真面目な彼が会社のお金を横領したなんて、にわかには信じがたいことだ。」「〜がたい」（難以…）接動詞連用形，故「信じ」必須緊貼「がたい」，中間不可插入「は」；「は」只能接在副詞「にわかに」（一時之間）後構成「にわかには」加強否定語氣。「がたい」是連體形，直接修飾句尾的「こと」，語序唯一。',
    explanationEn:
      'Complete sentence: 「あの真面目な彼が会社のお金を横領したなんて、にわかには信じがたいことだ。」 「がたい」 ("hard to...") attaches to the masu-stem, so 「信じ」 must sit directly before 「がたい」 with no 「は」 inserted between them; 「は」 can only follow the adverb 「にわかに」 ("readily; at once") to form the emphatic negative 「にわかには」. 「がたい」 is then in its attributive form, directly modifying the final noun 「こと」 — the order is unique.',
  },
  {
    kind: 'order',
    id: 'n2-grammar-narabekae-005',
    before: '彼は住所も電話番号も変えてしまったので、',
    after: 'がない。',
    segments: ['こちら', 'から', '連絡の', '取りよう'],
    starIndex: 3,
    explanation:
      '完整句：「彼は住所も電話番号も変えてしまったので、こちらから連絡の取りようがない。」「〜ようがない」（想…也沒辦法）接動詞連用形，「取りよう」必須緊貼句尾的「がない」；「連絡の」的「の」後必須直接接「取りよう」，不可被「こちらから」隔開；「から」只能跟在「こちら」後標示動作起點，語序唯一。',
    explanationEn:
      'Complete sentence: 「彼は住所も電話番号も変えてしまったので、こちらから連絡の取りようがない。」 「ようがない」 ("no way to do it even if one wanted") attaches to the masu-stem, so 「取りよう」 must sit right before the sentence-final 「がない」; the 「の」 of 「連絡の」 must connect directly to 「取りよう」 and cannot be split off by 「こちらから」; 「から」 can only follow 「こちら」 to mark who initiates the contact — the order is unique.',
  },
  {
    kind: 'order',
    id: 'n2-grammar-narabekae-006',
    before: 'この神社では、毎年秋に',
    after: '祭りが行われる。',
    segments: ['五日間', 'に', 'わたって', '伝統的な'],
    starIndex: 2,
    explanation:
      '完整句：「この神社では、毎年秋に五日間にわたって伝統的な祭りが行われる。」「〜にわたって」（歷經…、涵蓋…範圍）前接表期間的名詞，故「五日間＋に＋わたって」三段順序固定；「伝統的な」是な形容詞連體形，後面必須緊接名詞，只能貼著句尾的「祭り」放在最後，整句排法唯一。',
    explanationEn:
      'Complete sentence: 「この神社では、毎年秋に五日間にわたって伝統的な祭りが行われる。」 「にわたって」 ("spanning / throughout") takes a duration noun in front, which fixes the sequence 「五日間→に→わたって」. The na-adjective attributive 「伝統的な」 must be followed immediately by a noun, so it can only go last, attached to the sentence-final 「祭り」 — the whole arrangement is unique.',
  },
  {
    kind: 'order',
    id: 'n2-grammar-narabekae-007',
    before: '本サービスのご利用',
    after: 'をお読みください。',
    segments: ['に際して', 'は', '利用規約と', '注意事項'],
    starIndex: 0,
    explanation:
      '完整句：「本サービスのご利用に際しては、利用規約と注意事項をお読みください。」「〜に際して」（在…之際）前接名詞，必須緊跟「ご利用」，再接「は」構成「に際しては」；並列助詞「と」後必須緊接名詞，故「利用規約と」只能放在「注意事項」前。若把「は」移到別處會出現「とは」「はを」等錯誤接續，語序唯一。',
    explanationEn:
      'Complete sentence: 「本サービスのご利用に際しては、利用規約と注意事項をお読みください。」 「に際して」 ("on the occasion of") follows a noun, so it must attach directly to 「ご利用」, and then takes 「は」 to form 「に際しては」. The listing particle 「と」 must be followed by a noun, so 「利用規約と」 can only sit right before 「注意事項」. Moving 「は」 anywhere else would produce broken sequences like 「とは」 or 「はを」, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n2-grammar-narabekae-008',
    before: '少し熱がある',
    after: 'にはいかない。',
    segments: ['からといって', '大事な会議を', '休む', 'わけ'],
    starIndex: 0,
    explanation:
      '完整句：「少し熱があるからといって、大事な会議を休むわけにはいかない。」「〜からといって」（雖說…但也不能因此就…）直接接在「ある」後；「〜わけにはいかない」（不能…）前須接連體形，故「休む→わけ」順序固定，「わけ」再緊貼句尾「にはいかない」。「大事な会議を」若放「からといって」前會變成「を＋からといって」的錯誤接續，語序唯一。',
    explanationEn:
      'Complete sentence: 「少し熱があるからといって、大事な会議を休むわけにはいかない。」 「からといって」 ("just because...") attaches directly after 「ある」; 「わけにはいかない」 ("cannot very well...") requires the plain attributive form before it, fixing 「休む→わけ」, and 「わけ」 must hug the sentence-final 「にはいかない」. Putting 「大事な会議を」 before 「からといって」 would create the ungrammatical 「を＋からといって」, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n2-grammar-narabekae-009',
    before: '兄は、医者になるか研究者になるか',
    after: '道を選んだ。',
    segments: ['悩み', '抜いた', '末に', '研究者の'],
    starIndex: 2,
    explanation:
      '完整句：「兄は、医者になるか研究者になるか悩み抜いた末に、研究者の道を選んだ。」複合動詞「〜抜く」（…到底）接連用形，「悩み」必須緊貼「抜いた」；「〜た末に」（經過…之後終於）接た形，故「末に」緊跟「抜いた」；「研究者の」的「の」後必須直接接名詞「道」，只能放最後，四段語序唯一。',
    explanationEn:
      'Complete sentence: 「兄は、医者になるか研究者になるか悩み抜いた末に、研究者の道を選んだ。」 The compound verb 「〜抜く」 ("do... through to the very end") attaches to the masu-stem, so 「悩み」 must sit right before 「抜いた」; 「た末に」 ("after finally...") attaches to the ta-form, so 「末に」 follows 「抜いた」. The 「の」 of 「研究者の」 must connect directly to the noun 「道」, so it can only come last — the four-part order is unique.',
  },
  {
    kind: 'order',
    id: 'n2-grammar-narabekae-010',
    before: '少子化の影響で、',
    after: 'と言われている。',
    segments: ['地方の', '小学校の', '数は', '減りつつある'],
    starIndex: 3,
    explanation:
      '完整句：「少子化の影響で、地方の小学校の数は減りつつあると言われている。」「〜つつある」（正在逐漸…）接連用形，表變化持續進行，「減りつつある」後緊接引用的「と」，只能放最後；「地方の→小学校の→数は」是の格連鎖：「小學校的數量」才通順，若換成「小学校の地方の数」則語意不通，語序唯一。',
    explanationEn:
      'Complete sentence: 「少子化の影響で、地方の小学校の数は減りつつあると言われている。」 「つつある」 ("in the process of...") attaches to the masu-stem to express an ongoing change, and 「減りつつある」 must come last so it can link to the quotative 「と」. The genitive chain 「地方の→小学校の→数は」 is the only reading that makes sense ("the number of elementary schools in rural areas"); a rearrangement like 「小学校の地方の数」 is nonsense, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n2-grammar-narabekae-011',
    before: '体によくないと',
    after: 'なかなかやめられない。',
    segments: ['知り', 'つつ', 'も', '夜ふかしが'],
    starIndex: 1,
    explanation:
      '完整句：「体によくないと知りつつも、夜ふかしがなかなかやめられない。」「〜つつも」（明知…卻）接動詞連用形，故「知り→つつ→も」三段接續固定；開頭引用助詞「と」後必須接動詞「知り」，若接「夜ふかしが」則「熬夜知道」語意不通；「夜ふかしが」是「やめられない」的對象，只能放最後，語序唯一。',
    explanationEn:
      'Complete sentence: 「体によくないと知りつつも、夜ふかしがなかなかやめられない。」 「つつも」 ("even while knowing...") attaches to the masu-stem, fixing the sequence 「知り→つつ→も」. The opening quotative 「と」 must be followed by the verb 「知り」; attaching 「夜ふかしが」 there instead would make no sense. 「夜ふかしが」 is what 「やめられない」 refers to, so it can only come last — the order is unique.',
  },
  {
    kind: 'order',
    id: 'n2-grammar-narabekae-012',
    before: '彼は漢字',
    after: 'も書けない。',
    segments: ['どころか', '自分の', '名前', 'さえ'],
    starIndex: 0,
    explanation:
      '完整句：「彼は漢字どころか自分の名前さえも書けない。」「〜どころか」（別說…連…都）直接接名詞，必須緊跟「漢字」；「自分の」的「の」後只能接名詞「名前」；極端例的「さえ」（連…都）接在「名前」後，再與句尾「も書けない」呼應。若把「さえ」放「漢字」後則「さえどころか」接續錯誤，語序唯一。',
    explanationEn:
      'Complete sentence: 「彼は漢字どころか自分の名前さえも書けない。」 「どころか」 ("let alone...; far from...") attaches directly to a noun, so it must follow 「漢字」; the 「の」 of 「自分の」 can only be followed by the noun 「名前」; the extreme-example particle 「さえ」 ("even") attaches after 「名前」 and pairs with the sentence-final 「も書けない」. Placing 「さえ」 after 「漢字」 would give the broken sequence 「さえどころか」, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n2-grammar-narabekae-013',
    before: 'こうした健康器具は、実際に',
    after: 'かどうか分からない。',
    segments: ['使ってみ', 'ないことには', '自分に', '合う'],
    starIndex: 1,
    explanation:
      '完整句：「こうした健康器具は、実際に使ってみないことには、自分に合うかどうか分からない。」「〜ないことには」（不…的話就無法…）的「ない」接未然形，必須緊跟「使ってみ」；「自分に」的「に」後接動詞「合う」（適合），「合う」再連句尾「かどうか」。若把「合う」放「ないことには」前，「合うない」活用錯誤，語序唯一。',
    explanationEn:
      'Complete sentence: 「こうした健康器具は、実際に使ってみないことには、自分に合うかどうか分からない。」 In 「ないことには」 ("unless you..."), the 「ない」 attaches to the verb stem, so it must directly follow 「使ってみ」; the 「に」 of 「自分に」 is followed by the verb 「合う」 ("suit"), which then links to the sentence-final 「かどうか」. Putting 「合う」 before 「ないことには」 would produce the impossible conjugation 「合うない」, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n2-grammar-narabekae-014',
    before: '新製品の',
    after: '記者発表会が開かれた。',
    segments: ['発売', 'に', '先立って', '都内のホテルで'],
    starIndex: 1,
    explanation:
      '完整句：「新製品の発売に先立って、都内のホテルで記者発表会が開かれた。」「〜に先立って」（在…之前先…）前接名詞，故「発売→に→先立って」三段固定；開頭「新製品の」的「の」後必須緊接名詞「発売」；「都内のホテルで」表「開かれた」的地點，只能放在後半句、緊接「記者発表会」前，語序唯一。',
    explanationEn:
      'Complete sentence: 「新製品の発売に先立って、都内のホテルで記者発表会が開かれた。」 「に先立って」 ("prior to...") follows a noun, which fixes the sequence 「発売→に→先立って」; the 「の」 of the opening 「新製品の」 must connect directly to the noun 「発売」. 「都内のホテルで」 marks the location of 「開かれた」, so it belongs in the second half of the sentence, right before 「記者発表会」 — the order is unique.',
  },
  {
    kind: 'order',
    id: 'n2-grammar-narabekae-015',
    before: 'その歌手は、',
    after: 'ファンに結婚を報告した。',
    segments: ['自身の', 'SNS', 'を通じて', '長年応援してくれた'],
    starIndex: 1,
    explanation:
      '完整句：「その歌手は、自身のSNSを通じて、長年応援してくれたファンに結婚を報告した。」「〜を通じて」（透過…）前接名詞，必須緊跟「SNS」；「自身の」的「の」後只能接名詞「SNS」，若接「長年応援してくれた」則變成「長年支持的SNS」語意不通；「長年応援してくれた」是連體修飾句，必須緊貼被修飾的「ファン」放最後，語序唯一。',
    explanationEn:
      'Complete sentence: 「その歌手は、自身のSNSを通じて、長年応援してくれたファンに結婚を報告した。」 「を通じて」 ("through...") follows a noun, so it must attach to 「SNS」; the 「の」 of 「自身の」 can only be followed by the noun 「SNS」 — attaching it to 「長年応援してくれた」 would absurdly mean "the SNS that supported her for years." The relative clause 「長年応援してくれた」 must sit directly before the noun it modifies, 「ファン」, so it goes last — the order is unique.',
  },
  {
    kind: 'order',
    id: 'n2-grammar-narabekae-016',
    before: '誠に申し訳ございませんが、その',
    after: 'かねます。',
    segments: ['ような', 'ご要望', 'には', 'お応えし'],
    starIndex: 3,
    explanation:
      '完整句：「誠に申し訳ございませんが、そのようなご要望にはお応えしかねます。」「〜かねます」（礙難…、無法…）是商務婉拒說法，接動詞連用形，故「お応えし」必須緊貼句尾；連體詞「その」後接「ような」構成「そのような」，再修飾名詞「ご要望」；「には」接在名詞後表對象。若「ような」放他處則前面缺少可接續的語，語序唯一。',
    explanationEn:
      'Complete sentence: 「誠に申し訳ございませんが、そのようなご要望にはお応えしかねます。」 「かねます」 ("we are unable to...") is the polite business refusal and attaches to the masu-stem, so 「お応えし」 must hug the end of the sentence. The demonstrative 「その」 combines with 「ような」 to form 「そのような」, which modifies the noun 「ご要望」; 「には」 then follows the noun to mark the target. Placed anywhere else, 「ような」 would have nothing to attach to, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n2-grammar-narabekae-017',
    before: '彼は、初めての発表で緊張の',
    after: '、原稿の内容をすっかり忘れてしまった。',
    segments: ['あまり', '頭が', '真っ白に', 'なって'],
    starIndex: 0,
    explanation:
      '完整句：「彼は、初めての発表で緊張のあまり、頭が真っ白になって、原稿の内容をすっかり忘れてしまった。」「名詞＋のあまり」（因過度…而）的「あまり」必須緊跟開頭的「緊張の」；「頭が真っ白になる」（腦中一片空白）是慣用句：「真っ白に」的「に」後必須接「なって」，「頭が」是其主語只能放最前，語序唯一。',
    explanationEn:
      'Complete sentence: 「彼は、初めての発表で緊張のあまり、頭が真っ白になって、原稿の内容をすっかり忘れてしまった。」 In noun + 「のあまり」 ("out of excessive..."), 「あまり」 must directly follow the opening 「緊張の」. 「頭が真っ白になる」 ("one\'s mind goes blank") is an idiom: the 「に」 of 「真っ白に」 must be followed by 「なって」, and its subject 「頭が」 can only come first — the order is unique.',
  },
  {
    kind: 'order',
    id: 'n2-grammar-narabekae-018',
    before: '詳しい日程が',
    after: 'ご連絡いたします。',
    segments: ['決まり', '次第', 'こちら', 'から'],
    starIndex: 1,
    explanation:
      '完整句：「詳しい日程が決まり次第、こちらからご連絡いたします。」「〜次第」（一…就馬上）接動詞連用形，故「決まり」必須緊貼「次第」；開頭主格助詞「が」後只能接動詞「決まり」，若接「こちら」則「日程がこちらから決まる」語意不通；「こちら＋から」表主動聯絡的一方，緊接句尾敬語「ご連絡いたします」，語序唯一。',
    explanationEn:
      'Complete sentence: 「詳しい日程が決まり次第、こちらからご連絡いたします。」 「次第」 ("as soon as...") attaches to the masu-stem, so 「決まり」 must sit right before 「次第」. The subject particle 「が」 in the opening can only be followed by the verb 「決まり」 — following it with 「こちら」 would give the nonsensical "the schedule is decided from our side." 「こちら＋から」 marks who will make contact and leads into the humble 「ご連絡いたします」, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n2-grammar-narabekae-019',
    before: '優勝候補と言われたチームは、大方の',
    after: '一回戦で敗れてしまった。',
    segments: ['予想', 'に', '反して', 'あっさり'],
    starIndex: 0,
    explanation:
      '完整句：「優勝候補と言われたチームは、大方の予想に反して、あっさり一回戦で敗れてしまった。」「〜に反して」（與…相反）前接名詞，故「予想→に→反して」三段固定；開頭「大方の」（多數人的）的「の」後必須緊接名詞「予想」，構成慣用搭配「大方の予想」；副詞「あっさり」（輕易地）修飾「敗れて」，只能放最後，語序唯一。',
    explanationEn:
      'Complete sentence: 「優勝候補と言われたチームは、大方の予想に反して、あっさり一回戦で敗れてしまった。」 「に反して」 ("contrary to...") follows a noun, fixing the sequence 「予想→に→反して」; the 「の」 of the opening 「大方の」 ("most people\'s") must connect directly to the noun 「予想」, forming the set collocation 「大方の予想」. The adverb 「あっさり」 ("with surprising ease") modifies 「敗れて」 and can only come last — the order is unique.',
  },
  {
    kind: 'order',
    id: 'n2-grammar-narabekae-020',
    before: '都市部の',
    after: '一方だ。',
    segments: ['家賃は', 'ここ数年', '上がり', '続ける'],
    starIndex: 3,
    explanation:
      '完整句：「都市部の家賃はここ数年上がり続ける一方だ。」「〜一方だ」（不斷地…、越來越…）表變化朝單一方向持續，前接動詞連體形，故「続ける」必須緊貼句尾；複合動詞「上がり続ける」的連用形「上がり」不可與「続ける」分開；開頭「都市部の」的「の」後只能接名詞「家賃」，時間詞「ここ数年」放主語後、動詞前，語序唯一。',
    explanationEn:
      'Complete sentence: 「都市部の家賃はここ数年上がり続ける一方だ。」 「一方だ」 ("keeps on ...-ing; more and more") marks change in a single direction and takes the plain attributive form, so 「続ける」 must hug the end of the sentence; the compound verb 「上がり続ける」 cannot be split, so the masu-stem 「上がり」 stays with 「続ける」. The 「の」 of the opening 「都市部の」 can only be followed by the noun 「家賃」, and the time expression 「ここ数年」 sits between subject and verb — the order is unique.',
  },
  {
    kind: 'order',
    id: 'n2-grammar-narabekae-021',
    before: 'このホテルは、',
    after: 'そうだ。',
    segments: ['宿泊料金に', '加えて', 'サービス料が', '別にかかる'],
    starIndex: 1,
    explanation:
      '完整句：「このホテルは、宿泊料金に加えてサービス料が別にかかるそうだ。」「〜に加えて」（除了…之外還…）前接名詞，「宿泊料金に」必須緊貼「加えて」；追加項「サービス料が」是「別にかかる」的主語，兩者相連放後半；「別にかかる」再接句尾傳聞的「そうだ」。若把「サービス料が別にかかる」放句首，句尾會變成「加えてそうだ」的錯誤接續，語序唯一。',
    explanationEn:
      'Complete sentence: 「このホテルは、宿泊料金に加えてサービス料が別にかかるそうだ。」 「に加えて」 ("in addition to...") follows a noun, so 「宿泊料金に」 must sit right before 「加えて」; the added item 「サービス料が」 is the subject of 「別にかかる」, so the two stay together in the second half, and 「別にかかる」 links to the hearsay 「そうだ」 at the end. Moving 「サービス料が別にかかる」 to the front would leave the broken ending 「加えてそうだ」, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n2-grammar-narabekae-022',
    before: '日本のアニメは、',
    after: '広く受け入れられている。',
    segments: ['アジアを', 'はじめ', '欧米の', '若者にも'],
    starIndex: 2,
    explanation:
      '完整句：「日本のアニメは、アジアをはじめ欧米の若者にも広く受け入れられている。」「〜をはじめ」（以…為首、…自不用說）舉出代表例後再擴大範圍，「アジアを」必須緊貼「はじめ」；「欧米の」的「の」後只能接名詞「若者にも」，且「にも」呼應範圍的擴大，只能放在「をはじめ」之後。若把「欧米の若者にも」放最前，舉例的先後邏輯顛倒、語意不通，語序唯一。',
    explanationEn:
      'Complete sentence: 「日本のアニメは、アジアをはじめ欧米の若者にも広く受け入れられている。」 「をはじめ」 ("starting with...; not least...") names a representative example and then widens the scope, so 「アジアを」 must hug 「はじめ」; the 「の」 of 「欧米の」 can only be followed by the noun 「若者にも」, and 「にも」 marks the widened scope, so it must come after 「をはじめ」. Putting 「欧米の若者にも」 first would reverse the example-then-extension logic and make no sense — the order is unique.',
  },
  {
    kind: 'order',
    id: 'n2-grammar-narabekae-023',
    before: 'この映画は、',
    after: 'ものだ。',
    segments: ['実際に起きた', '事件に', '基づいて', '制作された'],
    starIndex: 3,
    explanation:
      '完整句：「この映画は、実際に起きた事件に基づいて制作されたものだ。」「〜に基づいて」（根據、依據…）前接名詞，故「事件に」必須緊貼「基づいて」；「実際に起きた」是連體修飾句，後面必須緊接被修飾的名詞「事件に」；「制作された」是連體形，直接修飾句尾的「もの」，只能放最後。任何調換都會使修飾關係斷裂，語序唯一。',
    explanationEn:
      'Complete sentence: 「この映画は、実際に起きた事件に基づいて制作されたものだ。」 「に基づいて」 ("based on...") follows a noun, so 「事件に」 must sit right before 「基づいて」; the relative clause 「実際に起きた」 must be followed immediately by the noun it modifies, 「事件に」; and 「制作された」 is the attributive form modifying the sentence-final 「もの」, so it can only come last. Any swap breaks the modification chain — the order is unique.',
  },
  {
    kind: 'order',
    id: 'n2-grammar-narabekae-024',
    before: '今回の台風では、県の',
    after: '被害が出た。',
    segments: ['南部を', '中心に', '農作物に', '深刻な'],
    starIndex: 0,
    explanation:
      '完整句：「今回の台風では、県の南部を中心に農作物に深刻な被害が出た。」「〜を中心に」（以…為中心）前接名詞，開頭「県の」的「の」後必須緊接名詞「南部を」，再接「中心に」；な形容詞「深刻な」後面必須緊接名詞，只能貼著句尾的「被害」；「農作物に」表受害對象，放「中心に」與「深刻な」之間。若把「農作物に」提前接「県の」則「県的農作物」與「南部を中心に」語序斷裂，語序唯一。',
    explanationEn:
      'Complete sentence: 「今回の台風では、県の南部を中心に農作物に深刻な被害が出た。」 「を中心に」 ("centering on...") follows a noun: the 「の」 of the opening 「県の」 must connect to the noun 「南部を」, which then takes 「中心に」. The na-adjective 「深刻な」 must be followed directly by a noun, so it can only hug the sentence-final 「被害」; 「農作物に」 marks what was damaged and sits between 「中心に」 and 「深刻な」. Moving 「農作物に」 up to follow 「県の」 would break the chain — the order is unique.',
  },
  {
    kind: 'order',
    id: 'n2-grammar-narabekae-025',
    before: '工事は、',
    after: '順調に進んでいる。',
    segments: ['当初の', '計画', 'に', '沿って'],
    starIndex: 1,
    explanation:
      '完整句：「工事は、当初の計画に沿って順調に進んでいる。」「〜に沿って」（按照、沿著…）前接名詞，故「計画→に→沿って」三段接續固定；開頭「当初の」的「の」後必須緊接名詞「計画」。若把「に」或「沿って」移到「計画」前，會出現「にの」「沿って計画」等錯誤接續，四段語序唯一。',
    explanationEn:
      'Complete sentence: 「工事は、当初の計画に沿って順調に進んでいる。」 「に沿って」 ("in line with...") follows a noun, which fixes the chain 「計画→に→沿って」; the 「の」 of 「当初の」 must connect directly to the noun 「計画」. Moving 「に」 or 「沿って」 in front of 「計画」 would create broken sequences like 「にの」 or 「沿って計画」, so the four-part order is unique.',
  },
  {
    kind: 'order',
    id: 'n2-grammar-narabekae-026',
    before: '新しいごみ処理場の',
    after: '対立している。',
    segments: ['建設', 'を', 'めぐって', '住民の間で意見が'],
    starIndex: 2,
    explanation:
      '完整句：「新しいごみ処理場の建設をめぐって、住民の間で意見が対立している。」「〜をめぐって」（圍繞著…〈爭論〉）前接名詞，故「建設→を→めぐって」三段固定；開頭「ごみ処理場の」的「の」後必須緊接名詞「建設」；「住民の間で意見が」是「対立している」的主語部分，只能放最後銜接句尾。語序唯一。',
    explanationEn:
      'Complete sentence: 「新しいごみ処理場の建設をめぐって、住民の間で意見が対立している。」 「をめぐって」 ("over / concerning (a dispute)") follows a noun, fixing the chain 「建設→を→めぐって」; the 「の」 of the opening 「ごみ処理場の」 must connect directly to the noun 「建設」. The block 「住民の間で意見が」 supplies the subject of 「対立している」 and can only come last, linking to the end of the sentence — the order is unique.',
  },
  {
    kind: 'order',
    id: 'n2-grammar-narabekae-027',
    before: '兄は',
    after: '取り組んでいる。',
    segments: ['会社に', '勤める', '一方で', '週末は農業に'],
    starIndex: 3,
    explanation:
      '完整句：「兄は会社に勤める一方で、週末は農業に取り組んでいる。」「〜一方で」（一方面…另一方面…）前接動詞連體形，故「勤める」必須緊貼「一方で」；「会社に」是「勤める」的補語，只能放其前；「週末は農業に」帶出後半句，直接連句尾的「取り組んでいる」。若把「週末は農業に」放「勤める」前，會變成「在農業裡任職於公司」語意不通，語序唯一。',
    explanationEn:
      'Complete sentence: 「兄は会社に勤める一方で、週末は農業に取り組んでいる。」 「一方で」 ("while on the one hand...") takes the plain attributive form, so 「勤める」 must hug 「一方で」; 「会社に」 is the complement of 「勤める」 and can only precede it; 「週末は農業に」 opens the second half and links directly to 「取り組んでいる」. Placing 「週末は農業に」 before 「勤める」 would garble the meaning ("works for a company in farming"), so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n2-grammar-narabekae-028',
    before: '彼女は不安を',
    after: '引き受けた。',
    segments: ['感じ', 'ながらも', '初めての', '海外赴任を'],
    starIndex: 0,
    explanation:
      '完整句：「彼女は不安を感じながらも、初めての海外赴任を引き受けた。」「〜ながらも」（雖然…卻…）接動詞連用形，開頭的「不安を」是「感じ」的受詞，故「感じ」必須緊接在後、再接「ながらも」；「初めての」的「の」後必須緊接名詞「海外赴任を」，作「引き受けた」的受詞放最後。若把「初めての」放「感じ」前則「不安を初めての」接續錯誤，語序唯一。',
    explanationEn:
      'Complete sentence: 「彼女は不安を感じながらも、初めての海外赴任を引き受けた。」 「ながらも」 ("even while...") attaches to the masu-stem: the opening 「不安を」 is the object of 「感じ」, so 「感じ」 must come first, followed by 「ながらも」. The 「の」 of 「初めての」 must connect directly to the noun 「海外赴任を」, which serves as the object of 「引き受けた」 and goes last. Placing 「初めての」 right after 「不安を」 would break the connection, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n2-grammar-narabekae-029',
    before: 'この制度の見直しは、',
    after: '大きな影響を与える。',
    segments: ['企業', 'のみならず', '消費者', 'にも'],
    starIndex: 1,
    explanation:
      '完整句：「この制度の見直しは、企業のみならず消費者にも大きな影響を与える。」「〜のみならず」（不僅…連…也）前接名詞，必須緊跟「企業」；擴大範圍的「にも」接在追加項「消費者」後，與後句「大きな影響」相連。若把「消費者にも」放「企業」前，先廣後窄、遞進邏輯顛倒且「のみならず」後無承接項，語序唯一。',
    explanationEn:
      'Complete sentence: 「この制度の見直しは、企業のみならず消費者にも大きな影響を与える。」 「のみならず」 ("not only...") follows a noun, so it must attach to 「企業」; the widening 「にも」 attaches to the added item 「消費者」 and leads into 「大きな影響」. Putting 「消費者にも」 before 「企業」 would reverse the build-up and leave 「のみならず」 with nothing to introduce, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n2-grammar-narabekae-030',
    before: '彼の話し方は、',
    after: 'ものだった。',
    segments: ['説明', 'というより', '命令に', '近い'],
    starIndex: 2,
    explanation:
      '完整句：「彼の話し方は、説明というより命令に近いものだった。」「〜というより」（與其說是…不如說…）前接名詞，必須緊跟「説明」；「近い」的補語是「命令に」，故「命令に→近い」相連，「近い」再以連體形修飾句尾的「もの」。若把「命令に近い」放「というより」前，比較的方向顛倒、句尾接續也斷裂，語序唯一。',
    explanationEn:
      'Complete sentence: 「彼の話し方は、説明というより命令に近いものだった。」 「というより」 ("rather than...") follows a noun, so it must attach to 「説明」; 「近い」 takes the complement 「命令に」, fixing 「命令に→近い」, and 「近い」 then modifies the sentence-final 「もの」 attributively. Reversing the two sides of the comparison by putting 「命令に近い」 before 「というより」 would flip the meaning and break the ending, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n2-grammar-narabekae-031',
    before: '市は、新しい条例の',
    after: '説明会を開いた。',
    segments: ['施行', 'に関して', '住民', 'への'],
    starIndex: 0,
    explanation:
      '完整句：「市は、新しい条例の施行に関して、住民への説明会を開いた。」「〜に関して」（關於…）前接名詞，開頭「条例の」的「の」後接名詞「施行」，再接「に関して」；「への」前接名詞「住民」、後面必須緊接名詞，只能貼著句尾的「説明会」構成「住民への説明会」。若把「住民」放「条例の」後，「條例的居民」語意不通，語序唯一。',
    explanationEn:
      'Complete sentence: 「市は、新しい条例の施行に関して、住民への説明会を開いた。」 「に関して」 ("regarding...") follows a noun: the 「の」 of 「条例の」 connects to the noun 「施行」, which then takes 「に関して」. 「への」 needs a noun on both sides, so it follows 「住民」 and must hug the sentence-final 「説明会」, forming 「住民への説明会」 ("a briefing for residents"). Attaching 「住民」 to 「条例の」 would give the nonsensical "the ordinance\'s residents," so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n2-grammar-narabekae-032',
    before: '一人暮らしを始めてから、',
    after: 'なってしまった。',
    segments: ['食事が', '偏り', 'がち', 'に'],
    starIndex: 3,
    explanation:
      '完整句：「一人暮らしを始めてから、食事が偏りがちになってしまった。」「〜がち」（動不動就…、容易…）接動詞連用形，故「偏り」必須緊貼「がち」；「がち」是な形容詞性接尾語，變化句型「〜になる」要求「に」緊接其後、連向句尾的「なってしまった」；主語「食事が」只能放最前。若把「に」放「偏り」前則「に偏り」斷開了「がち」的接續，語序唯一。',
    explanationEn:
      'Complete sentence: 「一人暮らしを始めてから、食事が偏りがちになってしまった。」 「がち」 ("prone to...") attaches to the masu-stem, so 「偏り」 must hug 「がち」; since 「がち」 behaves like a na-adjective, the change-of-state pattern 「〜になる」 requires 「に」 right after it, linking to 「なってしまった」. The subject 「食事が」 can only come first. Putting 「に」 before 「偏り」 would cut 「がち」 off from its stem, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n2-grammar-narabekae-033',
    before: '週末の試合を前に、',
    after: 'コーチを心配させている。',
    segments: ['エースの', '選手が', '疲れ', '気味で'],
    starIndex: 1,
    explanation:
      '完整句：「週末の試合を前に、エースの選手が疲れ気味でコーチを心配させている。」「〜気味」（有點…的傾向）接動詞連用形，故「疲れ」必須緊貼「気味で」；「エースの」的「の」後只能接名詞「選手が」，構成主語放最前。若把「疲れ気味で」放「選手が」前，前面缺少主語、「感到疲累的是誰」不明，句子不通，語序唯一。',
    explanationEn:
      'Complete sentence: 「週末の試合を前に、エースの選手が疲れ気味でコーチを心配させている。」 「気味」 ("a touch of...; slightly...") attaches to the masu-stem, so 「疲れ」 must hug 「気味で」; the 「の」 of 「エースの」 can only be followed by the noun 「選手が」, forming the subject that goes first. If 「疲れ気味で」 came before 「選手が」, the clause would have no subject and it would be unclear who is fatigued — the order is unique.',
  },
  {
    kind: 'order',
    id: 'n2-grammar-narabekae-034',
    before: '母への手紙に、',
    after: '一言書き添えた。',
    segments: ['日ごろ', 'の', '感謝', 'を込めて'],
    starIndex: 2,
    explanation:
      '完整句：「母への手紙に、日ごろの感謝を込めて一言書き添えた。」「〜を込めて」（傾注…〈心意〉）前接名詞，必須緊跟「感謝」；「の」前接名詞「日ごろ」（平日）、後接名詞「感謝」，構成「日ごろの感謝」（平日的感謝）。若把「感謝」放「日ごろ」前會變成「感謝の日ごろを込めて」，「傾注平日」語意不通，語序唯一。',
    explanationEn:
      'Complete sentence: 「母への手紙に、日ごろの感謝を込めて一言書き添えた。」 「を込めて」 ("putting... into it") follows a noun, so it must attach to 「感謝」; the genitive 「の」 connects the noun 「日ごろ」 ("everyday") to the noun 「感謝」, forming 「日ごろの感謝」 ("everyday gratitude"). Swapping them would give 「感謝の日ごろを込めて」 — "putting in the everyday of gratitude," which is nonsense — so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n2-grammar-narabekae-035',
    before: '授賞式は、来月十日に市内の',
    after: 'と発表された。',
    segments: ['文化ホール', 'において', '行われる', '予定だ'],
    starIndex: 0,
    explanation:
      '完整句：「授賞式は、来月十日に市内の文化ホールにおいて行われる予定だと発表された。」「〜において」（在…〈場所〉）是書面語，前接名詞，開頭「市内の」的「の」後必須緊接名詞「文化ホール」，再接「において」；「行われる」以連體形修飾「予定だ」，「予定だ」再接句尾引用的「と」。若把「予定だ」放「行われる」前則「予定だ行われる」接續錯誤，語序唯一。',
    explanationEn:
      'Complete sentence: 「授賞式は、来月十日に市内の文化ホールにおいて行われる予定だと発表された。」 「において」 ("at / in," formal) follows a noun: the 「の」 of 「市内の」 must connect to the noun 「文化ホール」, which then takes 「において」. 「行われる」 modifies 「予定だ」 attributively, and 「予定だ」 links to the quotative 「と」 at the end. Putting 「予定だ」 before 「行われる」 would give the broken 「予定だ行われる」, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n2-grammar-narabekae-036',
    before: 'この国では、経済の',
    after: '大きく変化した。',
    segments: ['発展', 'とともに', '人々の', '生活様式も'],
    starIndex: 1,
    explanation:
      '完整句：「この国では、経済の発展とともに人々の生活様式も大きく変化した。」「〜とともに」（隨著…）前接名詞，開頭「経済の」的「の」後必須緊接名詞「発展」，再接「とともに」；「人々の」的「の」後只能接名詞「生活様式も」，「も」呼應「連生活方式也一起變化」。若把「生活様式も」接在「経済の」後，「經濟的生活方式」語意不通，語序唯一。',
    explanationEn:
      'Complete sentence: 「この国では、経済の発展とともに人々の生活様式も大きく変化した。」 「とともに」 ("along with...") follows a noun: the 「の」 of the opening 「経済の」 must connect to the noun 「発展」, which then takes 「とともに」; the 「の」 of 「人々の」 can only be followed by the noun 「生活様式も」, whose 「も」 signals that lifestyles, too, changed. Attaching 「生活様式も」 to 「経済の」 would yield the nonsensical "the economy\'s lifestyle," so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n2-grammar-narabekae-037',
    before: '終電にはまだ時間があるから、',
    after: 'よ。',
    segments: ['そんなに', '急ぐ', 'こと', 'はない'],
    starIndex: 3,
    explanation:
      '完整句：「終電にはまだ時間があるから、そんなに急ぐことはないよ。」「〜ことはない」（用不著…、沒必要…）前接動詞連體形，故「急ぐ→こと→はない」三段接續固定；程度副詞「そんなに」（那麼地）修飾「急ぐ」，只能放最前。若把「そんなに」插進「こと」與「はない」之間，會拆散慣用句型的接續，語序唯一。',
    explanationEn:
      'Complete sentence: 「終電にはまだ時間があるから、そんなに急ぐことはないよ。」 「ことはない」 ("there is no need to...") takes the plain attributive form, fixing the chain 「急ぐ→こと→はない」; the degree adverb 「そんなに」 ("that much") modifies 「急ぐ」 and can only come first. Inserting 「そんなに」 between 「こと」 and 「はない」 would tear the idiom apart, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n2-grammar-narabekae-038',
    before: 'ひどい渋滞に',
    after: '遅れてしまった。',
    segments: ['巻き込まれた', 'ものだから', '約束の', '時間に'],
    starIndex: 0,
    explanation:
      '完整句：「ひどい渋滞に巻き込まれたものだから、約束の時間に遅れてしまった。」「〜ものだから」（就因為…〈辯解〉）接た形，開頭「渋滞に」後必須先接被動的「巻き込まれた」（被捲入），再接「ものだから」；「約束の」的「の」後只能接名詞「時間に」，「時間に」再連句尾的「遅れてしまった」。若把「約束の時間に」放「巻き込まれた」前則「渋滞に約束の」接續斷裂，語序唯一。',
    explanationEn:
      'Complete sentence: 「ひどい渋滞に巻き込まれたものだから、約束の時間に遅れてしまった。」 「ものだから」 ("because...," excusing oneself) attaches to the ta-form: the opening 「渋滞に」 must first take the passive 「巻き込まれた」 ("got caught in"), which then takes 「ものだから」. The 「の」 of 「約束の」 can only be followed by the noun 「時間に」, which links to 「遅れてしまった」. Placing 「約束の時間に」 before 「巻き込まれた」 would break the connection after 「渋滞に」, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n2-grammar-narabekae-039',
    before: 'この地域は、',
    after: '春には多くの観光客が訪れる。',
    segments: ['桜の', '名所', 'である', 'ことから'],
    starIndex: 2,
    explanation:
      '完整句：「この地域は、桜の名所であることから、春には多くの観光客が訪れる。」「〜ことから」（由於…〈客觀理由〉）前接連體形，故「である→ことから」相連；「桜の」的「の」後必須緊接名詞「名所」，「名所」再接斷定的「である」。四段構成「名詞句＋である＋ことから」的固定接續鏈，任何調換都會斷裂，語序唯一。',
    explanationEn:
      'Complete sentence: 「この地域は、桜の名所であることから、春には多くの観光客が訪れる。」 「ことから」 ("owing to the fact that...") takes the attributive form, so 「である」 must hug 「ことから」; the 「の」 of 「桜の」 must connect directly to the noun 「名所」, which then takes the copula 「である」. The four segments form the fixed chain "noun phrase + である + ことから," and any swap breaks it — the order is unique.',
  },
  {
    kind: 'order',
    id: 'n2-grammar-narabekae-040',
    before: 'その選手は、地元ファンの',
    after: '収めた。',
    segments: ['期待に', '応えて', '見事な', '逆転勝利を'],
    starIndex: 3,
    explanation:
      '完整句：「その選手は、地元ファンの期待に応えて、見事な逆転勝利を収めた。」「〜に応えて」（回應〈期待、要求〉）前接名詞，開頭「ファンの」的「の」後接「期待に」、再緊接「応えて」；な形容詞「見事な」後面必須緊接名詞「逆転勝利を」，作「収めた」的受詞放最後。若把「見事な」放「期待に」前，「見事な期待」搭配不通，語序唯一。',
    explanationEn:
      'Complete sentence: 「その選手は、地元ファンの期待に応えて、見事な逆転勝利を収めた。」 「に応えて」 ("in response to (expectations)") follows a noun: the 「の」 of 「ファンの」 connects to 「期待に」, which must hug 「応えて」. The na-adjective 「見事な」 must be followed directly by the noun 「逆転勝利を」, the object of 「収めた」, so the pair goes last. Placing 「見事な」 before 「期待に」 would give the impossible collocation 「見事な期待」 ("splendid expectations"), so the order is unique.',
  },
]
