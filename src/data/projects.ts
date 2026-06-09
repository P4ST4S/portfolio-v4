import type { Project } from "@/types";
import { useIntl } from "react-intl";

export const useProjectsData = (): Project[] => {
  const intl = useIntl();
  const dateLabel = intl.formatMessage({ id: "projects.dateLabel" });
  const modifiedDate = "2026-06-07";
  const isFrench = intl.locale.startsWith("fr");
  const text = (fr: string, en: string) => (isFrench ? fr : en);

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
      problemSolved: text(
        "Automatiser la traduction de scans manga, qui demande normalement plusieurs outils séparés pour l'OCR, la traduction, le nettoyage et le redraw.",
        "Automated manga scan translation that normally requires separate OCR, translation, cleanup, and redraw tools.",
      ),
      result: text(
        "Pipeline de bout en bout avec suivi de progression en temps réel via Server-Sent Events et architecture microservices auditable.",
        "End-to-end pipeline with real-time Server-Sent Events progress tracking and an auditable microservices architecture.",
      ),
      context: text(
        "Projet IA personnel orienté production pour tester computer vision documentaire, traduction LLM et édition d'image masquée dans un seul flux.",
        "Personal AI production project built to test document computer vision, LLM translation, and masked image editing in one workflow.",
      ),
      actions: [
        text(
          "Connexion de la détection de texte YOLOv8, MangaOCR, traduction LLM et inpainting masqué.",
          "Connected YOLOv8 text detection, MangaOCR, LLM translation, and masked inpainting.",
        ),
        text(
          "Séparation des workers IA Python, services Go et interface Next.js derrière des services Dockerisés.",
          "Separated Python AI workers, Go services, and a Next.js interface behind Dockerized services.",
        ),
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
      id: 15,
      title: intl.formatMessage({ id: "projects.mcpAudit.title" }),
      description: intl.formatMessage({
        id: "projects.mcpAudit.description",
      }),
      modifiedDate,
      dateLabel,
      mainTech: "Go, MCP, JSON-RPC, SQLite, JSONL, Prometheus, Docker",
      problemSolved: text(
        "Auditer les appels d'outils MCP d'agents IA sans modifier le client ni le serveur MCP existants.",
        "Auditing MCP tool calls made by AI agents without modifying the existing MCP client or server.",
      ),
      result: text(
        "Proxy Go transparent avec journaux signés JSONL/SQLite, redaction de données sensibles, policies allow/deny, rate limits par outil, dashboard local et métriques Prometheus.",
        "Transparent Go proxy with signed JSONL/SQLite logs, sensitive-data redaction, allow/deny policies, per-tool rate limits, a local dashboard and Prometheus metrics.",
      ),
      context: text(
        "Projet open source P4ST4S orienté sécurité MCP, observabilité agentique et déploiement en sidecar pour environnements régulés.",
        "P4ST4S open-source project focused on MCP security, agentic observability and sidecar deployment for regulated environments.",
      ),
      actions: [
        text(
          "Implémentation d'un proxy JSON-RPC compatible transports stdio et HTTP pour intercepter le trafic MCP.",
          "Implemented a JSON-RPC proxy with stdio and HTTP transports to intercept MCP traffic.",
        ),
        text(
          "Ajout de signatures HMAC, stockage JSONL/SQLite, redaction PII, politiques d'accès, rate limiting et dashboard read-only.",
          "Added HMAC signatures, JSONL/SQLite storage, PII redaction, access policies, rate limiting and a read-only dashboard.",
        ),
      ],
      tags: [
        "Go",
        "MCP",
        "AI Agents",
        "Security",
        "Audit Logs",
        "JSON-RPC",
        "Prometheus",
        "Docker",
      ],
      links: { github: "https://github.com/P4ST4S/mcp-audit" },
    },
    {
      id: 2,
      title: intl.formatMessage({ id: "projects.nutriScan.title" }),
      description: intl.formatMessage({ id: "projects.nutriScan.description" }),
      modifiedDate,
      dateLabel,
      mainTech: "Next.js, TypeScript, PyTorch, YOLOv8, ONNX Runtime WebAssembly",
      problemSolved: text(
        "Reconnaître les aliments et estimer la nutrition sans envoyer les images caméra à un backend.",
        "Food recognition and nutrition estimation without sending camera frames to a backend.",
      ),
      result: text(
        "YOLOv8m-seg atteint mAP50 0.672 sur 32 classes et tourne entièrement dans le navigateur.",
        "YOLOv8m-seg reached mAP50 0.672 across 32 classes and runs fully in the browser.",
      ),
      context: text(
        "Prototype Edge AI pour une estimation nutritionnelle privée et temps réel depuis la caméra d'un appareil.",
        "Edge AI prototype for private, real-time nutritional estimation from a device camera.",
      ),
      actions: [
        text(
          "Entraînement puis export du modèle de segmentation en ONNX pour l'inférence navigateur.",
          "Trained and exported the segmentation model to ONNX for browser inference.",
        ),
        text(
          "Développement du traitement caméra temps réel et du calcul nutritionnel automatique en TypeScript.",
          "Built real-time camera processing and automatic nutrition calculation in TypeScript.",
        ),
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
      problemSolved: text(
        "Lire les puces de documents d'identité officiels sur mobile tout en gardant les opérations cryptographiques en natif.",
        "Reading official identity-document chips across mobile platforms while keeping cryptographic operations native.",
      ),
      result: text(
        "Support de la carte d'identité française PACE, du passeport BAC, de la vérification passive/active, extraction photo et signatures électroniques.",
        "Supports French ID card PACE, passport BAC, passive and active verification, photo extraction, and electronic signatures.",
      ),
      context: text(
        "Projet mobile de recherche sur documents d'identité, centré sur la conformité aux standards et la fiabilité des bridges natifs.",
        "Mobile identity-document research project focused on standards compliance and native bridge reliability.",
      ),
      actions: [
        text(
          "Implémentation de bridges natifs Swift, Kotlin et C pour les opérations NFC et cryptographiques.",
          "Implemented native Swift, Kotlin, and C bridges for NFC and cryptographic operations.",
        ),
        text(
          "Gestion des flux ICAO 9303 pour l'accès à la puce, la vérification et l'extraction des données documentaires.",
          "Handled ICAO 9303 flows for chip access, verification, and document data extraction.",
        ),
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
      problemSolved: text(
        "Fournir à des équipes projet une plateforme fullstack avec livraison modulaire, APIs documentées et déploiement automatisé.",
        "Project teams needed a fullstack platform with modular delivery, documented APIs, and automated deployment.",
      ),
      result: text(
        "Plateforme React/NestJS Dockerisée livrée avec CI/CD et site de documentation associé.",
        "Delivered a Dockerized React/NestJS platform with CI/CD and a companion documentation site.",
      ),
      context: text(
        "Projet de fin d'études Epitech construit en équipe pour un développement produit long terme.",
        "Epitech end-of-study project built by a team for long-running product development.",
      ),
      actions: [
        text(
          "Conception des modules frontend et backend autour d'un contrat TypeScript typé.",
          "Designed frontend and backend modules around a typed TypeScript contract.",
        ),
        text(
          "Configuration de Docker, PostgreSQL, Prisma et GitHub Actions pour une livraison reproductible.",
          "Configured Docker, PostgreSQL, Prisma, and GitHub Actions for repeatable delivery.",
        ),
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
      problemSolved: text(
        "Distribuer le trafic entre backends en évitant les cibles surchargées ou non disponibles.",
        "Distributing traffic safely across backends while avoiding overloaded or unhealthy targets.",
      ),
      result: text(
        "Load balancer least-connections avec health checks actifs, worker pool, opérations atomiques et 91% de couverture de tests.",
        "Least-connections balancer with active health checks, worker pool, atomic operations, and 91% test coverage.",
      ),
      context: text(
        "Projet système backend pour démontrer concurrence Go, gestion des pannes et discipline de tests.",
        "Backend systems project built to demonstrate Go concurrency, failure handling, and test discipline.",
      ),
      actions: [
        text(
          "Implémentation d'un état backend thread-safe avec RWMutex et compteurs atomiques.",
          "Implemented thread-safe backend state with RWMutex and atomic counters.",
        ),
        text(
          "Ajout de health checks et d'un worker pool pour isoler le routage des pannes backend.",
          "Added health checks and a worker pool to isolate routing from backend failures.",
        ),
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
      problemSolved: text(
        "Optimiser des images rapidement sans laisser les gros fichiers épuiser la mémoire du service.",
        "Optimizing images quickly without letting large files exhaust service memory.",
      ),
      result: text(
        "Microservice Go fail-fast avec protection mémoire par sémaphore, arrêt gracieux et image Docker sous 21 MB.",
        "Fail-fast Go microservice with semaphore memory protection, graceful shutdown, and Docker image under 21 MB.",
      ),
      context: text(
        "Projet d'infrastructure orienté performance pour du traitement d'images proche production.",
        "Performance-oriented infrastructure project for production-style image processing.",
      ),
      actions: [
        text(
          "Contrôle de la concurrence avec un sémaphore pour protéger la mémoire sous charge.",
          "Controlled concurrency with a semaphore to protect memory under load.",
        ),
        text(
          "Conception d'un runtime Docker léger et d'un chemin d'arrêt gracieux pour faciliter le déploiement.",
          "Designed a small Docker runtime and graceful shutdown path for deployability.",
        ),
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
      mainTech:
        "React, TypeScript, NestJS, MongoDB, Prisma, Flutter, Kotlin, Swift, NFC",
      problemSolved: text(
        "Moderniser une plateforme IA Datakeen entre V2 et V3 et étendre les parcours d'identité mobile/NFC sans interrompre la livraison produit.",
        "Datakeen needed to modernize an AI platform across V2 and V3 and extend mobile/NFC identity journeys without stopping product delivery.",
      ),
      result: text(
        "Migration de production, fonctionnalités produit, SDK Flutter et SDK natifs Kotlin/Swift pour lecture NFC de passeports BAC et documents d'identité PACE.",
        "Production migration, product features, Flutter SDK and native Kotlin/Swift SDKs for NFC reading of BAC passports and PACE identity documents.",
      ),
      context: text(
        "Expérience employeur nommée chez Datakeen, centrée sur du développement applicatif React/TypeScript en production et des briques d'identité mobile.",
        "Named employer experience at Datakeen, focused on production React/TypeScript application work and mobile identity building blocks.",
      ),
      actions: [
        text(
          "Refonte de l'architecture applicative et migration incrémentale des écrans existants.",
          "Refactored application architecture and migrated existing screens incrementally.",
        ),
        text(
          "Création d'un SDK Flutter et de SDK natifs Kotlin/Swift pour la lecture NFC de documents d'identité, passeport BAC et PACE.",
          "Created a Flutter SDK and native Kotlin/Swift SDKs for NFC identity-document reading, passport BAC and PACE.",
        ),
      ],
      tags: [
        "React",
        "TypeScript",
        "NestJS",
        "Flutter",
        "Kotlin",
        "Swift",
        "NFC",
        "PACE",
      ],
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
      problemSolved: text(
        "Trouver les meilleurs coups Wordle sans bloquer l'interface navigateur pendant les calculs lourds.",
        "Finding optimal Wordle guesses without blocking the browser interface during heavy computation.",
      ),
      result: text(
        "Solveur basé sur l'entropie qui garde l'interface fluide à 60fps grâce au calcul déporté en Web Workers.",
        "Entropy-based solver keeps the UI responsive at 60fps by moving calculations to Web Workers.",
      ),
      context: text(
        "Projet frontend algorithmique combinant théorie de l'information et interface web utilisable.",
        "Algorithmic frontend project built to combine information theory with a usable web interface.",
      ),
      actions: [
        text(
          "Implémentation d'un score d'entropie de Shannon pour les mots candidats.",
          "Implemented Shannon entropy scoring for candidate words.",
        ),
        text(
          "Déport des calculs coûteux vers des Web Workers pour préserver la réactivité de l'interface.",
          "Moved expensive calculations to Web Workers and kept the interface responsive.",
        ),
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
      problemSolved: text(
        "Créer des entrées Pokémon personnalisées avec validation fiable, recherche et persistance des données.",
        "Creating custom Pokemon entries required reliable form validation, search, and persistent storage.",
      ),
      result: text(
        "Générateur fullstack avec recherche insensible aux accents, formulaires typés, intégration PokéAPI et stockage PostgreSQL.",
        "Fullstack generator with accent-insensitive search, typed forms, PokéAPI integration, and PostgreSQL storage.",
      ),
      context: text(
        "Projet fullstack orienté produit, focalisé sur les flux de données typés et le contenu généré par utilisateur.",
        "Product-style fullstack project focused on typed data flows and user-generated content.",
      ),
      actions: [
        text(
          "Intégration de PokéAPI et PostgreSQL via Drizzle ORM.",
          "Integrated PokéAPI and PostgreSQL through Drizzle ORM.",
        ),
        text(
          "Développement de formulaires validés avec React Hook Form et d'une recherche insensible aux accents.",
          "Built validated forms with React Hook Form and accent-insensitive search.",
        ),
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
      mainTech: "TypeScript, Flutter, Kotlin, Swift, NFC, Rollup",
      problemSolved: text(
        "Permettre aux clients Datakeen d'intégrer des parcours de vérification d'identité web et mobile sans redévelopper les briques sensibles.",
        "Datakeen customers needed web and mobile identity-verification journeys without rebuilding sensitive building blocks.",
      ),
      result: text(
        "SDK TypeScript, SDK Flutter et SDK natifs Kotlin/Swift couvrant intégration produit et lecture NFC de passeports BAC et documents PACE.",
        "TypeScript SDK, Flutter SDK and native Kotlin/Swift SDKs covering product integration and NFC reading of BAC passports and PACE documents.",
      ),
      context: text(
        "Expérience employeur nommée chez Datakeen, avec packaging de workflows produit et capacités NFC pour intégration externe.",
        "Named employer experience at Datakeen, packaging product workflows and NFC capabilities for external integration.",
      ),
      actions: [
        text(
          "Conception de l'API du SDK et du pipeline de build pour une intégration frontend réutilisable.",
          "Designed the SDK API and build pipeline for reusable frontend integration.",
        ),
        text(
          "Développement des couches Flutter, Kotlin et Swift pour exposer les flux NFC passeport BAC et document d'identité PACE.",
          "Built Flutter, Kotlin and Swift layers exposing NFC passport BAC and PACE identity-document flows.",
        ),
      ],
      tags: ["TypeScript", "Flutter", "Kotlin", "Swift", "NFC", "PACE", "SDK"],
      links: {},
    },
    {
      id: 11,
      title: intl.formatMessage({ id: "projects.petHealth.title" }),
      description: intl.formatMessage({ id: "projects.petHealth.description" }),
      modifiedDate,
      dateLabel,
      mainTech: "NestJS, PostgreSQL, backend architecture",
      problemSolved: text(
        "Modéliser une gestion de rendez-vous vétérinaires avec authentification, permissions et données relationnelles.",
        "Veterinary appointment management needed authentication, permissions, and relational data modeling.",
      ),
      result: text(
        "API REST NestJS avec modules scalables, gestion des permissions et persistance PostgreSQL.",
        "NestJS REST API with scalable module boundaries, permission handling, and PostgreSQL persistence.",
      ),
      context: text(
        "Projet d'API backend construit pour représenter un vrai domaine de gestion de rendez-vous.",
        "Backend API project built to model a real appointment-management domain.",
      ),
      actions: [
        text(
          "Création d'endpoints REST avec modules NestJS et entités de base relationnelle.",
          "Created REST endpoints with NestJS modules and relational database entities.",
        ),
        text(
          "Implémentation de l'authentification et des contrôles de permissions autour des workflows de rendez-vous.",
          "Implemented authentication and permission checks around appointment workflows.",
        ),
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
      problemSolved: text(
        "Créer pour une miroiterie locale un site vitrine rapide, responsive et utile à la conversion depuis la recherche.",
        "A local glazing business needed a fast, responsive showcase site that converts search visitors.",
      ),
      result: text(
        "Site de production pour Francilienne de Miroiterie avec score Lighthouse supérieur à 95.",
        "Production website for Francilienne de Miroiterie with Lighthouse score above 95.",
      ),
      context: text(
        "Projet frontend client pour une entreprise française réelle.",
        "Client-facing frontend project for a real French business website.",
      ),
      actions: [
        text(
          "Développement de pages responsive avec chargement des assets orienté performance.",
          "Built responsive pages with performance-oriented asset loading.",
        ),
        text(
          "Application des fondamentaux SEO, lazy loading et améliorations d'expérience utilisateur.",
          "Applied SEO fundamentals, lazy loading, and user-experience improvements.",
        ),
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
      problemSolved: text(
        "Fournir à TrioSigno une documentation technique cherchable pour développeurs et parties prenantes.",
        "TrioSigno needed searchable technical documentation for developers and project stakeholders.",
      ),
      result: text(
        "Site de documentation statique avec recherche avancée, exemples de code et guides d'intégration.",
        "Static documentation site with advanced search, code examples, and integration guides.",
      ),
      context: text(
        "Documentation compagnon de la plateforme fullstack TrioSigno.",
        "Documentation companion for the TrioSigno fullstack platform.",
      ),
      actions: [
        text(
          "Structuration de guides et exemples autour des tâches fréquentes d'intégration développeur.",
          "Structured guides and examples around common developer integration tasks.",
        ),
        text(
          "Utilisation d'un générateur de documentation statique pour charger vite et déployer simplement.",
          "Used a static documentation generator for fast loading and easy deployment.",
        ),
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
      problemSolved: text(
        "Donner aux recruteurs et clients un profil technique concis avec preuves de production et résultats projet.",
        "Recruiters and clients need a concise technical profile with proof of production and project outcomes.",
      ),
      result: text(
        "Portfolio bilingue avec preuves projet structurées, UI orientée performance et guidage explicite des crawlers IA.",
        "Bilingual portfolio with structured project evidence, performance-oriented UI, and explicit AI-crawler guidance.",
      ),
      context: text(
        "Portfolio personnel maintenu comme source canonique du profil développeur d'Antoine Rospars.",
        "Personal portfolio maintained as the canonical source for Antoine Rospars' developer profile.",
      ),
      actions: [
        text(
          "Développement de sections React modulaires, support du thème et contenu bilingue.",
          "Built modular React sections, theme support, and bilingual content.",
        ),
        text(
          "Ajout de métadonnées structurées, faits projet extractibles et fichiers de crawl dédiés GEO.",
          "Added structured metadata, extractible project facts, and GEO-specific crawl files.",
        ),
      ],
      tags: ["React", "TypeScript", "TailwindCSS", "Vite"],
      links: {
        github: "https://github.com/P4ST4S/portfolio-v4",
        demo: "https://antoinerospars.dev/",
      },
    },
  ];
};
