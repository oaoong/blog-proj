import { getPostData } from '@/lib/post'
import { getPostsData } from '@/lib/posts'
import { PostMDXData } from '@/lib/post'
import BlogPost from '@/templates/blog/blog-post'
import Utterances from '@/components/molecules/utterances'
import Head from 'next/head'

export type PostProps = {
  postData: PostMDXData
}

export default function Post({ postData }: PostProps) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
        <meta name='title' property='og:title' content={postData.title} />
        <meta
          name='image'
          property='og:image'
          content={'./public' + postData.thumbnail}
        />
        <meta property='og:image:type' content='image/png' />
      </Head>
      <div className='flex flex-col justify-center w-1/2 pt-48 mx-auto'>
        <BlogPost postData={postData} />
        <div className='w-full pt-12 '>
          <Utterances />
        </div>
      </div>
    </>
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
