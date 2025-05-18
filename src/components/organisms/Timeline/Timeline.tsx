import { eachDayOfInterval, endOfWeek, startOfWeek } from 'date-fns'

import { Header } from './components/Header'
import { type TimelineProps } from './types'

export const Timeline = ({ date, items }: TimelineProps) => {
  const weekIntervalDays = eachDayOfInterval({
    start: startOfWeek(date),
    end: endOfWeek(date)
  })

  return <Header weekIntervalDays={weekIntervalDays} />
}
