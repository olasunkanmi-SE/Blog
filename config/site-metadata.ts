// @ts-check

import { SiteConfig } from "config/config"

const siteMetadata: SiteConfig = {
  solanaCerification: "/public/images/author/solana.jpg",
  title: "Oyinlola Olasunkanmi Raymond",
  author: "Oyinlola Olasunkanmi Raymond",
  headerTitle: "",
  description:
    "Experienced Software Engineer with a proven track record in designing and building scalable software applications. Skilled in full-stack development, with a particular emphasis on back-end technologies. Passionate about leveraging innovative solutions, such as generative AI, to enhance development efficiency and create impactful products",
  language: "en-us",
  theme: "system", // system, dark or light
  siteUrl: "https://olasunkanmi.app",
  siteRepo: "https://github.com/olasunkanmi-SE/Blog",
  siteLogo: "",
  image: "/static/images/author/ola.JPG",
  socialBanner: "",
  email: "oyinolasunkanmi@gmail.com",
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
    theme: "transparent_dark",
    darkTheme: "transparent_dark",
    themeURL: "",
    inputPosition: "top",
    lang: "en",
  },
  kbarConfig: {
    searchDocumentsPath: "search.json",
  },
}

export default siteMetadata
