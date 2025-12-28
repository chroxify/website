"use client";

import { motion } from "motion/react";
import { ProjectCard, useProjectHover } from "../project-card";
import { CentralIcon } from "@/lib/central-icon";

export function SherlockWeb() {
  return (
    <ProjectCard
      title="Sherlock Web"
      description="A web UI for the Sherlock CLI tool to search usernames across social networks."
      href="https://sherlock.chroxify.com"
    >
      <HoverContent />
    </ProjectCard>
  );
}

function HoverContent() {
  const isHovered = useProjectHover();

  return (
    <>
      {/* Search input */}
      <motion.div
        className="absolute pointer-events-none right-0 z-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isHovered ? 1 : 0.35,
          rotate: isHovered ? -4 : -8,
          right: isHovered ? "-37%" : "0%",
          top: isHovered ? "0%" : "0%",
          opacity: isHovered ? 1 : 0,
          filter: isHovered ? "blur(0px)" : "blur(10px)",
        }}
      >
        <div className="flex items-center gap-2 px-4 py-2.5 h-[38px] bg-background border rounded-lg shadow-[0_8px_20px_-8px_rgba(0,0,0,0.1)]">
          <CentralIcon
            name="IconSearchIntelligence"
            className="size-5 -ml-0.5 text-muted-foreground"
          />
          <span className="text-foreground text-sm font-medium">@username</span>
        </div>
      </motion.div>

      {/* Twitter - Found */}
      <motion.div
        className="absolute pointer-events-none right-0"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isHovered ? 1 : 0.35,
          rotate: isHovered ? -6 : -8,
          right: isHovered ? "-25%" : "0%",
          top: isHovered ? "-35%" : "0%",
          opacity: isHovered ? 1 : 0,
          filter: isHovered ? "blur(0px)" : "blur(10px)",
        }}
      >
        <div className="flex items-center gap-3 px-3 py-2 bg-background border rounded-lg shadow-[0_8px_20px_-8px_rgba(0,0,0,0.08)]">
          <div className="flex items-center gap-2">
            <img
              src="https://cdn.brandfetch.io/idS5WhqBbM/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1692089092800"
              alt="Twitter"
              className="size-4"
            />
            <span className="text-foreground text-sm font-medium">Twitter</span>
          </div>
          <CentralIcon
            name="IconCircleCheck"
            className="size-5 text-emerald-500"
          />
        </div>
      </motion.div>

      {/* Instagram - Found */}
      <motion.div
        className="absolute pointer-events-none right-0"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isHovered ? 1 : 0.35,
          rotate: isHovered ? 5 : -8,
          right: isHovered ? "-55%" : "0%",
          top: isHovered ? "-45%" : "0%",
          opacity: isHovered ? 1 : 0,
          filter: isHovered ? "blur(0px)" : "blur(10px)",
        }}
      >
        <div className="flex items-center gap-3 px-3 py-2 bg-background border rounded-lg shadow-[0_8px_20px_-8px_rgba(0,0,0,0.08)]">
          <div className="flex items-center gap-2">
            <img
              src="https://cdn.brandfetch.io/ido5G85nya/theme/light/id8qc6z_TX.svg?c=1bxid64Mup7aczewSAYMX&t=1724650623897"
              alt="Instagram"
              className="size-4"
            />
            <span className="text-foreground text-sm font-medium">
              Instagram
            </span>
          </div>
          <CentralIcon
            name="IconCircleCheck"
            className="size-5 text-emerald-500"
          />
        </div>
      </motion.div>

      {/* GitHub - Found */}
      <motion.div
        className="absolute pointer-events-none right-0"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isHovered ? 1 : 0.35,
          rotate: isHovered ? 8 : -8,
          right: isHovered ? "-25%" : "0%",
          top: isHovered ? "50%" : "0%",
          opacity: isHovered ? 1 : 0,
          filter: isHovered ? "blur(0px)" : "blur(10px)",
        }}
      >
        <div className="flex items-center gap-3 px-3 py-2 bg-background border rounded-lg shadow-[0_8px_20px_-8px_rgba(0,0,0,0.08)]">
          <div className="flex items-center gap-2">
            <img
              src="https://cdn.brandfetch.io/idZAyF9rlg/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1719469980739"
              alt="GitHub"
              className="size-4"
            />
            <span className="text-foreground text-sm font-medium">GitHub</span>
          </div>
          <CentralIcon
            name="IconCircleCheck"
            className="size-5 text-emerald-500"
          />
        </div>
      </motion.div>

      {/* Reddit - Not Found */}
      <motion.div
        className="absolute pointer-events-none right-0"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isHovered ? 1 : 0.35,
          rotate: isHovered ? -3 : -8,
          right: isHovered ? "-50%" : "0%",
          top: isHovered ? "40%" : "0%",
          opacity: isHovered ? 1 : 0,
          filter: isHovered ? "blur(0px)" : "blur(10px)",
        }}
      >
        <div className="flex items-center gap-3 px-3 py-2 bg-background border rounded-lg shadow-[0_8px_20px_-8px_rgba(0,0,0,0.08)]">
          <div className="flex items-center gap-2">
            <img
              src="https://cdn.brandfetch.io/idkKwm0IT0/theme/dark/id_jo7Lzsf.svg?c=1bxid64Mup7aczewSAYMX&t=1721371371928"
              alt="Reddit"
              className="size-4.5 rounded-full"
            />
            <span className="text-foreground text-sm font-medium">Reddit</span>
          </div>
          <CentralIcon name="IconCircleX" className="size-5 text-red-500" />
        </div>
      </motion.div>
    </>
  );
}
