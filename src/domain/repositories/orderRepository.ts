import { IOrder } from "../models/IOrder"

export interface OrderRepository {
    createOrder: (order: IOrder) => Promise<void>
}