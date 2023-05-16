import { type VariantProps, cva } from 'class-variance-authority'
import classNames from 'classnames'
import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const tagVariants = cva(
  [
    'bg-primary-color text-background-color rounded-tr-lg justify-center items-center flex w-fit min-w-[2rem] px-1 py-0.5 cursor-pointer hover:underline',
  ],
  {
    variants: {
      intent: {
        normal: '',
      },
    },
    defaultVariants: {
      intent: 'normal',
    },
  },
)

interface JBTagProps
  extends VariantProps<typeof tagVariants>,
    React.HTMLAttributes<HTMLDivElement> {}

const JBTag = forwardRef<HTMLDivElement, JBTagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={classNames(twMerge(tagVariants({ intent: props.intent })))}
      >
        {props.children}
      </div>
    )
  },
)

JBTag.displayName = 'JBTag'

export default JBTag