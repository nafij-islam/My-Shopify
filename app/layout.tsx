import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
})
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#14D8FF',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://nafij.com'),

  title: {
    default: 'Nafij Islam | Shopify Expert Developer & eCommerce Consultant',
    template: '%s | Nafij Islam'
  },
  description:
    'Nafij Islam is a professional Shopify Expert Developer specializing in custom store development, theme customization, speed optimization, and eCommerce growth. Build your high-converting store today.',
  generator: 'v0.app',
  keywords: [
    'Nafij Islam',
    'Nafij',
    'Shopify Developer',
    'Shopify Expert',
    'Nafij Shopify',
    'Nafij Islam Shopify',
    'Shopify Developer Bangladesh',
    'Custom Shopify Store',
    'eCommerce Developer',
    'Liquid Programming',
    'Shopify Speed Optimization'
  ],

  openGraph: {
    title: 'Nafij Islam | Shopify Expert Developer & Consultant',
    description:
      'Build high-converting Shopify stores with certified expert Nafij Islam. Customized Shopify solutions, Liquid theme development, and speed optimization.',
    type: 'website',
    url: 'https://nafij.com',
    siteName: 'Nafij Islam Portfolio',
    images: [
      {
        url: 'https://nafij.com/nafij-og.png',
        width: 1200,
        height: 630,
        alt: 'Nafij Islam - Shopify Expert Developer',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Nafij Islam | Shopify Expert Developer & Consultant',
    description:
      'Build high-converting Shopify stores with certified expert Nafij Islam.',
    images: ['https://nafij.com/nafij-og.png'],
    creator: '@nafij_islam',
  },

  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Nafij Islam",
    "alternateName": ["Nafij", "Nafij Islam Shopify"],
    "url": "https://nafij.com",
    "image": "https://nafij.com/Nafij-islam.png",
    "sameAs": [
      "https://www.facebook.com/nafijislam99/",
      "https://github.com/nafij-islam",
      "https://nafij.bro.bd",
      "https://nafij.pro.bd"
    ],
    "jobTitle": "Shopify Expert Developer",
    "description": "Nafij Islam is a professional Shopify Expert Developer specializing in custom store development, theme customization, speed optimization, and eCommerce growth."
  }

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}