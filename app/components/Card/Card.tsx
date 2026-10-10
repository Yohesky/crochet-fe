"use client"
import type { IProduct } from "@/src/domain/models/IProduct";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/components/Button/Button";
import { useCartStore } from "@/app/store/store";
import { useAlertStore } from "@/app/store/alert.store";
import { Pill, SparkleIcon } from "@/app/components/Pill/Pill";
import { formatPrice } from "@/src/presentation/formatters/priceFormatter";

export const Card = ({ product }: { product: IProduct }) => {

    const { addToCart } = useCartStore()
    const showToast = useAlertStore((state) => state.showToast)

    const handleAddToCart = () => {
        addToCart(product)
        showToast("Producto agregado")
    }
    return (
        <article className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg shadow-ink-900/10 ring-1 ring-ink-900/5 transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-xl">
            <Link href={product.link} className="relative block aspect-square overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {product.isPersonalized && (
                    <Pill className="absolute left-3 top-3">
                        <SparkleIcon className="h-3.5 w-3.5 text-blush-500" />
                        Personalizado
                    </Pill>
                )}
            </Link>

            <div className="flex flex-1 flex-col gap-2 p-4">
                <Link href={product.link}>
                    <h2 className="text-lg font-semibold text-ink-900">{product.title}</h2>
                </Link>
                <p className="line-clamp-3 text-sm leading-relaxed text-ink-600">
                    {product.description}
                </p>

                <div className="mt-auto flex items-center justify-between pt-3">
                    <span className="text-lg font-bold tabular-nums text-ink-900">
                        {formatPrice(product.price)}
                    </span>
                </div>

                <Button size="sm" className="mt-1 w-full text-xs" onClick={handleAddToCart}>
                    Agregar al carrito
                </Button>
            </div>
        </article>
    );
};
