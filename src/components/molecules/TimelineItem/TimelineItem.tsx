import { ChevronRightIcon } from 'lucide-react'

import { Button } from 'components/atoms/Button'

import { S } from './styles'

import { Popover, PopoverContent, PopoverTrigger } from '../Popover'
import { type ContinuityBtnProps, type TimelineItemProps } from './types'

const ContinuityButton = ({
  color,
  position,
  onClickContinuity
}: ContinuityBtnProps) => {
  return (
    <Button
      className={S.continuityBtn({ color, reverse: position === 'left' })}
      onClick={() => {
        onClickContinuity?.(position)
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
  onClickContinuity,
  popoverContent
}: TimelineItemProps) => {
  return (
    <Popover>
      <div className={S.container}>
        {['left', 'both'].includes(continuityTo ?? '') && (
          <ContinuityButton
            color={color}
            position="left"
            onClickContinuity={onClickContinuity}
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
            onClickContinuity={onClickContinuity}
          />
        )}
      </div>
      <PopoverContent align="start">{popoverContent}</PopoverContent>
    </Popover>
  )
}
