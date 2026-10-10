import type { HTMLAttributes } from "react"

export type AlertVariant = "info" | "success"

const variants: Record<AlertVariant, string> = {
    info: "bg-lavender-100/70 text-lavender-600 ring-lavender-500/25 [&_svg]:text-lavender-500",
    success: "bg-blush-100/70 text-blush-500 ring-blush-500/25 [&_svg]:text-blush-500",
}

export const Alert = ({
    variant = "info",
    className,
    children,
    ...props
}: HTMLAttributes<HTMLDivElement> & { variant?: AlertVariant }) => (
    <div
        role="alert"
        className={`grid w-full grid-cols-[auto_1fr_auto] items-start gap-x-3 rounded-2xl px-4 py-3.5 text-sm ring-1 [&>svg]:mt-0.5 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:shrink-0 ${variants[variant]} ${className ?? ""
            }`}
        {...props}
    >
        {children}
    </div>
)

export const AlertContent = ({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) => (
    <div className={`col-start-2 flex flex-col gap-1 ${className ?? ""}`} {...props}>
        {children}
    </div>
)

export const AlertTitle = ({ className, children, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h3
        className={`text-sm font-semibold tracking-tight text-ink-900 ${className ?? ""}`}
        {...props}
    >
        {children}
    </h3>
)

export const AlertDescription = ({ className, children, ...props }: HTMLAttributes<HTMLParagraphElement>) => (
    <p className={`text-xs leading-relaxed text-ink-600 ${className ?? ""}`} {...props}>
        {children}
    </p>
)