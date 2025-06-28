import { useCallback, useState } from "react"
import { useRouter } from "next/navigation"
import debounce from "lodash/debounce"

import { cn } from "@/lib/utils"

interface SearchProps extends React.HTMLAttributes<HTMLFormElement> {
  readonly defaultValue?: string
}

export function Search({ className, defaultValue, ...props }: Readonly<SearchProps>) {
  const router = useRouter()
  const [value, setValue] = useState(defaultValue ?? "")

  const handleSearch = useCallback((searchValue: string) => {
    const searchParams = new URLSearchParams(window.location.search)
    if (searchValue) {
      searchParams.set("q", searchValue)
    } else {
      searchParams.delete("q")
    }

    const newPath = window.location.pathname + "?" + searchParams.toString()
    router.push(newPath)
  }, [router])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setValue(newValue)
    
    // Debounce the search to prevent too many URL updates
    const debouncedFn = debounce(() => handleSearch(newValue), 300)
    debouncedFn()
  }

  // Prevent form submission since we're handling search on change
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("relative w-full", className)}
      {...props}
    >
      <div className="relative">
        <input
          type="search"
          placeholder="Search articles..."
          value={value}
          onChange={handleSearchChange}
          className="w-full rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-2 pl-10 text-sm text-zinc-300 placeholder:text-zinc-500 focus:border-zinc-700 focus:outline-none focus:ring-1 focus:ring-zinc-700"
        />
        <svg
          className="absolute left-3 top-2.5 size-4 text-zinc-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </form>
  )
}
