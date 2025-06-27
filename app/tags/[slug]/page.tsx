import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { allBlogs } from "contentlayer/generated"
import { slug } from "github-slugger"

import { allCoreContent, getAllTags } from "@/lib/contentlayer"
import { formatDate } from "@/lib/utils"

import Tag from "@/components/tag"
import Tags from "@/components/tags"

interface TagPageProps {
  params: {
    slug: string
  }
}

async function getPageFromParams(params: TagPageProps["params"]) {
  const slug = params.slug
  const tags = await getAllTags(allBlogs)
  const page = Object.keys(tags).find((tag) => tag === slug)

  if (!page) {
    null
  }

  return page
}

export async function generateMetadata({
  params,
}: TagPageProps): Promise<Metadata> {
  const page = await getPageFromParams(params)

  if (!page) {
    return {}
  }

  return {
    title: page,
  }
}

export async function generateStaticParams(): Promise<
  TagPageProps["params"][]
> {
  const tags = await getAllTags(allBlogs)
  return Object.keys(tags).map((doc) => ({
    slug: doc,
  }))
}

export default async function PagePage({ params }: TagPageProps) {
  const page = await getPageFromParams(params)

  if (!page) {
    notFound()
  }

  const title = page[0].toUpperCase() + page.split(" ").join("-").slice(1)

  const tags = await getAllTags(allBlogs)
  const posts = allCoreContent(
    allBlogs.filter(
      (post) =>
        post.draft !== true && post.tags?.map((t) => slug(t)).includes(page)
    )
  )

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

      <div className="container relative z-10 px-6 py-16">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-400">
            Tag
          </div>
          <h1 className="mb-8 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {title}
          </h1>
        </div>

        <div className="mx-auto grid max-w-7xl gap-8 pt-16 lg:grid-cols-[2fr,1fr]">
          {/* Posts List */}
          <div className="space-y-8">
            {posts.map((post) => {
              const { slug, date, title, summary, tags } = post
              return (
                <article
                  key={slug}
                  className="group relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
                >
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
                      {tags && tags.length > 0 && (
                        <div className="mb-3 flex flex-wrap gap-2">
                          {tags.map((tag) => (
                            <Tag
                              key={tag}
                              text={tag}
                              className="rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-xs text-zinc-400 transition-colors hover:border-zinc-700 hover:text-zinc-300"
                            />
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Summary */}
                    <p className="leading-relaxed text-zinc-400">{summary}</p>

                    {/* Meta information */}
                    <div className="flex items-center justify-between border-t border-zinc-800 pt-4">
                      <time dateTime={date} className="text-sm text-zinc-500">
                        {formatDate(date)}
                      </time>

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

          {/* Sidebar */}
          <div className="lg:sticky lg:top-8">
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
                <h2 className="text-lg font-medium text-white">All Tags</h2>
              </div>

              <div className="mt-4">
                <Tags tags={tags} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
