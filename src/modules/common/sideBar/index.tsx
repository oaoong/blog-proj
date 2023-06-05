import JBTag from '@/components/atoms/tag/jb-tag'
import React from 'react'
import Image from 'next/image'

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
    <div>
      <div className='flex flex-col items-center pt-8'>
        <Image
          src={'/images/profile.jpg'}
          width={'100'}
          height={'100'}
          alt='profile'
          className='rounded-full'
        />
        <div className='font-bold'>oaoong</div>
      </div>
      <div className='flex flex-wrap gap-2 p-3 m-2 rounded-md h-fit w-fit mobile:w-full mobile:h-auto bg-secondary-color'>
        {tagElements}
      </div>
    </div>
  )
}
