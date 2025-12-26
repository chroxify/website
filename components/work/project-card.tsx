"use client";

import { useState, createContext, useContext, ReactNode } from "react";
import Link from "next/link";
import { AnimatePresence } from "motion/react";

const ProjectHoverContext = createContext<boolean>(false);

export function useProjectHover() {
  return useContext(ProjectHoverContext);
}

export interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
  children?: ReactNode;
}

export function ProjectCard({
  title,
  description,
  href,
  children,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ProjectHoverContext.Provider value={isHovered}>
      <AnimatePresence>
        <Link
          href={href}
          className="relative flex w-full before:absolute before:inset-0 before:rounded-[inherit] before:-z-10 before:transition-all active:before:scale-[0.99] hover:before:bg-secondary rounded-2xl py-3 px-4 transition-all"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex flex-col">
            <span>{title}</span>
            <span className="text-secondary-foreground">{description}</span>
          </div>

          {children}
        </Link>
      </AnimatePresence>
    </ProjectHoverContext.Provider>
  );
}
