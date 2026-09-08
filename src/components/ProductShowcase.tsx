import { useState } from "react";
import { SwipeDeck } from "./SwipeDeck";
import { LayoutDashboard, CalendarCheck, BedDouble, Receipt, Sparkles, BarChart3 } from "lucide-react";

/**
 * Product showcase.
 *
 * The research names "you cannot see the product" as the biggest presentation
 * weakness, so these are real captures of the shipping application, taken from
 * its bundled demo dataset — a fictional 50-room property. Never a live
 * tenant: a marketing page must not carry a real hotel's guests or takings.
 *
 * The tabs follow the product's own structure. Each role signs in to a
 * dashboard built for their job rather than to one shared screen, and showing
 * five of them is the clearest way to make that concrete.
 *
 * Any capture that goes missing falls back to a labelled placeholder naming
 * the file to drop into `public/screenshots/` — deliberately obvious, so a
 * gap can never be mistaken for finished design.
 */
const SCREENS = [
  { key: "dashboard",     label: "Owner",        icon: LayoutDashboard, blurb: "Occupancy, ADR and RevPAR at a glance, with today's arrivals, room status and revenue." },
  { key: "front-desk",    label: "Front desk",   icon: CalendarCheck,   blurb: "Arrivals, departures, who is in house and which rooms are ready to sell — the desk's whole day on one screen." },
  { key: "rooms",         label: "Room status",  icon: BedDouble,       blurb: "Live room board: available, occupied, dirty, being cleaned, out of order." },
  { key: "housekeeping",  label: "Housekeeping", icon: Sparkles,        blurb: "Rooms waiting on service, what is in progress, and anything blocked on maintenance." },
  { key: "point-of-sale", label: "Point of sale", icon: Receipt,        blurb: "Open orders, the kitchen queue and takings so far, tied to the operator's shift." },
  { key: "finance",       label: "Finance",      icon: BarChart3,       blurb: "Revenue in, money out, and every expense waiting on a decision." },
];

type Screen = (typeof SCREENS)[number];

/**
 * One screenshot in its browser chrome.
 *
 * Lifted out of the tab panel so the phone layout can render all six as a
 * swipeable deck without a second copy of this markup drifting from the first.
 */
function Frame({
  screen,
  missing,
  onMissing,
}: {
  screen: Screen;
  missing: boolean;
  onMissing: () => void;
}) {
  return (
    <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white">
      {/* Browser chrome, so a screenshot reads as a real product */}
      <div className="flex items-center gap-2 px-4 py-3 bg-slate-100 border-b border-slate-200">
        <span className="w-3 h-3 rounded-full bg-red-400" />
        <span className="w-3 h-3 rounded-full bg-amber-400" />
        <span className="w-3 h-3 rounded-full bg-green-400" />
        <span className="ml-3 text-xs text-slate-500 truncate">
          app.hotelopx.com — {screen.label}
        </span>
      </div>

      {missing ? (
        <div className="aspect-[16/9] flex flex-col items-center justify-center bg-slate-50 border-2 border-dashed border-slate-300 p-4 text-center">
          <screen.icon className="w-14 h-14 text-slate-300 mb-4" />
          <p className="font-semibold text-slate-500">{screen.label} screenshot</p>
          <code className="mt-2 text-xs text-slate-400 bg-white px-2 py-1 rounded border border-slate-200">
            public/screenshots/{screen.key}.png
          </code>
        </div>
      ) : (
        <img
          src={`/screenshots/${screen.key}.png`}
          alt={`HotelOpX ${screen.label}`}
          className="w-full aspect-[16/9] object-cover object-top"
          onError={onMissing}
          loading="lazy"
        />
      )}
    </div>
  );
}

export function ProductShowcase() {
  const [active, setActive] = useState(SCREENS[0].key);
  const [missing, setMissing] = useState<Record<string, boolean>>({});
  const current = SCREENS.find((s) => s.key === active) ?? SCREENS[0];
  const flagMissing = (key: string) => setMissing((m) => ({ ...m, [key]: true }));

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            See HotelOpX in action
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            The screens your team will actually use, every day.
          </p>
        </div>

        {/*
          Phones swipe through the screens; the six tab buttons wrapped onto
          three rows here and asked for an accurate tap on a small target to
          see each one. Dragging sideways is both the shorter gesture and the
          one the deck already advertises.
        */}
        <div className="md:hidden">
          <SwipeDeck label="Product screens" desktopClass="">
            {SCREENS.map((screen) => (
              <figure key={screen.key} className="m-0">
                <Frame
                  screen={screen}
                  missing={Boolean(missing[screen.key])}
                  onMissing={() => flagMissing(screen.key)}
                />
                <figcaption className="mt-4">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                    <screen.icon className="w-4 h-4" />
                    {screen.label}
                  </span>
                  <p className="text-slate-600 text-sm mt-1">{screen.blurb}</p>
                </figcaption>
              </figure>
            ))}
          </SwipeDeck>
        </div>

        {/* From md up there is room for the tabs and one large screen. */}
        <div className="hidden md:block">
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
            <Frame
              screen={current}
              missing={Boolean(missing[current.key])}
              onMissing={() => flagMissing(current.key)}
            />
            <p className="text-center text-slate-600 mt-6 max-w-2xl mx-auto">
              {current.blurb}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
