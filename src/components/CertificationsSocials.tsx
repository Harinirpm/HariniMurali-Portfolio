/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Award, Trophy, ArrowUpRight, Github, Linkedin, Code, Layers, FileText, Globe, Terminal, Sparkles, BookOpen } from "lucide-react";
import { certifications, achievements } from "../data";

const profiles = [
  {
    name: "LinkedIn",
    domain: "linkedin.com/in/harinirpm",
    color: "hover:border-blue-500/40 hover:bg-blue-500/5 hover:text-blue-600 dark:hover:text-blue-400",
    icon: Linkedin,
    description: "Professional updates, articles, and industry network connections."
  },
  {
    name: "GitHub",
    domain: "github.com/harinirpm",
    color: "hover:border-indigo-500/40 hover:bg-indigo-500/5 hover:text-indigo-600 dark:hover:text-indigo-400",
    icon: Github,
    description: "Source code repository containing cosmetics platforms and blood buddys."
  },
  {
    name: "LeetCode",
    domain: "leetcode.com/u/harinimr",
    color: "hover:border-amber-500/40 hover:bg-amber-500/5 hover:text-amber-600 dark:hover:text-amber-400",
    icon: Code,
    description: "300+ Solved algorithmic challenges focused on Java arrays, lists & OOP."
  },
  {
    name: "GeeksforGeeks",
    domain: "geeksforgeeks.org/profile/harinirano0yb",
    color: "hover:border-emerald-500/40 hover:bg-emerald-500/5 hover:text-emerald-605 dark:hover:text-emerald-400",
    icon: BookOpen,
    description: "System structures lookup, DBMS schemas practice, and core reviews."
  },
  {
    name: "HackerRank",
    domain: "hackerrank.com/profile/harinirangammal4",
    color: "hover:border-pink-500/40 hover:bg-pink-500/5 hover:text-pink-600 dark:hover:text-pink-450",
    icon: Terminal,
    description: "Procedural language validation badges and fundamental problem solving."
  },
  {
    name: "Medium Publication",
    domain: "medium.com/@devnotesbyharini",
    color: "hover:border-stone-500/40 hover:bg-stone-500/5 hover:text-stone-900 dark:hover:text-stone-300",
    icon: FileText,
    description: "Occasional technical notes focusing on system script flows and cloud support."
  },
];

export default function CertificationsSocials() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-stone-50/40 dark:bg-stone-950/20">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16 space-y-2">
          {/* <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold tracking-wider uppercase font-mono">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials & Standing</span>
          </div> */}
          <h2 className="text-3xl sm:text-4xl font-bold font-sans tracking-tight text-stone-900 dark:text-white">
            Certifications & Profiles
          </h2>
          <div className="h-1 w-20 bg-indigo-500 rounded-full mx-auto mt-2" />
        </div>

        {/* 2 Column Layout: Left Column Certificates & Achievements, Right Column Profiles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Certifications & Achievements (7 grid cols space) */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Certifications Card Sub-group */}
            <div className="space-y-4">
              <h3 className="text-xs uppercase font-extrabold tracking-widest text-stone-450 dark:text-stone-500 font-mono flex items-center space-x-2">
                <Award className="w-4 h-4 text-indigo-500" />
                <span>Verify Credential Badges</span>
              </h3>

              <div className="space-y-4">
                {certifications.map((cert) => (
                  <motion.div
                    key={cert.title}
                    whileHover={{ scale: 1.01 }}
                    className="p-5 rounded-2xl border border-stone-200 dark:border-stone-850 bg-white/70 dark:bg-stone-900/40 backdrop-blur-md flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                        <Award className="w-5 h-5" />
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="text-sm font-bold text-stone-950 dark:text-white leading-tight">
                          {cert.title}
                        </h4>
                        <p className="text-xs text-stone-500 dark:text-stone-400">
                          Issued by {cert.issuer}
                        </p>
                      </div>
                    </div>
                    {cert.date && (
                      <span className="text-[10px] font-mono font-bold text-stone-400 dark:text-stone-500 bg-stone-100 dark:bg-stone-950 px-2 py-0.5 rounded">
                        {cert.date}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Achievements Card Sub-group */}
            <div className="space-y-4">
              <h3 className="text-xs uppercase font-extrabold tracking-widest text-stone-450 dark:text-stone-500 font-mono flex items-center space-x-2">
                <Trophy className="w-4 h-4 text-amber-500" />
                <span>Major Achievements & Awards</span>
              </h3>

              <div className="space-y-4">
                {achievements.map((ach) => (
                  <motion.div
                    key={ach.title}
                    whileHover={{ scale: 1.01 }}
                    className="p-5 rounded-2xl border border-stone-200 dark:border-stone-850 bg-white/70 dark:bg-stone-900/40 backdrop-blur-md flex items-start space-x-4"
                  >
                    <div className="p-3 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 mt-0.5">
                      <Trophy className="w-5 h-5 animate-pulse" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <h4 className="text-sm font-bold text-stone-950 dark:text-white leading-tight">
                          {ach.title}
                        </h4>
                        {ach.place && (
                          <span className="text-[9px] uppercase tracking-wide px-2 py-0.5 rounded bg-amber-500/10 text-amber-705 dark:text-amber-400 font-extrabold">
                            {ach.place}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-stone-605 dark:text-stone-350">
                        {ach.event}
                      </p>
                      <p className="text-[10px] text-stone-400 dark:text-stone-500 font-mono">
                        Conferred in {ach.year}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Social / Coding Profiles Directories (5 grid cols space) */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xs uppercase font-extrabold tracking-widest text-stone-450 dark:text-stone-500 font-mono flex items-center space-x-2">
              <Globe className="w-4 h-4 text-indigo-500" />
              <span>Interactive Directories</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {profiles.map((profile) => {
                const ProfileIcon = profile.icon;

                return (
                  <a
                    key={profile.name}
                    href={`https://${profile.domain}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-5 rounded-2xl border border-stone-200 dark:border-stone-850 bg-white/80 dark:bg-stone-900/30 backdrop-blur-md transition-all duration-300 flex flex-col justify-between group h-full cursor-pointer hover:shadow-md ${profile.color}`}
                  >
                    <div className="space-y-4">
                      {/* Icon header representation */}
                      <div className="flex justify-between items-center">
                        <div className="p-2.5 rounded-xl bg-stone-100 dark:bg-stone-950 text-stone-600 dark:text-stone-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                          <ProfileIcon className="w-5 h-5 stroke-[1.8]" />
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-stone-400 opacity-60 group-hover:opacity-100 group-hover:translate-y-[-2px] group-hover:translate-x-[2px] transition-all" />
                      </div>

                      {/* Header title */}
                      <div className="space-y-1 text-left">
                        <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100 leading-tight">
                          {profile.name}
                        </h4>
                        <p className="text-[11px] font-mono text-stone-400 dark:text-stone-450 line-clamp-1">
                          {profile.domain}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-[12px] text-stone-500 dark:text-stone-355 leading-relaxed text-left line-clamp-2">
                        {profile.description}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
