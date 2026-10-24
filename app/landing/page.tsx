import { productUseCaseImpl } from "@/src/config/container";
import { Layout } from "@/app/components/Layout/Layout";
import { Card } from "@/app/components/Card/Card";

// Rebuilds the page (re-fetching the Google Sheet) at most every 2 minutes.
export const revalidate = 120;

export default async function Landing() {
    const products = await productUseCaseImpl.getProducts();

    return (
        <Layout>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {products.items.map((product) => {
                    return <Card key={product.id} product={product} />;
                })}
            </div>
        </Layout>
    );
}
