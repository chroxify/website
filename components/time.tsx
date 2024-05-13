"use client";

import { useEffect, useState } from "react";

export default function LocalTime() {
  const [berlinTime, setBerlinTime] = useState(getFormattedTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setBerlinTime(getFormattedTime());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function getFormattedTime() {
    return new Date().toLocaleString("en-US", {
      weekday: "short",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZone: "Europe/Berlin",
    });
  }

  return (
    <span className="text-muted-foreground text-sm" suppressHydrationWarning>
      {berlinTime} (LT)
    </span>
  );
}
