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
})

export const metadata: Metadata = {
  title: 'Pizzaria Veneza | Sabor Autêntico, Feito com Amor',
  description: 'Pizzaria Veneza - Pizzas artesanais e pratos italianos tradicionais em Portugal. Uma pizzaria familiar e acolhedora com ingredientes frescos e receitas autênticas.',
  keywords: 'pizzaria, pizza, pizzas artesanais, comida italiana, restaurante italiano, Portugal, Veneza, pizza tradicional, massa fresca',
  authors: [{ name: 'Pizzaria Veneza' }],
  creator: 'Pizzaria Veneza',
  openGraph: {
    type: 'website',
    locale: 'pt_PT',
    url: 'https://pizzariaveneza.pt',
    siteName: 'Pizzaria Veneza',
    title: 'Pizzaria Veneza | Sabor Autêntico, Feito com Amor',
    description: 'Pizzas artesanais e pratos italianos tradicionais. Uma pizzaria familiar e acolhedora.',
    images: [
      {
        url: '/images/hero-pizza.jpg',
        width: 1200,
        height: 630,
        alt: 'Pizzaria Veneza - Pizzas Artesanais',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pizzaria Veneza | Sabor Autêntico, Feito com Amor',
    description: 'Pizzas artesanais e pratos italianos tradicionais em Portugal.',
    images: ['/images/hero-pizza.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#7a2828',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
