
"use client"

import { useState, useEffect } from "react"
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
      if (e.key === 'Escape' && navShow) {
        closeNav()
      }
    }
    
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [navShow])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  return (
    <div className="lg:hidden">
      {/* Hamburger Button */}
      <button
        className="relative w-8 h-8 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
        aria-label="Toggle Menu"
        onClick={onToggleNav}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-5 h-4 flex flex-col justify-between">
            <span className={`block h-0.5 w-full bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${navShow ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-gray-700 dark:bg-gray-300 transition-opacity duration-300 ${navShow ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${navShow ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      {navShow && (
        <div className="fixed inset-0 z-[9999]">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={closeNav}
            aria-hidden="true"
          />
          
          {/* Menu Panel */}
          <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white dark:bg-gray-900 shadow-2xl border-l border-gray-200 dark:border-gray-700 transform transition-transform duration-300 ease-in-out">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Navigation</h2>
              <button
                className="w-8 h-8 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
                aria-label="Close Menu"
                onClick={closeNav}
              >
                <svg
                  className="w-5 h-5 mx-auto text-gray-700 dark:text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col p-6 space-y-2">
              {headerNavLinks.map((link, index) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="group flex items-center px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200"
                  onClick={closeNav}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="w-2 h-2 rounded-full bg-amber-500 mr-3 scale-0 group-hover:scale-100 transition-transform duration-200"></span>
                  {link.title}
                </Link>
              ))}
            </nav>

            {/* Footer */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
                Press <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs">ESC</kbd> to close
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MobileNav
