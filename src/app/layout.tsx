import './globals.css'
import type { Metadata } from 'next'

import { Roboto } from 'next/font/google'

import { Modal } from '@/components/modal'
import { ModalProvider } from '@/contexts/modal.context'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700']
})

export const metadata: Metadata = {
  title: 'Gymnotes - App',
  description: 'App para registrar tus ejercicios de gimnasio'
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${roboto.className} min-h-screen w-screen`}>
        <ModalProvider>
          <main className="min-h-screen w-screen">{children}</main>
          <Modal />
        </ModalProvider>
      </body>
    </html>
  )
}
