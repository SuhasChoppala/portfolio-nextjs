import type { Metadata } from "next";
import { base, heading } from "@/constants/fonts";
import "../styles/globals.css";
import { cn } from "@/lib";

export const metadata: Metadata = {
  title: "Suhas Choppala",
  description: "Next js Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen text-foreground font-base antialiased dark max-w-5xl mx-auto px-4 sm:px-3 lg:px-8",
          base.variable,
          heading.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
