/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // Position of custom cursor
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Position of dot offset by +12 to center the 8px dot inside the 32px ring
  const dotX = useTransform(cursorX, (val) => val + 12);
  const dotY = useTransform(cursorY, (val) => val + 12);

  // Smooth springs
  const springConfig = { damping: 30, stiffness: 350, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Detect mobile touch capability
    const checkDevice = () => {
      const mobile = window.matchMedia("(max-width: 768px)").matches || 
                     ("ontouchstart" in window) || 
                     (navigator.maxTouchPoints > 0);
      setIsMobile(mobile);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16); // Center the 32px ring
      cursorY.set(e.clientY - 16);
      if (!isVisible) setIsVisible(true);
    };

    const handleHoverStart = () => setIsHovered(true);
    const handleHoverEnd = () => setIsHovered(false);

    window.addEventListener("mousemove", handleMouseMove);

    // Attach hover listeners to interactives
    const addListeners = () => {
      const interactives = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, .interactive-hover'
      );
      interactives.forEach((el) => {
        el.addEventListener("mouseenter", handleHoverStart);
        el.addEventListener("mouseleave", handleHoverEnd);
      });
    };

    // Periodically update listeners to catch dynamically loaded interactive elements
    const interval = setInterval(addListeners, 1000);
    addListeners();

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
      
      const interactives = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, .interactive-hover'
      );
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
      });
    };
  }, [cursorX, cursorY, isVisible, isMobile]);

  if (isMobile || !isVisible) return null;

  return (
    <>
      {/* Outer follow ring */}
      <motion.div
        id="custom-cursor-follower"
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-indigo-500/80 pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          scale: isHovered ? 1.6 : 1,
          backgroundColor: isHovered ? "rgba(99, 102, 241, 0.15)" : "transparent",
        }}
        transition={{ type: "spring", damping: 30, stiffness: 350 }}
      />
      {/* Inner dot */}
      <motion.div
        id="custom-cursor-dot"
        className="fixed top-0 left-0 w-2 h-2 bg-indigo-400 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: dotX,
          y: dotY,
        }}
        // Track visual hover state smoothly with scale modifier
        animate={{
          scale: isHovered ? 0.5 : 1,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 350 }}
      />
    </>
  );
}
