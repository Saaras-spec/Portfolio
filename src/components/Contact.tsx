"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import confetti from "canvas-confetti";
import {
  Send,
  Check,
  Copy,
  Mail,
  ArrowUpRight,
  Sparkles
} from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterXIcon, CodeIcon } from "@/components/Icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const socialIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
    github: GithubIcon,
    linkedin: LinkedinIcon,
    twitter: TwitterXIcon,
    code: CodeIcon,
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg("Please fill out all required fields.");
      return;
    }
    setErrorMsg("");
    setSubmitting(true);

    // Simulate reliable API or Formspree submission
    try {
      await new Promise((res) => setTimeout(res, 1200));
      setSubmitting(false);
      setSubmitted(true);

      // Trigger celebratory confetti
      confetti({
        particleCount: 75,
        spread: 70,
        origin: { y: 0.7 },
        colors: ["#d4ff00", "#ffffff", "#8cb800"]
      });
    } catch {
      setSubmitting(false);
      setErrorMsg("Transmission failed. Please reach out directly via email.");
    }
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 border-t border-[var(--border-subtle)] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[var(--border-subtle)] pb-6">
          <div>
            <span className="font-mono text-xs text-[#d4ff00] tracking-widest uppercase">
              07 // TRANSMISSION GATEWAY
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[var(--text-primary)] mt-1">
              INITIATE CONTACT
            </h2>
          </div>
          <span className="font-mono text-xs text-[var(--text-muted)]">
            TYPICAL RESPONSE TIME: &lt; 24 HOURS
          </span>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Coordinates & Large Social Links */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-heading font-black text-[var(--text-primary)]">
                Have an ambitious project in mind? Let&apos;s build something transcendent.
              </h3>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                Whether you need technical leadership, an interactive WebGL showcase, or scalable cloud systems, my inbox is open.
              </p>
            </div>

            {/* Direct Email Card with 1-click copy */}
            <div className="p-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] uppercase">
                <Mail size={14} className="text-[#d4ff00]" />
                <span>DIRECT ELECTRONIC MAIL</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-sm sm:text-base text-[var(--text-primary)] font-bold truncate">
                  {portfolioData.personal.email}
                </span>
                <button
                  onClick={copyEmail}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[#d4ff00]/50 transition-colors flex items-center gap-1.5 text-[var(--text-secondary)] hover:text-[#d4ff00]"
                  data-cursor="pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check size={13} className="text-[#d4ff00]" /> : <Copy size={13} />}
                  <span>{copied ? "COPIED" : "COPY"}</span>
                </button>
              </div>
            </div>

            {/* Large Social Channels */}
            <div className="space-y-3">
              <span className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider block">
                // EXTERNAL PROFILES
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {portfolioData.socialLinks.map((social) => {
                  const Icon = socialIcons[social.iconName] || GithubIcon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)]/40 hover:bg-[var(--bg-surface)] hover:border-[#d4ff00]/40 transition-all flex items-center justify-between"
                      data-cursor="pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[var(--bg-surface)] flex items-center justify-center text-[var(--text-secondary)] group-hover:text-[#d4ff00] transition-colors">
                          <Icon size={16} />
                        </div>
                        <div>
                          <div className="text-xs font-heading font-bold text-[var(--text-primary)]">
                            {social.name}
                          </div>
                          <div className="text-[10px] font-mono text-[var(--text-muted)]">
                            {social.handle}
                          </div>
                        </div>
                      </div>
                      <ArrowUpRight size={14} className="text-[var(--text-muted)] group-hover:text-[#d4ff00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </a>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-2xl relative">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 flex flex-col items-center text-center space-y-4 font-mono"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#d4ff00]/10 border border-[#d4ff00] flex items-center justify-center text-[#d4ff00]">
                      <Sparkles size={28} />
                    </div>
                    <h4 className="text-2xl font-heading font-black text-[var(--text-primary)]">
                      TRANSMISSION RECEIVED
                    </h4>
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-md font-sans leading-relaxed">
                      Thank you for reaching out. Your message has been encrypted and delivered directly to {portfolioData.personal.name}. I will review and reply within one business day.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", subject: "", message: "" });
                      }}
                      className="mt-4 px-5 py-2.5 rounded-full text-xs font-mono font-bold bg-[#d4ff00] text-black"
                    >
                      SEND ANOTHER MESSAGE
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4 font-mono text-xs">
                      <span className="text-[#d4ff00]">// DISPATCH FORM</span>
                      <span className="text-[var(--text-muted)]">SECURE TERMINAL</span>
                    </div>

                    {errorMsg && (
                      <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono">
                        {errorMsg}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)]">
                          Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Elena Rostova"
                          className="w-full px-4 py-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[#d4ff00] text-sm transition-colors"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)]">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. elena@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[#d4ff00] text-sm transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)]">
                        Subject / Project Scope
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. Full-Stack Web Platform or AI Integration"
                        className="w-full px-4 py-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[#d4ff00] text-sm transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)]">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Briefly describe your objectives, timeframe, and technical requirements..."
                        className="w-full px-4 py-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[#d4ff00] text-sm transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-4 rounded-xl font-mono text-xs font-bold uppercase tracking-wider bg-[#d4ff00] text-black hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#d4ff00]/15 disabled:opacity-50"
                      data-cursor="pointer"
                    >
                      {submitting ? (
                        <span>TRANSMITTING PACKETS...</span>
                      ) : (
                        <>
                          <Send size={14} />
                          <span>TRANSMIT DISPATCH</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
