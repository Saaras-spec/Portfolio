import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Certifications from "@/components/Certifications";
import ResumeSection from "@/components/ResumeSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      {/* Intro Preloader */}
      <Preloader />

      {/* Spring Follower Cursor */}
      <CustomCursor />

      {/* Viewport Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Ambient Film Grain Overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Main Page Layout */}
      <div className="relative min-h-screen bg-[var(--bg-base)] text-[var(--text-primary)] transition-colors duration-300 selection:bg-[#d4ff00] selection:text-black">
        {/* Floating Navbar */}
        <Navbar />

        {/* Portfolio Content Hierarchy */}
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Timeline />
          <Certifications />
          <ResumeSection />
          <Contact />
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </SmoothScroll>
  );
}
