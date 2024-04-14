const qoutes = [
  "Consistency is key.",
  "Consistency over perfection.",
  "Slow and steady wins the race.",
  "Rome was not built in a day.",
  "The early bird catches the worm.",
  "Simplicity is the ultimate sophistication.",
  "Less is more.",
];

export default function Qoute() {
  return (
    <blockquote className="text-muted-foreground text-sm">
      {qoutes[Math.floor(Math.random() * qoutes.length)]}
    </blockquote>
  );
}
