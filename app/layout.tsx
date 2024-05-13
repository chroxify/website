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
          <div className="bg-background flex overflow-y-auto items-center px-5 gap-3 sm:px-24 h-[calc(100dvh)] justify-center selection:text-primary-foreground selection:bg-primary">
            {/* Max width container */}
            <div className="flex flex-col h-full w-full gap-10 max-w-2xl">
              {/* Header */}
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
              <main className="flex flex-col gap-10 w-full h-full">
                {children}
              </main>
              {/* Footer */}
              <footer className="h-fit w-full max-w-2xl justify-between flex items-end animate-enter delay-200 pb-5 sm:pb-24">
                <Quote />
                <LocalTime />
              </footer>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
