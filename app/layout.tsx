import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";

export const revalidate = 0;

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
      <body className={GeistSans.className}>
        <Analytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
        >
          <main className="bg-background flex flex-col gap-10 items-center justify-between px-5 sm:px-24 h-[calc(100dvh)] selection:text-primary-foreground selection:bg-primary">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
