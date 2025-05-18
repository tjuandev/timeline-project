import { Timeline } from 'components/organisms/Timeline'

import { useTimeline } from './hooks/useTimeline'

export const Dashboard = () => {
  const { timelineItems, date, onContinuityClick } = useTimeline()

  return (
    <div>
      <Timeline
        date={date}
        items={timelineItems}
        onEditItem={() => {}}
        onClickContinuity={onContinuityClick}
      />
    </div>
  )
}
