import { Container } from '@/components/container'
import { HomeList } from '@/components/home-list'

export default function Home(): JSX.Element {
  return (
    <main>
      <Container>
        <HomeList />
      </Container>
    </main>
  )
}
