import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/container'
import { ROUTES } from '@/constants/routes.consts'

export default function Home(): JSX.Element {
  return (
    <main>
      <Container>
        <section className="flex flex-col gap-4">
          <Link href={ROUTES.Scan}>
            <figure className="relative w-full">
              <Image
                priority
                alt="Photo by Victor Freitas on Unsplash - https://unsplash.com/photos/person-about-to-lift-the-barbel-WvDYdXDzkhs?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash"
                className="h-auto w-full rounded-md object-cover brightness-75"
                height={500}
                src="/images/registra-tu-ejercicio.webp"
                width={500}
              />
              <div className="absolute bottom-3 left-4 text-white">
                <h2>Registra tu ejercicio</h2>
                <p className="text-xs">Elige como quieres registrar tu ejercicio</p>
              </div>
            </figure>
          </Link>
        </section>
      </Container>
    </main>
  )
}
