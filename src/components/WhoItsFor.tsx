import { Building2, Hotel, Crown, Network } from "lucide-react";

interface WhoItsForProps {
  onNavigate?: (page: string) => void;
}

/**
 * Segments visitors by property size so each one lands on the right plan.
 * The room bands mirror the pricing tiers exactly — a visitor who reads
 * "31-100 rooms" here and sees the same band on Pricing knows where they fit
 * without doing arithmetic.
 */
const SEGMENTS = [
  {
    icon: Building2,
    title: "Small Hotels & Guesthouses",
    rooms: "1–30 rooms",
    plan: "Starter — ₦25,000/month",
    body: "Replace notebooks and WhatsApp threads. Take bookings, assign rooms, track every payment and see who is checking in today.",
    colour: "blue",
  },
  {
    icon: Hotel,
    title: "Growing Hotels",
    rooms: "31–100 rooms",
    plan: "Professional — ₦60,000/month",
    body: "Add restaurant and bar POS, housekeeping approvals, HR and payroll, inventory and full financial reporting as your team grows.",
    colour: "green",
  },
  {
    icon: Crown,
    title: "Luxury & 5-Star",
    rooms: "100+ rooms",
    plan: "Enterprise — from ₦150,000/month",
    body: "Unlimited rooms and users, white-label branding, loyalty programme, priority support and a dedicated account manager.",
    colour: "amber",
  },
  {
    icon: Network,
    title: "Hotel Groups",
    rooms: "Multiple properties",
    plan: "Enterprise — talk to sales",
    body: "Central oversight across properties, consolidated reporting and per-property permissions. Tell us your structure and we will scope it.",
    colour: "purple",
  },
];

const TONE: Record<string, string> = {
  blue: "from-blue-500 to-blue-600",
  green: "from-green-500 to-green-600",
  amber: "from-amber-500 to-amber-600",
  purple: "from-purple-500 to-purple-600",
};

export function WhoItsFor({ onNavigate }: WhoItsForProps) {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Built for every size of hotel
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Start with ten rooms and keep using HotelOpX as you grow. Same
            system, same team, no migration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SEGMENTS.map((segment) => (
            <div
              key={segment.title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${TONE[segment.colour]} flex items-center justify-center mb-4`}
              >
                <segment.icon className="w-6 h-6 text-white" strokeWidth={2} />
              </div>

              <h3 className="text-lg font-bold text-slate-900">{segment.title}</h3>
              <p className="text-sm font-semibold text-slate-500 mb-3">{segment.rooms}</p>
              <p className="text-slate-600 text-sm leading-relaxed flex-grow">{segment.body}</p>

              <p className="mt-4 pt-4 border-t border-slate-100 text-sm font-semibold text-slate-900">
                {segment.plan}
              </p>
            </div>
          ))}
        </div>

        {onNavigate && (
          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate("pricing")}
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Compare all plans
            </button>
            <p className="text-sm text-slate-500 mt-3">
              30-day free trial · No setup fee · Cancel anytime
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
