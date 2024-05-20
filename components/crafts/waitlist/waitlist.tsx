"use client";

import { motion, AnimationProps } from "framer-motion";
import ComponentWrapper from "../component-wrapper";
import { useEffect, useState } from "react";
import { Check, Loader } from "@geist-ui/icons";

type AnimationType = "hover" | "rest" | "click" | "complete";

export default function Waitlist() {
  const [animate, setAnimate] = useState<AnimationType>("rest");
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
        width: isLoading ? "12rem" : "5.5rem",
      },
      complete: {
        scale: 1,
        width: "6.75rem",
      },
    },
    input: {
      rest: {
        scale: 0,
      },
      click: {
        opacity: 1,
      },
      complete: {
        scale: 0,
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
      complete: {
        width: "6.75rem",
        justifyContent: "center",
      },
    },
    buttonLabel: {
      rest: {
        translateY: "1.25rem",
      },
      click: {
        translateY: "1.25rem",
      },
      complete: {
        translateY: "-1.25rem",
      },
    },
  };

  // Timeout functoin to reset animation on complete
  function resetAnimation() {
    setTimeout(() => {
      setAnimate("rest");
    }, 2000);
  }

  return (
    <ComponentWrapper>
      <motion.div
        whileHover="hover"
        animate={animate}
        variants={animationVariants.inputContainer}
        className="flex flex-row w-20 h-9 relative"
      >
        {/* Button */}
        <motion.button
          className="flex flex-col z-30 bg-primary overflow-hidden text-primary-foreground rounded-xl h-9 w-full items-center justify-center"
          variants={animationVariants.button}
          onClick={() => {
            if (animate !== "click") {
              setAnimate("click");
            } else if (animate === "click") {
              // Loading 2s, then complete
              setIsLoading(true);
              setTimeout(() => {
                setAnimate("complete");
                setIsLoading(false);
                resetAnimation();
              }, 2000);
            }
          }}
        >
          <motion.div
            className="flex flex-col gap-4 items-center justify-center translate-y-5"
            variants={animationVariants.buttonLabel}
          >
            <span className="flex gap-1 items-center justify-center">
              {isLoading && <Loader className="h-4 w-4 animate-spin" />}
              Sign up
            </span>
            <span className="flex gap-2 items-center justify-center">
              <Check className="h-4 w-4" />
              Success!
            </span>
          </motion.div>
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
