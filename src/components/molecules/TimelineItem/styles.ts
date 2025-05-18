import { cva } from 'class-variance-authority'
import clsx from 'clsx'

const mainButtonVariants = cva(
  clsx(
    'flex',
    'w-full',
    'flex-col',
    'items-start',
    'gap-0',
    'rounded-md',
    'border-l-4',
    'px-4',
    'text-gray-800',
    'shadow-none',
    'h-full'
  ),
  {
    variants: {
      color: {
        red: 'border-red-500/90 bg-red-200 hover:bg-red-300/80',
        yellow: 'border-yellow-500/80 bg-yellow-400/30 hover:bg-yellow-300/60',
        green: 'border-green-500/90 bg-green-200 hover:bg-green-300/80',
        blue: 'border-blue-500/90 bg-blue-200 hover:bg-blue-300/80',
        lightBlue: 'border-sky-500/90 bg-sky-200 hover:bg-sky-300/80',
        gray: 'border-gray-500/90 bg-gray-200 hover:bg-gray-300/80',
        purple: 'border-purple-500/90 bg-purple-200 hover:bg-purple-300/80'
      },
      continuityTo: {
        right: clsx('rounded-r-none'),
        left: clsx('rounded-l-none', 'border-none'),
        both: clsx('rounded-none', 'border-none')
      }
    },
    defaultVariants: {
      color: 'red'
    }
  }
)

const continuityButtonVariants = cva(
  clsx(
    'h-full',
    'rounded-none',
    'p-0',
    'hover:bg-[inherit]',
    'hover:text-gray-800'
  ),
  {
    variants: {
      color: {
        red: 'bg-red-500/90',
        yellow: 'bg-yellow-500/80',
        green: 'bg-green-500/90',
        blue: 'bg-blue-500/90',
        lightBlue: 'bg-sky-500/90',
        gray: 'bg-gray-500/90',
        purple: 'bg-purple-500/90'
      },
      reverse: {
        true: clsx('rotate-180')
      }
    },
    defaultVariants: {
      color: 'red'
    }
  }
)

export const S = {
  mainButtonContainer: mainButtonVariants,
  name: clsx('text-sm', 'font-normal', 'truncate', 'w-full', 'text-left'),
  dateRange: clsx('text-xs', 'text-gray-500', 'font-light'),
  continuityBtn: continuityButtonVariants,
  continuityButtonIcon: clsx('w-4', 'h-4'),
  container: clsx('flex', 'h-14')
}
