"use client";

import { motion } from "motion/react";
import { ProjectCard, useProjectHover } from "../project-card";
import { CentralIcon } from "@/lib/central-icon";

export function Feedbase() {
  return (
    <ProjectCard
      title="Feedbase"
      description="A tool for collecting feedback, sharing roadmaps, changelogs, and more."
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
      {/* Left side - stacked images */}
      {/* Background image (feedback) */}
      {/* <motion.div
        className="absolute pointer-events-none left-0"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isHovered ? 1 : 0.35,
          rotate: isHovered ? -8 : 8,
          left: isHovered ? "-75%" : "0%",
          top: isHovered ? "-140%" : "-50%",
          opacity: isHovered ? 1 : 0,
          filter: isHovered ? "blur(0px)" : "blur(10px)",
        }}
      >
        <div className="relative">
          <img
            src="/assets/feedbase/public.png"
            alt="Feedbase Feedback"
            className="w-[420px] object-cover border-4 border-b-0 border-black rounded-lg"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, oklch(var(--background)) 0%, transparent 50%)",
            }}
          />
        </div>
      </motion.div> */}
      {/* Foreground image (roadmap) */}
      {/* <motion.div
        className="absolute pointer-events-none left-0"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isHovered ? 1 : 0.35,
          rotate: isHovered ? -8 : 8,
          left: isHovered ? "-70%" : "0%",
          top: isHovered ? "-80%" : "-50%",
          opacity: isHovered ? 1 : 0,
          filter: isHovered ? "blur(0px)" : "blur(10px)",
        }}
      >
        <div className="relative">
          <img
            src="/assets/feedbase/roadmap.png"
            alt="Feedbase Roadmap"
            className="w-[420px] object-cover border-4 border-b-0 border-black rounded-lg"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, oklch(var(--background)) 0%, transparent 50%)",
            }}
          />
        </div>
      </motion.div> */}

      {/* Right side - stacked images */}
      {/* Background image (public) */}
      <motion.div
        className="absolute pointer-events-none right-0"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isHovered ? 1 : 0.35,
          rotate: isHovered ? 2 : -8,
          right: isHovered ? "-75%" : "0%",
          top: isHovered ? "-140%" : "-50%",
          opacity: isHovered ? 1 : 0,
          filter: isHovered ? "blur(0px)" : "blur(10px)",
        }}
      >
        <div className="relative">
          <img
            src="/assets/feedbase/feedback.png"
            alt="Feedbase Public"
            className="w-[420px] object-cover border-4 border-b-0 border-black rounded-lg"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, oklch(var(--background)) 0%, transparent 50%)",
            }}
          />
        </div>
      </motion.div>
      {/* Foreground image (dashboard) */}
      <motion.div
        className="absolute pointer-events-none right-0"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isHovered ? 1 : 0.35,
          rotate: isHovered ? 2 : -8,
          right: isHovered ? "-70%" : "0%",
          top: isHovered ? "-80%" : "-50%",
          opacity: isHovered ? 1 : 0,
          filter: isHovered ? "blur(0px)" : "blur(10px)",
        }}
      >
        <div className="relative">
          <img
            src="/assets/feedbase/dashboard.png"
            alt="Feedbase Dashboard"
            className="w-[420px] object-cover border-4 border-b-0 border-black rounded-lg"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, oklch(var(--background)) 0%, transparent 50%)",
            }}
          />
        </div>
      </motion.div>
      {/* Upvote button - positioned below right images, higher up */}
      <motion.div
        className="absolute pointer-events-none right-0 z-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isHovered ? 1 : 0.35,
          rotate: isHovered ? 15 : -8,
          right: isHovered ? "-60%" : "0%",
          top: isHovered ? "200%" : "-50%",
          opacity: isHovered ? 1 : 0,
          filter: isHovered ? "blur(0px)" : "blur(10px)",
        }}
      >
        <div className="flex items-center gap-2 px-4 py-2 bg-violet-500 text-white font-medium rounded-full border border-violet-400 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1),inset_0_1px_0_0_rgba(255,255,255,0.4)]">
          <CentralIcon name="IconThumbUpCurved" className="size-4" />
          Upvote
        </div>
      </motion.div>
      {/* Post Feedback button - positioned below Upvote, cascading down-left */}
      <motion.div
        className="absolute pointer-events-none right-0"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isHovered ? 1 : 0.35,
          rotate: isHovered ? 18 : -8,
          right: isHovered ? "-55%" : "0%",
          top: isHovered ? "80%" : "-50%",
          opacity: isHovered ? 1 : 0,
          filter: isHovered ? "blur(0px)" : "blur(10px)",
        }}
      >
        <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white font-medium rounded-full border border-emerald-400 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1),inset_0_1px_0_0_rgba(255,255,255,0.4)]">
          <CentralIcon name="IconBubble2" className="size-4" />
          Post Feedback
        </div>
      </motion.div>
      {/* Read Changelog button - positioned below Post Feedback */}
      <motion.div
        className="absolute pointer-events-none right-0"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isHovered ? 1 : 0.35,
          rotate: isHovered ? -4 : -8,
          right: isHovered ? "-40%" : "0%",
          top: isHovered ? "150%" : "-50%",
          opacity: isHovered ? 1 : 0,
          filter: isHovered ? "blur(0px)" : "blur(10px)",
        }}
      >
        <div className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-white font-medium rounded-full border border-amber-400 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1),inset_0_1px_0_0_rgba(255,255,255,0.4)]">
          <CentralIcon name="IconFileText" className="size-4" />
          Read Changelog
        </div>
      </motion.div>
    </>
  );
}
