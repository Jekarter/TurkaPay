import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Metadata } from 'next'
import { Container } from '@mui/system'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TurkaPay',
  description: 'Виртуальная турецкая банковская карта',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
