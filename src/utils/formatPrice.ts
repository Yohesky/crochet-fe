export const formatPrice = (price: number) =>
    `$${price.toLocaleString("es-CO", { maximumFractionDigits: 0 })}`