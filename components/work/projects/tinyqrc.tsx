"use client";

import { motion } from "motion/react";
import { ProjectCard, useProjectHover } from "../project-card";

export function TinyQRC() {
  return (
    <ProjectCard
      title="TinyQRC"
      description="A dead-simple, fast and free QR Code API for developers."
      href="/project-1"
    >
      <HoverContent />
    </ProjectCard>
  );
}

function HoverContent() {
  const isHovered = useProjectHover();

  return (
    <>
      {/* Curl input with white fade */}
      <motion.div
        className="absolute pointer-events-none right-0 z-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isHovered ? 1 : 0.35,
          rotate: isHovered ? 2 : -4,
          right: isHovered ? "-60%" : "0%",
          top: isHovered ? "90%" : "0%",
          opacity: isHovered ? 1 : 0,
          filter: isHovered ? "blur(0px)" : "blur(10px)",
        }}
      >
        <div className="relative">
          {/* Solid background below */}
          <div className="absolute top-full left-0 right-0 h-20 bg-[oklch(var(--background))]" />
          <div
            className="relative bg-secondary border rounded-lg px-3 py-2 font-mono text-xs text-secondary-foreground whitespace-nowrap"
            style={{
              boxShadow: "0 -15px 15px 2.5px oklch(var(--background))",
            }}
          >
            <span className="text-secondary-foreground">$</span> curl
            api.tinyqrc.com/v1/qr?data=chroxify.com
          </div>
        </div>
      </motion.div>

      {/* QR Code behind (chroxify) */}
      <motion.img
        src="/assets/tinyqrc/chroxify.svg"
        alt="Chroxify QR Code"
        width={140}
        height={140}
        className="absolute pointer-events-none rounded-lg border shadow-[4px_4px_0px_rgba(0,0,0,0.05)]"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isHovered ? 1 : 0.35,
          rotate: isHovered ? -8 : 8,
          right: isHovered ? "-35%" : "0%",
          top: isHovered ? "-100%" : "0%",
          opacity: isHovered ? 1 : 0,
          filter: isHovered ? "blur(0px)" : "blur(10px)",
        }}
      />

      {/* QR Code front (tinyqrc) */}
      <motion.img
        src="/assets/tinyqrc/tinyqrc.svg"
        alt="TinyQRC QR Code"
        width={140}
        height={140}
        className="absolute pointer-events-none rounded-lg border shadow-[4px_4px_0px_rgba(0,0,0,0.05)]"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isHovered ? 1 : 0.35,
          rotate: isHovered ? 6 : -8,
          right: isHovered ? "-45%" : "0%",
          top: isHovered ? "-50%" : "0%",
          opacity: isHovered ? 1 : 0,
          filter: isHovered ? "blur(0px)" : "blur(10px)",
        }}
      />
    </>
  );
}
