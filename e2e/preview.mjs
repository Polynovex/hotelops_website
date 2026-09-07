import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';
const OUT = path.join(process.cwd(), 'e2e', 'screenshots');
fs.mkdirSync(OUT, { recursive: true });
const BASE = process.argv.find(a => a.startsWith('http')) || 'http://localhost:5175';
const b = await chromium.launch({ channel: 'chrome', headless: true });

// Desktop: the first frame a visitor sees.
const d = await (await b.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 })).newPage();
await d.goto(BASE, { waitUntil: 'networkidle', timeout: 30000 });
await d.waitForTimeout(1200);
await d.screenshot({ path: path.join(OUT, 'home-hero.png') });
for (const [name, heading] of [
  ['home-nigerian', /Built for the Way Nigerian Hotels/i],
  ['home-problem', /Still Managing Your Hotel/i],
  ['home-security', /Your Hotel's Data, Properly Looked After/i]
]) {
  const h = d.getByRole('heading', { name: heading }).first();
  if (await h.isVisible().catch(() => false)) {
    await h.scrollIntoViewIfNeeded();
    await d.waitForTimeout(700);
    await d.screenshot({ path: path.join(OUT, `${name}.png`) });
    console.log('  ✓', name);
  } else {
    console.log('  ✗', name, 'heading not found');
  }
}

// Phone: where most of this audience actually reads it.
const m = await (await b.newContext({ ...((await import('playwright')).devices['iPhone 12']) })).newPage();
await m.goto(BASE, { waitUntil: 'networkidle', timeout: 30000 });
await m.waitForTimeout(1200);
await m.screenshot({ path: path.join(OUT, 'home-mobile.png') });
console.log('  ✓ home-mobile');
await b.close();
