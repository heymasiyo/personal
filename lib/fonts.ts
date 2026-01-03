import {
  Newsreader as FontDisplay,
  Geist_Mono as FontMono,
  Geist as FontSans,
} from "next/font/google";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const fontDisplay = FontDisplay({
  subsets: ["latin"],
  variable: "--font-display",
  style: "italic",
});

export const fontVariables = cn(
  fontSans.variable,
  fontMono.variable,
  fontDisplay.variable
);
