import { IOrder } from "@/src/domain/models/IOrder"
import { getSheets, SPREADSHEET_ID } from "./sheetsClient"

const ORDERS_SHEET_TITLE = "pedidos"

const formatOrderDate = (): string =>
    new Intl.DateTimeFormat("es-CO", { dateStyle: "short", timeStyle: "short" }).format(new Date())

export const createOrder = async (order: IOrder): Promise<void> => {
    const total = order.items.reduce((sum, item) => sum + item.price, 0)
    const upfront = Math.ceil(total / 2)

    await getSheets().spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: `${ORDERS_SHEET_TITLE}!A1`,
        valueInputOption: "USER_ENTERED",
        insertDataOption: "INSERT_ROWS",
        requestBody: {
            values: [[
                formatOrderDate(),
                order.firstName,
                order.lastName,
                order.phone,
                order.address,
                order.items.map((item) => item.title).join(", "),
                total,
                upfront,
                order.customizations?.trim() ?? "",
            ]],
        },
    })
}