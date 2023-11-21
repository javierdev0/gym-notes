import type { ReactNode } from 'react'

import { memo } from 'react'

import { FloattingButton } from './floatting-button'

export const Container = memo(({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <div className="relative mx-auto w-screen max-w-md px-4 pt-4">
      {children}
      <FloattingButton />
    </div>
  )
})
