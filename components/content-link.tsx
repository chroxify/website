import { cn } from "@/lib/utils";
import { ArrowUpRight } from "@geist-ui/icons";
import Link from "next/link";

export default function ContentLink({
  name,
  url,
  description,
  year,
  keepTab = false,
}: {
  name: string;
  url: string;
  description: string;
  year?: string;
  keepTab?: boolean;
}) {
  return (
    <li className="flex items-center justify-center w-full gap-2 py-1">
      <Link
        href={url}
        target={!keepTab ? "_blank" : undefined}
        rel={!keepTab ? "noopener noreferrer" : undefined}
        className={cn(
          "text-foreground shrink-0 underline decoration-wavy underline-offset-4 relative decoration-1 decoration-muted transition-colors hover:decoration-foreground",
          !keepTab && "pr-3"
        )}
      >
        {name}
        {!keepTab && (
          <ArrowUpRight className="shrink-0 stroke-muted-foreground w-4 h-4 inline-block absolute top-0 ml-[1px]" />
        )}
      </Link>{" "}
      <p className="hidden sm:block text-secondary-foreground shrink-0">
        {description}
      </p>
      <hr className="w-full bg-muted rounded-full mx-1" />
      <span className="text-muted-foreground shrink-0">{year}</span>
    </li>
  );
}
