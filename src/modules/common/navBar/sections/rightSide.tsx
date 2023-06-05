import NAVIGATION_PATH from '@/config/path'
import Link from 'next/link'
import React from 'react'

export default function RightSide() {
  return (
    <div className='flex items-center gap-4 w-fit '>
      <Link href={NAVIGATION_PATH.HOME} className='hover:underline'>
        HOME
      </Link>
      <Link href={NAVIGATION_PATH.BLOG} className='hover:underline'>
        BLOG
      </Link>
    </div>
  )
}
