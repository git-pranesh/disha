import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Disha Caroline | AICIC Certified Image Consultant',
  description:
    "Asia's premier image consultant and soft skills trainer. Disha Caroline helps executives, professionals, and brides discover the image that commands every room.",
  generator: 'v0.app',
  icons: {
    icon: '/logo-crown-icon-gold.png',
    apple: '/logo-crown-icon-gold.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#4c1a6e',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
