import type { Project } from "@/types";
import { useIntl } from "react-intl";

export const useProjectsData = (): Project[] => {
  const intl = useIntl();
  const dateLabel = intl.formatMessage({ id: "projects.dateLabel" });
  const modifiedDate = "2026-05-22";

  return [
    {
      id: 1,
      title: intl.formatMessage({ id: "projects.autoScanlate.title" }),
      description: intl.formatMessage({
        id: "projects.autoScanlate.description",
      }),
      // GEO rationale: each project is a self-contained answer chunk: context, problem, stack, actions, measurable result.
      modifiedDate,
      dateLabel,
      mainTech: "Python, Go, Next.js, PyTorch, YOLOv8, Qwen 2.5",
      problemSolved:
        "Automated manga scan translation that normally requires separate OCR, translation, cleanup, and redraw tools.",
      result:
        "End-to-end pipeline with real-time Server-Sent Events progress tracking and an auditable microservices architecture.",
      context:
        "Personal AI production project built to test document computer vision, LLM translation, and masked image editing in one workflow.",
      actions: [
        "Connected YOLOv8 text detection, MangaOCR, LLM translation, and masked inpainting.",
        "Separated Python AI workers, Go services, and a Next.js interface behind Dockerized services.",
      ],
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
      modifiedDate,
      dateLabel,
      mainTech: "Next.js, TypeScript, PyTorch, YOLOv8, ONNX Runtime WebAssembly",
      problemSolved:
        "Food recognition and nutrition estimation without sending camera frames to a backend.",
      result:
        "YOLOv8m-seg reached mAP50 0.672 across 32 classes and runs fully in the browser.",
      context:
        "Edge AI prototype for private, real-time nutritional estimation from a device camera.",
      actions: [
        "Trained and exported the segmentation model to ONNX for browser inference.",
        "Built real-time camera processing and automatic nutrition calculation in TypeScript.",
      ],
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
      modifiedDate,
      dateLabel,
      mainTech: "React Native, Swift, Kotlin, C, NFC, ICAO 9303",
      problemSolved:
        "Reading official identity-document chips across mobile platforms while keeping cryptographic operations native.",
      result:
        "Supports French ID card PACE, passport BAC, passive and active verification, photo extraction, and electronic signatures.",
      context:
        "Mobile identity-document research project focused on standards compliance and native bridge reliability.",
      actions: [
        "Implemented native Swift, Kotlin, and C bridges for NFC and cryptographic operations.",
        "Handled ICAO 9303 flows for chip access, verification, and document data extraction.",
      ],
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
      modifiedDate,
      dateLabel,
      mainTech: "React, TypeScript, NestJS, Docker, PostgreSQL, Prisma",
      problemSolved:
        "Project teams needed a fullstack platform with modular delivery, documented APIs, and automated deployment.",
      result:
        "Delivered a Dockerized React/NestJS platform with CI/CD and a companion documentation site.",
      context:
        "Epitech end-of-study project built by a team for long-running product development.",
      actions: [
        "Designed frontend and backend modules around a typed TypeScript contract.",
        "Configured Docker, PostgreSQL, Prisma, and GitHub Actions for repeatable delivery.",
      ],
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
      modifiedDate,
      dateLabel,
      mainTech: "Go, Docker, concurrency, health checks",
      problemSolved:
        "Distributing traffic safely across backends while avoiding overloaded or unhealthy targets.",
      result:
        "Least-connections balancer with active health checks, worker pool, atomic operations, and 91% test coverage.",
      context:
        "Backend systems project built to demonstrate Go concurrency, failure handling, and test discipline.",
      actions: [
        "Implemented thread-safe backend state with RWMutex and atomic counters.",
        "Added health checks and a worker pool to isolate routing from backend failures.",
      ],
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
      modifiedDate,
      dateLabel,
      mainTech: "Go, Docker, microservices, image processing",
      problemSolved:
        "Optimizing images quickly without letting large files exhaust service memory.",
      result:
        "Fail-fast Go microservice with semaphore memory protection, graceful shutdown, and Docker image under 21 MB.",
      context:
        "Performance-oriented infrastructure project for production-style image processing.",
      actions: [
        "Controlled concurrency with a semaphore to protect memory under load.",
        "Designed a small Docker runtime and graceful shutdown path for deployability.",
      ],
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
      modifiedDate,
      dateLabel,
      mainTech: "React, NestJS, Express, MongoDB, Prisma, GitLab CI",
      problemSolved:
        "Datakeen needed to modernize an AI platform across V2 and V3 without stopping product delivery.",
      result:
        "Production migration and feature delivery on a real AI product used inside Datakeen workflows.",
      context:
        "Named employer experience at Datakeen, focused on production React/TypeScript application work.",
      actions: [
        "Refactored application architecture and migrated existing screens incrementally.",
        "Shipped new platform features while improving maintainability and performance.",
      ],
      tags: ["React", "NestJS", "Express", "MongoDB", "Prisma", "GitLab CI"],
      links: {},
    },
    {
      id: 8,
      title: intl.formatMessage({ id: "projects.wordleSolver.title" }),
      description: intl.formatMessage({
        id: "projects.wordleSolver.description",
      }),
      modifiedDate,
      dateLabel,
      mainTech: "Next.js, React, TypeScript, Web Workers, algorithms",
      problemSolved:
        "Finding optimal Wordle guesses without blocking the browser interface during heavy computation.",
      result:
        "Entropy-based solver keeps the UI responsive at 60fps by moving calculations to Web Workers.",
      context:
        "Algorithmic frontend project built to combine information theory with a usable web interface.",
      actions: [
        "Implemented Shannon entropy scoring for candidate words.",
        "Moved expensive calculations to Web Workers and kept the interface responsive.",
      ],
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
      modifiedDate,
      dateLabel,
      mainTech: "Next.js, TypeScript, PostgreSQL, Drizzle ORM, PokéAPI",
      problemSolved:
        "Creating custom Pokemon entries required reliable form validation, search, and persistent storage.",
      result:
        "Fullstack generator with accent-insensitive search, typed forms, PokéAPI integration, and PostgreSQL storage.",
      context:
        "Product-style fullstack project focused on typed data flows and user-generated content.",
      actions: [
        "Integrated PokéAPI and PostgreSQL through Drizzle ORM.",
        "Built validated forms with React Hook Form and accent-insensitive search.",
      ],
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
      modifiedDate,
      dateLabel,
      mainTech: "React, TypeScript, TailwindCSS, Rollup",
      problemSolved:
        "Datakeen customers needed an embeddable identity-verification journey instead of custom integration work.",
      result:
        "Reusable SDK with documented API surface for complex identity-verification flows.",
      context:
        "Named employer experience at Datakeen, packaging product workflows for external integration.",
      actions: [
        "Designed the SDK API and build pipeline for reusable frontend integration.",
        "Documented complex verification states so integrators could implement the journey safely.",
      ],
      tags: ["React", "TypeScript", "TailwindCSS", "Rollup"],
      links: {},
    },
    {
      id: 11,
      title: intl.formatMessage({ id: "projects.petHealth.title" }),
      description: intl.formatMessage({ id: "projects.petHealth.description" }),
      modifiedDate,
      dateLabel,
      mainTech: "NestJS, PostgreSQL, backend architecture",
      problemSolved:
        "Veterinary appointment management needed authentication, permissions, and relational data modeling.",
      result:
        "NestJS REST API with scalable module boundaries, permission handling, and PostgreSQL persistence.",
      context:
        "Backend API project built to model a real appointment-management domain.",
      actions: [
        "Created REST endpoints with NestJS modules and relational database entities.",
        "Implemented authentication and permission checks around appointment workflows.",
      ],
      tags: ["NestJS", "PostgreSQL", "Backend"],
      links: { github: "https://github.com/P4ST4S/pet-health-taker" },
    },
    {
      id: 12,
      title: intl.formatMessage({ id: "projects.francilienne.title" }),
      description: intl.formatMessage({
        id: "projects.francilienne.description",
      }),
      modifiedDate,
      dateLabel,
      mainTech: "React, SCSS, frontend performance",
      problemSolved:
        "A local glazing business needed a fast, responsive showcase site that converts search visitors.",
      result:
        "Production website for Francilienne de Miroiterie with Lighthouse score above 95.",
      context:
        "Client-facing frontend project for a real French business website.",
      actions: [
        "Built responsive pages with performance-oriented asset loading.",
        "Applied SEO fundamentals, lazy loading, and user-experience improvements.",
      ],
      tags: ["React", "SCSS", "Frontend"],
      links: { demo: "https://francilienne-de-miroiterie.com/" },
    },
    {
      id: 13,
      title: intl.formatMessage({ id: "projects.triosignoDoc.title" }),
      description: intl.formatMessage({
        id: "projects.triosignoDoc.description",
      }),
      modifiedDate,
      dateLabel,
      mainTech: "Docusaurus, React, technical documentation",
      problemSolved:
        "TrioSigno needed searchable technical documentation for developers and project stakeholders.",
      result:
        "Static documentation site with advanced search, code examples, and integration guides.",
      context:
        "Documentation companion for the TrioSigno fullstack platform.",
      actions: [
        "Structured guides and examples around common developer integration tasks.",
        "Used a static documentation generator for fast loading and easy deployment.",
      ],
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
      modifiedDate,
      dateLabel,
      mainTech: "React, TypeScript, TailwindCSS, Vite",
      problemSolved:
        "Recruiters and clients need a concise technical profile with proof of production and project outcomes.",
      result:
        "Bilingual portfolio with structured project evidence, performance-oriented UI, and explicit AI-crawler guidance.",
      context:
        "Personal portfolio maintained as the canonical source for Antoine Rospars' developer profile.",
      actions: [
        "Built modular React sections, theme support, and bilingual content.",
        "Added structured metadata, extractible project facts, and GEO-specific crawl files.",
      ],
      tags: ["React", "TypeScript", "TailwindCSS", "Vite"],
      links: {
        github: "https://github.com/P4ST4S/portfolio-v4",
        demo: "https://antoinerospars.dev/",
      },
    },
  ];
};
