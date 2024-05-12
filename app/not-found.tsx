import Link from "next/link";

export const metadata = {
  title: "Christo Todorov | 404",
};

export default function NotFound() {
  return (
    <div className="h-full text-secondary-foreground justify-center flex flex-col gap-3">
      <span className="animate-enter delay-75">
        404 - Page not found. Looks like you&apos;re lost.
      </span>
      <Link
        href="/"
        className="text-foreground hover:underline animate-enter delay-100"
      >
        Want to go back home?
      </Link>
    </div>
  );
}
