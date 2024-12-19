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
      "The restaurant is a web app that lets customers order food from their phones. It features an easy-to-use interface where diners can customize their meals, place orders, and choose between dine-in or takeout options. The app aims to make ordering more efficient and accurate while improving the overall dining experience.",
    titleLink: "https://github.com/olasunkanmi-SE/restaurant",
    links: [
      { title: "GitHub", href: "https://github.com/olasunkanmi-SE/restaurant" },
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
  {
    title: "IntelliSearch",
    description:
      "IntelliSearch is an advanced retrieval-based question-answering and recommendation system (RAG system) that leverages embeddings and a large language model (LLM) to provide accurate and relevant information to users.",
    titleLink: "https://github.com/olasunkanmi-SE/IntelliSearch",
    links: [
      {
        title: "GitHub",
        href: "https://github.com/olasunkanmi-SE/IntelliSearch",
      },
    ],
  },
]

export default projectsData
