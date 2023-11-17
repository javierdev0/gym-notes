'use client'

import { memo } from 'react'

import { useModal } from '../hooks/use-modal'

import { Card } from './card'
import { ChooseExercise } from './modals/choose-exercise'

export const HomeList = memo((): JSX.Element => {
  const { openModalWithContent } = useModal()

  return (
    <section className="flex flex-col gap-4">
      <Card
        alt="Photo by Victor Freitas on Unsplash - https://unsplash.com/photos/person-about-to-lift-the-barbel-WvDYdXDzkhs?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash"
        image="/images/registra-tu-ejercicio.webp"
        title="Registra tu ejercicio"
        onClick={() => {
          openModalWithContent('¿Cómo quieres registrar tu ejercicio?', <ChooseExercise />)
        }}
      />
    </section>
  )
})
