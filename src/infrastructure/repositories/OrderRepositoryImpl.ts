import { createOrder as createOrderService } from "@/src/infrastructure/services/orders";
import { IOrder } from "@/src/domain/models/IOrder";
import { OrderRepository } from "@/src/domain/repositories/orderRepository";

export const OrderRepositoryImpl: OrderRepository = {
    async createOrder(order: IOrder): Promise<void> {
        await createOrderService(order);
    },
};