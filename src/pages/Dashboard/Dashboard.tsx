import { format } from 'date-fns'

import { useTimeline } from './hooks/useTimeline'

import { S } from './styles'

import { getWeekRangeFormatted } from './helpers'

export const Dashboard = () => {
  const { lanes, weekIntervalDays } = useTimeline()

  return (
    <div>
      <h1>{getWeekRangeFormatted(weekIntervalDays)}</h1>
      <div className={S.columnsContainer}>
        {weekIntervalDays.map(day => (
          <div key={day.toISOString()} className={S.column}>
            {format(day, 'EEE d')}
          </div>
        ))}
      </div>
      <div className={S.lanesContainer}>
        {lanes.map((lane, li) => (
          <div key={li} className={S.lane}>
            {lane.map(item => {
              return (
                <div key={item.id}>
                  {item.name} / {item.start} / {item.end}
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}
