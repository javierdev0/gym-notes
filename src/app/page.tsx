import type { Metadata } from 'next'

import { Container } from '@/components/container'
import { ExerciseList } from '@/components/exercise-list'

export const metadata: Metadata = {
  title: 'Gymnotes - App',
  description: 'App para registrar tus ejercicios de gimnasio'
}

export default function Home(): JSX.Element {
  return (
    <Container>
      <ExerciseList />
    </Container>
  )
}
