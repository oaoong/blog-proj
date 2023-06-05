import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type PostData = {
  id: string
  date?: string
  title?: string
  tags?: string
  contents: string
}

const postsDirectory = path.join(process.cwd(), 'src/contents')

export function getPostsData(): PostData[] {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '')

    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf-8')

    const matterResult = matter(fileContents)
    const date = matterResult.data?.date || ''
    const title = matterResult.data?.title || ''
    const tags = matterResult.data?.tags || ''
    const contents = matterResult.content

    return {
      id,
      date,
      title,
      tags,
      contents,
      ...matterResult.data,
    }
  })
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}
