import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-2">
      <p>Whoops! Could not find the page you were looking for.</p>
      <Link
        href="/"
        className="underline underline-offset-2 decoration-foreground/30 hover:opacity-70 transition-all"
      >
        Go back home
      </Link>
    </div>
  );
}
