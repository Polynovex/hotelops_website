import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, MessageSquare, CheckCircle } from 'lucide-react';
import { Button } from '../components/Button';
import { apiService } from '../services/api';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    hotelSize: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await apiService.submitDemoRequest({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        companyName: formData.companyName,
        hotelSize: formData.hotelSize,
        message: formData.message,
      });

      if (!response.success) {
        throw new Error(response.error || 'Failed to submit demo request');
      }

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        companyName: '',
        hotelSize: '',
        message: '',
      });
    } catch (err) {
      setError('Something went wrong. Please try again or contact us via WhatsApp.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+234 800 000 0000',
      link: 'tel:+2348000000000',
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      value: '+234 800 000 0000',
      link: 'https://wa.me/2348000000000',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@hotelops.ng',
      link: 'mailto:hello@hotelops.ng',
    },
    {
      icon: MapPin,
      title: 'Office',
      value: 'Lagos, Nigeria',
      link: '#',
    },
  ];

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Request a Demo
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            See HotelOps in action. Schedule a personalized demo and learn how we can transform your
            hotel operations.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Get in Touch</h2>
              <p className="text-lg text-slate-600 mb-8">
                Fill out the form and our team will contact you within 24 hours to schedule your demo.
                You can also reach us directly via phone or WhatsApp.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-start p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                    >
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 mb-1">{info.title}</div>
                        <div className="text-slate-600">{info.value}</div>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-900 mb-2">Quick Response Guarantee</h3>
                <p className="text-green-800 text-sm">
                  We respond to all demo requests within 24 hours during business days. For urgent inquiries,
                  WhatsApp us for immediate assistance.
                </p>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Request a Demo</h3>

                {success && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-green-900 mb-1">Demo Request Submitted!</div>
                      <div className="text-sm text-green-800">
                        Thank you for your interest. We'll contact you within 24 hours.
                      </div>
                    </div>
                  </div>
                )}

                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="+234 800 000 0000"
                    />
                  </div>

                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-slate-700 mb-2">
                      Hotel/Company Name *
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Your Hotel Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="hotelSize" className="block text-sm font-medium text-slate-700 mb-2">
                      Hotel Size
                    </label>
                    <select
                      id="hotelSize"
                      value={formData.hotelSize}
                      onChange={(e) => setFormData({ ...formData, hotelSize: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <option value="">Select hotel size</option>
                      <option value="small">Small (10-30 rooms)</option>
                      <option value="medium">Medium (30-100 rooms)</option>
                      <option value="enterprise">Enterprise (100+ rooms / 5-star)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={loading}
                  >
                    {loading ? 'Submitting...' : 'Request Demo'}
                  </Button>

                  <p className="text-sm text-slate-600 text-center">
                    By submitting this form, you agree to be contacted by our team.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">What Happens Next?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">We Contact You</h3>
              <p className="text-slate-600 text-sm">
                Our team reaches out within 24 hours to understand your needs and schedule a convenient time.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Personalized Demo</h3>
              <p className="text-slate-600 text-sm">
                We show you HotelOps features relevant to your hotel size and requirements.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Start Your Trial</h3>
              <p className="text-slate-600 text-sm">
                Get a 14-day free trial with full features and support to test HotelOps at your property.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
