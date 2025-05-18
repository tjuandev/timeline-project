import clsx from 'clsx'
import { format } from 'date-fns'

import { Paginator } from 'components/molecules/Paginator'
import { TimelineItem } from 'components/molecules/TimelineItem'

import { COLUMNS_AND_ITEM_DATE_FORMAT } from './constants'

import { useTimeline } from './hooks/useTimeline'

import { S } from './styles'

import { getItemRangeFormatted, getWeekRangeFormatted } from './helpers'

export const Dashboard = () => {
  const { lanes, weekIntervalDays, onPreviousClick, onNextClick } =
    useTimeline()

  return (
    <div className={S.container}>
      <div className={clsx('flex', 'items-center', 'justify-between')}>
        <h1>{getWeekRangeFormatted(weekIntervalDays)}</h1>
        <Paginator
          onPreviousClick={onPreviousClick}
          onNextClick={onNextClick}
        />
      </div>
      <div className={S.columnsContainer}>
        {weekIntervalDays.map(day => (
          <div key={day.toISOString()} className={S.column}>
            {format(day, COLUMNS_AND_ITEM_DATE_FORMAT)}
          </div>
        ))}
      </div>
      <div
        className={S.lanesContainer}
        style={{
          gridTemplateRows: `repeat(${lanes.length}, 1fr)`
        }}
      >
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
                  endingPos={(() => {
                    if (hasContinuityOnNextWeek && hasStartedOnPreviousWeek)
                      return 'center'
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
    </div>
  )
}
