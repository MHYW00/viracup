import Hero from '@/sections/Hero'
import ProductShowcase from '@/sections/ProductShowcase'
import WhyViracup from '@/sections/WhyViracup'
import About from '@/sections/About'
import ContactForm from '@/sections/ContactForm'
import Footer from '@/sections/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

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