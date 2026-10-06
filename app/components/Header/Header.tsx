export const Header = () => {
  return (
    <header className="flex items-center gap-4 px-4 py-4 sm:px-6 justify-between bg-[#FDE2E4]">
      <a href="#" className="text-xl font-bold text-ink-900">
        KYL Crochet
      </a>


      <button
        className="flex h-10 w-10 items-center justify-center rounded-full text-ink-600 transition-colors hover:bg-ink-900/5 hover:text-ink-900"
        aria-label="Carrito"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
          <path
            d="M6 7h12l-1 13H7L6 7Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M9 7a3 3 0 0 1 6 0"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </header>
  );
};
