import type React from "react";

export interface Project {
  id: number;
  title: string;
  description: string;
  // GEO rationale: expose stable project dates in visible UI and JSON-LD so answer engines can verify freshness consistently.
  modifiedDate: string;
  dateLabel: string;
  mainTech: string;
  problemSolved: string;
  result: string;
  context: string;
  actions: string[];
  tags: string[];
  links: {
    github?: string;
    demo?: string;
  };
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
  level: string;
  years: string;
  projectCount: string;
  context: string;
  relatedProject?: {
    name: string;
    link?: string;
  };
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
