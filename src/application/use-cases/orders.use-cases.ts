import { OrderRepository } from "@/src/domain/repositories/orderRepository";
import { IOrder } from "@/src/domain/models/IOrder";

export const ordersUseCase = (orderRepository: OrderRepository) => {

    const createOrder = (order: IOrder) => {
        return orderRepository.createOrder(order)
    }

    return {
        createOrder
    }

}