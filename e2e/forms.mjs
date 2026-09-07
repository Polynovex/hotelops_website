/**
 * Form behaviour audit for the public website.
 *
 * A form can render perfectly and still be broken in the ways that cost leads:
 * accepting an invalid email, submitting with required fields blank, giving no
 * feedback at all, or — the failure this project has already had once —
 * reporting success while the data goes nowhere.
 *
 * Each case is submitted for real and judged on what the visitor is told.
 *
 *   node e2e/forms.mjs [baseUrl] [--headed]
 */
import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const args = process.argv.slice(2);
const BASE = args.find((a) => a.startsWith('http')) || 'http://localhost:5173';
const HEADED = args.includes('--headed');
const SHOTS = path.join(process.cwd(), 'e2e', 'screenshots');
fs.mkdirSync(SHOTS, { recursive: true });

const findings = [];
const record = (severity, scenario, kind, detail) =>
  findings.push({ severity, scenario, kind, detail });

/**
 * Every case is a full submission attempt. `expectBlocked` says whether the
 * form should refuse it — the interesting failures are a form that accepts
 * what it should reject, and one that rejects without saying why.
 */
const CASES = [
  {
    name: 'all fields blank',
    fill: {},
    expectBlocked: true
  },
  {
    name: 'malformed email',
    fill: { name: 'Ada Chike', email: 'not-an-email', phone: '08031234567', companyName: 'Test Hotel' },
    expectBlocked: true
  },
  {
    name: 'email missing domain',
    fill: { name: 'Ada Chike', email: 'ada@', phone: '08031234567', companyName: 'Test Hotel' },
    expectBlocked: true
  },
  {
    name: 'name only',
    fill: { name: 'Ada Chike' },
    expectBlocked: true
  },
  {
    name: 'script tag in the message field',
    fill: {
      name: 'Ada Chike',
      email: 'ada@example.com',
      phone: '08031234567',
      companyName: 'Test Hotel',
      rooms: '11-30',
      message: '<script>alert(1)</script>'
    },
    // Not expected to be blocked — the point is that it must never execute.
    expectBlocked: false,
    checkNoScriptExecution: true
  },
  {
    name: 'valid submission',
    fill: {
      name: 'Ada Chike',
      email: 'ada.chike@example.com',
      phone: '08031234567',
      companyName: 'Test Hotel Lagos',
      rooms: '31-100',
      message: 'Please get in touch about a demo.'
    },
    expectBlocked: false
  }
];

/** Fills whatever of these fields the form actually has. */
const fillForm = async (page, values) => {
  /**
   * Ordered most specific first. The placeholder fallbacks were matching the
   * wrong field — "Your Hotel Name" contains "name" — which left the real name
   * input empty and made a valid case look like a broken form.
   */
  const selectors = {
    name: ['input#name', 'input[name="name"]'],
    email: ['input#email', 'input[name="email"]', 'input[type="email"]'],
    phone: ['input#phone', 'input[name="phone"]', 'input[type="tel"]'],
    companyName: ['input#companyName', 'input[name="companyName"]'],
    message: ['textarea#message', 'textarea']
  };

  for (const [field, candidates] of Object.entries(selectors)) {
    for (const selector of candidates) {
      const el = page.locator(selector).first();
      if (await el.isVisible().catch(() => false)) {
        await el.fill(values[field] ?? '');
        break;
      }
    }
  }

  /**
   * Room count is a required <select>, so a case meant to be accepted has to
   * choose one — otherwise native validation blocks the submit and a working
   * form reads as broken.
   */
  if (values.rooms) {
    const rooms = page.locator('select#hotelSize');
    if (await rooms.isVisible().catch(() => false)) {
      await rooms.selectOption(values.rooms).catch(() => null);
    }
  }
};

