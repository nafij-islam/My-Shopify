import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#14D8FF',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.nafij.xyz'),

  title:
    'Shopify Expert Developer | Custom Store Development & Optimization',
  description:
    'Award-winning Shopify developer specializing in custom store development, theme customization, and conversion rate optimization. Build your high-converting eCommerce store today.',
  generator: 'v0.app',
  keywords:
    'Shopify Developer, Shopify Expert, Custom Shopify Development, Shopify Theme Customization, eCommerce',

  openGraph: {
    title: 'Shopify Expert Developer | Custom Store Development',
    description:
      'Build high-converting Shopify stores with a certified expert',
    type: 'website',
    url: 'https://www.nafij.xyz',
    siteName: 'Nafij Islam',
    images: [
      {
        url: 'https://www.nafij.xyz/nafij-og.png', // 🔥 FULL URL (FIXED)
        width: 1200,
        height: 630,
        alt: 'Shopify Expert Developer Nafij Islam',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Shopify Expert Developer | Custom Store Development',
    description:
      'Build high-converting Shopify stores with a certified expert',
    images: ['https://www.nafij.xyz/nafij-og.png'], // 🔥 FULL URL (FIXED)
    creator: '@yourtwitterhandle', // optional
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
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}