import { Button } from 'components/atoms/Button'

import { S } from './styles'

import { type TimelineItemProps } from './types'

export const TimelineItem = ({ name, dateRange }: TimelineItemProps) => {
  return (
    <Button className={S.container}>
      <span className={S.name}>{name}</span>
      <small className={S.dateRange}>{dateRange}</small>
    </Button>
  )
}
