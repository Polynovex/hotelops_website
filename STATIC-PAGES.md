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

### 3. Every page is prerendered at build time (`src/entry-server.tsx`, `scripts/prerender.mjs`)

The first version of this put a hand-written text block inside `<div id="root">`
of the one `index.html`. Two problems with that: every URL still returned the
same file (home's title, description and canonical on `/pricing`), and
visitors saw the plain block for about a second before React replaced it with
the real site.

Now `npm run build` does three things:

1. `vite build`: the browser bundle, as before.
2. `vite build --ssr src/entry-server.tsx`: the same app, for Node.
3. `node scripts/prerender.mjs`: renders each page with `renderToString` into
   its own file, with that page's title, description, Open Graph tags and
   canonical from `src/utils/seo.ts`:

| File | Served at |
|------|-----------|
| `dist/index.html` | `/` |
| `dist/<page>.html` | `/<page>` (`cleanUrls` in `vercel.json`) |
| `dist/404.html` | anything else, with a real **404** status and `noindex` |

The browser paints that HTML at once; `src/main.tsx` then **hydrates** it
(attaches React without redrawing), so there is no swap. `#root` carries
`data-page`; if it does not match the address (an old `/#pricing` link lands
on the home file) the app renders fresh instead.

Rules that keep it working:

- Nothing may touch `window`, `document` or `localStorage` during render;
  do it in `useEffect`. The prerender runs in Node and will fail loudly.
- Internal links use `PageLink` (a real `<a href>`), so crawlers can follow
  them; buttons are invisible to search engines.
- The canonical origin is `SITE_URL` in `src/utils/seo.ts`
  (`https://www.hotelopx.com`); the bare domain redirects there.
- Add a page: add it to `PATHS` in `src/utils/routes.ts`, `PAGE_SEO`, the
  switch in `App.tsx`, and `public/sitemap.xml`.
