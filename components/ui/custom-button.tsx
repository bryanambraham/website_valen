import type { ButtonHTMLAttributes } from "react"

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline"
  size?: "default" | "lg"
}

export function CustomButton({
  children,
  className = "",
  variant = "default",
  size = "default",
  ...props
}: CustomButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors
        focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950
        disabled:pointer-events-none disabled:opacity-50
        bg-white text-black hover:bg-white/90
        px-4 py-2 ${size === "lg" ? "text-lg" : "text-sm"}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  )
}

