"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Display, Moon, Sun } from "@geist-ui/icons";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  return (
    <button
      type="button"
      className="w-6 shrink-0 h-6 inline-flex items-center justify-center rounded-md hover:bg-accent text-muted-foreground hover:text-foreground transition-all"
      onClick={handleToggle}
    >
      {theme === "light" ? (
        <Sun className="w-4 h-4" />
      ) : theme === "dark" ? (
        <Moon className="w-4 h-4" />
      ) : (
        <Display className="w-4 h-4" />
      )}
    </button>
  );
}
