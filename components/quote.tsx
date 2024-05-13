"use client";

const qoutes = [
  "Consistency is key.",
  "Consistency over perfection.",
  "Slow and steady wins the race.",
  "Rome was not built in a day.",
  "Less is more.",
];

export default function Quote() {
  return (
    <span className="text-muted-foreground text-sm" suppressHydrationWarning>
      {qoutes[Math.floor(Math.random() * qoutes.length)]}
    </span>
  );
}
