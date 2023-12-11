import React from 'react'
import { MDXComponents } from 'mdx/types'
import { MDXRemote } from 'next-mdx-remote'

import { PostProps } from '@/pages/post/[...id]'
import JBTag from '../tag/jb-tag'
import { useTheme } from 'next-themes'

const components = {}

export default function JBMDXPost({ postData }: PostProps) {
  const { theme } = useTheme()
  const markDownTheme = theme === 'dark' ? 'prose-invert' : ''

  return (
    postData && (
      <div className='flex flex-col items-center mobile:px-4 mobile:pt-20'>
        <h1 className='mb-4 text-4xl font-bold'>{postData?.title}</h1>
        <h3 className='mb-4 font-bold text-l'>작성일: {postData?.date}</h3>
        <div className='flex w-full h-0 m-2 mt-10 border-t-2 border-primary-color' />
        <article className={`prose ${markDownTheme}`}>
          <MDXRemote
            {...postData?.body}
            components={components as MDXComponents}
          />
          <div className='flex flex-col gap-2'>
            <h2 className='text-3xl font-bold'>AI 요약</h2>
            <p>{postData.summary}</p>
          </div>
        </article>

        <div className='flex flex-row w-full gap-1 pt-4 border-t-2 border-primary-color'>
          <span className='font-bold'>태그: </span>
          {postData?.tags.split(', ').map((tag) => (
            <JBTag key={tag}>{tag}</JBTag>
          ))}
        </div>
      </div>
    )
  )
}
