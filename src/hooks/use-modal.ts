import { useContext } from 'react'

import { ModalContext } from '@/contexts/modal.context'

export const useModal = () => {
  const { openModal, setContent, closeModal } = useContext(ModalContext)

  const openModalWithContent = (title: string, content: JSX.Element): void => {
    setContent(title, content)
    openModal()
  }

  return { openModalWithContent, closeModal }
}
