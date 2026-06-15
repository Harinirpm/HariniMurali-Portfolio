/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React from "react";
import { motion } from "motion/react";
import {
  Code2,
  Layout,
  Cpu,
  Database,
  BookOpen,
  Sparkles,
  Users,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import { skillsCategories } from "../data";

// Map string keys to Lucide React components to dynamically load icons securely
const iconMap: Record<string, React.ComponentType<any>> = {
  Code2: Code2,
  Layout: Layout,
  Cpu: Cpu,
  Database: Database,
  BookOpen: BookOpen,
  Sparkles: Sparkles,
  Users: Users,
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-white dark:bg-black">
      {/* Decorative ambient blurred nodes */}
      <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title Elements */}
        <div className="text-center mb-16 space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold tracking-wider uppercase font-mono">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Technical arsenal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans tracking-tight text-stone-900 dark:text-white">
            Skills & Expertise
          </h2>
          <p className="text-sm text-stone-500 max-w-lg mx-auto">
            A comprehensive mapping of my programming capabilities, backend architecture proficiency, and design frameworks.
          </p>
          <div className="h-1 w-20 bg-indigo-500 rounded-full mx-auto mt-2" />
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsCategories.map((category, idx) => {
            const Icon = iconMap[category.iconName] || Code2;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                className="p-6 rounded-2xl border border-stone-200 dark:border-stone-850 bg-white/55 dark:bg-stone-900/40 backdrop-blur-md shadow-sm hover:shadow-md hover:border-indigo-500/20 dark:hover:border-indigo-500/30 hover:bg-stone-50 dark:hover:bg-stone-900/55 transition-all duration-300 flex flex-col group relative"
              >
                {/* Visual decoration top right */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-indigo-500/5 to-transparent rounded-tr-2xl" />

                {/* Card Title Header with Icon */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 transition-colors group-hover:bg-indigo-550 group-hover:text-white">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>
                  <h3 className="text-md font-bold text-stone-900 dark:text-stone-100 font-sans tracking-tight leading-none group-hover:text-indigo-650 dark:group-hover:text-indigo-350 transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Skills tags container */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="interactive-hover flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-stone-100/50 dark:bg-stone-950/70 text-[14px] font-semibold text-stone-700 dark:text-stone-300 border border-stone-150 dark:border-stone-850 hover:bg-white dark:hover:bg-stone-900 hover:text-indigo-600 dark:hover:text-indigo-400 dark:hover:shadow-indigo-500/5 dark:hover:shadow-sm hover:border-indigo-500/30 transition-all duration-200 cursor-default "
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500/60 dark:text-indigo-400/45 shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
