import type { IconProps } from '@/types/icon.props'

import { memo } from 'react'

export const Icon = memo(({ Icon, tag, isActive, IconActive }: IconProps): JSX.Element => {
  return (
    <span className="flex h-10 w-10 flex-col items-center justify-center text-xs text-[#5e5e5e]">
      <span
        className={`h-[32px] w-[32px] rounded-md  p-1 ${
          isActive ? 'bg-gray-100' : 'bg-transparent'
        }`}
      >
        {isActive ? <IconActive /> : <Icon />}
      </span>
      <p>{tag}</p>
    </span>
  )
})
