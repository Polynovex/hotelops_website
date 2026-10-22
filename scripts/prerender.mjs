/**
 * Writes one fully rendered HTML file per page after `vite build`.
 *
 * Every URL used to be served the same index.html: one title, one canonical
 * (the home page's), and a hand-written text block that showed for a moment
 * and was then swapped for the real site. Search engines saw nine copies of
 * the home page; visitors saw the swap.
 *
 * Now each page is rendered by the app itself (src/entry-server.tsx) into its
 * own file with its own title, description and canonical. The browser shows
 * that HTML straight away and React hydrates it in place.
 *
 *   dist/index.html      home
 *   dist/<page>.html     every other page, served at /<page> (cleanUrls)
 *   dist/404.html        anything else, with a real 404 status
 */
import { readFile, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

const { render, PAGE_SEO, SITE_URL, ROUTABLE_PAGES, pathForPage } = await import(
  pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
);
const template = await readFile(path.join(dist, 'index.html'), 'utf8');

const attr = (value) => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

/** Replaces one tag that must exist in the template, so a template change cannot silently drop it. */
const swap = (html, pattern, replacement, what) => {
  if (!pattern.test(html)) throw new Error(`prerender: ${what} not found in index.html`);
  return html.replace(pattern, replacement);
};

const pageHtml = (page, { notFound = false } = {}) => {
  const seo = PAGE_SEO[page] ?? PAGE_SEO.home;
  const url = `${SITE_URL}${pathForPage(page)}`;
  let html = template;
  html = swap(html, /<title>[\s\S]*?<\/title>/, `<title>${attr(seo.title)}</title>`, 'title');
  html = swap(html, /<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${attr(seo.description)}" />`, 'description');
  html = swap(html, /<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${attr(seo.title)}" />`, 'og:title');
  html = swap(html, /<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${attr(seo.description)}" />`, 'og:description');
  html = swap(html, /<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${attr(seo.title)}" />`, 'twitter:title');
  html = swap(html, /<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${attr(seo.description)}" />`, 'twitter:description');
  html = swap(html, /<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`, 'og:url');
  html = notFound
    ? swap(html, /<link rel="canonical" href="[^"]*" \/>/, '<meta name="robots" content="noindex" />', 'canonical')
    : swap(html, /<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`, 'canonical');
  html = swap(html, /<div id="root"><\/div>/, `<div id="root" data-page="${page}">${render(page)}</div>`, 'root');
  return html;
};

const written = [];
for (const page of ROUTABLE_PAGES) {
  const file = page === 'home' ? 'index.html' : `${page}.html`;
  await writeFile(path.join(dist, file), pageHtml(page));
  written.push(file);
}
await writeFile(path.join(dist, '404.html'), pageHtml('notfound', { notFound: true }));
written.push('404.html');

await rm(ssrDir, { recursive: true, force: true });
console.log(`prerendered ${written.length} pages: ${written.join(', ')}`);
