"use client"

import { Button } from "@/app/components/Button/Button"
import { formatPrice } from "@/src/presentation/formatters/priceFormatter"
import { useCartStore } from "@/app/store/store"

export const Footer = ({ total, isEmpty }: { total: number; isEmpty: boolean }) => {
    const setCheckoutStep = useCartStore((s) => s.setCheckoutStep)

    return (
        <div className="border-t border-ink-900/10 px-6 py-4">
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
                onClick={() => setCheckoutStep("details")}
            >
                Siguiente
            </Button>
        </div>
    )
}
