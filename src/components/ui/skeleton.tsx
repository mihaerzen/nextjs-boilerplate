import { FC, HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

export const Skeleton: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div className={cn('animate-pulse bg-primary/10', className)} {...props} />
  )
}
Skeleton.displayName = 'Skeleton'
