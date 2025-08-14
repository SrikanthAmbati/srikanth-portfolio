
import type { ReactNode } from 'react';

export interface Skill {
  name: string;
  icon: ReactNode;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface TimelineItem {
  title: string;
  subtitle: string;
  date: string;
  details: string[];
  icon: ReactNode;
}

export interface ProjectItem {
  image: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
}

export interface CertificateItem {
  name: string;
  icon: ReactNode;
}
