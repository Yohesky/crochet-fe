import { IProduct } from "./IProduct"

export type IOrder = {
    firstName: string
    lastName: string
    phone: string
    address: string
    // Free text describing the changes or adaptations requested for the products
    customizations?: string
    items: Pick<IProduct, "title" | "price">[]
}