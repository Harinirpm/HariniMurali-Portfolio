/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { GraduationCap, Calendar, Award, BookOpen, Star, Sparkles } from "lucide-react";
import { education } from "../data";

export default function EducationSection() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-stone-50/20 dark:bg-stone-950/40">
      {/* Decorative shapes */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Elements */}
        <div className="text-center mb-16 space-y-2">
          {/* <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold tracking-wider uppercase font-mono">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic background</span>
          </div> */}
          <h2 className="text-3xl sm:text-4xl font-bold font-sans tracking-tight text-stone-900 dark:text-white">
            Academic background
          </h2>
          <div className="h-1 w-20 bg-indigo-500 rounded-full mx-auto mt-2" />
        </div>

        {/* Timeline container */}
        <div className="max-w-4xl mx-auto relative border-l-2 border-indigo-500/20 pl-6 sm:pl-10 space-y-12">
          {education.map((edu, eIdx) => (
            /* Education entry */
            <div key={edu.degree} className="relative">
              {/* Timeline node */}
              <div className="absolute -left-[32px] sm:-left-[48px] top-1.5 w-5 h-5 rounded-full bg-indigo-600 border-4 border-stone-100 dark:border-stone-950 shadow flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping" />
              </div>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: eIdx * 0.15 }}
                className="p-6 sm:p-8 rounded-2xl border border-stone-200 dark:border-stone-850 bg-white/70 dark:bg-stone-900/50 backdrop-blur-md hover:bg-white dark:hover:bg-stone-900 shadow-xl transition-all duration-300 relative"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                  <GraduationCap className="w-32 h-32 text-indigo-500" />
                </div>

                {/* Course details Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 border-b border-stone-100 dark:border-stone-850/60 pb-4 mb-5">
                  <div className="space-y-1">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-750 dark:text-indigo-300">
                      {edu.degree.includes("B.Tech") ? "Undergraduate Degree" : "Higher Secondary Education"}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-stone-950 dark:text-white font-sans">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                      {edu.field}
                    </p>
                    <p className="text-stone-550 dark:text-stone-400 text-sm">
                      {edu.institution}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end gap-2 shrink-0">
                    <div className="flex items-center space-x-1.5 text-xs font-bold font-mono text-stone-500 dark:text-stone-400 bg-stone-100 dark:bg-stone-950 px-3 py-1 rounded-full w-fit">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{edu.duration}</span>
                    </div>

                    <div className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/10 text-emerald-750 dark:text-emerald-400 w-fit">
                      <Star className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                      <span className="text-sm font-extrabold font-sans">
                        {edu.cgpa.includes("%") ? `${edu.cgpa}` : `CGPA ${edu.cgpa}`}
                      </span>
                      {!edu.cgpa.includes("%") && (
                        <span className="text-[10px] text-emerald-550 dark:text-emerald-500/10 mt-0.5">/ 10</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Overview Description */}
                <p className="text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed mb-8">
                  {edu.description}
                </p>

                {/* Key Learning areas grid */}
                <div className="space-y-4">
                  <h4 className="text-xs uppercase font-extrabold tracking-widest text-stone-450 dark:text-stone-550 font-mono flex items-center space-x-2">
                    <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
                    <span>Key Focus Modules</span>
                  </h4>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {edu.skills.map((subject) => (
                      <div
                        key={subject}
                        className="p-3 rounded-xl bg-stone-100/50 dark:bg-stone-950/65 border border-stone-150 dark:border-stone-850 hover:border-indigo-500/20 hover:bg-white dark:hover:bg-stone-950/90 text-[14px] text-stone-750 dark:text-stone-300 font-semibold transition-all duration-150 shadow-sm"
                      >
                        <div className="flex items-center space-x-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                          <span>{subject}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
