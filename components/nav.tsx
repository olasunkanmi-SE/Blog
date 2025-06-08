import headerNavLinks from "@/config/nav-links"
import siteMetadata from "@/config/site-metadata"

import DarkModeSwitch from "./dark-mode-button"
import Link from "./link"
import MobileNav from "./mobile-nav"

import KBarSearchProvider from "./search"

const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/20 dark:border-gray-700/20">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo/Brand */}
        <div>
          <Link href="/" aria-label={siteMetadata.headerTitle}>
            <div className="flex items-center">
              {typeof siteMetadata.headerTitle === "string" ? (
                <div className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent hover:from-amber-600 hover:to-orange-600 transition-all duration-300">
                  {siteMetadata.headerTitle}
                </div>
              ) : (
                siteMetadata.headerTitle
              )}
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="flex items-center gap-8">
          <div className="hidden [@media(min-width:800px)]:flex items-center gap-1">
            {headerNavLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 group"
              >
                {link.title}
                <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-amber-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <KBarSearchProvider kbarConfig={siteMetadata.kbarConfig} />
            <div className="hidden min-[700px]:block">
              <DarkModeSwitch />
            </div>
            <MobileNav />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
