import './globals.css'
import type { Metadata } from 'next'

import { Roboto } from 'next/font/google'

import { Navbar } from '@/components/navbar'

const robot = Roboto({
  subsets: ['latin'],
  weight: ['400', '700']
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={robot.className}>
        {children}
        <Navbar />
      </body>
    </html>
  )
}
