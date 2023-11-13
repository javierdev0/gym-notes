import type { ReactNode } from 'react'

import { memo } from 'react'

export const Container = memo(({ children }: { children: ReactNode }): JSX.Element => {
  return <div className="w-screen max-w-md px-4 pt-4">{children}</div>
})
