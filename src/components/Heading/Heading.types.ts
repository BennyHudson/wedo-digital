import type { ReactNode } from 'react'

import type { HeadingKeys } from '@themes/wedoTheme/constants/typography.types'

export interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5
  size?: HeadingKeys
  noMargin?: boolean
  inverse?: boolean
  weight?: 1 | 2 | 3
  children: ReactNode
}
