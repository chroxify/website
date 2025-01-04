"use client";

import { motion, AnimationProps } from "framer-motion";
import ComponentWrapper from "./component-wrapper";
import { useState } from "react";
import { CheckCircle, Loader } from "@geist-ui/icons";
import { cn } from "@/lib/utils";

type AnimationType = "hover" | "rest" | "click" | "complete";

export default function Waitlist() {
  const [animate, setAnimate] = useState<AnimationType>("rest");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const animationVariants: Record<string, AnimationProps["variants"]> = {
    button: {
      rest: {
        scale: 1,
      },
      click: {
        scale: 0.8,
        transition: {
          type: "tween",
          duration: 0.2,
        },
      },
      complete: {
        scale: 1,
        width: "10.75rem",
      },
    },
    input: {
      rest: {
        scale: 0,
      },
      click: {
        opacity: 1,
        scale: 1,
        transition: {
          type: "tween",
          duration: 0.2,
        },
      },
      complete: {
        scale: 0,
      },
    },
    inputContainer: {
      rest: {
        width: "5rem",
      },
      click: {
        width: "15rem",
        transition: {
          type: "spring",
          stiffness: 150,
          damping: 20,
        },
      },
      complete: {
        width: "6.75rem",
      },
    },
    buttonLabel: {
      rest: {
        translateY: "1.25rem",
        transition: {
          type: "spring",
          duration: 0.65,
        },
      },
      click: {
        translateY: "1.25rem",
      },
      complete: {
        translateY: "-1.25rem",
        transition: {
          type: "spring",
          duration: 0.65,
        },
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
      <motion.form
        whileHover="hover"
        animate={animate}
        variants={animationVariants.inputContainer}
        className="flex flex-row w-20 h-9 relative justify-end"
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          e.stopPropagation();

          // Simulate loading
          setIsLoading(true);
          setTimeout(() => {
            setAnimate("complete");
            setIsLoading(false);
            resetAnimation();
            (e.target as HTMLFormElement).reset();
          }, 2000);
        }}
        initial={false}
      >
        {/* Button */}
        <motion.button
          className={cn(
            "flex flex-col z-30 bg-primary overflow-hidden text-primary-foreground rounded-xl h-9 w-full items-center justify-center",
            isLoading && "opacity-60"
          )}
          style={{
            width: isLoading ? "5.75rem" : "5rem",
            translateX: isLoading ? "0.093rem" : "0",
            transition: "width 0.15s",
          }}
          variants={animationVariants.button}
          onClick={(e) => {
            if (animate === "click") {
              return;
            }
            e.preventDefault();
            e.stopPropagation();
            setAnimate("click");
          }}
          type={animate === "click" ? "submit" : "button"}
          disabled={isLoading || animate === "complete"}
        >
          <motion.div
            className="flex flex-col gap-4 text-base items-center cursor-pointer"
            variants={animationVariants.buttonLabel}
          >
            <div className="inline-flex gap-2">
              <span
                className={cn(
                  "flex items-center gap-1 justify-center transition-transform -translate-x-2.5",
                  isLoading && "translate-x-0"
                )}
              >
                <Loader
                  className={cn(
                    "h-4 w-4 animate-spin opacity-0 transition-opacity",
                    isLoading && "opacity-100"
                  )}
                />
                Sign up
              </span>
            </div>
            <span className="flex gap-2 shrink-0 truncate items-center justify-center">
              <CheckCircle className="h-4 w-4 stroke-2" />
              You&apos;re in
            </span>
          </motion.div>
        </motion.button>

        {/* Input */}
        <motion.input
          className={cn(
            "w-full text-sm opacity-0 placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-ring ring-offset-1 transition-shadow ring-offset-background focus-visible:ring-1 absolute max-w-60 h-9 bg-secondary border border-input text-secondary-foreground rounded-xl mx-1 pl-2.5",
            isLoading ? "pr-20" : "pr-[4.5rem]"
          )}
          type="email"
          placeholder="Email"
          required
          typeof="email"
          variants={animationVariants.input}
        />
      </motion.form>
    </ComponentWrapper>
  );
}
