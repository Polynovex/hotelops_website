import { Target, Eye, Shield, Clock, Users, Award } from "lucide-react";
import { SwipeDeck } from "../components/SwipeDeck";
import { usePlatformMetrics } from "../hooks/usePlatformMetrics";

export function About() {
  // Same source as the home page's stats strip.
  const { metric } = usePlatformMetrics();
  const hotelsServed = metric("hotels_served");
  const cities = metric("cities");

  const values = [
    {
      icon: Shield,
      title: "Security First",
      description:
        "Encrypted in transit and at rest, with role-based access and audit logging. Built to the requirements of the Nigeria Data Protection Act.",
    },
    {
      icon: Clock,
      title: "Always Available",
      description:
        "Designed for 99.9% availability, and offline-first so the front desk keeps working even when the connection does not.",
    },
    {
      icon: Users,
      title: "Local Support",
      description:
        "A Nigerian support team that understands your business, reachable around the clock on WhatsApp, phone and email.",
    },
    {
      icon: Award,
      title: "Quality Standards",
      description:
        "Enterprise-grade features at prices that work for hotels of all sizes in Nigeria.",
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
          <div className="max-w-3xl">
            <div className="inline-block mb-6 px-4 py-2 bg-blue-500/20 border border-blue-400/50 text-blue-200 rounded-full text-sm font-medium backdrop-blur-sm animate-fade-in">
              🏢 Developed by Polynovex Limited
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in animation-delay-200">
              Modernizing Hotel Operations
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
                Across Nigeria
              </span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-6 animate-fade-in animation-delay-300">
              HotelOpX was built to solve a critical problem: Nigerian hotels
              are stuck using outdated, expensive, and disconnected systems that
              weren't designed for our market.
            </p>
            <p className="text-lg text-blue-200 leading-relaxed animate-fade-in animation-delay-400">
              <span className="font-bold">HotelOpX</span> is proudly developed
              by <span className="font-bold text-white">Polynovex Limited</span>
              , a Nigerian technology company committed to transforming the
              hospitality industry.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-slate-900">
                  Our Mission
                </h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                To empower every Nigerian hotel - from small guesthouses to
                5-star properties - with affordable, world-class technology that
                actually works in our environment.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We're replacing fragmented, expensive systems like Opera,
                Micros, and Sage with a single, integrated platform that costs
                less, works offline, and includes local payment integration.
              </p>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <Eye className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-slate-900">
                  Our Vision
                </h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                To become the standard hotel management platform across Africa,
                known for reliability, affordability, and features that actually
                address African hospitality challenges.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We believe every hotel deserves access to enterprise-grade
                technology without the enterprise price tag or complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our core values guide every decision we make and every feature we
              build.
            </p>
          </div>

          <SwipeDeck
          label="What we believe"
          desktopClass="md:grid-cols-2 gap-4 md:gap-8"
        >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-slate-600">{value.description}</p>
                </div>
              );
            })}
          </SwipeDeck>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Built for Nigeria, Ready for Africa
            </h2>
            <p className="text-xl text-blue-100 mb-4 max-w-2xl mx-auto">
              We understand the unique challenges of running a hotel in Nigeria:
              unreliable power, inconsistent internet, local payment
              preferences, and the need for affordable pricing.
            </p>
            <p className="text-lg text-blue-50 mb-8 max-w-2xl mx-auto font-semibold">
              Polynovex Limited is committed to delivering world-class
              hospitality solutions for Africa.
            </p>
            {/*
              The two platform figures come from the super admin's metrics
              editor, the same source the home page reads.

              They were hardcoded as "500+" and "50+" — numbers the platform
              could not evidence, and which stayed put when the home page was
              corrected to the real ones. A figure worth publishing is worth
              publishing from one place.

              The founding year stays written down: it is a fact about the
              company, not a platform metric, and nothing tracks it.
            */}
            <div className="grid grid-cols-3 gap-3 md:gap-8 mt-12">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">2019</div>
                <div className="text-blue-100 text-sm md:text-base">
                  Polynovex Founded in Lagos
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {hotelsServed.value}
                </div>
                <div className="text-blue-100 text-sm md:text-base">
                  Hotels Using HotelOpX
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {cities.value}
                </div>
                <div className="text-blue-100 text-sm md:text-base">Cities Covered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            Trust and Compliance
          </h2>
          {/*
            The registration number and company site sit here rather than only
            in the footer: this is the section a cautious buyer reads before
            deciding whether a young software company is real.
          */}
          <p className="text-lg font-semibold text-slate-700 mb-1">
            By{" "}
            <a
              href="https://polynovexlimited.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-800 underline underline-offset-2"
            >
              Polynovex Limited
            </a>
          </p>
          <p className="text-sm text-slate-500 mb-6">
            Registered in Nigeria • Company Registration No. 8231712
          </p>
          <div className="grid grid-cols-3 gap-3 md:gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-blue-600 mb-2">
                AWS
              </div>
              <div className="text-sm text-slate-600">Enterprise Cloud Infrastructure</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-sm text-slate-600">Availability Target</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-sm text-slate-600">Nigerian Support</div>
            </div>
          </div>
          <p className="text-slate-600 mt-8">
            Your hotel data is hosted on Amazon Web Services, encrypted in
            transit and at rest, with automated backups. Because AWS processes
            this data outside Nigeria, transfers are protected by Standard
            Contractual Clauses as required by the NDPR. Full details are in our
            Privacy Notice.
          </p>
        </div>
      </section>
    </div>
  );
}
