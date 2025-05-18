import { useRef, useState } from 'react'

import { PopoverClose } from '@radix-ui/react-popover'
import clsx from 'clsx'
import { format } from 'date-fns'
import { Check, Pencil, X } from 'lucide-react'

import { Button } from 'components/atoms/Button'
import { Input } from 'components/atoms/Input'
import { Paginator } from 'components/molecules/Paginator'
import { PopoverContent, Popover } from 'components/molecules/Popover'
import { TimelineItem } from 'components/molecules/TimelineItem'
import { Timeline } from 'components/organisms/Timeline'

import { COLUMNS_AND_ITEM_DATE_FORMAT } from './constants'

import { useTimeline } from './hooks/useTimeline'

import { S } from './styles'

import { getItemRangeFormatted, getWeekRangeFormatted } from './helpers'

export const Dashboard = () => {
  const {
    lanes,
    weekIntervalDays,
    onPreviousClick,
    onNextClick,
    onContinuityClick,
    onEditItem,
    timelineItems
  } = useTimeline()

  const [isEditing, setIsEditing] = useState(false)

  const editInputRef = useRef<HTMLInputElement>(null)

  return (
    <div>
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
                <Popover>
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
                    onContinuityClick={onContinuityClick}
                  />
                  <PopoverContent side="bottom" align="start">
                    <div className={S.popoverContent}>
                      <div className={S.popoverHeader}>
                        <h4 className={S.popoverTitle}>
                          {isEditing ? (
                            <Input
                              placeholder={item.name}
                              ref={editInputRef}
                              className="h-[28px]"
                              onBlur={() => {
                                setIsEditing(false)
                              }}
                            />
                          ) : (
                            item.name
                          )}
                        </h4>
                        <Button
                          className={isEditing ? '' : 'edit-button'}
                          variant="ghost"
                          size="icon"
                          onClick={() => {
                            setIsEditing(prev => !prev)
                            onEditItem(
                              item,
                              editInputRef.current?.value
                                ? editInputRef.current?.value
                                : item.name
                            )
                            if (!isEditing) {
                              setTimeout(() => {
                                editInputRef.current?.focus()
                              }, 0)
                            }
                          }}
                        >
                          {isEditing ? <Check /> : <Pencil />}
                        </Button>
                      </div>
                      <p className={S.popoverDateRange}>
                        {getItemRangeFormatted(item.start, item.end)}
                      </p>
                    </div>
                    <PopoverClose asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className={S.popoverClose}
                      >
                        <X />
                      </Button>
                    </PopoverClose>
                  </PopoverContent>
                </Popover>
              </div>
            )
          })
        )}
      </div>
      <Timeline
        date={timelineItems?.[0]?.start ?? new Date()}
        items={timelineItems}
      />
    </div>
  )
}
