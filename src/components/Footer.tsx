"use client";

import { useEffect, useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { ArrowUp, Globe } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterXIcon, CodeIcon } from "@/components/Icons";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "America/Los_Angeles",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    const win = window as unknown as { __lenis?: { scrollTo: (target: number) => void } };
    if (win.__lenis) {
      win.__lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const socialIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
    github: GithubIcon,
    linkedin: LinkedinIcon,
    twitter: TwitterXIcon,
    code: CodeIcon,
  };

  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] py-12 px-4 sm:px-6 lg:px-12 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Tier: Live Telemetry & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-[var(--border-subtle)] pb-8">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 font-mono text-xs text-[var(--text-muted)]">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d4ff00] animate-pulse" />
              SYSTEMS HEALTHY
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Globe size={13} className="text-[#d4ff00]" />
              SAN FRANCISCO, CA: {time || "12:00:00"} PST
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-secondary)] hover:text-black hover:bg-[#d4ff00] hover:border-[#d4ff00] transition-all"
            data-cursor="pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={13} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom Tier: Branding & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[var(--text-muted)] font-mono">
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-[var(--text-primary)] font-bold font-heading text-sm">
              {portfolioData.personal.name}
            </p>
            <p>
              Hand-architected with Next.js 16, Tailwind CSS, Lenis & Framer Motion.
            </p>
          </div>

          {/* Social Icons row */}
          <div className="flex items-center gap-3">
            {portfolioData.socialLinks.map((social) => {
              const Icon = socialIcons[social.iconName] || GithubIcon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-8 h-8 rounded-full border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[#d4ff00] hover:border-[#d4ff00]/50 transition-colors"
                  data-cursor="pointer"
                >
                  <Icon size={14} />
                </a>
              );
            })}
          </div>

          <div className="text-center sm:text-right">
            <span>© {new Date().getFullYear()} • ALL RIGHTS RESERVED</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
