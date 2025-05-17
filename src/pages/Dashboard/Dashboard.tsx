import { format } from 'date-fns'

import { TimelineItem } from 'components/molecules/TimelineItem'

import { COLUMNS_AND_ITEM_DATE_FORMAT } from './constants'

import { useTimeline } from './hooks/useTimeline'

import { S } from './styles'

import { getItemRangeFormatted, getWeekRangeFormatted } from './helpers'

export const Dashboard = () => {
  const { lanes, weekIntervalDays } = useTimeline()

  return (
    <div>
      <h1>{getWeekRangeFormatted(weekIntervalDays)}</h1>
      <div className={S.columnsContainer}>
        {weekIntervalDays.map(day => (
          <div key={day.toISOString()} className={S.column}>
            {format(day, COLUMNS_AND_ITEM_DATE_FORMAT)}
          </div>
        ))}
      </div>
      <div className={S.lanesContainer}>
        {lanes.map((lane, li) => (
          <div key={li} className={S.lane}>
            {lane.map(item => {
              return (
                <TimelineItem
                  key={item.id}
                  name={item.name}
                  dateRange={getItemRangeFormatted(item.start, item.end)}
                  color="green"
                />
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}
