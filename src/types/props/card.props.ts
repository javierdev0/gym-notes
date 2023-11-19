import type { StaticImport } from 'next/dist/shared/lib/get-img-props'

export interface CardProps {
  image: string | StaticImport
  title: string
  alt: string
  onClick?: () => void
}
