import type { IconProps } from '@/types/props/icon.props'

import { memo } from 'react'

export const Icon = memo(({ Icon, tag, isActive, IconActive }: IconProps): JSX.Element => {
  return (
    <span className="text-primary-color flex h-10 w-10 flex-col items-center justify-center text-xs">
      <span
        className={`h-[32px] w-[32px] rounded-md  p-1 ${
          isActive ? 'bg-gray-200' : 'bg-transparent'
        }`}
      >
        {isActive && IconActive ? <IconActive /> : <Icon />}
      </span>
      <p>{tag}</p>
    </span>
  )
})
