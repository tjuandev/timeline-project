import type { VariantProps } from 'class-variance-authority'

import type { S } from './styles'

export interface TimelineItemProps {
  name: string
  dateRange: string
  color?: VariantProps<typeof S.container>['color']
  continuityTo?: VariantProps<typeof S.container>['continuityTo']
}
