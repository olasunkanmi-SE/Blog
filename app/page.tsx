"use client"

import Link from "next/link"

import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

interface WorkCard {
  title: string
  description: string
  link: string
  icon: string
  technologies: string[]
}

interface Skill {
  name: string
  level: number
  category: string
}

const skills: Skill[] = [
  { name: "System Architecture", level: 95, category: "Architecture" },
  { name: "Cloud Computing", level: 90, category: "Cloud" },
  { name: "Node.js", level: 95, category: "Backend" },
  { name: "TypeScript", level: 90, category: "Languages" },
  { name: "AWS", level: 85, category: "Cloud" },
  { name: "React", level: 85, category: "Frontend" },
]

function renderWorkCard(work: WorkCard) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative rounded-xl backdrop-blur-sm transition-all duration-300 lg:hover:!opacity-100"
    >
      <div className="absolute -inset-4 z-0 hidden rounded-xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/70 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-2xl"></div>
      <div className="relative z-10 h-full p-6 transition-all duration-300 hover:scale-[1.01]">
        <div className="mb-4 text-4xl">{work.icon}</div>
        <h3 className="mb-4 font-medium leading-snug text-slate-200">
          <Link
            href={work.link}
            className="group/link inline-flex items-baseline text-xl font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
          >
            <span>{work.title}</span>
            <span className="ml-2 inline-block">
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
          </Link>
        </h3>
        <p className="mb-4 leading-normal text-slate-400">{work.description}</p>
        <ul className="flex flex-wrap">
          {work.technologies.map((tech) => (
            <li key={tech} className="mb-2 mr-1.5">
              <div className="flex items-center rounded-full bg-gradient-to-r from-teal-400/10 to-emerald-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ring-1 ring-inset ring-teal-400/20 transition-colors hover:bg-teal-400/20">
                {tech}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

function SkillBar({ skill }: { skill: Skill }) {
  return (
    <div className="mb-6">
      <div className="mb-1 flex justify-between">
        <span className="text-sm font-medium text-zinc-400">{skill.name}</span>
        <span className="text-sm font-medium text-emerald-400">
          {skill.level}%
        </span>
      </div>
      <motion.div
        className="h-2 rounded-full bg-zinc-800"
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div
          className="h-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400"
          style={{ width: `${skill.level}%` }}
        />
      </motion.div>
    </div>
  )
}

export default function Home() {
  const featuredWork = [
    {
      title: "Technical Leadership",
      description:
        "Spearheading cross-functional engineering teams in delivering high-impact enterprise solutions. Implementing robust CI/CD pipelines, mentoring junior developers, and driving architectural decisions that scaled our systems to handle millions of requests.",
      link: "/technical-leadership",
      icon: "👨‍💼",
      technologies: ["System Architecture", "Team Leadership", "Agile/Scrum"],
    },
    {
      title: "AWS Cloud Architecture",
      description:
        "Architecting and implementing cloud-native solutions using AWS. Expertise in designing highly available microservices, implementing serverless architectures, and optimizing cloud infrastructure for cost and performance.",
      link: "/aws",
      icon: "☁️",
      technologies: ["AWS", "Microservices", "Infrastructure as Code"],
    },
    {
      title: "Payment Systems Architecture",
      description:
        "Designed and implemented secure payment processing systems handling millions in transactions. Built robust error handling, implemented PCI compliance measures, and integrated multiple payment providers with 99.99% uptime.",
      link: "/payment-gateway",
      icon: "💳",
      technologies: ["System Design", "Security", "Financial Systems"],
    },
    {
      title: "CodeBuddy AI",
      description:
        "Engineered an advanced AI pair programming assistant leveraging cutting-edge LLM technology. Implemented sophisticated code analysis algorithms, real-time code generation, and context-aware debugging capabilities.",
      link: "/codeBuddy",
      icon: "🤖",
      technologies: ["ML/AI", "NLP", "Cloud Architecture"],
    },
  ]

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030014]">
      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right,#4f4f4f2e 1px,transparent 1px), linear-gradient(to bottom,#4f4f4f2e 1px,transparent 1px)",
            backgroundSize: "14px 24px",
            maskImage:
              "radial-gradient(ellipse 80% 50% at 50% 0%,#000 70%,transparent 110%)",
          }}
        ></div>
        <div
          className="absolute left-0 top-0 -z-10 size-full"
          style={{
            background: "radial-gradient(#ffffff33 1px,#00091d 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 -z-10 size-full">
        <div className="absolute right-[20%] top-[20%] size-[150px] rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-20 blur-[120px]"></div>
        <div className="absolute left-[20%] top-[30%] size-[150px] rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 opacity-20 blur-[120px]"></div>
      </div>

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* Left Column - Header */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <div className="mb-8 inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/30 px-4 py-2 text-sm font-medium text-emerald-400 backdrop-blur-md">
                <span className="mr-2 inline-block size-1 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50"></span>
                Software Architect & Technical Lead
              </div>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                <Link
                  href="/"
                  className="bg-gradient-to-r from-white via-zinc-400/80 to-zinc-500/50 bg-clip-text text-transparent transition-colors hover:from-emerald-400 hover:to-cyan-400"
                >
                  Olasunkanmi Raymond
                </Link>
              </h1>
              <h2 className="mt-3 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-lg font-medium tracking-tight text-transparent sm:text-xl">
                Principal Software Engineer
              </h2>
              <p className="mt-4 max-w-xs leading-normal text-zinc-400">
                Architecting scalable solutions and leading engineering
                excellence.
              </p>

              {/* Navigation */}
              <nav
                className="nav hidden lg:block"
                aria-label="In-page jump links"
              >
                <ul className="mt-16 w-max">
                  <li>
                    <a className="group flex items-center py-3" href="#intro">
                      <span className="nav-indicator mr-4 h-px w-8 bg-gradient-to-r from-emerald-400/0 via-emerald-400/40 to-emerald-400/0 transition-all duration-300 ease-in-out group-hover:w-16 group-hover:from-emerald-400/40 group-hover:via-emerald-400 group-hover:to-emerald-400/40"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-zinc-400 transition-colors group-hover:text-emerald-400">
                        Backend
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="group flex items-center py-3"
                      href="#featured"
                    >
                      <span className="nav-indicator mr-4 h-px w-8 bg-gradient-to-r from-cyan-400/0 via-cyan-400/40 to-cyan-400/0 transition-all duration-300 ease-in-out group-hover:w-16 group-hover:from-cyan-400/40 group-hover:via-cyan-400 group-hover:to-cyan-400/40"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-zinc-400 transition-colors group-hover:text-cyan-400">
                        Architecture
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="group flex items-center py-3" href="#explore">
                      <span className="nav-indicator mr-4 h-px w-8 bg-gradient-to-r from-purple-400/0 via-purple-400/40 to-purple-400/0 transition-all duration-300 ease-in-out group-hover:w-16 group-hover:from-purple-400/40 group-hover:via-purple-400 group-hover:to-purple-400/40"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-zinc-400 transition-colors group-hover:text-purple-400">
                        Cloud
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex gap-6">
              <motion.a
                whileHover={{ y: -2 }}
                href="https://github.com/olasunkanmi-SE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-emerald-400"
              >
                <FaGithub size={24} />
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-emerald-400"
              >
                <FaLinkedin size={24} />
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                href="https://twitter.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-emerald-400"
              >
                <FaTwitter size={24} />
              </motion.a>
            </div>
          </header>
          {/* Right Column - Content */}
          <main className="pt-24 lg:w-1/2 lg:py-24">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <h1 className="mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-4xl font-bold text-transparent">
                Building the Future of Software
              </h1>
              <div className="prose-invert prose relative max-w-none">
                <p className="text-lg leading-relaxed text-zinc-400">
                  As a seasoned Software Architect and Technical Lead, I
                  specialize in designing and implementing large-scale
                  distributed systems. With extensive experience in cloud
                  architecture and system design, I've led teams in delivering
                  mission-critical applications that serve millions of users,
                  while maintaining high availability and performance standards.
                </p>
                <p className="mt-4 leading-relaxed text-zinc-400">
                  Beyond my core engineering work, I actively contribute to the
                  tech community through mentorship, technical writing, and
                  open-source contributions. I'm particularly passionate about
                  leveraging AI and cloud technologies to solve complex
                  engineering challenges at scale.
                </p>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="mb-8 text-2xl font-bold text-zinc-200">
                Technical Expertise
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {skills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.section>

            <section id="featured" className="mb-16">
              <h2 className="mb-8 text-2xl font-bold text-zinc-200">
                Expertise
              </h2>
              <div className="space-y-12">
                {featuredWork.map((work, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {renderWorkCard(work)}
                  </motion.div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-zinc-800/50 bg-zinc-900/20 p-8 backdrop-blur-sm"
            >
              <h2 className="mb-4 text-2xl font-bold text-zinc-200">
                Let's Work Together
              </h2>
              <p className="mb-6 text-zinc-400">
                Looking for a technical leader to help drive your next project
                to success? Let's connect and discuss how I can help.
              </p>
              <Link
                href="/contact"
                className="rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 px-6 py-3 font-medium text-black transition-opacity hover:opacity-90"
              >
                Get in Touch
              </Link>
            </motion.section>
          </main>
        </div>
      </div>
    </div>
  )
}
