import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Temple Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-saffron to-maroon flex items-center justify-center">
                <span className="text-xl">🕉</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold">Sri Temple</h3>
                <p className="text-sm text-primary-foreground/70">Divine Blessings</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              A sacred place of worship and spiritual enlightenment, serving devotees with divine grace and traditional rituals for centuries.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-saffron transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-saffron transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-saffron transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "About Temple", path: "/about/temple" },
                { name: "Festivals", path: "/festivals" },
                { name: "Photo Gallery", path: "/gallery" },
                { name: "Online Donation", path: "/donate" },
                { name: "Function Hall", path: "/function-hall" },
                { name: "Blog", path: "/blog" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/80 hover:text-saffron transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Temple Timings */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Temple Timings</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-saffron flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Morning</p>
                  <p className="text-primary-foreground/70">5:30 AM - 12:30 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-saffron flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Evening</p>
                  <p className="text-primary-foreground/70">4:00 PM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-saffron flex-shrink-0 mt-0.5" />
                <p className="text-primary-foreground/80">
                  123 Temple Street, Sacred City,<br />
                  State - 123456, India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-saffron" />
                <a href="tel:+911234567890" className="text-primary-foreground/80 hover:text-saffron transition-colors">
                  +91 12345 67890
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-saffron" />
                <a href="mailto:info@sritemple.org" className="text-primary-foreground/80 hover:text-saffron transition-colors">
                  info@sritemple.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>© {new Date().getFullYear()} Sri Temple. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-saffron transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-saffron transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
