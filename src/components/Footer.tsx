import { FileCheck, Headphones, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex mb-4">
             <div className="flex justify-left mr-3" >
             <img src="/logo1.png" alt="" width="50%" height="50%" />
            </div>
            </div>
            <p className="text-sm">
              Modern hotel management technology built for Nigerian hospitality
              businesses.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate("about")}
                  className="block py-1.5 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("products")}
                  className="block py-1.5 hover:text-white transition-colors"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("pricing")}
                  className="block py-1.5 hover:text-white transition-colors"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("contact")}
                  className="block py-1.5 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                {/*
                  Reached from the footer rather than the main navigation.
                  These guides are for someone researching a problem in search,
                  not for someone already weighing a purchase — putting them in
                  the top nav would add a step to the buying path without
                  adding any persuasion to it.
                */}
                <button
                  onClick={() => onNavigate("resources")}
                  className="block py-1.5 hover:text-white transition-colors"
                >
                  Resources
                </button>
              </li>
              <li>
                {/*
                  The privacy policy existed as a page but nothing linked to it,
                  so it was unreachable. The site collects personal data through
                  the contact form, and the NDPA requires the policy — and the
                  data-protection contact it names — to be findable.
                */}
                <button
                  onClick={() => onNavigate("privacy")}
                  className="block py-1.5 hover:text-white transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                {/*
                  A business selling a subscription has to publish its terms
                  somewhere findable. This is also where the company's
                  registration details live, for anyone who wants to check that
                  Polynovex Limited is a real registered entity before paying
                  it money.
                */}
                <button
                  onClick={() => onNavigate("terms")}
                  className="block py-1.5 hover:text-white transition-colors"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>HotelOpX PMS</li>
              <li>HotelOpX POS</li>
              <li>HotelOpX Finance</li>
              <li>Mobile Apps</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>20 Samera St, Ketu, Lagos 105102, Nigeria</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                <a href="tel:+2348134393554" className="block py-1.5 hover:text-white transition-colors">
                  +234 813 439 3554
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>info@hotelopx.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {currentYear} HotelOpX. All rights reserved.</p>
          <p className="text-slate-400 mt-2">
            HotelOpX is a product of{" "}
            <a
              href="https://polynovexlimited.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-slate-300 hover:text-white transition-colors underline decoration-slate-600 underline-offset-2"
            >
              Polynovex Limited
            </a>
          </p>
          <p className="text-slate-500 mt-1 text-xs">
            Polynovex Limited • Company Registration No. 8231712 •{" "}
            20 Samera St, Ketu, Lagos 105102, Nigeria
          </p>
        </div>

        {/*
          Trust markers at the point of exit.
          Someone who has read to the bottom of the footer is deciding whether
          to enquire, and these are the three things that most often stop them:
          is our data safe, is anyone actually reachable, and is this legal
          here.
        */}
        <div className="mt-8 pt-8 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <ShieldCheck
              className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <p className="text-sm text-slate-400 leading-relaxed">
              <span className="block font-semibold text-slate-200 mb-0.5">
                Security
              </span>
              Your data is secure with encryption and automatic backups.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Headphones
              className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <p className="text-sm text-slate-400 leading-relaxed">
              <span className="block font-semibold text-slate-200 mb-0.5">
                Support
              </span>
              Nigerian support on WhatsApp, phone and email.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <FileCheck
              className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <p className="text-sm text-slate-400 leading-relaxed">
              <span className="block font-semibold text-slate-200 mb-0.5">
                Compliance
              </span>
              Built to NDPR requirements — your guests' data is protected.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
