import fs from 'fs'
import path from 'path'
import { serialize } from 'next-mdx-remote/serialize'
import grayMatter from 'gray-matter'

import type { MDXRemoteSerializeResult } from 'next-mdx-remote'

export type PostMDXData = {
  body: MDXRemoteSerializeResult<Record<string, unknown>>
  date: string
  title: string
  tags: string
}

function filterSrc(src: string): string {
  return src.replaceAll(' ', '%20')
}

export async function getPostData(src: string): Promise<PostMDXData> {
  const postDirectory = path.join(
    process.cwd(),
    `src/contents/${filterSrc(src)}.mdx`,
  )
  const fileContents = fs.readFileSync(postDirectory, 'utf-8')
  const { data, content } = grayMatter(fileContents)
  const { title, date, tags } = data

  // MDX 파일 직렬화
  const mdxContents = await serialize(content)

  return {
    body: mdxContents,
    date,
    title,
    tags,
  }
}
