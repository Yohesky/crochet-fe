import type { ProductDetail } from "@/src/domain/models/IProduct";

export const ProductSpecs = ({
    details,
    className,
}: {
    details: ProductDetail[];
    className?: string;
}) => (
    <dl className={`flex flex-col gap-4 ${className ?? ""}`}>
        {details.map((detail) => (
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
);
