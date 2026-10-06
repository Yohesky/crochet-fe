import { IProduct } from "@/src/domain/models/IProduct"

export const products: IProduct[] = [
    {
        id: "1",
        title: "Abuelita",
        price: 50.000,
        description: "Hermosa abuelita",
        image: "https://res.cloudinary.com/do5wuwfuh/image/upload/w_800,q_auto,f_auto/crochet/abuelita.jpg"
    },
    {
        id: "2",
        title: "Messi World Cup",
        price: 30.000,
        description: "Messi ganador del mundial",
        image: "https://res.cloudinary.com/do5wuwfuh/image/upload/w_800,q_auto,f_auto/crochet/messi.jpg"
    },
    {
        id: "3",
        title: "Lotso",
        price: 50.000,
        description: "Hermoso lotso de Toy Story",
        image: "https://res.cloudinary.com/do5wuwfuh/image/upload/w_800,q_auto,f_auto/crochet/lotso.jpg"

    },
    {
        id: "4",
        title: "Temo",
        price: 50.000,
        description: "Caracter de LOL",
        image: "https://res.cloudinary.com/do5wuwfuh/image/upload/w_800,q_auto,f_auto/crochet/temo.jpg"

    }
]

export const getProductById = (id: string): IProduct | undefined => {
    return products.find((product) => product.id === id)
}

export const getProducts = () => products