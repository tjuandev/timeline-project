import { getItemRangeFormatted } from 'pages/Dashboard/helpers'

import { TimelineItem } from 'components/molecules/TimelineItem'

import { S } from '../styles'

import { type LanesProps } from '../types'

export const Lanes = ({ lanes, weekIntervalDays }: LanesProps) => {
  return (
    <div className={S.lanesContainer}>
      {lanes.map(lane =>
        lane.map(item => {
          const laneColumnStart = weekIntervalDays.findIndex(
            day => day.toDateString() === new Date(item.start).toDateString()
          )
          const laneColumnEnd = weekIntervalDays.findIndex(
            day => day.toDateString() === new Date(item.end).toDateString()
          )

          const hasStartedOnPreviousWeek = laneColumnStart === -1
          const hasContinuityOnNextWeek = laneColumnEnd === -1

          return (
            <div
              className={S.laneItem(
                hasStartedOnPreviousWeek,
                hasContinuityOnNextWeek
              )}
              key={item.id}
              style={{
                gridColumnStart: hasStartedOnPreviousWeek
                  ? 1
                  : laneColumnStart + 1,
                gridColumnEnd: hasContinuityOnNextWeek ? 8 : laneColumnEnd + 2
              }}
            >
              <TimelineItem
                name={item.name}
                dateRange={getItemRangeFormatted(item.start, item.end)}
                color={item.color}
                continuityTo={(() => {
                  if (hasContinuityOnNextWeek && hasStartedOnPreviousWeek)
                    return 'both'
                  if (hasContinuityOnNextWeek) return 'right'
                  if (hasStartedOnPreviousWeek) return 'left'
                  return undefined
                })()}
              />
            </div>
          )
        })
      )}
    </div>
  )
}
