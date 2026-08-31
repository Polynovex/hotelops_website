import { Shield, Mail, Clock, Database, UserCheck, AlertTriangle } from "lucide-react";

/**
 * Privacy Notice — NDPR (Nigeria Data Protection Regulation 2019) and the
 * Nigeria Data Protection Act 2023.
 *
 * Written to satisfy the transparency obligation: it states what is collected,
 * why, on what lawful basis, how long it is kept, who it is shared with, and
 * how to exercise data-subject rights.
 */

const LAST_UPDATED = "12 August 2026";

const lawfulBases = [
  {
    purpose: "Responding to a demo or sales enquiry",
    data: "Name, email, phone, company name, property size, your message",
    basis: "Consent — you tick the box on the contact form",
    retention: "24 months from submission, then deleted automatically",
  },
  {
    purpose: "Providing the HotelOpX platform to a hotel that subscribes",
    data: "Staff names, emails, work phone numbers, role, payroll and attendance records",
    basis: "Contract — necessary to deliver the service the hotel has bought",
    retention: "For the life of the subscription, plus 7 years for payroll and tax records as Nigerian law requires",
  },
  {
    purpose: "Processing hotel guest bookings on behalf of our customers",
    data: "Guest name, contact details, identification document, stay history, folio charges",
    basis: "Contract and legal obligation — the hotel is the data controller; HotelOpX is its processor",
    retention: "3 years after the guest's last stay, then identifying fields are redacted automatically",
  },
  {
    purpose: "Keeping the platform secure and investigating abuse",
    data: "IP address, browser user agent, login attempts, audit logs",
    basis: "Legitimate interest — preventing fraud and unauthorised access",
    retention: "12 months",
  },
  {
    purpose: "Sending product updates, where you have asked for them",
    data: "Name and email",
    basis: "Consent — a separate opt-in you can withdraw at any time",
    retention: "Until you unsubscribe",
  },
];

const subProcessors = [
  { name: "Amazon Web Services (AWS)", role: "Hosting, database, and file storage", location: "Europe / United States", safeguard: "Standard Contractual Clauses" },
  { name: "Termii", role: "SMS and WhatsApp delivery", location: "Nigeria", safeguard: "Data processing agreement" },
  { name: "Paystack", role: "Payment processing", location: "Nigeria", safeguard: "PCI-DSS certified" },
  { name: "Flutterwave", role: "Payment processing", location: "Nigeria", safeguard: "PCI-DSS certified" },
  { name: "Vercel", role: "Website and dashboard hosting", location: "United States", safeguard: "Standard Contractual Clauses" },
];

const rights = [
  "Access — ask for a copy of the personal data we hold about you",
  "Rectification — have inaccurate details corrected",
  "Erasure — ask us to delete your data where we have no overriding obligation to keep it",
  "Restriction — ask us to pause processing while a concern is resolved",
  "Portability — receive your data in a machine-readable format",
  "Objection — object to processing based on legitimate interest",
  "Withdraw consent — at any time, without affecting processing already carried out",
];

