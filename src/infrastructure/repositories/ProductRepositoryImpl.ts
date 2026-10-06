import { getProducts as getProductsApi, getProductById } from "@/src/infrastructure/services/products";
import { IProduct, ProductList } from "@/src/domain/models/IProduct";
import { ProductRepository } from "@/src/domain/repositories/productRepository";

export const ProductRepositoryImpl: ProductRepository = {
    async getProducts(): Promise<ProductList> {
        const products = getProductsApi()
        return { items: products }
    },

    async getProductDetail(id: string): Promise<IProduct> {
        const product = getProductById(id);

        if (!product) {
            throw new Error(`Producto ${id} no encontrado`);
        }

        return product;
    },
};
