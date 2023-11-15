'use client'

import { memo } from 'react'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

import { Icons } from '@/enums/icons.enum'
import { NAVBAR_CONTENT } from '@/constants/navbar.consts'

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
            {content.route ? (
              <Link href={content.route}>
                <Icon {...content} isActive={isActive(content.tag)} />
              </Link>
            ) : (
              <button type="button">
                <Icon {...content} isActive={isActive(content.tag)} />
              </button>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
})
