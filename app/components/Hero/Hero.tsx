import Image from "next/image"

export const Hero = () => {
    return (
        <section className="relative h-96 w-full">
            <Image
                src="https://res.cloudinary.com/do5wuwfuh/image/upload/f_auto,q_auto,w_800/crochet/banner.jpg"
                alt="Proyecto de crochet"
                fill
                preload
                sizes="100vw"
                className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#FDE2E4] via-[#FDE2E4]/50 to-transparent" />
            {/* <div className="relative container mx-auto flex h-full flex-col items-center justify-center">
                <h1>Hero</h1>

                <button className="mt-4 rounded-full bg-pink-300 px-8 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-pink-400 active:scale-[0.97]">
                    Ver colección
                </button>
            </div> */}
        </section>
    )

}
