import { Globe2, CalendarRange, RefreshCw } from "lucide-react";

/**
 * Roadmap strip for the channel manager.
 *
 * Says plainly what is already in the product and what is still gated on
 * Booking.com and Expedia partner certification. Naming the blocker is more
 * credible than a vague "coming soon", and it sets a expectation we can meet.
 */
const ITEMS = [
  {
    icon: CalendarRange,
    title: "Rate plans & availability calendar",
    status: "Available now",
    ready: true,
    body: "Build rate plans per room type, set inventory and pricing by date, and close dates to arrival or departure.",
  },
  {
    icon: RefreshCw,
    title: "Two-way sync engine",
    status: "Available now",
    ready: true,
    body: "Push availability and rates, pull reservations, with full sync logging and conflict detection when a channel holds newer data.",
  },
  {
    icon: Globe2,
    title: "Booking.com & Expedia",
    status: "Coming soon",
    ready: false,
    body: "The connectors are built. Going live requires each channel's partner certification, which we are completing now. Ask us to add you to the early-access list.",
  },
];

export function ComingSoon() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold tracking-wide uppercase mb-4">
            Distribution
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sell your rooms everywhere
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            One inventory, distributed to the channels your guests book on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ITEMS.map((item) => (
            <div
              key={item.title}
              className="bg-slate-800/60 rounded-2xl p-6 border border-slate-700 hover:border-blue-500/50 transition-colors duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-blue-600/20 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-blue-400" strokeWidth={2} />
                </div>
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                    item.ready
                      ? "bg-green-500/15 text-green-400"
                      : "bg-amber-500/15 text-amber-400"
                  }`}
                >
                  {item.status}
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
