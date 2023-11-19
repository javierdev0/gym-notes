import type { CardProps } from '@/types/props/card.props'

import { memo } from 'react'
import Image from 'next/image'

export const CardHome = memo(({ image, title, alt, onClick }: CardProps): JSX.Element => {
  return (
    <button className="w-full" type="button" onClick={onClick}>
      <figure className="relative w-full">
        <Image
          priority
          alt={alt}
          className="h-auto w-full rounded-md object-cover brightness-75"
          height={500}
          src={image}
          width={500}
        />
        <div className="absolute bottom-3 left-4 text-left text-white">
          <h2>{title}</h2>
        </div>
      </figure>
    </button>
  )
})
