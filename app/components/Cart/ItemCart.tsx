"use client"

import type { IProduct } from "@/src/domain/models/IProduct"
import Image from "next/image"
import { useCartStore } from "@/app/store/store"

const formatPrice = (price: number) =>
    `$${price.toLocaleString("es-CO", { maximumFractionDigits: 0 })}`

export const ItemCart = ({ product }: { product: IProduct }) => {
    const { removeFromCart } = useCartStore()

    return (
        <div className="flex items-center gap-3 rounded-xl bg-ink-900/[0.03] p-3">
            <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="64px"
                    className="object-cover"
                />
            </div>

            <div className="flex flex-1 flex-col gap-0.5">
                <h3 className="text-sm font-semibold text-ink-900 line-clamp-1">
                    {product.title}
                </h3>
                <span className="text-sm font-bold tabular-nums text-ink-900">
                    {formatPrice(product.price)}
                </span>
            </div>

            <button
                onClick={() => removeFromCart(product)}
                className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-ink-400 transition-colors hover:bg-blush-100 hover:text-blush-500"
                aria-label={`Eliminar ${product.title} del carrito`}
            >
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
                    <path
                        d="M6 6l12 12M18 6L6 18"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                    />
                </svg>
            </button>
        </div>
    )
}
