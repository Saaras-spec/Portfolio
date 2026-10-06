"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState<"default" | "pointer" | "view" | "text">("default");
  const [cursorText, setCursorText] = useState("");
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for high-end trailing effect
  const springX = useSpring(mouseX, { damping: 28, stiffness: 350 });
  const springY = useSpring(mouseY, { damping: 28, stiffness: 350 });

  useEffect(() => {
    // Disable on touch screens or reduced-motion
    if (window.matchMedia("(pointer: coarse)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest("[data-cursor]") as HTMLElement | null;
      if (cursorTarget) {
        const type = cursorTarget.getAttribute("data-cursor") as "pointer" | "view" | "text";
        setCursorType(type || "pointer");
        setCursorText(cursorTarget.getAttribute("data-cursor-text") || "");
        return;
      }

      const clickable = target.closest("a, button, input, textarea, select");
      if (clickable) {
        setCursorType("pointer");
        setCursorText("");
      } else {
        setCursorType("default");
        setCursorText("");
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Central dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div
          className={`rounded-full transition-all duration-200 ${
            cursorType === "pointer"
              ? "w-2 h-2 bg-[#d4ff00]"
              : cursorType === "view"
              ? "w-0 h-0"
              : "w-2.5 h-2.5 bg-white"
          }`}
        />
      </motion.div>

      {/* Trailing aura ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] flex items-center justify-center rounded-full"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: cursorType === "view" ? 84 : cursorType === "pointer" ? 48 : 34,
          height: cursorType === "view" ? 84 : cursorType === "pointer" ? 48 : 34,
          backgroundColor:
            cursorType === "view"
              ? "rgba(212, 255, 0, 0.95)"
              : cursorType === "pointer"
              ? "rgba(212, 255, 0, 0.12)"
              : "rgba(255, 255, 255, 0.05)",
          borderColor:
            cursorType === "view"
              ? "#d4ff00"
              : cursorType === "pointer"
              ? "rgba(212, 255, 0, 0.7)"
              : "rgba(255, 255, 255, 0.25)",
          borderWidth: cursorType === "view" ? 0 : 1,
        }}
        transition={{ type: "spring", damping: 24, stiffness: 280 }}
      >
        {cursorType === "view" && (
          <span className="text-black font-mono font-bold text-xs tracking-wider uppercase select-none">
            {cursorText || "VIEW"}
          </span>
        )}
      </motion.div>
    </>
  );
}
