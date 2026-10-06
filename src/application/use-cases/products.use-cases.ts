
import { ProductRepository } from "@/src/domain/repositories/productRepository";

export const productsUseCase = (productRepository: ProductRepository) => {

    const getProducts = () => {
        return productRepository.getProducts()
    }

    const getProductDetail = (id: string) => {
        return productRepository.getProductDetail(id)
    }

    return {
        getProducts,
        getProductDetail
    }

}