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
          content={'%PUBLIC_URL%' + postData.thumbnail}
        />
        <meta property='og:image:type' content='image/png' />
        <meta property='og:image:alt' content='thumbnail' />
        <meta property='og:url' content={'https://jay-logs.vercel.app'} />
      </Head>
      <div className='flex flex-col justify-center w-full px-5 pt-48 mx-auto'>
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
  const postData = await getPostData({
    fileName: params.id[0],
    src: 'src/contents',
  })

  return {
    props: {
      postData,
    },
  }
}
