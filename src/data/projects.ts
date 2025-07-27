import type { Project } from "@/types";

const projectsData: Project[] = [
    {
        id: 1,
        title: "TrioSigno",
        description: "Plateforme de gestion de projets avec une approche Fullstack & DevOps.",
        tags: ["React", "TypeScript", "NestJS", "Docker", "PostgreSQL", "Prisma", "GitHub Actions"],
        links: { github: "https://github.com/EIP-TEK89/trio-signo-fullstack", demo: "https://triosigno.com/" }
    },
    {
        id: 2,
        title: "Datakeen",
        description: "Contribution à une plateforme d'IA en tant que développeur fullstack.",
        tags: ["React", "NestJS", "Express", "MongoDB", "Prisma", "GitLab CI"],
        links: {}
    },
    {
        id: 3,
        title: "Application Frigo",
        description: "App mobile de gestion de frigo partagé : stocks, recettes, et calendrier de courses.",
        tags: ["React Native", "Calendrier", "Partage"],
        links: { github: "https://github.com/AppFrigo/app-frigo" }
    },
    {
        id: 4,
        title: "Datakeen SDK",
        description: "Création d'un kit de développement logiciel pour l'intégration de services.",
        tags: ["React", "TypeScript", "TailwindCSS", "Rollup"],
        links: {}
    },
    {
        id: 5,
        title: "Pet Health Taker",
        description: "Backend pour une application de gestion de rendez-vous vétérinaires.",
        tags: ["NestJS", "PostgreSQL", "Backend"],
        links: { github: "https://github.com/P4ST4S/pet-health-taker" }
    },
    {
        id: 6,
        title: "Francilienne de Miroiterie",
        description: "Site vitrine pour un artisan, mettant l'accent sur le design et l'expérience utilisateur.",
        tags: ["React", "SCSS", "Frontend"],
        links: { demo: "https://francilienne-de-miroiterie.com/" }
    },
    {
        id: 7,
        title: "CGU Generator",
        description: "Générateur de Conditions Générales d'Utilisation.",
        tags: ["React", "SCSS", "Frontend"],
        links: { github: "https://github.com/P4ST4S/cgu-generator", demo: "https://cgu-generator.com/" }
    },
    {
        id: 8,
        title: "Medical App",
        description: "Application de gestion de rendez-vous médicaux avec notifications et rappels. Projet réalisé en 1 semaine dans le cadre d'un examen.",
        tags: ["React", "TypeScript", "NestJS", "MySQL", "Prisma"],
        links: { github: "https://github.com/DatabaseSystemRepo" }
    },
    {
        id: 9,
        title: "TrioSigno Documentation",
        description: "Documentation pour la plateforme TrioSigno, incluant des guides et des tutoriels.",
        tags: ["Docusaurus", "React", "Documentation"],
        links: { github: "https://github.com/EIP-TEK89/docs", demo: "https://docs.triosigno.com/" }
    },
];

export default projectsData;