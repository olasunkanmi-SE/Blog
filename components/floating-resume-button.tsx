"use client"

import { motion } from "framer-motion"

export function FloatingResumeButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <a
        href="/assets/Olasunkanmi_Oyinlola_Resume.pdf"
        download="Olasunkanmi_Oyinlola_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex items-center justify-center"
      >
        {/* Animated ring */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 opacity-70 blur transition-all duration-300 group-hover:opacity-100 group-hover:blur-md" />

        {/* Button content */}
        <div className="relative flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/90 px-4 py-2 backdrop-blur-sm transition-all duration-300 hover:border-zinc-700">
          {/* Resume icon */}
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
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>

          {/* Label */}
          <span className="text-sm font-medium text-zinc-300">Resume</span>

          {/* Download icon */}
          <svg
            className="size-4 text-zinc-400 transition-transform duration-300 group-hover:translate-y-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </a>

      {/* Tooltip */}
      <div className="absolute right-0 mt-2 w-48 translate-y-1 rounded-lg border border-zinc-800 bg-zinc-900/90 p-2 text-center text-xs text-zinc-400 opacity-0 backdrop-blur-sm transition-all group-hover:translate-y-0 group-hover:opacity-100">
        Click to download my resume (PDF)
      </div>
    </motion.div>
  )
}
