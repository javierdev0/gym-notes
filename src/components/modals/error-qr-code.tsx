import { memo } from 'react'

import { ErrorIcon } from '@public/icons'

export const ErrorQRCode = memo((): JSX.Element => {
  return (
    <div>
      <ErrorIcon />
    </div>
  )
})
