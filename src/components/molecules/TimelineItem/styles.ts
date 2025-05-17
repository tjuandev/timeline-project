import { cva } from 'class-variance-authority'
import clsx from 'clsx'

const columnVariants = cva(
  clsx(
    'flex',
    'h-10',
    'w-full',
    'flex-col',
    'items-start',
    '!gap-0',
    'rounded-md',
    'border-l-4',
    'p-2',
    'text-gray-800',
    'shadow-none'
  ),
  {
    variants: {
      color: {
        red: 'border-red-500/90 bg-red-200 hover:bg-red-300/80',
        yellow: 'border-yellow-500/80 bg-yellow-400/30 hover:bg-yellow-300/80',
        green: 'border-green-500/90 bg-green-200 hover:bg-green-300/80',
        blue: 'border-blue-500/90 bg-blue-200 hover:bg-blue-300/80',
        lightBlue: 'border-sky-500/90 bg-sky-200 hover:bg-sky-300/80',
        gray: 'border-gray-500/90 bg-gray-200 hover:bg-gray-300/80',
        purple: 'border-purple-500/90 bg-purple-200 hover:bg-purple-300/80'
      },
      endingPos: {
        left: clsx('!rounded-r-none'),
        right: clsx('!rounded-l-none')
      }
    },
    defaultVariants: {
      color: 'red'
    }
  }
)

export const S = {
  container: columnVariants,
  name: clsx('text-sm', 'font-normal'),
  dateRange: clsx('text-xs', 'text-gray-500', 'font-light')
}
