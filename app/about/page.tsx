// import { MDXLayoutRenderer } from '@/components/MDXComponents'

import { notFound } from "next/navigation"

import { allAuthors } from "@/.contentlayer/generated/index.mjs"

import { Mdx } from "@/components/mdx/mdx"

export const metadata = {
  title: "About",
}

export default function About() {
  const author = allAuthors.find((p) => p.slug === "default")
  if (!author) notFound()

  return (
    <div className="container divide-y divide-gray-200 dark:divide-gray-700">
      <div className="grid grid-cols-12 gap-4">
        {/* First 3 columns */}
        <div className="col-span-2">
          <div className="relative flex flex-col items-center space-x-2 pt-8">
            <div className="flex space-x-3 pt-6"></div>
          </div>
        </div>

        {/* Middle 6 columns */}
        <div className="col-span-8 py-8 text-gray-700 dark:text-gray-300">
          <div className="space-y-2 pb-8 pt-6 md:space-y-5">
            {/* <h3 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              About me
            </h3>
            <hr /> */}
          </div>
          <Mdx code={author.body.code} />
        </div>
      </div>
    </div>
  )
}
