
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo & About */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-5">
              <h2 className="text-2xl font-bold text-white">Premium<span className="text-gold">Finance</span></h2>
            </Link>
            <p className="text-slate-light mb-6">
              We're on a mission to make financial products more accessible, 
              transparent, and rewarding for everyone.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-navy-light text-white hover:bg-teal transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-navy-light text-white hover:bg-teal transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-navy-light text-white hover:bg-teal transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-navy-light text-white hover:bg-teal transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/credit-cards" className="text-slate-light hover:text-white transition-colors">Credit Cards</Link></li>
              <li><Link to="/loans" className="text-slate-light hover:text-white transition-colors">Loans</Link></li>
              <li><Link to="/business-loans" className="text-slate-light hover:text-white transition-colors">Business Loans</Link></li>
              <li><Link to="/credit-score" className="text-slate-light hover:text-white transition-colors">Credit Score</Link></li>
              <li><Link to="/insurance" className="text-slate-light hover:text-white transition-colors">Insurance</Link></li>
            </ul>
          </div>

          {/* Credit Tools */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Credit Tools</h3>
            <ul className="space-y-3">
              <li><Link to="/credit-score/calculator" className="text-slate-light hover:text-white transition-colors">Credit Score Calculator</Link></li>
              <li><Link to="/credit-score/personalizer" className="text-slate-light hover:text-white transition-colors">Credit Score Personalizer</Link></li>
              <li><Link to="/faqs" className="text-slate-light hover:text-white transition-colors">FAQs</Link></li>
              <li><Link to="/terms" className="text-slate-light hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-slate-light hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/sitemap" className="text-slate-light hover:text-white transition-colors">Sitemap</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-teal mt-0.5" />
                <span className="text-slate-light">123 Finance Street, Business District, 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-teal" />
                <a href="tel:+1234567890" className="text-slate-light hover:text-white transition-colors">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-teal" />
                <a href="mailto:hello@premiumfinance.com" className="text-slate-light hover:text-white transition-colors">hello@premiumfinance.com</a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-navy-light my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-light text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} PremiumFinance. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-light hover:text-white text-sm transition-colors">
              Terms
            </a>
            <a href="#" className="text-slate-light hover:text-white text-sm transition-colors">
              Privacy
            </a>
            <a href="#" className="text-slate-light hover:text-white text-sm transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
