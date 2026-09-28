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

/**
 * Path → page key, tolerant of a trailing slash and of the older `/#about`
 * links that were shared while the site had no routing.
 */
export const pageForPath = (pathname: string, hash = ''): string => {
  const cleaned = pathname.replace(/\/+$/, '') || '/';
  const fromPath = Object.entries(PATHS).find(([, path]) => path === cleaned);
  if (fromPath) {
    return fromPath[0];
  }

  const fromHash = hash.replace(/^#/, '');
  if (fromHash && PATHS[fromHash]) {
    return fromHash;
  }

  return 'home';
};

export const ROUTABLE_PAGES = Object.keys(PATHS);