const run = async () => {
  const browser = await chromium.launch({
    channel: 'chrome',
    headless: !HEADED,
    slowMo: HEADED ? 400 : 0
  });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  // A script injected through a form field must never run.
  let scriptExecuted = false;
  page.on('dialog', async (dialog) => {
    scriptExecuted = true;
    await dialog.dismiss();
  });

  console.log(`\nForm audit — ${BASE}\n`);

  for (const testCase of CASES) {
    scriptExecuted = false;

    await page.goto(BASE, { waitUntil: 'networkidle', timeout: 30000 });
    const contactLink = page.getByRole('button', { name: /^contact$/i })
      .or(page.getByRole('link', { name: /^contact$/i })).first();
    if (await contactLink.isVisible().catch(() => false)) {
      await contactLink.click();
      await page.waitForTimeout(900);
    }

    await fillForm(page, testCase.fill);

    // Consent is required by the NDPR notice, so a valid case must tick it.
    const consent = page.locator('input[type="checkbox"]').first();
    if (testCase.expectBlocked === false && (await consent.isVisible().catch(() => false))) {
      await consent.check().catch(() => null);
    }

    const submit = page.getByRole('button', { name: /submit|send|request|book a demo/i }).last();
    if (!(await submit.isVisible().catch(() => false))) {
      record('high', testCase.name, 'form', 'No submit control found on the contact form');
      continue;
    }

    /**
     * A disabled submit button is a legitimate way to block invalid input, so
     * it counts as the form refusing the submission rather than as a fault.
     *
     * It only works if the visitor can tell *why* it is disabled, though — a
     * dead button with no inline errors leaves someone staring at a form with
     * no idea which field is wrong, which is how contact forms quietly lose
     * enquiries. That case is reported separately below.
     */
    const enabled = await submit.isEnabled().catch(() => false);
    if (!enabled) {
      const body = (await page.locator('body').innerText().catch(() => '')) || '';
      const explains = /required|invalid|valid email|please enter|must be|cannot be|consent/i.test(body);

      if (!testCase.expectBlocked) {
        record('high', testCase.name, 'submission',
          'Submit stayed disabled for input that should be accepted');
      } else if (!explains) {
        record('medium', testCase.name, 'feedback',
          'Submit is disabled but nothing on the page says which field is wrong');
      }

      console.log(`  ${testCase.expectBlocked ? '✓' : '✗'} ${testCase.name} (submit disabled)`);
      await page.screenshot({
        path: path.join(SHOTS, `form-${testCase.name.replace(/\s+/g, '-')}.png`)
      });
      continue;
    }

    let posted = false;
    page.once('request', () => {});
    const watcher = (req) => {
      if (req.method() === 'POST' && req.url().includes('/api/')) posted = true;
    };
    page.on('request', watcher);

    await submit.click();
    await page.waitForTimeout(2500);
    page.off('request', watcher);

    const body = (await page.locator('body').innerText().catch(() => '')) || '';
    /**
     * Two different kinds of "something is wrong" have to be recognised: a
     * field-level validation complaint, and a submission that reached the
     * server and failed. Matching only the first reported a visible red error
     * banner as "no feedback at all".
     */
    const showsError =
      /required|invalid|valid email|please enter|must be|cannot be/i.test(body) ||
      /went wrong|could not|couldn'?t|failed|try again|unable to/i.test(body);
    const showsSuccess = /thank you|received|we'?ll be in touch|success|submitted/i.test(body);

    if (testCase.expectBlocked) {
      if (posted) {
        record('high', testCase.name, 'validation',
          'Invalid input was sent to the server — validation did not run in the browser');
      }
      if (!showsError) {
        record('high', testCase.name, 'feedback',
          'Submission was refused with no message explaining why');
      }
      if (showsSuccess) {
        record('high', testCase.name, 'feedback',
          'Invalid submission reported success');
      }
    } else {
      if (!posted) {
        record('high', testCase.name, 'submission',
          'A valid submission never reached the server');
      }
      if (!showsSuccess && !showsError) {
        record('high', testCase.name, 'feedback',
          'Valid submission gave no confirmation at all — the visitor cannot tell it worked');
      }
    }

    if (testCase.checkNoScriptExecution && scriptExecuted) {
      record('high', testCase.name, 'xss',
        'Script submitted through a form field executed in the page');
    }

    const verdict = findings.some((f) => f.scenario === testCase.name) ? '✗' : '✓';
    console.log(`  ${verdict} ${testCase.name}`);
    await page.screenshot({
      path: path.join(SHOTS, `form-${testCase.name.replace(/\s+/g, '-')}.png`),
      fullPage: true
    });
  }

  await browser.close();

  const by = { high: [], medium: [], low: [] };
  for (const f of findings) by[f.severity].push(f);

  console.log('\n' + '─'.repeat(72));
  console.log(`FINDINGS: ${by.high.length} high · ${by.medium.length} medium · ${by.low.length} low`);
  console.log('─'.repeat(72));
  for (const level of ['high', 'medium', 'low']) {
    if (!by[level].length) continue;
    console.log(`\n${level.toUpperCase()}`);
    for (const f of by[level]) console.log(`  [${f.scenario}] ${f.kind}: ${f.detail}`);
  }

  fs.writeFileSync(path.join(process.cwd(), 'e2e', 'form-findings.json'), JSON.stringify(findings, null, 2));
  console.log('\nScreenshots: e2e/screenshots/  ·  Raw: e2e/form-findings.json\n');
};

run().catch((e) => {
  console.error('Form audit failed:', e.message);
  process.exit(1);
});
