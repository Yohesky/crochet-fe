import { Card } from "@/app/components/Card/Card"
import { Hero } from "@/app/components/Hero/Hero"
import { Header } from "@/app/components/Header/Header"
import type { ProductList } from "@/src/domain/models/IProduct"

export const Layout = ({ products }: { products: ProductList }) => {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <div className="grid grid-cols-2 gap-4 -mt-5 px-4 pb-12 z-1 relative bg-[#FDE2E4]" >
          {
            products.items.map((product) => {
              return <Card key={product.id} product={product} />
            })
          }
        </div>
      </main>
    </>
  )
}
