import { useState } from "react";
import { ChevronDown } from "lucide-react";

/**
 * Homepage FAQ.
 *
 * Every answer here is checked against what the product actually does. Where
 * the honest answer is "not yet" — channel manager, multi-property — it says
 * so. Overpromising at this stage produces a refund conversation later, which
 * is a worse outcome than losing the lead now.
 */
const FAQS = [
  {
    q: "Do I need technical knowledge to use it?",
    a: "No. HotelOpX is built for hotel staff, not IT staff. Your front desk sees arrivals, departures and rooms; housekeeping sees their tasks; management sees the money. We train each team on the part they use.",
  },
  {
    q: "Can my staff use it on their phones?",
    a: "Yes. There is a mobile app for Android and iOS covering POS, housekeeping tasks, clock in/out and kitchen display, plus the full dashboard in any browser.",
  },
  {
    q: "Does it work when the internet goes down?",
    a: "The mobile app keeps working offline for POS orders and task updates, queues what you do, and syncs automatically when the connection returns. The web dashboard needs a connection.",
  },
  {
    q: "Can I move my existing hotel data across?",
    a: "Yes. Export your guests, rooms or bookings to a spreadsheet and we import them. You map your columns to ours, review a preview with any errors flagged, and nothing is written to your account until you approve it.",
  },
  {
    q: "How do guests pay?",
    a: "Cash, bank transfer, POS terminal and card via Paystack or Flutterwave. Every payment is recorded against the guest folio with its reference, so reconciliation at the end of the day actually adds up.",
  },
  {
    q: "Do you connect to Booking.com or Expedia?",
    a: "Coming soon. The channel manager is built into HotelOpX — rate plans, an availability calendar and two-way sync are already in the product. Going live on Booking.com and Expedia requires their partner certification, which we are working through. We will contact you the moment it is switched on, and we would rather tell you now than after you have signed up.",
  },
  {
    q: "Can I manage more than one hotel from one account?",
    a: "Not yet. Each property runs as its own account today. Multi-property management is planned — talk to us about your group and we will tell you honestly where we are.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes, 30 days with full access. No card required to start, no setup fee, and you can cancel at any time.",
  },
  {
    q: "Where is my data stored, and is it secure?",
    a: "On Amazon Web Services, encrypted in transit and at rest, with role-based access, audit logging and automated backups. AWS processes data outside Nigeria, so transfers are covered by Standard Contractual Clauses as the NDPR requires — the detail is in our Privacy Notice.",
  },
];

export function HomeFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Questions hotel owners ask us
          </h2>
          <p className="text-lg text-slate-600">
            Straight answers, including where we are not there yet.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = open === index;
            return (
              <div
                key={faq.q}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between text-left px-6 py-5 hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-slate-900 pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-slate-600 leading-relaxed">{faq.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
