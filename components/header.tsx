import Image from "next/image"
import Link from "next/link"

import hero from "@/public/images/general/hero-image.webp"

import siteMetadata from "@/config/site-metadata"

import Youtube from "@/components/social-icons/youtube.svg"

export function Header() {
  return (
    <section className="relative overflow-hidden">
      {/* Modern background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/30 via-transparent to-orange-50/20 dark:from-amber-900/10 dark:via-transparent dark:to-orange-900/5"></div>

      <div className="relative mx-auto mb-32 grid h-auto max-w-7xl auto-rows-min grid-cols-4 gap-x-4 pt-8 md:grid-cols-8 lg:mb-72 lg:min-h-[45rem] lg:grid-cols-12 lg:gap-x-8 lg:pb-16 lg:pt-32">
        <div className="col-span-full pt-8 lg:col-span-6 lg:col-start-1 lg:row-start-1 lg:flex lg:h-full lg:flex-col lg:justify-center">
          {/* Modern badge/tag */}
          <div className="mb-6 inline-flex items-center rounded-full bg-gradient-to-r from-amber-100 to-orange-100 px-4 py-2 text-sm font-semibold text-amber-800 dark:from-amber-900/30 dark:to-orange-900/30 dark:text-amber-200">
            <span className="mr-2 size-2 animate-pulse rounded-full bg-green-500"></span>
            Available for opportunities
          </div>

          <h1 className="mb-6 max-w-3xl text-5xl font-black leading-tight tracking-tight text-gray-900 dark:text-white md:text-6xl lg:text-7xl xl:text-8xl">
            Hello, I'm{" "}
            <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
              Ola
            </span>
          </h1>

          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300 md:text-xl lg:text-2xl">
            Software engineer crafting{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              robust
            </span>{" "}
            and{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              innovative
            </span>{" "}
            solutions. Currently exploring the frontiers of{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-semibold text-transparent">
              AI & Machine Learning
            </span>
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/blog"
              className="group inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-amber-600 to-orange-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-amber-300 dark:focus:ring-amber-800"
            >
              <span className="mr-2">📖</span>
              Explore my blog
              <svg
                className="ml-2 size-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>

            <Link
              href={siteMetadata.youtube}
              aria-label="Subscribe to my YouTube channel"
              target="_blank"
              className="group inline-flex items-center justify-center gap-3 rounded-2xl border-2 border-red-500 bg-red-500 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:border-red-600 hover:bg-red-600 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-red-300"
            >
              <Youtube aria-hidden className="size-5 fill-current" />
              <span className="hidden sm:inline">YouTube</span>
              <span className="sm:hidden">Subscribe</span>
            </Link>
          </div>

          {/* Social proof indicators */}
          <div className="mt-12 flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-green-500"></div>
              <span>Building with cutting-edge tech</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-blue-500"></div>
              <span>Open source contributor</span>
            </div>
          </div>
        </div>

        <div className="col-span-full mt-16 flex items-center justify-center lg:col-span-6 lg:col-start-7 lg:mt-0 lg:px-0">
          <div className="relative w-full max-w-lg lg:max-w-none">
            {/* Modern decorative elements */}
            <div className="absolute -left-4 -top-4 size-24 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 size-32 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 opacity-20 blur-xl"></div>

            <div className="relative overflow-hidden rounded-3xl bg-white/10 p-2 backdrop-blur-sm dark:bg-black/10">
              <Image
                src={hero}
                quality={75}
                alt="Ola's profile image"
                priority
                className="h-auto w-full rounded-2xl object-cover shadow-2xl"
                sizes="(max-width: 1024px) 80vw, 50vw"
              />
            </div>

            {/* Floating elements for modern touch */}
            <div className="absolute right-8 top-8 rounded-full bg-white/90 p-3 shadow-lg backdrop-blur-sm dark:bg-black/90">
              <span className="text-2xl">⚡</span>
            </div>
            <div className="absolute bottom-8 left-8 rounded-full bg-white/90 p-3 shadow-lg backdrop-blur-sm dark:bg-black/90">
              <span className="text-2xl">🚀</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
