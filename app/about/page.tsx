"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"

import { useInView } from "react-intersection-observer" // Import intersection-observer

import siteMetadata from "@/config/site-metadata"

// Component for Featured Work Items
const FeaturedWorkItem = ({ work }) => {
  return (
    <div className="w-full shrink-0">
      <div className="group relative rounded-md transition-all lg:hover:!opacity-100">
        <div className="absolute -inset-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <div className="relative z-10">
          <div className="mb-4 text-4xl">{work.icon}</div>
          <h3 className="mb-4 font-medium leading-snug text-slate-200">
            <Link
              href={work.link}
              className="group/link inline-flex items-baseline text-xl font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            >
              <span>{work.title}</span>
              <span className="ml-2 inline-block">
                {/* Increased accessibility by adding title and description */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="inline-block size-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                  aria-hidden="true"
                  title="View Project"
                  description={`Link to ${work.title} project`}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0V6.75a.75.75 0 00-.75-.75H7.75a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </Link>
          </h3>
          <p className="mb-4 leading-normal text-slate-400">
            {work.description}
          </p>
          <ul className="flex flex-wrap">
            {work.technologies.map((tech) => (
              <li key={tech} className="mb-2 mr-1.5">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                  {tech}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

// Component for Quick Links
const QuickLinkItem = ({ link }) => {
  return (
    <li key={link.title} className="mb-8">
      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <div className="z-10 sm:order-2 sm:col-span-6">
          <h3>
            <Link
              className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
              href={link.href}
              title={link.title}
              aria-label={`Link to ${link.title}`}
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <span>
                {link.title}
                <span className="ml-1 inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="inline-block size-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0V6.75a.75.75 0 00-.75-.75H7.75a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </span>
            </Link>
          </h3>
          <p className="mt-2 text-sm leading-normal text-slate-400">
            {link.description}
          </p>
        </div>
        <div className="z-10 sm:order-1 sm:col-span-2">
          <div className="flex h-20 w-full items-center justify-center rounded border border-slate-700/50 bg-slate-800/50 text-3xl transition group-hover:border-slate-600/50">
            {link.icon}
          </div>
        </div>
      </div>
    </li>
  )
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderRef = useRef<HTMLDivElement | null>(null)
  const totalSlides = 3
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  // Use useCallback to memoize goToSlide
  const goToSlide = useCallback((slideIndex: number) => {
    setCurrentSlide(slideIndex)
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${slideIndex * 100}%)`
    }
  }, [])

  const nextSlide = useCallback(() => {
    const newSlide = (currentSlide + 1) % totalSlides
    goToSlide(newSlide)
  }, [currentSlide, totalSlides, goToSlide])

  const prevSlide = useCallback(() => {
    const newSlide = (currentSlide - 1 + totalSlides) % totalSlides
    goToSlide(newSlide)
  }, [currentSlide, totalSlides, goToSlide])

  // Use useCallback for slide indicator click
  const handleSlideIndicatorClick = useCallback(
    (index: number) => {
      goToSlide(index)
    },
    [goToSlide]
  )

  useEffect(() => {
    goToSlide(0)
  }, [])

  const featuredWork = [
    {
      title: "CodeBuddy AI",
      description:
        "An advanced AI coding assistant that helps developers write better code faster. Features include code generation, debugging, documentation, and intelligent suggestions.",
      link: "/codeBuddy",
      icon: "🤖",
      technologies: ["AI/ML", "Next.js", "TypeScript", "OpenAI"],
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio built with Next.js 14, featuring blog capabilities, project showcases, and optimized for performance and SEO.",
      link: "/projects",
      icon: "🌐",
      technologies: ["Next.js", "React", "Tailwind", "MDX"],
    },
    {
      title: "Full-Stack Development",
      description:
        "Expertise in modern web technologies including React, Next.js, TypeScript, Node.js, and cloud deployment solutions for scalable applications.",
      link: "/about",
      icon: "⚡",
      technologies: ["React", "Node.js", "TypeScript", "AWS"],
    },
  ]

  const quickLinks = [
    {
      title: "Blog",
      description:
        "Read my thoughts on software development, AI, and technology trends.",
      href: "/blog",
      icon: "📝",
    },
    {
      title: "Documentation",
      description: "Technical guides and documentation for developers.",
      href: "/documentation",
      icon: "📚",
    },
    {
      title: "Projects",
      description: "Explore my latest work and open source contributions.",
      href: "/projects",
      icon: "🚀",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-slate-400">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* Left Column - Fixed Header */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <div className="mb-8 inline-flex items-center rounded-md bg-teal-400/10 px-4 py-2 text-sm font-medium text-teal-300">
                <span className="mr-2">👋</span>
                Welcome to my portfolio
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl lg:text-6xl">
                <Link
                  href="/"
                  className="transition-colors hover:text-teal-300"
                >
                  Olasunkanmi Raymond
                </Link>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                Software Engineer
              </h2>
              <p className="mt-4 max-w-xs leading-normal">
                Building innovative solutions with modern technologies.
                Exploring the frontiers of AI & Machine Learning.
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
                    <a
                      className="group flex items-center py-3"
                      href="#featured"
                    >
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                        Featured
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="group flex items-center py-3" href="#explore">
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                        Explore
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 lg:mt-0">
              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-md bg-teal-400/10 px-6 py-3 text-sm font-medium text-teal-300 transition-colors hover:bg-teal-400/20"
                >
                  About Me
                </Link>
                <Link
                  href="/codeBuddy"
                  className="inline-flex items-center justify-center rounded-md border border-slate-600 px-6 py-3 text-sm font-medium text-slate-300 transition-colors hover:border-slate-500 hover:text-slate-200"
                >
                  CodeBuddy AI
                </Link>
              </div>
            </div>

            {/* Social Links */}
            <ul
              className="ml-1 mt-8 flex items-center"
              aria-label="Social media"
            >
              <li className="mr-5 text-xs">
                <a
                  className="block hover:text-slate-200"
                  href={siteMetadata.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="size-6"
                    aria-hidden="true"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                </a>
              </li>
              <li className="mr-5 text-xs">
                <a
                  className="block hover:text-slate-200"
                  href={siteMetadata.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                    aria-hidden="true"
                  >
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                  </svg>
                </a>
              </li>
              <li className="mr-5 text-xs">
                <a
                  className="block hover:text-slate-200"
                  href={`mailto:${siteMetadata.email}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">Email</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                    aria-hidden="true"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"></path>
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"></path>
                  </svg>
                </a>
              </li>
            </ul>
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
                  Introduction
                </h2>
              </div>
              <div className="prose prose-slate prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-slate-400">
                  I'm a passionate software engineer crafting{" "}
                  <span className="font-semibold text-slate-200">robust</span>{" "}
                  and{" "}
                  <span className="font-semibold text-slate-200">
                    innovative
                  </span>{" "}
                  solutions with modern technologies.
                </p>
                <p className="leading-relaxed text-slate-400">
                  Currently exploring the frontiers of{" "}
                  <span className="font-semibold text-teal-300">
                    AI & Machine Learning
                  </span>
                  , building scalable web applications, and sharing knowledge
                  with the developer community through technical writing and
                  open-source contributions.
                </p>
                <p className="leading-relaxed text-slate-400">
                  When I'm not coding, you'll find me mentoring developers,
                  experimenting with new technologies, or working on CodeBuddy -
                  my AI-powered coding assistant.
                </p>
              </div>
            </section>

            {/* Featured Work Section */}
            <section
              id="featured"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:p-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  Featured Work
                </h2>
              </div>

              <div className="relative overflow-hidden">
                <div
                  className="flex transition-transform duration-300 ease-in-out"
                  ref={sliderRef}
                >
                  {featuredWork.map((work, index) => (
                    <FeaturedWorkItem key={index} work={work} />
                  ))}
                </div>

                {/* Navigation Buttons */}
                <button
                  className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-slate-800/50 p-2 text-slate-400 backdrop-blur transition-colors hover:bg-slate-700/50 hover:text-slate-200"
                  onClick={prevSlide}
                  aria-label="Previous slide"
                >
                  <svg
                    className="size-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-slate-800/50 p-2 text-slate-400 backdrop-blur transition-colors hover:bg-slate-700/50 hover:text-slate-200"
                  onClick={nextSlide}
                  aria-label="Next slide"
                >
                  <svg
                    className="size-5"
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
                </button>

                {/* Slide Indicators */}
                <div className="mt-6 flex justify-center space-x-2">
                  {Array.from({ length: totalSlides }, (_, index) => (
                    <button
                      key={index}
                      className={`size-2 rounded-full transition-all ${currentSlide === index ? "w-8 bg-teal-400" : "bg-slate-600 hover:bg-slate-500"}`}
                      onClick={() => handleSlideIndicatorClick(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* Explore Section */}
            <section
              id="explore"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:p-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  Explore
                </h2>
              </div>
              <div>
                <ul className="group/list">
                  {quickLinks.map((link, index) => (
                    <QuickLinkItem key={index} link={link} />
                  ))}
                </ul>
                <div className="mt-12">
                  <Link
                    className="group inline-flex items-center font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="/projects"
                  >
                    <span>
                      <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                        View All Projects
                      </span>
                      <span className="whitespace-nowrap">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block size-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0V6.75a.75.75 0 00-.75-.75H7.75a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}
