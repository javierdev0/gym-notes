'use client'

import { memo, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { PlusIcon, ExerciceIcon, HomeIcon } from '@public/icons'
import { ROUTES } from '@/constants/routes.const'
import useOutsideClick from '@/hooks/use-outside-click'

import { Icon } from './icon'

export const FloattingButton = memo((): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const pathname = usePathname()
  const divRef = useRef<HTMLDivElement>(null)

  useOutsideClick(divRef, () => {
    setIsOpen(false)
  })

  return (
    <div ref={divRef}>
      <button
        className="fixed bottom-3 right-3 rounded-md border bg-white shadow-sm"
        type="button"
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        <Icon Icon={PlusIcon} />
      </button>

      {isOpen ? (
        <div className="fixed bottom-16 right-3 flex flex-col gap-2">
          {pathname !== ROUTES.Exercises && (
            <Link
              className="rounded-md border bg-white shadow-sm"
              href={ROUTES.Exercises}
              type="button"
              onClick={() => {
                setIsOpen(false)
              }}
            >
              <Icon Icon={ExerciceIcon} />
            </Link>
          )}

          {pathname !== ROUTES.Home && (
            <Link
              className="rounded-md border bg-white shadow-sm"
              href={ROUTES.Home}
              type="button"
              onClick={() => {
                setIsOpen(false)
              }}
            >
              <Icon Icon={HomeIcon} />
            </Link>
          )}
        </div>
      ) : null}
    </div>
  )
})
