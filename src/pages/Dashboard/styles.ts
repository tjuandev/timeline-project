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
    }),
  popoverClose: clsx(
    'absolute',
    'top-[10px]',
    'right-[10px]',
    'p-2',
    'text-gray-400',
    'hover:text-gray-800'
  ),
  popoverContent: clsx('flex', 'flex-col'),
  popoverHeader: clsx(
    'flex',
    'items-center',
    'gap-1',
    '[&:hover_.edit-button]:opacity-100',
    '[&_.edit-button]:opacity-0',
    '[&_.edit-button]:transition-opacity',
    '[&_.edit-button]:duration-300'
  ),
  popoverTitle: clsx('text-lg', 'font-medium'),
  popoverDateRange: clsx('text-sm', 'text-gray-500')
}
