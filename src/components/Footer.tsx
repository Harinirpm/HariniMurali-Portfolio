/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { ArrowUp, Github, Linkedin, Heart, Coffee, Mail } from "lucide-react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer id="footer-container" className="py-12 border-t border-stone-200 dark:border-stone-850 bg-stone-50 dark:bg-stone-950/70 relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Social / Email Links in Footer */}
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/harinirpm"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg border border-stone-200 dark:border-stone-800 text-stone-500 hover:text-indigo-650 dark:hover:text-indigo-400 hover:bg-stone-100 dark:hover:bg-stone-900 transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/harinirpm/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg border border-stone-200 dark:border-stone-800 text-stone-500 hover:text-indigo-650 dark:hover:text-indigo-400 hover:bg-stone-100 dark:hover:bg-stone-900 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:harinirangammal4@gmail.com"
            className="p-2 rounded-lg border border-stone-200 dark:border-stone-800 text-stone-500 hover:text-indigo-650 dark:hover:text-indigo-400 hover:bg-stone-100 dark:hover:bg-stone-900 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Dynamic Credit Line */}
        <div className="text-center text-xs text-stone-500 dark:text-stone-400 flex items-center justify-center space-x-1.5 flex-wrap">
          <span>© 2026 Harini M</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 animate-pulse fill-rose-500 shrink-0" />
          <span></span>
          <Coffee className="w-3.5 h-3.5 text-amber-650 shrink-0" />
          <span></span>
        </div>

        {/* Small version brand */}
        <div className="text-stone-400 dark:text-stone-600 font-mono text-[10px] uppercase font-bold tracking-wider">
          {/* PORTFOLIO_V1.04_FIN */}
        </div>
      </div>

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-indigo-600 hover:bg-indigo-750 text-white rounded-full shadow-xl shadow-indigo-600/20 hover:shadow-indigo-605/30 transition-all hover:translate-y-[-4px] z-30 cursor-pointer animate-in fade-in zoom-in-50 duration-200"
          title="Scroll Back To Top"
        >
          <ArrowUp className="w-4 h-4 text-white" />
        </button>
      )}
    </footer>
  );
}
