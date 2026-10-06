"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Briefcase, GraduationCap, MapPin, Calendar, CheckCircle2 } from "lucide-react";

export default function Timeline() {
  const [filter, setFilter] = useState<"all" | "experience" | "education">("all");

  const filteredItems = filter === "all"
    ? portfolioData.timeline
    : portfolioData.timeline.filter((item) => item.type === filter);

  return (
    <section
      id="experience"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 border-t border-[var(--border-subtle)] relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto w-full space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[var(--border-subtle)] pb-6">
          <div>
            <span className="font-mono text-xs text-[#d4ff00] tracking-widest uppercase">
              04 // CHRONICLE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[var(--text-primary)] mt-1">
              EXPERIENCE & EDUCATION
            </h2>
          </div>
          
          {/* Toggle filter */}
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
            <button
              onClick={() => setFilter("all")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-colors ${
                filter === "all"
                  ? "bg-[#d4ff00] text-black font-semibold"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
              data-cursor="pointer"
            >
              ALL
            </button>
            <button
              onClick={() => setFilter("experience")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-colors ${
                filter === "experience"
                  ? "bg-[#d4ff00] text-black font-semibold"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
              data-cursor="pointer"
            >
              CAREER
            </button>
            <button
              onClick={() => setFilter("education")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-colors ${
                filter === "education"
                  ? "bg-[#d4ff00] text-black font-semibold"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
              data-cursor="pointer"
            >
              ACADEMIC
            </button>
          </div>
        </div>

        {/* Vertical Timeline Tree */}
        <div className="relative pl-6 sm:pl-10 space-y-12 before:absolute before:left-[11px] sm:before:left-[19px] before:top-3 before:bottom-3 before:w-[2px] before:bg-gradient-to-b before:from-[#d4ff00] before:via-[var(--border-subtle)] before:to-transparent">
          <AnimatePresence>
            {filteredItems.map((item, idx) => {
              const isExperience = item.type === "experience";
              const Icon = isExperience ? Briefcase : GraduationCap;

              return (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline Node Icon */}
                  <div className="absolute -left-[30px] sm:-left-[43px] top-1 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[var(--bg-surface)] border-2 border-[#d4ff00] flex items-center justify-center text-[#d4ff00] group-hover:scale-110 group-hover:bg-[#d4ff00] group-hover:text-black transition-all shadow-[0_0_12px_rgba(212,255,0,0.3)]">
                    <Icon size={12} />
                  </div>

                  {/* Timeline Card */}
                  <div className="p-6 sm:p-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[#d4ff00]/40 transition-colors space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-4">
                      <div>
                        <span className="font-mono text-xs text-[#d4ff00] uppercase tracking-wider">
                          // {item.organization}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold font-heading text-[var(--text-primary)] mt-0.5">
                          {item.role}
                        </h3>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <Calendar size={13} className="text-[#d4ff00]" />
                          {item.period}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin size={13} />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {item.description}
                    </p>

                    {/* Accomplishments */}
                    <div className="space-y-2 pt-1">
                      {item.accomplishments.map((acc, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                          <CheckCircle2 size={14} className="text-[#d4ff00] mt-0.5 shrink-0" />
                          <span>{acc}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech & Competency Tags */}
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-[var(--border-subtle)]">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-secondary)]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
