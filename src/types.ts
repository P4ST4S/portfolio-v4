export interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    links: {
        github?: string;
        demo?: string;
    };
}

export interface Skill {
    name: string;
    level: number;
    icon?: string;
}

export interface SkillCategory {
    category: string;
    skills: Skill[];
}

export type FormState = {
    name: string;
    email: string;
    message: string;
};