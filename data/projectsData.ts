import { DevIconTypes } from "@/components/dev-icons"

export interface ProjectData {
  title: string
  description: string
  titleLink: string
  links: { title: string; href: string }[]
  icons?: DevIconTypes[]
  techStack: string
  designPattern: string
}

const projectsData: ProjectData[] = [
  {
    title: "CodeBuddy",
    description: `CodeBuddy is an AI-powered coding assistant that uses machine learning to streamline developers workflow.`,
    titleLink: "https://github.com/olasunkanmi-SE/codebuddy",
    techStack:
      "Typescript, React, Generative AI, RAG, VectorDB, SQLite, AI Agent, function Calling",
    designPattern: "Event Driven Design",
    links: [
      { title: "GitHub", href: "https://github.com/olasunkanmi-SE/codebuddy" },
    ],
  },
  {
    title: "Restaurant",
    description:
      "This project is a comprehensive restaurant management system with a NestJS backend and React frontend, designed to streamline restaurant operations and enhance customer experience",
    titleLink: "https://github.com/olasunkanmi-SE/restaurant",
    techStack: "Typescript, React, NestJs, MongoDB, RBAC, JWT",
    designPattern: "Domain Driven Design",
    links: [
      { title: "GitHub", href: "https://github.com/olasunkanmi-SE/restaurant" },
    ],
  },

  {
    title: "ts-codebase-analyzer",
    description:
      "A powerful tool for parsing and analyzing TypeScript codebases using the TypeScript Abstract Syntax Tree (AST)",
    titleLink: "https://github.com/olasunkanmi-SE/ts-codebase-analyzer",
    techStack: "Typescript",
    designPattern: "",
    links: [
      {
        title: "GitHub",
        href: "https://github.com/olasunkanmi-SE/ts-codebase-analyzer",
      },
    ],
  },
]

export default projectsData
