import {
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

export const fontVariables = cn(fontSans.variable, fontMono.variable);
