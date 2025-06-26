import type { ITypeTechnology } from "../interfaces/Interface";

export const technologies: ITypeTechnology[] = [
    {
        type: "Frontend",
        listTechnologies: [
            { name: "Astro",          icon: "/assets/icons/astro.svg" },
            { name: "React",          icon: "/assets/icons/react.svg" },
            { name: "TypeScript",     icon: "/assets/icons/typescript.svg" },
            { name: "JavaScript",     icon: "/assets/icons/javascript.svg" },
            { name: "Tailwind CSS",   icon: "/assets/icons/tailwindcss.svg" },
            { name: "Bootstrap",      icon: "/assets/icons/bootstrap.svg" },
            { name: "jQuery",      icon: "/assets/icons/jquery.png" }

        ]
    },
    {
        type: "Backend",
        listTechnologies: [
            { name: "Laravel",        icon: "/assets/icons/laravel.svg" },
            { name: "Spring Boot",    icon: "/assets/icons/springboot.svg" },
            { name: "PHP",            icon: "/assets/icons/php.svg" },
            { name: "Java",           icon: "/assets/icons/java.svg" },
            { name: "Python",         icon: "/assets/icons/python.svg" },
            { name: "Node.js",        icon: "/assets/icons/nodejs.svg" },
            { name: "Microservicios", icon: "/assets/icons/microstrategy.svg" },
        ]
    },
    {
        type: "Bases de Datos",
        listTechnologies: [
            { name: "Oracle PL/SQL",                   icon: "/assets/icons/oracle.svg" },
            { name: "SQL Server Transact-SQL",         icon: "/assets/icons/microsoftsqlserver.svg" },
            { name: "MySQL",                           icon: "/assets/icons/mysql.svg" },
            { name: "DB2",                             icon: "/assets/icons/db2.svg" },
        ]
    },
    {
        type: "Bussiness Intelligence",
        listTechnologies: [
            { name: "Data Warehouse",                  icon: "/assets/icons/datawarehouse.svg" },
            { name: "Tableau",                         icon: "/assets/icons/tableau.svg" }
        ]
    },
    {
        type: "Infraestructura",
        listTechnologies: [
            { name: "Terraform",      icon: "/assets/icons/terraform.svg" },
            { name: "Azure Cloud",    icon: "/assets/icons/azure.svg" },
            { name: "Docker",         icon: "/assets/icons/docker.svg" }
        ]
    },
    {
        type: "QA & Documentación",
        listTechnologies: [
            { name: "Jira",           icon: "/assets/icons/jira.svg" },
            { name: "Swagger",        icon: "/assets/icons/swagger.svg" },
            { name: "Postman",        icon: "/assets/icons/postman.svg" },
            { name: "Insomnia",        icon: "/assets/icons/insomnia.svg" }
            
        ]
    },
    {
        type: "Otros",
        listTechnologies: [
            { name: "Linux",          icon: "/assets/icons/linux.svg" },
            { name: "Git & GitHub",   icon: "/assets/icons/github.svg" },
            { name: "Figma",          icon: "/assets/icons/figma.svg" },
            { name: "Snort",          icon: "/assets/icons/snort.svg" },
            { name: "Wireshark",      icon: "/assets/icons/wireshark.svg" },
        ]
    }
];
