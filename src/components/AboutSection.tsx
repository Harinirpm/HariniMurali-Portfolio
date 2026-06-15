/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Sparkles, Calendar, Code, Laptop, Heart, Database, Shield, Zap, RefreshCw } from "lucide-react";

const stats = [
  {
    value: "1+ Years",
    label: "Practical Experience",
    sub: "Industry internships & workshops",
    color: "from-blue-500 to-indigo-500",
  },
  {
    value: "3+ Projects",
    label: "Core Full-Stack Builds",
    sub: "E-Commerce & Donor portals",
    color: "from-purple-500 to-pink-500",
  },
  {
    value: "300+",
    label: "Leetcodes Solved",
    sub: "Java & C problem solving",
    color: "from-amber-500 to-orange-500",
  },
  {
    value: "AI & Full Stack",
    label: "Deep Enthusiasm",
    sub: "Specialized B.Tech graduate",
    color: "from-emerald-500 to-teal-500",
  },
];

const currentFocus = [
  {
    title: "Java & Spring Boot Backend",
    desc: "Developing secure REST architecture, transactional databases, and solid microservice enclaves using JPA/Hibernate.",
    icon: CpuIcon,
  },
  {
    title: "Database Design & Secure Auth",
    desc: "Constructing custom relational schema, index tuning in MySQL and Postgres, and deploying JWT/RBAC role validations.",
    icon: Database,
  },
  {
    title: "AI & ML",
    desc: "Connecting language engines, skill-based contact workflows (Amazon Connect), and slot interactive models.",
    icon: Sparkles,
  },
  {
    title: "Full Stack Web Engineering",
    desc: "Composing pristine component states in React, optimized Redux routines, and layouts styled with Tailwind CSS.",
    icon: Laptop,
  },
];

function CpuIcon(props: any) {
  return <Zap {...props} />;
}

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Title */}
        <div className="text-center md:text-left mb-16 space-y-2">
          {/* <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold tracking-wider uppercase font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Discover my journey</span>
          </div> */}
          <h2 className="text-3xl sm:text-4xl font-bold font-sans tracking-tight text-stone-900 dark:text-white">
            About Me
          </h2>
          <div className="h-1 w-20 bg-indigo-500 rounded-full mx-auto md:mx-0 mt-2" />
        </div>

        {/* Elegant Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: About Content */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold font-sans tracking-tight text-stone-950 dark:text-stone-100">
              Passionate B.Tech AI & Data Science Graduate from Bannari Amman Institute of Technology
            </h3>

            <p className="text-stone-600 dark:text-stone-300 text-base leading-relaxed">
              I am a dedicated software engineer and B.Tech graduate in <strong>Artificial Intelligence & Data Science</strong> with extensive hands-on experience designing, building, and deploying applications across both backend and frontend environments. I hold a strong passion for developing robust, scalable backend infrastructures and reactive client user interfaces.
            </p>

            <p className="text-stone-600 dark:text-stone-300 text-base leading-relaxed">
              Throughout my academic career, I focused on core computer science foundations – data structures, operating systems, and databases. I've supplemented theory with practical industry-oriented bootcamps, collaborative projects, and intensive technical workshops.
            </p>

            <div className="p-5 rounded-xl border border-stone-200/60 dark:border-indigo-500/15 bg-stone-50/50 dark:bg-stone-900/40 relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 p-3 text-indigo-500/10 pointer-events-none">
                <Heart className="w-24 h-24 stroke-[1.5]" />
              </div>
              <p className="text-stone-700 dark:text-stone-300 text-[16px] leading-relaxed relative z-10 italic">
                “I enjoy translating complex business logic into high-performance source code and continually exploring modern tech stacks. My ultimate goal is to craft secure systems that solve real-world industry bottlenecks with technical elegance.”
              </p>
            </div>
          </div>

          {/* Right Column: Current Focus formatted in Box Format as requested */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 rounded-2xl border border-stone-200 dark:border-stone-800 bg-white/70 dark:bg-stone-900/65 backdrop-blur-md shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl" />
              
              <h4 className="text-md font-bold text-stone-950 dark:text-white mb-5 uppercase tracking-wider font-mono flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse" />
                <span>My Current Focus Areas</span>
              </h4>

              <div className="space-y-4">
                {currentFocus.map((focus, index) => {
                  const Icon = focus.icon;
                  return (
                    <div
                      key={index}
                      className="p-4 rounded-xl border border-stone-100 dark:border-stone-850 hover:border-indigo-500/30 dark:hover:border-indigo-500/30 bg-stone-50/40 dark:bg-stone-950/40 hover:bg-stone-50 dark:hover:bg-stone-900/50 transition-all duration-300"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-650 dark:text-indigo-400">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="space-y-1">
                          <h5 className="text-sm font-semibold text-stone-900 dark:text-stone-100">
                            {focus.title}
                          </h5>
                          {/* <p className="text-xs text-stone-550 dark:text-stone-400 leading-relaxed">
                            {focus.desc}
                          </p> */}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Animated Statistics Cards Row */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-6 rounded-2xl border border-stone-200 dark:border-stone-850 bg-white/40 dark:bg-stone-900/30 backdrop-blur-sm hover:translate-y-[-4px] transition-transform duration-300 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className={`text-2xl sm:text-3xl font-extrabold font-sans bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </span>
                <p className="text-sm font-bold text-stone-900 dark:text-stone-100 leading-tight">
                  {stat.label}
                </p>
              </div>
              <p className="text-[12px] text-stone-500 dark:text-stone-450 mt-2 font-mono">
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
