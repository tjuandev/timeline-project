import { useMemo, useState } from 'react'

import {
  addDays,
  areIntervalsOverlapping,
  eachDayOfInterval,
  endOfWeek,
  startOfWeek
} from 'date-fns'

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

  const onPreviousClick = () => {
    setCurrentPage(currentPage - 1)
  }

  const onNextClick = () => {
    setCurrentPage(currentPage + 1)
  }

  const startDay = itemsSortedByStartDate[0]?.start ?? ''

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
      itemsSortedByStartDate.filter(({ start, end }) => {
        return areIntervalsOverlapping(weekInterval, { start, end })
      }),
    [weekInterval]
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
    onNextClick
  }
}
