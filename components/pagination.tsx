import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"

import { cn } from "@/lib/utils"

interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {
  totalPages: number
  currentPage: number
}

export function Pagination({
  totalPages,
  currentPage,
  className,
  ...props
}: PaginationProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  function generatePageLink(page: number) {
    const params = new URLSearchParams(searchParams?.toString() ?? "")
    params.set("page", page.toString())
    return `${pathname}?${params.toString()}`
  }

  return (
    <div
      className={cn("flex items-center justify-center space-x-2", className)}
      {...props}
    >
      <Link
        href={generatePageLink(currentPage - 1)}
        className={cn(
          "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 text-sm text-zinc-300 transition-colors hover:border-zinc-700 hover:text-zinc-100",
          currentPage <= 1 && "pointer-events-none opacity-50"
        )}
        aria-label="Previous page"
      >
        <svg
          className="size-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </Link>

      <div className="flex items-center space-x-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Link
            key={page}
            href={generatePageLink(page)}
            className={cn(
              "inline-flex h-9 w-9 items-center justify-center rounded-lg border text-sm transition-colors",
              page === currentPage
                ? "border-cyan-500 bg-cyan-500/10 text-cyan-500"
                : "border-zinc-800 text-zinc-300 hover:border-zinc-700 hover:text-zinc-100"
            )}
          >
            {page}
          </Link>
        ))}
      </div>

      <Link
        href={generatePageLink(currentPage + 1)}
        className={cn(
          "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 text-sm text-zinc-300 transition-colors hover:border-zinc-700 hover:text-zinc-100",
          currentPage >= totalPages && "pointer-events-none opacity-50"
        )}
        aria-label="Next page"
      >
        <svg
          className="size-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Link>
    </div>
  )
}
