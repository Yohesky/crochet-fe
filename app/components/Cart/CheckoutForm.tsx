"use client"

import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { AlertFactory } from "@/app/components/Alert/AlertFactory"
import { Button } from "@/app/components/Button/Button"
import { formatPrice } from "@/src/presentation/formatters/priceFormatter"
import { useCartStore } from "@/app/store/store"

const WHATSAPP_NUMBER = "573204944660"
const WHATSAPP_MESSAGE =
    "Hola, acabo de realizar el pago de mi pedido en Crochet. Adjunto el comprobante."

const checkoutSchema = z.object({
    firstName: z.string().trim().min(2, "Ingresa tu nombre"),
    lastName: z.string().trim().min(2, "Ingresa tu apellido"),
    phone: z
        .string()
        .trim()
        // Strip separators (spaces, dashes, parentheses and the leading "+")
        // so autofilled values like "+57 320 123 4567" pass validation
        .transform((value) => value.replace(/[\s()+-]/g, ""))
        .pipe(z.string().regex(/^\d{7,15}$/, "Ingresa un teléfono válido (entre 7 y 15 dígitos)")),
    address: z.string().trim().min(5, "Ingresa tu dirección completa"),
})

type CheckoutFormData = z.infer<typeof checkoutSchema>

const inputClasses = (hasError: boolean) =>
    `w-full rounded-xl border bg-ink-900/[0.03] px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors placeholder:text-ink-400 ${
        hasError
            ? "border-blush-400 focus:border-blush-500"
            : "border-ink-900/10 focus:border-lavender-500"
    }`

const ArrowLeftIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
        <path
            d="M19 12H5m0 0l6-6m-6 6l6 6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export const CheckoutForm = ({ total }: { total: number }) => {
    const setCheckoutStep = useCartStore((s) => s.setCheckoutStep)
    const cart = useCartStore((s) => s.cart)
    const storedData = useCartStore((s) => s.checkoutData)
    const setCheckoutData = useCartStore((s) => s.setCheckoutData)

    const [showInstructions, setShowInstructions] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isValid },
    } = useForm<CheckoutFormData>({
        resolver: zodResolver(checkoutSchema),
        mode: "onTouched",
        defaultValues: storedData,
    })

    // Persist the form data so it survives going back to the cart and forth again
    useEffect(() => {
        const subscription = watch((values) =>
            setCheckoutData({
                firstName: values.firstName ?? "",
                lastName: values.lastName ?? "",
                phone: values.phone ?? "",
                address: values.address ?? "",
            })
        )
        return () => subscription.unsubscribe()
    }, [watch, setCheckoutData])

    const upfront = Math.ceil(total / 2)
    const remaining = total - upfront

    const onSubmit = async (data: CheckoutFormData) => {
        const order = {
            firstName: data.firstName.trim(),
            lastName: data.lastName.trim(),
            phone: data.phone.replace(/[\s()+-]/g, ""),
            address: data.address.trim(),
            items: cart.map((item) => ({ title: item.title, price: item.price })),
        }

        setSubmitStatus("loading")
        try {
            const res = await fetch("/api/orders", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(order),
            })

            if (!res.ok) throw new Error(`Error registrando el pedido: ${res.status}`)

            setCheckoutData(order)
            setSubmitStatus("success")
            setShowInstructions(true)
        } catch (error) {
            console.error(error)
            setSubmitStatus("error")
        }
    }

    return (
        <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className="flex h-full flex-col animate-slide-in-right motion-reduce:animate-none"
        >
            {/* Top bar */}
            <div className="px-6 pt-4">
                <button
                    type="button"
                    onClick={() => setCheckoutStep("cart")}
                    className="flex items-center gap-1.5 text-sm font-medium text-ink-600 transition-colors hover:text-ink-900"
                >
                    <ArrowLeftIcon />
                    Volver al carrito
                </button>
            </div>

            {/* Fields */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
                <h2 className="mb-4 text-base font-bold text-ink-900">
                    Datos de contacto y entrega
                </h2>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="checkout-first-name" className="text-sm font-medium text-ink-600">
                            Nombre
                        </label>
                        <input
                            id="checkout-first-name"
                            type="text"
                            autoComplete="given-name"
                            placeholder="Tu nombre"
                            aria-invalid={Boolean(errors.firstName)}
                            aria-describedby={errors.firstName ? "checkout-first-name-error" : undefined}
                            className={inputClasses(Boolean(errors.firstName))}
                            {...register("firstName")}
                        />
                        {errors.firstName && (
                            <p id="checkout-first-name-error" className="text-sm text-blush-500">
                                {errors.firstName.message}
                            </p>
                        )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="checkout-last-name" className="text-sm font-medium text-ink-600">
                            Apellido
                        </label>
                        <input
                            id="checkout-last-name"
                            type="text"
                            autoComplete="family-name"
                            placeholder="Tu apellido"
                            aria-invalid={Boolean(errors.lastName)}
                            aria-describedby={errors.lastName ? "checkout-last-name-error" : undefined}
                            className={inputClasses(Boolean(errors.lastName))}
                            {...register("lastName")}
                        />
                        {errors.lastName && (
                            <p id="checkout-last-name-error" className="text-sm text-blush-500">
                                {errors.lastName.message}
                            </p>
                        )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="checkout-phone" className="text-sm font-medium text-ink-600">
                            Teléfono de contacto
                        </label>
                        <input
                            id="checkout-phone"
                            type="tel"
                            inputMode="numeric"
                            autoComplete="tel"
                            placeholder="Ej: +57 3201234567"
                            aria-invalid={Boolean(errors.phone)}
                            aria-describedby={errors.phone ? "checkout-phone-error" : undefined}
                            className={inputClasses(Boolean(errors.phone))}
                            {...register("phone")}
                        />
                        {errors.phone && (
                            <p id="checkout-phone-error" className="text-sm text-blush-500">
                                {errors.phone.message}
                            </p>
                        )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="checkout-address" className="text-sm font-medium text-ink-600">
                            Dirección
                        </label>
                        <input
                            id="checkout-address"
                            type="text"
                            autoComplete="street-address"
                            placeholder="Calle, número, ciudad"
                            aria-invalid={Boolean(errors.address)}
                            aria-describedby={errors.address ? "checkout-address-error" : undefined}
                            className={inputClasses(Boolean(errors.address))}
                            {...register("address")}
                        />
                        {errors.address && (
                            <p id="checkout-address-error" className="text-sm text-blush-500">
                                {errors.address.message}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="border-t border-ink-900/10 px-6 py-4">
                {showInstructions && (
                    <div className="animate-alert-in mb-4">
                        <AlertFactory
                            type="info"
                            title="Te falta un solo paso"
                            description={
                                <>
                                    El pedido requiere un abono del{" "}
                                    <strong>50% por adelantado: {formatPrice(upfront)}</strong>. El 50%
                                    restante ({formatPrice(remaining)}) se paga cuando tu producto esté
                                    terminado. Realiza el pago y, una vez hecho, envía el comprobante por
                                    WhatsApp al{" "}
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
                {submitStatus === "error" && (
                    <p className="mb-2 text-sm text-blush-500">
                        No se pudo registrar el pedido. Revisa tu conexión e intenta de nuevo.
                    </p>
                )}
                <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={!isValid || submitStatus === "loading" || submitStatus === "success"}
                >
                    {submitStatus === "loading" ? "Registrando..." : "Pagar"}
                </Button>
            </div>
        </form>
    )
}
