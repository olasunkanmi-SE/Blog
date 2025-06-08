
import Link from "next/link"
import siteMetadata from "@/config/site-metadata"

export default async function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex items-center rounded-md bg-gray-100 dark:bg-gray-800 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              <span className="mr-2">👋</span>
              Welcome to my portfolio
            </div>
            
            <h1 className="mb-8 text-5xl font-bold text-gray-900 dark:text-white sm:text-6xl lg:text-7xl">
              Software Engineer
            </h1>
            
            <p className="mb-12 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Building innovative solutions with modern technologies. Explore my work, read my thoughts, and discover CodeBuddy - my AI coding assistant.
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-md bg-black dark:bg-white px-6 py-3 text-sm font-medium text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              >
                About Me
              </Link>
              
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-6 py-3 text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                View Projects
              </Link>

              <Link
                href="/codeBuddy"
                className="inline-flex items-center justify-center rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-6 py-3 text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                CodeBuddy AI
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Cards Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            <Link
              href="/blog"
              className="group rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                📝
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                Blog
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Read my thoughts on software development, AI, and technology trends.
              </p>
            </Link>

            <Link
              href="/documentation"
              className="group rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                📚
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                Documentation
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Technical guides and documentation for developers.
              </p>
            </Link>

            <Link
              href="/projects"
              className="group rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                🚀
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                Projects
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Explore my latest work and open source contributions.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
              Featured Work
            </h2>
            
            <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-md bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                🤖
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                CodeBuddy AI
              </h3>
              <p className="mb-6 text-gray-600 dark:text-gray-400">
                An advanced AI coding assistant that helps developers write better code faster. 
                Features include code generation, debugging, documentation, and intelligent suggestions.
              </p>
              <Link
                href="/codeBuddy"
                className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
              >
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
