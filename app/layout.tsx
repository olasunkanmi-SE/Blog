import "@/styles/tailwind.css"

import { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import localFont from "next/font/local"

import siteMetadata from "@/config/site-metadata"

import Analytics from "@/components/analytics"
import Footer from "@/components/footer"
import Nav from "@/components/nav"
import { Providers } from "@/components/providers"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const jetbrains = localFont({
  src: "../public/fonts/JetBrainsMono-Regular.woff2",
  variable: "--font-code",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ?? siteMetadata.siteUrl
  ),
  description: siteMetadata.description,
  keywords: [
    "Senior Software engineer",
    "System Design",
    "Large Language Models (LLMs)",
    "Open Source Contributor",
    "Oyinlola Olasunkanmi Raymond",
    "Machine learning Engineer",
    "Software Engineer",
    "Software Engineer in Malaysia",
    "Software engineer in Kuala Lumpur",
    "Nigeria software engineer in Malaysia",
    "Artificial intellegence",
  ],
  authors: [
    {
      name: "Oyinlola Olasunkanmi Raymond",
      url: "",
    },
  ],
  creator: "Oyinlola Olasunkanmi Raymond",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteMetadata.siteUrl,
    title: siteMetadata.title,
    description: siteMetadata.description,
    siteName: siteMetadata.title,
    images: [
      {
        url: `/Olasunkanmi.JPG`,
        width: 1200,
        height: 630,
        alt: siteMetadata.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [`/ola3.jpeg`],
    creator: "@kosemani1",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `/site.webmanifest`,
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}
interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable} `}>
      <body className="min-h-screen bg-white px-[5vw]  dark:bg-black">
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Nav />
            <main className="flex-1">{children}</main>
            <Footer />
            <Analytics />
          </div>
        </Providers>
      </body>
    </html>
  )
}
