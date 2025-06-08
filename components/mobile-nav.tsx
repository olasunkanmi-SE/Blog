
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
    <div className="[@media(max-width:799px)]:block [@media(min-width:800px)]:hidden">
      {/* Mobile menu button */}
      <button
        onClick={onToggleNav}
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="block h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile overlay */}
      {navShow && (
        <div 
          className="fixed inset-0 z-30 bg-black bg-opacity-50"
          onClick={closeNav}
        />
      )}

      {/* Mobile Menu Panel */}
      {navShow && (
        <div className={`fixed left-0 top-0 z-40 h-screen w-80 max-w-[85vw] overflow-y-auto border-r border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900 transform transition-transform duration-300 ease-in-out ${
          navShow ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="p-6">
            {/* Close button for mobile */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Navigation</h2>
              <button
                onClick={closeNav}
                className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="space-y-1">
              {headerNavLinks.map((link, index) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white rounded-md transition-all duration-200"
                  onClick={closeNav}
                >
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
