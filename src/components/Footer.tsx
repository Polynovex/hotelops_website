import { Mail, Phone, MapPin } from "lucide-react";

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
                  className="hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("products")}
                  className="hover:text-white transition-colors"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("pricing")}
                  className="hover:text-white transition-colors"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("contact")}
                  className="hover:text-white transition-colors"
                >
                  Contact
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
                <span>Lagos, Nigeria</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                <a href="tel:+2348134393554" className="hover:text-white transition-colors">
                  +234 813 439 3554
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>hello@hotelops.ng</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {currentYear} HotelOpX. All rights reserved.</p>
          <p className="text-slate-400 mt-2">
            HotelOpX is a product of{" "}
            <span className="font-semibold text-slate-300">
              Polynovex Limited
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
