import { z } from "zod";
import { orderUseCaseImpl } from "@/src/config/container";

const orderItemSchema = z.object({
    title: z.string().trim().min(1),
    price: z.number().nonnegative(),
});

const orderSchema = z.object({
    firstName: z.string().trim().min(2),
    lastName: z.string().trim().min(2),
    phone: z.string().trim().regex(/^\d{7,15}$/),
    address: z.string().trim().min(5),
    items: z.array(orderItemSchema).min(1),
});

export const POST = async (request: Request) => {
    try {
        const body = await request.json();
        const parsed = orderSchema.safeParse(body);

        if (!parsed.success) {
            return Response.json({ error: "Datos del pedido inválidos" }, { status: 400 });
        }

        await orderUseCaseImpl.createOrder(parsed.data);
        return Response.json({ ok: true }, { status: 201 });
    } catch (error) {
        console.error("Error al registrar el pedido en la hoja:", error);
        return Response.json({ error: "No se pudo registrar el pedido" }, { status: 500 });
    }
};