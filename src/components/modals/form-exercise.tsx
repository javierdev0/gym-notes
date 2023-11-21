import type { Exercise } from '@/types/models/exercise.model'

import { Fragment, memo, useEffect, useState } from 'react'

import { useModal } from '@/hooks/use-modal'
import { useExercises } from '@/hooks/use-exercises'
import { generateUUID } from '@/utils/generate-uuid'

import { Input } from '../input'
import { ButtonPrimary } from '../button-primary'

import { Success } from './success'

const initialExercise: Exercise = {
  id: '',
  name: '',
  date: '',
  type: 'weight',
  attributes: [
    {
      id: generateUUID(),
      weight: 0,
      repetitions: 0,
      rest: 0
    }
  ]
}

export const FormExercise = memo(
  ({ exerciseToEdit }: { exerciseToEdit?: Exercise }): JSX.Element => {
    const [exercise, setExercise] = useState<Exercise>(initialExercise)
    const [error, setError] = useState<string>('')

    const { openModalWithContent } = useModal()
    const { addExercise, updateExercise } = useExercises()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target

      setExercise({
        ...exercise,
        [name]: value
      })
    }

    const handleAttributes = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
      const { name, value } = event.target

      const attributes = [...exercise.attributes]

      attributes[index] = {
        ...attributes[index],
        [name]: Number(value)
      }

      setExercise({
        ...exercise,
        attributes
      })
    }

    const handleAddAttribute = () => {
      setExercise({
        ...exercise,
        attributes: [...exercise.attributes, initialExercise.attributes[0]]
      })
    }

    const handleRemoveAttribute = () => {
      setExercise({
        ...exercise,
        attributes: exercise.attributes.slice(0, -1)
      })
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      const date = new Date(exercise.date)
      const currentDate = new Date()

      if (date > currentDate) {
        setError('La fecha no puede ser mayor a la actual')

        return
      }

      addExercise(exercise)
      openModalWithContent('Ejercicio registrado', <Success />)

      setExercise(initialExercise)
    }

    const handleEdit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      updateExercise(exercise)
      openModalWithContent('Ejercicio actualizado', <Success />)

      setExercise(initialExercise)
    }

    useEffect(() => {
      if (exerciseToEdit) {
        setExercise(exerciseToEdit)
      }
    }, [exerciseToEdit])

    return (
      <form
        className="grid max-h-[540px] w-full gap-2 overflow-y-auto"
        onSubmit={(event) => {
          exerciseToEdit ? handleEdit(event) : handleSubmit(event)
        }}
      >
        <Input
          required
          label="Nombre del ejercicio"
          name="name"
          placeholder="Squads"
          type="text"
          value={exercise.name}
          onChange={handleChange}
        />

        {exercise.attributes.map((attribute, index) => (
          <Fragment key={attribute.id}>
            <h3 className="text-center text-base font-bold uppercase text-black">
              Serie {index + 1}
            </h3>
            <div className="grid grid-flow-col gap-2">
              <Input
                required
                label="Peso"
                name="weight"
                placeholder="40"
                type="number"
                value={attribute.weight || ''}
                onChange={(event) => {
                  handleAttributes(event, index)
                }}
              />

              <Input
                label="Descanso"
                name="rest"
                placeholder="3"
                type="number"
                value={attribute.rest || ''}
                onChange={(event) => {
                  handleAttributes(event, index)
                }}
              />

              <Input
                required
                label="Repeticiones"
                name="repetitions"
                placeholder="10"
                type="number"
                value={attribute.repetitions || ''}
                onChange={(event) => {
                  handleAttributes(event, index)
                }}
              />
            </div>
          </Fragment>
        ))}

        <Input
          label="Fecha"
          name="date"
          placeholder="10"
          type="date"
          value={exercise.date}
          onChange={handleChange}
        />
        <span className="-mt-1 text-[0.65rem] text-orange-500">
          {error || 'Si no selecciona una fecha, se tomará la fecha actual'}
        </span>

        <div className="flex gap-2">
          <ButtonPrimary type="button" onClick={handleAddAttribute}>
            Agregar serie
          </ButtonPrimary>
          {exercise.attributes.length > 1 && (
            <ButtonPrimary type="button" onClick={handleRemoveAttribute}>
              Eliminar serie
            </ButtonPrimary>
          )}
        </div>
        <ButtonPrimary type="submit">
          {exerciseToEdit ? 'Actualizar ejercicio' : 'Registrar ejercicio'}
        </ButtonPrimary>
      </form>
    )
  }
)
