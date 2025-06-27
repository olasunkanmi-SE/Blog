"use client"

import { useState } from "react"

import projectsData from "@/data/projectsData"
import { AnimatePresence, motion } from "framer-motion"

import ProjectCard from "@/components/project-card"

type FilterType = "All" | "Featured" | "Open Source"
type SortType = "Latest" | "Alphabetical" | "Popular"

export default function Projects() {
  const [filter, setFilter] = useState<FilterType>("All")
  const [sort, setSort] = useState<SortType>("Latest")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProjects = projectsData
    .filter((project) => {
      // First apply type filter
      const matchesFilter =
        filter === "All" ||
        (filter === "Featured" && project.type !== "Open") ||
        (filter === "Open Source" && project.type === "Open")

      if (!matchesFilter) return false

      // Then apply search if there's a query
      if (searchQuery.trim()) {
        const query = searchQuery.trim().toLowerCase()
        const searchableText = [
          project.title,
          project.description,
          project.skills,
          project.designPattern,
          ...(project.links?.map((link) => link.title) || []),
        ]
          .join(" ")
          .toLowerCase()

        return searchableText.includes(query)
      }

      return true
    })
    .sort((a, b) => {
      switch (sort) {
        case "Alphabetical":
          return a.title.localeCompare(b.title)
        case "Popular":
          return (b.links?.length || 0) - (a.links?.length || 0)
        case "Latest":
        default:
          return -1 // Assuming projects are already in chronological order
      }
    })

  const stats = {
    total: projectsData.length,
    featured: projectsData.filter((p) => p.type !== "Open").length,
    openSource: projectsData.filter((p) => p.type === "Open").length,
  }

  return (
    <div className="min-h-screen bg-black dark:bg-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div
          className="absolute inset-0 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
          style={{
            background:
              "linear-gradient(to right,#4f4f4f2e 1px,transparent 1px), linear-gradient(to bottom,#4f4f4f2e 1px,transparent 1px)",
            backgroundSize: "14px 24px",
          }}
        ></div>
        <div className="container relative mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm font-medium text-zinc-400 backdrop-blur-md">
              <span className="mr-2 inline-block size-1 rounded-full bg-emerald-400"></span>
              Portfolio Showcase
            </div>
            <h1 className="mb-6 bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-5xl font-bold leading-tight text-transparent sm:text-6xl lg:text-7xl">
              Creative{" "}
              <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Engineering
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-xl leading-relaxed text-zinc-400">
              A curated collection of innovative solutions, each project
              reflecting the intersection of elegant design and sophisticated
              engineering.
            </p>
            <div className="flex items-center justify-center gap-6">
              <div className="flex items-center gap-2 text-sm text-zinc-500">
                <div className="size-1.5 rounded-full bg-emerald-400/80 shadow-lg shadow-emerald-400/50"></div>
                {projectsData.length} Projects
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-500">
                <div className="size-1.5 rounded-full bg-cyan-400/80 shadow-lg shadow-cyan-400/50"></div>
                {stats.openSource} Open Source
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Filter Section */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {["All", "Featured", "Open Source"].map((filterType) => (
                <button
                  key={filterType}
                  onClick={() => setFilter(filterType as FilterType)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    filter === filterType
                      ? "bg-emerald-400 text-black"
                      : "border border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:border-emerald-400/50"
                  }`}
                >
                  {filterType}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <div className="relative flex-1 sm:min-w-[200px]">
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm text-zinc-400 placeholder:text-zinc-600 focus:border-emerald-400/50 focus:outline-none"
                />
              </div>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortType)}
                className="rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm text-zinc-400 focus:border-emerald-400/50 focus:outline-none"
              >
                <option value="Latest">Latest</option>
                <option value="Alphabetical">A-Z</option>
                <option value="Popular">Popular</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="popLayout">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                  }}
                >
                  <ProjectCard
                    {...project}
                    className="h-full border border-zinc-800/50 bg-zinc-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-emerald-400/20"
                  />
                </motion.div>
              ))}
            </div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <div className="my-20 text-center">
              <p className="text-lg text-zinc-400">
                No projects found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Project Stats */}
      <section className="border-t border-zinc-800 bg-zinc-900/30 py-20 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400">
                {stats.total}
              </div>
              <div className="mt-2 text-sm text-zinc-400">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400">
                {stats.featured}
              </div>
              <div className="mt-2 text-sm text-zinc-400">
                Featured Projects
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400">
                {stats.openSource}
              </div>
              <div className="mt-2 text-sm text-zinc-400">Open Source</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm font-medium text-zinc-400 backdrop-blur-md">
              <span className="mr-2 inline-block size-1 rounded-full bg-emerald-400"></span>{" "}
              Tech Stack
            </div>
            <h2 className="mb-8 text-3xl font-bold text-white">
              Technologies & Tools
            </h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
              {[
                "TypeScript",
                "Node.js",
                "AWS",
                "Serverless",
                "MongoDB",
                "PostgreSQL",
                "GraphQL",
                "Redis",
                "Docker",
                "Express.js",
                "NestJS",
                "Kafka",
                "React",
                "Next.js",
              ].map((tech) => (
                <div
                  key={tech}
                  className="group relative rounded-lg border border-zinc-800 bg-zinc-900/50 p-4 backdrop-blur-sm transition-all duration-300 hover:border-emerald-400/50"
                >
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400/0 to-cyan-400/0 opacity-0 blur transition-opacity group-hover:opacity-20"></div>
                  <span className="relative z-10 text-sm font-medium text-zinc-400 transition-colors group-hover:text-white">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden border-t border-zinc-800 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-cyan-400/10 opacity-50 blur-3xl"></div>
        <div className="container relative mx-auto px-6 text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm font-medium text-zinc-400 backdrop-blur-md">
            <span className="mr-2 inline-block size-1 rounded-full bg-emerald-400"></span>
            Let's Connect
          </div>
          <h2 className="mb-4 text-3xl font-bold text-white">
            Interested in Collaboration?
          </h2>
          <p className="mb-8 text-xl text-zinc-400">
            Let's discuss how we can create something exceptional together.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:your-email@example.com"
              className="group relative rounded-lg bg-emerald-400/10 px-8 py-3 backdrop-blur-sm transition-all duration-300 hover:bg-emerald-400/20"
            >
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400/0 to-emerald-400/0 opacity-0 blur transition-opacity group-hover:opacity-20"></div>
              <span className="relative z-10 font-semibold text-emerald-400">
                Get in Touch
              </span>
            </a>
            <a
              href="/"
              className="group relative rounded-lg border border-zinc-700 bg-zinc-900/50 px-8 py-3 backdrop-blur-sm transition-all duration-300 hover:border-zinc-600"
            >
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-zinc-400/0 to-zinc-400/0 opacity-0 blur transition-opacity group-hover:opacity-20"></div>
              <span className="relative z-10 font-semibold text-zinc-400 transition-colors group-hover:text-white">
                Learn More About Me
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
