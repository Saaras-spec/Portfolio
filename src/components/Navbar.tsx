"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon, ArrowDownToLine, Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (!element) return;

    // Use Lenis if available
    const win = window as unknown as { __lenis?: { scrollTo: (target: HTMLElement | string) => void } };
    if (win.__lenis) {
      win.__lenis.scrollTo(element);
    } else {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "About", href: "about" },
    { label: "Skills", href: "skills" },
    { label: "Projects", href: "projects" },
    { label: "Experience", href: "experience" },
    { label: "Credentials", href: "certifications" },
    { label: "Contact", href: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 py-4 pointer-events-none">
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto w-full max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full transition-all duration-300 border ${
          isScrolled
            ? "bg-[var(--glass-bg)] backdrop-blur-xl border-[var(--border-subtle)] shadow-[0_8px_32px_rgba(0,0,0,0.15)]"
            : "bg-[var(--glass-bg)] backdrop-blur-md border-transparent"
        }`}
      >
        {/* Brand / Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("hero");
          }}
          className="group flex items-center gap-2 font-mono font-bold text-sm tracking-widest uppercase text-[var(--text-primary)]"
          data-cursor="pointer"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#d4ff00] group-hover:scale-125 transition-transform" />
          <span>{portfolioData.personal.firstName.toUpperCase()}.{portfolioData.personal.lastName[0]}</span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1 text-xs font-mono tracking-wider">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="px-3.5 py-1.5 rounded-full text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--border-subtle)] transition-colors"
              data-cursor="pointer"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Light/Dark Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="w-9 h-9 rounded-full flex items-center justify-center border border-[var(--border-subtle)] text-[var(--text-primary)] hover:bg-[var(--border-subtle)] transition-colors"
            data-cursor="pointer"
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {/* Download Resume CTA */}
          <a
            href={portfolioData.personal.resumeUrl}
            download="Saaras_Bisht_Resume.pdf"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-wide border border-[#d4ff00]/40 bg-[#d4ff00]/10 text-[var(--text-primary)] hover:bg-[#d4ff00] hover:text-black transition-all"
            data-cursor="pointer"
          >
            <ArrowDownToLine size={13} />
            <span>RESUME</span>
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center border border-[var(--border-subtle)] text-[var(--text-primary)]"
            data-cursor="pointer"
          >
            {mobileMenuOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto absolute top-20 left-4 right-4 bg-[var(--bg-card)] border border-[var(--border-subtle)] backdrop-blur-2xl rounded-2xl p-6 shadow-2xl flex flex-col gap-4 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="flex items-center justify-between text-left py-2.5 px-3 rounded-lg text-sm font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--border-subtle)] transition-colors"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={14} className="opacity-40" />
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-[var(--border-subtle)]">
              <a
                href={portfolioData.personal.resumeUrl}
                download="Saaras_Bisht_Resume.pdf"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#d4ff00] text-black font-mono font-semibold text-xs tracking-wider uppercase shadow-lg shadow-[#d4ff00]/10"
              >
                <ArrowDownToLine size={14} />
                <span>DOWNLOAD RESUME (PDF)</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
