import { PageLink } from "../components/PageLink";

/**
 * Shown for any address that is not one of the site's pages. Served with a
 * real 404 status (dist/404.html), so a mistyped or retired URL is not
 * indexed as a copy of the home page.
 */
export function NotFound({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <section className="py-24 px-4">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-sm font-semibold text-blue-600 mb-2">404</p>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Page not found</h1>
        <p className="text-slate-600 mb-8">
          The page you were looking for is not here. It may have moved, or the link may be mistyped.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <PageLink page="home" onNavigate={onNavigate} className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700">
            Go to the home page
          </PageLink>
          <PageLink page="contact" onNavigate={onNavigate} className="px-6 py-3 rounded-lg border-2 border-blue-600 text-blue-600 font-medium hover:bg-blue-50">
            Contact us
          </PageLink>
        </div>
      </div>
    </section>
  );
}
