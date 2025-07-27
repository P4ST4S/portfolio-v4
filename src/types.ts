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