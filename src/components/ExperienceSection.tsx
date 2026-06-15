/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Briefcase, Calendar, Building, Sparkles, Pin } from "lucide-react";
import { experiences } from "../data";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-stone-50/40 dark:bg-stone-950/20">
      {/* Decorative vertical light beam on the left */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20 space-y-2">
          {/* <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold tracking-wider uppercase font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Industrial timeline</span>
          </div> */}
          <h2 className="text-3xl sm:text-4xl font-bold font-sans tracking-tight text-stone-900 dark:text-white">
            Work Experience
          </h2>
          <div className="h-1 w-20 bg-indigo-500 rounded-full mx-auto mt-2" />
        </div>

        {/* Timeline Engine - Left aligned */}
        <div className="max-w-4xl mx-auto relative border-l-2 border-indigo-500/20 pl-6 sm:pl-10 space-y-12">
          {experiences.map((exp, eIdx) => (
            <div
              key={exp.id}
              className="relative"
              id={`timeline-item-${exp.id}`}
            >
              {/* Timeline node circle indicator */}
              <div className="absolute -left-[32px] sm:-left-[48px] top-6 w-5 h-5 rounded-full bg-indigo-600 border-4 border-stone-100 dark:border-stone-950 shadow flex items-center justify-center z-10">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping" />
              </div>

              <div className="w-full">
                <ExperienceCard exp={exp} isEven={false} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface ExperienceCardProps {
  exp: typeof experiences[0];
  isEven: boolean;
}

function ExperienceCard({ exp, isEven }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`p-6 sm:p-8 rounded-2xl border border-stone-200 dark:border-stone-850 bg-white/70 dark:bg-stone-900/60 backdrop-blur-md hover:bg-white dark:hover:bg-stone-900 shadow-lg hover:shadow-xl hover:border-indigo-500/30 dark:hover:border-indigo-500/30 transition-all duration-350 relative text-left`}
    >
      {/* Decorative gradient glow corner */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-indigo-500/5 to-transparent rounded-tr-2xl pointer-events-none" />

      {/* Title & Duration Details */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 border-b border-stone-100 dark:border-stone-850/60 pb-4 mb-4">
        <div>
          <h3 className="text-lg font-bold font-sans text-stone-950 dark:text-white leading-tight">
            {exp.role}
          </h3>
          <div className="flex items-center space-x-2 text-sm text-indigo-600 dark:text-indigo-400 font-semibold mt-1">
            <Building className="w-3.5 h-3.5" />
            <span>{exp.company}</span>
          </div>
        </div>

        <div className="flex items-center space-x-1.5 text-xs text-stone-500 dark:text-stone-400 font-medium font-mono bg-stone-100 dark:bg-stone-950/55 px-2.5 py-1 rounded-full self-start">
          <Calendar className="w-3 h-3" />
          <span>{exp.duration}</span>
        </div>
      </div>

      {/* Bullet descriptions */}
      <ul className="space-y-2 mb-6">
        {exp.description.map((bullet, i) => (
          <li key={i} className="flex items-start text-14px text-stone-600 dark:text-stone-300 leading-relaxed">
            <span className="text-indigo-500 dark:text-indigo-400 font-bold mr-2 mt-0.5">•</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      {/* Skill Pills used details */}
      <div className="space-y-2">
        <h4 className="text-[10px] uppercase font-extrabold tracking-widest text-stone-450 dark:text-stone-500 font-mono">
          Specialized Skillset
        </h4>
        <div className="flex flex-wrap gap-1.5">
          {exp.skills.map((skill) => (
            <span
              key={skill}
              className="text-[11px] font-medium font-mono px-2.5 py-1 rounded-md bg-stone-100 dark:bg-stone-950 text-stone-600 dark:text-stone-400 border border-stone-150 dark:border-stone-850 hover:border-indigo-500/30 hover:bg-indigo-500/5 hover:text-indigo-650 dark:hover:text-indigo-350 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
