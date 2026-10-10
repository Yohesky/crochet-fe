"use client"

import { useState } from "react"
import { AlertFactory } from "@/app/components/Alert/AlertFactory"
import { Button } from "@/app/components/Button/Button"
import { formatPrice } from "@/src/presentation/formatters/priceFormatter"

const WHATSAPP_NUMBER = "573204944660"
const WHATSAPP_MESSAGE =
    "Hola, acabo de realizar el pago de mi pedido en Crochet. Adjunto el comprobante."

export const Footer = ({ total, isEmpty }: { total: number; isEmpty: boolean }) => {
    const [showInstructions, setShowInstructions] = useState(false)

    return (
        <div className="border-t border-ink-900/10 px-6 py-4">
            {showInstructions && !isEmpty && (
                <div className="animate-alert-in mb-4">
                    <AlertFactory
                        type="info"
                        title="Te falta un solo paso"
                        description={
                            <>
                                Realiza el pago y, una vez hecho, envía el comprobante por WhatsApp al{" "}
                                <a
                                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    320 4944660
                                </a>
                                . Ten en cuenta que los pedidos demoran aproximadamente 2 semanas
                                en estar listos.
                            </>
                        }
                        onClose={() => setShowInstructions(false)}
                    />
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