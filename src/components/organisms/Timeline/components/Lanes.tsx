import { S } from '../styles'

import { type LanesProps } from '../types'

export const Lanes = ({ lanes, weekIntervalDays }: LanesProps) => {
  return lanes.map(lane =>
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
        >
          {item.name}
        </div>
      )
    })
  )
}
