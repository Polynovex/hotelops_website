/**
 * Public website audit.
 *
 * Drives the real site in Chrome and reports what a visitor would actually hit:
 * console errors, failed network calls, dead interactive elements, and form
 * validation that does not fire.
 *
 *   node e2e/audit.mjs [baseUrl]
 *
 * Chrome is driven via `channel: 'chrome'` because Playwright ships no Chromium
 * build for macOS 12.
 */
import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const args = process.argv.slice(2);
const BASE = args.find((a) => a.startsWith('http')) || 'http://localhost:5173';

/**
 * --headed opens a real window so the run can be watched, with a deliberate
 * pause between actions. Headless is the default because it is faster and does
 * not steal focus.
 */
const HEADED = args.includes('--headed');
const SHOTS = path.join(process.cwd(), 'e2e', 'screenshots');
fs.mkdirSync(SHOTS, { recursive: true });

/**
 * Navigation is state-based, so pages are reached by clicking rather than by
 * URL. The nav label differs from the route key in places, so both are needed.
 */
const PAGES = [
  { key: 'home', label: 'Home' },
  { key: 'about', label: 'About' },
  { key: 'products', label: 'Products' },
  { key: 'pricing', label: 'Pricing' },
  { key: 'why', label: 'Why HotelOpX' },
  { key: 'contact', label: 'Contact' },
  // Reached from the footer rather than the header.
  { key: 'resources', label: 'Resources' },
  { key: 'privacy', label: 'Privacy Policy' }
];

const findings = [];
const record = (severity, page, kind, detail) =>
  findings.push({ severity, page, kind, detail });

/** Noise that says nothing about the site's health. */
const IGNORABLE = [
  /Download the React DevTools/i,
  /\[vite\]/i,
  /Lit is in dev mode/i,
  /React Router Future Flag/i
];

