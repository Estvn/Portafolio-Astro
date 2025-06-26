import type { IPage } from "../interfaces/Interface";

export const pages: IPage[] = [
    {
        slug: "/projects",
        title: "Mis proyectos",
        component: "Project",
        content: "Learn more about our team and mission. We are dedicated to providing the best service possible."
    },
    {
        slug: "/technologies",
        title: "Mi Stack de Tecnologías",
        component: "Stack",
        content: "Get in touch with us through our contact form or find our contact details here."
    },
    {
        slug: "/experience",
        title: "Mi Experiencia",
        component: "Experience",
        content: "Get in touch with us through our contact form or find our contact details here."
    },
    {
        slug: "/contact",
        title: "¡Contáctame!",
        component: "Contact",
        content: "Get in touch with us through our contact form or find our contact details here."
    }
]