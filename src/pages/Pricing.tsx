import { Check, X, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';

interface PricingProps {
  onNavigate: (page: string) => void;
}

export function Pricing({ onNavigate }: PricingProps) {
  const plans = [
    {
      name: 'Small Hotel',
      subtitle: '10-30 Rooms',
      price: '75,000',
      period: 'per month',
      description: 'Perfect for guesthouses, small hotels, and budget properties',
      features: [
        { name: 'Up to 30 rooms', included: true },
        { name: 'HotelOps PMS', included: true },
        { name: 'HotelOps POS (1 terminal)', included: true },
        { name: 'Basic Finance & Reporting', included: true },
        { name: 'Offline mode', included: true },
        { name: 'Paystack/Flutterwave', included: true },
        { name: 'Mobile app access', included: true },
        { name: 'Email support', included: true },
        { name: 'WhatsApp support (business hours)', included: true },
        { name: 'Multi-property management', included: false },
        { name: 'Advanced analytics', included: false },
        { name: 'API access', included: false },
        { name: 'Dedicated account manager', included: false },
      ],
      popular: false,
      color: 'blue',
    },
    {
      name: 'Medium Hotel',
      subtitle: '30-100 Rooms',
      price: '175,000',
      period: 'per month',
      description: 'Ideal for mid-sized hotels with multiple revenue centers',
      features: [
        { name: 'Up to 100 rooms', included: true },
        { name: 'HotelOps PMS', included: true },
        { name: 'HotelOps POS (5 terminals)', included: true },
        { name: 'Advanced Finance & Reporting', included: true },
        { name: 'Offline mode', included: true },
        { name: 'Paystack/Flutterwave', included: true },
        { name: 'Mobile app access', included: true },
        { name: 'Priority email & phone support', included: true },
        { name: 'WhatsApp support (24/7)', included: true },
        { name: 'Multi-property (up to 3)', included: true },
        { name: 'Advanced analytics & insights', included: true },
        { name: 'Basic API access', included: true },
        { name: 'Quarterly business reviews', included: true },
      ],
      popular: true,
      color: 'green',
    },
    {
      name: 'Enterprise',
      subtitle: '100+ Rooms / 5-Star',
      price: 'Custom',
      period: 'contact us',
      description: 'Full-featured solution for large hotels and hotel chains',
      features: [
        { name: 'Unlimited rooms', included: true },
        { name: 'HotelOps PMS', included: true },
        { name: 'HotelOps POS (unlimited)', included: true },
        { name: 'Full Finance Suite', included: true },
        { name: 'Offline mode', included: true },
        { name: 'Paystack/Flutterwave', included: true },
        { name: 'Mobile app access', included: true },
        { name: 'Priority 24/7 support', included: true },
        { name: 'WhatsApp support (24/7)', included: true },
        { name: 'Unlimited properties', included: true },
        { name: 'Advanced analytics & insights', included: true },
        { name: 'Full API access', included: true },
        { name: 'Dedicated account manager', included: true },
      ],
      popular: false,
      color: 'orange',
    },
  ];

  const allFeatures = [
    'Offline-first capability',
    'Local payment integration',
    'Real-time synchronization',
    'Cloud backup & security',
    'Regular software updates',
    'Staff training included',
    'Data migration assistance',
    'Nigerian Naira billing',
  ];

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Choose the plan that fits your hotel size. All plans include PMS, POS, and Finance modules.
            No hidden fees, no surprises.
          </p>
          <div className="inline-block bg-green-100 text-green-700 px-6 py-3 rounded-full font-medium">
            Save 20% with annual billing
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg border-2 transition-transform hover:scale-105 ${
                  plan.popular ? 'border-green-500' : 'border-slate-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{plan.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{plan.subtitle}</p>
                  <p className="text-slate-600 text-sm mb-6">{plan.description}</p>

                  <div className="mb-6">
                    {plan.price === 'Custom' ? (
                      <>
                        <div className="text-4xl font-bold text-slate-900 mb-2">Custom Pricing</div>
                        <p className="text-slate-600 text-sm">{plan.period}</p>
                      </>
                    ) : (
                      <>
                        <div className="flex items-baseline mb-2">
                          <span className="text-2xl font-medium text-slate-600">₦</span>
                          <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                        </div>
                        <p className="text-slate-600 text-sm">{plan.period}</p>
                      </>
                    )}
                  </div>

                  <Button
                    variant={plan.popular ? 'primary' : 'outline'}
                    className="w-full mb-8"
                    onClick={() => onNavigate('contact')}
                  >
                    {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>

                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-5 h-5 text-slate-300 mr-3 flex-shrink-0 mt-0.5" />
                        )}
                        <span
                          className={`text-sm ${feature.included ? 'text-slate-700' : 'text-slate-400'}`}
                        >
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Every Plan Includes
            </h2>
            <p className="text-lg text-slate-600">
              No matter which plan you choose, you get these features standard
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {allFeatures.map((feature, index) => (
              <div key={index} className="flex items-center bg-white p-4 rounded-lg">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Is there a setup fee?
              </h3>
              <p className="text-slate-600">
                No setup fees. We include free onboarding, data migration, and staff training with all plans.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Can I upgrade or downgrade my plan?
              </h3>
              <p className="text-slate-600">
                Yes, you can change your plan at any time. We'll prorate the difference and adjust your next billing cycle.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Do you offer a free trial?
              </h3>
              <p className="text-slate-600">
                Yes, we offer a 14-day free trial with full access to all features. No credit card required.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-slate-600">
                We accept bank transfer, card payments via Paystack, and can set up direct debit for annual subscriptions.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Is my data secure?
              </h3>
              <p className="text-slate-600">
                Absolutely. We use bank-level encryption, store data on secure Nigerian servers, and maintain regular backups. We're ISO 27001 certified.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule a demo to see HotelOps in action and find the perfect plan for your hotel.
          </p>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => onNavigate('contact')}
            className="bg-white text-blue-600 hover:bg-slate-50"
          >
            Request a Demo
          </Button>
        </div>
      </section>
    </div>
  );
}
