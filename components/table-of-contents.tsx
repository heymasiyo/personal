"use client";

import * as React from "react";

type HeadingItem = {
  id: string;
  text: string;
  level: "h1" | "h2" | "h3";
};

export function TableOfContents() {
  const [headings, setHeadings] = React.useState<HeadingItem[]>([]);
  const [activeId, setActiveId] = React.useState<string | null>(null);

  const observerRef = React.useRef<IntersectionObserver | null>(null);

  React.useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLHeadingElement>("h1, h2, h3")
    ).filter((el) => el.id);

    setHeadings(
      elements.map((el) => ({
        id: el.id,
        text: el.textContent ?? "",
        level: el.tagName.toLowerCase() as HeadingItem["level"],
      }))
    );

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

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    window.scrollTo({
      top: element.offsetTop - 100,
      behavior: "smooth",
    });
  };
}
