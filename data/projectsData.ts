import { DevIconTypes } from "@/components/dev-icons"

export interface ProjectData {
  title: string
  description: string
  titleLink: string
  links: { title: string; href: string }[]
  icons?: DevIconTypes[]
  skills: string
  designPattern: string
}

const projectsData: ProjectData[] = [
  {
    title: "CodeBuddy",
    description: `
   AI-powered coding assistant that employs  the use of Large Language Models (LLMs), code indexing, and workflow orchestration to generate code, automate tasks, and improve developers' output.`,
    titleLink: "https://github.com/olasunkanmi-SE/codebuddy",
    skills:
      "Nodejs, Typescript, React, Generative AI, RAG, VectorDB, SQLite, Abstract Synthax Tree (AST), MCP, CodeIndexing, workflow orchestration.",
    designPattern: "Orchestration, Event-Driven, Command Pattern.",

    links: [
      { title: "GitHub", href: "https://github.com/olasunkanmi-SE/codebuddy" },
    ],
  },
  {
    title: "Restaurant",
    description:
      "This project is a comprehensive restaurant management system with a NestJS backend and React frontend. The application takes advantage of Nestjs inversion of control IOC, decorators, and modular architecture to deliver a loosely coupled extensible software.",
    titleLink: "https://github.com/olasunkanmi-SE/restaurant",
    skills:
      "Typescript, React, NestJs, MongoDB, RBAC, Authentication, Authorization",
    designPattern: "Clean Architecture, Inversion of Control.",
    links: [
      { title: "GitHub", href: "https://github.com/olasunkanmi-SE/restaurant" },
    ],
  },

  {
    title: "ts-codebase-analyzer",
    description:
      "A powerful tool for parsing and analyzing TypeScript codebases using the TypeScript Abstract Syntax Tree (AST). This npm package is useful for codeIndexing when building Generative AI application with Retrival Augumented Generator RAG and Ai agents long term memory",
    titleLink: "https://github.com/olasunkanmi-SE/ts-codebase-analyzer",
    skills: "Typescript",
    designPattern: "Singleton",
    links: [
      {
        title: "GitHub",
        href: "https://github.com/olasunkanmi-SE/ts-codebase-analyzer",
      },
    ],
  },
]

export default projectsData
