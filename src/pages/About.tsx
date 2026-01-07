import { Target, Eye, Shield, Clock, Users, Award } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'Bank-level encryption and data protection. Your hotel data is always secure and compliant.',
    },
    {
      icon: Clock,
      title: 'Always Available',
      description: '99.9% uptime guarantee with offline-first architecture. Your operations never stop.',
    },
    {
      icon: Users,
      title: 'Local Support',
      description: 'Nigerian-based support team that understands your business and responds in minutes.',
    },
    {
      icon: Award,
      title: 'Quality Standards',
      description: 'Enterprise-grade features at prices that work for hotels of all sizes in Nigeria.',
    },
  ];

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Modernizing Hotel Operations Across Nigeria
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              HotelOpsX was built to solve a critical problem: Nigerian hotels are stuck using outdated,
              expensive, and disconnected systems that weren't designed for our market.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                To empower every Nigerian hotel - from small guesthouses to 5-star properties - with
                affordable, world-class technology that actually works in our environment.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We're replacing fragmented, expensive systems like Opera, Micros, and Sage with a single,
                integrated platform that costs less, works offline, and includes local payment integration.
              </p>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <Eye className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-slate-900">Our Vision</h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                To become the standard hotel management platform across Africa, known for reliability,
                affordability, and features that actually address African hospitality challenges.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We believe every hotel deserves access to enterprise-grade technology without the
                enterprise price tag or complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our core values guide every decision we make and every feature we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm"
                >
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
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Built for Nigeria, Ready for Africa
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We understand the unique challenges of running a hotel in Nigeria: unreliable power,
              inconsistent internet, local payment preferences, and the need for affordable pricing.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold text-white mb-2">2019</div>
                <div className="text-blue-100">Founded in Lagos</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-blue-100">Hotels Using HotelOpsX</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-blue-100">Cities Covered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Trust and Compliance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-blue-600 mb-2">ISO 27001</div>
              <div className="text-sm text-slate-600">Security Certified</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-sm text-slate-600">Guaranteed Uptime</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-sm text-slate-600">Nigerian Support</div>
            </div>
          </div>
          <p className="text-slate-600 mt-8">
            Your hotel data is stored securely on servers in Nigeria, ensuring compliance with local
            regulations and fast access times.
          </p>
        </div>
      </section>
    </div>
  );
}
