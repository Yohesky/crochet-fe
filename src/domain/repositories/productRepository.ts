import { IProduct, ProductList } from "../models/IProduct"

export interface ProductRepository {
    getProducts: () => Promise<ProductList>
    getProductDetail: (id: string) => Promise<IProduct>
}