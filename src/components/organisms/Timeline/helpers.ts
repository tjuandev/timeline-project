import { format, getYear, type EachDayOfIntervalResult } from 'date-fns'

import { COLUMNS_AND_ITEM_DATE_FORMAT } from './constants'

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

export const getItemRangeFormatted = (start: Date, end: Date) => {
  return `${format(start, COLUMNS_AND_ITEM_DATE_FORMAT)} - ${format(end, COLUMNS_AND_ITEM_DATE_FORMAT)}`
}
