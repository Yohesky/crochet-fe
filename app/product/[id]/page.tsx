import { notFound } from "next/navigation";
import Image from "next/image";
import { productUseCaseImpl } from "@/src/config/container";
import { Layout } from "@/app/components/Layout/Layout";
import { AddToCartButton } from "@/app/components/Product/AddToCartButton";
import { ProductSpecs } from "@/app/components/Product/ProductSpecs";
import { formatPrice } from "@/src/presentation/formatters/priceFormatter";

// Rebuilds the page (re-fetching the Google Sheet) at most every 2 minutes.
export const revalidate = 120;

export default async function ProductDetailPage({
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
            <article className="overflow-hidden rounded-2xl bg-white shadow-lg shadow-ink-900/10 ring-1 ring-ink-900/5">
                <div className="relative aspect-square overflow-hidden">
                    <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="flex flex-col gap-3 p-6">
                    <h1 className="text-2xl font-bold text-ink-900">
                        {product.title}
                    </h1>
                    <p className="text-base leading-relaxed text-ink-600">
                        {product.description}
                    </p>

                    <ProductSpecs
                        details={product.details}
                        className="mt-2"
                    />

                    <div className="mt-2 flex items-center justify-between">
                        <span className="text-2xl font-bold tabular-nums text-ink-900">
                            {formatPrice(product.price)}
                        </span>
                    </div>

                    <AddToCartButton product={product} className="mt-2 w-full" />
                </div>
            </article>
        </Layout>
    );
}
