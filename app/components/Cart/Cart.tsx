"use client"

import { useEffect } from "react"
import { useCartStore } from "@/app/store/store"
import { ItemCart } from "./ItemCart"
import { EmptyCart } from "./EmptyCart"
import { Footer } from "./Footer"

export const Cart = () => {
    const { cart, showCart, toggleCart } = useCartStore()
    console.log(cart)
    const total = cart.reduce((sum, item) => sum + item.price, 0)

    // Lock body scroll + close on Escape while the cart is open
    useEffect(() => {
        if (!showCart) return

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") toggleCart()
        }

        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = "hidden"
        document.addEventListener("keydown", onKeyDown)

        return () => {
            document.body.style.overflow = previousOverflow
            document.removeEventListener("keydown", onKeyDown)
        }
    }, [showCart, toggleCart])

    return (
        <>
            {/* Backdrop */}
            <div
                onClick={toggleCart}
                aria-hidden="true"
                className={`fixed inset-0 z-40 bg-ink-900/40 backdrop-blur-sm transition-opacity duration-300 ${showCart ? "opacity-100" : "pointer-events-none opacity-0"
                    }`}
            />

            {/* Cart Panel */}
            <aside
                aria-label="Carrito de compras"
                aria-hidden={!showCart}
                inert={!showCart}
                className={`fixed right-0 top-0 z-50 flex h-full w-full sm:w-[50vw] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${showCart ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-ink-900/10 px-6 py-4">
                    <h2 className="text-lg font-bold text-ink-900">Carrito</h2>
                    <button
                        onClick={toggleCart}
                        className="flex h-9 w-9 items-center justify-center rounded-full text-ink-600 transition-colors hover:bg-ink-900/5 hover:text-ink-900"
                        aria-label="Cerrar carrito"
                    >
                        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                            <path
                                d="M6 6l12 12M18 6L6 18"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                            />
                        </svg>
                    </button>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto px-6 py-4">
                    {cart.length === 0 ? (
                        <EmptyCart />
                    ) : (
                        <div className="flex flex-col gap-3">
                            {cart.map((item, index) => (
                                <ItemCart key={`${item.id}-${index}`} product={item} />
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                <Footer total={total} isEmpty={cart.length === 0} />
            </aside>
        </>
    )
}
