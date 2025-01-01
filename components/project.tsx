import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface ProjectProps {
  name: string;
  description: string | ReactNode;
  href: string;
  year: number;
}

export default function Project({
  name,
  description,
  href,
  year,
}: ProjectProps) {
  return (
    <div className="flex flex-col gap-0.5">
      <div className="flex flex-row gap-2 items-center">
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 relative pr-3 font-medium transition-colors after:absolute after:bottom-[2px] after:left-0 after:h-[1px] after:w-[calc(100%-12px)] after:origin-bottom-right after:scale-x-0 after:bg-current after:transition-transform after:duration-150 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
        >
          {name}
          <ArrowUpRight className="shrink-0 stroke-muted-foreground w-4 h-4 inline-block absolute top-0 ml-[1px]" />
        </Link>
        <span className="text-muted-foreground ml-0.5">•</span>
        <span className="text-sm text-muted-foreground">{year}</span>
      </div>
      <p className="text-secondary-foreground">{description}</p>
    </div>
  );
}
