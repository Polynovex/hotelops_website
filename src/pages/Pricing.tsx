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
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 -right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-green-500/20 border border-green-400/50 text-green-200 rounded-full text-sm font-medium backdrop-blur-sm animate-fade-in">
            💰 Save 20% with annual billing
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in animation-delay-200">
            Simple, Transparent
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
              Pricing for Every Hotel
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto animate-fade-in animation-delay-300">
            Choose the plan that fits your hotel size. All plans include PMS, POS, and Finance modules.
            No hidden fees, no surprises.
          </p>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => {
              const gradients = {
                blue: 'from-blue-500 to-blue-600',
                green: 'from-emerald-500 to-emerald-600',
                orange: 'from-orange-500 to-orange-600',
              };
              
              return (
                <div
                  key={index}
                  className={`relative bg-white rounded-3xl shadow-xl border-2 transition-all duration-300 hover:-translate-y-2 animate-fade-in ${
                    plan.popular ? 'border-emerald-500 shadow-emerald-200' : 'border-slate-200'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {plan.popular && (
                    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10">
                      <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                        ⭐ Most Popular
                      </span>
                    </div>
                  )}

                  <div className="p-8">
                    {/* Plan Header */}
                    <div className={`w-14 h-14 bg-gradient-to-br ${gradients[plan.color as keyof typeof gradients]} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                      <span className="text-white text-2xl font-bold">{plan.name[0]}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-1">{plan.name}</h3>
                    <p className={`font-semibold mb-4 bg-gradient-to-r ${gradients[plan.color as keyof typeof gradients]} bg-clip-text text-transparent`}>{plan.subtitle}</p>
                    <p className="text-slate-600 text-sm mb-6 leading-relaxed">{plan.description}</p>

                    {/* Pricing */}
                    <div className="mb-8 p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl">
                      {plan.price === 'Custom' ? (
                        <>
                          <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">Custom Pricing</div>
                          <p className="text-slate-600 text-sm">{plan.period}</p>
                        </>
                      ) : (
                        <>
                          <div className="flex items-baseline mb-2">
                            <span className="text-2xl font-medium text-slate-600">₦</span>
                            <span className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">{plan.price}</span>
                          </div>
                          <p className="text-slate-600 text-sm">{plan.period}</p>
                        </>
                      )}
                    </div>

                    {/* CTA Button */}
                    <Button
                      variant={plan.popular ? 'primary' : 'outline'}
                      className={`w-full mb-8 transform hover:scale-105 transition-all duration-300 ${
                        plan.popular ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-lg' : ''
                      }`}
                      onClick={() => onNavigate('contact')}
                    >
                      {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>

                    {/* Features List */}
                    <div className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start group/feature">
                          {feature.included ? (
                            <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 group-hover/feature:bg-green-200 transition-colors duration-200">
                              <Check className="w-3 h-3 text-green-600" />
                            </div>
                          ) : (
                            <div className="flex-shrink-0 w-5 h-5 bg-slate-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                              <X className="w-3 h-3 text-slate-400" />
                            </div>
                          )}
                          <span
                            className={`text-sm ${
                              feature.included ? 'text-slate-700 font-medium' : 'text-slate-400'
                            } group-hover/feature:text-slate-900 transition-colors duration-200`}
                          >
                            {feature.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Every Plan Includes Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Every Plan Includes
            </h2>
            <p className="text-lg text-slate-600">
              No matter which plan you choose, you get these features standard
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {allFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="group flex items-center bg-gradient-to-br from-white to-slate-50 p-5 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-green-200 group-hover:scale-110 transition-all duration-300">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <span className="text-slate-700 font-medium group-hover:text-slate-900 transition-colors duration-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 text-center animate-fade-in">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="group bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 animate-fade-in">
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                Is there a setup fee?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                No setup fees. We include free onboarding, data migration, and staff training with all plans.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 animate-fade-in animation-delay-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                Can I upgrade or downgrade my plan?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Yes, you can change your plan at any time. We'll prorate the difference and adjust your next billing cycle.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 animate-fade-in animation-delay-300">
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                Do you offer a free trial?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Yes, we offer a 14-day free trial with full access to all features. No credit card required.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 animate-fade-in animation-delay-400">
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                What payment methods do you accept?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                We accept bank transfer, card payments via Paystack, and can set up direct debit for annual subscriptions.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 animate-fade-in animation-delay-500">
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                Is my data secure?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Absolutely. We use bank-level encryption, store data on secure Nigerian servers, and maintain regular backups. We're ISO 27001 certified.
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
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-10 animate-fade-in animation-delay-200">
            Schedule a demo to see HotelOps in action and find the perfect plan for your hotel.
          </p>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => onNavigate('contact')}
            className="border-2 border-blue-400 text-blue-100 hover:bg-blue-400/10 backdrop-blur-sm"
          >
            Request a Demo
          </Button>
        </div>
      </section>
    </div>
  );
}
