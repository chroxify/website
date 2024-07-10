"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import ComponentWrapper from "../component-wrapper";
import { cn } from "@/lib/utils";
import { AnimationProps, motion } from "framer-motion";

interface IconItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  selected?: boolean;
}

interface SpawnedIcon {
  x: number;
  y: number;
  icon: string;
  key: number;
  index: number;
  yOffset: number;
}

function IconItem({ icon, selected, ...props }: IconItemProps) {
  return (
    <button
      type="button"
      className={cn(
        "flex items-center pt-1 text-sm justify-center w-8 h-8 bg-secondary rounded-full active:scale-90 transition-all",
        selected && "bg-muted/70"
      )}
      {...props}
    >
      {icon}
    </button>
  );
}

export default function QuickReaction() {
  const icons = ["👍", "👎", "❤️", "😂", "🤩"];
  const SPAWN_AMOUNT = 4;

  const [selected, setSelected] = useState<string>(icons[0]);
  const [spawnedDivs, setSpawnedDivs] = useState<SpawnedIcon[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastTap = useRef<number>(0);

  // spawn icons on double tap
  const handleDoubleTap = useCallback(
    (event: React.MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const newDivs: SpawnedIcon[] = [];

        for (let i = 0; i < SPAWN_AMOUNT; i++) {
          const newDiv: SpawnedIcon = {
            x: x - 10,
            y: y - 10,
            icon: selected,
            key: Date.now() + i,
            index: i,
            // random offset between -10 and 10
            yOffset: Math.random() * 20 - 10,
          };
          newDivs.push(newDiv);
        }

        setSpawnedDivs((prev) => [...prev, ...newDivs]);
      }
    },
    [selected]
  );

  // validate if double tap
  const handleTap = useCallback(
    (event: React.MouseEvent) => {
      const now = Date.now();
      const DOUBLE_TAP_DELAY = 300;

      if (now - lastTap.current < DOUBLE_TAP_DELAY) {
        handleDoubleTap(event);
      }

      lastTap.current = now;
    },
    [handleDoubleTap]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setSpawnedDivs((prev) => prev.slice(SPAWN_AMOUNT));
    }, 2500);

    return () => clearTimeout(timer);
  }, [spawnedDivs]);

  // icon variants
  const iconVariants: AnimationProps["variants"] = {
    initial: (icon: SpawnedIcon) => ({
      scale: 0,
      rotate: Math.random() * 60 - 30,
      x: icon.x,
      y: icon.y,
    }),
    animate: (icon: SpawnedIcon) => ({
      scale: [0, 1.25],
      x: [icon.x, icon.x + (icon.index - 1) * 40],
      y: [icon.y, icon.y + 32 + icon.yOffset, icon.y - 300 + icon.yOffset],
      transition: {
        scale: {
          duration: 1,
          ease: "easeInOut",
        },
        default: {
          duration: 1.5,
          times: [0, 0.3, 1],
          ease: "easeInOut",
        },
      },
    }),
  };

  // cursor variants
  const cursorVariants: AnimationProps["variants"] = {
    animate: {
      left: `${spawnedDivs[spawnedDivs.length - 1]?.x}px`,
      top: `${spawnedDivs[spawnedDivs.length - 1]?.y}px`,
      scale: [1, 1, 0],
      opacity: 1,
      transition: {
        duration: 1, // 1 second for staying visible
        times: [0, 0.9, 1], // Stay scaled up for 0.9 of the duration
        ease: "easeInOut",
      },
    },
    rest: {
      left: `${spawnedDivs[spawnedDivs.length - 1]?.x}px`,
      top: `${spawnedDivs[spawnedDivs.length - 1]?.y}px`,
      scale: 0,
      opacity: 1,
    },
  };

  return (
    <ComponentWrapper>
      <div
        className="flex text-center text-muted-foreground items-center text-xs justify-center border h-36 w-36 rounded-2xl bg-muted/10 cursor-pointer relative"
        ref={containerRef}
        onClick={handleTap}
      >
        Double tap
        <br /> to react
        {spawnedDivs.map((div) => (
          <motion.div
            key={div.key}
            className="absolute flex items-center justify-center text-2xl z-50"
            variants={iconVariants}
            initial="initial"
            animate="animate"
            custom={div}
            style={{
              left: -5,
              top: -16,
            }}
          >
            {div.icon}
          </motion.div>
        ))}
        <motion.div
          key={spawnedDivs[spawnedDivs.length - 1]?.key}
          className="absolute w-5 h-5 bg-muted/40 rounded-full flex items-center justify-center text-2xl z-20"
          initial={{
            left: `${spawnedDivs[spawnedDivs.length - 1]?.x}px`,
            top: `${spawnedDivs[spawnedDivs.length - 1]?.y}px`,
            scale: 0,
          }}
          animate={spawnedDivs.length ? "animate" : "rest"}
          variants={cursorVariants}
        />
      </div>

      <div className="absolute flex gap-3 bottom-5">
        {icons.map((icon) => (
          <IconItem
            key={icon}
            icon={icon}
            selected={selected === icon}
            onClick={() => setSelected(icon)}
          />
        ))}
      </div>
    </ComponentWrapper>
  );
}
