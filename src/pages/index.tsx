import JBPost from '@/components/molecules/post/jb-post'
import { PostData, getPostsData } from '@/lib/posts'
import BlogPage from '@/templates/blog/blog-page'
import React from 'react'

export type PostProps = {
  posts: PostData[]
}

export default function Blog({ posts }: PostProps) {
  return <BlogPage posts={posts} />
}

export async function getStaticProps() {
  const posts = await getPostsData()

  return {
    props: {
      posts,
    },
  }
}
