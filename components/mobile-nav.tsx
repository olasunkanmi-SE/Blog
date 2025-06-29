"use client"

import { useEffect, useState } from "react"

import headerNavLinks from "@/config/nav-links"

import Link from "./link"

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = "auto"
      } else {
        document.body.style.overflow = "hidden"
      }
      return !status
    })
  }

  const closeNav = () => {
    setNavShow(false)
    document.body.style.overflow = "auto"
  }

  // Close nav on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && navShow) {
        closeNav()
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [navShow])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  return (
    <div className="[@media(max-width:799px)]:block [@media(min-width:800px)]:hidden">
      {/* Mobile menu button */}
      <button
        onClick={onToggleNav}
        className="inline-flex items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/50 p-2 text-zinc-400 backdrop-blur-sm transition-colors duration-200 hover:text-white"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="size-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-30 bg-[#030014]/80 backdrop-blur-sm transition-all duration-500 ${
          navShow ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeNav}
        aria-hidden="true"
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed right-0 top-0 z-40 h-screen w-80 max-w-[85vw] overflow-y-auto border-l border-zinc-800 bg-[#030014]/95 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform ${
          navShow
            ? "translate-x-0 scale-100 opacity-100"
            : "pointer-events-none translate-x-[10%] scale-95 opacity-0"
        }`}
      >
        <div className="p-6">
          {/* Close button for mobile */}
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-lg font-medium text-white">Menu</h2>
            <button
              onClick={closeNav}
              className="rounded-full border border-zinc-800 bg-zinc-900/50 p-2 text-zinc-400 transition-colors duration-200 hover:text-white"
            >
              <svg
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1.5">
            {headerNavLinks.map((link, index) => (
              <Link
                key={link.title}
                href={link.href}
                className={`group flex items-center rounded-full border border-transparent px-4 py-2 text-sm text-zinc-400 opacity-0 transition-all duration-300 hover:border-zinc-800 hover:bg-zinc-900/50 hover:text-white ${
                  navShow ? "animate-slideIn" : ""
                }`}
                onClick={closeNav}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {link.title}
              </Link>
            ))}
          </nav>

          {/* Footer */}
          <div className="absolute inset-x-6 bottom-6">
            <div className="text-center text-xs text-zinc-500">
              Press{" "}
              <kbd className="rounded bg-zinc-900/50 px-2 py-1 text-xs text-zinc-400">
                ESC
              </kbd>{" "}
              to close
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileNav
