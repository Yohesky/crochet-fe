import { IProduct } from "./IProduct"

export type IOrder = {
    firstName: string
    lastName: string
    phone: string
    address: string
    items: Pick<IProduct, "title" | "price">[]
}