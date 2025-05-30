import clsx from 'clsx'
import { ChevronRightIcon, ChevronLeftIcon } from 'lucide-react'

import { Button } from 'components/atoms/Button'

import { type PaginatorProps } from './types'

export const Paginator = ({ onPreviousClick, onNextClick }: PaginatorProps) => {
  return (
    <div className={clsx('flex', 'items-center', 'gap-2')}>
      <Button
        variant="outline"
        onClick={onPreviousClick}
        className="size-9 p-0"
      >
        <ChevronLeftIcon className="size-4" />
      </Button>
      <Button variant="outline" onClick={onNextClick} className="size-9 p-0">
        <ChevronRightIcon className="size-4" />
      </Button>
    </div>
  )
}
