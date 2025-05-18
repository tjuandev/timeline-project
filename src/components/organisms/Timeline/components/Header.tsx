import { Button } from 'components/atoms/Button'
import { Paginator } from 'components/molecules/Paginator'

import { S } from '../styles'

import { getWeekRangeFormatted } from '../helpers'
import { type HeaderProps } from '../types'

export const Header = ({
  weekIntervalDays,
  onPreviousClick,
  onNextClick,
  onTodayClick,
  isToday
}: HeaderProps) => {
  return (
    <div className={S.header}>
      <h2 className={S.headerTitle}>
        {getWeekRangeFormatted(weekIntervalDays)}
      </h2>
      <div className={S.headerButtons}>
        <Button variant="outline" onClick={onTodayClick} disabled={isToday}>
          Today
        </Button>
        <Paginator
          onPreviousClick={onPreviousClick}
          onNextClick={onNextClick}
        />
      </div>
    </div>
  )
}
