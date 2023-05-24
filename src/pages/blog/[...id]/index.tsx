import { getPostData } from '@/lib/post'
import { getPostsData } from '@/lib/posts'
import { PostData } from '@/lib/posts'
import BlogPost from '@/templates/blog/blog-post'
import React from 'react'

export type PostProps = {
  post: PostData
}

export default function Post({ post }: PostProps) {
  return (
    <div className='w-full h-full'>
      <BlogPost post={post} />
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
  console.log(params)
  const post = await getPostData(params.id[0])

  return {
    props: {
      post,
    },
  }
}
