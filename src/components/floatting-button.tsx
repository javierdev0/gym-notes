'use client'

import { memo } from 'react'

import { useModal } from '@/hooks/use-modal'
import { QrCodeIcon } from '@public/icons'

import { Icon } from './icon'
import { ScanQr } from './modals/scan-qr'

export const FloattingButton = memo((): JSX.Element => {
  const { openModalWithContent } = useModal()

  return (
    <button
      className="fixed bottom-3 right-3 rounded-md border bg-white shadow-md"
      type="button"
      onClick={() => {
        openModalWithContent('Escanea el código QR de tu máquina', <ScanQr />)
      }}
    >
      <Icon Icon={QrCodeIcon} />
    </button>
  )
})
