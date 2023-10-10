import fs from 'fs'
import path from 'path'
import { serialize } from 'next-mdx-remote/serialize'
import grayMatter from 'gray-matter'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrism from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import rehypeCodeTitles from 'rehype-code-titles'
import remarkToc from 'remark-toc'

import type { MDXRemoteSerializeResult } from 'next-mdx-remote'

export type PostMDXData = {
  body: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >
  date: string
  title: string
  tags: string
  thumbnail: string | null
}

function filterSrc(src: string): string {
  return src.replaceAll(' ', '_').replaceAll('.mdx', '')
}

export async function getPostData({
  fileName,
  src,
}: {
  fileName: string
  src: string
}): Promise<PostMDXData> {
  const postDirectory = path.join(
    process.cwd(),
    `${src}/${filterSrc(fileName)}.mdx`,
  )
  const fileContents = fs.readFileSync(postDirectory, 'utf-8')
  const { data, content } = grayMatter(fileContents)
  const { title, date, tags } = data

  const thumbnailDirectory =
    content.match(/!\[(.+)(\]\(<)(.+)>\)/g)?.[0].match(/\/(.+)\.png/g)?.[0] ??
    null

  // MDX 파일 직렬화
  const serializeMdx = await serialize(content, {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [
        remarkGfm,
        [remarkToc, { maxDepth: 3, heading: 'Contents' }],
      ],
      rehypePlugins: [
        rehypeSlug,
        rehypeCodeTitles,
        [
          rehypePrism,
          {
            showLineNumbers: true,
          },
        ],
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ['anchor'],
            },
          },
        ],
      ],
      format: 'mdx',
    },
  })

  return {
    body: serializeMdx,
    date,
    title,
    tags,
    thumbnail: thumbnailDirectory,
  }
}
