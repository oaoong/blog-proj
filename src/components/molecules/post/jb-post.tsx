import React, { forwardRef, HTMLAttributes } from 'react'
import JBCard from '@/components/atoms/card/jb-card'
import classNames from 'classnames'
import { VariantProps, cva } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'
import JBTag from '@/components/atoms/tag/jb-tag'

const postVariants = cva(['flex flex-col'], {
  variants: {},
})

interface PostData {
  title: string
  date: string
  content: string
  tags: string[]
}

interface JBPostProps
  extends Pick<HTMLAttributes<HTMLDivElement>, 'className'>,
    PostData {}

const JBPost = forwardRef<HTMLDivElement, JBPostProps>(
  ({ className, title, date, content, tags, ...props }, ref) => {
    const tagElements = tags.map((tag) => {
      return (
        <div className='mr-1' key={tag}>
          <JBTag>{tag}</JBTag>
        </div>
      )
    })

    return (
      <JBCard>
        <div ref={ref} {...props} className='relative block w-full h-full'>
          <div className='flex justify-between max-[600px]:flex-col'>
            <h2 className='text-3xl font-bold'>{title}</h2>
            <p>{date}</p>
          </div>
          <p>{content}</p>
          <div className='absolute bottom-0 flex flex-row'>{tagElements}</div>
        </div>
      </JBCard>
    )
  },
)

JBPost.displayName = 'JBPost'

export default JBPost
