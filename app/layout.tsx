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
    "Olasunkanmi Oyinlola",
    "Kuala Lumpur Software Engineer",
    "Full-Stack Developer Malaysia",
    "Oyinlola Olasunkanmi Raymond",
    "Backend Specialist",
    "Blockchain Expert in Malaysia",
    "Machine learning Engineer in Kuala lumpur",
    "Typescript Node.js Developer",
    "AWS Cloud Engineer Malaysia",
    "Software engineer in Kuala Lumpur",
    "DApps and Smart Contracts Specialist",
    "Microservices Architect Kuala Lumpur",
    "Full-Stack Developer with Blockchain Expertise",
    "decentralised application expert",
    "Artificial intellegence",
    "Malaysia Software Engineer Hiring",
    "Kuala Lumpur Tech Jobs",
    "Best Software Engineers in Malaysia",
    "Top Developers in Kuala Lumpur",
    "senior software engineer specializing in blockchain development in Kuala Lumpur",
    "Scalable Backend Solutions",
    "Blockchain Development Services",
    "AI-Powered Software Development",
    "Custom Software Development Malaysia",
    "Tech Talent in Kuala Lumpur",
  ],
  authors: [
    {
      name: "Oyinlola Olasunkanmi Raymond",
      url: "https://olasunkanmi.app",
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
        url: `/ola.JPG`,
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
    images: [`/ola.JPG`],
    creator: "@kosemani1",
  },
  icons: {
    icon: "/olasunkanmi-app.png",
    shortcut: "/olasunkanmi-app.png",
    apple: "/olasunkanmi-app.png",
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
