import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { MDXComponents } from 'mdx/types'
import 'github-markdown-css'
import { useTheme } from 'next-themes'
import { MDXRemote } from 'next-mdx-remote'

import { PostProps } from '@/pages/blog/[...id]'
import JBTag from '../tag/jb-tag'

const components = {}

export default function JBMDXPost({ postData }: PostProps) {
  const { theme } = useTheme()

  return (
    postData && (
      <>
        <style jsx>
          {`
            .markdown-body {
              width: 100%;
              height: 100%;
              margin: 2rem auto 4rem auto;
              background-color: ${theme === 'dark' ? '#404040' : '#e5e5e5'};
              color: ${theme === 'dark' ? '#e5e5e5' : '#404040'};
            }
          `}
        </style>
        <div className='flex flex-col p-6 pt-12'>
          <h1 className='mb-4 text-4xl font-bold'>{postData?.title}</h1>
          <h3 className='mb-4 font-bold text-l'>작성일: {postData?.date}</h3>
          <article className='markdown-body'>
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
