"use client"

import { useEffect } from "react"
import { useAlertStore } from "@/app/store/alert.store"
import { AlertFactory } from "./AlertFactory"

const AUTO_HIDE_MS = 3000

export const Toast = () => {
    const message = useAlertStore((state) => state.message)
    const hideToast = useAlertStore((state) => state.hideToast)

    useEffect(() => {
        if (!message) return

        const timeout = setTimeout(hideToast, AUTO_HIDE_MS)
        return () => clearTimeout(timeout)
    }, [message, hideToast])

    if (!message) return null

    return <AlertFactory type="success" message={message} onClose={hideToast} />
}