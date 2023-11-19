import { Container } from '@/components/container'
import { ExerciseList } from '@/components/exercise-list'

export default function Excercises(): JSX.Element {
  return (
    <main>
      <Container>
        <ExerciseList />
      </Container>
    </main>
  )
}
