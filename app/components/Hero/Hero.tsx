import Image from "next/image"

export const Hero = () => {
    return (
        <section className="relative w-full">
            {/* Largest first: the browser applies the first <source> whose media matches. */}
            <picture>
                <source
                    media="(min-width: 1280px)"
                    srcSet={`https://res.cloudinary.com/do5wuwfuh/image/upload/f_auto,q_auto,w_1584/crochet/banner.jpg?v=2`}
                />
                <source
                    media="(min-width: 1024px)"
                    srcSet={`https://res.cloudinary.com/do5wuwfuh/image/upload/f_auto,q_auto,w_1280/crochet/banner.jpg?v=2`}
                />
                <source
                    media="(min-width: 640px)"
                    srcSet={`https://res.cloudinary.com/do5wuwfuh/image/upload/f_auto,q_auto,w_1024/crochet/banner.jpg?v=2`}
                />
                {/* Mobile (< 640px): next/image serves the responsive srcSet. */}
                <Image
                    src="https://res.cloudinary.com/do5wuwfuh/image/upload/crochet/banner.jpg?v=2"
                    alt="Proyecto de crochet"
                    width={1584}
                    height={672}
                    sizes="100vw"
                    loading="eager"
                    fetchPriority="high"
                    className="h-auto w-full"
                />
            </picture>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#FDE2E4] via-[#FDE2E4]/50 to-transparent" />
            {/* <div className="relative container mx-auto flex h-full flex-col items-center justify-center">
                <h1>Hero</h1>

                <button className="mt-4 rounded-full bg-pink-300 px-8 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-pink-400 active:scale-[0.97]">
                    Ver colección
                </button>
            </div> */}
        </section>
    )
}
