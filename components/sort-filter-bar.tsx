import { usePathname, useRouter, useSearchParams } from "next/navigation"

import { cn } from "@/lib/utils"

interface SortFilterBarProps extends React.HTMLAttributes<HTMLDivElement> {
  totalPosts: number
}

export function SortFilterBar({
  totalPosts,
  className,
  ...props
}: SortFilterBarProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  function updateSort(sort: string) {
    const params = new URLSearchParams(searchParams?.toString() ?? "")
    if (sort === "date") {
      params.delete("sort")
    } else {
      params.set("sort", sort)
    }
    router.push(`${pathname}?${params.toString()}`)
  }

  const currentSort = searchParams?.get("sort") ?? "date"

  return (
    <div
      className={cn(
        "mb-8 flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0",
        className
      )}
      {...props}
    >
      <p className="text-sm text-zinc-400">
        Showing <span className="font-medium text-zinc-300">{totalPosts}</span>{" "}
        posts
      </p>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-zinc-400">Sort by:</span>
          <select
            value={currentSort}
            onChange={(e) => updateSort(e.target.value)}
            className="rounded-lg border border-zinc-800 bg-zinc-900/50 px-2 py-1 text-sm text-zinc-300 focus:border-zinc-700 focus:outline-none focus:ring-1 focus:ring-zinc-700"
          >
            <option value="date">Date</option>
            <option value="title">Title</option>
            <option value="popularity">Popularity</option>
          </select>
        </div>
      </div>
    </div>
  )
}
