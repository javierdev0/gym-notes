/* eslint-disable react/button-has-type */
import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

import { memo } from 'react'

import { Spinner } from './spinner'

export const ButtonPrimary = memo(
  (
    props: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
      isLoading?: boolean
    }
  ): JSX.Element => {
    return (
      <button {...props} className="w-full rounded-md bg-black px-4 py-3 text-sm text-white">
        {props.isLoading && props.type === 'submit' ? (
          <span className="flex items-center justify-center">
            <Spinner />
          </span>
        ) : (
          props.children
        )}
      </button>
    )
  }
)
