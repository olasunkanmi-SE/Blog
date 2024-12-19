// import { MDXLayoutRenderer } from '@/components/MDXComponents'

import Image from "next/image"
import { notFound } from "next/navigation"

import { allAuthors } from "@/.contentlayer/generated/index.mjs"

import { CodingTimeline } from "@/components/coding-timeline"
import { Mdx } from "@/components/mdx/mdx"
import SocialIcon from "@/components/social-icons"

export const metadata = {
  title: "About",
}

export default function About() {
  const author = allAuthors.find((p) => p.slug === "default")
  if (!author) notFound()
  const { name, avatar, occupation } = author

  return (
    <div className="container divide-y divide-gray-200 dark:divide-gray-700">
      <div className=" items-start space-y-2 pt-3 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="relative flex flex-col items-center space-x-2 pt-8">
          {/* <h2 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">
            {name}
          </h2> */}
          {/* <div className="text-gray-700 dark:text-gray-400">{occupation}</div> */}
          <div className="flex space-x-3 pt-6">
            {/* {github && <SocialIcon kind="github" href={github} />}
            {linkedin && <SocialIcon kind="linkedin" href={linkedin} />}
            {twitter && <SocialIcon kind="twitter" href={twitter} />} */}
          </div>
        </div>
        <div className="max-w-none py-8 text-gray-700 dark:text-gray-300 xl:col-span-2">
          <div className="space-y-2 pb-8 pt-6 md:space-y-5">
            <h3 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              About me
            </h3>
            <hr />
          </div>
          <Mdx code={author.body.code} />

          <div className="relative col-span-2 col-start-2 ">
            <h3 className="my-12 text-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100  sm:text-4xl sm:leading-10 md:my-6 md:text-left  md:leading-14">
              Professional Experience
            </h3>
            <CodingTimeline />
          </div>
        </div>
      </div>
    </div>
  )
}
