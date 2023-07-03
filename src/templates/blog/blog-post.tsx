import JBMDXPost from '@/components/atoms/mdx-post/jb-mdx-post'
import React from 'react'
import { PostProps } from '@/pages/post/[...id]'

export default function BlogPost({ postData }: PostProps) {
  return (
    <div className='w-5/6 h-full'>
      <JBMDXPost postData={postData} />
    </div>
  )
}
