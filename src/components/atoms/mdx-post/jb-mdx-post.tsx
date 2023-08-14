import React from 'react'
import { MDXComponents } from 'mdx/types'
import { MDXRemote } from 'next-mdx-remote'

import { PostProps } from '@/pages/post/[...id]'
import JBTag from '../tag/jb-tag'

const components = {}

export default function JBMDXPost({ postData }: PostProps) {
  return (
    postData && (
      <>
        <div className='flex flex-col mobile:px-4 mobile:pt-20 '>
          <h1 className='mb-4 text-4xl font-bold'>{postData?.title}</h1>
          <h3 className='mb-4 font-bold text-l'>작성일: {postData?.date}</h3>
          <div className='flex w-full h-0 border-t-2' />
          <article className='prose'>
            <MDXRemote
              {...postData?.body}
              components={components as MDXComponents}
            />
          </article>
          <div className='flex flex-row gap-1 pt-4 border-t-2 border-primary-color'>
            <span className='font-bold'>태그: </span>
            {postData?.tags.split(', ').map((tag) => (
              <JBTag key={tag}>{tag}</JBTag>
            ))}
          </div>
        </div>
      </>
    )
  )
}
