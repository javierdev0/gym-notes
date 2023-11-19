'use client'

import { memo } from 'react'
import Link from 'next/link'

import { ROUTES } from '@/constants/routes.const'

import { useModal } from '../hooks/use-modal'

import { CardHome } from './card-home'
import { FormExercise } from './modals/form-exercise'

export const HomeList = memo((): JSX.Element => {
  const { openModalWithContent } = useModal()

  return (
    <section className="flex flex-col gap-4">
      <CardHome
        alt="Photo by Victor Freitas on Unsplash - https://unsplash.com/photos/person-about-to-lift-the-barbel-WvDYdXDzkhs?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash"
        image="/images/registra-tu-ejercicio.webp"
        title="Registrar mi ejercicio"
        onClick={() => {
          openModalWithContent('Registra tu ejercicio', <FormExercise />)
        }}
      />

      <Link href={ROUTES.Exercises}>
        <CardHome
          alt="Photo by Victor Freitas on Unsplash - https://unsplash.com/photos/black-barbell-on-tile-flooring-Yuv-iwByVRQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
          image="/images/historial-de-ejercicios.webp"
          title="Mis ejercicios"
        />
      </Link>
    </section>
  )
})
