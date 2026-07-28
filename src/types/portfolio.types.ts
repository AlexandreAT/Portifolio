export type IconName =
  | 'code'
  | 'csharp'
  | 'dotnet'
  | 'react'
  | 'typescript'
  | 'mysql'
  | 'sqlserver'
  | 'mongodb'
  | 'docker'
  | 'git'
  | 'github'
  | 'linkedin'
  | 'email'
  | 'document'
  | 'devices'
  | 'product'
  | 'design'
  | 'education'
  | 'layers'
  | 'tools';

export enum ProjectStatus {
  PLANNED = 'PLANEJADO',
  IN_DEVELOPMENT = 'EM_DESENVOLVIMENTO',
  ONLINE = 'ONLINE',
  FINISHED = 'FINALIZADO',
  PAUSED = 'PAUSADO',
}

export type ProjectCategory =
  | 'Full Stack'
  | 'Web e Mobile'
  | 'Mobile'
  | 'Frontend';

export interface PortfolioProfile {
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  availability: string;
  introduction: string;
  complementaryDescription: string;
  about: string[];
  email: string;
  profileImage: string;
  resumeUrl?: string;
}

export interface SocialLink {
  id: string;
  label: string;
  value: string;
  url?: string;
  icon: IconName;
}

export interface Technology {
  id: string;
  name: string;
  icon: IconName;
  color: string;
}

export interface Differential {
  id: string;
  title: string;
  description: string;
  icon: IconName;
}

export interface CaseStudy {
  overview?: string;
  problem?: string;
  objective?: string;
  audience?: string;
  participation?: string;
  features?: string[];
  architecture?: string;
  technicalDecisions?: string[];
  challenges?: string[];
  solutions?: string[];
  learnings?: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  period?: string;
  role?: string;
  category: ProjectCategory;
  technologies: string[];
  platform?: string;
  deployProvider?: string;
  status: ProjectStatus;
  coverImage: string;
  gallery?: string[];
  projectUrl?: string;
  repositoryUrl?: string;
  featured: boolean;
  priority: number;
  caseStudy?: CaseStudy;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Education {
  id: string;
  course: string;
  institution: string;
  period: string;
}

export interface Course {
  id: string;
  name: string;
  institution?: string;
  status?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: IconName;
  skills: string[];
}

export interface ContactOption extends SocialLink {
  description: string;
}
