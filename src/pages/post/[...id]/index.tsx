import { getPostData } from '@/lib/post'
import { getPostsData } from '@/lib/posts'
import { PostMDXData } from '@/lib/post'
import BlogPost from '@/templates/blog/blog-post'
import Utterances from '@/components/molecules/utterances'

export type PostProps = {
  postData: PostMDXData
}

export default function Post({ postData }: PostProps) {
  return (
    <div className='flex flex-col justify-center w-1/2 pt-48 mx-auto'>
      <BlogPost postData={postData} />
      <div className='w-full pt-12 '>
        <Utterances />
      </div>
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
    fallback: 'blocking',
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
