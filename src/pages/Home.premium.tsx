import {
  ArrowRight,
  Building2,
  CreditCard,
  BarChart3,
  Wifi,
  Shield,
  HeadphonesIcon,
  TrendingUp,
  Zap,
  CheckCircle2,
  Globe,
} from 'lucide-react';
import { Button } from '../components/Button';
import { premiumTheme, cardVariants, gradientBg } from '../theme/premium';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const features = [
    {
      icon: Building2,
      title: 'Property Management',
      description:
        'Complete PMS for reservations, housekeeping, front desk, and guest management.',
      badge: 'Core',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: CreditCard,
      title: 'Point of Sale',
      description:
        'Integrated POS for restaurant, bar, spa, and all revenue centers.',
      badge: 'Revenue',
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: BarChart3,
      title: 'Finance & Ledger',
      description:
        'Real-time financial reports, invoicing, and accounting integration.',
      badge: 'Insights',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Wifi,
      title: 'Offline-First',
      description:
        'Works perfectly even with unreliable internet. Data syncs when online.',
      badge: 'Reliability',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Shield,
      title: 'Secure & Compliant',
      description:
        'Bank-level security with local data storage and compliance standards.',
      badge: 'Security',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: HeadphonesIcon,
      title: 'Local Support',
      description:
        'Nigerian-based support team available via phone, WhatsApp, and email.',
      badge: 'Support',
      color: 'from-cyan-500 to-cyan-600',
    },
  ];

  const stats = [
    { value: '500+', label: 'Hotels Served', icon: Building2 },
    { value: '99.9%', label: 'Guaranteed Uptime', icon: TrendingUp },
    { value: '50+', label: 'Cities Across Nigeria', icon: Globe },
    { value: '24/7', label: 'Premium Support', icon: HeadphonesIcon },
  ];

  const benefits = [
    {
      title: 'Reduce Operational Costs',
      description: 'Eliminate expensive legacy systems. Save ₦2-5M annually.',
      icon: TrendingUp,
    },
    {
      title: 'Increase Efficiency',
      description: 'Automate workflows. Reduce manual data entry by 80%.',
      icon: Zap,
    },
    {
      title: 'Better Decisions',
      description: 'Real-time analytics and reporting. Know your numbers instantly.',
      icon: BarChart3,
    },
    {
      title: 'Guest Satisfaction',
      description: 'Streamlined operations lead to better guest experiences.',
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section - Premium Design */}
      <section className={`relative py-32 ${gradientBg.secondary}`}>
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-80 h-80 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-80 h-80 bg-cyan-100 rounded-full opacity-30 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white rounded-full border border-blue-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-slate-700">
                ✨ Trusted by 500+ Nigerian Hotels
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Modern Hotel Management
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                Built for Nigeria
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              One integrated platform for PMS, POS, and Finance. Works offline. Accepts local payments.
              Costs less than legacy systems. By Polynovex Limited.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                onClick={() => onNavigate('contact')}
                className="shadow-xl hover:shadow-2xl"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => onNavigate('products')}
              >
                See Products
              </Button>
            </div>

            <p className="text-sm text-slate-500">
              <span className="font-semibold">HotelOpX</span> is a product by{' '}
              <span className="font-semibold text-slate-700">Polynovex Limited</span>
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section - Premium Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Everything You Need
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              One integrated platform. No fragmented systems. No expensive legacy software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`group ${cardVariants.elevated} p-8 hover:-translate-y-1 transition-all duration-300`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
                      {feature.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={`py-24 ${gradientBg.primary}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Hotels that switch to HotelOpX see immediate impact on their bottom line and operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className={`${cardVariants.elevated} p-8 flex items-start gap-6`}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                    <p className="text-slate-600">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-48 -mt-48 w-96 h-96 bg-blue-500 rounded-full opacity-10"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Nigerian Hotels Modernizing Their Operations
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Start with a 14-day free trial. No credit card required. Full access to all features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => onNavigate('contact')}
              className="bg-white text-blue-600 hover:bg-slate-100 shadow-xl"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => onNavigate('pricing')}
              className="border-white text-white hover:bg-white hover:bg-opacity-10"
            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
