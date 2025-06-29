"use client"

import { useEffect, useState } from "react"

interface TOCItem {
  id: string
  level: number
  text: string
}

function createIdFromText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<TOCItem[]>([])
  const [activeId, setActiveId] = useState("")

  useEffect(() => {
    // Find the main article content
    const articleContent = document.querySelector("article.prose")
    if (!articleContent) {
      console.warn("No article content found")
      return
    }

    // Select headings within the article content
    const elements = Array.from(articleContent.querySelectorAll("h2, h3, h4"))
      .filter((elem) => {
        // Filter out empty headings or those marked to be excluded from TOC
        const text = elem.textContent?.trim() || ""
        const shouldExclude =
          elem.hasAttribute("data-toc-exclude") ||
          elem.closest(".not-prose") !== null // Exclude headings in .not-prose sections
        return text.length > 0 && !shouldExclude
      })
      .map((elem) => {
        // If the heading doesn't have an ID, create one
        if (!elem.id) {
          elem.id = createIdFromText(elem.textContent || "")
        }
        return {
          id: elem.id,
          text: elem.textContent || "",
          level: Number(elem.tagName.charAt(1)),
        }
      })

    setHeadings(elements)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "0% 0% -80% 0%" }
    )

    elements.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="sticky top-8 ml-8 hidden max-h-[calc(100vh-4rem)] overflow-auto rounded-lg border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm lg:block">
      <h2 className="mb-4 flex items-center gap-2 text-lg font-medium text-white">
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
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
        Table of Contents
      </h2>
      <ul className="space-y-2.5 text-sm">
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{
              paddingLeft: `${(heading.level - 2) * 1}rem`,
            }}
          >
            <a
              href={`#${heading.id}`}
              className={`group flex items-center text-zinc-400 transition-colors hover:text-cyan-400 ${
                activeId === heading.id ? "text-cyan-400" : ""
              }`}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(heading.id)?.scrollIntoView({
                  behavior: "smooth",
                })
              }}
            >
              {heading.level === 2 && (
                <svg
                  className="mr-2 size-3 text-zinc-600 transition-colors group-hover:text-cyan-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              )}
              {heading.level === 3 && (
                <span className="mr-2 text-zinc-600">•</span>
              )}
              <span className={heading.level > 2 ? "text-[13px]" : ""}>
                {heading.text}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
