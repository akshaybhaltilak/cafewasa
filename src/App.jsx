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

  const loyaltyBenefits = [
    { coins: 10, reward: "10% off on your next order" },
    { coins: 25, reward: "Free coffee of your choice" },
    { coins: 50, reward: "Complimentary breakfast combo" },
    { coins: 100, reward: "VIP membership with exclusive benefits" }
  ];

  const handleImageError = (imageName) => {
    setImageError(prev => ({ ...prev, [imageName]: true }));
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'menu', 'loyalty', 'gallery', 'contact'];
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
              {['Home', 'About', 'Menu', 'Loyalty', 'Gallery', 'Contact'].map((item) => (
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
              {['Home', 'About', 'Menu', 'Loyalty', 'Gallery', 'Contact'].map((item) => (
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
              src="https://res.cloudinary.com/dvtnm3d8k/image/upload/v1764423707/WhatsApp_Image_2025-11-29_at_19.04.30_1_wuv9hz.jpg"
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
                  src="https://res.cloudinary.com/dvtnm3d8k/image/upload/v1764398071/IMG_2344_ijspo6.jpg" 
                  alt="About Cafe Vasa"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
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
                href="https://www.swiggy.com/menu/1129715?source=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold bg-gradient-to-r from-[#e23744] to-[#cb202d] transition-all duration-300 hover:translate-y-[-3px] hover:shadow-lg"
              >
                <span>Zomato</span>
                <span className="text-xl">🍴</span>
              </a>
              <a 
                href="https://link.zomato.com/xqzv/rshare?id=109603072305632a9" 
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

      {/* Loyalty Program Section */}
  <section id="loyalty" className="py-24 bg-gradient-to-br from-[#f8f4e9] to-[#e8dfd8]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl sm:text-5xl font-bold text-[#d4a574] mb-4">Vasa Rewards</h2>
      <p className="text-xl text-[#8b7355] max-w-2xl mx-auto">Earn coins with every purchase & unlock exclusive benefits that make every visit more rewarding</p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      {/* Left Side - Program Details */}
      <div className="space-y-8">
        {/* Main Program Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-[#d4a574]/30 transform hover:scale-[1.02] transition-all duration-300">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-[#d4a574] to-[#b8860b] rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-lg">
              10
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#5a4b41] mb-2">Vasa Coins</h3>
              <p className="text-[#8b7355] text-lg">Earned on every purchase</p>
            </div>
          </div>
          
          <p className="text-lg text-[#5a4b41] mb-8 leading-relaxed">
            Join our exclusive loyalty program and collect <span className="font-bold text-[#d4a574]">10 Vasa Coins</span> with every order. 
            Watch your rewards grow and unlock amazing treats with every visit!
          </p>
          
          {/* How it Works */}
          <div className="bg-gradient-to-br from-[#f8f4e9] to-[#e8dfd8] rounded-2xl p-6 border border-[#d4a574]/20">
            <h4 className="text-xl font-bold text-[#5a4b41] mb-6 text-center">How it works</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 bg-white/50 rounded-xl">
                <div className="w-8 h-8 bg-[#d4a574] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  1
                </div>
                <span className="text-[#5a4b41] font-medium">Scan the QR code to join instantly</span>
              </div>
              <div className="flex items-center gap-4 p-3 bg-white/50 rounded-xl">
                <div className="w-8 h-8 bg-[#d4a574] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  2
                </div>
                <span className="text-[#5a4b41] font-medium">Earn 10 coins automatically on every purchase</span>
              </div>
              <div className="flex items-center gap-4 p-3 bg-white/50 rounded-xl">
                <div className="w-8 h-8 bg-[#d4a574] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  3
                </div>
                <span className="text-[#5a4b41] font-medium">Redeem coins for exclusive rewards & discounts</span>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Showcase */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-5 text-center shadow-lg border border-[#e8dfd8] transform hover:scale-105 transition-transform duration-300">
            <div className="text-2xl mb-2">🎯</div>
            <div className="text-sm text-[#5a4b41] font-semibold">Instant Join</div>
            <div className="text-xs text-[#8b7355] mt-1">No forms needed</div>
          </div>
          <div className="bg-white rounded-2xl p-5 text-center shadow-lg border border-[#e8dfd8] transform hover:scale-105 transition-transform duration-300">
            <div className="text-2xl mb-2">⚡</div>
            <div className="text-sm text-[#5a4b41] font-semibold">Fast Rewards</div>
            <div className="text-xs text-[#8b7355] mt-1">Earn immediately</div>
          </div>
          <div className="bg-white rounded-2xl p-5 text-center shadow-lg border border-[#e8dfd8] transform hover:scale-105 transition-transform duration-300">
            <div className="text-2xl mb-2">🎁</div>
            <div className="text-sm text-[#5a4b41] font-semibold">Exclusive Deals</div>
            <div className="text-xs text-[#8b7355] mt-1">Members only</div>
          </div>
          <div className="bg-white rounded-2xl p-5 text-center shadow-lg border border-[#e8dfd8] transform hover:scale-105 transition-transform duration-300">
            <div className="text-2xl mb-2">∞</div>
            <div className="text-sm text-[#5a4b41] font-semibold">No Expiry</div>
            <div className="text-xs text-[#8b7355] mt-1">Lifetime benefits</div>
          </div>
        </div>
      </div>

      {/* Right Side - QR Code & Visual */}
      <div className="space-y-8">
        {/* QR Code Section */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-[#d4a574]/30 transform hover:scale-[1.02] transition-all duration-300">
          <div className="p-8 text-center bg-gradient-to-r from-[#f8f4e9] to-[#e8dfd8]">
            <h3 className="text-3xl font-bold text-[#5a4b41] mb-3">Scan to Join</h3>
            <p className="text-[#8b7355] text-lg">Start your rewarding journey in seconds!</p>
          </div>
          <div className="p-8">
            {!imageError.loyaltyQR ? (
              <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#f8f4e9] to-[#e8dfd8] p-4">
                <img 
                  src="https://res.cloudinary.com/dvtnm3d8k/image/upload/v1764423643/Promote_Loyalty_Program_qr_social_post_wyqj2q.png" 
                  alt="Vasa Loyalty Program QR Code"
                  className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-300"
                  onError={() => handleImageError('loyaltyQR')}
                />
              </div>
            ) : (
              <div className="w-full h-96 bg-gradient-to-br from-[#e8dfd8] to-[#d4c6b8] rounded-2xl flex flex-col items-center justify-center text-[#8b7355] p-8">
                <span className="text-8xl mb-6">📱</span>
                <p className="text-2xl font-medium mb-2">Scan to Join</p>
                <p className="text-lg">Loyalty Program</p>
              </div>
            )}
          </div>
          <div className="bg-gradient-to-r from-[#d4a574] to-[#b8860b] px-8 py-4 text-center">
            <p className="text-white font-semibold text-lg">Available for both dine-in and takeaway</p>
          </div>
        </div>

        {/* Vasa Coins Visual */}
        <div className="bg-gradient-to-br from-[#d4a574] to-[#b8860b] rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
          <div className="p-8 text-white">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Portrait Image Container */}
              <div className="flex-shrink-0">
                {!imageError.vasaCoins ? (
                  <div className="relative w-40 h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/40 transform hover:scale-110 transition-transform duration-300">
                    <img 
                      src="https://res.cloudinary.com/dvtnm3d8k/image/upload/v1764398072/IMG_4568_on319j.jpg" 
                      alt="Vasa Coins"
                      className="w-full h-full object-cover"
                      onError={() => handleImageError('vasaCoins')}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                ) : (
                  <div className="w-40 h-48 bg-white/20 rounded-2xl flex items-center justify-center text-6xl border-4 border-white/40">
                    🪙
                  </div>
                )}
              </div>
              
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <h4 className="text-3xl font-bold mb-3">Vasa Coins</h4>
                <p className="text-white/90 text-xl mb-4 leading-relaxed">Your golden ticket to exclusive rewards</p>
                <div className="space-y-3">
                  <div className="flex items-center justify-center lg:justify-start gap-3">
                    <span className="text-2xl">✨</span>
                    <span className="text-white font-semibold">Collect 10 coins on every purchase</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-3">
                    <span className="text-2xl">🎯</span>
                    <span className="text-white font-semibold">Redeem for discounts & free items</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-3">
                    <span className="text-2xl">⚡</span>
                    <span className="text-white font-semibold">Instant rewards • No expiry</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* CTA Section */}
    <div className="text-center mt-20">
      <div className="bg-gradient-to-br from-white to-[#f8f4e9] rounded-3xl shadow-2xl p-12 max-w-4xl mx-auto border-2 border-[#d4a574]/30 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4a574]/10 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#d4a574]/10 rounded-full translate-y-12 -translate-x-12"></div>
        
        <div className="relative z-10">
          <h3 className="text-4xl font-bold text-[#5a4b41] mb-6">Ready to Start Earning?</h3>
          <p className="text-xl text-[#8b7355] mb-8 max-w-2xl mx-auto leading-relaxed">
            Join our community of coffee lovers and food enthusiasts who are already enjoying 
            exclusive benefits with Vasa Rewards. Your first reward is just a scan away!
          </p>
          <button 
            className="bg-gradient-to-r from-[#d4a574] to-[#b8860b] text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all duration-300 hover:translate-y-[-4px] hover:shadow-2xl hover:shadow-[#d4a574]/40 transform hover:scale-105"
            onClick={() => {
              const qrElement = document.querySelector('[alt="Vasa Loyalty Program QR Code"]');
              if (qrElement) {
                qrElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            }}
          >
            Join Vasa Rewards Today
          </button>
          <div className="mt-6 flex justify-center items-center gap-6 text-sm text-[#8b7355]">
            <div className="flex items-center gap-2">
              <span className="text-green-500 text-lg">✓</span>
              No registration fee
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500 text-lg">✓</span>
              Instant activation
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500 text-lg">✓</span>
              Lifetime benefits
            </div>
          </div>
        </div>
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
            {[
              {
                id: 1,
                url: "https://res.cloudinary.com/dvtnm3d8k/image/upload/v1764423699/WhatsApp_Image_2025-11-29_at_19.04.31_1_wlr0dp.jpg",
                alt: "Cafe Vasa Interior View 1"
              },
              {
                id: 2,
                url: "https://res.cloudinary.com/dvtnm3d8k/image/upload/v1764423707/WhatsApp_Image_2025-11-29_at_19.04.30_li7ncm.jpg",
                alt: "Cafe Vasa Cozy Corner"
              },
              {
                id: 3,
                url: "https://res.cloudinary.com/dvtnm3d8k/image/upload/v1764423706/WhatsApp_Image_2025-11-29_at_19.04.31_frnypr.jpg",
                alt: "Cafe Vasa Dining Area"
              },
              {
                id: 4,
                url: "https://res.cloudinary.com/dvtnm3d8k/image/upload/v1764423707/WhatsApp_Image_2025-11-29_at_19.04.30_1_wuv9hz.jpg",
                alt: "Cafe Vasa Outdoor Seating"
              }
            ].map((galleryItem) => (
              <div 
                key={galleryItem.id} 
                className="rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 aspect-square"
              >
                {!imageError[`gallery${galleryItem.id}`] ? (
                  <img 
                    src={galleryItem.url} 
                    alt={galleryItem.alt}
                    className="w-full h-full object-cover"
                    onError={() => handleImageError(`gallery${galleryItem.id}`)}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-r from-[#e8dfd8] to-[#d4c6b8] flex items-center justify-center text-[#8b7355] font-medium">
                    📸 Cafe View {galleryItem.id}
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
                    <p className="text-[#8b7355]">Monday - Sunday: 10 AM - 11:30 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-1">📞</span>
                  <div>
                    <h4 className="text-lg font-semibold text-[#5a4b41] mb-1">Phone</h4>
                    <p className="text-[#8b7355]">+91 7821856623</p>
                  </div>
                </div>
              </div>
              
             <div className="flex gap-4 mt-8">
  <a 
    href="https://www.facebook.com/p/Cafe-vasa-61575241508094/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-12 h-12 bg-[#d4a574] text-white rounded-full flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 hover:bg-[#1877F2] hover:shadow-lg"
    aria-label="Visit our Facebook page"
  >
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  </a>
  <a 
    href="https://www.instagram.com/cafe_vasa/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-12 h-12 bg-[#d4a574] text-white rounded-full flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#dc2743] hover:shadow-lg"
    aria-label="Visit our Instagram page"
  >
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  </a>
  <a 
    href={`https://wa.me/917821856623`} 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-12 h-12 bg-[#d4a574] text-white rounded-full flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 hover:bg-[#25D366] hover:shadow-lg"
    aria-label="Contact us on WhatsApp"
  >
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
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
        {['Home', 'About', 'Menu', 'Loyalty', 'Gallery', 'Contact'].map((item) => (
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
        &copy; 2025 Cafe Vasa. All rights reserved. 
      </p>
      <p className="text-sm text-[#8b7355] mt-2">
        Akola, Maharashtra | +91  7821856623
      </p>
      <p className="text-sm text-[#8b7355] mt-2">
        Developed by{" "}
        <a 
          href="https://webreich.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#d4a574] hover:text-[#b8864a] transition-colors duration-300"
        >
          WebReich Solutions
        </a>
      </p>
    </div>
  </div>
</footer>
    </div>
  );
};

export default CafeVasa;