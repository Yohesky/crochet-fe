import { Hero } from "@/app/components/Hero/Hero";
import { Header } from "@/app/components/Header/Header";

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            <Hero />
            <main className="relative z-1 -mt-5 bg-[#FDE2E4] px-4 pb-12">
                {children}
            </main>
        </>
    );
};
