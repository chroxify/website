"use client";

import { motion } from "motion/react";
import { ProjectCard, useProjectHover } from "../project-card";
import { CentralIcon } from "@/lib/central-icon";

export function NameGPT() {
  return (
    <ProjectCard
      title="NameGPT"
      description="An AI-powered name generator for startups, products, and domains."
      href="https://namegpt.chroxify.com"
    >
      <HoverContent />
    </ProjectCard>
  );
}

function HoverContent() {
  const isHovered = useProjectHover();

  return (
    <>
      {/* Prompt input card 1 - left side (back) */}
      <motion.div
        className="absolute pointer-events-none left-0 z-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isHovered ? 1 : 0.35,
          rotate: isHovered ? -12 : 4,
          left: isHovered ? "-45%" : "0%",
          top: isHovered ? "-20%" : "0%",
          opacity: isHovered ? 1 : 0,
          filter: isHovered ? "blur(0px)" : "blur(10px)",
        }}
      >
        <div
          className="relative bg-secondary border rounded-lg px-4 py-3 text-sm text-secondary-foreground"
          style={{
            boxShadow: "0 8px 20px -8px rgba(0,0,0,0.08)",
          }}
        >
          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <CentralIcon name="IconListSparkle" className="size-4" />
            <span className="text-xs">Describe your project</span>
          </div>
          <span className="text-foreground">
            A website for tracking habits...
          </span>
        </div>
      </motion.div>

      {/* Prompt input card 2 - left side (front) */}
      <motion.div
        className="absolute pointer-events-none left-0 z-20"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isHovered ? 1 : 0.35,
          rotate: isHovered ? 8 : -4,
          left: isHovered ? "-44%" : "0%",
          top: isHovered ? "-20%" : "0%",
          opacity: isHovered ? 1 : 0,
          filter: isHovered ? "blur(0px)" : "blur(10px)",
        }}
      >
        <div
          className="relative bg-secondary border rounded-lg px-4 py-3 text-sm text-secondary-foreground"
          style={{
            boxShadow: "0 8px 20px -8px rgba(0,0,0,0.08)",
          }}
        >
          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <CentralIcon name="IconListSparkle" className="size-4" />
            <span className="text-xs">Describe your project</span>
          </div>
          <span className="text-foreground">
            A startup that helps developers...
          </span>
        </div>
      </motion.div>

      {/* Name card 1 - Zephyr (down) */}
      <motion.div
        className="absolute pointer-events-none right-0"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isHovered ? 1 : 0.35,
          rotate: isHovered ? -6 : -8,
          right: isHovered ? "-30%" : "0%",
          top: isHovered ? "-50%" : "0%",
          opacity: isHovered ? 1 : 0,
          filter: isHovered ? "blur(0px)" : "blur(10px)",
        }}
      >
        <div className="flex items-center gap-3 px-4 py-3 bg-background border rounded-xl shadow-[0_8px_20px_-8px_rgba(0,0,0,0.08)]">
          <span className="text-foreground font-medium text-lg">Lumen</span>
          <div className="flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-500">
            <div className="size-1.5 rounded-full bg-emerald-500" />
            .com
          </div>
        </div>
      </motion.div>

      {/* Name card 2 - Luminar (up and right) */}
      <motion.div
        className="absolute pointer-events-none right-0"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isHovered ? 1 : 0.35,
          rotate: isHovered ? 4 : -8,
          right: isHovered ? "-45%" : "0%",
          top: isHovered ? "-100%" : "0%",
          opacity: isHovered ? 1 : 0,
          filter: isHovered ? "blur(0px)" : "blur(10px)",
        }}
      >
        <div className="flex items-center gap-3 px-4 py-3 bg-background border rounded-xl shadow-[0_8px_20px_-8px_rgba(0,0,0,0.08)]">
          <span className="text-foreground font-medium text-lg">Luminar</span>
          <div className="flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-500">
            <div className="size-1.5 rounded-full bg-emerald-500" />
            .com
          </div>
        </div>
      </motion.div>

      {/* Name card 3 - Novara (down and further right) */}
      <motion.div
        className="absolute pointer-events-none right-0"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isHovered ? 1 : 0.35,
          rotate: isHovered ? 10 : -8,
          right: isHovered ? "-60%" : "0%",
          top: isHovered ? "-25%" : "0%",
          opacity: isHovered ? 1 : 0,
          filter: isHovered ? "blur(0px)" : "blur(10px)",
        }}
      >
        <div className="flex items-center gap-3 px-4 py-3 bg-background border rounded-xl shadow-[0_8px_20px_-8px_rgba(0,0,0,0.08)]">
          <span className="text-foreground font-medium text-lg">Nova</span>
          <div className="flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-red-500/10 text-red-500">
            <div className="size-1.5 rounded-full bg-red-500" />
            taken
          </div>
        </div>
      </motion.div>

      {/* Generate button */}
      <motion.div
        className="absolute pointer-events-none right-0 z-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isHovered ? 1 : 0.35,
          rotate: isHovered ? 8 : -8,
          right: isHovered ? "-30%" : "0%",
          top: isHovered ? "70%" : "0%",
          opacity: isHovered ? 1 : 0,
          filter: isHovered ? "blur(0px)" : "blur(10px)",
        }}
      >
        <div className="flex items-center gap-2 px-4 py-2 bg-[#AEECDD] text-foreground font-medium rounded-full border border-black/7 shadow-[0_8px_20px_-8px_rgba(0,0,0,0.08),inset_0_1px_0_0_rgba(255,255,255,0.4)]">
          <CentralIcon name="IconSparkle" className="size-4" />
          Generate
        </div>
      </motion.div>

      {/* Copy button */}
      <motion.div
        className="absolute pointer-events-none right-0"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isHovered ? 1 : 0.35,
          rotate: isHovered ? -6 : 8,
          right: isHovered ? "-50%" : "0%",
          top: isHovered ? "80%" : "0%",
          opacity: isHovered ? 1 : 0,
          filter: isHovered ? "blur(0px)" : "blur(10px)",
        }}
      >
        <div className="flex items-center gap-2 px-4 py-2 bg-secondary text-foreground font-medium rounded-full border shadow-[0_8px_20px_-8px_rgba(0,0,0,0.08)]">
          <CentralIcon name="IconSquareBehindSquare6" className="size-5" />
          Copy
        </div>
      </motion.div>
    </>
  );
}
