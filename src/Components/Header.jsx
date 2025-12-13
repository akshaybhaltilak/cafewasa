import React, { useState } from 'react';
import { Coffee, MapPin, Phone, Clock, Menu, X, Home, Info, Utensils, Gift, Image, Mail } from 'lucide-react';

const Header = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: Info },
    { id: 'menu', label: 'Menu', icon: Utensils },
    { id: 'rewards', label: 'Rewards', icon: Gift },
    { id: 'gallery', label: 'Gallery', icon: Image },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const contactInfo = [
    { icon: MapPin, text: 'Malkapur Road, Akola', href: '#contact' },
    { icon: Phone, text: '+91 7821856623', href: 'tel:+917821856623' },
    { icon: Clock, text: '10 AM - 11:30 PM', href: '#contact' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
      setActiveSection(sectionId);
    }
  };

  return (
    <>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
        <nav className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between p-2">
            {/* Logo */}
            <div className="flex items-center gap-3">
            <img src="/image.png" alt="" className='h-10' />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-amber-50 to-amber-100 text-amber-800 shadow-sm'
                      : 'text-gray-700 hover:text-amber-800 hover:bg-amber-50'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-amber-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="py-4 border-t border-gray-200">
              <div className="space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-left transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-amber-50 to-amber-100 text-amber-800'
                        : 'text-gray-700 hover:bg-amber-50'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;