import type { Metadata } from 'next'
import './globals.css'
import { StructuredData } from './structured-data'

export const metadata: Metadata = {
  title: {
    default: 'DTSS&DE Empire - Security, Loans, Transport & Food Services in Hazyview',
    template: '%s | DTSS&DE Empire'
  },
  description: 'Your trusted partner for 24/7 security services, quick cash loans, reliable transport solutions, and premium food catering in Hazyview, Mpumalanga. Armed response, micro-loans, business logistics.',
  keywords: 'security services Hazyview, cash loans Mpumalanga, transport services, food catering, armed response, micro-loans, business security, event catering, Hazyview businesses',
  authors: [{ name: 'DTSS&DE Empire' }],
  creator: 'DTSS&DE Empire',
  publisher: 'DTSS&DE Empire',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://dtss-empire.co.za'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://dtss-empire.co.za',
    title: 'DTSS&DE Empire - Comprehensive Business Services in Hazyview',
    description: 'Professional security services, quick cash loans, reliable transport, and premium food catering in Hazyview, Mpumalanga. Your trusted partner for safety and prosperity.',
    siteName: 'DTSS&DE Empire',
    images: [
      {
        url: '/images/hero-bg.jpeg',
        width: 1200,
        height: 630,
        alt: 'DTSS&DE Empire - Your Trusted Business Partner in Hazyview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DTSS&DE Empire - Security & Business Services',
    description: 'Comprehensive security, financial, transport, and catering services in Mpumalanga.',
    images: ['/images/hero-bg.jpeg'],
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
  verification: {
    // Add when you have Google Search Console
    // google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-ZA">
      <head>
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Font Awesome CDN */}
        <script 
          defer 
          src="https://use.fontawesome.com/releases/v5.15.4/js/all.js" 
          integrity="sha384-rOA1PnstxnOBLzCLMcre8ybwbTmemjzdNlILg8O7z1lUkLXozs4DHonlDtnE7fpc" 
          crossOrigin="anonymous"
        ></script>
        
        {/* Structured Data */}
        <StructuredData />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}