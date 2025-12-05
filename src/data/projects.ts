import type { Project } from "@/types";
import { useIntl } from "react-intl";

export const useProjectsData = (): Project[] => {
  const intl = useIntl();
  
  return [
    {
        id: 1,
        title: intl.formatMessage({ id: 'projects.triosigno.title' }),
        description: intl.formatMessage({ id: 'projects.triosigno.description' }),
        tags: ["React", "TypeScript", "NestJS", "Docker", "PostgreSQL", "Prisma", "GitHub Actions"],
        links: { github: "https://github.com/EIP-TEK89/trio-signo-fullstack", demo: "https://triosigno.com/" }
    },
    {
        id: 2,
        title: intl.formatMessage({ id: 'projects.loadBalancer.title' }),
        description: intl.formatMessage({ id: 'projects.loadBalancer.description' }),
        tags: ["Go", "Docker", "Load Balancing", "Concurrency", "Health Checks", "Testing"],
        links: { github: "https://github.com/P4ST4S/go-load-balancer" }
    },
    {
        id: 3,
        title: intl.formatMessage({ id: 'projects.imageOptimizer.title' }),
        description: intl.formatMessage({ id: 'projects.imageOptimizer.description' }),
        tags: ["Go", "Docker", "Microservices", "Image Processing", "Performance"],
        links: { github: "https://github.com/P4ST4S/go-image-optimizer" }
    },
    {
        id: 4,
        title: intl.formatMessage({ id: 'projects.wordleSolver.title' }),
        description: intl.formatMessage({ id: 'projects.wordleSolver.description' }),
        tags: ["Next.js", "React", "TypeScript", "Web Workers", "Algorithms", "TailwindCSS"],
        links: { github: "https://github.com/P4ST4S/next-wordle-bot", demo: "https://next-wordle-bot.vercel.app/" }
    },
    {
        id: 5,
        title: intl.formatMessage({ id: 'projects.pokeGenerator.title' }),
        description: intl.formatMessage({ id: 'projects.pokeGenerator.description' }),
        tags: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM", "PokéAPI", "React Hook Form"],
        links: { github: "https://github.com/P4ST4S/poke-generator" }
    },
    {
        id: 6,
        title: intl.formatMessage({ id: 'projects.datakeenApp.title' }),
        description: intl.formatMessage({ id: 'projects.datakeenApp.description' }),
        tags: ["React", "NestJS", "Express", "MongoDB", "Prisma", "GitLab CI"],
        links: {}
    },
    {
        id: 7,
        title: intl.formatMessage({ id: 'projects.datakeenSdk.title' }),
        description: intl.formatMessage({ id: 'projects.datakeenSdk.description' }),
        tags: ["React", "TypeScript", "TailwindCSS", "Rollup"],
        links: {}
    },
    {
        id: 8,
        title: intl.formatMessage({ id: 'projects.petHealth.title' }),
        description: intl.formatMessage({ id: 'projects.petHealth.description' }),
        tags: ["NestJS", "PostgreSQL", "Backend"],
        links: { github: "https://github.com/P4ST4S/pet-health-taker" }
    },
    {
        id: 9,
        title: intl.formatMessage({ id: 'projects.francilienne.title' }),
        description: intl.formatMessage({ id: 'projects.francilienne.description' }),
        tags: ["React", "SCSS", "Frontend"],
        links: { demo: "https://francilienne-de-miroiterie.com/" }
    },
    {
        id: 10,
        title: intl.formatMessage({ id: 'projects.triosignoDoc.title' }),
        description: intl.formatMessage({ id: 'projects.triosignoDoc.description' }),
        tags: ["Docusaurus", "React", "Documentation"],
        links: { github: "https://github.com/EIP-TEK89/docs", demo: "https://docs.triosigno.com/" }
    },
    {
        id: 11,
        title: intl.formatMessage({ id: 'projects.portfolio.title' }),
        description: intl.formatMessage({ id: 'projects.portfolio.description' }),
        tags: ["React", "TypeScript", "TailwindCSS", "Vite"],
        links: { github: "https://github.com/P4ST4S/portfolio-v4", demo: "https://antoinerospars.dev/" }
    }
  ];
};

// Legacy export for backward compatibility
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
        title: "Succès Dex",
        description: "Web app de suivi des succès liés aux jeux vidéo.",
        tags: ["NextJS", "TypeScript", "Prisma", "GitLab CI"],
        links: { github: "https://github.com/P4ST4S/succes-dex" }
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
        title: "Go Image Microservice",
        description: "Solution backend résiliente implémentant le 'Graceful Shutdown' et la gestion native de la concurrence. Architecture 'Zero-Dependency' optimisée pour un déploiement conteneurisé minimaliste et une latence faible.",
        tags: ["Golang", "System Design", "Microservice", "Docker"],
        links: { github: "https://github.com/P4ST4S/go-image-optimizer" }
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
        id: 9,
        title: "TrioSigno Documentation",
        description: "Documentation pour la plateforme TrioSigno, incluant des guides et des tutoriels.",
        tags: ["Docusaurus", "React", "Documentation"],
        links: { github: "https://github.com/EIP-TEK89/docs", demo: "https://docs.triosigno.com/" }
    },
    {
        id: 10,
        title: "Portfolio",
        description: "Mon portfolio personnel, mettant en avant mes projets et compétences.",
        tags: ["React", "TypeScript", "TailwindCSS", "Vite"],
        links: { github: "https://github.com/P4ST4S/portfolio-v4", demo: "https://antoinerospars.dev/" }
    }
];

export default projectsData;