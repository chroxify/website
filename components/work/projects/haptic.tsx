"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ProjectCard, useProjectHover } from "../project-card";
import { CentralIcon } from "@/lib/central-icon";
import NumberFlow from "@number-flow/react";

export function Haptic() {
  return (
    <ProjectCard
      title="Haptic"
      description="Open source, local-first markdown note-taking app."
      href="/project-1"
    >
      <HoverContent />
    </ProjectCard>
  );
}

function HoverContent() {
  const isHovered = useProjectHover();
  const [delayedHover, setDelayedHover] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setDelayedHover(isHovered), 200);
    return () => clearTimeout(timeout);
  }, [isHovered]);

  return (
    <>
      {/* Icon */}
      <motion.img
        className="absolute pointer-events-none z-10 rounded-[18px] bg-[#212121] shadow-lg outline outline-[#66686B] border-4 border-[#494949]"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isHovered ? 1 : 0.35,
          rotate: isHovered ? -6 : 8,
          right: isHovered ? "-18%" : "0%",
          top: isHovered ? "37%" : "0%",
          opacity: isHovered ? 1 : 0,
          filter: isHovered ? "blur(0px)" : "blur(10px)",
        }}
        src="/assets/haptic/icon.svg"
        alt="Haptic"
        width={80}
        height={80}
      />

      {/* Stars count */}
      <motion.div
        className="absolute pointer-events-none z-10 bg-[#262626] border border-[#494949] text-primary-foreground flex gap-2 rounded-full px-4 py-2 h-9 items-center justify-center"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isHovered ? 1 : 0.35,
          rotate: isHovered ? 24 : -8,
          right: isHovered ? "-75%" : "0%",
          top: isHovered ? "-145%" : "0%",
          opacity: isHovered ? 1 : 0,
          filter: isHovered ? "blur(0px)" : "blur(10px)",
        }}
      >
        <CentralIcon name="IconStar" className="size-4 text-amber-300" />
        <NumberFlow
          value={delayedHover ? 1599 : 0}
          format={{ minimumIntegerDigits: 4 }}
          className="font-medium"
        />
      </motion.div>

      {/* Overview image on right */}
      <motion.img
        src="/assets/haptic/overview.png"
        alt="Haptic"
        width={400}
        className="absolute pointer-events-none border border-[#494949] right-0 object-cover rounded-sm shadow-2xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isHovered ? 1 : 0.35,
          rotate: isHovered ? 4 : -8,
          right: isHovered ? "-70%" : "0%",
          top: isHovered ? "-150%" : "0%",
          opacity: isHovered ? 1 : 0,
          filter: isHovered ? "blur(0px)" : "blur(10px)",
        }}
      />
    </>
  );
}
