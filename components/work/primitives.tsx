"use client";

import { ReactNode } from "react";
import { motion } from "motion/react";

export interface FloatingImageProps {
  src: string;
  alt: string;
  fadeFrom: "top" | "bottom";
  className?: string;
  animate: Record<string, string | number>;
}

export function FloatingImage({
  src,
  alt,
  fadeFrom,
  className,
  animate: animateProps,
}: FloatingImageProps) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className ?? ""}`}
      initial={{ scale: 0, opacity: 0 }}
      animate={animateProps}
    >
      <div className="relative">
        <img src={src} alt={alt} width={172} className="object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background:
              fadeFrom === "top"
                ? "linear-gradient(to bottom, oklch(var(--background)) 0%, transparent 40%)"
                : "linear-gradient(to top, oklch(var(--background)) 0%, transparent 50%)",
          }}
        />
      </div>
    </motion.div>
  );
}

export interface IconShadowProps {
  size: string;
  animate: Record<string, string | number>;
}

export function IconShadow({ size, animate: animateProps }: IconShadowProps) {
  return (
    <motion.div
      className={`absolute ${size} rounded-[31.5%]`}
      animate={animateProps}
      style={{
        boxShadow: "0 0 60px 30px oklch(var(--background))",
      }}
    />
  );
}

export interface FloatingIconProps {
  size?: string;
  animate: Record<string, string | number>;
  children: ReactNode;
}

export function FloatingIcon({
  size = "size-10",
  animate: animateProps,
  children,
}: FloatingIconProps) {
  return (
    <motion.svg
      className={`absolute pointer-events-none ${size}`}
      viewBox="0 0 228 228"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={animateProps}
    >
      {children}
    </motion.svg>
  );
}
