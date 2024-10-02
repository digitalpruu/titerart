const title = "TiterArt";
const email = "Didácticosangel@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    `¡Hola! Estoy interesado en los productos de ${title} y me gustaría obtener más información. ¡Gracias!`
);
const numeroWhatsApp = "3118084979";
const textos = {
    index: {
        title: `${title}`,
        slogan: "Diversión sin fin",
    },
    homeContent: {
        title: `${title}`,
    },
    about: {
        description1: `Didácticos TiterArt es un emprendimiento colombiano dedicado a facilitar la enseñanza hacia niños y niñas de forma divertida y dinámica. Ofrecemos una gran variedad de productos como títeres de animales, familias de etnias colombianas, muñecos de profesiones, muñecas de trapo, cubos de la vida diaria y mucho más.`,
        description2: `Contáctanos para tener el gusto de atenderte y descubrir cómo nuestros productos pueden contribuir a la educación y el entretenimiento de los más pequeños.`,
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email,
    },
    footer: {
        slogan: {
            p1: "",
            p2: "Diversión sin fin",
        },
        address: "",
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/profile.php?id=61565696020352&mibextid=ZbWKwL",
        instagram: "PENDIENTE",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
    },
};
export default textos;
