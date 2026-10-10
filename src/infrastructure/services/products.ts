import { IProduct } from "@/src/domain/models/IProduct"

export const products: IProduct[] = [
    {
        id: "1",
        title: "Abuelita Ángel Personalizada",
        price: 50000,
        description:
            "Un homenaje único hecho a mano para honrar, recordar o celebrar a esa persona tan especial en tu vida. Nuestra Abuelita Ángel está tejida cuidadosamente a crochet punto por punto, capturando toda la dulzura y el cariño de tus seres queridos.",
        details: [
            { label: "Medidas", value: "11 cm de alto." },
            {
                label: "Materiales",
                value: "Tejida con hilo de alta calidad (50% algodón y 50% acrílico), suave al tacto y de larga durabilidad.",
            },
            {
                label: "Acabados",
                value: "Viene montada sobre una elegante base de madera e incluye sus delicadas alitas tejidas.",
            },
            {
                label: "Personalización",
                value:
                    "¡Hacemos la figura a imagen y semejanza de tu ser querido! 📸 Al realizar tu pedido, puedes enviarnos una foto para adaptar el color de cabello, peinado, ropa y detalles especiales.",
            },
        ],
        image: "https://res.cloudinary.com/do5wuwfuh/image/upload/w_800,q_auto,f_auto/crochet/abuelita.jpg",
        link: "/product/1",
        isPersonalized: true,
    },
    {
        id: "2",
        title: "Messi Amigurumi – Selección Argentina #10",
        price: 30000,
        description:
            "¡El regalo perfecto para los verdaderos apasionados del fútbol! ⚽✨ Lleva a casa la versión tejida a mano de uno de los mejores jugadores del mundo o sorprende a ese fanático especial. Nuestro amigurumi del Capitán #10 está elaborado meticulosamente a crochet, recreando cada detalle característico: su icónica barba, el peinado, la camiseta con sus franjas y número, sus guayos amarillos y su práctica base de soporte.",
        details: [
            { label: "Medidas", value: "Aprox. 12 cm de alto." },
            {
                label: "Materiales",
                value: "Tejido con hilo de excelente calidad (50% algodón y 50% acrílico) para mayor suavidad y firmeza.",
            },
            {
                label: "Acabados",
                value: "Viene montado sobre una sólida base de madera, ideal para exhibir en escritorios, repisas o colecciones.",
            },
            {
                label: "Personalización",
                value:
                    "Puedes pedir a Messi o solicitar la versión tejida de tu jugador o ser querido con la camiseta del equipo de tu preferencia (número, colores, cabello y barba personalizables).",
            },
        ],
        image: "https://res.cloudinary.com/do5wuwfuh/image/upload/w_800,q_auto,f_auto/crochet/messi.jpg",
        link: "/product/2",
    },
    {
        id: "3",
        title: "Llavero Osito Lotso Amigurumi",
        price: 50000,
        description:
            "¡Lleva un toque adorable y lleno de nostalgia a todas partes! 🍓🐻 Nuestro Llavero de Lotso está diseñado en un formato compacto y ligero, ideal para acompañarte en tus llaves, bolso o mochila. Tejido 100% a mano con la técnica de amigurumi, recrea la icónica y tierna carita del osito rosado con detalles cuidadosos como sus cejas expresivas, hocico contrastante y ojos de seguridad.",
        details: [
            {
                label: "Medidas",
                value: "Aprox. 5 a 6 cm de diámetro (tamaño práctico para la mano o bolso).",
            },
            {
                label: "Materiales",
                value: "Tejido con hilo suave y resistente (50% algodón y 50% acrílico) que mantiene su forma y color con el uso.",
            },
            {
                label: "Incluye",
                value: "Argolla / herraje metálico resistente para llavero.",
            },
            {
                label: "Uso",
                value: "Perfecto para personalizar tu juego de llaves, morral, cosmetiquera o bolso favorito.",
            },
        ],
        image: "https://res.cloudinary.com/do5wuwfuh/image/upload/w_800,q_auto,f_auto/crochet/lotso.jpg",
        link: "/product/3",
    },
    {
        id: "4",
        title: "Teemo – League of Legends",
        price: 50000,
        description:
            "¡Nunca subestimes el poder del código Yordle! 🍄✨🎮 Llega el explorador más icónico de League of Legends directo a tu colección o tu setup gamer. Este amigurumi de Teemo está tejido completamente a mano a crochet, cuidando cada detalle característico del personaje: su sombrero de explorador verde con antiparras rojas y plumita azul, su pañuelo rojo y su expresión tierna y victoriosa.",
        details: [
            {
                label: "Medidas",
                value: "Aprox. 9 a 10 cm de alto (tamaño compacto ideal para la mano, escritorio o llavero).",
            },
            {
                label: "Materiales",
                value: "Hilo de alta resistencia (50% algodón y 50% acrílico), perfecto para que no pierda la forma ni genere motas.",
            },
            {
                label: "Acabados",
                value: "Disponible con opción de herraje para llavero o como mini figura decorativa para tu espacio de videojuegos.",
            },
            {
                label: "Ideal para",
                value: "Regalos entre gamers, fans de LoL, coleccionistas o para adornar tu mochila/bolso.",
            },
        ],
        image: "https://res.cloudinary.com/do5wuwfuh/image/upload/w_800,q_auto,f_auto/crochet/temo.jpg",
        link: "/product/4",
    },
    {
        id: "5",
        title: "Spider-Girl Amigurumi Personalizada",
        price: 50000,
        description:
            "¡Conviértete en el héroe de tu propia historia! 🕸️✨🕷️ Nuestra Spider-Girl Personalizada es el regalo perfecto para las amantes de los superhéroes y las historias épicas. Tejida 100% a mano en la técnica de amigurumi, esta muñeca combina la ternura del personaje con su icónico traje rojo y azul, emblema de araña en el pecho y su distintivo gorrito/máscara desplegable.",
        details: [
            {
                label: "Medidas",
                value: "Aprox. 15 a 18 cm de alto (tamaño mediano ideal para abrazar o exhibir).",
            },
            {
                label: "Materiales",
                value: "Tejida con hilo premium (50% algodón y 50% acrílico), lo que garantiza suavidad, resistencia y colores vivos sin sacar motas.",
            },
            {
                label: "Acabados",
                value: "Traje detallado con bordados a mano, ojos de seguridad, rubor decorativo y opción de máscara tipo gorro.",
            },
            {
                label: "Personalización",
                value:
                    "¡Podemos adaptar el color y estilo de cabello, color de piel o incluso el traje para representar a tu persona favorita vestida de su superhéroe preferido!",
            },
        ],
        image: "https://res.cloudinary.com/do5wuwfuh/image/upload/w_800,q_auto,f_auto/crochet/spider-girl.jpg",
        link: "/product/5",
        isPersonalized: true,
    },
    {
        id: "6",
        title: 'Gorila Blanco "Copito de Nieve"',
        price: 50000,
        description:
            '¡Un abrazable y único compañero lleno de ternura! 🦍🤍✨ Nuestro Gorila Blanco "Copito de Nieve" está tejido 100% a mano en la técnica de amigurumi. Su diseño combina el tono blanco principal con delicados contrastes en beige/crema en la pancita, hocico y patitas, dándole una apariencia entrañable y muy afelpada. Es la pieza perfecta para decorar la habitación de los más pequeños, regalar en una ocasión especial o sumar a tu colección artesanal.',
        details: [
            {
                label: "Medidas",
                value: "Aprox. 18 a 20 cm de alto (tamaño mediano ideal para abrazar y sostener con las manos).",
            },
            {
                label: "Materiales",
                value: "Tejido con hilo de excelente calidad (50% algodón y 50% acrílico), suave al tacto, resistente y de larga duración.",
            },
            {
                label: "Acabados",
                value: "Cuenta con ojos de seguridad bien fijados, detalles bordados a mano y un relleno firme que mantiene su forma.",
            },
            {
                label: "Personalización",
                value: "Puedes solicitar ajuste de colores en los detalles o agregarle algún accesorio especial.",
            },
        ],
        image: "https://res.cloudinary.com/do5wuwfuh/image/upload/w_800,q_auto,f_auto/crochet/gorila.jpg",
        link: "/product/6",
    },
    {
        id: "7",
        title: "Perrito Negro Amigurumi Personalizado",
        price: 50000,
        description:
            "¡El amor incondicional de tu mejor amigo de cuatro patas, inmortalizado en hilo! 🐾🖤✨ Nuestro Perrito Negro en Amigurumi está elaborado 100% a mano con la técnica de crochet, cuidando cada detalle para transmitir toda la ternura de tu mascota. Desde sus orejitas caídas y mirada expresiva hasta sus señas particulares (como manchas de color en el hocico o pecho), esta figura tejida es la forma perfecta de llevar a tu peludito contigo o recordar a esa mascota que dejó una huella en tu corazón.",
        details: [
            {
                label: "Medidas",
                value: "Aprox. 10 a 12 cm de alto (tamaño compacto ideal para escritorio, repisa o coleccionar).",
            },
            {
                label: "Materiales",
                value: "Hilo premium (50% algodón y 50% acrílico) que le otorga firmeza, suavidad y alta durabilidad sin perder la forma.",
            },
            {
                label: "Acabados",
                value: "Ojos de seguridad con brillo expresivo, nariz acentuada y detalles de manchas o pelaje bordados minuciosamente a mano.",
            },
            {
                label: "Personalización",
                value:
                    "¡Hacemos a tu mascota tal y como es! 📸 Envíanos sus fotos para recrear sus colores, manchas características, postura o agregarle accesorios como collar o pañuelo.",
            },
        ],
        image: "https://res.cloudinary.com/do5wuwfuh/image/upload/w_800,q_auto,f_auto/crochet/perrito.jpg",
        link: "/product/7",
        isPersonalized: true,
    },
]

export const getProductById = (id: string): IProduct | undefined => {
    return products.find((product) => product.id === id)
}

export const getProducts = () => products