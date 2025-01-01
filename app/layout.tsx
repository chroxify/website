import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { getLastVisitor, logVisit } from "@/lib/tinybird";
import { Clock } from "@/components/clock";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Christo Todorov",
  description: "Design engineer based in Berlin, Germany.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  logVisit();
  const lastVisitor = await getLastVisitor();

  return (
    <html lang="en">
      <body
        className={`${geistSans.className} ${geistMono.variable} antialiased selection:bg-foreground/[7%]`}
      >
        <div className="grid grid-rows-[20px_1fr_20px] text-sm items-center justify-items-center min-h-screen p-4 py-20 sm:p-20 max-w-screen-md mx-auto w-full h-full md:border-x">
          <header className="flex flex-row gap-2 flex-wrap items-start justify-between w-full">
            <Link href="/">
              <h1 className="font-semibold text-lg">Christo Todorov</h1>
            </Link>
          </header>
          <main className="w-full h-full flex flex-col gap-12 mt-20">
            {children}
          </main>
          <footer className="row-start-3 text-[13px] flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between w-full text-muted-foreground">
            <span>
              Last visitor from {lastVisitor?.city}, {lastVisitor?.country} (#
              {lastVisitor?.total_visits})
            </span>

            <Clock />
          </footer>
        </div>
      </body>
    </html>
  );
}
