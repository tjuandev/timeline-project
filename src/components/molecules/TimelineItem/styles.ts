import clsx from 'clsx'

export const S = {
  container: clsx(
    'bg-red-200',
    'text-gray-800',
    'shadow-none',
    'border-l-4',
    'border-red-500/90',
    'rounded-md',
    'hover:bg-red-200/50',
    'flex',
    'items-start',
    'p-2',
    'flex-col',
    'h-10',
    '!gap-0'
  ),
  name: clsx('text-sm', 'font-normal'),
  dateRange: clsx('text-xs', 'text-gray-500', 'font-light')
}
