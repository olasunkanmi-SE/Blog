import Image from "next/image"

import type { Blog } from "contentlayer/generated"
import { allBlogs } from "contentlayer/generated"

import { BlogList } from "@/components/blog/blog-list"
import Tags from "@/components/tags"

import {
  allCoreContent,
  getAllTags,
  sortedBlogPost,
} from "../../lib/contentlayer"

export const metadata = {
  title: "Blog - Thoughts & Insights",
  description:
    "Exploring software engineering, AI, and technology through detailed articles and tutorials.",
}

export default async function BlogPage() {
  const posts = allCoreContent(sortedBlogPost(allBlogs)) as Blog[]
  const tags = await getAllTags(allBlogs)

  return (
    <div className="relative min-h-screen bg-[#030014]">
      {/* Minimal Grid Background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #ffffff08 1px, transparent 1px), linear-gradient(to bottom, #ffffff08 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Subtle gradient orb */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute right-[15%] top-[10%] size-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            {/* Author Image */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 opacity-70 blur"></div>
                <Image
                  src="/assets/ola.jpeg"
                  alt="Olasunkanmi Oyinlola"
                  width={96}
                  height={96}
                  className="relative size-24 rounded-full border-2 border-zinc-800 object-cover"
                  priority={true}
                />
              </div>
            </div>

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

            {/* Stats */}
            <div className="flex items-center justify-center gap-8">
              <div className="flex items-center gap-2 text-sm text-zinc-400">
                <div className="size-1.5 rounded-full bg-cyan-500"></div>
                {posts.length} Articles
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
              <BlogList posts={posts} allTags={tags} />
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
                      {posts.length}
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
