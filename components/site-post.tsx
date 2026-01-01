import type { Post } from "@/lib/mdx";

import { MDX } from "@/components/mdx";
import { estimateReadingTime, formatDate } from "@/lib/utils";

interface SitePostProps {
  post: Post;
  route: string;
}

export function SitePost({ post, route }: SitePostProps) {
  return (
    <div className="flex flex-col gap-9">
      <div className="flex flex-col gap-1.5">
        <h1 className="font-display text-1xl font-medium">{post.title}</h1>

        <div className="text-muted-foreground flex items-center gap-2 text-sm">
          <span>Published {formatDate(new Date(post.publishedAt))}</span>

          <span>&#8226;</span>

          <span>{estimateReadingTime(post.content)} minutes read</span>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <MDX source={post.content} />
      </div>
    </div>
  );
}
