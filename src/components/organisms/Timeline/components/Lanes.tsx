import { TimelineItem } from 'components/molecules/TimelineItem'

import { S } from '../styles'

import { getItemRangeFormatted } from '../helpers'
import { type LanesProps } from '../types'
import { ItemPopoverContent } from './ItemPopoverContent'

export const Lanes = ({ lanes, onEditItem, onClickContinuity }: LanesProps) => {
  return lanes.map((lane, index) => (
    <div className={S.laneContainer} key={index}>
      {lane.map(item => {
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
              hasContinuityOnNextWeek,
              hasStartedOnPreviousWeek,
              hasContinuityOnNextWeek && hasStartedOnPreviousWeek
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
              continuityTo={continuityTo}
              onClickContinuity={position => {
                onClickContinuity?.(position)
              }}
              popoverContent={
                <ItemPopoverContent
                  name={item.name}
                  dateRange={getItemRangeFormatted(
                    item.start,
                    item.end,
                    'MMM d, yyyy'
                  )}
                  onEditName={name => {
                    onEditItem(item, { name })
                  }}
                />
              }
            />
          </div>
        )
      })}
    </div>
  ))
}
