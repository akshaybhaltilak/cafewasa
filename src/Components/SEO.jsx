import React from 'react';

const SEO = () => {
  const seoConfig = {
    title: 'Cafe Vasa | Bohemian Coffee & Culinary Experiences in Akola',
    description: 'Experience the perfect blend of coffee, art, and community at Cafe Vasa. Specialty coffee, artisan food, and bohemian vibes in Akola.',
    keywords: 'cafe vasa, coffee akola, best cafe akola, specialty coffee, avocado toast, acai bowl, bohemian cafe, coffee shop, akola restaurants',
    url: 'https://cafevasa.in',
    image: 'https://res.cloudinary.com/dvtnm3d8k/image/upload/v1764423707/WhatsApp_Image_2025-11-29_at_19.04.30_1_wuv9hz.jpg',
    phone: '+917821856623',
    address: 'Before Gopal Supar Bazar, Malkapur Road, Mayur Colony, Akola, Maharashtra 444001',
    openingHours: 'Mo-Su 10:00-23:30'
  };

  return (
    <>
      {/* Meta Tags */}
      <title>{seoConfig.title}</title>
      <meta name="description" content={seoConfig.description} />
      <meta name="keywords" content={seoConfig.keywords} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={seoConfig.title} />
      <meta property="og:description" content={seoConfig.description} />
      <meta property="og:image" content={seoConfig.image} />
      <meta property="og:url" content={seoConfig.url} />
      <meta property="og:type" content="restaurant.restaurant" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:site_name" content="Cafe Vasa" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoConfig.title} />
      <meta name="twitter:description" content={seoConfig.description} />
      <meta name="twitter:image" content={seoConfig.image} />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Akola" />
      <meta name="language" content="English" />
      
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          "name": "Cafe Vasa",
          "description": seoConfig.description,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Before Gopal Supar Bazar, Malkapur Road",
            "addressLocality": "Akola",
            "addressRegion": "Maharashtra",
            "postalCode": "444001",
            "addressCountry": "IN"
          },
          "telephone": seoConfig.phone,
          "openingHours": seoConfig.openingHours,
          "priceRange": "₹₹",
          "servesCuisine": ["Coffee", "Breakfast", "Brunch", "Desserts"],
          "image": seoConfig.image,
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "150"
          },
          "sameAs": [
            "https://www.instagram.com/cafe_vasa/",
            "https://www.facebook.com/p/Cafe-vasa-61575241508094/"
          ]
        })
      }} />
    </>
  );
};

export default SEO;