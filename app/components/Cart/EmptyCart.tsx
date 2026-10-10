export const EmptyCart = () => {
    return (
        <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
            <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-12 w-12 text-ink-400/40"
                aria-hidden="true"
            >
                <path
                    d="M2.5 3h2.2l2.5 11.6a1.8 1.8 0 0 0 1.75 1.4h9.05a1.8 1.8 0 0 0 1.75-1.4L21.5 7H6"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <circle cx="9.5" cy="20" r="1.3" stroke="currentColor" strokeWidth="1.4" />
                <circle cx="17" cy="20" r="1.3" stroke="currentColor" strokeWidth="1.4" />
            </svg>
            <p className="text-sm font-medium text-ink-400">
                Tu carrito está vacío
            </p>
        </div>
    )
}
