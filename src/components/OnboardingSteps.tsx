import { ClipboardCheck, Database, GraduationCap, Rocket, LifeBuoy } from "lucide-react";

/**
 * Addresses the objection the research identifies as decisive for Nigerian
 * buyers: not "is the software good?" but "will my staff actually be able to
 * use it?". Every step here maps to something the product genuinely does —
 * the data-migration step is the two-phase import pipeline, not a promise.
 */
const STEPS = [
  {
    icon: ClipboardCheck,
    title: "Setup",
    body: "We configure your property — rooms, room types, rates, outlets and staff roles — so you start with a system that matches how you already work.",
  },
  {
    icon: Database,
    title: "Data migration",
    body: "Bring your existing guests, rooms and bookings across from a spreadsheet. We map your columns to ours, show you a preview, and nothing is written until you approve it.",
  },
  {
    icon: GraduationCap,
    title: "Staff training",
    body: "We train your front desk, housekeeping and management teams on the parts each of them actually uses. No one has to learn the whole system.",
  },
  {
    icon: Rocket,
    title: "Go live",
    body: "Your hotel starts operating on HotelOpX, with us on hand through the first days while your team settles in.",
  },
  {
    icon: LifeBuoy,
    title: "Ongoing support",
    body: "Reach us on WhatsApp, phone or email. We are in the same time zone and we answer.",
  },
];

export function OnboardingSteps() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            We don't just hand you software
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Changing the system your hotel runs on is a real decision. Here is
            exactly how we get you from where you are today to running on
            HotelOpX.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {STEPS.map((step, index) => (
            <div key={step.title} className="relative">
              <div className="bg-slate-50 rounded-2xl p-6 h-full border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <span className="text-3xl font-bold text-slate-200">{index + 1}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
