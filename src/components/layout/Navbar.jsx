import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Button from '../ui/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (location.pathname !== '/') {
        navigate('/', { state: { scrollTo: href.substring(1) } });
      } else if (element) {
         element.scrollIntoView({ behavior: 'smooth' });
      } else {
         navigate('/');
         // Need a small timeout to allow navigation before scrolling if element isn't found immediately (unlikely in this logic but good safety)
         setTimeout(() => {
             document.getElementById(href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
         }, 100);
      }
    } else {
        navigate(href);
    }
  };

  const navLinks = [
    { name: 'Treatments', href: '#treatments' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Locations', href: '#locations' },
    { name: 'Membership', href: '#membership' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-heading font-bold text-primary-dark tracking-tight">
              Pure<span className="text-gradient-purple">Flow</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-primary-dark hover:text-primary-purple font-medium transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-4 ml-4">
              <a href="tel:+18005550123" className="flex items-center text-primary-dark font-medium">
                <Phone className="w-4 h-4 mr-2" />
                (800) 555-0123
              </a>
              <Link to="/book">
                <Button variant="primary" className="px-6 py-2 text-sm">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary-dark hover:text-primary-purple focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg h-screen">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-3 py-3 text-base font-medium text-primary-dark hover:text-primary-purple hover:bg-secondary-gray rounded-md"
              >
                {link.name}
              </a>
            ))}
             <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
              <a href="tel:+18005550123" className="flex items-center justify-center text-primary-dark font-medium py-2">
                <Phone className="w-4 h-4 mr-2" />
                (800) 555-0123
              </a>
              <Link to="/book" onClick={() => setIsOpen(false)}>
                 <Button variant="primary" className="w-full justify-center">
                   Book Appointment
                 </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
