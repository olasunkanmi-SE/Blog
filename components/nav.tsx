import headerNavLinks from "@/config/nav-links"
import siteMetadata from "@/config/site-metadata"

import DarkModeSwitch from "./dark-mode-button"
import Link from "./link"
import MobileNav from "./mobile-nav"
import KBarSearchProvider from "./search"

const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-[#030014]/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo/Brand */}
        <div>
          <Link href="/" aria-label={siteMetadata.headerTitle}>
            <div className="flex items-center">
              {typeof siteMetadata.headerTitle === "string" ? (
                <div className="bg-gradient-to-r from-white via-zinc-400 to-zinc-600 bg-clip-text text-xl font-bold text-transparent transition-colors duration-300 hover:text-cyan-400">
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
          <div className="hidden items-center gap-4 [@media(min-width:800px)]:flex">
            {headerNavLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="group relative rounded-full px-4 py-2 text-sm font-medium text-zinc-400 transition-all duration-200 hover:text-white"
              >
                {link.title}
                <span className="absolute inset-0 -z-10 scale-x-0 rounded-full border border-zinc-800 bg-zinc-900/50 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:scale-x-100 group-hover:opacity-100"></span>
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
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
