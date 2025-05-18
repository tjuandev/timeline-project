import type { TimelineItemProps } from 'components/molecules/TimelineItem/types'

export type TimelineItem<T extends string | Date = string> = {
  start: T
  end: T
  name: string
  id: number
  color: TimelineItemProps['color']
}

type WeekIntervalDays = Date[]

export type HeaderProps = {
  weekIntervalDays: WeekIntervalDays
}

export type TimelineProps = {
  date: Date
  items: TimelineItem[]
  onEditItem: (item: LaneItem, values: Pick<TimelineItem, 'name'>) => void
} & Pick<TimelineItemProps, 'onClickContinuity'>

export type UseTimelineItemsProps = {
  weekInterval: {
    start: Date
    end: Date
  }
  weekIntervalDays: WeekIntervalDays
  items: TimelineItem[]
}

export type LanesProps = {
  lanes: LaneItem[][]
} & Pick<TimelineProps, 'onClickContinuity' | 'onEditItem'>

export type ItemPopoverProps = {
  name: string
  dateRange: string
  onEditName: (name: string) => void
}

export type LaneItem = TimelineItem<Date> & {
  columnStart: number
  columnEnd: number
  continuityTo: TimelineItemProps['continuityTo']
}
