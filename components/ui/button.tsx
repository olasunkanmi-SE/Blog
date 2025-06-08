
import React from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline"
  children: React.ReactNode
}

export function Button({ 
  className, 
  variant = "default", 
  children, 
  ...props 
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
        variant === "default" && "bg-black text-white hover:bg-gray-800 focus:ring-gray-500",
        variant === "outline" && "border border-gray-300 bg-transparent hover:bg-gray-50 focus:ring-gray-500",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
