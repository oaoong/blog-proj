import NAVIGATION_PATH from '@/config/path'
import Link from 'next/link'
import React from 'react'

export default function RightSide() {
  return (
    <div className='flex items-center gap-4 w-fit '>
      <Link href={'https://github.com/oaoong'} className='hover:underline'>
        GITHUB
      </Link>
      <Link
        href={
          'https://www.linkedin.com/in/%EC%9E%AC%ED%9D%AC-%EC%A0%95-a5028a244/'
        }
        className='hover:underline'
      >
        LINKEDIN
      </Link>
      <Link href={NAVIGATION_PATH.ABOUT} className='hover:underline'>
        ABOUT
      </Link>
    </div>
  )
}
