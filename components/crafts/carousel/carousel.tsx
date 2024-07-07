"use client";

import ComponentWrapper from "../component-wrapper";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimationProps } from "framer-motion";
import { GalleryVertical } from "lucide-react";

const IMAGES = [
  "https://images.unsplash.com/photo-1692607519784-9e5406625d00?q=80&fm=jpg&w=1080&fit=max",
  "https://images.unsplash.com/photo-1715160441010-7d5050ec67a4?q=80&fm=jpg&w=1080&fit=max",
  "https://images.unsplash.com/photo-1715006020348-a4af9f36b664?q=80&fm=jpg&w=1080&fit=max",
];

export default function Carousel() {
  const [focusedIndex, setFocusedIndex] = useState(
    Math.floor(IMAGES.length / 2)
  );
  const [orientation, setOrientation] = useState<"horizontal" | "vertical">(
    "horizontal"
  );

  const CENTER_INDEX = Math.floor(IMAGES.length / 2);

  const handleTranslate = (index: number) => {
    // If the index is lower than center index, move the images up
    if (index < CENTER_INDEX) {
      return `+${(CENTER_INDEX - index) * 200}px`;
    }

    // If the index is greater than center index, move the images down
    if (index > CENTER_INDEX) {
      return `-${(index - CENTER_INDEX) * 200}px`;
    }

    return "0";
  };

  const variants: Record<string, AnimationProps["variants"]> = {
    Carousel: {
      animate: {
        transform:
          orientation === "horizontal"
            ? `translateX(${handleTranslate(focusedIndex)})`
            : `translateY(${handleTranslate(focusedIndex)})`,
      },
    },
    Image: {
      focused: {
        scale: 1.1,
        opacity: 1,
      },
      notFocused: {
        scale: 0.85,
        opacity: 0.5,
      },
    },
    Indicator: {
      focused: {
        height: orientation === "horizontal" ? "0.625rem" : "1.25rem",
        width: orientation === "horizontal" ? "1.25rem" : "0.625rem",
      },
      notFocused: {
        height: orientation === "horizontal" ? "0.625rem" : "0.625rem",
      },
    },
  };

  return (
    <ComponentWrapper className="h-[450px]">
      {/* Carousel */}
      <motion.div
        className={cn(
          "flex gap-2",
          orientation === "horizontal" ? "flex-row" : "flex-col"
        )}
        animate="animate"
        variants={variants.Carousel}
      >
        {IMAGES.map((image, index) => (
          <motion.img
            draggable="false"
            key={index}
            src={image}
            animate={focusedIndex === index ? "focused" : "notFocused"}
            variants={variants.Image}
            alt={`Image ${index}`}
            onClick={() => setFocusedIndex(index)}
            className={cn(
              "rounded-sm h-[200px] min-w-[200px] w-[200px] select-none",
              focusedIndex !== index && "cursor-pointer",
              orientation === "horizontal" &&
                focusedIndex !== index &&
                focusedIndex !== CENTER_INDEX &&
                (focusedIndex - 1 !== index || focusedIndex + 1 !== index) &&
                `-m${focusedIndex > CENTER_INDEX ? "r" : "r"}-[24px]`
            )}
          />
        ))}
      </motion.div>

      {/* Indicator */}
      <div
        className={cn(
          "flex absolute gap-1.5",
          orientation === "horizontal"
            ? "flex-row bottom-4"
            : " flex-col right-4"
        )}
      >
        {IMAGES.map((_, index) => (
          <motion.div
            key={index}
            animate={focusedIndex === index ? "focused" : "notFocused"}
            variants={variants.Indicator}
            onClick={() => setFocusedIndex(index)}
            className={cn(
              "w-2.5 bg-muted/60 rounded-full cursor-pointer transition-colors",
              focusedIndex === index && "bg-muted"
            )}
          />
        ))}
      </div>

      {/* Action buttons */}
      <div className="flex gap-2 absolute left-2 top-2">
        <button
          className="h-8 w-8 inline-flex items-center justify-center active:scale-95 transition-transform"
          onClick={() => {
            if (orientation === "vertical") {
              setOrientation("horizontal");
            } else {
              setOrientation("vertical");
            }
          }}
        >
          <GalleryVertical
            className={cn(
              "text-muted-foreground h-4 w-4 transition-transform",
              orientation === "vertical" && "rotate-90"
            )}
          />
        </button>
      </div>
    </ComponentWrapper>
  );
}
