import type { HTMLAttributes } from "react"

export type PillVariant = "glass" | "accent"

const variants: Record<PillVariant, string> = {
    glass: "bg-white/85 text-ink-900 ring-ink-900/5 backdrop-blur-sm",
    accent: "bg-lavender-500 text-white ring-lavender-500/30",
}

export const Pill = ({
    variant = "glass",
    className,
    children,
    ...props
}: HTMLAttributes<HTMLSpanElement> & { variant?: PillVariant }) => (
    <span
        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold shadow-sm ring-1 ${variants[variant]} ${className ?? ""
            }`}
        {...props}
    >
        {children}
    </span>
)

export const SparkleIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className ?? "h-3.5 w-3.5"}>
        <path
            d="M11 4.2l1.4 3.4 3.4 1.4-3.4 1.4L11 13.8 9.6 10.4 6.2 9l3.4-1.4L11 4.2z"
            fill="currentColor"
        />
        <path
            d="M16.8 13.4l.8 1.9 1.9.8-1.9.8-.8 1.9-.8-1.9-1.9-.8 1.9-.8.8-1.9z"
            fill="currentColor"
            opacity="0.6"
        />
    </svg>
)