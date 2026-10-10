"use client"

import { useState } from "react"
import { Alert, AlertContent, AlertDescription, AlertTitle } from "@/app/components/Alert/Alert"
import { CloseIcon, InfoIcon } from "@/app/components/Alert/Icons"
import { Button } from "@/app/components/Button/Button"
import { formatPrice } from "@/src/utils/formatPrice"

const WHATSAPP_NUMBER = "573204944660"
const WHATSAPP_MESSAGE =
    "Hola, acabo de realizar el pago de mi pedido en Crochet. Adjunto el comprobante."

export const Footer = ({ total, isEmpty }: { total: number; isEmpty: boolean }) => {
    const [showInstructions, setShowInstructions] = useState(false)

    return (
        <div className="border-t border-ink-900/10 px-6 py-4">
            {showInstructions && !isEmpty && (
                <div className="animate-alert-in mb-4">
                    <Alert className="max-w-none">
                        <InfoIcon />
                        <AlertContent>
                            <AlertTitle>Te falta un solo paso</AlertTitle>
                            <AlertDescription>
                                Realiza el pago y, una vez hecho, envía el comprobante por WhatsApp al{" "}
                                <a
                                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-semibold text-lavender-600 underline underline-offset-2 hover:text-lavender-500"
                                >
                                    320 4944660
                                </a>
                                . Ten en cuenta que los pedidos demoran aproximadamente 2 semanas
                                en estar listos.
                            </AlertDescription>
                        </AlertContent>
                        <button
                            onClick={() => setShowInstructions(false)}
                            aria-label="Cerrar aviso"
                            className="col-start-3 -mr-1 -mt-1 flex h-6 w-6 items-center justify-center rounded-full text-ink-400 transition-colors hover:bg-ink-900/5 hover:text-ink-900 [&_svg]:h-4 [&_svg]:w-4"
                        >
                            <CloseIcon />
                        </button>
                    </Alert>
                </div>
            )}

            <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-medium text-ink-600">Total</span>
                <span className="text-xl font-bold tabular-nums text-ink-900">
                    {formatPrice(total)}
                </span>
            </div>
            <Button
                className="w-full"
                size="lg"
                disabled={isEmpty}
                onClick={() => setShowInstructions(true)}
            >
                Pagar
            </Button>
        </div>
    )
}