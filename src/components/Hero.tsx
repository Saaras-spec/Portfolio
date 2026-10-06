"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import HeroCanvas from "./HeroCanvas";
import { ArrowDownRight, Sparkles, Terminal } from "lucide-react";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const win = window as unknown as { __lenis?: { scrollTo: (target: HTMLElement | string) => void } };
    if (win.__lenis) {
      win.__lenis.scrollTo(el);
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const headlineLines = [
    "ARCHITECTING",
    "DIGITAL REALITIES",
    "WITH FLUID PRECISION."
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden"
    >
      {/* Interactive Hero Canvas Background */}
      <HeroCanvas />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Asymmetric Editorial Typography */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)]/60 backdrop-blur-md w-fit"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4ff00] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d4ff00]" />
            </span>
            <span className="text-[11px] font-mono tracking-widest text-[var(--text-secondary)] uppercase">
              {portfolioData.personal.availability}
            </span>
          </motion.div>

          {/* Masked Headline Reveal */}
          <div className="space-y-1">
            {headlineLines.map((line, idx) => (
              <div key={idx} className="overflow-hidden">
                <motion.h1
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.85,
                    delay: 0.3 + idx * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black uppercase tracking-tighter leading-[0.95] ${
                    idx === 1
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-primary)] via-[#d4ff00] to-[var(--text-primary)]"
                      : "text-[var(--text-primary)]"
                  }`}
                >
                  {line}
                </motion.h1>
              </div>
            ))}
          </div>

          {/* Role & Bio Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="space-y-4 max-w-xl"
          >
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#d4ff00]">
              <Terminal size={14} />
              <span>// {portfolioData.personal.name} • {portfolioData.personal.role}</span>
            </div>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-normal">
              {portfolioData.personal.tagline}
            </p>
          </motion.div>

          {/* Magnetic CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <button
              onClick={() => scrollTo("projects")}
              className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-mono text-xs font-bold tracking-wider uppercase bg-[#d4ff00] text-black transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,255,0,0.4)] hover:scale-105 active:scale-95"
              data-cursor="pointer"
            >
              <span>EXPLORE WORKS</span>
              <ArrowDownRight size={16} className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-mono text-xs font-semibold tracking-wider uppercase border border-[var(--border-subtle)] text-[var(--text-primary)] bg-[var(--bg-card)]/40 hover:bg-[var(--border-subtle)] transition-all duration-200 hover:border-[#d4ff00]/50"
              data-cursor="pointer"
            >
              <span>TRANSMIT MESSAGE</span>
            </button>
          </motion.div>

          {/* Telemetry Footer Meta */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex items-center gap-6 pt-4 text-[11px] font-mono text-[var(--text-muted)] border-t border-[var(--border-subtle)]/60"
          >
            <span>LOCATION: {portfolioData.personal.location}</span>
            <span>•</span>
            <span>STACK: NEXT 16 / TYPESCRIPT / GLSL</span>
          </motion.div>
        </div>

        {/* Right Column: Creative Masked Portrait Frame */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] group"
          >
            {/* Ambient Backlight Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#d4ff00]/15 to-transparent rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Architectural Border & Mask */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-2 shadow-2xl">
              
              {/* Corner crosshairs */}
              <div className="absolute top-2 left-2 z-20 text-[10px] font-mono text-[#d4ff00] select-none">+</div>
              <div className="absolute top-2 right-2 z-20 text-[10px] font-mono text-[#d4ff00] select-none">+</div>
              <div className="absolute bottom-2 left-2 z-20 text-[10px] font-mono text-[#d4ff00] select-none">+</div>
              <div className="absolute bottom-2 right-2 z-20 text-[10px] font-mono text-[#d4ff00] select-none">+</div>

              {/* Image Container with duotone & subtle zoom */}
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-neutral-900">
                <Image
                  src={portfolioData.personal.photo}
                  alt={portfolioData.personal.name}
                  fill
                  priority
                  className="object-cover object-center grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 450px"
                />

                {/* Cybernetic duotone gradient tint */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-[#d4ff00]/5 mix-blend-color" />

                {/* Floating overlay tag */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[var(--bg-card)]/80 backdrop-blur-md border border-[var(--border-subtle)] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles size={14} className="text-[#d4ff00]" />
                    <span className="font-mono text-xs font-semibold text-[var(--text-primary)] uppercase">
                      CREATIVE DEV
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[#d4ff00] tracking-wider">
                    SPEC. #01
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
