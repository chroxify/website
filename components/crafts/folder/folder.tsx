"use client";

// Inspired by Sam (https://twitter.com/samdape/status/1786077609110946056)
import { cn } from "@/lib/utils";
import { AnimationProps, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import ComponentWrapper from "../component-wrapper";
import useMediaQuery from "@/lib/hooks/use-media-query";

const IMAGES = [
  "https://images.unsplash.com/photo-1715117022094-c65019842057?q=80&fm=jpg&w=1080&fit=max",
  "https://images.unsplash.com/photo-1715160441010-7d5050ec67a4?q=80&fm=jpg&w=1080&fit=max",
  "https://images.unsplash.com/photo-1715006020348-a4af9f36b664?q=80&fm=jpg&w=1080&fit=max",
];

const animationVariants: Record<string, AnimationProps["variants"]> = {
  folderBack: {
    hover: {
      translateY: "0.5rem",
    },
  },
  folderFrontLeft: {
    hover: {
      skewX: "3deg",
      translateX: "-0.25rem",
      translateY: "2px",
    },
    clicked: {
      skewX: "0deg",
      translateX: "0rem",
      translateY: "0rem",
      transition: {
        delay: 0.15,
      },
    },
  },
  folderFrontRight: {
    hover: {
      skewX: "-3deg",
      translateX: "0.25rem",
      translateY: "2px",
    },
    clicked: {
      skewX: "0deg",
      translateX: "0rem",
      translateY: "0rem",
      transition: {
        delay: 0.15,
      },
    },
  },
  folderContent: {
    hover: {
      translateY: "-1.5rem",
      rotate: "-10deg",
    },
    rest: {
      translateY: "1.5rem",
    },
    clicked: {
      translateY: "0rem",
      scale: 1.4,
    },
  },
  folderContainer: {
    clicked: {
      translateY: "11rem",
      scale: 1.4,
      transition: {
        delay: 0.1,
        type: "tween",
        ease: "easeOut",
        duration: 0.25,
      },
    },
    rest: {
      translateY: "0rem",
      scale: 1,
    },
  },
  folderLabel: {
    hover: {
      translateY: "0.15rem",
    },
  },
};

function FolderFrontStrips() {
  return (
    <div className="flex flex-col w-full h-fit opacity-15 mb-2 gap-1">
      <hr className="h-[2px] select-none w-full bg-white z-40 border-none" />
      <hr className="h-[2px] select-none w-full bg-white z-40 border-none" />
    </div>
  );
}

export default function Folder() {
  const [animate, setAnimate] = useState<"clicked" | "rest" | "hover">("rest");
  const { isDesktop } = useMediaQuery();

  return (
    <ComponentWrapper>
      <motion.button
        className="relative w-32 h-24 group rounded-lg"
        whileHover={animate === "rest" ? "hover" : undefined}
        whileFocus={animate === "rest" ? "hover" : undefined}
        animate={animate}
        variants={animationVariants.folderContainer}
        onClick={() => {
          if (!isDesktop) {
            if (animate === "rest") {
              setAnimate("hover");
            } else if (animate === "hover") {
              setAnimate("clicked");
            } else {
              setAnimate("rest");
            }
          } else {
            setAnimate((prev) => (prev === "rest" ? "clicked" : "rest"));
          }
        }}
      >
        {/* Folder Back */}
        <motion.div
          className="bg-gradient-to-b rounded-tl-none top-2 from-[#218BCF] to-[#57ADDB] w-full h-2/3 rounded-lg absolute bottom-0"
          variants={animationVariants.folderBack}
        />
        {/* Bumb on top */}
        <motion.div
          className="absolute top-0 left-0 w-12 h-3 bg-[#218BCF] [clip-path:polygon(0%_0%,50%_0%,100%_100%,50%_100%,0%_100%);] rounded-tl-lg rounded-tr-lg"
          variants={animationVariants.folderBack}
        />
        {/* Folder Front */}
        <div className="z-30 relative h-full w-full">
          <motion.div
            className="absolute bottom-0 bg-gradient-to-b from-[#73D7FF] to-[#6BCBF3] w-3/4 h-[calc(90%-0.5rem)] rounded-l-lg flex flex-col-reverse overflow-hidden"
            variants={animationVariants.folderFrontLeft}
          >
            <FolderFrontStrips />
          </motion.div>
          <motion.div
            className="absolute bottom-0 right-0 bg-gradient-to-b from-[#73D7FF] to-[#6BCBF3] w-3/4 h-[calc(90%-0.5rem)] rounded-r-lg flex flex-col-reverse overflow-hidden"
            variants={animationVariants.folderFrontRight}
          >
            <FolderFrontStrips />
          </motion.div>
        </div>

        {/* Shadow */}
        <div className="absolute bottom-0 w-full top-[18px] z-20 shadow-[rgba(0,0,15,0.4)_0px_-1px_10px_0px] shadow-black/15 bg-none rounded-lg" />

        {/* Content */}
        <div
          className={cn(
            "absolute bottom-0 w-fit h-full flex items-start z-20 px-5 select-none"
          )}
        >
          {IMAGES.slice(0, 3).map((image, i) => (
            <motion.div
              key={i}
              style={{
                position: "absolute",
                zIndex: 10 - i,
                width: 55,
                height: 70,
                rotate: `${(i === 0 ? -1 : i) * 2}deg`,
                translateX: `${(i + 1) * 4}px`,
                translateY: "1.3rem",
                scale: 0.5,
              }}
              variants={{
                hover: {
                  rotate: `${(i === 0 ? -1 : i) * 5}deg`,
                  translate: `${(i + 1) * 6}px`,
                  translateY: "-1rem",
                  scale: 1.3,
                },
                clicked: {
                  marginLeft: `15px`,
                  rotate: `${(i === 0 ? -1 : i) * 5}deg`,
                  translateX: `${
                    i % 2 === 0 ? -((i + 2) / 2) * 15 : ((i + 1) / 2) * 15
                  }px`,
                  translateY: `-${10 - i * 2}rem`,
                  transition: {
                    type: "spring",
                    stiffness: 120,
                    damping: 15,
                    mass: 0.8,
                  },
                  scale: 1.3,
                },
              }}
              transition={{
                type: "spring",
                stiffness: 125,
                damping: 13,
                mass: 0.8,
              }}
            >
              <Image
                src={image}
                alt="random"
                fill
                style={{ pointerEvents: "none" }}
              />
            </motion.div>
          ))}
        </div>

        {/* Label */}
        <motion.div
          className="leading-4 text-sm pt-2 font-medium"
          variants={animationVariants.folderLabel}
        >
          Images
          <br />
          <span className="text-muted-foreground text-xs">3 items</span>
        </motion.div>
      </motion.button>
    </ComponentWrapper>
  );
}
