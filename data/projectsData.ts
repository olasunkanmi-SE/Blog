import { DevIconTypes } from "@/components/dev-icons"

export interface ProjectData {
  title: string
  description: string
  titleLink: string
  links: { title: string; href: string }[]
  icons?: DevIconTypes[]
}

const projectsData: ProjectData[] = [
  {
    title: "Restaurant",
    description:
      "The restaurant is a user-friendly web application that revolutionizes the dining experience by allowing customers to conveniently customize and place their orders directly from their smartphones. With an intuitive interface and a range of features, The restaurant simplifies the ordering process and enhances customer satisfaction. The web application is designed to streamline the ordering process, improve order accuracy, and provide a convenient experience for customers. Whether you're dining in or opting for takeout, the restaurant empowers you to personalize your orders and have them prepared to your liking.",
    titleLink: "https://github.com/olasunkanmi-SE/restaurant",
    links: [
      { title: "GitHub", href: "https://github.com/olasunkanmi-SE/restaurant" },
    ],
  },
  {
    title: "IntelliSearch",
    description:
      "IntelliSearch is an advanced retrieval-based question-answering and recommendation system (RAG system) that leverages embeddings and a large language model (LLM) to provide accurate and relevant information to users. With its intelligent search capabilities and future recommendation features, IntelliSearch aims to be a comprehensive solution for extracting knowledge and discovering personalized content from a vast corpus of documents.",
    titleLink: "https://github.com/olasunkanmi-SE/IntelliSearch",
    links: [
      {
        title: "GitHub",
        href: "https://github.com/olasunkanmi-SE/IntelliSearch",
      },
    ],
  },
  {
    title: "CodeBuddy - AI-Powered Coding Assistant",
    description: `CodeBuddy is a Visual Studio Code extension that provides an AI-powered coding assistant to help developers write better code more efficiently. With CodeBuddy, you can get intelligent code suggestions, completions, and assistance based on the context and requirements of your code.`,
    titleLink: "https://github.com/olasunkanmi-SE/codebuddy",
    links: [
      { title: "GitHub", href: "https://github.com/olasunkanmi-SE/codebuddy" },
    ],
  },
]

export default projectsData
