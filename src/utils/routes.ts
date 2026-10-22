/**
 * The map between a URL and the page key the app renders.
 *
 * Navigation is state-based: one `currentPage` string decides what `App`
 * renders. That worked, but it meant the whole site lived at "/" — nothing
 * could be linked to, shared, or indexed separately, and /about returned a
 * 404. These two functions let the URL carry the same state without replacing
 * the navigation with a router.
 */

/** Page key → path. Keys match the switch in App.tsx. */
const PATHS: Record<string, string> = {
  home: '/',
  about: '/about',
  products: '/products',
  pricing: '/pricing',
  why: '/why',
  contact: '/contact',
  resources: '/resources',
  privacy: '/privacy',
  terms: '/terms'
};

export const pathForPage = (page: string): string => PATHS[page] ?? '/';

/** The page key for an address that is not one of the pages above. */
export const NOT_FOUND = 'notfound';

/**
 * Path → page key, tolerant of a trailing slash and of the older `/#about`
 * links that were shared while the site had no routing.
 */
export const pageForPath = (pathname: string, hash = ''): string => {
  const cleaned = pathname.replace(/\/+$/, '') || '/';

  // Checked before the path: those old links are all "/#page", and "/" on its
  // own would otherwise match home first.
  const fromHash = hash.replace(/^#/, '');
  if (cleaned === '/' && fromHash && PATHS[fromHash]) {
    return fromHash;
  }

  const fromPath = Object.entries(PATHS).find(([, path]) => path === cleaned);
  if (fromPath) {
    return fromPath[0];
  }

  // Anything else is not a page: say so rather than showing home at a stray URL.
  return cleaned === '/' ? 'home' : NOT_FOUND;
};

export const ROUTABLE_PAGES = Object.keys(PATHS);
