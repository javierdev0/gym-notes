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
  QrCodeActiveIcon,
  QrCodeIcon,
  UserActiveIcon,
  UserIcon
} from '@public/icons'
import { Routes } from '@/enums/routes.enum'

import { useModal } from '../hooks/use-modal'

import { Icon } from './icon'
import { ScanQr } from './modals/scan-qr'

export const Navbar = memo((): JSX.Element => {
  const segments = useSelectedLayoutSegment()
  const { openModalWithContent } = useModal()

  const isActive = (tag: Icons): boolean | undefined => {
    const tagLowerCase = tag.toLowerCase()

    if (!segments && tag === Icons.Home) return true

    return segments?.includes(tagLowerCase)
  }

  return (
    <nav className="fixed bottom-0 w-screen border-t border-gray-100 bg-white px-4 py-2">
      <ul className="flex justify-between">
        <li>
          <Link href={Routes.Exercises}>
            <Icon
              Icon={ExerciceIcon}
              IconActive={ExerciceActiveIcon}
              isActive={isActive(Icons.Exercises)}
              tag={Icons.Exercises}
            />
          </Link>
        </li>

        <li>
          <Link href={Routes.Home}>
            <Icon
              Icon={HomeIcon}
              IconActive={HomeActiveIcon}
              isActive={isActive(Icons.Home)}
              tag={Icons.Home}
            />
          </Link>
        </li>

        <li>
          <button
            type="button"
            onClick={() => {
              openModalWithContent('Escanea el código QR de tu máquina', <ScanQr />)
            }}
          >
            <Icon
              Icon={QrCodeIcon}
              IconActive={QrCodeActiveIcon}
              isActive={isActive(Icons.Scan)}
              tag={Icons.Scan}
            />
          </button>
        </li>

        <li>
          <Link href={Routes.Profile}>
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
