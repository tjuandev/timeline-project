import { TIMELINE_ITEMS } from './constants'

type MinAndMaxDates = {
  min: string
  max: string
}

export const Dashboard = () => {
  const minAndMaxDates = (
    TIMELINE_ITEMS as Array<{ start: string; end: string }>
  ).reduce<MinAndMaxDates>(
    (acc, item) => {
      return {
        min: item.start < acc.min ? item.start : acc.min,
        max: item.end > acc.max ? item.end : acc.max
      }
    },
    {
      min: TIMELINE_ITEMS[0]?.start ?? '',
      max: TIMELINE_ITEMS[0]?.end ?? ''
    }
  )

  return (
    <div>
      <h1>
        Dashboard {minAndMaxDates.min} {minAndMaxDates.max}
      </h1>
    </div>
  )
}
