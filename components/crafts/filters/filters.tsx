"use client";

import { useCallback, useState } from "react";
import ComponentWrapper from "../component-wrapper";
import { cn } from "@/lib/utils";
import { AnimationProps, MotionProps, motion } from "framer-motion";

type FilterItemProps = {
  children: React.ReactNode;
  active?: boolean;
  isBound: "left" | "center" | "single";
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> &
  MotionProps;

function FilterItem({
  children,
  active,
  className,
  isBound,
  ...props
}: FilterItemProps) {
  const variants: AnimationProps["variants"] = {
    left: {
      borderTopLeftRadius: "0px",
      borderBottomLeftRadius: "0px",
      marginLeft: "-14px",
      paddingLeft: "16px",
    },
    center: {
      borderTopLeftRadius: "0px",
      borderBottomLeftRadius: "0px",
      borderTopRightRadius: "0px",
      borderBottomRightRadius: "0px",
      borderRightColor: "transparent",
      borderLeftColor: "transparent",
      marginLeft: "-14px",
      paddingLeft: "16px",
    },
    single: {
      borderRadius: "9999px",
    },
  };

  return (
    <motion.button
      type="button"
      className={cn(
        "px-2 h-8 rounded-full border inline-flex items-center  ml-3 justify-center text-sm text-secondary-foreground",
        active ? "bg-secondary" : "bg-background text-muted-foreground",
        active &&
          isBound === "single" &&
          "bg-secondary brightness-[.97] text-secondary-foreground border-muted",
        className
      )}
      variants={variants}
      animate={isBound}
      transition={{ type: "tween", duration: 0.15 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export default function Filters() {
  const [filters, setFilters] = useState<Record<string, boolean>>({
    Playlists: false,
    Albums: false,
    Liked: false,
    Artists: false,
    Downloaded: false,
  });

  const isBound = useCallback(
    (filter: string): "left" | "center" | "single" => {
      // Get the current index of the filter.
      const filterIndex = Object.keys(filters).indexOf(filter);

      // If filter is not active, return none.
      if (!filters[filter]) return "single";

      // Get the previous and next filters.
      const prevFilter = Object.keys(filters)[filterIndex - 1];
      const nextFilter = Object.keys(filters)[filterIndex + 1];

      // If both previous and next filters are active, return center.
      if (filters[prevFilter] && filters[nextFilter]) return "center";

      // If previous filter is active, return left.
      if (filters[prevFilter]) return "left";

      return "single";
    },
    [filters]
  );

  return (
    <ComponentWrapper>
      <div className="flex">
        {Object.entries(filters).map(([filter, active], index) => (
          <FilterItem
            key={filter}
            active={active}
            className="last:hidden sm:last:block"
            style={{
              zIndex: Object.keys(filters).length - index,
            }}
            isBound={isBound(filter)}
            onClick={() => {
              setFilters((prev) => ({ ...prev, [filter]: !prev[filter] }));
            }}
          >
            {filter}
          </FilterItem>
        ))}
      </div>
    </ComponentWrapper>
  );
}
