/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, ArrowDown, Github, Linkedin, Code, BookOpen, Terminal, FileText, Sparkles, Send, FileCode } from "lucide-react";

interface HeroSectionProps {
  onOpenResume: () => void;
}

const typingWords = [
  "Java Developer",
  "Full Stack Developer",
  "AI Enthusiast"
];

const socialLinks = [
  { href: "https://linkedin.com/in/harinirpm", icon: Linkedin, color: "hover:text-blue-500 hover:border-blue-500/30", name: "LinkedIn" },
  { href: "https://github.com/harinirpm", icon: Github, color: "hover:text-indigo-500 hover:border-indigo-500/30", name: "GitHub" },
  { href: "https://leetcode.com/harinimr", icon: Code, color: "hover:text-amber-500 hover:border-amber-500/30", name: "LeetCode" },
  { href: "https://geeksforgeeks.org/profile/harinirano0yb", icon: BookOpen, color: "hover:text-emerald-500 hover:border-emerald-500/30", name: "GeeksforGeeks" },
  { href: "https://hackerrank.com/profile/harinirangammal4", icon: Terminal, color: "hover:text-pink-500 hover:border-pink-500/30", name: "HackerRank" },
  { href: "https://medium.com/@devnotesbyharini", icon: FileText, color: "hover:text-stone-400 hover:border-stone-400/30", name: "Medium" },
];

