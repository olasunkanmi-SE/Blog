
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-amber-900/20 dark:via-orange-900/20 dark:to-yellow-900/20 py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container relative mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-800 dark:bg-amber-900/50 dark:text-amber-200">
              <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3 5a2 2 0 012-2h1a1 1 0 010 2H5v3a2 2 0 01-2 2H2a1 1 0 010-2h1V5z" clipRule="evenodd" />
              </svg>
              Thoughts & Insights
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl">
              My <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-xl leading-relaxed text-gray-600 dark:text-gray-300">
              Exploring software engineering, AI, and technology through detailed articles and tutorials.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              {filteredBlogPosts.length} articles published
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="relative overflow-hidden rounded-3xl bg-white/60 backdrop-blur-sm border border-gray-200/50 shadow-xl dark:bg-gray-800/60 dark:border-gray-700/50">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 via-transparent to-orange-50/30 dark:from-amber-900/10 dark:via-transparent dark:to-orange-900/5"></div>
              
              {!filteredBlogPosts.length && (
                <div className="relative p-12 text-center">
                  <div className="mx-auto mb-4 w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">No posts found.</p>
                </div>
              )}

              <div className="relative divide-y divide-gray-200/50 dark:divide-gray-700/50">
                {displayPosts.map((post, index) => {
                  const { slug, date, title, summary, tags } = post
                  return (
                    <article key={slug} className="group relative p-8 transition-all duration-300 hover:bg-gradient-to-r hover:from-amber-50/50 hover:to-orange-50/30 dark:hover:from-amber-900/10 dark:hover:to-orange-900/5">
                      {/* Featured badge for first post */}
                      {index === 0 && (
                        <div className="absolute top-4 right-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-3 py-1 text-xs font-semibold text-white">
                          Latest
                        </div>
                      )}
                      
                      <div className="space-y-4">
                        <div>
                          <h2 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors duration-200">
                            <Link href={`/blog/${slug}`}>
                              {title}
                            </Link>
                          </h2>
                          
                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 pt-3">
                            {tags?.slice(0, 3).map((tag) => (
                              <Tag
                                key={tag}
                                text={tag}
                                className="rounded-full bg-gradient-to-r from-amber-100 to-orange-100 px-3 py-1 text-xs font-medium text-amber-800 transition-all duration-200 hover:scale-105 hover:from-amber-200 hover:to-orange-200 dark:from-amber-900/30 dark:to-orange-900/30 dark:text-amber-200"
                              />
                            ))}
                            {tags && tags.length > 3 && (
                              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                                +{tags.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Summary */}
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
                          {summary}
                        </p>

                        {/* Meta information */}
                        <div className="flex items-center justify-between pt-4">
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
                              {post.readingTime.text || "5 min read"}
                            </span>
                          </div>

                          <Link
                            href={`/blog/${slug}`}
                            className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-600 to-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-amber-300 dark:focus:ring-amber-800"
                            aria-label={`Read "${title}"`}
                          >
                            Read article
                            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-8 space-y-8">
              {/* Tags Section */}
              <div className="relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-xl dark:bg-gray-800/80 dark:border-gray-700/50">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/20 dark:from-blue-900/10 dark:via-transparent dark:to-purple-900/5"></div>
                <div className="relative p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-lg bg-blue-100 p-2 dark:bg-blue-900/30">
                      <svg className="h-5 w-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                      Explore Topics
                    </h2>
                  </div>
                  <p className="mb-6 text-sm text-gray-600 dark:text-gray-300">
                    Browse articles by category and find content that interests you.
                  </p>
                  <Tags tags={tags} />
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 p-6 text-white shadow-xl">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold">Stay Updated</h3>
                    <p className="text-sm text-amber-100">
                      Get notified when I publish new articles about software engineering and AI.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-2 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                    <button className="w-full rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-2 font-semibold text-white transition-all duration-200 hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200/50 p-4 text-center shadow-lg dark:bg-gray-800/80 dark:border-gray-700/50">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {filteredBlogPosts.length}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Articles</div>
                </div>
                <div className="rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200/50 p-4 text-center shadow-lg dark:bg-gray-800/80 dark:border-gray-700/50">
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
    </div>
  )
}
