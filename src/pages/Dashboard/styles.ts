import clsx from 'clsx'

const COLUMNS_GRID = 'grid-cols-7'

export const S = {
  columnsContainer: clsx('grid', COLUMNS_GRID),
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
  lanesContainer: clsx('grid', COLUMNS_GRID, 'gap-y-4', 'gap-x-3', 'p-[12px]'),
  laneItem: (
    hasContinuityOnNextWeek: boolean,
    hasStartedOnPreviousWeek: boolean
  ) =>
    clsx({
      'ml-[-12px]': hasContinuityOnNextWeek,
      'mr-[-12px]': hasStartedOnPreviousWeek
    })
}
