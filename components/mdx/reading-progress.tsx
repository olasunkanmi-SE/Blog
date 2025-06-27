"use client"

import { useEffect, useState } from "react"

export function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const article = document.querySelector("article")
      if (!article) return

      const windowHeight = window.innerHeight
      const articleHeight = article.clientHeight
      const scrollY = window.scrollY
      const totalHeight = articleHeight - windowHeight
      const currentProgress = (scrollY / totalHeight) * 100

      setProgress(Math.min(100, Math.max(0, currentProgress)))
    }

    window.addEventListener("scroll", updateProgress)
    updateProgress()

    return () => window.removeEventListener("scroll", updateProgress)
  }, [])

  return (
    <div className="fixed left-0 top-0 z-50 h-1 w-full bg-zinc-800">
      <div
        className="h-full bg-cyan-500 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
