import React from 'react'
import LeftSide from './sections/leftSide'
import RightSide from './sections/rightSide'

export default function NavBar() {
  return (
    <div className='fixed z-50 flex justify-between w-full h-24 p-4 font-bold align-middle border-b-2 shadow-md border-primary-color bg-primary-color text-background-color border-opacity-20 bg-opacity-80 '>
      <LeftSide />
      <RightSide />
    </div>
  )
}
