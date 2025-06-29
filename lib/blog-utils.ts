import type { Blog } from "contentlayer/generated"

export interface BlogFilters {
  searchQuery?: string
  selectedTag?: string
  sort?: string
}

export function filterPosts(posts: Blog[], filters: BlogFilters): Blog[] {
  const { searchQuery, selectedTag, sort = "date" } = filters

  // Filter posts
  const filteredPosts = posts.filter((post) => {
    const matchesSearch = searchQuery
      ? post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (post.summary?.toLowerCase() || "").includes(searchQuery.toLowerCase())
      : true
    const matchesTag = selectedTag ? post.tags?.includes(selectedTag) : true
    return matchesSearch && matchesTag
  })

  // Sort posts
  return [...filteredPosts].sort((a, b) => {
    if (sort === "title") {
      return a.title.localeCompare(b.title)
    }
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}

export function paginatePosts(posts: Blog[], page: number, perPage: number): Blog[] {
  return posts.slice((page - 1) * perPage, page * perPage)
}

export function getPageCount(totalPosts: number, postsPerPage: number): number {
  return Math.ceil(totalPosts / postsPerPage)
}
