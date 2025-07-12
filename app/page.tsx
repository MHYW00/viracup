import dynamic from 'next/dynamic'
import Hero from '@/sections/Hero'

// Lazy load components to improve performance
const ProductShowcase = dynamic(() => import('@/sections/ProductShowcase'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100"></div>
})
const WhyViracup = dynamic(() => import('@/sections/WhyViracup'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100"></div>
})
const About = dynamic(() => import('@/sections/About'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100"></div>
})
const ContactForm = dynamic(() => import('@/sections/ContactForm'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100"></div>
})
const Footer = dynamic(() => import('@/sections/Footer'), {
  loading: () => <div className="h-64 animate-pulse bg-gray-100"></div>
})
const FloatingWhatsApp = dynamic(() => import('@/components/FloatingWhatsApp'), {
  ssr: false
})

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Viracup Karton Bardak",
  "alternateName": "Viracup",
  "description": "Türkiye'nin lider karton bardak üreticisi. 6oz, 7oz, 10oz karton bardak çeşitleri, özel baskı ve toplu sipariş hizmetleri.",
  "url": "https://viracup.com",
  "logo": "https://viracup.com/favicon.svg",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+90-532-131-95-94",
    "contactType": "customer service",
    "areaServed": "TR",
    "availableLanguage": "Turkish"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Akçaabat",
    "addressRegion": "Trabzon",
    "addressCountry": "TR"
  },
  "sameAs": [
    "https://www.facebook.com/viracup",
    "https://www.instagram.com/viracup",
    "https://www.twitter.com/viracup"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Karton Bardak Ürünleri",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "6oz Karton Bardak",
          "description": "Küçük boy karton bardak, espresso ve küçük içecekler için ideal",
          "category": "Karton Bardak"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "7oz Karton Bardak",
          "description": "Orta boy karton bardak, kahve ve çay için mükemmel boyut",
          "category": "Karton Bardak"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "10oz Karton Bardak",
          "description": "Büyük boy karton bardak, soğuk içecekler ve cafe standardı",
          "category": "Karton Bardak"
        }
      }
    ]
  }
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    <main className="min-h-screen">
      <Hero />
      <ProductShowcase />
      <WhyViracup />
      <About />
      <ContactForm />
      <Footer />
      <FloatingWhatsApp />
    </main>
    </>
  )
} 