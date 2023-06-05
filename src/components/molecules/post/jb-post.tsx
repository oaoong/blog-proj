import React, { forwardRef, HTMLAttributes } from 'react'
import JBCard from '@/components/atoms/card/jb-card'
import JBTag from '@/components/atoms/tag/jb-tag'
import Link from 'next/link'
import { PostData } from '@/lib/posts'

type PropsData = { data: PostData }

interface JBPostProps
  extends Pick<HTMLAttributes<HTMLDivElement>, 'className'>,
    PropsData {}

const JBPost = forwardRef<HTMLDivElement, JBPostProps>(
  ({ className, data: { title, tags, date, contents }, ...props }, ref) => {
    const tagElements = tags?.split(', ').map((tag) => {
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
            <p>{contents.slice(0, 20)}</p>
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
