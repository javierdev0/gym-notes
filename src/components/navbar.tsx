'use client'

import { memo } from 'react'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

import { Icons } from '@/enums/icons.enum'
import { NAVBAR_CONTENT } from '@/constants/navbar.consts'
import { ROUTES } from '@/constants/routes.consts'

import { Icon } from './icon'

export const Navbar = memo((): JSX.Element => {
  const segments = useSelectedLayoutSegment()

  const isActive = (tag: Icons): boolean | undefined => {
    const tagLowerCase = tag.toLowerCase()

    if (!segments && tag === Icons.Home) return true

    return segments?.includes(tagLowerCase)
  }

  return (
    <nav className="fixed bottom-0 w-screen bg-white px-4 py-2">
      <ul className="flex justify-between">
        {NAVBAR_CONTENT.map((content) => (
          <li key={content.tag}>
            <Link href={ROUTES[content.tag]}>
              <Icon {...content} isActive={isActive(content.tag)} />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
})
