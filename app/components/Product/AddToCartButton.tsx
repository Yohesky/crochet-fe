"use client";

import type { IProduct } from "@/src/domain/models/IProduct";
import { Button } from "@/app/components/Button/Button";
import { useCartStore } from "@/app/store/store";
import { useAlertStore } from "@/app/store/alert.store";

export const AddToCartButton = ({
    product,
    className,
}: {
    product: IProduct;
    className?: string;
}) => {
    const addToCart = useCartStore((state) => state.addToCart);
    const showToast = useAlertStore((state) => state.showToast);

    return (
        <Button
            size="lg"
            className={className}
            onClick={() => {
                addToCart(product);
                showToast("Producto agregado");
            }}
        >
            Agregar al carrito
        </Button>
    );
};
