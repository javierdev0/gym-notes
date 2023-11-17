import { memo } from 'react'

import { SuccessIcon } from '@public/icons'

export const SuccessRegister = memo((): JSX.Element => {
  return (
    <div className="mx-auto h-28 w-28">
      <SuccessIcon />
    </div>
  )
})
