import { productUseCaseImpl } from "@/src/config/container"

export async function GET(
    _request: Request,
    ctx: RouteContext<'/api/products/[id]'>
): Promise<Response> {
    const { id } = await ctx.params
    const product = await productUseCaseImpl.getProductDetail(id)
    if (!product) {
        return Response.json({ error: "Producto no encontrado" }, { status: 404 })
    }
    return Response.json(product)
}
