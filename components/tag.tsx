import Link from "next/link"

import { slug } from "github-slugger"

export interface TagProps {
  text: string
  className?: string
}

const Tag = ({ text, className }: TagProps) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className={
        className ??
        "inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-xs text-zinc-400 transition-colors hover:border-zinc-700 hover:text-zinc-300"
      }
    >
      {text.split(" ").join("-")}
    </Link>
  )
}

export default Tag
