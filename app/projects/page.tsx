import projectsData from "@/data/projectsData"

import ProjectCard from "@/components/project-card"

export const metadata = {
  title: "Projects",
  description: `My projects page, where I showcase some of my software engineering projects. From building web apps with TypeScript and Rust, my projects demonstrate my diverse skill set and experience.`,
}

export default async function Projects() {
  const featuredProjects = projectsData
    .filter((d) => d.type !== "Open")
    .slice(0, 4)
  const openSourceProjects = projectsData.filter((d) => d.type === "Open")

  return (
    <div className="min-h-screen bg-black dark:bg-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <div className="container relative mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm font-medium text-zinc-400 backdrop-blur-md">
              <span className="mr-2 inline-block size-1 rounded-full bg-emerald-400"></span>
              Portfolio Showcase
            </div>
            <h1 className="mb-6 bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-5xl font-bold leading-tight text-transparent sm:text-6xl lg:text-7xl">
              Creative
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
                {openSourceProjects.length} Open Source
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm font-medium text-zinc-400 backdrop-blur-md">
              <span className="mr-2 inline-block size-1 rounded-full bg-emerald-400"></span>
              Featured Work
            </div>
            <h2 className="mb-4 text-4xl font-bold text-white">
              Selected Projects
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-zinc-400">
              Showcasing innovative solutions and technical excellence
            </p>
          </div>

          <div className="grid gap-16 lg:grid-cols-1">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                className={`transition-all duration-300 hover:scale-[1.02]${
                  index === 0 ? "lg:col-span-2" : ""
                }`}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  titleLink={project.titleLink}
                  skills={project.skills}
                  links={project.links}
                  icons={project.icons}
                  designPattern={project.designPattern}
                  type={project.type}
                  className={`h-full border border-zinc-800/50 bg-zinc-900/50 backdrop-blur-sm ${
                    index === 0 ? "p-6" : "p-4"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      {openSourceProjects.length > 0 && (
        <section className="border-y border-zinc-800 bg-zinc-900/30 py-20 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="mb-16 text-center">
              <div className="mb-4 inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm font-medium text-zinc-400 backdrop-blur-md">
                <span className="mr-2 inline-block size-1 rounded-full bg-cyan-400"></span>
                Open Source
              </div>
              <h2 className="mb-4 text-4xl font-bold text-white">
                Community Contributions
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-zinc-400">
                Open-source projects crafted to empower developers
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {openSourceProjects.map((project) => (
                <div
                  key={project.title}
                  className="transition-all duration-300 hover:scale-[1.02]"
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    titleLink={project.titleLink}
                    skills={project.skills}
                    links={project.links}
                    icons={project.icons}
                    designPattern={project.designPattern}
                    type={project.type}
                    className="h-full border border-zinc-800/50 bg-zinc-900/50 p-4 backdrop-blur-sm"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm font-medium text-zinc-400 backdrop-blur-md">
              <span className="mr-2 inline-block size-1 rounded-full bg-emerald-400"></span>
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
