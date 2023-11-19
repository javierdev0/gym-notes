import { memo } from 'react'

import { useExercises } from '@/hooks/use-exercises'
import { useModal } from '@/hooks/use-modal'

import { ButtonPrimary } from '../button-primary'

import { Success } from './success'

export const RemoveExercise = memo(({ id }: { id: string }): JSX.Element => {
  const { deleteExercise } = useExercises()
  const { openModalWithContent } = useModal()

  const handleRemoveExercise = () => {
    deleteExercise(id)
    openModalWithContent('Ejercicio eliminado correctamente', <Success />)
  }

  return (
    <div>
      <ButtonPrimary type="button" onClick={handleRemoveExercise}>
        Confirmar
      </ButtonPrimary>
    </div>
  )
})
