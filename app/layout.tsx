import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          GeistSans.className,
          "bg-background flex flex-col gap-10 items-center justify-between p-5 sm:px-24 h-[calc(100dvh)] selection:text-primary-foreground selection:bg-primary"
        )}
      >
        <Analytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
