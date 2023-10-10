import NAVIGATION_PATH from '@/config/path'
import Link from 'next/link'
import React from 'react'

export default function LeftSide() {
  return (
    <Link
      href={NAVIGATION_PATH.HOME}
      className='flex items-center text-4xl font-bold cursor-default w-fit hover:cursor-pointer'
    >
      Jay_Log
    </Link>
  )
}
