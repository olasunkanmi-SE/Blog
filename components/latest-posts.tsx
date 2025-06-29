import { useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function CodeBuddy() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderRef = useRef<HTMLDivElement | null>(null)
  const totalSlides = 3

  const goToSlide = useCallback((slideIndex: number) => {
    setCurrentSlide(slideIndex)
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${slideIndex * 100}%)`
    }
  }, [])

  const nextSlide = useCallback(() => {
    const newSlide = (currentSlide + 1) % totalSlides
    goToSlide(newSlide)
  }, [currentSlide, goToSlide])

  const prevSlide = useCallback(() => {
    const newSlide = (currentSlide - 1 + totalSlides) % totalSlides
    goToSlide(newSlide)
  }, [currentSlide, goToSlide])

  useEffect(() => {
    goToSlide(0)
  }, [goToSlide])

  const modelCards = [
    {
      title: "Lite",
      badge: "Light & Fast",
      badgeColor: "bg-green-400/10 text-green-300",
      description:
        "Our fastest model that can execute lightweight coding actions, with industry-leading speed.",
      icon: "",
    },
    {
      title: "Pro",
      badge: "Hard Working",
      badgeColor: "bg-blue-400/10 text-blue-300",
      description:
        "Our best combination of performance and speed for efficient, high-throughput coding tasks.",
      icon: "",
    },
    {
      title: "Expert",
      badge: "Powerful",
      badgeColor: "bg-purple-400/10 text-purple-300",
      description:
        "Our highest-performing model, which can handle complex analysis, architecture design, and advanced coding tasks.",
      icon: "",
    },
  ]

  const handleSlideIndicatorClick = useCallback(
    (index: number) => {
      goToSlide(index)
    },
    [goToSlide]
  )

  return (
    <div className="min-h-screen bg-slate-900 text-slate-400">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* Left Column - Fixed Header */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <div className="mb-8 inline-flex items-center rounded-md bg-teal-400/10 px-4 py-2 text-sm font-medium text-teal-300">
                <span className="mr-2">🤖</span>
                AI-Powered Development
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl lg:text-6xl">
                Build with{" "}
                <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                  CodeBuddy
                </span>
              </h1>

              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                AI Coding Assistant
              </h2>

              <p className="mt-4 max-w-xs leading-normal">
                Create user-facing experiences, new products, and new ways to
                work with the most advanced AI coding assistant on the market.
              </p>

              {/* Navigation */}
              <nav
                className="nav hidden lg:block"
                aria-label="In-page jump links"
              >
                <ul className="mt-16 w-max">
                  <li>
                    <a
                      className="active group flex items-center py-3"
                      href="#intro"
                    >
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                        Intro
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="group flex items-center py-3" href="#models">
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                        Models
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="group flex items-center py-3"
                      href="#use-cases"
                    >
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                        Use Cases
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 lg:mt-0">
              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                <Button className="inline-flex items-center justify-center rounded-md bg-teal-400/10 px-6 py-3 text-sm font-medium text-teal-300 transition-colors hover:bg-teal-400/20">
                  Start building
                </Button>
                <Link href="/codeBuddy/plans">
                  <Button
                    variant="outline"
                    className="inline-flex w-full items-center justify-center rounded-md border border-slate-600 px-6 py-3 text-sm font-medium text-slate-300 transition-colors hover:border-slate-500 hover:text-slate-200"
                  >
                    View Plans
                  </Button>
                </Link>
              </div>
            </div>

            {/* Social Links - Optional for CodeBuddy */}
            <div className="mt-8 flex items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-green-500"></div>
                <span>Industry-leading AI</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-blue-500"></div>
                <span>Enterprise ready</span>
              </div>
            </div>
          </header>

          {/* Right Column - Content */}
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            {/* Intro Section */}
            <section
              id="intro"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:p-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  Get Started
                </h2>
              </div>
              <div className="prose prose-slate prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-slate-400">
                  Launch your own{" "}
                  <span className="font-semibold text-slate-200">
                    AI coding solution
                  </span>{" "}
                  with industry-leading models and{" "}
                  <span className="font-semibold text-teal-300">
                    simple pay-as-you-go pricing
                  </span>
                  .
                </p>

                <div className="mt-8 space-y-6">{/* ... */}</div>
              </div>
            </section>

            {/* Model Family Section */}
            <section
              id="models"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:p-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  Model Family
                </h2>
              </div>

              <div className="relative overflow-hidden">
                <div
                  className="flex transition-transform duration-300 ease-in-out"
                  ref={sliderRef}
                >
                  {modelCards.map((model, index) => (
                    <div key={index} className="w-full shrink-0">
                      {/* ... */}
                    </div>
                  ))}
                </div>

                {/* Navigation Buttons */}
                <button
                  className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-slate-800/50 p-2 text-slate-400 backdrop-blur transition-colors hover:bg-slate-700/50 hover:text-slate-200"
                  onClick={prevSlide}
                  aria-label="Previous model"
                >
                  {/* ... */}
                </button>

                <button
                  className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-slate-800/50 p-2 text-slate-400 backdrop-blur transition-colors hover:bg-slate-700/50 hover:text-slate-200"
                  onClick={nextSlide}
                  aria-label="Next model"
                >
                  {/* ... */}
                </button>

                {/* Slide Indicators */}
                <div className="mt-6 flex justify-center space-x-2">
                  {Array.from({ length: totalSlides }, (_, index) => (
                    <button
                      key={index}
                      className={`size-2 rounded-full transition-all ${
                        currentSlide === index
                          ? "w-8 bg-teal-400"
                          : "bg-slate-600 hover:bg-slate-500"
                      }`}
                      onClick={() => handleSlideIndicatorClick(index)}
                      aria-label={`Go to model ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* Use Cases Section */}
            <section
              id="use-cases"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              {/* ... */}
            </section>
          </main>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-slate-800 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-8 text-4xl font-bold text-slate-200">
            Start building with the CodeBuddy API
          </h2>
          <div className="flex justify-center gap-6">
            <Link href="/codeBuddy/plans">
              <Button className="inline-flex items-center justify-center rounded-md bg-teal-400/10 px-6 py-3 text-sm font-medium text-teal-300 transition-colors hover:bg-teal-400/20">
                See pricing
              </Button>
            </Link>
            <Button
              variant="outline"
              className="inline-flex items-center justify-center rounded-md border border-slate-600 px-6 py-3 text-sm font-medium text-slate-300 transition-colors hover:border-slate-500 hover:text-slate-200"
            >
              Speak with sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
