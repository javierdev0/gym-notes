import type { MemoExoticComponent } from 'react'

export interface IconProps {
  Icon: MemoExoticComponent<() => JSX.Element>
  IconActive?: MemoExoticComponent<() => JSX.Element>
  isActive?: boolean
  className?: string
  classNameContainer?: string
}
