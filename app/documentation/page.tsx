"use client"

import { useState } from "react"
import Link from "next/link"

// Note: Since we're using client components, we'll handle metadata differently
export default function Documentation() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div className="flex min-h-screen w-full bg-white dark:bg-gray-900">
      {/* Mobile menu button */}
      <div className="fixed left-4 top-4 z-50 lg:hidden">
        <button
          onClick={toggleSidebar}
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:hover:bg-gray-800"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="block size-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden"
          onClick={toggleSidebar}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              toggleSidebar()
            }
          }}
          tabIndex={0}
          role="button"
          aria-label="Close Sidebar"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-40 h-screen w-80 overflow-y-auto border-r border-gray-200 bg-white transition-transform duration-300 ease-in-out dark:border-gray-800 dark:bg-gray-900 sm:w-64 lg:translate-x-0${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:relative lg:z-auto lg:w-64 lg:shrink-0`}
      >
        <div className="p-6">
          {/* Close button for mobile */}
          <div className="mb-6 flex items-center justify-between lg:hidden">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Documentation
            </h2>
            <button
              onClick={toggleSidebar}
              className="rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 dark:hover:bg-gray-800"
            >
              <svg
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Logo - hidden on mobile when close button is shown */}
          <div className="mb-8 hidden lg:block">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Documentation
            </h2>
          </div>

          {/* Navigation */}
          <nav className="space-y-8">
            {/* GET STARTED */}
            <div>
              <h3 className="mb-4 text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Get Started
              </h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/docs/overview"
                    className="block rounded-md bg-gray-100 px-3 py-2 text-sm font-medium text-gray-900 dark:bg-gray-800 dark:text-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Overview
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/quickstart"
                    className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Quickstart
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/models"
                    className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Models
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/pricing"
                    className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/libraries"
                    className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Libraries
                  </Link>
                </li>
              </ul>
            </div>

            {/* GUIDES */}
            <div>
              <h3 className="mb-4 text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Guides
              </h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/docs/guides/frontend"
                    className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Frontend integration
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/guides/backend"
                    className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Backend integration
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/guides/streaming"
                    className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Streaming
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/guides/prompt-engineering"
                    className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Prompt engineering
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/guides/safety"
                    className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Safety & guardrails
                  </Link>
                </li>
              </ul>
            </div>

            {/* API REFERENCE */}
            <div>
              <h3 className="mb-4 text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
                API Reference
              </h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/docs/api/messages"
                    className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Messages
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/api/completions"
                    className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Completions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/api/streaming"
                    className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Streaming API
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/api/authentication"
                    className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Authentication
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/api/errors"
                    className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Error handling
                  </Link>
                </li>
              </ul>
            </div>

            {/* EXAMPLES */}
            <div>
              <h3 className="mb-4 text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Examples
              </h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/docs/examples/chatbot"
                    className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Chatbot
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/examples/content-generation"
                    className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Content generation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/examples/code-assistant"
                    className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Code assistant
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="w-full flex-1 lg:ml-0">
        <div className="container mx-auto min-h-screen max-w-4xl px-4 py-8 pt-16 sm:px-6 lg:pt-8">
          {/* Header Section */}
          <div className="mb-12 text-center">
            <div className="mb-4 flex flex-col justify-center space-y-2 text-sm sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link
                href="/login"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
              >
                Sign up
              </Link>
            </div>

            <h1 className="mb-8 text-3xl font-bold text-gray-900 dark:text-gray-100 md:text-4xl lg:text-5xl">
              Developer Documentation
            </h1>

            {/* Quick Start Card */}
            <div className="mx-auto mb-8 max-w-md rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <Link href="/docs/quickstart" className="block">
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Developer quickstart
                </h3>
                <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                  Make your first API request in minutes. Learn the basics of
                  modern development.
                </p>
                <span className="text-xs text-blue-600 dark:text-blue-400">
                  5 min
                </span>
              </Link>
            </div>
          </div>

          {/* Code Examples Section */}
          <div className="mb-12">
            <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900 md:p-6">
              {/* Language Tabs */}
              <div className="mb-4 flex space-x-4 overflow-x-auto border-b border-gray-200 dark:border-gray-700">
                <button className="whitespace-nowrap border-b-2 border-blue-500 pb-2 text-sm font-medium text-blue-600 dark:text-blue-400">
                  curl
                </button>
                <button className="whitespace-nowrap pb-2 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                  javascript
                </button>
                <button className="whitespace-nowrap pb-2 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                  python
                </button>
              </div>

              {/* Code Block */}
              <div className="overflow-x-auto">
                <pre className="text-xs text-gray-800 dark:text-gray-200 md:text-sm">
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
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 md:text-2xl">
                Browse Technologies
              </h2>
              <Link
                href="/docs/technologies"
                className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 md:text-base"
              >
                View all
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Link
                href="/docs/nextjs"
                className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
              >
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
                  Next.js 14
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Full-stack React framework for production
                </p>
              </Link>

              <Link
                href="/docs/typescript"
                className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
              >
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
                  TypeScript
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Type-safe JavaScript development
                </p>
              </Link>

              <Link
                href="/docs/tailwind"
                className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
              >
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
            <h2 className="mb-8 text-xl font-bold text-gray-900 dark:text-gray-100 md:text-2xl">
              Start building
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Link
                href="/docs/guides/frontend"
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
              >
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
                  Frontend Development
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Build modern user interfaces with React and Next.js
                </p>
              </Link>

              <Link
                href="/docs/guides/backend"
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
              >
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
                  Backend APIs
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Create robust APIs and server-side applications
                </p>
              </Link>

              <Link
                href="/docs/guides/database"
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
              >
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
                  Database Integration
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Connect and manage databases effectively
                </p>
              </Link>

              <Link
                href="/docs/guides/deployment"
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
              >
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
                  Deployment
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Deploy applications to production environments
                </p>
              </Link>

              <Link
                href="/docs/guides/blockchain"
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
              >
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
                  Blockchain Development
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Build decentralized applications and smart contracts
                </p>
              </Link>

              <Link
                href="/docs/guides/ai"
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
              >
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
                  AI Integration
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Integrate AI capabilities into your applications
                </p>
              </Link>

              <Link
                href="/docs/guides/testing"
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
              >
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
                  Testing & Quality
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Implement comprehensive testing strategies
                </p>
              </Link>

              <Link
                href="/docs/guides/performance"
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
              >
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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/help"
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
            >
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
                Help center
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Frequently asked development and deployment questions
              </p>
            </Link>

            <Link
              href="/forum"
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
            >
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
                Developer forum
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Discuss topics with other developers
              </p>
            </Link>

            <Link
              href="/examples"
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
            >
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
                Code Examples
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Open-source collection of examples and guides
              </p>
            </Link>

            <Link
              href="/status"
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
            >
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
