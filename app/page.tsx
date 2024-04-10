import { allBlogs, Blog } from "contentlayer/generated"

import { allCoreContent, sortedBlogPost } from "@/lib/contentlayer"

import { LatestPosts } from "@/components/latest-posts"

export default async function Home() {
  const sortedPosts = sortedBlogPost(allBlogs) as Blog[]
  const posts = allCoreContent(sortedPosts)

  return <LatestPosts posts={posts} />
}