export default function HeroSection({ onOpenResume }: HeroSectionProps) {
  const [wordIdx, setWordIdx] = useState(0);
  const [wordPart, setWordPart] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: any;
    const currentWord = typingWords[wordIdx];
    
    const handleTyping = () => {
      if (!isDeleting) {
        setWordPart((prev) => currentWord.substring(0, prev.length + 1));
        if (wordPart === currentWord) {
          timer = setTimeout(() => setIsDeleting(true), 2000); // Wait on complete
        } else {
          timer = setTimeout(handleTyping, 100); // Regular type spacing
        }
      } else {
        setWordPart((prev) => currentWord.substring(0, prev.length - 1));
        if (wordPart === "") {
          setIsDeleting(false);
          setWordIdx((prev) => (prev + 1) % typingWords.length);
          timer = setTimeout(handleTyping, 300); // Wait before next typing starts
        } else {
          timer = setTimeout(handleTyping, 50); // Regular speed backspacing
        }
      }
    };

    timer = setTimeout(handleTyping, isDeleting ? 40 : 100);

    return () => clearTimeout(timer);
  }, [wordPart, isDeleting, wordIdx]);

  const handleContactScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 relative">
        
        {/* Left Side: Copywriting intro block (7 column span) */}
        <div className="lg:col-span-7 text-center lg:text-left space-y-6">
          <div className="space-y-3">
            {/* Header chip */}
            {/* <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-indigo-500/10 text-indigo-650 dark:text-indigo-400 text-xs font-semibold tracking-wider uppercase font-mono w-fit mx-auto lg:mx-0">
              <Sparkles className="w-3.5 h-3.5 fill-indigo-500/20" />
              <span>Available for Placements & Contracts</span>
            </div> */}

            {/* Name and Designation */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-900 dark:text-white font-sans">
              Hi, I am <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">Harini M</span>
            </h1>

            {/* Sub header */}
            <p className="text-stone-500 dark:text-indigo-400/85 font-mono text-xs sm:text-sm font-semibold uppercase tracking-widest leading-none">
              B.Tech Artificial Intelligence & Data Science Graduate
            </p>
          </div>

          {/* Typing Matrix Interface */}
          <div className="h-8 flex items-center justify-center lg:justify-start">
            <span className="text-xl sm:text-2xl font-bold font-sans text-stone-800 dark:text-stone-200">
              I am a{" "}
              <span className="text-indigo-640 dark:text-indigo-400 font-mono border-r-2 border-indigo-500 pr-1 select-all animate-pulse">
                {wordPart}
              </span>
            </span>
          </div>

          {/* Introductory Abstract block */}
          <p className="text-stone-605 dark:text-stone-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
            Passionate about building scalable backend systems, responsive web applications, and AI-powered solutions. Focused on creating impactful digital experiences through modern technologies.
          </p>

          {/* Action trigger Call-To-Actions (CTAs) */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <button
              onClick={onOpenResume}
              className="w-full sm:w-auto flex items-center justify-center space-x-2.5 bg-indigo-600 hover:bg-indigo-705 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all shadow-md shadow-indigo-500/15 hover:shadow-indigo-500/25 hover:translate-y-[-2px] cursor-pointer"
            >
              <FileCode className="w-4.5 h-4.5" />
              <span>Download Resume</span>
            </button>

            <button
              onClick={handleContactScroll}
              className="w-full sm:w-auto flex items-center justify-center space-x-2.5 bg-stone-100 hover:bg-stone-200 dark:bg-stone-900 dark:hover:bg-stone-850 text-stone-800 dark:text-stone-200 font-semibold text-sm px-6 py-3 rounded-xl border border-stone-200 dark:border-stone-800 hover:border-indigo-500/20 transition-all hover:translate-y-[-2px]"
            >
              <Send className="w-4.5 h-4.5 text-indigo-500" />
              <span>Contact Me</span>
            </button>
          </div>

          {/* Left social profiles panel bar */}
          <div className="pt-6 space-y-3">
            <p className="text-[10px] uppercase font-extrabold tracking-widest text-stone-400 dark:text-stone-500 font-mono">
              Network Profiles
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-stone-200 dark:border-stone-850/80 bg-stone-50/50 dark:bg-stone-950/20 text-[15px] font-semibold text-stone-550 dark:text-stone-400 hover:bg-white dark:hover:bg-stone-900 transition-all duration-200 ${social.color}`}
                    title={social.name}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span className="hidden sm:inline">{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Side: Professional floating interactive CSS Neural illustration (5 column span) */}
        <div className="lg:col-span-5 flex items-center justify-center h-full relative py-12">
          
          {/* Orbital circles background and animated layers */}
          <div className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-full border border-stone-200/50 dark:border-indigo-500/10 flex items-center justify-center relative animate-[spin_40s_linear_infinite] pointer-events-none">
            <div className="absolute w-[220px] h-[220px] rounded-full border border-dashed border-stone-300 dark:border-purple-500/15 animate-[spin_20s_linear_infinite_reverse]" />
            <div className="absolute w-[140px] h-[140px] rounded-full border border-stone-200/60 dark:border-indigo-500/20 animate-pulse" />
          </div>

          {/* Interactive Core Cluster */}
          <div className="absolute flex flex-col items-center justify-center pointer-events-auto">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-xl shadow-indigo-550/25 relative animate-[bounce_5s_ease-in-out_infinite]">
              <FileCode className="w-12 h-12 text-white" />
              
              {/* Outer pulsing ring */}
              <div className="absolute inset-0 rounded-3xl border border-white/45 animate-ping opacity-40 pointer-events-none" />
            </div>

            {/* Satellite orbiting float nodes with dynamic tooltips */}
            {/* Satellite 1 */}
            <div className="absolute -top-12 -left-12 sm:-top-16 sm:-left-16 p-2 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-850 shadow-md flex items-center justify-center space-x-1 animate-[bounce_4s_ease-in-out_infinite_1.5s]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
              <span className="text-[10px] font-mono font-bold text-stone-600 dark:text-stone-300 uppercase">
                SPRING_BOOT
              </span>
            </div>

            {/* Satellite 2 */}
            <div className="absolute -bottom-10 -right-10 sm:-bottom-12 sm:-right-12 p-2 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-850 shadow-md flex items-center justify-center space-x-1 animate-[bounce_6s_ease-in-out_infinite_3s]">
              <span className="w-2 h-2 rounded-full bg-indigo-500 shrink-0" />
              <span className="text-[10px] font-mono font-bold text-stone-600 dark:text-stone-300 uppercase">
                REACT.JS
              </span>
            </div>

            {/* Satellite 3 */}
            <div className="absolute bottom-16 -left-16 sm:bottom-20 sm:-left-20 p-2 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-850 shadow-md flex items-center justify-center space-x-1 animate-[bounce_5s_ease-in-out_infinite_4.5s]">
              <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
              <span className="text-[10px] font-mono font-bold text-stone-600 dark:text-stone-300 uppercase">
                AI
              </span>
            </div>
          </div>

          {/* Gradient floating bubbles */}
          <div className="absolute top-2 right-12 w-3.5 h-3.5 rounded-full bg-indigo-400 blur-[1px] animate-pulse" />
          <div className="absolute bottom-12 left-12 w-2.5 h-2.5 rounded-full bg-purple-500 blur-[1px] animate-pulse" />
        </div>

      </div>

      {/* Bounce Anchor footer indicator */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center space-y-1 pointer-events-none">
        <span className="text-[9px] font-mono text-stone-400 dark:text-stone-600 uppercase tracking-widest font-extrabold animate-pulse">
          AUDIT_FLOW_SCROLL
        </span>
        <ArrowDown className="w-4 h-4 text-stone-400 dark:text-stone-600 animate-bounce" />
      </div> */}
    </section>
  );
}
