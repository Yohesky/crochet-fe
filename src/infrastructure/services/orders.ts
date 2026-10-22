import { IOrder } from "@/src/domain/models/IOrder"
import { getSheets, SPREADSHEET_ID } from "./sheetsClient"

const ORDERS_SHEET_TITLE = "pedidos"

const ORDERS_HEADERS = [
    "Fecha",
    "Nombre",
    "Apellido",
    "Teléfono",
    "Dirección",
    "Items",
    "Total",
    "Abono 50%",
    "Restante",
]

const formatOrderDate = (): string =>
    new Intl.DateTimeFormat("es-CO", { dateStyle: "short", timeStyle: "short" }).format(new Date())

// The "pedidos" tab is created on demand (with its headers) the first time an
// order is registered, so no manual setup in the spreadsheet is required.
const ensureOrdersSheet = async (): Promise<void> => {
    const sheets = getSheets()

    const meta = await sheets.spreadsheets.get({ spreadsheetId: SPREADSHEET_ID })
    const exists = meta.data.sheets?.some((sheet) => sheet.properties?.title === ORDERS_SHEET_TITLE)

    if (exists) return

    await sheets.spreadsheets.batchUpdate({
        spreadsheetId: SPREADSHEET_ID,
        requestBody: {
            requests: [{ addSheet: { properties: { title: ORDERS_SHEET_TITLE } } }],
        },
    })

    await sheets.spreadsheets.values.update({
        spreadsheetId: SPREADSHEET_ID,
        range: `${ORDERS_SHEET_TITLE}!A1`,
        valueInputOption: "USER_ENTERED",
        requestBody: { values: [ORDERS_HEADERS] },
    })
}

export const createOrder = async (order: IOrder): Promise<void> => {
    await ensureOrdersSheet()

    const total = order.items.reduce((sum, item) => sum + item.price, 0)
    const upfront = Math.ceil(total / 2)
    const remaining = total - upfront

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
                remaining,
            ]],
        },
    })
}