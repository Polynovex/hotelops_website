import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App";

export { PAGE_SEO, SITE_URL } from "./utils/seo";
export { ROUTABLE_PAGES, pathForPage } from "./utils/routes";

/**
 * Renders one page to HTML at build time (scripts/prerender.mjs), so every
 * URL is served with its real content, title and canonical before any
 * JavaScript runs, and the browser hydrates it instead of replacing it.
 */
export const render = (page: string) =>
  renderToString(
    <StrictMode>
      <App initialPage={page} />
    </StrictMode>
  );
