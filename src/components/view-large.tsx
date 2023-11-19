import type { ReactNode } from 'react'

import { memo } from 'react'

import { ErrorIcon } from '@public/icons'

export const ViewLarge = memo(({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <>
      <div className="hidden h-screen w-screen place-content-center md:grid">
        <div className="mx-auto h-28 w-28">
          <ErrorIcon />
        </div>
        Esta aplicación solo está disponible es vista de móvil
      </div>
      {children}
    </>
  )
})
