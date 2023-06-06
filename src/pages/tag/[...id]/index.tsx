import { PostData, getPostsData } from '@/lib/posts'
import { getPostsByTag, getTagsByPosts } from '@/lib/tag'
import SideBar from '@/modules/common/sideBar'
import BlogPage from '@/templates/blog/blog-page'
import React from 'react'

export default function FilteredPostList({
  filteredPosts,
  tag,
  tags,
}: {
  filteredPosts: PostData[]
  tag: string
  tags: string[]
}) {
  return (
    <div className='flex flex-row pt-24 mobile:flex-col'>
      <SideBar tags={tags} />
      <div className='flex flex-col items-center justify-center flex-grow w-screen text-primary-color bg-background-color'>
        <h1 className='w-full p-5 text-4xl font-bold'>{tag}</h1>
        <BlogPage posts={filteredPosts} />
      </div>
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

export async function getStaticProps({
  params,
}: {
  params: { id: string[]; tags: string[] }
}) {
  const allPosts = getPostsData()
  const tags = await getTagsByPosts(allPosts)
  const filteredPosts = getPostsByTag(allPosts, params.id[0])
  return {
    props: {
      filteredPosts,
      tag: params.id[0],
      tags: tags,
    },
  }
}
