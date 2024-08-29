import { cn } from "@/lib/utils"

interface CalloutProps {
  icon?: string
  children?: React.ReactNode
  type?: "default" | "warning" | "danger"
}

export function Callout({
  children,
  icon,
  type = "default",
  ...props
}: CalloutProps) {
  return (
    <div
      className={cn("my-6 flex items-start border-l-4 p-4", {
        "border-l-amber-600 bg-amber-50 dark:bg-yellow-950": type === "default",
        "border-l-red-600 bg-red-50 dark:bg-red-950": type === "danger",
        "border-l-yellow-600 bg-yellow-50 dark:bg-yellow-600/50":
          type === "warning",
      })}
      {...props}
    >
      {icon && <span className="mr-4 text-2xl">{icon}</span>}
      <div>{children}</div>
    </div>
  )
}
