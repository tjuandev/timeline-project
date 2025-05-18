import { Button } from 'components/atoms/Button'

import { S } from './styles'

import { type TimelineItemProps } from './types'

export const TimelineItem = ({
  name,
  dateRange,
  color,
  continuityTo
}: TimelineItemProps) => {
  return (
    <Button className={S.container({ color, continuityTo })}>
      <span className={S.name} title={name}>
        {name}
      </span>
      <small className={S.dateRange}>{dateRange}</small>
    </Button>
  )
}
