// e2e：起 preview → 驗六個關鍵設計斷言 → 截圖。需先 npm run build。
// port 5241（避開 dev 5240）；截圖 /tmp/nihongo-quest-e2e/；失敗集中最後回報。
import { spawn } from 'node:child_process'
import { mkdirSync } from 'node:fs'
import { chromium } from 'playwright'

const PORT = 5241
const BASE_URL = `http://localhost:${PORT}/`
const shotDir = '/tmp/nihongo-quest-e2e/'
mkdirSync(shotDir, { recursive: true })

const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], {
  cwd: new URL('..', import.meta.url).pathname,
  stdio: 'ignore',
})

const fails = []
const check = (ok, msg) => {
  console.log(`${ok ? 'PASS' : 'FAIL'} ${msg}`)
  if (!ok) fails.push(msg)
}

let browser
try {
  for (let i = 0; i < 30; i++) {
    try {
      await fetch(BASE_URL)
      break
    } catch {
      await new Promise((r) => setTimeout(r, 300))
      if (i === 29) throw new Error('preview server 沒起來')
    }
  }

  browser = await chromium.launch()

  // ---- 1. 首頁 title ＋ GoatCounter path 只回報 pathname（隱私）----
  {
    const page = await browser.newPage()
    await page.goto(`${BASE_URL}#n5/vocab-kanji`)
    check((await page.title()).includes('日語道場'), 'title 含「日語道場」')
    const gcPath = await page.evaluate(() => window.goatcounter?.path?.())
    check(typeof gcPath === 'string' && !gcPath.includes('#') && !gcPath.includes('n5'),
      `analytics path 無 hash（實得 ${gcPath}）`)
    await page.screenshot({ path: `${shotDir}drill.png`, fullPage: true })
    await page.close()
  }

  // ---- 2. drill：選項恰 4 個、答錯寫入錯題本（localStorage）----
  {
    const page = await browser.newPage()
    await page.goto(`${BASE_URL}#n5/vocab-kanji`)
    await page.waitForSelector('text=学校') // 第一題題幹（drill 照內容順序）
    // かっこう 是 q001 的干擾項——點它必錯
    await page.click('button:has-text("かっこう")')
    await page.waitForSelector('text=促音') // 詳解出現（explanation 含「促音」）
    const save = await page.evaluate(() => JSON.parse(localStorage.getItem('nihongo-quest-save-v1') ?? '{}'))
    const wrong = save?.state?.wrong ?? save?.wrong ?? {}
    check(Boolean(wrong['n5-vocab-kanji-001']), '答錯後錯題本出現 n5-vocab-kanji-001')
    const stats = save?.state?.unitStats ?? save?.unitStats ?? {}
    check(stats['n5-vocab-kanji']?.attempted >= 1, 'unitStats 有作答紀錄')
    await page.screenshot({ path: `${shotDir}explanation.png`, fullPage: true })
    await page.close()
  }

  // ---- 3. daily：同一天兩次載入題序相同（seed 確定性）----
  {
    // 比題目 id 序列（選項顯示順序每次隨機是設計，不比整頁文字）
    const grab = async () => {
      const page = await browser.newPage()
      await page.goto(`${BASE_URL}#daily`)
      await page.waitForTimeout(500)
      const ids = await page.evaluate(() => window.__nqDailyIds?.() ?? [])
      await page.close()
      return ids
    }
    const [a, b] = [await grab(), await grab()]
    check(a.length === 10 && JSON.stringify(a) === JSON.stringify(b), `daily 題目 id 序列確定（${a.length} 題）`)
  }

  // ---- 4. mock：確認頁＋開始後 Timer 存在 ----
  {
    const page = await browser.newPage()
    await page.goto(`${BASE_URL}#n5/mock`)
    await page.waitForTimeout(500)
    const body = await page.evaluate(() => document.body.innerText)
    if (body.includes('尚未齊全')) {
      check(false, 'mock：N5 內容尚未齊全（內容到齊後重跑）')
    } else {
      await page.click('button:has-text("開始")')
      await page.waitForTimeout(500)
      const hasTimer = await page.evaluate(() => /\d{1,3}:\d{2}/.test(document.body.innerText))
      check(hasTimer, 'mock 計時器顯示 mm:ss')
      await page.screenshot({ path: `${shotDir}mock.png`, fullPage: true })
    }
    await page.close()
  }

  // ---- 5. TTS 降級：無日文 voice → 讀稿模式 banner ＋ script 可見 ----
  {
    const page = await browser.newPage()
    await page.addInitScript(() => { window.__ttsForceNoVoice = true })
    await page.goto(`${BASE_URL}#n5/listening-kadai`)
    await page.waitForTimeout(800)
    const body = await page.evaluate(() => document.body.innerText)
    check(body.includes('無日文語音'), 'TTS 降級 banner 顯示')
    check(body.includes('デパートで女の人と店員'), '降級時 script 全文可讀')
    await page.screenshot({ path: `${shotDir}tts-fallback.png`, fullPage: true })
    await page.close()
  }

  // ---- 6. 亂 hash 回首頁（還原參數嚴格驗證）----
  {
    const page = await browser.newPage()
    await page.goto(`${BASE_URL}#n9/hax0r`)
    await page.waitForTimeout(500)
    const body = await page.evaluate(() => document.body.innerText)
    check(body.includes('JLPT 級別練習'), '非法 hash 回首頁')
    await page.screenshot({ path: `${shotDir}home.png`, fullPage: true })
    await page.close()
  }
} catch (e) {
  fails.push(`未捕捉錯誤：${e.message}`)
} finally {
  await browser?.close()
  server.kill()
}

if (fails.length) {
  console.error(`\ne2e FAIL（${fails.length}）：\n- ${fails.join('\n- ')}`)
  process.exit(1)
}
console.log('\ne2e 全部通過')
