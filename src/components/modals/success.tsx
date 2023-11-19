import { memo, useEffect } from 'react'

import { SuccessIcon } from '@public/icons'
import { useModal } from '@/hooks/use-modal'

export const Success = memo((): JSX.Element => {
  const { closeModal } = useModal()

  useEffect(() => {
    setTimeout(() => {
      closeModal()
      window.location.reload()
    }, 2000)
  }, [])

  return (
    <div className="mx-auto h-28 w-28">
      <SuccessIcon />
    </div>
  )
})
