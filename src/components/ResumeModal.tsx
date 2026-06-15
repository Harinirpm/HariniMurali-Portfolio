/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Mail, Github, Linkedin, Printer, Download, Check, Sparkles } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      // Generate clean plain text / HTML resume file dynamically
      const resumeText = `
========================================
HARINI M - SOFTWARE ENGINEER RESUME
========================================
Email: harinirangammal4@gmail.com
LinkedIn: linkedin.com (Harini M)
GitHub: github.com/harinim

SUMMARY:
Passionate Artificial Intelligence & Data Science B.Tech graduate with hands-on experience
building scalable backend systems in Spring Boot, secure JWT APIs, and responsive frontends in React.
Expertise in Amazon Connect solutions, ServiceNow automation, and full-stack software development.

EDUCATION:
Bachelor of Technology (B.Tech) - Artificial Intelligence & Data Science (2022 - 2026)
Bannari Amman Institute of Technology | CGPA: 8.25

Higher Secondary Course (HSC) - Biology - Mathematics (2020 - 2022)
KOM Girls Higher Secondary School | Percentage: 86.3

PRACTICAL EXPERIENCE:
1. Trainee Engineer - Avasoft (Sept 2025 - May 2026)
   - Built Amazon Connect intelligent routing workflows.
   - Designed slot interaction mechanisms with Amazon Lex and Amazon Q.
   - Scripting and automation for ServiceNow Incident Management.
2. Student Trainer - Bannari Amman Institute of Technology (Aug 2025)
   - Instructed C programming fundamentals and problem solving.
3. Web Development Graduate - Crayon'd Digital Workshop (Sept 2024 - Dec 2024)
   - Specialized in React.js, Redux State Management, and Material UI integrations.

PROJECTS:
1. Cosmetics E-Commerce Platform (Full Stack Developer) - Spring Boot, React, MySQL, JWT, JPA
2. Blood Buddy Platform (Backend Developer) - Spring Boot, Java, MySQL, JWT
3. Alumni Tracking System (Frontend Developer) - React.js, Material UI, PostgreSQL, Node.js

TECHNICAL SKILLS:
- Languages: Java, Python, C, SQL
- Frontend: React.js, Redux, Material UI, HTML5, CSS3, JavaScript
- Backend & DB: Spring Boot, RESTful APIs, JPA/Hibernate, MySQL, PostgreSQL
- Tools: Git, ServiceNow, Amazon Connect, Postman, VS Code
========================================
      `;

      const blob = new Blob([resumeText], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Harini_M_Software_Engineer_Resume.txt";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setDownloading(false);
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 3000);
    }, 1200);
  };

  const handlePrint = () => {
    window.print();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-stone-950/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col z-10 print:rounded-none print:border-none print:shadow-none print:max-h-none print:p-0"
        >
          {/* Header Actions (hidden in print) */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/50 print:hidden">
            <div className="flex items-center space-x-2">
              {/* <Sparkles className="w-5 h-5 text-indigo-500" /> */}
              <h2 className="text-lg font-semibold text-stone-950 dark:text-white">
                Professional Resume
              </h2>
            </div>
            <div className="flex items-center space-x-2">
              {/* Print Button */}
              <button
                onClick={handlePrint}
                className="flex items-center space-x-2 px-3 py-1.5 rounded-lg border border-stone-200 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300 transition-colors text-sm"
                title="Print Resume"
              >
                <Printer className="w-4 h-4" />
                <span className="hidden sm:inline">Print</span>
              </button>

              {/* Download Button */}
              <button
                onClick={handleDownload}
                disabled={downloading}
                className={`flex items-center space-x-2 px-4 py-1.5 rounded-lg text-white font-medium text-sm transition-all shadow-md ${
                  downloaded
                    ? "bg-emerald-600 hover:bg-emerald-700"
                    : "bg-indigo-600 hover:bg-indigo-700 hover:shadow-indigo-500/20"
                }`}
              >
                {downloading ? (
                  <span className="flex items-center space-x-1">
                    <span className="w-2 h-2 rounded-full bg-white animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-2 h-2 rounded-full bg-white animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-2 h-2 rounded-full bg-white animate-bounce"></span>
                  </span>
                ) : downloaded ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Saved!</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Download TXT</span>
                  </>
                )}
              </button>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-500 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Document Content */}
          <div className="flex-1 overflow-y-auto px-8 py-10 print:overflow-visible print:px-0 print:py-0 text-stone-800 dark:text-stone-100 bg-white dark:bg-stone-900">
            <div className="max-w-3xl mx-auto space-y-8 font-sans print:text-black">
              {/* Header */}
              <div className="text-center space-y-2 border-b border-stone-200 dark:border-stone-800 pb-6 print:border-stone-300">
                <h1 className="text-3xl font-bold tracking-tight text-stone-950 dark:text-white print:text-black print:text-3xl">
                  HARINI M
                </h1>
                <p className="text-indigo-600 dark:text-indigo-400 font-medium tracking-wide text-sm print:text-indigo-700 uppercase">
                  B.Tech Artificial Intelligence & Data Science Graduate
                </p>
                <div className="flex flex-wrap items-center justify-center gap-y-1 gap-x-4 text-xs text-stone-500 dark:text-stone-400 print:text-stone-600">
                  <span className="flex items-center space-x-1">
                    <Mail className="w-3.5 h-3.5" />
                    <span>harinirangammal4@gmail.com</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center space-x-1">
                    <Github className="w-3.5 h-3.5" />
                    <span>github.com/harinim</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center space-x-1">
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>linkedin.com</span>
                  </span>
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-2">
                <h3 className="text-xs uppercase font-extrabold tracking-widest text-indigo-500 dark:text-indigo-400 border-b border-stone-150 dark:border-stone-800/80 pb-1">
                  Professional Summary
                </h3>
                <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed print:text-stone-800">
                  Passionate Artificial Intelligence & Data Science engineering graduate with 1+ years of cumulative training and practical internship experiences. Highly skilled in building modular Java/Spring Boot applications, secure JWT RESTful APIs, and responsive React.js dashboards. Expert in design of efficient customer support workflows (Amazon Connect/Lex) and ServiceNow scripting. Highly adaptable problem solver with 300+ competitive programming challenges solved.
                </p>
              </div>

              {/* Experience */}
              <div className="space-y-4">
                <h3 className="text-xs uppercase font-extrabold tracking-widest text-indigo-500 dark:text-indigo-400 border-b border-stone-150 dark:border-stone-800/80 pb-1">
                  Work Experience
                </h3>

                {/* Role 1 */}
                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between font-semibold text-stone-900 dark:text-white print:text-black">
                    <span>Trainee Engineer — Avasoft</span>
                    <span className="text-xs text-stone-500 font-normal">Sept 2025 – May 2026</span>
                  </div>
                  <ul className="list-disc pl-5 text-stone-650 dark:text-stone-300 space-y-1 text-xs print:text-stone-800 leading-relaxed">
                    <li>Developed intelligent cloud contact center routing workflows using Amazon Connect, Lex slot interactions, and Amazon Q.</li>
                    <li>Built auto-assignment, customer case resolution, and operational workflows utilizing ServiceNow CSM, Service Portal, and FSM.</li>
                    <li>Integrated customized secure Python/FastAPI endpoints with PostgreSQL backends.</li>
                  </ul>
                </div>

                {/* Role 2 */}
                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between font-semibold text-stone-900 dark:text-white print:text-black">
                    <span>Student Trainer — Bannari Amman Institute of Technology</span>
                    <span className="text-xs text-stone-500 font-normal">Aug 2025</span>
                  </div>
                  <ul className="list-disc pl-5 text-stone-650 dark:text-stone-300 space-y-1 text-xs print:text-stone-800 leading-relaxed">
                    <li>Led hands-on C programming fundamentals seminars for 80+ junior computer science students.</li>
                  </ul>
                </div>

                {/* Role 3 */}
                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between font-semibold text-stone-900 dark:text-white print:text-black">
                    <span>Web Development Intern — Crayon'd Digital</span>
                    <span className="text-xs text-stone-500 font-normal">Sept 2024 – Dec 2024</span>
                  </div>
                  <ul className="list-disc pl-5 text-stone-650 dark:text-stone-300 space-y-1 text-xs print:text-stone-800 leading-relaxed">
                    <li>Developed responsive UI pages in React.js and integrated multi-layered layouts using Material UI.</li>
                    <li>Implemented state engines with Redux and integrated secured RESTful endpoints, achieving better responsive performance.</li>
                  </ul>
                </div>
              </div>

              {/* Education */}
              <div className="space-y-4">
                <h3 className="text-xs uppercase font-extrabold tracking-widest text-indigo-500 dark:text-indigo-400 border-b border-stone-150 dark:border-stone-800/80 pb-1">
                  Education
                </h3>
                
                {/* College Edu */}
                <div className="space-y-1">
                  <div className="flex justify-between text-sm font-semibold text-stone-900 dark:text-white print:text-black">
                    <span>B.Tech in Artificial Intelligence & Data Science</span>
                    <span className="text-xs text-stone-500 font-normal">2022 – 2026</span>
                  </div>
                  <div className="text-xs text-stone-500 dark:text-stone-400 print:text-stone-600 flex justify-between">
                    <span>Bannari Amman Institute of Technology</span>
                    <span className="font-bold text-indigo-600 dark:text-indigo-400">CGPA: 8.25</span>
                  </div>
                </div>

                {/* School Edu */}
                <div className="space-y-1">
                  <div className="flex justify-between text-sm font-semibold text-stone-900 dark:text-white print:text-black">
                    <span>Higher Secondary Course (HSC)</span>
                    <span className="text-xs text-stone-500 font-normal">2020 – 2022</span>
                  </div>
                  <div className="text-xs text-stone-500 dark:text-stone-400 print:text-stone-600 flex justify-between">
                    <span>KOM Girls Higher Secondary School</span>
                    <span className="font-bold text-indigo-600 dark:text-indigo-400">Percentage: 86.3</span>
                  </div>
                </div>
              </div>

              {/* Projects */}
              <div className="space-y-4">
                <h3 className="text-xs uppercase font-extrabold tracking-widest text-indigo-500 dark:text-indigo-400 border-b border-stone-150 dark:border-stone-800/80 pb-1">
                  Academic & Personal Projects
                </h3>

                {/* Project 1 */}
                <div className="text-sm space-y-1">
                  <div className="flex justify-between font-semibold text-stone-900 dark:text-white print:text-black">
                    <span>Alumni Tracking System (Front end)</span>
                    <span className="text-xs text-stone-400 font-mono">React | Node.js | Express. js | PostgreSQL</span>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-300 print:text-stone-800">
                    Developed an intuitive UI for an Alumni Tracking System with features such as domain-wise alumni search, event sharing, live chat, and discussion forums for students, alumni, and faculty.

                  </p>
                </div>

                {/* Project 2 */}
                <div className="text-sm space-y-1">
                  <div className="flex justify-between font-semibold text-stone-900 dark:text-white print:text-black">
                    <span>Blood Buddy Portal (Backend)</span>
                    <span className="text-xs text-stone-400 font-mono">Java | Spring Boot | MySQL | RESTful APIs</span>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-300 print:text-stone-800">
                    Designed relational databases connecting blood donors with hospital centers using secure JPA integrations and role structures.
                  </p>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="space-y-2">
                <h3 className="text-xs uppercase font-extrabold tracking-widest text-indigo-500 dark:text-indigo-400 border-b border-stone-150 dark:border-stone-800/80 pb-1">
                  Technical Expertise
                </h3>
                <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs">
                  <div>
                    <span className="font-bold">Languages: </span>
                    <span className="text-stone-600 dark:text-stone-400 print:text-stone-850">Java, Python, C, SQL</span>
                  </div>
                  <div>
                    <span className="font-bold">Frontend: </span>
                    <span className="text-stone-600 dark:text-stone-400 print:text-stone-850">React.js, Redux, Material UI, CSS3, JS</span>
                  </div>
                  <div>
                    <span className="font-bold">Backend & DB: </span>
                    <span className="text-stone-600 dark:text-stone-400 print:text-stone-850">Spring Boot, Hibernate, JPA, MySQL, PostgreSQL</span>
                  </div>
                  <div>
                    <span className="font-bold">Platforms: </span>
                    <span className="text-stone-600 dark:text-stone-400 print:text-stone-850">ServiceNow Connect, Git, Postman, AWS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
