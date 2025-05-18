import { getItemRangeFormatted } from 'pages/Dashboard/helpers'

import { TimelineItem } from 'components/molecules/TimelineItem'

import { S } from '../styles'

import { type LanesProps } from '../types'
import { ItemPopoverContent } from './ItemPopoverContent'

export const Lanes = ({ lanes, onEditItem, onClickContinuity }: LanesProps) => {
  return (
    <div className={S.lanesContainer}>
      {lanes.map(lane =>
        lane.map(item => {
          const { columnStart, columnEnd, continuityTo } = item

          const hasStartedOnPreviousWeek = ['left', 'both'].includes(
            continuityTo ?? ''
          )
          const hasContinuityOnNextWeek = ['right', 'both'].includes(
            continuityTo ?? ''
          )

          return (
            <div
              className={S.laneItem(
                hasStartedOnPreviousWeek,
                hasContinuityOnNextWeek
              )}
              key={item.id}
              style={{
                gridColumnStart: columnStart,
                gridColumnEnd: columnEnd
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
                onClickContinuity={position => {
                  onClickContinuity?.(position)
                }}
                popoverContent={
                  <ItemPopoverContent
                    name={item.name}
                    dateRange={getItemRangeFormatted(item.start, item.end)}
                    onEditName={name => {
                      onEditItem(item, { name })
                    }}
                  />
                }
              />
            </div>
          )
        })
      )}
    </div>
  )
}
