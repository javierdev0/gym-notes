import { memo } from 'react'

import { WarningIcon } from '@public/icons'
import { useModal } from '@/hooks/use-modal'

import { ButtonPrimary } from './button-primary'
import { FormExercise } from './modals/form-exercise'

export const NotExercises = memo((): JSX.Element => {
  const { openModalWithContent } = useModal()

  const openModal = () => {
    openModalWithContent('Registrar ejercicio', <FormExercise />)
  }

  return (
    <div className="grid h-[calc(100vh-2rem)] w-full place-content-center gap-4">
      <div className="mx-auto h-28 w-28">
        <WarningIcon />
      </div>
      <p>Aún no has registrado ningún ejercicio</p>
      <ButtonPrimary type="button" onClick={openModal}>
        Registrar ejercicio
      </ButtonPrimary>
    </div>
  )
})
