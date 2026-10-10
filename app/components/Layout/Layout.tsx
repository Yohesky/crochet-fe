import { Hero } from "@/app/components/Hero/Hero";
import { Header } from "@/app/components/Header/Header";
import { Cart } from "@/app/components/Cart/Cart";

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            <Hero />
            <main className="relative bg-[#FDE2E4] px-4 pb-12 pt-4">
                {children}
                <Cart />
            </main>
        </>
    );
};
