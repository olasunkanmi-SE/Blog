// @ts-check

import { SiteConfig } from "config/config"

const siteMetadata: SiteConfig = {
  title: "Oyinlola Olasunkanmi Raymond Technical Blog",
  author: "Oyinlola Olasunkanmi Raymond",
  headerTitle: "Oyinlola Olasunkanmi Raymond",
  description:
    "As an experienced developer, I share my expertise and insights on my personal blog. Explore in-depth tutorials, practical tips, and thought-provoking discussions on system design, machine learning, artificial intelligence, and other cutting-edge technologies. Join me in mastering complex technical concepts through clear, concise explanations and stay ahead of the curve in the ever-evolving world of software development.",
  language: "en-us",
  theme: "system", // system, dark or light
  siteUrl: process.env.NEXT_PUBLIC_APP_URL ?? "https://fiatinnovations.com",
  siteRepo: "https://github.com/jolbol1/JamesShopland.com",
  siteLogo: "/static/images/logo.png",
  image: "/static/images/avatar.png",
  socialBanner: "/static/images/twitter-card.png",
  email: "hello@jamesshopland.com",
  github: "https://github.com/jolbol1",
  twitter: "https://twitter.com/JollyShopland",
  facebook: "https://facebook.com",
  youtube: "https://www.youtube.com/@JollyCoding",
  linkedin: "https://www.linkedin.com/in/james-shopland",
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
