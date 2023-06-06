import JBTag from '@/components/atoms/tag/jb-tag'
import React from 'react'
import Image from 'next/image'

export default function SideBar({ tags }: { tags: string[] }) {
  const tagElements = tags?.map((tag) => {
    return (
      <div className='h-fit' key={tag}>
        <JBTag>{tag}</JBTag>
      </div>
    )
  })
  return (
    <div className='p-2'>
      <div className='flex flex-col items-center pt-8 mb-4 '>
        <Image
          src={'/images/profile.jpg'}
          width={'100'}
          height={'100'}
          alt='profile'
          className='rounded-full shadow-md'
        />
        <div className='font-bold '>oaoong</div>
      </div>
      <div className='flex flex-wrap gap-2 p-3 mx-auto rounded-md shadow-md h-fit w-fit mobile:w-[calc(100%-6px)] mobile:h-auto bg-secondary-color'>
        {tagElements}
      </div>
    </div>
  )
}
