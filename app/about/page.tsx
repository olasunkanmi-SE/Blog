
import Link from "next/link"
import { notFound } from "next/navigation"
import { allAuthors } from "@/.contentlayer/generated/index.mjs"
import { Mdx } from "@/components/mdx/mdx"
import siteMetadata from "@/config/site-metadata"

export const metadata = {
  title: "About",
}

export default function About() {
  const author = allAuthors.find((p) => p.slug === "default")
  if (!author) notFound()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-amber-400/5"></div>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-amber-600/10 dark:from-blue-400/5 dark:via-purple-400/5 dark:to-amber-400/5"></div>
        <div className="container relative mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex items-center rounded-full bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-3 text-sm font-medium text-blue-600 shadow-lg dark:from-blue-900/20 dark:to-purple-900/20 dark:text-blue-400">
              <span className="mr-2 text-lg">👋</span>
              Welcome to my digital space
            </div>
            
            <h1 className="mb-8 text-5xl font-bold leading-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Olasunkanmi
              </span>
            </h1>
            
            <p className="mb-8 max-w-2xl mx-auto text-lg leading-relaxed text-gray-600 dark:text-gray-300 md:text-xl lg:text-2xl">
              Software engineer crafting{" "}
              <span className="font-semibold text-gray-900 dark:text-white">robust</span> and{" "}
              <span className="font-semibold text-gray-900 dark:text-white">innovative</span> solutions.
              Currently exploring the frontiers of{" "}
              <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI & Machine Learning
              </span>
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
              <Link
                href="/blog"
                className="group inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-amber-600 to-orange-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-amber-300 dark:focus:ring-amber-800"
              >
                <span className="mr-2">📖</span>
                Explore my blog
                <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link
                href={siteMetadata.youtube || "#"}
                className="group inline-flex items-center justify-center rounded-2xl border-2 border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-700 shadow-lg transition-all duration-300 hover:scale-105 hover:border-gray-400 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:ring-gray-600"
              >
                <span className="mr-2">🎥</span>
                Watch videos
                <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M15 14h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-12 gap-4">
            {/* First 3 columns */}
            <div className="col-span-2">
              <div className="relative flex flex-col items-center space-x-2 pt-8">
                <div className="flex space-x-3 pt-6"></div>
              </div>
            </div>

            {/* Middle 6 columns */}
            <div className="col-span-8 py-8 text-gray-700 dark:text-gray-300">
              <div className="space-y-2 pb-8 pt-6 md:space-y-5">
                <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 text-center">
                  About me
                </h2>
                <hr className="border-gray-200 dark:border-gray-700" />
              </div>
              <Mdx code={author.body.code} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
