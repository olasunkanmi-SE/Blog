"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"

import type { Blog } from "contentlayer/generated"

import { filterPosts, getPageCount, paginatePosts } from "@/lib/blog-utils"
import { formatDate } from "@/lib/utils"

import { Pagination } from "@/components/pagination"
import { Search } from "@/components/search/blog-search"
import { SortFilterBar } from "@/components/sort-filter-bar"
import Tag from "@/components/tag"

interface BlogListProps {
  posts: Blog[]
  allTags: Record<string, number>
}

export function BlogList({ posts, allTags }: BlogListProps) {
  const searchParams = useSearchParams()
  const page = Number(searchParams?.get("page")) || 1
  const searchQuery = searchParams?.get("q") || ""
  const selectedTag = searchParams?.get("tag") || ""
  const sort = searchParams?.get("sort") || "date"

  const filteredPosts = filterPosts(posts, { searchQuery, selectedTag, sort })
  const POSTS_PER_PAGE = 6
  const totalPages = getPageCount(filteredPosts.length, POSTS_PER_PAGE)
  const displayPosts = paginatePosts(filteredPosts, page, POSTS_PER_PAGE)

  return (
    <>
      {/* Search and Filter */}
      <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
        <Search defaultValue={searchQuery} className="max-w-md sm:w-96" />
        <SortFilterBar
          totalPosts={filteredPosts.length}
          className="min-w-[200px] sm:w-auto"
        />
      </div>

      {/* Posts Grid */}
      <div className="space-y-6">
        {!displayPosts.length && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-white/50 backdrop-blur-sm dark:bg-white/5">
              <span className="text-2xl">📄</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300">No posts found.</p>
          </div>
        )}

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
                <p className="leading-relaxed text-zinc-400">{summary}</p>

                {/* Meta information */}
                <div className="flex items-center justify-between border-t border-zinc-800 pt-4">
                  <div className="flex items-center gap-4 text-sm text-zinc-500">
                    <time dateTime={date} className="flex items-center">
                      {formatDate(date)}
                    </time>
                    <span>·</span>
                    <span>{post.readingTime?.text ?? "5 min read"}</span>
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

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination
          totalPages={totalPages}
          currentPage={page}
          className="mt-8"
        />
      )}
    </>
  )
}
