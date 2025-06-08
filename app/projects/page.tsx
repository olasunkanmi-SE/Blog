
import projectsData from "@/data/projectsData"
import ProjectCard from "@/components/project-card"

export const metadata = {
  title: "Projects",
  description: `My projects page, where I showcase some of my software engineering projects. From building web apps with TypeScript and Rust, my projects demonstrate my diverse skill set and experience.`,
}

export default async function Projects() {
  const featuredProjects = projectsData.filter((d) => d.type !== "Open").slice(0, 4)
  const openSourceProjects = projectsData.filter((d) => d.type === "Open")

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container relative mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
              <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              Portfolio Showcase
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl">
              My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-xl leading-relaxed text-gray-600 dark:text-gray-300">
              A collection of software engineering projects that showcase my diverse skill set and experience. 
              From web applications to open-source tools, each project demonstrates problem-solving and innovation.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                {projectsData.length} Projects
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
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
            <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
              Featured Projects
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              Highlighting some of my most impactful and technically challenging projects
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <div key={project.title} className={`${index === 0 ? 'lg:col-span-2' : ''}`}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  titleLink={project.titleLink}
                  skills={project.skills}
                  links={project.links}
                  icons={project.icons}
                  designPattern={project.designPattern}
                  type={project.type}
                  className={`h-full ${index === 0 ? 'p-6' : 'p-4'}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      {openSourceProjects.length > 0 && (
        <section className="bg-gray-50 py-20 dark:bg-gray-800/50">
          <div className="container mx-auto px-6">
            <div className="mb-16 text-center">
              <div className="mb-4 inline-flex items-center rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-600 dark:bg-green-900/20 dark:text-green-400">
                <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Open Source
              </div>
              <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
                Open Source Contributions
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
                Tools and libraries I've built to help the developer community
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {openSourceProjects.map((project) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  titleLink={project.titleLink}
                  skills={project.skills}
                  links={project.links}
                  icons={project.icons}
                  designPattern={project.designPattern}
                  type={project.type}
                  className="h-full p-4"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
              Technologies I Work With
            </h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
              {[
                "TypeScript", "React", "Node.js", "Next.js", "Python", "Rust",
                "Docker", "AWS", "MongoDB", "PostgreSQL", "GraphQL", "Tailwind"
              ].map((tech) => (
                <div
                  key={tech}
                  className="rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800"
                >
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Interested in collaborating?
          </h2>
          <p className="mb-8 text-xl text-blue-100">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:your-email@example.com"
              className="rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 transition-colors hover:bg-gray-100"
            >
              Get in Touch
            </a>
            <a
              href="/about"
              className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-blue-600"
            >
              Learn More About Me
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
