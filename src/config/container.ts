import { productsUseCase } from "@/src/application/use-cases/products.use-cases";
import { ProductRepositoryImpl } from "@/src/infrastructure/repositories/ProductRepositoryImpl";
import { ordersUseCase } from "@/src/application/use-cases/orders.use-cases";
import { OrderRepositoryImpl } from "@/src/infrastructure/repositories/OrderRepositoryImpl";


export const productUseCaseImpl = productsUseCase(ProductRepositoryImpl)
export const orderUseCaseImpl = ordersUseCase(OrderRepositoryImpl)