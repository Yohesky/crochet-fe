import { productsUseCase } from "@/src/application/use-cases/products.use-cases";
import { ProductRepositoryImpl } from "@/src/infrastructure/repositories/ProductRepositoryImpl";


export const productUseCaseImpl = productsUseCase(ProductRepositoryImpl)
