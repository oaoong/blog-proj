import React, { forwardRef, HTMLAttributes } from 'react'
import JBCard from '@/components/atoms/card/jb-card'
import JBTag from '@/components/atoms/tag/jb-tag'
import Link from 'next/link'

interface PostData {
  data: {
    title: string
    date: string
    content: string
    tags: string[]
  }
}

interface JBPostProps
  extends Pick<HTMLAttributes<HTMLDivElement>, 'className'>,
    PostData {}

const JBPost = forwardRef<HTMLDivElement, JBPostProps>(
  ({ className, data: { title, tags, date, content }, ...props }, ref) => {
    const tagElements = tags.map((tag) => {
      return (
        <div key={tag}>
          <JBTag>{tag}</JBTag>
        </div>
      )
    })

    return (
      <Link href={`blog/${title}`}>
        <JBCard>
          <div ref={ref} {...props} className='relative block w-full h-full'>
            <div className='flex justify-between mb-2 mobile:flex-col'>
              <h2 className='text-3xl font-bold cursor-pointer hover:underline'>
                {title}
              </h2>
              <p>{date}</p>
            </div>
            <p>{content}</p>
            <div className='absolute bottom-0 flex flex-row gap-2'>
              {tagElements}
            </div>
          </div>
        </JBCard>
      </Link>
    )
  },
)

JBPost.displayName = 'JBPost'

export default JBPost
