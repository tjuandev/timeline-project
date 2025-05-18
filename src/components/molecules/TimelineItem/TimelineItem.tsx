import { ChevronRightIcon } from 'lucide-react'

import { Button } from 'components/atoms/Button'

import { S } from './styles'

import { PopoverTrigger } from '../Popover'
import { type ContinuityBtnProps, type TimelineItemProps } from './types'

const ContinuityButton = ({
  color,
  position,
  onContinuityClick
}: ContinuityBtnProps) => {
  return (
    <Button
      className={S.continuityBtn({ color, reverse: position === 'left' })}
      onClick={() => {
        onContinuityClick?.(position)
      }}
    >
      <ChevronRightIcon className={S.continuityButtonIcon} />
    </Button>
  )
}

export const TimelineItem = ({
  name,
  dateRange,
  color,
  continuityTo,
  onContinuityClick
}: TimelineItemProps) => {
  return (
    <div className={S.container}>
      {['left', 'both'].includes(continuityTo ?? '') && (
        <ContinuityButton
          color={color}
          position="left"
          onContinuityClick={onContinuityClick}
        />
      )}

      <PopoverTrigger asChild>
        <Button className={S.mainButtonContainer({ color, continuityTo })}>
          <span className={S.name} title={name}>
            {name}
          </span>
          <small className={S.dateRange}>{dateRange}</small>
        </Button>
      </PopoverTrigger>

      {['right', 'both'].includes(continuityTo ?? '') && (
        <ContinuityButton
          color={color}
          position="right"
          onContinuityClick={onContinuityClick}
        />
      )}
    </div>
  )
}
