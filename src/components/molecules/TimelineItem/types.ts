import type { VariantProps } from 'class-variance-authority'

import type { S } from './styles'

export interface TimelineItemProps {
  name: string
  dateRange: string
  color?: VariantProps<typeof S.container>['color']
  endingPos?: VariantProps<typeof S.container>['endingPos']
}
