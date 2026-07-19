import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    kind: 'choice',
    id: 'n4-vocab-hyoki-001',
    stem: 'ともだちに かさを 【かして】 あげました。',
    options: ['貸して', '借して', '貨して', '賃して'],
    answerIndex: 0,
    explanation:
      '「かす」（借出、借給別人）寫作「貸す」，因此是「貸して」。「借して」用了反向詞「借りる」（借入）的漢字，「借」沒有「かす」的訓讀；「貨して」的「貨」（貨物的貨）與「貸」只差一撇、字形極像；「賃」（家賃的賃）也是形近的貝部字，都不能寫「かす」。',
    explanationEn:
      'かす (to lend) is written 「貸す」, so the answer is 「貸して」. 「借して」 uses the kanji of the opposite word 「借りる」 (to borrow) — 「借」 has no reading かす; 「貨」 (goods) looks almost identical to 「貸」, differing by just one stroke; 「賃」 (as in 「家賃」) is another look-alike kanji with the shell radical. None of them can write かす.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-hyoki-002',
    stem: 'としょかんで ほんを 三さつ 【かりました】。',
    options: ['借りました', '貸りました', '昔りました', '惜りました'],
    answerIndex: 0,
    explanation:
      '「かりる」（借入、向別人借）寫作「借りる」，過去式是「借りました」。「貸りました」把借出方向的「貸」誤用在借入；「昔」（むかし，從前）是「借」去掉人字旁的形近字；「惜」（可惜的惜）則是換成豎心旁的形近字，兩者都沒有「かりる」的讀法。',
    explanationEn:
      'かりる (to borrow) is written 「借りる」, so the past form is 「借りました」. 「貸りました」 misuses 「貸」, the kanji for lending — the opposite direction; 「昔」 (long ago) is 「借」 without the person radical; 「惜」 swaps in the heart radical instead. Neither look-alike has the reading かりる.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-hyoki-003',
    stem: 'しゅうまつに かぞくと 【えいが】を みに いきます。',
    options: ['映画', '英画', '映面', '英面'],
    answerIndex: 0,
    explanation:
      '「えいが」（電影）寫作「映画」，「映」是放映的映、「画」是圖畫的画。「英画」把「映」換成同音的「英」（英語的英），是典型同音異字錯誤；「映面」「英面」把「画」誤寫成形近的「面」，日文裡都不是詞。',
    explanationEn:
      'えいが (movie) is written 「映画」 — 「映」 as in projecting and 「画」 as in picture. 「英画」 swaps in the same-sounding 「英」 (as in English), a classic homophone mistake; 「映面」 and 「英面」 replace 「画」 with the look-alike 「面」. None of the wrong options are real Japanese words.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-hyoki-004',
    stem: 'みちが わからないので 【ちず】を みました。',
    options: ['地図', '池図', '地区', '池区'],
    answerIndex: 0,
    explanation:
      '「ちず」（地圖）寫作「地図」。「池図」把「地」誤寫成只差偏旁的「池」（いけ，池塘）；「地区」的「区」（ちく的く）與「図」外框相似、內部不同，是形近干擾，而且「地区」讀「ちく」，意思是地區，與看地圖找路的語境不合。',
    explanationEn:
      'ちず (map) is written 「地図」. 「池図」 mistakes 「地」 for 「池」 (pond), which differs only in its radical; 「区」 shares a similar outer frame with 「図」 but has different insides — and 「地区」 is actually read ちく and means "district", which makes no sense when you are checking a map to find your way.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-hyoki-005',
    stem: 'ははは 【りょうり】が とても じょうずです。',
    options: ['料理', '科理', '料里', '科里'],
    answerIndex: 0,
    explanation:
      '「りょうり」（料理、做菜）寫作「料理」。「科」（科學的科）與「料」同為米字旁、只差右半，是最容易看錯的形近字；「里」（さと，故鄉、里）則是「理」去掉王字旁的形近字。四個選項只有「料理」是真正存在的詞。',
    explanationEn:
      'りょうり (cooking) is written 「料理」. 「科」 (as in science) shares the rice radical with 「料」 and differs only in the right half — the easiest kanji to misread here; 「里」 (village, hometown) is 「理」 without the king radical. Of the four options, only 「料理」 is a word that actually exists.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-hyoki-006',
    stem: 'かぜで ドアが 【あきました】。',
    options: ['開きました', '空きました', '閉きました', '間きました'],
    answerIndex: 0,
    explanation:
      '門窗打開的「あく」寫作「開く」，所以是「開きました」。「空く」雖然也讀「あく」，但意思是「空出來」（如座位空了），門被風吹開不能用「空」；「閉」是反義的「閉める」的漢字；「間」（あいだ）與「開」同為門字框的形近字，沒有「あく」的讀法。',
    explanationEn:
      'A door opening is あく, written 「開く」, so the answer is 「開きました」. 「空く」 is also read あく but means to become empty or vacant (like a seat), so it cannot describe a door blown open by the wind; 「閉」 is the kanji of the opposite word 「閉める」 (to close); 「間」 shares the gate frame with 「開」 but is never read あく.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-hyoki-007',
    stem: 'さむいですから まどを 【しめて】 ください。',
    options: ['閉めて', '締めて', '開めて', '閉て'],
    answerIndex: 0,
    explanation:
      '關窗、關門的「しめる」寫作「閉める」。「締める」雖然同樣讀「しめる」，但用於繫緊、勒緊（如ネクタイを締める），關窗不能用；「開めて」用了反義的「開」；「閉て」漏掉送假名「め」，是送假名錯誤，正確送法是「閉める→閉めて」。',
    explanationEn:
      'Closing a window or door is しめる, written 「閉める」. 「締める」 is also read しめる but means to fasten or tighten (as in ネクタイを締める, tightening a necktie), not closing a window; 「開めて」 uses the opposite kanji for opening; 「閉て」 drops the okurigana め — the correct spelling is 「閉める→閉めて」.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-hyoki-008',
    stem: 'ちちは バスの 【うんてん】の しごとを して います。',
    options: ['運転', '連転', '運伝', '連伝'],
    answerIndex: 0,
    explanation:
      '「うんてん」（駕駛）寫作「運転」。「連」（連れる的連）與「運」同為辶部、字形相近；「伝」（伝える的伝）與「転」右半相同、只差偏旁，讀音也同為「てん／でん」系，是典型的形近＋音近雙重干擾。正確組合只有「運転」。',
    explanationEn:
      'うんてん (driving) is written 「運転」. 「連」 (as in 「連れる」) shares the movement radical with 「運」 and looks similar; 「伝」 (as in 「伝える」) shares its right half with 「転」 and its readings てん/でん sound alike too — a double trap of similar shape and similar sound. The only correct combination is 「運転」.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-hyoki-009',
    stem: 'りょこうで とった 【しゃしん】を ともだちに みせました。',
    options: ['写真', '写直', '写新', '写心'],
    answerIndex: 0,
    explanation:
      '「しゃしん」（照片）寫作「写真」。「直」（直す的直）與「真」只差上下幾筆、字形極像，是最危險的形近干擾；「新」（あたらしい）和「心」（こころ）雖然音讀都是「しん」，但都不是照片的「しん」，屬同音異字錯誤。',
    explanationEn:
      'しゃしん (photo) is written 「写真」. 「直」 (as in 「直す」) differs from 「真」 by only a few strokes at the top and bottom — the most dangerous look-alike here; 「新」 (new) and 「心」 (heart) both have the on-reading しん, but they are the wrong homophones — the しん of a photo is only ever 「真」.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-hyoki-010',
    stem: 'まいばん 二じかん 日本ごを 【べんきょう】します。',
    options: ['勉強', '免強', '勉張', '免張'],
    answerIndex: 0,
    explanation:
      '「べんきょう」（讀書、學習）寫作「勉強」。「免」是「勉」去掉力字的形近字，單獨讀「めん」；「張」（頑張る的張）與「強」同為弓字旁、右半不同，讀音也近（ちょう），容易混淆。正確寫法只有「勉強」一種。',
    explanationEn:
      'べんきょう (studying) is written 「勉強」. 「免」 is 「勉」 minus the strength element and is read めん; 「張」 (as in 「頑張る」) shares the bow radical with 「強」 and its reading ちょう sounds close, making it easy to confuse. The only correct spelling is 「勉強」.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-hyoki-011',
    stem: 'ねつが あるので きょう 【びょういん】へ いきます。',
    options: ['病院', '病員', '疲院', '疲員'],
    answerIndex: 0,
    explanation:
      '「びょういん」（醫院）寫作「病院」。「員」（店員的員）與「院」音讀同為「いん」，是常考的同音異字，「病員」不是日文的詞；「疲」（疲れる的疲）與「病」同為疒字頭、字形相近，但讀「ひ」，不能寫「びょう」。',
    explanationEn:
      'びょういん (hospital) is written 「病院」. 「員」 (as in 「店員」) shares the on-reading いん with 「院」 — a frequently tested homophone — but 「病員」 is not a Japanese word; 「疲」 (as in 「疲れる」) shares the sickness radical with 「病」 and looks similar, but it is read ひ and cannot write びょう.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-hyoki-012',
    stem: 'わからない ことが あったら 【しつもん】して ください。',
    options: ['質問', '質門', '質間', '貿問'],
    answerIndex: 0,
    explanation:
      '「しつもん」（提問、問題）寫作「質問」。「門」（もん，門）是「問」去掉中間口字的形近字；「間」（あいだ）同樣是門字框的形近字，兩者都不能表示「發問」；「貿」（貿易的貿）與「質」同為貝部、上半相似，也是形近干擾。',
    explanationEn:
      'しつもん (question) is written 「質問」. 「門」 (gate) is 「問」 without the mouth element inside; 「間」 is another look-alike with the same gate frame — neither can express asking a question; 「貿」 (as in 「貿易」) shares the shell radical and a similar upper half with 「質」, another shape-based trap.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-hyoki-013',
    stem: '【せかい】で いちばん たかい やまは エベレストです。',
    options: ['世界', '世海', '世回', '世会'],
    answerIndex: 0,
    explanation:
      '「せかい」（世界）寫作「世界」。「海」（うみ）、「回」（一回的回）、「会」（会う的会）音讀都是「かい」，全是同音異字干擾，但「せかい」的「かい」只能寫「界」（田字頭的界），其他三個組合在日文裡都不成詞。',
    explanationEn:
      'せかい (the world) is written 「世界」. 「海」 (sea), 「回」 (as in 「一回」), and 「会」 (as in 「会う」) all share the on-reading かい, so they are pure homophone traps — but the かい of せかい can only be written 「界」. The other three combinations are not words in Japanese.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-hyoki-014',
    stem: 'えきまで 二十ぷん 【あるいて】 いきました。',
    options: ['歩いて', '走いて', '歩るいて', '少いて'],
    answerIndex: 0,
    explanation:
      '「あるく」（走路、步行）寫作「歩く」，て形是「歩いて」。「走」是跑的「走る（はしる）」，沒有「あるく」的讀法；「歩るいて」多送了一個「る」，是常見送假名錯誤，正確只送「く」；「少」（すくない）是「歩」少掉下半的形近字。',
    explanationEn:
      'あるく (to walk) is written 「歩く」, so the te-form is 「歩いて」. 「走」 belongs to 「走る」 (to run, read はしる) and is never read あるく; 「歩るいて」 adds an extra okurigana る — a very common mistake, since only the く is written in kana; 「少」 (few) is 「歩」 missing its lower half.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-hyoki-015',
    stem: 'じかんが ありませんから 【いそいで】 ください。',
    options: ['急いで', '急そいで', '速いで', '忙いで'],
    answerIndex: 0,
    explanation:
      '「いそぐ」（趕快、著急）寫作「急ぐ」，て形是「急いで」。「急そいで」多送了「そ」，是送假名錯誤；「速」（はやい，速度快）和「忙」（いそがしい，忙碌）語意相關、容易聯想，但都沒有「いそぐ」這個訓讀，不能這樣寫。',
    explanationEn:
      'いそぐ (to hurry) is written 「急ぐ」, so the te-form is 「急いで」. 「急そいで」 adds an extra okurigana そ, a spelling mistake; 「速」 (fast, as in はやい) and 「忙」 (busy, as in いそがしい) are related in meaning and easy to associate, but neither has the kun-reading いそぐ, so they cannot be used here.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-hyoki-016',
    stem: 'くにの かぞくに にもつを 【おくりました】。',
    options: ['送りました', '贈りました', '迭りました', '送くりました'],
    answerIndex: 0,
    explanation:
      '寄送行李、包裹的「おくる」寫作「送る」。「贈る」雖然同樣讀「おくる」，但專指贈送禮物、獻上心意，單純寄東西用「送る」；「迭」是與「送」同為辶部的形近字，日常日文幾乎不用；「送くりました」多送了「く」，是送假名錯誤。',
    explanationEn:
      'Sending luggage or a package is おくる, written 「送る」. 「贈る」 is also read おくる, but it specifically means giving a gift or offering something from the heart — plain shipping uses 「送る」; 「迭」 is a look-alike with the same movement radical, hardly used in everyday Japanese; 「送くりました」 adds an extra okurigana く.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-hyoki-017',
    stem: 'あしたの 【てんき】は はれるそうです。',
    options: ['天気', '天汽', '夭気', '天記'],
    answerIndex: 0,
    explanation:
      '「てんき」（天氣）寫作「天気」。「汽」（汽車的汽）與「気」音同形近，但多了三點水，用於水蒸氣相關詞；「夭」是「天」出頭變形的形近字，讀「よう」；「記」（日記的記）音讀是「き」，屬同音異字，但天氣的「き」只能寫「気」。',
    explanationEn:
      'てんき (weather) is written 「天気」. 「汽」 (as in 「汽車」) sounds the same as 「気」 and looks similar, but it carries the water radical and is used for steam-related words; 「夭」 is a distorted look-alike of 「天」 read よう; 「記」 (as in 「日記」) is read き but is the wrong homophone — the き of weather is only 「気」.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-hyoki-018',
    stem: 'きょうは 【ようじ】が あるので さきに かえります。',
    options: ['用事', '用字', '用時', '要事'],
    answerIndex: 0,
    explanation:
      '「ようじ」（要辦的事情）寫作「用事」。「字」（じ，文字）和「時」（じ，時間）音讀都是「じ」，是同音異字干擾，「用字」「用時」都不是表示「有事要辦」的詞；「要」（重要的要）音讀「よう」，「要事」是中文式寫法，日文的「ようじ」不這樣寫。',
    explanationEn:
      'ようじ (an errand, something to take care of) is written 「用事」. 「字」 (letter, character) and 「時」 (time) are both read じ — homophone traps — but 「用字」 and 「用時」 do not mean having business to attend to; 「要」 is read よう, yet 「要事」 is not how Japanese writes ようじ.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-hyoki-019',
    stem: 'わたしの いえは えきから すこし 【とおい】です。',
    options: ['遠い', '遠おい', '達い', '近い'],
    answerIndex: 0,
    explanation:
      '「とおい」（遠的）寫作「遠い」，送假名只有「い」。「遠おい」多送了「お」，是送假名錯誤；「達」（友達的達）與「遠」同為辶部的形近字，沒有「とおい」的讀法；「近」是反義詞「ちかい」（近的）的漢字，語意正好相反。',
    explanationEn:
      'とおい (far) is written 「遠い」, with only the い written in kana. 「遠おい」 adds an extra okurigana お, a spelling mistake; 「達」 (as in 「友達」) shares the movement radical with 「遠」 but has no reading とおい; 「近」 is the kanji of the antonym ちかい (near), the exact opposite in meaning.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-hyoki-020',
    stem: 'この へやは まどが おおきくて 【あかるい】です。',
    options: ['明るい', '明かるい', '暗るい', '朝るい'],
    answerIndex: 0,
    explanation:
      '「あかるい」（明亮的）寫作「明るい」，送假名是「るい」。「明かるい」多送了「か」，是送假名錯誤；「暗」是反義詞「くらい」（暗的）的漢字；「朝」（あさ，早上）左半與「明」相似，是形近干擾，但沒有「あかるい」的讀法。',
    explanationEn:
      'あかるい (bright) is written 「明るい」, with るい as the okurigana. 「明かるい」 adds an extra か, a spelling mistake; 「暗」 is the kanji of the antonym くらい (dark); 「朝」 (morning) resembles 「明」 on its left side — a shape-based trap — but it has no reading あかるい.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-hyoki-021',
    stem: 'にちようびに やきゅうの 【しあい】を 見に 行きます。',
    options: ['試合', '試会', '詩合', '式合'],
    answerIndex: 0,
    explanation:
      '「しあい」（比賽）寫作「試合」。「会」（会う的会）也能讀「あい」，「試会」是同音異字錯誤，不是日文的詞；「詩」（し，詩）與「試」同音又形近，只差偏旁；「式」（儀式的式）讀「しき」音近，也是干擾，皆不能寫「しあい」。',
    explanationEn:
      'しあい (a match, game) is written 「試合」. 「会」 can also be read あい (as in 「会う」), making 「試会」 a homophone trap that is not a real word; 「詩」 (poem) shares the reading し with 「試」 and looks similar, differing only in the radical; 「式」 (ceremony) has the similar-sounding reading しき. Only 「試合」 is correct.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-hyoki-022',
    stem: 'おしょうがつに 【きもの】を きて、じんじゃへ 行きました。',
    options: ['着物', '着者', '看物', '差物'],
    answerIndex: 0,
    explanation:
      '「きもの」（和服）寫作「着物」。「者」（もの）雖然訓讀也是「もの」，但指人不指物，「着者」不是日文的詞；「看」（看病的看）與「着」字形相近，差在下半；「差」（差す的差）上半與「着」相似，兩者都沒有「き」的讀法，皆為錯誤選項。',
    explanationEn:
      'きもの (kimono) is written 「着物」. 「者」 is also read もの but refers to people, not things, so 「着者」 is not a word; 「看」 (as in 「看病」) looks similar to 「着」, differing in the lower half; 「差」 (as in 「差す」) resembles 「着」 in its upper half. Neither look-alike is ever read き.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-hyoki-023',
    stem: 'てんきが いい 日は、【じてんしゃ】で かいしゃへ 行きます。',
    options: ['自転車', '自転者', '自軽車', '白転車'],
    answerIndex: 0,
    explanation:
      '「じてんしゃ」（腳踏車）寫作「自転車」。「者」與「車」音讀同為「しゃ」，是典型同音異字，但「者」指人，「自転者」不是詞；「軽」（軽い的軽）與「転」同為車字旁、右半不同，是形近干擾；「白」（しろ）是「自」少一筆的形近字，皆不正確。',
    explanationEn:
      'じてんしゃ (bicycle) is written 「自転車」. 「者」 shares the on-reading しゃ with 「車」 — a classic homophone — but it means a person, so 「自転者」 is not a word; 「軽」 (as in 「軽い」) shares the cart radical with 「転」 but differs on the right; 「白」 (white) is 「自」 minus one stroke.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-hyoki-024',
    stem: 'ひるごはんは いつも かいしゃの 【しょくどう】で 食べます。',
    options: ['食堂', '食道', '飲堂', '食童'],
    answerIndex: 0,
    explanation:
      '「しょくどう」（食堂、餐廳）寫作「食堂」。「食道」讀音完全相同，但意思是食物通過的「食道」（身體器官），語境不合，是最危險的同音異字；「飲」（飲む的飲）語意相關但讀「いん」；「童」（児童的童）與「堂」同音形近，「食童」不是詞。',
    explanationEn:
      'しょくどう (dining hall) is written 「食堂」. 「食道」 is read exactly the same but means the esophagus — the most dangerous homophone here; 「飲」 (as in 「飲む」) is related in meaning but read いん; 「童」 (as in 「児童」) sounds the same as 「堂」 and looks similar, but 「食童」 is not a word.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-hyoki-025',
    stem: 'こうえんの 【いけ】に、大きな さかなが たくさん います。',
    options: ['池', '地', '他', '湖'],
    answerIndex: 0,
    explanation:
      '「いけ」（池塘）寫作「池」。「地」（土地的地）是把三點水換成土字旁的形近字，讀「ち」；「他」（其他的他）也只差偏旁，讀「た」；「湖」雖然也是水字旁、語意相近，但那是「みずうみ」（湖）的漢字，比池塘大得多，皆不能寫「いけ」。',
    explanationEn:
      'いけ (pond) is written 「池」. 「地」 (ground) swaps the water radical for the earth radical and is read ち; 「他」 (other) also differs only in the radical and is read た; 「湖」 has the water radical and a related meaning, but it is the kanji for みずうみ (lake), something much bigger than a pond.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-hyoki-026',
    stem: 'あさ おきて、つめたい 水で 【かお】を あらいます。',
    options: ['顔', '額', '頭', '首'],
    answerIndex: 0,
    explanation:
      '「かお」（臉）寫作「顔」。「額」（ひたい，額頭）與「顔」同為頁部、字形相近，但只指額頭；「頭」（あたま，頭）和「首」（くび，脖子）語意相關、容易聯想，但都是別的身體部位的漢字，沒有「かお」的讀法，皆為錯誤選項。',
    explanationEn:
      'かお (face) is written 「顔」. 「額」 (ひたい, forehead) shares the 頁 radical with 「顔」 and looks similar, but means only the forehead; 「頭」 (あたま, head) and 「首」 (くび, neck) are related body parts and easy to associate, but neither is ever read かお.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-hyoki-027',
    stem: 'この おもい にもつを 二かいまで 【はこびます】。',
    options: ['運びます', '連びます', '送びます', '運こびます'],
    answerIndex: 0,
    explanation:
      '「はこぶ」（搬運）寫作「運ぶ」，所以是「運びます」。「連」（連れる的連）與「運」同為辶部、字形相近，但沒有「はこぶ」的讀法；「送」（おくる，寄送）語意相關，也不能讀「はこぶ」；「運こびます」多送了「こ」，是送假名錯誤。',
    explanationEn:
      'はこぶ (to carry) is written 「運ぶ」, so the answer is 「運びます」. 「連」 (as in 「連れる」) shares the movement radical with 「運」 and looks similar but is never read はこぶ; 「送」 (おくる, to send) is related in meaning but also has no reading はこぶ; 「運こびます」 adds an extra okurigana こ.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-hyoki-028',
    stem: 'わたしと あねは 【おなじ】 がっこうの がくせいです。',
    options: ['同じ', '回じ', '円じ', '向じ'],
    answerIndex: 0,
    explanation:
      '「おなじ」（相同）寫作「同じ」。「回」（一回的回）、「円」（えん，日圓）、「向」（向かう的向）都是和「同」外形相近的字，但「回」讀「かい」、「円」讀「えん」、「向」讀「こう／む」，沒有一個能讀「おな」，只有「同じ」是正確寫法。',
    explanationEn:
      'おなじ (the same) is written 「同じ」. 「回」 (as in 「一回」), 「円」 (yen), and 「向」 (as in 「向かう」) all resemble 「同」 in shape, but they are read かい, えん, and こう/む respectively — none of them can be read おな. Only 「同じ」 is correct.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-hyoki-029',
    stem: 'あたらしい いえは 【ひろくて】、きれいです。',
    options: ['広くて', '広ろくて', '店くて', '狭くて'],
    answerIndex: 0,
    explanation:
      '「ひろい」（寬敞）寫作「広い」，送假名只有「い」，所以是「広くて」。「広ろくて」多送了「ろ」，是送假名錯誤；「店」（みせ）與「広」同為广字頭的形近字，沒有「ひろい」的讀法；「狭」是反義詞「せまい」（狹窄）的漢字，語意正好相反。',
    explanationEn:
      'ひろい (spacious) is written 「広い」 with only い as okurigana, so the answer is 「広くて」. 「広ろくて」 adds an extra okurigana ろ; 「店」 (みせ, shop) shares the 广 top with 「広」 but has no reading ひろい; 「狭」 is the kanji of the antonym せまい (narrow), the exact opposite in meaning.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-hyoki-030',
    stem: 'この あたらしい パソコンは うすくて 【かるい】です。',
    options: ['軽い', '軽るい', '転い', '重い'],
    answerIndex: 0,
    explanation:
      '「かるい」（輕的）寫作「軽い」，送假名只有「い」。「軽るい」多送了「る」，是送假名錯誤；「転」（運転的転）與「軽」同為車字旁、右半相近，是形近干擾，沒有「かるい」的讀法；「重」是反義詞「おもい」（重的）的漢字，語意相反。',
    explanationEn:
      'かるい (light in weight) is written 「軽い」 with only い as okurigana. 「軽るい」 adds an extra okurigana る; 「転」 (as in 「運転」) shares the cart radical with 「軽」 and looks similar but is never read かるい; 「重」 is the kanji of the antonym おもい (heavy).',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-hyoki-031',
    stem: 'きょうは かぜが つよくて、とても 【さむい】です。',
    options: ['寒い', '寒むい', '実い', '暑い'],
    answerIndex: 0,
    explanation:
      '「さむい」（寒冷）寫作「寒い」，送假名只有「い」。「寒むい」多送了「む」，是送假名錯誤；「実」（実は的実）是與「寒」上半相似的形近字，讀「じつ／み」；「暑」是「あつい」（炎熱）的漢字，語意正好相反，皆不正確。',
    explanationEn:
      'さむい (cold) is written 「寒い」 with only い as okurigana. 「寒むい」 adds an extra okurigana む; 「実」 (as in 「実は」) resembles the upper part of 「寒」 but is read じつ or み; 「暑」 is the kanji of あつい (hot), the exact opposite in meaning.',
  },
  {
    kind: 'choice',
    id: 'n4-vocab-hyoki-032',
    stem: 'つぎの かどを みぎに 【まがって】 ください。',
    options: ['曲がって', '由がって', '田がって', '回がって'],
    answerIndex: 0,
    explanation:
      '「まがる」（轉彎）寫作「曲がる」，所以是「曲がって」。「由」（理由的由）和「田」（た，田地）都是與「曲」外形相近的字，但沒有「まが」的讀法；「回」（回る，轉圈）語意容易聯想，訓讀卻是「まわ」不是「まが」，皆不能這樣寫。',
    explanationEn:
      'まがる (to turn) is written 「曲がる」, so the answer is 「曲がって」. 「由」 (as in 「理由」) and 「田」 (rice field) both resemble 「曲」 in shape but have no reading まが; 「回」 (as in 「回る」, まわる) is easy to associate in meaning, but its kun-reading is まわ, not まが.',
  },
]
