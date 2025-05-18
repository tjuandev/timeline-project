import { format } from 'date-fns'

import { COLUMNS_AND_ITEM_DATE_FORMAT } from '../constants'

import { S } from '../styles'

import { type HeaderProps } from '../types'

export const Header = ({ weekIntervalDays }: HeaderProps) => {
  return (
    <div className={S.header}>
      {weekIntervalDays.map(day => (
        <div key={day.toISOString()} className={S.weekDay}>
          {format(day, COLUMNS_AND_ITEM_DATE_FORMAT)}
        </div>
      ))}
    </div>
  )
}
