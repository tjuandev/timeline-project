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
              const laneColumnStart = weekIntervalDays.findIndex(
                day =>
                  day.toDateString() === new Date(item.start).toDateString()
              )
              const laneColumnEnd = weekIntervalDays.findIndex(
                day => day.toDateString() === new Date(item.end).toDateString()
              )

              const isEndingInCurrentWeek = laneColumnEnd !== -1
              const isStartingInCurrentWeek = laneColumnStart !== -1

              return (
                <div
                  className={S.laneItem(
                    isEndingInCurrentWeek,
                    isStartingInCurrentWeek
                  )}
                  key={item.id}
                  style={{
                    gridColumnStart: isStartingInCurrentWeek
                      ? laneColumnStart + 1
                      : 1,
                    gridColumnEnd: isEndingInCurrentWeek ? laneColumnEnd + 1 : 8
                  }}
                >
                  <TimelineItem
                    name={item.name}
                    dateRange={getItemRangeFormatted(item.start, item.end)}
                    color={item.color}
                    endingPos={(() => {
                      if (isEndingInCurrentWeek) return 'right'
                      if (isStartingInCurrentWeek) return 'left'
                      return undefined
                    })()}
                  />
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}
