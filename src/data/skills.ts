import type { SkillCategory } from "@/types";
import { useIntl } from "react-intl";

export const useSkillsData = (): SkillCategory[] => {
  const intl = useIntl();
  
  return [
    {
        category: intl.formatMessage({ id: 'skills.categories.frontend' }),
        skills: [
            { name: "React", level: 95, icon: "⚛️" },
            { name: "TypeScript", level: 90, icon: "🔷" },
            { name: "JavaScript", level: 95, icon: "🟨" },
            { name: "TailwindCSS", level: 85, icon: "💨" },
            { name: "HTML5", level: 95, icon: "🌐" },
            { name: "CSS3", level: 90, icon: "🎨" },
            { name: "SCSS", level: 85, icon: "💎" },
            { name: "React Native", level: 80, icon: "📱" }
        ]
    },
    {
        category: intl.formatMessage({ id: 'skills.categories.backend' }),
        skills: [
            { name: "Node.js", level: 90, icon: "🟢" },
            { name: "NestJS", level: 85, icon: "🦅" },
            { name: "Express", level: 85, icon: "⚡" },
            { name: "PostgreSQL", level: 80, icon: "🐘" },
            { name: "MongoDB", level: 75, icon: "🍃" },
            { name: "MySQL", level: 80, icon: "🗄️" },
            { name: "Prisma", level: 85, icon: "⚙️" },
        ]
    },
    {
        category: intl.formatMessage({ id: 'skills.categories.devops' }),
        skills: [
            { name: "Docker", level: 80, icon: "🐳" },
            { name: "GitHub Actions", level: 85, icon: "🔄" },
            { name: "GitLab CI", level: 75, icon: "🦊" },
            { name: "Git", level: 90, icon: "📝" },
            { name: "Vite", level: 85, icon: "⚡" },
            { name: "Webpack", level: 75, icon: "📦" },
            { name: "Rollup", level: 70, icon: "🎯" },
            { name: "Netlify", level: 80, icon: "🌐" }
        ]
    },
    {
        category: intl.formatMessage({ id: 'skills.categories.others' }),
        skills: [
            { name: intl.formatMessage({ id: 'skills.names.fullstackArchitecture' }), level: 85, icon: "🏗️" },
            { name: intl.formatMessage({ id: 'skills.names.restApi' }), level: 90, icon: "🔌" },
            { name: intl.formatMessage({ id: 'skills.names.microservices' }), level: 75, icon: "🧩" },
            { name: intl.formatMessage({ id: 'skills.names.unitTesting' }), level: 80, icon: "🧪" },
            { name: intl.formatMessage({ id: 'skills.names.documentation' }), level: 85, icon: "📚" },
            { name: "SEO", level: 75, icon: "🔍" },
            { name: intl.formatMessage({ id: 'skills.names.webPerformance' }), level: 80, icon: "🚀" },
            { name: intl.formatMessage({ id: 'skills.names.webSecurity' }), level: 75, icon: "🔒" }
        ]
    }
  ];
};

// Legacy export for backward compatibility
const skillsData: SkillCategory[] = [
    {
        category: "Frontend",
        skills: [
            { name: "React", level: 95, icon: "⚛️" },
            { name: "TypeScript", level: 90, icon: "🔷" },
            { name: "JavaScript", level: 95, icon: "🟨" },
            { name: "TailwindCSS", level: 85, icon: "💨" },
            { name: "HTML5", level: 95, icon: "🌐" },
            { name: "CSS3", level: 90, icon: "🎨" },
            { name: "SCSS", level: 85, icon: "💎" },
            { name: "React Native", level: 80, icon: "📱" }
        ]
    },
    {
        category: "Backend",
        skills: [
            { name: "Node.js", level: 90, icon: "🟢" },
            { name: "NestJS", level: 85, icon: "🦅" },
            { name: "Express", level: 85, icon: "⚡" },
            { name: "PostgreSQL", level: 80, icon: "🐘" },
            { name: "MongoDB", level: 75, icon: "🍃" },
            { name: "MySQL", level: 80, icon: "🗄️" },
            { name: "Prisma", level: 85, icon: "⚙️" },
        ]
    },
    {
        category: "DevOps & Tools",
        skills: [
            { name: "Docker", level: 80, icon: "🐳" },
            { name: "GitHub Actions", level: 85, icon: "🔄" },
            { name: "GitLab CI", level: 75, icon: "🦊" },
            { name: "Git", level: 90, icon: "📝" },
            { name: "Vite", level: 85, icon: "⚡" },
            { name: "Webpack", level: 75, icon: "📦" },
            { name: "Rollup", level: 70, icon: "🎯" },
            { name: "Netlify", level: 80, icon: "🌐" }
        ]
    },
    {
        category: "Autres",
        skills: [
            { name: "Architecture Fullstack", level: 85, icon: "🏗️" },
            { name: "API REST", level: 90, icon: "🔌" },
            { name: "Microservices", level: 75, icon: "🧩" },
            { name: "Tests Unitaires", level: 80, icon: "🧪" },
            { name: "Documentation", level: 85, icon: "📚" },
            { name: "SEO", level: 75, icon: "🔍" },
            { name: "Performance Web", level: 80, icon: "🚀" },
            { name: "Sécurité Web", level: 75, icon: "🔒" }
        ]
    }
];

export default skillsData;