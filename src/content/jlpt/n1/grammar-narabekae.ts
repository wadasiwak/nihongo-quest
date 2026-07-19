import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-001',
    before: '彼女は今にも',
    after: 'まま、黙って立っていた。',
    segments: ['泣き出さ', 'んばかりの', '表情を', '浮かべた'],
    starIndex: 1,
    explanation:
      '完整句：「彼女は今にも泣き出さんばかりの表情を浮かべたまま、黙って立っていた。」「〜んばかりだ」（幾乎要…似的）接動詞未然形，故「泣き出さ」後必須緊接「んばかりの」；「んばかりの」是連體形，後面只能接名詞「表情を」；「表情を」是「浮かべた」的受詞。副詞「今にも」與「んばかり」呼應，四段接續環環相扣，語序唯一。',
    explanationEn:
      'Complete sentence: 「彼女は今にも泣き出さんばかりの表情を浮かべたまま、黙って立っていた。」 「〜んばかりだ」 (as if about to...) attaches to the verb\'s nai-stem, so 「泣き出さ」 must be followed immediately by 「んばかりの」; as an attributive form, 「んばかりの」 can only precede a noun, here 「表情を」, which in turn is the object of 「浮かべた」. The adverb 「今にも」 pairs with 「んばかり」, so all four segments interlock in a single chain — no other order works.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-002',
    before: '誠に勝手ながら、当店は今月末',
    after: 'ことになりました。',
    segments: ['をもって', '三十年の', '歴史に', '幕を下ろす'],
    starIndex: 0,
    explanation:
      '完整句：「誠に勝手ながら、当店は今月末をもって三十年の歴史に幕を下ろすことになりました。」「〜をもって」（以…為期，書面語）表期限，必須緊接名詞「今月末」；「三十年の」的「の」後只能接名詞「歴史」，「歴史に」再與慣用語「幕を下ろす」（落幕）相連，連體形接「ことに」。若把「三十年の」放句首會與「今月末」名詞相撞，明確不通。',
    explanationEn:
      'Complete sentence: 「誠に勝手ながら、当店は今月末をもって三十年の歴史に幕を下ろすことになりました。」 「〜をもって」 (as of..., formal) marks a cutoff point and must directly follow the noun 「今月末」; the 「の」 of 「三十年の」 can only take the noun 「歴史」, and 「歴史に」 links to the idiom 「幕を下ろす」 (to bring down the curtain), whose attributive form precedes 「ことに」. Placing 「三十年の」 at the start would collide with the noun 「今月末」, which is clearly wrong.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-003',
    before: 'この宿では、',
    after: 'が食卓に並ぶ。',
    segments: ['港町', 'ならではの', '獲れたての', '海の幸'],
    starIndex: 2,
    explanation:
      '完整句：「この宿では、港町ならではの獲れたての海の幸が食卓に並ぶ。」「〜ならでは」（唯有…才有的）必須接在名詞「港町」後，再以「の」修飾後面的名詞；「獲れたての」（剛捕撈上岸的）語意上只能修飾「海の幸」——若排成「獲れたての港町」變成「剛捕撈的港町」，語意明顯不通，故語序唯一。',
    explanationEn:
      'Complete sentence: 「この宿では、港町ならではの獲れたての海の幸が食卓に並ぶ。」 「〜ならでは」 (found only in..., unique to...) must attach to the noun 「港町」 and then modify the following noun phrase with 「の」; 「獲れたての」 (freshly caught) can semantically modify only 「海の幸」 — an arrangement like 「獲れたての港町」 would mean a "freshly caught port town," which is nonsense, so the order is fixed.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-004',
    before: '彼は物事を',
    after: 'ので、あまり思い詰めない方がいい。',
    segments: ['深刻に', '考えすぎる', 'きらいが', 'ある'],
    starIndex: 2,
    explanation:
      '完整句：「彼は物事を深刻に考えすぎるきらいがあるので、あまり思い詰めない方がいい。」「〜きらいがある」（有…的傾向，多指不好的傾向）前須接連體形，故「きらいが」必須緊跟「考えすぎる」，「ある」再接其後；副詞「深刻に」只能修飾動詞「考えすぎる」，放在其他位置皆不成句，語序唯一。',
    explanationEn:
      'Complete sentence: 「彼は物事を深刻に考えすぎるきらいがあるので、あまり思い詰めない方がいい。」 「〜きらいがある」 (to have a tendency to..., usually an undesirable one) requires the plain attributive form before it, so 「きらいが」 must directly follow 「考えすぎる」, with 「ある」 coming right after; the adverb 「深刻に」 can only modify the verb 「考えすぎる」. Any other placement leaves the adverb with nothing to modify, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-005',
    before: '今年は娘の大学合格や息子の結婚など、',
    after: '一年だった。',
    segments: ['わが家に', 'とって', 'いいこと', 'ずくめの'],
    starIndex: 3,
    explanation:
      '完整句：「今年は娘の大学合格や息子の結婚など、わが家にとっていいことずくめの一年だった。」「〜ずくめ」（清一色都是…）接在名詞「いいこと」後，再以「の」修飾「一年」；「にとって」（對…而言）的「とって」必須緊跟助詞「に」，故「わが家に→とって」固定。若把「いいこと」放句首，後面的「ずくめの」便無所依附，明確錯誤。',
    explanationEn:
      'Complete sentence: 「今年は娘の大学合格や息子の結婚など、わが家にとっていいことずくめの一年だった。」 「〜ずくめ」 (nothing but...) attaches to the noun 「いいこと」 and then modifies 「一年」 via 「の」; in 「にとって」 (for..., from the standpoint of...), 「とって」 must directly follow the particle 「に」, fixing the sequence 「わが家に→とって」. If 「いいこと」 were placed at the head, the later 「ずくめの」 would have nothing to attach to, so that arrangement is clearly wrong.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-006',
    before: '経営環境の悪化により、同社は',
    after: 'を余儀なくされた。',
    segments: ['創業以来', '守り続けて', 'きた', '本社ビルの売却'],
    starIndex: 1,
    explanation:
      '完整句：「経営環境の悪化により、同社は創業以来守り続けてきた本社ビルの売却を余儀なくされた。」「〜を余儀なくされる」（被迫…，書面語）前接名詞，故「本社ビルの売却」置於句尾；「きた」須接て形「守り続けて」構成「〜てきた」，其連體形再修飾「本社ビル」；「創業以来」只能放在所修飾的「守り続けてきた」之前，語序唯一。',
    explanationEn:
      'Complete sentence: 「経営環境の悪化により、同社は創業以来守り続けてきた本社ビルの売却を余儀なくされた。」 「〜を余儀なくされる」 (to be forced to..., formal) takes a noun before it, so 「本社ビルの売却」 goes at the end; 「きた」 must follow the te-form 「守り続けて」 to form 「〜てきた」, whose attributive form then modifies 「本社ビル」; 「創業以来」 can only stand before the clause it modifies, 「守り続けてきた」. Every link is forced, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-007',
    before: 'この計画は、地域住民の',
    after: 'だろう。',
    segments: ['理解と', '協力', 'なくしては', '実現し得ない'],
    starIndex: 2,
    explanation:
      '完整句：「この計画は、地域住民の理解と協力なくしては実現し得ないだろう。」「〜なくしては」（沒有…就…）直接接名詞，且後句必須是否定，故「協力→なくしては→実現し得ない」順序固定；「理解と」的「と」後必須緊接名詞「協力」，開頭「住民の」的「の」也只能接「理解」。若把「協力」放最前，「理解と」便無處安放，語序唯一。',
    explanationEn:
      'Complete sentence: 「この計画は、地域住民の理解と協力なくしては実現し得ないだろう。」 「〜なくしては」 (without...) attaches directly to a noun and must be followed by a negative predicate, fixing the sequence 「協力→なくしては→実現し得ない」; the 「と」 of 「理解と」 must be followed by the noun 「協力」, and the opening 「住民の」 can only take 「理解」. If 「協力」 came first, 「理解と」 would have nowhere to go, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-008',
    before: 'いかに',
    after: '、法を犯すことは許されない。',
    segments: ['国家の', '存亡に', 'かかわる', '緊急事態といえども'],
    starIndex: 3,
    explanation:
      '完整句：「いかに国家の存亡にかかわる緊急事態といえども、法を犯すことは許されない。」「〜といえども」（即使…也，書面語）接名詞「緊急事態」，並與句首副詞「いかに」前後呼應；「国家の」的「の」後須接名詞「存亡」，「存亡に」再接動詞「かかわる」，其連體形修飾「緊急事態」，接續環環相扣，排法唯一。',
    explanationEn:
      'Complete sentence: 「いかに国家の存亡にかかわる緊急事態といえども、法を犯すことは許されない。」 「〜といえども」 (even if..., literary) attaches to the noun 「緊急事態」 and pairs with the sentence-initial adverb 「いかに」; the 「の」 of 「国家の」 must take the noun 「存亡」, 「存亡に」 connects to the verb 「かかわる」, and its attributive form modifies 「緊急事態」. Each link is forced by the one before it, so only one arrangement is possible.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-009',
    before: '幼い子どもがいると、部屋を',
    after: 'いくので、きりがない。',
    segments: ['片づける', 'そばから', 'おもちゃを', '散らかして'],
    starIndex: 1,
    explanation:
      '完整句：「幼い子どもがいると、部屋を片づけるそばからおもちゃを散らかしていくので、きりがない。」「〜そばから」（才剛…就又…）接動詞辭書形，只能跟在「片づける」後；「片づける」承接前面的受詞「部屋を」，若把「おもちゃを」放句首會形成雙重受詞，明確錯誤；「散らかして」以て形連接「いく」，語序唯一。',
    explanationEn:
      'Complete sentence: 「幼い子どもがいると、部屋を片づけるそばからおもちゃを散らかしていくので、きりがない。」 「〜そばから」 (no sooner do you... than...) attaches to the dictionary form, so it can only follow 「片づける」, which takes the preceding object 「部屋を」. Placing 「おもちゃを」 at the head would stack two objects in a row, which is clearly wrong; 「散らかして」 connects to 「いく」 via the te-form, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-010',
    before: '彼は家族の心配を',
    after: '、単身海外へ渡った。',
    segments: ['よそに', '長年勤めた', '会社を', '辞め'],
    starIndex: 1,
    explanation:
      '完整句：「彼は家族の心配をよそに、長年勤めた会社を辞め、単身海外へ渡った。」「〜をよそに」（無視…、不顧…）的「よそに」必須緊接「心配を」；「長年勤めた」是連體修飾，後面只能接名詞「会社を」，「辞め」為連用中止連接後句。若把「会社を」放最前會出現「心配を会社を」雙重受詞，明確不通。',
    explanationEn:
      'Complete sentence: 「彼は家族の心配をよそに、長年勤めた会社を辞め、単身海外へ渡った。」 In 「〜をよそに」 (ignoring..., in defiance of...), 「よそに」 must directly follow 「心配を」; 「長年勤めた」 is an attributive modifier that can only precede the noun 「会社を」, and 「辞め」 is the continuative form linking to the next clause. Putting 「会社を」 first would produce the ungrammatical double-object sequence 「心配を会社を」.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-011',
    before: '彼は自らの',
    after: '、あえて危険な実験に身を投じた。',
    segments: ['学説の', '正しさを', '証明せ', 'んがため'],
    starIndex: 2,
    explanation:
      '完整句：「彼は自らの学説の正しさを証明せんがため、あえて危険な実験に身を投じた。」「〜んがため」（為了…而，古風書面語）接動詞未然形，故「証明せ」後必須緊接「んがため」；開頭「自らの」接「学説の」再接「正しさを」，名詞修飾鏈環環相扣；「正しさを」是「証明する」的受詞，只能放在其前，語序唯一。',
    explanationEn:
      'Complete sentence: 「彼は自らの学説の正しさを証明せんがため、あえて危険な実験に身を投じた。」 「〜んがため」 (in order to..., archaic and literary) attaches to the verb\'s nai-stem, so 「証明せ」 must be followed directly by 「んがため」; the opening chain 「自らの→学説の→正しさを」 is fixed by the genitive particles, and 「正しさを」, being the object of 「証明する」, can only stand right before it. The order is therefore unique.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-012',
    before: '同社は、消費者の信頼を',
    after: '調査委員会を設置した。',
    segments: ['回復す', 'べく', '外部の専門家を', '交えた'],
    starIndex: 1,
    explanation:
      '完整句：「同社は、消費者の信頼を回復すべく、外部の専門家を交えた調査委員会を設置した。」「〜べく」（為了…，書面語）接動詞辭書形，する類動詞用「すべく」，故「回復す」後必須緊接「べく」；「交えた」的受詞是「外部の専門家を」，其連體形再修飾句尾的「調査委員会」。「外部の専門家を」若放句首會與「信頼を」相撞，明確錯誤。',
    explanationEn:
      'Complete sentence: 「同社は、消費者の信頼を回復すべく、外部の専門家を交えた調査委員会を設置した。」 「〜べく」 (in order to..., formal) attaches to the dictionary form, and suru-type verbs take 「すべく」, so 「回復す」 must be followed directly by 「べく」; 「交えた」 takes 「外部の専門家を」 as its object, and its attributive form then modifies the final noun 「調査委員会」. Placing 「外部の専門家を」 at the head would collide with 「信頼を」, which is clearly wrong.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-013',
    before: '普段は静かなこの通りも、',
    after: '、観光客であふれかえる。',
    segments: ['桜並木が', '見頃を', '迎える', '季節ともなると'],
    starIndex: 2,
    explanation:
      '完整句：「普段は静かなこの通りも、桜並木が見頃を迎える季節ともなると、観光客であふれかえる。」「〜ともなると」（一到…、一旦到了…的地步）接名詞「季節」；「桜並木が見頃を迎える」是修飾「季節」的連體子句，主語「桜並木が」、受詞「見頃を」、動詞「迎える」順序固定，若排成「見頃を桜並木が」則語序明顯不自然，排法唯一。',
    explanationEn:
      'Complete sentence: 「普段は静かなこの通りも、桜並木が見頃を迎える季節ともなると、観光客であふれかえる。」 「〜ともなると」 (when it comes to..., once it reaches...) attaches to the noun 「季節」; 「桜並木が見頃を迎える」 is the attributive clause modifying 「季節」, with subject 「桜並木が」, object 「見頃を」, and verb 「迎える」 in fixed order. An arrangement like 「見頃を桜並木が」 is clearly unnatural word order, so the answer is unique.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-014',
    before: '事故で一人息子を失った',
    after: 'かたくない。',
    segments: ['親の', '悲しみが', 'いかばかりか', '想像に'],
    starIndex: 3,
    explanation:
      '完整句：「事故で一人息子を失った親の悲しみがいかばかりか、想像にかたくない。」「〜にかたくない」（不難…，書面語）是固定搭配，「想像に」必須緊貼句尾的「かたくない」；前面「失った」的連體形接「親の」，「の」再接「悲しみが」，「いかばかりか」（是何等地…）作疑問子句的述語收尾。若把「悲しみが」直接接「かたくない」則語意不通，語序唯一。',
    explanationEn:
      'Complete sentence: 「事故で一人息子を失った親の悲しみがいかばかりか、想像にかたくない。」 「〜にかたくない」 (it is not hard to..., formal) is a set phrase, so 「想像に」 must sit right before the final 「かたくない」; before that, the attributive 「失った」 takes 「親の」, whose 「の」 takes 「悲しみが」, and 「いかばかりか」 (how great it must be) closes the embedded question. Attaching 「悲しみが」 directly to 「かたくない」 would make no sense, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-015',
    before: '幼い命が犠牲になったという報道に、私は',
    after: 'なかった。',
    segments: ['込み上げて', 'くる', '怒り', 'を禁じ得'],
    starIndex: 3,
    explanation:
      '完整句：「幼い命が犠牲になったという報道に、私は込み上げてくる怒りを禁じ得なかった。」「〜を禁じ得ない」（不禁…、無法抑制…，書面語）接情感名詞「怒り」；「くる」須接て形「込み上げて」構成「込み上げてくる」（湧上心頭的），其連體形只能修飾名詞「怒り」，「を禁じ得」再接句尾的「なかった」，四段接續固定，語序唯一。',
    explanationEn:
      'Complete sentence: 「幼い命が犠牲になったという報道に、私は込み上げてくる怒りを禁じ得なかった。」 「〜を禁じ得ない」 (cannot suppress..., formal) takes an emotion noun, here 「怒り」; 「くる」 must follow the te-form 「込み上げて」 to form 「込み上げてくる」 (welling up), whose attributive form can only modify the noun 「怒り」, and 「を禁じ得」 then connects to the final 「なかった」. All four links are fixed, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-016',
    before: '入院直後の祖父は、',
    after: 'できない状態だった。',
    segments: ['歩くこと', 'はおろか', '一人で起き上がる', 'ことさえ'],
    starIndex: 0,
    explanation:
      '完整句：「入院直後の祖父は、歩くことはおろか一人で起き上がることさえできない状態だった。」「〜はおろか…さえ」（別說…連…都）先舉門檻較高的「歩くこと」，再以「さえ」帶出連更基本的「起き上がる」都做不到；「一人で起き上がる」是連體修飾，後面必須緊接「ことさえ」。若與「歩くこと」對調則句型的遞進順序顛倒，明確錯誤。',
    explanationEn:
      'Complete sentence: 「入院直後の祖父は、歩くことはおろか一人で起き上がることさえできない状態だった。」 In 「〜はおろか…さえ」 (let alone..., not even...), the more demanding action 「歩くこと」 comes first, and 「さえ」 then introduces the even more basic act 「起き上がる」 that he could not manage; the attributive 「一人で起き上がる」 must be followed directly by 「ことさえ」. Swapping it with 「歩くこと」 would reverse the pattern\'s escalation, which is clearly wrong.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-017',
    before: '今年の新入社員は、',
    after: 'に満ちているように見える。',
    segments: ['例年', 'にもまして', '仕事への', '意欲'],
    starIndex: 0,
    explanation:
      '完整句：「今年の新入社員は、例年にもまして仕事への意欲に満ちているように見える。」「〜にもまして」（比…更加）必須緊接名詞「例年」；「仕事への」的「の」後只能接名詞「意欲」，「意欲」再連句尾的助詞「に」。若把「仕事への」放句首，會出現「仕事への例年」這種語意不通的組合，故語序唯一。',
    explanationEn:
      'Complete sentence: 「今年の新入社員は、例年にもまして仕事への意欲に満ちているように見える。」 「〜にもまして」 (even more than...) must directly follow the noun 「例年」; the 「の」 of 「仕事への」 can only take the noun 「意欲」, which then connects to the particle 「に」 before the final predicate. Putting 「仕事への」 at the head would produce the nonsensical combination 「仕事への例年」, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-018',
    before: '税金である以上、',
    after: 'ことは許されない。',
    segments: ['たとえ', '一円', 'たりとも', '無駄にする'],
    starIndex: 0,
    explanation:
      '完整句：「税金である以上、たとえ一円たりとも無駄にすることは許されない。」「〜たりとも」（哪怕…也不）接最小數量詞「一円」，並與句首副詞「たとえ」呼應構成「たとえ一円たりとも」；「無駄にする」是連體形，後面必須緊接形式名詞「こと」，只能放在最後。若把「たとえ」插入「一円」之後則呼應關係斷裂，明確錯誤。',
    explanationEn:
      'Complete sentence: 「税金である以上、たとえ一円たりとも無駄にすることは許されない。」 「〜たりとも」 (not even...) attaches to a minimal quantity, 「一円」, and pairs with the sentence-initial adverb 「たとえ」 to form 「たとえ一円たりとも」; 「無駄にする」 is attributive and must directly precede the formal noun 「こと」, so it goes last. Inserting 「たとえ」 after 「一円」 would break the adverb\'s pairing with 「たりとも」, which is clearly wrong.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-019',
    before: 'ネットで患者の情報を漏らすなど、',
    after: '行為だ。',
    segments: ['医師と', 'して', 'ある', 'まじき'],
    starIndex: 0,
    explanation:
      '完整句：「ネットで患者の情報を漏らすなど、医師としてあるまじき行為だ。」「〜まじき」（不應有的…，古風書面語）接動詞辭書形「ある」，其後必須接名詞「行為」；「として」（作為…）的「して」必須緊跟助詞「と」，故「医師と→して」固定，「ある」只能夾在「して」與「まじき」之間，四段順序環環相扣，唯一。',
    explanationEn:
      'Complete sentence: 「ネットで患者の情報を漏らすなど、医師としてあるまじき行為だ。」 「〜まじき」 (unbecoming, that should not exist; archaic and literary) attaches to the dictionary form 「ある」 and must be followed by a noun, here 「行為」; in 「として」 (in the capacity of...), 「して」 must directly follow the particle 「と」, fixing 「医師と→して」, so 「ある」 can only sit between 「して」 and 「まじき」. The four segments interlock in exactly one order.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-020',
    before: '素直に謝れば',
    after: '、彼は言い訳ばかりしている。',
    segments: ['許して', 'もらえた', 'ものを', '謝るどころか'],
    starIndex: 3,
    explanation:
      '完整句：「素直に謝れば許してもらえたものを、謝るどころか、彼は言い訳ばかりしている。」「〜ものを」（明明…卻，帶惋惜責備語氣）接在た形述語後，故「もらえた」緊接「ものを」；「もらえた」須接て形「許して」構成授受表現；「謝るどころか」（別說道歉了）承接後句的「言い訳ばかり」。若把「謝るどころか」放句首則與假定的「謝れば」相撞，明確不通。',
    explanationEn:
      'Complete sentence: 「素直に謝れば許してもらえたものを、謝るどころか、彼は言い訳ばかりしている。」 「〜ものを」 (and yet..., with a tone of regret or reproach) follows a ta-form predicate, so 「もらえた」 comes right before 「ものを」; 「もらえた」 in turn requires the te-form 「許して」 to form the benefactive; 「謝るどころか」 (far from apologizing) leads into 「言い訳ばかり」 in the following clause. Placing 「謝るどころか」 at the head would clash with the conditional 「謝れば」, which is clearly wrong.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-021',
    before: 'その歌手が',
    after: '大歓声に包まれた。',
    segments: ['ステージに姿を', '現す', 'や否や', '会場は'],
    starIndex: 2,
    explanation:
      '完整句：「その歌手がステージに姿を現すや否や、会場は大歓声に包まれた。」「〜や否や」（一…立刻就…，書面語）接動詞辭書形，必須緊跟「現す」；「ステージに姿を」是「現す」的補語，只能置於其前；「会場は」是後句主題，必須放在「や否や」之後——若放進句首「その歌手が」的從屬子句內，主題「は」夾在「が」子句中間，明確不成句。',
    explanationEn:
      'Complete sentence: 「その歌手がステージに姿を現すや否や、会場は大歓声に包まれた。」 「〜や否や」 (the moment..., literary) attaches to the dictionary form and must directly follow 「現す」; 「ステージに姿を」 is the complement of 「現す」 and can only stand before it; 「会場は」 is the topic of the main clause and must come after 「や否や」 — placing a topic marked with 「は」 inside the subordinate clause headed by 「その歌手が」 would not form a valid sentence.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-022',
    before: '彼は会議が',
    after: '部屋を出て行った。',
    segments: ['終わる', 'が早いか', '資料を', 'まとめて'],
    starIndex: 0,
    explanation:
      '完整句：「彼は会議が終わるが早いか、資料をまとめて部屋を出て行った。」「〜が早いか」（剛一…就…，書面語）接動詞辭書形，故必須緊跟「終わる」；主語「会議が」也只能接「終わる」。「まとめて」的受詞是「資料を」，順序固定——若排成「まとめて資料を」，「資料を」便找不到動詞承接（「出て行く」不能帶「資料を」），明確錯誤。',
    explanationEn:
      'Complete sentence: 「彼は会議が終わるが早いか、資料をまとめて部屋を出て行った。」 「〜が早いか」 (as soon as..., literary) attaches to the dictionary form, so it must directly follow 「終わる」, whose subject can only be 「会議が」. 「まとめて」 needs its object 「資料を」 in front of it — in the order 「まとめて資料を」, 「資料を」 would be left with no verb to take it, since 「出て行く」 cannot govern it, so that arrangement is clearly wrong.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-023',
    before: '彼女はその手紙を',
    after: '泣き出した。',
    segments: ['読み終える', 'なり', '声を', '上げて'],
    starIndex: 1,
    explanation:
      '完整句：「彼女はその手紙を読み終えるなり、声を上げて泣き出した。」「〜なり」（一…就…）接動詞辭書形，必須緊跟「読み終える」；「読み終える」承接前面的受詞「手紙を」。「上げて」需要受詞「声を」在前，構成「声を上げて」修飾「泣き出した」——若把「声を」提到「読み終える」之前，會與「手紙を」形成雙重受詞連續，明確不通。',
    explanationEn:
      'Complete sentence: 「彼女はその手紙を読み終えるなり、声を上げて泣き出した。」 「〜なり」 (as soon as...) attaches to the dictionary form and must directly follow 「読み終える」, which takes the preceding object 「手紙を」. 「上げて」 requires the object 「声を」 before it, forming 「声を上げて」 to modify 「泣き出した」 — moving 「声を」 before 「読み終える」 would stack it against 「手紙を」 as consecutive objects, which is ungrammatical.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-024',
    before: '',
    after: '体の調子が目に見えてよくなった。',
    segments: ['長年吸っていた', 'タバコを', 'やめて', 'からというもの'],
    starIndex: 3,
    explanation:
      '完整句：「長年吸っていたタバコをやめてからというもの、体の調子が目に見えてよくなった。」「〜てからというもの」（自從…以來就一直…）接動詞て形，故「からというもの」必須緊跟「やめて」；「やめて」的受詞「タバコを」置於其前；連體修飾「長年吸っていた」只能修飾名詞「タバコ」——若放到句尾變成修飾「体の調子」，語意明顯不通，語序唯一。',
    explanationEn:
      'Complete sentence: 「長年吸っていたタバコをやめてからというもの、体の調子が目に見えてよくなった。」 「〜てからというもの」 (ever since...) attaches to the te-form, so 「からというもの」 must directly follow 「やめて」; the object 「タバコを」 stands before 「やめて」; the attributive 「長年吸っていた」 can only modify the noun 「タバコ」 — placed at the end it would absurdly modify 「体の調子」 instead, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-025',
    before: 'あなたの',
    after: 'のです。',
    segments: ['将来を', '思えば', 'こそ', 'あえて厳しいことを言う'],
    starIndex: 0,
    explanation:
      '完整句：「あなたの将来を思えばこそ、あえて厳しいことを言うのです。」「〜ばこそ」（正因為…才…）由ば形加「こそ」構成，故「こそ」必須緊跟「思えば」；句首「あなたの」的「の」後只能接名詞「将来」，「将来を」再作「思う」的受詞；「あえて厳しいことを言う」是連體形，只能置於句尾接「のです」。若把「こそ」移到他處，「ばこそ」呼應斷裂，明確錯誤。',
    explanationEn:
      'Complete sentence: 「あなたの将来を思えばこそ、あえて厳しいことを言うのです。」 「〜ばこそ」 (precisely because...) is formed from the ba-form plus 「こそ」, so 「こそ」 must directly follow 「思えば」; the opening 「あなたの」 can only take the noun 「将来」, and 「将来を」 is the object of 「思う」; the attributive clause 「あえて厳しいことを言う」 must come last, before 「のです」. Moving 「こそ」 anywhere else breaks the 「ばこそ」 pairing, which is clearly wrong.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-026',
    before: '彼は日本の近代文学史を',
    after: 'である。',
    segments: ['語る上で', '欠く', 'べからざる', '存在'],
    starIndex: 1,
    explanation:
      '完整句：「彼は日本の近代文学史を語る上で欠くべからざる存在である。」「〜べからざる」（不可…的，古風書面語）接動詞辭書形且為連體形，故前接「欠く」、後必須緊接名詞「存在」；「文学史を」的動詞是「語る」，故「語る上で」（在談論…時）只能放句首承接。若把「語る上で」插到「存在」與「である」之間則完全不成句，語序唯一。',
    explanationEn:
      'Complete sentence: 「彼は日本の近代文学史を語る上で欠くべからざる存在である。」 「〜べからざる」 (that must not be..., archaic and literary) attaches to the dictionary form and is itself attributive, so it follows 「欠く」 and must be followed directly by the noun 「存在」; the verb governing 「文学史を」 is 「語る」, so 「語る上で」 (when discussing...) can only come first to pick it up. Inserting 「語る上で」 between 「存在」 and 「である」 would not form a sentence at all.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-027',
    before: '彼こそ、この難局を',
    after: 'だと確信している。',
    segments: ['安心して', '任せる', 'に足る', '人物'],
    starIndex: 2,
    explanation:
      '完整句：「彼こそ、この難局を安心して任せるに足る人物だと確信している。」「〜に足る」（足以…、值得…，書面語）接動詞辭書形，故必須緊跟「任せる」，且其後只能接名詞「人物」；「難局を」的動詞是「任せる」，副詞性的「安心して」只能修飾「任せる」，置於其前。若把「安心して」放到「人物」之後接「だと」，明確不成句。',
    explanationEn:
      'Complete sentence: 「彼こそ、この難局を安心して任せるに足る人物だと確信している。」 「〜に足る」 (worthy of..., sufficient to..., formal) attaches to the dictionary form, so it must directly follow 「任せる」 and be followed by the noun 「人物」; the verb taking 「難局を」 is 「任せる」, and the adverbial 「安心して」 can only modify 「任せる」, so it stands before it. Placing 「安心して」 after 「人物」, right before 「だと」, would clearly fail to form a sentence.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-028',
    before: '列に並ぶ人を押しのけて',
    after: '行為だ。',
    segments: ['割り込む', 'とは', '非常識', '極まりない'],
    starIndex: 3,
    explanation:
      '完整句：「列に並ぶ人を押しのけて割り込むとは、非常識極まりない行為だ。」「〜極まりない」（…至極，書面語）直接接な形容詞語幹，故必須緊跟「非常識」，其連體形再修飾句尾名詞「行為」；「とは」（居然…，表驚訝非難）接在子句「割り込む」之後。若把「非常識」放到「割り込む」前，缺少「に」無法作副詞修飾，明確錯誤，語序唯一。',
    explanationEn:
      'Complete sentence: 「列に並ぶ人を押しのけて割り込むとは、非常識極まりない行為だ。」 「〜極まりない」 (extremely..., formal) attaches directly to a na-adjective stem, so it must follow 「非常識」, and its attributive form then modifies the final noun 「行為」; 「とは」 (to think that..., expressing indignation) follows the clause 「割り込む」. Placing 「非常識」 before 「割り込む」 fails because without 「に」 it cannot function adverbially, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-029',
    before: '当店の評判は、素材のよさが',
    after: '保たれてきたものだ。',
    segments: ['長年の経験に', '裏打ちされた', '職人の腕と', '相まって'],
    starIndex: 3,
    explanation:
      '完整句：「当店の評判は、素材のよさが長年の経験に裏打ちされた職人の腕と相まって保たれてきたものだ。」「〜と相まって」（與…相結合、相輔相成，書面語）的「相まって」必須緊跟「職人の腕と」；「裏打ちされた」（有…作後盾的）需要「長年の経験に」在前，其連體形只能修飾「職人の腕」。若把「裏打ちされた」放到「相まって」之後，後面沒有名詞可修飾，明確不通。',
    explanationEn:
      'Complete sentence: 「当店の評判は、素材のよさが長年の経験に裏打ちされた職人の腕と相まって保たれてきたものだ。」 In 「〜と相まって」 (combined with..., formal), 「相まって」 must directly follow 「職人の腕と」; 「裏打ちされた」 (backed by...) requires 「長年の経験に」 before it, and its attributive form can only modify 「職人の腕」. If 「裏打ちされた」 were placed after 「相まって」, there would be no noun left for it to modify, which is clearly wrong.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-030',
    before: '救助隊は',
    after: '捜索を続けた。',
    segments: ['吹きすさぶ', '暴風雨を', 'ものともせず', '遭難者の'],
    starIndex: 0,
    explanation:
      '完整句：「救助隊は吹きすさぶ暴風雨をものともせず、遭難者の捜索を続けた。」「〜をものともせず」（不畏…、不當一回事，書面語）的「ものともせず」必須緊跟「暴風雨を」；連體形「吹きすさぶ」（呼嘯的）語意上只能修飾「暴風雨」——「吹きすさぶ遭難者」明顯不通；「遭難者の」的「の」後接的名詞是句尾的「捜索」，故只能置於最後，語序唯一。',
    explanationEn:
      'Complete sentence: 「救助隊は吹きすさぶ暴風雨をものともせず、遭難者の捜索を続けた。」 In 「〜をものともせず」 (undaunted by..., formal), 「ものともせず」 must directly follow 「暴風雨を」; the attributive 「吹きすさぶ」 (raging, howling) can semantically modify only 「暴風雨」 — 「吹きすさぶ遭難者」 (a raging victim) is nonsense; the 「の」 of 「遭難者の」 takes the sentence-final noun 「捜索」, so it must come last. The order is unique.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-031',
    before: 'その劇団は、来月の',
    after: '予定だ。',
    segments: ['東京公演を', '皮切りに', '全国十都市を', '巡る'],
    starIndex: 1,
    explanation:
      '完整句：「その劇団は、来月の東京公演を皮切りに、全国十都市を巡る予定だ。」「〜を皮切りに」（以…為開端）須接單一起點事件，故「皮切りに」緊跟「東京公演を」，且「来月の」也只能修飾「東京公演」；「巡る」（巡迴）的受詞是「全国十都市を」，其連體形再接「予定」。若排成「全国十都市を皮切りに東京公演を巡る」，起點與範圍顛倒且「巡迴一場公演」語意不通。',
    explanationEn:
      'Complete sentence: 「その劇団は、来月の東京公演を皮切りに、全国十都市を巡る予定だ。」 「〜を皮切りに」 (starting with...) takes a single opening event, so 「皮切りに」 directly follows 「東京公演を」, which is also the only noun 「来月の」 can modify; 「巡る」 (to tour) takes 「全国十都市を」 as its object, and its attributive form precedes 「予定」. The reversed order 「全国十都市を皮切りに東京公演を巡る」 swaps the starting point and the range — touring a single performance makes no sense.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-032',
    before: '当社は',
    after: '終了いたします。',
    segments: ['本日を', '限りに', 'この店舗での', '営業を'],
    starIndex: 1,
    explanation:
      '完整句：「当社は本日を限りに、この店舗での営業を終了いたします。」「〜を限りに」（以…為最後期限，書面語）前須接時間名詞，故「限りに」必須緊跟「本日を」；「この店舗での」的「の」後只能接名詞「営業」，「営業を」再作「終了いたします」的受詞。若排成「営業を限りに」，「を限りに」前不是時間詞，用法明確錯誤；「この店舗での本日」也語意不通。',
    explanationEn:
      'Complete sentence: 「当社は本日を限りに、この店舗での営業を終了いたします。」 「〜を限りに」 (as of..., marking the final day; formal) requires a time noun before it, so 「限りに」 must directly follow 「本日を」; the 「の」 of 「この店舗での」 can only take the noun 「営業」, and 「営業を」 is the object of 「終了いたします」. The order 「営業を限りに」 puts a non-time noun before 「を限りに」, a clear misuse, and 「この店舗での本日」 is likewise nonsense.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-033',
    before: '',
    after: '週に一度は連絡を寄こしてほしい。',
    segments: ['毎日', 'とは', '言わない', 'までも'],
    starIndex: 0,
    explanation:
      '完整句：「毎日とは言わないまでも、週に一度は連絡を寄こしてほしい。」「〜ないまでも」（即使不到…的程度，至少…）的「までも」必須緊跟否定形「言わない」；引用助詞「とは」前接引用內容「毎日」、後接「言う」，故「毎日→とは→言わない→までも」四段環環相扣。若把「言わない」放句首，「とは」便失去引用對象，明確不成句，語序唯一。',
    explanationEn:
      'Complete sentence: 「毎日とは言わないまでも、週に一度は連絡を寄こしてほしい。」 In 「〜ないまでも」 (even if not to the extent of...), 「までも」 must directly follow the negative 「言わない」; the quotative 「とは」 takes the quoted content 「毎日」 before it and the verb 「言う」 after it, locking the chain 「毎日→とは→言わない→までも」. If 「言わない」 came first, 「とは」 would lose its quoted content and the sentence would fall apart, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-034',
    before: 'その伝記は、作家の',
    after: '丹念に描いている。',
    segments: ['生い立ちから', '晩年の', '暮らしぶりに', '至るまで'],
    starIndex: 3,
    explanation:
      '完整句：「その伝記は、作家の生い立ちから晩年の暮らしぶりに至るまで、丹念に描いている。」「〜から〜に至るまで」（從…直到…，強調範圍之廣）順序固定：「生い立ちから」在前，「至るまで」必須緊跟「暮らしぶりに」；「晩年の」語意上只能修飾「暮らしぶり」——「晩年の生い立ち」（晚年的幼年經歷）自相矛盾，明顯錯誤，故語序唯一。',
    explanationEn:
      'Complete sentence: 「その伝記は、作家の生い立ちから晩年の暮らしぶりに至るまで、丹念に描いている。」 The pattern 「〜から〜に至るまで」 (all the way from... up to..., stressing breadth of coverage) fixes the order: 「生い立ちから」 comes first, and 「至るまで」 must directly follow 「暮らしぶりに」; 「晩年の」 can semantically modify only 「暮らしぶり」 — 「晩年の生い立ち」 (the childhood of one\'s later years) is self-contradictory and clearly wrong, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-035',
    before: '彼に',
    after: '知れ渡ってしまう。',
    segments: ['秘密を', '話した', 'が最後', '翌日には社内中に'],
    starIndex: 2,
    explanation:
      '完整句：「彼に秘密を話したが最後、翌日には社内中に知れ渡ってしまう。」「〜たが最後」（一旦…就完了、後果不可收拾）接動詞た形，故「が最後」必須緊跟「話した」；「話した」承接前面的「彼に」與受詞「秘密を」；「翌日には社内中に」修飾句尾的「知れ渡って」，只能置於最後。若把「翌日には社内中に」插到「秘密を」前，助詞連續堆疊、語意混亂，明確不通。',
    explanationEn:
      'Complete sentence: 「彼に秘密を話したが最後、翌日には社内中に知れ渡ってしまう。」 「〜たが最後」 (once you..., there is no undoing it) attaches to the ta-form, so 「が最後」 must directly follow 「話した」, which picks up the preceding 「彼に」 and the object 「秘密を」; 「翌日には社内中に」 modifies the final 「知れ渡って」 and can only come last. Inserting 「翌日には社内中に」 before 「秘密を」 would pile up particles and garble the meaning, which is clearly wrong.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-036',
    before: 'この旅館は、',
    after: '定評がある。',
    segments: ['眺めのよさ', 'もさることながら', '心のこもった', 'もてなしに'],
    starIndex: 1,
    explanation:
      '完整句：「この旅館は、眺めのよさもさることながら、心のこもったもてなしに定評がある。」「〜もさることながら」（…自不必說，…更是）直接接名詞，故必須緊跟「眺めのよさ」；連體修飾「心のこもった」語意上只能修飾「もてなし」——「心のこもった眺め」明顯不通；「もてなしに」再連句尾的「定評がある」。兩組固定搭配的先後由句型「A も…ながら B に」決定，語序唯一。',
    explanationEn:
      'Complete sentence: 「この旅館は、眺めのよさもさることながら、心のこもったもてなしに定評がある。」 「〜もさることながら」 (... goes without saying, but ... even more so) attaches directly to a noun, so it must follow 「眺めのよさ」; the attributive 「心のこもった」 can semantically modify only 「もてなし」 — 「心のこもった眺め」 (a heartfelt view) makes no sense — and 「もてなしに」 then links to the final 「定評がある」. The pattern 「A も…ながら B に」 dictates which phrase comes first, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-037',
    before: 'この難役を',
    after: 'いないだろう。',
    segments: ['演じられる', 'のは', '彼を', 'おいてほかに'],
    starIndex: 3,
    explanation:
      '完整句：「この難役を演じられるのは、彼をおいてほかにいないだろう。」「〜をおいてほかに…ない」（除…之外再無…，書面語）的「おいてほかに」必須緊跟「彼を」，並連句尾的「いない」；「のは」接在連體形「演じられる」後將其名詞化，「難役を」是「演じられる」的受詞。若把「彼を」提到句首，會與「難役を」形成雙重受詞連續，明確不通，語序唯一。',
    explanationEn:
      'Complete sentence: 「この難役を演じられるのは、彼をおいてほかにいないだろう。」 In 「〜をおいてほかに…ない」 (no one but..., formal), 「おいてほかに」 must directly follow 「彼を」 and connect to the final 「いない」; 「のは」 follows the attributive 「演じられる」 to nominalize it, and 「難役を」 is the object of 「演じられる」. Moving 「彼を」 to the front would stack it against 「難役を」 as consecutive objects, which is ungrammatical, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-038',
    before: '彼は',
    after: 'あたっている。',
    segments: ['会社を', '経営する', 'かたわら', '母校で後進の指導に'],
    starIndex: 2,
    explanation:
      '完整句：「彼は会社を経営するかたわら、母校で後進の指導にあたっている。」「〜かたわら」（一面…一面…、本業之餘，書面語）接動詞連體形，必須緊跟「経営する」；「会社を」是「経営する」的受詞，置於其前；「母校で後進の指導に」與句尾的「あたっている」構成慣用搭配「指導にあたる」，只能放在最後。若將其插入「かたわら」之前，主業與副業的句型結構斷裂，明確不通。',
    explanationEn:
      'Complete sentence: 「彼は会社を経営するかたわら、母校で後進の指導にあたっている。」 「〜かたわら」 (while also..., alongside one\'s main occupation; formal) attaches to the attributive form and must directly follow 「経営する」, whose object 「会社を」 stands before it; 「母校で後進の指導に」 forms the set collocation 「指導にあたる」 with the final 「あたっている」, so it must come last. Inserting it before 「かたわら」 would break the main-job/side-activity structure of the pattern.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-039',
    before: '期限を過ぎた申請は、',
    after: 'ものとする。',
    segments: ['理由の', 'いかんに', 'かかわらず', '受け付けない'],
    starIndex: 0,
    explanation:
      '完整句：「期限を過ぎた申請は、理由のいかんにかかわらず受け付けないものとする。」「〜のいかんにかかわらず」（無論…如何，公文書面語）順序固定：「理由の」接「いかんに」再接「かかわらず」；「受け付けない」是連體形，必須緊接句尾的「ものとする」（規章慣用句）。若把「受け付けない」放句首，「かかわらず」之後直接接「ものとする」，明確不成句，語序唯一。',
    explanationEn:
      'Complete sentence: 「期限を過ぎた申請は、理由のいかんにかかわらず受け付けないものとする。」 The bureaucratic pattern 「〜のいかんにかかわらず」 (regardless of...) has a fixed order: 「理由の」 then 「いかんに」 then 「かかわらず」; the attributive 「受け付けない」 must directly precede the final 「ものとする」, a set phrase in regulations. If 「受け付けない」 were placed first, 「かかわらず」 would run straight into 「ものとする」, which is not a sentence, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-040',
    before: '彼の迫真の演技は、',
    after: 'だろう。',
    segments: ['観る者の', '心を', '揺さぶらず', 'にはおかない'],
    starIndex: 2,
    explanation:
      '完整句：「彼の迫真の演技は、観る者の心を揺さぶらずにはおかないだろう。」「〜ずにはおかない」（必然使人…、不…不罷休，書面語）接動詞未然形加「ず」，故「にはおかない」必須緊跟「揺さぶらず」；「観る者の」的「の」後只能接名詞「心」，「心を」再作「揺さぶる」的受詞，四段構成單一修飾鏈。若把「心を」放句首，「観る者の」便無名詞可接，明確錯誤。',
    explanationEn:
      'Complete sentence: 「彼の迫真の演技は、観る者の心を揺さぶらずにはおかないだろう。」 「〜ずにはおかない」 (is bound to..., cannot fail to...; formal) attaches to the negative stem plus 「ず」, so 「にはおかない」 must directly follow 「揺さぶらず」; the 「の」 of 「観る者の」 can only take the noun 「心」, and 「心を」 is the object of 「揺さぶる」, forming a single modification chain. Placing 「心を」 at the head would leave 「観る者の」 with no noun to attach to, which is clearly wrong.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-041',
    before: '彼女は',
    after: 'を退職した。',
    segments: ['出産', 'を機に', '長年勤めた', '銀行'],
    starIndex: 1,
    explanation:
      '完整句：「彼女は出産を機に、長年勤めた銀行を退職した。」「〜を機に」（以…為契機）接名詞，故「を機に」必須緊跟「出産」；連體修飾「長年勤めた」語意上只能修飾「銀行」——「長年勤めた出産」明顯不通；句尾「を退職した」前只能接名詞「銀行」。若把「銀行」放到前面，句尾便無名詞可接，語序唯一。',
    explanationEn:
      'Complete sentence: 「彼女は出産を機に、長年勤めた銀行を退職した。」 「〜を機に」 (taking ... as a turning point or opportunity) attaches to a noun, so 「を機に」 must directly follow 「出産」; the attributive 「長年勤めた」 can semantically modify only 「銀行」 — 「長年勤めた出産」 (a childbirth she worked at for years) is nonsense; and only the noun 「銀行」 fits before the final 「を退職した」. The order is unique.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-042',
    before: '彼はスマホゲームに',
    after: 'ようだ。',
    segments: ['かまけて', 'やるべき', '課題を', '後回しにしている'],
    starIndex: 0,
    explanation:
      '完整句：「彼はスマホゲームにかまけて、やるべき課題を後回しにしているようだ。」「〜にかまけて」（只顧著…、沉迷於…而）接助詞「に」，故「かまけて」必須緊跟句首的「スマホゲームに」；連體形「やるべき」後只能接名詞「課題を」；「後回しにしている」是「課題を」的述語，且只有它能接句尾的「ようだ」。四段接續環環相扣，語序唯一。',
    explanationEn:
      'Complete sentence: 「彼はスマホゲームにかまけて、やるべき課題を後回しにしているようだ。」 「〜にかまけて」 (being so absorbed in ... that...) attaches to the particle 「に」, so 「かまけて」 must directly follow the opening 「スマホゲームに」; the attributive 「やるべき」 can only precede the noun 「課題を」, and 「後回しにしている」 is its predicate and the only segment that can connect to the final 「ようだ」. All four links interlock, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-043',
    before: 'この町は、新幹線の駅が',
    after: 'と言われている。',
    segments: ['開業したの', 'を境に', '観光客の数が', '倍増した'],
    starIndex: 1,
    explanation:
      '完整句：「この町は、新幹線の駅が開業したのを境に、観光客の数が倍増したと言われている。」「〜を境に」（以…為分界，前後情況一變）接名詞或以「の」名詞化的子句，故「を境に」必須緊跟「開業したの」；主語「駅が」的動詞只能是「開業した」——若接「倍増した」，其餘片段便無法連接；「観光客の数が」是「倍増した」的主語，「倍増した」再接句尾的「と」。語序唯一。',
    explanationEn:
      'Complete sentence: 「この町は、新幹線の駅が開業したのを境に、観光客の数が倍増したと言われている。」 「〜を境に」 (with ... as the turning point) attaches to a noun or a clause nominalized with 「の」, so 「を境に」 must directly follow 「開業したの」; the subject 「駅が」 can only take the verb 「開業した」 — after 「駅が倍増した」 the remaining segments would not connect; 「観光客の数が」 is the subject of 「倍増した」, which then links to the final 「と」. The order is unique.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-044',
    before: '同社は他社',
    after: 'ことで知られる。',
    segments: ['に先駆けて', '音声で操作できる', '家電製品を', '売り出した'],
    starIndex: 0,
    explanation:
      '完整句：「同社は他社に先駆けて、音声で操作できる家電製品を売り出したことで知られる。」「〜に先駆けて」（比…搶先一步、率先於…）接名詞，必須緊跟句首的「他社」——其餘片段都無法直接承接光桿名詞；連體子句「音声で操作できる」只能修飾名詞「家電製品」；「売り出した」承接受詞「家電製品を」，其連體形再接句尾的「こと」，語序唯一。',
    explanationEn:
      'Complete sentence: 「同社は他社に先駆けて、音声で操作できる家電製品を売り出したことで知られる。」 「〜に先駆けて」 (ahead of..., before anyone else) attaches to a noun and must directly follow the opening 「他社」 — no other segment can attach to the bare noun; the attributive clause 「音声で操作できる」 can only modify the noun 「家電製品」; 「売り出した」 takes the object 「家電製品を」, and its attributive form is the only segment that fits before the final 「ことで」. The order is unique.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-045',
    before: '皆に協力を',
    after: 'はいかない。',
    segments: ['呼びかけた', '手前', '弱音を', '吐くわけに'],
    starIndex: 1,
    explanation:
      '完整句：「皆に協力を呼びかけた手前、弱音を吐くわけにはいかない。」「〜た手前」（既然已經…，礙於面子就不能…）接動詞た形，故「手前」必須緊跟「呼びかけた」；「呼びかけた」承接前面的受詞「協力を」；「弱音を」是「吐く」的受詞，「吐くわけに」再接句尾的「はいかない」。若把「弱音を」放句首，會與「協力を」形成雙重受詞連續，明確不通。',
    explanationEn:
      'Complete sentence: 「皆に協力を呼びかけた手前、弱音を吐くわけにはいかない。」 「〜た手前」 (having done..., one cannot back down without losing face) attaches to the ta-form, so 「手前」 must directly follow 「呼びかけた」, which picks up the preceding object 「協力を」; 「弱音を」 is the object of 「吐く」, and 「吐くわけに」 connects to the final 「はいかない」. Placing 「弱音を」 at the head would stack it against 「協力を」 as a double object, which is clearly wrong.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-046',
    before: '魚料理の',
    after: 'はいないと評判だ。',
    segments: ['腕前', 'にかけては', '彼の右に', '出る者'],
    starIndex: 2,
    explanation:
      '完整句：「魚料理の腕前にかけては、彼の右に出る者はいないと評判だ。」「〜にかけては」（論…的本領則無人能及）接名詞，故必須緊跟「腕前」，而句首「魚料理の」的「の」後也只能接「腕前」；慣用語「右に出る者はいない」（無人能出其右）順序固定：「彼の右に」接「出る者」再接句尾的「はいない」。若把「出る者」與「彼の右に」對調，片段之間便無助詞連接，明確不成句。',
    explanationEn:
      'Complete sentence: 「魚料理の腕前にかけては、彼の右に出る者はいないと評判だ。」 「〜にかけては」 (when it comes to..., in terms of skill) attaches to a noun, so it must follow 「腕前」, which is also the only noun the opening 「魚料理の」 can take; the idiom 「右に出る者はいない」 (second to none) has a fixed order: 「彼の右に」 then 「出る者」 then the final 「はいない」. Swapping 「出る者」 and 「彼の右に」 would leave the segments with no particle linking them, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-047',
    before: '閉店間際の市場では、新鮮な魚が',
    after: 'いた。',
    segments: ['ただ', 'も同然の', '値段で', '売られて'],
    starIndex: 3,
    explanation:
      '完整句：「閉店間際の市場では、新鮮な魚がただも同然の値段で売られていた。」「〜も同然」（幾乎等於…、跟…沒兩樣）接名詞，故「も同然の」必須緊跟「ただ」（免費）；「も同然の」是連體用法，後面只能接名詞「値段で」；「売られて」須接句尾的「いた」構成「売られていた」。若把「値段で」放在「ただ」之前，「も同然の」便無名詞可接，明確錯誤，語序唯一。',
    explanationEn:
      'Complete sentence: 「閉店間際の市場では、新鮮な魚がただも同然の値段で売られていた。」 「〜も同然」 (practically the same as...) attaches to a noun, so 「も同然の」 must directly follow 「ただ」 (free of charge); as an attributive phrase, 「も同然の」 can only precede the noun 「値段で」; and 「売られて」 must connect to the final 「いた」 to form 「売られていた」. If 「値段で」 came before 「ただ」, 「も同然の」 would have no noun to attach to, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-048',
    before: '祖父の話では、その俳優は',
    after: 'いたそうだ。',
    segments: ['当代', 'きっての', '名優と', '称えられて'],
    starIndex: 2,
    explanation:
      '完整句：「祖父の話では、その俳優は当代きっての名優と称えられていたそうだ。」「〜きっての」（…當中首屈一指的）接表範圍的名詞「当代」（當代），後面必須接被評價的名詞「名優」；「名優と」的「と」是引用助詞，後接「称えられて」，「称えられて」再接句尾的「いた」。其餘片段放在「いたそうだ」之前都接不上，語序唯一。',
    explanationEn:
      'Complete sentence: 「祖父の話では、その俳優は当代きっての名優と称えられていたそうだ。」 「〜きっての」 (the finest ... in ...) attaches to a noun denoting a scope, here 「当代」 (of that era), and must be followed by the evaluated noun 「名優」; the 「と」 of 「名優と」 is quotative and takes the verb 「称えられて」, which then connects to the final 「いた」. No other segment can stand before 「いたそうだ」, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-049',
    before: '経験豊富な相手だけに、こちらの',
    after: 'から、最後まで油断できない。',
    segments: ['作戦を', '見抜かれ', 'ないとも', '限らない'],
    starIndex: 3,
    explanation:
      '完整句：「経験豊富な相手だけに、こちらの作戦を見抜かれないとも限らないから、最後まで油断できない。」「〜ないとも限らない」（難保不會…、說不定會…）由「ない＋とも＋限らない」構成，順序固定：被動未然形「見抜かれ」接「ないとも」再接「限らない」；句首「こちらの」的「の」後只能接名詞「作戦を」，「作戦を」是被動「見抜かれる」的受詞。四段環環相扣，語序唯一。',
    explanationEn:
      'Complete sentence: 「経験豊富な相手だけに、こちらの作戦を見抜かれないとも限らないから、最後まで油断できない。」 「〜ないとも限らない」 (it is not impossible that...) is built as 「ない＋とも＋限らない」 in a fixed sequence: the passive stem 「見抜かれ」 takes 「ないとも」 and then 「限らない」; the opening 「こちらの」 can only take the noun 「作戦を」, which is the object of the passive 「見抜かれる」. All four segments interlock, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-050',
    before: '約束を破ってしまった以上、',
    after: 'だろう。',
    segments: ['正直に事情を', '打ち明けて', '謝らずには', 'すまない'],
    starIndex: 2,
    explanation:
      '完整句：「約束を破ってしまった以上、正直に事情を打ち明けて謝らずにはすまないだろう。」「〜ずにはすまない」（不…說不過去、非…不可）順序固定：「謝らずには」必須緊接句尾的「すまない」；「打ち明けて」承接受詞「正直に事情を」，再以て形連接後面的道歉。若把「謝らずにはすまない」整組提前作連體修飾「事情」，句尾便剩「打ち明けて」接「だろう」，明確不成句，語序唯一。',
    explanationEn:
      'Complete sentence: 「約束を破ってしまった以上、正直に事情を打ち明けて謝らずにはすまないだろう。」 「〜ずにはすまない」 (cannot get away without doing...) has a fixed sequence: 「謝らずには」 must directly precede the final 「すまない」; 「打ち明けて」 takes the object 「正直に事情を」 and links forward with its te-form. If 「謝らずにはすまない」 were moved to the front as a modifier of 「事情」, the sentence would end with 「打ち明けて」 plus 「だろう」, which is not grammatical, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-051',
    before: '彼は朝食',
    after: '家を飛び出して行った。',
    segments: ['もそこそこに', '打ち合わせの', '資料を', '抱えて'],
    starIndex: 0,
    explanation:
      '完整句：「彼は朝食もそこそこに、打ち合わせの資料を抱えて家を飛び出して行った。」「〜もそこそこに」（…都草草了事就急著…）接名詞，故必須緊跟句首的「朝食」；「打ち合わせの」的「の」後只能接名詞「資料」——「打ち合わせの家」語意不通；「抱えて」承接受詞「資料を」，再以て形連接後句的「家を飛び出して行った」，語序唯一。',
    explanationEn:
      'Complete sentence: 「彼は朝食もそこそこに、打ち合わせの資料を抱えて家を飛び出して行った。」 「〜もそこそこに」 (hurrying off after barely finishing...) attaches to a noun and must directly follow the opening 「朝食」; the 「の」 of 「打ち合わせの」 can only take the noun 「資料」 — 「打ち合わせの家」 (a meeting house) makes no sense; 「抱えて」 takes the object 「資料を」, and its te-form links to the following 「家を飛び出して行った」. The order is unique.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-052',
    before: '姉は留学の準備に',
    after: 'そうだ。',
    segments: ['かこつけて', '前から欲しかった', 'パソコンを', '買ってもらった'],
    starIndex: 2,
    explanation:
      '完整句：「姉は留学の準備にかこつけて、前から欲しかったパソコンを買ってもらったそうだ。」「〜にかこつけて」（藉…之名、拿…當藉口）接助詞「に」，故「かこつけて」必須緊跟句首的「準備に」；連體修飾「前から欲しかった」後只能接名詞「パソコンを」；「買ってもらった」是述語，且只有它能接句尾的「そうだ」。若把「パソコンを」放到「買ってもらった」之後便接不上「そうだ」，語序唯一。',
    explanationEn:
      'Complete sentence: 「姉は留学の準備にかこつけて、前から欲しかったパソコンを買ってもらったそうだ。」 「〜にかこつけて」 (using ... as a pretext) attaches to the particle 「に」, so 「かこつけて」 must directly follow the opening 「準備に」; the attributive 「前から欲しかった」 can only precede the noun 「パソコンを」; 「買ってもらった」 is the predicate and the only segment that can connect to the final 「そうだ」. Moving 「パソコンを」 after 「買ってもらった」 would fail to connect, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-053',
    before: 'ラジオを',
    after: '、懐かしい曲が流れてきた。',
    segments: ['聞く', 'ともなしに', '聞いて', 'いたら'],
    starIndex: 1,
    explanation:
      '完整句：「ラジオを聞くともなしに聞いていたら、懐かしい曲が流れてきた。」「〜ともなしに」（並非有意地…、不經意地…）接動詞辭書形，並在後面重複同一動作構成「聞くともなしに聞く」的慣用形，故順序固定為「聞く→ともなしに→聞いて→いたら」；「いたら」須接て形「聞いて」。若把「聞いていたら」放前面，「聞くともなしに」便懸在句中、修飾不到任何動作，明確不通。',
    explanationEn:
      'Complete sentence: 「ラジオを聞くともなしに聞いていたら、懐かしい曲が流れてきた。」 「〜ともなしに」 (without really meaning to...) attaches to the dictionary form and idiomatically repeats the same verb, as in 「聞くともなしに聞く」, fixing the sequence 「聞く→ともなしに→聞いて→いたら」; 「いたら」 must follow the te-form 「聞いて」. If 「聞いていたら」 came first, 「聞くともなしに」 would be left dangling with no action to modify, which is clearly wrong.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-054',
    before: '彼は高熱を',
    after: 'そうだ。',
    segments: ['押して', '最終日の', '舞台に', '立った'],
    starIndex: 3,
    explanation:
      '完整句：「彼は高熱を押して最終日の舞台に立ったそうだ。」「〜を押して」（不顧…、強忍著…）接在表障礙的名詞加「を」之後，故「押して」必須緊跟句首的「高熱を」——其餘片段都無法直接承接「を」；「最終日の」的「の」後只能接名詞「舞台」，「舞台に」再與「立った」構成慣用搭配「舞台に立つ」，且只有「立った」能接句尾的「そうだ」。語序唯一。',
    explanationEn:
      'Complete sentence: 「彼は高熱を押して最終日の舞台に立ったそうだ。」 「〜を押して」 (in defiance of..., braving...) follows a noun naming an obstacle plus 「を」, so 「押して」 must directly follow the opening 「高熱を」 — no other segment can attach to 「を」; the 「の」 of 「最終日の」 can only take the noun 「舞台」, 「舞台に」 pairs with 「立った」 to form the collocation 「舞台に立つ」, and only 「立った」 can precede the final 「そうだ」. The order is unique.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-055',
    before: 'いくら親しい間柄',
    after: 'がある。',
    segments: ['とはいえ', '言って', 'いいことと', '悪いこと'],
    starIndex: 0,
    explanation:
      '完整句：「いくら親しい間柄とはいえ、言っていいことと悪いことがある。」「〜とはいえ」（雖說是…但…）接名詞，必須緊跟句首的「間柄」，並與副詞「いくら」呼應；後句順序固定：「言って」接「いいことと」，「と」再並列「悪いこと」，「悪いこと」接句尾的「がある」。若把「悪いこと」與「いいことと」對調，並列助詞「と」的關係斷裂、片段間無法連接，明確錯誤。',
    explanationEn:
      'Complete sentence: 「いくら親しい間柄とはいえ、言っていいことと悪いことがある。」 「〜とはいえ」 (even so..., though it may be...) attaches to a noun and must directly follow the opening 「間柄」, pairing with the adverb 「いくら」; the latter clause has a fixed order: 「言って」 takes 「いいことと」, whose 「と」 lists 「悪いこと」, which then connects to the final 「がある」. Swapping 「いいことと」 and 「悪いこと」 breaks the listing particle 「と」 and leaves the segments unconnected, which is clearly wrong.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-056',
    before: '万一に備えて、保険には',
    after: 'と母は言う。',
    segments: ['入って', 'おく', 'に越した', 'ことはない'],
    starIndex: 3,
    explanation:
      '完整句：「万一に備えて、保険には入っておくに越したことはないと母は言う。」「〜に越したことはない」（沒有比…更好的了、最好還是…）接動詞辭書形，故「に越した」必須緊跟「おく」；「おく」須接て形「入って」構成「〜ておく」；「に越した」是連體形，後面只能接「ことはない」。若把「ことはない」直接接在「おく」後，句尾的「に越した」便接不上「と」，明確不成句，語序唯一。',
    explanationEn:
      'Complete sentence: 「万一に備えて、保険には入っておくに越したことはないと母は言う。」 「〜に越したことはない」 (nothing beats..., it is best to...) attaches to the dictionary form, so 「に越した」 must directly follow 「おく」; 「おく」 in turn requires the te-form 「入って」 to form 「〜ておく」; and the attributive 「に越した」 can only be followed by 「ことはない」. Attaching 「ことはない」 directly to 「おく」 would leave 「に越した」 unable to connect to the final 「と」, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-057',
    before: '彼は自分の作品を',
    after: 'ため、周囲から敬遠されている。',
    segments: ['世紀の', '傑作だと', '言い切って', 'はばからない'],
    starIndex: 2,
    explanation:
      '完整句：「彼は自分の作品を世紀の傑作だと言い切ってはばからないため、周囲から敬遠されている。」「〜てはばからない」（毫無顧忌地…、公然…）接動詞て形，故「はばからない」必須緊跟「言い切って」；「世紀の」的「の」後只能接名詞「傑作」，「傑作だと」的引用助詞「と」再接發話動詞「言い切って」，「はばからない」的連體形接句尾的「ため」。四段環環相扣，語序唯一。',
    explanationEn:
      'Complete sentence: 「彼は自分の作品を世紀の傑作だと言い切ってはばからないため、周囲から敬遠されている。」 「〜てはばからない」 (does not hesitate to declare...) attaches to the te-form, so 「はばからない」 must directly follow 「言い切って」; the 「の」 of 「世紀の」 can only take the noun 「傑作」, the quotative 「と」 of 「傑作だと」 takes the speech verb 「言い切って」, and the attributive form of 「はばからない」 precedes the final 「ため」. All four links interlock, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-058',
    before: 'その汚染は工場の',
    after: '広がっていた。',
    segments: ['敷地内', 'にとどまらず', '近隣を流れる', '河川にまで'],
    starIndex: 1,
    explanation:
      '完整句：「その汚染は工場の敷地内にとどまらず、近隣を流れる河川にまで広がっていた。」「〜にとどまらず…にまで」（不僅止於…甚至擴及…）順序固定：先以「にとどまらず」承接範圍較小的「敷地内」，再以「にまで」帶出擴及的「河川」；句首「工場の」接名詞「敷地内」；連體子句「近隣を流れる」只能修飾「河川」。若把「河川にまで」放到「にとどまらず」之前，句型的遞進順序顛倒，明確錯誤。',
    explanationEn:
      'Complete sentence: 「その汚染は工場の敷地内にとどまらず、近隣を流れる河川にまで広がっていた。」 The pattern 「〜にとどまらず…にまで」 (not stopping at..., extending even to...) fixes the order: 「にとどまらず」 first takes the smaller scope 「敷地内」, and 「にまで」 then introduces the wider reach 「河川」; the opening 「工場の」 takes the noun 「敷地内」, and the attributive clause 「近隣を流れる」 can only modify 「河川」. Putting 「河川にまで」 before 「にとどまらず」 would reverse the pattern\'s escalation, which is clearly wrong.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-059',
    before: 'どんな名選手も、支えてくれる',
    after: 'を忘れてはならない。',
    segments: ['ファン', 'あっての', '存在だ', 'ということ'],
    starIndex: 0,
    explanation:
      '完整句：「どんな名選手も、支えてくれるファンあっての存在だということを忘れてはならない。」「〜あっての」（有…才有…、多虧…才成立）接名詞「ファン」，後面必須再接名詞「存在」；連體子句「支えてくれる」語意上只能修飾「ファン」；「存在だ」接「ということ」名詞化，再連句尾的「を忘れてはならない」。若把「存在だ」直接接在「支えてくれる」後，剩下的「ファン」「あっての」便接不上句尾的「を」，明確不成句。',
    explanationEn:
      'Complete sentence: 「どんな名選手も、支えてくれるファンあっての存在だということを忘れてはならない。」 「〜あっての」 (owing its very existence to...) attaches to the noun 「ファン」 and must be followed by another noun, here 「存在」; the attributive clause 「支えてくれる」 can semantically modify only 「ファン」; 「存在だ」 is nominalized by 「ということ」, which connects to the final 「を忘れてはならない」. If 「存在だ」 were placed right after 「支えてくれる」, the remaining 「ファン」 and 「あっての」 could not connect to the final 「を」, so the order is unique.',
  },
  {
    kind: 'order',
    id: 'n1-grammar-narabekae-060',
    before: 'その老舗旅館は、名旅館との',
    after: '客を迎えてくれた。',
    segments: ['評判', 'にたがわず', '行き届いた', 'もてなしで'],
    starIndex: 3,
    explanation:
      '完整句：「その老舗旅館は、名旅館との評判にたがわず、行き届いたもてなしで客を迎えてくれた。」「〜にたがわず」（不負…、與…相符）接名詞，故必須緊跟「評判」，而句首「名旅館との」的「との」後也只能接「評判」；連體修飾「行き届いた」語意上只能修飾「もてなし」——「行き届いた客」明顯不通；「もてなしで」再連接後句的「客を迎えてくれた」，語序唯一。',
    explanationEn:
      'Complete sentence: 「その老舗旅館は、名旅館との評判にたがわず、行き届いたもてなしで客を迎えてくれた。」 「〜にたがわず」 (true to..., living up to...) attaches to a noun, so it must directly follow 「評判」, which is also the only noun the opening 「名旅館との」 can take; the attributive 「行き届いた」 can semantically modify only 「もてなし」 — 「行き届いた客」 (attentive guests) makes no sense here; and 「もてなしで」 then links to the following 「客を迎えてくれた」. The order is unique.',
  },
]
