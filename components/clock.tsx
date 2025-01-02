"use client";

import NumberFlow, { NumberFlowGroup } from "@number-flow/react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const style = {
  "--number-flow-char-height": "1em",
} as React.CSSProperties;

export function Clock() {
  const [time, setTime] = useState(new Date());
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    // Safari detection
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const berlinTime = new Date().toLocaleString("en-US", {
        timeZone: "Europe/Berlin",
      });
      setTime(new Date(berlinTime));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <NumberFlowGroup>
      <span
        className={cn(
          "text-[13px]",
          isSafari &&
            "[&_number-flow-react::part(suffix)]:align-middle [&_number-flow-react::part(suffix)]:inline-flex"
        )}
        style={style}
      >
        <NumberFlow
          value={time.getHours() % 12 || 12}
          format={{ minimumIntegerDigits: 2 }}
          suffix=":"
        />
        <NumberFlow
          value={time.getMinutes()}
          format={{ minimumIntegerDigits: 2 }}
          suffix=":"
        />
        <NumberFlow
          value={time.getSeconds()}
          format={{ minimumIntegerDigits: 2 }}
          suffix={` ${time.getHours() >= 12 ? "PM" : "AM"} (UTC${
            time.getTimezoneOffset() / -60 >= 0 ? "+" : ""
          }${time.getTimezoneOffset() / -60})`}
        />
      </span>
    </NumberFlowGroup>
  );
}
