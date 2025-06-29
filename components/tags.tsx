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
            className="flex items-center gap-1 rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-sm text-zinc-400 transition-all duration-200 hover:border-zinc-700 hover:text-zinc-300"
          >
            <Tag text={t} className="text-sm lowercase" />
            <Link
              href={`/tags/${slug(t)}`}
              className="text-xs text-zinc-500"
              aria-label={`View posts tagged ${t}`}
            >
              {tags[t] === 1 ? " 1" : ` (${tags[t]})`}
            </Link>
          </div>
        )
      })}
    </div>
  )
}
