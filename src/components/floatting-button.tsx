'use client'

import { memo } from 'react'

import { PlusIcon } from '@public/icons'
import { useModal } from '@/hooks/use-modal'

import { Icon } from './icon'
import { FormExercise } from './modals/form-exercise'

export const FloattingButton = memo((): JSX.Element => {
  const { openModalWithContent } = useModal()

  return (
    <div>
      <button
        className="fixed bottom-3 right-3 rounded-md border bg-white shadow-sm"
        type="button"
        onClick={() => {
          openModalWithContent('Registrar ejercicio', <FormExercise />)
        }}
      >
        <Icon Icon={PlusIcon} />
      </button>
    </div>
  )
})
