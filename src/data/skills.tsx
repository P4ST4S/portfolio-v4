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
  const isEnglish = intl.locale.startsWith("en");

  return [
    {
      category: intl.formatMessage({ id: "skills.categories.frontend" }),
      skills: [
        {
          name: "React",
          icon: <FaReact className="text-3xl text-[#007E73] dark:text-[#5EEAD4]" />,
          level: "Advanced",
          years: isEnglish ? "2 years" : "2 ans",
          projectCount: isEnglish ? "10-15 projects" : "10-15 projets",
          context: intl.formatMessage({ id: "skills.context.react" }),
          relatedProject: {
            name: "Wordle Solver",
            link: "https://github.com/P4ST4S/next-wordle-bot",
          },
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-3xl text-[#007E73] dark:text-[#5EEAD4]" />,
          level: "Advanced",
          years: isEnglish ? "2 years" : "2 ans",
          projectCount: isEnglish ? "10-15 projects" : "10-15 projets",
          context: intl.formatMessage({ id: "skills.context.typescript" }),
          relatedProject: {
            name: "Poke Generator",
            link: "https://github.com/P4ST4S/poke-generator",
          },
        },
        {
          name: "TailwindCSS",
          icon: <SiTailwindcss className="text-3xl text-[#007E73] dark:text-[#5EEAD4]" />,
          level: "Intermediate",
          years: isEnglish ? "1.5 years" : "1,5 ans",
          projectCount: isEnglish ? "5-10 projects" : "5-10 projets",
          context: intl.formatMessage({ id: "skills.context.tailwind" }),
        },
      ],
    },
    {
      category: intl.formatMessage({ id: "skills.categories.backend" }),
      skills: [
        {
          name: "Node.js / NestJS",
          icon: <SiNestjs className="text-3xl text-[#007E73] dark:text-[#5EEAD4]" />,
          level: "Expert",
          years: isEnglish ? "2.5 years" : "2,5 ans",
          projectCount: isEnglish ? "10+ projects" : "10+ projets",
          context: intl.formatMessage({ id: "skills.context.node" }),
          relatedProject: { name: "TrioSigno", link: "https://triosigno.com/" },
        },
        {
          name: "Go",
          icon: <FaGolang className="text-3xl text-[#007E73] dark:text-[#5EEAD4]" />,
          level: "Advanced",
          years: isEnglish ? "6 months" : "6 mois",
          projectCount: isEnglish ? "2 projects" : "2 projets",
          context: intl.formatMessage({ id: "skills.context.go" }),
          relatedProject: {
            name: "Go Load Balancer",
            link: "https://github.com/P4ST4S/go-load-balancer",
          },
        },
        {
          name: "Prisma",
          icon: <SiPrisma className="text-3xl text-[#007E73] dark:text-[#5EEAD4]" />,
          level: "Advanced",
          years: isEnglish ? "2 years" : "2 ans",
          projectCount: isEnglish ? "10+ projects" : "10+ projets",
          context: intl.formatMessage({ id: "skills.context.prisma" }),
        },
      ],
    },
    {
      category: intl.formatMessage({ id: "skills.categories.devops" }),
      skills: [
        {
          name: "Docker",
          icon: <FaDocker className="text-3xl text-[#007E73] dark:text-[#5EEAD4]" />,
          level: "Advanced",
          years: isEnglish ? "2 years" : "2 ans",
          projectCount: isEnglish ? "Daily use" : "Usage quotidien",
          context: intl.formatMessage({ id: "skills.context.docker" }),
        },
        {
          name: "CI/CD",
          icon: <GoSync className="text-3xl text-[#007E73] dark:text-[#5EEAD4]" />,
          level: "Advanced",
          years: isEnglish ? "2 years" : "2 ans",
          projectCount: isEnglish ? "Multiple pipelines" : "Pipelines multiples",
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
