import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { Newsreader } from "next/font/google";
import { cn } from "@/lib/utils";
import Quote from "@/components/quote";
import LocalTime from "@/components/time";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Christo Todorov",
  description: "Crafting code & drawing pixels.",
  metadataBase: new URL("https://chroxify.com"),
  openGraph: {
    images: [
      {
        url: "/api/og",
        alt: "Christo Todorov",
      },
    ],
  },
};

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <Analytics />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="bg-background flex flex-col gap-10 overflow-y-auto items-center px-5 sm:px-24 h-[calc(100dvh)] selection:text-primary-foreground selection:bg-primary">
            {/* Header */}
            <div className="flex flex-col h-full w-full gap-10 max-w-2xl">
              <header className="transition-all animate-enter inline-flex flex-col pt-5 sm:pt-24 w-full">
                <Link href="/">Christo Todorov</Link>
                <span
                  className={cn(
                    newsreader.className,
                    "text-secondary-foreground "
                  )}
                >
                  Crafting code & drawing pixels.
                </span>
              </header>
              {children}
              {/* Footer */}
              <footer className="h-full w-full max-w-2xl justify-between flex items-end animate-enter delay-200 pb-5 sm:pb-24">
                <Quote />
                <LocalTime />
              </footer>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
