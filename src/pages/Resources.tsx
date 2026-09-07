import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, BookOpen, Clock } from "lucide-react";
import { Button } from "../components/Button";
import { publishedResources, type Resource } from "../content/resources";
import { apiService, type BlogPostRecord } from "../services/api";
import { trackEvent } from "../utils/analytics";

/**
 * Resources index and article view.
 *
 * Deliberately its own page rather than anything on the home page. This
 * content exists to be found in search by someone researching a problem, not
 * to be read by someone already deciding whether to buy — putting it in the
 * buying path would add reading without adding persuasion, and cost the
 * homepage weight for no conversion benefit.
 *
 * The article view is state inside this page rather than a route, matching how
 * the rest of the site navigates. When real routing arrives, each article
 * already has a slug to become a URL.
 */
const CATEGORY_STYLES: Record<Resource["category"], string> = {
  "Getting started": "bg-blue-50 text-blue-700 border-blue-200",
  Operations: "bg-amber-50 text-amber-800 border-amber-200",
  Revenue: "bg-green-50 text-green-800 border-green-200",
  Staff: "bg-purple-50 text-purple-700 border-purple-200",
  Compliance: "bg-slate-100 text-slate-700 border-slate-200",
};

/** Maps an API post onto the shape the renderer already understands. */
const toResource = (post: BlogPostRecord): Resource => ({
  slug: post.slug,
  title: post.title,
  summary: post.summary,
  category: (post.category as Resource["category"]) ?? "Operations",
  readMinutes: post.readMinutes,
  status: "published",
  body: post.body ?? []
});

export function Resources({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const [posts, setPosts] = useState<Resource[] | null>(null);

  /**
   * Articles come from the API, written and published by the super admin.
   *
   * The bundled set in `content/resources.ts` is the fallback: if the API is
   * unreachable — or nothing has been published yet — the page still has
   * something to show rather than going blank. Once posts exist server-side
   * they take over entirely, so editing one no longer needs a deploy.
   */
  useEffect(() => {
    let active = true;
    apiService
      .getBlogPosts()
      .then((rows) => {
        if (active) setPosts(rows.length > 0 ? rows.map(toResource) : []);
      })
      .catch(() => {
        if (active) setPosts([]);
      });
    return () => {
      active = false;
    };
  }, []);

  const articles = useMemo(
    () => (posts && posts.length > 0 ? posts : publishedResources()),
    [posts]
  );

  const article = openSlug ? articles.find((a) => a.slug === openSlug) ?? null : null;

  // Opening or closing an article changes what is on screen, so it should
  // return the reader to the top the way a page change does.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [openSlug]);

  if (article) {
    return (
      <article className="py-12 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => setOpenSlug(null)}
            /* flex, not inline-flex: as an inline element it shared a line
               with the category chip below and the two overlapped. */
            className="flex w-fit items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900 mb-8 min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            All resources
          </button>

          <span
            className={`inline-block px-3 py-1 rounded-full border text-xs font-semibold mb-4 ${CATEGORY_STYLES[article.category]}`}
          >
            {article.category}
          </span>

          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 leading-tight text-balance">
            {article.title}
          </h1>

          <p className="text-lg text-slate-600 mb-3">{article.summary}</p>

          <p className="flex items-center gap-1.5 text-sm text-slate-500 mb-10 pb-8 border-b border-slate-200">
            <Clock className="w-4 h-4" aria-hidden="true" />
            {article.readMinutes} min read
          </p>

          {/*
            Rendered from typed blocks rather than a markdown string, so the
            article body cannot introduce raw HTML into the page.
          */}
          <div className="space-y-5">
            {article.body.map((block, index) => {
              if (block.type === "heading") {
                return (
                  <h2
                    key={index}
                    className="text-xl sm:text-2xl font-bold text-slate-900 pt-4"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "list") {
                return (
                  <ul key={index} className="space-y-2 pl-1">
                    {block.items.map((item) => (
                      <li key={item} className="flex gap-3 text-slate-700 leading-relaxed">
                        <span aria-hidden="true" className="text-blue-600 mt-1">
                          •
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              if (block.type === "callout") {
                return (
                  <aside
                    key={index}
                    className="rounded-xl border-l-4 border-blue-500 bg-blue-50 px-5 py-4 text-slate-800 leading-relaxed"
                  >
                    {block.text}
                  </aside>
                );
              }
              return (
                <p key={index} className="text-slate-700 leading-relaxed text-[17px]">
                  {block.text}
                </p>
              );
            })}
          </div>

          <div className="mt-14 rounded-2xl bg-gradient-to-br from-slate-900 to-blue-900 px-6 py-9 text-center">
            <p className="text-xl font-bold text-white mb-2 text-balance">
              Want to see this working in your hotel?
            </p>
            <p className="text-blue-100 mb-6 max-w-xl mx-auto">
              A 30-minute walkthrough on your own rooms and rates. No setup fee,
              30-day free trial.
            </p>
            <Button
              size="lg"
              onClick={() => {
                trackEvent("cta_clicked", {
                  cta: "book_a_demo",
                  location: `resource:${article.slug}`,
                });
                onNavigate("contact");
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white min-h-[48px]"
            >
              Book a Demo
              <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </article>
    );
  }

  return (
    <div className="py-12 sm:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-semibold mb-4">
            <BookOpen className="w-4 h-4" aria-hidden="true" />
            Resources
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 text-balance">
            Practical guides for running a hotel in Nigeria
          </h1>
          <p className="text-lg text-slate-600">
            Written for the way hotels here actually operate — mixed payment
            methods, unreliable connections and staff who turn over. No jargon.
          </p>
        </div>

        {articles.length === 0 ? (
          /*
           * Only reachable if every article is pulled back to draft. Saying so
           * plainly beats an empty grid, and beats a "coming soon" promise that
           * nobody is accountable for.
           */
          <div className="rounded-2xl border border-dashed border-slate-300 p-12 text-center">
            <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-4" aria-hidden="true" />
            <p className="font-semibold text-slate-700 mb-1">
              No guides published yet
            </p>
            <p className="text-sm text-slate-500">
              In the meantime, message us on WhatsApp — we are happy to talk
              through any of this directly.
            </p>
          </div>
        ) : (
          /*
           * Two columns, not three. With four published guides a three-column
           * grid strands the last card alone on its own row, and the wider
           * track gives each summary room to breathe rather than wrapping to
           * four lines.
           */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((item) => (
              <button
                key={item.slug}
                type="button"
                onClick={() => {
                  trackEvent("cta_clicked", {
                    cta: "open_resource",
                    resource: item.slug,
                  });
                  setOpenSlug(item.slug);
                }}
                className="text-left rounded-2xl border border-slate-200 bg-white p-6 h-full flex flex-col transition-shadow duration-200 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                <span
                  className={`self-start px-2.5 py-1 rounded-full border text-xs font-semibold mb-4 ${CATEGORY_STYLES[item.category]}`}
                >
                  {item.category}
                </span>
                <h2 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                  {item.title}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {item.summary}
                </p>
                <span className="mt-auto flex items-center justify-between text-sm">
                  <span className="flex items-center gap-1.5 text-slate-500">
                    <Clock className="w-4 h-4" aria-hidden="true" />
                    {item.readMinutes} min read
                  </span>
                  <span className="font-semibold text-blue-700 inline-flex items-center gap-1">
                    Read
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </span>
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
