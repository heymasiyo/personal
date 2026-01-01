import type { BreadcrumbProps } from "@/components/navigation";
import type { Post } from "@/lib/mdx";
import type { Metadata } from "next";

import Link from "next/link";

import { Navigation } from "@/components/navigation";
import { getPosts } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Thoughts",
};

const breadcrumbs: BreadcrumbProps[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Thoughts",
    href: "/thoughts",
  },
];

export default function Thoughts() {
  const posts: Post[] = getPosts("thoughts").sort((a, b) => {
    return (
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  });

  return (
    <>
      <Navigation breadcrumbs={breadcrumbs} />

      <div className="flex flex-col gap-3">
        <div className="border-b pb-6">
          <h1 className="font-medium">Thoughts</h1>
        </div>

        <div className="flex flex-col">
          {posts.length === 0 ? (
            <div className="flex flex-col gap-1.5 py-4">
              <h2 className="text-mm font-medium">
                This page is quiet for now.
              </h2>

              <p className="text-muted-foreground text-sm">
                I'll be sharing thoughts, notes, and small reflections here
                soon.
              </p>
            </div>
          ) : (
            <>
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/thoughts/${post.slug}`}
                  className="text-mm group flex flex-col gap-1.5 py-4"
                  aria-label={post.title}
                >
                  <h2 className="group-hover:text-foreground/80 font-medium">
                    {post.title}
                  </h2>

                  <span className="text-muted-foreground text-sm">
                    {formatDate(new Date(post.publishedAt))}
                  </span>
                </Link>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}
