'use client'

import { memo } from 'react'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

import { Icons } from '@/enums/icons.enum'
import {
  ExerciceActiveIcon,
  ExerciceIcon,
  HomeActiveIcon,
  HomeIcon,
  UserActiveIcon,
  UserIcon
} from '@public/icons'
import { ROUTES } from '@/constants/routes.const'

import { Icon } from './icon'

export const Navbar = memo((): JSX.Element => {
  const segments = useSelectedLayoutSegment()

  const isActive = (tag: Icons): boolean | undefined => {
    const tagLowerCase = tag.toLowerCase()

    if (!segments && tag === Icons.Home) return true

    return segments?.includes(tagLowerCase)
  }

  return (
    <nav className="fixed bottom-0 w-screen border-t border-gray-100 bg-white px-4 py-2">
      <ul className="flex justify-between">
        <li>
          <Link href={ROUTES.Exercises}>
            <Icon
              Icon={ExerciceIcon}
              IconActive={ExerciceActiveIcon}
              isActive={isActive(Icons.Exercises)}
              tag={Icons.Exercises}
            />
          </Link>
        </li>

        <li>
          <Link href={ROUTES.Home}>
            <Icon
              Icon={HomeIcon}
              IconActive={HomeActiveIcon}
              isActive={isActive(Icons.Home)}
              tag={Icons.Home}
            />
          </Link>
        </li>

        <li>
          <Link href={ROUTES.Profile}>
            <Icon
              Icon={UserIcon}
              IconActive={UserActiveIcon}
              isActive={isActive(Icons.Profile)}
              tag={Icons.Profile}
            />
          </Link>
        </li>
      </ul>
    </nav>
  )
})
