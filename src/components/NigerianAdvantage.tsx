import {
  Banknote,
  Building2,
  CreditCard,
  Coins,
  Smartphone,
  ReceiptText,
  WifiOff,
  Headphones,
} from "lucide-react";
import { SwipeDeck } from "./SwipeDeck";

/**
 * What makes this software fit a Nigerian hotel rather than a generic one.
 *
 * This is the section that separates HotelOpX from international products a
 * Lagos hotel could otherwise buy, so it is placed directly after the hero —
 * before features, before pricing. Each item names something a hotel here
 * genuinely does daily: reconciling a transfer against a POS terminal against
 * cash in a drawer, sending a confirmation over WhatsApp, carrying on through
 * a power or network cut.
 *
 * Deliberately concrete. "Localised for your region" tells a hotel owner
 * nothing; "reconcile cash, transfers and POS in one place" tells them whether
 * it solves Tuesday's problem.
 */
const ADVANTAGES = [
  {
    icon: Banknote,
    title: "Naira payments",
    description:
      "Every rate, invoice and report is in ₦. No conversion, no guessing at exchange rates.",
  },
  {
    icon: Building2,
    title: "Bank transfers",
    description:
      "Record transfers against a booking and match them off when the alert comes in.",
  },
  {
    icon: CreditCard,
    title: "POS payments",
    description:
      "Track what each terminal took, so the machine and the books agree at close of day.",
  },
  {
    icon: Coins,
    title: "Cash handling",
    description:
      "Open a float, close a shift, and see the variance immediately instead of at month end.",
  },
  {
    icon: Smartphone,
    title: "Card payments online",
    description:
      "Connect your own Paystack or Flutterwave account. Guests pay by card, the money settles into your bank.",
  },
  {
    icon: ReceiptText,
    title: "Nigerian tax requirements",
    description:
      "VAT, occupancy tax and compliant invoices handled as part of normal billing.",
  },
  {
    icon: WifiOff,
    title: "Offline capability",
    description:
      "Keep checking guests in and taking orders through an outage. It syncs when you are back.",
  },
  {
    icon: Headphones,
    title: "Local customer support",
    description:
      "A team in your timezone (WAT), reachable on WhatsApp, phone or email.",
  },
];

export function NigerianAdvantage() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 border border-green-200 text-green-800 text-sm font-semibold mb-4">
            <span aria-hidden="true">🇳🇬</span> Made for this market
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-balance">
            Built for the Way Nigerian Hotels Actually Operate
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Hotel management software written around Naira payments, local
            reconciliation and unreliable connections — not adapted to them
            afterwards.
          </p>
        </div>

        <SwipeDeck
          label="Built for how Nigerian hotels operate"
          desktopClass="md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5"
        >
          {ADVANTAGES.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition-shadow duration-200 hover:shadow-lg"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </SwipeDeck>
      </div>
    </section>
  );
}
