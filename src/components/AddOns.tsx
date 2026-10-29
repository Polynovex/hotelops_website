import { useEffect, useState } from "react";
import { CalendarDays, Dumbbell, Martini, Scissors, ShoppingBag, Shirt, Sparkles, Waves, Puzzle } from "lucide-react";
import { apiService, type AddOnRecord } from "../services/api";

/**
 * Add-ons any plan can have. The built-in list renders first (and is what
 * the prerendered page carries); the live list from HotelOpX replaces it, so
 * an add-on created in the admin appears here without a website deploy.
 */
const BUILT_IN: AddOnRecord[] = [
  { code: "MINIBAR", name: "Minibar", description: "Stock per room, counted by housekeeping at check-out and charged to the guest bill.", icon: "minibar", behavior: "MINIBAR", monthlyPriceNgn: null },
  { code: "EVENTS", name: "Events & Banquet", description: "Venues, event bookings, catering from the banquet menu, room blocks, quotes, invoices and deposits.", icon: "events", behavior: "EVENTS", monthlyPriceNgn: null },
  { code: "POOL", name: "Swimming Pool", description: "Day passes, towels and poolside sales, paid at the pool or billed to the room.", icon: "pool", behavior: "OUTLET", monthlyPriceNgn: null },
  { code: "GYM", name: "Gym", description: "Day passes and memberships for guests and walk-ins.", icon: "gym", behavior: "OUTLET", monthlyPriceNgn: null },
  { code: "SPA", name: "Spa", description: "Treatments and packages, paid at the spa or billed to the room.", icon: "spa", behavior: "OUTLET", monthlyPriceNgn: null },
  { code: "LAUNDRY", name: "Laundry", description: "Guest laundry and dry cleaning by the piece, billed to the room.", icon: "laundry", behavior: "OUTLET", monthlyPriceNgn: null },
  { code: "SALON", name: "Saloon / Barber", description: "Hair and grooming services for guests and walk-ins.", icon: "salon", behavior: "OUTLET", monthlyPriceNgn: null },
  { code: "RETAIL", name: "Retail Shop", description: "A shop or mini-mart, with stock from Inventory.", icon: "shop", behavior: "OUTLET", monthlyPriceNgn: null },
];

const ICON: Record<string, typeof Waves> = {
  minibar: Martini, events: CalendarDays, pool: Waves, gym: Dumbbell, spa: Sparkles, laundry: Shirt, salon: Scissors, shop: ShoppingBag,
};

export function AddOnsGrid({ dark = false }: { dark?: boolean }) {
  const [addOns, setAddOns] = useState<AddOnRecord[]>(BUILT_IN);
  useEffect(() => {
    let active = true;
    apiService.getAddOns().then((rows) => {
      if (active && rows.length) setAddOns(rows);
    });
    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {addOns.map((addOn) => {
        const Icon = ICON[addOn.icon] ?? Puzzle;
        return (
          <div
            key={addOn.code}
            className={`rounded-2xl p-5 border transition-all duration-300 hover:-translate-y-1 ${
              dark ? "bg-slate-800/60 border-slate-700 hover:border-blue-500/50" : "bg-white border-slate-200 hover:border-blue-300 hover:shadow-lg"
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-blue-600/15 flex items-center justify-center mb-3">
              <Icon className={`w-5 h-5 ${dark ? "text-blue-300" : "text-blue-600"}`} />
            </div>
            <h3 className={`font-bold mb-1 ${dark ? "text-white" : "text-slate-900"}`}>{addOn.name}</h3>
            <p className={`text-sm leading-relaxed ${dark ? "text-slate-300" : "text-slate-600"}`}>{addOn.description}</p>
            {addOn.monthlyPriceNgn ? (
              <p className={`text-sm font-semibold mt-2 ${dark ? "text-blue-300" : "text-blue-700"}`}>
                from ₦{addOn.monthlyPriceNgn.toLocaleString()}/month
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
