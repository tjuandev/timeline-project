import type { TimelineItemProps } from 'components/molecules/TimelineItem/types'

export type TimelineItem = {
  start: Date
  end: Date
  name: string
  id: number
  color: TimelineItemProps['color']
}

export type HeaderProps = {
  weekIntervalDays: Date[]
}

export type TimelineProps = {
  date: Date
  items: TimelineItem[]
}
