import type { Exercise } from '@/types/models/exercise.model'

import { memo } from 'react'

import { DeleteIcon, EditIcon } from '@public/icons'
import { useModal } from '@/hooks/use-modal'
import { formatDate } from '@/utils/format-date'

import { Icon } from './icon'
import { TableRow } from './table/table-row'
import { RemoveExercise } from './modals/remove-exercise'
import { FormExercise } from './modals/form-exercise'

export const CardExercise = memo(({ exercise }: { exercise: Exercise }): JSX.Element => {
  const { openModalWithContent } = useModal()

  const removeExercise = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()

    openModalWithContent(
      '¿Estás seguro de que quieres eliminar este ejercicio?',
      <RemoveExercise id={exercise.id} />
    )
  }

  const editExercise = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()

    openModalWithContent('Editar ejercicio', <FormExercise exerciseToEdit={exercise} />)
  }

  return (
    <article className="w-full rounded-md border px-4 py-2 shadow-sm">
      <header className="flex items-center justify-between">
        <h2>{exercise.name}</h2>
        <span className="text-xs text-primary-color">{formatDate(exercise.date)}</span>
      </header>

      <table className="mt-2 w-full text-xs">
        <thead className="border-b border-black/50">
          <tr>
            <th />
            {exercise.attributes.map(({ id }, index) => (
              <th key={id}>{index + 1}</th>
            ))}
            <th className="text-right">Total</th>
          </tr>
        </thead>
        <tbody className="text-left">
          <TableRow attributes={exercise.attributes} keyObject="repetitions" title="Repeticiones" />
          <TableRow attributes={exercise.attributes} keyObject="weight" title="Peso" />
          <TableRow attributes={exercise.attributes} keyObject="rest" title="Descanso" />
        </tbody>
      </table>
      <section className="mt-2 flex items-center justify-end">
        <button className="text-black" type="button" onClick={editExercise}>
          <Icon Icon={EditIcon} className="h-[24px] w-[24px]" classNameContainer="w-fit h-fit" />
        </button>
        <button className="text-black" type="button" onClick={removeExercise}>
          <Icon Icon={DeleteIcon} className="h-[24px] w-[24px]" classNameContainer="w-fit h-fit" />
        </button>
      </section>
    </article>
  )
})
