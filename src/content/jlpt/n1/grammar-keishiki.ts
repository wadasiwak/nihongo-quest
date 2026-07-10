import type { JlptQuestion } from '../../types'

export const questions: JlptQuestion[] = [
  {
    kind: 'choice',
    id: 'n1-grammar-keishiki-001',
    stem: '彼女は合格の知らせを聞いて、飛び上がら（　）に喜んだ。',
    options: ['んばかり', 'んがため', 'ないまで', 'ずじまい'],
    answerIndex: 0,
    explanation:
      '「〜んばかりに」接動詞ない形去ない（する→せん），表「幾乎要…似地」，誇張描寫程度，「飛び上がらんばかりに喜んだ」即「高興得幾乎跳起來」。「んがため」表目的（為了…），與喜悅的描寫不合；「ずじまい」表「最終沒做成」，接續與語意皆錯。',
    explanationEn:
      '「〜んばかりに」 attaches to the nai-stem of a verb (with する→せん) and means as if about to do something, an exaggerated description of degree, so 「飛び上がらんばかりに喜んだ」 means she was so happy she practically jumped. 「んがため」 expresses purpose (in order to), which does not fit a description of joy, and 「ずじまい」 means ended up never doing it — wrong in both attachment and meaning.',
  },
  {
    kind: 'choice',
    id: 'n1-grammar-keishiki-002',
    stem: '普段は静かなこの町も、祭りの季節（　）、観光客であふれかえる。',
    options: ['ともなると', 'ともなしに', 'いかんによらず', 'に至るまで'],
    answerIndex: 0,
    explanation:
      '「〜ともなると」表「一旦到了…的特殊時節或地位，情況就大不相同」，與前句「平時安靜」的對比正合。「ともなしに」用於「不經意地…」（見るともなしに），不能接在名詞後表時節；「いかんによらず」是「不論…如何都…」，與「普段は静か」矛盾；「に至るまで」表範圍擴及，接續不完整。',
    explanationEn:
      '「〜ともなると」 means once things reach a special time or status, the situation changes completely, matching the contrast with the normally quiet town. 「ともなしに」 is used for doing something absent-mindedly (as in 「見るともなしに」) and cannot follow a noun to mark a season; 「いかんによらず」 means regardless of, contradicting 「普段は静か」; and 「に至るまで」 marks extent (even down to), leaving the sentence incomplete here.',
  },
  {
    kind: 'choice',
    id: 'n1-grammar-keishiki-003',
    stem: '医師（　）、患者の利益を何よりも優先しなければならない。',
    options: ['たるもの', 'なくしては', 'をよそに', 'はおろか'],
    answerIndex: 0,
    explanation:
      '「〜たるもの」接身分、職位名詞，表「身為…的人（理應…）」，帶書面語的責任語感，故「医師たるもの」正確。「はおろか」是「別說…連…也」，須與後項的「さえ／まで」構成對比；「をよそに」表「無視…」，主語結構不通；「なくしては」是「若沒有…就…」，語意不合。',
    explanationEn:
      '「〜たるもの」 attaches to nouns of status or position and means anyone who is a ... (ought to ...), with a literary sense of duty, so 「医師たるもの」 is correct. 「はおろか」 means let alone and must pair with a following 「さえ／まで」; 「をよそに」 means ignoring ..., which breaks the subject structure; and 「なくしては」 means without ... (nothing is possible), which does not fit.',
  },
  {
    kind: 'choice',
    id: 'n1-grammar-keishiki-004',
    stem: '誠に勝手ながら、本日午後6時（　）閉店させていただきます。',
    options: ['をもって', 'をもとに', 'に至って', 'をものともせず'],
    answerIndex: 0,
    explanation:
      '「〜をもって」接時間名詞，書面語表「以此時點為界（結束）」，是公告慣用句，「午後6時をもって閉店」即「營業至下午6時為止」。「をもとに」是「以…為依據素材」；「に至って」表「事態發展到…才終於」，與單純的打烊公告不合。本句「させていただきます」為謙讓表達，屬正式告示文體。',
    explanationEn:
      '「〜をもって」 attaches to a time noun and, in formal writing, marks that point as the cutoff, a stock phrase in notices: 「午後6時をもって閉店」 means we close as of 6 p.m. today. 「をもとに」 means based on ...; 「に至って」 means only when things finally reached ..., which does not suit a simple closing notice. The humble 「させていただきます」 confirms this is formal announcement style.',
  },
  {
    kind: 'choice',
    id: 'n1-grammar-keishiki-005',
    stem: 'この繊細な模様は、熟練した職人（　）の技といえるだろう。',
    options: ['ならでは', 'をおいて', 'いかんで', 'はさておき'],
    answerIndex: 0,
    explanation:
      '「〜ならでは」表「唯有…才有的」，肯定其獨特價值，「職人ならではの技」即「老師傅獨有的手藝」。「をおいて」須以「〜をおいてほかにない」的形式使用，不能直接加「の」修飾名詞；「いかんで」表「取決於…」；「はさておき」是「…姑且不論」，接續與語意皆不合。',
    explanationEn:
      '「〜ならでは」 means found only in ..., affirming something\'s unique value, so 「職人ならではの技」 means craftsmanship only a master artisan could produce. 「をおいて」 must be used in the frame 「〜をおいてほかにない」 and cannot take 「の」 to modify a noun directly; 「いかんで」 means depending on ...; and 「はさておき」 means setting ... aside — wrong in both attachment and meaning.',
  },
  {
    kind: 'choice',
    id: 'n1-grammar-keishiki-006',
    stem: '彼は優秀だが、何事も一人で抱え込む（　）。',
    options: ['きらいがある', 'かいがある', 'ゆえんである', 'に堪えない'],
    answerIndex: 0,
    explanation:
      '「〜きらいがある」表「有…的（不良）傾向」，用於委婉批評性格或作風，「抱え込むきらいがある」即「有凡事獨自硬扛的毛病」，與前句「優秀だが」的轉折正合。「かいがある」是「值得…」；「ゆえんである」是「這正是…的緣由」；「に堪えない」是「不堪…」，語意皆不通。',
    explanationEn:
      '「〜きらいがある」 means to have an (undesirable) tendency to ..., a mild criticism of someone\'s disposition, so 「抱え込むきらいがある」 (has a bad habit of shouldering everything alone) fits the concessive 「優秀だが」. 「かいがある」 means to be worth doing; 「ゆえんである」 means that is precisely the reason for ...; and 「に堪えない」 means unbearable to ... — none makes sense here.',
  },
  {
    kind: 'choice',
    id: 'n1-grammar-keishiki-007',
    stem: '顧客からの苦情が殺到する（　）、経営陣はようやく問題の深刻さを認めた。',
    options: ['に至って', 'をふまえて', 'にかこつけて', 'にもまして'],
    answerIndex: 0,
    explanation:
      '「〜に至って」表「事態發展到…的（嚴重）地步，才終於…」，與後句的「ようやく」相呼應，故正確。「をふまえて」前須接名詞或「こと」，不能直接接動詞辭書形；「にかこつけて」是「拿…當藉口」；「にもまして」是「比…更加」，接續與語意皆不合。',
    explanationEn:
      '「〜に至って」 means only when things escalated to the (grave) point of ..., did someone finally act, echoing the 「ようやく」 in the main clause, so it is correct. 「をふまえて」 must follow a noun or 「こと」, not a dictionary-form verb; 「にかこつけて」 means using ... as a pretext; and 「にもまして」 means even more than ... — wrong in attachment and meaning alike.',
  },
  {
    kind: 'choice',
    id: 'n1-grammar-keishiki-008',
    stem: '昇進に長女の誕生にと、今年の彼はいいこと（　）だった。',
    options: ['ずくめ', 'まみれ', 'ぐるみ', 'がらみ'],
    answerIndex: 0,
    explanation:
      '「〜ずくめ」表「清一色全是…」，「いいことずくめ」（好事連連）是固定搭配。「まみれ」只用於泥、汗、血等具體髒污沾滿全身，不能接抽象的「いいこと」；「ぐるみ」是「連同…整體」（家族ぐるみ）；「がらみ」表「牽扯到…」（金がらみ），皆不合句意。',
    explanationEn:
      '「〜ずくめ」 means nothing but ..., through and through, and 「いいことずくめ」 (one good thing after another) is a set collocation. 「まみれ」 is used only for tangible grime like mud, sweat, or blood covering the body, so it cannot attach to the abstract 「いいこと」; 「ぐるみ」 means including the whole ... (as in 「家族ぐるみ」); and 「がらみ」 means entangled with ... (as in 「金がらみ」) — none fits.',
  },
  {
    kind: 'choice',
    id: 'n1-grammar-keishiki-009',
    stem: '彼は彼（　）に、家族のことを真剣に考えているのだ。',
    options: ['なり', 'ごとき', 'がてら', 'かぎり'],
    answerIndex: 0,
    explanation:
      '「〜なりに」表「以…相應的方式、在自身能力範圍內盡力」，「彼は彼なりに」即「他也用他自己的方式認真思考」。「ごとき」是帶輕蔑的「…之流」，接在此處文法不通；「がてら」表「順便」，只接動作性名詞；「かぎり」是「只要…／竭盡…」，接續皆錯。',
    explanationEn:
      '「〜なりに」 means in one\'s own way, doing what one can within one\'s own limits, so 「彼は彼なりに」 means he, in his own way, thinks seriously about his family. 「ごとき」 is a contemptuous the likes of ... and is ungrammatical here; 「がてら」 (while at it) attaches only to action nouns; and 「かぎり」 means as long as / to the utmost — all wrong in attachment.',
  },
  {
    kind: 'choice',
    id: 'n1-grammar-keishiki-010',
    stem: '終業のチャイムが鳴る（　）、彼は事務所を飛び出していった。',
    options: ['が早いか', 'が最後', 'そばから', 'ともなく'],
    answerIndex: 0,
    explanation:
      '「〜が早いか」接動詞辭書形，表「一…立刻就…」，用於描寫一次性的過去事件，後接瞬間動作「飛び出していった」正合。「が最後」須接た形（〜たが最後）且表「一旦…就無法挽回」；「そばから」用於反覆發生的事，與這種單一過去事件不合；「ともなく」表「不經意地」，語意不通。',
    explanationEn:
      '「〜が早いか」 attaches to the dictionary form and means the moment ... happened, describing a one-off past event, so it pairs naturally with the instantaneous 「飛び出していった」. 「が最後」 requires the ta-form (「〜たが最後」) and means once you do it, there is no going back; 「そばから」 is for repeatedly recurring events, not a single past occurrence; and 「ともなく」 means absent-mindedly, which makes no sense.',
  },
  {
    kind: 'choice',
    id: 'n1-grammar-keishiki-011',
    stem: '覚える（　）忘れていくので、単語の勉強がいっこうに進まない。',
    options: ['そばから', 'なり', 'や否や', 'が早いか'],
    answerIndex: 0,
    explanation:
      '「〜そばから」表「才剛…馬上又…」，專用於同樣的事一再反覆（背了就忘、擦了又髒），與「いっこうに進まない」的習慣性語境相合。「なり」「や否や」「が早いか」雖然都表「一…就…」，但都用於敘述一次性的過去事件，不能用於這種反覆發生的情況。',
    explanationEn:
      '「〜そばから」 means no sooner do I ... than ..., reserved for the same thing happening again and again (memorize and forget, wipe and it gets dirty), matching the habitual context of 「いっこうに進まない」. 「なり」, 「や否や」, and 「が早いか」 all mean as soon as, but they narrate one-time past events and cannot describe this kind of repeated cycle.',
  },
  {
    kind: 'choice',
    id: 'n1-grammar-keishiki-012',
    stem: '若輩者（　）、至らぬ点も多々あるかと存じますが、ご指導ご鞭撻のほどお願い申し上げます。',
    options: ['ゆえ', 'すら', 'だに', 'なりとも'],
    answerIndex: 0,
    explanation:
      '「〜ゆえ（に）」是書面語的原因表達，自謙問候慣用「若輩者ゆえ」＝「因資歷尚淺」。「すら」「だに」都是「連…都」的極端舉例，主語結構不通；「なりとも」是「哪怕…也好」（多少なりとも），皆與表原因的句意不合。本句「存じます」「申し上げます」為謙讓語，屬正式書信文體。',
    explanationEn:
      '「〜ゆえ（に）」 is a literary way of giving a reason, and the self-deprecating greeting 「若輩者ゆえ」 means because I am still inexperienced. 「すら」 and 「だに」 both mean even ..., citing an extreme example, which breaks the structure here; 「なりとも」 means even if only ... (as in 「多少なりとも」) — none expresses cause. The humble 「存じます」 and 「申し上げます」 mark this as formal epistolary style.',
  },
  {
    kind: 'choice',
    id: 'n1-grammar-keishiki-013',
    stem: '子どもたちは泥（　）になって、日が暮れるまでサッカーに夢中だった。',
    options: ['まみれ', 'ずくめ', 'がち', 'ぐるみ'],
    answerIndex: 0,
    explanation:
      '「〜まみれ」表泥、汗、血等具體髒污「沾滿全身」，「泥まみれになって」正確。「ずくめ」用於抽象的「清一色全是…」（いいことずくめ），不用於具體沾附；「がち」表「容易變成…的傾向」，接續不合；「ぐるみ」是「連同…整體」，語意不通。',
    explanationEn:
      '「〜まみれ」 describes tangible grime such as mud, sweat, or blood covering the whole body, so 「泥まみれになって」 is correct. 「ずくめ」 is for the abstract nothing but ... (as in 「いいことずくめ」), not physical smearing; 「がち」 means prone to ... and does not attach this way; and 「ぐるみ」 means including the whole ..., which makes no sense here.',
  },
  {
    kind: 'choice',
    id: 'n1-grammar-keishiki-014',
    stem: '水道を（　）にして歯を磨くのは、水がもったいない。',
    options: ['出しっぱなし', '出すっぱなし', '出したっぱなし', '出しっきり'],
    answerIndex: 0,
    explanation:
      '「〜っぱなし」接動詞ます形語幹，表「做了之後就放著不管」，帶責備語感，「出しっぱなし」即「水開著不關」。「出すっぱなし」「出したっぱなし」接續錯誤，っぱなし不能接辭書形或た形；「出しっきり」不是慣用形，「〜きり」表「自…之後就再也沒…」（行ったきり），用法不同。',
    explanationEn:
      '「〜っぱなし」 attaches to the masu-stem and means doing something and then leaving it unattended, with a reproachful tone, so 「出しっぱなし」 means leaving the water running. 「出すっぱなし」 and 「出したっぱなし」 are attachment errors — っぱなし cannot follow the dictionary or ta-form; and 「出しっきり」 is not an established form, since 「〜きり」 means never again since ... (as in 「行ったきり」), a different usage.',
  },
  {
    kind: 'choice',
    id: 'n1-grammar-keishiki-015',
    stem: '就職の報告（　）、恩師のお宅を訪問した。',
    options: ['かたがた', 'にかまけて', 'ながらも', 'ともなしに'],
    answerIndex: 0,
    explanation:
      '「〜かたがた」接動作性名詞，表「兼作…順道…」，用於拜訪、道謝等鄭重場面，「報告かたがた訪問した」正確。「にかまけて」是「只顧著…（而疏忽其他）」，與後句「登門拜訪」矛盾；「ながらも」是逆接的「雖然…」；「ともなしに」表「不經意地」，接續與語意皆不合。',
    explanationEn:
      '「〜かたがた」 attaches to an action noun and means combining one errand with another, used for formal occasions like visits and thanks, so 「報告かたがた訪問した」 is correct. 「にかまけて」 means being so absorbed in ... (that one neglects other things), contradicting the visit that follows; 「ながらも」 is a concessive although; and 「ともなしに」 means absent-mindedly — wrong in both attachment and sense.',
  },
  {
    kind: 'choice',
    id: 'n1-grammar-keishiki-016',
    stem: '資金難により、その劇団は公演の中止（　）。',
    options: ['を余儀なくされた', 'を余儀なくさせた', 'を禁じ得なかった', 'に堪えなかった'],
    answerIndex: 0,
    explanation:
      '「〜を余儀なくされる」表「被迫不得已…」，主語是蒙受影響的一方（劇團），故被動的「余儀なくされた」正確。「余儀なくさせた」是使役形，主語須是造成事態的一方（如資金難），與本句主語不合；「禁じ得ない」用於「忍不住（湧起某種情感）」，不能接「中止」。',
    explanationEn:
      '「〜を余儀なくされる」 means to be forced into ..., with the affected party (the troupe) as subject, so the passive 「余儀なくされた」 is correct. 「余儀なくさせた」 is the causative, whose subject must be the cause of the situation (such as the funding crisis), mismatching this sentence\'s subject; and 「禁じ得ない」 is for being unable to suppress a welling emotion, so it cannot take 「中止」 as its object.',
  },
  {
    kind: 'choice',
    id: 'n1-grammar-keishiki-017',
    stem: '水は生命にとって欠く（　）ものである。',
    options: ['べからざる', 'べからず', 'べくもない', 'べくして'],
    answerIndex: 0,
    explanation:
      '「〜べからざる」是「べからず」的連體形，後面必須接名詞，「欠くべからざるもの」（不可或缺之物）是固定搭配。「べからず」只能放句尾（多見於告示），不能修飾名詞；「べくもない」表「根本不可能…」（望むべくもない），語意不通；「べくして」用於「〜べくして〜た」的必然結果句型，接續錯誤。',
    explanationEn:
      '「〜べからざる」 is the attributive form of 「べからず」 and must be followed by a noun, so 「欠くべからざるもの」 (an indispensable thing) is the set phrase. 「べからず」 can stand only at the end of a sentence (typically on signs) and cannot modify a noun; 「べくもない」 means there is no way one could ... (as in 「望むべくもない」), the wrong meaning; and 「べくして」 belongs to the inevitable-outcome pattern 「〜べくして〜た」, an attachment error.',
  },
  {
    kind: 'choice',
    id: 'n1-grammar-keishiki-018',
    stem: '10年ぶりの優勝（　）、町全体がお祭りのような騒ぎになった。',
    options: ['とあって', 'とあれば', 'にあって', 'と思いきや'],
    answerIndex: 0,
    explanation:
      '「〜とあって」表「因為…這種特殊情況」，以既成事實為理由，後接實際發生的結果，故正確。「とあれば」是「如果是…的話」的假定條件，與已經發生的過去事實不合；「にあって」接時代、處境等名詞表「身處…之中」；「と思いきや」表「本以為…沒想到」，後句與優勝並不相反，語意不通。',
    explanationEn:
      '「〜とあって」 means because of the special circumstance of ..., taking an established fact as the reason and following it with what actually happened, so it is correct. 「とあれば」 is a hypothetical if it is ..., incompatible with a past fact; 「にあって」 attaches to nouns of era or circumstance and means situated in ...; and 「と思いきや」 means I thought ... but surprisingly — the result is not contrary to the victory, so it fails.',
  },
  {
    kind: 'choice',
    id: 'n1-grammar-keishiki-019',
    stem: '几帳面な姉（　）、弟は部屋の片づけさえ満足にできない。',
    options: ['にひきかえ', 'にもまして', 'もさることながら', 'はおろか'],
    answerIndex: 0,
    explanation:
      '「〜にひきかえ」表「與…相反、相較之下」，用於前後兩項形成鮮明對照（一絲不苟的姊姊對比連整理都不會的弟弟），故正確。「にもまして」是「比…更加」，須前後為同一評價方向；「もさることながら」是「…固然如此，…更是」，同樣要求同向遞進；「はおろか」須與「さえ／まで」構成「別說…連…」，此處結構不通。',
    explanationEn:
      '「〜にひきかえ」 means in stark contrast to ..., used when two items form a sharp contrast (the meticulous older sister versus the brother who cannot even tidy his room), so it is correct. 「にもまして」 means even more than ... and requires the same evaluative direction on both sides; 「もさることながら」 (not only ... but even more ...) likewise demands same-direction escalation; and 「はおろか」 must combine with 「さえ／まで」 in the let alone construction, which this sentence lacks.',
  },
  {
    kind: 'choice',
    id: 'n1-grammar-keishiki-020',
    stem: '今日（　）、たばこはきっぱりやめることにした。',
    options: ['を限りに', 'を皮切りに', 'をよそに', 'をおいて'],
    answerIndex: 0,
    explanation:
      '「〜を限りに」接時間名詞，表「以…為最後一次（從此不再）」，下決心戒菸的「今日を限りに」是典型用法。「を皮切りに」表「以…為開端接連發生」，方向恰好相反；「をよそに」是「無視…」；「をおいて」須以「〜をおいてほかにない」的形式使用，皆不合。',
    explanationEn:
      '「〜を限りに」 attaches to a time noun and means with ... as the last time (never again), so the smoker\'s resolution 「今日を限りに」 is the textbook use. 「を皮切りに」 means starting with ... a series follows, exactly the opposite direction; 「をよそに」 means ignoring ...; and 「をおいて」 must appear in the frame 「〜をおいてほかにない」 — none fits.',
  },
  {
    kind: 'choice',
    id: 'n1-grammar-keishiki-021',
    stem: 'たとえどんな理由（　）、無断欠勤は認められない。',
    options: ['であれ', 'とあれば', 'にあって', 'ながらに'],
    answerIndex: 0,
    explanation:
      '「〜であれ」與「たとえ／どんな」呼應，表「無論是…（都不例外）」的讓步，「どんな理由であれ」即「不管什麼理由都…」。「とあれば」是「如果是…的話（就特別…）」，與讓步的「たとえ」不搭；「にあって」接時代、處境名詞表「身處…之中」；「ながらに」是「保持…的狀態」（涙ながらに），語意皆不合。',
    explanationEn:
      '「〜であれ」 pairs with 「たとえ／どんな」 to express concession, no matter what ... (no exceptions), so 「どんな理由であれ」 means whatever the reason may be. 「とあれば」 means if it is ... (then specially ...), which clashes with the concessive 「たとえ」; 「にあって」 attaches to nouns of era or circumstance meaning situated in ...; and 「ながらに」 means while remaining in the state of ... (as in 「涙ながらに」) — all wrong in meaning.',
  },
  {
    kind: 'choice',
    id: 'n1-grammar-keishiki-022',
    stem: 'デザイン（　）色（　）、このかばんは私の好みにぴったりだ。',
    options: ['といい', 'として', 'とみえて', 'なくして'],
    answerIndex: 0,
    explanation:
      '「〜といい〜といい」列舉兩個代表性的例子，表「不論從…看還是從…看（都…）」，多用於整體評價，「デザインといい色といい」正確。「として」表資格身分，且不能成對列舉；「とみえて」是「看樣子是…」的推測；「なくして」是「若沒有…」，重複使用皆不成立，語意也不通。',
    explanationEn:
      '「〜といい〜といい」 lists two representative examples, meaning whether you look at ... or ..., typically for an overall appraisal, so 「デザインといい色といい」 is correct. 「として」 marks capacity or status and cannot be used as a listing pair; 「とみえて」 is the conjecture it seems that ...; and 「なくして」 means without ... — none can be doubled this way, and none fits the meaning.',
  },
  {
    kind: 'choice',
    id: 'n1-grammar-keishiki-023',
    stem: 'この境地は、名人の彼（　）初めて到達できるものだ。',
    options: ['にして', 'をおいて', 'ときたら', 'なりとも'],
    answerIndex: 0,
    explanation:
      '「〜にして」接名詞，與「初めて」呼應表「正因為到了…的程度（層次）才…」，「名人の彼にして初めて到達できる」即「唯有名人如他方能達到」。「をおいて」須以「〜をおいてほかにない」的形式收尾，不能接「初めて」；「ときたら」是「說到…（真是不像話）」的抱怨；「なりとも」是「哪怕…也好」，皆不合。',
    explanationEn:
      '「〜にして」 attaches to a noun and pairs with 「初めて」 to mean only at the level of ... does something become possible, so 「名人の彼にして初めて到達できる」 means only a master like him could reach this state. 「をおいて」 must close with 「〜をおいてほかにない」 and cannot precede 「初めて」; 「ときたら」 is the complaining when it comes to ...; and 「なりとも」 means even if only ... — none works.',
  },
  {
    kind: 'choice',
    id: 'n1-grammar-keishiki-024',
    stem: '彼女は事故当時の様子を、涙（　）語った。',
    options: ['ながらに', 'なりに', 'がてら', 'ばかりに'],
    answerIndex: 0,
    explanation:
      '「〜ながらに」表「保持著…的狀態」，「涙ながらに語る」（含淚訴說）是固定搭配，另有「生まれながらに」等慣用。「なりに」是「以…相應的方式」，「涙なりに」不成話；「がてら」表「順便」，只接動作性名詞；「ばかりに」是「就因為…（導致壞結果）」，接續與語意皆不合。',
    explanationEn:
      '「〜ながらに」 means while remaining in the state of ..., and 「涙ながらに語る」 (to speak in tears) is a set collocation, alongside idioms like 「生まれながらに」. 「なりに」 means in a manner befitting ..., so 「涙なりに」 is nonsense; 「がてら」 (while at it) attaches only to action nouns; and 「ばかりに」 means precisely because ... (a bad result followed) — wrong in attachment and meaning.',
  },
  {
    kind: 'choice',
    id: 'n1-grammar-keishiki-025',
    stem: 'あの人は一度しゃべり出し（　）、誰にも止められない。',
    options: ['たが最後', 'るが最後', 'ようが最後', 'ないが最後'],
    answerIndex: 0,
    explanation:
      '「〜たが最後」固定接動詞た形，表「一旦…就（陷入無法挽回的局面）」，「しゃべり出したが最後、誰にも止められない」即「一開口就沒人攔得住」。「るが最後」「ようが最後」「ないが最後」都是接續錯誤——這個文型不能接辭書形、意向形或ない形，只有た形一種接法。',
    explanationEn:
      '「〜たが最後」 is fixed to the ta-form and means once someone does ..., an irreversible situation follows, so 「しゃべり出したが最後、誰にも止められない」 means once he starts talking, no one can stop him. 「るが最後」, 「ようが最後」, and 「ないが最後」 are all attachment errors — this pattern never takes the dictionary, volitional, or nai-form; the ta-form is the only option.',
  },
  {
    kind: 'choice',
    id: 'n1-grammar-keishiki-026',
    stem: 'たばこをやめ（　）、体の調子がすこぶるいい。',
    options: ['てからというもの', 'てからでないと', 'たかと思うと', 'るからには'],
    answerIndex: 0,
    explanation:
      '「〜てからというもの」表「自從…之後（狀態就一直持續）」，帶說話者的感慨，與後句持續的好狀態「すこぶるいい」正合。「てからでないと」是「不先…就不能…」，後面必須接否定或困難；「たかと思うと」表「才剛…就馬上發生（意外的事）」，後接狀態句不合；「るからには」是「既然…就理應…」，後面須接決心義務。',
    explanationEn:
      '「〜てからというもの」 means ever since ..., the state has continued, carrying the speaker\'s emotion, which matches the ongoing good condition 「すこぶるいい」. 「てからでないと」 means cannot do ... without first ... and must be followed by a negative or a difficulty; 「たかと思うと」 means no sooner had ... than something unexpected happened, which cannot lead into a stative clause; and 「るからには」 means now that ..., one must ..., requiring resolve or obligation after it.',
  },
  {
    kind: 'choice',
    id: 'n1-grammar-keishiki-027',
    stem: 'わざわざお越しいただく（　）。お電話で十分ですから。',
    options: ['には及びません', 'にはたえません', 'を禁じ得ません', 'に越したことはありません'],
    answerIndex: 0,
    explanation:
      '「〜には及ばない」接動詞辭書形，表「不必特地…」，婉拒對方費心的客套慣用，「お越しいただくには及びません」與後句「電話就夠了」正合。「に越したことはありません」是「最好是…」，與「電話で十分」矛盾；「にはたえません」（不堪…）、「を禁じ得ません」（禁不住湧起…），接續與語意皆不合。',
    explanationEn:
      '「〜には及ばない」 attaches to the dictionary form and means there is no need to go to the trouble of ..., a polite formula for declining someone\'s kindness, so 「お越しいただくには及びません」 fits the follow-up that a phone call suffices. 「に越したことはありません」 means it is best to ..., contradicting 「電話で十分」; 「にはたえません」 (cannot bear to ...) and 「を禁じ得ません」 (cannot suppress ...) fail on both attachment and meaning.',
  },
  {
    kind: 'choice',
    id: 'n1-grammar-keishiki-028',
    stem: '来月の東京公演（　）、バンドは全国ツアーを行う予定だ。',
    options: ['を皮切りに', 'をよそに', 'を問わず', 'をおして'],
    answerIndex: 0,
    explanation:
      '「〜を皮切りに」表「以…為開端，接連展開後續」，用於巡演、展店等連鎖性事件，「東京公演を皮切りに全国ツアー」正確。「をよそに」是「無視…」；「を問わず」是「不分不論…」，前面須接晝夜、男女等成對名詞；「をおして」是「不顧（病痛、反對）硬要…」，皆不合句意。',
    explanationEn:
      '「〜を皮切りに」 means starting with ..., a series of events follows, used for tours, store rollouts, and other chains of events, so 「東京公演を皮切りに全国ツアー」 is correct. 「をよそに」 means ignoring ...; 「を問わず」 means regardless of ... and needs paired nouns like day and night or gender; and 「をおして」 means pushing ahead in defiance of (illness or opposition) — none suits the sentence.',
  },
  {
    kind: 'choice',
    id: 'n1-grammar-keishiki-029',
    stem: '彼こそ、この重責を任せて信頼する（　）人物だ。',
    options: ['に足る', 'に堪えない', 'にかたくない', 'に忍びない'],
    answerIndex: 0,
    explanation:
      '「〜に足る」接動詞辭書形，書面語表「值得…、足以…」，「信頼するに足る人物」（足堪信賴的人物）是典型搭配。「に堪えない」是「不堪…」，方向相反；「にかたくない」只用於「想像にかたくない」等固定搭配，表「不難…」；「に忍びない」是「不忍心…」（見るに忍びない），語意皆不合。',
    explanationEn:
      '「〜に足る」 attaches to the dictionary form and, in formal writing, means worthy of ..., so 「信頼するに足る人物」 (a person fully worthy of trust) is the typical collocation. 「に堪えない」 means unbearable to ..., the opposite direction; 「にかたくない」 appears only in set phrases like 「想像にかたくない」 meaning not hard to ...; and 「に忍びない」 means cannot bring oneself to ... (as in 「見るに忍びない」) — all wrong in meaning.',
  },
  {
    kind: 'choice',
    id: 'n1-grammar-keishiki-030',
    stem: '深夜に大声で騒ぐとは、非常識（　）行為だ。',
    options: ['極まりない', '極まらない', '極めない', '極まりある'],
    answerIndex: 0,
    explanation:
      '「〜極まりない」接な形容詞語幹，表「…至極、無以復加」，帶強烈的負面評價，「非常識極まりない行為」即「無禮至極的行為」。「極まらない」「極めない」是動詞「極まる／極める」的否定形，不能作此接尾用法；「極まりある」則是不存在的形態——這個文型只有「極まりない」（或「極まる」）的固定形。',
    explanationEn:
      '「〜極まりない」 attaches to the stem of a na-adjective and means extremely ..., beyond measure, with strong negative judgment, so 「非常識極まりない行為」 means behavior thoughtless in the extreme. 「極まらない」 and 「極めない」 are mere negative forms of the verbs 「極まる／極める」 and cannot serve as this suffix; and 「極まりある」 is a nonexistent form — the pattern is fixed as 「極まりない」 (or 「極まる」).',
  },
  {
    kind: 'choice',
    id: 'n1-grammar-keishiki-031',
    stem: 'このたびの受賞、誠に喜び（　）。',
    options: ['にたえません', 'に及びません', 'にはあたりません', 'に足りません'],
    answerIndex: 0,
    explanation:
      '「〜にたえない」接「喜び」「感謝」「遺憾」等情感名詞時，表「…之情難以抑制」，是致詞書信的鄭重慣用，「喜びにたえません」即「不勝欣喜」。「に及びません」是「不必…」；「にはあたりません」是「用不著（驚訝、責備）…」且前須接動詞；「に足りません」是「不足以…」，皆與表達喜悅之情不合。',
    explanationEn:
      '「〜にたえない」, when attached to emotion nouns like 「喜び」, 「感謝」, or 「遺憾」, means the feeling is too strong to contain, a formal set phrase for speeches and letters, so 「喜びにたえません」 means I am overjoyed. 「に及びません」 means there is no need to ...; 「にはあたりません」 means it is not worth (surprise or blame) and must follow a verb; and 「に足りません」 means insufficient to ... — none expresses overflowing joy.',
  },
  {
    kind: 'choice',
    id: 'n1-grammar-keishiki-032',
    stem: 'このプロジェクトを任せられるのは、佐藤さん（　）ほかにいない。',
    options: ['をおいて', 'をひかえて', 'をめぐって', 'を境に'],
    answerIndex: 0,
    explanation:
      '「〜をおいて」與「ほかに（は）いない／ない」呼應，表「除了…之外再無別人」，給予最高評價，「佐藤さんをおいてほかにいない」正確。「をひかえて」是「面臨（考試、大事）在即」；「をめぐって」是「圍繞著…（爭論）」；「を境に」是「以…為分界前後改變」，皆無法與「ほかにいない」搭配。',
    explanationEn:
      '「〜をおいて」 pairs with 「ほかに（は）いない／ない」 to mean no one but ..., the highest possible praise, so 「佐藤さんをおいてほかにいない」 is correct. 「をひかえて」 means with (an exam or big event) just ahead; 「をめぐって」 means (arguing) over ...; and 「を境に」 means with ... as the turning point — none of them can combine with 「ほかにいない」.',
  },
  {
    kind: 'choice',
    id: 'n1-grammar-keishiki-033',
    stem: 'あなたの将来を（　）、あえて厳しいことを言うのです。',
    options: ['思えばこそ', '思うともなく', '思うだに', '思うそばから'],
    answerIndex: 0,
    explanation:
      '「〜ばこそ」接假定形，強調「正因為…才特意…」，用於申明積極的理由，「将来を思えばこそ」即「正是為你的將來著想才…」，與「あえて」呼應。「ともなく」是「不經意地…」，與刻意的「あえて」矛盾；「だに」是「光是…就…」（思うだに恐ろしい）；「そばから」表「才剛…馬上又…」的反覆，語意皆不合。',
    explanationEn:
      '「〜ばこそ」 follows the conditional form and stresses it is precisely because ... that one deliberately ..., stating a positive reason, so 「将来を思えばこそ」 (precisely because I care about your future) resonates with 「あえて」. 「ともなく」 means absent-mindedly, contradicting the deliberate 「あえて」; 「だに」 means the mere ... (as in 「思うだに恐ろしい」); and 「そばから」 marks repetition (no sooner ... than ...) — all wrong in meaning.',
  },
  {
    kind: 'choice',
    id: 'n1-grammar-keishiki-034',
    stem: '彼女は今がチャンス（　）、値下げ交渉を始めた。',
    options: ['とばかりに', 'んばかりに', 'とばかりか', 'とばかりで'],
    answerIndex: 0,
    explanation:
      '「〜とばかりに」表「彷彿在說…似地（做出誇張舉動）」，描寫他人的神態氣勢，「今がチャンスとばかりに」即「一副機不可失的架勢」。「んばかりに」須接動詞ない形去ない，不能直接接名詞句；「とばかりか」「とばかりで」都是不存在的接法——此文型固定用「とばかりに」。',
    explanationEn:
      '「〜とばかりに」 means as if to say ..., describing someone\'s demeanor through an emphatic action, so 「今がチャンスとばかりに」 means as if declaring that now was her chance. 「んばかりに」 must attach to a verb nai-stem and cannot follow a noun clause directly; and 「とばかりか」 and 「とばかりで」 are forms that simply do not exist — the pattern is fixed as 「とばかりに」.',
  },
  {
    kind: 'choice',
    id: 'n1-grammar-keishiki-035',
    stem: '大地震がこの町を襲うことなど、想像する（　）恐ろしい。',
    options: ['だに', 'すら', 'なり', 'やら'],
    answerIndex: 0,
    explanation:
      '「〜だに」接動詞辭書形，表「光是…就…」，「想像するだに恐ろしい」（光是想像就不寒而慄）是典型搭配。「すら」是「連…都」，只接名詞（＋助詞），不能直接接辭書形；「なり」接辭書形時表「一…就（做了某動作）」，後面須接過去的具體行為；「やら」表列舉或不確定，皆不合。',
    explanationEn:
      '「〜だに」 attaches to the dictionary form and means the mere act of ... is enough to ..., and 「想像するだに恐ろしい」 (the mere thought is terrifying) is the classic collocation. 「すら」 means even ... but attaches only to nouns (plus particles), never directly to a dictionary form; 「なり」 after the dictionary form means as soon as ... and must be followed by a concrete past action; and 「やら」 marks listing or uncertainty — none fits.',
  },
  {
    kind: 'choice',
    id: 'n1-grammar-keishiki-036',
    stem: '入院中の祖父は、自力で歩くこと（　）できない状態だ。',
    options: ['すら', 'なりに', 'ばかりか', 'にして'],
    answerIndex: 0,
    explanation:
      '「〜すら」接名詞，舉出極端的例子表「連…都…」，多與否定呼應，「歩くことすらできない」即「連走路都辦不到」。「ばかりか」是「不但…而且…」，後面須再接一項且不能直接接「できない」收尾；「なりに」是「以…相應的方式」；「にして」與「初めて」等呼應表層次，語意皆不通。',
    explanationEn:
      '「〜すら」 attaches to a noun and cites an extreme example, meaning even ..., usually with a negative, so 「歩くことすらできない」 means he cannot even walk on his own. 「ばかりか」 means not only ... but also and must introduce a further item rather than ending in 「できない」; 「なりに」 means in a manner befitting ...; and 「にして」 pairs with 「初めて」 to mark a level — none makes sense here.',
  },
  {
    kind: 'choice',
    id: 'n1-grammar-keishiki-037',
    stem: '先方の返答（　）、契約の見直しもあり得るだろう。',
    options: ['いかんによっては', 'いかんにひきかえ', 'いかんをもって', 'いかんときたら'],
    answerIndex: 0,
    explanation:
      '「〜いかんによって（は）」接名詞，書面語表「視…的內容情況而定（有可能…）」，「返答いかんによっては」即「依對方答覆如何，也可能重審合約」。「いかんにひきかえ」「いかんをもって」「いかんときたら」都是不存在的組合——「いかん」後面只能接「によって／では／にかかわらず／によらず」等固定形。',
    explanationEn:
      '「〜いかんによって（は）」 attaches to a noun and, in formal writing, means depending on the content of ... (something may happen), so 「返答いかんによっては」 means depending on their reply, the contract might be reviewed. 「いかんにひきかえ」, 「いかんをもって」, and 「いかんときたら」 are all nonexistent combinations — 「いかん」 can only be followed by fixed forms such as 「によって／では／にかかわらず／によらず」.',
  },
  {
    kind: 'choice',
    id: 'n1-grammar-keishiki-038',
    stem: '事前の予告（　）、規約が変更されることがあります。',
    options: ['なしに', 'なくしては', 'ぬきには', 'にかまわず'],
    answerIndex: 0,
    explanation:
      '「〜なしに」接名詞，表「在沒有…的情況下就…」，「予告なしに変更される」（不經預告即變更）是條款慣用句。「なくしては」是「若沒有…就（不能）…」，後面必須接否定或困難的內容；「ぬきには」同樣須與「〜ない」呼應（彼抜きには進まない）；「にかまわず」是「不顧（形象、旁人眼光）」，語意不合。',
    explanationEn:
      '「〜なしに」 attaches to a noun and means without ... taking place, and 「予告なしに変更される」 (subject to change without notice) is boilerplate in terms and conditions. 「なくしては」 means without ... (nothing is possible) and must be followed by a negative or a difficulty; 「ぬきには」 likewise requires a following 「〜ない」 (as in 「彼抜きには進まない」); and 「にかまわず」 means without regard for (appearances or onlookers) — the wrong meaning.',
  },
  {
    kind: 'choice',
    id: 'n1-grammar-keishiki-039',
    stem: '散歩（　）、駅前の新しい本屋に寄ってみた。',
    options: ['がてら', 'かたわら', 'ながらに', 'そばから'],
    answerIndex: 0,
    explanation:
      '「〜がてら」接動作性名詞或ます形語幹，表「做…時順便…」，用於一次外出兼辦兩事，「散歩がてら本屋に寄る」正確。「かたわら」須接「名詞の＋かたわら」且用於長期並行的兩種身分活動（工作之餘…），與一次散步不合；「ながらに」是「保持…狀態」；「そばから」表反覆，皆錯。',
    explanationEn:
      '「〜がてら」 attaches to an action noun or masu-stem and means doing ... and taking the chance to also ..., for one outing serving two purposes, so 「散歩がてら本屋に寄る」 is correct. 「かたわら」 requires 「名詞の＋かたわら」 and describes two long-term parallel pursuits (alongside one\'s day job ...), not a single stroll; 「ながらに」 means while remaining in the state of ...; and 「そばから」 marks repetition — all wrong.',
  },
  {
    kind: 'choice',
    id: 'n1-grammar-keishiki-040',
    stem: '彼は会社勤めの（　）、週末は小説を書き続けている。',
    options: ['かたわら', 'がてら', 'あまり', 'いたり'],
    answerIndex: 0,
    explanation:
      '「〜かたわら」接「名詞の」或動詞辭書形，表「在做…的本業之餘，同時長期從事…」，「会社勤めのかたわら小説を書く」正是典型用法。「がてら」表一次性的「順便」，不用於長期並行的活動，且不接「の」；「あまり」是「因過度…而…」，前須接情感名詞；「いたり」只用於「若気の至り」等固定語，皆不合。',
    explanationEn:
      '「〜かたわら」 follows 「名詞の」 or the dictionary form and means while pursuing ... as one\'s main occupation, also engaging in ... long-term, so 「会社勤めのかたわら小説を書く」 is the textbook use. 「がてら」 expresses a one-off while I am at it, not sustained parallel activity, and cannot follow 「の」; 「あまり」 means out of an excess of ... and needs an emotion noun; and 「いたり」 survives only in set phrases like 「若気の至り」 — none fits.',
  },
]
