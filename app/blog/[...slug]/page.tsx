import "@/styles/mdx.css"

import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import type { Blog } from "contentlayer/generated"
import { allAuthors, allBlogs } from "contentlayer/generated"

import siteMetadata from "@/config/site-metadata"

import { formatDate } from "@/lib/utils"

import Comments from "@/components/comments"
import ScrollTopAndComment from "@/components/floating-buttons"
import { Mdx } from "@/components/mdx/mdx"

import { coreContent, sortedBlogPost } from "../../../lib/contentlayer"

const editUrl = (path: string) =>
  `${siteMetadata.siteRepo}/blob/main/data/${path}`
const discussUrl = (path: string) =>
  `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `${siteMetadata.siteUrl}/${path}`
  )}`

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
  const { post, authorDetails } = pageDetails
  const { filePath, path, date, title } = post
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
    <>
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

        <article className="container relative z-10">
          <div className="mx-auto max-w-3xl px-6 py-16">
            <header className="mb-16 text-center">
              <div className="mb-4 flex items-center justify-center">
                <time
                  dateTime={date}
                  className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm text-zinc-400"
                >
                  {formatDate(date)}
                </time>
              </div>

              <h1 className="mb-8 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {title}
              </h1>

              {/* Author */}
              <div className="flex justify-center">
                <ul className="flex flex-wrap items-center gap-4">
                  {authorDetails.map((author) =>
                    !author ? null : (
                      <li
                        key={author.name}
                        className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-2"
                      >
                        <span className="text-sm text-zinc-400">
                          {author.name}
                        </span>
                        {author.twitter && (
                          <Link
                            href={author.twitter}
                            className="text-sm text-cyan-400 hover:text-cyan-300"
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

            <div className="prose prose-invert mx-auto max-w-none rounded-lg border border-zinc-800 bg-zinc-900/50 p-8 backdrop-blur-sm">
              <Mdx code={post.body.code} />
            </div>

            <footer className="mt-16 flex items-center justify-center gap-4 text-sm text-zinc-400">
              <a
                href={discussUrl(path)}
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-2 transition-colors hover:text-cyan-400"
              >
                <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
                Discuss on Twitter
              </a>
              <a
                href={editUrl(filePath)}
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-2 transition-colors hover:text-cyan-400"
              >
                <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View on GitHub
              </a>
            </footer>

            <div className="mt-16">
              <Comments />
            </div>
          </div>
        </article>
      </div>
      <ScrollTopAndComment />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}
