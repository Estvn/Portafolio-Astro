import type { IPage } from "../interfaces/Interface";

export const pages: IPage[] = [
    {
        slug: "/projects",
        title: "Mis proyectos",
        component: "Project"
    },
    {
        slug: "/technologies",
        title: "Tecnologías",
        component: "Stack"
    },
    {
        slug: "/experience",
        title: "Mi Experiencia",
        component: "Experience"
    },
    {
        slug: "/contact",
        title: "¡Contáctame!",
        component: "Contact"
    }
]