import type { Metadata } from 'next'
import React from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Karton Bardak Üreticisi | Viracup - Türkiye\'nin En Kaliteli Karton Bardak Markası',
  description: 'Karton bardak üretimi ve satışında Türkiye\'nin lider markası Viracup. 6oz, 7oz, 10oz karton bardak çeşitleri, özel baskı, toplu sipariş ve hızlı teslimat. Çevre dostu karton bardak çözümleri.',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes',
  keywords: 'karton bardak, karton bardak üreticisi, karton bardak satışı, karton bardak fiyatları, 6oz karton bardak, 7oz karton bardak, 10oz karton bardak, özel baskılı karton bardak, toplu karton bardak siparişi, çevre dostu karton bardak, sızdırmaz karton bardak, cafe karton bardak, restaurant karton bardak, karton bardak Türkiye, karton bardak istanbul, karton bardak ankara, karton bardak trabzon',
  authors: [{ name: 'Viracup Karton Bardak' }],
  creator: 'Viracup Karton Bardak Üreticisi',
  publisher: 'Viracup',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  metadataBase: new URL('https://viracup.com'),
  openGraph: {
    title: 'Karton Bardak Üreticisi | Viracup - Türkiye\'nin En Kaliteli Karton Bardak Markası',
    description: 'Karton bardak üretimi ve satışında Türkiye\'nin lider markası. 6oz, 7oz, 10oz karton bardak çeşitleri, özel baskı ve toplu sipariş imkanı. Çevre dostu karton bardak çözümleri.',
    url: 'https://viracup.com',
    siteName: 'Viracup Karton Bardak',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: '/og-image-karton-bardak.jpg',
        width: 1200,
        height: 630,
        alt: 'Viracup Karton Bardak Çeşitleri - 6oz 7oz 10oz',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karton Bardak Üreticisi | Viracup',
    description: 'Türkiye\'nin en kaliteli karton bardak üreticisi. 6oz, 7oz, 10oz karton bardak çeşitleri ve özel baskı seçenekleri.',
    creator: '@viracup',
    images: ['/og-image-karton-bardak.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://viracup.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        
        {/* Font preloading for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap" 
          rel="stylesheet"
        />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
} 