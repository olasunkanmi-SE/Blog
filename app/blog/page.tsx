
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
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex items-center rounded-md bg-gray-100 dark:bg-gray-800 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              <span className="mr-2">📝</span>
              Thoughts & Insights
            </div>

            <h1 className="mb-8 text-5xl font-bold text-gray-900 dark:text-white sm:text-6xl lg:text-7xl">
              My Blog
            </h1>

            <p className="mb-12 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Exploring software engineering, AI, and technology through detailed articles and tutorials.
            </p>

            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                {filteredBlogPosts.length} Articles
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                {Object.keys(tags).length} Topics
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
            {/* Main Content */}
            <div className="lg:col-span-8">
              {!filteredBlogPosts.length && (
                <div className="text-center py-20">
                  <div className="mx-auto mb-4 w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📄</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">No posts found.</p>
                </div>
              )}

              <div className="space-y-6">
                {displayPosts.map((post, index) => {
                  const { slug, date, title, summary, tags } = post
                  return (
                    <article key={slug} className="group rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm transition-shadow hover:shadow-md">
                      {/* Featured badge for first post */}
                      {index === 0 && (
                        <div className="mb-4 inline-flex items-center rounded-md bg-blue-50 dark:bg-blue-900/30 px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-400">
                          Latest
                        </div>
                      )}
                      
                      <div className="space-y-4">
                        <div>
                          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 mb-2">
                            <Link href={`/blog/${slug}`}>
                              {title}
                            </Link>
                          </h2>
                          
                          {/* Tags */}
                          {tags && tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-3">
                              {tags.slice(0, 3).map((tag) => (
                                <Tag
                                  key={tag}
                                  text={tag}
                                  className="rounded-md bg-gray-100 dark:bg-gray-700 px-2 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                />
                              ))}
                              {tags.length > 3 && (
                                <span className="rounded-md bg-gray-100 dark:bg-gray-700 px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-300">
                                  +{tags.length - 3} more
                                </span>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Summary */}
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {summary}
                        </p>

                        {/* Meta information */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                            <time dateTime={date} className="flex items-center gap-1">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              {formatDate(date)}
                            </time>
                            <span className="flex items-center gap-1">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {post.readingTime?.text || "5 min read"}
                            </span>
                          </div>

                          <Link
                            href={`/blog/${slug}`}
                            className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                            aria-label={`Read "${title}"`}
                          >
                            Read article →
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
                <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-md bg-gray-100 dark:bg-gray-700 p-2">
                      <svg className="h-5 w-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                    </div>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Topics
                    </h2>
                  </div>
                  <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                    Browse articles by category
                  </p>
                  <Tags tags={tags} />
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 text-center shadow-sm">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {filteredBlogPosts.length}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Articles</div>
                  </div>
                  <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 text-center shadow-sm">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {Object.keys(tags).length}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Topics</div>
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
