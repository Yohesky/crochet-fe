import { notFound } from "next/navigation";
import Image from "next/image";
import { productUseCaseImpl } from "@/src/config/container";
import { Layout } from "@/app/components/Layout/Layout";
import { AddToCartButton } from "@/app/components/Product/AddToCartButton";
import { ProductSpecs } from "@/app/components/Product/ProductSpecs";
import { Pill, SparkleIcon } from "@/app/components/Pill/Pill";
import { formatPrice } from "@/src/presentation/formatters/priceFormatter";

// Rebuilds the page (re-fetching the Google Sheet) at most every 2 minutes.
export const revalidate = 120;

// Desktop-only detail view, reached through the rewrite in `proxy.ts`.
// The left column is the piece itself (it leads); the right column is the
// purchase block: title, price, action, then description and specs.
export default async function ProductDetailDesktopPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const product = await productUseCaseImpl.getProductDetail(id);

    if (!product) {
        notFound();
    }

    return (
        <Layout>
            <article className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] overflow-hidden rounded-3xl bg-white shadow-xl shadow-ink-900/10 ring-1 ring-ink-900/5">
                <div className="relative overflow-hidden bg-lavender-100">
                    <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="flex flex-col gap-8 p-10">
                    {product.isPersonalized && (
                        <Pill className="w-fit">
                            <SparkleIcon className="h-3.5 w-3.5 text-blush-500" />
                            Personalizado
                        </Pill>
                    )}

                    <div className="flex flex-col gap-4">
                        <h1 className="text-[28px] font-bold leading-tight text-balance text-ink-900">
                            {product.title}
                        </h1>

                        <div className="flex flex-col gap-1">
                            <span className="text-xs font-bold uppercase tracking-wide text-lavender-600">
                                Precio
                            </span>
                            <span className="text-3xl font-bold tabular-nums text-ink-900">
                                {formatPrice(product.price)}
                            </span>
                        </div>
                    </div>

                    <AddToCartButton product={product} className="w-full" />

                    <p className="text-base leading-relaxed text-ink-600">
                        {product.description}
                    </p>

                    <section className="flex flex-col gap-4 border-t border-ink-900/10 pt-6">
                        <h2 className="text-xs font-bold uppercase tracking-wide text-lavender-600">
                            Detalles
                        </h2>
                        <ProductSpecs details={product.details} />
                    </section>
                </div>
            </article>
        </Layout>
    );
}
