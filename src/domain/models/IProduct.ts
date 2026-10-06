export interface IProduct {
    id: string
    title: string
    price: number
    description: string
    image: string
}

export type ProductList = {
    items: IProduct[]
};