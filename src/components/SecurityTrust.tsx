import {
  DatabaseBackup,
  FileClock,
  KeyRound,
  Lock,
  ShieldCheck,
  UserCog,
  Wallet,
} from "lucide-react";

/**
 * What happens to a hotel's data, and to its guests'.
 *
 * A PMS holds guest identity documents, card-adjacent payment records and
 * payroll, so "is this safe" is a real purchasing question rather than a
 * formality — particularly under the Nigeria Data Protection Act.
 *
 * Every claim here is one the product actually implements: role-based access,
 * per-user permission overrides, an audit trail, encrypted transport and
 * storage, daily backups. Nothing about certifications the business does not
 * hold, because a claim like that is checkable and being caught out costs more
 * than the sale is worth.
 */
const MEASURES = [
  {
    icon: Lock,
    title: "Data security",
    description:
      "Guest and financial records are encrypted in transit and at rest.",
  },
  {
    icon: DatabaseBackup,
    title: "Automatic backups",
    description:
      "Your data is backed up daily, so a lost device is never a lost hotel.",
  },
  {
    icon: UserCog,
    title: "User permissions",
    description:
      "Decide exactly who can see rates, refunds, payroll and reports.",
  },
  {
    icon: KeyRound,
    title: "Role-based access",
    description:
      "Front desk, housekeeping, accounts and management each see only their own work.",
  },
  {
    icon: FileClock,
    title: "Audit logs",
    description:
      "Every change is recorded with who made it and when — including voids and discounts.",
  },
  {
    icon: ShieldCheck,
    title: "Data privacy",
    description:
      "Built to the Nigeria Data Protection Act and NDPR, with consent captured and retention limits applied.",
  },
  {
    icon: Wallet,
    title: "Secure payments",
    description:
      "Card payments are handled by Paystack, Flutterwave and Interswitch — we never store card numbers.",
  },
];

export function SecurityTrust() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-sm font-semibold mb-4">
            <ShieldCheck className="w-4 h-4" aria-hidden="true" />
            Security &amp; trust
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-balance">
            Your Hotel's Data, Properly Looked After
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            You are trusting us with your guests' details and your takings. Here
            is exactly how that is protected.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {MEASURES.map((measure) => (
            <div
              key={measure.title}
              className="rounded-2xl border border-slate-200 p-6 h-full bg-slate-50/60"
            >
              <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 text-slate-700 flex items-center justify-center mb-4">
                <measure.icon className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                {measure.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {measure.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
