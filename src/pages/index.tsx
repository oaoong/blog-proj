import { useEffect } from 'react'
import { PostData, getPostsData } from '@/lib/posts'
import { getTagsByPosts } from '@/lib/tag'
import { tagsState } from '@/state/atom'
import BlogPage from '@/templates/blog/blog-page'
import { useSetRecoilState } from 'recoil'

export type PostProps = {
  posts: PostData[]
  tags?: string[]
}

export default function Blog({ posts, tags = [] }: PostProps) {
  const setTags = useSetRecoilState<string[]>(tagsState)

  useEffect(() => {
    setTags(tags)
  }, [setTags, tags])

  return <BlogPage posts={posts} />
}

export async function getStaticProps() {
  const posts = await getPostsData()
  const tags = await getTagsByPosts(posts)

  return {
    props: {
      posts,
      tags,
    },
  }
}
