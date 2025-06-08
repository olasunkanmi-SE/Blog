import { slug } from "github-slugger"

import Link from "@/components/link"
import Tag from "@/components/tag"

interface TagsProps {
  tags: Record<string, number>
}

export default function Tags({ tags }: TagsProps) {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])
  return (
    <div className="flex  flex-wrap gap-2">
      {Object.keys(tags).length === 0 && "No tags found."}
      {sortedTags.map((t) => {
        return (
          <div
            key={t}
            className="rounded-lg bg-blue-600 px-2 py-1 text-sm text-white hover:scale-110 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all duration-200"
          >
            <Tag text={t} className="mr-3 text-sm font-medium lowercase" />
            <Link
              href={`/tags/${slug(t)}`}
              className="-ml-2 text-sm font-semibold uppercase text-white"
              aria-label={`View posts tagged ${t}`}
            >
              {` (${tags[t]})`}
            </Link>
          </div>
        )
      })}
    </div>
  )
}
