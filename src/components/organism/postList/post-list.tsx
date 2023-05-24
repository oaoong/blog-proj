import JBPost from '@/components/molecules/post/jb-post'
import { PostProps } from '@/pages/blog'
import React from 'react'

export default function PostList({ posts }: PostProps) {
  const postElements = posts?.map((post) => {
    console.log(post)
    return (
      <div className='mb-5' key={post.title}>
        <JBPost data={post} />
      </div>
    )
  })

  return <div className='flex flex-col w-full h-full'>{postElements}</div>
}
