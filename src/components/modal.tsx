'use client'
import type { ReactNode } from 'react'

import { memo, useState } from 'react'

export const Modal = memo(
  ({ title, children }: { title?: string; children: ReactNode }): JSX.Element => {
    const [isOpen, setIsOpen] = useState<boolean>(true)

    return (
      <>
        <input
          aria-label="Close modal"
          className={`fixed top-0 h-screen w-screen bg-black/20 ${isOpen ? 'block' : 'hidden'}`}
          type="button"
          onClick={() => {
            setIsOpen(false)
          }}
        />

        <aside
          className={`absolute bottom-0 h-[50vh] w-screen rounded-t-md border bg-white px-6 py-4 shadow-sm ${
            isOpen ? '-translate-y-0' : 'translate-y-full'
          } transition-transform duration-500 ease-in-out`}
        >
          <h2 className="text-center">{title}</h2>

          {children}
        </aside>
      </>
    )
  }
)
