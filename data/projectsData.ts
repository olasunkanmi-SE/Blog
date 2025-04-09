import { DevIconTypes } from "@/components/dev-icons"

export interface ProjectData {
  title: string
  description: string
  titleLink: string
  links: { title: string; href: string }[]
  icons?: DevIconTypes[]
  skills: string
  designPattern: string
  type: string
}

const projectsData: ProjectData[] = [
  {
    title: "CodeBuddy",
    description: `
   AI-powered coding assistant that employs  the use of Large Language Models (LLMs), context retrieval, code indexing, and workflow orchestration to generate code, automate tasks, and improve developers' output.`,
    titleLink: "https://github.com/olasunkanmi-SE/codebuddy",
    skills:
      "Event-Driven architecture, Workflow Orchestration, Reactjs, Generative AI, RAG, VectorDB, SQLite, Abstract Synthax Tree (AST), MCP, CodeIndexing, ",
    designPattern: "Orchestration, Event-Driven, Command Pattern.",

    links: [
      { title: "GitHub", href: "https://github.com/olasunkanmi-SE/codebuddy" },
    ],
    type: "Open",
  },
  {
    title: "Restaurant",
    description:
      "This project is a comprehensive restaurant management system with a NestJS backend and React frontend. The application takes advantage of Nestjs inversion of control IOC, containers, decorators, and its modular architecture approach to deliver a loosely coupled extensible web application.",
    titleLink: "https://github.com/olasunkanmi-SE/restaurant",
    skills:
      "Typescript, Reactjs, NestJs, MongoDB, RBAC, Authentication, State management",
    designPattern: "Clean Architecture, Inversion of Control.",
    links: [
      { title: "GitHub", href: "https://github.com/olasunkanmi-SE/restaurant" },
    ],
    type: "Open",
  },

  {
    title: "ts-codebase-analyzer",
    description:
      "A powerful tool for parsing and analyzing TypeScript codebases using the TypeScript Abstract Syntax Tree (AST). This npm package is useful for codeIndexing and context retrieval while building Generative AI applications with Retrival Augumented Generator RAG, that serves as memory providers to AI agents.",
    titleLink: "https://github.com/olasunkanmi-SE/ts-codebase-analyzer",
    skills:
      "Typescript Abstract synthax tree AST, Typescript compiler, Files Systems ",
    designPattern: "Singleton",
    links: [
      {
        title: "GitHub",
        href: "https://github.com/olasunkanmi-SE/ts-codebase-analyzer",
      },
    ],
    type: "Open",
  },
  {
    title: "Pickles Live",
    description:
      "Pickles Live Auctions provides a dynamic online car auctioning platform. It is a microservice, built on event driven architecture, with KAFKA, docker, kubernetes. It serves more than a million requests per day.",
    titleLink: "https://github.com/olasunkanmi-SE/ts-codebase-analyzer",
    skills:
      "Event-Driven architecture, CQRS, (CI/CD), SDKs, Containerization, Message Broker, postgreSQL, MongoDB, Microservices, Web Application Security, AWS, Angularjs",
    designPattern:
      "Event-Driven, Domain-Driven, Clean Architecture, Hexagonal Architecture",
    links: [
      {
        title: "Website",
        href: "https://www.pickles.com.au/",
      },
    ],
    type: "Close",
  },
]

export default projectsData
