# Real URLs, and what a crawler sees

## The problem

Navigation was state-based: one `currentPage` string decided what `App`
rendered, and every page lived at `/`. Two consequences —

- `/about`, `/pricing` and `/contact` returned **404**. Nothing could be
  linked to, shared or indexed separately.
- A fetch of `/` returned an empty `<body>`: 206 characters of readable text.
  Google, WhatsApp link previews and the AWS Activate review all saw a blank
  page. Activate rejected the application for "website not functional".

## The fix, in three parts

### 1. The URL now carries the page (`src/utils/routes.ts`, `src/App.tsx`)

`pathForPage` / `pageForPath` map between a path and the page key the existing
switch already uses. The app reads the URL on first render, `pushState`s on
navigate, and listens for `popstate` so back and forward work.

No router dependency, and `Navigation`, `Footer` and the page components are
untouched — they still call `onNavigate(page)` exactly as before. Old `/#about`
links still resolve, so anything already shared keeps working.

| Page key | URL |
|----------|-----|
| home | `/` |
| about | `/about` |
| products | `/products` |
| pricing | `/pricing` |
| why | `/why` |
| contact | `/contact` |
| resources | `/resources` |
| privacy | `/privacy` |
| terms | `/terms` |

### 2. The host serves the app for those paths (`vercel.json`)

A rewrite sends every path to `/index.html`. Vercel checks the filesystem
first, so assets, `robots.txt` and `sitemap.xml` are still served directly.
**Without this, a hard refresh on `/pricing` 404s.**

### 3. Content in the HTML before JavaScript runs (`index.html`)

Real copy sits inside `<div id="root">`. React clears those children the moment
it mounts, so the live site is unchanged — but a fetch of `/` now returns
**1,282 characters** instead of 206. Also added: canonical, Open Graph image
and URL, theme colour, and JSON-LD describing the product, the ₦25,000 price
and the Lagos address.

Keep that copy in step with `src/pages/Home.tsx` when the pitch or price
changes. Per-page titles and descriptions already come from `src/utils/seo.ts`,
whose canonical tag now points at the real path rather than a `/#hash`.
