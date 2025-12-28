import {
  Crimson_Pro as FontDisplay,
  JetBrains_Mono as FontMono,
  Inter as FontSans,
} from "next/font/google";
import { cn } from "./utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const fontHeading = FontDisplay({
  subsets: ["latin"],
  variable: "--font-display",
  style: "italic",
});

export const fontVariables = cn(
  fontSans.variable,
  fontMono.variable,
  fontHeading.variable
);
