import JBMDXPost from '@/components/atoms/mdx-post/jb-mdx-post'
import React from 'react'
import { PostProps } from '@/pages/blog/[...id]'

export default function BlogPost({ postData }: PostProps) {
  return (
    <div className='w-full h-full'>
      <JBMDXPost postData={postData} />
    </div>
  )
}
