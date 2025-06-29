import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects - Olasunkanmi Raymond",
  //make it more descriptive and seo friendly
  description:
    "Explore my projects showcasing innovative software engineering solutions, from web applications to open source contributions.",
  openGraph: {
    title: "Projects - Olasunkanmi Raymond",
    description:
      "A showcase of innovative software engineering projects and open source contributions.",
    type: "website",
  },
}

export default function ProjectsLayout({
  children,
}: {
  readonly children: React.ReactNode
}) {
  return <>{children}</>
}
