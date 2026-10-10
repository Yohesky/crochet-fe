import { create } from "zustand"

type State = {
    message: string,
    showToast: (message: string) => void,
    hideToast: () => void,
}

export const useAlertStore = create<State>((set) => ({
    message: "",
    showToast: (message) => set({ message }),
    hideToast: () => set({ message: "" }),
}))