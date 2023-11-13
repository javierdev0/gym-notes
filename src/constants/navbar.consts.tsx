import type { IconProps } from '@/types/icon.props'

import {
  ExerciceActiveIcon,
  ExerciceIcon,
  HomeActiveIcon,
  HomeIcon,
  QrCodeActiveIcon,
  UserActiveIcon,
  UserIcon
} from '@public/icons'

import { Icons } from '@/enums/icons.enum'

import { QrCodeIcon } from '../../public/icons/index'

export const NAVBAR_CONTENT: IconProps[] = [
  {
    Icon: ExerciceIcon,
    IconActive: ExerciceActiveIcon,
    tag: Icons.Exercises
  },
  {
    Icon: HomeIcon,
    IconActive: HomeActiveIcon,
    tag: Icons.Home
  },
  {
    Icon: QrCodeIcon,
    IconActive: QrCodeActiveIcon,
    tag: Icons.Scan
  },
  {
    Icon: UserIcon,
    IconActive: UserActiveIcon,
    tag: Icons.Profile
  }
]
