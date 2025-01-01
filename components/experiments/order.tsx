"use client";

import { useEffect, useState } from "react";
import ComponentWrapper from "./component-wrapper";
import { AnimationProps, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CheckCircle, Loader } from "@geist-ui/icons";

const STEP_DURATION = 2000;
const STEP_DELAY = 1250;

const STEPS = [
  {
    label: "Stock",
    message: "Checking",
    success: "Available",
  },
  {
    label: "Payment",
    message: "Processing",
    success: "Received",
  },
  {
    label: "Delivery",
    message: "Preparing",
    success: "Shipped",
  },
];

const LABELS = {
  initial: "Order",
  success: "Order Placed",
};

type AnimationType = "hover" | "rest" | "click" | "complete";

// Step Component
function Step({
  currentStep,
  loading,
  active,
  data,
}: {
  currentStep: number;
  loading: boolean;
  active: boolean;
  data: { label: string; message: string; success: string };
}) {
  return (
    <motion.div
      className={cn(
        "flex items-center justify-between w-full ",
        !active && "hidden"
      )}
      variants={{
        rest: {
          opacity: 0,
        },
        click: {
          opacity: active && currentStep >= 0 ? 1 : 0,
          transition: {
            delay: 0.15,
          },
        },
      }}
    >
      <span className="text-sm text-primary-foreground font-medium">
        {data.label}
      </span>
      <span
        className={cn(
          "inline-flex gap-1 text-xs font-medium text-primary-foreground/50",
          !loading && "text-green-400"
        )}
      >
        {loading ? data.message : data.success}
      </span>
    </motion.div>
  );
}

export default function Order() {
  const [animate, setAnimate] = useState<AnimationType>("rest");
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [buttonLabel, setButtonLabel] = useState(LABELS.initial);

  const animationVariants: Record<string, AnimationProps["variants"]> = {
    buttonContainer: {
      click: {
        width: "13rem",
        height: `${36 + 21 * (step + 1)}px`,
        justifyContent: "start",
        transition: {
          type: "spring",
          stiffness: 120,
          damping: 15,
        },
      },
      complete: {
        width: "9rem",
        height: "2.25rem",
        backgroundColor: "#4ade80",
        color: "#fff",
        transition: {
          type: "spring",
          stiffness: 120,
          damping: 15,
        },
      },
      rest: {
        width: "4.5rem",
        height: "2.25rem",
        transition: {
          type: "spring",
          stiffness: 140,
          damping: 20,
        },
      },
    },
    buttonHeader: {
      click: {
        scale: 0.9,
        position: "absolute",
        justifyContent: "space-between",
        top: "0.3rem",
        transition: {
          type: "spring",
          stiffness: 120,
          damping: 15,
        },
      },
      complete: {
        scale: 1,
        position: "absolute",
        justifyContent: "space-evenly",
        top: "16%",
      },
    },
  };

  useEffect(() => {
    if (animate === "click") {
      const interval = setInterval(() => {
        setStep((prev) => {
          if (prev < STEPS.length - 1) {
            return prev + 1;
          }
          return prev;
        });
      }, STEP_DURATION);

      // Clean up the interval when the component unmounts or animate changes
      return () => {
        clearInterval(interval);
      };
    }

    if (animate === "complete") {
      setButtonLabel(LABELS.success);
      setTimeout(() => {
        setStep(0);
        setButtonLabel(LABELS.initial);
        setAnimate("rest");
      }, STEP_DELAY);
    }
  }, [animate]);

  // on step change, set loading to true for 1s
  useEffect(() => {
    if (animate === "click") {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, STEP_DELAY * 1.5);
    }
  }, [step, animate]);

  return (
    <ComponentWrapper>
      <motion.button
        animate={animate}
        whileHover="hover"
        onClick={() => {
          setAnimate("click");

          setTimeout(() => {
            setAnimate("complete");
            setStep(0);
          }, STEP_DURATION * STEPS.length + 200);
        }}
        variants={animationVariants.buttonContainer}
        className={cn(
          "flex relative items-center flex-col h-9 w-[4.5rem] justify-center text-primary-foreground bg-primary rounded-xl cursor-pointer active:scale-95 disabled:active:scale-100 transition-transform disabled:cursor-progress"
        )}
        disabled={animate !== "rest"}
      >
        {/* Header */}
        <motion.div
          className="flex items-center text-base justify-center w-full"
          variants={animationVariants.buttonHeader}
        >
          <div className={cn(animate !== "click" && "hidden", "w-3.5")} />
          <span
            className={cn(
              "flex w-fit items-center justify-center font-medium",
              animate === "click" && "text-primary-foreground/60"
            )}
          >
            {buttonLabel}
          </span>
          <div
            className={cn(
              "transition-opacity",
              !loading && step === STEPS.length - 1 && "opacity-0",
              animate === "complete" && "opacity-100"
            )}
          >
            <Loader
              className={cn(
                "animate-spin h-3.5 w-3.5 stroke-current right-3 top-[9px]",
                animate !== "click" && "hidden"
              )}
            />
            <CheckCircle
              className={cn(
                "h-4 w-4 stroke-current stroke-2 right-3 top-[9px]",
                animate !== "complete" && "hidden"
              )}
            />
          </div>
        </motion.div>

        {/* Steps */}
        <div
          className={cn(
            "flex gap-0.5 flex-col w-full absolute top-7 px-3",
            animate !== "click" && "hidden"
          )}
        >
          {STEPS.map((data, i) => (
            <Step
              key={data.label}
              currentStep={step}
              loading={loading ? step === i : false}
              active={step >= i}
              data={data}
            />
          ))}
        </div>
      </motion.button>
    </ComponentWrapper>
  );
}
