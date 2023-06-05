import { type VariantProps, cva } from 'class-variance-authority'
import classNames from 'classnames'
import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const cardVariants = cva(
  [
    'bg-card-background-color text-primary-color rounded justify-center items-center flex shadow-lg min-w-fit p-5',
  ],
  {
    variants: {
      intent: {
        normal: '',
      },
      size: {
        sm: 'text-sm w-2/4 h-24',
        md: 'text-md w-3/4 h-36',
        lg: 'text-lg w-full h-48',
      },
    },
    defaultVariants: {
      intent: 'normal',
      size: 'lg',
    },
  },
)

interface JBCardProps
  extends VariantProps<typeof cardVariants>,
    React.HTMLAttributes<HTMLDivElement> {}

const JBCard = forwardRef<HTMLDivElement, JBCardProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={classNames(
          twMerge(cardVariants({ intent: props.intent, size: props.size })),
        )}
      >
        {props.children}
      </div>
    )
  },
)

JBCard.displayName = 'JBCard'

export default JBCard
