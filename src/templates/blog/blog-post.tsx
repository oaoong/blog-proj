import JBMDXPost from '@/components/atoms/mdx-post/jb-mdx-post'
import React from 'react'
import { PostProps } from '@/pages/blog/[...id]'

export default function BlogPost({ post }: PostProps) {
  return (
    <div className='w-full h-full'>
      <JBMDXPost post={post} />
    </div>
  )
}
