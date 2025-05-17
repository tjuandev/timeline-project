import {
  eachDayOfInterval,
  endOfWeek,
  isWithinInterval,
  startOfWeek
} from 'date-fns'

import { TIMELINE_ITEMS } from '../constants'

import type { TimelineItem } from '../types'

export const useTimeline = () => {
  const itemsSortedByStartDate = TIMELINE_ITEMS.sort(
    (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime()
  )

  const startDay = itemsSortedByStartDate[0]?.start ?? ''

  const firstWeekInterval = {
    start: startOfWeek(new Date(startDay)),
    end: endOfWeek(new Date(startDay))
  }

  const weekIntervalDays = eachDayOfInterval(firstWeekInterval)

  const filteredItemsByWeekInterval = itemsSortedByStartDate.filter(item => {
    const itemStart = new Date(item.start)
    return isWithinInterval(itemStart, firstWeekInterval)
  })

  const generateTimelineLanes = (): TimelineItem[][] => {
    const lanes: TimelineItem[][] = []
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
    weekIntervalDays
  }
}
