"use client";

import { motion } from "motion/react";
import { ProjectCard, useProjectHover } from "../project-card";

export function OTPInbox() {
  return (
    <ProjectCard
      title="OTP Inbox"
      description="Raycast extension to easily view and copy email verification codes."
      href="https://raycast.com/chroxify/otp-inbox"
    >
      <HoverContent />
    </ProjectCard>
  );
}

function HoverContent() {
  const isHovered = useProjectHover();

  return (
    <>
      {/* Overview image - main element */}
      <motion.div
        className="absolute pointer-events-none right-0"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isHovered ? 1 : 0.35,
          rotate: isHovered ? 4 : -8,
          right: isHovered ? "-60%" : "0%",
          top: isHovered ? "-100%" : "0%",
          opacity: isHovered ? 1 : 0,
          filter: isHovered ? "blur(0px)" : "blur(10px)",
        }}
      >
        <img
          src="/assets/otp-inbox/overview.png"
          alt="OTP Inbox Overview"
          className="w-[360px] rounded-xl border border-[#333] shadow-[0_12px_40px_-12px_rgba(0,0,0,0.4)]"
        />
      </motion.div>

      {/* Linear - top right of image */}
      <motion.div
        className="absolute pointer-events-none right-0 z-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isHovered ? 1 : 0.35,
          rotate: isHovered ? 12 : -8,
          right: isHovered ? "-65%" : "0%",
          top: isHovered ? "-90%" : "0%",
          opacity: isHovered ? 1 : 0,
          filter: isHovered ? "blur(0px)" : "blur(10px)",
        }}
      >
        <div className="flex items-center gap-3 h-[38px] px-3 py-2 bg-[#1A1A1A] border border-[#333] rounded-lg shadow-[0_8px_20px_-8px_rgba(0,0,0,0.2)]">
          <div className="flex items-center gap-2">
            <img
              src="https://cdn.brandfetch.io/iduDa181eM/theme/light/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1723620985056"
              alt="Linear"
              className="size-4"
            />
            <span className="text-white/80 text-sm font-medium">Linear</span>
          </div>
          <div className="font-mono text-sm text-white tracking-wider">
            847 293
          </div>
        </div>
      </motion.div>

      {/* Slack - bottom left of image */}
      <motion.div
        className="absolute pointer-events-none right-0 z-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isHovered ? 1 : 0.35,
          rotate: isHovered ? 12 : -8,
          right: isHovered ? "-25%" : "0%",
          top: isHovered ? "150%" : "0%",
          opacity: isHovered ? 1 : 0,
          filter: isHovered ? "blur(0px)" : "blur(10px)",
        }}
      >
        <div className="flex items-center gap-3 h-[38px] px-3 py-2 bg-[#1A1A1A] border border-[#333] rounded-lg shadow-[0_8px_20px_-8px_rgba(0,0,0,0.2)]">
          <div className="flex items-center gap-2 relative pl-6">
            <img
              src="https://cdn.brandfetch.io/idJ_HhtG0Z/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1745381296843"
              alt="Slack"
              className="size-[34px] absolute top-[-7px] -left-2.5"
            />
            <span className="text-white/80 text-sm font-medium">Slack</span>
          </div>
          <div className="font-mono text-sm text-white tracking-wider">
            519 746
          </div>
        </div>
      </motion.div>

      {/* GitHub - bottom right of image */}
      <motion.div
        className="absolute pointer-events-none right-0 z-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isHovered ? 1 : 0.35,
          rotate: isHovered ? -4 : -8,
          right: isHovered ? "-65%" : "0%",
          top: isHovered ? "175%" : "0%",
          opacity: isHovered ? 1 : 0,
          filter: isHovered ? "blur(0px)" : "blur(10px)",
        }}
      >
        <div className="flex items-center gap-3 h-[38px] px-3 py-2 bg-[#1A1A1A] border border-[#333] rounded-lg shadow-[0_8px_20px_-8px_rgba(0,0,0,0.2)]">
          <div className="flex items-center gap-2">
            <img
              src="https://cdn.brandfetch.io/idZAyF9rlg/theme/light/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1719469980826"
              alt="GitHub"
              className="size-4"
            />
            <span className="text-white/80 text-sm font-medium">GitHub</span>
          </div>
          <div className="font-mono text-sm text-white tracking-wider">
            483 921
          </div>
        </div>
      </motion.div>
    </>
  );
}
