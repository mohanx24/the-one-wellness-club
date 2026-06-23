import { MapPin, Phone, Clock, Instagram, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router';
import Logo from '../components/Logo';
import { NAV_LINKS } from '../lib/constants';

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#0A0A0A] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Logo & Social */}
          <div>
            <Link
              to="/"
              className="inline-block mb-6 hover:opacity-90 transition-opacity"
            >
              <Logo />
            </Link>
            <p className="font-body text-sm text-[#666666] mb-4">Follow Us</p>
            <div className="flex items-center gap-3">
              {[
                { icon: Instagram, label: 'Instagram' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Youtube, label: 'YouTube' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-[#333333] flex items-center justify-center text-white hover:border-[#E53935] hover:text-[#E53935] transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div>
            <p className="font-body text-sm font-medium uppercase tracking-wider text-[#666666] mb-5">
              Pages
            </p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="font-body text-sm text-white hover:text-[#E53935] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Work Hours */}
          <div>
            <p className="font-body text-sm font-medium uppercase tracking-wider text-[#666666] mb-5">
              Work Hours
            </p>
            <ul className="space-y-3">
              <li className="font-body text-sm text-white">
                Mon — Sat{' '}
                <span className="text-[#B0B0B0]">06:00 — 21:00</span>
              </li>
              <li className="font-body text-sm text-white">
                Sunday{' '}
                <span className="text-[#B0B0B0]">06:00 — 14:00</span>
              </li>
            </ul>
            <p className="font-body text-sm text-[#666666] mt-3">
              Closed on major national holidays.
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body text-sm font-medium uppercase tracking-wider text-[#666666] mb-5">
              Contact
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#E53935] mt-1 shrink-0" />
                <span className="font-body text-sm text-white">
                  Plot No339, Rd Number 10C, Venkatagiri, Jubilee Hills,
                  Hyderabad, Telangana 500033
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#E53935] shrink-0" />
                <a
                  href="tel:+919868611111"
                  className="font-body text-sm text-white hover:text-[#E53935] transition-colors"
                >
                  +91 98686 11111
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#E53935] shrink-0" />
                <span className="font-body text-sm text-white">
                  Open from 6:00 AM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#222222] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-[#666666]">
            © 2025 THE ONE Fitness Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <button className="font-body text-xs text-[#666666] hover:text-white transition-colors">
              Privacy Policy
            </button>
            <span className="text-[#333333]">·</span>
            <button className="font-body text-xs text-[#666666] hover:text-white transition-colors">
              Terms of Use
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
