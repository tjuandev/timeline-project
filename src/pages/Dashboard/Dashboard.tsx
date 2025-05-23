import { useState } from 'react'

import { Timeline } from 'components/organisms/Timeline'
import type { TimelineProps } from 'components/organisms/Timeline/types'

import { S } from './styles'

import { TIMELINE_ITEMS_MOCK } from './mocks'

export const Dashboard = () => {
  const [timelineItems, setTimelineItems] = useState(TIMELINE_ITEMS_MOCK)

  const onEditItem: TimelineProps['onEditItem'] = (item, values) => {
    setTimelineItems(prev =>
      prev.map(i => (i.id === item.id ? { ...i, ...values } : i))
    )
  }

  return (
    <div className={S.container}>
      <div className={S.timelineContainer}>
        <Timeline
          initialDate={new Date()}
          items={timelineItems}
          onEditItem={onEditItem}
        />
      </div>
    </div>
  )
}
