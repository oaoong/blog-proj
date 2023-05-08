import React from 'react'
import LeftSide from './sections/leftSide'
import RightSide from './sections/rightSide'

export default function NavBar() {
  return (
    <div className='flex justify-between h-20 p-4 font-bold align-middle bg-background-color'>
      <LeftSide />
      <RightSide />
    </div>
  )
}
