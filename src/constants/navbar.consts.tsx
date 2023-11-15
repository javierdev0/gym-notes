import type { IconProps } from '@/types/icon.props'

import {
  ExerciceActiveIcon,
  ExerciceIcon,
  HomeActiveIcon,
  HomeIcon,
  QrCodeActiveIcon,
  QrCodeIcon,
  UserActiveIcon,
  UserIcon
} from '@public/icons'
import { Icons } from '@/enums/icons.enum'
import { Routes } from '@/enums/routes.enum'

export const NAVBAR_CONTENT: IconProps[] = [
  {
    Icon: ExerciceIcon,
    IconActive: ExerciceActiveIcon,
    tag: Icons.Exercises,
    route: Routes.Exercises
  },
  {
    Icon: HomeIcon,
    IconActive: HomeActiveIcon,
    tag: Icons.Home,
    route: Routes.Home
  },
  {
    Icon: QrCodeIcon,
    IconActive: QrCodeActiveIcon,
    tag: Icons.Scan,
    route: Routes.Scan
  },
  {
    Icon: UserIcon,
    IconActive: UserActiveIcon,
    tag: Icons.Profile,
    route: Routes.Profile
  }
]
