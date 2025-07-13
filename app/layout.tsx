import type { Metadata } from 'next'
import React from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Karton Bardak Üreticisi | Viracup - Türkiye\'nin En Kaliteli Karton Bardak Markası',
  description: 'Karton bardak üretimi ve satışında Türkiye\'nin lider markası Viracup. 6oz, 7oz, 10oz karton bardak çeşitleri, özel baskı, toplu sipariş ve hızlı teslimat. Çevre dostu karton bardak çözümleri.',
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
        {/* Performance Critical Resources */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        
        {/* DNS Prefetch for External Resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Preconnect for Critical Resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload Critical Font */}
        <link 
          rel="preload" 
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700&display=swap" 
          as="style" 
        />
        <noscript>
          <link 
            rel="stylesheet" 
            href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700&display=swap" 
          />
        </noscript>
        
        {/* Viewport Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#166534" />
        
        {/* Performance Hints */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        
        {/* Preload Critical Images */}
        <link rel="preload" as="image" href="/cup-7oz.svg" />
        <link rel="preload" as="image" href="/cup-6oz.svg" />
        <link rel="preload" as="image" href="/cup-10oz.svg" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
} 