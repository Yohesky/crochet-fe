import { IProduct } from "@/src/domain/models/IProduct"
import { getSheets, SPREADSHEET_ID } from "@/src/infrastructure/services/sheetsClient"

const getItems = async () => {
    const res = await getSheets().spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: "Hoja 1!A1:Z100",
    })

    const items = res.data.values?.slice(1) ?? []

    const productsList: IProduct[] = items.map((item: string[], index: number) => {
        let details = []
        try {
            details = item[3] ? JSON.parse(item[3]) : []
        } catch (error) {
            console.error("Error al parsear details en fila", index, error)
        }

        return {
            id: String(index + 1),
            title: item[0],
            price: Number(item[1]),
            description: item[2],
            details,
            image: item[4],
            link: `/product/${index + 1}`,
            isPersonalized: item[5] === "TRUE" ? true : false,
        }
    })

    return productsList
}

export const getProductById = async (id: string): Promise<IProduct | undefined> => {
    const products = await getProducts()
    return products.find((product) => product.id === id) as IProduct
}

export const getProducts = async (): Promise<IProduct[]> => {
    const items = await getItems()

    return items
}
