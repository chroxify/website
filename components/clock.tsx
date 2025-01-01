"use client";

import NumberFlow, { NumberFlowGroup } from "@number-flow/react";
import { useState, useEffect } from "react";

export function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <NumberFlowGroup>
      <span className="text-[13px] px-1.5 py-[2.53px] rounded-lg select-none">
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
