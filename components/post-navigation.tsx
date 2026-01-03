"use client";

import type { Post } from "@/lib/mdx";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

interface PostNavigationProps {
  posts: Post[];
}

export function PostNavigation({ posts }: PostNavigationProps) {
  const pathname = usePathname();
  const currentSlug = pathname.split("/").pop();

  const sortedPosts = React.useMemo(() => {
    return [...posts].sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  }, [posts]);

  const currentIndex = React.useMemo(() => {
    return sortedPosts.findIndex((post) => post.slug === currentSlug);
  }, [sortedPosts, currentSlug]);

  const previousPost =
    currentIndex !== -1 && currentIndex < sortedPosts.length - 1
      ? sortedPosts[currentIndex + 1]
      : null;

  const nextPost = currentIndex > 0 ? sortedPosts[currentIndex - 1] : null;

  if (!previousPost && !nextPost) {
    return null;
  }

  return (
    <div className="flex w-full justify-between border-t pt-12">
      {previousPost && (
        <Link
          href={`${previousPost.slug}`}
          className="group flex w-full flex-col gap-1 text-left"
        >
          <span className="text-muted-foreground text-[0.8125rem] leading-normal">
            Previous
          </span>

          <span className="text-foreground/90 text-mm group-hover:text-foreground/70 line-clamp-2 font-medium">
            {previousPost.title}
          </span>
        </Link>
      )}

      {nextPost && (
        <Link
          href={`${nextPost.slug}`}
          className="group flex w-full flex-col gap-1 text-right"
        >
          <span className="text-muted-foreground text-[0.8125rem] leading-normal">
            Next
          </span>

          <span className="text-foreground/90 text-mm group-hover:text-foreground/70 line-clamp-2 font-medium">
            {nextPost.title}
          </span>
        </Link>
      )}
    </div>
  );
}
