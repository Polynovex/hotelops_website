import { useEffect, useState } from "react";
import {
  WifiOff,
  DollarSign,
  Zap,
  Shield,
  Users,
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle,
  Globe,
  Smartphone,
  HeadphonesIcon,
} from "lucide-react";
import { Button } from "../components/Button";
import { apiService, type TestimonialRecord } from "../services/api";
import { SwipeDeck } from "../components/SwipeDeck";

interface WhyProps {
  onNavigate: (page: string) => void;
}

export function Why({ onNavigate }: WhyProps) {
  /**
   * Pulled from the same admin-managed source as the home page.
   *
   * These were previously a hardcoded array of named people with quotes they
   * never gave. Beyond being unmanageable — editing one meant a website deploy
   * — attributing invented statements to named individuals is not something a
   * marketing page should do.
   */
  const [testimonials, setTestimonials] = useState<TestimonialRecord[]>([]);

  useEffect(() => {
    let cancelled = false;
    apiService
      .getTestimonials()
      .then((data) => {
        if (!cancelled) setTestimonials(data);
      })
      .catch(() => {
        // A marketing section must never break the page.
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const reasons = [
    {
      icon: Globe,
      title: "Nigerian-First Design",
      description:
        "Built for Nigerian hotels from the start, not a foreign system bent to fit afterwards. Power cuts, patchy connections and the way guests here actually pay were design constraints, not afterthoughts.",
    },
    {
      icon: WifiOff,
      title: "Works With Poor Internet",
      description:
        "Offline-first architecture means your operations never stop. When internet returns, everything syncs automatically. No more downtime.",
    },
    {
      icon: DollarSign,
      title: "Affordable Pricing",
      description:
        "Get enterprise features at a fraction of the cost of Opera, Micros, or other foreign systems. Plans start at ₦25,000/month, with no setup fee.",
    },
    {
      icon: Zap,
      title: "Faster Check-In/Out",
      description:
        "Guest details, room status and folio are on one screen, so the desk is not moving between a book, a spreadsheet and a card machine to check someone in.",
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description:
        "Encryption in transit and at rest, role-based access control, audit logging, and automated backups on AWS. Built to NDPR and Nigeria Data Protection Act 2023 requirements.",
    },
    {
      icon: HeadphonesIcon,
      title: "Nigerian Support Team",
      description:
        "Our support team is based in Lagos, Anambra and other parts of Nigeria, so wherever your hotel is, someone who understands how it runs can reach you. Message us on WhatsApp, email us or call directly — we answer promptly, around the clock.",
    },
    {
      icon: Smartphone,
      title: "Mobile-First",
      description:
        "Manage your hotel from anywhere. We install the iOS and Android apps on your staff devices during onboarding, so housekeeping can update room status and waiters can take orders from the floor.",
    },
    {
      icon: TrendingUp,
      title: "Increase Revenue",
      description:
        "Better inventory management, upselling tools, and real-time insights help you maximize revenue from every room and service.",
    },
  ];

  const comparison = [
    {
      feature: "Setup Cost",
      hotelops: "₦0",
      traditional: "₦5M - ₦20M",
      better: true,
    },
    {
      // Matches the Professional tier on the Pricing page (31–100 rooms).
      // These previously disagreed — ₦175,000 here against ₦60,000 there —
      // and a prospect who opens both tabs catches it.
      feature: "Monthly Cost (Medium Hotel)",
      hotelops: "₦60,000",
      traditional: "₦500,000+",
      better: true,
    },
    {
      feature: "Works Offline",
      hotelops: "Yes",
      traditional: "No",
      better: true,
    },
    {
      feature: "Local Payment Methods",
      hotelops: "Cash, transfer, POS terminal, Paystack & Flutterwave",
      traditional: "Limited or None",
      better: true,
    },
    {
      feature: "Support Availability",
      hotelops: "24/7 (Nigerian team)",
      traditional: "Days (Foreign support)",
      better: true,
    },
    {
      feature: "Mobile Apps",
      hotelops: "Included, installed by us",
      traditional: "Extra cost",
      better: true,
    },
    {
      feature: "Training",
      hotelops: "Free, ongoing",
      traditional: "Extra cost",
      better: true,
    },
    {
      /**
       * This row previously claimed the data sits in Nigeria. It does not:
       * the platform runs on AWS us-east-2, which the FAQ and the Privacy
       * Notice on this same site both state plainly. Data residency is exactly
       * the sort of claim a compliance-minded buyer relies on and can check,
       * so it has been replaced with the comparison that is both true and
       * actually meaningful — a foreign PMS typically has no NDPR posture at
       * all, whereas this one does.
       */
      feature: "NDPR Compliance",
      hotelops: "Built in, with signed safeguards",
      traditional: "Rarely addressed",
      better: true,
    },
  ];


  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-blue-500/20 border border-blue-400/50 text-blue-200 rounded-full text-sm font-medium backdrop-blur-sm animate-fade-in">
              💡 Why HotelOpX Stands Out
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in animation-delay-200">
              Why Nigerian Hotels
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
                Choose HotelOpX
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto animate-fade-in animation-delay-300">
              We built HotelOpX to solve real problems Nigerian hotels face
              every day. Here's why we're different.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SwipeDeck
          label="Why hotels choose HotelOpX"
          desktopClass="md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
        >
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-slate-600 text-sm">{reason.description}</p>
                </div>
              );
            })}
          </SwipeDeck>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              HotelOpX vs Traditional Systems
            </h2>
            <p className="text-lg text-slate-600">
              See how we compare to expensive foreign systems like Opera,
              Micros, and Sage
            </p>
          </div>

          {/*
            Phones get one card per row of the table.

            The table itself scrolled sideways here, which meant reading a
            single comparison — the feature, our figure, theirs — took a
            horizontal drag and a lost sense of which column was which. A card
            carries the whole row at once, and the deck moves through them.
          */}
          <div className="md:hidden">
            <SwipeDeck label="HotelOpX compared with traditional systems" desktopClass="">
              {comparison.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-6 flex flex-col"
                >
                  <p className="font-bold text-slate-900 mb-4">{item.feature}</p>

                  <div className="rounded-xl bg-green-50 border border-green-100 p-4 mb-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-green-700 mb-1">
                      HotelOpX
                    </p>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-800 font-semibold">{item.hotelops}</span>
                    </div>
                  </div>

                  <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">
                      Traditional systems
                    </p>
                    <div className="flex items-start">
                      <XCircle className="w-5 h-5 text-red-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{item.traditional}</span>
                    </div>
                  </div>
                </div>
              ))}
            </SwipeDeck>
          </div>

          <div className="hidden md:block bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">
                      Feature
                    </th>
                    <th className="px-6 py-4 text-left font-semibold">
                      HotelOpX
                    </th>
                    <th className="px-6 py-4 text-left font-semibold">
                      Traditional Systems
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-slate-200 hover:bg-slate-50"
                    >
                      <td className="px-6 py-4 font-medium text-slate-900">
                        {item.feature}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-slate-700">
                            {item.hotelops}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <XCircle className="w-5 h-5 text-red-400 mr-2 flex-shrink-0" />
                          <span className="text-slate-600">
                            {item.traditional}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Hidden entirely when nothing is published: a "real feedback"
          heading with no feedback beneath it undermines trust more than
          leaving the section out. */}
      {testimonials.length > 0 && (
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What Hotel Operators Say
            </h2>
            <p className="text-lg text-slate-600">
              Real feedback from Nigerian hotels using HotelOpX
            </p>
          </div>

          <SwipeDeck
          label="What you get with HotelOpX"
          desktopClass="md:grid-cols-3 gap-4 md:gap-8"
        >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-slate-50 p-8 rounded-xl">
                <div className="mb-6">
                  <div className="flex text-blue-600 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-700 italic mb-4">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">
                    {testimonial.authorName}
                  </div>
                  {testimonial.authorRole && (
                    <div className="text-sm text-slate-600">
                      {testimonial.authorRole}
                    </div>
                  )}
                  {testimonial.hotelName && (
                    <div className="text-sm text-blue-600 mt-1">
                      {testimonial.hotelName}
                      {testimonial.location ? `, ${testimonial.location}` : ''}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </SwipeDeck>
        </div>
      </section>
      )}

      <section className="py-12 md:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Real ROI: Save Money, Increase Revenue
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-8">
              <div>
                <div className="text-4xl font-bold text-white mb-2">60%</div>
                <div className="text-blue-100">Lower Total Cost</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">15%</div>
                <div className="text-blue-100">Revenue Increase</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">80%</div>
                <div className="text-blue-100">Faster Operations</div>
              </div>
            </div>
            <p className="text-blue-100 mb-8">
              Average results from hotels that switched to HotelOpX in their
              first year
            </p>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => onNavigate("contact")}
              className="border-2 border-blue-400 text-blue-100 hover:bg-blue-400/10 backdrop-blur-sm"
            >
              Calculate Your Savings
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Switch to HotelOpX?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Built in Nigeria, for Nigerian hotels.
              Schedule a demo and see the difference yourself.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => onNavigate("contact")}>
                Request a Demo
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => onNavigate("pricing")}
                className="border-white text-white hover:bg-slate-800"
              >
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
