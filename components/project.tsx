export default function Project({
  name,
  url,
  description,
  year,
}: {
  name: string;
  url: string;
  description: string;
  year: string;
}) {
  return (
    <li className="flex items-center justify-center w-full gap-2 py-1">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground shrink-0 underline decoration-wavy underline-offset-4 decoration-1 decoration-muted-foreground transition-colors hover:decoration-foreground"
      >
        {name}
      </a>{" "}
      <p className="hidden sm:block text-secondary-foreground shrink-0">
        {description}
      </p>
      <hr className="w-full bg-muted rounded-full mx-1" />
      <span className="text-muted-foreground shrink-0">{year}</span>
    </li>
  );
}
