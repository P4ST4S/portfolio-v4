import type { Project } from "@/types";
import { useIntl } from "react-intl";

export const useProjectsData = (): Project[] => {
  const intl = useIntl();

  return [
    {
      id: 1,
      title: intl.formatMessage({ id: "projects.autoScanlate.title" }),
      description: intl.formatMessage({
        id: "projects.autoScanlate.description",
      }),
      tags: [
        "Python",
        "Go",
        "Next.js",
        "PyTorch",
        "YOLOv8",
        "LLM",
        "Docker",
        "Redis",
        "PostgreSQL",
      ],
      links: { github: "https://github.com/P4ST4S/AutoScanlate-AI" },
    },
    {
      id: 2,
      title: intl.formatMessage({ id: "projects.nutriScan.title" }),
      description: intl.formatMessage({ id: "projects.nutriScan.description" }),
      tags: [
        "Next.js",
        "TypeScript",
        "PyTorch",
        "YOLOv8",
        "ONNX",
        "Computer Vision",
        "MLflow",
      ],
      links: {
        github: "https://github.com/P4ST4S/ai_computer_vision",
        demo: "https://app-computer-vision.vercel.app/",
      },
    },
    {
      id: 3,
      title: intl.formatMessage({ id: "projects.readNfc.title" }),
      description: intl.formatMessage({ id: "projects.readNfc.description" }),
      tags: [
        "React Native",
        "Swift",
        "Kotlin",
        "C",
        "NFC",
        "ICAO 9303",
        "Cryptography",
        "Mobile",
      ],
      links: {},
    },
    {
      id: 4,
      title: intl.formatMessage({ id: "projects.triosigno.title" }),
      description: intl.formatMessage({ id: "projects.triosigno.description" }),
      tags: [
        "React",
        "TypeScript",
        "NestJS",
        "Docker",
        "PostgreSQL",
        "Prisma",
        "GitHub Actions",
      ],
      links: {
        github: "https://github.com/EIP-TEK89/trio-signo-fullstack",
      },
    },
    {
      id: 5,
      title: intl.formatMessage({ id: "projects.loadBalancer.title" }),
      description: intl.formatMessage({
        id: "projects.loadBalancer.description",
      }),
      tags: [
        "Go",
        "Docker",
        "Load Balancing",
        "Concurrency",
        "Health Checks",
        "Testing",
      ],
      links: { github: "https://github.com/P4ST4S/go-load-balancer" },
    },
    {
      id: 6,
      title: intl.formatMessage({ id: "projects.imageOptimizer.title" }),
      description: intl.formatMessage({
        id: "projects.imageOptimizer.description",
      }),
      tags: [
        "Go",
        "Docker",
        "Microservices",
        "Image Processing",
        "Performance",
      ],
      links: { github: "https://github.com/P4ST4S/go-image-optimizer" },
    },
    {
      id: 7,
      title: intl.formatMessage({ id: "projects.datakeenApp.title" }),
      description: intl.formatMessage({
        id: "projects.datakeenApp.description",
      }),
      tags: ["React", "NestJS", "Express", "MongoDB", "Prisma", "GitLab CI"],
      links: {},
    },
    {
      id: 8,
      title: intl.formatMessage({ id: "projects.wordleSolver.title" }),
      description: intl.formatMessage({
        id: "projects.wordleSolver.description",
      }),
      tags: [
        "Next.js",
        "React",
        "TypeScript",
        "Web Workers",
        "Algorithms",
        "TailwindCSS",
      ],
      links: {
        github: "https://github.com/P4ST4S/next-wordle-bot",
        demo: "https://next-wordle-bot.vercel.app/",
      },
    },
    {
      id: 9,
      title: intl.formatMessage({ id: "projects.pokeGenerator.title" }),
      description: intl.formatMessage({
        id: "projects.pokeGenerator.description",
      }),
      tags: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Drizzle ORM",
        "PokéAPI",
        "React Hook Form",
      ],
      links: { github: "https://github.com/P4ST4S/poke-generator" },
    },
    {
      id: 10,
      title: intl.formatMessage({ id: "projects.datakeenSdk.title" }),
      description: intl.formatMessage({
        id: "projects.datakeenSdk.description",
      }),
      tags: ["React", "TypeScript", "TailwindCSS", "Rollup"],
      links: {},
    },
    {
      id: 11,
      title: intl.formatMessage({ id: "projects.petHealth.title" }),
      description: intl.formatMessage({ id: "projects.petHealth.description" }),
      tags: ["NestJS", "PostgreSQL", "Backend"],
      links: { github: "https://github.com/P4ST4S/pet-health-taker" },
    },
    {
      id: 12,
      title: intl.formatMessage({ id: "projects.francilienne.title" }),
      description: intl.formatMessage({
        id: "projects.francilienne.description",
      }),
      tags: ["React", "SCSS", "Frontend"],
      links: { demo: "https://francilienne-de-miroiterie.com/" },
    },
    {
      id: 13,
      title: intl.formatMessage({ id: "projects.triosignoDoc.title" }),
      description: intl.formatMessage({
        id: "projects.triosignoDoc.description",
      }),
      tags: ["Docusaurus", "React", "Documentation"],
      links: {
        github: "https://github.com/EIP-TEK89/docs",
        demo: "https://docs.triosigno.com/",
      },
    },
    {
      id: 14,
      title: intl.formatMessage({ id: "projects.portfolio.title" }),
      description: intl.formatMessage({ id: "projects.portfolio.description" }),
      tags: ["React", "TypeScript", "TailwindCSS", "Vite"],
      links: {
        github: "https://github.com/P4ST4S/portfolio-v4",
        demo: "https://antoinerospars.dev/",
      },
    },
  ];
};
