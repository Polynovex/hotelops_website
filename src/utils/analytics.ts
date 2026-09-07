/**
 * Conversion tracking for the marketing site.
 *
 * Deliberately provider-agnostic. Events are pushed to `window.dataLayer`,
 * which Google Analytics via Tag Manager reads natively and which any other
 * tool can be pointed at later — so adding or replacing the analytics vendor is
 * a change to one script tag rather than to every call site.
 *
 * Nothing is loaded unless a measurement ID is configured, so a build without
 * one ships no third-party script and sets no cookies. That is deliberate:
 * loading a tracker by default would put an NDPR consent obligation on every
 * visitor for data nobody is reading.
 */
type EventName =
  | 'demo_request_submitted'
  | 'free_trial_started'
  | 'cta_clicked'
  | 'video_played'
  | 'whatsapp_clicked'
  | 'pricing_viewed'
  | 'scroll_depth'
  | 'page_view';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;

/** Raised when state-based navigation swaps the page under the same URL. */
const PAGE_CHANGED_EVENT = 'hotelopx:page-changed';

/** Queued regardless of vendor, so events raised before load are not lost. */
const push = (payload: Record<string, unknown>) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
};

export const trackEvent = (name: EventName, params: Record<string, unknown> = {}) => {
  push({ event: name, ...params });
  if (typeof window.gtag === 'function') {
    window.gtag('event', name, params);
  }
};

export const trackPageView = (page: string) => {
  trackEvent('page_view', { page_title: document.title, page_name: page });
};

/**
 * Loads the analytics script, once, and only when configured.
 */
export const initAnalytics = () => {
  if (!MEASUREMENT_ID || typeof document === 'undefined') {
    return;
  }
  if (document.getElementById('ga-script')) {
    return;
  }

  const script = document.createElement('script');
  script.id = 'ga-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // gtag relies on `arguments` being pushed verbatim; a rest parameter would
    // push an array and the tag would not read it.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag('js', new Date());
  // Page views are sent explicitly, because state-based navigation never
  // triggers the automatic one after the first load.
  window.gtag('config', MEASUREMENT_ID, { send_page_view: false });
};

/**
 * Reports how far down a page people actually get, at quarter marks.
 *
 * One listener for the whole site; each threshold fires once per page so a
 * visitor scrolling up and down does not inflate the numbers.
 */
export const installScrollTracking = () => {
  if (typeof window === 'undefined') return () => undefined;

  const thresholds = [25, 50, 75, 100];
  let reached: number[] = [];

  const onScroll = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollable <= 0) return;
    const percent = Math.round((window.scrollY / scrollable) * 100);

    for (const mark of thresholds) {
      if (percent >= mark && !reached.includes(mark)) {
        reached.push(mark);
        trackEvent('scroll_depth', { percent: mark });
      }
    }
  };

  // Navigation is state-based, so there is no page load to clear the marks:
  // without this a visitor who scrolled to the bottom of the home page would
  // never register depth on any page they opened afterwards.
  const onPageChange = () => {
    reached = [];
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener(PAGE_CHANGED_EVENT, onPageChange);

  return () => {
    reached = [];
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener(PAGE_CHANGED_EVENT, onPageChange);
  };
};

/** Tells the scroll tracker a new page is on screen. */
export const resetScrollTracking = () => {
  window.dispatchEvent(new Event(PAGE_CHANGED_EVENT));
};
