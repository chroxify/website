import { ArrowUpRight } from "lucide-react";

export default function Social({ name, url }: { name: string; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-foreground flex group relative shrink-0 py-1 gap-[1px] px-2.5 rounded-full bg-secondary text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
    >
      {name}
      <div className="relative h-4 w-4 overflow-hidden">
        <div className="absolute transition-transform group-hover:-translate-y-4 group-hover:translate-x-3">
          <ArrowUpRight className="h-4 w-4 stroke-muted-foreground" />
          <ArrowUpRight className="h-4 w-4 -translate-x-3" />
        </div>
      </div>
    </a>
  );
}
