import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { PostData } from './posts'

function filterSrc(src: string): string {
  return src.replaceAll(' ', '%20')
}

export function getPostData(src: string): PostData {
  const postDirectory = path.join(
    process.cwd(),
    `src/contents/${filterSrc(src)}.mdx`,
  )
  const fileName = fs.readFileSync(postDirectory, 'utf-8')

  const matterResult = matter(fileName)

  const id = src
  const contents = matterResult.content
  const date = matterResult.data?.date || ''
  const title = matterResult.data?.title || ''
  const tags = matterResult.data?.tags || []

  return {
    id,
    contents,
    title,
    date,
    tags,
  }
}
