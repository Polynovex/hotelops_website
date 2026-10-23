import {
  Building2,
  Package,
  CalendarDays,
  Star,
  CreditCard,
  BarChart3,
  Users,
  Receipt,
  Database,
  Smartphone,
  Monitor,
  WifiOff,
  Check,
} from "lucide-react";
import { Button } from "../components/Button";
import { SwipeDeck } from "../components/SwipeDeck";

interface ProductsProps {
  onNavigate: (page: string) => void;
}

export function Products({ onNavigate }: ProductsProps) {
  /*
   * What is built today. Features marked (Enterprise) are on the Enterprise
   * plan only; everything else is on every plan unless the pricing page says
   * otherwise. Keep this in step with the product, and with Pricing.tsx.
   */
  const products = [
    {
      icon: Building2,
      name: "HotelOpX PMS",
      tagline: "Complete Property Management System",
      description:
        "Run the front desk, rooms and housekeeping from one screen: reservations and walk-ins, check-in and check-out, room status, and a clean hand-over from housekeeping to sale.",
      features: [
        "Online & walk-in reservations, Q-rooms and waitlist",
        "Front desk check-in and check-out",
        "Guest QR self-registration before arrival",
        "Room status board and real-time availability",
        "Housekeeping tasks, assignment and room inspection",
        "Check-out review: late check-out fees, damage and minibar charges with approval",
        "Guest and company profiles with stay history",
        "Rate plans, room types and availability calendar",
        "Night audit with automatic backup",
      ],
      color: "blue",
    },
    {
      icon: CreditCard,
      name: "HotelOpX POS",
      tagline: "Point of Sale for Every Outlet",
      description:
        "One POS for the restaurant, bar, pool and room service. Guests order from a QR code at their table; staff take cash, card, transfer or send the bill to the guest's room.",
      features: [
        "QR code ordering: guests scan, browse, order and pay",
        "Restaurant, bar and room service",
        "Send the bill to a guest's room",
        "Menu add-ons priced automatically",
        "Kitchen display and table management",
        "Split bills, discounts and manager approval",
        "Card payments via your own Paystack or Flutterwave account",
        "Cash, transfer and POS terminal payments",
        "Works offline and syncs when back online",
      ],
      color: "green",
    },
    {
      icon: Package,
      name: "HotelOpX Inventory",
      tagline: "Stock Linked to the POS",
      description:
        "Know what is in the store, what went out and what it cost. Stock received updates the cost price, and what is issued is tracked against your outlets.",
      features: [
        "Stock items by category and store",
        "Receive and issue stock with full history",
        "Cost price updated from each delivery",
        "Items issued and quantity on hand at a glance",
        "Linked to POS menu items and outlets",
        "Printable stock sheets",
      ],
      color: "cyan",
    },
    {
      icon: BarChart3,
      name: "HotelOpX Finance",
      tagline: "From Daily Records to Full Accounts",
      description:
        "Every plan records each day's money with owner approval, so no figure reaches a report until it is signed off. Enterprise adds a full double-entry ledger, financial statements and USALI-aligned reporting.",
      features: [
        "Daily records with owner approval",
        "Daily expenditure: recorded by the GM or accountant, approved by someone else",
        "Budgets against actual spend",
        "Suppliers and creditors",
        "Transaction history and POS payments",
        "Management reports in naira",
        "Double-entry ledger, journals and bank reconciliation (Enterprise)",
        "Trial balance, P&L, balance sheet, aging and VAT (Enterprise)",
        "USALI-aligned operating statement and forecasting (Enterprise)",
      ],
      color: "orange",
    },
    {
      icon: Users,
      name: "HotelOpX HR & Payroll",
      tagline: "Staff, Rota, Attendance & Nigerian Payroll",
      description:
        "Manage your team end to end: staff records, the rota, attendance, leave and monthly payroll with PAYE calculated to Nigerian tax law automatically.",
      features: [
        "Staff profiles with promotion and transfer history",
        "Rota generator, with sign-in tied to each shift",
        "Clock in/out via QR, PIN or GPS",
        "Overtime requests, approvals and pay rates",
        "Leave requests, approvals & balances",
        "Automatic PAYE & Consolidated Relief",
        "Payslip generation & printing",
        "Staff self-service hub",
      ],
      color: "green",
    },
    {
      icon: CalendarDays,
      name: "HotelOpX Banquet & Events",
      tagline: "Conferences, Weddings and Functions (Enterprise)",
      description:
        "Book the venue, the rooms and the catering in one place. Quote, invoice and take deposits, and the rooms you hold for an event are kept off sale for the dates.",
      features: [
        "Event calendar across every venue",
        "Event types, quotes and invoices",
        "Catering menus from your banquet outlet",
        "Room blocks held from your room inventory",
        "Deposits, payments and balance tracking",
        "Add-ons after payment, priced and invoiced",
      ],
      color: "purple",
    },
    {
      icon: Star,
      name: "HotelOpX Guest Experience",
      tagline: "Feedback, Loyalty and Promotions",
      description:
        "Hear from guests while they are still with you, reward the ones who come back, and fill quiet nights with targeted offers.",
      features: [
        "Guest feedback QR codes, with low ratings sent to managers at once",
        "Ratings by service: room, cleanliness, food, front desk, value",
        "Birthday wishes for guests",
        "Loyalty programme (Enterprise)",
        "Room, F&B and event promotions (Enterprise)",
      ],
      color: "blue",
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
        "iOS and Android apps for staff to manage operations from anywhere in the property. We install them on your devices during onboarding.",
    },
    {
      icon: Monitor,
      title: "Desktop & Web",
      description:
        "Desktop applications for Windows and Mac, installed by our team, plus full web access from any browser on any device.",
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
      <section className="relative py-12 md:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-500/20 border border-blue-400/50 text-blue-200 rounded-full text-sm font-medium backdrop-blur-sm animate-fade-in">
            🎯 Seven modules, one platform
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
          cyan: "from-cyan-500 to-cyan-600",
          purple: "from-violet-500 to-violet-600",
        };

        return (
          <section key={index} className={`py-12 md:py-24 ${bgColor}`}>
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
      <section className="relative py-12 md:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
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

          <SwipeDeck
          label="Built for the Nigerian market"
          desktopClass="md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
        >
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
          </SwipeDeck>
        </div>
      </section>

      {/*
        Payments, described precisely.

        Card payments run on the hotel's own Paystack or Flutterwave merchant
        account: HotelOpX starts the charge with their keys and the money
        settles into their bank account, never into ours. That distinction is
        worth stating plainly — it is why there is no platform cut on takings
        and no waiting for us to pay out.

        Everything else a Nigerian hotel is actually paid in still has to be
        recorded and reconciled, which is the second card.
      */}
      <section className="py-12 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 animate-fade-in">
            Every Naira Accounted For
          </h2>
          <p className="text-lg text-slate-600 mb-12 animate-fade-in animation-delay-200">
            Take cards through your own Paystack or Flutterwave account, and
            record every other kind of payment against the right room or table.
          </p>
          <SwipeDeck
          label="How payments are recorded"
          desktopClass="md:grid-cols-2 gap-4 md:gap-8"
        >
            <div className="group bg-white p-10 rounded-2xl shadow-lg border-2 border-transparent hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 animate-fade-in animation-delay-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Cards, on your own account
              </h3>
              <p className="text-slate-600">
                Connect your Paystack or Flutterwave keys and take card
                payments from the front desk or straight from a guest&apos;s
                phone. The money settles into your bank account, not ours.
              </p>
            </div>
            <div className="group bg-white p-10 rounded-2xl shadow-lg border-2 border-transparent hover:border-emerald-500 transition-all duration-300 hover:-translate-y-2 animate-fade-in animation-delay-400">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Receipt className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Cash and transfers, balanced at close
              </h3>
              <p className="text-slate-600">
                Record cash at the desk, a transfer alert on the phone or a
                swipe on the POS machine. Open a float, close the shift, and
                see the variance before anyone goes home.
              </p>
            </div>
          </SwipeDeck>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-12 md:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
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
