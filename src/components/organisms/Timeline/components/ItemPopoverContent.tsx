import { useRef, useState } from 'react'

import { PopoverClose } from '@radix-ui/react-popover'
import { Pencil, X, Check } from 'lucide-react'

import { Button } from 'components/atoms/Button'
import { Input } from 'components/atoms/Input'

import { S } from '../styles'

import { type ItemPopoverProps } from '../types'

export const ItemPopoverContent = ({
  name,
  dateRange,
  onEditName
}: ItemPopoverProps) => {
  const [isEditing, setIsEditing] = useState(false)
  const editInputRef = useRef<HTMLInputElement>(null)

  return (
    <div>
      {' '}
      <div className={S.popoverContent}>
        <div className={S.popoverHeader}>
          <h4 className={S.popoverTitle}>
            {isEditing ? (
              <Input
                placeholder={name}
                ref={editInputRef}
                className="h-[28px]"
                onBlur={() => {
                  setIsEditing(false)
                }}
              />
            ) : (
              name
            )}
          </h4>
          <Button
            className={isEditing ? '' : 'edit-button'}
            variant="ghost"
            size="icon"
            onClick={() => {
              setIsEditing(prev => !prev)

              if (isEditing) {
                onEditName(editInputRef.current?.value ?? name)
                return
              }

              setTimeout(() => {
                editInputRef.current?.focus()
              }, 0)
            }}
          >
            {isEditing ? <Check /> : <Pencil />}
          </Button>
        </div>
        <p className={S.popoverDateRange}>{dateRange}</p>
      </div>
      <PopoverClose asChild>
        <Button variant="ghost" size="icon" className={S.popoverClose}>
          <X />
        </Button>
      </PopoverClose>
    </div>
  )
}
