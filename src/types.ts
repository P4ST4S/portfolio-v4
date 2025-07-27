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

export interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export type FormState = {
    name: string;
    email: string;
    message: string;
};