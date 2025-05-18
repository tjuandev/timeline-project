import clsx from 'clsx'

export const S = {
  columnsContainer: clsx('grid', 'grid-cols-7'),
  column: clsx(
    'text-gray-400',
    'font-medium',
    'border',
    'border-gray-200',
    'bg-gray-100',
    'py-2',
    'text-center',
    'text-sm'
  ),
  lanesContainer: clsx('space-y-2'),
  lane: clsx('grid', 'h-10', 'grid-cols-7', 'gap-1'),
  laneItem: (
    hasContinuityOnNextWeek: boolean,
    hasStartedOnPreviousWeek: boolean
  ) =>
    clsx('p-2', {
      'pr-0': hasContinuityOnNextWeek,
      'pl-0': hasStartedOnPreviousWeek
    })
}
