import { useMemo } from 'react'

import { eachDayOfInterval, endOfWeek, startOfWeek } from 'date-fns'

import { useGenerateLanes } from './hooks/useGenerateLanes'

import { Header } from './components/Header'
import { Lanes } from './components/Lanes'
import { type TimelineProps } from './types'

export const Timeline = ({ date, items }: TimelineProps) => {
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
      <Header weekIntervalDays={weekIntervalDays} />
      <Lanes lanes={lanes} />
    </div>
  )
}
