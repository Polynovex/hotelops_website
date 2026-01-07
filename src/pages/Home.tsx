import { ArrowRight, Building2, CreditCard, BarChart3, Wifi, Shield, HeadphonesIcon } from 'lucide-react';
import { Button } from '../components/Button';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const features = [
    {
      icon: Building2,
      title: 'Property Management',
      description: 'Complete PMS for reservations, housekeeping, front desk, and guest management.',
    },
    {
      icon: CreditCard,
      title: 'Point of Sale',
      description: 'Integrated POS for restaurant, bar, spa, and all revenue centers.',
    },
    {
      icon: BarChart3,
      title: 'Finance & Ledger',
      description: 'Real-time financial reports, invoicing, and accounting integration.',
    },
    {
      icon: Wifi,
      title: 'Offline-First',
      description: 'Works perfectly even with unreliable internet. Data syncs when online.',
    },
    {
      icon: Shield,
      title: 'Secure & Compliant',
      description: 'Bank-level security with local data storage and compliance standards.',
    },
    {
      icon: HeadphonesIcon,
      title: 'Local Support',
      description: 'Nigerian-based support team available via phone, WhatsApp, and email.',
    },
  ];

  const stats = [
    { value: '500+', label: 'Hotels Served' },
    { value: '99.9%', label: 'Uptime' },
    { value: '50+', label: 'Cities' },
    { value: '24/7', label: 'Support' },
  ];

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Trusted by Nigerian Hotels
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              One Platform for All Your
              <span className="text-blue-600"> Hotel Operations</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              Replace fragmented systems with HotelOpsX - the all-in-one PMS, POS, and Finance platform
              designed specifically for Nigerian hotels. Works offline, accepts local payments, and delivers
              enterprise features at affordable prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => onNavigate('contact')}
                className="shadow-lg"
              >
                Request a Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => onNavigate('pricing')}
              >
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Everything You Need in One System
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Stop juggling multiple tools. HotelOpsX brings together property management, point of sale,
              and finance in one integrated platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Modernize Your Hotel Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of Nigerian hotels that trust HotelOpsX for their daily operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => onNavigate('contact')}
              className="bg-white text-blue-600 hover:bg-slate-50"
            >
              Schedule a Demo
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => onNavigate('pricing')}
              className="border-white text-white hover:bg-blue-700"
            >
              See Pricing Plans
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
