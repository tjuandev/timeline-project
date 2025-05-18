import { useState } from 'react'

import { addDays } from 'date-fns'

import type { OnClickContinuity } from 'components/molecules/TimelineItem/types'

export const usePaginateTimeline = (initialDate: Date) => {
  const [currentPage, setCurrentPage] = useState(1)

  const onTodayClick = () => {
    setCurrentPage(1)
  }

  const onPreviousClick = () => {
    setCurrentPage(currentPage - 1)
  }
  const onNextClick = () => {
    setCurrentPage(currentPage + 1)
  }

  const onClickContinuity: OnClickContinuity = pos => {
    if (pos === 'left') {
      onPreviousClick()
      return
    }

    onNextClick()
  }

  const date = addDays(new Date(initialDate), (currentPage - 1) * 7)

  const isToday = currentPage === 1

  return {
    currentPage,
    date,
    onClickContinuity,
    onPreviousClick,
    onNextClick,
    onTodayClick,
    isToday
  }
}
