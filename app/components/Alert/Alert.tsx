import type { ButtonHTMLAttributes, HTMLAttributes } from "react"
import { CloseIcon } from "./Icons"

export type AlertVariant = "info" | "success"

const onColor =
    "text-white [&_h3]:text-white [&_p]:text-white/90 [&_button]:text-white/70 hover:[&_button]:bg-white/15 hover:[&_button]:text-white"

const variants: Record<AlertVariant, string> = {
    info: `bg-sage-500 ring-sage-700/20 ${onColor} [&_svg]:text-white [&_a]:font-semibold [&_a]:text-white [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-sage-100`,
    success: `bg-sage-600 ring-sage-700/20 ${onColor} [&_svg]:text-white`,
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

export const AlertClose = ({
    label = "Cerrar aviso",
    className,
    children,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { label?: string }) => (
    <button
        type="button"
        aria-label={label}
        className={`-mr-1 -mt-1 col-start-3 flex h-6 w-6 items-center justify-center rounded-full text-ink-400 transition-colors hover:bg-ink-900/5 hover:text-ink-900 [&_svg]:h-4 [&_svg]:w-4 ${className ?? ""
            }`}
        {...props}
    >
        {children ?? <CloseIcon />}
    </button>
)