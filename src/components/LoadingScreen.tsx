/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LoadingScreenProps {
  onComplete: () => void;
  key?: string;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [stageText, setStageText] = useState("Initializing workspace...");

  useEffect(() => {
    // Stage messages
    const stages = [
      { max: 25, text: "Compiling computer science fundamentals..." },
      { max: 55, text: "Warming up Spring Boot backend services..." },
      { max: 80, text: "Refining AI and Machine Learning models..." },
      { max: 95, text: "Loading interactive CSS nodes and assets..." },
      { max: 100, text: "Ready!" },
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 8) + 2;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 600); // Small gap for full state satisfaction
          return 100;
        }

        // Find relevant text stage
        const matchingStage = stages.find((s) => next <= s.max);
        if (matchingStage) {
          setStageText(matchingStage.text);
        }

        return next;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      id="loading-viewport"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 bg-stone-950 z-[9999] flex flex-col items-center justify-center text-white px-6 font-mono"
    >
      <div className="max-w-md w-full space-y-6">
        {/* Decorative brackets */}
        <div className="flex justify-between text-xs text-indigo-500/60 font-semibold tracking-wider">
          {/* <span>PORTFOLIO_OS [v1.0.4]</span>
          <span>SYSTEM_INIT_OK</span> */}
        </div>

        {/* Branding header */}
        <div className="space-y-1">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold tracking-tight text-white font-sans"
          >
            HARINI M
          </motion.h1>
          {/* <p className="text-xs text-stone-400 font-mono">
            B.Tech Artificial Intelligence & Data Science
          </p> */}
        </div>

        {/* Progress Bar Container */}
        <div className="space-y-2">
          <div className="h-1 w-full bg-stone-800 rounded-full overflow-hidden relative">
            <motion.div
              className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>

          <div className="flex justify-between items-center text-xs text-stone-400">
            <span className="animate-pulse">{stageText}</span>
            <span className="font-bold text-indigo-400">{progress}%</span>
          </div>
        </div>

        {/* System lines */}
        {/* <div className="pt-4 border-t border-stone-800/60 text-[10px] text-stone-600 space-y-1">
          <p>&gt; java -version: "openjdk 21.0.2"</p>
          <p>&gt; spring-boot-run: OK (port: 3000)</p>
          <p>&gt; modules loaded: React 19, Tailwind CSS v4, Motion</p>
        </div> */}
      </div>
    </motion.div>
  );
}
