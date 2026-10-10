import { notFound } from "next/navigation";
import Image from "next/image";
import { productUseCaseImpl } from "@/src/config/container";
import { Button } from "@/app/components/Button/Button";
import { Layout } from "@/app/components/Layout/Layout";
import { formatPrice } from "@/src/presentation/formatters/priceFormatter";

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

                    <dl className="mt-2 flex flex-col gap-4">
                        {product.details.map((detail) => (
                            <div
                                key={detail.label}
                                className="flex flex-col gap-1 border-t border-ink-900/10 pt-4 first:border-t-0 first:pt-0"
                            >
                                <dt className="text-xs font-bold uppercase tracking-wide text-lavender-600">
                                    {detail.label}
                                </dt>
                                <dd className="text-sm leading-relaxed text-ink-600">
                                    {detail.value}
                                </dd>
                            </div>
                        ))}
                    </dl>

                    <div className="mt-2 flex items-center justify-between">
                        <span className="text-2xl font-bold tabular-nums text-ink-900">
                            {formatPrice(product.price)}
                        </span>
                    </div>

                    <Button size="lg" className="mt-2 w-full">
                        Agregar al carrito
                    </Button>
                </div>
            </article>
        </Layout>
    );
}
