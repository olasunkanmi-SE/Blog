// @ts-check

import { SiteConfig } from "config/config"

const siteMetadata: SiteConfig = {
  title: "Fiatinnovations",
  author: "Oyinlola Olasunkanmi Raymond",
  headerTitle: "Fiatinnovations",
  description:
    "As an experienced developer, I share my expertise and insights on my personal blog. Explore in-depth tutorials, practical tips, and thought-provoking discussions on system design, machine learning, artificial intelligence, and other cutting-edge technologies. Join me in mastering complex technical concepts through clear, concise explanations and stay ahead of the curve in the ever-evolving world of software development.",
  language: "en-us",
  theme: "system", // system, dark or light
  siteUrl: "https://fiatinnovations.com",
  siteRepo: "https://github.com/olasunkanmi-SE/Blog",
  siteLogo: "",
  image: "",
  socialBanner: "",
  email: "",
  github: "https://github.com/olasunkanmi-SE",
  twitter: "https://twitter.com/kosemani1",
  facebook: "",
  youtube: "",
  linkedin:
    "https://www.linkedin.com/in/oyinlola-olasunkanmi-raymond-71b6b8aa/",
  locale: "en-GB",
  giscusConfig: {
    repo: process.env.NEXT_PUBLIC_GISCUS_REPO ?? "",
    repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID ?? "",
    category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY ?? "",
    categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID ?? "",
    mapping: "pathname",
    reactions: "1",
    metadata: "0",
    theme: "light",
    darkTheme: "transparent_dark",
    themeURL: "",
    lang: "en",
  },
  kbarConfig: {
    searchDocumentsPath: "search.json",
  },
}

export default siteMetadata
