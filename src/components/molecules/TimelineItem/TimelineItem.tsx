import { Button } from 'components/atoms/Button'

import { S } from './styles'

import { type TimelineItemProps } from './types'

export const TimelineItem = ({
  name,
  dateRange,
  color,
  endingPos
}: TimelineItemProps) => {
  return (
    <Button className={S.container({ color, endingPos })}>
      <span className={S.name}>{name}</span>
      <small className={S.dateRange}>{dateRange}</small>
    </Button>
  )
}
