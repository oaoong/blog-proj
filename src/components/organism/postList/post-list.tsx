import JBPost from '@/components/molecules/post/jb-post'
import React from 'react'

export default function PostList() {
  const postData = [
    {
      title: 'hi',
      content: 'hi',
      date: '2022-12-12',
      tags: ['jo', 'hi'],
    },
    {
      title: '안녕하세요 오늘의 날씨',
      content: '오늘의 날씨는 맑음입니다.',
      date: '2022-12-12',
      tags: ['jo', 'hi', '일상', '일기'],
    },
  ]

  const postElements = postData.map((post) => {
    return (
      <div className='mb-5' key={post.title}>
        <JBPost data={post} />
      </div>
    )
  })

  return <div className='flex flex-col w-full h-full'>{postElements}</div>
}
