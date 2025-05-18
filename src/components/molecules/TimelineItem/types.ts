import type { VariantProps } from 'class-variance-authority'

import type { S } from './styles'

type MainButtonVariants = VariantProps<typeof S.mainButtonContainer>

type Position = 'left' | 'right'
export type OnContinuityClick = (position: Position) => void

export interface TimelineItemProps {
  name: string
  dateRange: string
  color?: MainButtonVariants['color']
  continuityTo?: MainButtonVariants['continuityTo']
  onContinuityClick?: OnContinuityClick
}

export type ContinuityBtnProps = VariantProps<typeof S.continuityBtn> & {
  position: Position
  onContinuityClick?: TimelineItemProps['onContinuityClick']
}
