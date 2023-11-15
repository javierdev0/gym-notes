import type { OnResultFunction } from 'react-qr-reader'

import { memo } from 'react'
import { QrReader } from 'react-qr-reader'

export const QrScan = memo(
  ({ onResult }: { onResult: (result?: string, error?: Error) => void }): JSX.Element => {
    const handleOnResult: OnResultFunction = (result, error) => {
      if (result) {
        onResult(result.toString())
      }

      if (error) {
        onResult(undefined, error)
      }
    }

    return (
      <div className="max-h-[calc(100%-100px)]">
        <QrReader
          constraints={{
            advanced: [{ facingMode: 'environment', aspectRatio: 3 / 4 }]
          }}
          onResult={handleOnResult}
        />
      </div>
    )
  }
)
