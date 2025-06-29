import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import {
  Action,
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarResults,
  KBarSearch,
  useMatches,
  useRegisterActions,
} from "kbar"

import { formatDate } from "@/lib/utils"

import { CoreContent, MDXDocument } from "../../lib/contentlayer"

export const Portal = ({
  searchDocumentsPath,
}: {
  searchDocumentsPath: string
}) => {
  const [searchActions, setSearchActions] = useState<Action[]>([])
  const router = useRouter()

  useEffect(() => {
    const mapPosts = (posts: CoreContent<MDXDocument>[]) => {
      const actions: Action[] = []
      for (const post of posts) {
        actions.push({
          id: post.path,
          name: post.title,
          keywords: post?.summary || "",
          section: "Content",
          subtitle: formatDate(post.date),
          perform: () => router.push("/" + post.path),
        })
      }
      return actions
    }

    async function fetchData() {
      const res = await fetch(searchDocumentsPath)
      const json = await res.json()
      const actions = mapPosts(json)
      setSearchActions(actions)
    }
    fetchData()
  }, [router, searchDocumentsPath])

  useRegisterActions(searchActions, [searchActions])

  return (
    <KBarPortal>
      <KBarPositioner className="fixed inset-0 z-[9999] bg-[#030014]/80 p-4 backdrop-blur-sm">
        <KBarAnimator className="w-full max-w-xl">
          <div className="overflow-hidden rounded-lg border border-zinc-800 bg-[#030014]/95 backdrop-blur-xl">
            <div className="flex items-center space-x-4 p-4">
              <span className="block w-5">
                <svg
                  className="text-gray-400 dark:text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>
              <KBarSearch className="h-8 w-full bg-transparent text-zinc-400 placeholder:text-zinc-500 focus:outline-none focus:ring-0" />
              <span className="inline-block whitespace-nowrap rounded-full border border-zinc-800 bg-zinc-900/50 px-2 py-1 text-xs font-medium text-zinc-400">
                ESC
              </span>
            </div>
            <RenderResults />
          </div>
        </KBarAnimator>
      </KBarPositioner>
    </KBarPortal>
  )
}

// The default Kbar results component has some issues with preact.
// https://github.com/timc1/kbar/issues/208
// Using custom, non-virtualized implementation in the meantime.
const RenderResults = () => {
  const { results } = useMatches()

  if (results.length) {
    return (
      <KBarResults
        items={results}
        onRender={({ item, active }) => (
          <div>
            {typeof item === "string" ? (
              <div className="pt-3">
                <div className="block border-t border-gray-100 px-4 pb-2 pt-6 text-xs font-semibold uppercase text-primary-600 dark:border-gray-800">
                  {item}
                </div>
              </div>
            ) : (
              <div
                className={`block cursor-pointer px-4 py-2 text-gray-600 hover:text-gray-200 dark:text-gray-200 ${
                  active ? "my-amber !text-gray-200" : "bg-transparent"
                }`}
              >
                {item.subtitle && (
                  <div
                    className={`${
                      active
                        ? "text-gray-200"
                        : "text-gray-400 dark:text-gray-500"
                    } text-xs`}
                  >
                    {item.subtitle}
                  </div>
                )}
                <div>{item.name}</div>
              </div>
            )}
          </div>
        )}
      />
    )
  } else {
    return (
      <div className="block border-t border-gray-100 px-4 py-8 text-center text-gray-400 dark:border-gray-800 dark:text-gray-600">
        No results for your search...
      </div>
    )
  }
}
