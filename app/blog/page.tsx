import Link from "next/link"

import { allBlogs } from "contentlayer/generated"
import type { Blog } from "contentlayer/generated"

import { formatDate } from "@/lib/utils"

import Tag from "@/components/tag"
import Tags from "@/components/tags"

import {
  allCoreContent,
  getAllTags,
  sortedBlogPost,
} from "../../lib/contentlayer"

export const metadata = {
  title: "Blog",
}

export default async function BlogPage() {
  const posts = allCoreContent(sortedBlogPost(allBlogs)) as Blog[]
  const initialDisplayPosts = allCoreContent(posts)
  const tags = await getAllTags(allBlogs)
  const filteredBlogPosts = posts

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts = initialDisplayPosts
  return (
    <div className="relative min-h-screen bg-[#030014]">
      {/* Minimal Grid Background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      {/* Subtle gradient orb */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute right-[15%] top-[10%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            {/* Simple category label */}
            <div className="mb-8 inline-flex items-center rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-400">
              Thoughts & Insights
            </div>

            {/* Clean title */}
            <h1 className="mb-8 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              My Blog
            </h1>

            {/* Simple subtitle */}
            <p className="mx-auto mb-12 max-w-2xl text-lg text-zinc-400">
              Exploring software engineering, AI, and technology through
              detailed articles and tutorials.
            </p>

            {/* Minimal stats */}
            <div className="flex items-center justify-center gap-8">
              <div className="flex items-center gap-2 text-sm text-zinc-400">
                <div className="size-1.5 rounded-full bg-cyan-500"></div>
                {filteredBlogPosts.length} Articles
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-400">
                <div className="size-1.5 rounded-full bg-emerald-500"></div>
                {Object.keys(tags).length} Topics
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="relative py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              {!filteredBlogPosts.length && (
                <div className="flex flex-col items-center justify-center py-20">
                  <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-white/50 backdrop-blur-sm dark:bg-white/5">
                    <span className="text-2xl">📄</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    No posts found.
                  </p>
                </div>
              )}

              <div className="space-y-6">
                {displayPosts.map((post, index) => {
                  const { slug, date, title, summary, tags } = post
                  return (
                    <article
                      key={slug}
                      className="group relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
                    >
                      {index === 0 && (
                        <div className="mb-4 inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-500">
                          Latest
                        </div>
                      )}

                      <div className="space-y-4">
                        <div>
                          <h2 className="mb-2 text-2xl font-semibold tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-white transition-colors duration-200 hover:text-cyan-400"
                            >
                              {title}
                            </Link>
                          </h2>

                          {/* Tags */}
                          {(tags ?? []).length > 0 && (
                            <div className="mb-3 flex flex-wrap gap-2">
                              {(tags ?? []).slice(0, 3).map((tag) => (
                                <Tag
                                  key={tag}
                                  text={tag}
                                  className="rounded-full border border-zinc-800 bg-zinc-900 px-2 py-1 text-xs text-zinc-400 transition-colors hover:border-zinc-700 hover:text-zinc-300"
                                />
                              ))}
                              {(tags ?? []).length > 3 && (
                                <span className="rounded-full border border-zinc-800 bg-zinc-900 px-2 py-1 text-xs text-zinc-500">
                                  +{(tags ?? []).length - 3} more
                                </span>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Summary */}
                        <p className="leading-relaxed text-zinc-400">
                          {summary}
                        </p>

                        {/* Meta information */}
                        <div className="flex items-center justify-between border-t border-zinc-800 pt-4">
                          <div className="flex items-center gap-4 text-sm text-zinc-500">
                            <time dateTime={date} className="flex items-center">
                              {formatDate(date)}
                            </time>
                            <span>·</span>
                            <span>
                              {post.readingTime?.text ?? "5 min read"}
                            </span>
                          </div>

                          <Link
                            href={`/blog/${slug}`}
                            className="inline-flex items-center text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
                            aria-label={`Read "${title}"`}
                          >
                            Read more →
                          </Link>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-8 space-y-6">
                {/* Tags Section */}
                <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <svg
                      className="size-5 text-cyan-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                      />
                    </svg>
                    <h2 className="text-lg font-medium text-white">Topics</h2>
                  </div>

                  <p className="mb-4 text-sm text-zinc-400">
                    Browse articles by category
                  </p>

                  <Tags tags={tags} />
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4 text-center backdrop-blur-sm">
                    <div className="text-2xl font-bold text-white">
                      {filteredBlogPosts.length}
                    </div>
                    <div className="mt-1 text-sm text-zinc-400">Articles</div>
                  </div>
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4 text-center backdrop-blur-sm">
                    <div className="text-2xl font-bold text-white">
                      {Object.keys(tags).length}
                    </div>
                    <div className="mt-1 text-sm text-zinc-400">Topics</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
