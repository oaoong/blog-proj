import { PostData, getPostsData } from '@/lib/posts'
import { getPostsByTag, getTagsByPosts } from '@/lib/tag'
import BlogPage from '@/templates/blog/blog-page'
import React from 'react'

export default function FilteredPostList({
  filteredPosts,
  tag,
}: {
  filteredPosts: PostData[]
  tag: string
}) {
  return (
    <div className='w-full h-full'>
      <h1 className='w-full p-5 text-4xl font-bold'>{tag}</h1>
      <BlogPage posts={filteredPosts} />
    </div>
  )
}

export async function getStaticPaths() {
  const posts = getPostsData()
  const tags = getTagsByPosts(posts)
  return {
    paths: tags.map((tag) => ({
      params: {
        id: [tag],
      },
    })),
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }: { params: { id: string[] } }) {
  const allPosts = getPostsData()
  const filteredPosts = getPostsByTag(allPosts, params.id[0])
  return {
    props: {
      filteredPosts,
      tag: params.id[0],
    },
  }
}
