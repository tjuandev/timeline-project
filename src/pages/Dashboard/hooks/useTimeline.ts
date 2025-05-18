import { useState } from 'react'

import { addDays } from 'date-fns'

import type { OnClickContinuity } from 'components/molecules/TimelineItem/types'
import type { TimelineProps } from 'components/organisms/Timeline/types'

import { TIMELINE_ITEMS_MOCK } from '../mocks'

export const useTimeline = () => {
  const [timelineItems, setTimelineItems] = useState(TIMELINE_ITEMS_MOCK)

  const [currentPage, setCurrentPage] = useState(1)

  const onContinuityClick: OnClickContinuity = pos => {
    if (pos === 'left') {
      setCurrentPage(currentPage - 1)
      return
    }

    setCurrentPage(currentPage + 1)
  }

  const date = addDays(
    new Date(timelineItems?.[0]?.start || ''),
    (currentPage - 1) * 7
  )

  const onEditItem: TimelineProps['onEditItem'] = (item, values) => {
    setTimelineItems(prev =>
      prev.map(i => (i.id === item.id ? { ...i, ...values } : i))
    )
  }

  return {
    timelineItems,
    date,
    onContinuityClick,
    onEditItem
  }
}
