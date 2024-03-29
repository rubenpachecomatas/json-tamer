import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Providers } from "./_components/Providers";
import { Analytics } from '@vercel/analytics/react';

const onest = Onest({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JSON Tamer",
  description: "Format your JSON at any time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body
        className={cn(
          "h-svh flex flex-col items-center gap-10 pb-20 p-10 sm:p-20",
          onest.className
        )}
      >
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
