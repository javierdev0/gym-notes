import type { DetailedHTMLProps } from 'react'

import { memo } from 'react'

export const Input = memo(
  (
    props: DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
      label?: string
    }
  ): JSX.Element => {
    return (
      <label className="w-full">
        {props.label ? <p className="text-sm">{props.label}</p> : null}
        <input
          {...props}
          className={`mt-1 w-full rounded-md border-2 border-primary-color/40 bg-transparent px-4 py-2 text-sm ${props.className}`}
        />
      </label>
    )
  }
)
