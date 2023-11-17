'use client'
import { memo } from 'react'

import { QrCodeIcon } from '@public/icons'
import { RegisterExerciseOption } from '@/enums/register-exercise-option'

import { ButtonPrimary } from '../button-primary'
import { useModal } from '../../hooks/use-modal'

import { ScanQr } from './scan-qr'
import { RegisterExercise } from './register-exercise'

export const ChooseExercise = memo((): JSX.Element => {
  const { openModalWithContent } = useModal()

  const handleChooseExercise = (exerciseChoosed: RegisterExerciseOption) => {
    if (exerciseChoosed === RegisterExerciseOption.QR) {
      openModalWithContent('Escanea el código QR de tu máquina', <ScanQr />)
    }

    if (exerciseChoosed === RegisterExerciseOption.Manual) {
      openModalWithContent('Registra tu ejercicio', <RegisterExercise />)
    }
  }

  return (
    <div className="flex h-32 w-full flex-col justify-center gap-4">
      <ButtonPrimary
        onClick={() => {
          handleChooseExercise(RegisterExerciseOption.QR)
        }}
      >
        <div className="mx-auto h-8 w-8">
          <QrCodeIcon />
        </div>
      </ButtonPrimary>

      <p className="text-xs">
        ¿Tu máquina no tiene código QR?{' '}
        <button
          className="font-bold"
          type="button"
          onClick={() => {
            handleChooseExercise(RegisterExerciseOption.Manual)
          }}
        >
          Pulsa aquí
        </button>
      </p>
    </div>
  )
})
