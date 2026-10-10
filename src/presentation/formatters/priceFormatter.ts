type FormatPriceOptions = {
    locale?: string;
    currencySymbol?: string;
};

export const formatPrice = (
    price: number,
    { locale = "es-CO", currencySymbol = "$" }: FormatPriceOptions = {},
): string =>
    `${currencySymbol}${price.toLocaleString(locale, { maximumFractionDigits: 0 })}`;
