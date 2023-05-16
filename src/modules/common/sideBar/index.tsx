import JBTag from '@/components/atoms/tag/jb-tag'
import React from 'react'

export default function SideBar() {
  const tags = ['jo', 'hi', '일상', '일기']
  const tagElements = tags.map((tag) => {
    return (
      <div className='h-fit' key={tag}>
        <JBTag>{tag}</JBTag>
      </div>
    )
  })
  return (
    <div className='flex flex-wrap gap-2 pl-2 pt-7 h-fit w-fit mobile:w-full mobile:h-auto bg-background-color'>
      {tagElements}
    </div>
  )
}
