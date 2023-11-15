import type { MemoExoticComponent } from 'react'
import type { Icons } from '@/enums/icons.enum'
import type { Routes } from '@/enums/routes.enum'

export interface IconProps {
  Icon: MemoExoticComponent<() => JSX.Element>
  IconActive: MemoExoticComponent<() => JSX.Element>
  tag: Icons
  isActive?: boolean
  route: Routes
}
