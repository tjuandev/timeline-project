import { useMemo } from 'react'

import { areIntervalsOverlapping } from 'date-fns'

import { type TimelineItem, type UseTimelineItemsProps } from '../types'

export const useGenerateLanes = ({
  items,
  weekInterval
}: UseTimelineItemsProps) => {
  const filteredItemsByWeekInterval = useMemo(() => {
    return items
      .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())
      .map(item => ({
        ...item,
        start: new Date(item.start),
        end: new Date(item.end)
      }))
      .filter(({ start, end }) => {
        return areIntervalsOverlapping(weekInterval, { start, end })
      })
  }, [items, weekInterval])

  const generateLanes = (): Array<Array<TimelineItem<Date>>> => {
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

  const lanes = generateLanes()

  return {
    lanes
  }
}
