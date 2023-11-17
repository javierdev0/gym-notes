import type { Exercise } from '@/types/models/exercise.model'

import { memo, useState } from 'react'

import { useModal } from '@/hooks/use-modal'

import { Input } from '../input'
import { ButtonPrimary } from '../button-primary'

import { SuccessRegister } from './success-register'

const initialExercise: Exercise = {
  name: '',
  serie: 0,
  weight: 0,
  repetitions: 0,
  rest: 0
}

export const RegisterExercise = memo((): JSX.Element => {
  const [exercise, setExercise] = useState<Exercise>(initialExercise)
  const { openModalWithContent, closeModal } = useModal()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExercise({
      ...exercise,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    openModalWithContent('Ejercicio registrado', <SuccessRegister />)

    setExercise(initialExercise)

    setTimeout(() => {
      closeModal()
      window.location.reload()
    }, 2000)
  }

  return (
    <form className="grid w-full gap-2" onSubmit={handleSubmit}>
      <Input
        required
        label="Nombre del ejercicio"
        name="name"
        placeholder="Squads"
        type="text"
        value={exercise.name}
        onChange={handleChange}
      />
      <div className="grid grid-flow-col gap-2">
        <Input
          required
          label="Serie"
          name="serie"
          placeholder="2"
          type="number"
          value={exercise.serie || ''}
          onChange={handleChange}
        />
        <Input
          required
          label="Peso (kg)"
          name="weight"
          placeholder="40"
          type="number"
          value={exercise.weight || ''}
          onChange={handleChange}
        />
        <Input
          required
          label="Repeticiones"
          name="repetitions"
          placeholder="10"
          type="number"
          value={exercise.repetitions || ''}
          onChange={handleChange}
        />
      </div>
      <Input
        label="Descanso (min)"
        name="rest"
        placeholder="3"
        type="number"
        value={exercise.rest || ''}
        onChange={handleChange}
      />
      <ButtonPrimary type="submit">Registrar ejercicio</ButtonPrimary>
    </form>
  )
})
