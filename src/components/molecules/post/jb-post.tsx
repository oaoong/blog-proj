import React, { forwardRef, HTMLAttributes } from 'react'
import JBCard from '@/components/atoms/card/jb-card'
import JBTag from '@/components/atoms/tag/jb-tag'
import Link from 'next/link'
import { PostData } from '@/lib/posts'
import NAVIGATION_PATH from '@/config/path'
import { extractAndCombineFirstSentences } from '@/lib/sentense-parser'

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
      <Link href={`${NAVIGATION_PATH.BLOG}/${title}`}>
        <JBCard>
          <div
            ref={ref}
            {...props}
            className='grid w-full h-full overflow-hidden gird-cols-5 '
          >
            <div className='flex justify-between row-span-4 mb-2 mobile:flex-col'>
              <h2 className='text-3xl font-bold cursor-pointer hover:underline line-clamp-2'>
                {title}
              </h2>
              <p>{date}</p>
            </div>
            <div className='flex flex-row items-end row-span-1 gap-2'>
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
