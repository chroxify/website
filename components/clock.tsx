"use client";

import NumberFlow, { NumberFlowGroup } from "@number-flow/react";
import { useState, useEffect } from "react";

const style = {
  "--number-flow-char-height": "1em",
} as React.CSSProperties;

export function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <NumberFlowGroup>
      <span
        className="text-[13px] [&_number-flow-react::part(suffix)]:align-middle [&_number-flow-react::part(suffix)]:inline-flex"
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
          suffix={` ${time.getHours() >= 12 ? "PM" : "AM"} (UTC+1)`}
        />
      </span>
    </NumberFlowGroup>
  );
}
