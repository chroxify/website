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
      {/* Overview image */}
      <motion.div
        className="absolute pointer-events-none right-0"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isHovered ? 1 : 0.35,
          rotate: isHovered ? 4 : -8,
          right: isHovered ? "-55%" : "0%",
          top: isHovered ? "-50%" : "0%",
          opacity: isHovered ? 1 : 0,
          filter: isHovered ? "blur(0px)" : "blur(10px)",
        }}
      >
        <img
          src="/assets/namegpt/overview.png"
          alt="NameGPT Overview"
          className="w-[280px] rounded-xl border shadow-[0_12px_40px_-12px_rgba(0,0,0,0.15)]"
        />
      </motion.div>

      {/* Generated name 1 */}
      <motion.div
        className="absolute pointer-events-none right-0 z-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isHovered ? 1 : 0.35,
          rotate: isHovered ? -6 : -8,
          right: isHovered ? "-25%" : "0%",
          top: isHovered ? "70%" : "0%",
          opacity: isHovered ? 1 : 0,
          filter: isHovered ? "blur(0px)" : "blur(10px)",
        }}
      >
        <div className="flex items-center gap-2 px-3 py-2 bg-background border rounded-lg shadow-[0_8px_20px_-8px_rgba(0,0,0,0.08)]">
          <span className="text-foreground text-sm font-medium">Synopsify</span>
          <CentralIcon name="IconCircleCheck" className="size-4 text-emerald-500" />
        </div>
      </motion.div>

      {/* Generated name 2 */}
      <motion.div
        className="absolute pointer-events-none right-0 z-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isHovered ? 1 : 0.35,
          rotate: isHovered ? 8 : -8,
          right: isHovered ? "-55%" : "0%",
          top: isHovered ? "80%" : "0%",
          opacity: isHovered ? 1 : 0,
          filter: isHovered ? "blur(0px)" : "blur(10px)",
        }}
      >
        <div className="flex items-center gap-2 px-3 py-2 bg-background border rounded-lg shadow-[0_8px_20px_-8px_rgba(0,0,0,0.08)]">
          <span className="text-foreground text-sm font-medium">Brieflet</span>
          <CentralIcon name="IconCircleCheck" className="size-4 text-emerald-500" />
        </div>
      </motion.div>

      {/* Generated name 3 */}
      <motion.div
        className="absolute pointer-events-none right-0 z-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isHovered ? 1 : 0.35,
          rotate: isHovered ? -3 : -8,
          right: isHovered ? "-70%" : "0%",
          top: isHovered ? "65%" : "0%",
          opacity: isHovered ? 1 : 0,
          filter: isHovered ? "blur(0px)" : "blur(10px)",
        }}
      >
        <div className="flex items-center gap-2 px-3 py-2 bg-background border rounded-lg shadow-[0_8px_20px_-8px_rgba(0,0,0,0.08)]">
          <span className="text-foreground text-sm font-medium">TL;DR</span>
          <CentralIcon name="IconCircleX" className="size-4 text-red-500" />
        </div>
      </motion.div>
    </>
  );
}
