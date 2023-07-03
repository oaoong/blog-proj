import { PostData } from './posts'

export function getTagsByPosts(posts: PostData[]): string[] {
  const tagSet = new Set<string>()

  posts.forEach((post) => {
    const tags = post.tags?.split(', ')
    tags?.forEach((tag) => tagSet.add(tag))
  })

  return Array.from(tagSet)
}

export function getPostsByTag(posts: PostData[], tag: string): PostData[] {
  return posts.filter((post) => {
    const tags = post.tags?.split(', ')
    return tags?.includes(tag)
  })
}
