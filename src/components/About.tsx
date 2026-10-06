"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Cpu, Compass, Layers, ShieldCheck } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const tenets = [
    {
      icon: Cpu,
      title: "Sub-Millisecond Speed",
      desc: "Optimizing bundle budgets, memory allocations, and paint lifecycles for fluid 60fps."
    },
    {
      icon: Layers,
      title: "Visual Architecture",
      desc: "Crafting interfaces that possess tactile weight, dynamic typography, and architectural coherence."
    },
    {
      icon: Compass,
      title: "Scalable Engineering",
      desc: "Resilient TypeScript typings, clean boundary encapsulation, and future-proof systems."
    },
    {
      icon: ShieldCheck,
      title: "Radical Accessibility",
      desc: "Semantic HTML5, ARIA compliance, and full keyboard navigation as first-class priorities."
    }
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 border-t border-[var(--border-subtle)] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[var(--border-subtle)] pb-6">
          <div>
            <span className="font-mono text-xs text-[#d4ff00] tracking-widest uppercase">
              01 // BIOGRAPHY & PHILOSOPHY
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[var(--text-primary)] mt-1">
              THE METHODOLOGY
            </h2>
          </div>
          <span className="font-mono text-xs text-[var(--text-muted)]">
            [PERSPECTIVE & CORE METRICS]
          </span>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left: Bio Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="space-y-6 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-normal"
            >
              {portfolioData.personal.bio.map((paragraph, idx) => (
                <p key={idx} className={idx === 0 ? "text-xl sm:text-2xl text-[var(--text-primary)] font-medium leading-snug" : ""}>
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {/* Tenets Grid */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tenets.map((tenet, idx) => {
                const Icon = tenet.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                    className="p-5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)]/40 hover:border-[#d4ff00]/40 transition-colors space-y-2 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#d4ff00]/10 flex items-center justify-center text-[#d4ff00] group-hover:bg-[#d4ff00] group-hover:text-black transition-colors">
                        <Icon size={16} />
                      </div>
                      <h4 className="font-mono text-xs font-bold text-[var(--text-primary)] uppercase tracking-wide">
                        {tenet.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                      {tenet.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: Key Stats Counters & Current Focus */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Stats Panel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 sm:p-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] space-y-6"
            >
              <div className="flex items-center justify-between font-mono text-xs pb-4 border-b border-[var(--border-subtle)]">
                <span className="text-[#d4ff00] tracking-wider uppercase">// PROVEN IMPACT</span>
                <span className="text-[var(--text-muted)]">VERIFIED</span>
              </div>

              <div className="grid grid-cols-2 gap-6 sm:gap-8">
                {portfolioData.personal.stats.map((stat, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-[var(--text-primary)] tracking-tight">
                      {stat.number}
                    </div>
                    <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Current Focus Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="p-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)]/30 space-y-3"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#d4ff00]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4ff00] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d4ff00]" />
                </span>
                <span className="uppercase tracking-wider">ACTIVE RESEARCH LAB</span>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Exploring multi-agent graph runtimes, low-level WebGPU compute shaders, and Next.js 16 dynamic streaming optimizations.
              </p>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
