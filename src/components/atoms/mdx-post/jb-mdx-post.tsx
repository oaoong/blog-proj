import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { MDXComponents } from 'mdx/types'
import 'github-markdown-css'
import { useTheme } from 'next-themes'

interface MDXProps {
  children: React.ReactNode
}

const components = {}

export default function JBMDXPost({ children }: MDXProps) {
  const { theme } = useTheme()
  return (
    <>
      <style jsx>
        {`
          .markdown-body {
            width: 100%;
            height: 100%;
            padding: 20px;
            background-color: ${theme === 'dark' ? '#404040' : '#e5e5e5'};
            color: ${theme === 'dark' ? '#e5e5e5' : '#404040'};
          }
        `}
      </style>
      <MDXProvider components={components as MDXComponents}>
        <div className='markdown-body'>{children}</div>
      </MDXProvider>
    </>
  )
}
