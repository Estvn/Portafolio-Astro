import { technologies } from "../content/technologies"

export interface IPage {
    slug: string,
    title: string,
    component: string,
    content: string,
}

export interface IProject {
    slug: string,
    title: string,
    description: string,
    technologies: string[],
}

export interface ITechnology {
    name: string,
    icon: string
}

export interface ITypeTechnology {
    type: string,
    listTechnologies: ITechnology[],
}

export interface IGithub {
    name: string,
    url: string
}

export interface IProject {
    title: string,
    description: string,
    image: {
        url: string,
        alt: string
    },
    technologies: string[],
    url: string,
    links: {
        github: IGithub[],
        live: string
    }
}

export interface IExperienceInformation {
    title: string,
    company: string,
    date: string,
    description: string,
    certification: string,
}
