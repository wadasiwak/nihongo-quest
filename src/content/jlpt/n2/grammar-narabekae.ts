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
]
