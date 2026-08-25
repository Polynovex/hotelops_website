import { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
import { apiService, type TestimonialRecord as Testimonial } from "../services/api";

/**
 * Testimonials pulled live from the API and managed in the super-admin
 * dashboard, so adding a customer quote never requires a website deploy.
 *
 * When there are none published the section renders nothing at all. An empty
 * "what our customers say" heading with no customers under it damages trust
 * more than omitting the section entirely.
 */
export function Testimonials() {
  const [items, setItems] = useState<Testimonial[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    apiService
      .getTestimonials()
      .then((data) => {
        if (!cancelled) setItems(data);
      })
      .catch(() => {
        // Silent: a marketing section must never break the page.
      })
      .finally(() => {
        if (!cancelled) setLoaded(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (!loaded || items.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            What hotel owners say
          </h2>
          <p className="text-lg text-slate-600">
            From properties running on HotelOpX every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((t) => (
            <figure
              key={t.id}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col hover:shadow-lg transition-shadow duration-300"
            >
              <Quote className="w-8 h-8 text-blue-200 mb-3" />

              {t.rating ? (
                <div className="flex gap-0.5 mb-3" aria-label={`${t.rating} out of 5`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < (t.rating ?? 0) ? "text-amber-400 fill-amber-400" : "text-slate-300"}`}
                    />
                  ))}
                </div>
              ) : null}

              <blockquote className="text-slate-700 leading-relaxed flex-grow">
                {t.quote}
              </blockquote>

              <figcaption className="mt-5 pt-5 border-t border-slate-200 flex items-center gap-3">
                {t.avatarUrl ? (
                  <img
                    src={t.avatarUrl}
                    alt=""
                    className="w-11 h-11 rounded-full object-cover flex-shrink-0"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                    {t.authorName.charAt(0).toUpperCase()}
                  </div>
                )}
                <div className="min-w-0">
                  <div className="font-semibold text-slate-900 truncate">{t.authorName}</div>
                  <div className="text-sm text-slate-500 truncate">
                    {[t.authorRole, t.hotelName].filter(Boolean).join(", ")}
                  </div>
                  {t.location && (
                    <div className="text-xs text-slate-400 truncate">{t.location}</div>
                  )}
                </div>
                {t.logoUrl && (
                  <img src={t.logoUrl} alt="" className="h-7 w-auto ml-auto object-contain" loading="lazy" />
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
