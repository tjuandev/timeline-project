import { useMemo } from 'react'

import { eachDayOfInterval, endOfWeek, startOfWeek } from 'date-fns'

import { useGenerateLanes } from './hooks/useGenerateLanes'

import { Lanes } from './components/Lanes'
import { WeekHeader } from './components/WeekHeader'
import { type TimelineProps } from './types'

export const Timeline = ({
  date,
  items,
  onEditItem,
  onClickContinuity
}: TimelineProps) => {
  const weekInterval = useMemo(
    () => ({
      start: startOfWeek(date),
      end: endOfWeek(date)
    }),
    [date]
  )

  const weekIntervalDays = eachDayOfInterval(weekInterval)

  const { lanes } = useGenerateLanes({
    weekInterval,
    items,
    weekIntervalDays
  })

  return (
    <div>
      <WeekHeader weekIntervalDays={weekIntervalDays} />
      <Lanes
        lanes={lanes}
        onEditItem={onEditItem}
        onClickContinuity={onClickContinuity}
      />
    </div>
  )
}
