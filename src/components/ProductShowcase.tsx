import { useState } from "react";
import { LayoutDashboard, CalendarCheck, BedDouble, Receipt, Sparkles, BarChart3 } from "lucide-react";

/**
 * Product showcase.
 *
 * The research names "you cannot see the product" as the biggest presentation
 * weakness. These are PLACEHOLDERS: each renders a labelled frame naming the
 * screen and the exact file to drop in. Replace the files in
 * `public/screenshots/` and the placeholders disappear automatically — no code
 * change needed. The frames are deliberately obvious so a missing capture can
 * never be mistaken for finished design.
 */
const SCREENS = [
  { key: "dashboard",    label: "Dashboard",      icon: LayoutDashboard, blurb: "Occupancy, ADR and RevPAR at a glance, with today's arrivals and revenue." },
  { key: "reservations", label: "Reservations",   icon: CalendarCheck,   blurb: "Every booking in one place — create, modify, assign rooms and check guests in." },
  { key: "rooms",        label: "Room status",    icon: BedDouble,       blurb: "Live room board: available, occupied, dirty, being cleaned, out of order." },
  { key: "housekeeping", label: "Housekeeping",   icon: Sparkles,        blurb: "Assign rooms to staff, then approve or reject the work before the room is sellable." },
  { key: "billing",      label: "Folios & billing", icon: Receipt,       blurb: "Room, restaurant and bar charges on one guest folio, settled in any payment method." },
  { key: "reports",      label: "Reports",        icon: BarChart3,       blurb: "Daily sales, occupancy, revenue by department and full financial statements." },
];

export function ProductShowcase() {
  const [active, setActive] = useState(SCREENS[0].key);
  const [missing, setMissing] = useState<Record<string, boolean>>({});
  const current = SCREENS.find((s) => s.key === active) ?? SCREENS[0];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            See HotelOpX in action
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            The screens your team will actually use, every day.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {SCREENS.map((screen) => (
            <button
              key={screen.key}
              onClick={() => setActive(screen.key)}
              aria-pressed={active === screen.key}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 ${
                active === screen.key
                  ? "bg-blue-600 text-white"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-blue-300"
              }`}
            >
              <screen.icon className="w-4 h-4" />
              {screen.label}
            </button>
          ))}
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white">
            {/* Browser chrome, so a screenshot reads as a real product */}
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-100 border-b border-slate-200">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-amber-400" />
              <span className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-3 text-xs text-slate-500">app.hotelopsx.com — {current.label}</span>
            </div>

            {missing[current.key] ? (
              // Placeholder shown only when the real capture is absent.
              <div className="aspect-[16/9] flex flex-col items-center justify-center bg-slate-50 border-2 border-dashed border-slate-300">
                <current.icon className="w-14 h-14 text-slate-300 mb-4" />
                <p className="font-semibold text-slate-500">{current.label} screenshot</p>
                <code className="mt-2 text-xs text-slate-400 bg-white px-2 py-1 rounded border border-slate-200">
                  public/screenshots/{current.key}.png
                </code>
                <p className="mt-3 text-xs text-slate-400">Drop the file in and this frame is replaced automatically</p>
              </div>
            ) : (
              <img
                src={`/screenshots/${current.key}.png`}
                alt={`HotelOpX ${current.label}`}
                className="w-full aspect-[16/9] object-cover object-top"
                onError={() => setMissing((m) => ({ ...m, [current.key]: true }))}
                loading="lazy"
              />
            )}
          </div>

          <p className="text-center text-slate-600 mt-6 max-w-2xl mx-auto">{current.blurb}</p>
        </div>
      </div>
    </section>
  );
}
