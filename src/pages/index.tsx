import { PostData, getPostsData } from '@/lib/posts'
import { getTagsByPosts } from '@/lib/tag'
import BlogPage from '@/templates/blog/blog-page'
import SideBar from '@/modules/common/sideBar'

export type PostProps = {
  posts: PostData[]
}

export default function Blog({ posts, tags }: PostProps & { tags: string[] }) {
  return (
    <div className='flex flex-row w-full pt-24 mobile:flex-col'>
      <SideBar tags={tags} />
      <div className='flex flex-col items-center justify-center flex-grow w-screen text-primary-color bg-background-color mobile:w-[calc(100%-6px)]'>
        <BlogPage posts={posts} />
      </div>
    </div>
  )
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
