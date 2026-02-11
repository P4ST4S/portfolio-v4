import type { SkillCategory } from "@/types";
import { useIntl } from "react-intl";
import { FaDocker, FaGolang, FaReact } from "react-icons/fa6";
import {
  SiTypescript,
  SiTailwindcss,
  SiNestjs,
  SiPrisma,
} from "react-icons/si";
import { GoSync } from "react-icons/go";

export const useSkillsData = (): SkillCategory[] => {
  const intl = useIntl();

  return [
    {
      category: intl.formatMessage({ id: "skills.categories.frontend" }),
      skills: [
        {
          name: "React",
          icon: <FaReact className="text-3xl text-[#61DAFB]" />,
          level: "Advanced",
          years: "2 ans",
          projectCount: "10-15 projets",
          context: intl.formatMessage({ id: "skills.context.react" }),
          relatedProject: {
            name: "Wordle Solver",
            link: "https://github.com/P4ST4S/next-wordle-bot",
          },
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-3xl text-[#3178C6]" />,
          level: "Advanced",
          years: "2 ans",
          projectCount: "10-15 projets",
          context: intl.formatMessage({ id: "skills.context.typescript" }),
          relatedProject: {
            name: "Poke Generator",
            link: "https://github.com/P4ST4S/poke-generator",
          },
        },
        {
          name: "TailwindCSS",
          icon: <SiTailwindcss className="text-3xl text-[#06B6D4]" />,
          level: "Intermediate",
          years: "1.5 ans",
          projectCount: "5-10 projets",
          context: intl.formatMessage({ id: "skills.context.tailwind" }),
        },
      ],
    },
    {
      category: intl.formatMessage({ id: "skills.categories.backend" }),
      skills: [
        {
          name: "Node.js / NestJS",
          icon: <SiNestjs className="text-3xl text-[#E0234E]" />,
          level: "Expert",
          years: "2.5 ans",
          projectCount: "10+ projets",
          context: intl.formatMessage({ id: "skills.context.node" }),
          relatedProject: { name: "TrioSigno", link: "https://triosigno.com/" },
        },
        {
          name: "Go",
          icon: <FaGolang className="text-3xl text-[#00ADD8]" />,
          level: "Advanced",
          years: "6 mois",
          projectCount: "2 projets",
          context: intl.formatMessage({ id: "skills.context.go" }),
          relatedProject: {
            name: "Go Load Balancer",
            link: "https://github.com/P4ST4S/go-load-balancer",
          },
        },
        {
          name: "Prisma",
          icon: <SiPrisma className="text-3xl text-[#2D3748]" />,
          level: "Advanced",
          years: "2 ans",
          projectCount: "10+ projets",
          context: intl.formatMessage({ id: "skills.context.prisma" }),
        },
      ],
    },
    {
      category: intl.formatMessage({ id: "skills.categories.devops" }),
      skills: [
        {
          name: "Docker",
          icon: <FaDocker className="text-3xl text-[#2496ED]" />,
          level: "Advanced",
          years: "2 ans",
          projectCount: "Daily use",
          context: intl.formatMessage({ id: "skills.context.docker" }),
        },
        {
          name: "CI/CD",
          icon: <GoSync className="text-3xl text-[#2088FF]" />,
          level: "Advanced",
          years: "2 ans",
          projectCount: "Multiple pipelines",
          context: intl.formatMessage({ id: "skills.context.cicd" }),
          relatedProject: {
            name: "TrioSigno",
            link: "https://github.com/EIP-TEK89/trio-signo-fullstack",
          },
        },
      ],
    },
  ];
};
