"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Layout, Server, Sparkles, Terminal, CheckCircle2 } from "lucide-react";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categoryIcons: Record<string, typeof Layout> = {
    "Frontend & Creative Tech": Layout,
    "Backend & Systems": Server,
    "AI, Data & Machine Learning": Sparkles,
    "DevOps & Tooling": Terminal,
  };

  const filteredCategories = activeCategory === "all"
    ? portfolioData.skills
    : portfolioData.skills.filter((c) => c.category === activeCategory);

  return (
    <section
      id="skills"
      className="py-24 sm:py-32 border-t border-[var(--border-subtle)] relative overflow-hidden"
    >
      {/* Infinite Animated Marquee Ribbon */}
      <div className="w-full overflow-hidden border-y border-[var(--border-subtle)] bg-[var(--bg-surface)] py-4 select-none mb-20">
        <div className="flex w-max animate-marquee space-x-8 items-center font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)]">
          {[...portfolioData.marqueeSkills, ...portfolioData.marqueeSkills].map((item, idx) => (
            <div key={idx} className="flex items-center space-x-8">
              <span className="hover:text-[#d4ff00] transition-colors">{item}</span>
              <span className="text-[#d4ff00] text-sm">✦</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[var(--border-subtle)] pb-6">
          <div>
            <span className="font-mono text-xs text-[#d4ff00] tracking-widest uppercase">
              02 // CAPABILITIES & ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[var(--text-primary)] mt-1">
              THE TECH STACK
            </h2>
          </div>
          <p className="text-sm text-[var(--text-secondary)] max-w-sm">
            Curated engineering competencies organized by architectural layer. No vanity metrics or arbitrary percentage bars.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 pt-2">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-full font-mono text-xs tracking-wider uppercase transition-all duration-200 ${
              activeCategory === "all"
                ? "bg-[#d4ff00] text-black font-bold shadow-md shadow-[#d4ff00]/10"
                : "bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            }`}
            data-cursor="pointer"
          >
            All Disciplines
          </button>
          {portfolioData.skills.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className={`px-4 py-2 rounded-full font-mono text-xs tracking-wider uppercase transition-all duration-200 ${
                activeCategory === cat.category
                  ? "bg-[#d4ff00] text-black font-bold shadow-md shadow-[#d4ff00]/10"
                  : "bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
              data-cursor="pointer"
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filteredCategories.map((categoryGroup) => {
              const Icon = categoryIcons[categoryGroup.category] || Terminal;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={categoryGroup.category}
                  className="p-7 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[#d4ff00]/40 transition-colors flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-[#d4ff00]/10 flex items-center justify-center text-[#d4ff00]">
                          <Icon size={18} />
                        </div>
                        <h3 className="font-heading font-bold text-lg text-[var(--text-primary)]">
                          {categoryGroup.category}
                        </h3>
                      </div>
                      <span className="font-mono text-xs text-[var(--text-muted)]">
                        {categoryGroup.skills.length} TOOLS
                      </span>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      {categoryGroup.description}
                    </p>
                  </div>

                  {/* Skills badges */}
                  <div className="grid grid-cols-2 sm:grid-cols-2 gap-2.5 pt-2">
                    {categoryGroup.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group flex items-center justify-between p-2.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[#d4ff00]/40 transition-all"
                      >
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={13} className="text-[#d4ff00] opacity-80" />
                          <span className="text-xs font-medium text-[var(--text-primary)]">
                            {skill.name}
                          </span>
                        </div>
                        <span className="font-mono text-[10px] text-[var(--text-muted)] group-hover:text-[#d4ff00] transition-colors">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
