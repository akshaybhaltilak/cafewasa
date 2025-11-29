import React, { useState, useEffect } from 'react';

const CafeVasa = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [imageError, setImageError] = useState({});

  const menuItems = [
    { 
      name: 'Specialty Coffee', 
      description: 'Handcrafted with love',
      image: 'https://res.cloudinary.com/dvtnm3d8k/image/upload/v1764398071/IMG_4579_p5mz3d.jpg'
    },
    { 
      name: 'Avocado Toast', 
      description: 'Sourdough with fresh avocado',
      image: 'https://res.cloudinary.com/dvtnm3d8k/image/upload/v1764398071/IMG_4578_m6jcrw.jpg'
    },
    { 
      name: 'Acai Bowl', 
      description: 'Fresh fruits and granola',
      image: 'https://res.cloudinary.com/dvtnm3d8k/image/upload/v1764398071/IMG_4570_fzwhmx.jpg'
    }
  ];

  const handleImageError = (imageName) => {
    setImageError(prev => ({ ...prev, [imageName]: true }));
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'menu', 'gallery', 'contact'];
      const scrollY = window.scrollY;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const openGoogleMaps = () => {
    window.open('https://maps.app.goo.gl/RjDQ5959buizxMdk7?g_st=ipc', '_blank');
  };

  return (
    <div className="min-h-screen bg-[#fefaf0] text-[#5a4b41] font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#fefaf0] bg-opacity-95 backdrop-blur-lg z-50 py-4 border-b border-[#e8dfd8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="logo">
              <h2 className="text-2xl font-semibold text-[#d4a574]">Cafe Vasa</h2>
            </div>
            
            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-8">
              {['Home', 'About', 'Menu', 'Gallery', 'Contact'].map((item) => (
                <li key={item} className="nav-item">
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className={`font-medium transition-colors duration-300 relative ${
                      activeSection === item.toLowerCase() 
                        ? 'text-[#d4a574]' 
                        : 'text-[#5a4b41] hover:text-[#d4a574]'
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.toLowerCase());
                    }}
                  >
                    {item}
                    {activeSection === item.toLowerCase() && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#d4a574]"></span>
                    )}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <div 
              className={`md:hidden flex flex-col space-y-1 cursor-pointer ${
                isMenuOpen ? 'active' : ''
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className={`w-6 h-0.5 bg-[#5a4b41] transition-transform duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}></span>
              <span className={`w-6 h-0.5 bg-[#5a4b41] transition-opacity duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`w-6 h-0.5 bg-[#5a4b41] transition-transform duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}></span>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <ul className="py-4 space-y-4">
              {['Home', 'About', 'Menu', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className={`block py-2 font-medium transition-colors duration-300 ${
                      activeSection === item.toLowerCase() 
                        ? 'text-[#d4a574]' 
                        : 'text-[#5a4b41] hover:text-[#d4a574]'
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.toLowerCase());
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          {!imageError.hero ? (
            <img 
              src="https://www.avikalp.com/cdn/shop/products/MWZ2981_wallpaper1.jpg?v=1746038540" 
              alt="Cafe Vasa Interior"
              className="w-full h-full object-cover"
              onError={() => handleImageError('hero')}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#fefaf0] to-[#f8f4e9] flex items-center justify-center text-4xl">
              ☕ Cafe Vasa
            </div>
          )}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 lg:pr-8 text-white">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-2xl">
                Cafe Vasa
              </h1>
              <p className="text-xl sm:text-2xl italic mb-8 drop-shadow-lg text-[#f8f4e9]">
                Where Bohemian Dreams & Coffee Beans Meet
              </p>
              <button 
                className="bg-gradient-to-r from-[#d4a574] to-[#b8860b] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl hover:shadow-[#d4a574]/30 border-2 border-white/20"
                onClick={() => scrollToSection('menu')}
              >
                Explore Our Menu
              </button>
            </div>
          
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[#f8f4e9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold text-[#d4a574] mb-6">Our Story</h2>
              <p className="text-lg text-[#5a4b41] leading-relaxed">
                Nestled in the heart of the city, Cafe Vasa is a bohemian paradise where 
                art, coffee, and community converge. Our space is designed to inspire 
                creativity and connection, with every corner telling a story.
              </p>
              <p className="text-lg text-[#5a4b41] leading-relaxed">
                We believe in serving not just food and coffee, but experiences that 
                linger in your memory long after you've left our doors.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg text-center transition-transform duration-300 hover:translate-y-[-5px]">
                  <span className="text-4xl mb-4 block">🌿</span>
                  <h4 className="text-[#d4a574] font-semibold mb-2">Organic Ingredients</h4>
                  <p className="text-sm text-[#8b7355]">Locally sourced, always fresh</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg text-center transition-transform duration-300 hover:translate-y-[-5px]">
                  <span className="text-4xl mb-4 block">🎨</span>
                  <h4 className="text-[#d4a574] font-semibold mb-2">Artistic Vibes</h4>
                  <p className="text-sm text-[#8b7355]">Inspiring creative space</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg text-center transition-transform duration-300 hover:translate-y-[-5px]">
                  <span className="text-4xl mb-4 block">❤️</span>
                  <h4 className="text-[#d4a574] font-semibold mb-2">Made with Love</h4>
                  <p className="text-sm text-[#8b7355]">Every dish tells a story</p>
                </div>
              </div>
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              {!imageError.about ? (
                <img 
                  src="https://res.cloudinary.com/dvtnm3d8k/image/upload/v1764398072/IMG_2340_du8ray.jpg" 
                  alt="About Cafe Vasa"
                  className="w-full h-96 object-cover transition-transform duration-300 hover:scale-105"
                  onError={() => handleImageError('about')}
                />
              ) : (
                <div className="w-full h-96 bg-gradient-to-r from-[#e8dfd8] to-[#d4c6b8] flex items-center justify-center text-[#8b7355] text-xl font-medium">
                  🎨 Our Creative Space
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-[#fefaf0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#d4a574] mb-4">Our Menu</h2>
            <p className="text-xl text-[#8b7355]">Carefully crafted with passion and precision</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {menuItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg border border-[#e8dfd8] transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl overflow-hidden group"
              >
                <div className="h-48 overflow-hidden">
                  {!imageError[`menu${index}`] ? (
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={() => handleImageError(`menu${index}`)}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-r from-[#e8dfd8] to-[#d4c6b8] flex items-center justify-center text-[#8b7355]">
                      🍽️ {item.name}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#5a4b41] mb-2">{item.name}</h3>
                  <p className="text-[#8b7355] italic">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
            <h3 className="text-2xl font-semibold text-[#5a4b41] mb-8">Also available on</h3>
            <div className="flex justify-center gap-6 flex-wrap">
              <a 
                href="https://www.zomato.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold bg-gradient-to-r from-[#e23744] to-[#cb202d] transition-all duration-300 hover:translate-y-[-3px] hover:shadow-lg"
              >
                <span>Zomato</span>
                <span className="text-xl">🍴</span>
              </a>
              <a 
                href="https://www.swiggy.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold bg-gradient-to-r from-[#fc8019] to-[#f60] transition-all duration-300 hover:translate-y-[-3px] hover:shadow-lg"
              >
                <span>Swiggy</span>
                <span className="text-xl">🚚</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-[#f8f4e9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#d4a574] mb-4">Our Space</h2>
            <p className="text-xl text-[#8b7355]">Experience the bohemian charm</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div 
                key={item} 
                className="rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 aspect-square"
              >
                {!imageError[`gallery${item}`] ? (
                  <img 
                    src={`https://res.cloudinary.com/dvtnm3d8k/image/upload/v1764398072/IMG_2340_du8ray.jpg`} 
                    alt={`Cafe Vasa Gallery ${item}`}
                    className="w-full h-full object-cover"
                    onError={() => handleImageError(`gallery${item}`)}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-r from-[#e8dfd8] to-[#d4c6b8] flex items-center justify-center text-[#8b7355] font-medium">
                    📸 Cafe View {item}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#fefaf0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#d4a574] mb-8">Visit Us</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-1">📍</span>
                  <div>
                    <h4 className="text-lg font-semibold text-[#5a4b41] mb-1">Address</h4>
                    <p className="text-[#8b7355]">
                      Before Gopal Supar Bazar, Malkapur Road<br />
                      Mayur Colony Beside Janta Bank<br />
                      Akola, Maharashtra 444001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-1">⏰</span>
                  <div>
                    <h4 className="text-lg font-semibold text-[#5a4b41] mb-1">Opening Hours</h4>
                    <p className="text-[#8b7355]">Monday - Sunday: 7:00 AM - 11:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-1">📞</span>
                  <div>
                    <h4 className="text-lg font-semibold text-[#5a4b41] mb-1">Phone</h4>
                    <p className="text-[#8b7355]">+91 98765 43210</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4 mt-8">
                <a href="#" className="w-12 h-12 bg-[#d4a574] text-white rounded-full flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 hover:bg-[#b8860b]">
                  📘
                </a>
                <a href="#" className="w-12 h-12 bg-[#d4a574] text-white rounded-full flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 hover:bg-[#b8860b]">
                  📷
                </a>
                <a href="#" className="w-12 h-12 bg-[#d4a574] text-white rounded-full flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 hover:bg-[#b8860b]">
                  🐦
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-4 bg-gray-100">
                <div 
                  className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden relative cursor-pointer group"
                  onClick={openGoogleMaps}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#d4a574]/20 to-[#b8860b]/20 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-4xl mb-2 block">🗺️</span>
                      <p className="text-[#5a4b41] font-semibold">Cafe Vasa Location</p>
                      <p className="text-[#8b7355] text-sm mt-1">Click to view in Google Maps</p>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white px-3 py-2 rounded-lg shadow-lg">
                    <p className="text-sm font-semibold text-[#5a4b41]">📍Before Gopal Supar Bazar, Malkapur Road, Mayur Colony Beside Janta Bank, Akoal</p>
                    <p className="text-xs text-[#8b7355]">Akola, Maharashtra</p>
                  </div>
                  <div className="absolute inset-0 bg-transparent group-hover:bg-[#d4a574]/10 transition-colors duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f8f4e9] border-t border-[#e8dfd8] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-2xl font-semibold text-[#d4a574] mb-2">Cafe Vasa</h3>
              <p className="text-[#8b7355]">Bohemian Coffee & Culinary Experiences</p>
            </div>
            <div className="flex gap-6 flex-wrap justify-center">
              {['Home', 'About', 'Menu', 'Gallery', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[#5a4b41] hover:text-[#d4a574] transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.toLowerCase());
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="text-center border-t border-[#e8dfd8] pt-8">
            <p className="text-[#8b7355]">
              &copy; 2024 Cafe Vasa. All rights reserved. | Made with ❤️ and ☕
            </p>
            <p className="text-sm text-[#8b7355] mt-2">
              Akola, Maharashtra | +91 98765 43210
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CafeVasa;