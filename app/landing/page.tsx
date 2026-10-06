import { productUseCaseImpl } from "@/src/config/container";
import { Layout } from "./components/Layout";

export default async function Landing() {
  const products = await productUseCaseImpl.getProducts();

  return <Layout products={products} />;
}
