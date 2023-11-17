'use client'

import { memo, useContext } from 'react'

import { ModalContext } from '@/contexts/modal.context'

export const Modal = memo((): JSX.Element => {
  const { content, title, isOpen, closeModal } = useContext(ModalContext)

  return (
    <div className="overflow-hidden">
      <input
        aria-label="Close modal"
        className={`fixed top-0 ${isOpen ? 'block h-full w-full bg-black/20' : 'hidden'}`}
        type="button"
        onClick={closeModal}
      />

      <aside
        className={`fixed bottom-0 z-10 min-h-[20%] w-screen transform rounded-t-md bg-white px-6 py-4 shadow-sm transition-transform duration-300 ease-in-out
        ${isOpen ? '-translate-y-0' : 'translate-y-full'}`}
      >
        <h2 className="mb-2 text-center">{title}</h2>

        {content}
      </aside>
    </div>
  )
})
