import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Aguas Verdes: Charco de los Peñascos | Fuerteventura',
  description: 'Descubre las piscinas naturales de Aguas Verdes en Fuerteventura. Charco de los Peñascos - el secreto mejor guardado de la isla, donde el océano Atlántico se encuentra con la roca volcánica.',
  keywords: 'Aguas Verdes, Fuerteventura, piscinas naturales, Charco de los Peñascos, Canarias, turismo, playas',
  authors: [{ name: 'My Fuerta Ltd.' }],
  openGraph: {
    title: 'Aguas Verdes: Charco de los Peñascos | Fuerteventura',
    description: 'El secreto mejor guardado de Fuerteventura - piscinas naturales volcánicas',
    type: 'website',
    locale: 'es_ES',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a2e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
