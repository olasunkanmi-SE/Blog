import { notFound } from "next/navigation"
import { allAuthors } from "@/.contentlayer/generated/index.mjs"
import { Mdx } from "@/components/mdx/mdx"
import { QRCode } from "@/components/qrcode"
import siteMetadata from "@/config/site-metadata"

export const metadata = {
  title: "About",
}

export default function About() {
  const author = allAuthors.find((p) => p.slug === "default")
  if (!author) notFound()

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 rounded-full">
                About Me
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Olasunkanmi Raymond
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Software engineer passionate about building innovative solutions 
              with modern technologies and exploring the frontiers of AI.
            </p>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-16 border-t border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <Mdx code={author.body.code} />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Tech Stack
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Node.js", "React.js", "TypeScript", 
                "PostgreSQL", "MongoDB", "GraphQL",
                "AWS", "Docker", "Generative AI"
              ].map((tech) => (
                <div 
                  key={tech}
                  className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Let's Connect
            </h2>

            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Scan the QR code to connect with me on LinkedIn
            </p>

            <div className="inline-block bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
              <QRCode />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}