import type { MemoExoticComponent } from 'react'
import type { Icons } from '@/enums/icons.enum'

export interface IconProps {
  Icon: MemoExoticComponent<() => JSX.Element>
  IconActive?: MemoExoticComponent<() => JSX.Element>
  tag?: Icons
  isActive?: boolean
  className?: string
  classNameContainer?: string
}