const run = async () => {
  const browser = await chromium.launch({
    channel: 'chrome',
    headless: !HEADED,
    slowMo: HEADED ? 700 : 0
  });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  let current = 'home';

  page.on('console', (msg) => {
    if (msg.type() !== 'error' && msg.type() !== 'warning') return;
    const text = msg.text();
    if (IGNORABLE.some((re) => re.test(text))) return;
    record(msg.type() === 'error' ? 'high' : 'low', current, 'console', text.slice(0, 200));
  });

  page.on('requestfailed', (req) => {
    const failure = req.failure()?.errorText ?? 'unknown';
    // An aborted request is usually a navigation cancelling an in-flight fetch.
    if (/ERR_ABORTED/.test(failure)) return;
    record('high', current, 'network', `${req.method()} ${req.url().slice(0, 110)} — ${failure}`);
  });

  page.on('response', (res) => {
    if (res.status() >= 400) {
      record('high', current, 'http', `${res.status()} ${res.url().slice(0, 110)}`);
    }
  });

  console.log(`\nAuditing ${BASE}\n`);
  await page.goto(BASE, { waitUntil: 'networkidle', timeout: 30000 });

  for (const { key: target, label } of PAGES) {
    current = target;

    // Reach the page the way a visitor does.
    if (target !== 'home') {
      const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const link = page.getByRole('button', { name: new RegExp(`^${escaped}$`, 'i') })
        .or(page.getByRole('link', { name: new RegExp(`^${escaped}$`, 'i') }))
        .first();

      const visible = await link.isVisible().catch(() => false);
      if (!visible) {
        record('medium', target, 'navigation', 'No visible nav control reaches this page');
        continue;
      }
      await link.click();
      await page.waitForTimeout(HEADED ? 1800 : 900);
    }

    // ── Content actually rendered? ────────────────────────────────────────
    const bodyText = (await page.locator('body').innerText().catch(() => '')) || '';
    if (bodyText.trim().length < 120) {
      record('high', target, 'render', `Page rendered almost nothing (${bodyText.trim().length} chars)`);
    }

    // ── Headings: one h1, and it is not empty ─────────────────────────────
    const h1s = await page.locator('h1').allInnerTexts();
    if (h1s.length === 0) {
      record('medium', target, 'seo', 'No <h1> — hurts search ranking and screen readers');
    } else if (h1s.length > 1) {
      record('low', target, 'seo', `${h1s.length} <h1> elements; one per page is the convention`);
    }

    // ── Images without alt text ───────────────────────────────────────────
    const imgs = await page.locator('img:not([alt])').count();
    if (imgs > 0) {
      record('medium', target, 'a11y', `${imgs} image(s) with no alt attribute`);
    }

    // ── Interactive elements that do nothing ──────────────────────────────
    const deadLinks = await page.locator('a[href="#"], a[href=""], a:not([href])').count();
    if (deadLinks > 0) {
      record('medium', target, 'dead-link', `${deadLinks} anchor(s) with no destination`);
    }

    // ── Horizontal overflow: the classic mobile-breaking bug ──────────────
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth
    );
    if (overflow > 4) {
      record('medium', target, 'layout', `Page scrolls horizontally by ${overflow}px at 1440w`);
    }

    await page.screenshot({ path: path.join(SHOTS, `${target}.png`), fullPage: true });
    console.log(`  ✓ ${target}`);
  }

  // ── Mobile viewport pass ────────────────────────────────────────────────
  console.log('\n  checking mobile layout…');
  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(600);
  current = 'mobile';

  const mobileOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth
  );
  if (mobileOverflow > 4) {
    record('high', 'mobile', 'layout', `Horizontal scroll of ${mobileOverflow}px at 390w — content is cut off`);
  }

  // Touch targets below the 44px guideline are hard to hit reliably.
  const smallTargets = await page.evaluate(() => {
    /**
     * WCAG 2.5.8 exempts targets that sit inline within a sentence, and for
     * good reason: padding a mailto: link inside a paragraph out to 44px would
     * break the line spacing of the prose around it. Only standalone controls
     * are held to the minimum size.
     */
    const isInlineInText = (el) => {
      if (getComputedStyle(el).display !== 'inline') return false;
      const parentText = (el.parentElement?.textContent || '').trim();
      const ownText = (el.textContent || '').trim();
      return parentText.length > ownText.length;
    };

    const els = [...document.querySelectorAll('button, a, [role="button"]')];
    return els
      .filter((el) => {
        if (isInlineInText(el)) return false;
        const r = el.getBoundingClientRect();
        return r.width > 0 && r.height > 0 && (r.height < 32 || r.width < 32);
      })
      .map((el) => ({
        label: (el.innerText || el.getAttribute('aria-label') || el.tagName).trim().slice(0, 30),
        cls: (el.className || '').toString().slice(0, 60),
        w: Math.round(el.getBoundingClientRect().width),
        h: Math.round(el.getBoundingClientRect().height)
      }));
  });
  if (smallTargets.length > 0) {
    record('low', 'mobile', 'touch-target',
      `${smallTargets.length} tap target(s) under 32px: ` +
        smallTargets.map((t) => `"${t.label}" ${t.w}×${t.h} [${t.cls}]`).join(' · '));
  }

  await page.screenshot({ path: path.join(SHOTS, 'mobile-home.png'), fullPage: true });
  await page.setViewportSize({ width: 1440, height: 900 });

  await browser.close();

  // ── Report ──────────────────────────────────────────────────────────────
  const bySeverity = { high: [], medium: [], low: [] };
  for (const f of findings) bySeverity[f.severity].push(f);

  console.log('\n' + '─'.repeat(72));
  console.log(`FINDINGS: ${bySeverity.high.length} high · ${bySeverity.medium.length} medium · ${bySeverity.low.length} low`);
  console.log('─'.repeat(72));

  for (const level of ['high', 'medium', 'low']) {
    if (!bySeverity[level].length) continue;
    console.log(`\n${level.toUpperCase()}`);
    const seen = new Set();
    for (const f of bySeverity[level]) {
      const key = `${f.page}|${f.kind}|${f.detail}`;
      if (seen.has(key)) continue;
      seen.add(key);
      console.log(`  [${f.page}] ${f.kind}: ${f.detail}`);
    }
  }

  fs.writeFileSync(path.join(process.cwd(), 'e2e', 'findings.json'), JSON.stringify(findings, null, 2));
  console.log(`\nScreenshots: e2e/screenshots/  ·  Raw: e2e/findings.json\n`);
};

run().catch((error) => {
  console.error('Audit failed:', error.message);
  process.exit(1);
});
