/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FolderGit2, Github, ExternalLink, ArrowRight, X, Sparkles, CheckCircle2, Cpu, Laptop, Layers } from "lucide-react";
import { projects } from "../data";
import { Project } from "../types";

export default function ProjectsSection() {
  const [filter, setFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", "Full Stack", "Backend", "Frontend"];

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-white dark:bg-black">
      {/* Background gradients */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Elements */}
        <div className="text-center mb-16 space-y-2">
          {/* <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold tracking-wider uppercase font-mono">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Finished deployments</span>
          </div> */}
          <h2 className="text-3xl sm:text-4xl font-bold font-sans tracking-tight text-stone-900 dark:text-white">
            Projects
          </h2>
          <p className="text-sm text-stone-500 max-w-lg mx-auto">
            {/* A selective compilation of products designed to link front-end interactions with transaction-safe databases. */}
          </p>
          <div className="h-1 w-20 bg-indigo-500 rounded-full mx-auto mt-2" />
        </div>

        {/* Categories Toolbar Filter */}
        <div className="flex justify-center items-center gap-1.5 md:gap-2.5 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-[15px] font-semibold transition-all ${
                filter === cat
                  ? "bg-indigo-600 border border-indigo-600 text-white shadow-md shadow-indigo-550/15"
                  : "bg-stone-50 hover:bg-stone-100 dark:bg-stone-950/60 dark:hover:bg-stone-900 text-stone-605 dark:text-stone-350 border border-stone-200 dark:border-stone-850"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layoutId={`card-container-${project.id}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="p-6 rounded-2xl border border-stone-200 dark:border-stone-850 bg-white dark:bg-stone-900/40 backdrop-blur-md shadow-lg flex flex-col justify-between group hover:border-indigo-500/30 dark:hover:border-indigo-500/30 hover:bg-slate-50/10 dark:hover:bg-stone-900 transition-all duration-300 relative overflow-hidden h-full"
              >
                {/* Decorative absolute blur */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-indigo-500/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

                <div className="space-y-4">
                  {/* Card category tags */}
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-mono text-[10px] uppercase font-bold text-indigo-600 dark:text-indigo-400">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-semibold text-stone-500 dark:text-stone-400 bg-stone-100 dark:bg-stone-950 px-2.5 py-1 rounded-full">
                      {project.role}
                    </span>
                  </div>

                  {/* Project Description Header */}
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-stone-950 dark:text-white font-sans group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[15px] text-stone-500 dark:text-stone-350 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Highlights overview */}
                  <div className="flex flex-wrap gap-1">
                    {project.highlights.map((h) => (
                      <span key={h} className="text-[12px] font-medium text-indigo-750 dark:text-indigo-300 bg-indigo-500/5 border border-indigo-500/10 rounded px-2 py-0.5">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 pt-6 border-t border-stone-100 dark:border-stone-850/60 mt-6">
                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[12px] font-medium font-mono text-stone-500 bg-stone-100 dark:bg-stone-950 dark:text-stone-400 px-2 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Link Bars */}
                  <div className="flex items-center justify-between text-xs pt-1">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center space-x-1 font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-750 dark:hover:text-indigo-300 group/link"
                    >
                      <span>Architectural Breakdowns</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </button>

                    <div className="flex items-center space-x-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-lg border border-stone-200 dark:border-stone-800 hover:bg-stone-100 dark:hover:bg-stone-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        title="GitHub Files"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Structured Detailed Modal Panel Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-55 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-stone-950/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden shadow-2xl flex flex-col z-10 text-stone-800 dark:text-stone-200"
            >
              <div className="px-6 py-4 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between bg-stone-50 dark:bg-stone-900/50">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-indigo-500" />
                  <span className="text-sm font-extrabold font-mono text-stone-500 dark:text-stone-400">
                    PROJECT ARCHITECTURE
                  </span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-stone-950 dark:text-white font-sans">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5">
                    Role: {selectedProject.role} ({selectedProject.category})
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs uppercase font-extrabold tracking-widest text-stone-400 font-mono">
                    Overview Description
                  </h4>
                  <p className="text-xs leading-relaxed text-stone-600 dark:text-stone-300">
                    {selectedProject.description}
                  </p>
                </div>

                {selectedProject.contributions && (
                  <div className="space-y-3">
                    <h4 className="text-xs uppercase font-extrabold tracking-widest text-stone-400 font-mono">
                      Engineering Contributions
                    </h4>
                    <div className="space-y-2">
                      {selectedProject.contributions.map((bullet, i) => (
                        <div key={i} className="flex items-start text-xs leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-14px text-indigo-500 mr-2 z-10 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-stone-150 dark:border-stone-800">
                  <div className="space-y-1.5">
                    <h5 className="text-[10px] uppercase font-extrabold tracking-widest text-stone-400 font-mono">
                      Technology Stack
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-medium font-mono px-2 py-0.5 bg-stone-100 dark:bg-stone-950 dark:text-stone-400 rounded border border-stone-200 dark:border-stone-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* <div className="space-y-1.5">
                    <h5 className="text-[10px] uppercase font-extrabold tracking-widest text-stone-400 font-mono">
                      Simulated Environment status
                    </h5>
                    <div className="flex items-center space-x-2 text-xs">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="font-mono text-emerald-600 dark:text-emerald-400 font-semibold uppercase">
                        Currently working..
                      </span>
                    </div>
                  </div> */}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
