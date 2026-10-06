"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Award, ExternalLink, ShieldCheck } from "lucide-react";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 border-t border-[var(--border-subtle)] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[var(--border-subtle)] pb-6">
          <div>
            <span className="font-mono text-xs text-[#d4ff00] tracking-widest uppercase">
              05 // ACCREDITATIONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[var(--text-primary)] mt-1">
              LICENSES & CREDENTIALS
            </h2>
          </div>
          <span className="font-mono text-xs text-[var(--text-muted)]">
            INDUSTRY VERIFIED
          </span>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioData.certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group p-6 sm:p-7 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[#d4ff00]/40 transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                    style={{ backgroundColor: `${cert.badgeColor || '#d4ff00'}22`, color: cert.badgeColor || '#d4ff00' }}
                  >
                    <Award size={20} />
                  </div>
                  <span className="font-mono text-xs text-[var(--text-muted)]">
                    {cert.issueDate}
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="font-mono text-[11px] text-[#d4ff00] uppercase tracking-wider">
                    {cert.issuer}
                  </span>
                  <h3 className="font-heading font-bold text-lg text-[var(--text-primary)] group-hover:text-[#d4ff00] transition-colors leading-snug">
                    {cert.title}
                  </h3>
                </div>

                {cert.credentialId && (
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-[var(--text-muted)] bg-[var(--bg-card)] px-3 py-1.5 rounded-lg border border-[var(--border-subtle)]">
                    <ShieldCheck size={13} className="text-[#d4ff00]" />
                    <span>ID: {cert.credentialId}</span>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)]">
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs text-[var(--text-secondary)] hover:text-[#d4ff00] transition-colors"
                  data-cursor="pointer"
                >
                  <span>VERIFY CREDENTIAL</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
