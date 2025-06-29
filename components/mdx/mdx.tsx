/* eslint-disable jsx-a11y/heading-has-content */
import * as React from "react"
import NextImage, { ImageProps } from "next/image"

import type { MDXComponents } from "mdx/types"
import { useMDXComponent } from "next-contentlayer-temp/hooks"

import { cn } from "@/lib/utils"

import { Callout } from "./callout"

const createHeadingId = (text: React.ReactNode): string => {
  if (typeof text === "string") {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
  }
  if (Array.isArray(text)) {
    return text
      .map((child) => createHeadingId(child))
      .join("-")
      .replace(/(^-|-$)/g, "")
  }
  if (React.isValidElement(text)) {
    return createHeadingId(text.props.children ?? "")
  }
  if (text === null || text === undefined || typeof text === "object") {
    return ""
  }
  return String(text)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

const components: MDXComponents = {
  h1: ({
    className,
    children,
    ...props
  }: React.HTMLProps<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "mt-2 scroll-m-20 text-4xl font-bold tracking-tight text-white",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({
    id,
    className,
    children,
    ...props
  }: React.HTMLProps<HTMLHeadingElement>) => {
    const headingId = id ?? createHeadingId(children)
    return (
      <h2
        id={headingId}
        className={cn(
          "mt-10 scroll-m-20 border-b border-zinc-800 pb-2 text-3xl font-semibold tracking-tight text-white first:mt-0",
          className
        )}
        {...props}
      >
        {children}
      </h2>
    )
  },
  h3: ({
    id,
    className,
    children,
    ...props
  }: React.HTMLProps<HTMLHeadingElement>) => {
    const headingId = id ?? createHeadingId(children)
    return (
      <h3
        id={headingId}
        className={cn(
          "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight text-white",
          className
        )}
        {...props}
      >
        {children}
      </h3>
    )
  },
  h4: ({
    id,
    className,
    children,
    ...props
  }: React.HTMLProps<HTMLHeadingElement>) => {
    const headingId = id ?? createHeadingId(children)
    return (
      <h4
        id={headingId}
        className={cn(
          "mt-8 scroll-m-20 text-xl font-semibold tracking-tight text-white",
          className
        )}
        {...props}
      >
        {children}
      </h4>
    )
  },
  h5: ({
    id,
    className,
    children,
    ...props
  }: React.HTMLProps<HTMLHeadingElement>) => (
    <h5
      id={id ?? createHeadingId(children)}
      className={cn(
        "mt-8 scroll-m-20 text-lg font-semibold tracking-tight text-white",
        className
      )}
      {...props}
    >
      {children}
    </h5>
  ),
  h6: ({
    id,
    className,
    children,
    ...props
  }: React.HTMLProps<HTMLHeadingElement>) => (
    <h6
      id={id ?? createHeadingId(children)}
      className={cn(
        "mt-8 scroll-m-20 text-base font-semibold tracking-tight text-white",
        className
      )}
      {...props}
    >
      {children}
    </h6>
  ),
  a: ({ className, ...props }) => (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a
      className={cn(
        "font-medium text-primary-600 dark:text-primary-500 ",
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }) => (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }) => (
    <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={cn(
        "mt-6 border-l-2 border-slate-300 pl-6 italic text-slate-800 [&>*]:text-slate-600",
        className
      )}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={cn("rounded-lg border border-zinc-800", className)}
      alt={alt}
      {...props}
    />
  ),
  hr: ({ className, ...props }) => (
    <hr className={cn("my-8 border-zinc-800", className)} {...props} />
  ),
  table: ({
    className,
    children,
    ...props
  }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...props}>
        {children}
      </table>
    </div>
  ),
  tr: ({
    className,
    children,
    ...props
  }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn(
        "m-0 border-t border-zinc-800 p-0 even:bg-zinc-900/50",
        className
      )}
      {...props}
    >
      {children}
    </tr>
  ),
  th: ({ className, children, ...props }) => (
    <th
      className={cn(
        "border border-zinc-800 px-4 py-2 text-left font-bold text-zinc-300 [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ className, children, ...props }) => (
    <td
      className={cn(
        "border border-zinc-800 px-4 py-2 text-left text-zinc-300 [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    >
      {children}
    </td>
  ),
  pre: ({ className, children, ...props }) => (
    <pre
      className={cn(
        "mb-4 mt-6 overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-900/50 py-4",
        className
      )}
      {...props}
    >
      {children}
    </pre>
  ),
  code: ({ className, children, ...props }) => (
    <code
      className={cn(
        "relative rounded border border-zinc-800 bg-zinc-900/50 px-[0.3rem] py-[0.2rem] font-mono text-sm text-zinc-300",
        className
      )}
      {...props}
    >
      {children}
    </code>
  ),
  Callout,
  // @ts-ignore
  Image: (props: ImageProps) => <NextImage {...props} />,
}

interface MdxProps {
  readonly code: string
}

export function Mdx({ code }: Readonly<MdxProps>) {
  const Component = useMDXComponent(code)

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  )
}
