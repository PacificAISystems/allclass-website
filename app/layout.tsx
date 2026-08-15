import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'All Class Driving Academy Ltd. — Class 1 & 3 Truck Training, Edmonton',
  description:
    "Edmonton's 5.0-star rated Class 1 MELT, Class 3 and Air Brake truck driver training. 1,075+ Google reviews. Call 780-200-8085 to book.",
  openGraph: {
    title: 'All Class Driving Academy Ltd. — Edmonton Truck Training',
    description:
      'Class 1 MELT, Class 3 and Air Brake training. 5.0 stars from 1,075+ Google reviews.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutomotiveBusiness',
  name: 'All Class Driving Academy Ltd.',
  description:
    'Class 1 MELT, Class 3 and Air Brake truck driver training in Edmonton, Alberta.',
  telephone: '+17802008085',
  email: 'allclassdrivingacademy@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '5307 72a Ave NW',
    addressLocality: 'Edmonton',
    addressRegion: 'AB',
    postalCode: 'T6B 2J1',
    addressCountry: 'CA',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '1075',
  },
  openingHours: 'Mo-Fr 09:00-16:00',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </body>
    </html>
  )
}
