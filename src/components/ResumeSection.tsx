"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ArrowDownToLine, ExternalLink, FileText, CheckCircle2 } from "lucide-react";

export default function ResumeSection() {
  return (
    <section
      id="resume"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 border-t border-[var(--border-subtle)] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[var(--border-subtle)] pb-6">
          <div>
            <span className="font-mono text-xs text-[#d4ff00] tracking-widest uppercase">
              06 // DOSSIER
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[var(--text-primary)] mt-1">
              CURRICULUM VITAE
            </h2>
          </div>
          <span className="font-mono text-xs text-[var(--text-muted)]">
            VERSION 2026.04 • UPDATED RECENTLY
          </span>
        </div>

        {/* Resume Preview & Download Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Context & Actions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#d4ff00]">
              <FileText size={16} />
              <span>OFFICIAL CANDIDACY FILE</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-heading font-black text-[var(--text-primary)] leading-tight">
              Looking for a comprehensive summary of my career achievements?
            </h3>

            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              My resume outlines full engineering deliverables, client case studies, academic transcripts, and patent applications. Available in high-resolution PDF format optimized for ATS ingestion and human review.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={portfolioData.personal.resumeUrl}
                download="Saaras_Bisht_Resume.pdf"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider bg-[#d4ff00] text-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#d4ff00]/15"
                data-cursor="pointer"
              >
                <ArrowDownToLine size={15} />
                <span>DOWNLOAD RESUME (PDF)</span>
              </a>

              <a
                href={portfolioData.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full font-mono text-xs font-medium uppercase tracking-wider border border-[var(--border-subtle)] text-[var(--text-primary)] hover:bg-[var(--border-subtle)] transition-colors"
                data-cursor="pointer"
              >
                <span>OPEN PREVIEW</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>

          {/* Right Column: High-Fidelity Tactical Document Preview */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="relative p-6 sm:p-10 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-2xl space-y-6 font-mono text-xs"
            >
              {/* Top document bar */}
              <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4 text-[var(--text-muted)]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="ml-2 font-mono text-[11px] text-[var(--text-primary)]">saaras_bisht_cv_2026.pdf</span>
                </div>
                <span className="text-[#d4ff00] text-[10px]">100% PARSEABLE</span>
              </div>

              {/* Document Header */}
              <div className="space-y-1 text-left">
                <h4 className="text-xl sm:text-2xl font-black font-heading tracking-tight text-[var(--text-primary)]">
                  {portfolioData.personal.name}
                </h4>
                <p className="text-[#d4ff00] text-xs">
                  {portfolioData.personal.role}
                </p>
                <p className="text-[11px] text-[var(--text-muted)]">
                  {portfolioData.personal.email} • {portfolioData.personal.location}
                </p>
              </div>

              {/* Core Strengths */}
              <div className="space-y-2 border-t border-[var(--border-subtle)] pt-4">
                <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">// CORE EXECUTIVE HIGHLIGHTS</div>
                <div className="space-y-2 text-[var(--text-secondary)] text-[12px] font-sans">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={13} className="text-[#d4ff00] mt-0.5 shrink-0" />
                    <span>Proven track record architecting high-throughput distributed web systems (250k+ events/sec).</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={13} className="text-[#d4ff00] mt-0.5 shrink-0" />
                    <span>Pioneered interactive GPU-accelerated frontend experiences maintaining 99.8% Lighthouse perf audits.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={13} className="text-[#d4ff00] mt-0.5 shrink-0" />
                    <span>Magna Cum Laude in Computer Science from UC Berkeley with graphics TA experience.</span>
                  </div>
                </div>
              </div>

              {/* Action pill in document */}
              <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px]">
                <span className="text-[var(--text-muted)]">READY FOR INGESTION</span>
                <span className="text-[#d4ff00] font-bold">SHA256: 4f98e2...a12c</span>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
