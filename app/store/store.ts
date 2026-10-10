import { IProduct } from '@/src/domain/models/IProduct'
import { create } from 'zustand'

type State = {
    cart: IProduct[],
    addToCart: (product: IProduct) => void,
    removeFromCart: (product: IProduct) => void,
    showCart: boolean,
    toggleCart: () => void,
}

export const useCartStore = create<State>((set) => ({
    cart: [],
    showCart: false,
    addToCart: (product: IProduct) => set((state) => ({ cart: [...state.cart, product] })),
    removeFromCart: (product: IProduct) => set((state) => ({ cart: state.cart.filter((item) => item.id !== product.id) })),
    toggleCart: () => set((state) => ({ showCart: !state.showCart })),
}))