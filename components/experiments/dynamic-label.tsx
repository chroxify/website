"use client";

import { cn } from "@/lib/utils";
import ComponentWrapper from "./component-wrapper";
import { AnimationProps, motion } from "framer-motion";
import { useState } from "react";

export default function DynamicInputLabel() {
  const [value, setValue] = useState<string>("");
  const [animate, setAnimate] = useState<"rest" | "focus">("rest");

  const variants: Record<string, AnimationProps["variants"]> = {
    label: {
      rest: {
        opacity: 1,
        left: 0,
        top: 0,
        color: "hsl(var(--muted-foreground))",
      },
      focus: {
        opacity: 1,
        left: -10,
        top: -32,
        color: "hsl(var(--secondary-foreground))",
      },
    },
    placeholder: {
      initial: {
        opacity: 0,
      },
      rest: (value: string) => ({
        opacity: 0,
        transition: {
          duration: value ? 0.05 : 0.15,
        },
      }),
      focus: {
        opacity: 1,
        transition: {
          duration: 0.2,
          delay: 0.05,
        },
      },
    },
  };

  return (
    <ComponentWrapper>
      <div className="w-full text-sm relative max-w-60 h-9">
        {/* Input */}
        <input
          className={cn(
            "w-full text-sm placeholder:text-muted-foreground transition-all outline-none focus-visible:outline-none focus-visible:ring-ring ring-offset-1 ring-offset-background focus-visible:ring-1 max-w-60 h-full bg-secondary border border-input text-secondary-foreground rounded-xl pl-2.5"
          )}
          type="email"
          onFocus={() => setAnimate("focus")}
          onBlur={() => setAnimate("rest")}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        {/* Label & Placeholder */}
        <motion.span
          className="absolute left-0 top-0 h-full text-muted-foreground flex items-center pl-2.5 pointer-events-none"
          variants={variants.label}
          animate={animate === "rest" ? (value ? "focus" : "rest") : "focus"}
          transition={{
            duration: 0.2,
          }}
        >
          Email
        </motion.span>
        <motion.span
          className="absolute left-0 top-0 h-full text-muted-foreground flex items-center pl-2.5 pointer-events-none"
          variants={variants.placeholder}
          animate={animate === "rest" ? "rest" : value ? "rest" : "focus"}
          initial="initial"
          custom={value}
        >
          example@gmail.com
        </motion.span>
      </div>
    </ComponentWrapper>
  );
}
