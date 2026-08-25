import {
  Building2,
  CreditCard,
  BarChart3,
  Calendar,
  Users,
  DoorOpen,
  ShoppingCart,
  Utensils,
  Receipt,
  FileText,
  TrendingUp,
  Database,
  Smartphone,
  Monitor,
  Wifi,
  WifiOff,
  Check,
} from "lucide-react";
import { Button } from "../components/Button";

interface ProductsProps {
  onNavigate: (page: string) => void;
}

export function Products({ onNavigate }: ProductsProps) {
  const products = [
    {
      icon: Building2,
      name: "HotelOpX PMS",
      tagline: "Complete Property Management System",
      description:
        "Manage every aspect of your hotel operations from a single, intuitive platform. From reservations to housekeeping, front desk to guest services.",
      features: [
        "Online & walk-in reservations",
        "Housekeeping assignment & manager approval",
        "Room assignment & status board",
        "Front desk operations",
        "Guest profiles & history",
        "Channel manager integration",
        "Automated check-in/check-out",
        "Real-time room status",
        "Night audit automation",
      ],
      color: "blue",
    },
    {
      icon: CreditCard,
      name: "HotelOpX POS",
      tagline: "Point of Sale for All Revenue Centers",
      description:
        "Integrated POS system for restaurant, bar, spa, and all hotel revenue centers. Accept payments with Paystack and Flutterwave integration.",
      features: [
        "QR code ordering — guests scan, browse & order",
        "Restaurant & bar management",
        "Room service ordering",
        "Split bills & transfers",
        "Table management",
        "Kitchen display system",
        "Inventory tracking",
        "Local payment integration",
        "Receipt printing & email",
      ],
      color: "green",
    },
    {
      icon: BarChart3,
      name: "HotelOpX Finance",
      tagline: "Financial Management & Reporting",
      description:
        "Comprehensive financial tools with real-time reporting, invoicing, and accounting integration. Track every naira that flows through your hotel.",
      features: [
        "Real-time financial reports",
        "Automated invoicing",
        "Revenue management",
        "Expense tracking",
        "Bank reconciliation",
        "Tax compliance",
        "Multi-currency support",
        "Export to accounting software",
      ],
      color: "orange",
    },
    {
      icon: Users,
      name: "HotelOpX HR & Payroll",
      tagline: "Staff, Attendance & Nigerian Payroll",
      description:
        "Manage your team end to end \u2014 employee records, attendance, leave, and monthly payroll with PAYE calculated to Nigerian tax law automatically.",
      features: [
        "Staff records & employment history",
        "Clock in/out via QR, PIN or GPS",
        "Leave requests, approvals & balances",
        "Automatic PAYE & Consolidated Relief",
        "Payslip generation & printing",
        "Overtime tracking from attendance",
        "Performance reviews",
        "Bank details for salary payment",
      ],
      color: "green",
    },
  ];

  const platformFeatures = [
    {
      icon: WifiOff,
      title: "Offline-First",
      description:
        "Keep working even when internet goes down. Data syncs automatically when back online.",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description:
        "iOS and Android apps for staff to manage operations from anywhere in the property.",
    },
    {
      icon: Monitor,
      title: "Desktop & Web",
      description:
        "Full-featured desktop application for Windows and Mac, plus web access from any browser.",
    },
    {
      icon: Database,
      title: "Secure Cloud Infrastructure",
      description:
        "Hosted on AWS with encryption, automated backups, and NDPR-compliant safeguards for international transfer.",
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-500/20 border border-blue-400/50 text-blue-200 rounded-full text-sm font-medium backdrop-blur-sm animate-fade-in">
            🎯 Three Powerful Products, One Platform
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in animation-delay-200">
            Everything You Need to Run
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
              Your Hotel Efficiently
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto animate-fade-in animation-delay-300">
            Choose individual products or get the complete suite for maximum
            value. All integrated, all powerful.
          </p>
        </div>
      </section>

      {/* Product Sections */}
      {products.map((product, index) => {
        const Icon = product.icon;
        const isEven = index % 2 === 0;
        const bgColor = isEven
          ? "bg-white"
          : "bg-gradient-to-b from-slate-50 to-white";
        const gradients = {
          blue: "from-blue-500 to-blue-600",
          green: "from-emerald-500 to-emerald-600",
          orange: "from-orange-500 to-orange-600",
        };

        return (
          <section key={index} className={`py-24 ${bgColor}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div
                  className={`${isEven ? "order-1" : "order-1 lg:order-2"} animate-fade-in`}
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${gradients[product.color as keyof typeof gradients]} rounded-2xl flex items-center justify-center mb-6 shadow-lg hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
                    {product.name}
                  </h2>
                  <p
                    className={`text-xl font-semibold mb-4 bg-gradient-to-r ${gradients[product.color as keyof typeof gradients]} bg-clip-text text-transparent`}
                  >
                    {product.tagline}
                  </p>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    {product.description}
                  </p>
                  <Button
                    onClick={() => onNavigate("contact")}
                    className="transform hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    Request Demo
                  </Button>
                </div>

                <div
                  className={`${isEven ? "order-2" : "order-2 lg:order-1"} animate-fade-in animation-delay-200`}
                >
                  <div className="relative group bg-white rounded-2xl shadow-xl p-8 border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    {/* Gradient Border on Hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${gradients[product.color as keyof typeof gradients]} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    ></div>

                    <div className="relative">
                      <h3 className="text-2xl font-bold text-slate-900 mb-6">
                        Key Features
                      </h3>
                      <ul className="space-y-4">
                        {product.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start group/item"
                          >
                            <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 group-hover/item:bg-green-200 transition-colors duration-200">
                              <Check className="w-4 h-4 text-green-600" />
                            </div>
                            <span className="text-slate-700 group-hover/item:text-slate-900 transition-colors duration-200">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Platform Features Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Built for the Nigerian Market
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Every feature is designed with Nigerian hotels in mind, addressing
              real challenges you face daily.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platformFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="text-center group animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-400 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-100 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-blue-100 group-hover:text-white transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Payment Solutions Section */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 animate-fade-in">
            Integrated Payment Solutions
          </h2>
          <p className="text-lg text-slate-600 mb-12 animate-fade-in animation-delay-200">
            Accept payments with confidence using Nigeria's leading payment
            processors.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group bg-white p-10 rounded-2xl shadow-lg border-2 border-transparent hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 animate-fade-in animation-delay-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Paystack Integration
              </h3>
              <p className="text-slate-600">
                Accept cards, bank transfers, and mobile money with Nigeria's
                most trusted payment platform.
              </p>
            </div>
            <div className="group bg-white p-10 rounded-2xl shadow-lg border-2 border-transparent hover:border-emerald-500 transition-all duration-300 hover:-translate-y-2 animate-fade-in animation-delay-400">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Flutterwave Integration
              </h3>
              <p className="text-slate-600">
                Process payments across multiple channels with instant
                settlement to your bank account.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Ready to See HotelOpX in Action?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto animate-fade-in animation-delay-200">
            Schedule a personalized demo and see how our platform can transform
            your hotel operations.
          </p>
          <Button
            size="lg"
            onClick={() => onNavigate("contact")}
            className="border-2 border-blue-400 text-blue-100 hover:bg-blue-400/10 backdrop-blur-sm"
          >
            Request a Demo
          </Button>
        </div>
      </section>
    </div>
  );
}
