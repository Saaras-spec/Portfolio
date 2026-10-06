"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import { Project } from "@/types/portfolio";
import ProjectModal from "./ProjectModal";
import { ExternalLink, ArrowUpRight, Maximize2 } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 border-t border-[var(--border-subtle)] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[var(--border-subtle)] pb-6">
          <div>
            <span className="font-mono text-xs text-[#d4ff00] tracking-widest uppercase">
              03 // SELECTED ARCHIVE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[var(--text-primary)] mt-1">
              ENGINEERED WORKS
            </h2>
          </div>
          <span className="font-mono text-xs text-[var(--text-muted)]">
            CLICK CARD FOR ARCHITECTURAL SPECS
          </span>
        </div>

        {/* Asymmetric Project Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {portfolioData.projects.map((project, idx) => {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[#d4ff00]/50 transition-all duration-500 overflow-hidden flex flex-col justify-between cursor-pointer"
                data-cursor="view"
                data-cursor-text="VIEW"
              >
                {/* Visual Image Preview with Zoom */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-900 border-b border-[var(--border-subtle)]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 600px"
                  />
                  
                  {/* Subtle vignette & scanline */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-surface)] via-transparent to-transparent opacity-80" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase bg-black/60 backdrop-blur-md text-[#d4ff00] border border-[#d4ff00]/30">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-black/60 backdrop-blur-md text-white/70 border border-white/10">
                      {project.year}
                    </span>
                  </div>

                  {/* Hover Inspect Icon */}
                  <div className="absolute bottom-4 right-4 z-10 w-9 h-9 rounded-full bg-[#d4ff00] text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 shadow-lg">
                    <Maximize2 size={16} />
                  </div>
                </div>

                {/* Card Info & Meta */}
                <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-heading font-bold text-xl sm:text-2xl text-[var(--text-primary)] group-hover:text-[#d4ff00] transition-colors flex items-center gap-2">
                        <span>{project.title}</span>
                        <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#d4ff00]" />
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#d4ff00] font-mono">
                      {project.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags & Action Links */}
                  <div className="space-y-4 pt-4 border-t border-[var(--border-subtle)]">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-secondary)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 pt-1" onClick={(e) => e.stopPropagation()}>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[var(--text-primary)] hover:text-[#d4ff00] transition-colors"
                          data-cursor="pointer"
                        >
                          <span>LIVE DEMO</span>
                          <ExternalLink size={12} />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                          data-cursor="pointer"
                        >
                          <GithubIcon size={12} />
                          <span>SOURCE</span>
                        </a>
                      )}
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="ml-auto text-xs font-mono text-[#d4ff00] hover:underline"
                        data-cursor="pointer"
                      >
                        SPECS →
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Deep-dive Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
