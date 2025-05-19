import clsx from 'clsx'

const COLUMNS_GRID = 'grid-cols-7'

const borderSet = clsx('border', 'border-gray-200')

export const S = {
  timelineContainer: clsx(borderSet, 'rounded-t-xl', 'h-full'),
  header: clsx('flex', 'justify-between', 'items-center', 'my-4'),
  headerTitle: clsx('text-xl', 'font-normal'),
  headerButtons: clsx('flex', 'gap-2'),
  weekHeader: clsx('grid', COLUMNS_GRID),
  weekDay: clsx(
    'text-gray-400',
    'font-medium',
    borderSet,
    'bg-gray-100',
    'py-2',
    'text-center',
    'border-t-0',
    'text-sm',
    '[&:first-child]:rounded-tl-xl',
    '[&:first-child]:border-l-0',
    '[&:last-child]:rounded-tr-xl',
    '[&:last-child]:border-r-0'
  ),
  lanesContainer: clsx(
    'grid',
    COLUMNS_GRID,
    'gap-y-4',
    'gap-x-3',
    'p-[12px]',
    '[&:nth-child(odd)]:bg-gray-100',
    'h-20'
  ),
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
