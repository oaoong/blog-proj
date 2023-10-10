import React from 'react'
import LeftSide from './sections/leftSide'
import RightSide from './sections/rightSide'

export default function NavBar() {
  return (
    <div className='fixed z-50 w-full h-24 p-4 border-b-2 shadow-md border-primary-color bg-primary-color border-opacity-20 bg-opacity-80 '>
      <div className='flex items-center justify-between w-full h-full max-w-[1920px] mx-auto font-bold align-middle text-background-color'>
        <LeftSide />
        <RightSide />
      </div>
    </div>
  )
}
