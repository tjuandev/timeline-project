import { useMemo } from 'react'

import { eachDayOfInterval, endOfWeek, startOfWeek } from 'date-fns'

import { useGenerateLanes } from './hooks/useGenerateLanes'
import { usePaginateTimeline } from './hooks/usePaginateTimeline'

import { Header } from './components/Header'
import { Lanes } from './components/Lanes'
import { WeekHeader } from './components/WeekHeader'
import { type TimelineProps } from './types'

export const Timeline = ({ initialDate, items, onEditItem }: TimelineProps) => {
  const {
    date,
    onClickContinuity,
    onPreviousClick,
    onNextClick,
    onTodayClick,
    isToday
  } = usePaginateTimeline(initialDate)

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
      <Header
        weekIntervalDays={weekIntervalDays}
        onPreviousClick={onPreviousClick}
        onNextClick={onNextClick}
        onTodayClick={onTodayClick}
        isToday={isToday}
      />
      <div>
        <WeekHeader weekIntervalDays={weekIntervalDays} />
        <Lanes
          lanes={lanes}
          onEditItem={onEditItem}
          onClickContinuity={onClickContinuity}
        />
      </div>
    </div>
  )
}
