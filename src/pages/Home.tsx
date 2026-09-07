import { useEffect, useState } from "react";
import {
  ArrowRight,
  Building2,
  CreditCard,
  BarChart3,
  Wifi,
  Shield,
  HeadphonesIcon,
  TrendingUp,
  Globe,
  Zap,
} from "lucide-react";
import { Button } from "../components/Button";
import { trackEvent } from "../utils/analytics";
import { apiService, type PlatformMetricRecord } from "../services/api";
import { WhoItsFor } from "../components/WhoItsFor";
import { OnboardingSteps } from "../components/OnboardingSteps";
import { HomeFaq } from "../components/HomeFaq";
import { Testimonials } from "../components/Testimonials";
import { ProductShowcase } from "../components/ProductShowcase";
import { ComingSoon } from "../components/ComingSoon";
import { NigerianAdvantage } from "../components/NigerianAdvantage";
import { ProblemSolution } from "../components/ProblemSolution";
import { SecurityTrust } from "../components/SecurityTrust";

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const features = [
    {
      icon: Building2,
      title: "Property Management",
      description:
        "Complete PMS for reservations, housekeeping, front desk, and guest management.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: CreditCard,
      title: "Point of Sale",
      description:
        "Integrated POS for restaurant, bar, spa, and all revenue centers.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: BarChart3,
      title: "Finance & Ledger",
      description:
        "Real-time financial reports, invoicing, and accounting integration.",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: Wifi,
      title: "Offline-First",
      description:
        "Works perfectly even with unreliable internet. Data syncs when online.",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description:
        "Encryption at rest and in transit, role-based access, audit logs, and automated backups — built to NDPR standards.",
      color: "from-red-500 to-red-600",
    },
    {
      icon: HeadphonesIcon,
      title: "Local Support",
      description:
        "Nigerian-based support team available via phone, WhatsApp, and email.",
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  /**
   * Headline figures, loaded from the API so the super admin can keep them
   * true without a deploy.
   *
   * The bundled values below are only a fallback for an unreachable API. They
   * are deliberately conservative: the previous literals claimed several
   * hundred hotels and fifty cities, which the platform could not evidence,
   * and a marketing figure nobody can stand behind is worse than a small one.
   */
  const FALLBACK_STATS = [
    { key: "hotels_served", value: "7", label: "Hotels Served", icon: Building2 },
    { key: "uptime", value: "99.9%", label: "Uptime", icon: TrendingUp },
    { key: "cities", value: "3", label: "Cities", icon: Globe },
    { key: "support", value: "24/7", label: "Support", icon: Zap },
  ];

  const ICONS: Record<string, typeof Building2> = {
    hotels_served: Building2,
    uptime: TrendingUp,
    cities: Globe,
    support: Zap,
  };

  const [liveMetrics, setLiveMetrics] = useState<PlatformMetricRecord[] | null>(null);

  useEffect(() => {
    let active = true;
    apiService
      .getPlatformMetrics()
      .then((rows) => {
        if (active) setLiveMetrics(rows);
      })
      .catch(() => {
        if (active) setLiveMetrics([]);
      });
    return () => {
      active = false;
    };
  }, []);

  const stats =
    liveMetrics && liveMetrics.length > 0
      ? liveMetrics.map((metric) => ({
          value: metric.value,
          label: metric.label,
          // Falls back to a neutral mark for a metric the super admin added
          // after this page was written.
          icon: ICONS[metric.key] ?? TrendingUp,
        }))
      : FALLBACK_STATS;

  const benefits = [
    {
      title: "Reduce Operational Costs",
      description: "Cut costs by 40% by eliminating redundant systems",
      icon: TrendingUp,
    },
    {
      title: "Improve Guest Experience",
      description: "Faster check-ins, better service, happier guests",
      icon: HeadphonesIcon,
    },
    {
      title: "Real-Time Insights",
      description: "Make data-driven decisions with instant analytics",
      icon: BarChart3,
    },
    {
      title: "Works Everywhere",
      description: "Works seamlessly whether online or offline",
      icon: Wifi,
    },
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-block mb-4 sm:mb-6 px-4 py-2 bg-blue-500/20 border border-blue-400/50 text-blue-200 rounded-full text-sm font-medium backdrop-blur-sm hover:bg-blue-500/30 transition-all duration-300 animate-fade-in">
              By Polynovex Limited • Hotel software built in Nigeria
            </div>

            {/*
              The headline names the job, the product and the modules, because
              a hotel owner arriving from a search for "hotel management
              software Nigeria" needs to know within one line whether this is
              the right kind of thing. The scale steps down on small screens so
              the whole proposition still fits above the fold on a phone, where
              most of this audience is reading.
            */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight animate-fade-in animation-delay-200">
              Run Your Hotel Smarter With HotelOpX
              <span className="block mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
                One Powerful PMS for Bookings, Rooms, Payments, Housekeeping and
                Hotel Operations
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto animate-fade-in animation-delay-300">
              Manage your entire hotel from one platform. Stop losing bookings in
              WhatsApp and notebooks. Get real-time visibility into your
              operations.
            </p>


            {/*
              Three entry points for three states of readiness: buy now, see it
              first, understand it first. Each reports which one was taken, so
              the split between them can actually be read later.
            */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in animation-delay-500">
              <Button
                size="lg"
                onClick={() => {
                  trackEvent("cta_clicked", { cta: "start_free_trial", location: "hero" });
                  trackEvent("free_trial_started", { location: "hero" });
                  onNavigate("contact");
                }}
                className="shadow-2xl bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105 transition-all duration-300 min-h-[52px]"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  trackEvent("cta_clicked", { cta: "book_a_demo", location: "hero" });
                  onNavigate("contact");
                }}
                className="border-2 border-blue-400 text-blue-100 hover:bg-blue-400/10 backdrop-blur-sm min-h-[52px]"
              >
                Book a Demo
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  trackEvent("cta_clicked", { cta: "see_how_it_works", location: "hero" });
                  document
                    .getElementById("how-it-works")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="border-2 border-white/30 text-blue-100 hover:bg-white/10 backdrop-blur-sm min-h-[52px]"
              >
                See How It Works
              </Button>
            </div>

            {/*
              Trust bar. The four things a Nigerian hotel owner weighs before
              reading any further: is it for us, what does it cost to start,
              can we try it, and is anyone here if it breaks.
            */}
            <ul className="mt-6 sm:mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-blue-100 animate-fade-in animation-delay-500">
              {[
                { badge: "🇳🇬", label: "Built for Nigerian hotels" },
                { badge: "✓", label: "No setup fee" },
                { badge: "✓", label: "30-day free trial" },
                { badge: "✓", label: "Local support" },
              ].map((item) => (
                <li key={item.label} className="flex items-center gap-2">
                  <span aria-hidden="true" className="text-blue-300">
                    {item.badge}
                  </span>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-blue-300 text-sm font-medium">
            Scroll to explore
          </div>
          <div className="flex justify-center mt-2">
            <svg
              className="w-5 h-5 text-blue-400 animate-pulse"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div> */}
      </section>

      {/*
        Positioning before proof: a visitor deciding between HotelOpX and an
        international PMS needs to see the local fit first, then recognise
        their own problem, before any list of features means anything.
      */}
      <NigerianAdvantage />

      <ProblemSolution onNavigate={onNavigate} />

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center group animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-3 group-hover:bg-blue-200 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Everything You Need in One System
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Stop juggling multiple tools. HotelOpX brings together property
              management, point of sale, and finance in one integrated platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white border border-slate-200 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Gradient Border */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  ></div>

                  {/* Content */}
                  <div className="relative">
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3
                      className="text-xl font-bold text-slate-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300"
                      style={{
                        backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                      }}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Segments visitors by property size, straight into the pricing tiers */}
      <ProductShowcase />

      <WhoItsFor onNavigate={onNavigate} />

      {/* Answers "will my staff be able to use it?" before they have to ask */}
      <div id="how-it-works">
        <OnboardingSteps />
      </div>

      {/* Clears objections before the visitor has to contact anyone */}
      {/* Social proof — renders nothing until real testimonials are published */}
      <Testimonials />

      {/* Channel manager: what ships today vs what awaits OTA certification */}
      <ComingSoon />

      {/* Guest data and takings are the objection that stops a sale late */}
      <SecurityTrust />

      <HomeFaq />

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Real Business Impact
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              See how HotelOpX transforms your hotel operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="flex gap-4 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-slate-600">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Illustration Space */}
            <div className="relative h-96 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border-2 border-slate-200 flex items-center justify-center overflow-hidden group">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-400 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan-400 rounded-full blur-3xl animate-blob"></div>
              </div>

              <div className="relative text-center">
                <Building2 className="w-24 h-24 text-blue-300 mx-auto mb-4 animate-bounce animation-delay-200" />
                <p className="text-slate-600 font-medium">
                  Modern Hotel Management
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-blue-800 overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Ready to Modernize Your Hotel Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto animate-fade-in animation-delay-200">
            Join hundreds of Nigerian hotels that trust HotelOpX for their daily
            operations. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-300">
            <Button
              variant="outline"
              size="lg"
              onClick={() => onNavigate("contact")}
              className="bg-white text-blue-600 font-semibold hover:bg-slate-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Schedule a Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => onNavigate("pricing")}
              className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm font-semibold"
            >
              See Pricing Plans
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
