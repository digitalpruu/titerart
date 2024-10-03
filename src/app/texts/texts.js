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
        description1: "Didácticos titer Art es un emprendimiento colombiano dedicado a facilitar la enseñanza hacia niños y niñas de forma divertida y dinámica ofrecemos gran variedad de productos tales como títeres de animales de familias de etnias colombianas de profesiones muñecos para vestir muñecas de trapo cubos de la vida diaria y muchos más contáctanos para tener el gusto de atenderlos"
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
