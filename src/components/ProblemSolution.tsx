import { ArrowRight, BarChart3, Smartphone, Users, Wallet } from "lucide-react";
import { Button } from "./Button";
import { trackEvent } from "../utils/analytics";
import { SwipeDeck } from "./SwipeDeck";

/**
 * Names the problem before offering the product.
 *
 * A hotel owner running on WhatsApp and a notebook does not think of
 * themselves as needing "a PMS" — they think of themselves as losing bookings
 * and not knowing what last night earned. This section uses their words for
 * their problem, so the product that follows reads as an answer rather than an
 * upsell.
 *
 * The four problems are the ones this product measurably fixes. Claiming more
 * than that would be a promise the software has to keep on day one.
 */
const PROBLEMS = [
  {
    icon: Smartphone,
    emoji: "📱",
    title: "Lost bookings",
    description:
      "Reservations scattered across WhatsApp chats, phone calls and a notebook at the desk. Someone goes off shift and the booking goes with them.",
  },
  {
    icon: BarChart3,
    emoji: "📊",
    title: "No visibility",
    description:
      "No way to see which rooms are free right now, or what the hotel earned last night, without walking the floor and adding it up by hand.",
  },
  {
    icon: Wallet,
    emoji: "💰",
    title: "Revenue leakage",
    description:
      "Cash, transfers and POS all settle differently. Payments go untracked, and the shortfall only shows up weeks later — if at all.",
  },
  {
    icon: Users,
    emoji: "👥",
    title: "Staff coordination",
    description:
      "Housekeeping does not know a guest checked out. The front desk does not know the room is ready. A sellable room sits empty.",
  },
];

export function ProblemSolution({
  onNavigate,
}: {
  onNavigate: (page: string) => void;
}) {
  return (
    <section className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-balance">
            Still Managing Your Hotel with WhatsApp, Excel and Notebooks?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            It works — until the hotel gets busy. Then it costs you rooms.
          </p>
        </div>

        <SwipeDeck
          label="Problems HotelOpX solves"
          desktopClass="md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 md:mb-12"
        >
          {PROBLEMS.map((problem) => (
            <div
              key={problem.title}
              className="rounded-2xl bg-white border border-slate-200 p-6 h-full"
            >
              <div className="w-11 h-11 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-4">
                <problem.icon className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                {problem.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </SwipeDeck>

        <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-blue-900 px-6 py-10 sm:px-10 text-center">
          <p className="text-xl sm:text-2xl font-bold text-white mb-3 text-balance">
            HotelOpX brings everything together in one simple platform.
          </p>
          <p className="text-blue-100 max-w-2xl mx-auto mb-7">
            One place for reservations, the front desk, housekeeping, payments
            and reports — so nothing depends on who happens to be on shift.
          </p>
          <Button
            size="lg"
            onClick={() => {
              trackEvent("cta_clicked", {
                cta: "book_a_demo",
                location: "problem_solution",
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
    </section>
  );
}
