import type { TimelineItemProps } from 'components/molecules/TimelineItem/types'

export type MinAndMaxDates = {
  min: string
  max: string
}

export type TimelineItem<T extends string | Date = string> = {
  start: T
  end: T
  name: string
  id: number
  color: TimelineItemProps['color']
}
