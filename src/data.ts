/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, ExperienceItem, EducationItem, Certification, Achievement, SkillCategory } from "./types";

export const projects: Project[] = [
  {
    id: "cosmetics-ecommerce",
    title: "Cosmetics E-Commerce Platform",
    role: "Full Stack Developer",
    description: "A highly responsive e-commerce application designed for a cosmetics enterprise. Implemented dual dashboards enabling Admin and Store Managers to comprehensively audit stock inventory, fulfill requests, and track incoming logistics.",
    contributions: [
      "Built comprehensive separate dashboards for Admin and Store Manager roles to handle orders and manage stocks.",
      "Implemented seamless search features offering multi-faceted filters (by catalog categories like Creams, Lip Balms, Sunscreens, etc.).",
      "Designed secure RESTful backend APIs in Spring Boot and protected transactions using role-based access control (RBAC).",
      "Integrated secure state containment and token verification using JSON Web Tokens (JWT)."
    ],
    techStack: ["React.js", "Spring Boot", "JPA", "Hibernate", "JWT", "MySQL", "Tailwind CSS"],
    category: "Full Stack",
    githubUrl: "https://github.com/Harinirpm/Alumini_Tracking_System",
    highlights: ["Dual Role Gateways", "Category Filters", "Secured API Enclaves"],
  },
  {
    id: "blood-buddy",
    title: "Blood Buddy Platform",
    role: "Backend & Database Developer",
    description: "An optimized backend service platform connecting local blood donors directly with emergency medical triage and local hospitals, automating request routing and availability matching.",
    contributions: [
      "Architected backend microservices designed for rapid donor matching based on regional and type-based lookups.",
      "Engineered secure relational database schemas using MySQL with JPA mappings.",
      "Designed access structures guarding donor privacy via robust role credentials implemented with backend Spring Security JWT validations."
    ],
    techStack: ["Java", "Spring Boot", "MySQL", "RESTful APIs", "JWT Authentication", "JPA"],
    category: "Backend",
    githubUrl: "https://github.com/Harinirpm/Blood_Buddy_Platform_Backend",
    highlights: ["Triage Automation", "Scalable Database Design", "Encrypted Patient Data"],
  },
  {
    id: "alumni-tracking",
    title: "Alumni Tracking System",
    role: "Frontend Developer",
    description: "An interactive administrative coordination portal tailored for universities, enabling administrative staff to verify credentials, monitor professional placement achievements, and publish academic networking events.",
    contributions: [
      "Developed fully responsive customer-facing and coordinator user interfaces from scratch.",
      "Structured rapid verification patterns and multi-level filtration matching mechanisms to search through historical alumni databases.",
      "Integrated client-side state engines with Node.js and PostgreSQL backend microservice channels, boosting cross-origin responsive rendering."
    ],
    techStack: ["React.js", "Material UI", "PostgreSQL", "Node.js", "Express", "REST APIs"],
    category: "Frontend",
    githubUrl: "https://github.com/Harinirpm/Alumini_Tracking_System",
    highlights: ["Advanced Verification Grid", "Alumni Mapping", "Optimized Query Filters"],
  }
];

