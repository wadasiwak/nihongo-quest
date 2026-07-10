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
]
