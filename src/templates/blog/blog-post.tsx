import JBMDXPost from '@/components/atoms/mdx-post/jb-mdx-post'
import React from 'react'
import Content from '@/contents/test.mdx'

export default function BlogPost() {
  return (
    <div className='w-full h-full'>
      <JBMDXPost>
        <Content />
      </JBMDXPost>
    </div>
  )
}
