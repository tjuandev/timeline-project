import { useMemo, useState } from 'react'

import {
  addDays,
  areIntervalsOverlapping,
  eachDayOfInterval,
  endOfWeek,
  startOfWeek
} from 'date-fns'

import type { OnContinuityClick } from 'components/molecules/TimelineItem/types'

import { TIMELINE_ITEMS } from '../constants'

import type { TimelineItem } from '../types'

const itemsSortedByStartDate = TIMELINE_ITEMS.sort(
  (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime()
).map(item => ({
  ...item,
  start: new Date(item.start),
  end: new Date(item.end)
}))

export const useTimeline = () => {
  // NOTE -> Pagination logic maybe move to a separate hook
  const [currentPage, setCurrentPage] = useState(1)
  const [timelineItems, setTimelineItems] = useState(itemsSortedByStartDate)

  const onEditItem = (item: TimelineItem<Date>, name: string) => {
    setTimelineItems(prev =>
      prev.map(i => (i.id === item.id ? { ...i, name } : i))
    )
  }

  const onPreviousClick = () => {
    setCurrentPage(currentPage - 1)
  }

  const onNextClick = () => {
    setCurrentPage(currentPage + 1)
  }

  const onContinuityClick: OnContinuityClick = pos => {
    if (pos === 'left') {
      setCurrentPage(currentPage - 1)
      return
    }

    setCurrentPage(currentPage + 1)
  }

  const startDay = timelineItems[0]?.start ?? ''

  const weekInterval = useMemo(
    () => ({
      start: startOfWeek(addDays(startDay, (currentPage - 1) * 7)),
      end: endOfWeek(addDays(startDay, (currentPage - 1) * 7))
    }),
    [currentPage, startDay]
  )

  const weekIntervalDays = eachDayOfInterval(weekInterval)

  const filteredItemsByWeekInterval = useMemo(
    () =>
      timelineItems.filter(({ start, end }) => {
        return areIntervalsOverlapping(weekInterval, { start, end })
      }),
    [weekInterval, timelineItems]
  )

  const generateTimelineLanes = (): Array<Array<TimelineItem<Date>>> => {
    const lanes: Array<Array<TimelineItem<Date>>> = []
    for (const item of filteredItemsByWeekInterval) {
      let placed = false

      for (const lane of lanes) {
        const last = lane[lane.length - 1]

        if (new Date(item.start) > new Date(last?.end ?? '')) {
          lane.push(item)
          placed = true
          break
        }
      }

      if (!placed) {
        lanes.push([item])
      }
    }

    return lanes
  }

  const lanes = generateTimelineLanes()

  return {
    lanes,
    weekIntervalDays,
    onPreviousClick,
    onNextClick,
    onContinuityClick,
    onEditItem,
    timelineItems
  }
}
