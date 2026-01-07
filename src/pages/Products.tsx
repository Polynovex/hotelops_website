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
} from 'lucide-react';
import { Button } from '../components/Button';

interface ProductsProps {
  onNavigate: (page: string) => void;
}

export function Products({ onNavigate }: ProductsProps) {
  const products = [
    {
      icon: Building2,
      name: 'HotelOpsX PMS',
      tagline: 'Complete Property Management System',
      description:
        'Manage every aspect of your hotel operations from a single, intuitive platform. From reservations to housekeeping, front desk to guest services.',
      features: [
        'Online & walk-in reservations',
        'Room assignment & housekeeping',
        'Front desk operations',
        'Guest profiles & history',
        'Channel manager integration',
        'Automated check-in/check-out',
        'Real-time room status',
        'Night audit automation',
      ],
      color: 'blue',
    },
    {
      icon: CreditCard,
      name: 'HotelOpsX POS',
      tagline: 'Point of Sale for All Revenue Centers',
      description:
        'Integrated POS system for restaurant, bar, spa, and all hotel revenue centers. Accept payments with Paystack and Flutterwave integration.',
      features: [
        'Restaurant & bar management',
        'Room service ordering',
        'Split bills & transfers',
        'Table management',
        'Kitchen display system',
        'Inventory tracking',
        'Local payment integration',
        'Receipt printing & email',
      ],
      color: 'green',
    },
    {
      icon: BarChart3,
      name: 'HotelOpsX Finance',
      tagline: 'Financial Management & Reporting',
      description:
        'Comprehensive financial tools with real-time reporting, invoicing, and accounting integration. Track every naira that flows through your hotel.',
      features: [
        'Real-time financial reports',
        'Automated invoicing',
        'Revenue management',
        'Expense tracking',
        'Bank reconciliation',
        'Tax compliance',
        'Multi-currency support',
        'Export to accounting software',
      ],
      color: 'orange',
    },
  ];

  const platformFeatures = [
    {
      icon: WifiOff,
      title: 'Offline-First',
      description: 'Keep working even when internet goes down. Data syncs automatically when back online.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'iOS and Android apps for staff to manage operations from anywhere in the property.',
    },
    {
      icon: Monitor,
      title: 'Desktop & Web',
      description: 'Full-featured desktop application for Windows and Mac, plus web access from any browser.',
    },
    {
      icon: Database,
      title: 'Local Data Storage',
      description: 'Your data stays in Nigeria with local servers for fast access and compliance.',
    },
  ];

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Three Products, One Integrated Platform
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Everything you need to run your hotel efficiently. Choose individual products or get the complete
            suite for maximum value.
          </p>
        </div>
      </section>

      {products.map((product, index) => {
        const Icon = product.icon;
        const isEven = index % 2 === 0;
        const bgColor = isEven ? 'bg-white' : 'bg-slate-50';
        const colorClasses = {
          blue: 'bg-blue-100 text-blue-600',
          green: 'bg-green-100 text-green-600',
          orange: 'bg-orange-100 text-orange-600',
        };

        return (
          <section key={index} className={`py-20 ${bgColor}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={isEven ? 'order-1' : 'order-1 lg:order-2'}>
                  <div
                    className={`w-16 h-16 ${colorClasses[product.color as keyof typeof colorClasses]} rounded-xl flex items-center justify-center mb-6`}
                  >
                    <Icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                    {product.name}
                  </h2>
                  <p className="text-xl text-blue-600 font-semibold mb-4">{product.tagline}</p>
                  <p className="text-lg text-slate-600 mb-8">{product.description}</p>
                  <Button onClick={() => onNavigate('contact')}>Request Demo</Button>
                </div>

                <div className={isEven ? 'order-2' : 'order-2 lg:order-1'}>
                  <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200">
                    <h3 className="text-xl font-semibold text-slate-900 mb-6">Key Features</h3>
                    <ul className="space-y-4">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Built for the Nigerian Market
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Every feature is designed with Nigerian hotels in mind, addressing real challenges you face daily.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platformFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-blue-100">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Integrated Payment Solutions
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Accept payments with confidence using Nigeria's leading payment processors.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Paystack Integration</h3>
              <p className="text-slate-600">
                Accept cards, bank transfers, and mobile money with Nigeria's most trusted payment platform.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Flutterwave Integration</h3>
              <p className="text-slate-600">
                Process payments across multiple channels with instant settlement to your bank account.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Ready to See HotelOpsX in Action?
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Schedule a personalized demo and see how our platform can transform your hotel operations.
          </p>
          <Button size="lg" onClick={() => onNavigate('contact')}>
            Request a Demo
          </Button>
        </div>
      </section>
    </div>
  );
}
