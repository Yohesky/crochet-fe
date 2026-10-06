import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-lavender-500 text-white hover:bg-lavender-600 shadow-sm shadow-lavender-500/30",
  secondary:
    "bg-white text-ink-900 hover:bg-cream-100 border border-ink-900/10",
  ghost: "text-ink-600 hover:bg-ink-900/5",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-7 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-[background-color,color,transform] duration-150 active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: string;
}

export const Button = ({
  variant = "primary",
  size = "md",
  href,
  className,
  ...props
}: ButtonProps) => {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className ?? ""}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      />
    );
  }

  return <button className={classes} {...props} />;
};
