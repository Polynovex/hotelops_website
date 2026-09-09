import { FileText, Building, CreditCard, Ban, ShieldAlert, Scale } from "lucide-react";

/**
 * Terms of Service.
 *
 * Written because a business selling a subscription needs to say, in one
 * findable place, who the contract is with, what is being sold, what it costs,
 * how either side ends it, and what happens to the customer's data afterwards.
 *
 * It also carries the company's registration details. A prospect deciding
 * whether to trust a young Nigerian software company — and any provider
 * reviewing us — should be able to verify that Polynovex Limited is a real
 * registered entity without having to ask.
 *
 * Deliberately plain. Terms nobody can read protect nobody: a hotel owner
 * should be able to work out what they have agreed to in ten minutes.
 */

const LAST_UPDATED = "9 September 2026";

export const COMPANY = {
  name: "Polynovex Limited",
  registration: "8231712",
  address: "20 Samera St, Ketu, Lagos 105102, Nigeria",
  website: "https://polynovexlimited.org",
  email: "info@hotelopx.com",
  phone: "+234 813 439 3554",
};

const sections = [
  {
    icon: Building,
    title: "Who you are contracting with",
    body: [
      `HotelOpX is a product of ${COMPANY.name}, a company registered in Nigeria under Company Registration No. ${COMPANY.registration}, with its office at ${COMPANY.address}.`,
      "When these terms say \"we\" or \"us\", they mean Polynovex Limited. When they say \"you\", they mean the business that subscribes to HotelOpX — not its individual staff, and not its guests.",
    ],
  },
  {
    icon: FileText,
    title: "What we provide",
    body: [
      "A subscription to the HotelOpX platform: property management, point of sale, finance and ledger, and HR and payroll, according to the plan you have chosen. The plan you are on determines your room and user limits and which modules are switched on.",
      "We provide the software as a service over the internet, together with the mobile and desktop applications, which our team installs on your devices during onboarding. We do not sell you a copy of the software and you do not own it.",
      "We add and improve features over time. We will not remove a feature your plan depends on without telling you first.",
    ],
  },
  {
    icon: CreditCard,
    title: "Payment and trial",
    body: [
      "New customers get a 30-day free trial with no card required. After that, subscriptions are billed monthly in Nigerian Naira at the rate published on our pricing page, in advance.",
      "There is no setup fee. Prices may change, but never during a billing period you have already paid for, and we will give you at least 30 days' notice before a change takes effect.",
      "If an invoice goes unpaid we will contact you before doing anything else. We may suspend access to the platform if it stays unpaid for 30 days, and your data is kept for at least 60 days from suspension so nothing is lost while it is being sorted out.",
      "HotelOpX records payments your guests make to you. It does not process card payments on your behalf, and we are not party to any transaction between you and your guests.",
    ],
  },
  {
    icon: Ban,
    title: "Ending the subscription",
    body: [
      "You may cancel at any time, effective at the end of your current billing month. We do not lock you into a minimum term and we do not charge a cancellation fee.",
      "You can export your data at any time while your subscription is active. On cancellation we keep your data for 60 days so you can retrieve it, then delete it — except where Nigerian law requires us to keep payroll and tax records for longer.",
      "We may end your subscription if the platform is used unlawfully, to harm others, or in a way that threatens the service for other customers. We will tell you why.",
    ],
  },
  {
    icon: ShieldAlert,
    title: "Availability and what we do not promise",
    body: [
      "We design and operate HotelOpX for 99.9% availability and we monitor it continuously, but we do not offer a contractual uptime guarantee or service credits. If that matters to your business, talk to us before you sign up rather than after.",
      "The platform is offline-capable by design: the front desk and point of sale keep working through a connection or power outage and synchronise when service returns. That is a real capability, not a promise that nothing will ever go wrong.",
      "We are not liable for your lost profits or lost business. Where we are liable, our total liability is limited to the subscription fees you paid us in the twelve months before the claim. Nothing here limits liability that cannot lawfully be limited.",
    ],
  },
  {
    icon: Scale,
    title: "Your data and your guests' data",
    body: [
      "Your hotel remains the controller of its guest data. We process it only to run the platform for you, on your instructions. The detail — what is collected, how long it is kept, who it reaches — is in our Privacy Notice, which forms part of these terms.",
      "You are responsible for the accuracy of what your staff enter, and for telling your guests how their data is used.",
      "These terms are governed by the laws of the Federal Republic of Nigeria, and the Nigerian courts have jurisdiction over any dispute.",
    ],
  },
];

interface TermsProps {
  onNavigate?: (page: string) => void;
}

export function Terms({ onNavigate }: TermsProps) {
  return (
    <div className="bg-white">
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-8 h-8 text-blue-400" />
            <h1 className="text-4xl font-bold">Terms of Service</h1>
          </div>
          <p className="text-slate-300 text-lg">
            The agreement between your hotel and Polynovex Limited for the use
            of HotelOpX.
          </p>
          <p className="text-slate-400 text-sm mt-4">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        {sections.map((section) => (
          <section key={section.title}>
            <div className="flex items-center gap-3 mb-4">
              <section.icon className="w-5 h-5 text-blue-600" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-slate-900">{section.title}</h2>
            </div>
            <div className="space-y-4">
              {section.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-slate-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}

        {/*
          Company details in full, at the end where a reader looking to verify
          us will go. Repeating the registration number here rather than only
          in the first section means it survives someone skimming.
        */}
        <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Company details</h2>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
            <div>
              <dt className="text-slate-500">Registered name</dt>
              <dd className="text-slate-900 font-medium">{COMPANY.name}</dd>
            </div>
            <div>
              <dt className="text-slate-500">Company Registration No.</dt>
              <dd className="text-slate-900 font-medium">{COMPANY.registration}</dd>
            </div>
            <div>
              <dt className="text-slate-500">Office</dt>
              <dd className="text-slate-900 font-medium">{COMPANY.address}</dd>
            </div>
            <div>
              <dt className="text-slate-500">Company website</dt>
              <dd>
                <a
                  href={COMPANY.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-medium hover:underline"
                >
                  polynovexlimited.org
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-slate-500">Email</dt>
              <dd>
                <a href={`mailto:${COMPANY.email}`} className="text-blue-600 font-medium hover:underline">
                  {COMPANY.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-slate-500">Phone</dt>
              <dd>
                <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="text-blue-600 font-medium hover:underline">
                  {COMPANY.phone}
                </a>
              </dd>
            </div>
          </dl>
        </section>

        <p className="text-slate-600 text-sm">
          Our{" "}
          <button
            onClick={() => onNavigate?.("privacy")}
            className="text-blue-600 underline hover:text-blue-700"
          >
            Privacy Notice
          </button>{" "}
          forms part of these terms and explains how personal data is handled.
        </p>
      </div>
    </div>
  );
}
