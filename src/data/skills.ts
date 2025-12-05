import type { SkillCategory } from "@/types";
import { useIntl } from "react-intl";

export const useSkillsData = (): SkillCategory[] => {
  const intl = useIntl();
  
  return [
    {
        category: intl.formatMessage({ id: 'skills.categories.frontend' }),
        skills: [
            { 
                name: "React", 
                icon: "⚛️",
                level: "Advanced",
                years: "2 ans",
                projectCount: "10-15 projets",
                context: intl.formatMessage({ id: 'skills.context.react' }),
                relatedProject: { name: "Wordle Solver", link: "https://github.com/P4ST4S/next-wordle-bot" }
            },
            { 
                name: "TypeScript", 
                icon: "🔷",
                level: "Advanced",
                years: "2 ans",
                projectCount: "10-15 projets",
                context: intl.formatMessage({ id: 'skills.context.typescript' }),
                relatedProject: { name: "Poke Generator", link: "https://github.com/P4ST4S/poke-generator" }
            },
            { 
                name: "TailwindCSS", 
                icon: "💨",
                level: "Intermediate",
                years: "1.5 ans",
                projectCount: "5-10 projets",
                context: intl.formatMessage({ id: 'skills.context.tailwind' }),
            }
        ]
    },
    {
        category: intl.formatMessage({ id: 'skills.categories.backend' }),
        skills: [
            { 
                name: "Node.js / NestJS", 
                icon: "🟢",
                level: "Expert",
                years: "2.5 ans",
                projectCount: "10+ projets",
                context: intl.formatMessage({ id: 'skills.context.node' }),
                relatedProject: { name: "TrioSigno", link: "https://triosigno.com/" }
            },
            { 
                name: "Go", 
                icon: "🐹",
                level: "Advanced",
                years: "6 mois",
                projectCount: "2 projets",
                context: intl.formatMessage({ id: 'skills.context.go' }),
                relatedProject: { name: "Go Load Balancer", link: "https://github.com/P4ST4S/go-load-balancer" }
            },
            { 
                name: "Prisma", 
                icon: "💎",
                level: "Advanced",
                years: "2 ans",
                projectCount: "10+ projets",
                context: intl.formatMessage({ id: 'skills.context.prisma' }),
            }
        ]
    },
    {
        category: intl.formatMessage({ id: 'skills.categories.devops' }),
        skills: [
            { 
                name: "Docker", 
                icon: "🐳",
                level: "Advanced",
                years: "2 ans",
                projectCount: "Daily use",
                context: intl.formatMessage({ id: 'skills.context.docker' }),
            },
            { 
                name: "CI/CD", 
                icon: "🔄",
                level: "Advanced",
                years: "2 ans",
                projectCount: "Multiple pipelines",
                context: intl.formatMessage({ id: 'skills.context.cicd' }),
                relatedProject: { name: "TrioSigno", link: "https://github.com/EIP-TEK89/trio-signo-fullstack" }
            }
        ]
    }
  ];
};
