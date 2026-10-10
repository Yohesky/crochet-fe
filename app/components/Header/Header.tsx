"use client"
import { useCartStore } from "@/app/store/store";
import Image from "next/image";
import Link from "next/link";
export const Header = () => {

  const { cart, toggleCart } = useCartStore()
  return (
    <header className="flex items-center gap-4 px-4 py-4 sm:px-6 justify-between bg-[#FDE2E4]">
      <Link href="/" className="relative h-10 w-10">
        <Image
          src="https://res.cloudinary.com/do5wuwfuh/image/upload/f_auto,q_auto,w_400/crochet/logo-header.jpg"
          alt="KYL Crochet"
          fill
          sizes="40px"
          className="object-cover rounded-full"
        />
      </Link>


      <button
        type="button"
        onClick={toggleCart}
        className="relative flex h-10 w-10 items-center justify-center rounded-full text-ink-600 transition-colors hover:bg-ink-900/5 hover:text-ink-900"
        aria-label={`Carrito, ${cart.length} artículos`}
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
          <path
            d="M2.5 3h2.2l2.5 11.6a1.8 1.8 0 0 0 1.75 1.4h9.05a1.8 1.8 0 0 0 1.75-1.4L21.5 7H6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="9.5" cy="20" r="1.3" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="17" cy="20" r="1.3" stroke="currentColor" strokeWidth="1.6" />
        </svg>
        {cart.length > 0 && (
          <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-lavender-500 px-1 text-[10px] font-bold text-white shadow-sm shadow-lavender-500/30">
            {cart.length}
          </span>
        )}
      </button>
    </header>
  );
};
