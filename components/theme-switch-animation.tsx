import { useEffect, useState } from "react"

import { AnimatePresence, motion } from "framer-motion"

type ThemeSwitchAnimationProps = {
  isDark: boolean
}

export function ThemeSwitchAnimation({ isDark }: ThemeSwitchAnimationProps) {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    setIsAnimating(true)
    const timer = setTimeout(() => setIsAnimating(false), 1000)
    return () => clearTimeout(timer)
  }, [isDark])

  return (
    <AnimatePresence>
      {isAnimating && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          exit={{ opacity: 0 }}
          className="pointer-events-none fixed inset-0 z-[9999]"
          style={{
            background: `radial-gradient(circle at ${isDark ? "center top" : "center bottom"}, 
              ${isDark ? "rgb(3, 0, 20)" : "rgb(244, 244, 245)"}, transparent)`,
          }}
        />
      )}
    </AnimatePresence>
  )
}
