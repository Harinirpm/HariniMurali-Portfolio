/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";

import ParticleBackground from "./components/ParticleBackground";
import CustomCursor from "./components/CustomCursor";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import EducationSection from "./components/EducationSection";
import ProjectsSection from "./components/ProjectsSection";
import CertificationsSocials from "./components/CertificationsSocials";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ResumeModal from "./components/ResumeModal";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Synchronize document classes list to trigger Tailwind dark-themed states
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <>
      {/* Loading Screen Overlay */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main Content Layout */}
      {!isLoading && (
        <div className="font-sans min-h-screen text-stone-900 dark:text-stone-100 transition-colors duration-1000 overflow-x-hidden selection:bg-indigo-500 selection:text-white">
          {/* Custom Follower Cursor */}
          <CustomCursor />

          {/* Interactive Particle Network Background */}
          <ParticleBackground isDark={isDark} />

          {/* Sticky Navigation Header */}
          <Navbar
            isDark={isDark}
            toggleTheme={() => setIsDark(!isDark)}
            onOpenResume={() => setIsResumeOpen(true)}
          />

          {/* Core Content sections */}
          <main className="relative z-10 w-full" text-15px>
            <HeroSection onOpenResume={() => setIsResumeOpen(true)} />
            <AboutSection />
            <ExperienceSection />
            <SkillsSection />
            <EducationSection />
            <ProjectsSection />
            <CertificationsSocials />
            <ContactSection />
          </main>

          {/* Trademark Footer */}
          <Footer />

          {/* Interactive Printable Résumé Portal */}
          <ResumeModal
            isOpen={isResumeOpen}
            onClose={() => setIsResumeOpen(false)}
          />
        </div>
      )}
    </>
  );
}
