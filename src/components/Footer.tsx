import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#111111] text-white py-16 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="heading-display text-2xl mb-4">The Good Spa</h3>
            <p className="text-white/70 text-sm mb-6">
              Your sanctuary of wellness and beauty
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D4A24F] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D4A24F] transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-micro mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <Link to="/services" className="hover:text-[#D4A24F] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-[#D4A24F] transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#D4A24F] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/membership" className="hover:text-[#D4A24F] transition-colors">
                  Membership
                </Link>
              </li>
              <li>
                <Link to="/gift-cards" className="hover:text-[#D4A24F] transition-colors">
                  Gift Cards
                </Link>
              </li>
              <li>
                <Link to="/corporate" className="hover:text-[#D4A24F] transition-colors">
                  Corporate & Events
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-micro mb-6">Resources</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <Link to="/blog" className="hover:text-[#D4A24F] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-[#D4A24F] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#D4A24F] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-[#D4A24F] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-[#D4A24F] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/accessibility" className="hover:text-[#D4A24F] transition-colors">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-micro mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>123 Wellness Boulevard<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="flex-shrink-0" />
                <a href="tel:+15551234567" className="hover:text-[#D4A24F] transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="flex-shrink-0" />
                <a
                  href="mailto:hello@thegoodspa.com"
                  className="hover:text-[#D4A24F] transition-colors"
                >
                  hello@thegoodspa.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/50">
          <p>© 2024 The Good Spa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
