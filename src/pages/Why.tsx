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

interface WhyProps {
  onNavigate: (page: string) => void;
}

export function Why({ onNavigate }: WhyProps) {
  const reasons = [
    {
      icon: Globe,
      title: "Nigerian-First Design",
      description:
        "Built specifically for Nigerian hotels, not a foreign system adapted for our market. We understand NEPA, internet issues, and local payment preferences.",
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
        "Get enterprise features at a fraction of the cost of Opera, Micros, or other foreign systems. Plans start at ₦75,000/month, not millions in setup fees.",
    },
    {
      icon: Zap,
      title: "Faster Check-In/Out",
      description:
        "Reduce check-in time from 10+ minutes to under 2 minutes. Your guests will notice and appreciate the difference.",
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description:
        "Bank-level encryption, local data storage in Nigeria, and ISO 27001 certification. Your guest data is always protected.",
    },
    {
      icon: HeadphonesIcon,
      title: "Nigerian Support Team",
      description:
        "Get help in minutes, not days. Our support team is based in Lagos and understands your business. Available via phone, WhatsApp, and email.",
    },
    {
      icon: Smartphone,
      title: "Mobile-First",
      description:
        "Manage your hotel from anywhere with iOS and Android apps. Staff can update room status, take orders, and process payments on the go.",
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
      feature: "Monthly Cost (Medium Hotel)",
      hotelops: "₦175,000",
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
      feature: "Local Payment Integration",
      hotelops: "Paystack, Flutterwave",
      traditional: "Limited or None",
      better: true,
    },
    {
      feature: "Response Time",
      hotelops: "Minutes (Nigerian team)",
      traditional: "Days (Foreign support)",
      better: true,
    },
    {
      feature: "Mobile Apps",
      hotelops: "Included",
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
      feature: "Data Location",
      hotelops: "Nigeria",
      traditional: "Foreign servers",
      better: true,
    },
  ];

  const testimonials = [
    {
      quote:
        "HotelOpX saved us over ₦8M in the first year compared to our previous system. And it actually works better.",
      author: "Chioma Okafor",
      role: "General Manager, Lagos",
      hotel: "Medium Hotel (45 rooms)",
    },
    {
      quote:
        "The offline mode is a game changer. We used to lose bookings when internet went down. Not anymore.",
      author: "Ibrahim Yusuf",
      role: "Owner",
      hotel: "Small Hotel (22 rooms)",
    },
    {
      quote:
        "Check-in used to take 15 minutes. Now it's under 2 minutes. Our guests love it.",
      author: "Grace Adeyemi",
      role: "Front Desk Manager",
      hotel: "5-Star Hotel, Abuja",
    },
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
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

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
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

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
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

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What Hotel Operators Say
            </h2>
            <p className="text-lg text-slate-600">
              Real feedback from Nigerian hotels using HotelOpX
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-50 p-8 rounded-xl">
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
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-slate-600">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-blue-600 mt-1">
                    {testimonial.hotel}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
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

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Switch to HotelOpX?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of Nigerian hotels that made the smart choice.
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
