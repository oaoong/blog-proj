import JBPost from '@/components/molecules/post/jb-post'
import React from 'react'

export default function Blog() {
  return (
    <div className='flex items-start justify-center w-full h-full p-5'>
      <JBPost title={'hi'} content='hi' date='2022-12-12' tags={['jo', 'hi']} />
    </div>
  )
}
