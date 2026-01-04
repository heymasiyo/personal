"use client";

import { AnimatePresence, motion } from "motion/react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type HeadingItem = {
  id: string;
  text: string;
  level: "h2" | "h3";
};

export function TableOfContents() {
  const [headings, setHeadings] = React.useState<HeadingItem[]>([]);
  const [activeId, setActiveId] = React.useState<string | null>(null);
  const [progress, setProgress] = React.useState(0);

  const observerRef = React.useRef<IntersectionObserver | null>(null);

  React.useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLHeadingElement>("h2, h3")
    ).filter((el) => el.id);

    const collectedHeadings: HeadingItem[] = elements.map((el) => ({
      id: el.id,
      text: el.textContent ?? "",
      level: el.tagName.toLowerCase() as HeadingItem["level"],
    }));

    setHeadings(collectedHeadings);

    if (collectedHeadings.length > 0) {
      setActiveId((prev) => prev ?? collectedHeadings[0].id);
    }

    observerRef.current?.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-80px 0px -60% 0px",
        threshold: 0,
      }
    );

    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const value = docHeight > 0 ? scrollTop / docHeight : 0;
      setProgress(Math.min(1, value));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeHeading = headings.find((heading) => heading.id === activeId);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    window.scrollTo({
      top: element.offsetTop - 100,
      behavior: "smooth",
    });
  };

  const dashOffset = 100 - progress * 100;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className={cn(
            "fixed bottom-10 left-1/2 z-50 h-10 w-75 -translate-x-1/2",
            "bg-neutral-700 text-white",
            "rounded-full px-2 shadow-xl",
            "transition-colors hover:bg-neutral-800",
            activeHeading
              ? "visible"
              : "pointer-events-none invisible select-none"
          )}
        >
          <div className="size-6 shrink-0 rounded-full border-3 border-neutral-500 bg-orange-500" />

          <AnimatePresence mode="wait">
            <motion.p
              key={activeHeading?.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="flex-1 truncate text-left text-sm leading-none"
            >
              {activeHeading?.text}
            </motion.p>
          </AnimatePresence>

          <div className="size-6 shrink-0">
            <svg
              className="size-full -rotate-90"
              viewBox="0 0 36 36"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                className="stroke-current text-white/50"
                strokeWidth="4"
              />
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                className="stroke-current text-white"
                strokeWidth="4"
                strokeDasharray="100"
                strokeLinecap="round"
                strokeDashoffset={dashOffset}
              />
            </svg>
          </div>
        </Button>
      </DialogTrigger>

      <DialogContent className="rounded-xl sm:max-w-106.25">
        <DialogTitle className="text-xs tracking-[0.28em] uppercase">
          On this page
        </DialogTitle>

        <DialogDescription className="sr-only" />

        <ul className="mt-2 mb-1 flex flex-col gap-2.5">
          {headings.map((heading) => (
            <li key={heading.id}>
              <DialogClose asChild>
                <button
                  type="button"
                  onClick={() => scrollToHeading(heading.id)}
                  data-active={heading.id === activeId}
                  className={cn(
                    "text-muted-foreground text-sm font-medium",
                    heading.id === activeId && "text-foreground",
                    heading.level === "h3" && "border-l-2 pl-4",
                    "hover:text-foreground transition-colors"
                  )}
                >
                  {heading.text}
                </button>
              </DialogClose>
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
}
