"use client";

import { motion, AnimationProps } from "framer-motion";
import ComponentWrapper from "../component-wrapper";
import { useState } from "react";

type AnimationType = "hover" | "rest" | "click" | "complete";

const animationVariants: Record<string, AnimationProps["variants"]> = {
  button: {
    rest: {
      scale: 1,
    },
    // hover: {
    //   scale: 1.05,
    // },
    click: {
      scale: 0.8,
      width: "5rem",
    },
  },
  input: {
    rest: {
      scale: 0,
    },
    click: {
      opacity: 1,
    },
  },
  inputContainer: {
    rest: {
      width: "5rem",
      justifyContent: "center",
    },
    click: {
      width: "15rem",
      justifyContent: "flex-end",
    },
  },
};

export default function Waitlist() {
  const [animate, SetAnimate] = useState<AnimationType>("rest");

  return (
    <ComponentWrapper>
      <motion.div
        whileHover="hover"
        animate={animate}
        variants={animationVariants.inputContainer}
        className="flex flex-row w-full h-9 relative"
      >
        {/* Button */}
        <motion.button
          className="flex flex-row z-30 bg-primary text-primary-foreground rounded-xl h-9 w-full items-center justify-center"
          variants={animationVariants.button}
          onClick={() => SetAnimate("click")}
        >
          Sign up
        </motion.button>

        {/* Input */}
        <motion.input
          className="w-full absolute max-w-60 h-9 bg-secondary border-input text-secondary-foreground rounded-xl mx-1 px-2.5"
          type="email"
          placeholder="Email"
          variants={animationVariants.input}
        />
      </motion.div>
    </ComponentWrapper>
  );
}
