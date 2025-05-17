import { format, getYear, type EachDayOfIntervalResult } from 'date-fns'

export const getWeekRangeFormatted = (
  interval: EachDayOfIntervalResult<
    {
      start: Date
      end: Date
    },
    undefined
  >
) => {
  const firstDay = interval[0]
  const lastDay = interval[interval.length - 1]

  if (!firstDay || !lastDay) return ''

  return `${format(firstDay, getYear(firstDay) !== getYear(lastDay) ? 'MMM d, yyyy' : 'MMM d')} - ${format(lastDay, 'MMM d, yyyy')}`
}

export const getItemRangeFormatted = (start: string, end: string) => {
  return `${format(start, 'EEE d')} - ${format(end, 'EEE d')}`
}
