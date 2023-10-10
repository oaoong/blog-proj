import BlogPost from '@/templates/blog/blog-post'
import React from 'react'
import { PostProps } from '../post/[...id]'
import Utterances from '@/components/molecules/utterances'
import { getPostData } from '@/lib/post'

export default function AboutPage({ postData }: PostProps) {
  return (
    <div className='flex flex-col justify-center px-5 pt-48 mx-auto w-3ull'>
      <BlogPost postData={postData} />
      <div className='w-full pt-12 '>
        <Utterances />
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const postData = await getPostData({
    fileName: 'about',
    src: 'src/pages/about',
  })

  return {
    props: {
      postData,
    },
  }
}
