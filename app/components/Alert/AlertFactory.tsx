import type { ReactNode } from "react"
import { Alert, AlertClose, AlertContent, AlertDescription, AlertTitle } from "./Alert"
import { CheckCircleIcon, InfoIcon } from "./Icons"

export type AlertType = "info" | "success"

type AlertFactoryProps = {
    /** info -> alert en línea · success -> toast fijo en la parte inferior */
    type: AlertType
    /** Título del alert de tipo info */
    title?: ReactNode
    /** Descripción del alert de tipo info */
    description?: ReactNode
    /** Texto del toast de tipo success */
    message?: ReactNode
    onClose?: () => void
    className?: string
}

export const AlertFactory = ({
    type,
    title,
    description,
    message,
    onClose,
    className,
}: AlertFactoryProps) => {
    if (type === "success") {
        return (
            <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[100] flex justify-center px-4 pb-6 sm:pb-8">
                <Alert
                    variant="success"
                    role="status"
                    aria-live="polite"
                    className={`animate-toast-in pointer-events-auto max-w-sm shadow-xl shadow-ink-900/10 ${className ?? ""
                        }`}
                >
                    <CheckCircleIcon />
                    <AlertContent>
                        <AlertTitle>{message}</AlertTitle>
                    </AlertContent>
                    {onClose && <AlertClose onClick={onClose} label="Cerrar notificación" />}
                </Alert>
            </div>
        )
    }

    return (
        <Alert className={className}>
            <InfoIcon />
            <AlertContent>
                <AlertTitle>{title}</AlertTitle>
                {description && <AlertDescription>{description}</AlertDescription>}
            </AlertContent>
            {onClose && <AlertClose onClick={onClose} />}
        </Alert>
    )
}