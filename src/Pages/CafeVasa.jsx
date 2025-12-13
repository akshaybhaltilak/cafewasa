import React, { useState, useEffect, useRef } from 'react';
import SEO from '../Components/SEO';
import {
  Coffee, Utensils, Star, Gift, MapPin, Clock, Phone,
  CheckCircle, Award, Users, Leaf, Sparkles, ArrowRight,
  QrCode, TrendingUp, Shield, Zap
} from 'lucide-react';

const CafeVasa = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [imageError, setImageError] = useState({});

  const menuItems = [
    { 
      name: 'Specialty Coffee', 
      description: 'Handcrafted with love and precision, sourced from sustainable farms',
      price: '₹199',
      category: 'Beverages',
      bestseller: true,
      image: 'https://res.cloudinary.com/dvtnm3d8k/image/upload/v1764398071/IMG_4579_p5mz3d.jpg'
    },
    { 
      name: 'Avocado Toast', 
      description: 'Artisan sourdough with fresh avocado, cherry tomatoes, and microgreens',
      price: '₹249',
      category: 'Breakfast',
      vegetarian: true,
      image: 'https://res.cloudinary.com/dvtnm3d8k/image/upload/v1764398071/IMG_4578_m6jcrw.jpg'
    },
    { 
      name: 'Acai Bowl', 
      description: 'Organic acai blended with fresh fruits, granola, and honey drizzle',
      price: '₹279',
      category: 'Healthy',
      vegan: true,
      image: 'https://res.cloudinary.com/dvtnm3d8k/image/upload/v1764398071/IMG_4570_fzwhmx.jpg'
    }
  ];

  const features = [
    { icon: Leaf, title: 'Organic Ingredients', description: 'Locally sourced, always fresh' },
    { icon: Award, title: 'Award Winning', description: 'Best cafe in Akola 2024' },
    { icon: Users, title: 'Community Hub', description: 'Inspiring creative space' },
    { icon: Shield, title: 'Hygiene Certified', description: 'Highest safety standards' }
  ];

  const rewardsSteps = [
    { icon: QrCode, title: 'Scan QR Code', description: 'Quick registration' },
    { icon: TrendingUp, title: 'Earn Points', description: '1 point per ₹100 spent' },
    { icon: Gift, title: 'Get Rewards', description: 'Redeem amazing benefits' }
  ];

  const galleryImages = [
    {
      id: 1,
      url: "https://res.cloudinary.com/dvtnm3d8k/image/upload/v1764423699/WhatsApp_Image_2025-11-29_at_19.04.31_1_wlr0dp.jpg",
      alt: "Cafe Vasa Interior Design",
      category: "Interior"
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/dvtnm3d8k/image/upload/v1764423707/WhatsApp_Image_2025-11-29_at_19.04.30_li7ncm.jpg",
      alt: "Cozy Corner Seating Area",
      category: "Seating"
    },
    {
      id: 3,
      url: "https://res.cloudinary.com/dvtnm3d8k/image/upload/v1764423706/WhatsApp_Image_2025-11-29_at_19.04.31_frnypr.jpg",
      alt: "Dining Area Ambiance",
      category: "Dining"
    },
    {
      id: 4,
      url: "https://res.cloudinary.com/dvtnm3d8k/image/upload/v1764398071/IMG_2344_ijspo6.jpg",
      alt: "Artistic Bohemian Decor",
      category: "Decor"
    }
  ];

  const handleImageError = (imageName) => {
    setImageError(prev => ({ ...prev, [imageName]: true }));
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'menu', 'loyalty', 'gallery', 'contact'];
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

  const openGoogleMaps = () => {
    window.open('https://maps.app.goo.gl/RjDQ5959buizxMdk7?g_st=ipc', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white text-gray-800">
      {/* SEO Meta Tags */}
      <SEO />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 px-4">
        <div className="absolute inset-0 z-0">
          {!imageError.hero ? (
            <img 
              src="https://res.cloudinary.com/dvtnm3d8k/image/upload/v1764423707/WhatsApp_Image_2025-11-29_at_19.04.30_1_wuv9hz.jpg"
              alt="Cafe Vasa Interior - Bohemian Coffee Shop"
              className="w-full h-full object-cover"
              onError={() => handleImageError('hero')}
              loading="eager"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-amber-600 to-amber-800"></div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full pt-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Star className="w-4 h-4 text-amber-300 fill-current" />
               
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Cafe <span className="text-amber-300">Vasa</span>
              </h1>
              
              <p className="text-xl text-amber-100 leading-relaxed max-w-2xl">
                Where bohemian dreams meet exceptional coffee. Experience art, community, 
                and culinary excellence in Akola's most inspiring space.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-amber-600 to-amber-800 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:shadow-2xl hover:shadow-amber-600/30 hover:scale-105 transition-all duration-300"
                >
                  <Utensils className="w-5 h-5" />
                  Explore Our Menu
                </button>
                <button 
                  onClick={() => document.getElementById('loyalty')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-white/30 transition-all duration-300"
                >
                  <Gift className="w-5 h-5" />
                  Join Rewards Program
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Banner */}
      <div className="bg-gradient-to-r from-amber-600 to-amber-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">{feature.title}</p>
                  <p className="text-sm text-amber-100">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-6">
                Our Story
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                More Than Just a Coffee Shop
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Nestled in the heart of Akola, Cafe Vasa is a creative sanctuary where 
                every corner tells a story and every cup holds a memory. We believe in 
                serving not just food and coffee, but experiences that linger in your 
                memory long after you've left our doors.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600" />
                  <span className="text-gray-700">100% organic ingredients</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600" />
                  <span className="text-gray-700">Sustainable sourcing practices</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600" />
                  <span className="text-gray-700">Artist collaborations & events</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-600 to-amber-800 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                {!imageError.about ? (
                  <img 
                    src="https://res.cloudinary.com/dvtnm3d8k/image/upload/v1764423707/WhatsApp_Image_2025-11-29_at_19.04.30_li7ncm.jpg" 
                    alt="Cafe Vasa Artistic Interior Design"
                    className="w-full h-[500px] object-cover"
                    onError={() => handleImageError('about')}
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-[500px] bg-gradient-to-r from-amber-600 to-amber-800 flex items-center justify-center">
                    <div className="text-center text-white p-8">
                      <Coffee className="w-16 h-16 mx-auto mb-4" />
                      <p className="text-2xl font-bold">Our Creative Space</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-4 bg-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-4">
              Culinary Excellence
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Signature Menu
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Crafted with passion and precision, our menu showcases the finest local ingredients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {menuItems.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-amber-100 overflow-hidden group hover:shadow-xl transition-all duration-500"
              >
                <div className="h-56 overflow-hidden relative">
                  {!imageError[`menu${index}`] ? (
                    <img 
                      src={item.image}
                      alt={`${item.name} - ${item.category}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={() => handleImageError(`menu${index}`)}
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-r from-amber-600 to-amber-800 flex items-center justify-center">
                      <Utensils className="w-12 h-12 text-white" />
                    </div>
                  )}
                  {item.bestseller && (
                    <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Bestseller
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                    <span className="text-amber-700 font-bold text-xl">{item.price}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-amber-600 font-medium">{item.category}</span>
                    <button className="bg-gradient-to-r from-amber-600 to-amber-800 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row gap-6">
              <a 
                href="https://link.zomato.com/xqzv/rshare?id=109603072305632a9 " 
                target="_blank" 
                rel="noopener noreferrer nofollow"
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-semibold flex items-center justify-center gap-3 hover:shadow-xl transition-all duration-300"
                aria-label="Order on Zomato"
              >
                <span className="text-lg">🍴</span>
                Order on Zomato
              </a>
              <a 
                href="https://www.swiggy.com/menu/1129715?source=sharing" 
                target="_blank" 
                rel="noopener noreferrer nofollow"
                className="px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-full font-semibold flex items-center justify-center gap-3 hover:shadow-xl transition-all duration-300"
                aria-label="Order on Swiggy"
              >
                <span className="text-lg">🚚</span>
                Order on Swiggy
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Loyalty Rewards Section */}
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
                    10%
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-[#5a4b41] mb-2">Cashback</h3>
                    <p className="text-[#8b7355] text-lg">On every purchase</p>
                  </div>
                </div>
                
                <p className="text-lg text-[#5a4b41] mb-8 leading-relaxed">
                  Join our exclusive loyalty program and get <span className="font-bold text-[#d4a574]">10% cashback</span> on every order. 
                  Watch your rewards grow and unlock amazing treats with every visit!
                </p>
                
                {/* How it Works */}
                <div className="bg-gradient-to-br from-[#f8f4e9] to-[#e8dfd8] rounded-2xl p-6 border border-[#d4a574]/20">
                  <h4 className="text-xl font-bold text-[#5a4b41] mb-6 text-center">How it works</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-3 bg-white/50 rounded-xl transform hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                      <div className="w-8 h-8 bg-[#d4a574] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        1
                      </div>
                      <span className="text-[#5a4b41] font-medium">Get <span className="text-[#d4a574] font-bold">10% cashback</span> as Vasa Coins</span>
                    </div>
                    <div className="flex items-center gap-4 p-3 bg-white/50 rounded-xl transform hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                      <div className="w-8 h-8 bg-[#d4a574] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        2
                      </div>
                      <span className="text-[#5a4b41] font-medium">On <span className="text-[#d4a574] font-bold">every purchase</span> you make</span>
                    </div>
                    <div className="flex items-center gap-4 p-3 bg-white/50 rounded-xl transform hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                      <div className="w-8 h-8 bg-[#d4a574] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        3
                      </div>
                      <span className="text-[#5a4b41] font-medium"><span className="text-[#d4a574] font-bold">Redeem coins</span> in your next purchase</span>
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

                    {/* Text Content */}
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold mb-4">Vasa Coins</h4>
                      <p className="text-white/90 leading-relaxed mb-6">
                        Every purchase earns you Vasa Coins that you can redeem for exciting rewards. 
                        The more you visit, the more you save!
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">✨</span>
                          <span>Earn with every transaction</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-lg">🎊</span>
                          <span>Double points on special occasions</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-lg">🏆</span>
                          <span>VIP status at high rewards level</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-4">
              Visual Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Bohemian Space
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the artistic ambiance and creative vibes of Cafe Vasa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image) => (
              <div 
                key={image.id}
                className="relative rounded-2xl overflow-hidden group cursor-pointer"
              >
                {!imageError[`gallery${image.id}`] ? (
                  <img 
                    src={image.url}
                    alt={`${image.alt} - Cafe Vasa ${image.category}`}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={() => handleImageError(`gallery${image.id}`)}
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-64 bg-gradient-to-r from-amber-600 to-amber-800 flex items-center justify-center">
                    <div className="text-center text-white p-6">
                      <Sparkles className="w-12 h-12 mx-auto mb-3" />
                      <p className="font-semibold">{image.category}</p>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <p className="text-white font-semibold text-lg">{image.alt}</p>
                    <p className="text-amber-300 text-sm">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-6">
                Visit Us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Find Our Location
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-6 p-6 bg-white rounded-2xl shadow-lg border border-amber-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-amber-800 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Address</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Before Gopal Supar Bazar, Malkapur Road<br />
                      Mayur Colony Beside Janta Bank<br />
                      Akola, Maharashtra 444001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-lg border border-amber-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-amber-800 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Opening Hours</h4>
                    <p className="text-gray-600">Monday - Sunday: 10 AM - 11:30 PM</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-lg border border-amber-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-amber-800 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Contact</h4>
                    <a 
                      href="tel:+917821856623" 
                      className="text-gray-600 hover:text-amber-700 transition-colors text-lg font-medium"
                    >
                      +91 7821856623
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-600 to-amber-800 rounded-3xl blur-2xl opacity-10"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-amber-100">
                <div 
                  className="h-full min-h-[500px] bg-gradient-to-br from-amber-100 to-amber-50 cursor-pointer group relative"
                  onClick={openGoogleMaps}
                  role="button"
                  tabIndex={0}
                  aria-label="Open Cafe Vasa location in Google Maps"
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-amber-600 to-amber-800 rounded-full flex items-center justify-center mb-6">
                      <MapPin className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Visit Cafe Vasa</h3>
                    <p className="text-gray-600 mb-8 max-w-md">
                      Click to open our location in Google Maps for directions and navigation.
                    </p>
                    <button className="bg-gradient-to-r from-amber-600 to-amber-800 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                      Get Directions
                    </button>
                  </div>
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-sm text-gray-500">
                    Coordinates: 20.7059° N, 77.0020° E
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CafeVasa;