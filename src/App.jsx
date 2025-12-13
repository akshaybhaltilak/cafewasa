import React, { useEffect } from 'react'
import Header from './Components/Header'
import CafeVasa from './Pages/CafeVasa'
import Footer from './Components/Footer'

const App = () => {
  // Add page load tracking for analytics
  useEffect(() => {
    // Track page views
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname
      })
    }

    // Add smooth scroll behavior for anchor links
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]')
      if (target) {
        e.preventDefault()
        const id = target.getAttribute('href').slice(1)
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
          
          // Update URL without page reload
          if (window.history.pushState) {
            window.history.pushState(null, null, `#${id}`)
          } else {
            window.location.hash = `#${id}`
          }
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])

  // Structured data for internal navigation
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Cafe Vasa Navigation Links",
    "description": "Main navigation sections of Cafe Vasa website",
    "numberOfItems": 6,
    "itemListElement": [
      {
        "@type": "SiteNavigationElement",
        "position": 1,
        "name": "Home",
        "url": "#home",
        "description": "Main landing page of Cafe Vasa"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 2,
        "name": "About",
        "url": "#about",
        "description": "Story and features of Cafe Vasa"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 3,
        "name": "Menu",
        "url": "#menu",
        "description": "Food and beverage menu with prices"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 4,
        "name": "Rewards",
        "url": "#rewards",
        "description": "Loyalty program and benefits"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 5,
        "name": "Gallery",
        "url": "#gallery",
        "description": "Photo gallery of cafe interior and food"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 6,
        "name": "Contact",
        "url": "#contact",
        "description": "Location, hours and contact information"
      }
    ]
  }

  return (
    <>
      {/* Additional structured data for internal links */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Main App Structure */}
      <div itemScope itemType="https://schema.org/WebPage">
        <meta itemProp="name" content="Cafe Vasa Website" />
        <meta itemProp="description" content="Official website of Cafe Vasa - Bohemian coffee and culinary experience in Akola" />
        
        <Header />
        
        <main id="main-content" role="main" itemScope itemType="https://schema.org/WebPageElement">
          <CafeVasa />
        </main>
        
        <Footer />
      </div>
    </>
  )
}

export default App