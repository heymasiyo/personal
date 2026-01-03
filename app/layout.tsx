import "@/styles/globals.css";

import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { ThemeProvider } from "@/components/theme-provider";
import { fontVariables } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Satrio Wicaksono",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body
        className={cn(
          "bg-background text-foreground flex flex-col items-center overscroll-none font-sans antialiased",
          fontVariables
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="from-background pointer-events-none fixed inset-x-0 top-0 z-50 h-24 bg-linear-to-b to-transparent mask-b-from-25% backdrop-blur-xs select-none" />

          <div className="isolate flex min-h-svh w-full max-w-166 flex-col px-5 py-24 md:px-0">
            <div className="flex-1">{children}</div>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
