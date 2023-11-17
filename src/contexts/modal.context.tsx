'use client'

import type { ReactNode } from 'react'

import { createContext, useMemo, useState } from 'react'

interface ModalContextType {
  closeModal: () => void
  content: ReactNode
  isOpen: boolean
  openModal: () => void
  setContent: (title: string, content: ReactNode) => void
  title: string
}

const initialState: ModalContextType = {
  closeModal: () => null,
  content: null,
  isOpen: false,
  openModal: () => null,
  setContent: () => null,
  title: ''
}

export const ModalContext = createContext<ModalContextType>(initialState)

export function ModalProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [modalContent, setModalContent] = useState<ModalContextType>(initialState)

  const contextValue = useMemo(
    () => ({
      ...modalContent,
      openModal: () => {
        setModalContent((prev) => ({ ...prev, isOpen: true }))
      },

      closeModal: () => {
        setModalContent((prev) => ({ ...prev, isOpen: false }))
      },

      setContent: (title: string, content: ReactNode) => {
        setModalContent((prev) => ({ ...prev, title, content }))
      }
    }),
    [modalContent]
  )

  return <ModalContext.Provider value={contextValue}>{children}</ModalContext.Provider>
}
