import { IProduct } from '@/src/domain/models/IProduct'
import { create } from 'zustand'

export type CheckoutStep = "cart" | "details"

export type CheckoutData = {
    firstName: string,
    lastName: string,
    phone: string,
    address: string,
}

export const EMPTY_CHECKOUT_DATA: CheckoutData = {
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
}

type State = {
    cart: IProduct[],
    addToCart: (product: IProduct) => void,
    removeFromCart: (product: IProduct) => void,
    showCart: boolean,
    toggleCart: () => void,
    checkoutStep: CheckoutStep,
    setCheckoutStep: (step: CheckoutStep) => void,
    checkoutData: CheckoutData,
    setCheckoutData: (data: CheckoutData) => void,
}

export const useCartStore = create<State>((set) => ({
    cart: [],
    showCart: false,
    addToCart: (product: IProduct) => set((state) => ({ cart: [...state.cart, product] })),
    removeFromCart: (product: IProduct) => set((state) => ({ cart: state.cart.filter((item) => item.id !== product.id) })),
    toggleCart: () => set((state) => ({ showCart: !state.showCart })),
    checkoutStep: "cart",
    setCheckoutStep: (step: CheckoutStep) => set({ checkoutStep: step }),
    checkoutData: EMPTY_CHECKOUT_DATA,
    setCheckoutData: (data: CheckoutData) => set({ checkoutData: data }),
}))