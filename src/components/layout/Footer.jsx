import React from 'react';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-6">
              Pure<span className="text-primary-purple">Flow</span>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Medical-grade IV therapy delivered to your door. Recover faster, boost immunity, and optimize your health with our licensed nurses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary-purple transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary-purple transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary-purple transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-transform">Hangover Relief</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-transform">Immune Boost</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-transform">Beauty Glow</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-transform">NAD+ Therapy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-transform">Athletic Performance</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-transform">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-transform">Locations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-transform">Membership</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-transform">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-transform">Careers</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start text-gray-300">
                <Phone className="w-5 h-5 mr-3 mt-1 text-primary-purple" />
                <span>(800) 555-0123<br/><span className="text-sm text-gray-400">Mon-Sun: 8am - 8pm</span></span>
              </li>
              <li className="flex items-start text-gray-300">
                <Mail className="w-5 h-5 mr-3 mt-1 text-primary-purple" />
                <span>hello@pureflow.com</span>
              </li>
              <li className="flex items-start text-gray-300">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-primary-purple" />
                <span>Headquarters:<br/>123 Wellness Blvd,<br/>Los Angeles, CA 90210</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal / Medical Disclaimer */}
        <div className="border-t border-gray-700 pt-8 mt-8 text-sm text-gray-400">
          <p className="mb-4">
            *Drip Hydration provides mobile IV therapy administered by licensed healthcare professionals. These statements have not been evaluated by the FDA. Our treatments are not intended to diagnose, treat, cure, or prevent any disease. Consult your physician before booking if you have pre-existing medical conditions.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; 2026 PureFlow IV Therapy. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">HIPAA Notice</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
