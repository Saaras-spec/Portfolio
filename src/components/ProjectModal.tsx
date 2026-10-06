"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Project } from "@/types/portfolio";
import { X, ExternalLink, Sparkles, CheckCircle } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-2xl p-6 sm:p-8 z-10 space-y-6"
        >
          {/* Header Controls */}
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#d4ff00] tracking-widest uppercase">
                // {project.category}
              </span>
              <span className="text-[var(--text-muted)] text-xs font-mono">• {project.year}</span>
            </div>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="w-8 h-8 rounded-full border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-secondary)] hover:text-white hover:bg-[var(--border-subtle)] transition-colors"
              data-cursor="pointer"
            >
              <X size={16} />
            </button>
          </div>

          {/* Project Preview Image */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden border border-[var(--border-subtle)] bg-neutral-900">
            <Image
              src={project.image}
              alt={project.title}
              fill
              unoptimized
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 900px"
            />
          </div>

          {/* Title & Tagline */}
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-4xl font-heading font-black text-[var(--text-primary)]">
              {project.title}
            </h2>
            <p className="font-mono text-xs sm:text-sm text-[#d4ff00]">
              {project.subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            {project.longDescription || project.description}
          </p>

          {/* Stats Metrics (if available) */}
          {project.stats && project.stats.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              {project.stats.map((stat, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
                  <div className="text-xs font-mono text-[var(--text-muted)] uppercase">{stat.label}</div>
                  <div className="text-base sm:text-lg font-bold font-mono text-[#d4ff00] mt-0.5">{stat.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* Architectural Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-3 pt-2">
              <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--text-primary)] flex items-center gap-2">
                <Sparkles size={14} className="text-[#d4ff00]" />
                Key Technical Innovations
              </h4>
              <div className="space-y-2">
                {project.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                    <CheckCircle size={15} className="text-[#d4ff00] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Tags */}
          <div className="space-y-2 pt-2">
            <div className="font-mono text-xs text-[var(--text-muted)] uppercase">Architecture Stack:</div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-secondary)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[var(--border-subtle)]">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider bg-[#d4ff00] text-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#d4ff00]/15"
                data-cursor="pointer"
              >
                <span>VISIT DEPLOYMENT</span>
                <ExternalLink size={14} />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-medium uppercase tracking-wider border border-[var(--border-subtle)] text-[var(--text-primary)] bg-[var(--bg-surface)] hover:bg-[var(--border-subtle)] transition-colors"
                data-cursor="pointer"
              >
                <GithubIcon size={14} />
                <span>INSPECT SOURCE CODE</span>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
