import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import { pageForPath } from './utils/routes';
import './index.css';

const root = document.getElementById('root')!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

/*
  Each page is served already rendered (scripts/prerender.mjs). Hydrating
  attaches React to that HTML without redrawing it, so the visitor never sees
  the page swap. If the HTML is for a different page than the address asks
  for (an old /#pricing link lands on the home file), render fresh instead.
*/
const page = pageForPath(window.location.pathname, window.location.hash);
if (root.hasChildNodes() && root.dataset.page === page) {
  hydrateRoot(root, app);
} else {
  root.replaceChildren();
  createRoot(root).render(app);
}
