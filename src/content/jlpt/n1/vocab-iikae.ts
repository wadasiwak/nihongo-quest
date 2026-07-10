import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    kind: 'choice',
    id: 'n1-vocab-iikae-001',
    stem: '彼の説明にはどこか【腑に落ちない】点があり、私は質問を重ねた。',
    options: ['納得できない', '思い出せない', '気に入らない', '聞き取れない'],
    answerIndex: 0,
    explanation:
      '「腑に落ちない」是慣用句，「腑」指內臟，比喻話進不了心裡，即「無法信服、想不通」，等於「納得できない」。「気に入らない」是「不喜歡」，屬好惡問題而非能否理解；「思い出せない」（想不起來）、「聞き取れない」（聽不清）都偏離語意。',
    explanationEn:
      '「腑に落ちない」 is an idiom: 「腑」 means the innards, so words that fail to settle there cannot be accepted — it equals 「納得できない」 (unconvincing). 「気に入らない」 means "not to one\'s liking", a matter of preference rather than comprehension; 「思い出せない」 (cannot recall) and 「聞き取れない」 (cannot catch the words) both stray from the meaning.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-iikae-002',
    stem: '準備不足のまま発表に臨んだが、【案の定】厳しい質問に答えられなかった。',
    options: ['思ったとおり', '意外にも', '幸いにも', '相変わらず'],
    answerIndex: 0,
    explanation:
      '「案の定」是「果然、不出所料」，表示結果與事前預想一致，等於「思ったとおり」。「意外にも」（出乎意料地）方向完全相反；「幸いにも」（幸好）是慶幸的評價；「相変わらず」（一如往常）指狀態沒變，與「預想成真」不同概念。',
    explanationEn:
      '「案の定」 means "just as expected": the outcome matched the speaker\'s prior prediction, so it equals 「思ったとおり」. 「意外にも」 (surprisingly) points in exactly the opposite direction; 「幸いにも」 (fortunately) is a judgment of luck; 「相変わらず」 (as ever) describes an unchanged state, a different concept from a premonition coming true.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-iikae-003',
    stem: '楽しみにしていた決勝戦は、一方的な展開で【あっけなく】終わってしまった。',
    options: ['物足りないほど簡単に', '予想より時間をかけて', '感動的に', 'ひっそりと'],
    answerIndex: 0,
    explanation:
      '「あっけない」形容事情結束得太快太簡單、令人不過癮，換成「物足りないほど簡単に」最貼近。「予想より時間をかけて」（比預期更費時）方向相反；「感動的に」是正面評價，與失望的語感不合；「ひっそりと」（靜悄悄地）描述的是安靜，不是簡單收場。',
    explanationEn:
      '「あっけない」 describes something ending so quickly and easily that it leaves you unsatisfied, so 「物足りないほど簡単に」 is the closest paraphrase. 「予想より時間をかけて」 (taking longer than expected) points the opposite way; 「感動的に」 (movingly) is positive praise that clashes with the let-down tone; 「ひっそりと」 (quietly) is about silence, not an anticlimactic finish.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-iikae-004',
    stem: '財布も携帯も失くしてしまい、彼は見知らぬ町の駅前で【途方に暮れて】いた。',
    options: [
      'どうしていいか分からなくなって',
      'すっかり疲れ果てて',
      '激しく腹を立てて',
      '誰かの助けを待って',
    ],
    answerIndex: 0,
    explanation:
      '「途方に暮れる」是慣用句，指失去辦法和方向、不知如何是好，等於「どうしていいか分からなくなる」。「疲れ果てる」（精疲力盡）講體力而非心理上的無措；「腹を立てる」（生氣）情緒方向不同；「助けを待つ」是具體行動，原句並未包含此意。',
    explanationEn:
      '「途方に暮れる」 is an idiom meaning to be at a total loss, with no idea what to do next, equaling 「どうしていいか分からなくなって」. 「すっかり疲れ果てて」 (utterly worn out) concerns physical exhaustion rather than helplessness; 「激しく腹を立てて」 (furious) is a different emotion; 「誰かの助けを待って」 (waiting for help) is a concrete action the original sentence never states.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-iikae-005',
    stem: '帰宅した母は、足の踏み場もない息子の部屋を見て【目を丸くした】。',
    options: ['とても驚いた', 'ひどく腹を立てた', '深くがっかりした', '見て見ぬふりをした'],
    answerIndex: 0,
    explanation:
      '「目を丸くする」是慣用句，形容因吃驚而睜大眼睛，即「非常驚訝」。「腹を立てた」（生氣）雖然在此情境也說得通，但並非這個慣用句本身的語意，方向不等值；「がっかりした」（失望）、「見て見ぬふりをした」（視而不見）同樣都不是「驚訝」。',
    explanationEn:
      '「目を丸くする」 is an idiom picturing eyes going wide with astonishment, i.e. 「とても驚いた」. 「ひどく腹を立てた」 (got very angry) may sound plausible in this scene, but it is not what the idiom itself means, so it is not an equivalent; 「深くがっかりした」 (was deeply disappointed) and 「見て見ぬふりをした」 (pretended not to see) are likewise not "surprise".',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-iikae-006',
    stem: '手書きの資料をすべてデータ化するのは、思った以上に【骨が折れる】作業だった。',
    options: ['苦労する', '危険を伴う', 'けがをしやすい', '時間をつぶせる'],
    answerIndex: 0,
    explanation:
      '「骨が折れる」是慣用句，比喻事情費力辛苦，等於「苦労する」。注意不是真的骨折，「けがをしやすい」（容易受傷）是照字面誤讀；「危険を伴う」（伴隨危險）講的是風險而非辛勞；「時間をつぶせる」（可以打發時間）語意完全無關。',
    explanationEn:
      '「骨が折れる」 is an idiom meaning a task is laborious and demanding, equaling 「苦労する」. It has nothing to do with actually breaking a bone: 「けがをしやすい」 (easy to get injured) is a literal misreading; 「危険を伴う」 (accompanied by danger) is about risk, not toil; 「時間をつぶせる」 (good for killing time) is entirely unrelated.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-iikae-007',
    stem: '彼とは学生時代からの【気が置けない】仲で、どんな悩みでも打ち明けられる。',
    options: ['遠慮のいらない', '油断できない', '信用できない', 'めったに会えない'],
    answerIndex: 0,
    explanation:
      '「気が置けない」是慣用句，指相處不必客套拘謹，即「遠慮のいらない」（不必見外的）關係。最典型的陷阱是「油断できない」（不可大意），這是把句型誤解成否定「不能放心」，方向恰好相反；「信用できない」同樣是誤讀；「めったに会えない」（難得見面）與親疏語意無關。',
    explanationEn:
      '「気が置けない」 is an idiom for a friendship that needs no reserve or formality, i.e. 「遠慮のいらない」. The classic trap is 「油断できない」 (must stay on guard), which misparses the negative as "cannot relax around them" — the exact opposite; 「信用できない」 (untrustworthy) is the same misreading; 「めったに会えない」 (rarely able to meet) has nothing to do with closeness.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-iikae-008',
    stem: '開場前から、会場の周りには【おびただしい】数のファンが詰めかけていた。',
    options: ['非常に多くの', 'ある程度の', '騒がしい', '予想を下回る'],
    answerIndex: 0,
    explanation:
      '「おびただしい」形容數量多得驚人，等於「非常に多くの」。「ある程度の」（一定程度的）數量感遠遠不及，程度不等值；「予想を下回る」（低於預期）方向相反；「騒がしい」（吵鬧的）描述聲音而非數量，都不能替換。',
    explanationEn:
      '「おびただしい」 means astonishingly numerous, equaling 「非常に多くの」. 「ある程度の」 (a fair amount of) falls far short in degree, so it is not equivalent; 「予想を下回る」 (fewer than expected) points the opposite way; 「騒がしい」 (noisy) describes sound rather than quantity — none can substitute.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-iikae-009',
    stem: '彼が出した改革案は、役員会で【ことごとく】否決された。',
    options: ['一つ残らず', 'たいてい', '一時的に', 'あっさり'],
    answerIndex: 0,
    explanation:
      '「ことごとく」是書面語的「全部、無一例外」，等於「一つ残らず」。「たいてい」（大多）仍留有例外，程度不等值；「一時的に」（暫時地）講時間長短；「あっさり」（乾脆地）形容過程輕易，皆與「全數」的語意不同。',
    explanationEn:
      '「ことごとく」 is literary for "every last one, without exception", equaling 「一つ残らず」. 「たいてい」 (for the most part) still admits exceptions, so the degree is not equivalent; 「一時的に」 (temporarily) concerns duration; 「あっさり」 (readily, with little resistance) describes how easily it happened — none means "all of them".',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-iikae-010',
    stem: '会議が長引いたが、【辛うじて】終電に間に合った。',
    options: ['ぎりぎりのところで', '余裕をもって', '偶然', 'いつもどおり'],
    answerIndex: 0,
    explanation:
      '「辛うじて」是「勉強、好不容易才」，強調差一點就不行，等於「ぎりぎりのところで」。「余裕をもって」（從容有餘地）方向完全相反；「偶然」（碰巧）講的是機率而非驚險程度；「いつもどおり」（照常）沒有千鈞一髮的語感。',
    explanationEn:
      '「辛うじて」 means "barely, only just", stressing that failure was a hair\'s breadth away, so it equals 「ぎりぎりのところで」. 「余裕をもって」 (with time to spare) is the exact opposite; 「偶然」 (by chance) is about luck, not narrowness; 「いつもどおり」 (as usual) carries no sense of a close call.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-iikae-011',
    stem: '面接の間、彼は【しきりに】腕時計を気にしていた。',
    options: ['何度も繰り返し', '一度だけ', 'こっそりと', 'ぼんやりと'],
    answerIndex: 0,
    explanation:
      '「しきりに」是「頻頻、不斷地」，表示同一動作反覆發生，等於「何度も繰り返し」。「一度だけ」（只有一次）頻率方向相反；「こっそりと」（偷偷地）講的是隱密程度，與頻率無關；「ぼんやりと」（心不在焉地）描述精神狀態，皆不等值。',
    explanationEn:
      '「しきりに」 means "repeatedly, constantly", the same action occurring again and again, equaling 「何度も繰り返し」. 「一度だけ」 (just once) reverses the frequency; 「こっそりと」 (furtively) is about secrecy, not repetition; 「ぼんやりと」 (absent-mindedly) describes a mental state — none is equivalent.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-iikae-012',
    stem: '昨日の荒れた天気とは【打って変わって】、今朝は雲一つない晴天になった。',
    options: ['すっかり変わって', 'わずかに変わって', '相変わらず', '時間をかけて変わって'],
    answerIndex: 0,
    explanation:
      '「打って変わって」表示情況一百八十度地驟變，等於「すっかり変わって」。「わずかに変わって」（略有改變）程度差太多；「時間をかけて変わって」（慢慢改變）失去「驟然」的語感；「相変わらず」（依然如故）則是完全沒變，方向相反。',
    explanationEn:
      '「打って変わって」 expresses a complete, abrupt about-face in conditions, equaling 「すっかり変わって」. 「わずかに変わって」 (changed only slightly) is far too weak; 「時間をかけて変わって」 (changed gradually) loses the suddenness; 「相変わらず」 (the same as ever) means no change at all — the exact opposite.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-iikae-013',
    stem: '静まり返った会議室で、【不意に】非常ベルが鳴り響いた。',
    options: ['突然', '徐々に', '予定どおり', '再び'],
    answerIndex: 0,
    explanation:
      '「不意に」是「冷不防地、出其不意地」，強調毫無預兆，等於「突然」。「徐々に」（逐漸地）變化速度相反；「予定どおり」（按預定）表示早在意料之中，正好與「無預兆」相反；「再び」（再次）講次數，與突發性無關。',
    explanationEn:
      '「不意に」 means "without warning, out of nowhere", stressing the total lack of forewarning, so it equals 「突然」. 「徐々に」 (little by little) reverses the speed; 「予定どおり」 (as scheduled) means it was fully anticipated — precisely the opposite of unannounced; 「再び」 (once again) concerns repetition, not suddenness.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-iikae-014',
    stem: '冬山に登る前には、【綿密な】計画を立てておかなければならない。',
    options: ['細かいところまで行き届いた', 'おおまかな', '柔軟に変えられる', '短期間で立てた'],
    answerIndex: 0,
    explanation:
      '「綿密」形容計畫周詳細緻、毫無疏漏，等於「細かいところまで行き届いた」。「おおまかな」（粗略的）精細程度相反；「柔軟に変えられる」（可靈活調整）講的是彈性而非細緻；「短期間で立てた」（短時間擬定）與周密與否無關。',
    explanationEn:
      '「綿密」 describes a plan worked out meticulously with no detail overlooked, equaling 「細かいところまで行き届いた」. 「おおまかな」 (rough, broad-brush) reverses the level of detail; 「柔軟に変えられる」 (flexibly adjustable) is about adaptability, not thoroughness; 「短期間で立てた」 (drawn up in a short time) is unrelated to how careful the plan is.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-iikae-015',
    stem: '一方的な契約解除の通知を受け取り、社長はひどく【憤慨した】。',
    options: ['腹を立てた', '落ち込んだ', '不満に思った', '反省した'],
    answerIndex: 0,
    explanation:
      '「憤慨する」是書面語的「憤怒、氣憤」，等於「腹を立てる」。「不満に思う」（覺得不滿）程度太輕，憤慨是強烈的怒氣；「落ち込む」（沮喪消沉）情緒方向不同；「反省する」（反省）是檢討自己，語意完全不合。',
    explanationEn:
      '「憤慨する」 is literary for becoming indignant, boiling with anger, equaling 「腹を立てた」. 「不満に思った」 (felt dissatisfied) is far too mild — 「憤慨」 denotes intense anger, so the degree is not equivalent; 「落ち込んだ」 (became dejected) is a different emotion; 「反省した」 (reflected on one\'s own conduct) is self-examination and does not fit at all.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-iikae-016',
    stem: '会の途中で突然スピーチを頼まれて、すっかり【面食らって】しまった。',
    options: ['戸惑って', '感激して', '疲れ切って', '腹を立てて'],
    answerIndex: 0,
    explanation:
      '「面食らう」是「因突如其來的事而驚慌失措、不知所措」，等於「戸惑う」。「感激する」（感動）是正面情緒，方向不同；「腹を立てる」（生氣）雖也是負面反應，但重點在憤怒而非慌張；「疲れ切る」（累壞）講體力，皆不等值。',
    explanationEn:
      '「面食らう」 means to be caught off guard and flustered by something sudden, equaling 「戸惑って」. 「感激して」 (deeply moved) is a positive emotion, the wrong direction; 「腹を立てて」 (angered) is negative but centers on anger rather than bewilderment; 「疲れ切って」 (exhausted) is about physical fatigue — none matches.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-iikae-017',
    stem: '台風の接近に伴い、鉄道各社は明日の始発からの運転を【見合わせる】と発表した。',
    options: ['中止する', '継続する', '短縮する', '変更する'],
    answerIndex: 0,
    explanation:
      '「見合わせる」指暫且停止實施，新聞常見「運転を見合わせる」即「停駛」，等於「中止する」。「継続する」（繼續）方向相反；「短縮する」（縮短）與「変更する」（變更）都表示照樣進行只是調整內容，和「停止」不等值。',
    explanationEn:
      '「見合わせる」 means to hold off on carrying something out; in rail announcements 「運転を見合わせる」 means service is suspended, so it equals 「中止する」. 「継続する」 (to continue) is the opposite; 「短縮する」 (to shorten) and 「変更する」 (to modify) both mean the trains still run in adjusted form — neither equals stopping.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-iikae-018',
    stem: '彼のスピーチは【ありきたりな】表現ばかりで、少しも印象に残らなかった。',
    options: ['平凡でめずらしくない', '独創的な', '難解な', '大げさな'],
    answerIndex: 0,
    explanation:
      '「ありきたり」指到處都有、老套而不新鮮，等於「平凡でめずらしくない」。「独創的な」（獨創的）正好是反義；「難解な」（艱澀難懂的）講理解難度；「大げさな」（誇張的）講表現強度，都與「老套平凡」的語意不同。',
    explanationEn:
      '「ありきたり」 means commonplace and unoriginal, the kind found anywhere, equaling 「平凡でめずらしくない」. 「独創的な」 (original, inventive) is a direct antonym; 「難解な」 (abstruse) concerns difficulty of understanding; 「大げさな」 (overblown) concerns intensity of expression — neither of the latter means "trite".',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-iikae-019',
    stem: '彼女は国際税務に【精通して】おり、海外企業からの相談が絶えない。',
    options: [
      '非常に詳しく知って',
      '少し興味を持って',
      '関わった経験を持って',
      '苦手意識を持って',
    ],
    answerIndex: 0,
    explanation:
      '「精通する」是對某領域瞭若指掌、知之甚詳，等於「非常に詳しく知っている」。「少し興味を持つ」（有點興趣）程度相差懸殊；「関わった経験を持つ」（有相關經驗）不代表深入通曉；「苦手意識を持つ」（覺得不擅長）方向相反。',
    explanationEn:
      '「精通する」 means to know a field inside and out, with expert command, equaling 「非常に詳しく知って」. 「少し興味を持って」 (mildly interested) is worlds apart in degree; 「関わった経験を持って」 (has had some involvement) does not imply deep mastery; 「苦手意識を持って」 (feels weak at it) points in the opposite direction.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-iikae-020',
    stem: '警察は遺留品を求めて、現場の周辺を【くまなく】捜索した。',
    options: ['隅々まで残さず', 'ざっと', '重点的に', '定期的に'],
    answerIndex: 0,
    explanation:
      '「くまなく」是「無一遺漏地、每個角落都」，等於「隅々まで残さず」。「ざっと」（大致粗略地）徹底程度正好相反；「重点的に」（重點式地）只集中在部分地方，仍會遺漏；「定期的に」（定期地）講頻率，與範圍徹底與否無關。',
    explanationEn:
      '「くまなく」 means "exhaustively, leaving no corner unsearched", equaling 「隅々まで残さず」. 「ざっと」 (roughly, cursorily) is the exact opposite in thoroughness; 「重点的に」 (focusing on key spots) still leaves areas uncovered; 「定期的に」 (at regular intervals) concerns frequency, not coverage.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-iikae-021',
    stem: '何度修正しても同じ不具合が再発するため、担当者もついに【匙を投げた】。',
    options: [
      '見込みがないと諦めた',
      '責任を他人に押し付けた',
      '腹を立てて席を立った',
      '思い切って一から作り直した',
    ],
    answerIndex: 0,
    explanation:
      '「匙を投げる」源自醫生扔下藥匙、宣告無藥可救，比喻判斷沒有希望而放棄，等於「見込みがないと諦める」。「責任を他人に押し付けた」是推卸責任，原句沒有這層意思；「思い切って一から作り直した」反而是積極重來，方向恰好相反。',
    explanationEn:
      '「匙を投げる」 comes from a doctor casting down the medicine spoon and declaring a case incurable; it means giving up after judging there is no hope, equaling 「見込みがないと諦めた」. 「責任を他人に押し付けた」 (shifted the blame onto others) adds a meaning the original lacks; 「思い切って一から作り直した」 (boldly rebuilt from scratch) is active perseverance — the very opposite of quitting.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-iikae-022',
    stem: '祖父は甘いものに【目がない】らしく、和菓子を出すと必ず全部平らげてしまう。',
    options: [
      '大好きでたまらない',
      'まったく興味がない',
      '良し悪しを見分けられない',
      '体質的に受け付けない',
    ],
    answerIndex: 0,
    explanation:
      '「目がない」是慣用句，指喜歡到失去判斷力的程度，即「大好きでたまらない」。照字面直譯成「まったく興味がない」（毫無興趣）正好與原意相反，是最典型的陷阱；「良し悪しを見分けられない」是把「目」誤解成鑑賞眼光；「体質的に受け付けない」講體質，與喜好無關。',
    explanationEn:
      '「目がない」 is an idiom meaning to love something so much that one\'s judgment goes out the window, i.e. 「大好きでたまらない」. The literal reading 「まったく興味がない」 (no interest at all) is the classic trap and means the exact opposite; 「良し悪しを見分けられない」 misreads 「目」 as an eye for quality; 「体質的に受け付けない」 concerns physical constitution, not fondness.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-iikae-023',
    stem: 'これ以上誤解を深めないためにも、一度【腹を割って】話し合う必要がある。',
    options: ['本心を隠さずに', '声を荒らげて', '第三者を交えて', '時間を区切って'],
    answerIndex: 0,
    explanation:
      '「腹を割る」的「腹」代表內心，比喻敞開心扉、毫不隱瞞地說出真心話，等於「本心を隠さずに」。「声を荒らげて」（提高嗓門）講的是情緒激動的態度，並非坦誠；「第三者を交えて」（找第三方加入）、「時間を区切って」（限定時間）都是談話的形式安排，與吐露真心無關。',
    explanationEn:
      '「腹を割る」 uses 「腹」 to stand for one\'s true feelings: to open up and talk with nothing held back, equaling 「本心を隠さずに」. 「声を荒らげて」 (raising one\'s voice) depicts agitation, not candor; 「第三者を交えて」 (bringing in a third party) and 「時間を区切って」 (setting a time limit) are logistics of the meeting, unrelated to speaking one\'s mind.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-iikae-024',
    stem: '新任の担任は、反抗的な生徒たちの指導にすっかり【手を焼いて】いるようだ。',
    options: ['扱いに困って', '熱心に打ち込んで', '興味を失って', '自信を深めて'],
    answerIndex: 0,
    explanation:
      '「手を焼く」是慣用句，比喻對象難以應付、處理起來很棘手，等於「扱いに困る」。「熱心に打ち込んで」（熱衷投入）是正面的積極態度，語感方向不同；「興味を失って」（失去興趣）是放著不管，而「手を焼く」是想管卻管不動；「自信を深めて」（更有自信）方向完全相反。',
    explanationEn:
      '「手を焼く」 is an idiom meaning someone or something is a real handful, hard to deal with, equaling 「扱いに困って」. 「熱心に打ち込んで」 (throwing oneself in eagerly) is positive engagement, the wrong tone; 「興味を失って」 (losing interest) implies walking away, whereas 「手を焼く」 means struggling while still trying to cope; 「自信を深めて」 (growing more confident) is the exact opposite.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-iikae-025',
    stem: '三十年もの間、無償で地域の清掃を続けてきた彼の姿には【頭が下がる】。',
    options: [
      '心から感心させられる',
      '同情を禁じ得ない',
      '引け目を感じてしまう',
      '理解に苦しむ',
    ],
    answerIndex: 0,
    explanation:
      '「頭が下がる」指對方的行為令人不由得低頭致敬，即「由衷敬佩」，等於「心から感心させられる」。「引け目を感じてしまう」（自覺矮人一截）是與「頭が上がらない」混淆的陷阱，後者才是有虧欠而抬不起頭；「同情を禁じ得ない」（不禁同情）把敬佩誤成憐憫，方向不同。',
    explanationEn:
      '「頭が下がる」 means someone\'s conduct makes you bow your head in spontaneous respect — heartfelt admiration, equaling 「心から感心させられる」. 「引け目を感じてしまう」 (feeling inferior) is a trap that confuses this with 「頭が上がらない」, which means being unable to hold one\'s head up out of indebtedness; 「同情を禁じ得ない」 (cannot help pitying) mistakes admiration for pity; 「理解に苦しむ」 (baffling) is bewilderment, not respect.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-iikae-026',
    stem: '効果がはっきりしない健康食品を【むやみに】買い込むのは感心しない。',
    options: ['よく考えもせずに', '計画を立てて', '必要な分だけ', '人に隠れて'],
    answerIndex: 0,
    explanation:
      '「むやみに」是「不加思索地、胡亂地」，強調缺乏考慮和節制，等於「よく考えもせずに」。「計画を立てて」（有計畫地）正好是深思熟慮的相反面；「必要な分だけ」（只買需要的量）是有節制的行為，與「胡亂」相反；「人に隠れて」（背著人偷偷地）講隱密性，語意無關。',
    explanationEn:
      '「むやみに」 means "recklessly, without thinking", stressing the lack of consideration and restraint, equaling 「よく考えもせずに」. 「計画を立てて」 (according to a plan) is the opposite of thoughtless; 「必要な分だけ」 (only as much as needed) is disciplined behavior, again the reverse; 「人に隠れて」 (behind people\'s backs) is about secrecy, which is beside the point.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-iikae-027',
    stem: '【かねてから】うわさされていた両社の合併が、ついに正式に発表された。',
    options: ['以前から', 'ごく最近', '何の前触れもなく', '大々的に'],
    answerIndex: 0,
    explanation:
      '「かねてから」是書面語的「從以前、老早就」，表示事情早在之前就已開始，等於「以前から」。「ごく最近」（就在最近）時間跨度不等值；「何の前触れもなく」（毫無預兆地）與「早有傳聞」正好相反；「大々的に」（大張旗鼓地）講規模，與時間無關。',
    explanationEn:
      '「かねてから」 is literary for "for some time now, since before", meaning the matter had already been in the air, equaling 「以前から」. 「ごく最近」 (only very recently) gets the time span wrong; 「何の前触れもなく」 (without any warning) contradicts the rumors having long circulated; 「大々的に」 (on a grand scale) concerns scale, not time.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-iikae-028',
    stem: '大病を患ったと聞いていたが、久しぶりに会った彼は【いたって】元気そうだった。',
    options: ['きわめて', 'どうにか', '思ったより', 'うわべだけ'],
    answerIndex: 0,
    explanation:
      '「いたって」是「極其、非常」，修飾狀態的程度很高，等於「きわめて」。「どうにか」（勉勉強強）暗示差點達不到，程度不等值；「思ったより」（比想像中）只是相對比較，不保證程度高；「うわべだけ」（只是表面上）暗示內裡並非如此，語感方向不同。',
    explanationEn:
      '「いたって」 means "extremely, exceedingly", marking a very high degree, equaling 「きわめて」. 「どうにか」 (just barely managing) implies scraping by — a much weaker degree; 「思ったより」 (more than expected) is only a relative comparison and guarantees no high degree; 「うわべだけ」 (only on the surface) hints that the reality is different, an entirely separate nuance.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-iikae-029',
    stem: '飛び出してきた自転車を、運転手は【とっさに】ハンドルを切って避けた。',
    options: ['考える間もなく瞬間的に', 'あらかじめ準備して', '落ち着いてゆっくり', 'しかたなく'],
    answerIndex: 0,
    explanation:
      '「とっさに」是「一瞬間、下意識地」，指來不及思考的瞬間反應，等於「考える間もなく瞬間的に」。「あらかじめ準備して」（事先準備好）表示早有預料，正好相反；「落ち着いてゆっくり」（沉著緩慢地）失去瞬間性；「しかたなく」（不得已）講被迫的心情，與反應速度無關。',
    explanationEn:
      '「とっさに」 means "in a split second, reflexively" — a reaction faster than conscious thought, equaling 「考える間もなく瞬間的に」. 「あらかじめ準備して」 (having prepared beforehand) implies anticipation, the exact opposite; 「落ち着いてゆっくり」 (calmly and slowly) erases the instantaneousness; 「しかたなく」 (reluctantly) is about feeling forced, not about speed.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-iikae-030',
    stem: '原材料の高騰を受けて、大手食品メーカーは【軒並み】値上げに踏み切った。',
    options: ['どこも例外なく', 'ほんの一部だけ', '順番に少しずつ', 'ためらいながら'],
    answerIndex: 0,
    explanation:
      '「軒並み」原指「一戶挨著一戶」，引申為「家家都、無一例外地」，等於「どこも例外なく」。「ほんの一部だけ」（只有少數）範圍正好相反；「順番に少しずつ」（依序一點一點地）講的是進行方式而非涵蓋範圍；「ためらいながら」（猶豫著）描述心態，語意無關。',
    explanationEn:
      '「軒並み」 literally means "eaves in a row" and by extension "every single one of them", equaling 「どこも例外なく」. 「ほんの一部だけ」 (only a handful) reverses the scope; 「順番に少しずつ」 (one after another, bit by bit) describes the manner of proceeding, not the coverage; 「ためらいながら」 (hesitantly) describes attitude and is unrelated.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-iikae-031',
    stem: '度重なる資金難が、この技術の実用化を長年【阻んで】きた。',
    options: ['妨げて', '後押しして', '見守って', '覆い隠して'],
    answerIndex: 0,
    explanation:
      '「阻む」是書面語的「阻礙、阻擋」，指妨礙事情前進，等於「妨げる」。「後押しする」（推一把、助推）方向完全相反；「見守る」（在旁守望）是不介入的中立態度，沒有阻擋之意；「覆い隠す」（掩蓋）是把事情藏起來不讓人知道，與妨礙進展是不同概念。',
    explanationEn:
      '「阻む」 is literary for "to block, impede" — hindering forward movement, equaling 「妨げて」. 「後押しして」 (backing, giving a push) is the exact opposite; 「見守って」 (watching over) is neutral non-interference with no sense of blocking; 「覆い隠して」 (covering up) means hiding something from view, a different concept from obstructing progress.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-iikae-032',
    stem: 'スマートフォンの普及とともに、この町でも公衆電話は急速に【廃れて】いった。',
    options: ['使われなくなって', '性能が向上して', '数を増やして', '有料化されて'],
    answerIndex: 0,
    explanation:
      '「廃れる」指事物過時、不再被使用或流行，等於「使われなくなる」。「数を増やして」（數量增加）方向正好相反；「性能が向上して」（性能提升）是進步而非沒落；「有料化されて」（改為收費）只是收費方式改變，與是否被淘汰無關。',
    explanationEn:
      '「廃れる」 means to fall out of use or fashion, to become obsolete, equaling 「使われなくなって」. 「数を増やして」 (growing in number) points the opposite way; 「性能が向上して」 (improving in performance) is advancement, not decline; 「有料化されて」 (switching to paid service) is merely a change in pricing, unrelated to dying out.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-iikae-033',
    stem: 'この十年で、再生医療の分野は【目覚ましい】進歩を遂げた。',
    options: ['驚くほど立派な', 'ごく緩やかな', '一時的な', '真偽の疑わしい'],
    answerIndex: 0,
    explanation:
      '「目覚ましい」形容成果顯著得令人瞠目，等於「驚くほど立派な」。「ごく緩やかな」（極為和緩的）程度相差懸殊，正是干擾方向；「一時的な」（一時的）講持續時間短，與顯著與否無關；「真偽の疑わしい」（真偽可疑的）是負面評價，與讚嘆的語感相反。',
    explanationEn:
      '「目覚ましい」 describes progress striking enough to amaze, equaling 「驚くほど立派な」. 「ごく緩やかな」 (extremely gradual) is the intended trap, wildly off in degree; 「一時的な」 (short-lived) concerns duration, not impressiveness; 「真偽の疑わしい」 (of dubious authenticity) is a negative judgment that clashes with the admiring tone.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-iikae-034',
    stem: '時間の都合上、詳細なデータの説明は【割愛させて】いただきます。',
    options: ['省略させて', '後回しにさせて', '簡単にまとめさせて', '担当者に任せて'],
    answerIndex: 0,
    explanation:
      '「割愛する」指忍痛捨去、略去不提，等於「省略する」。「後回しにする」（延後處理）表示之後還會講，與「不講」不同；「簡単にまとめる」（簡要帶過）仍有說明，只是濃縮，程度不等值；「担当者に任せる」（交給負責人）是改由他人處理，語意無關。',
    explanationEn:
      '「割愛する」 means to leave something out with regret, to omit, equaling 「省略させて」. 「後回しにさせて」 (putting it off) implies it will still be covered later, unlike omitting it entirely; 「簡単にまとめさせて」 (summarizing briefly) still presents the content in condensed form, so the degree differs; 「担当者に任せて」 (leaving it to the person in charge) is delegation, an unrelated idea.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-iikae-035',
    stem: '今回の対応の遅れによって、社の危機管理体制の甘さが【露呈した】。',
    options: ['はっきりと表に出た', 'ようやく改善された', 'うまく隠された', 'いっそう強化された'],
    answerIndex: 0,
    explanation:
      '「露呈する」是書面語，指原本藏著的缺點或問題暴露出來，等於「はっきりと表に出る」。「うまく隠された」（被巧妙掩蓋）方向正好相反；「ようやく改善された」（總算改善）與「いっそう強化された」（更加強化）都是往好的方向變化，原句只講「暴露」，並無改善之意。',
    explanationEn:
      '「露呈する」 is literary for hidden flaws or problems being laid bare, equaling 「はっきりと表に出た」. 「うまく隠された」 (skillfully concealed) is the exact opposite; 「ようやく改善された」 (finally improved) and 「いっそう強化された」 (further reinforced) are changes for the better, whereas the original says only that the weakness was exposed, not remedied.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-iikae-036',
    stem: '引っ越しに伴う住所変更などの【煩わしい】手続きが、ようやくすべて片付いた。',
    options: ['面倒で気が重い', '費用のかさむ', 'やりがいのある', 'めったにない'],
    answerIndex: 0,
    explanation:
      '「煩わしい」形容瑣碎麻煩、令人心煩，等於「面倒で気が重い」。「費用のかさむ」（花費高昂的）講金錢負擔而非心理負擔；「やりがいのある」（有成就感的）是正面評價，語感相反；「めったにない」（難得一見的）講頻率，與麻煩與否無關。',
    explanationEn:
      '「煩わしい」 describes fiddly, irksome chores that weigh on the mind, equaling 「面倒で気が重い」. 「費用のかさむ」 (running up costs) is a financial burden, not a psychological one; 「やりがいのある」 (rewarding) is positive, the opposite tone; 「めったにない」 (rare) concerns frequency and says nothing about hassle.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-iikae-037',
    stem: '専門家は、このままでは伝統技術の担い手が絶えてしまうのではないかと【危惧して】いる。',
    options: ['心配して', '期待して', '断定して', '提案して'],
    answerIndex: 0,
    explanation:
      '「危惧する」是書面語的「憂慮、擔心（壞事發生）」，等於「心配する」。「期待する」（期待）是盼望好結果，方向正好相反；「断定する」（斷定）表示已下結論，原句用「〜のではないか」可見尚屬擔憂而非定論；「提案する」（提議）是提出辦法，語意無關。',
    explanationEn:
      '「危惧する」 is literary for fearing that something bad may come to pass, equaling 「心配して」. 「期待して」 (hoping for) anticipates a good outcome — the reverse direction; 「断定して」 (asserting conclusively) claims certainty, yet the sentence\'s 「〜のではないか」 shows this is worry, not a verdict; 「提案して」 (proposing) puts forward a solution and is unrelated.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-iikae-038',
    stem: '突然の停電にも、支配人は少しも【うろたえる】ことなく客を誘導した。',
    options: ['慌てふためく', '不満を漏らす', 'ためらう', '声を張り上げる'],
    answerIndex: 0,
    explanation:
      '「うろたえる」指遇到突發狀況而驚慌失措，等於「慌てふためく」。「ためらう」（躊躇）是拿不定主意而遲疑，重點在猶豫而非慌亂，語感不等值；「不満を漏らす」（發牢騷）講情緒宣洩；「声を張り上げる」（放大嗓門）只是提高音量，皆非「慌張」。',
    explanationEn:
      '「うろたえる」 means to panic and lose one\'s composure at a sudden turn of events, equaling 「慌てふためく」. 「ためらう」 (to hesitate) centers on indecision rather than panic, so it is not equivalent; 「不満を漏らす」 (to grumble) is venting displeasure; 「声を張り上げる」 (to raise one\'s voice) is mere loudness — neither means being flustered.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-iikae-039',
    stem: '新制度の導入について、社員からは【概ね】好意的な意見が寄せられた。',
    options: ['だいたいにおいて', '全員一致で', 'ごく一部から', '予想に反して'],
    answerIndex: 0,
    explanation:
      '「概ね」是書面語的「大體上、大致」，表示整體傾向如此但容許例外，等於「だいたいにおいて」。「全員一致で」（全體一致）把程度拉到毫無例外，過強不等值；「ごく一部から」（僅來自極少數）範圍正好相反；「予想に反して」（出乎意料地）講與預期的落差，語意無關。',
    explanationEn:
      '「概ね」 is literary for "on the whole, by and large", describing the general tendency while allowing exceptions, equaling 「だいたいにおいて」. 「全員一致で」 (unanimously) overshoots by excluding all exceptions; 「ごく一部から」 (from only a small minority) reverses the scope; 「予想に反して」 (contrary to expectations) is about defying predictions, an unrelated notion.',
  },
  {
    kind: 'choice',
    id: 'n1-vocab-iikae-040',
    stem: '定期的な点検を徹底することで、重大な事故を【未然に】防ぐことができる。',
    options: ['起こる前に', '起きた直後に', '完全に', '偶然に'],
    answerIndex: 0,
    explanation:
      '「未然に」是書面語，指「在事情尚未發生之前」，「未然に防ぐ」即「防範於未然」，等於「起こる前に」。「起きた直後に」（發生後立刻）時間點正好相反；「完全に」（完全地）講防止的徹底程度而非時機；「偶然に」（碰巧）與有計畫的預防語感不合。',
    explanationEn:
      '「未然に」 is literary for "before it happens"; 「未然に防ぐ」 means to nip something in the bud, equaling 「起こる前に」. 「起きた直後に」 (right after it occurs) reverses the timing; 「完全に」 (completely) is about how thoroughly it is prevented, not when; 「偶然に」 (by coincidence) clashes with deliberate, planned prevention.',
  },
]
