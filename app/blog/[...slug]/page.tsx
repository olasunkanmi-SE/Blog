import "@/styles/mdx.css"

import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import type { Blog } from "contentlayer/generated"
import { allAuthors, allBlogs } from "contentlayer/generated"

import { formatDate } from "@/lib/utils"

import Comments from "@/components/comments"
import ScrollTopAndComment from "@/components/floating-buttons"
import { Mdx } from "@/components/mdx/mdx"
import { ReadingProgress } from "@/components/mdx/reading-progress"
import { TableOfContents } from "@/components/mdx/toc"

import { coreContent, sortedBlogPost } from "../../../lib/contentlayer"

interface BlogPostPageProps {
  params: {
    slug: string[]
  }
}

interface PostPageDetails {
  post: Blog
  prev: ReturnType<typeof coreContent> | null
  next: ReturnType<typeof coreContent> | null
  authorDetails: (ReturnType<typeof coreContent> | null)[]
}

async function getPostFromParams(
  params: BlogPostPageProps["params"]
): Promise<PostPageDetails | null> {
  const slug = params.slug.join("/")
  const sortedPosts = sortedBlogPost(allBlogs) as Blog[]
  const postIndex = sortedPosts.findIndex((p) => p.slug === slug)
  if (postIndex === -1) return null
  const post = sortedPosts[postIndex]
  const prevContent = sortedPosts[postIndex + 1] || null
  const prev =
    (prevContent && (prevContent?.draft ? null : coreContent(prevContent))) ||
    null
  const nextContent = sortedPosts[postIndex - 1] || null
  const next =
    (nextContent && (nextContent?.draft ? null : coreContent(nextContent))) ||
    null

  const authorList = post.authors || ["default"]
  const authorDetails = authorList.map((author) => {
    const authorResults = allAuthors.find((p) => p.slug === author)
    if (!authorResults) return null
    return coreContent(authorResults)
  })

  return {
    post,
    prev,
    next,
    authorDetails,
  }
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const details = await getPostFromParams(params)

  if (!details || !details.post) {
    return {}
  }

  const post = details.post

  const ogParams = new URLSearchParams()
  ogParams.set("heading", post.title)
  ogParams.set("type", "Blog Post")
  ogParams.set("mode", "dark")

  return {
    title: post.title,
    description: post.summary,
    authors: post.authors?.map((author) => ({
      name: author,
    })),
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      url: `/blog/${post.slug}`,
      images: [
        {
          url: `/api/og?${ogParams.toString()}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      images: [`/api/og?${ogParams.toString()}`],
    },
  }
}

export async function generateStaticParams(): Promise<
  BlogPostPageProps["params"][]
> {
  return allBlogs.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const pageDetails = await getPostFromParams(params)
  if (!pageDetails) return notFound()
  const { post, prev, next, authorDetails } = pageDetails
  const { date, title } = post
  const jsonLd = post.structuredData
  jsonLd["author"] = authorDetails.map((author) => {
    return {
      "@type": "Person",
      name: author?.name,
    }
  })

  if (!post || post.draft) {
    notFound()
  }

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

      <ReadingProgress />

      <div className="container relative z-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 lg:flex-row lg:gap-12 lg:px-6 lg:py-16">
          <div className="flex-1">
            <article className="prose prose-invert prose-zinc prose-headings:scroll-mt-20 prose-headings:text-white prose-h2:border-b prose-h2:border-zinc-800 prose-p:text-zinc-400 prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:text-cyan-300 prose-blockquote:border-l-2 prose-blockquote:border-zinc-800 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-zinc-400 max-w-none">
              <header className="not-prose mb-8 lg:mb-16">
                <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                  <div className="flex flex-wrap gap-3">
                    <time
                      dateTime={date}
                      className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 text-xs text-zinc-400 sm:px-4 sm:py-2 sm:text-sm"
                    >
                      {formatDate(date)}
                    </time>
                    <div className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 text-xs text-zinc-400 sm:px-4 sm:py-2 sm:text-sm">
                      {post.readingTime?.text ?? "5 min read"}
                    </div>
                  </div>
                  {post.tags && (
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Link
                          key={tag}
                          href={`/tags/${tag}`}
                          className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 text-xs text-zinc-400 transition-colors hover:text-cyan-400 sm:px-4 sm:py-2 sm:text-sm"
                        >
                          #{tag}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <h1 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:mb-8 lg:text-6xl">
                  {title}
                </h1>

                <div className="flex justify-start">
                  <ul className="flex flex-wrap gap-3">
                    {authorDetails.map((author) =>
                      !author ? null : (
                        <li
                          key={author.name}
                          className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm"
                        >
                          <span className="text-zinc-400">{author.name}</span>
                          {author.twitter && (
                            <Link
                              href={author.twitter}
                              className="text-cyan-400 transition-colors hover:text-cyan-300"
                            >
                              {author.twitter.replace(
                                "https://twitter.com/",
                                "@"
                              )}
                            </Link>
                          )}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </header>

              <div className="prose-headings:scroll-mt-20 prose-p:leading-relaxed prose-pre:my-6 prose-pre:overflow-x-auto prose-pre:rounded-lg prose-pre:bg-zinc-900/75 prose-pre:p-4">
                <Mdx code={post.body.code} />
              </div>

              {/* Post Footer */}
              <div className="not-prose mt-12 border-t border-zinc-800 pt-8 lg:mt-16">
                <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:gap-8">
                  {prev && (
                    <Link
                      href={`/blog/${prev.slug}`}
                      className="group flex flex-col gap-2 sm:max-w-[calc(50%-1rem)]"
                    >
                      <span className="text-xs text-zinc-400 sm:text-sm">
                        Previous article
                      </span>
                      <span className="text-sm font-medium text-zinc-200 transition-colors group-hover:text-cyan-400 sm:text-base">
                        {prev.title}
                      </span>
                    </Link>
                  )}
                  {next && (
                    <Link
                      href={`/blog/${next.slug}`}
                      className="group flex flex-col gap-2 text-right sm:ml-auto sm:max-w-[calc(50%-1rem)]"
                    >
                      <span className="text-xs text-zinc-400 sm:text-sm">
                        Next article
                      </span>
                      <span className="text-sm font-medium text-zinc-200 transition-colors group-hover:text-cyan-400 sm:text-base">
                        {next.title}
                      </span>
                    </Link>
                  )}
                </div>

                <div className="mt-8 flex justify-center">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 text-xs text-zinc-400 transition-colors hover:text-cyan-400 sm:px-4 sm:py-2 sm:text-sm"
                  >
                    <svg
                      className="size-3.5 sm:size-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16l-4-4m0 0l4-4m-4 4h18"
                      />
                    </svg>
                    Back to blog
                  </Link>
                </div>
              </div>
            </article>
          </div>

          {/* Table of Contents Sidebar */}
          <div className="hidden lg:block">
            <TableOfContents />
          </div>
        </div>
      </div>

      <Comments />
      <ScrollTopAndComment />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  )
}
