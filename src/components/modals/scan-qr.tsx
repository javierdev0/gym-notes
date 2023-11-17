import { memo } from 'react'

import { QrScan } from '../qr-scan'

export const ScanQr = memo((): JSX.Element => {
  const handleOnResult = (result?: string, error?: Error) => {
    console.log(result, error)
  }

  return <QrScan onResult={handleOnResult} />
})
