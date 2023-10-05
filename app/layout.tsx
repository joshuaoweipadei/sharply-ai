import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SharplyAI - Automation Agency',
  description: 'SharplyAI Automation Agency provides cutting-edge corporate solutions to drive innovation and simplify business procedures.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='app'>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  )
}
