import { productUseCaseImpl } from "@/src/config/container";
import { Layout } from "@/app/components/Layout/Layout";
import { Card } from "@/app/components/Card/Card";

export default async function Landing() {
    const products = await productUseCaseImpl.getProducts();

    return (
        <Layout>
            <div className="grid grid-cols-2 gap-4">
                {products.items.map((product) => {
                    return <Card key={product.id} product={product} />;
                })}
            </div>
        </Layout>
    );
}
