import type { Post } from "@/lib/mdx";

import { MDX } from "@/components/mdx";
import { estimateReadingTime, formatDate } from "@/lib/utils";

import { cn } from "@/lib/utils";

interface SitePostProps {
  post: Post;
  route: string;
}

export function SitePost({ post, route }: SitePostProps) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-1.5">
        <h1 className="font-display text-[1.625rem] leading-normal font-medium">
          {post.title}
        </h1>

        <div className="text-muted-foreground flex items-center gap-2 text-sm">
          <span>Published {formatDate(new Date(post.publishedAt))}</span>

          <span>&#8226;</span>

          <span>{estimateReadingTime(post.content)} minutes read</span>
        </div>
      </div>

      <article
        className={cn(
          "max-w-none",
          "prose prose-neutral dark:prose-invert",
          "prose-headings:font-display prose-headings:font-medium",
          "prose-h2:border-b prose-h2:pb-3.5 prose-h2:text-1xl",
          "prose-h3:text-xl",
          "prose-p:text-mm prose-p:leading-7",
          "prose-blockquote:not-italic",
          "prose-li:text-mm prose-li:leading-7"
        )}
      >
        <MDX source={post.content} />
      </article>
    </div>
  );
}
