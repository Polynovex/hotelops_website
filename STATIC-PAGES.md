# Crawler-facing pages

The React site navigates by state and never changes the URL: every page lives
at `/`, and a fetch of `/` returned an empty `<body>`. Anything that does not
run JavaScript — Google, a WhatsApp link preview, the AWS Activate review —
saw a blank page. `/about`, `/pricing` and `/contact` did not exist at all and
returned 404.

Two changes fix that, and neither touches `src/`:

### 1. Pre-hydration content in `index.html`

Real copy now sits inside `<div id="root">`. React clears those children the
moment it mounts, so the live site is unchanged — but a fetch of `/` returns
1,282 characters of readable content instead of 206.

Also added: canonical URL, Open Graph image and URL, theme colour, and
JSON-LD describing the product, the ₦25,000 price and the Lagos address.

### 2. Static pages under `public/`

| URL | File |
|-----|------|
| `/about/` | `public/about/index.html` |
| `/pricing/` | `public/pricing/index.html` |
| `/contact/` | `public/contact/index.html` |
| `/robots.txt` | `public/robots.txt` |
| `/sitemap.xml` | `public/sitemap.xml` |

Vite copies `public/` to `dist/` untouched, so these keep working whatever
happens to the app build.

**Trailing slashes are deliberate.** `/about/` resolves through directory-index
handling on every static host. The bare `/about` depends on the host rewriting
it — on Vercel, adding `{ "cleanUrls": true }` to a `vercel.json` makes it work
too, but nothing here depends on that.

### Keeping them honest

These pages duplicate content from `src/pages/`. When prices or the pitch
change, update both. Current figures: Starter ₦25,000/month, Professional
₦60,000/month, Enterprise on application.
