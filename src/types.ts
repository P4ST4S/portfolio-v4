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

export interface Collaborator {
    id: number;
    name: string;
    role: string;
    specialities: string[];
    description: string;
    links: {
        linkedin?: string;
        github?: string;
        website?: string;
        email?: string;
    };
    avatar?: string;
    company?: string;
}