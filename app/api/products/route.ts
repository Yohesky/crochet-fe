import { productUseCaseImpl } from "@/src/config/container"


export const GET = async () => {
  const products = await productUseCaseImpl.getProducts();
  return Response.json(products);
};