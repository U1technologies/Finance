
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Facebook, Twitter, Instagram } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Credit Cards', path: '/credit-cards' },
    { 
      name: 'Loans', 
      path: '/loans',
      submenu: [
        { name: 'Personal Loans', path: '/loans/personal' },
        { name: 'Home Loans', path: '/loans/home' },
        { name: 'Business Loans', path: '/loans/business' }
      ]
    },
    { name: 'Buy Now Pay Later', path: '/bnpl' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-nav' : 'bg-transparent'}`}>
      <div className="container-wide py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className={`text-2xl font-bold transition-colors duration-300 ${scrolled ? 'text-navy' : 'text-white'}`}>
              Premium<span className="text-gold">Finance</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <>
                    <button 
                      className={`flex items-center nav-link ${scrolled ? 'text-slate-dark' : 'text-white'}`}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="py-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            to={subitem.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link 
                    to={item.path} 
                    className={`nav-link ${scrolled ? 'text-slate-dark' : 'text-white'}`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/apply" className="cta-primary">
              Apply Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-slate-dark"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`fixed inset-0 bg-navy z-40 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-20 pb-6 px-6 overflow-y-auto">
          <nav className="space-y-6 mb-8">
            {navItems.map((item) => (
              <div key={item.name} className="py-2">
                {item.submenu ? (
                  <div className="space-y-2">
                    <span className="text-gold font-medium text-lg">{item.name}</span>
                    <div className="pl-4 space-y-3 mt-2">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          to={subitem.path}
                          className="block text-white hover:text-teal transition-colors"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link 
                    to={item.path} 
                    className="text-white hover:text-teal text-lg font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          <div className="mt-auto">
            <Link 
              to="/apply" 
              className="block w-full text-center py-3 px-6 bg-teal text-white rounded-md font-medium"
            >
              Apply Now
            </Link>
            <div className="flex justify-center space-x-4 mt-8">
              <a href="#" className="text-slate-light hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-light hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-light hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
