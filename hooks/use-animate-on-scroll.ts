import { useEffect, useState } from "react"

type AnimateOnScrollOptions = {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

export function useAnimateOnScroll(options: AnimateOnScrollOptions = {}) {
  const [isVisible, setIsVisible] = useState(false)
  const [ref, setRef] = useState<HTMLElement | null>(null)

  useEffect(() => {
    if (!ref) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (options.once && ref) {
            observer.unobserve(ref)
          }
        } else if (!options.once) {
          setIsVisible(false)
        }
      },
      {
        threshold: options.threshold ?? 0.1,
        rootMargin: options.rootMargin ?? "0px",
      }
    )

    observer.observe(ref)

    return () => {
      if (ref) {
        observer.unobserve(ref)
      }
    }
  }, [ref, options.once, options.threshold, options.rootMargin])

  return [setRef, isVisible] as const
}
