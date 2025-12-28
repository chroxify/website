"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { ProjectCard, useProjectHover } from "../project-card";
import winnerAnimation from "@/public/assets/supafork/winner.json";

export function Supafork() {
  return (
    <ProjectCard
      title="Supafork"
      description="A tool to fork Supabase databases with a single click."
      href="/project-1"
    >
      <HoverContent />
    </ProjectCard>
  );
}

function HoverContent() {
  const isHovered = useProjectHover();
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (isHovered) {
      lottieRef.current?.goToAndPlay(0);
    } else {
      lottieRef.current?.goToAndStop(0);
    }
  }, [isHovered]);

  return (
    <>
      {/* Fork image behind */}
      <motion.div
        className="absolute pointer-events-none right-0 rounded-lg border border-foreground/25 overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25),inset_0_1px_0_0_rgba(255,255,255,0.4)]"
        style={{
          backgroundImage: "url(/assets/supafork/wp-1.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isHovered ? 1 : 0.35,
          rotate: isHovered ? -8 : 8,
          right: isHovered ? "-62%" : "0%",
          top: isHovered ? "-200%" : "0%",
          opacity: isHovered ? 1 : 0,
          filter: isHovered ? "blur(0px)" : "blur(10px)",
        }}
      >
        <div className="p-3.5">
          <img
            src="/assets/supafork/fork.png"
            alt="Supafork Fork"
            className="w-[340px] object-cover rounded-md shadow-lg"
          />
        </div>
      </motion.div>

      {/* Overview image front */}
      <motion.div
        className="absolute pointer-events-none right-0 rounded-lg border border-foreground/25 overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25),inset_0_1px_0_0_rgba(255,255,255,0.4)]"
        style={{
          backgroundImage: "url(/assets/supafork/wp-2.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isHovered ? 1 : 0.35,
          rotate: isHovered ? 6 : -8,
          right: isHovered ? "-75%" : "0%",
          top: isHovered ? "-150%" : "0%",
          opacity: isHovered ? 1 : 0,
          filter: isHovered ? "blur(0px)" : "blur(10px)",
        }}
      >
        <div className="p-3.5">
          <img
            src="/assets/supafork/overview.png"
            alt="Supafork Overview"
            className="w-[340px] object-cover rounded-md shadow-lg"
          />
        </div>
      </motion.div>

      {/* Launch Week Winner badge - near image */}
      <motion.div
        className="absolute pointer-events-none right-0 z-20"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isHovered ? 1 : 0.35,
          rotate: isHovered ? 18 : -8,
          right: isHovered ? "-40%" : "0%",
          top: isHovered ? "80%" : "0%",
          opacity: isHovered ? 1 : 0,
          filter: isHovered ? "blur(0px)" : "blur(10px)",
        }}
      >
        <div className="flex items-center gap-3 px-4 py-2.5 bg-[#1C1C1C] rounded-lg border border-[#2E2E2E]">
          <div className="flex items-center gap-1.5">
            <span className="text-primary-foreground text-sm tracking-[1px]">
              Launch Week
            </span>
            <img
              src="https://supabase.com/images/launchweek/lwx/logos/lwx_logo.svg"
              alt="LWX"
              className="size-3.5"
            />
          </div>
          <div className="w-px h-4 bg-[#2E2E2E]" />
          <div className="flex items-center gap-1.5">
            <Lottie
              lottieRef={lottieRef}
              animationData={winnerAnimation}
              loop={false}
              autoplay={false}
              className="size-[22px]"
              style={{
                filter: "",
              }}
            />
            <span className="text-[#40CF8E] text-sm font-medium tracking-[0.5px]">
              Winner
            </span>
          </div>
        </div>
      </motion.div>

      {/* Fork Database button with fade */}
      <motion.div
        className="absolute pointer-events-none right-0 z-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isHovered ? 1 : 0.35,
          rotate: isHovered ? -8 : 8,
          right: isHovered ? "-30%" : "0%",
          top: isHovered ? "90%" : "0%",
          opacity: isHovered ? 1 : 0,
          filter: isHovered ? "blur(0px)" : "blur(10px)",
        }}
      >
        <div className="relative">
          <img
            src="/assets/supafork/button.svg"
            alt="Fork Database"
            width={175}
            height={30}
            className="relative rounded-md"
          />
        </div>
      </motion.div>
    </>
  );
}
