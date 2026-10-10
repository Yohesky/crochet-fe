export type ProductDetail = {
    label: string
    value: string
}

export interface IProduct {
    id: string
    title: string
    price: number
    description: string
    details: ProductDetail[]
    image: string
    link: string
    isPersonalized?: boolean
}

export type ProductList = {
    items: IProduct[]
};