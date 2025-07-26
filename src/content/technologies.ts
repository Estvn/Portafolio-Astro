import type { ITypeTechnology } from "../interfaces/Interface";

export const technologies: ITypeTechnology[] = [
    {
        type: "Frontend",
        listTechnologies: [
            { name: "Astro",          icon: "/assets/icons/astro.svg" , percentage: 50},
            { name: "React",          icon: "/assets/icons/react.svg", percentage: 45 },
            { name: "TypeScript",     icon: "/assets/icons/typescript.svg", percentage: 65 },
            { name: "JavaScript",     icon: "/assets/icons/javascript.svg", percentage: 80 },
            { name: "Tailwind CSS",   icon: "/assets/icons/tailwindcss.svg", percentage: 75 },
            { name: "Bootstrap",      icon: "/assets/icons/bootstrap.svg", percentage: 80 },
            { name: "jQuery",      icon: "/assets/icons/jquery.png", percentage: 35 }

        ]
    },
    {
        type: "Backend",
        listTechnologies: [
            { name: "Laravel",        icon: "/assets/icons/laravel.svg", percentage: 65 },
            { name: "Spring Boot",    icon: "/assets/icons/springboot.svg", percentage: 50 },
            { name: "FastAPI",        icon: "/assets/icons/fastapi.svg", percentage: 50 },
            { name: "PHP",            icon: "/assets/icons/php.svg", percentage: 85 },
            { name: "Java",           icon: "/assets/icons/java.svg", percentage: 84 },
            { name: "Python",         icon: "/assets/icons/python.svg", percentage: 45 },
            { name: "Node.js",        icon: "/assets/icons/nodejs.svg", percentage: 30 },
        ]
    },
    {
        type: "Bases de Datos",
        listTechnologies: [
            { name: "Oracle PL/SQL",                   icon: "/assets/icons/oracle.svg", percentage: 85 },
            { name: "SQL Server Transact-SQL",         icon: "/assets/icons/microsoftsqlserver.svg", percentage: 50 },
            { name: "Redis",                           icon: "/assets/icons/redis.svg", percentage: 50 },
            { name: "MySQL",                           icon: "/assets/icons/mysql.svg", percentage: 75 },
            { name: "DB2",                             icon: "/assets/icons/db2.svg", percentage: 30 },
        ]
    },
    {
        type: "Bussiness Intelligence",
        listTechnologies: [
            { name: "Data Warehouse",                  icon: "/assets/icons/data-warehouse.png", percentage: 75 },
            { name: "Tableau",                         icon: "/assets/icons/tableau.svg", percentage: 50 }
        ]
    },
    {
        type: "Infraestructura",
        listTechnologies: [
            { name: "Microservicios", icon: "/assets/icons/microservicio.png",percentage: 50 },
            { name: "Terraform",      icon: "/assets/icons/terraform.svg", percentage: 50 },
            { name: "Azure Cloud",    icon: "/assets/icons/azure.svg", percentage: 35 },
            { name: "Docker",         icon: "/assets/icons/docker.svg", percentage: 55 }
        ]
    },
    {
        type: "QA & Documentación",
        listTechnologies: [
            { name: "Jira",           icon: "/assets/icons/jira.svg", percentage: 55 },
            { name: "Swagger",        icon: "/assets/icons/swagger.svg", percentage: 80 },
            { name: "Postman",        icon: "/assets/icons/postman.svg", percentage: 75 },
            { name: "Insomnia",        icon: "/assets/icons/insomnia.svg", percentage: 70 }
            
        ]
    },
    {
        type: "Otros",
        listTechnologies: [
            { name: "Linux",          icon: "/assets/icons/linux.svg", percentage: 75 },
            { name: "Git & GitHub",   icon: "/assets/icons/github.svg", percentage: 80 },
            { name: "Figma",          icon: "/assets/icons/figma.svg", percentage: 50 },
            { name: "Snort",          icon: "/assets/icons/snort.svg", percentage: 35 },
            { name: "Wireshark",      icon: "/assets/icons/wireshark.svg", percentage: 30 },
        ]
    }
];