export function Privacy() {
  return (
    <div className="bg-white">
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-blue-400" />
            <h1 className="text-4xl font-bold">Privacy Notice</h1>
          </div>
          <p className="text-slate-300 text-lg">
            How HotelOpX collects, uses, and protects personal data — under the
            Nigeria Data Protection Act 2023 and the NDPR 2019.
          </p>
          <p className="text-slate-400 text-sm mt-4">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Who we are</h2>
          <p className="text-slate-700 leading-relaxed">
            HotelOpX provides hotel management software to hospitality
            businesses in Nigeria. Our role depends on whose data it is:
          </p>
          <ul className="mt-4 space-y-3 text-slate-700">
            <li className="flex gap-3">
              <span className="font-semibold text-slate-900 shrink-0">Controller —</span>
              <span>
                for people who contact us through this website, and for the
                staff of businesses that subscribe. We decide why and how that
                data is used.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-slate-900 shrink-0">Processor —</span>
              <span>
                for hotel guest data held in the platform. The hotel decides how
                it is used; we only act on their instructions. If you are a
                guest, contact the hotel directly — though we will help them
                respond.
              </span>
            </li>
          </ul>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-4">
            <Database className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-slate-900">
              What we collect and why
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50 text-left">
                  <th className="p-3 border border-slate-200 font-semibold">Purpose</th>
                  <th className="p-3 border border-slate-200 font-semibold">Data</th>
                  <th className="p-3 border border-slate-200 font-semibold">Lawful basis</th>
                  <th className="p-3 border border-slate-200 font-semibold">Kept for</th>
                </tr>
              </thead>
              <tbody>
                {lawfulBases.map((row) => (
                  <tr key={row.purpose} className="align-top">
                    <td className="p-3 border border-slate-200 font-medium text-slate-900">{row.purpose}</td>
                    <td className="p-3 border border-slate-200 text-slate-700">{row.data}</td>
                    <td className="p-3 border border-slate-200 text-slate-700">{row.basis}</td>
                    <td className="p-3 border border-slate-200 text-slate-700">{row.retention}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-slate-900">Retention</h2>
          </div>
          <p className="text-slate-700 leading-relaxed">
            We do not keep personal data longer than we need it. Retention is
            enforced automatically, not by hand: a nightly job removes enquiry
            records past 24 months and redacts guest records 3 years after their
            last stay, including deleting any identification document held in
            storage.
          </p>
          <p className="text-slate-700 leading-relaxed mt-3">
            Where a longer period is required by law — payroll and financial
            records must be kept for 7 years — we keep only what the law
            requires and remove the rest.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-4">
            <UserCheck className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-slate-900">Your rights</h2>
          </div>
          <ul className="space-y-2 text-slate-700">
            {rights.map((right) => (
              <li key={right} className="flex gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>{right}</span>
              </li>
            ))}
          </ul>
          <p className="text-slate-700 mt-4">
            To exercise any of these, email{" "}
            <a href="mailto:privacy@hotelopx.com" className="text-blue-600 underline">
              privacy@hotelopx.com
            </a>
            . We respond within 30 days. If you are not satisfied, you may
            complain to the Nigeria Data Protection Commission (NDPC).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Who else processes your data
          </h2>
          <p className="text-slate-700 mb-4">
            We use the following providers. Each is bound by a data processing
            agreement and may only act on our instructions.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50 text-left">
                  <th className="p-3 border border-slate-200 font-semibold">Provider</th>
                  <th className="p-3 border border-slate-200 font-semibold">Purpose</th>
                  <th className="p-3 border border-slate-200 font-semibold">Location</th>
                  <th className="p-3 border border-slate-200 font-semibold">Safeguard</th>
                </tr>
              </thead>
              <tbody>
                {subProcessors.map((row) => (
                  <tr key={row.name}>
                    <td className="p-3 border border-slate-200 font-medium text-slate-900">{row.name}</td>
                    <td className="p-3 border border-slate-200 text-slate-700">{row.role}</td>
                    <td className="p-3 border border-slate-200 text-slate-700">{row.location}</td>
                    <td className="p-3 border border-slate-200 text-slate-700">{row.safeguard}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 text-sm mt-3">
            We do not sell personal data, and we do not share it for advertising.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-6 h-6 text-amber-600" />
            <h2 className="text-2xl font-bold text-slate-900">
              If something goes wrong
            </h2>
          </div>
          <p className="text-slate-700 leading-relaxed">
            If a data breach occurs that is likely to affect your rights, we
            notify the NDPC within 72 hours of becoming aware of it, and we tell
            affected people directly without undue delay. We maintain an
            internal breach response procedure covering detection, containment,
            assessment, notification, and review.
          </p>
        </section>

        <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Mail className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-slate-900">
              Data Protection Officer
            </h2>
          </div>
          <p className="text-slate-700">
            Our Data Protection Officer is responsible for overseeing how we
            handle personal data and is your point of contact for any question
            or complaint.
          </p>
          <dl className="mt-4 space-y-2 text-slate-700">
            <div className="flex gap-2">
              <dt className="font-semibold text-slate-900 w-20 shrink-0">Email</dt>
              <dd>
                <a href="mailto:dpo@hotelopx.com" className="text-blue-600 underline">
                  dpo@hotelopx.com
                </a>
              </dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-semibold text-slate-900 w-20 shrink-0">Privacy</dt>
              <dd>
                <a href="mailto:privacy@hotelopx.com" className="text-blue-600 underline">
                  privacy@hotelopx.com
                </a>
              </dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-semibold text-slate-900 w-20 shrink-0">Regulator</dt>
              <dd>Nigeria Data Protection Commission (NDPC) — ndpc.gov.ng</dd>
            </div>
          </dl>
        </section>

        <section className="border-t border-slate-200 pt-8">
          <p className="text-sm text-slate-600">
            We review this notice at least annually and whenever our processing
            changes materially. Where a change affects you, we will tell you
            before it takes effect.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Privacy;