export const experiences: ExperienceItem[] = [
  {
    id: "avasoft",
    role: "Trainee Engineer",
    company: "Avasoft",
    duration: "September 2025 – May 2026",
    description: [
      "Gained hands-on experience with Amazon Connect and designed intelligent call routing workflows for efficient customer support.",
      "Worked on Amazon Lex slot based interaction and Amazon Q to improve conversational AI responses and enhance customer experience.",
      "Developed language-based, channel-based, and skill-based routing flows to automatically direct customer interactions to the appropriate agents.",
      "Worked extensively with ServiceNow Incident Management, Customer Service Management (CSM), and Field Service Management (FSM).",
      "Implemented scripting and automation for incident auto-assignment and customer case resolution workflows."
    ],
    skills: ["Amazon Connect", "Amazon Lex", "Amazon Q", "ServiceNow CSM", "PostgreSQL", "Python", "FastAPI", "Postgres"]
  },
  {
    id: "bit-trainer",
    role: "Student Trainer",
    company: "Bannari Amman Institute of Technology",
    duration: "August 2025",
    description: [
      "Served as a Student Trainer, mentoring junior students through hands-on programming sessions.",
      "Conducted practical coding sessions focusing on C programming fundamentals, problem-solving, and programming logic.",
      "Assisted students in understanding core programming concepts and developing confidence in coding."
    ],
    skills: ["C Programming", "Mentoring", "Problem Solving", "Communication", "Leadership"]
  },
  {
    id: "crayond",
    role: "Web Development Workshop",
    company: "Crayon'd Digital Pvt. Ltd.",
    duration: "September 2024 – December 2024",
    description: [
      "Successfully completed an industry-oriented web development workshop conducted by Crayon'd.",
      "Gained robust hands-on experience in building responsive web applications using modern frontend technologies.",
      "Worked on React.js projects involving Redux state management, Material UI components, API integration, Git workflows, and collaborative development practices.",
      "Developed reusable UI components and implemented responsive designs for better user experience."
    ],
    skills: ["React.js", "Redux", "Material UI", "REST APIs", "JavaScript", "HTML", "CSS", "Git", "GitHub"]
  }
];

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Artificial Intelligence & Data Science",
    institution: "Bannari Amman Institute of Technology",
    duration: "2022 – 2026",
    cgpa: "8.25",
    skills: [
      "Operating Systems",
      "DBMS",
      "Data Structures & Algorithms",
      "Computer Networks",
      "Object-Oriented Programming",
      "Artificial Intelligence",
      "Machine Learning",
      "Data Science",
      "Software Engineering",
    ],
    description: "Built a solid foundational understanding of core theoretical computer sciences, systems engineering, and modern data-driven intelligence paradigms. Supplemented theoretical curriculums with practical project development, internal student hackathons, and technical consulting training."
  },
  {
    degree: "Higher Secondary Course (HSC)",
    field: "Computer Science & Mathematics",
    institution: "KOM Girls Higher Secondary School",
    duration: "2020 – 2022",
    cgpa: "86.3",
    skills: [
      "Mathematics",
      "Biology",
      "Physics",
      "Chemistry"
    ],
    description: "Completed higher secondary education with a major in Biology, Mathematics, and Physical Sciences, securing high honors."
  }
];

export const skillsCategories: SkillCategory[] = [
  {
    title: "Languages",
    iconName: "Code2",
    skills: ["Java", "Python", "C", "SQL"]
  },
  {
    title: "Frontend Development",
    iconName: "Layout",
    skills: ["React.js", "HTML5", "CSS3", "JavaScript", "Redux", "Material UI", "Tailwind CSS"]
  },
  {
    title: "Backend & Frameworks",
    iconName: "Cpu",
    skills: ["Spring Boot", "RESTful APIs", "JPA / Hibernate", "JWT Authentication", "FastAPI"]
  },
  {
    title: "Databases & Platforms",
    iconName: "Database",
    skills: ["MySQL", "PostgreSQL", "Amazon Connect", "ServiceNow", "AWS"]
  },
  {
    title: "Core Computer Science",
    iconName: "BookOpen",
    skills: ["Data Structures & Algorithms", "DBMS", "Operating Systems", "Computer Networks", "OOP"]
  },
  {
    title: "Technical Specializations",
    iconName: "Sparkles",
    skills: ["Java Development", "Full Stack Development", "Artificial Intelligence", "Machine Learning", "Workflow Automation"]
  },
  {
    title: "Soft Skills & Leadership",
    iconName: "Users",
    skills: ["Problem Solving", "Team Collaboration", "Adaptability", "Communication", "Leadership", "Quick Learning"]
  }
];

export const certifications: Certification[] = [
  {
    title: "AI Fundamentals Credential",
    issuer: "Google",
    date: "2026"
  },
  {
    title: "Object-Oriented Programming in Java",
    issuer: "Coding Ninjas",
    date: "2024"
  },
  {
    title: "Data Structures and Algorithms in Java",
    issuer: "Infosys Springboard",
    date: "2024"
  }
];

export const achievements: Achievement[] = [
  {
    title: "Grand Finalist (Top 12 National Finalist Teams)",
    event: "MCS Innovators Arena 2025",
    place: "Finalist",
    year: "2025"
  },
  {
    title: "Third Place Winner",
    event: "Internal Coding Competition-BIT",
    place: "3rd Place",
    year: "2023"
  },
  {
    title: "Student Instructor - Web Workshops",
    event: "Bannari Amman Institute Mentorship Drive",
    place: "Lead Trainer",
    year: "2025"
  }
];
