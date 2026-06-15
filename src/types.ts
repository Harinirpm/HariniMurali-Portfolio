/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  contributions?: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: "Full Stack" | "Backend" | "Frontend" | "AI";
  highlights: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string[];
  skills: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  duration: string;
  cgpa: string;
  skills: string[];
  description: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date?: string;
}

export interface Achievement {
  title: string;
  event: string;
  place?: string;
  year: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: string[];
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}
