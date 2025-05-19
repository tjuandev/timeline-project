import { useMemo } from 'react'

import { areIntervalsOverlapping } from 'date-fns'

import { type LaneItem, type UseTimelineItemsProps } from '../types'

const MINIMUM_LANES = 8

export const useGenerateLanes = ({
  items,
  weekInterval,
  weekIntervalDays
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

  const generateLanes = (): LaneItem[][] => {
    const lanes: LaneItem[][] = []
    for (const item of filteredItemsByWeekInterval) {
      let placed = false

      const columnStart = weekIntervalDays.findIndex(
        day => day.toDateString() === new Date(item.start).toDateString()
      )
      const columnEnd = weekIntervalDays.findIndex(
        day => day.toDateString() === new Date(item.end).toDateString()
      )

      const continuityTo = (() => {
        if (columnStart === -1 && columnEnd === -1) return 'both'
        if (columnStart === -1) return 'left'
        if (columnEnd === -1) return 'right'
        return null
      })()

      const laneItem: LaneItem = {
        ...item,
        columnStart: columnStart === -1 ? 1 : columnStart + 1,
        columnEnd: columnEnd === -1 ? 8 : columnEnd + 2,
        continuityTo
      }

      for (const lane of lanes) {
        const last = lane[lane.length - 1]

        if (new Date(item.start) > new Date(last?.end ?? '')) {
          lane.push(laneItem)
          placed = true
          break
        }
      }

      if (!placed) {
        lanes.push([laneItem])
      }
    }

    while (lanes.length < MINIMUM_LANES) {
      lanes.push([])
    }

    return lanes
  }

  const lanes = generateLanes()

  return {
    lanes
  }
}
