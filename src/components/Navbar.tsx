/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, FileText, Sparkles, Code2 } from "lucide-react";

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
  onOpenResume: () => void;
}

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({ isDark, toggleTheme, onOpenResume }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Calculate general page scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // 2. Set scroll background effect threshold
      setIsScrolled(window.scrollY > 20);

      // 3. Track active section
      const scrollPosition = window.scrollY + 200; // Offset for focus
      const sections = navLinks.map((link) => {
        const id = link.href.substring(1);
        const element = document.getElementById(id);
        if (element) {
          return {
            id,
            offsetTop: element.offsetTop,
            offsetHeight: element.offsetHeight,
          };
        }
        return null;
      });

      const current = sections.reduce((acc, section) => {
        if (!section) return acc;
        if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          return section.id;
        }
        return acc;
      }, "home");

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger initial on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      id="main-navigation-bar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-stone-900/80 dark:bg-black/75 backdrop-blur-md border-b border-stone-200/50 dark:border-stone-850 shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      {/* Scroll Progress Bar Indicator */}
      <div className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 transition-all duration-75" style={{ width: `${scrollProgress}%` }} />

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / Name */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, "#home")}
          className="flex items-center space-x-2 text-stone-950 dark:text-white group"
        >
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold transition-transform group-hover:scale-105 shadow-md shadow-indigo-500/20">
            <Code2 className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-sm font-sans leading-none">Harini M</span>
            <span className="text-[10px] text-stone-500 dark:text-indigo-400/80 font-mono tracking-wider font-semibold">
              SOFTWARE_ENG
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                activeSection === link.href.substring(1)
                  ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-500/10 font-semibold"
                  : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-900"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Global CTA actions */}
        <div className="hidden md:flex items-center space-x-3">
          {/* Theme switcher */}
          <button
            onClick={toggleTheme}
            id="theme-switch-btn-desktop"
            className="p-2 rounded-lg border border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-white hover:bg-stone-50 dark:hover:bg-stone-900 transition-colors"
            title={isDark ? "Switch to light theme" : "Switch to dark theme"}
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-indigo-500" />}
          </button>

          {/* Interactive Resume View Action */}
          <button
            onClick={onOpenResume}
            className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm px-4 py-2 rounded-lg transition-all shadow-md shadow-indigo-500/10 hover:shadow-indigo-500/25 cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>Interactive Resume</span>
          </button>
        </div>

        {/* Mobile controls bar */}
        <div className="flex items-center space-x-2 md:hidden">
          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            id="theme-switch-btn-mobile"
            className="p-2 rounded-lg border border-stone-200 dark:border-stone-850 text-stone-650 dark:text-stone-450 hover:bg-stone-105 transition-colors"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-indigo-500" />}
          </button>

          {/* Hamburger Menu Toggler */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg border border-stone-200 dark:border-stone-850 text-stone-800 dark:text-stone-200"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-white dark:bg-stone-950 border-b border-stone-200 dark:border-stone-850 shadow-xl py-6 px-6 space-y-4 animate-in fade-in slide-in-from-top-5 duration-250">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`px-4 py-2 rounded-lg text-base font-medium transition-colors ${
                  activeSection === link.href.substring(1)
                    ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 font-semibold"
                    : "text-stone-700 dark:text-stone-350 hover:bg-stone-50 dark:hover:bg-stone-900"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-stone-100 dark:border-stone-900">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-all"
            >
              <FileText className="w-4 h-4" />
              <span>Interactive Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
