import type { VariantProps } from 'class-variance-authority'

import type { S } from './styles'

type MainButtonVariants = VariantProps<typeof S.mainButtonContainer>

type Position = 'left' | 'right'
export type OnClickContinuity = (position: Position) => void

export interface TimelineItemProps {
  name: string
  dateRange: string
  color?: MainButtonVariants['color']
  continuityTo?: MainButtonVariants['continuityTo']
  onClickContinuity?: OnClickContinuity
  popoverContent?: React.ReactNode
}

export type ContinuityBtnProps = VariantProps<typeof S.continuityBtn> & {
  position: Position
  onClickContinuity?: TimelineItemProps['onClickContinuity']
}
