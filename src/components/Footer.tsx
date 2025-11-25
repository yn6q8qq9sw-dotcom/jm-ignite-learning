import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-deep text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-display font-bold text-xl">
                JM
              </div>
              <div>
                <h3 className="font-display font-bold text-lg">JM International School</h3>
                <p className="text-xs text-primary-foreground/70">Excellence in Education</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Creating a revolution in the field of education with progressive learning and holistic development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-primary-foreground/80 hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="#academics" className="text-primary-foreground/80 hover:text-secondary transition-colors">Academics</a></li>
              <li><a href="#facilities" className="text-primary-foreground/80 hover:text-secondary transition-colors">Facilities</a></li>
              <li><a href="#campuses" className="text-primary-foreground/80 hover:text-secondary transition-colors">Our Campuses</a></li>
            </ul>
          </div>

          {/* Campuses */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Campuses</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-secondary mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">Greater Noida West, Uttar Pradesh</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-secondary mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">Dwarka, New Delhi</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-secondary" />
                <span className="text-primary-foreground/80">+91 120 XXX XXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-secondary" />
                <span className="text-primary-foreground/80">info@jmschool.com</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© {currentYear} JM International School. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
