import type { OnResultFunction } from 'react-qr-reader'

import { memo, useState } from 'react'
import { QrReader } from 'react-qr-reader'

import { ErrorIcon } from '@public/icons'

export const QrScan = memo(
  ({ onResult }: { onResult: (result?: string, error?: Error) => void }): JSX.Element => {
    const [error, setError] = useState<Error | undefined | null>(null)

    const handleOnResult: OnResultFunction = (result, error) => {
      if (result) {
        onResult(result.toString())
      }

      if (error) {
        setError(error)
        onResult(undefined, error)
      }
    }

    return (
      <div className="max-h-[calc(100%-100px)]">
        {!error?.message ? (
          <QrReader
            constraints={{
              advanced: [{ facingMode: 'environment', aspectRatio: 3 / 4 }]
            }}
            onResult={handleOnResult}
          />
        ) : (
          <>
            <div className="mx-auto h-28 w-28">
              <ErrorIcon />
            </div>
            <p className="text-center text-sm font-bold text-red-500">
              Para continuar, debes permitir el acceso a la cámara
            </p>
          </>
        )}
      </div>
    )
  }
)
