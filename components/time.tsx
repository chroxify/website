"use client";

export default function LocalTime() {
  const berlin = new Date().toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZone: "Europe/Berlin",
  });
  return (
    <span className="text-muted-foreground text-sm" suppressHydrationWarning>
      {berlin}
    </span>
  );
}
