import { getPostData } from '@/lib/post'
import { getPostsData } from '@/lib/posts'
import { PostMDXData } from '@/lib/post'
import BlogPost from '@/templates/blog/blog-post'
import React from 'react'

export type PostProps = {
  postData: PostMDXData
}

export default function Post({ postData }: PostProps) {
  return (
    <div className='w-full h-full'>
      <BlogPost postData={postData} />
    </div>
  )
}

export async function getStaticPaths() {
  const posts = await getPostsData()
  return {
    paths: posts.map((post) => ({
      params: {
        id: [post.id],
      },
    })),
    fallback: true,
  }
}

export async function getStaticProps({ params }: { params: { id: string[] } }) {
  const postData = await getPostData(params.id[0])

  return {
    props: {
      postData,
    },
  }
}
