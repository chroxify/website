import { JSX } from "react";

interface ExperienceProps {
  name: string;
  description: string;
  href?: string;
  period: {
    start: string;
    end: string;
  };
}

function parseMarkdownLinks(text: string) {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: (string | JSX.Element)[] = [];
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    parts.push(
      <a
        key={match.index}
        href={match[2]}
        className="underline underline-offset-2 decoration-foreground/30 font-medium hover:opacity-70 transition-all"
        target="_blank"
        rel="noopener noreferrer"
      >
        {match[1]}
      </a>
    );

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

export default function Experience({
  name,
  description,
  href,
  period,
}: ExperienceProps) {
  return (
    <div className="flex flex-col gap-0.5">
      <div className="flex flex-row gap-2 items-center">
        <h3 className="font-medium">{name}</h3>
        <span className="text-sm text-muted-foreground">
          {period.start} - {period.end}
        </span>
      </div>
      <p className="text-sm text-secondary-foreground">
        {parseMarkdownLinks(description)}
      </p>
    </div>
  );
}
