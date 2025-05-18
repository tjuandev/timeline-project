import { useState } from 'react'

import { addDays } from 'date-fns'

import type { OnClickContinuity } from 'components/molecules/TimelineItem/types'

export const usePaginateTimeline = (initialDate: Date) => {
  const [currentPage, setCurrentPage] = useState(1)

  const onClickContinuity: OnClickContinuity = pos => {
    if (pos === 'left') {
      setCurrentPage(currentPage - 1)
      return
    }

    setCurrentPage(currentPage + 1)
  }

  const date = addDays(new Date(initialDate), (currentPage - 1) * 7)

  return {
    currentPage,
    date,
    onClickContinuity
  }
}
