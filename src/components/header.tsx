'use client'
import type { TitlesHeader } from '@/types/titles-header.type'

import { useSelectedLayoutSegment } from 'next/navigation'

import { Titles } from '@/constants/header.consts'

export function Header(): JSX.Element {
  const segment = useSelectedLayoutSegment() as TitlesHeader | undefined

  return (
    <header className="bg-white px-4 py-2">
      <h1>{Titles[segment ?? 'inicio']}</h1>
    </header>
  )
}
