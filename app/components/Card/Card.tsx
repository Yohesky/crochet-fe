import type { IProduct } from "@/src/domain/models/IProduct";
import Image from "next/image";
import { Button } from "@/app/components/Button/Button";

const formatPrice = (price: number) =>
    `$${price.toLocaleString("es-CO", { maximumFractionDigits: 0 })}`;

export const Card = ({ product }: { product: IProduct }) => {
    return (
        <article className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg shadow-ink-900/10 ring-1 ring-ink-900/5 transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-xl">
            <div className="relative aspect-square overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            <div className="flex flex-1 flex-col gap-2 p-4">
                <h2 className="text-lg font-semibold text-ink-900">{product.title}</h2>
                <p className="text-sm leading-relaxed text-ink-600">
                    {product.description}
                </p>

                <div className="mt-auto flex items-center justify-between pt-3">
                    <span className="text-lg font-bold tabular-nums text-ink-900">
                        {formatPrice(product.price)}
                    </span>
                </div>

                <Button size="sm" className="mt-1 w-full">
                    Agregar al carrito
                </Button>
            </div>
        </article>
    );
};
