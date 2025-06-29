import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-zinc-900/50 backdrop-blur-sm",
        className
      )}
      {...props}
    />
  )
}

export { Skeleton }
