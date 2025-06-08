
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Documentation",
  description: "Developer documentation and guides for building with modern web technologies",
}

export default function Documentation() {
  return (
    <div className="flex min-h-screen bg-white dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-30 h-full w-64 overflow-y-auto bg-black text-white">
        <div className="p-6">
          {/* Logo */}
          <div className="mb-6">
            <h2 className="text-xl font-bold">Developer Platform</h2>
          </div>

          {/* Search */}
          <div className="mb-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search"
                className="w-full rounded-md border border-gray-600 bg-gray-800 py-2 pl-10 pr-8 text-sm text-white placeholder-gray-400 focus:border-gray-500 focus:outline-none"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <span className="text-xs text-gray-400">⌘K</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-6">
            {/* GET STARTED */}
            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                GET STARTED
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/docs/overview" className="block rounded-md bg-gray-700 px-3 py-2 text-sm text-white">
                    Overview
                  </Link>
                </li>
                <li>
                  <Link href="/docs/quickstart" className="block px-3 py-2 text-sm text-gray-300 hover:text-white">
                    Quickstart
                  </Link>
                </li>
                <li>
                  <Link href="/docs/models" className="block px-3 py-2 text-sm text-gray-300 hover:text-white">
                    Models
                  </Link>
                </li>
                <li>
                  <Link href="/docs/pricing" className="block px-3 py-2 text-sm text-gray-300 hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/docs/libraries" className="block px-3 py-2 text-sm text-gray-300 hover:text-white">
                    Libraries
                  </Link>
                </li>
              </ul>
            </div>

            {/* CORE CONCEPTS */}
            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                CORE CONCEPTS
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/docs/text-prompting" className="block px-3 py-2 text-sm text-gray-300 hover:text-white">
                    Text and prompting
                  </Link>
                </li>
                <li>
                  <Link href="/docs/images-vision" className="block px-3 py-2 text-sm text-gray-300 hover:text-white">
                    Images and vision
                  </Link>
                </li>
                <li>
                  <Link href="/docs/audio-speech" className="block px-3 py-2 text-sm text-gray-300 hover:text-white">
                    Audio and speech
                  </Link>
                </li>
                <li>
                  <Link href="/docs/structured-outputs" className="block px-3 py-2 text-sm text-gray-300 hover:text-white">
                    Structured Outputs
                  </Link>
                </li>
                <li>
                  <Link href="/docs/function-calling" className="block px-3 py-2 text-sm text-gray-300 hover:text-white">
                    Function calling
                  </Link>
                </li>
                <li>
                  <Link href="/docs/conversation-state" className="block px-3 py-2 text-sm text-gray-300 hover:text-white">
                    Conversation state
                  </Link>
                </li>
                <li>
                  <Link href="/docs/reasoning" className="block px-3 py-2 text-sm text-gray-300 hover:text-white">
                    Reasoning
                  </Link>
                </li>
                <li>
                  <Link href="/docs/streaming" className="block px-3 py-2 text-sm text-gray-300 hover:text-white">
                    Streaming
                  </Link>
                </li>
                <li>
                  <Link href="/docs/file-inputs" className="block px-3 py-2 text-sm text-gray-300 hover:text-white">
                    File inputs
                  </Link>
                </li>
                <li>
                  <Link href="/docs/background" className="block px-3 py-2 text-sm text-gray-300 hover:text-white">
                    Background
                  </Link>
                </li>
              </ul>
            </div>

            {/* TOOLS */}
            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                TOOLS
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/docs/using-tools" className="block px-3 py-2 text-sm text-gray-300 hover:text-white">
                    Using tools
                  </Link>
                </li>
                <li>
                  <Link href="/docs/cookbook" className="flex items-center px-3 py-2 text-sm text-gray-300 hover:text-white">
                    <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Cookbook
                  </Link>
                </li>
                <li>
                  <Link href="/docs/forum" className="flex items-center px-3 py-2 text-sm text-gray-300 hover:text-white">
                    <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Forum
                  </Link>
                </li>
                <li>
                  <Link href="/docs/help" className="flex items-center px-3 py-2 text-sm text-gray-300 hover:text-white">
                    <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Help
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1">
        <div className="container mx-auto max-w-4xl px-6 py-8">
          {/* Header Section */}
          <div className="mb-12 text-center">
            <div className="mb-4 flex justify-center space-x-4 text-sm">
              <Link href="/login" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
                Log in
              </Link>
              <Link href="/signup" className="rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                Sign up
              </Link>
            </div>
            
            <h1 className="mb-8 text-4xl font-bold text-gray-900 dark:text-gray-100 md:text-5xl">
              Developer Documentation
            </h1>

            {/* Quick Start Card */}
            <div className="mx-auto mb-8 max-w-md rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <Link href="/docs/quickstart" className="block">
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Developer quickstart
                </h3>
                <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                  Make your first API request in minutes. Learn the basics of modern development.
                </p>
                <span className="text-xs text-blue-600 dark:text-blue-400">5 min</span>
              </Link>
            </div>
          </div>

          {/* Code Examples Section */}
          <div className="mb-12">
            <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-900">
              {/* Language Tabs */}
              <div className="mb-4 flex space-x-4 border-b border-gray-200 dark:border-gray-700">
                <button className="border-b-2 border-blue-500 pb-2 text-sm font-medium text-blue-600 dark:text-blue-400">
                  curl
                </button>
                <button className="pb-2 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                  javascript
                </button>
                <button className="pb-2 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                  python
                </button>
              </div>

              {/* Code Block */}
              <div className="overflow-x-auto">
                <pre className="text-sm text-gray-800 dark:text-gray-200">
                  <code>{`curl https://api.example.com/v1/requests \\
    -H "Content-Type: application/json" \\
    -H "Authorization: Bearer $API_KEY" \\
    -d '{
        "model": "gpt-4o",
        "input": "Write a one-sentence bedtime story about a unicorn."
    }'`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Browse Models Section */}
          <div className="mb-12">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Browse Technologies
              </h2>
              <Link href="/docs/technologies" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                View all
              </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Link href="/docs/nextjs" className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
                  Next.js 14
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Full-stack React framework for production
                </p>
              </Link>

              <Link href="/docs/typescript" className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
                  TypeScript
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Type-safe JavaScript development
                </p>
              </Link>

              <Link href="/docs/tailwind" className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
                  Tailwind CSS
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Utility-first CSS framework
                </p>
              </Link>
            </div>
          </div>

          {/* Start Building Section */}
          <div className="mb-12">
            <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-gray-100">
              Start building
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Link href="/docs/guides/frontend" className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
                  Frontend Development
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Build modern user interfaces with React and Next.js
                </p>
              </Link>

              <Link href="/docs/guides/backend" className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
                  Backend APIs
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Create robust APIs and server-side applications
                </p>
              </Link>

              <Link href="/docs/guides/database" className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
                  Database Integration
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Connect and manage databases effectively
                </p>
              </Link>

              <Link href="/docs/guides/deployment" className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
                  Deployment
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Deploy applications to production environments
                </p>
              </Link>

              <Link href="/docs/guides/blockchain" className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
                  Blockchain Development
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Build decentralized applications and smart contracts
                </p>
              </Link>

              <Link href="/docs/guides/ai" className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
                  AI Integration
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Integrate AI capabilities into your applications
                </p>
              </Link>

              <Link href="/docs/guides/testing" className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
                  Testing & Quality
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Implement comprehensive testing strategies
                </p>
              </Link>

              <Link href="/docs/guides/performance" className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
                  Performance Optimization
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Optimize applications for speed and efficiency
                </p>
              </Link>
            </div>
          </div>

          {/* Resources Section */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Link href="/help" className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
                Help center
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Frequently asked development and deployment questions
              </p>
            </Link>

            <Link href="/forum" className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
                Developer forum
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Discuss topics with other developers
              </p>
            </Link>

            <Link href="/examples" className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
                Code Examples
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Open-source collection of examples and guides
              </p>
            </Link>

            <Link href="/status" className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
                Status
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Check the status of development services
              </p>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
