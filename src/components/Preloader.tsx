"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setLoading(false);
      return;
    }

    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        const step = Math.floor(Math.random() * 15) + 8;
        return Math.min(prev + step, 100);
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[10000] flex flex-col justify-between p-8 md:p-14 bg-[#08080a] text-white select-none pointer-events-none"
        >
          {/* Top telemetry */}
          <div className="flex justify-between items-center text-xs font-mono text-neutral-400">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d4ff00] animate-pulse" />
              PORTFOLIO_SYSTEM_INIT
            </span>
            <span>INDEX // 2026</span>
          </div>

          {/* Center Name typography */}
          <div className="my-auto">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter uppercase font-heading"
              >
                {portfolioData.personal.name}
              </motion.h1>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-[#d4ff00] font-mono text-sm sm:text-base mt-2 tracking-widest uppercase"
            >
              // {portfolioData.personal.role}
            </motion.p>
          </div>

          {/* Bottom Counter & progress line */}
          <div className="space-y-4">
            <div className="flex justify-between items-end font-mono">
              <span className="text-xs text-neutral-500 uppercase tracking-wider">
                LOADING ASSETS & SHADERS
              </span>
              <span className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
                {percent}<span className="text-xs text-[#d4ff00] ml-1">%</span>
              </span>
            </div>
            <div className="w-full h-[1px] bg-neutral-800 overflow-hidden">
              <motion.div
                className="h-full bg-[#d4ff00]"
                style={{ width: `${percent}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
