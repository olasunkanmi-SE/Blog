
import Link from "next/link"
import siteMetadata from "@/config/site-metadata"

export default async function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-32 lg:py-40">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-amber-600/10 dark:from-blue-400/5 dark:via-purple-400/5 dark:to-amber-400/5"></div>
        <div className="container relative mx-auto px-6">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-8 inline-flex items-center rounded-full bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-3 text-sm font-medium text-blue-600 shadow-lg dark:from-blue-900/20 dark:to-purple-900/20 dark:text-blue-400">
              <span className="mr-2 text-lg">✨</span>
              Welcome to my portfolio
            </div>
            
            <h1 className="mb-8 text-6xl font-bold leading-tight text-gray-900 dark:text-white sm:text-7xl lg:text-8xl">
              Software{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Engineer
              </span>
            </h1>
            
            <p className="mb-8 max-w-3xl mx-auto text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:text-2xl">
              Building innovative solutions with modern technologies. Explore my work, read my thoughts, and discover CodeBuddy - my AI coding assistant.
            </p>
            
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-center">
              <Link
                href="/about"
                className="group inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
              >
                <span className="mr-2">👨‍💻</span>
                About Me
                <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link
                href="/projects"
                className="group inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800"
              >
                <span className="mr-2">🚀</span>
                View Projects
                <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              <Link
                href="/codeBuddy"
                className="group inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-amber-600 to-orange-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-amber-300 dark:focus:ring-amber-800"
              >
                <span className="mr-2">🤖</span>
                CodeBuddy AI
                <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <Link
              href="/blog"
              className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                📝
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                Blog
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Read my thoughts on software development, AI, and technology trends.
              </p>
            </Link>

            <Link
              href="/documentation"
              className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                📚
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                Documentation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Technical guides and documentation for developers.
              </p>
            </Link>

            <Link
              href="/about"
              className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-amber-600 to-orange-600 text-white">
                👨‍💻
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                About
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Learn more about my background, skills, and experience.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
