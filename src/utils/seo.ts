/**
 * Per-page title and meta description.
 *
 * Navigation is state-based rather than routed, so the document head does not
 * change on its own when the page does — every page previously shared one meta
 * description, and search engines had nothing distinct to show for any of them
 * but the home page. This sets the head from the same state that renders the
 * page.
 *
 * Descriptions are written for the search result, not for the page: around 150
 * characters, naming the product, the market and the price, because that
 * snippet is the whole pitch to someone who has not clicked yet.
 */
export interface PageSeo {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeo> = {
  home: {
    title: 'HotelOpX — Hotel Management Software for Nigerian Hotels',
    description:
      'Run your hotel smarter with HotelOpX. Manage bookings, rooms, staff, payments and operations from one platform. Built for Nigerian hotels. From ₦25,000/month.'
  },
  products: {
    title: 'Hotel PMS — Hotel Management Software Features | HotelOpX',
    description:
      'Explore HotelOpX features: reservations, front desk, housekeeping, billing, reports and restaurant POS. Hotel management software built for Nigeria.'
  },
  pricing: {
    title: 'Hotel PMS Pricing — Affordable Plans for Nigerian Hotels | HotelOpX',
    description:
      'Simple, transparent pricing from ₦25,000/month. No setup fee or hidden charges. 30-day free trial, staff training and Nigerian support included.'
  },
  why: {
    title: 'Why HotelOpX — Hotel Management Software Built for Nigerian Hotels',
    description:
      'Learn why Nigerian hotels choose HotelOpX: Naira payments, bank transfers, POS and cash reconciliation, WhatsApp updates, offline capability and local support.'
  },
  about: {
    title: 'About HotelOpX — Built by Polynovex Limited',
    description:
      'HotelOpX is built by Polynovex Limited — modern hotel management software for Nigerian and African hotels, designed around how they actually operate.'
  },
  contact: {
    title: 'Book a Demo — HotelOpX Hotel Management Software',
    description:
      'Book a demo of HotelOpX. A specialist will contact you within 24 hours to show you how it fits your hotel. No setup fee, 30-day free trial.'
  },
  resources: {
    title: 'Hotel Management Guides for Nigerian Hotels | HotelOpX Resources',
    description:
      'Practical guides on running a hotel in Nigeria: choosing a PMS, cutting booking errors, operating through internet outages and moving off notebooks.'
  },
  privacy: {
    title: 'Privacy Notice — HotelOpX',
    description:
      'How HotelOpX collects, uses and protects personal data, in line with the Nigeria Data Protection Act and NDPR.'
  }
};

const DEFAULT_SEO: PageSeo = PAGE_SEO.home;

/** Creates the tag on first use rather than assuming it exists in index.html. */
const setMeta = (selector: string, attribute: string, key: string, content: string) => {
  let tag = document.head.querySelector<HTMLMetaElement>(selector);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

export const applyPageSeo = (page: string) => {
  const seo = PAGE_SEO[page] ?? DEFAULT_SEO;

  document.title = seo.title;
  setMeta('meta[name="description"]', 'name', 'description', seo.description);

  // Open Graph and Twitter, so a link shared into WhatsApp — where a good deal
  // of Nigerian business conversation happens — previews as something other
  // than a bare URL.
  setMeta('meta[property="og:title"]', 'property', 'og:title', seo.title);
  setMeta('meta[property="og:description"]', 'property', 'og:description', seo.description);
  setMeta('meta[property="og:type"]', 'property', 'og:type', 'website');
  setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
  setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', seo.title);
  setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', seo.description);

  /**
   * A canonical per page.
   *
   * State-based navigation means every page shares one URL, so without this
   * search engines see a single document whose content keeps changing. The
   * hash marks each view distinctly until real routing is introduced.
   */
  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute(
    'href',
    `${window.location.origin}${page === 'home' ? '/' : `/#${page}`}`
  );
};
