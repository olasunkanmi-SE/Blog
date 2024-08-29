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
    <>
      <div className="container divide-y divide-gray-400 dark:divide-gray-700">
        <div className="space-y-2 py-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
        </div>

        <div className="grid grid-cols-12 gap-3 pt-6 ">
          <div className="col-span-12 col-start-1 sm:col-span-8 ">
            <div className="flex-1 rounded-3xl bg-gradient-to-br from-amber-200  p-px transition duration-300">
              <ul className="flex h-full flex-col justify-between divide-y divide-gray-400 rounded-3xl bg-slate-200 px-6 dark:divide-gray-700 dark:bg-slate-950">
                {posts.map((post) => {
                  const { slug, date, title, summary, tags } = post
                  return (
                    <li key={slug} className="py-6">
                      <article>
                        <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                          <div className="space-y-5 xl:col-span-full">
                            <div className="space-y-6">
                              <div>
                                <h2 className="text-2xl font-bold leading-8 tracking-tight">
                                  <Link
                                    href={`/blog/${slug}`}
                                    className="text-gray-900 dark:text-gray-100"
                                  >
                                    {title}
                                  </Link>
                                </h2>
                                <div className="flex flex-wrap gap-2 pt-2">
                                  {tags &&
                                    tags.map((tag) => (
                                      <Tag
                                        key={tag}
                                        text={tag}
                                        className="2xl rounded-lg bg-amber-600  px-2 py-1 text-sm text-white hover:scale-110 hover:bg-amber-600 dark:bg-yellow-950 "
                                      />
                                    ))}
                                </div>
                              </div>
                              <div className="  max-w-none text-gray-600 dark:text-gray-400">
                                {summary}
                              </div>
                            </div>
                            <div className="flex w-full justify-between text-base font-medium leading-6">
                              <time dateTime={date}>{formatDate(date)}</time>

                              <Link
                                href={`/blog/${slug}`}
                                className="text-primary-700 hover:text-primary-600 dark:text-primary-500 dark:hover:text-primary-400"
                                aria-label={`Read "${title}"`}
                              >
                                Read more &rarr;
                              </Link>
                            </div>
                          </div>
                        </div>
                      </article>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>

          <div className="col-span-12 row-start-3 h-fit divide-y divide-gray-400 rounded-xl bg-gray-200   dark:divide-gray-700  dark:bg-gray-900 sm:col-span-4 sm:col-start-9 sm:row-start-1">
            <div className=" relative h-full rounded-2xl bg-card-gradient-dark p-px dark:bg-card-gradient">
              <div className="flex h-full flex-col gap-4 rounded-2xl bg-gradient-to-b from-slate-200 to-slate-100 p-6 dark:from-slate-950 dark:to-gray-950">
                <h2 className="pb-2  text-2xl font-bold leading-8 tracking-tight">
                  Tags
                </h2>
                <div className="pt-2">
                  <Tags tags={tags} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
