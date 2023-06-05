import PostList from '@/components/organism/postList/post-list'
import { PostProps } from '@/pages/blog'
import React from 'react'

export default function BlogPage({ posts }: PostProps) {
  return (
    <div className='w-full h-full p-5'>
      <PostList posts={posts} />
    </div>
  )
}
